# GraphQL API example

Simple GraphQL API example to handle data from a PostgreSQL database containing a table of Movies<br>
This project was made using
[TypeGraphQL](https://typegraphql.com/) +
[Prisma](https://www.prisma.io/) +
[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## Quick Start

1. Install the dependencies<br>
   With yarn: `yarn install`
   or
   with npm: `npm install`

2. Create a `.env` file in the root folder containing the credentials to your database<br>
   In this project PostgreSQL was used and the file have this structure

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
```

3. Creating the table Movies and applying seed to the database:<br>
   `yarn prisma migrate dev` or `npx prisma migrate dev`

Note: If you don't want to seed your database, remove the lines below from your `package.json` file

```json
"prisma": {
    "seed": "tsnd --transpile-only prisma/seed.ts"
}
```

4. Run the project using `yarn dev` or `npm run dev`

## Usage

After starting the server, go to `http://localhost:4000/` to access the playground

Example
![query](https://user-images.githubusercontent.com/72332090/215975065-97a5ba3e-27e9-451b-95fc-7730d744f5ba.gif)
