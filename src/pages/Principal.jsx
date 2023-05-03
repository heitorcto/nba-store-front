import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Carrossel from '../components/Carrossel/Carrossel';
import Categorias from '../components/Categorias/Categorias';
import Produtos from '../components/Produtos/Produtos';

function Principal() {
    return (
        <>
            <Navbar />
            <Carrossel />
            <Categorias />
            <Produtos nome="PROMOÇÕES" />
            <Produtos nome="SAINDO EM BREVE" />
            <Footer />
        </>
    );
}

export default Principal;