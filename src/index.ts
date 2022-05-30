import { registerMarketPlace } from '@soda/soda-mp-sdk'
import { NFT } from '@soda/soda-asset'
import * as Api from './service/apis'

const getOrderByTokenId = async (
  token: NFT,
  status?: number
): Promise<{ id: string }> => {
  const o = await Api.getOrderByTokenId(token.tokenId, status)
  return o ? { id: o.order_id } : null
}
const getItemPage = async (params: { token: NFT }) => {
  const o = await getOrderByTokenId(params.token)
  if (o && o.id) {
    return `https://nash.market/detail/${o.id}`
  }
  return `http://nash.market/detail/-1`
}
const getHost = async (params: { chainId?: number }) => {
  return 'http://nash.market/'
}

const sell = async () => {}
const auction = async () => {}
const cancel = async () => {}
const buy = async () => {}
const withdraw = async () => {}

const init = () => {
  registerMarketPlace({
    name: 'nash',
    meta: {
      getItemPage,
      getHost
    }
  })
}

export default init
