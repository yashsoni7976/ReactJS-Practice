import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { user_id } = useParams();
    return (
        <div className='bg-gray-700 text-white text-3xl p-4 text-center'>User : {user_id}</div>
    )
}

export default User