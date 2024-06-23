import React from "react";

import AppRouter from "./components/AppRouter";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;
