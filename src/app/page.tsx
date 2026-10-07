import Balance from '@/components/Balance';
import Items from '@/components/items/Items';
import Receipt from '@/components/Receipt';

function Home() {
  return <>
    <h1>Spend 100 Billion Dollars</h1>
    <Balance />
    <Items />
    <Receipt />
  </>;
}

export default Home;
