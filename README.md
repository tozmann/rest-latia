# Fast-Food-Fast

[![Build Status](https://travis-ci.org/davidshare/Fast-Food-Fast.svg?branch=develop)](https://travis-ci.org/davidshare/Fast-Food-Fast)
[![Coverage Status](https://coveralls.io/repos/github/davidshare/Fast-Food-Fast/badge.svg?branch=ft-server)](https://coveralls.io/github/davidshare/Fast-Food-Fast?branch=ft-server)
[![Maintainability](https://api.codeclimate.com/v1/badges/bb0fb6c0ea6be7e66123/maintainability)](https://codeclimate.com/github/davidshare/Fast-Food-Fast/maintainability)


Fast-Food-Fast is a food delivery service app for a restaurant. A user can create an account, signin to the account and make orders for food items.

## UI hosted on gh pages
https://davidshare.github.io/Fast-Food-Fast/UI/index.html

## Server side hosted on Heroku
https://fast-food-fast-essien.herokuapp.com/

## API Documentation
https://fast-food-fast-essien.herokuapp.com/api-docs

## Getting Started

### Installation
1. Install dependencies 
```
$ sudo apt-get install git
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
$ sudo apt-get install nodejs
```
2. Install postgresql 
```
$ sudo apt install postgresql postgresql-contrib
$ sudo -i -u postgres
$ psql
postgres=# \l
postgres=# \du
postgres=# \q
$ createuser --interactive
$ psql -d postgres
postgres=# \conninfo
```
3. Install Nginx
```
$ sudo apt install nginx
$ sudo chmod -R 777 /etc/nginx/sites-available/
$ sudo nano /etc/nginx/sites-available/latia
$ sudo systemctl status nginx   
$ sudo systemctl start nginx
$ sudo service nginx restart
```
4. Clone this repository into your local machine:
```
$ git clone https://github.com/davidshare/Fast-Food-Fast
```
5. Start the application by running the start script.
6. ubuntu init
```
 $ sudo nano /etc/init/latia.com.conf
 ```
### Test
run test using 'npm test'.

### API End Points Test Using Postman

<table>
<tr><th>HTTP VERB</th><th>ENDPOINT</th><th>FUNCTIONALITY</th></tr>

<tr><td>POST</td> <td>/api/v1/auth/signup</td>  <td>User signup</td></tr>

<tr><td>POST</td> <td>/api/v1/auth/login</td>  <td>User signin</td></tr>

<tr><td>POST</td> <td>/api/v1/menu</td>  <td>Add a meal</td></tr>

<tr><td>POST</td> <td>/api/v1/orders</td>  <td>Posts a order</td></tr>

<tr><td>PUT</td> <td>/api/v1/orders/:orderId</td>  <td>Updates the status of an order</td></tr>

<tr><td>PUT</td> <td>/api/v1/menu/:mealId</td>  <td>Updates a meal</td></tr>

<tr><td>GET</td> <td>/api/v1/menu</td>  <td>Get menu</td></tr>

<tr><td>GET</td> <td>/api/v1/menu/:mealId</td>  <td>Get a meal by mealId</td></tr>

<tr><td>GET</td> <td>/api/v1/orders</td>  <td>Gets all orders</td></tr>

<tr><td>GET</td> <td>/api/v1/orders/:orderId</td>  <td>Gets an order by orderId</td></tr>

<tr><td>GET</td> <td>/api/v1/users</td>  <td>Gets all users</td></tr>

<tr><td>GET</td> <td>/api/v1/users/{userId}/orders</td>  <td>Gets a user's order history</td></tr>

<tr><td>DELETE</td> <td>/api/v1/menu/:mealId</td> <td>Delete a meal</td></tr>

<tr><td>DELETE</td> <td>/api/v1/users</td>  <td>Delete all users that are not admin</td></tr>
 
</table>

## Features

 ### Admin
 * Admins can add food items
 * Admins can edit food items
 * Admins can delete food items
 * Admins can see food orders
 * Admins can decline food orders
 * Admins can mark food orders as completed

 ### Users
 * A user can create an account
 * A user can signin to his/her account
 * A user can view available food items
 * A user can make orders and cancel the orders
 * A user can see history of orders
 

## Built With
* NodeJs-EXPRESS: Node.js is a javascript runtime built on Chrome's V8 javascript engine.

* html5: It is used for structuring the frontend.

* css: It is used for styling the frontend.

* Vannila Javascript: It is used for scripting the client side.