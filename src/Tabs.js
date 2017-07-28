import React from 'react';
import Tab from './Tab';
import Tabpanel from './Tabpanel';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.tabsLength = this.props.data.length;
    this.keys = {
      esc: 27,
      up: 38,
      down: 40,
      space: 32,
      enter: 13,
      left: 37,
      right: 39
    };

    this.state = {
      selected: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick(event, index) {
    event.preventDefault();
    if (this.state.selected === index) {
      if (this.props.callback) {
        callback();
      }
      return;
    }

    if (this.props.callback) {
      callback();
    }

    this.setState({
      selected: index
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === this.keys.up || event.keyCode === this.keys.down || event.keyCode === this.keys.left || event.keyCode === this.keys.right) {
      event.preventDefault();
    } else {
      if (this.props.callback) {
        callback();
      }
      return;
    }

    let targetIndex;

    if ((event.keyCode === this.keys.up || event.keyCode === this.keys.left) && this.state.selected > 0) {
      targetIndex = this.state.selected - 1;
    } else if ((event.keyCode === this.keys.down || event.keyCode === this.keys.right) && this.state.selected < this.tabsLength - 1) {
      targetIndex = this.state.selected + 1;
    } else {
      return;
    }

    if (this.props.callback) {
      callback();
    }

    this.setState({
      selected: targetIndex
    });
  }

  render() {
    const { data, loading } = this.props;

    if (!data.length) {
      return null;
    }

    return (
      <div className={"dz0-wrapper-tabs " + loading}>
        <div className="dz0-tabs" role="tablist">
          {data.map((tab, index) => {
            const label = tab.label;
            return (
              <Tab key={index} index={index} selectedIndex={this.state.selected} label={label} onClick={this.handleClick} onKeyDown={this.handleKeyDown} />
            );
          })}
        </div>
        <div className="dz0-tabpanels">
          {data.map((tab, index) => {
            const label = tab.label;
            const content = tab.content;
            return (
              <Tabpanel key={index} index={index} selectedIndex={this.state.selected} label={label} comp={content} />
            );
          })}
        </div>
      </div>
    )
  }
}
