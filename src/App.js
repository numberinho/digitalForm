import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from '@formio/react';

function App() {
  return (
    <div className="App">
      <Form src="https://example.form.io/example" onSubmit={console.log} />
    </div>
  );
}

export default App;
