# MovieSearch

A React app with React Router that allows to search movies by criteria.

This project utilizes [TMDB API](https://www.themoviedb.org) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements:
1. [Node.js](https://nodejs.org/en/) is installed

### Instructions:
1. Create an account at [The Movie Database](https://www.themoviedb.org/account/signup) and get provided API key. More from their [docs](https://www.themoviedb.org/documentation/api).
2. Create a `.env` file in the root of project directory and copy the content together the provided API key:
```env
REACT_APP_TMDB_API_KEY=<api_key>
```
3. Run `npm install -g yarn` to install Yarn package manager.
4. Run `yarn install` to download all dependencies from package.json.
5. Run `yarn start`.
6. App will start automatically in a browser or visit the app manually at `localhost:3000`.
