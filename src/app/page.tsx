import { MarketTrades, MarketTradesProps } from '@/components/MarketTrades';

const trades: MarketTradesProps = {
    baseCurrency: 'BTC',
    quoteCurrency: 'USDC',
    trades: [
        {
            price: '41,290.34',
            quantity: '0.00020',
            side: 'buy',
            time: '07:43:67',
        },
        {
            price: '41,291.24',
            quantity: '0.00020',
            side: 'sell',
            time: '07:43:67',
        },
        {
            price: '41,292.33',
            quantity: '0.00020',
            side: 'sell',
            time: '07:43:67',
        },
        {
            price: '41,292.33',
            quantity: '0.00020',
            side: 'buy',
            time: '07:43:67',
        },
    ],
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MarketTrades
                trades={trades.trades}
                baseCurrency={trades.baseCurrency}
                quoteCurrency={trades.quoteCurrency}
            />
        </main>
    );
}
