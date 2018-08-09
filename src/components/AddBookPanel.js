import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    img: {
      height: 128,
    },
    chip: {
        margin: theme.spacing.unit,
    },
  });

class AddBookPanel extends React.Component {
    constructor(props) {
        super(props);
    
        this.state.value = this.props.value;
    }
    
    state = {};

    handleEntering = () => {
        this.radioGroup.focus();
    };
    
    handleCancel = () => {
        this.props.onClose(this.props.value);
    };
    
    handleOk = () => {
        this.props.onClose(this.state.value);
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render() {

        <Dialog>

        </Dialog>
    }
}

export default withStyles(styles)(AddBookPanel);