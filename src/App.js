import React from 'react';
import './App.css';
import ReceiptList from './components/ReceiptList';
import receiptsData from './data/receipts.json';

function App() {
  return (
    <div className="App">
      <main className="app-main">
        <ReceiptList receipts={receiptsData} />
      </main>
      <footer className="app-footer">
        <p>&copy; 2026 Store Receipt Manager. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
