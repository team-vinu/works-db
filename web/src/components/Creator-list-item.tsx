import React from "react";
import { Container, Circle, Text } from "@chakra-ui/react"
import { UserOutlined } from "@ant-design/icons";

type Props = {
    key: number,
    name: string,
};

const CreatorListItem = (props: Props): JSX.Element => {
    return (
        <Container
            centerContent
            key={ props.key }
            p="0"
        >
            <Circle>
                <UserOutlined
                    style={{fontSize: "100px"}}
                />
            </Circle>
            <Text>{ props.name }</Text>
        </Container>
    );
};

export default CreatorListItem;
