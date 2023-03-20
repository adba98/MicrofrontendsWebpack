import React, { useRef, useEffect } from 'react';
import { mount } from 'dashboard/DashboardApp';

const DashboardApp = () => {
  const dashboardRef = useRef(null);

  useEffect(() => {
    mount(dashboardRef.current);
  }, []);

  return <div ref={dashboardRef}></div>;
};

export default DashboardApp;
