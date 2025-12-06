import React from 'react'
import Row from '../Row/Row'
import { requests } from '../../../utils/requests'
const RowList = () => {

  return (
    <div>
      <Row 
      title="POPULAR MOVIES"
      fetchUrl={requests.popularSeries}
      isLargeRow={true}
      />
      <Row fetchUrl={requests.trending}
      title="TRENDING "/>
      <Row fetchUrl={requests.action}
      title="ACTION "/>
      <Row fetchUrl={requests.horror}
      title="HORROR "/>
      <Row fetchUrl={requests.romance}
      title="ROMANCE "/>
      <Row fetchUrl={requests.comedy}
      title="COMEDY "/>
      <Row fetchUrl={requests.animation}
      title="ANIMATIONS "/>

    </div>
  )
}

export default RowList
