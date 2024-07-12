import { Google } from "@mui/icons-material"
import { Link as RtLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch } from "react-redux"
import { checkAuthentication, startGoogleSigIn } from "../../store/auth"
import { useSelector } from "react-redux"
import { useMemo } from "react"

export const LoginPage = () => {

    const {status} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const  {email, password, onInputChange, formState} =useForm({
        email: 'demo@demo.com',
        password: '123456'
    });
    const isAuthenticating = useMemo(()=>status ==='checking', [status])
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(checkAuthentication())
    }
    const googleSignIn = (event) => {
        event.preventDefault();
        console.log('Google Sign In')
        dispatch(startGoogleSigIn())
    }
  return (
    <AuthLayout title="Login">
        <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        name="email" 
                        onChange={onInputChange} 
                        fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        name="password"
                        onChange={onInputChange} 
                        fullWidth/>
                    </Grid>
                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid item xs={12} sm={6} >
                            <Button
                            disabled={isAuthenticating}
                            variant="contained" 
                            type="submit" 
                            fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button 
                            disabled={isAuthenticating}
                            variant="contained" 
                            onClick={googleSignIn} 
                            fullWidth>
                                <Google/> <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link color='inherit' to='/auth/register' component={RtLink}>
                        Crear cuenta
                        </Link>
                        
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
