import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo  from '../../assets/logo-nba.png';

function Principal() {
    const [menuMobile, setMenuMobile] = useState(false);
    const [transicaoIcone, setTransicaoIcone] = useState('');
    const [exibirAnimarMenu, setExibirAnimarMenu] = useState('-translate-y-96 opacity-0 hidden');

    const mudarEstadoMobile = () => {
        setTransicaoIcone('classe-transicao-icone');

        if (menuMobile === false) {
            setExibirAnimarMenu('-translate-y-96 opacity-0');
            setTimeout(() => {
                setMenuMobile(true);
                setExibirAnimarMenu('translate-y-2 opacity-100 block');
            }, 300);
        } else if (menuMobile === true) {
            setTimeout(() => {
                setMenuMobile(false);
                setExibirAnimarMenu('-translate-y-96 opacity-0');
            }, 300);
            setTimeout(() => {
                setExibirAnimarMenu('-translate-y-96 opacity-0 hidden');
            }, 500);
        }

        setTimeout(() => {
            setTransicaoIcone('');
        }, 350);
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
                                    { !menuMobile && <FaBars className={`icone ${transicaoIcone}`} /> }
                                    { menuMobile && <FaTimes className={`icone ${transicaoIcone}`} /> }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`fixed top-20 w-full bg-black text-white transition duration-300 ${exibirAnimarMenu}`}>
                <div className='itens-menu-mobile'>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                    <div className='botao-menu-mobile'>Teste</div>
                </div>
            </div>

        </nav>
    );
}

export default Principal;