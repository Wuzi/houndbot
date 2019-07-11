# Houndbot

A discord bot

## Getting Started

```bash
# install packages
npm install

# create the .env file (do not remove .env.example)
cp .env.example .env

# config the env variables (you can use any editor)
nano .env

# run
npm start

# run (with auto-restart)
npm run watch
```

## Env variables
* BOT_TOKEN - The token of the [discord bot](https://discordapp.com/developers/applications/)
* API_KEY - The [Riot Api Key](https://developer.riotgames.com/)
* PREFIX - The text users will have to type to trigger bot commands (ex: **!bot** {command} {args})
* DB_DIALECT - Dialect of database: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'mariadb'
* DB_HOST - Hostname of database
* DB_PORT - Port of database
* DB_USER - User of database
* DB_NAME - Name of database
* DB_PASSWORD - Password of database
* DEBUG - Set if console should print debug information

## Built With

* [DiscordJS](https://discord.js.org/#/)
* [Typescript](https://www.typescriptlang.org/)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/houndour/houndbot/tags).
