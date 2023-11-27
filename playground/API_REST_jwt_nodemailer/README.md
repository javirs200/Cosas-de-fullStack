# JWT Nodemailer Workshop :e-mail:

API REST of user login/sign-up, logout and view and edit a list of products with with Node.js, Express and MongoDB using jwt(jsonwebtoken) authentication and Nodemailer to reset and recover password

## Libraries

- Express
- Bcrypt
- Nodemailer
- Dotenv
- Jsonwebtoken
- Mongoose
- Pug

## Installation

Install dependencies and devdependencies
```javascript
npm i 
```

Start project in localhost:3000
```javascript
npm start
```

## Tutorial

This demo uses [Mailtrap](https://mailtrap.io) to test email sending.

1. Sign up and log in in Mailtrap<br>
2. Go to Email Testing > start testing<br>
3. Add Inbox -> Name the Inbox and save.<br>
4. Go to settings ⚙️ > Integrations > node.js - nodemailer.<br> 
You will get a code snippet like this. 

```js 
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "*********95625",
    pass: "********eea0"
  }
});
```

In your project go to `config/nodemailer.js`

- Import nodemailer 
- Copy the previous snippet
- Export the module

Set your .env with these variables:
- URL_MONGO= your mongo connection
- ULTRA_SECRET_KEY= jwt's key
- URL_RECOVER= url to recover password, in this case use http://localhost:3000

Then go to your Rest Client (I use Advanced Rest Client) and make your signup request.

![img](/assets/signup.gif)

This will create a document in your DB with the user data. Logged value will be false by default.

![img](/assets/signdoc.png)

Make a login request using your user data. Then copy and save the token.

![img](/assets/login.gif)

The logged value will change to true.

![img](assets/mongodoc.png)

Now, paste your token in the header and make a GET request to see the products.

![img](assets/getproducts.gif)

You can make POST request to create a product and insert it in the DB.

![img](assets/createproduct.gif)

If you make a logout, the logged value will change to false and you wouldn't get or create products untill login again.

![img](assets/logout.gif)
![img](assets/logoutgetproducts.gif)

To send a recover password email make a GET request with the user email.

![img](assets/recoveremail.gif)

Now go to your email inbox and you will see the sent email to recover your password, click and copy the URL in to your Rest Client, make a PUT request and send in the boby the new password.

![img](assets/resetpassword1.gif)
![img](assets/resetpassword2.gif)

Login with the new password.

![img](assets/newlogin.gif)
