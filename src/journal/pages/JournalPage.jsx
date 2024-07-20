import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { startNewNote } from "../../store/journal"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { active,isSaving } = useSelector(state=> state.journal);
  const handleClick = () => {
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
    
    { (!!active) 
      ? <NoteView/> 
      : <NothingSelectedView />
    }

    <IconButton
    disabled={ isSaving }
    onClick={handleClick}
    size="large"
    sx={{ 
      color: 'white', 
      backgroundColor:'error.main', 
      ':hover': {backgroundColor: 'error.main', opacity: 0.9},
      position: 'fixed',
      right: 50,
      bottom:50
     }}
    >
      <AddOutlined sx={{fontSize: 30}} />
    </IconButton>
    </JournalLayout>
  )
}
