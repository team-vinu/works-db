import { Image, Box, ChakraProvider, Heading, HStack } from '@chakra-ui/react';
import SearchBox from '../components/search-box';
import { PersonList } from '../components/person-list';
import { PersonListItemProps } from '../components/person-list-item';
import theme from '../../styles/theme'
import DefaultCreatorIcon from '../../images/user.png';
import logo from '../../images/works-db-logo.png'

function Home() {
    const pickupCreators: PersonListItemProps[] = [];

    return (
        <ChakraProvider theme={theme}>
            <Box m="8">
                <Box mb="4">
                    <HStack maxH='xl'>
                        <Image src={logo} boxSize='50px' />
                        <Heading as="h1" py="2">
                            Works DB
                        </Heading>
                    </HStack>
                    <SearchBox />
                </Box>

                <PersonList
                    title="ピックアップ"
                    personListItemPropsArray={pickupCreators}
                />
            </Box>
        </ChakraProvider>
    );
}

export default Home;
