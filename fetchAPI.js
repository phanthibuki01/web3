const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'b6e29d3010e649f5b4ccff037f318469',
  },
}

fetch(
  'https://api.opensea.io/v2/chain/ethereum/contract/0x1a92f7381b9f03921564a437210bb9396471050c/nfts/8653?limit=50',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
