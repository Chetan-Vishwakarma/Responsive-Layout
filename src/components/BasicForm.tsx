"use client";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    "First Name": string;
    email: string;
    age: number;
}

export default function BasicForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    // console.log(watch("example"))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("First Name", { required: true, maxLength: 6 })} /><br /><br />
            {errors["First Name"] && <span>This field is required</span>}<br /><br />
            
            <input {...register("email", { required: { value: true, message: "This field is required"}, pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid Email Address"} })} /><br /><br />
            {errors.email && <span>{errors.email.message}</span>}<br /><br />
            
            <input type="number" {...register("age", { required: true, min:3, max:5 })} /><br /><br />
            {errors.age && <span>This field is required</span>}<br /><br />

            <input type="submit" />
        </form>
    );
}