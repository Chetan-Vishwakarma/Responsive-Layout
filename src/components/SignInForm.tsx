"use client";

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
    isSignIn: boolean;
    setIsSignIn: (boolean: boolean) => boolean | void;
}

interface SignInInputs {
    Email: string;
    Password: string;
}

const schema = yup.object({
    Email: yup.string().required('Email is required').email('Invalid email address').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
    Password: yup.string().required('Password is required').min(6, 'Password must contain 6 characters').matches(/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, 'Password must contain number, string and special character')
});

export default function SignInForm({ isSignIn, setIsSignIn }: Props) {
    const { control, handleSubmit, formState: { errors } } = useForm<SignInInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<SignInInputs> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} justifyContent={'center'} sx={{ padding: '2rem', height:'456px' }}>
                    <div>
                        <Controller
                            name="Email"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth id="outlined-basic" label="Email" size="small" variant="outlined" helperText={errors?.Email?.message} />}
                        />
                    </div>
                    <div>
                        <Controller
                            name="Password"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth id="outlined-basic" label="Password" size="small" variant="outlined" helperText={errors?.Password?.message} />}
                        />
                    </div>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Button type="submit" variant="contained" size="small">Sign Up</Button>
                        <Button variant="text" size="small" onClick={() => setIsSignIn(!isSignIn)}>Sign In</Button>
                    </Stack>
                </Stack>
        </form>
    )
}