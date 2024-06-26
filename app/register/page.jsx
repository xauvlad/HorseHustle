"use client"

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import "./register.css"
import PrettyButton from "@/components/PrettyButton/PrettyButton";
import Footer from "@/components/Footer/Footer";

const Register = () => {
  const [patronymic, setPatronymic] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [role_id, setRole_id] = useState("0");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Пароли не совпадают!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3010/api/register", {
        surname,
        name,
        patronymic,
        age,
        login,
        password,
        role_id
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-title">Регистрация</div>
        <input
          className="register-form-input"
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <input
          className="register-form-input"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="register-form-input"
          type="text"
          placeholder="Отчество"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
          required
        />
        <input
          className="register-form-input"
          type="number"
          placeholder="Возраст"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          required
        />
        <input
          className="register-form-input"
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          className="register-form-input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="register-form-input"
          type="password"
          placeholder="Подтверждение пароля"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <select
          className="register-form-input"
          onChange={(e) => setRole_id(e.target.value)}
        >
          <option value={0}>Жокей</option>
          <option value={1}>Администратор</option>
        </select>
        <p className="form-message">{message}</p>
        <PrettyButton text="Зарегистрироваться" type={"submit"}/>
        <div className="register-form-link">
          Уже есть аккаунт?
          <Link href="/user" className="register-form-link-text">
            Вход
          </Link>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Register;