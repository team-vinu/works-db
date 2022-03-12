import { Heading, Box, HStack } from '@chakra-ui/react';
import { PersonListItem, PersonListItemProps } from './person-list-item';

interface Props {
    title: string;
    personListItemPropsArray: PersonListItemProps[];
};

export const PersonList = (props: Props): JSX.Element => {
    return (
        <Box>
            <Heading as="h2" size="sm">
                {props.title}
            </Heading>
            <HStack overflow="scroll">
                {(() => {
                    const items = [];
                    for (let i = 0; i < props.personListItemPropsArray.length; i++) {
                        items.push(
                            <PersonListItem
                                key={i.toString()}
                                personName={props.personListItemPropsArray[i].personName}
                                personImg=''
                                popularMusicTitle={[]}
                                personLink='/creator'
                            />
                        );
                    }
                    return items;
                })()}
            </HStack>
        </Box>
    );
};
