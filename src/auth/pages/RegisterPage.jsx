
import { Link as RtLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
        <form action="">
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label="Nombre Completo" type="text" placeholder="tu nombre" fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField type="password" placeholder="Password" fullWidth/>
                    </Grid>
                    <Grid container spacing={2} sx={{mb:2, mt:1}}>
                        <Grid item xs={12} >
                            <Button variant="contained" fullWidth>Crear cuenta</Button>
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
