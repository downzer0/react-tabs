import React from 'react';

const Tab = (props) => {
  const { index, selectedIndex, label, onClick, onKeyDown } = props;

  const className = () => {
    if (index === selectedIndex) {
      return 'dz0-tab is-selected';
    } else {
      return 'dz0-tab';
    }
  }

  return (
    <button
      role="tab" id={"tab-" + index}
      className={className()}
      aria-selected="false"
      aria-expanded="false"
      aria-controls={"tabpabel-" + index}
      tabIndex={(selectedIndex === index) ? '0' : -1}
      onClick={(event) => onClick(event, index)}
      onKeyDown={(event) => onKeyDown(event, index)}>
      {label}
    </button>
  )
}

export default Tab;
