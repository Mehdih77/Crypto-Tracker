import {useState} from 'react';
import styles from './Coin.module.css'
import Coins from '../../components/Coins';
import SearchBar from '../../components/SearchBar';

export default function Home({coins}) {

    const [search,setSearch] = useState('')

    const allCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    function handleChangeSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <>
            <div className={styles.coin_app}>
                <SearchBar onChange={handleChangeSearch}/>
                <Coins coins={allCoins}/>
            </div>
        </>
    );
}

export const getServerSideProps = async() => {

    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_' +
            'desc&per_page=15&page=1&sparkline=false')

    const coins = await res.json()

    return {props: {
            coins
        }}
}
