'use client';
import { MarketTrades } from '@/components/MarketTrades';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [marketTrades, setMarketTrades] = useState<Trade[]>([]);
    const baseCurreny = 'BTC';
    const quoteCurrency = 'USDT';

    useEffect(() => {
        getMarketTrades().then((trades) => setMarketTrades(() => trades));
    }, [baseCurreny, quoteCurrency]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <MarketTrades
                trades={marketTrades}
                baseCurrency={baseCurreny}
                quoteCurrency={quoteCurrency}
            />
        </main>
    );
}

interface Trade {
    id: number;
    price: string;
    qty: string;
    quoteQty: string;
    time: number;
    isBuyerMaker: boolean;
    isBestMatch: boolean;
}

async function getMarketTrades(): Promise<Trade[]> {
    const response = await axios.get<Trade[]>(
        'https://www.binance.com/api/v3/trades?symbol=BTCUSDT'
    );
    return response.data;
}
