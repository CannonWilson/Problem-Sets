# Finale Problem Set #2: Find and Filter

---

In this problem set, you will use React Router and Express
Router to organize your frontend and backend, respectively.

Your frontend should have two views, the first one which
displays the home page's view at `'/'` and the second one which 
displays another view at `'/count'`. This second view should
have two input fields; the first one allows the user to input the
*field* that they would like to search by (such as `name`, `email`, `phone`, etc.),
and it can be a text input field or a dropdown if you want more of
a challenge. The second field allows the user to input the *value* they
would like to search by. A button should be next to 
these input fields that allows the user to submit their
query.

Below these elements, there should be an empty `<p>` tag.
This tag should contain text that shows the number of documents
found from the query, or it should display an error message if 
an error occurs while interacting with the database.

On the backend, you should use separate routes for each
valid lookups. This means that if you want to be able to search
by name, by email, and by phone number, you should create routes
like `'/users/name'`, `'/users/email'`, and `'/users/phone'` (remember
to use Express router to organize your routes).

Finally, you should use a dotenv file to store your MongoDB
connection string.