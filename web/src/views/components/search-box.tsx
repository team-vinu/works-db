import { InputLeftElement, InputGroup, Box, Input, Button } from '@chakra-ui/react';
import { SearchOutlined } from '@ant-design/icons'

export const SearchBox = (): JSX.Element => {
    return (
        <Box display="flex">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchOutlined />}
                />
                <Input 
                    placeholder="検索..." 
                    mr="2"
                    variant='flushed'
                />
            </InputGroup>
        </Box>
    );
};