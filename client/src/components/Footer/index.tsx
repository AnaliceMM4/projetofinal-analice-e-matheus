
//import logo from "@/assets/utfpr-logo.png";
import logo from '@/images/logo.png'; // Caminho para o logo na pasta images
import utfprLogo from '@/images/utfpr.jpg'
import logo2 from '@/images/overclock.png';
import cartaoAE from '@/images/CartaoAE.png'
import cartaoDn from '@/images/CartaoDn.png'
import cartaoElo from '@/images/CartaoElo.png'
import cartaoHyper from '@/images/CartaoHyper.png'
import cartaoMasterCard from '@/images/CartaoMasterCard.png'
import cartaoVisa from '@/images/CartaoVisa.png'
import './Footer.css';

export function Footer() {
    return (
        <>
            <div className="row bg-dark c-red box-s1 pt-2 ml-0 footer">

                <div className="col ms-3 mt-4">
                    <h5>INSTITUCIONAL</h5>
                    <p><a href="">Quem Somos</a></p>
                    <p><a href="">Nossas lojas</a></p>
                    <p><a href="">Localização</a></p>
                </div>
                <div className="col mt-4">
                    <h5>DÚVIDAS</h5>
                    <p><a href="">Entrega</a></p>
                    <p><a href="">Garantia</a></p>
                    <p><a href="">Como comprar</a></p>
                    <p><a href="">Formas de Pagamento</a></p>
                    <p><a href="">Sobre Boletos</a></p>
                </div>
                <div className="col mt-4">
                    <h5>AJUDA</h5>
                    <p><a href="" className="focus-ring-secondary">SAC</a></p>
                    <p><a href="">Fale conosco</a></p>
                    <p><a href="">Termos de aceite</a></p>
                    <p><a href="">Políticas de Privacidade</a></p>
                </div>
                <div className="col mt-4">
                    <h5>PAGAMENTO</h5>
                    <div className="d-flex">
                        <img src={cartaoAE} className="cartoes" alt="cartaoAE" />
                        <img src={cartaoDn} className="cartoes" alt="cartaoDn" />
                        <img src={cartaoElo} className="cartoes" alt="CartaoElo" />
                    </div>
                    <div className="d-flex">
                        <img src={cartaoHyper} className="cartoes" alt="cartaoHyper" />
                        <img src={cartaoMasterCard} className="cartoes" alt="cartaoMasterCard" />
                        <img src={cartaoVisa} className="cartoes" alt="cartaoVisa" />
                    </div>
                    <div className="mt-2">
                        <p>Receba Ofertas exclusivas por E-mail</p>
                        <div className="input-group pe-2 pb-3">
                            <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="button-addon2" />
                            <button className="btn bgcw text-light" type="button" id="button-addon1">
                                <i className="bi bi-arrow-right-short c-red"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bgcb d-flex pt-2 c-red p-4">
                    {/* <div className="p-4"> */}

                    <div>
                        <img src={logo2} className="logo2" alt="Overclock2" />
                    </div>
                    <div className='col-md-6 mt-4'>

                        <h6>OVERCLOCK INFORMÁTICA® É UMA MARCA REGISTRADA DE UTF & LAEC INFORMATICA LTDA | CNPJ:
                            23.276.795/0001-13 | IE: 434.013.410.110</h6>
                        <p>Avenida Santos Dumont, 8799 - Aventureiro, Joinville - SC - 89436-435</p>
                        {/* <p>___</p> */}
                        <p className="text-secondary">Preços e condições de pagamento exclusivos para compras via internet e
                            podem variar nas lojas físicas. Os preços anunciados neste site ou via e-mail promocional podem
                            ser alterados sem prévio aviso. A NinjaDrive Informática não é responsável por erros
                            descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar
                            de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques.
                            Vendas sujeitas à análise e confirmação de dados.</p>
                    </div>
                    <div className='col-md-4 mt-4 text-center'>
                        <h6>CERTIFICADOS DE SEGURANÇA</h6>
                        {/* <p>___</p> */}
                        <div className="bgcw box-s1">
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={logo} className="logo me-3" alt="Overclock" />
                                <img src={utfprLogo} className="utfprLogo" alt="UtfprLogo" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* </div> */}

        </>
    );
}
