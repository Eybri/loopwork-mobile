import { useState, useEffect } from 'react';

export const useAppInit = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Init logic
    setIsLoaded(true);
  }, []);

  return isLoaded;
};
