import React, { useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { Layout } from '../Layout';
import { Flex, Button, Text, useColorModeValue, Avatar, Box } from "@chakra-ui/react";
import { useRouter } from 'next/router';


const ChatPage = ({ socket } : {socket: any}) => {
    const [page, setPage] = useState<string>("/");
    const router = useRouter();

    return (
            <Flex direction='column' justify='space-between' minW='full'>               
                <Flex minW='full'>
                    <Flex justify='flex-start'>
                        <ChatBar page={page} setPage={setPage} />
                    </Flex>
                    <Flex minW='full'>
                        {page === '/chatroom-1' ? 
                        <Flex direction='column' minW ='full'>
                            <ChatHeader label={'KEK SUPREME'} members={5} />
                       <Flex top={0} pos='absolute'>
                            <Text  ml='400px' mt={20}>Begin Chat 1</Text>
                        </Flex>
                        </Flex>
                        :
                        <></>
                        }

                        {page === '/chatroom-2' ?
                         <Flex direction='column' minW ='full'>
                         <ChatHeader label={'Audio Squad'} members={'99'} />
                    <Flex top={0} pos='absolute'>
                         <Text  ml='400px' mt={20}>Begin Chat 2</Text>
                     </Flex>
                     </Flex>
                    : <></>}

                     {page === '/chatroom-3' ?
                        <Flex direction='column' minW ='full'>
                        <ChatHeader label={'EIE 500 LEVEL'} members={302} />
                   <Flex top={0} pos='absolute'>
                        <Text  ml='400px' mt={20}>Begin Chat 3</Text>
                    </Flex>
                    </Flex>
                    : <></>}

                     {page === '/chatroom-4' ?
                        <Flex direction='column' minW ='full'>
                        <ChatHeader label={'Covenant University Chaplaincy'} members={'2,519'} />
                   <Flex top={0} pos='absolute'>
                        <Text  ml='400px' mt={20}>Begin Chat 4</Text>
                    </Flex>
                    </Flex>
                    : <></>}

                    
                    </Flex>

                </Flex>


            </Flex>

    )
}

export default ChatPage