import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton } from 'material-ui';
import { List, ListItem } from "material-ui/List";

export class FormUserDetails extends Component {

    render() {
        
        const styles = {
            button: {
                margin:15
            }
        }
        const { values: {firstName, lastName, email, occupation, city, bio }, nextStep, prevStep } = this.props;

        return (
           <MuiThemeProvider>
               <React.Fragment>

                   <AppBar 
                   title='Confirm User Data'
                   ></AppBar>

                  <List>
                    <ListItem
                    primaryText="First Name"
                    secondaryText={firstName}
                    ></ListItem>
                    
                    <ListItem
                    primaryText="Last Name"
                    secondaryText={lastName}
                    ></ListItem>
                    <ListItem
                    primaryText="Email"
                    secondaryText={email}
                    ></ListItem>
                    <ListItem
                    primaryText="Occupation"
                    secondaryText={occupation}
                    ></ListItem>
                    <ListItem
                    primaryText="City"
                    secondaryText={city}
                    ></ListItem>
                    <ListItem
                    primaryText="Bio"
                    secondaryText={bio}
                    ></ListItem>
                  </List>
                   
                   <RaisedButton
                   label="Confirm & Continue"
                   primary={true}
                   style={styles.button}
                   onClick={nextStep}
                   ></RaisedButton>

                    <RaisedButton
                   label="Back"
                   primary={false}
                   style={styles.button}
                   onClick={prevStep}
                   ></RaisedButton>

               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
