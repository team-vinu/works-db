#[allow(non_snake_case)]
use crate::schema::music;
use crate::schema::person;
use chrono::NaiveDate;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Insertable, Deserialize, Serialize, Queryable, Debug)]
#[table_name = "music"]
pub struct Music {
    pub music_id: Uuid,
    pub music_name: String,
    pub artist: Option<String>,
    pub release_date: Option<NaiveDate>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub songlink_url: Option<String>,
    pub note: Option<String>,
}

//FIXME: it should be derived??
#[derive(Deserialize, Serialize, Debug)]
pub struct MusicInfo {
    pub music_name: String,
    pub artist: Option<String>,
    pub release_date: Option<NaiveDate>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub songlink_url: Option<String>,
    pub note: Option<String>,
}

impl Music {
    pub fn new(info: &MusicInfo) -> Self {
        Music {
            music_id: Uuid::new_v4(),
            music_name: info.music_name.clone(),
            artist: info.artist.clone(),
            release_date: info.release_date.clone(),
            apple_music_url: info.apple_music_url.clone(),
            spotify_url: info.spotify_url.clone(),
            youtube_url: info.youtube_url.clone(),
            songlink_url: info.songlink_url.clone(),
            note: info.note.clone(),
        }
    }
}

#[derive(Insertable, Deserialize, Serialize, Queryable, Debug)]
#[table_name = "person"]
pub struct Person {
    pub person_id: Uuid,
    pub person_name: String,
    pub genre: Option<String>,
    pub aka: Option<String>,
    pub url: Option<String>,
    pub twitter_url: Option<String>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub note: Option<String>,
}

//FIXME: it should be derived??
#[derive(Deserialize, Serialize, Debug)]
pub struct PersonInfo {
    pub person_name: String,
    pub genre: Option<String>,
    pub aka: Option<String>,
    pub url: Option<String>,
    pub twitter_url: Option<String>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub note: Option<String>,
}

impl Person {
    pub fn new(info: &PersonInfo) -> Self {
        Person {
            person_id: Uuid::new_v4(),
            person_name: info.person_name.clone(),
            genre: info.genre.clone(),
            aka: info.aka.clone(),
            url: info.url.clone(),
            twitter_url: info.twitter_url.clone(),
            apple_music_url: info.apple_music_url.clone(),
            spotify_url: info.spotify_url.clone(),
            youtube_url: info.youtube_url.clone(),
            note: info.note.clone(),
        }
    }
}
