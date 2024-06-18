"use client";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface Props {
    isSignIn: boolean;
    setIsSignIn: (boolean: boolean) => boolean | void;
}

interface SignUpFormInputs {
    "First Name": string;
    "Last Name": string;
    "Gender": {
        label: string;
        value: string;
    } | {};
    "Email": string;
    "Password": string;
}

const schema = yup.object({
    "First Name": yup.string().required('First Name is required').min(4,'First Name must contain 4 letters').matches(/^[a-zA-Z,'.\-\s]+$/,'Numbers not accepted as firstname'),
    "Last Name": yup.string().required('Last Name is required').min(5,'First Name must contain 5 letters').matches(/^[a-zA-Z,'.\-\s]+$/,'Numbers not accepted as lastname'),
    "Gender": yup.object().nullable().required('Gender is required'),
    "Email": yup.string().required('Email is required').email('Invalid email address').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Invalid email address'),
    "Password": yup.string().required('Password is required').matches(/^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/, 'Password must contain number, string and special character')
});

export default function SignUpForm({ isSignIn, setIsSignIn }: Props) {
    const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4} sx={{ padding: '2rem' }}>
                <div>
                    <Controller
                        name="First Name"
                        control={control}
                        render={({ field }) => <TextField error={errors?.['First Name']?.message?true:undefined} {...field} fullWidth id="outlined-basic" label="First Name" size="small" variant="outlined" helperText={errors?.['First Name']?.message}/>}
                    />
                </div>
                <div>
                    <Controller
                        name="Last Name"
                        control={control}
                        render={({ field }) => <TextField error={errors?.['Last Name']?.message?true:undefined} {...field} fullWidth id="outlined-basic" label="Last Name" size="small" variant="outlined" helperText={errors?.['Last Name']?.message}/>}
                    />
                </div>
                <div>
                    <Controller
                        name="Gender"
                        control={control}
                        render={({ field }) => <Autocomplete
                            {...field}
                            disablePortal
                            onChange={(_, data) => field.onChange(data)}
                            size="small"
                            id="combo-box-demo"
                            options={[{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }, { label: 'Other', value: 'Other' }]}
                            sx={{ width: 'auto' }}
                            renderInput={(params) => <TextField error={errors?.['Gender']?.message?true:undefined} {...params} label="Gender" helperText={errors?.['Gender']?.message}/>}
                        />}
                    />
                </div>
                <div>
                    <Controller
                        name="Email"
                        control={control}
                        render={({ field }) => <TextField error={errors?.['Email']?.message?true:undefined} {...field} fullWidth id="outlined-basic" label="Email" size="small" variant="outlined" helperText={errors?.['Email']?.message}/>}
                    />
                </div>
                <div>
                    <Controller
                        name="Password"
                        control={control}
                        render={({ field }) => <TextField error={errors?.['Password']?.message?true:undefined} {...field} type="password" fullWidth id="outlined-basic" label="Password" size="small" variant="outlined" helperText={errors?.['Password']?.message}/>} />
                </div>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Button type="submit" variant="contained" size="small">Sign In</Button>
                    <Button variant="text" size="small" onClick={() => setIsSignIn(!isSignIn)}>Sign Up</Button>
                </Stack>
            </Stack>
        </form>
    )
}