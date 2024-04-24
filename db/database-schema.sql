-- File: restaurant_ordering.sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE role_enum AS ENUM (
  'admin',
  'customer',
  'manager',
  'cashier',
  'chef',
  'waiter'
);

CREATE TYPE discount_type_enum AS ENUM (
  'nominal',
  'percentage'
);

CREATE TYPE order_type_enum AS ENUM (
  'dine-in', 
  'take-away'
);

CREATE TYPE order_status_enum AS ENUM (
  'pending', 
  'waiting-payment',
  'payment-success', 
  'in-progress', 
  'ready', 
  'completed', 
  'already-reviewed',
  'cancelled',
  'refunded'
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100) UNIQUE,
  google_id VARCHAR(50),
  role role_enum NOT NULL DEFAULT 'customer', -- customer, admin, manager, cashier
  fullname VARCHAR(50),
  picture VARCHAR(255),
  gender VARCHAR(10),
  birthdate DATE,
  phone_number VARCHAR(20),
  address VARCHAR(255),
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  picture VARCHAR(255),
  email VARCHAR(100) UNIQUE,
  website VARCHAR(255),
  location VARCHAR(255),
  google_maps_link VARCHAR(255),
  instagram_link VARCHAR(255),
  tiktok_link VARCHAR(255),
  facebook_link VARCHAR(255),
  twitter_link VARCHAR(255),
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE opening_hours (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
  day_of_week VARCHAR(20),
  opening_time VARCHAR(20) DEFAULT '09:00 AM',
  closing_time VARCHAR(20) DEFAULT '21:00 PM',
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description VARCHAR(255),
  picture VARCHAR(255),
  price FLOAT NOT NULL,
  qty INTEGER DEFAULT 0,
  discount_type discount_type_enum DEFAULT 'nominal',  -- nominal, percentage
  discount_value FLOAT DEFAULT 0,
  category VARCHAR(100) NOT NULL DEFAULT 'alacarte',
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_type order_type_enum NOT NULL DEFAULT 'dine-in', -- dine-in, take-away
  order_table INTEGER,
  order_status order_status_enum NOT NULL DEFAULT 'pending',  -- pending, waiting-payment, payment-success, in-progress, ready, completed, already-reviewed, cancelled, refund
  item_price FLOAT DEFAULT 0,
  tax_percentage FLOAT DEFAULT 0,
  tax_price FLOAT DEFAULT 0,
  total_price FLOAT DEFAULT 0,
  completion_date DATE,
  rating INTEGER,
  comment VARCHAR(255),
  pic_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT 1, -- Manager
  cashier_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT 1, -- Cashier
  chef_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT 1, -- Chef
  waiter_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT 1, -- Waiter
  order_date TIMESTAMP,
  payment_date TIMESTAMP,
  cook_date TIMESTAMP,
  serve_date TIMESTAMP,
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_states (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  order_status order_status_enum NOT NULL,  -- pending, waiting-payment, payment-success, in-progress, ready, completed, already-reviewed, cancelled, refund
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  order_note VARCHAR(255),
  price FLOAT NOT NULL,
  qty INTEGER NOT NULL,
  discount_type discount_type_enum DEFAULT 'nominal',  -- nominal, percentage
  discount_value FLOAT DEFAULT 0,
  chef_id INTEGER REFERENCES users(id) ON DELETE CASCADE DEFAULT 1, -- Chef
  item_status VARCHAR DEFAULT 'cook', -- cook, ready
  cook_date TIMESTAMP,
  created_by INTEGER REFERENCES users(id) DEFAULT 1,
  updated_by INTEGER REFERENCES users(id) DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
