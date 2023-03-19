import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const marketingRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mount(marketingRef.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
  }, []);

  return <div ref={marketingRef}></div>;
};

export default MarketingApp;
