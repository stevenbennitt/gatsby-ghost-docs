## Installation from Source

1. `git clone` this repo & `cd` into it as usual
2. `git submodule update --init` to pull down the submodules
3. `npm install --global gatsby-cli` to install Gatsby
4. `yarn` to install top-level dependencies.


### Run Locally

```
gatsby develop
```
- View: [http://localhost:8000](http://localhost:8000)
- Alias: `yarn dev`


### Create Production Build

```
gatsby build
```

and

```
gatsby serve
```

- View: [http://localhost:9000](http://localhost:9000)
- Alias: `yarn serve`


## Testing

Before submitting changes, run

```
yarn test
```

This will run some tests to verify that

- Algolia integration works
- Frontend works as expected
- No linting issues are present
