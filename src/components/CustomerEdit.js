import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomerActions';

const isRequired=value=>
    (!value && "This field is requiered");

const isNumber=value=>(
    isNaN(Number(value)) && "This field must be a number"
);

const validate=(values)=>{
    const error={};

    if(!values.name){
        error.name='Name field is required';
    }

    if(!values.dni){
        error.dni="DNI field is required";
    }

    return error;
};

const CustomField=({input,meta,type,label,name})=>(
    <div>
        <label htmlFor={name}>{label}</label>
        <div>
            <input {...input} type={!type ? "text" : type}/>
        </div>
        {
            meta.touched &&
            meta.error && 
            <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    name="name" 
                    component={CustomField} 
                    label="Name">
                </Field>
                <Field 
                    name="dni" 
                    component={CustomField} 
                    label="DNI">
                </Field>
                <Field 
                    name="age" 
                    component={CustomField}
                    type="number"
                    validate={isNumber}
                    label="Age">
                </Field>
                <CustomersActions>
                    <button type="submit" disabled={submitting}>
                        Save
                    </button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomEditForm=reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    }
)(CustomerEdit);

export default setPropsAsInitial(CustomEditForm);