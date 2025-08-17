import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Users from "./components/Users.jsx";
import Home from "./components/Home.jsx";
import AddNewUser from "./components/AddNewUser.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/add-user" element={<AddNewUser/>} />
          <Route path="/edit-user/:id" element={<div>Edit user</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
