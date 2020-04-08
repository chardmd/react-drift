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

### Identify User / Assign Attributes

To identify the user with an ID that is unique in your application, include a userId property with that value. This will trigger the chatbot to use the `identify` method method.  If the userId is omitted, the component will have the chatbot use the `setUserAttributes` method.
```javascript

<Drift appId="xxxxx" 
  userId="1234"
  attributes={{ email: "user@example.com", company: "Acme Inc" }}
/>
  
```

### Add Event Handlers

The chatbot widget emits several events. A listing of the events can be found here: https://devdocs.drift.com/docs/drift-events#section-first-interaction
To handle the events, assign an array of objects to the eventHandlers property. The `event` property will match the name of the event emitted by drift. The `function` property is the function definition of the handler.

``` javascript

<Drift appId="xxxxx"
  eventHandlers={[{'event': 'conversation:firstInteraction', 'function': handleInteraction}]}
/>

var handleInteraction = function() {
    console.log('User has just interacted with the chatbot')
}

```

More information can be found here: https://www.drift.com/

### License

MIT
