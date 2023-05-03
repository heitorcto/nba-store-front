import Jordan from '../../assets/jordan.webp';

function Produtos(props) {
    return (
        <>
            <section className=" container mx-auto">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-center">
                        {props.nome}
                    </div>
                </div>
                <div className="flex justify-center pt-2 pb-3"><div className='border-t border-black w-96'></div></div>
                
                <div className="grid sm:flex sm:text-blue-500 gap-3">
                    <div className="grid grid-cols-2 border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1 flex">
                            <img src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='font-semibold mb-3'>Jordan XLR8</div>
                            <div className='font-bold text-xl mb-1'>R$ 1500,00</div>
                            <div className='text-sm mb-6'>12x de R$ 125,00 sem juros</div>
                            <div className='bg-white text-center p-1 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-200 cursor-pointer'>
                                Adicionar ao carrinho
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1 flex">
                            <img src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='font-semibold mb-3'>Jordan XLR8</div>
                            <div className='font-bold text-xl mb-1'>R$ 1500,00</div>
                            <div className='text-sm mb-6'>12x de R$ 125,00 sem juros</div>
                            <div className='bg-white text-center p-1 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-200 cursor-pointer'>
                                Adicionar ao carrinho
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Produtos;