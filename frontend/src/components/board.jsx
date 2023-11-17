import { useState,useEffect } from "react"
import { Flex, Text, Image } from "@chakra-ui/react"
import { Outlet, NavLink, useLocation } from "react-router-dom";
import './navbar.css'
const Board = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  

	return (
		<Flex flexDir={'column'} width="100%" height={'100vh'} overflowY="hidden">
     <Flex 
          align={"center"}
          height={"15vh"}
          bg={'white'}
          blur={4}
          width={"100vw"}
          maxWidth={"100vw"}
          justify={'left'}
          alignItems={"center"}
          flexDir={"row"}
          alignContent={"center"}
          pl={"2%"}
          pr={"2%"}
          display={{ base: "flex", md: "flex", lg: "flex" }}
        >
          <Flex>
            <Image src={"/logo.png"} alt="logo" mt={{base:0}} maxH={{base:"80px"}}/>
          </Flex>
          <Flex
            flexDir={'column'}
            justify={'space-between'}
            ml={{base:'10px',md:'15px',lg:'45px'}}
          >
            <Flex>
              <Text fontWeight={'medium'} fontSize={{base:"var(--header-4)",sm:"var(--header-3)",md:"var(--header-2)"}}> GAS DETECTOR MONITORING</Text> 
            </Flex>
            <Flex mt={{base:0,md:0,lg:1}} >
              <Text fontWeight={'regular'} letterSpacing={1} fontSize={{base:"var(--header-6)",md:"var(--header-5)",lg:"var(--header-5)"}}> SUCOFINDO LABORATORIUM CIBITUNG</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex  height={{base:'85vh',sm:'85vh'}} flexDir={'column'} alignSelf={'center'} alignItems={'center'} alignContent={'center'} justify={'center'} width={'96%'}>
        <Flex mt={{base:'0%',sm:'0%',md:'0%',lg:'0%'}} height={'5vh'} width={'100%'} flexDir={'row'}>
        <Flex 
          width={{base:'20%',md:'10%',lg:'5%'}}
          justifyContent={'center'}
          borderTop={'2px black solid'}
          borderBottom={'1px black solid'}
          borderX={'1px black solid'}
          borderTopRadius={'7px'}
          alignContent={'center'}
          alignItems={'center'}
          className={
            activeLink === "/room" || 
            (activeLink.includes("/room/sensor/") && activeLink.split("/").length === 4) 
            ? "active-flex" 
            : ""
          }
          > 
          <NavLink to="/room" exact onClick={() => setActiveLink("/room")}>
            <Text fontSize={{base:'12px', sm:'16px'}}>Room</Text>
          </NavLink>
        </Flex>
        <Flex
          width={{base:'20%',md:'10%',lg:'5%'}}
          justifyContent={'center'}
          borderTop={'2px black solid'}
          borderBottom={'1px black solid'}
          borderX={'1px black solid'}
          borderTopRadius={'7px'}
          alignContent={'center'}
          alignItems={'center'}
          className={
            activeLink === "/gas" || 
            (activeLink.includes("/gas/sensor/") && activeLink.split("/").length === 4) 
            ? "active-flex" 
            : ""
          }
        >
          <NavLink to="/gas" exact onClick={() => setActiveLink("/gas")}>
            <Text fontSize={{base:'12px', sm:'16px'}}>Gas</Text>
          </NavLink>
        </Flex>
        <Flex
          width={{base:'20%',md:'10%',lg:'8%'}}
          justifyContent={'center'}
          borderTop={'2px black solid'}
          borderBottom={'1px black solid'}
          borderX={'1px black solid'}
          borderTopRadius={'7px'}
          alignContent={'center'}
          alignItems={'center'}
          className={
            activeLink === "/battery" || 
            (activeLink.includes("/battery/sensor/") && activeLink.split("/").length === 4) 
            ? "active-flex" 
            : ""
          }
        >
          <NavLink to="/battery" exact onClick={() => setActiveLink("/battery")}>
            <Text fontSize={{base:'12px', sm:'16px'}}>Battery</Text>
          </NavLink>
          </Flex>
        </Flex>
        <Flex flexDir={'column'}  width={'100%'} height={{base:'78vh', md:'78vh'}} border={'1px solid black'}  overflowY="scroll" css={{ scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          <Flex 
            justify={'center'}
            alignContent="center"
            alignItems="center"
            alignSelf={'center'}
            verticalAlign={'center'}
            width={'100%'}
            height={'100%'}
            >
            <Outlet overflowY="hidden" />
          </Flex>
        </Flex>
        </Flex>
    </Flex>            
	)
}
export default Board
