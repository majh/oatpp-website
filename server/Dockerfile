FROM alpine
#FROM lganzzzo/alpine-cmake:latest

ADD . /service

WORKDIR /service/build

RUN apk add cmake make gcc g++ libc-dev git build-base openssl-dev zlib-dev
RUN cmake --version
RUN cmake ..
RUN make

EXPOSE 8000 8000

ENTRYPOINT ["make", "run"]
