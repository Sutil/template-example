import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
    </>
  );
};

export default App;
