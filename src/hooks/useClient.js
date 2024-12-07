'use client';

import { useEffect, useState } from 'react';

export default function useClient(callBack) {
  const [isClient, setClient] = useState();

  useEffect(() => {
    setClient(true);
  }, []);

  if (isClient) {
    const data = callBack();
    return data;
  }
}
// <div suppressHydrationWarning={true}>client element</div>;
