import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: data.email, password: data.password }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Login successful:", result.user);
                navigate("/profile", { state: { user: result.user } });
            } else {
                console.log(result.error);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <h2>Login Form</h2>
            <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

                <input type="password" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

                <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}

export default Login;
