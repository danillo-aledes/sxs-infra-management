import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

// Paginas
import Menu from '../pages/Menu';
import Empresa from '../pages/Empresa';
import CadastrarEmpresa from '../pages/CadastrarEmpresa';
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
        options={({ navigation }) => ({
          headerTitle: "Lista Empresa",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.push('CadastrarEmpresa')}>
              <FontAwesome
                name={'plus-square'}
                size={30}
                color={'#fff'}
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen
        name="CadastrarEmpresa"
        component={CadastrarEmpresa}
        options={{
          headerTitle: "Cadastro de Empresa",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' }
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
