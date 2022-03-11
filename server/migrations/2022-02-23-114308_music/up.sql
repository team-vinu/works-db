-- Your SQL goes here
CREATE TABLE music
("music_id" UUID UNIQUE,
"music_name" TEXT NOT NULL,
"artist" TEXT,
"release_date" DATE,
"apple_music_url" TEXT,
"spotify_url" TEXT,
"youtube_url" TEXT,
"songlink_url" TEXT,
"note" TEXT,
PRIMARY KEY("music_id"));