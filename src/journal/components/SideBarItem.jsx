import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";
import { useSelector } from "react-redux";


export const SideBarItem = ({title, content, id, date, imageUrls=[]}) => {
  const dispatch = useDispatch();
  
  const newTitle = useMemo(()=>{
    return title.length > 17 
    ? `${title.substring(0, 17)}...` 
    : title;
  })
  const handleClick = () => {
    dispatch(setActiveNote({id, title, content, date, imageUrls}));
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={content} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
