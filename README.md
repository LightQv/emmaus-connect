## Introduction

For the second Hackathon at Wild Code School in 2023, we had 48h to develop a solution for Emmaüs-Connect to help the volunteers to calculate prices for second-hands smartphone devices for people in needs.
Here's the Regional Winner (Lyon Campus) and France Finalist project.

## Concept

In a team of 4 persons (including me), we developed a fully scalable calculator using React.js, Express.js & mySQL.
After the Login you can either being redirected on the _Admin_ or Voluunter interface based on your _account status_.
_Administrator_ have access to the _database_ datas (smartphone brand, model, RAM units, stockage units, color, device condition, screen size and network) and can update everything simply by uploading _.csv_ files. He have access to a dashboard with a view on every _voluunter's account_ and can add, edit or delete any account.
_Volunteers_ have access to the _calculator_ with _auto-suggestion_ for each fields based on database datas. Once the price is calculated, a category is also associated to help the _voluunter_ to classify the device. Their is a _chat-bot_ available if the _volunteer_ dosen't know a term as _RAM_ or anything else. And also a F.A.Q if they have any question how works the calculator.

## Setup

- Clone this repo
- If you are using `yarn` or `pnpm`, adapt the `config/cli` in `package.json`
- Run command `npm install`
- Run command `npm run migrate`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

## Configuration

Create `.env` files in /frontend and /backend following `.env.sample` examples.

## Use

- Run Frontend and Backend server with one command : `npm run dev`
- Express server will be accessible at the address set in the /frontend's .env
- React client will be accessible at the address set in the /backend's .env

- To try the calculator, you can Login to a _Volunteer account_ with : _luciechev@gmail.com_ and _serenity_.

### Available Commands

- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Insight

_Login Page_

![Alt text](https://imgur.com/a39c56bd-8faf-4e45-82f6-1823eb8d4869 "Login Page")


_Admin's upload system_

![Alt text](https://imgur.com/cc1c3cb9-86b5-4734-80f7-5b2fd067c5f5 "Upload Page")


_Chat-bot window_

![Alt text](https://imgur.com/55c28b54-6123-4f93-9fc0-fa964244283b "Chat-bot")


_Calculator_

![Alt text](https://imgur.com/b322c3c6-19c9-424f-9946-3c75a9312c60 "Calculator")
