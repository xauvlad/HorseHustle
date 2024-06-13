"use client"

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import "../register/register.css"
import { useRouter } from "next/navigation";
import Redirect from "@/components/Redirect/Redirect";
import PrettyButton from "@/components/PrettyButton/PrettyButton";



const Login = () => {
    const router = useRouter();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isAuth, setAuth] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:3010/api/login", {
          login,
          password,
        });
        localStorage.setItem("token", response.data.token);
        setMessage("Успешный вход!");
        setAuth(true);
        router.push('/admin');
        // await setTimeout(function () {
        //   redirect('/admin');
        // }, 800);
      } catch (error) {
         console.error('Error searching:', error);
      }
    };
  
    return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-title">Вход</div>
          <input
            className="login-form-input"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {message && <p className="form-message">{message}</p>}
          <PrettyButton text="Войти" type={"submit"}/>
          <div className="login-form-link">
            Нет аккаунта?
            <Link href="/register" className="login-form-link-text">
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;
