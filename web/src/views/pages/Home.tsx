import { Image, Box, ChakraProvider, Heading, HStack } from '@chakra-ui/react';
import SearchBox from '../components/Search-box';
import CreatorList, { CreatorProps } from '../components/Creator-list';
import theme from '../../styles/theme'
import DefaultCreatorIcon from '../../images/user.png';
import logo from '../../images/works-db-logo.png'

function Home() {
    const pickupCreators: CreatorProps[] = [];
    for (let i = 0; i < 10; i++) {
        const creator: CreatorProps = {
            name: 'creator',
            img: DefaultCreatorIcon,
        };
        pickupCreators.push(creator);
    }

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

                <CreatorList
                    title="ピックアップ"
                    creatorPropsArray={pickupCreators}
                />
            </Box>
        </ChakraProvider>
    );
}

export default Home;
