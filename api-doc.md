# API Documentation:
## **Base Url**
  - {{base_url}}
    ```bash
    http://localhost:3000
    ```
  
## **Users**
### Create Users
  ```bash
    Method: POST 
    Url: {{base_url}}/users
    
    body:
    {
        "username": "string",
        "email": "string",
        "fullname": "string",
        "role": "customer",
        "picture": "string",
        "gender": "string",
        "phone": "string",
        "address": "string"
    }
  ```
### Read All Users
  ```bash
    Method: GET 
    Url: {{base_url}}/users
  ```
### Read Users By Id
  ```bash
    Method: GET 
    Url: {{base_url}}/users/:id
  ```
### Update Users By Id
  ```bash
    Method: PUT 
    Url: {{base_url}}/users/:id

    body:
    {
        "username": "string",
        "email": "string",
        "fullname": "string",
        "role": "customer",
        "picture": "string",
        "gender": "string",
        "phone": "string",
        "address": "string"
    }
  ```
### Patch Users By Id
  ```bash
    Method: PATCH 
    Url: {{base_url}}/users/:id

    body:
    {
        "username": "string",
        "email": "string",
        "fullname": "string",
        "role": "customer",
        "picture": "string",
        "gender": "string",
        "phone": "string",
        "address": "string"
    }
  ```
### Delete Users By Id
  ```bash
    Method: DELETE 
    Url: {{base_url}}/users/:id
  ```


## **Menu**
### Create Menu
  ```bash
    Method: POST 
    Url: {{base_url}}/menu_items
    
    body:
    {
        "name": "string",
        "description": "string",
        "picture": "string",
        "price": 0,
        "stock": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "category": "alacarte"
    }
  ```
### Read All Menu
  ```bash
    Method: GET 
    Url: {{base_url}}/menu_items
  ```
### Read Menu By Id
  ```bash
    Method: GET 
    Url: {{base_url}}/menu_items/:id
  ```
### Update Menu By Id
  ```bash
    Method: PUT 
    Url: {{base_url}}/menu_items/:id

    {
        "name": "string",
        "description": "string",
        "picture": "string",
        "price": 0,
        "stock": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "category": "alacarte"
    }
  ```
### Patch Menu By Id
  ```bash
    Method: PATCH 
    Url: {{base_url}}/menu_items/:id

    {
        "name": "string",
        "description": "string",
        "picture": "string",
        "price": 0,
        "stock": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "category": "alacarte"
    }
  ```
### Delete Menu By Id
  ```bash
    Method: DELETE 
    Url: {{base_url}}/menu_items/:id
  ```


## **Order**
### Create Order
  ```bash
    Method: POST 
    Url: {{base_url}}/orders
    
    body:
    {
        "customer_id": 1,
        "order_type": "dine-in",
        "order_table": 0,
        "order_status": "waiting-payment",
        "qty": 0,
        "subtotal_price": 0,
        "tax_percentage": 0,
        "tax_price": 0,
        "total_price": 0,
        "pic_id": 2,
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.483Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.483Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.483Z"
    }
  ```
### Read All Order
  ```bash
    Method: GET 
    Url: {{base_url}}/orders
  ```
### Read Order By Id
  ```bash
    Method: GET 
    Url: {{base_url}}/orders/:id
  ```
### Update Order By Id
  ```bash
    Method: PUT 
    Url: {{base_url}}/orders/:id

    {
        "customer_id": 1,
        "order_type": "dine-in",
        "order_table": 0,
        "order_status": "waiting-payment",
        "qty": 0,
        "subtotal_price": 0,
        "tax_percentage": 0,
        "tax_price": 0,
        "total_price": 0,
        "pic_id": 2,
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.483Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.483Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.483Z"
    }
  ```
### Patch Order By Id
  ```bash
    Method: PATCH 
    Url: {{base_url}}/orders/:id

    {
        "customer_id": 1,
        "order_type": "dine-in",
        "order_table": 0,
        "order_status": "waiting-payment",
        "qty": 0,
        "subtotal_price": 0,
        "tax_percentage": 0,
        "tax_price": 0,
        "total_price": 0,
        "pic_id": 2,
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.483Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.483Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.483Z"
    }
  ```
### Delete Order By Id
  ```bash
    Method: DELETE 
    Url: {{base_url}}/orders/:id
  ```

## **Order Items**
### Create Order Items
  ```bash
    Method: POST 
    Url: {{base_url}}/order_items
    
    body:
    {
        "order_id": 0,
        "menu_item_id": 0,
        "order_note": "string",
        "price": 0,
        "qty": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "subtotal": 0,
        "item_status": "waiting-payment",
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.331Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.331Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.331Z"
    }
  ```
### Read All Order Items
  ```bash
    Method: GET 
    Url: {{base_url}}/order_items
  ```
### Read Order Items By Id
  ```bash
    Method: GET 
    Url: {{base_url}}/order_items/:id
  ```
### Update Order Items By Id
  ```bash
    Method: PUT 
    Url: {{base_url}}/order_items/:id

    {
        "order_id": 0,
        "menu_item_id": 0,
        "order_note": "string",
        "price": 0,
        "qty": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "subtotal": 0,
        "item_status": "waiting-payment",
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.331Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.331Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.331Z"
    }
  ```
### Patch Order Items By Id
  ```bash
    Method: PATCH 
    Url: {{base_url}}/order_items/:id

    {
        "order_id": 0,
        "menu_item_id": 0,
        "order_note": "string",
        "price": 0,
        "qty": 0,
        "discount_type": "nominal",
        "discount_value": 0,
        "subtotal": 0,
        "item_status": "waiting-payment",
        "cashier_id": 3,
        "payment_date": "2024-04-28T07:42:45.331Z",
        "chef_id": 4,
        "progress_date": "2024-04-28T07:42:45.331Z",
        "waiter_id": 5,
        "completed_date": "2024-04-28T07:42:45.331Z"
    }
  ```
### Delete Order Items By Id
  ```bash
    Method: DELETE 
    Url: {{base_url}}/order_items/:id
  ```

## **Order States**
### Create Order States
  ```bash
    Method: POST 
    Url: {{base_url}}/order_states
    
    body:
    {
        "order_id": 0,
        "order_status": "string"
    }
    
  ```
### Read All Order States
  ```bash
    Method: GET 
    Url: {{base_url}}/order_states
  ```
### Read Order States By Id
  ```bash
    Method: GET 
    Url: {{base_url}}/order_states/:id
  ```
### Update Order States By Id
  ```bash
    Method: PUT 
    Url: {{base_url}}/order_states/:id

    {
        "order_id": 0,
        "order_status": "string"
    }
  ```
### Patch Order States By Id
  ```bash
    Method: PATCH 
    Url: {{base_url}}/order_states/:id

    {
        "order_id": 0,
        "order_status": "string"
    }
  ```
### Delete Order States By Id
  ```bash
    Method: DELETE 
    Url: {{base_url}}/order_states/:id
  ```


# Documentation
### Page Documentation:
- [Restaurant - Page](https://github.com/alimrndev/restaurant-pos/blob/main/page-doc.md)

### API Documentation:
- [Restaurant - REST API](https://github.com/alimrndev/restaurant-pos/blob/main/api-doc.md)

### Database Documentation:
- [Restaurant - Database Schema](https://github.com/alimrndev/restaurant-pos/blob/main/db-schema-doc.md)
