import { User } from '@/lib/generateUsers'
import React from 'react'

const TableRow = ({user} : {user: User}) => {
  return (
    <tr className='*:pl-4'>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.createdAt}</td>
        </tr>
  )
}

export default TableRow