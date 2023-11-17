/* eslint-disable react/prop-types */
import { Text,Flex } from "@chakra-ui/react";
import { brokerSensor,condition } from "../utils/api";
import axios from "axios";
import { useState, useEffect } from "react";
const GasComponent = (
  {
    from,
    name,
    id
  }
) => {
  const [conditionSensor, setCondition] = useState(''); 
  const [data, setData] = useState('');
  const [firstCheck, setFirstCheck] = useState(true);

  const getCondition = async () => {
    try {
      const response = await axios.get(`${condition.get + id}`);
      setCondition(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  console.log(conditionSensor)
  const getValueRefreshFirst = async () => {
    try {
      const response = await axios.get(`${brokerSensor.get + id}`);
      setData(response.data[0].value);
    } catch (error) {
      console.error(error);
    }
  }

  const getValueRefreshSecond = async () => {
    try {
      const response = await axios.get(`${brokerSensor.get + id}`);
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
    getCondition();
    const intervalId = setInterval(onRefreshUpdate, 10000);

    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <>
    {
      from == 'room' ?
      <Flex key={id} bg={  data <= conditionSensor.lowerWarning && data >= conditionSensor.lowerDanger || data >=  conditionSensor.upperWarning && data <= conditionSensor.upperDanger  ? '#dbdb31' :   data <= conditionSensor.lowerDanger || data >=  conditionSensor.upperDanger  ? '#FF0000' :'#EBEBEB'} justify={'center'} alignItems={'center'} height={{ base: '8vh', md: '13vh' }} width={{base:'15.3333333333vw',md:'15.8333333333vw'}} border={'1px solid black'}> 
         <Text fontSize={{base:'15px',md:'40px'}} fontWeight={{base:'semibold',md:'bold'}}>{name}</Text>
      </Flex>
      :
      from == 'gas' ?
      <Flex
                  height={{base:'21vh',md:'31vh'}}
                  justify={'space-evenly'}
                  alignItems={'center'}
                  width="100%"
                  flexDir={'column'}
                  border={'1px solid black'}
                  bg={data <= conditionSensor.lowerWarning && data >= conditionSensor.lowerDanger || data >= conditionSensor.upperWarning && data <= conditionSensor.upperDanger ? '#dbdb31' : data <= conditionSensor.lowerDanger || data >= conditionSensor.upperDanger ? '#FF0000' : '#EBEBEB'}
                >
                  <Flex width={{base:'80%', md:'50%'}} justify={'flex-start'}>
                    <Text fontSize={{ base: '40px', md: '50px',lg:'30px',xl:'40px' }} fontWeight={{ base: 'semibold', md: 'semibold' }}>{name}</Text>
                  </Flex>
                  <Flex width={{base:'80%', md:'50%'}} justify={'flex-end'}>
                    <Text fontSize={{ base: '50px', md: '70px',lg:'50px',xl:'70px' }} fontWeight={{ base: 'semibold', md: 'bold' }}>{data}</Text>
                  </Flex>
                  </Flex>
      :
      <></>
    }
    </>
  );
};

export default GasComponent;