
import { Link as RtLink } from "react-router-dom"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreateUserWithEmailPassword } from "../../store/auth";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
    displayName: '',
    email: '',
    password: ''
}
const validations ={
    email: [(value)=> value.includes('@'), 'el correo debe tener un @'],
    password: [(value) => value.length >= 6, 'La contraseña debe tener al menos 6 caracteres'],
    displayName: [(value) => value.length >= 3, 'El nombre debe tener al menos 3 caracteres']
}
export const RegisterPage = () => {
    const dispatch = useDispatch()
    const [formSubmited, setFormSubmited] =useState(false)
    const {status, errorMessage} = useSelector(state => state.auth);
    const isAuthenticating = useMemo(()=>status ==='checking', [status])

    const  {displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, validations);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmited(true);
        if (!isFormValid) return;

        dispatch(startCreateUserWithEmailPassword(formState))
    }
  return (
    <AuthLayout title="Crear cuenta">
        <form onSubmit={handleSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label="Nombre Completo" 
                        type="text" name="displayName" 
                        onChange={onInputChange} 
                        value={displayName} 
                        placeholder="tu nombre" 
                        fullWidth
                        error={!!displayNameValid && formSubmited}
                        helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField type="email" label="Correo electronico" name="email" 
                        onChange={onInputChange} value={email} placeholder="Correo" 
                        fullWidth 
                        error={!!emailValid && formSubmited}
                        helperText={emailValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label="Contraseña" 
                        type="password" 
                        placeholder="Password"  
                        name="password" 
                        value={password} 
                        onChange={onInputChange} 
                        fullWidth
                        error={!!passwordValid && formSubmited}
                        helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid 
                        item 
                        xs={12}
                        display={!!errorMessage ? '' : 'none'}
                         >
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button 
                            disabled={isAuthenticating}
                            variant="contained" 
                            type="submit" 
                            fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr: 1}}>
                            ¿Ya tienes cuenta?
                        </Typography>
                        <Link color='inherit' to='/auth/login' component={RtLink}>
                        ingresar
                        </Link>
                        
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
  )
}
