import { Redirect } from 'react-router-dom'

import ZDiscover from '@/pages/discover'
import ZFriend from '@/pages/friends'
import ZMine from '@/pages/mine'
import Recommond from '@/pages/discover/c-pages/recommond'
const routes = [
  {
    path: "/",
    exact: true,
    render() {
      return <Redirect to="/discover" />
    }
  },
  {
    path: "/discover",
    component: ZDiscover,
    routes: [
      {
        path: "/discover/recommend",
        component: Recommond
      }
    ]
  },
  {
    path: "/mine",
    component: ZMine
  },
  {
    path: "/friend",
    component: ZFriend
  }
]

export default routes