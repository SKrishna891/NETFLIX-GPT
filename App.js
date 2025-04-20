import React from "react";
import "./index.css";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const App = () => {
  return (
    <div className="text-black bg-white p-4 no-underline">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
