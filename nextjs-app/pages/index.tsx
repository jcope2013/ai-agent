import React from 'react';
import MyComponent from '../components/MyComponent';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-4">Welcome to Next.js App</h1>
      <MyComponent />
    </div>
  );
};

export default Home;