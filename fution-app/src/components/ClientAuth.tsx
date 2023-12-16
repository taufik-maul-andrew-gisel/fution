import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

function ClientAuth({ children }: { children: React.ReactNode }) {
    const token = cookies().get("token");
    if (!token || token.value.length <= 0) {
        redirect("/login");
    }

    return ({ children })
}

export default ClientAuth