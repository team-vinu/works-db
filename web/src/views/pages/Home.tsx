import { Image, Box, ChakraProvider, Heading, HStack } from '@chakra-ui/react';
import { SearchBox, PersonList, PersonListItemProps } from '../components';
import theme from '../../styles/theme'
import logo from '../../images/works-db-logo.png'

export const Home = () : JSX.Element => {
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