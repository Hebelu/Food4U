# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 🍕 Food4U – React Food Delivery App

**Food4U** is a Swiggy/Zomato-inspired food delivery web app built with **React.js**. It supports both **Admin** and **User** roles. Users can browse food, search, add to cart, and place orders. Admins can manage food items and users from a dedicated panel.

---

## ✨ Features

### 👨‍🍳 User Module

* 👤 User Login / Registration
* 🍔 Browse Products (Food Items)
* 🛒 Add to Cart with Quantity Management
* 🔍 Search for Food & Restaurants
* 📦 Confirm Order
* 📃 About Page
* 🚀 User Navbar Navigation

### 🛠 Admin Module

* 🔑 Admin Login / Register / Logout
* ➕ Add Food Items
* 🧾 Admin Bill View
* 📦 View & Update Products
* 👨‍💼 Create & Update Users
* 📋 Employee Table
* 🧭 Admin Navigation Bar

---

## 🧱 Folder Structure

```bash
src/
├── components/
│   ├── Admin/
│   │   ├── AddFood.js
│   │   ├── AdminBill.js
│   │   ├── AdminLogin.js
│   │   ├── AdminLogout.js
│   │   ├── AdminNavBar.js
│   │   ├── AdminProduct.js
│   │   ├── AdminRegister.js
│   │   ├── CreateUser.js
│   │   ├── EmployeeTable.js
│   │   ├── Read.js
│   │   └── UpdateUser.js
│
│   ├── Main/
│   │   ├── ErrorPage.js
│   │   ├── Logout.js
│   │   └── Main.js
│
│   └── User/
│       ├── About.js
│       ├── Item.js
│       ├── UserCart.js
│       ├── UserLogin.js
│       ├── UserNavBar.js
│       ├── UserProduct.js
│       └── UserRegister.js
```
