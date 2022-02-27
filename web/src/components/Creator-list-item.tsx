import { Image, Container, Circle, Text } from "@chakra-ui/react"
import { UserOutlined } from "@ant-design/icons";

type Props = {
    key: number,
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
