import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number; 
  onEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60); 

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd(); 
      return;
    }
    const timerId = setInterval(() => setTimeLeft((time) => time - 1), 1000); // Уменьшаем время каждую секунду
    return () => clearInterval(timerId); 
  }, [timeLeft, onEnd]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60; 
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; 
  };

  return <div>Time Left: {formatTime(timeLeft)}</div>;
};

export default Timer;