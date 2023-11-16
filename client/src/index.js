import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import { BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <Routes>
       <Route path="*" element={<App />}/>
       </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
