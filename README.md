# Create React App with Server side rendering and other goodies

Following this article: [Server-side rendering with create-react-app, code-splitting, preloaded data, React Router, Helmet, Redux, and Thunk](https://medium.com/@cereallarceny/server-side-rendering-in-create-react-app-with-all-the-goodies-without-ejecting-4c889d7db25e)

The main difference is that we are not using Redux, but Context Api

### Running

- `npm install`
- `npm run build`
- `npm run serve`

### Further TODOs

- Currently we can't start the app without the server, as it fails to fetch for the API.
- Add different meta tags for different routes via Helmet
- Preload Context state (similar to [solution in the mentioned article](https://github.com/cereallarceny/cra-ssr/blob/cfc8d8f6fba59fbdc475d5622d52ad0dc9a50a07/server/loader.js#L38) maybe)

---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
