import { SIDE } from '@/lib/common/types';
import { ScrollArea } from './ui/scroll-area';

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

export interface MarketTradesProps extends HeaderProps {
    trades: Array<RowProps>;
}

function MarketTrades({
    baseCurrency,
    quoteCurrency,
    trades,
}: MarketTradesProps) {
    return (
        <div>
            <Header baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} />
            <ScrollArea className="h-[100px] p-0.5">
                {trades.map(({ price, quantity, side, time }) => (
                    <Row
                        price={price}
                        quantity={quantity}
                        side={side}
                        time={time}
                        key={price}
                    />
                ))}
            </ScrollArea>
        </div>
    );
}

export default MarketTrades;
