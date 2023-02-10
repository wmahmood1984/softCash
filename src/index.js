import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Web3 from "web3";
import { WalletModalProvider } from "./context/walletModalContext";
import store from "./store";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#04fce8",
    },
  },
});
const getLibrary = (provider) => new Web3(provider);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ThemeProvider theme={theme}>
          <WalletModalProvider>
            <Router>
              <App />
            </Router>
          </WalletModalProvider>
        </ThemeProvider>
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>
);
