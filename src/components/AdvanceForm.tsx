"use client";

import { Box, Stack } from "@mui/material";
import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AdvanceForm() {
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    return (
        <Stack justifyContent={'center'} alignItems={'center'} direction={'row'} height={'100vh'}>
            <Stack direction={'row'} sx={{ border: '1px solid grey', width: '700px', height: '456px' }}>
                <Box sx={{ width: '50%' }}>
                    {
                        isSignIn
                            ?
                            <SignInForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
                            :
                            <SignUpForm setIsSignIn={setIsSignIn} isSignIn={isSignIn} />
                    }
                </Box>
                <Box sx={{ width: '50%', height: 'auto' }}>
                    <img style={{ height: '100%' }} src="https://t4.ftcdn.net/jpg/02/00/90/53/360_F_200905394_2u1hKNTSawkcR6N1X0aX0PiSBR1tvUMn.jpg" />
                </Box>
            </Stack>
        </Stack>
    )
}