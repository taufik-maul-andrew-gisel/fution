import { APIResponse, RecordDetailType } from '@/app/api/typedef';
import { getNextQuarter } from '@/utils/quarter';
import { toDollarFormat } from '@/utils/toDollarFormat';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react'

async function fetchRecord(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record/${id}`, {
        headers: { Cookie: cookies().toString() }
    })
    const resJson: APIResponse<RecordDetailType> = await res.json();
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
    
    // get next 4 terms
    const currYear = (new Date()).getFullYear();
    const currMonth = (new Date()).getMonth();
    let currQ: number;
    if (currMonth < 10) {
        currQ = 3;
    } else if (currMonth < 7) {
        currQ = 2;
    } else if (currMonth < 4) {
        currQ = 1;
    } else {
        currQ = 4;
    }
    const { nextYear: nextYear1, nextQ: nextQ1 } = getNextQuarter(currYear, currQ);
    const { nextYear: nextYear2, nextQ: nextQ2 } = getNextQuarter(nextYear1, nextQ1);
    const { nextYear: nextYear3, nextQ: nextQ3 } = getNextQuarter(nextYear2, nextQ2);
    const { nextYear: nextYear4, nextQ: nextQ4 } = getNextQuarter(nextYear3, nextQ3);

    return (<>

<div className="py-6 px-14">
    <div className="grid grid-cols-4 z-0 gap-4">
        <div className="text-2xl font-bold ml-1">
            <h2>Loaner</h2>
        </div>

        <div className="col-span-3 text-2xl font-bold ml-1">
            <h2>Record</h2>
        </div>

        {/* loaner */}
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden p-3">
            <img
                src="/profile-pic.png"
                className="w-16 rounded-full mx-auto my-4 p-0 border-[3px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
            />
            <h2 className="col-span-3 text-lg font-semibold ml-1">{record?.loaner.name}</h2>
        </div>

        {/* record */}
        <div className="col-span-3 row-span-3 flex flex-col justify-between text-black bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <div>
                <p className="text-xl font-bold m-4 text-center">Status - {record?.status}</p>
                { record?.status === "PAID" && <p className="text-lg font-semibold text-center">Outstanding debt is paid off on time.</p> }
                { record?.status === "OVERDUE" && <p className="text-lg font-semibold text-center">Outstanding debt is not paid off on time.</p> }
            </div>
            <ul>
                { record?.status === "PAID" && <li>Date paid: {record?.updatedAt.toLocaleString().split("T")[0]}</li> }
                { record?.status === "DEBT" && <li>Outstanding amount: {debt?.curr}</li> }
                <li>Due: {record?.due.toLocaleString().split("T")[0]}</li>
            </ul>
            <div className="ml-auto mr-0 mb-4">
                { record?.status === "PENDING" && (
                    <Link href="/home" className="bg-emerald-200 rounded-md hover:bg-emerald-300 flex-grow-0 py-3 px-6 ml-2">
                        Negotiate
                    </Link>
                ) }
                <Link href="/home" className="bg-sky-200 rounded-md hover:bg-sky-300 flex-grow-0 py-3 px-6 ml-2">
                    Back
                </Link>
            </div>
        </div>

        <div className="text-2xl font-bold ml-1">
            <h2>Loanee</h2>
        </div>

        {/* loanee */}
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <img
                src="/profile-pic.png"
                className="w-16 rounded-full mx-auto my-4 p-0 border-[3px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
            />
            <h2 className="col-span-3 text-lg font-semibold ml-1">{record?.loanee.name}</h2>
        </div>

        <div className="text-2xl font-bold ml-1 mt-4 mb-2 col-span-4">
            <h2>Predicted Future Payment</h2>
            <h4 className="text-base font-semibold mt-2">If you were to pay in the future, you would have to pay...</h4>
        </div>

        {/* future payment */}
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear1}-Q${nextQ1}`}</h4>
            <p>{toDollarFormat(Math.round(Number(debt?.next[0]) * 100) / 100)}</p>
        </div>
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear2}-Q${nextQ2}`}</h4>
            <p>{toDollarFormat(Math.round(Number(debt?.next[1]) * 100) / 100)}</p>
        </div>
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear3}-Q${nextQ3}`}</h4>
            <p>{toDollarFormat(Math.round(Number(debt?.next[2]) * 100) / 100)}</p>
        </div>
        <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear4}-Q${nextQ4}`}</h4>
            <p>{toDollarFormat(Math.round(Number(debt?.next[3]) * 100) / 100)}</p>
        </div>

        
    </div>

</div>









        {/* <h1>record detail</h1>
        <ul>
            <li>loaner: {record?.loaner.name}</li>
            <li>loanee: {record?.loanee.name}</li>
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
        </ul> */}
    </>)
}

export default RecordDetail