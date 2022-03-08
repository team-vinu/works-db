FROM rust:1.59

RUN cargo new --bin server
WORKDIR /server

RUN cargo install cargo-watch

RUN cargo install diesel_cli --no-default-features --features postgres

COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml
RUN cargo build --release
RUN rm -rf src/

COPY . .

CMD sh -c "diesel migration run && diesel migration redo && cargo watch -x 'run --release'"