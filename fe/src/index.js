import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

export const runBert = (texts) => {
  // Load the model.
  use.load().then(model => {
      var scores = []

      model.embed(texts).then(embeddings => {
        // `embeddings` is a 2D tensor consisting of the 512-dimensional embeddings for each sentence.
        // So in this example `embeddings` has the shape [2, 512].
        var data = embeddings.arraySync();
        for (let i = 1; i < data.length; i++) {
          scores.push(tf.dot(data[0], data[i]).dataSync());
        }
        console.log(scores)
      });
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();