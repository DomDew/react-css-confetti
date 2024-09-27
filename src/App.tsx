import { useEffect, useState } from 'react';
import Confetti from './components/Confetti';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiDuration = 5;

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, confettiDuration * 1000);

      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <>
      {showConfetti && <Confetti count={200} />}
      <button
        style={{ margin: 'auto auto' }}
        onClick={() => setShowConfetti(true)}
      >
        Confetti
      </button>
    </>
  );
}

export default App;
