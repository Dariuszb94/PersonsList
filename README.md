# People list

The App lets you edit person related data from a list.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

On init, a list of people is fetched from https://randomuser.me/api/ or get from browser memory - IndexedDB (if exists).

You can click on a person to show details. There are details such as first name, last name, image, contact info.

There is a possibility to edit person's info (click "edit"), you can edit their first name, last name, contact info. If the provided info is correct, changes are saved in browser memory.

People can be added to the list (click "add"), the list can be also reseted (click "reset").

## Technologies

Project is created with:

- React version: 17.0.2
- Material-ui/icons: 4.11.2,
- Dexie: 3.2.0-beta.1
- Gh-pages: 3.2.3
- React-spring: 9.2.4
- Sass: 1.35.2
- Use-debounce: 7.0.0
- Typewriter-effect: 2.18.0

## Setup

To run this project, download a repo, then go to repo folder and open terminal:

```
$ npm install
$ npm run start
```
