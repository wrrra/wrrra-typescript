import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import React from "react";

interface Props {}

const SearchInput: React.FC<Props> = () => {
  return (
    <InputGroup w="sm">
      <InputLeftElement
        pointerEvents="none"
        variant="primary"
        children={<Search2Icon color="_primary" />}
      />
      <Input type="text" placeholder="Search" />
    </InputGroup>
  );
};

export default SearchInput;
