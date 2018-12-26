import React, { Component } from 'react';
import { connect } from 'react-redux';
import {id} from '../../helpers'

import { fetchCompanies } from '../../actions'
import Section from '../Section'
import './styles.css'


class List extends Component {
  componentDidMount () {
    this.props.dispatch(fetchCompanies());
  }

  render() {
    const { loading, items } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="List">
        {Object.keys(items).map(key => (
          <Section list={items[key]} title={key} key={id()} />
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
