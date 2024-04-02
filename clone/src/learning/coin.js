import {useState, useEffect} from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    // 가상화폐 환전 관련
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        coinConverter(e.target.value, selectedCoin);
    };

    const handleCoinSelect = (e) => {
        const selectedCoinSymbol = e.target.value;
        const selected = coins.find(coin => coin.symbol === selectedCoinSymbol);
        setSelectedCoin(selected);
        coinConverter(inputValue, selected);
    };

    const coinConverter = (input, selectedCoin) => {
        if (input && selectedCoin) {
            const resultValue = parseFloat(input) / selectedCoin.quotes.USD.price; 
            setResult(resultValue.toFixed(5));
        } else {
            setResult("");
        }
    }

    return (
        <>
            <div>
                <h1> The Coins {loading ? "" : `(${coins.length})`} </h1>
                {loading ? <strong> Loading... </strong> : null}

                {!loading && (
                    <select onChange={handleCoinSelect}>
                        <option value="">Select a coin</option>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.symbol}>
                                {coin.name} ({coin.symbol}): BTC: {coin.quotes.USD.price}
                            </option>
                        ))}
                    </select>
                )}

            </div>
            <hr/>
        <div>
                <input type="number" value={inputValue} onChange={handleInputChange} placeholder="Enter dollar amount to convert" /> 
                {result !== "" && <p> {inputValue} dollars is {result} {selectedCoin ? selectedCoin.symbol : ""}! </p>}
            </div>
        </>
    );
};

export default Coin;

// api.coinpaprika.com/v1/tickers

// select된 값으로 환전되는 USD input 만들어보기 
// loading 중일 때 select 숨기기 (done)