"use client";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form"

interface IFormInput {
    email: string;
    password: string;
    iceCreamType: { label: string; value: string };
}

export default function MUIBasicForm() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    // console.log(watch("example"))
    return (
        <div style={{ width: "400px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <TextField {...field} fullWidth />}
                />

                <Controller
                    name="iceCreamType"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                {...field}
                                label="Age"
                            >
                                <MenuItem value={""}>Select Value</MenuItem>
                                <MenuItem value={"Vanella"}>Vanella</MenuItem>
                                <MenuItem value={"Strawberry"}>Strawberry</MenuItem>
                                <MenuItem value={"Choclate"}>Choclate</MenuItem>
                            </Select>
                        </FormControl>
                    )}
                />

                <br /><br />
                <input type="submit" />
            </form>
        </div>

    );
}