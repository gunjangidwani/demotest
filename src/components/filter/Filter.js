import React from 'react';
import { years, landingValue, launchValue } from '../../utils/constant';

const Filter = ({
  applyFilter,
  launchYear,
  successfulLanding,
  successfulLaunch
}) => {
  return (
    <div className="filterContainer">
      <div>
        <h3>Filters</h3>
        <div className="filterBox">
          <span>Launch Year</span>
          <hr />
          <div className="btnGroup">
            {years.map(yr => (
              <button
                className={`primmaryBtn ${
                  yr.value === launchYear ? 'active' : ''
                }`}
                onClick={() => applyFilter('launch_year', yr.value)}
                key={yr.id}
              >
                {yr.value}
              </button>
            ))}
          </div>
        </div>
        <div className="filterBox">
          <span>Successful Launch</span>
          <hr />
          <div className="btnGroup">
            {launchValue.map(launch => (
              <button
                className={`primmaryBtn ${
                  launch.value === successfulLaunch ? 'active' : ''
                }`}
                key={launch.id}
                onClick={() => applyFilter('launch_success', launch.value)}
              >
                {launch.value === true ? 'True' : 'False'}
              </button>
            ))}
          </div>
        </div>
        <div className="filterBox">
          <span>Successful Landing</span>
          <hr />
          <div className="btnGroup">
            {landingValue.map(land => (
              <button
                className={`primmaryBtn ${
                  land.value === successfulLanding ? 'active' : ''
                }`}
                key={land.id}
                onClick={() => applyFilter('land_success', land.value)}
              >
                {land.value === true ? 'True' : 'False'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
