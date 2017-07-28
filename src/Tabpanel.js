import React from 'react';

class Tabpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      hidden: true
    };
  }

  className() {
    if (this.props.index === this.props.selectedIndex) {
      return 'dz0-tabpanel is-selected';
    } else {
      return 'dz0-tabpanel';
    }
  }

  render() {
    return (
      <div
        role="tabpanel" id={"tabpanel-" + this.props.index}
        className={className()}
        aria-expanded={this.state.expanded}
        aria-hidden={this.state.hidden}
        tabIndex={(this.props.selectedIndex === this.props.index) ? '0' : -1}>
        {this.props.comp}
      </div>
    )
  }
}

export default Tabpanel;
