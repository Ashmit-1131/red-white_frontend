import {
    Box,
    Flex,
    Image,
    Skeleton,
    Text,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BASE_URL1 } from "../Component/constants/config";
import { CONTAINER } from "../Component/constants/constants";

const SingleProduct = () => {
    const { token, isAuth } = useSelector((state) => state.authReducer);
    const params = useParams();
    const { id } = params;
    const toast = useToast();

    const [prodata, setProdata] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [arraydata, setArraydata] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const headers = {
                    Authorization: ` ${token}`, // Include the token in the headers
                };

                setIsLoading(true);
                const res = await axios.get(`${BASE_URL1}/blog/${id}`, {
                    method: "get", // Set the method to "get"
                    headers: headers, // Pass the headers containing the token
                });

                const responseData = res.data.data;
                console.log(responseData);
                setProdata(responseData[0]);
                setArraydata(responseData);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
        window.scrollTo(0, 0);
    }, [id, token]); // Make sure to include the token in the dependency array

    if (isLoading) {
        return (
            <Flex m="auto" w="80%" mt={30}>
                <Skeleton height="600px" w="600px" />
                <Skeleton height="600px" w="600px" />
            </Flex>
        );
    }

    return (
        <Box mt={CONTAINER}>
            {error !== "" && <Text>Error: {error}</Text>}

            <Flex direction={{ base: "column", md: "row" }} justify="space-between">
                {arraydata.map((el) => (
                    <Box
                        key={el.id}
                        width="50%"
                        margin={"auto"}
                        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                        transition="transform 2s"
                        _hover={{ transform: "scale(1.1)" }}
                    >
                        <Image objectFit="cover" height="600px" src={el.image} object-fit="contain"/>
                        <Box width="16em" mr="2em">
                            <Text width="14em" align="left">
                                <b>{el.title}</b>
                            </Text>
                            <Text mt="10px" align="left">
                                {el.description}
                            </Text>
                            {/* Additional product details can be displayed here */}
                        </Box>
                    </Box>

                ))}


            </Flex>
        </Box>
    );
};

export default SingleProduct;