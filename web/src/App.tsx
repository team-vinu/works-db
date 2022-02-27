import { useState } from "react";
import SearchForm from "./components/Search-form";
import Card from "./components/Card";
import { Image, Text, Box, Button, ChakraProvider, Heading, Input, HStack, Icon, Center, Container, styled, Circle } from "@chakra-ui/react";
import { UserOutlined } from "@ant-design/icons";
import user from "../node_modules/@ant-design/icons-svg/inline-svg/outlined/user.svg";
import CreatorListItem from "./components/Creator-list-item";

function App() {
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

                <Box mb="4">
                    <Heading as="h2" size="sm">ピックアップ</Heading>
                    <HStack overflow="scroll">
                        {(() => {
                            const items = [];
                            for(let i = 0; i < 10; i++) {
                                items.push(
                                    <CreatorListItem
                                        key={i}
                                        name="creator"
                                    />
                                );
                            }
                            return items;
                        })()}
                    </HStack>
                </Box>
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
