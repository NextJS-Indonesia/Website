import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

export default function Card(props) {
  const { title, body, path } = props;

  return (
    <Box
      as="a"
      target="_blank"
      rel="noopener noreferrer"
      href={path}
      borderWidth="1px"
      rounded="lg"
      padding="6"
      margin="4"
    >
      <Heading as="h3" size="xl" mb="2" color="teal.500">
        {title} &rarr;
      </Heading>
      <Text fontSize="lg">{body}</Text>
    </Box>
  );
}
