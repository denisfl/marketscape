import React from 'react';
import {id} from '../../helpers'

import Item from '../Item'
import Title from '../Title'

const Section = ({ list, title }) => {
  return (
    <div className="Section">
      <Title title={title} />
      <div className="Section-items">
        {list.map(item => (
          <Item key={id()}
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
