-- Your SQL goes here
CREATE TABLE relation_peron_music
("music_id" uuid unique,
"creator_id" uuid unique,
"creator_role" text[],
PRIMARY KEY(music_id));