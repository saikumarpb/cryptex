import { SIDE } from '@/lib/common/types';

interface HeaderProps {
    baseCurrency: string;
    quoteCurrency: string;
}

function Header({ baseCurrency, quoteCurrency }: HeaderProps) {
    return (
        <div className="flex justify-between p-2 gap-2">
            <span>Price({quoteCurrency})</span>
            <span>Amount({baseCurrency})</span>
            <span>Time</span>
        </div>
    );
}

interface RowProps {
    price: string;
    quantity: string;
    time: string;
    side: SIDE;
}

function Row({ price, quantity, time, side }: RowProps) {
    return (
        <div className="flex justify-between px-2 py-1 gap-2">
            <span
                className={`${
                    side === 'buy' ? 'text-red-500' : 'text-green-500'
                }`}
            >
                {price}
            </span>
            <span>{quantity}</span>
            <span>{time}</span>
        </div>
    );
}

function MarketTrades() {
    // TODO: Update fn to render dynamic data.
    return (
        <div className="h-full w-full">
            <Header baseCurrency="BTC" quoteCurrency="USDT" />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="sell"
            />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="buy"
            />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="sell"
            />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="sell"
            />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="buy"
            />
            <Row
                price="41,645.23"
                quantity="0.03431"
                time="00:18:04"
                side="sell"
            />
        </div>
    );
}

export default MarketTrades;
