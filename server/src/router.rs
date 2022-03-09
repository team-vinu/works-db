#[allow(non_snake_case)]
use diesel::prelude::*;
use diesel::{dsl::exists, pg::PgConnection, result, select};
use dotenv::dotenv;
use std::env;
use uuid::Uuid;

use crate::models::*;

use crate::schema::music::dsl::*;

use actix_web::{delete, get, http, post, web, HttpResponse, Responder};

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

#[delete("/api/music/{musicId}")]
async fn delete_music(web::Path(musicId): web::Path<Uuid>) -> impl Responder {
    let conn = establish_connection();
    let exist = music.filter(id.eq(musicId)).execute(&conn).unwrap(); // FIXME: unwrapを書きかえる
    if let 0 = exist {
        return HttpResponse::NotFound().body("Not exist");
    }
    diesel::delete(music.filter(id.eq(musicId)))
        .execute(&conn)
        .unwrap(); // FIXME: unwrapを書きかえる
    return HttpResponse::Ok().body("succeeded");
}

#[post("/api/music")]
async fn post_music(req: web::Json<MusicInfo>) -> impl Responder {
    let conn = establish_connection();
    let new_music = Music {
        id: Uuid::new_v4(),
        name: req.name.clone(),
        artist: req.artist.clone(),
        release_date: req.releaseDate.clone(),
        apple_music_url: req.appleMusicUrl.clone(),
        spotify_url: req.spotifyUrl.clone(),
        youtube_url: req.youtubeUrl.clone(),
        songlink_url: req.songlinkUrl.clone(),
        note: req.note.clone(),
    };
    diesel::insert_into(music)
        .values(&new_music)
        .get_result::<Music>(&conn)
        .unwrap();
    return HttpResponse::Ok()
        .header(http::header::CONTENT_TYPE, "application/json")
        .body(format!("{:?}", req));
}

#[get("/api/music/{musicId}")]
async fn get_music(web::Path(musicId): web::Path<Uuid>) -> impl Responder {
    let conn = establish_connection();
    let result = music
        .filter(id.eq(musicId))
        .load::<Music>(&conn)
        .expect("Error loading music");
    return HttpResponse::Ok()
        .header(http::header::CONTENT_TYPE, "application/json")
        .body(format!("{:?}", result));
}
