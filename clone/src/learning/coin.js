import {useState, useEffect} from "react";

import LoadingGif from '../component/loading/loading.js'

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
        {loading ? <LoadingGif/> : 
            <>
            <div>
                <h1> The Coins {loading ? "" : `(${coins.length})`} </h1>
                

            </div>
            <hr style={{'margin-top': '50px', 'margin-bottom': '40px'}}/>
        <div>
                <h2> Select coin and insert your wanted amount of dollars below. </h2>
                <select onChange={handleCoinSelect}>
                        <option value="">Select a coin</option>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.symbol}>
                                {coin.name} ({coin.symbol}): BTC: {coin.quotes.USD.price}
                            </option>
                        ))}
                    </select>
                <div className="coin-box" >
                    <input type="number" className="search-bar" value={inputValue} onChange={handleInputChange} placeholder="Enter dollar to convert" /> 
                    {result !== "" && <h2 className="conv-result"> $ is {result} {selectedCoin ? selectedCoin.symbol : ""}! </h2>}
                </div>
            </div>
            </>
            }
        </>
    );
};

export default Coin;

// api.coinpaprika.com/v1/tickers
