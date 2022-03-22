import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface Person {
    uuid: string;
    name: string;
    mainGenre: string;
    aliases: string[];
    note: string;
    homepageUrl: string;
    twitterUrl: string;
    youtubeUrl: string;
    appleMusicUrl: string;
    spotifyUrl: string;
}

// for debug
export const initialPersonState: Person = {
    uuid: '',
    name: 'name',
    mainGenre: 'main genre',
    aliases: ['alias'],
    note: '',
    homepageUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
    appleMusicUrl: '',
    spotifyUrl: '',
};

export interface PersonList {
    title: string;
    entities: Person[];
}

// for debug
const initialPersonListState: PersonList = {
    title: 'Test PersonList',
    entities: [
        initialPersonState,
        {
            uuid: '',
            name: '田中秀和',
            mainGenre: 'main genre',
            aliases: ['alias'],
            note: '',
            homepageUrl: '',
            twitterUrl: '',
            youtubeUrl: '',
            appleMusicUrl: '',
            spotifyUrl: '',
        },
    ],
};

export interface PersonLists {
    entities: PersonList[];
}

const initialState: PersonLists = {
    entities: [initialPersonListState, initialPersonListState],
};

export const personListsSlice = createSlice({
    name: 'personLists',
    initialState,
    reducers: {},
});

export const {} = personListsSlice.actions;

export const selectPersonLists = (state: RootState) => state.personLists;

export default personListsSlice.reducer;
