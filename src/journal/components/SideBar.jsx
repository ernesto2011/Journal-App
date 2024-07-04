import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box 
    component='nav'
    sx= {{width:{sm: drawerWidth}, flexShrink:{sm: 0}}}
    >
        <Drawer
        variant='permanent'
        open
        sx={{
            display:{xs:'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box',width:drawerWidth}
        }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Roots-404
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Uno','dos', 'tres', 'cuatro'].map(item =>(
                        <ListItem key={item} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={item}/>
                                    <ListItemText secondary='lorem ipsum examples cillum irure'/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
