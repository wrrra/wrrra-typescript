import { Button, IconButton } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Square, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import ActivityItem from "../Activity/ActivityItem";
import { motion } from "framer-motion";
import { CheckIcon, CloseIcon, SmallCloseIcon } from "@chakra-ui/icons";
import theme from "@chakra-ui/theme";
import OverviewSocials from "./OverviewSocials";
const MotionFlex = motion.custom(Flex);

export const OVERVIEW_SECTION_WIDTH = theme.sizes.sm;

interface Props {
  onToggle: () => void;
  isOpen: boolean;
}

interface ActivityItem {
  title: string;
  created_at: string;
  excerpt: string;
  type?: string;
}

const dataActivityDummy: ActivityItem[] = [
  {
    title: "Activity Item",
    created_at: "9 hours",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque amet error eveniet, odit adipisci quam consequatur deserunt recusandae ipsa aperiam.",
  },
  {
    title: "Post a Showcase",
    created_at: "9 Jan 2021",
    excerpt: "ACCPartner Phase 2D",
  },
  {
    title: "Awesome Nextjs Blog",
    created_at: "12 Feb 2021",
    excerpt:
      "New blogs coming, 12 Feb 2021. All my friends are dead, push me to the edge.",
  },
];

const OverviewSection = ({ onToggle, isOpen }: Props) => {
  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <MotionFlex
      flexDir="column"
      bg="white"
      maxH="screen"
      pos="fixed"
      h="screen"
      right="0"
      w={OVERVIEW_SECTION_WIDTH}
      pt="8"
      px="8"
      initial={isOpen ? "visible" : "hidden"}
      animate={isOpen ? "visible" : "hidden"}
      variants={variants}
    >
      <IconButton
        aria-label="toggle"
        boxSize={8}
        pos="absolute"
        top="0"
        variant="solid"
        colorScheme={isOpen ? "gray" : "primary"}
        right={isOpen ? 0 : "100%"}
        m="4"
        color={isOpen ? "blackAlpha.800" : "whiteAlpha.800"}
        onClick={onToggle}
        icon={isOpen ? <SmallCloseIcon /> : <CheckIcon />}
      />

      <Heading size="sm" mb="4">
        Profile
      </Heading>
      <Flex>
        <Flex mr="4" justifyContent="center" alignItems="center">
          {/* <Square bg="gray.300" size={24} /> */}
          <Image borderRadius={4} src="/img/profile-1.png" boxSize={24} />
        </Flex>
        <Flex flexDir="column" flex="1">
          <Heading size="sm" textAlign="center">
            Agung Wira Putra Gea
          </Heading>
          <Heading fontSize="2xs" fontWeight="light" textAlign="center">
            Product Manager / Developer
          </Heading>
          <Box mt="auto">
            <Button
              isFullWidth
              variant="outline"
              colorScheme="primary"
              size="xs"
              mb="1"
            >
              Profile
            </Button>
            <Button
              isFullWidth
              variant="solid"
              colorScheme="primary"
              color="white"
              size="xs"
            >
              Experience
            </Button>
          </Box>
        </Flex>
      </Flex>
      <OverviewSocials />
      <Heading size="sm" mb="4">
        Activity Feed
      </Heading>
      <VStack spacing={4} overflowY="auto">
        {dataActivityDummy &&
          dataActivityDummy.map((activityItem: ActivityItem, index) => {
            return <ActivityItem {...activityItem} key={index} />;
          })}
      </VStack>
      <Text mt="2" fontSize="xs" textAlign="right" mb="4">
        See All
      </Text>
      <Box
        h="28"
        borderColor="_primary"
        borderTopWidth="2px"
        borderLeftWidth="2px"
        borderRightWidth="2px"
        mt="auto"
        bg="ghostWhite"
        py="4"
        px="4"
        borderTopRadius={10}
      >
        <Heading mb="2" size="xs" color="_primary">
          Interested? Lets go
        </Heading>
        <Button
          isFullWidth
          size="lg"
          variant="solid"
          colorScheme="primary"
          color="white"
        >
          Magic Button
        </Button>
      </Box>
    </MotionFlex>
  );
};

export default OverviewSection;
