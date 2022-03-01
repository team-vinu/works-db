import { Image, Container, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
    key: string;
    name: string;
    img: string;
};

const CreatorListItem = (props: Props): JSX.Element => {
    return (
        <Link to={`/creator`}>
            <Container centerContent key={props.key} p="0">
                <Image src={props.img} borderRadius="full" border="1px" />
                <Text>{props.name}</Text>
            </Container>
        </Link>
    );
};

export default CreatorListItem;
