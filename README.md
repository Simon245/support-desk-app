# Support Desk App

This is a MERN (MongoDB, Express, React, Node.js) application to create and view support desk tickets.

## Features
- Full-stack JavaScript application
- RESTful API with Express.js
- MongoDB database with Mongoose
- React frontend with hooks and state management
- Redux for global state management
- Authentication with JWT

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Simon245/support-desk-app.git
   cd your-repo
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   npm install
   cd frontend / npm install
   ```

## Environment Variables
Create a `.env` file in the backend directory and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES=30d
   PORT=5000
   ```

## Running the Application

### Backend (Express Server)
```sh
npm run server
```

### Frontend (React App)
```sh
npm run client
```

## API Routes
| Method | Route                        | Description        |
|--------|------------------------------|--------------------|
| GET    | /api/users/user              | Get current user   |
| POST   | /api/users                   | Register a user    |
| POST   | /api/users/login             | login a user       |
| GET    | /api/tickets                 | Get all tickets    |
| GET    | /api/tickets/:ticketId       | Get single tickets |
| POST   | /api/tickets                 | Create an ticket   |
| POST   | /api/tickets                 | Create an ticket   |
| PUT    | /api/tickets/:ticketId       | Update a ticket    |
| DELETE | /api/tickets/:ticketId       | Delete a ticket    |
| GET    | /api/tickets/:ticketId/notes | Get ticket notes   |
| POST   | /api/tickets/:ticketId/notes | Create ticket note |

## Deployment
For production, build the frontend and serve it with the backend:
```sh

```

## License
This project is licensed under the MIT License.

