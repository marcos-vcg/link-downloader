let downloadLink = ''


// // Função que atualiza automaticamente qaundo um link é colado
function search() {
  console.log("busca")
  let origem = document.getElementById("origem")
  let formato = document.getElementById("formato")
  let link = document.getElementById("link").value

  origem.value = 'random'
  formato.value = 'random'


  // Antigos Métodos
  // if (link.match(/youtube/)) {
  //   origem.value = 'youtube'
  //   formato.value = 'video'
  //   downloadLink = 'http://www.' + link.replace("youtube", "ssyoutube").substring(link.indexOf("youtube"))
  //   // downloadLink = 'http://www.' + link.replace("youtube", "ssyoutube").substring(link.indexOf("youtube"))
  // }

  // if (link.match(/youtu.be/)) {
  //   origem.value = 'youtube'
  //   formato.value = 'video'
  //   downloadLink = link.split('?')[0].replace("youtu.be/", "ssyoutube.com/watch?v=")

  //   // downloadLink = 'http://' + link.split('?')[0].replace("youtu.be/", "ssyoutube.com/watch?v=").substring(link.indexOf("youtu.be/"))
  //   // downloadLink = 'http://www.' + link.replace("youtu.be/", "ssyoutube.com/watch?v=").substring(link.indexOf("youtu.be/"))
  // }



  // Novos métodos

  // link = 'https://www.youtube.com/watch?v=8k0SaiBGhgM'
  if (link.match(/youtube/)) {
    origem.value = 'youtube'
    formato.value = 'video'
    downloadLink = 'https://ssyoutube.one/pt/' + link
  }

  // link = 'https://youtu.be/rBdPPHq7REw?si=BNmLZGhUwdX9HBIz'
  if (link.match(/youtu.be/)) {
    origem.value = 'youtube'
    formato.value = 'video'
    downloadLink = 'https://ssyoutube.one/pt/' + link.split('?')[0].replace("youtu.be/", "youtube.com/watch?v=")
  }

  // link = "https://www.scribd.com/doc/10301747/Bumble-Boogie-Sheet-Music"
  if (link.match(/scribd/)) {
    origem.value = 'scribd'
    formato.value = 'pdf'
    downloadLink = link.split('scribd')[1].replace(".com", "https://scribd.vdownloaders.com")
    // downloadLink = link.replace("scribd", "scribd.vdownloaders")
  }

  // link = 'https://pt.slideshare.net/slideshow/especificao-de-requisitos/12807494'
  if (link.match(/slideshare/)) {
    origem.value = 'slideshare'
    formato.value = 'slide'
    downloadLink = 'https://slideshare.downloader.is/_/?url=' + link
  }

  // link = 'https://www.sciencedirect.com/science/article/abs/pii/S0040816617302045'
  if (link.match(/sciencedirect/)) {
    origem.value = 'sciencedirect'
    formato.value = 'artigo'
    downloadLink = 'https://sci-hub.se/' + link
  }

}


// 
function clearLink() {
  document.getElementById("link").value = ''
  document.getElementById("response-box").value = ''

  search()
}

// Função para gerar a pergunta
function generate() {
  // console.log('downloadLink: ', downloadLink)

  let origem = document.getElementById("origem").value
  // console.log("origem: ", origem);
  let formato = document.getElementById("formato").value
  // console.log("formato: ", formato);
  let link = document.getElementById("link").value
  // console.log("link: ", link);


  let responseTextArea = document.getElementById("response-box")


  let isVerified = verifyBeforeGenerate(origem, formato, link)

  if (!isVerified) {
    console.log('Please check if the link is correct')
    downloadLink = ''
  }


  try {
    // responseTextArea.innerText = downloadLink
    responseTextArea.value = downloadLink
    console.log('Ok, response generated');
  } catch (err) {
    console.log('Oops, unable to generate');
  }

}


// Função que verifica se o link é válido antes de gerar o link de download
function verifyBeforeGenerate(origem, formato, link) {
  let isValid = true

  if (origem == "random") {
    console.log("Link de Origem não Identificada")
    isValid = false
  }

  // Verificar formato
  if (formato == "random") {
    console.log("Formato de Arquivo não Identificado")
    isValid = false
  }

  // Verificar link preenchido
  if (link == "") {
    console.log("Link do Arquivo é Obrigatório")
    isValid = false
  }

  return isValid
}


// Função para copiar a resposta para a area de transferência
function copy() {
  let responseTextArea = document.getElementById("response-box")

  responseTextArea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
    // let responseText = responseTextArea.innerHTML
    let responseText = responseTextArea.value
    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", responseText);
  }
}


function baixar() {
  // let responseTextArea = document.getElementById("response-box").innerHTML

  if (downloadLink.length) {
    console.log('Baixando conteúdo de: ', downloadLink)
    window.open(downloadLink, '_blank');
    // window.open('http://www.' + responseTextArea, '_blank');
  } else {
    console.log('Não é possível baixar o arquivo desse link')
    alert('Não há um lik válido para fazer o download!')
  }

  // window.location.href = responseTextArea
  // window.location.assign('http://www.' + responseTextArea)

}
