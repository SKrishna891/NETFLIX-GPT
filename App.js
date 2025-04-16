import React from "react";
import "./index.css";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const App = () => {
  return (
    <div className="text-3xl font-bold text-red-600 underline">
     <Provider store={appStore}>
      <Body />
    </Provider> 
    </div>
  );
};

export default App;
