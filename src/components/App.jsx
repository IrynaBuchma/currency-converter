import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { Home } from 'pages/Home';
import { Rates } from 'pages/Rates';
import { useEffect } from 'react';
// ssadas

import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/rates" element={<Rates />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
