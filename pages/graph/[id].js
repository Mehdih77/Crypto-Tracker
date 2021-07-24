import styles from './Graph.module.css';

const Coin = ({data}) => {

  return (
    <>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img src={data.image.large} alt={data.name} className={styles.coin_image}/>
          <div>
              <p><span>Name:</span> {data.name}</p>
              <p><span>Symbol:</span> {data.symbol.toUpperCase()}</p>
              <p><span>Rank:</span> {data.market_data.market_cap_rank}</p>
          </div>
          <div>
              <p><span>Current Price:</span> ${data.market_data.current_price.usd}</p>
              <p><span>Market Cap:</span> ${data.market_data.market_cap.usd}</p>
              <p><span>Total Volume:</span> ${data.market_data.total_volume.usd}</p>
          </div>
          <div>
              <p><span className={styles.high_24h}>High 24h:</span> ${data.market_data.high_24h.usd}</p>
              <p><span className={styles.low_24h}>Low 24h:</span> ${data.market_data.low_24h.usd}</p>
              <p><span>Price Change 24h:</span> ${data.market_data.price_change_24h}</p>
          </div>
          <div>
              <p><span>Price Change in 30d:</span> %{data.market_data.price_change_percentage_30d}</p>
              <p><span>ATH:</span> ${data.market_data.ath.usd}</p>
              <p><span>Genesis Date:</span> {data.genesis_date}</p>
          </div>
        
          
        </div>

        <div className={styles.coin_body}>{data.description.en}</div>
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


