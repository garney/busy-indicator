busy-indicator

Busy indicator that wraps react-loader-spinner

## 🚀 Getting Started

Using [`npm`]():

```bash
npm i @garney/busy-indicator
```

## ✨ Usage
[DEMO](https://codesandbox.io/s/busy-indicator-demo-4q5v1)
```javascript
import { BusyIndicator, setBusyStatus }  from '@garney/busy-indicator';
 
function DeepChild() {
  return (
    <div>
      <button onClick={() => {
            setBusyStatus(true);
        }}>Show</button>
      <button onClick={() => {
          setBusyStatus(false);
        }}>Hide</button>
    </div>
  )
}
 
export default () => {
  return (
    <div className="main-app">
        <DeepChild/>
        <BusyIndicator/>
    </div>
  );
};
```

## 📌 Props

Prop                  | Type     | Default                   | Required
--------------------- | -------- | ------------------------- | --------
`options`|any|`false`|No

## ✌️ License
[MIT](https://opensource.org/licenses/MIT)
