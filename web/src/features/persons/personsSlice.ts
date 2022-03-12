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

const initialPersonState: Person = {
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

interface PersonsState {
    entities: Person[];
}

const initialState: PersonsState = {
    entities: [initialPersonState],
};

export const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {},
});

export const {} = personsSlice.actions;

export const selectPersons = (state: RootState) => state.persons;

export default personsSlice.reducer;
