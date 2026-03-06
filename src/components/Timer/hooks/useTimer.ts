import { useEffect, useState } from 'react';

export const useTimer = (secondsLeft: number | undefined) => {
  const isDanger = secondsLeft !== undefined && secondsLeft <= 30;
  const shouldBlink = isDanger && (secondsLeft ?? 0) > 0;
  const [blinkOn, setBlinkOn] = useState(true);

  useEffect(() => {
    if (!shouldBlink) return;

    const id = setInterval(() => setBlinkOn((v) => !v), 500);
    return () => clearInterval(id);
  }, [shouldBlink]);

  return {
    isDanger,
    shouldBlink,
    blinkOn,
  };
};

