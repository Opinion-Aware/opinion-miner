import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #ff8e53)',
        border: 0,
        borderRadius: 15,
        color: 'white',
        padding: '0 30px'


    }
});

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Take me to my summary..</Button>
};





export default App;
