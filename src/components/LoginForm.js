import React, {Component} from 'react';
import {Card, Input, Button, CardSection, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChange, loginUser} from '../actions';
import {View, Text} from 'react-native';

class LoginForm extends Component {

    onEmailChange(text)
    {
        this
            .props
            .emailChanged(text);
    }

    onPasswordChange(text)
    {
        this
            .props
            .passwordChange(text);
    }

    onButtonPressed()
    {
        const {email, password} = this.props
        this
            .props
            .loginUser({email, password});
    }

    renderError()
    {

        if (this.props.error) {

            return (
                <View>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }
    renderButton()
    {
        if (this.props.loading) {
            return <Spinner size="large"></Spinner>
        }
        return (
            <Button
                onPress={this
                .onButtonPressed
                .bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this
                        .onEmailChange
                        .bind(this)}
                        value={this.props.email}/>
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='pasword'
                        onChangeText={this
                        .onPasswordChange
                        .bind(this)}
                        value={this.props.password}></Input>
                </CardSection>
                {this.renderError()}
                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    }

}

const mapStateToProps = (state) => {
    return {email: state.auth.email, password: state.auth.password, error: state.auth.error, loading: state.auth.loading}
}

export default connect(mapStateToProps, {emailChanged, passwordChange, loginUser})(LoginForm);
