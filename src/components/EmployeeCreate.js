import React, {Component} from 'react'
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Input, Button} from './common';
import {Picker, Text} from 'react-native';

class EmployeeCreate extends Component {

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
                <CardSection>
                    <Input
                        label='Name'
                        placeholder='Jane'
                        value={this.props.name}
                        onChangeText={text => this
                        .props
                        .employeeUpdate({prop: 'name', value: text})}></Input>
                </CardSection>

                <CardSection>
                    <Input
                        label='Phone'
                        placeholder='07xxxxxxxx'
                        value={this.props.phone}
                        onChangeText={text => this
                        .props
                        .employeeUpdate({prop: 'phone', value: text})}></Input>
                </CardSection>

                <CardSection
                    style={{
                    flexDirection: 'column'
                }}>
                    <Text style={styles.pickerTextStyle}>Select a shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this
                        .props
                        .employeeUpdate({prop: 'shift', value})}>
                        <Picker.Item label='Monday' value="Monday"></Picker.Item>
                        <Picker.Item label='Marti' value="Marti"></Picker.Item>
                        <Picker.Item label='Miercuri' value="Miercuri"></Picker.Item>
                        <Picker.Item label='Joi' value="Joi"></Picker.Item>
                        <Picker.Item label='Vineri' value="Vineri"></Picker.Item>
                        <Picker.Item label='Sambata' value="Sambata"></Picker.Item>
                        <Picker.Item label='Duminica' value="Duminica"></Picker.Item>
                    </Picker>
                </CardSection>

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

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);