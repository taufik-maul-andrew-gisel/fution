import { APIResponse, RecordType } from '@/app/api/typedef';
import { cookies } from 'next/headers';
import React from 'react'

async function fetchRecord(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record/${id}`, {
        headers: { Cookie: cookies().toString() }
    })
    const resJson: APIResponse<RecordType> = await res.json();
    return resJson.data;
}

async function fetchRecordDebt(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record/debt/${id}`, {
        headers: { Cookie: cookies().toString() }
    })
    const resJson: APIResponse<{ init: string, curr: string, next: string[] }> = await res.json();
    return resJson.data;
}

async function RecordDetail({ params }: { params: { id: string } }) {
    const recordId = params.id;
    const record = await fetchRecord(recordId);
    const debt = await fetchRecordDebt(recordId);
    

    return (<>
        <h1>record detail</h1>
        <ul>
            <li>status: {record?.status}</li>
            <li>due: {record?.due.toLocaleString().split("T")[0]}</li>
            <li>initial amount: {debt?.init}</li>
            <li>outstanding amount: {debt?.curr}</li>
            <li>if you were to pay in the future, you have to pay:
                <ul>
                    <li>next term: {debt?.next[0]}</li>
                    <li>next 2 terms: {debt?.next[1]}</li>
                    <li>next 3 terms: {debt?.next[2]}</li>
                    <li>next 4 terms: {debt?.next[3]}</li>
                </ul>
            </li>
        </ul>
    </>)
}

export default RecordDetail