import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../../actions'

import nanoid from 'nanoid'

class List extends Component {
  componentDidMount () {
    this.props.dispatch(fetchCompanies());
  }

  id () {
    console.log(nanoid(4))
    return 'key-' + nanoid(4)
  }

  render() {
    const { loading, items } = this.props;
    console.log(this.props)

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {Object.keys(items).map((key, index) => (
          <div key={index}>
            {items[key].map((item, j) => (
              <div key={j}>{item.name}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.companies.items.startups,
  loading: state.companies.loading,
  error: state.companies.error
});


export default connect(mapStateToProps)(List);
