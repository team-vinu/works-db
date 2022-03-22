import { Heading, Box, HStack, VStack } from '@chakra-ui/react';
import { PersonListItem, PersonListItemProps } from './';
import { PersonList as PersonListInterface } from '../../app/slices/personListsSlice';

interface Props {
    title: string;
    list: PersonListInterface;
};

export const PersonList = (props: Props): JSX.Element => {
    return (
        <Box>
            <Heading as="h2" size="sm">
                {props.title}
            </Heading>
            <VStack>
                {(() => {
                    const items = [];
                    for (let i = 0; i < props.list.entities.length; i++) {
                        items.push(
                            <PersonListItem
                                key={i.toString()}
                                personName={props.list.entities[i].name}
                                personImg=''
                                popularMusicTitle={[]}
                                personLink='/creator'
                            />
                        );
                    }
                    return items;
                })()}
            </VStack>
        </Box>
    );
};
