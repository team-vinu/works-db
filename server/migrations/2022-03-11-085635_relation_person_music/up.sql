-- Your SQL goes her
CREATE TABLE relation_person_music
("music_id" uuid unique,
"person_id" uuid unique,
"person_role" text[],
PRIMARY KEY(music_id));
