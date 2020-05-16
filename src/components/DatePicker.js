import React from 'react';
// import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

var moment = require('moment');

export default function DatePicker(props) {
    // The first commit of Material-UI
    
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="yyyy/MM/DD"
                    margin="normal"
                    id="date-picker-inline"
                    label={props.label}
                    value={props.date}
                    onChange={props.handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}