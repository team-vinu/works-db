import { Image, Container, Heading } from "@chakra-ui/react";
import CircleImage from "./circle-image"

interface Props {
    name: string;
}

const PersonProfile = (props: Props) : JSX.Element => {
    return (
        <Container centerContent>
            <Heading>{props.name}</Heading>
        </Container>
    );
};

export default PersonProfile;