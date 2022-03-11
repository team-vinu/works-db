table! {
    creator (creator_id) {
        creator_id -> Uuid,
        name -> Text,
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
    music (music_id) {
        music_id -> Uuid,
        name -> Text,
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
    relation_creator_music (music_id) {
        music_id -> Uuid,
        creator_id -> Nullable<Uuid>,
        creator_role -> Nullable<Array<Text>>,
    }
}

allow_tables_to_appear_in_same_query!(
    creator,
    music,
    relation_creator_music,
);
