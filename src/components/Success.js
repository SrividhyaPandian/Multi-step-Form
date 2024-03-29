import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

export class Success extends Component {

    render() {

        return (
           <MuiThemeProvider>
               <React.Fragment>

                   <AppBar 
                   title='Success'
                   ></AppBar>
                   <h1>Thank you for your Submission</h1>
                   <p>You will get an email with further instructions</p>
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}
    
export default Success
