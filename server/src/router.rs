use chrono::NaiveDate;
use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenv::dotenv;
use serde::{Deserialize, Serialize};
use std::env;
use uuid::Uuid;

use crate::models::*;

use crate::schema::music::dsl::*;

use actix_web::{get, post, web, App, HttpRequest, HttpResponse, HttpServer, Responder};

// db connection establishment
fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url).expect(&format!("Error connecting to {}", database_url))
}

#[get("/api/musics")]
async fn get_musics() -> impl Responder {
    let conn = establish_connection();
    let results = music.load::<Music>(&conn).expect("Error loading music");
    return HttpResponse::Ok().body(format!("{:?}", results));
}

#[post("/api/music")]
async fn post_music(req: web::Json<MusicInfo>) -> impl Responder {
    let conn = establish_connection();
    let new_music = Music {
        id: Uuid::new_v4(),
        name: req.name.clone(),
        artist: req.artist.clone(),
        release_date: req.release_date.clone(),
        apple_music_url: req.apple_music_url.clone(),
        spotify_url: req.spotify_url.clone(),
        youtube_url: req.youtube_url.clone(),
        songlink_url: req.songlink_url.clone(),
        note: req.note.clone(),
    };
    diesel::insert_into(music)
        .values(&new_music)
        .execute(&conn)
        .unwrap();
    return HttpResponse::Ok().body(format!("{:?}", req));
}

#[get("/api/music/{id}")]
async fn get_music(path: web::Path<(Uuid)>) -> impl Responder {
    let conn = establish_connection();
    let result = music
        .filter(id.eq(path.0))
        .load::<Music>(&conn)
        .expect("Error loading music");
    return HttpResponse::Ok().body(format!("{:?}", result));
}
