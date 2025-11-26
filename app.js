function initMap() {
  // Cria o mapa centralizado em Goiás
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: { lat: -15.933, lng: -48.283 } // centro aproximado entre Goiânia e Brasília
  });

  // Lista de pontos de apoio
  var pontosDeApoio = [
    {
      nome: "Ponto de Apoio Goiânia",
      posicao: { lat: -16.6786, lng: -49.2539 }
    },
    {
      nome: "Ponto de Apoio Brasília",
      posicao: { lat: -15.7797, lng: -47.9297 }
    }
  ];

  // Adiciona os marcadores no mapa
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