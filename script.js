// // Função que atualiza automaticamente qaundo um link é colado
function search() {
  console.log("busca")
  let origem = document.getElementById("origem")
  let formato = document.getElementById("formato")
  let link = document.getElementById("link").value

  origem.value = 'random'
  formato.value = 'random'



  if (link.match(/youtube/)) {
    origem.value = 'youtube'
    formato.value = 'video'
    console.log(origem)
  }

  if (link.match(/youtu.be/)) {
    origem.value = 'youtube'
    formato.value = 'video'
    console.log(origem)
  }

  if (link.match(/scribd/)) {
    origem.value = 'scribd'
    formato.value = 'text'
    console.log(origem)

  }

  if (link.match(/slideshare/)) {
    origem.value = 'slideshare'
    formato.value = 'text'
    console.log(origem)

  }



}

// Função para gerar a pergunta
function generate() {

  let origem = document.getElementById("origem").value
  console.log("origem: ", origem);
  let formato = document.getElementById("formato").value
  console.log("formato: ", formato);
  let link = document.getElementById("link").value
  console.log("link: ", link);

  // link = "https://www.scribd.com/doc/10301747/Bumble-Boogie-Sheet-Music"
  // link = 'https://youtu.be/rBdPPHq7REw?si=BNmLZGhUwdX9HBIz'

  let responseTextArea = document.getElementById("response-box")

  let response


  let isVerified = verifyBeforeGenerate(origem, formato, link)

  if (!isVerified) {
    console.log('Please check if the link is correct')
    response = ''
  } else {
    response = link.replace("scribd", "scribd.vdownloaders")
    response = 'http://www.' + link.replace("youtube", "ssyoutube").substring(link.indexOf("youtube"))
    console.log("link: ", link)
    console.log("response: ", response)
  }



  try {
    responseTextArea.innerText = response
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
    let responseText = responseTextArea.innerHTML
    window.prompt("Copie para área de transferência: Ctrl+C e tecle Enter", responseText);
  }
}


function baixar() {
  let responseTextArea = document.getElementById("response-box").innerHTML
  let origem = document.getElementById('origem').value

  if (responseTextArea.length) {
    console.log(responseTextArea)
    if (origem == 'youtube') {
      responseTextArea = 'http://www.' + responseTextArea
    }
    console.log('Baixando conteúdo de: ', responseTextArea)
    window.open(responseTextArea, '_blank');
    // window.open('http://www.' + responseTextArea, '_blank');
  } else {
    console.log('Não é possível baixar o arquivo desse link')
    alert('Não há um lik válido para fazer o download!')
  }

  // window.location.href = responseTextArea
  // window.location.assign('http://www.' + responseTextArea)

}



// Json com os formatos dos links para download
// var download = [
//   {
//     "origem": "scribd",
//     "pdf": [
//       "https://www.scribd.vdownloaders.com/doc/36341/Business-Plan-Template"
//     ],
//     "text": [
//       "Qual viagem mudou mais a sua perspectiva de vida?",
//     ],
//     "video": [
//       "Qual é o seu próximo destino de viagem?"
//     ],
//   },
// ]

// // console.log("perguntas: ", perguntas)
// let categorias = perguntas.map(teste => teste.categoria)
// // console.log("categorias: ", categorias)

// var select = document.getElementById("categoria");

// select.options[select.options.length] = new Option("Aleatória", "random")

// categorias.forEach(categoria => {
//   select.options[select.options.length] = new Option(categoria, categoria)
// })

// for (index in categorias) {
//     select.options[select.options.length] = new Option(categorias[index], categorias[index]);
// }
