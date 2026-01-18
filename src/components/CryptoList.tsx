import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const fetchCryptoData = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const CryptoList = () => {
  const { data: cryptos, isLoading } = useQuery({
    queryKey: ['cryptos'],
    queryFn: fetchCryptoData,
    refetchInterval: 30000, 
  });

  if (isLoading) {
    return <div className="glass-card rounded-lg p-6 animate-pulse">Loading...</div>;
  }

  return (
    <div className="neo-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Market Leaders
          </h2>
          <p className="text-sm text-muted-foreground">Top performing cryptocurrencies</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-xs text-accent font-medium">LIVE PRICES</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-primary/20">
              <th className="pb-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Asset</th>
              <th className="pb-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Price</th>
              <th className="pb-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">24h Change</th>
              <th className="pb-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">Volume</th>
            </tr>
          </thead>
          <tbody>
            {cryptos?.map((crypto, index) => (
              <tr key={crypto.symbol} className="crypto-row" style={{animationDelay: `${index * 0.1}s`}}>
                <td className="py-6">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={crypto.image} 
                        alt={crypto.name} 
                        className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-colors" 
                      />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-success to-success-glow rounded-full text-xs flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{crypto.name}</p>
                      <p className="text-sm text-muted-foreground font-medium">{crypto.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6">
                  <span className="text-lg font-bold">${crypto.current_price.toLocaleString()}</span>
                </td>
                <td className="py-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-medium text-sm ${
                    crypto.price_change_percentage_24h >= 0 
                      ? "bg-success/20 text-success border border-success/30" 
                      : "bg-destructive/20 text-destructive border border-destructive/30"
                  }`}>
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <ArrowUpIcon className="w-4 h-4" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4" />
                    )}
                    {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                  </div>
                </td>
                <td className="py-6">
                  <div className="space-y-1">
                    <span className="text-lg font-semibold">${(crypto.total_volume / 1e9).toFixed(1)}B</span>
                    <div className="w-full bg-muted/30 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full transition-all duration-500"
                        style={{width: `${Math.min((crypto.total_volume / 50e9) * 100, 100)}%`}}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
