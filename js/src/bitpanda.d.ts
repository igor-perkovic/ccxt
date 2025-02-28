import Exchange from './abstract/bitpanda.js';
import { Int, OrderSide, OrderType } from './base/types.js';
/**
 * @class bitpanda
 * @extends Exchange
 */
export default class bitpanda extends Exchange {
    describe(): any;
    fetchTime(params?: {}): Promise<number>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchTradingFees(params?: {}): Promise<any>;
    fetchPublicTradingFees(params?: {}): Promise<{}>;
    fetchPrivateTradingFees(params?: {}): Promise<{}>;
    parseFeeTiers(feeTiers: any, market?: any): {
        maker: any[];
        taker: any[];
    };
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    fetchTickers(symbols?: string[], params?: {}): Promise<any>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").OHLCV[]>;
    parseTrade(trade: any, market?: any): import("./base/types.js").Trade;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    };
    createDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: any;
        address: string;
        tag: string;
        network: any;
        info: any;
    }>;
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        currency: any;
        amount: number;
        network: any;
        address: string;
        addressFrom: any;
        addressTo: string;
        tag: string;
        tagFrom: any;
        tagTo: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: any;
    }>;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        currency: any;
        amount: number;
        network: any;
        address: string;
        addressFrom: any;
        addressTo: string;
        tag: string;
        tagFrom: any;
        tagTo: string;
        status: string;
        type: any;
        updated: any;
        txid: string;
        timestamp: number;
        datetime: string;
        fee: any;
    };
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): import("./base/types.js").Order;
    parseTimeInForce(timeInForce: any): string;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    cancelOrders(ids: any, symbol?: string, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
