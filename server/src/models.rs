use crate::schema::music;
use chrono::NaiveDate;
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Insertable, Deserialize, Serialize, Queryable, Debug)]
#[table_name = "music"]
pub struct Music {
    pub id: Uuid,
    pub name: String,
    pub artist: Option<String>,
    pub release_date: Option<NaiveDate>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub songlink_url: Option<String>,
    pub note: Option<String>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Music_info {
    pub name: String,
    pub artist: Option<String>,
    pub release_date: Option<NaiveDate>,
    pub apple_music_url: Option<String>,
    pub spotify_url: Option<String>,
    pub youtube_url: Option<String>,
    pub songlink_url: Option<String>,
    pub note: Option<String>,
}