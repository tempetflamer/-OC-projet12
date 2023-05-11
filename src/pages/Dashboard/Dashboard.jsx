import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import HeroText from '../../components/HeroText/HeroText.jsx'
import Charts from '../../components/Charts/Charts.jsx'
import UserPerf from '../../components/UserPerf/UserPerf.jsx'

import './Dashboard.scss'

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Layout className="dashboard">
        <HeroText />
        <div className="flex-wrap">
          <Charts className="charts" />
          <UserPerf />
        </div>
      </Layout>
    </>
  )
}
