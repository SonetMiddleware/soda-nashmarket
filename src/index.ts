import { registerMarketPlace } from '@soda/soda-mp-sdk'

const sell = async () => {}
const auction = async () => {}
const cancel = async () => {}
const buy = async () => {}
const withdraw = async () => {}

const initialize = () => {
  registerMarketPlace({
    name: 'nash',
    meta: {
      urlPattern: 'https://nash.market',
      itemPattern: 'detail/{id}',
      sellFunc: sell,
      auctionFunc: auction,
      cancelFunc: cancel,
      withdrawFunc: withdraw
    }
  })
}

export { sell, auction, buy, cancel, withdraw }
export default initialize
