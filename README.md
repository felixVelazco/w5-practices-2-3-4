# Express API + prisma (postgreSQL)

Repository that creates an API with Express dependencies that connects to a database with PostgreSQL (to help with this, we are goint to use prisma dependency).

## Prerrequisites
- [Node](https://nodejs.org/es/download/)
- [Npm](https://www.npmjs.com/) (It comes with the Node installation)
- [Git](https://git-scm.com/downloads)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Postman](https://www.postman.com/), [curl](https://curl.se/download.html) or any tool that helps you to send requests to an API via endpoints (Optional)

## Dependencies
- [prisma](https://www.prisma.io/) v3.13.0
- [cors](https://github.com/expressjs/cors) v2.8.5
- [express](https://github.com/expressjs/express) v4.18.1

## Installation 
Clone this repository
```console
> git clone https://github.com/felixVelazco/w5-practices-2-3-4.git
```

Open a terminal in the root folder and install dependencies
```console
> npm install
```

Create in your root folder, a file called .env and paste the following code (NOTE: You should modify `USERNAME`, `PASSWORD`, and `DB_NAME`):

```
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DB_NAME?schema=public"
```


**Rememeber:** 
this is your personal info, never share this to anyone and don't forget always to put `.env` file in `.gitignore`, so you won't share in your remote repository.
---
---

Create a database with postgreSQL, you can create it by PgAdmin (an user interface) or by terminal with:
```console
> psql -U USERNAME
```
After this, you should enter the password that you put on postgreSQL installation. After that, you can use `\l` to show all your local databases. To create a new one, use:

```console
> create database DB_NAME;
```

The name is the one we will use at `.env` file, so put the name exactly as your database.

Now, instead of using directly SQL, we are goint to use `prisma` to facilitate the process. You can check the code in `prisma/schema.prisma` file. In this file we create our tables. Run the following command:

```console
> npx prisma migrate dev --name init
```

This will create it a new `migration.sql` file. This will make your database  to be updated with tables `Explorer` y `Student`. You can check this in your psql terminal using `\dt` command or from PgAdmin or any other postgreSQL interface (in this last one, you should refresh page).

To add some users in your tables, you can modify `prisma/seed.js` file until you feel satisfied with all changes, and run the following command:

```console
> node prisma/seed.js
```

You can check all these changes were applied to your tables, now your DB is ready to be use. 

For *Usage* section, we are going to use this [project](https://github.com/felixVelazco/client-launchx.git) to have an UI. Just clone this repository to use it as well.
---

## Enpoints Explorer
| HTTP Method | Endpoint  | Description  | 
|-----|---|---|
| <span style="display: block; background-color:#61AFFE; color: white; width: 70px; text-align: center">**GET**</span>    | /explorers  | Show all the explorers data in the database  |
| <span style="display: block; background-color:#61AFFE; color: white; width: 70px; text-align: center">**GET**</span>    | /explorers/:id  | Show explorer by **id**  |
| <span style="display: block; background-color:#49CC90; color: white; width: 70px; text-align: center">**POST**</span>    | /explorers  | Creates a new explorer  |
| <span style="display: block; background-color:#FCA130; color: white; width: 70px; text-align: center">**PUT**</span>    | /explorers/:id  |  Update info by **id** |
| <span style="display: block; background-color:#F93E3E; color: white; width: 70px; text-align: center">**DELETE**</span>    | /explorers/:id  | Delete explorer by **id**  |

### POST Creates a new explorer
Body raw(json)
```json
{
    "name":"explorer18", 
    "username":"explorer18", 
    "mission": "Node",
    "azureCertification": true
}
```

### PUT Update info by id

Body raw(json)
```json
{
  "mission":"Node"
}
```

## Endpoints MissionCommander

| HTTP Method | Endpoint  | Description  | 
|-----|---|---|
| <span style="display: block; background-color:#61AFFE; color: white; width: 70px; text-align: center">**GET**</span>    | /missionCommanders  | Show all the mission commanders data in the database  |
| <span style="display: block; background-color:#61AFFE; color: white; width: 70px; text-align: center">**GET**</span>    | /missionCommanders/:id  | Show mission commander by **id**  |
| <span style="display: block; background-color:#49CC90; color: white; width: 70px; text-align: center">**POST**</span>    | /missionCommanders  | Creates a new mission commander  |
| <span style="display: block; background-color:#FCA130; color: white; width: 70px; text-align: center">**PUT**</span>    | /missionCommanders/:id  |  Update main stack by **id** |
| <span style="display: block; background-color:#F93E3E; color: white; width: 70px; text-align: center">**DELETE**</span>    | /missionCommanders/:id  | Delete mission commander by **id**  |

### POST Creates a new explorer
Body raw(json)
```json
{
    "name":"missionCommander4", 
    "username":"mc4", 
    "mainStack": "frontend",
    "currentEnrollment": true,
    "hasAzureCertification": false
}
```

### PUT Update info by id

Body raw(json)
```json
{
  "mainStack":"backend-node"
}
```

## Usage

First, you should run your database server project, you can do this with the following command:

```console
> npm run server
```

After running your DB server, in your client project, run a server too:

```console
> npm run serve
```

Open your web browser and enter to `http://localhost:8080/`. You will see something like this: 
![Localhost page](assets/img/page1.JPG)

You can click in any of the explorers name, and you will get some data.

![Edit menu](assets/img/page2.JPG)

When you press the `Editar` button, you will access to a new route, where you can edit the mission, or delete that register.

![Edit page](assets/img/page3.JPG)

Also you can add a new explorer, you just need to go navigation menu, and put `Agregar Explorer`.

![Edit page](assets/img/page4.JPG)

In the navigation bar, you can also find `mission commanders` page: 

![Edit page](assets/img/page5.JPG)

You can also edit `Main Stack` input. Also you can delete that register if you need to:

![Edit page](assets/img/page6.JPG)

Also, you can add a new Mission Commander:

![Edit page](assets/img/page7.JPG)