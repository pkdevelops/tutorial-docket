import React from 'react';

const NavigationContainer = () => {
  const rows = [];
  for (let i = 0; i < 100; i++) rows.push(i);
  return (
    <div className="col s3 teal">
      <table>{rows.map(row => <tr>{row}</tr>)}</table>
    </div>
  );
};

const ViewContainer = () => {
  return <div className="col s9 cyan">Nav</div>;
};

const Landing = () => {
  return (
    <div className="row">
      <NavigationContainer />
      <ViewContainer />
    </div>
  );
};

export default Landing;
