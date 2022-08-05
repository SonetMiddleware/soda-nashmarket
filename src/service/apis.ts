import { API_HOST, getChainName, httpRequest } from '@soda/soda-util'

export const getOrderByTokenId = async (tokenId: string, status?: number) => {
  const url = `${API_HOST}/orders`
  const chain_name = await getChainName()
  const params = { token_id: tokenId, status, chain_name }
  try {
    const res = await httpRequest({ url, params })
    if (res.error) {
      console.error(res.error)
      return null
    }
    if (res.data && res.data.length === 1) {
      return res.data[0]
    }
  } catch (err) {
    console.error(err)
  }
  return null
}
