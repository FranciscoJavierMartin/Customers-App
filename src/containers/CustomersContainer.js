import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomerActions from '../components/CustomerActions';

const my_customers=[{
    "dni":"12345678",
    "name":"Peter Parker",
    "age":12
},{
    "dni":"87654321",
    "name":"Stephen Strange",
    "age":18
},{
    "dni":"13579246",
    "name":"Bruce Banner",
    "age":24
}];

class CustomersContainer extends Component {
    
    handleAddNew=()=>{
        this.props.history.push('/customers/new');
    }

    renderBody=customers=>(
        <div>
            <CustomerList 
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo cliente</button>
            </CustomerActions>
        </div>
    )

    render(){
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(my_customers)}>
                </AppFrame>
            </div>
        );
    }
};

CustomersContainer.propTypes = {
    
};

export default withRouter(CustomersContainer);