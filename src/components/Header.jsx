import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="blue.800" color="white">
      <Heading size="lg">My React & Chakra UI App</Heading>
    </Flex>
  );
};

export default Header;
