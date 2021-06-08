import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Paginas
import Menu from '../pages/Menu';
import Empresa from '../pages/Empresa';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Empresa" component={Empresa} />
    </Stack.Navigator>
  );
}

export default Routes;
