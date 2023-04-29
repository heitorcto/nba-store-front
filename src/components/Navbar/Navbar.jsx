import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo  from '../../assets/logo-nba.png';

function Principal() {
    const [menuMobile, setMenuMobile] = useState(false);

    const mudarEstadoMobile = () => {
        if (menuMobile === false) {
            setMenuMobile(true);
        } else if (menuMobile === true) {
            setMenuMobile(false);
        }
    };

    return (
        <nav className="spacamento-navbar">
            <div className="navbar">
                <div className='area-conteudo-navbar'>
                    <div className='area-menus-navbar'>

                        <div className='logo-navbar'>
                            <img src={ Logo } alt="" />
                        </div>

                        <div className='area-botoes-navbar'>
                            <div className='botao-navbar'>
                                Bonés
                            </div>
                            <div className='botao-navbar'>
                                Regatas
                            </div>
                            <div className='separar-navbar'></div>
                            <div className='botao-navbar'>
                                Criar Conta
                            </div>
                            <div className='botao-navbar'>
                                Entrar
                            </div>
                        </div>

                        <div className='area-icone-menu-mobile'>
                            <div className='posicionamento-menu-mobile'>
                                <div className='cursor-pointer' onClick={() => mudarEstadoMobile()}>
                                    { !menuMobile && <FaBars className='text-5xl' /> }
                                    { menuMobile && <FaTimes className='text-5xl' /> }
                                </div>
                            </div>
                        </div>
                    </div>

                    { menuMobile &&
                        <div className='itens-menu-mobile'>
                            <div className='botao-menu-mobile'>Teste</div>
                            <div className='botao-menu-mobile'>Teste</div>
                            <div className='botao-menu-mobile'>Teste</div>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Principal;