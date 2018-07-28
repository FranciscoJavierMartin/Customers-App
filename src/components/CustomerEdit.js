import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired=value=>
    (!value && "This field is requiered");

const MyField=({input,meta})=>(
    <div>
        <div>
            <input {...input} type="text"/>
        </div>
        {
            meta.error && 
            <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field 
                        name="name" 
                        component={MyField} 
                        type="text"
                        validate={isRequired}>
                    </Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomEditForm=reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

export default setPropsAsInitial(CustomEditForm);