import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

// Paginas de listagem
import Menu from '../pages/Menu';
import Empresa from '../pages/Empresa';
import Infraestrutura from '../pages/Infraestrutura';
import Impressora from '../pages/Impressora';
import Usuario from '../pages/Usuario';
import Ramal from '../pages/Ramal';

// Paginas de Cadastro
import CadastrarEmpresa from '../pages/CadastrarEmpresa';
import CadastrarInfra from '../pages/CadastrarInfra';
import CadastrarImpressora from '../pages/CadastrarImpressora';
import CadastrarUsuario from '../pages/CadastrarUsuario';
import CadastrarRamal from '../pages/CadastrarRamal';

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

      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

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

      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

      <Stack.Screen
        name="Infraestrutura"
        component={Infraestrutura}
        options={({ navigation }) => ({
          headerTitle: "Lista Infra",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.push('CadastrarInfra')}>
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
        name="CadastrarInfra"
        component={CadastrarInfra}
        options={{
          headerTitle: "Cadastro de Infra",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' }
        }}
      />

      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

      <Stack.Screen
        name="Impressora"
        component={Impressora}
        options={({ navigation }) => ({
          headerTitle: "Lista Impressora",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.push('CadastrarImpressora')}>
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
        name="CadastrarImpressora"
        component={CadastrarImpressora}
        options={{
          headerTitle: "Cadastro de Impressora",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' }
        }}
      />

      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

      <Stack.Screen
        name="Usuario"
        component={Usuario}
        options={({ navigation }) => ({
          headerTitle: "Lista Usuário",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.push('CadastrarUsuario')}>
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
        name="CadastrarUsuario"
        component={CadastrarUsuario}
        options={{
          headerTitle: "Cadastro de Usuário",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' }
        }}
      />

      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

      <Stack.Screen
        name="Ramal"
        component={Ramal}
        options={({ navigation }) => ({
          headerTitle: "Lista Ramal",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' },
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.push('CadastrarRamal')}>
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
        name="CadastrarRamal"
        component={CadastrarRamal}
        options={{
          headerTitle: "Cadastro de Ramal",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: '#1e4b94' }
        }}
      /> 
    </Stack.Navigator>
  );
}

export default Routes;
