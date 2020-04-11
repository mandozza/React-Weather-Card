import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard city="Halifax" country="Canada" temp={20}  condition="Haze"/>
      <WeatherCard city="New York" country="United Stated" temp={-10} condition="Dust"/>
    </div>
  );
}

export default App;
