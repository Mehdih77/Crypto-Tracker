import styles from './Coin.module.css';

const Coin = ({data}) => {

  return (
    <>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={data.image.large}
            alt={data.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{data.name}</h1>
          <p className={styles.coin_ticker}>{data.symbol}</p>
          <p className={styles.coin_current}>
            {data.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </>
  );
};

export default Coin;

export const getServerSideProps = async (context) => {


    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${context.query.id}`)

    const data = await res.json()

    return {

        props: {
            data
        }
    }


}


