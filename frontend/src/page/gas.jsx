/* eslint-disable react/jsx-key */
import { Flex,Text } from "@chakra-ui/react";
import { TabTitle } from "../utils/utility";
import { useState,useEffect } from "react";
import { room,sensor } from "../utils/api";
import axios from "axios";
import { SimpleGrid } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import GasComponent from "../components/gas";
import LegendaComponent from "../components/legenda";
const Gas = () => {

  const [data,setData] = useState([])
  const [dataSensor, setSensorData] = useState([])

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
    checkToken()
    getData()
    getSensor()
  }
  ,[])
  TabTitle('Gas - Gas Detector Monitoring')
  return (
    <>
    {
      data.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Flex
          width={'98%'}
          height={'78vh'}
          flexDirection="column"
          overflowY="hidden"
          overflowX={'hidden !important'} 
          >
              <LegendaComponent />
              <Flex  border={'1px solid black'} height={'10vh'}  alignItems={'center'} justify={'center'} bg={'#EBEBEB'}>
                <Text  fontSize={'32px'} fontWeight={'semibold'}>{item.name}</Text>
              </Flex>
              <SimpleGrid spacing={0} columns={{base:2,md:3}}>
              {
                dataSensor.filter(item => item.sensorTypeId === 3).map((item) => (
                  <Link to={`/gas/sensor/${item.id}`}>
                 <GasComponent id={item.id} name={item.name} from={'gas'} />
               </Link>
                ))
              }
              </SimpleGrid>
        </Flex>
        )
      })
    }
    </>
  );
};

export default Gas;