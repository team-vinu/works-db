import { BoxProps, Flex } from '@chakra-ui/react';

export const Main =  (props: BoxProps) => {
    return (
        <Flex direction='column' m='8' {...props} />
    );
}