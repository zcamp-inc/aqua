import { Layout } from "../src/components/Layout";
import { NextPage } from "next";
import ChatPage from "../src/components/Chat/ChatPage";
import { Text } from "@chakra-ui/react";
import React, {useState} from "react";
import { io } from 'socket.io-client';

const socket = io("http://localhost:5000");

const Chat: NextPage = () => {
    return(
        <Layout>
            <ChatPage socket={socket} />
        </Layout>
    )
}

export default Chat;