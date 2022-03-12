import { Container, Heading } from "@chakra-ui/react";

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