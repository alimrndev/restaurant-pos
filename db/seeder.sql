CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insert dummy data for users
INSERT INTO users (username, fullname, gender, email, role, picture, password)
VALUES
  ('admin', 'Mr Admin', 'male', 'admin@restaurant.com', 'admin', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10))),
  ('manager', 'Mr Manager', 'male', 'manager@restaurant.com', 'manager', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10))),
  ('cashier', 'Mr Cashier', 'male', 'cashier@restaurant.com', 'cashier', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10))),
  ('chef', 'Mr Chef', 'male', 'chef@restaurant.com', 'chef', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10))),
  ('waiter', 'Mr Waiter', 'male', 'waiter@restaurant.com', 'waiter', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10))),
  ('customer', 'Mr Customer', 'male', 'customer@restaurant.com', 'customer', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/placeholder.jpg?alt=media&token=d84bb011-3d31-426b-870f-34812515a394', crypt('password', gen_salt('bf', 10)));

-- Insert dummy data for restaurants
INSERT INTO restaurants (
  name,
  description,
  picture,
  email,
  website,
  location,
  google_maps_link,
  instagram_link,
  tiktok_link,
  facebook_link,
  twitter_link,
  created_by,
  updated_by
)
VALUES (
  'Restaurant Nusantara',
  'Welcome to Restaurant Nusantara, Looking for amazing food.',
  'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9',
  'info@restaurantnusantara.com',
  'https://www.restaurantnusantara.com',
  'Jl. Sudirman No. 123, South Jakarta',
  'https://www.google.com/maps/place/Restaurant+AYCE',
  'https://www.instagram.com/restaurantnusantara',
  'https://www.tiktok.com/@restaurantnusantara',
  'https://www.facebook.com/restaurantnusantara',
  'https://twitter.com/restaurantnusantara',
  1,
  1
);

-- Insert dummy data for menu_items
INSERT INTO menu_items (name, description, price, stock, discount_type, category, picture)
VALUES
  ('Paket Nusantara (Lunch)', 'Nikmati buffet makan siang tanpa batas dengan berbagai hidangan.', 100000, 25, 'nominal', 'package', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Paket Nusantara (Dinner)', 'Manjakan diri Anda dengan pengalaman makan malam yang menyenangkan dengan pilihan all-you-can-eat kami.', 200000, 25, 'nominal', 'package', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),

  ('Steak Wagyu A5', 'Nikmati kelezatan steak Wagyu A5 premium kami yang lumer di mulut.', 1999000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Salmon Teriyaki', 'Salmon panggang yang dilapisi saus teriyaki manis dan gurih.', 699000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Kari Ayam Katsu', 'Ayam goreng tepung renyah disajikan dengan saus kari yang kaya dan beraroma.', 499000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Pad Thai', 'Tumisan mie klasik Thailand dengan mie beras, sayuran, dan pilihan protein Anda.', 399000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Pizza Margherita', 'Pizza sederhana namun memuaskan dengan topping saus tomat dan keju mozzarella.', 459000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),

  ('Teh Lemon', 'Es teh menyegarkan dengan sedikit lemon.', 9900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Teh Thailand', 'Teh Thailand yang creamy dan beraroma dengan warna oranye yang khas.', 12900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Jus Jeruk', 'Jus jeruk segar yang kaya akan Vitamin C.', 8900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Air Mineral', 'Air mineral bersoda atau mineral biasa untuk menghilangkan dahaga Anda.', 5900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Kopi Es', 'Kopi es menyegarkan untuk membangkitkan semangat Anda.', 11900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),

  ('Kentang Goreng', 'Kentang goreng renyah dan keemasan, cocok untuk dinikmati bersama.', 159000, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Potato Wedges', 'Potato wedges yang berbumbu, alternatif lezat untuk kentang goreng.', 179000, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Sayuran Campur', 'Campuran sayuran kukus yang berwarna-warni dan sehat.', 129000, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Roti Bawang Putih', 'Roti bawang putih yang hangat dan bermentega, cocok untuk dicocol.', 89000, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9'),
  ('Salad', 'Salad segar dan renyah dengan pilihan dressing Anda.', 149000, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9');

-- Insert dummy data for orders
INSERT INTO orders (customer_id, order_number, order_status, subtotal_price, tax_percentage, tax_price, total_price)
VALUES
  (6, 'ORD-001', 'completed', 100000, 0.11, 11000, 111000),
  (6, 'ORD-002', 'ready', 100000, 0.11, 11000, 111000),
  (6, 'ORD-004', 'progress', 100000, 0.11, 11000, 111000),
  (6, 'ORD-005', 'waiting-payment', 100000, 0.11, 11000, 111000);
 
 -- Insert dummy data for order_items
INSERT INTO order_items (order_id, menu_item_id, price, qty, subtotal, item_status)
VALUES
  (1, 1, 100000, 1, 100000, 'completed'),
  (2, 1, 100000, 1, 100000, 'ready'),
  (3, 1, 100000, 1, 100000, 'progress'),
  (4, 1, 100000, 1, 100000, 'waiting-payment');

-- Insert dummy data for order_states
INSERT INTO order_states (order_id, order_status, created_by, updated_by)
VALUES
  (1, 'waiting-payment', 6, 6),
  (1, 'progress', 3, 3),
  (1, 'ready', 4, 4),
  (1, 'completed', 5, 5),
  (2, 'waiting-payment', 6, 6),
  (2, 'progress', 3, 3),
  (2, 'ready', 4, 4),
  (3, 'waiting-payment', 6, 6),
  (3, 'progress', 3, 3),
  (4, 'waiting-payment', 6, 6);