import { Badge, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AUTO, CENTER, GAINSBORO, GRAY, ORANGE, POINTER, SB } from "../Component/constants/typography"

 function SearchItem({image,title,description,_id,setDisplay}){

    const nav = useNavigate()


    return <Flex cursor={POINTER} _hover={{bg:GAINSBORO}} borderRadius={2} w={"95%"} borderBottom={"1px solid orange"} maxH={"100px"} padding={2} justifyContent={SB} alignItems={CENTER} margin={AUTO} onClick={()=>{
        setDisplay(false)
        nav("/blogs/"+_id)
    
    }}>
        <HStack gap={4}>
        <Image src={image} w={{base:"30px",sm:"40px",md:"50px",lg:"60px"}}></Image>
        <Text color={GRAY} fontSize={{base:"12px",sm:"14px",md:"14px",lg:"16px"}}>{title}</Text>
        </HStack>
        <Badge colorScheme={ORANGE}>{description}</Badge>



    </Flex>
}
export default SearchItem