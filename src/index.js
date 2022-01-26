import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import ru_RU from "antd/lib/locale/ru_RU";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ru_RU}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
