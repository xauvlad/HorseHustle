"use client"

import React, {useEffect, useState} from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import '../admin.css';
import axios from 'axios'
import Footer from '@/components/Footer/Footer';



const Admin = ({ params }) =>{
    const [info, setInfo] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            if(decodedToken.role_id !== "1") router.push('/forbidden');
        }
        const fetchData = async () => {
            try {
                const data = axios.get(`http://localhost:3010/data/${params.queryType}`);
                setInfo((await data).data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }  finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <Header/>
            <div className='container'>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr className='title'>
                                {Object.keys(info[0]).map(rl=>
                                    <td>{rl}</td>
                                )}
                            </tr>
                            {info.map(rl=>
                            <tr className='line' key={rl.id}>
                                {Object.values(rl).map(el =>
                                    <td>{el}</td>
                                )}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className='add'>Добавить</div>
                    <div className='delete'>Удалить</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Admin;