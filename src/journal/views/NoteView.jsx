import { SaveAltOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { useMemo, useEffect } from "react"
import { setActiveNote, startSaveNote } from "../../store/journal"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector(state => state.journal)
    const { title, content, date, onInputChange, formState} = useForm(note);
    const dateString = useMemo(()=>{
        const newDate = new Date(date).toUTCString();
        return newDate
    },[date]);

     useEffect(()=>{
        dispatch(setActiveNote(formState));
     },[formState])

     useEffect(() => {
        //se lanzara un toast de toastify
        if(messageSaved.length > 0){
            toast.success(messageSaved,{
                position: 'bottom-right',
                
            });
     //resetear el mensaje para el siguiente guardado.  //esto es para evitar que se muestre el toast en cada guardado.  //esto se hace porque en el useEffect se resetea el mensaje cuando se vuelve a cargar la pagina.  //se podría solucionar con un reducer en lugar de un useSelector para manejar el mensaje de guard
        }
     }, [messageSaved])
     
     const handleSave = ()=>{
        dispatch(startSaveNote())
     }
  return (
    <Grid 
    className='animate__animated animate__fadeIn animate__faster'
    container direction='row' justifyContent='space-between' alignItems='center' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={ 30 } fontWeight='light' >{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button 
            disabled= {isSaving}
            onClick={handleSave} 
            color="primary" 
            sx={{padding:2}}>
                <SaveAltOutlined sx={{fontSize:30, mr:1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label="Titulo"
            value={title}
            name="title"
            onChange={onInputChange}
            sx={{border:'none', mb: 1}}
            />
            <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            name="content"
            value={content}
            onChange={onInputChange}
            placeholder="¿Qué sucedió en el día de hoy?"
            label="Titulo"
            minRows={ 5 }
            />
        </Grid>
        <ImageGallery/>
        <ToastContainer autoClose={4000} zIndex={1000} />
    </Grid>
  )
}
