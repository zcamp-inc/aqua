import React, { useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { Layout } from '../Layout';
import { Flex, Button, Text, useColorModeValue, Avatar, Box } from "@chakra-ui/react";
import { useRouter } from 'next/router';


const ChatPage = ({ socket } : {socket: any}) => {
    const bg = useColorModeValue('white', '#2b2b2b');
    const [page, setPage] = useState<string>("/");
    const router = useRouter();

    return (
            <Flex direction='column' justify='space-between' minW='full'>
                <Flex direction='row' justify='space-between' align='center' h={14} bg={bg} ml="350px" px={4} py={3}>
                <Flex justify='flex-start' align='center'>
                    <Avatar src='' w='40px' h='40px' />
                    <Box>
                    <Text ml={2} fontWeight={600} >Chatroom 1</Text>
                    <Text ml={2} fontWeight={400} fontSize={14} color='GrayText'>113 Members</Text>        
                    </Box>
                </Flex>
                <Flex justify='flex-end'>
                    <Button color='#CB3939' _hover={{ bg: '#FFD0D0'}} borderRadius='md' variant='ghost' px={2} onClick={() => router.push('/chat')}> Leave Chat </Button>
                </Flex>
                </Flex>                
                <Flex>
                    <Flex justify='flex-start'>
                        <ChatBar page={page} setPage={setPage} />
                    </Flex>
                    <Flex>
                        {page === '/chatroom-1' ? 
                       <Flex top={0} pos='absolute'>
                            <Text  ml='400px' mt={20}>Begin Chat 1</Text>
                        </Flex>
                        :
                        <></>
                        }

                        {page === '/chatroom-2' ?
                        <Flex top={0} pos='absolute'>
                             <Text ml='400px' mt={20}>Begin Chat 2</Text>
                        </Flex>
                    : <></>}
                    </Flex>

                </Flex>


            </Flex>

    )
}

export default ChatPage