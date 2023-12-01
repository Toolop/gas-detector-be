/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
import { 	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useDisclosure,
  Flex,Table,Tr,Td,Text, Button, Select, Input } from "@chakra-ui/react";
import { TabTitle } from "../utils/utility";
import { room,sensor,condition } from "../utils/api";
import GrafikData from "../components/grafik";
import axios from "axios";
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import infoGrafik from '../utils/grafikDropDown';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
const Grafik = () => {
  TabTitle('Grafik - Gas Detector Monitoring')
  const { id } = useParams()
	const { isOpen, onOpen, onClose } = useDisclosure()
  const [data,setData] = useState([])
  const [dataCondition, setCondition] = useState('');
  const [dataSensor, setSensorData] = useState([])
  const [idRoom, setIdRoom] = useState([])
  const [dataGrafik, setDataGrafik] = useState('Week')
  const getSensors = async () => {
    await axios(`${sensor.detail + id}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then((res) => {
      setSensorData(res.data)
      setIdRoom(res.data.roomId)
    })
  }
  const schema = Yup.object({
    lowerWarning: Yup.number().required('Required'),
    upperWarning: Yup.number().required('Required'),
    lowerDanger: Yup.number().required('Required'),
    upperDanger: Yup.number().required('Required'),
  })
  const getRoom = async () => {
    await axios(`${room.detail + idRoom}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then((res) => {
      setData(res.data)
    })
  }
  const checkToken = () => {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login'
    }
  }
  const getCondition = async () => {
    await axios(`${condition.get + id}`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
      }
    })
    .then((res) => {
      setCondition(res.data)
    })
  }
  


  useEffect(() => {
    getSensors()
    checkToken()
    getRoom()
    getCondition()
  }
  ,[])
  return (
    <>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{base:"md",md:'xl'}}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Ubah Set Point</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection={'column'} width={'100%'} h={'100%'}>
          <Flex  w={'100%'} h={'5%'} >
          <Formik
            initialValues={{
              lowerWarning: dataCondition.lowerWarning,
              upperWarning: dataCondition.upperWarning,
              lowerDanger: dataCondition.lowerDanger,
              upperDanger: dataCondition.upperDanger,
            }}
            validationSchema={schema}
            validateOnChange={false}
            enableReinitialize={true}
            validateOnBlur={false}
            onSubmit={(values,{setSubmitting}) => {
              setTimeout(() => {
                axios.put(`${condition.put + id}`, {
                  lowerWarning: values.lowerWarning,
                  upperWarning: values.upperWarning,
                  lowerDanger: values.lowerDanger,
                  upperDanger: values.upperDanger,
                }, {
                  headers: { 
                    "Content-Type": "application/x-www-form-urlencoded",
                    'Authorization': 'Bearer ' + localStorage.getItem('token') 
                  }
                })
              .then((res) => {
                if (res.status === 201) {
                  alert('Data berhasil diubah')
                  onClose()
                  setCondition({
                    lowerWarning: values.lowerWarning,
                    upperWarning: values.upperWarning,
                    lowerDanger: values.lowerDanger,
                    upperDanger: values.upperDanger,
                  });
                }
                else {
                  alert('Data gagal diubah')
                }
              }
              )
              .catch((err) => {
                console.log(err)
              })
              setSubmitting(false)
            },500 )
            }
            }
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleBlur,
              handleChange,
            }) => (
              <Form method="PUT" onSubmit={handleSubmit}>
                <FormControl
                  isInvalid={
                    errors.lowerWarning && touched.lowerWarning
                  }
                >
                  <FormLabel fontSize={{base:'10px',md:'14px'}} htmlFor="lowerWarning">Batas Bawah Warning</FormLabel>
                  <Flex>
                  <Input
                    type="number"
                    name="lowerWarning"
                    value={values.lowerWarning}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    id="lowerWarning"
                    variant={'outline'}
                    placeholder="Batas Bawah Warning"
                  />
                  </Flex>
                  <FormErrorMessage fontSize={{base:'10px',md:'14px'}}>{errors.lowerWarning}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    errors.upperWarning && touched.upperWarning
                  }
                >
                  <FormLabel fontSize={{base:'10px',md:'14px'}} htmlFor="upperWarning">Batas Atas Warning</FormLabel>
                  <Flex>
                  <Input
                    type="number"
                    name="upperWarning"
                    value={values.upperWarning}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    id="upperWarning"
                    variant={'outline'}
                    placeholder="Batas Atas Warning"
                  />
                  </Flex>
                  <FormErrorMessage fontSize={{base:'10px',md:'14px'}}>{errors.upperWarning}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    errors.lowerDanger && touched.lowerDanger
                  }
                >
                  <FormLabel fontSize={{base:'10px',md:'14px'}} htmlFor="lowerDanger">Batas Bawah Danger</FormLabel>
                  <Flex>
                  <Input
                    type="number"
                    name="lowerDanger"
                    value={values.lowerDanger}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    id="lowerDanger"
                    variant={'outline'}
                    placeholder="Batas Bawah Danger"
                  />
                  </Flex>
                  <FormErrorMessage fontSize={{base:'10px',md:'14px'}}>{errors.lowerDanger}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    errors.upperDanger && touched.upperDanger
                  }
                >
                  <FormLabel fontSize={{base:'10px',md:'14px'}} htmlFor="upperDanger">Batas Atas Danger</FormLabel>
                  <Flex>
                  <Input
                    type="number"
                    name="upperDanger"
                    value={values.upperDanger}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="form-control"
                    id="upperDanger"
                    variant={'outline'}
                    placeholder="Batas Atas Danger"
                  />
                  </Flex>
                  <FormErrorMessage fontSize={{base:'10px',md:'14px'}}>{errors.upperDanger}</FormErrorMessage>
                </FormControl>
                <Flex my={'5%'} flexDirection={'row'} width={'100%'} >
                    <Button
                      colorScheme="blue"
                      mr={3}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Simpan
                    </Button>
                    <Button variant="ghost" onClick={onClose}>
                      Batal
                    </Button>
                  </Flex>
              </Form>
            )}
          </Formik>
          </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
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
      
      </Flex>
      <Flex mt={'1%'}  h={'5%'} >
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
                    setDataGrafik(e.target.value);
                  }}
                  size={{ base: 'xs', md: 'sm' }}
                  borderRadius={"10"}
                  name="grafik"
                  value={values.value}
                  width={"100%"}
                  bg={"white"}
                  borderColor={"var(--color-border)"}
                  fontSize={"var(--header-5)"}
                  fontWeight={"normal"}
                  color={"var(--color-primer)"}
                  _hover={{ borderColor: "var(--color-border)" }}
                  _focusWithin={{ borderColor: "var(--color-border)" }}
                >
                  {infoGrafik.map((item, index) => {
                    return (
                      <option
                        color={"var(--color-border)"}
                        key={index}
                        value={item.value}
                      >
                        Data {item.name}
                      </option>
                    );
                  }
                  )}
                </Select>
                </Flex>
                <Flex ml={'1%'} >
								<Button 
                  size={{ base: 'xs', md: 'sm' }}
                  borderRadius={"10"}
                  bg={"white"}
                  border={"1px solid black"}
                  onClick={onOpen}
                >
                  <Text>
                    Ubah Set Point
                  </Text>
                </Button>
                </Flex>
								</Flex>
							</form>
						)}
					</Formik>
      </Flex>
        <GrafikData 
          dataValue={dataGrafik}
          id={id}
           />
    </Flex>
    </>
  );
};

export default Grafik;