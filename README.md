# Book Review

This book review app is a MERN stack app, which uses the Open Library API and is programmed by laert-iskurti and snake_py.

## Installation

After you download the reposetory, you have to cd into the backend and the frontend and run each time:

```bash
npm install
```

## Start Express

To start express run within the backend folder:

```bash
npm start
```

## Data Models

User, Book, Favorites, Liked, Review, query_data, book_data, excel

## API
In this section the Controllers and their functionality will be described.

### UserController
| Route | JSON Data the Controller Requires | Response JSON Data | Protected | request Type | Comment |
| ----- | --------------------------------- | ------------------ |---------- |------------- | ------- |
| /api/user/register |  username, email, password | status, message |  guest  | post | It only registers the user - I want to implement email verification and let the user only log in if the user is verfied. |


### BookController

| Route | JSON Data the Controller Requires | Response JSON Data | Comment | Protected |
| ------------ | ------------- | ------------- |------------- |
| /api/book/whatever | list data  | list data  | What will it do? | Admin/User/Guest? |


## License

Standard MIT License
