import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      selected: false
    };

    this.className = this.className.bind(this);
  }

  className() {
    if (this.props.index === this.props.selectedIndex) {
      return 'dz0-tab is-selected';
    } else {
      return 'dz0-tab';
    }
  }

  render() {
    return (
      <button
        role="tab" id={"tab-" + this.props.index}
        className={this.className}
        aria-selected={this.state.selected}
        aria-expanded={this.state.expanded}
        aria-controls={"tabpanel-" + this.props.index}
        tabIndex={(this.props.selectedIndex === this.props.index) ? '0' : -1}
        onClick={(event) => this.props.onClick(event, this.props.index)}
        onKeyDown={(event) => this.props.onKeyDown(event, this.props.index)}>
        {label}
      </button>
    )
  }
}

export default Tab;
