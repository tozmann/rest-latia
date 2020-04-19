const baseUrl = 'http://ec2-18-236-154-171.us-west-2.compute.amazonaws.com:8080/api/v1/';
const appUrl = 'http://ec2-18-236-154-171.us-west-2.compute.amazonaws.com:8080/';
// const appUrl = 'http://localhost:3000/';
// const baseUrl = 'http://localhost:3000/api/v1/';
const CLOUDINARY_UPLOAD_PATH = 'https://api.cloudinary.com/v1_1/degd8xqnf/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'knowshare';

/* API endpoints */
const signupURL = `${baseUrl}auth/signup`;
const loginURL = `${baseUrl}auth/login`;
const menuUrl = `${baseUrl}menu`;
const ordersURL = `${baseUrl}orders`;

/* HTML PAGES */
const landingPage = 'index.html';
const adminSignUpPage = 'new_admin.html';
const loginPage = 'signin.html';
const menuPage = 'meals.html';
const orderPage = 'order_summary.html';
