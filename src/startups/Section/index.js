import React from 'react';

import Item from 'startups/Item'
import Title from 'startups/Title'

import './styles.css'

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
