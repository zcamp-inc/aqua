import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  Flex,
  Center,
} from "@chakra-ui/react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
    <Box minH="100vh" minW='full'>
    
      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent >
        </DrawerContent>
      </Drawer>  */}

      <Flex justify='center'>
        {children}
      </Flex>
      
    </Box>
    </Center>
  );
};


