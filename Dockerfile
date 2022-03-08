FROM postgres:14.2

RUN psql -c "CREATE DATABASE example;"