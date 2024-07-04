import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
    {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias non doloribus delectus dicta voluptate magni explicabo veritatis suscipit, nulla repellat minus facilis iure tempora, temporibus praesentium ex modi quos?</Typography> */}
    <NothingSelectedView />
    {/* <NoteView/> */}
    <IconButton
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
