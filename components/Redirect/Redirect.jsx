import React from 'react'
import { redirect } from 'next/navigation'



export default function Redirect({params, url}) {
    if (params) {
        redirect(`${url}`);
    }
}