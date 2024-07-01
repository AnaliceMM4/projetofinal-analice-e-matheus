
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaGlobe } from 'react-icons/fa';
// import logo from "@/assets/utfpr-logo.png";
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
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-red fw-bold mb-4'>
                                Institucional
                            </h6>
                            <p><a href="">Quem Somos</a></p>
                            <p><a href="">Nossas lojas</a></p>
                            <p><a href="">Localização</a></p>

                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-red  fw-bold mb-4'>Dúvidas</h6>
                            <p><a href="">Entrega</a></p>
                            <p><a href="">Garantia</a></p>
                            <p><a href="">Como comprar</a></p>
                            <p><a href="">Formas de Pagamento</a></p>
                            <p><a href="">Sobre Boletos</a></p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-red fw-bold mb-4'>Ajuda</h6>
                            <p><a href="" className="focus-ring-secondary">SAC</a></p>
                            <p><a href="">Fale conosco</a></p>
                            <p><a href="">Termos de aceite</a></p>
                            <p><a href="">Políticas de Privacidade</a></p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase text-red fw-bold mb-4'>Pagamento</h6>
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


                        </MDBCol>
                    </MDBRow>
                    <MDBRow className='mt-3 bg-dark'>
                        <MDBCol md="8" lg="4" xl="8" className="mx-auto mb-4">
                            <div className="d-flex align-items-center">
                                <img src={logo2} className="logo2 me-3" alt="Overclock2" />
                                <div>
                                    <h6>OVERCLOCK INFORMÁTICA® É UMA MARCA REGISTRADA DE UTF & LAEC INFORMATICA LTDA | CNPJ:
                                        23.276.795/0001-13 | IE: 434.013.410.110</h6>
                                    <p>Avenida Santos Dumont, 8799 - Aventureiro, Joinville - SC - 89436-435</p>
                                    <p className="text-secondary">Preços e condições de pagamento exclusivos para compras via internet e
                                        podem variar nas lojas físicas. A Overclock Informática não é responsável por erros
                                        descritivos. As fotos contidas nesta página são meramente ilustrativas do produto e podem variar
                                        de acordo com o fornecedor/lote do fabricante. Ofertas válidas até o término de nossos estoques.
                                        Vendas sujeitas à análise e confirmação de dados.</p>
                                </div>
                            </div>

                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase text-red fw-bold mb-4'>Certificados de Segurança</h6>
                            <div className="">
                                <div className="d-flex justify-content-center align-items-center">
                                    <img src={logo} className="logo me-3" alt="Overclock" />
                                    <img src={utfprLogo} className="utfprLogo" alt="UtfprLogo" />
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBRow className='mt-3'>


                </MDBRow>

            </section>

            <div className='text-center text-white p-4' style={{ backgroundColor: 'rgb(24, 24, 24)' }}>
                © 2024 Copyright <br />
                <a className='text-reset fw-bold' href='http://localhost:5173/'>
                    Overclock
                </a>
            </div>
        </MDBFooter>
    );
}