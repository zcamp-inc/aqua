import { Flex, Text, VStack, Box, Container } from "@chakra-ui/react";
import React from "react";

const ChatBody = ({messages, lastMessageRef}: any) => {
  var d = new Date(messages.timeStamp);
  var time = d.getTime();
  return (
      <Flex direction='column' w="700px" maxH='400px'  overflowY='scroll' mb={2}  boxSizing="content-box" css={{
        '&:: -webkit-scrollbar': {
            display: 'none'
        },
        '&:: -ms-overflow-style': 'none',
        '&:: scrollbar-width': 'none'
        }}>
        {messages.map(( message: any) => 
            message.name === localStorage.getItem('name') ? (
                <Box
                key={message.id}
                bg="green.100"
                minW="100px"
                maxH="full"
                py={2}
                px={4}
                borderRadius="lg"
                ml='auto'
                mb={2}
              >
                <Flex justify='space-between'>
                  <Text>{message.text}</Text>
                  <Text fontSize={11} mt={3} ml={2}>{messages.timeStamp}</Text>
                </Flex>
              </Box>
            ):(
                <Box
                key={message.id}
                bg="white"
                minW="100px"
                h="full"
                maxW='400px'
                py={2}
                px={4}
                mr='auto'
                mb={2}
                borderRadius="lg"
                >
                <Text mb={2}>{message.name}</Text>
                <Text> {message.text} </Text>
                </Box>
            )

        )}

      <Flex ref={lastMessageRef} />
      </Flex>
  );
};

export default ChatBody;
