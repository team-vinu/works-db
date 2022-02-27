import React from "react";
import { Heading, Box, HStack, Container, Circle, Text } from "@chakra-ui/react"
import CreatorListItem from "./Creator-list-item";

export type CreatorProps = {
    name: string,
    img: string,
}

type Props = {
    title: string,
    creatorPropsArray: CreatorProps[],
}

const CreatorList = (props: Props) : JSX.Element => {
    return (
        <Box>
            <Heading as="h2" size="sm">{ props.title }</Heading>
            <HStack overflow="scroll">
                {(() => {
                    const items = [];
                    for(let i = 0; i < props.creatorPropsArray.length; i++) {
                        items.push(
                            <CreatorListItem
                                key={ i }
                                name={ props.creatorPropsArray[i].name }
                                img={ props.creatorPropsArray[i].img }
                            />
                        );
                    }
                    return items;
                })()}
            </HStack>
        </Box>
    );
};

export default CreatorList;