
# Posts Table App

This is a simple React application that fetches posts from a public API, displays them in a table, and allows you to add new posts. The app utilizes Material-UI for styling and Axios for making API requests.

## Features
- Displays a list of posts fetched from the JSONPlaceholder API.
- Allows adding new posts with a title and a "completed" status.
- The posts are displayed in a table with user ID, title, and completion status.


## Getting Started

Follow these steps to set up and run the application locally:

### 1. Clone the repository

Clone the repository to the local machine using Git:

```bash
git clone - https://github.com/Risidio/frontend_api_assement.git
```

### 2. Navigate to the project folder

Change your directory to the project folder:

```bash
cd frontend_api_assement
```

### 3. Install dependencies

Run the following command to install the required dependencies:

```bash
npm install or npm i  & npm i @mui/material & npm i scss & npm i @reduxjs/toolkit react-redux
```

This will install all the packages listed in `package.json`.

### 4. Run the application

Once the dependencies are installed, you can start the development server by running:

```bash
npm run dev
```

This will start the development server, and the app will be available at [http://localhost:5173]

### 5. Open the app

Open your browser and go to [http://localhost:5173]. You should see the application running locally.

### 6. Optional: Add new posts

You can add new posts using the form in the app. Just enter a title and select the completion status, then click "Add Post."

## Folder Structure

Here’s the basic folder structure of the project:

```
/posts-table-app
  /node_modules       # All installed dependencies
  /public             # Static files like index.html
  /src                # Application source code
    /app
      store.ts        # Redux store configuration
    /features
      postsSlice.ts   # Redux slice for posts
    /styles
      posttable.scss  # Styles for the PostTable component
    App.css           # Styles for the App component
    App.tsx           # App component 
    ErrorBounddary    # ErrorBoundary Component
    main.tsx          # Main entry point for the application
    PostTable.tsx     # Main component for posts and table
  package.json        # Project metadata and dependencies
  README.md           # Documentation
  tsconfig.json       # TypeScript configuration
```

## Dependencies

This project uses the following dependencies:

- **React**: Frontend library for building user interfaces.
- **Redux**:State management library for managing the global application state efficiently.
- **@reduxjs/toolkit**:Simplifies Redux implementation by providing utilities like createSlice,           configureStore, and more.
- **React-Redux**: Official bindings for React and Redux, enabling seamless integration.
- **Axios**: Promise-based HTTP client for making API requests.
- **Material-UI**: A popular React UI framework used for styling the app.
- **@mui/system**: A utility library for creating custom styles in MUI.

### Additional Info:

- The app fetches data from (https://jsonplaceholder.typicode.com)
- The UI is built with Material-UI components like `Button`, `FormControl`, `Checkbox`, etc.
- Posts can be added via the form at the top of the page, and are displayed in a table format.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
