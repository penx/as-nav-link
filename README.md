# asNavLink

React Router HOC that mimics NavLink functionality but just passes an active prop to child component.

(For background see https://github.com/UKHomeOffice/govuk-react/issues/423)

e.g. when you want to use a CSSinJS library that expects an active prop but you're using React Router 😢

## Usage

`npm install as-nav-link --save`

### Your Dumb Component

Say you have a dumb/UI/styled component, such as:

```jsx
const MyNavAnchor = styled(({
  as: T = 'a',
  ...props
}) => <T {...props} />)({
  textDecoration: 'blink',
  color: 'blue',
}, ({ active }) => (active && {
  color: 'red',
}));
```

Note that you need to provide the 'as' prop. This is provided by styled-components by default but needs to be done manually (as per code sample above) for emotion.

### Higher order component
```jsx
import asNavLink from 'as-nav-link';

const MyNavLink = asNavLink(config)(MyNavAnchor);
```

`config` is optional and can include an `isActive` function (as per ReactRouter's NavLink) and an `activeProp` string (the prop name that is passed to your dumb component).

### Render Props

This HOC wraps a render props component. If you'd rather use render props directly, see [NavLinkWithProp](https://github.com/penx/nav-link-with-prop)
