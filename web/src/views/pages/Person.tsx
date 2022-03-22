import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Text, Box } from '@chakra-ui/react';
import { PersonProfile } from '../components';
import { selectPersonLists } from '../../app/slices/personListsSlice';

export const Person = (): JSX.Element => {
    const personLists = useAppSelector(selectPersonLists);

    return (
        <Box m="8">
            <PersonProfile name={personLists.entities[0].entities[0].name}/>
        </Box>
    );
};