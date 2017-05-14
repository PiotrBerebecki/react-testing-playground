import React from 'react';

function Display({ count }) {
  return (
    <div className="count">
      Count in child: {count}
    </div>
  );
}

export default Display;
