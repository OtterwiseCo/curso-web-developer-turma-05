import { useEffect, useState } from "react";
import { Link as RRLink } from "react-router-dom";
import { Heading, Box, Text, Flex, Link } from "@chakra-ui/react";
import { getAllPosts } from "../services/posts";

function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  return (
    <>
      <Flex p={3} flexDirection="column">
        <Link
          to="/posts/create"
          as={RRLink}
          alignSelf="start"
          color="blue"
          mb={4}
        >
          Criar post
        </Link>
        {posts.map((post) => (
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.body}</Text>
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default ListPosts;
