/* eslint-disable react/prop-types */
import { Text,Flex } from "@chakra-ui/react";
import { brokerSensor } from "../utils/api";
import axios from "axios";
import { MdBatteryFull,MdBattery90,MdBattery80,MdBattery60,MdBattery50,MdBattery30,MdBattery20 } from "react-icons/md";
import { useState, useEffect } from "react";

const BatteryComponent = (
  {
    id,name, from
  }
) => {
  const [data, setData] = useState('');
  const [firstCheck, setFirstCheck] = useState(true);

  
  const getValueRefreshFirst = async () => {
    try {
      const response = await axios.get(`${brokerSensor.get + id}`,{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        }
      });
      setData(response.data[0].value);
    } catch (error) {
      console.error(error);
    }
  }

  const getValueRefreshSecond = async () => {
    try {
      const response = await axios.get(`${brokerSensor.get + id}`,{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        }
      });
      setData(response.data[0].value);
    } catch (error) {
      console.error(error);
    }
  }

  const onRefreshUpdate = () => {
    if (firstCheck) {
      getValueRefreshFirst();
      setFirstCheck(false);
    } else {
      getValueRefreshSecond();
      setFirstCheck(true);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(onRefreshUpdate, 10000);

    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <>
    {
      from === 'room' ?
      <Flex pt={{base:'5%',md:'2%'}} height={{base:'27.5vh',md:'50vh'}} flexDir={'column'} alignItems={'center'} h={'100%'} w={{base:'10VW', md:'5vw'}} bg='#2B2B2B'>
                {
                  data <= 20 ?
                  <MdBattery20 size={'30px'} color={ data <= 15 ? "red" : "white"}/> :
                  data <= 30 ?
                  <MdBattery30 size={'30px'} color={'white'}/> :
                  data <= 50 ?
                  <MdBattery50 size={'30px'} color={'white'}/> :
                  data <= 60 ?
                  <MdBattery60 size={'30px'} color={'white'}/> :
                  data <= 80 ?
                  <MdBattery80 size={'30px'} color={'white'}/> :
                  data <= 90 ?
                  <MdBattery90 size={'30px'} color={'white'}/> :
                  <MdBatteryFull size={'30px'} color={'white'}/>
                }
                <Text color='white' fontSize={'18px'} fontWeight={'semibold'}>{data}</Text>
      </Flex>
      :
      from === 'battery' ?
      <Flex justify={'space-evenly'} alignContent={'center'} flexDir={{base:'column',md:'row'}} alignItems={'center'} w={{base:'92vw', md:'95vw'}} height={'100%'} bg='#2B2B2B'>
      <Text fontWeight={'semibold'} fontSize={{base:'40px',md:'80px'}} color={'white'}>{name}</Text>
      <Text color='white' fontSize={{base:'130px',md:'150px', lg:'200px'}} fontWeight={'semibold'}>{data}%</Text>
    </Flex>
    :
    <></>
    }
    </>
  );
};

export default BatteryComponent;