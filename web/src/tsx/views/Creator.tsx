import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

const Creator = () : JSX.Element => {
    return (
        <ChakraProvider>
            <Box m="4">
                <Heading
                    as="h1"
                    py="2"
                >
                    Creator Name
                </Heading>
            </Box>
        </ChakraProvider>
    );
};

export default Creator;