import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Text, Box, ChakraProvider, Heading } from '@chakra-ui/react';
import { PersonProfile } from '../components';
import { selectPersons } from '../../features/persons/personsSlice';

export const Person = (): JSX.Element => {
    const persons = useAppSelector(selectPersons);

    return (
        <ChakraProvider>
            <Box m="8">
                <PersonProfile name={persons.entities[0].name}/>
            </Box>
        </ChakraProvider>
    );
};