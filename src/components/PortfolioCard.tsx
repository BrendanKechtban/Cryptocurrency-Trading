import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { useQuery } from "@tanstack/react-query";

const fetchBitcoinPrices = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily"
  );
  const data = await response.json();
  
  // Format data for the chart - take last 6 months
  return data.prices.slice(-180).map(([timestamp, price]: [number, number]) => ({
    date: new Date(timestamp).toLocaleDateString('en-US', { month: 'short' }),
    price: Math.round(price)
  }));
};

const PortfolioCard = () => {
  const { data: priceData, isLoading } = useQuery({
    queryKey: ['bitcoinPrices'],
    queryFn: fetchBitcoinPrices,
    refetchInterval: 60000, // Refetch every minute
  });

  if (isLoading) {
    return (
      <div className="glass-card p-6 rounded-lg mb-8 animate-fade-in">
        <h2 className="text-xl font-semibold mb-6">Bitcoin Performance</h2>
        <div className="w-full h-[200px] flex items-center justify-center">
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="neo-card p-6 rounded-xl">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Performance Analytics</h2>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce-subtle"></div>
            <span className="text-xs text-primary font-medium">6M TREND</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-success/20 to-success/10 border border-success/20">
            <p className="text-xs text-success font-medium">AVG GAIN</p>
            <p className="text-lg font-bold text-success">+12.4%</p>
          </div>
          <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
            <p className="text-xs text-primary font-medium">VOLATILITY</p>
            <p className="text-lg font-bold text-primary">8.2%</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[220px] rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceData}>
            <XAxis 
              dataKey="date" 
              stroke="hsl(225, 7%, 70%)"
              fontSize={10}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="hsl(225, 7%, 70%)"
              fontSize={10}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'hsl(225, 39%, 10%)',
                border: '1px solid hsl(266, 85%, 58%)',
                borderRadius: '12px',
                boxShadow: '0 10px 30px -10px hsl(266, 85%, 58% / 0.3)'
              }}
              labelStyle={{ color: 'hsl(0, 0%, 98%)' }}
              itemStyle={{ color: 'hsl(266, 85%, 70%)' }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="url(#priceGradient)"
              strokeWidth={3}
              dot={false}
              filter="drop-shadow(0 0 8px hsl(266, 85%, 58% / 0.6))"
            />
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="hsl(266, 85%, 58%)" />
                <stop offset="50%" stopColor="hsl(191, 100%, 50%)" />
                <stop offset="100%" stopColor="hsl(266, 85%, 58%)" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioCard;