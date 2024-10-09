> This project was bootstrapped with [Vite](https://vitejs.dev/).

# DomoApps Advanced App Platform Package

Vite Template optimized for advanced DomoApp usage.

- The manifest and thumbnail are provided in the `public` folder.
- The proxy server is setup with `@domoinc/ryuu-proxy` for local development to your domo instance.
- An upload script has been added to the package.json for easy upload.

Steps to get going:

1. Use the domoapps cli to login to your Domo instance `domo login`
2. Upload your base app to your Domo instance using `pnpm upload`

- The project will build, add all assets to the `build` folder, and then upload those assets to Domo

3. The `manifest.json` file in the `build` folder will be modified by the domoapps cli to include an `id` property. You will want to copy this `id` into the manifest in your `public` folder so that it doesn't continue to create a new `id` on each upload
4. If you intend to use AppDB, make sure to also add a `proxyId` to the `manifest.json` file in your `public` folder (or overrides). See [documentation](https://developer.domo.com/docs/dev-studio/step4#Set%20Up%20Your%20Proxy) for more info.
5. Generate new `components` and `reducers` using the `pnpm generate` command (more info below).

## Available Scripts

In the project directory, you can run:

### `pnpm generate`

Allows you to generate components or redux slices.

**Components**

The command `pnpm generate component` will generate a new component and add it to the components folder of your project.
There are 3 parameters to the `component` generator that you will be prompted for if you do not provide them inline:

- Component Name
- Whether or not you would like to include a test file (y/n)
- Whether or not you would like to include a storybook file (y/n)

You can provide these parameters inline if you want: `pnpm generate component [myComponentName] [y/n] [y/n]`.

**Redux Slices**

The slice generator only has one parameter: its name. You can generate a slice using the command `pnpm generate slice mySlice`. If you do not provide a name you will be prompted for one. Generating a slice will produce the following modifications to your project:

- A new folder will be created in the `/src/reducers` directory of your project and an `slice.ts` file will be added to it with some boiler plate examples of creating reducer actions and selectors using Redux Toolkit. More info can be found in the Redux Toolkit [documentation](https://redux-toolkit.js.org/api/createSlice).
- The `index.ts` file in the base of the reducer folder will be modified to import your new slice and wire it up. As long as you always create slices using the generator command, you should never need to touch this file.

### `pnpm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in watch mode.
See the section about [writing tests](https://vitest.dev/guide/#writing-tests) for more information.

### `pnpm build`

Builds the app for production to the `build` folder.

### `pnpm storybook`

Starts up a storybook server to host any components that have been generated with a storybook file.

More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
