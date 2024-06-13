"use client"

import React, {useEffect, useState} from 'react';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'next/navigation';
import Header from '@/components/Header/Header';
import './admin.css';
import axios from 'axios'
import Link from 'next/link';
import PrettyButton from '@/components/PrettyButton/PrettyButton';
import Footer from '@/components/Footer/Footer';


const Admin = () =>{

    const [races, setRaces] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            const decodedToken = jwtDecode(token);
            if(decodedToken.role_id !== "1") redirect('/forbidden');
        }
        const fetchData = async () => {
            try {
                const data = axios.get('http://localhost:3010/api/races');
                setRaces(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }    
    }, []);

    return(
        <div>
            <Header/>
            <div className='container'>
                <Link href={'/admin/hippodromes'}>
                    <PrettyButton text={"Информация об ипподромах"}/>
                </Link>
                <Link href={'/admin/races'}>
                    <PrettyButton text={'Информация о гонках'}/>
                </Link>
                <Link href={'/admin/horses'}>
                    <PrettyButton text={'Информация о лошадях'}/>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Admin;