import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Box, Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"} justify={"space-between"} minH={"100vh"}>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
