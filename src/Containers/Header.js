import React, {Component} from 'react';
import ViewBox from '../ViewBox/ViewBox';
import { Button, IconButton, InputBase, Toolbar, makeStyles, Typography } from '@material-ui/core';
import { Menu} from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, fade } from '@material-ui/core/styles';
import styles from './HeaderStyles'; 

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
}));

const Header = (props) => {
        const classes = useStyles();

        return(
            <div>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer">
                    <Menu></Menu>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Location restaurants
                    </Typography>
                        <div className={classes.search}>
                        <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                        <InputBase
                        id="locationInput"
                        placeholder="Search ZipCode…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        onChange={props.change}
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Button color="inherit" onClick={props.submit}>Submit Location</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
}


export default withStyles(styles)(Header)