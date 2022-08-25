import { Layout } from "../src/components/Layout";
import ChatPage from "../src/components/Chat/ChatPage";
import { Text } from "@chakra-ui/react";
import React from "react";
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");

const Chat = () => {
    return(
        <Layout>
            <ChatPage socket={socket} />
        </Layout>
    )
}

export default Chat;