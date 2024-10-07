// src/App.tsx
import React, { useState } from 'react'; // Импортируем React и хук useState для управления состоянием компонента
import MovingDot from './components/MovingDot'; // Импортируем компонент MovingDot, который будет двигаться по экрану
import Timer from './components/Timer'; // Импортируем компонент Timer для отсчёта времени
import './App.scss'; // Импортируем стили для компонента App

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false); // Создаём состояние, чтобы отслеживать, запущена тренировка или нет

  const startExercise = () => {
    setIsRunning(true); // При нажатии на кнопку запускаем тренировку, устанавливая состояние в true
  };

  const stopExercise = () => {
    setIsRunning(false); // При остановке тренировки состояние меняется на false
  };

  return (
    <div className="app">
      <h1>Eye Relaxation Exercise</h1> {/* Заголовок страницы */}
      <button onClick={isRunning ? stopExercise : startExercise}>
        {/* Кнопка меняет текст и функционал в зависимости от состояния */}
        {isRunning ? 'Stop Exercise' : 'Start Exercise'}
      </button>
      {isRunning && <MovingDot />} {/* Если тренировка запущена, отображается MovingDot */}
      {isRunning && <Timer duration={5} onEnd={stopExercise} />} {/* Таймер на 5 минут, по окончании вызывается stopExercise */}
    </div>
  );
};

export default App; // Экспортируем компонент для использования в других частях приложения
