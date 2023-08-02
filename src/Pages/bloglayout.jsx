import { Badge, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { BOLD, CENTER, FILL_10PARENT, FILL_30PARENT, FILL_70PARENT, FILL_90PARENT, GREEN, ITALIC, LARGE, MEDIUM, ORANGE, RED, SMALL, START, YELLOW } from "../Component/constants/typography";


export default function BlogLayout({image,
     title,
    description,
  
   }){
        

    return <Flex borderBottom={"1px solid orange"} alignItems={"flex-start"} gap={4}>

        <Image w={FILL_10PARENT} src={image}></Image>
        <VStack w={FILL_90PARENT} alignItems={START}>
            <Text fontSize={LARGE} fontWeight={BOLD}>{title} </Text>
            <Text fontSize={MEDIUM} fontStyle={ITALIC}>{description}</Text>
           

        </VStack>

    </Flex>
}