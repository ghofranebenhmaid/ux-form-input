import { useState } from 'react';
import BasicForm from './components/BasicForm';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <BasicForm />
    </div>
  );
}

export default App;
