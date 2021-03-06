import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit'
import {Actions} from 'react-native-router-flux'

const RouterComponent = () => {
    return (
        <Router cardStyle={{
            backgroundColor: '#FFF'
        }}>
            <Scene key='root' hideNavBar>
                <Scene key='auth' initial>
                    <Scene key='login' component={LoginForm} title='Please Login'></Scene>
                </Scene>
                <Scene key='main'>
                    <Scene
                        rightTitle='Add'
                        onRight={() => {
                        Actions.employeeCreate()
                    }}
                        key='employeeList'
                        component={EmployeeList}
                        title='Employee List'></Scene>
                    <Scene key='employeeCreate' title='Create Employee' component={EmployeeCreate}></Scene>
                    <Scene key='employeeEdit' title='Edit Employee' component={EmployeeEdit}></Scene>
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;