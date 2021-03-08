import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex } from "@chakra-ui/layout";
import { styled } from "@chakra-ui/system";
import React from "react";
import Navigation from "../Navigation/Navigation";
import OverviewSection, {
  OVERVIEW_SECTION_WIDTH,
} from "../Section/OverviewSection";

interface Props {
  children: JSX.Element;
}

const SiteContent = styled(Box);

const LayoutDefault = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <Flex w="full" minH="screen">
      <Navigation side="left"></Navigation>
      <SiteContent
        h="200vh"
        textAlign="justify"
        w="full"
        borderTop="20px"
        borderColor="_primary"
        // pr={isOpen ? `calc(${theme.sizes[4]} + ${OVERVIEW_SECTION_WIDTH})` : 4}
        pr={isOpen ? OVERVIEW_SECTION_WIDTH : 0}
      >
        {props.children}
      </SiteContent>
      <OverviewSection onToggle={onToggle} isOpen={isOpen}></OverviewSection>
    </Flex>
  );
};

export default LayoutDefault;
