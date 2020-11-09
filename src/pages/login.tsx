import {FiArrowLeft} from 'react-icons/fi'
import Router from 'next/router'
import Link from 'next/link'

import illustration from '../assets/illustration2.svg'
import logo from '../assets/logo.svg'

export default function Login()
{
    return (
        <div id="login">
            <form onSubmit={() => {}}>
                <div className="fieldInput">
                    <label htmlFor="email">E-mail</label>
                    <input
                        // value={email}
                        // onChange={handleChange}
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                    />
                </div>
                <div className="fieldInput">
                    <label htmlFor="password">Senha</label>
                    <input
                        // value={password}
                        // onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
            <div className="illustration">
                <img src={illustration} alt="Homem apontando para formulário"/>
            </div>
            <div className="firstRow">
                <h1>Entre em sua conta para acessar as funções deste site.</h1>
                <button title="Voltar" onClick={Router.back}>
                    <FiArrowLeft />
                </button>
            </div>
            <div className="secondRow">
                <img src={logo} alt="Cruz representações"/>
            </div>
            <div className="thirdRow">
                <h2>Ainda não está em nosso sistema? Entre em contato cosnosco!<br/>Clique <Link href="contact">aqui</Link> para vizualisar as opções de contato.</h2>
            </div>
        </div>
    )
}