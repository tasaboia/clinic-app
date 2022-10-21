import { NavigatorScreenParams } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export type RootStackParamList = {
    Start: undefined;
    Register: undefined;
    Login: undefined;
    PasswordFlow: undefined;
    Tabs:  NavigatorScreenParams<RootTabParamList> | undefined;
    RecoveryPassword: undefined;
    NewPassword: undefined;
    CodePassword: undefined;
  };


  export type RootTabParamList = {
    Home: undefined;
    Add: undefined;
    Tests: undefined;
  };