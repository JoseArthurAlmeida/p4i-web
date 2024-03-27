import React from 'react';
import { Slider } from 'antd';
import './css/barra.css';
const Barrafiltro = () => (
  <Slider
    range={{
      draggableTrack: true,
    }}
    defaultValue={[20, 50]}
  />
);
export default Barrafiltro;