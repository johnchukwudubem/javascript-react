import React from "react";

import HomePage from "./homepage/pages/Homepage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUp from "./components/Login/Form";
import GetAllUsers from "./components/ReturnData/GetAllUsers";
import UpdateUserProfile from "./components/ReturnData/UpdateUserProfile";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/" element={<GetAllUsers />} />
          <Route path="/productDetails:/id" element={<UpdateUserProfile />} />
          <Route path="/update/:firstName/:lastName/:_id" element={<UpdateUserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
