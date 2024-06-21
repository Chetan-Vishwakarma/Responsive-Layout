"use client";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Typography, IconButton, Toolbar, AppBar, Drawer, Avatar, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { BarChart } from '@mui/x-charts';
import SearchIcon from '@mui/icons-material/Search';
import CustomDataGrid from './CustomDataGrid';
import Image from 'next/image'


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
                                <Item sx={{ boxShadow: 3, background: 'radial-gradient(circle at top right, rgb(47,9,119) 0%, rgb(47,9,119) 48%,rgb(72, 7, 149) 48%, rgb(72, 7, 149) 53%,rgb(109, 5, 178) 53%, rgb(109, 5, 178) 56%,rgb(145, 2, 208) 56%, rgb(145, 2, 208) 69%,rgb(181, 0, 237) 69%, rgb(181, 0, 237) 100%)' }}>
                                    <Box width={'100%'} height={'120px'} position={'relative'}>
                                    <Image style={{position:'absolute', right: '-3%'}} src='/chart2.png' alt='' width="200" height="200"></Image>
                                        {/* <img src='./chart1.png'/> */}
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3, background: 'radial-gradient(circle at top right, rgb(9,105,119) 0%, rgb(9,105,119) 48%,rgb(7,128,149) 48%, rgb(7,128,149) 53%,rgb(5,170,178) 53%, rgb(5,170,178) 56%,rgb(2,203,208) 56%, rgb(2,203,208) 69%,rgb(0,237,237) 69%, rgb(0,237,237) 100%)' }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3, background: 'radial-gradient(circle at top right, rgb(9,79,119) 0%, rgb(9,79,119) 48%,rgb(7,78,149) 48%, rgb(7,78,149) 53%,rgb(5,82,178) 53%, rgb(5,82,178) 56%,rgb(2,90,208) 56%, rgb(2,90,208) 69%,rgb(0,107,237) 69%, rgb(0,107,237) 100%)' }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                            <Grid item lg={3} md={6} sm={12} xs={12}>
                                <Item sx={{ boxShadow: 3, background: 'radial-gradient(circle at top right, rgb(119,9,9) 0%, rgb(119,9,9) 48%,rgb(149,7,7) 48%, rgb(149,7,7) 53%,rgb(178,5,5) 53%, rgb(178,5,5) 56%,rgb(208,2,2) 56%, rgb(208,2,2) 69%,rgb(237,0,0) 69%, rgb(237,0,0) 100%)' }}><Box width={'100%'} height={'120px'}>Box-1</Box></Item>
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid item lg={8} sm={12} xs={12} md={6}>
                                    <Item sx={{ boxShadow: 3 }}>
                                        <Box width={'100%'} height={'400px'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <BarChart
                                                series={[
                                                    { data: [35, 44, 24, 34] },
                                                    { data: [51, 6, 49, 30] },
                                                    { data: [15, 25, 30, 50] },
                                                    { data: [60, 50, 15, 25] },
                                                ]}
                                                height={290}
                                                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                                                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                                            />
                                        </Box>
                                    </Item>
                                </Grid>
                                <Grid item lg={4} sm={12} xs={12} md={6}>
                                    <Item sx={{ boxShadow: 3 }}>
                                        <Box width={'100%'} height={'400px'}>
                                            <Box pt={2}>
                                                <TextField
                                                    fullWidth
                                                    id="input-with-icon-textfield"
                                                    placeholder='Search'
                                                    size={'small'}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="start">
                                                                <SearchIcon />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    variant="outlined"
                                                />
                                            </Box>
                                            {Array(4).fill(" ").map((_, i) => {
                                                return <Item sx={{ mt: 2 }} key={i}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                                        <Box pt={0.2}>
                                                            <Avatar>H</Avatar>
                                                        </Box>
                                                        <Box pl={0.5} width={'100%'}>
                                                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                <Box textAlign={'start'} width={'100%'}>
                                                                    <Typography fontWeight={'bold'}>Hello World</Typography>
                                                                    <Typography fontSize={'small'}>Hello world is my first program</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography fontSize={'small'}>01/01/2000</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Item>
                                            })}
                                            <Box mt={2} color={'info.main'} textAlign={'end'} sx={{ cursor: 'pointer' }}>
                                                See more messages
                                            </Box>
                                        </Box>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                        <Item sx={{ boxShadow: 3 }}>
                            <Box height={'450px'} mt={2}>
                                <CustomDataGrid />
                            </Box>
                        </Item>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}