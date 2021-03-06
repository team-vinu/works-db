import { Text, HStack, Circle, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface PersonListItemProps {
    key: string;
    personName: string;
    personImg: string;
    popularMusicTitle: string[];
    personLink: string;
};

export const PersonListItem = (props: PersonListItemProps): JSX.Element => {
    return (
        <Link to={props.personLink}>
            <HStack pb={3}>
                <Circle size='10px' bg='white' border='1px' mx={2} borderColor=''></Circle>
                <Box>
                    <Text>{props.personName}</Text>
                    <Text color='gray' fontSize='sm' >人気の曲: {props.popularMusicTitle[0]}, {props.popularMusicTitle[1]}, {props.popularMusicTitle[2]}</Text>
                </Box>
            </HStack>
        </Link>
    );
};

