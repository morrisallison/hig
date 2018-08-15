# Notifications Flyout

The notifications flyout provides information and warnings that products may recover from without user involvement. It is meant to be included in the navigation bar on the top of the page.

Read more about when and how to use the Notifications Flyout [on the internal wiki](https://wiki.autodesk.com/display/HIG/Notifications+Flyout).

## Getting started

```bash
yarn add @hig/notifications-flyout
```

## Import the component and CSS

```js
import NotificationsFlyout, { Notification } from '@hig/notifications-flyout';
import '@hig/notifications-flyout/build/index.css';
```

## Basic usage

```jsx
<NotificationsFlyout>
  <Notification>
    <p>Your subscription expires May 5</p>
  </Notification>
</NotificationsFlyout>
  ```
