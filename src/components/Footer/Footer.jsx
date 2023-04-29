import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <footer className='main-footer'>
            <div className='container-footer'>
                <div className='area-itens-footer'>
                    <div className='redes-sociais'>
                        <FaFacebook className='icone-rede-social' />
                        <FaInstagram className='icone-rede-social' />
                        <FaWhatsapp className='icone-rede-social' />
                        <FaYoutube className='icone-rede-social' />
                    </div>
                    <div className='divisao-footer'></div>
                    <div className='texto-informacao'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur corrupti nesciunt soluta enim, ipsum impedit. Consequuntur eos quisquam provident rerum, consequatur tenetur harum placeat in officiis ut amet illo sed.
                    </div>
                    <div className='texto-copyright'>
                        © 2023 NBA Media Ventures, LLC. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;