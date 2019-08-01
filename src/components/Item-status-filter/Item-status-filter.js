import React from 'react';

import './Item-status-filter.scss';


class ItemStatusFilter extends React.Component {

  buttonsArr = [
    {name: 'all', label: 'all'},
    {name: 'active', label: 'active'},
    {name: 'done', label: 'done'}
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttonsArr.map(({ name, label }) => {
      const isActive = name === filter;
      const clazz = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

      return (
        <button type="button"
          className={clazz}
          key={name}
          onClick={() => { return onFilterChange(name) }}>
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
}

export default ItemStatusFilter;
