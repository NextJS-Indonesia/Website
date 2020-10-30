import React from "react";
import { Flex, Stack, Button } from "@chakra-ui/core";
import { FaGithub, FaTwitter } from "react-icons/fa";

// components
import Brand from "./brand";

export default function Header() {
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      pt="10px"
      mb="60px"
    >
      <Brand />
      <Stack isInline>
        <Button
          as="a"
          href="https://github.com/ekaone/Git-Hunter"
          target="_blank"
          leftIcon={FaGithub}
        >
          View Source
        </Button>
        <Button
          variantColor="blue"
          leftIcon={FaTwitter}
          as="a"
          href="https://twitter.com/dannyeka"
          target="_blank"
          leftIcon={FaGithub}
        >
          Tweet
        </Button>
      </Stack>
    </Flex>
  );
}
