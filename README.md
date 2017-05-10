# Accessible tab component for React

Properly and efficiently handles clicks, keystrokes, and tabindexes.

## Usage

```
import Tabs from './Tabs';

...

const tabContent = [
  {
    label: 'Some Component',
    content: <SomeComponent />
  },
  {
    label: 'Another Component',
    content: <AnotherComponent someProp={this.someFunc} />
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
.wrapper-tabs {

  .tabs {

    .tab {

      &.is-selected {

      }
    }
  }

  .tabpanels {

    .tabpanel {

      &.is-selected {

      }
    }
  }
}
```
