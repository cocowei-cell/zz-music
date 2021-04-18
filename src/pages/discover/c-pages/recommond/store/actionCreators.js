import * as actionTypes from './constants'
import {
  getBanners
} from '@/api/discover'

export const getTopBannerAction = () => {
  return async (dispatch) => {
    const { banners } = await getBanners()
    dispatch({
      type: actionTypes.MODIFY_BANNER,
      value: banners
    })
  }
}
