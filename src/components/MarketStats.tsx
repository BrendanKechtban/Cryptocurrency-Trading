import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon } from "lucide-react";

const MarketStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="stat-card rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-success/20">
            <TrendingUpIcon className="w-6 h-6 text-success-glow" />
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Global</p>
            <h3 className="text-sm font-semibold text-muted-foreground">Market Cap</h3>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            $2.1T
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
              <ArrowUpIcon className="w-3 h-3" />
              +2.4%
            </span>
            <span className="text-xs text-muted-foreground">24h</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-accent/20">
            <TrendingUpIcon className="w-6 h-6 text-accent" />
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Trading</p>
            <h3 className="text-sm font-semibold text-muted-foreground">24h Volume</h3>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            $84.2B
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/20 text-success text-xs font-medium">
              <ArrowUpIcon className="w-3 h-3" />
              +5.1%
            </span>
            <span className="text-xs text-muted-foreground">24h</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-warning/20">
            <TrendingUpIcon className="w-6 h-6 text-warning" />
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Bitcoin</p>
            <h3 className="text-sm font-semibold text-muted-foreground">Dominance</h3>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            42.1%
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-warning/20 text-warning text-xs font-medium">
              <ArrowDownIcon className="w-3 h-3" />
              -0.8%
            </span>
            <span className="text-xs text-muted-foreground">24h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;