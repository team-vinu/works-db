import { Image, Container, Text } from "@chakra-ui/react"

type Props = {
    key: string,
    name: string,
    img: string,
};

const CreatorListItem = (props: Props): JSX.Element => {
    return (
        <Container
            centerContent
            key={ props.key }
            p="0"
        >
            <Image
                src={ props.img }
                borderRadius="full"
                border="1px"
            />
            <Text>{ props.name }</Text>
        </Container>
    );
};

export default CreatorListItem;