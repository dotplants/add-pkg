![img](https://i.imgur.com/zyhDxxP.png)

# What's this?

**add-pkg** provides some package manager installation commands in one command. ♨︎

For example, you can write in one line how to install your package.

### 🙄 Before:

```bash
npm install <your-package> # npm
yarn add <your-package> # yarn
```

### ✨ After:

```bash
npx add-pkg <your-package>
```

# Supporting package managers

- [yarn](https://yarnpkg.com/)
- [npm](https://www.npmjs.com/)

## To do

- [pnpm](https://pnpm.js.org/)

# Usage

### Install to `dependencies`

```bash
npx add-pkg <your-package>
```

### Install to `devDependencies`

- `-d` or `-D` or `--dev`

```bash
npx add-pkg <your-package> -d
```

### Install to global

- `-g` or `-G` or `--global`

```bash
npx add-pkg <your-package> -g
```

### Run `dry-run`

> Check the command to be executed

```bash
npx add-pkg <your-package> --dry-run
```

# License

- code: MIT
- icon: Icon made by [Freepik](https://www.freepik.com/) from www.flaticon.com
