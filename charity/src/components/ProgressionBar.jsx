

import React from 'react';

const ProgressionBar = ({ progress }) => {
  const progressColor = progress >= 75 ? 'bg-success' : progress >= 50 ? 'bg-warning' : 'bg-danger';

  return (
    <div className="progress" style={{ height: '20px' }}>
      <div
        className={`progress-bar ${progressColor}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressionBar;
