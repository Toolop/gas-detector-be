/* eslint-disable react/jsx-key */
import { Flex,Table,Tr,Td,Text, Button, Select } from "@chakra-ui/react";
import { TabTitle } from "../utils/utility";
import { room,sensor,condition } from "../utils/api";
import GrafikData from "../components/grafik";
import axios from "axios";
import { Formik } from 'formik';
import infoGrafik from '../utils/grafikDropDown';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
const Grafik = () => {
  TabTitle('Grafik - Gas Detector Monitoring')
  const { id } = useParams()
  const [data,setData] = useState([])
  const [dataCondition, setCondition] = useState('');
  const [dataSensor, setSensorData] = useState([])
  const [idRoom, setIdRoom] = useState([])
  const [dataGrafik, setDataGrafik] = useState('Week')
  console.log(dataGrafik)
  const getSensors = async () => {
    await axios(`${sensor.detail + id}`)
    .then((res) => {
      setSensorData(res.data)
      setIdRoom(res.data.roomId)
    })
  }

  const getRoom = async () => {
    await axios(`${room.get + idRoom}`)
    .then((res) => {
      setData(res.data[0])
    })
  }

  const getCondition = async () => {
    await axios(`${condition.get + id}`)
    .then((res) => {
      console.log(res.data)
      setCondition(res.data)
    })
  }

  useEffect(() => {
    getSensors()
    getRoom()
    getCondition()
  }
  ,[])


  return (
    <>
    <Flex flexDirection={'column'} width={'99%'} h={'98%'}>
      <Flex display={{base:'flex',sm:'flex',md:'none'}} h={{base:'30%'}}  w={{base:'100%'}}>
      <Table>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Room
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {data.name}
              </Text>
            </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Sensor
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}> 
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataSensor.name}
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Bawah Warning
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.lowerWarning}  
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Atas Warning
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.upperWarning}  
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Bawah Danger
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.lowerDanger}  
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Atas Danger
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{base:2}} paddingY={{base:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.upperDanger}  
              </Text>
              </Td>
          </Tr>
      </Table>
      </Flex>
      <Flex display={{base:'none',sm:'none',md:'flex'}} >
      <Flex mr='1%' display={{base:'none',sm:'none',md:"block"}}>
      <Table display={{base:'none',sm:'none',md:"block"}}>
          <Tr>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Room
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {data.name}
              </Text>
            </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Sensor
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}> 
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataSensor.name}
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Bawah Warning
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.lowerWarning}  
              </Text>
              </Td>
          </Tr>
      </Table>
      </Flex>
      <Flex  display={{base:'none',sm:'none',md:"block"}}>
      <Table display={{base:'none',sm:'none',md:"block"}}>
          <Tr >
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Atas Warning
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.upperWarning}  
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Bawah Danger
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.lowerDanger}  
              </Text>
              </Td>
          </Tr>
          <Tr >
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                Batas Atas Danger
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                :
              </Text>
            </Td>
            <Td lineHeight={{md:2}} paddingY={{md:0}}>
              <Text fontSize={{base:'10px',md:'14px'}}>
                {dataCondition.upperDanger}  
              </Text>
              </Td>
          </Tr>
      </Table>
      </Flex>
      <Button >
        <Text>
          Ubah Set Point
        </Text>
      </Button>
      </Flex>
      <Flex my={'1%'} h={'5%'} >
      <Formik
						initialValues={{
							value: dataGrafik,
						}}
						onSubmit={(values) => {
							setDataGrafik(values.value);
						}}>
						{({
							values,
							handleSubmit,
							setFieldValue,
						}) => (
							<form onSubmit={handleSubmit}>
								<Flex >
								<Flex>
									<Select
										onChange={(e) => {
											setFieldValue('value', e.target.value);
											setDataGrafik(e.target.value)
										}}
										size="sm"
										borderRadius={"10"}
										name="grafik"
										value={values.value}
										width={"100%"}
										bg={"white"}
										_active={{ bg: "white" }}
										borderColor={"var(--color-border)"}
										fontSize={"var(--header-5)"}
										fontWeight={"normal"}
										color={"var(--color-primer)"}
										_hover={{ borderColor: "var(--color-border)" }}
										_focusWithin={{ borderColor: "var(--color-border)" }}>
										{infoGrafik.map((item, index) => {
											return (
												<option
													color={"var(--color-border)"}
													key={index}
													value={item.value}>
													Data {item.name}
												</option>
											);
										})}
									</Select>
								</Flex>
								</Flex>
							</form>
						)}
					</Formik>
      </Flex>
      <Flex mt={'1%'} h={'75%'} bg={'blue'}>
        <GrafikData 
          data={dataGrafik}
           />
      </Flex>
    </Flex>
    </>
  );
};

export default Grafik;