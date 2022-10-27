import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState();
  const [money, setMoney] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setData(json.slice(0, 100));
        setLoading(false);

        // console.log(data)
        // 여기서 console.log(data) 하면 빈 배열 나오는 이유는, setState자체도 비동기이기 때문이다.
      });
  }, []);

  const onSelect = (event) => {
    setPrice(event.target.value);
  };//event를 받고 setPrice로 설정

  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    setMoney(event.target.value);
  };

  return (
    <>
      <h1>
        {loading ? (
          <span>loading</span>
        ) : (
          <div>
            <select onChange={onSelect}>
              {data.map((coin, index) => (
                <option key={coin.rank} value={coin.quotes.USD.price}>
                  {index}. {coin.id}
                </option>
              ))}
            </select>
            <form onSubmit={onSubmit}>
              <p>how much money do you have</p>
              <input
                placeholder="보유 달러"
                value={money}
                onChange={onChange}
              ></input>
            </form>
            <hr />
            <h2>코인 가격 :{price}dollars</h2>
            <h2>구매 가능 개수 : {(money / price).toFixed(2)}</h2>
          </div>
        )}
      </h1>
    </>
  );
}

export default CoinTracker;