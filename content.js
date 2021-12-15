async function getCurrentTab() {
    let tab = await chrome.tabs.query({ 'active': true, 'currentWindow': true }, (tabs) => {
        return tabs[0];
    });
    return tab;
}

let thisTab = getCurrentTab();
console.log("O código está sendo executada nesta janela: " + thisTab.id);


let productName = document.getElementsByTagName("h1")[0].innerHTML;

/*chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ? "from a content script:" + sender.tab.id : "from the extension");
        if (request.greeting == "Product") {
            console.log(request.greeting)
            if (productName != '<a href="//www.casasbahia.com.br" id="Logo">CasasBahia.com.br</a>' && productName != '<a href="//www.pontofrio.com.br" id="Logo">pontofrio.com.br</a>') {
                sendResponse({ farewell: productName });
            }else {
                sendResponse({ farewell: "No have a product" });
            }
        }
    }
);*/

if(productName != '<a href="//www.casasbahia.com.br" id="Logo">CasasBahia.com.br</a>' && productName != '<a href="//www.pontofrio.com.br" id="Logo">pontofrio.com.br</a>'){
    chrome.storage.local.set({'productName' : productName}, () => {
        console.log("Valor armazenado: " + productName);
    });
}

chrome.tabs.onActivated.addListener(function (info) {
    var tabId = info.tabId;
    let tab = chrome.tabs.get(tabId, (tab) => {
        if (tabId == thisTab.id) {
            console.log("A janela tá ativa karai");
            sendMessage(productName);
        } else {
            sendMessage("None");
        }
    });
});

chrome.tabs.onActiveChanged.addListener(function (tabId, info) {
    let tab = chrome.tabs.get(tabId, (tab) => {
        if (tabId == thisTab.id) {
            console.log("A janela tá ativa karai");
            sendMessage(productName);
        } else {
            sendMessage("None");
        }
    })
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    sendMessage("None");
});


//chrome.storage.local.clear();

/*let productName = document.getElementsByTagName("h1")[0].innerHTML;

if(productName != '<a href="//www.casasbahia.com.br" id="Logo">CasasBahia.com.br</a>' && productName != '<a href="//www.pontofrio.com.br" id="Logo">pontofrio.com.br</a>'){
    chrome.storage.local.set({'productName': productName}, () => {
        console.log("Valor armazenado: " + productName);
    });
}*/

      //URL para pesquisar o item que está sendo olhado.
    //https://www.olx.com.br/brasil?q=chorome.storage.local

    //data-lurker_list_position - posição dos carinhas na lista (a)
    //href=""; - link que está dentro do (a)
    //img src="" passar como background para div 
