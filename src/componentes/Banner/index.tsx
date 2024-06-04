import './Banner.css';
import React from 'react';

interface BannerProps{
    enderecoImagem: string,
    textoAlt?: string,
}

function Banner({enderecoImagem, textoAlt}:BannerProps){
    return(
        <header className = 'banner'>
        {/* <img src = "/banner.png" alt= "Banner principal da página da organo" className ='banner-img'/> */}
        <img src = {enderecoImagem} alt= {textoAlt} className ='banner-img'/>
        </header>
    )
}

export default Banner;