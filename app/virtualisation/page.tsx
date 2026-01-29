'use client'

import { useMemo } from 'react'
import Table from '../components/Table'
import { generateUsers } from '@/lib/generateUsers'

const Virtualisation = () => {

    const users = useMemo(() => generateUsers(10_000), [])
  return (
    <div>
        <h1>Virtualisation example</h1>

        <Table data={users}/>
    </div>
  )
}

export default Virtualisation