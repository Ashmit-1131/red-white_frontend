import React, { useState, useEffect } from 'react';
import {
  Button,
  Container,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  Textarea,
  Image,
  Box,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { BASE_URL1 } from '../Component/constants/config';

function Post() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const { token, name, email, phone } = useSelector((state) => state.authReducer)
console.log(token,name,email,phone)
  const toast = useToast();
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = () => {
    if (!title || !image || !description) {
      toast({
        title: 'Incomplete Data',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    let payload = {
      title,
      image,
      description,
    };

    fetch(`${BASE_URL1}/blog/add`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
        Authorization: ` ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 1) {
          toast({
            title: 'Blog created.',
            description: res.message,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
          setPosts([...posts, res.data]); // Assuming the response structure includes "data"
          closeModal();
        } else {
          toast({
            title: 'Error',
            description: res.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.error('Error adding post:', err);
        toast({
          title: 'Error',
          description: 'Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    // Fetch existing posts and set the state
    fetch(`${BASE_URL1}/blog`,
    {method: 'GET',
  
    headers: {
      'Content-type': 'application/json',
      Authorization: ` ${token}`,
    }}
    ,
    ) // Assuming this endpoint fetches existing posts
    
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 1) {
          setPosts(res.data); // Assuming the response structure includes "data"
        }
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
      });
  }, []);

  return (
    <div>
      <Container maxW="container.lg" py={8}>
        <Button colorScheme="blue" onClick={openModal}>
          Create New Post
        </Button>
        <VStack spacing={4} align="stretch">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                   <Heading size="md">{post.title}</Heading>
              <Image src={post.image} alt={post.title} />
           
              <Text>{post.description}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Post</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Post;
