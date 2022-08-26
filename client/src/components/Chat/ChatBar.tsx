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
import ChatLink from "./ChatLink";
import ChatHeader from "./ChatHeader";
export const chatrooms = [
    { label: "KEK SUPREME", href: '/chatroom-1', imgUrl: 'https://imgur.com/iUO5lDL.png'},
    { label: "Audio Squad", href: '/chatroom-2', imgUrl: 'https://imgur.com/Xt7EauF.png' },
    { label: "EIE 500 LEVEL", href: '/chatroom-3', imgUrl: ''},
    { label: "Covenant University Chaplaincy", href: '/chatroom-4', imgUrl: 'https://i.imgur.com/a07ru9J.png'},
]
const ChatBar = ({ page, setPage}: {page: any, setPage: any}) => {
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
            {chatrooms.map((link, i) => (
                <Flex direction='column' key={i} onClick={() => setPage(link.href)} noOfLines={1}>
                    <ChatLink link={link} page={page} />
                </Flex>
            ))}
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
