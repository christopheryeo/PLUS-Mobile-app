import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, lightColors } from './src/theme/colors';
import { typography } from './src/theme/typography';

// Import Screens
import { HomeDashboardScreen } from './src/screens/HomeDashboardScreen';
import { PlanJourneyScreen } from './src/screens/PlanJourneyScreen';
import { JourneyResultsScreen } from './src/screens/JourneyResultsScreen';
import { EmergencySOSScreen } from './src/screens/EmergencySOSScreen';
import { CCTVFeedScreen } from './src/screens/CCTVFeedScreen';
import { RewardsCatalogueScreen } from './src/screens/RewardsCatalogueScreen';
import { TrafficAlertsScreen } from './src/screens/TrafficAlertsScreen';
import { ChatbotScreen } from './src/screens/ChatbotScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: lightColors.textSecondary,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: lightColors.border,
          backgroundColor: colors.white,
          paddingTop: 8,
          paddingBottom: 8,
          height: 64,
        },
        tabBarLabelStyle: {
          fontSize: typography.fontSize.xs,
          fontWeight: '700',
          letterSpacing: 0.5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeDashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlanJourneyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="route" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatbotScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="chat-bubble" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={RewardsCatalogueScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="JourneyResults" component={JourneyResultsScreen} />
          <Stack.Screen name="EmergencySOS" component={EmergencySOSScreen} />
          <Stack.Screen name="CCTVFeed" component={CCTVFeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
