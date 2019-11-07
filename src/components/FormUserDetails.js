import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui';

export class FormUserDetails extends Component {

    render() {
        const styles = {
            button: {
                margin:15
            }
        }
        const { values, handlechange,nextStep } = this.props;

        return (
           <MuiThemeProvider>
               <React.Fragment>

                   <AppBar 
                   title='Enter User Details'
                   ></AppBar>

                    <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handlechange('firstName')}
                    defaultValue={values.firstName}
                    >
                    </TextField>
                    
                    <br></br>

                    <TextField
                   hintText="Enter Your Last Name"
                   floatingLabelText="Last Name"
                   onChange={handlechange('lastName')}
                   defaultValue={values.lastName}
                   ></TextField>

                   <br></br>

                    <TextField
                   hintText="Enter Your Email"
                   floatingLabelText="Email"
                   onChange={handlechange('email')}
                   defaultValue={values.email}
                   ></TextField>

                   <br></br>
                   
                   <RaisedButton
                   label="Continue"
                   primary={true}
                   style={styles.button}
                   onClick={nextStep}
                   ></RaisedButton>

               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
