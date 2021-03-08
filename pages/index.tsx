import { Box, Heading, Square, Text } from "@chakra-ui/layout";
import theme from "@chakra-ui/theme";
import React from "react";
import SearchInput from "~/components/Search/SearchInput";

interface Props {
  children: JSX.Element;
}

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <Box minH="screen">
      <Box h="8" px="8" my="8">
        <SearchInput />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bg="white"
        w={`calc(100% - ${theme.sizes[16]})`}
        h="sm"
        px="4"
        mt="4"
        mx="auto"
        overflow="hidden"
        pos="relative"
        borderRadius="md"
      >
        <Heading>Hello world,</Heading>
        <Text>
          Introduce my self, a product analyst/ developer with a good skill to
          search on google.
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;
