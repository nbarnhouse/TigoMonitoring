import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const tigo = useSelector((store) => store.tigo);

  useEffect(() => {
    dispatch({ type: 'FETCH_TIGO_DATA' });
  }, [dispatch]);

  // Check if the data is available
  if (!tigo || !tigo.inverters || tigo.inverters.length === 0) {
    return <div>Loading...</div>; // You can replace this with a better loading indicator
  }

  return (
    <div className="container glass">
      <h2>Tigo Monitoring for Barnhouse Solar Panels</h2>
      <h3>System: {tigo.inverters[0].label}</h3>
      <h3>Inverter System ID: {tigo.inverters[0].system_id}</h3>
    </div>
  );
}

export default App;
