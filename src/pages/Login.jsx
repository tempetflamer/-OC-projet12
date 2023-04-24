import { Navigate } from 'react-router-dom'
import DataUser from '../api/app/data.js'
import './Login.scss'
import ButtonConnection from '../components/ButtonConnection'

import logoWhite from '../assets/logo-icon-white.svg'
import logoName from '../assets/logo-name.svg'

export default function Login() {
  let users = [12, 18]

  return (
    <div className="connexion">
      <img src={logoWhite} alt="Logo de SportSee white" className="connexion__logo" />
      <img src={logoName} alt="" className="connexion__name" />
      <h1 className="connexion__title">Connexion</h1>
      <div className="connexion__btns">
        {users.map((user, index) => (
          <ButtonConnection className="connexion__btn-user" key={index} idUser={user}>
            Utilisateur {user}
          </ButtonConnection>
        ))}
      </div>
    </div>
  )
}
