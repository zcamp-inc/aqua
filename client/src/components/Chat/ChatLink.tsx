import { Flex, Icon, Text } from "@chakra-ui/react";

export default function ChatLink({ link, page}) {
  const { label, href } = link;

  return (
        <Flex
          align="center"
          p="4"
          mx="1"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            color: "#2B6CB0",
          }}
          color={page === href ? "#2B6CB0" : "gray.400"}
        >
          <Text fontSize="1.2rem">{label}</Text>
        </Flex>
  );
}