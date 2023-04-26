import React from 'react'

import './UserKeyData.scss'

export default function UserKeyData({ userInfo, unite, abbUnite, color, icon }) {
  return (
    <article className="user-perf">
      <div className={'user-perf__container' + ' color--' + color}>
        <img src={icon} alt="" className="user-perf__container__img" />
      </div>
      <div className="user-perf__data">
        <p className="user-perf__data__quantity">{userInfo + abbUnite}</p>
        <p className="user-perf__data__unit">{unite}</p>
      </div>
    </article>
  )
}
