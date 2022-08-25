import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  }

const theme = extendTheme({
    breakpoints,
    components: {
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}}       
    },
    styles:{
        global: {
            'html, body': {
                bg: 'white'
            }
        }
    }
    
})

export default theme