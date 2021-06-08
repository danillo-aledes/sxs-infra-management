import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Paginas
import Menu from '../pages/Menu';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default Routes;
