# Ketikin

![](demo.gif)

Ketikin means "Type it for me" in Bahasa Indonesia.
A react component that types for you.

#### Bahasa Indonesia
buat biar ngetik2 sendiri gitu.

### Install

```bash
npm install ketikin
```

### Usage

```javascript
import Ketikin from 'ketikin';

<Ketikin text="Hello, World." interval={100}>
  {value => <h1>{value}</h1>}
</Ketikin>
```

### Props

```typescript
type Props = {
  children: (value: string) => ReactElement;
  text: string;
  texts?: string[];
  interval?: number;
};
```
