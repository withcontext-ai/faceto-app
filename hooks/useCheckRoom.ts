import { useCallback, useState } from 'react';

function useCheckRoom(roomName?: string | string[]) {
  const [isValid, setIsValid] = useState<boolean>(false);

  const checkRoom = useCallback(async () => {
    try {
      if (typeof roomName !== 'string' || !roomName) return false;
      const result = await fetch(`https://faceto-ai.withcontext.ai/check/${roomName}`).then(
        (res) => res.json(),
      );
      setIsValid(result.valid);
      return result.valid as boolean;
    } catch (e) {
      setIsValid(false);
      return false;
    }
  }, [roomName]);

  return {
    isValid,
    checkRoom,
  };
}

export default useCheckRoom;
