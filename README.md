# Marvel Hero Catalog

A small frontend catalog for viewing Marvel universe hero information.

The focus of this project was to test out using [React hooks](https://reactjs.org/docs/hooks-intro.html), a feature intended to increase component legibility, maintainability, modularity, and performance (not bad)!

It uses the [Bulma](https://github.com/jgthms/bulma) CSS framework and was made with [Create React App](https://github.com/facebook/create-react-app).

## Preview

![Preview of marvel-heroes-react](https://thumbs.gfycat.com/ZealousGleamingGrassspider-size_restricted.gif)

## Running it

This project is intended to be run in a development environment. The environment variables in a frontend build (`REACT_APP_...`) are not private.

```shell
cp .env .env.local # Add REACT_APP_API_PRIVATE to .env.local
yarn start
```

However, if you are building for production for use on your personal machine, you can build it similarly:

```shell
# Add REACT_APP_API_PRIVATE to .env
yarn build
serve -s build
```

## ⚠️ It's not production ready :)

I made this project to get reacquainted with React basics and to try out the new Hooks feature.

A "roadmap" for this project could look something like this:

### Workflow

- If working on a team, create container for development (Dockerize)
- If developing for production, create centralized instructions and automation for build and deployment (Docker + a CI tool)

### App features

- Search bar, pagination, other basic catalog features...

### Code style

- Prefer scoped styling methods to traditional CSS methods and classes (e.g. Styled Components)
- Minimize code duplication (e.g. list rendering, request error handling)
- Centralize common styling variables, such as colors, padding, etc.
