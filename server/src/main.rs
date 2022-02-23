#[macro_use]
extern crate diesel;
extern crate dotenv;

use diesel::pg::PgConnection;
use diesel::prelude::*;
use dotenv::dotenv;
use std::env;
use uuid::Uuid;

mod models;
use models::Music;

mod schema;
use schema::music::dsl::*;

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

// FIXME:
#[post("/api/music")]
async fn echo(req: web::Json<Music>) -> impl Responder {
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
    println!("{:?}", req);
    //diesel::insert_into(music).values(&new_music).execute(&conn);
    return HttpResponse::Ok().body(format!("{:?}", req));
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    return HttpServer::new(|| App::new().service(get_musics).service(echo))
        .bind("127.0.0.1:8080")?
        .run()
        .await;
}
