import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStartups } from 'startups/redux/actions'
import Section from 'startups/components/Section'

import './styles.css'

class List extends Component {
  componentDidMount () {
    this.props.dispatch(fetchStartups());
  }

  render() {
    const { loading, items } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="List">
        {Object.keys(items).map(key => (
          <Section list={items[key]} title={key} key={key} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.startups.items.startups,
  loading: state.startups.loading,
  error: state.startups.error
});


export default connect(mapStateToProps)(List);
