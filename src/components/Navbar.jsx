import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo  from '../assets/logo-nba.png';

function Principal() {
    const [menuMobile, setMenuMobile] = useState(false);

    const mudarEstadoMobile = () => {
        if (menuMobile === false) {
            setMenuMobile(true);
        } else if (menuMobile === true) {
            setMenuMobile(false);
        }
    }

    return (
        <nav className="navbar">
            <div className='container mx-auto'>
                <div className='flex flex-row items-center p-3'>

                    <div className='w-36'>
                        <img src={ Logo } alt="" />
                    </div>

                    <div className='lg:flex hidden flex-row gap-10 pl-20 items-center'>
                        <div className='botao-navbar'>
                            Bonés
                        </div>
                        <div className='botao-navbar'>
                            Regatas
                        </div>
                        <div className='border-r h-8'></div>
                        <div className='botao-navbar'>
                            Criar Conta
                        </div>
                        <div className='botao-navbar'>
                            Entrar
                        </div>
                    </div>

                    <div className='lg:hidden flex-1'>
                        <div className='flex flex-row justify-end'>
                            <div className='cursor-pointer' onClick={() => mudarEstadoMobile()}>
                                { !menuMobile && <FaBars className='text-5xl' /> }
                                { menuMobile && <FaTimes className='text-5xl' /> }
                            </div>
                        </div>
                    </div>
                </div>

                { menuMobile &&
                    <div className='lg:hidden flex flex-col gap-5 p-6'>
                        <div className='border rounded-md text-2xl py-3 text-center'>Teste</div>
                        <div className='border rounded-md text-2xl py-3 text-center'>Teste</div>
                        <div className='border rounded-md text-2xl py-3 text-center'>Teste</div>
                    </div>
                }

            </div>
        </nav>
    );
}

export default Principal;