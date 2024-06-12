import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const star = useSelector((store) => store.star);

  useEffect(() => {
    dispatch({ type: 'FETCH_APOD_DATA' });
  }, [dispatch]);

  return (
    <div className="container glass">
      <h2>Tigo Monitoring for Barnhouse Solar Panels</h2>

    </div>
  );
}

export default App;
