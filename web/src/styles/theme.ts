import { extendTheme } from '@chakra-ui/react';

/* Object */
const brandColors : string[] = ["EBFFFD","D1F5F1","B7EBE5","9DE0DA","83D6CE","68CCC2","4EC2B6","34B7AB","1AAD9F","00A393"];

const theme = extendTheme({
    colors: {
        brand: {
            50: brandColors[0],
            100: brandColors[1],
            200: brandColors[2],
            300: brandColors[3],
            400: brandColors[4],
            500: brandColors[5],
            600: brandColors[6],
            700: brandColors[7],
            800: brandColors[8],
            900: brandColors[9],
        },
    },
});

export default theme;