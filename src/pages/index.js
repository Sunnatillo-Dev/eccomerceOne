import Main from "@/Components/Main";
import Layout from "@/Layout";
import { Box, ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <Box background={"#F4F7FD"} >
        <Layout>
          <Main />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}
