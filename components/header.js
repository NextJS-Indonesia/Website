import React from "react";
import { Flex, Stack, Button, Box } from "@chakra-ui/core";
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
        <Box px="15px">
          <Button
            as="a"
            cursor="pointer"
            href="https://github.com/ekaone/Git-Hunter"
            target="_blank"
            leftIcon={FaGithub}
            variant="link"
            iconSpacing="4px"
            fontSize="16px"
            _hover={{ textDecor: "none", color: "gray.900" }}
          >
            Github
          </Button>
        </Box>
        <Box>
          <Button
            as="a"
            cursor="pointer"
            href="https://twitter.com/dannyeka"
            target="_blank"
            leftIcon={FaTwitter}
            variant="link"
            iconSpacing="4px"
            fontSize="16px"
            _hover={{ textDecor: "none", color: "blue.600" }}
          >
            Tweet
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
}
