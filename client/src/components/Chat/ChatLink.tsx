import { Flex, Avatar, Text, useColorModeValue } from "@chakra-ui/react";

export default function ChatLink({ link, page}) {
  const { label, href, imgUrl } = link;
  const bg = useColorModeValue('blue.100', 'blue.200')

  return (
        <Flex
          align="center"
          py={2}
          pl={2}
          mb={2}
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            color: "#2B6CB0",
            bg: 'blue.100'
          }}
          color={page === href ? "white" : "gray.400"}
          bg = { page === href ? bg : 'none' }
        >
           <Avatar src={imgUrl} name={label} size='md' /> 
          <Text fontSize={16} fontWeight={600} color='#000a16' ml={2} noOfLines={1}>{label}</Text>
        </Flex>
  );
}