import * as tf from '@tensorflow/tfjs';
import { useEffect, useState } from "react";

function CarFlow() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
      const carsData = await res.json();
      const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
      }))
      .filter(car => (car.mpg != null && car.horsepower != null));

      return cleaned;
    }
    function createModel() {
      const model = tf.sequential();
  
      model.add(tf.layers.dense({
        inputShape: [1],
        units: 1,
        useBias: true
      }));
  
      model.add(tf.layers.dense({
        units: 1, 
        useBias: true
      }));
  
      console.log(model);
      return model
    }
    
    const model = createModel();
    tfvis.show.modelSummary({name: 'Model Summary'}, model);
    
    const run = async () => {
      const data = await getData();
      const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg
      }));

      tfvis.render.scatterplot(
        {name: 'Horsepower v MPG'},
        {values},
        {
          xLabel: 'Horsepower',
          yLabel: 'MPG',
          height: 300
        }
      )
      const tensorData = convertToTensor(data);
      const {inputs, labels} = tensorData;
      await trainModel(model, inputs, labels);
      console.log('Done Training');
      testModel(model, data, tensorData);
    }
    run();
    setLoading(false);
  }, []);

async function trainModel(model, inputs, labels) {
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ['mse'],
  });
  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: 'Training Performance '},
      ['loss', 'mse'],
      { height: 200, callbacks: ['onEpochEnd'] }
    )
  });
}

  function testModel(model, inputData, normalizationData) {
    const {inputMax, inputMin, labelMin, labelMax} = normalizationData;

    const [xs, preds] = tf.tidy(() => {
      const xs = tf.linspace(0, 1, 100);
      const preds = model.predict(xs.reshape([100, 1]));

      const unNormXs = xs
        .mul(inputMax.sub(inputMin))
        .add(inputMin);
      
      const unNormPreds = preds
        .mul(labelMax.sub(labelMin))
        .add(labelMin);

        return [unNormXs.dataSync(), unNormPreds.dataSync()];
    });

    const predictedPoints = Array.from(xs).map((val, i) => {
      return { x: val, y: preds[i]}
    });

    const originalPoints = inputData.map(d => ({
      x: d.horsepower, y: d.mpg,
    }));

    tfvis.render.scatterplot(
      {name: 'Model Predictions vs Original Data'},
      {values: [originalPoints, predictedPoints], series: ['original', 'predicted']},
      {
        xLabel: 'Horsepower',
        yLable: 'MPG',
        height: 300
      } 
    )
  }


  function convertToTensor(data) {
    return tf.tidy(() => {
      //1: Shuffle data
      tf.util.shuffle(data);

      //2: Convert data to Tensor
      const inputs = data.map(d => d.horsepower);
      const labels = data.map(d => d.mpg);

      const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
      const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

      //3: Normalize data to the range 0 - 1 using min-max scaling!!
      const inputMax = inputTensor.max();
      const inputMin = inputTensor.min();
      const labelMax = labelTensor.max();
      const labelMin = labelTensor.min();

      const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
      const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

      return {
        inputs: normalizedInputs,
        labels: normalizedLabels,
        inputMax,
        inputMin,
        labelMax,
        labelMin,
      }
    });
  }


  return(
    <>
    {loading ? <h1>Loading</h1> : 
      <h1>TensorFlow</h1>
    
    }
    </>
  );
};

export default CarFlow;

/*
 Best Practice 1: always shuffle data before handing to training algo
 Best Practice 2: always consider normalizing your data before training. 
 Some datasets can be learned without normalization, 
 but normalizing your data will often eliminate 
 a whole class of problems that would prevent effective learning.
You can normalize your data before turning it into tensors. 
We do it afterwards because we can take advantage of vectorization 
in TensorFlow.js to do the min-max scaling operations 
without writing any explicit for loops.

 */