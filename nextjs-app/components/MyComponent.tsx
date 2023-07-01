import React from 'react';
import styles from '../styles/MyComponent.module.css';

const MyComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-4xl text-center text-blue-500">Hello from MyComponent</h1>
    </div>
  );
};

export default MyComponent;