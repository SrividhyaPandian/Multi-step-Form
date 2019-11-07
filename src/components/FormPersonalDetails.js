import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, TextField, RaisedButton } from 'material-ui';

export class FormPersonalDetails extends Component {

    render() {
        const styles = {
            button: {
                margin:15
            }
        }
        const { values, handlechange,nextStep, prevStep } = this.props;

        return (
           <MuiThemeProvider>
               <React.Fragment>

                   <AppBar 
                   title='Enter Personal Details'
                   ></AppBar>

                    <TextField
                    hintText="Enter Your Occupation"
                    floatingLabelText="Occupation"
                    onChange={handlechange('occupation')}
                    defaultValue={values.occupation}
                    >
                    </TextField>
                    
                    <br></br>

                    <TextField
                   hintText="Enter Your City"
                   floatingLabelText="City"
                   onChange={handlechange('city')}
                   defaultValue={values.city}
                   ></TextField>

                   <br></br>

                    <TextField
                   hintText="Enter Your Bio"
                   floatingLabelText="Bio"
                   onChange={handlechange('bio')}
                   defaultValue={values.bio}
                   ></TextField>

                   <br></br>
                   
                   <RaisedButton
                   label="Back"
                   primary={false}
                   style={styles.button}
                   onClick={prevStep}
                   ></RaisedButton>
                   
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

export default FormPersonalDetails
