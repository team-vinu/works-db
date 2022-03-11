table! {
    music (music_id) {
        music_id -> Uuid,
        music_name -> Text,
        artist -> Nullable<Text>,
        release_date -> Nullable<Date>,
        apple_music_url -> Nullable<Text>,
        spotify_url -> Nullable<Text>,
        youtube_url -> Nullable<Text>,
        songlink_url -> Nullable<Text>,
        note -> Nullable<Text>,
    }
}

table! {
    person (person_id) {
        person_id -> Uuid,
        person_name -> Text,
        genre -> Nullable<Text>,
        aka -> Nullable<Text>,
        note -> Nullable<Text>,
        url -> Nullable<Text>,
        twitter_url -> Nullable<Text>,
        youtube_url -> Nullable<Text>,
        apple_music_url -> Nullable<Text>,
        spotify_url -> Nullable<Text>,
    }
}

table! {
    relation_person_music (music_id) {
        music_id -> Uuid,
        person_id -> Nullable<Uuid>,
        person_role -> Nullable<Array<Text>>,
    }
}

allow_tables_to_appear_in_same_query!(
    music,
    person,
    relation_person_music,
);
