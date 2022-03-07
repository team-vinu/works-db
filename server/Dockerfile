FROM rust:1.59

RUN cargo new --bin app
WORKDIR /app

COPY ./Cargo.lock ./Cargo.lock
COPY ./Cargo.toml ./Cargo.toml
RUN cargo build --release
RUN rm -rf src

COPY . .

RUN cargo build --release

CMD [ "cargo", "run", "--release" ]