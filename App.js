import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Bienvenue sur NSOS !</Text>
      <Button title="Se connecter" onPress={() => alert('Connexion en cours')} />
    </SafeAreaView>
  );
};

export default App;
