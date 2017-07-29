import React from 'react';

class Tabpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.index === this.props.selectedIndex,
      hidden: !this.props.index === this.props.selectedIndex
    };
  }

  render() {
    return (
      <div
        role="tabpanel" id={"tabpanel-" + this.props.index}
        className={(this.props.index === this.props.selectedIndex) ? 'dz0-tabpanel is-selected' : 'dz0-tabpanel'}
        aria-expanded={this.state.expanded}
        aria-hidden={this.state.hidden}
        tabIndex={(this.props.selectedIndex === this.props.index) ? '0' : -1}>
        {this.props.comp}
      </div>
    )
  }
}

export default Tabpanel;
