-- Your SQL goes here
CREATE TABLE music
("id" UUID UNIQUE,
"name" TEXT NOT NULL,
"aritist" TEXT,
"release_date" DATE,
"apple_music_url" TEXT,
"spotify_url" TEXT,
"youtube_url" TEXT,
"songlink_url" TEXT,
"note" TEXT,
PRIMARY KEY("id"));