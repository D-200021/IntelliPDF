import Documents from '@/components/custom/Documents';
import React from 'react';

export const dynamic = "force-dynamic"

const Dashboard = () => {
    return (
        <div className='h-full max-w-7xl mx-auto'>
            <h1 className='text-3xl p-5 bg-gray-100 font-extralight text-indigo-600'>My Documents</h1>
            <Documents />
        </div>
    )
}

export default Dashboard
