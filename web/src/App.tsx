import { useState } from "react";
import { Image, Text, Box, Button, ChakraProvider, Heading, Input, HStack, Icon, Center, Container, styled, Circle } from "@chakra-ui/react";
import { UserOutlined } from "@ant-design/icons";
import CreatorListItem from "./components/Creator-list-item";
import UserIcon from "./images/user.png"
import CreatorList, { CreatorProps } from "./components/Creator-list";

function App() {
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
        /*
        <div className="App">
            <div className="m-3">
                <header>
                    <h1>Works DB</h1>
                    <SearchForm />
                </header>

                <body>
                    <div>
                        <h2>ピックアップ</h2>
                        <div>
                            <ul className="list-group list-group-horizontal">
                                {(() => {
                                    const items: JSX.Element[] = [];
                                    for (let i = 0; i < 5; i++) {
                                        items.push(
                                            <Card image={user_icon} title="creator"></Card>
                                        );
                                    }
                                    return items;
                                })()}
                            </ul>
                        </div>
                    </div>
                </body>
            </div>
        </div>
        */
    );
}

export default App;
