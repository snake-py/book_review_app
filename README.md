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
All requests send back a message and status.

| Route | Required data | Response data | Protected | Request type | Comment |
| ----- | ------------- | ------------- |---------- |------------- | ------- |
| /api/user/register |  username, email, password | status, message |  guest  | post | It only registers the user - I want to implement email verification and let the user only log in if the user is verfied. |
| /api/user/login | username, pw or email, pw | status, message, token | guest | post | the token must be saved in the FE as auth.token in the session or cookie |
| /api/user/ban | user_id | ban status | admin | post | The methode changes the ban status either isBanned: false or true |  
| /api/user/ | user_id | user | admin | delete | Currently only admin can delete users |


### BookController

| Route | Required data | Response data | Protected | Request type | Comment |
| ----- | ------------- | ------------- |---------- |------------- | ------- |
| /api/books/click | isbn, title, author, thumbnail | status, success, message  | guest | post | By clicking the book in the search page, the book get added to the database. |
| /api/books/like | user_id, book_id | status, liked, message |member | post | A member likes or unlikes a book (if previously liked) |
| /api/books/liked | user_id |status, likedBooks, message | member | get | The member can see all his liked books |  

### ReviewController

| Route | Required data | Response data | Protected | Request type | Comment |
| ----- | ------------- | ------------- |---------- |------------- | ------- |
| /api/book/review/add | reviewTitle, rating, text, userId, bookId, isbn, bookTitle, author, thumbnail, bookLikeSum, bookClickCounter, bookAverageRating, | status, success, message  | member | post | The member can add a review to a book |
| /api/book/review/get | user_id | status, reviewedBooks, message |member | get | A member gets all the books he has reviewed. |
| /api/book/review/  | title, rating, text, user_id, book_id |status, success , message | member | delete | The member can delete a review |  


## License

Standard MIT License
