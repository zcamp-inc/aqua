import React, { useState, useEffect, useRef } from 'react';
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
    const [ messages, setMessages ] = useState([]) as any[];
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        socket.on('messageResponse', (data: any) => setMessages([...messages, data]));
    }, [socket, messages]);

    useEffect(() => {
        // To scroll to the bottom every time there's a new message
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth'});
    }, [messages])

    useEffect(() => {
        socket.on('typingResponse', (data: any) => setTypingStatus(data));
    }, [socket]);

    return (
            <Flex direction='column' justify='space-between' w='full'>               
                <Flex>
                    <Flex justify='flex-start'>
                        <ChatBar page={page} setPage={setPage} />
                    </Flex>
                    <Flex w='full'>
                        {page === '/chatroom-1' ? 
                        <Flex direction='column' w ='full'>
                            <ChatHeader label={'KEK SUPREME'} members={5} />
                            
                       <Flex ml='350px' py={6} justify='center' overflow='hidden'>
                            <ChatBody messages={messages} lastMessageRef={lastMessageRef}  />
                        </Flex>
                        <Flex justify='center' align='center'>
                        <ChatFooter socket={socket} typing={typingStatus} />
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
                        <ChatBody />
                    </Flex>
                    </Flex>
                    : <></>}

                    
                    </Flex>

                </Flex>


            </Flex>

    )
}

export default ChatPage