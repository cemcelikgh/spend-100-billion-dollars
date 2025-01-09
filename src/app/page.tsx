'use client';

import Balance from '@/components/Balance';
import Items from '@/components/items';
import Receipt from '@/components/Receipt';

export default function Home() {

  return (
    <div className='container'>
      <h1>Spend 100 Billion Dollars</h1>
      <Balance />
      <Items />
      <Receipt />
    </div>
  )
}
