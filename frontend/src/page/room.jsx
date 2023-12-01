/* eslint-disable react/jsx-key */
import { Text, Flex } from "@chakra-ui/react";
import { TabTitle } from "../utils/utility";
import { useState, useEffect } from "react";
import axios from "axios";
import { room, sensor } from "../utils/api";
import LegendaComponent from "./../components/legenda";
import Environment from "../components/boxMdRoom";
import GasComponent from "../components/gas";
import BatteryComponent from "../components/battery";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Room = () => {
  const [data, setData] = useState([]);
  const [dataSensor, setSensorData] = useState([]);
  const getData = async () => {
    await axios(`${room.get + 1}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then((res) => {
      setData(res.data)
    })
  }
  const getSensor = async () => {
    await axios(`${sensor.get + 1}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then((res) => {
      setSensorData(res.data)
    })
  }
  const checkToken = () => {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login'
    }
  }
  useEffect(() => {
    getData()
    checkToken()
    getSensor()
  }
  ,[])
  TabTitle('Room - Gas Detector Monitoring')
  return (
    <>
      {data.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <>
            <Flex
              width={{ base: "92vw", md: "95vw" }}
              height={"78vh"}
              flexDirection="column"
              overflowY="hidden"
              overflowX={"hidden !important"}
            >
              <LegendaComponent />
              <Flex
                border={"1px solid black"}
                height={"10vh"}
                alignItems={"center"}
                justify={"center"}
                bg={"#EBEBEB"}
              >
                <Text fontSize={"32px"} fontWeight={"semibold"}>
                  {item.name}
                </Text>
              </Flex>
              <Flex
                display={{ base: "none", sm: "none", md: "flex" }}
                width="100%"
                height={"50vh"}
                flexDir={{ md: "row" }}
              >
                {dataSensor
                  .filter((item) => item.sensorTypeId == 1)
                  .map((item) => (
                    <Link to={`/room/sensor/${item.id}`}>
                      <Environment id={item.id} name={item.name} />
                    </Link>
                  ))}
                {dataSensor
                  .filter((item) => item.sensorTypeId == 2)
                  .map((item) => (
                    <Link to={`/battery/sensor/${item.id}`}>
                      <BatteryComponent id={item.id} from={"room"} />
                    </Link>
                  ))}
              </Flex>
              <Flex
                display={{ base: "flex", sm: "flex", md: "none" }}
                width="100%"
                height={"55vh"}
                flexDir={{ base: "row", sm: "row" }}
              >
                <Flex flexDir={"column"} h={"100%"} w={"85vw"}>
                  {dataSensor
                    .filter((item) => item.sensorTypeId == 1)
                    .map((item) => (
                      <Link to={`/battery/sensor/${item.id}`}>
                        <Environment id={item.id} name={item.name} />
                      </Link>
                    ))}
                </Flex>
                {dataSensor
                  .filter((item) => item.sensorTypeId == 2)
                  .map((item) => (
                    <Link to={`/battery/sensor/${item.id}`}>
                      <BatteryComponent id={item.id} from={"room"} />
                    </Link>
                  ))}
              </Flex>
              <Flex
                alignItems={"center"}
                alignContent={"center"}
                width={{ base: "92vw", md: "95vw" }}
                height={{ base: "8vh", md: "13vh" }}
                flexDir={{ md: "row" }}
              >
                {dataSensor
                  .filter((item) => item.sensorTypeId == 3)
                  .map((item) => (
                    <Link to={`/gas/sensor/${item.id}`}>
                      <GasComponent
                        from={"room"}
                        id={item.id}
                        name={item.name}
                      />
                    </Link>
                  ))}
              </Flex>
            </Flex>
          </>
        );
      })}
    </>
  );
};

export default Room;
