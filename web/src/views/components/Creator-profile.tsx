import { Image, Container, Heading } from "@chakra-ui/react";
import CircleImage from "./Circle-image"

interface CreatorProps {
    name: string;
    img: string;
}

const CreatorProfile = (props: CreatorProps) : JSX.Element => {
    return (
        <Container centerContent>
            <CircleImage src={props.img} boxSize="100px"/>
            <Heading>{props.name}</Heading>
        </Container>
    );
};

export default CreatorProfile;