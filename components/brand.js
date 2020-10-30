import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import { Image, Box } from "@chakra-ui/core";

export default function Brand() {
  return (
    <Box as="a" cursor="pointer" href="/">
      <Image
        src="/assets/brand.png"
        width="180px"
        height="50px"
        alt="Brand Logo"
      />
    </Box>
  );
}
