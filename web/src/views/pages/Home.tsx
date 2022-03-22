import { Image, Box, Heading, HStack } from '@chakra-ui/react';
import { SearchBox, PersonList, PersonListItemProps } from '../components';
import { Main } from '../components/layout';
import { 
    Person, 
    initialPersonState, 
    selectPersonLists, 
    PersonList as PersonListInterface, 
    PersonLists as PersonListsInterface
} from '../../app/slices/personListsSlice';
import logo from '../../images/works-db-logo.png'
import { useSelector } from 'react-redux';

export const Home = () : JSX.Element => {
    const personLists: PersonListsInterface = useSelector(selectPersonLists);
    const pickupCreators: PersonListInterface = personLists.entities[0];

    return (
        <Main>
            <Box mb="4">
                <HStack maxH='xl'>
                    <Image src={logo} boxSize='50px' />
                    <Heading as="h1" py="2">
                        Works DB desu
                    </Heading>
                </HStack>
                <SearchBox />
            </Box>

            <PersonList
                title={pickupCreators.title}
                list={pickupCreators}
            />
        </Main>
    );
}