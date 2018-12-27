import React from 'react';

import Item from '../Item'
import Title from '../Title'

const Section = ({ list, title }) => {
  return (
    <div className="Section">
      <Title title={title} />
      <div className="Section-items">
        {list.map(item => (
          <Item key={item.logo}
                name={item.name}
                title={item.title}
                logoUrl={item.logo}
                url={item.url}
          />
        ))}
      </div>
    </div>
  )
}

export default Section;
