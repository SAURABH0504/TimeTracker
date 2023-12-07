// TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from "../components/modules/Home";
import PlayPauseButton from "../common/PlayPauseButton";

import { COLORS } from "../color";
import { HomeIcon } from "../assets";
import { SCREENS } from "./constants";
import { Provider } from "react-redux";
import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const Tab = createBottomTabNavigator();

const customTabBarStyle = {
  activeTintColor: COLORS.BLUE,
  inactiveTintColor: COLORS.GREY,
  allowFontScaling: true,
  labelStyle: { fontSize: 16, paddingTop: 5 },
  tabStyle: { paddingTop: 5 },
  style: { height: 60, borderTopColor: COLORS.GREY },
};

const customTabBarOptions = {
  headerShown: false,
  title: "",
  tabBarIcon: ({ color }: any) => {
    return (
      <>
        <HomeIcon color={color} />
      </>
    );
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Tab.Navigator tabBarOptions={{ style: customTabBarStyle }}>
            <Tab.Screen
              name={SCREENS.HOME_SCREEN}
              component={HomeScreen}
              options={customTabBarOptions}
            />
            <Tab.Screen
              name="Screen2"
              component={HomeScreen}
              options={customTabBarOptions}
            />
            <Tab.Screen
              name="Screen3"
              component={HomeScreen}
              options={{
                tabBarButton: () => <PlayPauseButton />,
              }}
            />
            <Tab.Screen
              name="Screen4"
              component={HomeScreen}
              options={customTabBarOptions}
            />
            <Tab.Screen
              name="Screen5"
              component={HomeScreen}
              options={customTabBarOptions}
            />
          </Tab.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default RootNavigator;
