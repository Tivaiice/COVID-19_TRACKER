import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import HomeContainer from "../src/Container/HomeContainer";
import AbountContainer from "../src/Container/AboutContainer";

const SwitchNav = createSwitchNavigator(
  {
    SplashScreen,
    Home: HomeContainer,
    About: AbountContainer,
  },
  {
    initialRouteName: "SplashScreen",
  }
);

export default createAppContainer(SwitchNav);
