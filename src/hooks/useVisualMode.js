import { useState } from 'react';

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
    }
    else {
      setHistory(prev => [...prev, newMode]);
    }
    setMode(newMode);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
      const previousMode = history[history.length - 2];
      setMode(previousMode);
    }
  };

  return { mode, transition, back };

}