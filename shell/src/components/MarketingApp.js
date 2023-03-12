import { mount } from 'marketing/MarketingApp';

import React, { useEffect, useRef } from 'react';

const MarketingApp = () => {
  const marketingRef = useRef(null);

  useEffect(() => {
    mount(marketingRef.current);
  }, []);

  return <div ref={marketingRef}></div>;
};

export default MarketingApp;
