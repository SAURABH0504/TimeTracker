import {
  createNavigationContainerRef,
  StackActions,
  CommonActions,
  NavigationAction,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef = createNavigationContainerRef();
export const routeNameRef = React.createRef();
export const rightDrawerRef = React.createRef();

function dispatch(action: NavigationAction) {
  if (navigationRef && navigationRef.isReady()) {
    navigationRef.dispatch(action);
  }
}

function navigate(routeName: string, params: object) {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.navigate(routeName, params);
  }
}

function push(routeName: string, params: object = {}) {
  dispatch(StackActions.push(routeName, params));
}

function canGoBack() {
  return navigationRef && navigationRef.isReady() && navigationRef.canGoBack();
}

function popToTop() {
  if (canGoBack()) {
    dispatch(StackActions.popToTop());
  }
}

function pop() {
  if (canGoBack()) {
    dispatch(StackActions.pop());
  }
}

function refresh(params: object) {
  if (navigationRef && navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.setParams(params));
  }
}

function currentRouteName() {
  return routeNameRef.current;
}

const actions = {
  navigate,
  push,
  popToTop,
  pop,
  dispatch,
  refresh,
  currentRouteName,
};

export default actions;
