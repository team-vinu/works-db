-- Your SQL goes here
CREATE TABLE creator
("creator_id" uuid unique,
"name" text not null,
"genre" text,
"aka" text,
"note" text,
"url" text,
"twitter_url" text,
"youtube_url" text,
"apple_music_url" text,
"spotify_url" text,
PRIMARY KEY("creator_id"));