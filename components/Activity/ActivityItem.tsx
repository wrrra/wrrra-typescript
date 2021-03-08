import { Box, Flex, Heading, Square, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {
  title: string;
  created_at: string;
  excerpt: string;
  type?: string;
}

const ActivityItem: React.FC<Props> = ({ title, created_at, excerpt }) => {
  return (
    <Flex w="full" h={20}>
      <Box mr={4}>
        <Square borderRadius="md" size={10} bg="gray.100" />
      </Box>
      <Box flex="1">
        <Flex justifyContent="space-between" mb="1">
          <Heading size="sm" noOfLines={1}>
            {title}
          </Heading>
          <Text as="span" flexShrink={0} fontSize="xs" color="blackAlpha.400">
            {created_at}
          </Text>
        </Flex>
        <Text noOfLines={2} fontSize="sm" color="blackAlpha.800">
          {excerpt}
        </Text>
      </Box>
    </Flex>
  );
};

export default ActivityItem;
