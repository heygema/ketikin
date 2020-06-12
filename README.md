# Ketikin

Ketikin means "Type it for me" in Bahasa Indonesia.
A react component that types for you.

### Install

```bash
npm install ketikin
```

### Usage

```javascript
<Ketikin text="Hello, World." interval={100}>
  {value => <h1>{value}</h1>}
</Ketikin>
```

### Props

```
type Props = {
  children: (value: string) => ReactElement;
  text: string;
  texts?: string[];
  interval?: number;
};
```
