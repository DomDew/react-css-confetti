import { FC } from 'react';
import { COLORS } from './confetti.constants';

interface ConfettiElementProps {
  index: number;
}

export const ConfettiElement: FC<ConfettiElementProps> = ({ index }) => {
  const width = Math.random() * 8;
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const left = 40 + Math.random() * 20;
  const opacity = Math.random() + 0.5;
  const rotate = Math.random() * 360;
  const duration = 4 + Math.random() * 4;
  const delay = Math.random() * 4;
  const spreadLeft = Math.random() * 100;
  const topPosition = Math.random() * 50;
  const endPosition = 60 + Math.random() * 20;

  const style = {
    width: `${width}px`,
    height: `${width * 0.4}px`,
    backgroundColor: color,
    position: 'absolute',
    top: '-10%',
    opacity: `${opacity}`,
    transform: `rotate(${rotate}deg)`,
    animation: `drop-${index} ${duration}s ${delay}s forwards`,
  } as const;

  const keyframes = `
    @keyframes drop-${index} {
      0% {
        top: 110%;
        left: ${left}%;
        transform: rotate(${rotate}deg);
      }
      30% {
        top: ${topPosition}%;
        left: ${spreadLeft}%;
        transform: rotate(${rotate + 180}deg);
      }
      100% {
        top: ${endPosition}%;
        left: ${spreadLeft}%;
        transform: rotate(${rotate + 360}deg);
      }
    }
  `;

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  return <div style={style} />;
};
