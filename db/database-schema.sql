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
  'waiting-payment',
  'payment-success', 
  'progress', 
  'ready', 
  'completed'
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  fullname VARCHAR(100),
  role role_enum NOT NULL DEFAULT 'customer', -- customer, admin, manager, cashier
  picture VARCHAR(255),
  gender VARCHAR(10), -- male, female
  phone VARCHAR(20),
  address VARCHAR(255),
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description VARCHAR(255),
  picture VARCHAR(255),
  email VARCHAR(100),
  website VARCHAR(255),
  location VARCHAR(255),
  google_maps_link VARCHAR(255),
  instagram_link VARCHAR(255),
  tiktok_link VARCHAR(255),
  facebook_link VARCHAR(255),
  twitter_link VARCHAR(255),
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  description VARCHAR(255),
  picture VARCHAR(255),
  price FLOAT NOT NULL DEFAULT 0,
  qty INTEGER NOT NULL DEFAULT 0,
  discount_type VARCHAR(100) DEFAULT 'nominal',  -- nominal, percentage
  discount_value FLOAT DEFAULT 0,
  category VARCHAR(100) NOT NULL DEFAULT 'alacarte',
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_number VARCHAR(100),
  order_date DATE DEFAULT CURRENT_TIMESTAMP,
  order_type order_type_enum NOT NULL DEFAULT 'dine-in', -- dine-in, take-away
  order_table INTEGER DEFAULT 0,
  order_status order_status_enum NOT NULL DEFAULT 'waiting-payment',  -- waiting-payment, payment-success, progress, ready, completed
  subtotal_price FLOAT DEFAULT 0,
  tax_percentage FLOAT DEFAULT 0,
  tax_price FLOAT DEFAULT 0,
  total_price FLOAT DEFAULT 0,
  pic_id INTEGER DEFAULT 2, -- Manager / Task Charge Manage People
  cashier_id INTEGER DEFAULT 3, -- Cashier / Task Payment
  payment_date DATE,
  chef_id INTEGER DEFAULT 4, -- Chef / Task Cook / Progress
  progress_date DATE,
  waiter_id INTEGER DEFAULT 5, -- Waiter / Task Serve / Completed
  completed_date DATE,
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_states (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  order_status order_status_enum NOT NULL,  -- waiting-payment, progress, ready, completed
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  order_date DATE DEFAULT CURRENT_TIMESTAMP,
  menu_item_id INTEGER NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  order_note VARCHAR(255),
  price FLOAT NOT NULL,
  qty INTEGER NOT NULL,
  discount_type discount_type_enum DEFAULT 'nominal',  -- nominal, percentage
  discount_value FLOAT DEFAULT 0,
  subtotal FLOAT NOT NULL,
  item_status VARCHAR DEFAULT 'waiting-payment', -- waiting-payment, progress, ready, completed
  chef_id INTEGER DEFAULT 4, -- Chef / Task Cook / Progress
  progress_date DATE,
  waiter_id INTEGER DEFAULT 5, -- Waiter / Task Serve / Completed
  completed_date DATE,
  created_by INTEGER DEFAULT 1,
  updated_by INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
