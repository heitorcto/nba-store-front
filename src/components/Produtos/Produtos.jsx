import Jordan from '../../assets/jordan.webp';
import { BsFillPlusSquareFill } from "react-icons/bs";

function Produtos(props) {
    return (
        <>
            <section className="container mx-auto mt-8">
                <div className="flex flex-col">
                    <div className="text-2xl font-bold text-center">
                        {props.nome}
                    </div>
                </div>
                <div className="flex justify-center pt-2 pb-5"><div className='border-t border-black w-96'></div></div>
                
                <div className="grid sm:flex sm:justify-center sm:flex-wrap gap-3">

                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-col border border-gray-300 rounded-md items-center">
                        <div className="grid-col-1">
                            <img className='sm:h-60' src={Jordan} alt="" />
                        </div>
                        <div className="grid-col-1 p-2">
                            <div className='flex flex-col gap-4'>
                                <div className='font-bold'>Jordan XLR8</div>
                                <div className='font-semibold text-xl'>R$ 1500,00</div>
                                <div className='text-sm'>12x de R$ 125,00 sem juros</div>
                                <div className='flex gap-3 sm:justify-center'>
                                    <div className='text-xl flex gap-2 items-center p-2 hover:bg-black hover:text-white rounded-md cursor-pointer transition duration-200'>
                                        <BsFillPlusSquareFill/> Ver mais
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Produtos;
