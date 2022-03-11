import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface PersonSlice {
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

const initialState: PersonSlice = {
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

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {},
});

export const {} = personSlice.actions;

export const selectPerson = (state: RootState) => state.person.value;

export default personSlice.reducer;
