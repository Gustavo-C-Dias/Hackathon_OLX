/*chrome.storage.local.get(['productName'], function (data){
    if(data.productName != null) {
        document.getElementsByTagName("body")[0].innerHTML = '<div id="Conscientizacao"><h1>Comprando Usado</h1><h3>Voce estara contribuindo para o meio ambiente.</h3><canvas id="myChart"></canvas><div class="valoresConcietizacao"><p class="titulo"> Emanando <strong> <span id="Carbono">ValorBanco</span> </strong> a menos de Carbono</p></div><div class="valoresConcietizacao"><p class="titulo"> Preservando <strong> <span id="Agua">ValorBanco</span> </strong> de Agua do planeta</p></div><div class="valoresConcietizacao"><p class="titulo"> Evitando <strong> <span id="Lixo">ValorBanco</span> </strong> de Lixo no Ambiente</p></div></div><main><p class="textoProduto">Compre de forma segura, outros produtos parecido com <strong><span class="produtoProcura">Produto</span></strong></p><div class="Anuncio"><div class="img">Foto</div><div class="dadosAnuncio"><h4>Titulo do anuncio</h4><p>Descricao do anuncio informado pelo vendedor mais palavras bonitas</p><a><button>Saiba Mais !</button></a></div></div><div class="Anuncio"><div class="img">Foto</div><div class="dadosAnuncio"><h4>Titulo do anuncio</h4><p>Descricao do anuncio informado pelo vendedor mais palavras bonitas</p><a><button>Saiba Mais!</button></a></div></div><div class="Anuncio"><div class="img">Foto</div><div class="dadosAnuncio"><h4>Titulo do anuncio</h4><p>Descricao do anuncio informado pelo vendedor mais palavras bonitas para fechar</p><a><button>Saiba Mais!</button></a></div></div></main><footer><img src="../Assets/logo_OLX_Brasil.png" alt="OLX_Brasil"></footer><script src="../Scripts/main.js"></script>';
        let productArea = document.getElementsByClassName("produtoProcura")[0];
        productArea.innerHTML = data.productName;
        chrome.storage.local.remove(['productName'], function() {
            console.log("ProductName removido");
        });
        chrome.storage.local.set({'tab/cont' : ["", document.getElementsByTagName("body")[0].innerHTML]})
    }
});*/

/*chrome.runtime.sendMessage({greeting: "Product"}, (response) => {
    document.getElementsByClassName("produtoProcura")[0].innerHTML = response.farewell;
});*/

chrome.storage.local.get(['productName'], (data) => {
    if(data.productName != null) {
        document.getElementsByClassName("produtoProcura")[0].innerHTML = data.productName;
    }
});
