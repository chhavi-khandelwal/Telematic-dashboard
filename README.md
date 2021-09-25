# Telematic Board React App

Shows live data of machines based on socket functionality

## Tech Stack

- React (UI Library)
- Socket.io-client (UI Library)
- react-table(UI Library)
- Redux (State management)
- Typescript (Language)
- Styled Compoents (Styling)
- Jest (Test runner)
- React Testing Library (Testing)

## Architecture

- assets
  - images
  - styles -> common styled components
- components -> shared/common components
- containers -> main containers
- store -> stores data via redux
- utils -> utilities for helper fns
- App.test.tsx -> test file

## Brief

- fetches data to show in the table.
- recieve alerts via socket ad show in the modal
- updates the table as per alerts

## How to run

yarn install;
yarn build;
yarn start;

## Tests

yarn test

## assumptions & further improvements

there should be a btn to fetch latest data
FE currently supports just one machine as alerted
Assuming initial data of table is static(would be fetched from a BE endpoint)
pagination functionality needs to be fixed
