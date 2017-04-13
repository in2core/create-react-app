import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../qt-service-worker.js', { scope: '/' })
    .then(() => {
      console.log('Service worker registered!');
    })
    .catch(error => {
      console.log('Error registering service worker: ', error);
    });

  navigator.serviceWorker.ready.then(() => /* registration */ {
    console.log('Service Worker Ready');
  });
}
