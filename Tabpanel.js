import React from 'react';

const Tabpanel = (props) => {
  const { index, selectedIndex, comp } = props;

  const className = () => {
    if (index === selectedIndex) {
      return 'tabpanel is-selected';
    } else {
      return 'tabpanel';
    }
  }

  return (
    <div
      role="tabpanel" id={"tabpanel-" + index}
      className={className()}
      aria-expanded="false"
      aria-hidden="true"
      tabIndex={(selectedIndex === index) ? '0' : -1}>
      {props.comp}
    </div>
  )
}

export default Tabpanel;
