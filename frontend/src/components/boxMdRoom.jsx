/* eslint-disable react/prop-types */
import { Text, Flex } from "@chakra-ui/react";
import { condition,brokerSensor } from "../utils/api";
import axios from "axios";
import { useState, useEffect } from "react";

const Environment = ({ name, id }) => {
  const [conditionSensor, setCondition] = useState('');
  const [data, setData] = useState('');
  const [firstCheck, setFirstCheck] = useState(true);

  const getCondition = async () => {
    try {
      const response = await axios.get(`${condition.get + id}`,{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token') 
        }
      });
      setCondition(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
    getCondition();
    const intervalId = setInterval(onRefreshUpdate, 10000);

    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <>
  <Flex
    bg={data <= conditionSensor.lowerWarning && data >= conditionSensor.lowerDanger || data >= conditionSensor.upperWarning && data <= conditionSensor.upperDanger ? '#dbdb31' : data <= conditionSensor.lowerDanger || data >= conditionSensor.upperDanger ? '#FF0000' : '#2B2B2B'}
    flexDir={'column'}
    height={{base:'27.5vh',md:'50vh'}}
    width={{ base: '100%', sm: '100%', md: '45vw' }}
    justify={'center'}
    alignItems={'center'}
    alignContent={'center'}
    borderRight={'1px solid black'}
  >
    <Text color='white' fontSize={{ base: '30px', sm: '30px', md: "50px" }} fontWeight={'semibold'}>
      {name}
    </Text>
    <Text color='white' fontSize={{ base: '60px', sm: '60px', md: "100px" }} fontWeight={'semibold'}>
      {data}
    </Text>
  </Flex>
    </>
  );
};

export default Environment;