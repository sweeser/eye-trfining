import React, { useEffect, useState } from 'react'; 
import '../components/styles/MovingDot.scss'

const MovingDot: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Начальное положение точки
  const [color, setColor] = useState('#ff0000'); // Начальный цвет точки

  useEffect(() => {
    const moveDot = () => {
      // Генерируем случайный цвет в формате hex
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      // Обновляем положение и цвет точки
      setPosition({
        x: Math.random() * window.innerWidth, // Случайное положение по горизонтали
        y: Math.random() * window.innerHeight, // Случайное положение по вертикали
      });
      setColor(randomColor);
    };

    // Устанавливаем интервал для изменения положения и цвета точки раз в секунду
    const intervalId = setInterval(moveDot, 1000);

    // Очищаем интервал при удалении компонента
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="moving-dot"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: color, // Применяем случайный цвет
      }}
    ></div>
  );
};

export default MovingDot;
