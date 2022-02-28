import { 
    Box,
    Button,
    ChakraProvider,
    Heading,
    Input 
} from "@chakra-ui/react";
import CreatorList, { CreatorProps } from "../components/block/Creator-list";
import UserIcon from "../../../images/user.png"

function Home() {
    const pickupCreators: CreatorProps[] = [];
    for(let i = 0; i < 10; i++) {
        const creator: CreatorProps = {
            name: "creator",
            img: UserIcon,
        };
        pickupCreators.push(creator)
    }

    return (
        <ChakraProvider>
            <Box m="4">
                <Box mb="4">
                    <Heading as="h1" py="2">Works DB</Heading>
                    <Box display="flex">
                        <Input placeholder="キーワードを入力してください" mr="2" />
                        <Button>検索</Button>
                    </Box>
                </Box>

                <CreatorList
                    title="ピックアップ"
                    creatorPropsArray={ pickupCreators }
                />
            </Box>
        </ChakraProvider>
    );
}

export default Home;
