import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import PersonProfile from '../components/person-profile';

const Person = (): JSX.Element => {
    const personName = useAppSelector((state) => state.person.value);

    return (
        <ChakraProvider>
            <Box m="8">
                <PersonProfile name={personName}/>
            </Box>
        </ChakraProvider>
    );
};

export default Person;
