import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getTopBannerAction
} from './store/actionCreators'

function Recommond(props) {
  const { getBanners, topBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      {
        topBanners && topBanners.map((item) => {
          return (
            <div key={item.imageUrl}>
              <img src={item.imageUrl} />
            </div>
          )
        })
      }
    </div>
  )
}

const mapToProps = state => {
  return {
    topBanners: state.recommend.banner
  }
}

const mapToDispatch = dispatch => ({
  getBanners() {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapToProps, mapToDispatch)(memo(Recommond))