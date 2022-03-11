#[macro_use]
extern crate diesel;
extern crate dotenv;

mod models;
mod router;
mod schema;

use actix_web::{App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    return HttpServer::new(|| {
        App::new()
            .service(router::get_musics)
            .service(router::post_music)
            .service(router::get_music)
            .service(router::delete_music)
            .service(router::post_creator)
            .service(router::get_creator)
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await;
}
