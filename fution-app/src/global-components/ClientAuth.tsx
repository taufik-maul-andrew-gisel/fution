
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

async function ClientAuth({ children }: { children: React.ReactNode }) {
    const token = cookies().get("token");
    if (!token || token.value.length <= 0) {
        redirect("/login");
    }

    // const payload = await readPayloadJose(token.value);
    return <>{children}</>;
}

export default ClientAuth