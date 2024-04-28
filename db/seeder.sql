-- Extentions for password
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
INSERT INTO restaurants (name, description, picture, email, website, location, google_maps_link, instagram_link, tiktok_link, facebook_link, twitter_link)
VALUES ('Restaurant Nusantara', 'Welcome to Restaurant Nusantara, Looking for amazing food.', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/place-holder-package.jpg?alt=media&token=8d71eed8-02c5-4e9e-8214-6766c9870ec9', 'info@restaurantnusantara.com', 'https://www.restaurantnusantara.com', 'Jl. Sudirman No. 123, South Jakarta', 'https://www.google.com/maps/place/Restaurant+AYCE', 'https://www.instagram.com/restaurantnusantara', 'https://www.tiktok.com/@restaurantnusantara', 'https://www.facebook.com/restaurantnusantara', 'https://twitter.com/restaurantnusantara');

-- Insert dummy data for menu_items
INSERT INTO menu_items (name, description, price, stock, discount_type, category, picture)
VALUES
  ('Paket Nusantara (Lunch)', 'Nikmati buffet makan siang tanpa batas dengan berbagai hidangan.', 100000, 25, 'nominal', 'package', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Paket%20Ayce%201.jpg?alt=media&token=c54b05e9-c9c1-4859-8616-2ed748c9e0d0'),
  ('Paket Nusantara (Dinner)', 'Manjakan diri Anda dengan pengalaman makan malam yang menyenangkan dengan pilihan all-you-can-eat kami.', 200000, 25, 'nominal', 'package', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Paket%20AYCE%202.webp?alt=media&token=4e02a21f-641e-497a-a208-161fb33b1d01'),

  ('Steak Wagyu A5', 'Nikmati kelezatan steak Wagyu A5 premium kami yang lumer di mulut.', 1999000, 0, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/steak.jpeg?alt=media&token=5b34dbbe-8780-4941-9bfb-30a97bc8a7b5'),
  ('Salmon Teriyaki', 'Salmon panggang yang dilapisi saus teriyaki manis dan gurih.', 699000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Salmon%20Teriyaki.jpg?alt=media&token=6d0f5e43-6c4b-4214-91b0-492f6db82569'),
  ('Kari Ayam Katsu', 'Ayam goreng tepung renyah disajikan dengan saus kari yang kaya dan beraroma.', 499000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Chicken%20Curry.jpg?alt=media&token=5810d089-3d90-4556-9bcd-b754e81187f6'),
  ('Pad Thai', 'Tumisan mie klasik Thailand dengan mie beras, sayuran, dan pilihan protein Anda.', 399000, 0, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Pad%20Thai.webp?alt=media&token=de5803f1-79e7-4554-bca6-7b6e6445a23e'),
  ('Pizza Margherita', 'Pizza sederhana namun memuaskan dengan topping saus tomat dan keju mozzarella.', 459000, 25, 'nominal', 'foods', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Pizza.jpg?alt=media&token=9b4747dd-404e-4ba9-b9b0-9f65263a8511'),

  ('Ice Tea', 'Es teh menyegarkan dengan sedikit lemon.', 9900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/lemon%20tea.jpeg?alt=media&token=3aaa814e-b355-4b90-9a1b-853daa902e65'),
  ('Thai Tea', 'Teh Thailand yang creamy dan beraroma dengan warna oranye yang khas.', 12900, 0, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/thai%20tea.jpg?alt=media&token=d65024b0-a77d-4ad7-80c2-cbaa5496c9c5'),
  ('Orange Juice', 'Jus jeruk segar yang kaya akan Vitamin C.', 8900, 0, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/orange%20juice.jpg?alt=media&token=e69befeb-b381-433c-ade8-8fe7a3439fbd'),
  ('Mineral Water', 'Air mineral bersoda atau mineral biasa untuk menghilangkan dahaga Anda.', 5900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/mineral%20water.jpg?alt=media&token=e1c90343-379c-40b7-93b9-450e150a1417'),
  ('Ice Coffee', 'Kopi es menyegarkan untuk membangkitkan semangat Anda.', 11900, 25, 'nominal', 'drinks', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/ice%20coffee.png?alt=media&token=53b623b6-1259-4430-96e8-45e6e009a01f'),

  ('Kentang Goreng', 'Kentang goreng renyah dan keemasan, cocok untuk dinikmati bersama.', 15900, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/kentang.jpg?alt=media&token=4bcc46e8-8653-4fd9-a717-d794dc910ae1'),
  ('Potato Wedges', 'Potato wedges yang berbumbu, alternatif lezat untuk kentang goreng.', 17900, 0, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/potato%20w.jpg?alt=media&token=e9c6b153-4c8e-4a66-a4e1-f7eaa9448043'),
  ('Onion Ring', 'Onion ring di goreng yang renyah.', 12900, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/Onion-Ring.jpg?alt=media&token=641771cc-3ba4-4fbb-90c1-0f34ae6d5710'),
  ('Roti Bawang Putih', 'Roti bawang putih yang hangat dan bermentega, cocok untuk dicocol.', 8900, 25, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/bread%20garlic%20(1).webp?alt=media&token=4f439371-441d-4877-848e-c57087a2f3eb'),
  ('Salad', 'Salad segar dan renyah dengan pilihan dressing Anda.', 14900, 0, 'nominal', 'alacarte', 'https://firebasestorage.googleapis.com/v0/b/restaurant-ordering-syst-2b90a.appspot.com/o/salad%20buah.jpeg?alt=media&token=ce4c64c9-234e-436d-a3b3-7c8c0ce6f5d3');

-- Insert dummy data for orders
INSERT INTO orders (customer_id, order_number, order_status, qty, subtotal_price, tax_percentage, tax_price, total_price)
VALUES
  (6, 'ORD-001', 'completed', 1, 100000, 0.11, 11000, 111000),
  (6, 'ORD-002', 'ready', 1, 100000, 0.11, 11000, 111000),
  (6, 'ORD-004', 'progress', 1, 100000, 0.11, 11000, 111000),
  (6, 'ORD-005', 'waiting-payment', 1, 100000, 0.11, 11000, 111000);
 
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