
function pracima()
{
    window.scrollTo
    ({
        top:0,
        behavior:"smooth"
    })
}

function prabaixo()
{
    window.scrollTo
    ({
        top:1300,
        behavior:"smooth"
    })
}

    let cabecalho = document.getElementById('cabecalho')
    let conteudo = document.getElementById('content')
    let rodape = document.getElementById('rodape')

    let botredenc = document.getElementById('redenc')
    let botacar = document.getElementById('acar')
    let botsfc = document.getElementById('sfc')

    let corpo = document.getElementById('bodyy')
    


    function cidadeRedencao()
    {
        console.log('feito')

        
        corpo.classList.remove('acarape')
        cabecalho.classList.remove('acarape')
        conteudo.classList.remove('acarape')
        rodape.classList.remove('acarape')
        botacar.classList.remove('selecionado')
        
        corpo.classList.remove('sfconde')
        cabecalho.classList.remove('sfconde')
        conteudo.classList.remove('sfconde')
        rodape.classList.remove('sfconde')
        botsfc.classList.remove('selecionado')
    
        corpo.classList.add('redencao')
        cabecalho.classList.add('redencao')
        conteudo.classList.add('redencao')
        rodape.classList.add('redencao')
        botredenc.classList.add('selecionado')
        
        document.getElementById('nomedacidade').innerHTML = "REDENÇÃO"
        document.getElementById('casos-toogle').innerHTML='730mil'
        document.getElementById('obitos-toogle').innerHTML='23mil'
        
    }

    
function cidadeAcarape()
{

    corpo.classList.remove('sfconde')
    cabecalho.classList.remove('sfconde')
    conteudo.classList.remove('sfconde')
    rodape.classList.remove('sfconde')
    botsfc.classList.remove('selecionado')

    corpo.classList.remove('redencao')
    cabecalho.classList.remove('redencao')
    conteudo.classList.remove('redencao')
    rodape.classList.remove('redencao')
    botredenc.classList.remove('selecionado')

    corpo.classList.add('acarape')
    cabecalho.classList.add('acarape')
    conteudo.classList.add('acarape')
    rodape.classList.add('acarape')
    botacar.classList.add('selecionado')

    document.getElementById('nomedacidade').innerHTML = "ACARAPE"
    document.getElementById('casos-toogle').innerHTML='900mil'
    document.getElementById('obitos-toogle').innerHTML='78mil'
}

function cidadeSfconde()
{
    
    corpo.classList.remove('redencao')
    cabecalho.classList.remove('redencao')
    conteudo.classList.remove('redencao')
    rodape.classList.remove('redencao')
    botredenc.classList.remove('selecionado')

    corpo.classList.remove('acarape')
    cabecalho.classList.remove('acarape')
    conteudo.classList.remove('acarape')
    rodape.classList.remove('acarape')
    botacar.classList.remove('selecionado')

    corpo.classList.add('sfconde')
    cabecalho.classList.add('sfconde')
    conteudo.classList.add('sfconde')
    rodape.classList.add('sfconde')
    botsfc.classList.add('selecionado')

    document.getElementById('nomedacidade').innerHTML = "SÃO FRANCISCO DO CONDE"
    document.getElementById('casos-toogle').innerHTML='490mil'
    document.getElementById('obitos-toogle').innerHTML='34mil'
}
