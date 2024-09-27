import React, { useEffect } from 'react';
import { ConfettiElement } from './Confetti-Element';
import './Confetti.css';
import { DURATION } from './confetti.constants';

interface ConfettiProps {
  count: number;
}

const Confetti: React.FC<ConfettiProps> = ({ count }) => {
  useEffect(() => {
    const confettiContainer = document.getElementById('confetti-container');
    if (confettiContainer) {
      setTimeout(() => {
        confettiContainer.style.transition = 'opacity 2s';
        confettiContainer.style.opacity = '0';
      }, DURATION * 1000 - 2000); // Start fading out 2 seconds before the end
    }
  }, []);

  return (
    <div className="confetti-container" id="confetti-container">
      {Array.from({ length: count }).map((_, i) => (
        <ConfettiElement index={i} />
      ))}
    </div>
  );
};

export default Confetti;
