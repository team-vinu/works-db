import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import SearchBox from '../components/atoms/Search-box';
import CreatorList, { CreatorProps } from '../components/block/Creator-list';
import theme from '../../styles/theme'
import DefaultCreatorIcon from '../../images/user.png';

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
            <Box m="4">
                <Box mb="4">
                    <Heading as="h1" py="2">
                        Works DB
                    </Heading>
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
