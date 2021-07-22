import styles from './Coins.module.css';
import Link from 'next/link';

const Coins = ({coins}) => {
    const coinsMap = coins.map(coin => {
        return (
            <Link key={coin.id} href={`coin/${coin.id}`}>
            <tr className={styles.table_row}>
            <td><img className={styles.img} src={coin.image} alt={coin.name} /></td>
            <td>{coin.name}</td>
            <td className={styles.coin_symbol}>{coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.total_volume.toLocaleString()}</td>

            <td>{coin.price_change_percentage_24h < 0
                                    ? (
                                        <p className={` ${ (styles.coin_percent, styles.red)}`}>
                                            {coin
                                                .price_change_percentage_24h
                                                .toFixed(2)}%
                                        </p>
                                    )
                                    : (
                                        <p className={` ${ (styles.coin_percent, styles.green)}`}>
                                            {coin
                                                .price_change_percentage_24h
                                                .toFixed(2)}%
                                        </p>
                                    )}</td>

            <td> ${coin.market_cap_change_24h.toLocaleString()}</td>
        </tr>
            </Link>
        )
    })

    return ( 
    <>         
                        <table className={`table container ${styles.custom_table}`}>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Current Price</th>
                                    <th scope="col">Volume</th>
                                    <th scope="col">Price Change Percentage</th>
                                    <th scope="col">Mkt Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                               {coinsMap}
                            </tbody>
                        </table>

     </>
  );
};

export default Coins;