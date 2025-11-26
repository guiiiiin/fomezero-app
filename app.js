function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: -14.235, lng: -51.925 } // centro aproximado do Brasil
  });

  var pontosDeApoio = [
    { nome: "Acre - Rio Branco", posicao: { lat: -9.97499, lng: -67.8243 } },
    { nome: "Alagoas - Maceió", posicao: { lat: -9.64985, lng: -35.70895 } },
    { nome: "Amapá - Macapá", posicao: { lat: 0.034934, lng: -51.0694 } },
    { nome: "Amazonas - Manaus", posicao: { lat: -3.11903, lng: -60.0217 } },
    { nome: "Bahia - Salvador", posicao: { lat: -12.9718, lng: -38.5011 } },
    { nome: "Ceará - Fortaleza", posicao: { lat: -3.71722, lng: -38.5434 } },
    { nome: "Distrito Federal - Brasília", posicao: { lat: -15.7797, lng: -47.9297 } },
    { nome: "Espírito Santo - Vitória", posicao: { lat: -20.3155, lng: -40.3128 } },
    { nome: "Goiás - Goiânia", posicao: { lat: -16.6786, lng: -49.2539 } },
    { nome: "Maranhão - São Luís", posicao: { lat: -2.53874, lng: -44.2825 } },
    { nome: "Mato Grosso - Cuiabá", posicao: { lat: -15.601, lng: -56.0974 } },
    { nome: "Mato Grosso do Sul - Campo Grande", posicao: { lat: -20.4697, lng: -54.6201 } },
    { nome: "Minas Gerais - Belo Horizonte", posicao: { lat: -19.9167, lng: -43.9345 } },
    { nome: "Pará - Belém", posicao: { lat: -1.45583, lng: -48.5039 } },
    { nome: "Paraíba - João Pessoa", posicao: { lat: -7.11509, lng: -34.8641 } },
    { nome: "Paraná - Curitiba", posicao: { lat: -25.4284, lng: -49.2733 } },
    { nome: "Pernambuco - Recife", posicao: { lat: -8.04756, lng: -34.877 } },
    { nome: "Piauí - Teresina", posicao: { lat: -5.08921, lng: -42.8016 } },
    { nome: "Rio de Janeiro - Rio de Janeiro", posicao: { lat: -22.9068, lng: -43.1729 } },
    { nome: "Rio Grande do Norte - Natal", posicao: { lat: -5.79448, lng: -35.211 } },
    { nome: "Rio Grande do Sul - Porto Alegre", posicao: { lat: -30.033, lng: -51.23 } },
    { nome: "Rondônia - Porto Velho", posicao: { lat: -8.76194, lng: -63.9039 } },
    { nome: "Roraima - Boa Vista", posicao: { lat: 2.819, lng: -60.673 } },
    { nome: "Santa Catarina - Florianópolis", posicao: { lat: -27.5954, lng: -48.548 } },
    { nome: "São Paulo - São Paulo", posicao: { lat: -23.5505, lng: -46.6333 } },
    { nome: "Sergipe - Aracaju", posicao: { lat: -10.9472, lng: -37.0731 } },
    { nome: "Tocantins - Palmas", posicao: { lat: -10.184, lng: -48.333 } }
  ];

  pontosDeApoio.forEach(function(ponto) {
    var marker = new google.maps.Marker({
      position: ponto.posicao,
      map: map,
      title: ponto.nome
    });

    var infoWindow = new google.maps.InfoWindow({
      content: `<h3>${ponto.nome}</h3>`
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  });
}