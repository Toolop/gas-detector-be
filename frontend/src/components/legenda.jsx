import { Flex,Text } from "@chakra-ui/react"
const LegendaComponent = () => {
    return(
              <Flex my={'1vh'} height={'2vh'} width={'100%'} justify={'space-evenly'}>
                  <Flex  width={{base:'30%', md:'10%'}} alignContent={'center'} flexDir={'row'} alignItems={'center'} justify={'space-evenly'}> 
                    <Flex w={{base:"7vw",sm:'12vw',md:'2vw'}} height={'2vh'} border={'1px solid black'} bg={'red'}  />
                    <Text>Danger</Text>
                  </Flex>
                  <Flex width={{base:'30%', md:'10%'}} alignContent={'center'} flexDir={'row'} alignItems={'center'} justify={'space-evenly'}> 
                    <Flex w={{base:"7vw",md:'2vw'}} height={'2vh'} border={'1px solid black'} bg={'yellow'} />
                    <Text>Warning</Text>
                  </Flex>
                </Flex>
    )
}
export default LegendaComponent