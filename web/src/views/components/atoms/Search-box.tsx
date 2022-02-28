import { Box, Input, Button } from '@chakra-ui/react';

const SearchBox = (): JSX.Element => {
    return (
        <Box display="flex">
            <Input placeholder="キーワードを入力してください" mr="2" />
            <Button>検索</Button>
        </Box>
    );
};

export default SearchBox;
