busy-indicator

Busy indicator that wraps react-loader-spinner

## 🚀 Getting Started

Using [`npm`]():

```bash
npm i @garney/busy-indicator
```

## ✨ Usage
[DEMO](https://frontarm.com/demoboard/?id=f2d60eb7-2acf-4b90-a457-68e8a73dd930)
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
