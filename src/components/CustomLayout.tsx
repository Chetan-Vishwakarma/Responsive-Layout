"use client";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Typography, IconButton, Toolbar, AppBar, Drawer } from '@mui/material';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CustomLayout() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        console.log('newOpen', newOpen);
        setOpen(newOpen);
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const CustomAppbar = (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, display: { xs: 'block', lg: 'none', md: 'none', sm: 'block' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
    return <>
        <Box>
            {CustomAppbar}
            <Grid container spacing={2}>
                <Grid item lg={3} md={3} sx={{ display: { xs: 'none', lg: 'block', md: 'block' } }}>
                    <Item sx={{ height: '100vh' }}>
                        {DrawerList}
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Item>
                </Grid>
                <Grid item lg={9} xs={12} md={9}>
                    <Item>
                        <Box sx={{margin:'5px'}}>
                            <Grid container justifyContent={'space-between'}>
                                <Grid lg={3} md={6} sx={{maxWidth:{lg:"24% !important"}}}>
                                    <Item sx={{height: '140px'}}>Item-1</Item>
                                </Grid>
                                <Grid lg={3} md={6} sx={{maxWidth:{lg:"24% !important"}}}>
                                    <Item sx={{height: '140px'}}>Item-2</Item>
                                </Grid>
                                <Grid lg={3} md={6} sx={{maxWidth:{lg:"24% !important"}}}>
                                    <Item sx={{height: '140px'}}>Item-3</Item>
                                </Grid>
                                <Grid lg={3} md={6} sx={{maxWidth:{lg:"24% !important"}}}>
                                    <Item sx={{height: '140px'}}>Item-3</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </>
}