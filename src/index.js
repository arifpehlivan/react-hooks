import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';

const container = document.getElementById('app');
const root = createRoot(container);

class App extends Component {
  render() {
    return (
      <div>index</div>
    )
  }
}

root.render(<App/>);
