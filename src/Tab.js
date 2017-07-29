import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: this.props.index === this.props.selectedIndex,
      selected: this.props.index === this.props.selectedIndex
    };
  }

  render() {
    return (
      <button
        role="tab" id={"tab-" + this.props.index}
        className={(this.props.index === this.props.selectedIndex) ? 'dz0-tab is-selected' : 'dz0-tab'}
        aria-selected={this.state.selected}
        aria-expanded={this.state.expanded}
        aria-controls={"tabpanel-" + this.props.index}
        tabIndex={(this.props.selectedIndex === this.props.index) ? '0' : -1}
        onClick={(event) => this.props.onClick(event, this.props.index)}
        onKeyDown={(event) => this.props.onKeyDown(event, this.props.index)}>
        {this.props.label}
      </button>
    )
  }
}

export default Tab;
