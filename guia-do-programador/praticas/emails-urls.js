let urls = 'www.maujor.com/arquivo-um.html www.maujor.com/arquivo-dois.html www.maujor.com/arquivo-tres.html www.maujor.com/arquivo-quatro.html '
let padrao = /(www[.maujorc] + \/)([arquivo]+)-([a-z]+).htmj/g
let urlsatualizadas = (urls.replace(padrao,'$1$3/$2.php'))
console.log(urlsatualizadas)