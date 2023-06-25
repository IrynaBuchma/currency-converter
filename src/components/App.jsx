import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { Home } from "pages/Home";
import { Rates } from "pages/Rates";


export const App = () => {
  return (
   <>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='/rates' element={<Rates/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
   </>
  );
};
