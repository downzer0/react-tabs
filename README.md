# Accessible tab component for React

Properly and efficiently handles clicks, keystrokes, and tabindexes. Also allows for callbacks to be passed to perform some action when a tab is clicked (optional).

## Usage

```javascript
import Tabs from './Tabs';

...

const tabContent = [
  {
    label: 'Some Component',
    content: <SomeComponent />,
    callback: this.someCallback
  },
  {
    label: 'Another Component',
    content: <AnotherComponent someProp={this.someFunc} />,
    callback: () => {}
  },
  {
    label: 'Third Tab',
    content: <ThirdComponent />
  }
];

...

render() {
  return (
    <Tabs data={tabContent} />
  )
}

```

## Styling

No styles are included, but use the following for reference:

```scss
.dz0-wrapper-tabs {

  .dz0-tabs {

    .dz0-tab {

      &.is-selected {

      }
    }
  }

  .dz0-tabpanels {

    .dz0-tabpanel {

      &.is-selected {

      }
    }
  }
}
```
