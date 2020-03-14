import React, { useContext, useState } from 'react';

// material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Copyright
import Copyright from './Copyright'

// Auth
import { AuthConext } from '../context/authContext'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LoginPanel() {
    // 样式hook
    const classes = useStyles();

    const { LoginRequest, authState } = useContext(AuthConext)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleEnterPress = function (key) {
        if (key === 'Enter') {
            LoginRequest(username, password)
        }
    }

    // console.log({username}, {password})

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
            <Typography component="h1" variant="h5">
                登录
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="用户名"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="密码"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => handleEnterPress(e.key)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="记住密码"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => LoginRequest(username, password)}
                >
                    登录
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        忘记密码
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"注册"}
                    </Link>
                    </Grid>
                </Grid>
            </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}