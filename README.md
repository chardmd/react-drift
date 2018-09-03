# React-Drift

React component implementation of Drift Chatbot Widget

![Alt Text](https://raw.githubusercontent.com/chardmd/react-drift/master/screenshot.png)

### Install

```
npm install react-driftjs
```

### Usage

```javascript
import Drift from 'react-driftjs'

<Drift appId="xxxxx" />  //get the appId from drift.com
```

### Identify User

```javascript

<Drift appId="xxxxx" 
  userId="1234"
  attributes={{ email: "user@example.com", company: "Acme Inc" }}
/>
  
```

More information can be found here: https://www.drift.com/

### License

MIT
