import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import PersonProfile from '../components/person-profile';

const Person = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Box m="8">
                <PersonProfile name="クリエイター" />
            </Box>
        </ChakraProvider>
    );
};

export default Person;
