import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  api:string = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=';
  allCoins = 'BTC,ETH,BNB,XRP,ADA';

  constructor(private _http:HttpClient) { }

  //getting cors error 
  getData() {
    const headers = new HttpHeaders({
      'X-CMC_PRO_API_KEY' :'27ab17d1-215f-49e5-9ca4-afd48810c149'
    })
    return this._http.get(this.api+this.allCoins,{headers});
  }

  data = `
  {
    "status": {
        "timestamp": "2023-01-24T17:29:56.024Z",
        "error_code": 0,
        "error_message": null,
        "elapsed": 32,
        "credit_count": 1,
        "notice": null
    },
    "data": {
        "ADA": {
            "id": 2010,
            "name": "Cardano",
            "symbol": "ADA",
            "slug": "cardano",
            "num_market_pairs": 638,
            "date_added": "2017-10-01T00:00:00.000Z",
            "tags": [
                "dpos",
                "pos",
                "platform",
                "research",
                "smart-contracts",
                "staking",
                "cardano-ecosystem",
                "cardano"
            ],
            "max_supply": 45000000000,
            "circulating_supply": 34572231146.229,
            "total_supply": 35394996829.841,
            "is_active": 1,
            "platform": null,
            "cmc_rank": 8,
            "is_fiat": 0,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-01-24T17:28:00.000Z",
            "quote": {
                "USD": {
                    "price": 0.37448741189526097,
                    "volume_24h": 357399377.2865129,
                    "volume_change_24h": -40.7398,
                    "percent_change_1h": -0.62862229,
                    "percent_change_24h": -0.43633854,
                    "percent_change_7d": 6.66078792,
                    "percent_change_30d": 45.95784297,
                    "percent_change_60d": 19.49483934,
                    "percent_change_90d": -6.90997956,
                    "market_cap": 12946865365.396029,
                    "market_cap_dominance": 1.2354,
                    "fully_diluted_market_cap": 16851933535.29,
                    "tvl": null,
                    "last_updated": "2023-01-24T17:28:00.000Z"
                }
            }
        },
        "BNB": {
            "id": 1839,
            "name": "BNB",
            "symbol": "BNB",
            "slug": "bnb",
            "num_market_pairs": 1169,
            "date_added": "2017-07-25T00:00:00.000Z",
            "tags": [
                "marketplace",
                "centralized-exchange",
                "payments",
                "smart-contracts",
                "alameda-research-portfolio",
                "multicoin-capital-portfolio",
                "bnb-chain"
            ],
            "max_supply": 200000000,
            "circulating_supply": 157903012.92259663,
            "total_supply": 159979963.59042934,
            "is_active": 1,
            "platform": null,
            "cmc_rank": 4,
            "is_fiat": 0,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-01-24T17:28:00.000Z",
            "quote": {
                "USD": {
                    "price": 310.93865779768566,
                    "volume_24h": 816143355.0998781,
                    "volume_change_24h": 27.1883,
                    "percent_change_1h": -1.53313193,
                    "percent_change_24h": 2.25862357,
                    "percent_change_7d": 2.96904957,
                    "percent_change_30d": 27.811243,
                    "percent_change_60d": 3.55887727,
                    "percent_change_90d": 7.60851563,
                    "market_cap": 49098150900.36281,
                    "market_cap_dominance": 4.6846,
                    "fully_diluted_market_cap": 62187731559.54,
                    "tvl": null,
                    "last_updated": "2023-01-24T17:28:00.000Z"
                }
            }
        },
        "BTC": {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 9942,
            "date_added": "2013-04-28T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "sha-256",
                "store-of-value",
                "state-channel",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "galaxy-digital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio"
            ],
            "max_supply": 21000000,
            "circulating_supply": 19271287,
            "total_supply": 19271287,
            "is_active": 1,
            "platform": null,
            "cmc_rank": 1,
            "is_fiat": 0,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-01-24T17:28:00.000Z",
            "quote": {
                "USD": {
                    "price": 22900.97645161216,
                    "volume_24h": 25773214969.506317,
                    "volume_change_24h": -4.3316,
                    "percent_change_1h": -0.13227762,
                    "percent_change_24h": -0.00220053,
                    "percent_change_7d": 8.36386992,
                    "percent_change_30d": 36.19951371,
                    "percent_change_60d": 38.67920822,
                    "percent_change_90d": 10.49164507,
                    "market_cap": 441331289779.2596,
                    "market_cap_dominance": 42.1167,
                    "fully_diluted_market_cap": 480920505483.86,
                    "tvl": null,
                    "last_updated": "2023-01-24T17:28:00.000Z"
                }
            }
        },
        "ETH": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 6377,
            "date_added": "2015-08-07T00:00:00.000Z",
            "tags": [
                "pos",
                "smart-contracts",
                "ethereum-ecosystem",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "hashkey-capital-portfolio",
                "kenetic-capital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio",
                "injective-ecosystem"
            ],
            "max_supply": null,
            "circulating_supply": 122373866.2178,
            "total_supply": 122373866.2178,
            "is_active": 1,
            "platform": null,
            "cmc_rank": 2,
            "is_fiat": 0,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-01-24T17:28:00.000Z",
            "quote": {
                "USD": {
                    "price": 1615.5807067683095,
                    "volume_24h": 7253677735.108589,
                    "volume_change_24h": -9.0558,
                    "percent_change_1h": -0.31301315,
                    "percent_change_24h": -0.22237342,
                    "percent_change_7d": 2.84570152,
                    "percent_change_30d": 33.36996067,
                    "percent_change_60d": 35.60774035,
                    "percent_change_90d": 4.28965499,
                    "market_cap": 197704857274.12387,
                    "market_cap_dominance": 18.8674,
                    "fully_diluted_market_cap": 197704857274.12,
                    "tvl": null,
                    "last_updated": "2023-01-24T17:28:00.000Z"
                }
            }
        },
        "XRP": {
            "id": 52,
            "name": "XRP",
            "symbol": "XRP",
            "slug": "xrp",
            "num_market_pairs": 879,
            "date_added": "2013-08-04T00:00:00.000Z",
            "tags": [
                "medium-of-exchange",
                "enterprise-solutions",
                "arrington-xrp-capital-portfolio",
                "galaxy-digital-portfolio",
                "a16z-portfolio",
                "pantera-capital-portfolio"
            ],
            "max_supply": 100000000000,
            "circulating_supply": 50796877639,
            "total_supply": 99989148225,
            "is_active": 1,
            "platform": null,
            "cmc_rank": 6,
            "is_fiat": 0,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-01-24T17:28:00.000Z",
            "quote": {
                "USD": {
                    "price": 0.41920248124046644,
                    "volume_24h": 1354391251.8181076,
                    "volume_change_24h": -24.7568,
                    "percent_change_1h": -0.3761405,
                    "percent_change_24h": -0.53502824,
                    "percent_change_7d": 8.25130695,
                    "percent_change_30d": 20.95182506,
                    "percent_change_60d": 3.58502617,
                    "percent_change_90d": -9.52009379,
                    "market_cap": 21294177145.537167,
                    "market_cap_dominance": 2.0317,
                    "fully_diluted_market_cap": 41920248124.05,
                    "tvl": null,
                    "last_updated": "2023-01-24T17:28:00.000Z"
                }
            }
        }
    }
}
  
  
  `;

  onCoinCheck(username:string) {
    let data = {
        'username' : username
    }
    return this._http.put('/checkCoin',data);
  }

}
