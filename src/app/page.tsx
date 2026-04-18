'use client';

import Balance from '@/components/Balance';
import Items from '@/components/Items';
import Receipt from '@/components/Receipt';

function Home() {
  return (
    <main className='container'>
      <h1>Spend 100 Billion Dollars</h1>
      <Balance />
      <Items />
      <Receipt />
    </main>
  );
}

export default Home;
