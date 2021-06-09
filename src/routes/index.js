import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

// Paginas
import Menu from '../pages/Menu';
import Empresa from '../pages/Empresa';
// import Infra from '../pages/Infra';
// import Impressoras from '../pages/Impressoras';
// import Usuarios from '../pages/Usuarios';
// import Ramal from '../pages/Ramal';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: () => (
            <Text style={{ color: "#fff", fontSize: 25 }}>SXS - Infra Management</Text>
          ),
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        name="Empresa"
        component={Empresa}
        options={{
          headerTitle: "Lista Empresa",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesome
                name={'plus-square'}
                size={30}
                color={'#fff'}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
