import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
    // Dados do gráfico
    const data = [
      ['Categoria', 'Valor'],
      ['Verificada', 33],
      ['Entregue', 33],
      ['Pendente', 33]
    ];
  
    // Opções do gráfico
    const options = {
      title: 'Desempenho',
      is3D: false,
      colors: ['#3DBE00', '#FF7A00', '#BE0D00']
    };
  
    return (
      <Chart
        chartType="PieChart"
        width="100%"
        height="150px"
        data={data}
        options={options}
      />
    );
  };

  export default PieChart;