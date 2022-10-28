import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from './redux/greetings/greetings_reducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings, loading, error } = useSelector((state) => state.greets);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h1>{greetings}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <button type="button" onClick={() => dispatch(getGreetings())}>Get Greeting</button>
    </div>
  );
};

export default Greeting;
