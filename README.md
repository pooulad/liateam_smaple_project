# React + TypeScript + Vite
![screencapture-localhost-5173-category-10-2023-09-13-19_49_43](https://github.com/pooulad/liateam_smaple_project/assets/86445458/0129f1a4-1fd1-4bf8-96aa-67b8215a9eb5)
![screencapture-localhost-5173-2023-09-13-19_49_08](https://github.com/pooulad/liateam_smaple_project/assets/86445458/f8a15664-3915-41e4-9d06-b82775b7360d)
![screencapture-localhost-5173-category-10-2023-09-13-19_49_24](https://github.com/pooulad/liateam_smaple_project/assets/86445458/2b7a32f1-c65a-4760-b54f-5cd5b34d65d6)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
