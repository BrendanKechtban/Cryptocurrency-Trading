import TradingViewWidget from 'react-tradingview-widget';

const CryptoChart = () => {
  return (
    <div className="neo-card p-6 rounded-xl shimmer-effect">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Live Market Chart
          </h2>
          <p className="text-sm text-muted-foreground">Real-time trading data</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-xs text-success font-medium">LIVE</span>
        </div>
      </div>
      <div className="h-[450px] w-full rounded-lg overflow-hidden border border-primary/20">
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme="dark"
          locale="en"
          autosize
          hide_side_toolbar={false}
          allow_symbol_change={true}
          interval="D"
          toolbar_bg="hsl(225, 39%, 8%)"
          enable_publishing={false}
          hide_top_toolbar={false}
          save_image={false}
          container_id="tradingview_chart"
        />
      </div>
    </div>
  );
};

export default CryptoChart;