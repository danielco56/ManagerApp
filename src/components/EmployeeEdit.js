import React, {Component} from 'react';
import {Card, CardSection, Button, Confirm} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import EmployeeForm from './EmployeeForm';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {

    state = {
        showModal: false
    }

    componentWillMount()
    {
        console.log(this.props.employee, 'dddd')
        _.each(this.props.employee, (value, prop) => {
            this
                .props
                .employeeUpdate({prop, value});
        });

    }

    onButtonPress() {
        const {name, phone, shift} = this.props;
        this
            .props
            .employeeSave({name, phone, shift, uid: this.props.employee.uid})
    }

    onTextPress()
    {
        const {phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);

    }

    changeState()
    {
        this.setState({
            showModal: !this.state.showModal
        })

    }

    onDecline()
    {
        this.setState({showModal:false})
    }

    onAccept()
    {
        const {uid}= this.props.employee
       this.props.employeeDelete({uid});
    }

    render()
    {
        return (
            <Card>
                <EmployeeForm></EmployeeForm>
                <CardSection>
                    <Button >Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this
                        .onTextPress
                        .bind(this)}>
                        Text
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={this
                        .changeState
                        .bind(this)}>
                        Fire
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this
                    .onAccept
                    .bind(this)}
                    onDecline={this
                    .onDecline
                    .bind(this)}>
                    Do you wanna fire this person?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);