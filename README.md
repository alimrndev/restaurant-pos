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
3. Setup db postgresql and Build the container (if you need customize open file docker-compose.yml)
```
docker compose up --build -d
```

## Backend Install and Start
4. Install Backend dependencies:

   ```bash
   npm install
   ```

5. Start Backend:

   ```bash
   npm start
   ```

## Frontend Install and Start
6. Move to the Frontend directory

   ```bash
   cd client
   ```
   
7. Install Frontend dependencies:

   ```bash
   npm install
   ```

8. Start Frontend:

   ```bash
   npm start
   ```

   See your restaurant landingpage at http://localhost:4200/

# Database:
- **Database System:** PostgreSQL
- **Database Schema:**
  ![db-schema](https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/DB%20Restaurant%20Ordering%20Diagram%20New.png?alt=media&token=29a898b8-2cad-49ea-b60e-7186b73e38e3)


# License

[MIT License | Copyright © 2024 Muhammad Ali Imron, S.Kom. All rights reserved.](https://choosealicense.com/licenses/mit/)
