"use client";
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

interface IFormInput {
    email: string;
    password: string;
    age: number;
}

const schema = yup
  .object({
    email: yup.string().required('Email is required').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email address'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    age: yup.number().positive().integer().required('Age is required'),
  })
  .required()

export default function YupBasicValidationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    })
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    // console.log(watch("example"))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("email")} /><br /><br />
            {errors.email && <span>{errors.email.message}</span>}<br /><br />

            <input {...register("password")} /><br /><br />
            {errors.password && <span>{errors.password?.message}</span>}<br /><br />
            
            <input type="number" {...register("age")} /><br /><br />
            {errors.age && <span>{errors.age.message}</span>}<br /><br />

            <input type="submit" />
        </form>
    );
}