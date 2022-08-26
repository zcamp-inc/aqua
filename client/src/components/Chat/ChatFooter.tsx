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
    socket: any
}
const ChatFooter: React.FC<ChatFooterProps> = ({socket}) => {
  const [message, setMessage] = useState("");
  return (
    <Flex
      pos="fixed"
      bottom={0}
      ml={300}
      h={14}
      align="center"
      justify="space-between"
      w="700px"
    >
        <Text>Someone is typing...</Text>
      <Flex justify="flex-start" align="center">
        <Box>
          <Text ml={2} fontSize={30} fontWeight={600}>
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
                socketID: socket.id
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
  );
};

export default ChatFooter;
