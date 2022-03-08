FROM rust:1.59

RUN cargo new --bin server
WORKDIR /server

COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml
RUN cargo build --release
RUN rm -rf src/

COPY . .

RUN cargo install --locked --path .

CMD [ "server" ]