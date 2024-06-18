"use client";

import { Box, Stack } from "@mui/material";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AdvanceForm() {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    return (
        <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} height={{xs:'auto',sm:'auto',lg:'100vh',md:'100vh'}}>
            <Stack direction={'row'} sx={{ border: '1px solid grey', width: {xs:'80%',lg:'700px',md:'700px',sm:'90%'} }}>
                <Box sx={{ width: {xs:'100%',sm:'50%',lg:'50%',md:'50%'} }}>
                    {
                        isSignIn
                            ?
                            <SignInForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
                            :
                            <SignUpForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
                    }
                </Box>
                <Box sx={{ backgroundImage: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',width: '50%', height: 'auto', display: {xs:'none',sm:'block',lg:'block',md:'block'}}}>
                    <img style={{ height: '100%' }} src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-2578971-2147152.png" />
                </Box>
            </Stack>
        </Stack>
    )
}