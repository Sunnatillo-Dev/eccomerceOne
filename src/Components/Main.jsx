import { Box } from "@chakra-ui/react";
import React from "react";
import ImageUpload from "./ImageUpload";

const Main = () => {
  return (
    <Box pt={"140px"}>
      <h1>Image Upload Example</h1>
      <ImageUpload />
    </Box>
  );
};

export default Main;
