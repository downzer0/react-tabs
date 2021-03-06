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

    this.buildClassList = this.buildClassList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buildClassList() {
    const classList = ['dz0-wrapper-tabs'];
    if (this.props.classes) {
      classList.push(this.props.classes);
    }
    return classList.join(' ');
  }

  handleClick(event, index) {
    event.preventDefault();
    if (this.state.selected === index) {
      return;
    }

    this.setState({
      selected: index
    });

    if (this.props.data[index].callback) {
      this.props.data[index].callback();
    }
  }

  handleKeyDown(event) {
    if (event.keyCode === this.keys.up || event.keyCode === this.keys.down || event.keyCode === this.keys.left || event.keyCode === this.keys.right) {
      event.preventDefault();
    } else {
      return true;
    }

    let targetIndex;

    if ((event.keyCode === this.keys.up || event.keyCode === this.keys.left) && this.state.selected > 0) {
      targetIndex = this.state.selected - 1;
    } else if ((event.keyCode === this.keys.down || event.keyCode === this.keys.right) && this.state.selected < this.tabsLength - 1) {
      targetIndex = this.state.selected + 1;
    } else {
      return;
    }

    this.setState({
      selected: targetIndex
    });

    if (this.props.callback) {
      this.props.callback();
    }
  }

  render() {
    const { data, loading } = this.props;

    if (!data.length) {
      return null;
    }

    return (
      <div className={this.buildClassList()}>
        <div className="dz0-tabs" role="tablist">
          {data.map((tab, index) => {
            const label = tab.label;
            const cb = tab.callback;
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
