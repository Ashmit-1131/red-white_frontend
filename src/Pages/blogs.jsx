import React, { useState } from 'react';
import {  Box, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, Textarea } from '@chakra-ui/react';
import { BASE_URL1 } from '../Component/constants/config';
function BlogsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    setCartLoading(true)
    let cartItem = [{...prodata,quantity:1,pid:prodata._id,sizes:"M"}]
    delete cartItem[0]["_id"] //delete previous id
    let res =await axios({
      method :"post",
      url:BASE_URL1+`/cart/add`,
      data:cartItem,
      headers:{
        Authorization:token
      }
    })

    if(res.data.status==1){
      dispatch({type:CART_UPDATE})
      setPresent(true)
      setCartLoading(false)

      toast({
        title: 'Item added in cart',
        description: res.status.message,
        status: 'success',
        duration: 2000,
        position: "top",
        isClosable: true,
      })

    }else{
      setCartLoading(false)
      toast({
        title: 'Failed to add in Cart',
        description: res.status.message,
        status: 'error',
        position:"top",
        duration: 2000,
        isClosable: true,
      })
    }

    onClose();
  };
  

  return (
   <>
    <Box padding={4}>
        <Button colorScheme="teal" onClick={onOpen}>
          Add Blog
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} marginBottom={4} />
            <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} marginBottom={4} />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleSubmit}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal></>
     
  
  );
}

export default BlogsPage;
