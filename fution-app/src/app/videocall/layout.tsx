import ClientAuth from '@/global-components/ClientAuth'
import React from 'react'


function VidCallLayout({ children }: { children: React.ReactNode }) {
    return <ClientAuth>{ children }</ClientAuth>
}

export default VidCallLayout