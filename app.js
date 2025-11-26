function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: { lat: -14.235, lng: -51.925 } // centro do Brasil
  });

  var pontosDeApoio = [
    // Capitais
    { nome: "Rio Branco - AC", posicao: { lat: -9.97499, lng: -67.8243 }, descricao: "Ponto de apoio ao movimento Fome Zero e Agricultura Sustentável." },
    { nome: "Maceió - AL", posicao: { lat: -9.64985, lng: -35.70895 }, descricao: "Centro comunitário de apoio alimentar e hortas urbanas." },
    { nome: "Macapá - AP", posicao: { lat: 0.034934, lng: -51.0694 }, descricao: "Distribuição de alimentos e incentivo à agricultura sustentável." },
    { nome: "Manaus - AM", posicao: { lat: -3.11903, lng: -60.0217 }, descricao: "Ponto de apoio contra a fome e fortalecimento da agricultura familiar." },
    { nome: "Salvador - BA", posicao: { lat: -12.9718, lng: -38.5011 }, descricao: "Apoio alimentar e projetos de agricultura comunitária." },
    { nome: "Fortaleza - CE", posicao: { lat: -3.71722, lng: -38.5434 }, descricao: "Distribuição de alimentos e apoio a famílias vulneráveis." },
    { nome: "Brasília - DF", posicao: { lat: -15.7797, lng: -47.9297 }, descricao: "Centro de apoio alimentar e incentivo à agricultura sustentável." },
    { nome: "Vitória - ES", posicao: { lat: -20.3155, lng: -40.3128 }, descricao: "Ponto de apoio ao movimento Fome Zero." },
    { nome: "Goiânia - GO", posicao: { lat: -16.6786, lng: -49.2539 }, descricao: "Distribuição de alimentos e hortas comunitárias." },
    { nome: "São Luís - MA", posicao: { lat: -2.53874, lng: -44.2825 }, descricao: "Apoio alimentar e projetos sociais." },
    { nome: "Cuiabá - MT", posicao: { lat: -15.601, lng: -56.0974 }, descricao: "Ponto de apoio contra a fome e incentivo à agricultura." },
    { nome: "Campo Grande - MS", posicao: { lat: -20.4697, lng: -54.6201 }, descricao: "Distribuição de alimentos e apoio comunitário." },
    { nome: "Belo Horizonte - MG", posicao: { lat: -19.9167, lng: -43.9345 }, descricao: "Centro de apoio alimentar e hortas urbanas." },
    { nome: "Belém - PA", posicao: { lat: -1.45583, lng: -48.5039 }, descricao: "Distribuição de alimentos e apoio comunitário." },
    { nome: "João Pessoa - PB", posicao: { lat: -7.11509, lng: -34.8641 }, descricao: "Ponto de apoio ao movimento Fome Zero." },
    { nome: "Curitiba - PR", posicao: { lat: -25.4284, lng: -49.2733 }, descricao: "Distribuição de alimentos e incentivo à agricultura sustentável." },
    { nome: "Recife - PE", posicao: { lat: -8.04756, lng: -34.877 }, descricao: "Centro comunitário de apoio alimentar." },
    { nome: "Teresina - PI", posicao: { lat: -5.08921, lng: -42.8016 }, descricao: "Distribuição de alimentos e hortas comunitárias." },
    { nome: "Rio de Janeiro - RJ", posicao: { lat: -22.9068, lng: -43.1729 }, descricao: "Ponto de apoio contra a fome e incentivo à agricultura urbana." },
    { nome: "Natal - RN", posicao: { lat: -5.79448, lng: -35.211 }, descricao: "Distribuição de alimentos e apoio comunitário." },
    { nome: "Porto Alegre - RS", posicao: { lat: -30.033, lng: -51.23 }, descricao: "Centro de apoio alimentar e hortas urbanas." },
    { nome: "Porto Velho - RO", posicao: { lat: -8.76194, lng: -63.9039 }, descricao: "Distribuição de alimentos e incentivo à agricultura sustentável." },
    { nome: "Boa Vista - RR", posicao: { lat: 2.819, lng: -60.673 }, descricao: "Ponto de apoio ao movimento Fome Zero." },
    { nome: "Florianópolis - SC", posicao: { lat: -27.5954, lng: -48.548 }, descricao: "Distribuição de alimentos e hortas comunitárias." },
    { nome: "São Paulo - SP", posicao: { lat: -23.5505, lng: -46.6333 }, descricao: "Centro de apoio alimentar e agricultura urbana." },
    { nome: "Aracaju - SE", posicao: { lat: -10.9472, lng: -37.0731 }, descricao: "Distribuição de alimentos e apoio comunitário." },
    { nome: "Palmas - TO", posicao: { lat: -10.184, lng: -48.333 }, descricao: "Ponto de apoio ao movimento Fome Zero." },

    // Cidades mais pobres
    { nome: "Melgaço - PA", posicao: { lat: -1.802, lng: -50.719 }, descricao: "Município vulnerável com iniciativas de apoio alimentar e hortas comunitárias." },
    { nome: "Manari - PE", posicao: { lat: -8.964, lng: -37.631 }, descricao: "Distribuição de alimentos e apoio a famílias vulneráveis." },
    { nome: "Uiramutã - RR", posicao: { lat: 4.585, lng: -60.165 }, descricao: "Município indígena com apoio alimentar e incentivo à agricultura sustentável." },
    { nome: "Novo Santo Antônio - PI", posicao: { lat: -8.964, lng: -41.933 }, descricao: "Distribuição de alimentos e hortas comunitárias." },
    { nome: "Aroeiras - PB", posicao: { lat: -7.545, lng: -35.706 }, descricao: "Ponto de apoio contra a fome e incentivo à agricultura." },
    { nome: "Curralinho - PA", posicao: { lat: -1.811, lng: -49.795 }, descricao: "Distribuição de alimentos e apoio comunitário." },
    { nome: "Jutaí - AM", posicao: { lat: -2.749, lng: -66.759 }, descricao: "Município vulnerável com apoio alimentar e hortas comunitárias." }
  ];

  pontosDeApoio.forEach(function(ponto) {
    var marker = new google.maps.Marker({
      position: ponto.posicao,
      map: map,
      title: ponto.nome
    });

    var infoWindow = new google.maps.InfoWindow({
      content: `<h3>${ponto.nome}</h3><p>${ponto.descricao}</p>`
    });

    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  });
}