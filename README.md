# Overview

The backend part of the fullstack challenge by shawn and partners

## Sumary

- [ How to setup ](#how-to-setup)
- [ Avaliabe Routes ](#avaliable-routes)
- [ Scripts ](#scripts)
- [ Code Linters ](#code-linters)

## How to Setup

After download the project run this command to install the project dependencies

```
yarn
```

Now you have 2 options to start the project:

1. Start the apllication in development mode
2. build and start the project

Option 1:

```
yarn dev
```

Option2:

```
yarn start
```

Now you can open your browser on http://localhost:3333 and the aplicattion will be running.

## Avaliable Routes

- `GET - /api/users?since={number}`:
  This endpoint must return a list of GitHub users and the link for the next page.

- `GET - /api/users/:username/details`:
  This endpoint must return the details of a GitHub user

- `GET - /api/users/:username/repos`:
  This endpoint must return a list with all user repositories

## Scripts

There is four types of scritpts on the project

- `dev`: Run the aplicattion on development mode, so you can edit files on the aplicattion and the server will re-start automatically. **note**: This script isn't recommend for **production**
- `test`: Run the tests of the aplicattion
- `build`: Generate a production build of the aplicattion
- `start`: builds and star the aplication

## Code Linters

This project use two different code linters and a another
extension to the IDE, that is...

### Eslint

Or EcmaScriptLint, is the linter responsible to check problems in the syntax and return errors, your configurations are shared and used by others linters

### Prettier

This linter is used only for check the **code style**, they don't will check the syntax, just find a way to do the code more **legible** and have a integration with **eslint**

### Editor Config

That isn't a linter, just a extension to share some configs between other editors, like the format of the end of lines, identation with spaces or tabs, etc...
