import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import CreatorProfile from '../components/Creator-profile';
import defaultCreatorIcon from '../../images/user.png';

const Creator = (): JSX.Element => {
    return (
        <ChakraProvider>
            <Box m="8">
                <CreatorProfile name="クリエイター" img={defaultCreatorIcon} />
            </Box>
        </ChakraProvider>
    );
};

export default Creator;
