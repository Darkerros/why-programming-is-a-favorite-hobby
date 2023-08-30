import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/main-page/main-page";
import MainLayout from "../layouts/main-layout/main-layout";
import JsActivityPage from "../pages/js-activity-page/js-activity-page";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path={"/"} element={<MainPage/>} />
        <Route path={'/activity'} element={<JsActivityPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
