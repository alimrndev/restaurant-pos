# Restaurant Ordering System (POS)
- This project builds a full-stack web application for restaurant ordering.
- Users can browse menus, place orders, and manage their accounts. 
- The application utilizes Ember.js, IBM Loopback 3, and PostgreSQL.

# Requirements
## Runtime:
- **Engine:** [Node.js v16.20.2](https://nodejs.org/en/download)
Download Link:
```
https://nodejs.org/en/download
```

## Dockerize:
- **Dockerize:** [Docker Desktop](https://www.docker.com/products/docker-desktop/)
Download Link:
```
https://www.docker.com/products/docker-desktop/
```

## Frontend:
- **Framework:** [Ember.js v5.3.0](https://guides.emberjs.com/release/getting-started/quick-start/)
```
npm install -g ember-cli@5.3.0
```

## Backend:
- **Framework / API:** [IBM Loopback 3](https://loopback.io/doc/en/lb3/)
```
npm install -g loopback-cli@3
```

# Getting Started Locally
## Clone Repository

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/alimrndev/restaurant-pos.git
   ```

2. Move to the cloned directory

   ```bash
   cd restaurant-pos
   ```

## Setup Database using Docker
3. Setup db postgresql and Build the container 
   
    ```
    docker compose up --build -d
    ```
    (if you need customize open file docker-compose.yml)
    ```bash
    Path File /docker-compose.yml
    ```

## Backend Install and Start
4. Install Backend dependencies:

   ```bash
   npm install
   ```

5. Customize datasource and model-config to your DB Postgresql Connection String:
   
   Customize datasource to your db connection string:
     ```bash
     Path File /server/datasource.json

     "postgreDs": {
        "host": "localhost",
        "port": 5435,
        "url": "",
        "database": "db_restaurant",
        "password": "password",
        "name": "postgreDs",
        "user": "user_restaurant",
        "connector": "postgresql",
        "min": 5,
        "max": 200,
        "idleTimeoutMillis": 60000,
        "ssl": false
      }
     ```
   Customize model-config to your own datasource (postgreDS):
     ```bash
     Path File /server/model-config.json
     
     Example Change to your Data Source:
     
     (Before)
     "users": {
        "dataSource": "db",
        "public": true
      },

     (After)
     "users": {
        "dataSource": "postgreDs",
        "public": true
      },
     ```
   
7. Start Backend:

   ```bash
   npm start
   ```

## Frontend Install and Start
7. Move to the Frontend directory

   ```bash
   cd client
   ```
   
8. Install Frontend dependencies:

   ```bash
   npm install
   ```

9. Start Frontend:

   ```bash
   npm start
   ```

   See your restaurant landingpage at http://localhost:4200/


# Documentation
### Page Documentation:
- [Restaurant - Page](https://github.com/alimrndev/restaurant-pos/blob/main/page-doc.md)

### API Documentation:
- [Restaurant - REST API](https://github.com/alimrndev/restaurant-pos/blob/main/api-doc.md)

### Database Documentation:
- [Restaurant - Database Schema](https://github.com/alimrndev/restaurant-pos/blob/main/db-schema-doc.md)


# License

[MIT License | Copyright © 2024 Muhammad Ali Imron, S.Kom. All rights reserved.](https://choosealicense.com/licenses/mit/)
