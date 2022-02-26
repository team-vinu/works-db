import React from "react";
import {
    Text,
    Link,
    HStack,
    Box,
    Center,
    Heading,
    Button,
    Input,
    Container,
    Icon,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Code,
} from "native-base";
import { UserOutlined } from "@ant-design/icons";
//import NativeBaseIcon from "./components/NativeBaseIcon";

export default function App() {
    return (
        <NativeBaseProvider>
            <Box m="4">
                <Box mb="4">
                    <Heading py="2">Works DB</Heading>
                    <Box display="flex">
                        <Input
                            placeholder="キーワードを入力してください"
                            mr="2"
                        />
                        <Button>検索</Button>
                    </Box>
                </Box>

                <Box mb="4">
                    <Heading size="sm">ピックアップ</Heading>
                    <HStack overflow="scroll">
                        {(() => {
                            const items = [];
                            for (let i = 0; i < 10; i++) {
                                items.push(
                                    <Container centerContent key={i} p="0">
                                        {/* <Icon as={UserOutlined} /> */}
                                        <Text>creator</Text>
                                    </Container>
                                );
                            }
                            return items;
                        })()}
                    </HStack>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}
