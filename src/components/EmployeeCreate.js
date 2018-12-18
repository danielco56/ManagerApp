import React, {Component} from 'react'
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate, employeeClear} from '../actions';
import {Card, CardSection, Input, Button} from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

    componentWillMount() {
        this
            .props
            .employeeClear();
    }
    onButtonPressed() {
        const {name, phone, shift} = this.props;

        this
            .props
            .employeeCreate({
                name,
                phone,
                shift: shift || 'Monday'
            });
    }

    render()
    {

        return (
            <Card>
                <EmployeeForm {...this.props}></EmployeeForm>
                <CardSection>
                    <Button
                        onPress={this
                        .onButtonPressed
                        .bind(this)}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate, employeeClear})(EmployeeCreate);