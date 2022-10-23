import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

export const runBert = async (texts) => {
  var scores = [];
  const model = await use.load();
  const highScore = await model.embed(texts).then(embeddings => {
    var data = embeddings.arraySync();
    for (let i = 1; i < data.length; i++) {
      scores.push(tf.dot(data[0], data[i]).dataSync());
    }
    scores =  scores.map(a => [...a]).flat();
    return scores.indexOf(Math.max(...scores))
  })

  console.log(highScore);
  return highScore;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();