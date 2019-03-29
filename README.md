# vue-cli3-template

基于 vue cli3 的模板

- vue + vue-router + vuex
- 代码规范： eslint + prittier
- css 预处理： less
- unit 测试： mocha + chai + istanbul（测试覆盖率）
- e2e 测试： cypress

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

### Run your end-to-end tests

```
yarn run test:e2e
```

### Run your unit tests

```
yarn run test:unit
```

### Run your unit tests with coverage

```
yarn run test:cov
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 代码规范（vscode)

formatOnSave and keep correspondence with `yarn lint`

settings.json

```

{
"prettier.eslintIntegration": true,
"eslint.validate": [
"javascript",
"javascriptreact",
"html",
{ "language": "vue", "autoFix": true },
{ "language": "html", "autoFix": true }
],
"eslint.autoFixOnSave": true,
"editor.formatOnSave": true
}

```

```

```
