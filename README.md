# deezer
An app to view the Uk top 20 songs

This app is implemented using react/redux.
A proxy API server has been created to proxy the DEEZER API due to cross origin access limitation.

We will use only the top 20 charts as the DEEZER API has a limit on the number of request.

the tracks in the chart do not have the genre info, so we have to fetch the album info for each of the track to get the genre. so that we can filter the tracks by genre



### Getting started

Install dependency
```sh
$ npm install
```

Run
```sh
$ npm start
```

open link to view the app(If not automatically opened)
```sh
http://localhost:8080/
```
