import { Flex } from "@chakra-ui/layout";
import React from "react";
import Link from "next/link";

import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";
import { Icon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";

interface Props {}

const OverviewSocials: React.FC<Props> = () => {
  return (
    <Flex mt="4" mb="8" justifyContent="space-between">
      <Link href="/">
        <IconButton
          cursor="pointer"
          color="_primary"
          aria-label="linked-in"
          icon={<Icon as={RiLinkedinBoxFill} boxSize={10} />}
        />
      </Link>
      <Link href="/">
        <IconButton
          cursor="pointer"
          color="_primary"
          aria-label="linked-in"
          icon={<Icon as={RiInstagramFill} boxSize={10} />}
        />
      </Link>
      <Link href="/">
        <IconButton
          cursor="pointer"
          color="_primary"
          aria-label="linked-in"
          icon={<Icon as={RiTwitterFill} boxSize={10} />}
        />
      </Link>
      <Link href="/">
        <IconButton
          cursor="pointer"
          color="_primary"
          aria-label="linked-in"
          icon={<Icon as={RiGithubFill} boxSize={10} />}
        />
      </Link>
    </Flex>
  );
};

export default OverviewSocials;
