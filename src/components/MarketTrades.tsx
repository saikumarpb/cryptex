import { CurrencyProps } from '@/lib/common/types';
import { ScrollArea } from './ui/scroll-area';
import { format } from 'fecha';

function Header({ baseCurrency, quoteCurrency }: CurrencyProps) {
    return (
        <div className="flex justify-between p-2 gap-2">
            <span>Price({quoteCurrency})</span>
            <span>Amount({baseCurrency})</span>
            <span>Time</span>
        </div>
    );
}

interface RowProps {
    id: number;
    price: string;
    qty: string;
    time: number;
    isBuyerMaker: boolean;
}

function Row({ price, qty, time, isBuyerMaker }: RowProps) {
    return (
        <div className="flex justify-between px-2 py-1 gap-2">
            <span
                className={`${
                    isBuyerMaker ? 'text-red-500' : 'text-green-500'
                }`}
            >
                {parseFloat(price).toFixed(2)}
            </span>
            <span>{parseFloat(qty).toFixed(5)}</span>
            <span>{format(new Date(time), 'hh:mm:ss')}</span>
        </div>
    );
}

interface MarketTradesProps extends CurrencyProps {
    trades: Array<RowProps>;
}

function sortTrades(a: RowProps, b: RowProps) {
    return b.time - a.time;
}

function MarketTrades({
    baseCurrency,
    quoteCurrency,
    trades,
}: MarketTradesProps) {
    return (
        <div>
            <Header baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} />
            <ScrollArea className="h-[500px] p-0.5">
                {trades
                    .sort(sortTrades)
                    .map(({ id, price, qty, isBuyerMaker, time }) => (
                        <Row
                            price={price}
                            qty={qty}
                            isBuyerMaker={isBuyerMaker}
                            time={time}
                            key={id}
                            id={id}
                        />
                    ))}
            </ScrollArea>
        </div>
    );
}

export { MarketTrades };
export type { MarketTradesProps };
