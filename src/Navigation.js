import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SplashScreen from "./SplashScreen";
import FirstContainer from "./Container/FirstContainer";
import ConfirmedContainer from "./Container/ConfirmedContainer";
import DeathContainer from "./Container/DeathContainer";
import RecoverdContainer from "./Container/RecoverdContainer";

const SwitchNav = createSwitchNavigator(
  {
    SplashScreen,
    First: FirstContainer,
    Confirmed: ConfirmedContainer,
    Death: DeathContainer,
    Recoverd: RecoverdContainer,
  },
  {
    initialRouteName: "SplashScreen",
  }
);

export default createAppContainer(SwitchNav);
