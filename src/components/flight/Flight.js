import React from 'react';

const Flight = ({ programs }) => {
  return (
    <div className="flightContainer">
      {programs.length > 0
        ? programs.map(program => (
            <div key={program.flight_number} className="cardContainer">
              <img
                loading="lazy"
                src={program.links.mission_patch_small}
                alt={program.flight_number}
              />
              <br />
              <h5>
                {program.mission_name} #{program.flight_number}
              </h5>
              <br />
              <strong>Mission ids</strong>
              {program.mission_id.length ? (
                <span>
                  {program.mission_id.map(id => (
                    <span key={id}> {id} </span>
                  ))}
                </span>
              ) : null}
              <br />
              <strong>Launch year:</strong> <span> {program.launch_year} </span>
              <br />
              <strong>Successful Launch </strong>
              <span>{program.launch_success === true ? 'true' : 'false'}</span>
              <br />
              <strong>Successful Landing:</strong>
              <span>{program.launch_landing === true ? 'true' : 'false'}</span>
              <br />
            </div>
          ))
        : 'No Data'}
    </div>
  );
};

export default Flight;
