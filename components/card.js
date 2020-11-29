import React from 'react';
import Feed from './feed';

const Card = ({ apps, totalapps }) => {
  const cards = apps.map((app, index) => (
    <div class="container" key={app.name}>
      <Feed app={app} appno={index}  />
    </div>
  ))

  return cards
}


export default Card;
