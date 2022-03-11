-- Your SQL goes here
CREATE TABLE person
("person_id" uuid unique,
"person_name" text not null,
"genre" text,
"aka" text,
"note" text,
"url" text,
"twitter_url" text,
"youtube_url" text,
"apple_music_url" text,
"spotify_url" text,
PRIMARY KEY("person_id"));