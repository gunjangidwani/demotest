import React, { useState, useEffect } from 'react';

import { api } from '../api';
import Filter from './filter/Filter';
import Flight from './flight/Flight';

const Home = () => {
  const [programs, setPrograms] = useState([]);
  const [launchYear, setLaunchYear] = useState('');
  const [successfulLanding, setSuccessfulLanding] = useState('');
  const [successfulLaunch, setSuccessfulLaunch] = useState('');
  const [loader, setLoader] = useState(false);

  const updateFilterType = (filterType, value) => {
    switch (filterType) {
      case 'launch_year':
        setLaunchYear(value);
        break;
      case 'launch_success':
        setSuccessfulLaunch(value);
        break;
      case 'land_success':
        setSuccessfulLanding(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (launchYear || successfulLaunch || successfulLanding) {
      const filterParameter = `&launch_success=${successfulLaunch}&land_success=${successfulLanding}&launch_year=${launchYear}`;
      setLoader(true);
      api.spacesX.applyFilter(filterParameter).then(res => {
        setPrograms(res);
        setLoader(false);
      });
    } else {
      setLoader(true);
      api.spacesX.applyFilter('/').then(res => {
        setPrograms(res);
        setLoader(false);
      });
    }
  }, [successfulLaunch, successfulLanding, launchYear]);

  const applyFilter = (filterType, value) => {
    updateFilterType(filterType, value);
  };

  return (
    <div className="container">
      <h1>SpaceX Launch Programs</h1>
      <div className="programs">
        <Filter
          applyFilter={applyFilter}
          launchYear={launchYear}
          successfulLanding={successfulLanding}
          successfulLaunch={successfulLaunch}
        />
        {loader ? <Flight programs={programs} /> : "...loading"}
      </div>
      <div className="footer">
        <h5>Developed by: Gunjan Gidwani </h5>
      </div>
    </div>
  );
};

export default Home;
