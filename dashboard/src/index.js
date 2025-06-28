import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Toaster } from "react-hot-toast";
const App = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster
        toastOptions={{
          position: "top-right",
          style: { background: "#283046", color: "#fff" },
        }}
      />
    </Provider>
  </BrowserRouter>
);
