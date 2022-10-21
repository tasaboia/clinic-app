import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from './types';
 
 
 const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
   prefixes: [Linking.createURL('/')],
   config: {
     screens: {
        Start: 'Start',
        Register: 'Register',
        Login: "Login",
        PasswordFlow: "PasswordFlow",
        RecoveryPassword: "Recovery",
        CodePassword: "Code",
        NewPassword: "New",
        Tabs: {
         screens: {
           Home: {
             screens: {
               UserDashboard: 'User',
             },
           },
           Add: {
             screens: {
               Add: 'Add',
             },
           },
           Tests: {
            screens: {
              Tests: 'Test',
            },
          },
         },
       },
     },
   },
 };
 
 export default LinkingConfiguration;
 