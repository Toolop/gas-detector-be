/* eslint-disable react/jsx-key */
import { Text, Flex } from "@chakra-ui/react";
import { TabTitle } from "../utils/utility";
import { useState, useEffect } from "react";
import axios from "axios";
import { room, sensor } from "../utils/api";
import BatteryComponent from "../components/battery";
import { Link } from "react-router-dom";

const Battery = () => {
  const [data, setData] = useState([]);
  const [dataSensor, setSensorData] = useState([]);
  const getData = async () => {
    await axios(`${room.get + 1}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setData(res.data);
    });
  };
  const getSensor = async () => {
    await axios(`${sensor.get + 1}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      setSensorData(res.data);
    });
  };
  const checkToken = () => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
    }
  };
  useEffect(() => {
    checkToken();
    getData();
    getSensor();
  }, []);
  TabTitle("Battery - Gas Detector Monitoring");
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
              justify={"center"}
              overflowY="hidden"
              overflowX={"hidden !important"}
            >
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
                display={{ base: "flex", sm: "flex", md: "flex" }}
                width=""
                height={"65vh"}
              >
                {dataSensor
                  .filter((item) => item.sensorTypeId == 2)
                  .map((item) => (
                    <Link to={`/battery/sensor/${item.id}`}>
                      <BatteryComponent
                        id={item.id}
                        name={item.name}
                        from={"battery"}
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

export default Battery;
