import React from 'react'
import TableRow from './TableRow'
import { User } from '@/lib/generateUsers'

const Table = ({data} : {data: User[]}) => {

  return (
    <table className='w-full border text-xl'>
        <thead className='font-bold'>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Created At</td>
        </thead>
        {data.map(user => (
            <TableRow key={user.id} user={user}/>
        ))}
    </table>
  )
}

export default Table