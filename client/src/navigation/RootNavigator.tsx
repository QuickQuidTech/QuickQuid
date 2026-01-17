import React, { useState, useContext, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/Auth/IntroScreen';
import RoleSelectionScreen from '../screens/Auth/RoleSelectionScreen';
import StudentVerificationScreen from '../screens/Auth/StudentVerificationScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ServiceDetailScreen from '../screens/Services/ServiceDetailScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import PaymentScreen from '../screens/Payment/PaymentScreen';
import AdminDashboardScreen from '../screens/Admin/AdminDashboardScreen';

const Stack = createNativeStackNavigator();

interface AppContextType {
  userRole: 'buyer' | 'seller';
  setUserRole: (role: 'buyer' | 'seller') => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export default function RootNavigator() {
  const [userRole, setUserRole] = useState<'buyer' | 'seller'>('buyer');

  return (
    <AppContext.Provider value={{ userRole, setUserRole }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Intro"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
          <Stack.Screen
            name="StudentVerification"
            component={StudentVerificationScreen}
          />
          <Stack.Screen name="MainTabs">
            {() => <BottomTabNavigator userRole={userRole} />}
          </Stack.Screen>
          <Stack.Screen
            name="ServiceDetail"
            component={ServiceDetailScreen}
            options={{
              presentation: 'modal',
              headerShown: true,
              headerTitle: 'Service Details',
              headerStyle: { backgroundColor: '#1A1A1A' },
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerShown: true,
              headerTitle: 'Chat',
              headerStyle: { backgroundColor: '#1A1A1A' },
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{
              presentation: 'modal',
              headerShown: true,
              headerTitle: 'Payment',
              headerStyle: { backgroundColor: '#1A1A1A' },
              headerTintColor: '#FFFFFF',
            }}
          />
          <Stack.Screen
            name="AdminDashboard"
            component={AdminDashboardScreen}
            options={{
              headerShown: true,
              headerTitle: 'Admin Dashboard',
              headerStyle: { backgroundColor: '#1A1A1A' },
              headerTintColor: '#FFFFFF',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
