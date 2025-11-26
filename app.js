function initMap() {
  // Centro inicial do mapa (Padre Bernardo/GO como exemplo)
  const centro = { lat: -15.1606, lng: -48.2833 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: centro,
  });

  // Lista de locais de distribuição
  const locais = [
    { nome: "Feira Comunitária", lat: -15.1606, lng: -48.2833 },
    { nome: "ONG Vida Saudável", lat: -15.1700, lng: -48.2900 },
    { nome: "Distribuição Escolar", lat: -15.1550, lng: -48.2800 }
  ];

  // Adiciona marcadores dos locais
  locais.forEach(l => {
    const marker = new google.maps.Marker({
      position: { lat: l.lat, lng: l.lng },
      map: map,
      title: l.nome
    });

    const info = new google.maps.InfoWindow({
      content: `<strong>${l.nome}</strong>`
    });

    marker.addListener("click", () => {
      info.open(map, marker);
    });
  });

  // Geolocalização do usuário
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };

        new google.maps.Marker({
          position: userPos,
          map: map,
          title: "Você está aqui",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });

        map.setCenter(userPos);
      },
      () => {
        alert("Não foi possível obter sua localização.");
      }
    );
  } else {
    alert("Seu navegador não suporta geolocalização.");
  }
}