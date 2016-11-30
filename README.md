## LiveChat: Agent App Extension Example (webpack)

This is an example of [Agent App Extension](https://docs.livechatinc.com/agent-app-extension/).

### Set up the environment

```
git clone git@github.com:livechat/agent-app-sample-extension-webpack.git
cd agent-app-sample-extension-webpack
npm install
```

### Run the webpack server
```
npm start
```
The content of extension should be available at [https://localhost:3333](https://localhost:3333).

### Turn on the extension

Navigate to https://my.livechatinc.com/ and paste the following snippet in the developers console.

```js
App.collections.Integrations.add({
  id: 'sandbox',
  url: 'https://localhost:3333'
})
```

Enjoy! :rocket:
