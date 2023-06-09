# Huggy Contacts List

> A project built for a mobile app (Android and IOS) with React-Native framework. This project is focused on Huggy's mockup contact list and works with [Huggy's API v3](https://developers.huggy.io/pt/API/api-v3.html)

<br />

### :bulb: What the core libs do you will install in this project?

- [Styled Components](https://styled-components.com/docs) :nail_care:
  - Used for create a React component with a predefined css style
- [Axios](https://axios-http.com/ptbr/docs/intro) :globe_with_meridians:
  - For making requests to the [Huggy's API v3](https://developers.huggy.io/pt/API/api-v3.html)
- [React Navigation](https://reactnavigation.org/docs/getting-started) :boat:
  - Will be used to navigate between the system screens. In this project specifically, just stack navigation was used
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) :hammer:
  - This library is used to make access for available icons and to get icons access in the project through a specific component
- [Async Storage ](https://react-native-async-storage.github.io/async-storage/docs/install/) :handbag:
  - With AsyncStorage you can put some data in local cache storage of the device. It's a kind of asynchronous local database, and is used for persist login in this project

<br />

### :zap: Installing

First of all you'll need to clone this repository

```
git clone https://github.com/BugVogel/huggycontacts.git
```

Now go to the project folder (Windows)

```
cd huggycontacts
```

Need to install packages used in this project

```
npm install
```

or

```
yarn
```

You can link the assets used in this project typing this command:

```
npx react-native-asset
```

For IOS only, we recommend make the pod installation:

```
npx pod-install ios
```

Finally, open your emulator device and run in your project folder:

Android:

```
npx react-native start
npx react-native run-android
```

IOS:

```
npx react-native start
npx react-native run-ios
```

> This project wasn't tested in IOS system operation because hardware limitations, but also can be installed in this environment

<br />

### :wrench: Configurations

- Requests
  - If you want to change the token authorization you have to edit the confi.js file (Access another account)

<br /><br />
