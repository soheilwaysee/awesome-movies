
# Awesome Movies
The `Awsome Movies` is of project challenge test.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Author

* **Soheil Waysee** - *Initial developer* - [Github Page](https://github.com/soheilwaysee)


## Features

Popular technologies:
- [React](https://facebook.github.io/react/) as the view.
- [React Router v4](https://reacttraining.com/react-router/) as the router.
- [Redux](https://github.com/reactjs/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation.
- [axios](https://github.com/mzabriskie/axios) for universal data fetching/rehydration on the client.
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) for next generation developer experience.

- [prop-types](https://github.com/facebook/prop-types) for Runtime type checking for React props and similar objects.

- [prettier](https://yarnpkg.com/lang/en/) Opinionated Code Formatter.

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```bash
git clone git@github.com:soheilwaysee/awesome-movies.git
cd awesome-movies
```

**2. Install all of the dependencies:**

```bash
npm install
```
or
```bash
yarn
```
**3. Add env to project:**
```bash
cp .env.example .env
```

**4. Start to run it:**

```bash
npm start  # Running development server
```
or

```bash
yarn start  # Running development server
```
Now the app should be running at browser
## NPM Script Commands

I use [better-npm-run](https://github.com/benoror/better-npm-run) to manage the scripts in a better way, which also provides the compatibility of cross-platform. All of the scripts are listed as following:

| `yarn <script>`        | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `start`                  | Run your app on the development server at `localhost:3000`. HMR will be enabled. |
| `build`                | bundle it to `./public            |
                        |
| `test`                 | Run testing  
## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── .env.example                    # copy it to .env
├── public                          # static files
├── src                             # App source code
│   ├── components                  # Reusable components 
│   ├── __test__                    # test files
│   ├── pages                       # Page components 
│   ├── app.js                      # App root component 
│   ├── redux
│   │   ├── actions.js                 # Redux actions (including testing files)
│   │   ├── reducers                   # Redux reducers 
│   ├── utils                       # App-wide utils 
│   ├── styles                      #styles of porject
├── index.js                        # App entry point
```

## Setup Redux DevTools Extension

The [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension) let us wire up our Redux app to a time-traveling debugger. It's enabled in development only. You can follow these installation guides to use it:

### Styles
 supports [CSS modules](https://github.com/css-Modules/css-Modules)

With CSS modules:

```js
import styles from './styles.scss';

// ...

render() {
  return (
    <div className={styles.myClass}>
    ...
    </div>
  );
}
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
  yarn global add serve
  serve -s build
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
