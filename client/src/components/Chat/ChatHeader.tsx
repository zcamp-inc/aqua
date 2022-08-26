import { Flex, Text, Avatar, Button, Box, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import chatroom from './ChatBar'

const ChatHeader = ({label, members}: {label: any, members: any}) => {
    const router = useRouter()
    const bg = useColorModeValue('white', '#2b2b2b');  
    
    return(
        <Flex direction='row' justify='space-between'  pos='sticky' top={0} align='center' h={14} bg={bg} ml="350px" px={4} py={3}>
                <Flex justify='flex-start' align='center'>
                    <Avatar src='' w='40px' h='40px' />
                    <Box>
                    <Text ml={2} fontWeight={600} >{label}</Text>
                    <Text ml={2} fontWeight={400} fontSize={14} color='GrayText'>{members} Members</Text>        
                    </Box>
                </Flex>
                <Flex justify='flex-end'>
                    <Button color='#CB3939' _hover={{ bg: '#FFD0D0'}} borderRadius='md' variant='ghost' px={2} onClick={() => { localStorage.removeItem('username'); router.push('/')}}> Leave Chat </Button>
                </Flex>
                </Flex> 
    )
}

export default ChatHeader;