import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from 'App/Containers/Login/LoginScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: LoginScreen,
    Home: HomeScreen
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
