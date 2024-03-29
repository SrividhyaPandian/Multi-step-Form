import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm  from "./Confirm";
import Success  from "./Success";

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceed to next
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go bact to previous Page
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle Field changes
    handlechange = input => e => {
        this.setState({ [input]: e.target.value})
    }
    render() {
        const {step} =  this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = {firstName, lastName, email, occupation, city, bio }
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handlechange={this.handlechange}
                    values={values}
                    ></FormUserDetails>
                )
            case 2:
                return (
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handlechange={this.handlechange}
                    values={values}
                    ></FormPersonalDetails>
                )
            case 3:
                return (
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    ></Confirm>
                )
            case 4:
                return (
                    <Success></Success>
                )
            default:
                return
        }
    }
}

export default UserForm
