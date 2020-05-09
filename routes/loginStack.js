import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Elevators from '../screens/Elevators';


const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTintColor: '#ffff',
            headerStyle: {
                backgroundColor: 'black',
            }
        }
    },
    Elevators: {
        screen: Elevators,
        navigationOptions: {
            title: 'Elevator Details',
            headerTintColor: '#ffff',
            headerStyle: {
                backgroundColor: 'black',
            }
        }
    }

};

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);