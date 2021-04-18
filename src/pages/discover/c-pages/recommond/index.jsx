import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import {
  getTopBannerAction
} from './store/actionCreators'


function Recommond() {
  // 使用hooks来获取dispatch
  const dispatch = useDispatch()
  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.getIn(["recommend", "banner"])
    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      {
        topBanners && topBanners.map((item) => {
          return (
            <div key={item.imageUrl}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })
      }
    </div>
  )
}



// function Recommond(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       {
//         topBanners && topBanners.map((item) => {
//           return (
//             <div key={item.imageUrl}>
//               <img src={item.imageUrl} />
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// const mapToProps = state => {
//   return {
//     topBanners: state.recommend.banner
//   }
// }

// const mapToDispatch = dispatch => ({
//   getBanners() {
//     dispatch(getTopBannerAction())
//   }
// })

export default memo(Recommond)