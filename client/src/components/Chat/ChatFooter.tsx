import {
  Flex,
  Text,
  Input,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React, { useState } from "react";

interface ChatFooterProps{
    socket: any,
    typing: any
}
const ChatFooter: React.FC<ChatFooterProps> = ({socket, typing}) => {
  const [message, setMessage] = useState("");
  const handleTyping = () => 
    socket.emit('typing', `${localStorage.getItem('name')} is typing...`);

    var now = new Date();
    var sent = now.getTime();

  return (
    <Flex 
    direction='column'
    pos="fixed"
    bottom={0}
    ml={480}
    h={14}
    align="center"
    justify="center"
    >
      <Flex justify='flex-start' ml={-480}>
        <Text mt={-6} mr={3}>{typing}</Text>
      </Flex>
      <Flex
     
      w="700px"
    >
          
      <Flex justify="center" align="center">
        <Box>
          <Text fontSize={30} fontWeight={600}>
            🙂
          </Text>
        </Box>
      </Flex>
      
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values, actions) => {
          console.log({ name: localStorage.getItem("name"), message });
          if (message.trim() && localStorage.getItem('name')){
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('name'),
                id: `${socket.id}-${Math.random()}`,
                socketID: socket.id,
                timeStamp: now.getTime()
            });
          }
          setMessage("");
        }}
      >
        {(props) => (
          <Form>
            <Flex align='center' w='500px'>
              <Field name="message">
                {({ field, form }: { field: any, form: any}) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <Input
                      {...field}
                      placeholder="Message"
                      variant="filled"
                      bg="white"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDownCapture={handleTyping}
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex justify="flex-end" ml={2}>
                <Button
                  colorScheme="blue"
                  borderRadius="md"
                  variant="ghost"
                  px={2}
                  type='submit'
                >
                  {" "}
                  Send{" "}
                </Button>
              </Flex>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
    </Flex>
  );
};

export default ChatFooter;
