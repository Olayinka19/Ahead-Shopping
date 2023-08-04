\c ahead_shopping_development;


INSERT INTO products (name) VALUES ('Men Fashion'), ('Women Fashion'), ('Home Appliances'), ('Computers'), ('Electronics'), ('Beauty');


INSERT INTO items (product_id, price, quantity, images) VALUES
  (1, 29.99, 150, 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (2, 37.79, 130, 'https://www.pexels.com/photo/pair-of-brown-leather-casual-shoes-on-table-298863/'),
  (3, 49.96, 24, 'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (4, 50.89, 40, 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (5, 93.99, 50, 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800'),
  (6, 149.99, 32, 'https://images.pexels.com/photos/17505427/pexels-photo-17505427/free-photo-of-young-brunette-woman-wearing-a-chain-link-necklace-and-bracelet.jpeg?auto=compress&cs=tinysrgb&w=800');
  

INSERT INTO descriptions (product_id, content) VALUES
  (1, 'Stylish Mens Clothing' ),
  (2, 'Trendy Womens apparel'),
  (3, 'Modern Home Appliances'),
  (4, 'High-performance computers'),
  (5, 'Latest electronic gadgets'),
  (6, 'Premium beauty and skincare products');


