import React from 'react'
import { Grid, Card, CardContent, TextField, Typography, Button, Checkbox, ButtonBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import officeBackground from './officeBackground.jpg'
import help from './help.png'



const useStyles = makeStyles((theme) => ({

    container : {
        height: '100vh',
         width: '100vw' ,
         
    },
    
    cardContainer :{
        height: '25rem',
         width: '31rem',
         padding: '2rem',
         
    },
    formContainer : {
        marginTop: '1rem'
    },
    formItem :{
        width: '20rem'
    },
    formButton : {
        width: '20rem',
        marginTop: '2rem',
         color: 'white'
    },
    plusLetter :{
        color: theme.palette.primary.main,
        fontWeight : 300
    },
    office :{
        backgroundImage : `url(${officeBackground})`,
        backgroundPosition : 'left 150% top 105%',
        backgroundRepeat : 'no-repeat',
        backgroundSize: 'cover',
        width : '60%',
        height :'40%', 
        position:'absolute',
        top :'0',
        zIndex : '-1',
        borderTopLeftRadius  : '20px',
        borderTopRightRadius  : '20px',
        [theme.breakpoints.down('sm')] :{
            width :'100%'
        }
    },
    background : {
        backgroundColor : '#f9f9fb',
        width :'60%',
        height  : '60%',
        position : 'absolute',
        zIndex : '-1',
        bottom  : 0
    }

}))

const LoginPage = () => {

    const classes = useStyles()

    return (
        <Grid container  justify='center' alignItems='center' className={classes.container} >
            <Grid item style={{marginTop : '4rem'}}>
                
                <Card >
                    <CardContent>
                        <Grid container className={classes.cardContainer} direction='column' justify='center' alignItems='center' >
                            <Grid item>
                                <Typography align='right' variant='h4'>P E R K I N S<br /> <span className={classes.plusLetter} >+</span> W I L L</Typography>
                            </Grid>
                            <Grid item className = {classes.formContainer}>
                                <form>
                                    <Grid spacing={1} container direction='column' justify='center' alignItems='center'>
                                        <Grid item className={classes.formItem}>
                                            <TextField fullWidth label='username' type='email' />
                                        </Grid>
                                        <Grid item className={classes.formItem} >
                                            <TextField fullWidth label='password' type='password' />
                                        </Grid>
                                        <Grid item  container justify='space-between' alignItems='center' >
                                            <Grid item >
                                                <Typography variant='subtitle2'>
                                                    <Checkbox 
                                                    style={{paddingLeft :0, paddingRight:5}}
                                                        defaultChecked
                                                        color='primary'
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                        disableTouchRipple
                                                    />
                                                    Remember me
                                                </Typography>


                                            </Grid>
                                            
                                            <Grid item><Typography variant='subtitle2' component={ButtonBase}>Forgot my Password</Typography></Grid>

                                        </Grid>
                                        <Grid item>
                                            <Button  className={classes.formButton} fullWidth color='primary' variant='contained' disableElevation >SIGN IN</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                

            </Grid>
            <div className = {classes.office}/>
            <div className={classes.background}/>
                <Grid container  justify= 'center' alignItems='center'>
                        <ButtonBase>
                    <Grid item>
                    <img  src={help} style={{width :'1rem', height : '1rem', marginRight :'5px'}} />
                    </Grid>
                    <Grid item>
                    <Typography variant='caption' > Need help signing in ?</Typography>
                    </Grid>
                    </ButtonBase>
                </Grid>
            
        </Grid>
    )
}

export default LoginPage
