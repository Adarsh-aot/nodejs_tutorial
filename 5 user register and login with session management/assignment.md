### Assignment Description

#### Objective:
Create a user registration and login system using EJS templates and Express.js.

#### Requirements:

1. **User Registration Page:**
   - Create a registration page using EJS where users can register by providing their email address and password.
   - If the registration is successful, the user should be redirected to the home page.
   - If the email address already exists in the system, display an error message indicating that the email is already in use.

2. **User Login Page:**
   - Create a login page using EJS where users can log in using their email address and password.
   - If the login is successful, the user should be redirected to the home page.
   - If the email or password is incorrect, display an error message indicating invalid credentials.

3. **Home Page:**
   - Create a simple home page that users see after they successfully log in or register.

4. **Session Management:**
   - Use Express session management to maintain user login sessions.

5. **User Data Management:**
   - Use an array to store user data instead of a database.

#### Pages Required:
- **Home Page:** A minimal design showing a welcome message or user-specific content.
- **Register Page:** A form for users to input their email and password.
- **Login Page:** A form for users to input their email and password.

#### Functional Requirements:
- Ensure the user cannot register with an already registered email address.
- Redirect the user to the home page upon successful registration or login.
- Display appropriate error messages for registration or login failures.

#### Example Structure:

1. **App Setup:**
   - Initialize an Express application.
   - Set up EJS as the template engine.
   - Set up middleware for parsing form data and managing sessions.

2. **Routes:**
   - `GET /register` - Display the registration page.
   - `POST /register` - Handle user registration.
   - `GET /login` - Display the login page.
   - `POST /login` - Handle user login.
   - `GET /home` - Display the home page (protected route).

3. **Session Management:**
   - Use express-session to manage user sessions.
   - Protect the home page route to ensure only logged-in users can access it.

4. **User Array:**
   - Maintain an array to store user information, including email, and password.

#### Sample User Array Structure:
```javascript
let users = [
  {
    email: 'user@example.com',
    password: 'password123'
  }
];
