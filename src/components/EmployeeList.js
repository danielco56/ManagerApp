import React, {Component} from 'react';
import {ListView} from 'react-native';
import {employeesFetch} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem'

class EmployeeList extends Component {

    componentWillMount() {

        this
            .props
            .employeesFetch();
        this.createDataSource(this.props)

    }

    componentWillReceiveProps(nextProps)
    {

        this.createDataSource(nextProps)
    }

    createDataSource(props)
    {
        console.log(props)
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(props.employees);
    }

    renderRow(employee)
    {

        return <ListItem employee={employee}></ListItem>
    }

    render() {

        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}></ListView>
        )
    }
}

const mapStateToProps = state => {

    const employees = _.map(state.employees, (val, uid) => {
        return {
            ...val,
            uid
        };
    })
    console.log(employees, 'map')
    return {
        employees: [...employees]
    }

}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);