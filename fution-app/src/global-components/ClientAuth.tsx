import { readPayloadJose } from '@/utils/jwt';
import { jwtDecrypt } from 'jose';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';
import React from 'react'

async function clientAuth() {
    const token = cookies().get("token");
    if (!token || token.value.length <= 0) {
        redirect("/login");
    }

    const payload = await readPayloadJose(token.value);
    return payload;
}

export default clientAuth