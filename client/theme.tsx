import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  }

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    breakpoints,
    components: {
        Button: { baseStyle: {_focus: { boxShadow: 'none'}}}       
    },
    styles:{
        global: (props: StyleFunctionProps) => ({
            'html, body': {
                bgGradient: mode('linear(to-r, purple.500, blue.200)', 'linear(to-r, purple, blue.500)')(props)
            }
        }),
    }
    
})

export default theme