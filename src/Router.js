import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import {Actions} from 'react-native-router-flux'

const RouterComponent = () => {
    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title='Please Login' initial></Scene>
                </Scene>
                <Scene key='main'>
                    <Scene
                        rightTitle='Add'
                        onRight={() => {Actions.employeeCreate()}}
                        key='employeeList'
                        component={EmployeeList}
                        title='Employee List'></Scene>
                    <Scene key='employeeCreate' title='Create Employee' component={EmployeeCreate}></Scene>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;