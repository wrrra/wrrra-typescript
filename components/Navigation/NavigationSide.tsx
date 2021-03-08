import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Divider, Heading, Square, VStack } from "@chakra-ui/layout";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import {
  RiBriefcaseLine,
  RiFileListLine,
  RiHome3Line,
  RiLightbulbFlashLine,
  RiUser5Line,
} from "react-icons/ri";

interface Props {
  side: "left" | "right";
}

const NavigationSide: React.FC<Props> = () => {
  const router = useRouter();

  console.log(router);

  return (
    <Box bg="white" maxH="screen" pos="sticky" top="0" pt="8" px="4">
      <Square size="10">
        <Heading color="_primary">W</Heading>
      </Square>
      <Divider my="2" borderColor="_primary" />
      <VStack spacing={2}>
        <Link href="/">
          <IconButton
            color={router.asPath == "/" ? "white" : "gray"}
            variant={router.asPath == "/" ? "solid" : "outline"}
            colorScheme="primary"
            aria-label="linked-in"
            icon={<Icon as={RiHome3Line} boxSize={6} />}
          />
        </Link>
        <Link href="/projects">
          <IconButton
            color={router.asPath.startsWith("/projects") ? "white" : "gray"}
            variant={
              router.asPath.startsWith("/projects") ? "solid" : "outline"
            }
            colorScheme="primary"
            aria-label="linked-in"
            icon={<Icon as={RiBriefcaseLine} boxSize={6} />}
          />
        </Link>
        <Link href="/blogs">
          <IconButton
            color={router.asPath.startsWith("/blogs") ? "white" : "gray"}
            variant={router.asPath.startsWith("/blogs") ? "solid" : "outline"}
            colorScheme="primary"
            aria-label="linked-in"
            icon={<Icon as={RiFileListLine} boxSize={6} />}
          />
        </Link>
        <Link href="/idea">
          <IconButton
            color={router.asPath.startsWith("/idea") ? "white" : "gray"}
            variant={router.asPath.startsWith("/idea") ? "solid" : "outline"}
            colorScheme="primary"
            aria-label="linked-in"
            icon={<Icon as={RiLightbulbFlashLine} boxSize={6} />}
          />
        </Link>
        <Link href="/about">
          <IconButton
            color={router.asPath.startsWith("/about") ? "white" : "gray"}
            variant={router.asPath.startsWith("/about") ? "solid" : "outline"}
            colorScheme="primary"
            aria-label="linked-in"
            icon={<Icon as={RiUser5Line} boxSize={6} />}
          />
        </Link>
      </VStack>
    </Box>
  );
};

export default NavigationSide;
