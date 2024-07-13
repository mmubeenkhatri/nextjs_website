Login page


"use client"

import UsersData from "@/data/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginPage() {

  const [responseErrors, setResponseErrors] = useState<string | null>(null);

  const validationSchema = z.object({
    email: z.string().email("Email is invalid").min(1, {message: "Field is required"}),
    password: z.string().min(1, { message: "Field is required" })
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema)
  })

  const onLogin: SubmitHandler<ValidationSchema> = (formData) => {
    const users = UsersData;
    let isLoggedIn = false;
    users.forEach((user) => {
      if(user.email === formData.email && formData.password === user.password) {
        isLoggedIn = true;
        setResponseErrors(null);
        console.log("Logged In")
      }
    });

    if(!isLoggedIn) setResponseErrors("Email or Password is invalid"); 
  }

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="max-w-[667px] px-8 py-8 shadow-lg flex flex-col gap-5">
          <h2>Welcome Admin</h2>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input type="email" {...register("email")} className="border border-black"/>
            { errors.email && <p>{ errors.email.message }</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input type="password" {...register("password")} className="border border-black"/>
            { errors.password && <p>{ errors.password.message }</p>}
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-black text-white" onClick={() => handleSubmit(onLogin)()}>Login</button>
            {responseErrors && <p>{responseErrors}</p>}
          </div>

        </div>
      </div>
    </>
  );
}