import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import FirstContainer from "./Container/FirstContainer";
import TwoContainer from "./Container/TwoContainer";

const SwitchNav = createSwitchNavigator(
  {
    SplashScreen,
    First: FirstContainer,
    Two: TwoContainer,
  },
  {
    initialRouteName: "SplashScreen",
  }
);

export default createAppContainer(SwitchNav);
