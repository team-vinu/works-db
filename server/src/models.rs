use crate::schema::creator;
#[allow(non_snake_case)]
use crate::schema::music;
use chrono::NaiveDate;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Insertable, Deserialize, Serialize, Queryable, Debug)]
#[table_name = "music"]
pub struct Music {
    pub music_id: Uuid,
    pub name: String,
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
    pub name: String,
    pub artist: Option<String>,
    pub release_date: Option<NaiveDate>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub songlink_url: Option<String>,
    pub note: Option<String>,
}

#[derive(Insertable, Deserialize, Serialize, Queryable, Debug)]
#[table_name = "creator"]
pub struct Creator {
    pub creator_id: Uuid,
    pub name: String,
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
pub struct CreatorInfo {
    pub name: String,
    pub genre: Option<String>,
    pub aka: Option<String>,
    pub url: Option<String>,
    pub twitter_url: Option<String>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub note: Option<String>,
}
