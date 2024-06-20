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
        <Box sx={{ width: 'auto' }} role="presentation">
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
            <Grid container>
                <Grid item lg={2} md={2} sx={{ display: { xs: 'none', lg: 'block', md: 'block' } }}>
                    <Item sx={{ height: '100%' }}>
                        {DrawerList}
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </Item>
                </Grid>
                <Grid item lg={10} xs={12} md={10}>
                    <Box mr={2} my={2} sx={{ marginLeft: { xs: '16px' } }}>
                        <Grid container spacing={2}>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid item lg={8} sm={12} xs={12} md={6}>
                                    <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'400px'}>Box-1</Box></Item>
                                </Grid>
                                <Grid item lg={4} sm={12} xs={12} md={6}>
                                    <Item sx={{ boxShadow: 3 }}><Box width={'100%'} height={'400px'}>Box-1</Box></Item>
                                </Grid>
                            </Grid>
                        </Box>
                        <Item sx={{ boxShadow: 3 }}>
                            <Box height={'450px'} mt={2}>
                            Table-Container
                        </Box>
                        </Item>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}