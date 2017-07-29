import React from 'react';

class Tabpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      hidden: true
    };

    this.className = this.className.bind(this);
  }

  className() {
    if (this.props.index === this.props.selectedIndex) {
      this.setState({
        expanded: true,
        selected: true
      });
      return 'dz0-tabpanel is-selected';
    } else {
      this.setState({
        expanded: false,
        selected: false
      });
      return 'dz0-tabpanel';
    }
  }

  render() {
    return (
      <div
        role="tabpanel" id={"tabpanel-" + this.props.index}
        className={this.className()}
        aria-expanded={this.state.expanded}
        aria-hidden={this.state.hidden}
        tabIndex={(this.props.selectedIndex === this.props.index) ? '0' : -1}>
        {this.props.comp}
      </div>
    )
  }
}

export default Tabpanel;
