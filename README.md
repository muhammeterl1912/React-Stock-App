# React Stock-Check App

Stock-Check App is a powerful and user-friendly React application designed for administrative use. It allows admins to manage stock information, including purchasing, firms, brands, and sales. The app provides functionalities to create, read, update, and delete (CRUD) various stock-related data while also offering insightful charts and visualizations.

## Demo

Click 👉 [here](https://react-stock-dbsdu712q-muhammets-projects-aea412db.vercel.app/) to see the live demo of the app.


## Features

👉 **Admin Dashboard**: Visualize stock data with dynamic charts.

👉 **CRUD Operations**: Easily manage purchases, firms, brands, and sales.

👉 **Responsive UI**: Built with Material-UI and Tailwind CSS for a responsive and sleek user interface.

👉 **Form Handling**: Utilize Formik for form management and Yup for validation.

👉 **Routing**: Private routing for secure and seamless navigation using React Router.

👉 **API Integration**: Axios and Axios instance for making HTTP requests to a RESTful API.

## Technologies Used

🧑🏻‍💻 **React**: A JavaScript library for building user interfaces.

🧑🏻‍💻 **Redux Toolkit**: A powerful state management library for managing global state.

🧑🏻‍💻 **Material-UI**: A popular React UI framework for building responsive and visually appealing components.

🧑🏻‍💻 **Tailwind CSS**: A utility-first CSS framework for creating custom designs.

🧑🏻‍💻 **React Router**: A library for routing in React applications.

🧑🏻‍💻 **Formik**: A library for building forms in React with ease.

🧑🏻‍💻 **Yup**: A JavaScript schema builder for value parsing and validation.

🧑🏻‍💻 **Axios**: A promise-based HTTP client for making requests to the API.

🧑🏻‍💻 **Custom Hooks**: Enhance functionality and code reuse.

🧑🏻‍💻 **Tremor Charts**: Provide dynamic and interactive charting solutions.


## How to Use

### Admin Dashboard

Once you log in as an admin, you will be redirected to the dashboard where you can visualize various stock data with dynamic charts.

### Managing Data

The app allows you to perform CRUD operations on different stock-related data:

- **Purchases**: Add, view, update, and delete purchase records.
- **Firms**: Manage firms associated with the stock.
- **Brands**: Handle brand information.
- **Sales**: Record and manage sales data.

### Forms and Validation

- **Formik**: Used for handling forms. Each form in the app is built using Formik to simplify form state management.
- **Yup**: Used for form validation. Every form includes validation schemas to ensure data integrity.

### Routing

- **Private Routing**: The app uses React Router for navigation and includes private routes to ensure only authenticated users can access certain parts of the app.

### API Integration

The app uses an Axios instance to make HTTP requests to a RESTful API. The base URL for the API is configured using an environment variable.

## Installation

### Using npm

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Stock-Check-App.git
   cd Stock-Check-App
