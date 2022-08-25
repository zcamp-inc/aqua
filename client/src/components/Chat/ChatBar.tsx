import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  useColorModeValue,
  Button
} from "@chakra-ui/react";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { Layout } from "../Layout";

const ChatBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('white', '#2b2b2b')
  return (
    <Flex
      direction="column"
      minH="100vh"
      w="350px"
      bg={bg}
      boxShadow="md"
      justify="flex-start"
      pos="fixed"
      top={0}
    >
      <Flex direction="column" w="full" boxShadow="sm" py={2} px={4}>
        <Flex mb={10} align="center">
          <IconButton icon={<IoMenu fontSize={24}/>} aria-label="menu" variant='ghost' borderRadius='full' />
          <Flex justify="flex-end" ml="2">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<IoSearchOutline color="gray.300" />}
              />
              <Input type="search" placeholder="Search" variant='filled' borderRadius="full" w='260px'  />
            </InputGroup>
          </Flex>
        </Flex>
      </Flex>
      <Tabs isFitted>
        <TabList mt={-10} boxShadow="sm" px={4}>
          <Tab>All</Tab>
          <Tab>Unread</Tab>
          <Tab>Personal</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex direction="column" px={4}>
              <Text>Chatroom 1</Text>
              <Text>Chatroom 2</Text>
              <Text>Chatroom 3</Text>
              <Text>Chatroom 4</Text>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button ml={6} onClick={toggleColorMode} w={40}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light' }
      </Button>
    </Flex>
  );
};

export default ChatBar;
