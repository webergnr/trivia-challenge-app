import React from "react";

import { StatusBar } from "expo-status-bar";

import Router from "./routers";

import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
      <StatusBar style="auto" />
    </Provider>
  );
};

export default App;
