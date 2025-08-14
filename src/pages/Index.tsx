import MarketStats from "@/components/MarketStats";
import CryptoChart from "@/components/CryptoChart";
import PortfolioCard from "@/components/PortfolioCard";
import CryptoList from "@/components/CryptoList";

const Index = () => {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent animate-float shadow-lg shadow-primary/30"></div>
            <h1 className="text-4xl lg:text-5xl font-bold glow-text">
              CryptoVault Pro
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced cryptocurrency analytics and portfolio management platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </header>
        
        <div className="animate-slide-up">
          <MarketStats />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <div className="xl:col-span-2 space-y-8">
            <CryptoChart />
          </div>
          <div className="space-y-8">
            <PortfolioCard />
          </div>
        </div>
        
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <CryptoList />
        </div>
      </div>
    </div>
  );
};

export default Index;