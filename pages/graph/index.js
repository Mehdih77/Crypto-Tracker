import {useState} from 'react';
import styles from './Graph.module.css'
import Coins from '../../components/Coins';
import SearchBar from '../../components/SearchBar';
import Charts from '../../components/Charts/Charts'

export default function Home({coins}) {

    const [search,setSearch] = useState('')

    const allCoins = coins.filter( coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    function handleChangeSearch(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <>
                <div className={styles.coin_app}>
                         <div className={styles.charts_left}>
                             <Charts />
                         </div>
                         <div className={styles.charts_right}>
                             <Charts />
                         </div>
                                <div className={styles.coins_table}>
                                   <SearchBar onChange={handleChangeSearch}/>
                                   <Coins coins={allCoins}/>
                                </div>
                </div>
        </>
    );
}

export const getServerSideProps = async() => {

    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_'+
    'desc&per_page=15&page=1&sparkline=false')

    const coins = await res.json()

    return {
        props: {
            coins
        }}
}
