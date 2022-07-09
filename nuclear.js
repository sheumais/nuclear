var map = L.map('map').setView([0.0, 0.0], 1);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [12.5, 20.5],
    iconAnchor: [6.5, 20.5],
    popupAnchor: [1, -20.5],
    shadowSize: [20.5, 20.5]
  });

let US = "United States of America"

function createPopup(latitude, longitude, country, name, link) {L.marker([latitude, longitude], {icon: greenIcon}).addTo(map).bindPopup("<b>"+name+"</b><br />"+country+"<br />"+"<a class='link' href="+link+" target='_blank'>"+link+"</a>");}

// https://en.wikipedia.org/wiki/List_of_nuclear_power_stations

// Australia's only Nuclear Reactor 
createPopup(-34.05109556528347, 150.97879510169108, 'Australia', 'Open-pool Australian lightwater reactor (OPAL)', 'https://www.ansto.gov.au/research/facilities/opal-multi-purpose-reactor');
createPopup(28.158056, 78.409444, 'India', 'Narora Atomic Power Station', 'https://www.npcil.nic.in/content/322_1_OperatingPerformance.aspx');
// Power Generating American Nuclear Plants 
createPopup(35.310278, -93.231389, US, 'Arkansas Nuclear One', 'https://www.nrc.gov/info-finder/reactors/ano1.html');
createPopup(40.623333, -80.430556, US, 'Beaver Valley Nuclear Power Station', 'https://www.nrc.gov/info-finder/reactors/bv1.html');
createPopup(41.243611, -88.229167, US, 'Braidwood Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/brai1.html');
createPopup(34.703889, -87.118611, US, 'Browns Ferry Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/bf1.html');
createPopup(33.958333, -78.010278, US, 'Brunswick Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/bru1.html');
createPopup(42.074167, -89.281944, US, 'Byron Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/byro1.html');
createPopup(38.761667, -91.78, US, 'Callaway Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/call.html');
createPopup(38.431944, -76.442222, US, 'Calvert Cliffs Nuclear Power Plant', 'https://nrc.gov/info-finder/reactors/calv1.html');
createPopup(35.051667, -81.07, US, 'Catawba Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/cat1.html');
createPopup(40.172222, -88.835, US, 'Clinton Power Station', 'https://www.nrc.gov/info-finder/reactors/clin.html');
createPopup(46.471111, -119.333889, US, 'Columbia Generating Station', 'https://www.nrc.gov/info-finder/reactors/wash2.html');
createPopup(32.298333, -97.785, US, 'Comanche Peak Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/cp1.html');
createPopup(40.361944, -95.641389, US, 'Cooper Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/cns.html');
createPopup(41.975556, -86.565278, US, 'Donald C. Cook Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/cook1.html');
createPopup(41.596667, -83.086389, US, 'Davis–Besse Nuclear Power Station', 'https://www.nrc.gov/info-finder/reactors/davi.html');
createPopup(35.210833, -120.856111, US, 'Diablo Canyon Power Plant', 'https://www.nrc.gov/info-finder/reactors/diab1.html');
createPopup(41.389722, -88.268056, US, 'Dresden Generating Station', 'https://www.nrc.gov/info-finder/reactors/dres2.html');
createPopup(31.223056, -85.111667, US, 'Joseph M. Farley Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/far1.html');
createPopup(41.962778, -83.2575, US, 'Enrico Fermi Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/ferm2.html');
createPopup(43.523333, -76.398333, US, 'James A. FitzPatrick Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/fitz.html');
createPopup(43.277778, -77.31, US, 'R. E. Ginna Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/ginn.html');
createPopup(32.007222, -91.047778, US, 'Grand Gulf Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/gg1.html');
createPopup(31.934167, -82.343889, US, 'Edwin I. Hatch Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/hat1.html');
createPopup(39.467778, -75.538056, US, 'Hope Creek Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/hope.html');
createPopup(41.245556, -88.669167, US, 'LaSalle County Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/lasa1.html');
createPopup(40.226667, -75.587222, US, 'Limerick Generating Station', 'https://www.nrc.gov/info-finder/reactors/lim1.html');
createPopup(35.4325, -80.948333, US, 'McGuire Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/mcg1.html');
createPopup(41.3119, -72.1686, US, 'Millstone Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/mill2.html');
createPopup(45.333611, -93.849167, US, 'Monticello Nuclear Generating Plant', 'https://www.nrc.gov/info-finder/reactors/mont.html');
createPopup(43.520833, -76.406944, US, 'Nine Mile Point Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/nmp1.html');
createPopup(38.060556, -77.789444, US, 'North Anna Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/na1.html');
createPopup(34.793889, -82.898056, US, 'Oconee Nuclear Station', 'https://www.nrc.gov/info-finder/reactors/oco1.html');
createPopup(42.322778, -86.314444, US, 'Palisades Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/pali.html');
createPopup(33.389167, -112.865, US, 'Palo Verde Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/palo1.html');
createPopup(39.758333, -76.268056, US, 'Peach Bottom Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/pb2.html');
createPopup(41.800833, -81.143333, US, 'Perry Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/perr1.html');
createPopup(44.281111, -87.536667, US, 'Point Beach Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/poin1.html');
createPopup(44.621667, -92.633056, US, 'Prairie Island Nuclear Generating Plant', 'https://www.nrc.gov/info-finder/reactors/prai1.html');
createPopup(41.726389, -90.31, US, 'Quad Cities Nuclear Power Station', 'https://www.nrc.gov/info-finder/reactors/quad1.html');
createPopup(30.756667, -91.333333, US, 'River Bend Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/rbs1.html');
createPopup(34.402778, -80.158333, US, 'H. B. Robinson Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/rob2.html');
createPopup(27.348611, -80.246389, US, 'St. Lucie Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/stl1.html');
createPopup(39.462778, -75.535556, US, 'Salem Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/salm1.html');
createPopup(42.898889, -70.850833, US, 'Seabrook Station Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/seab1.html');
createPopup(35.226389, -85.091667, US, 'Sequoyah Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/seq1.html');
createPopup(35.633333, -78.955, US, 'Shearon Harris Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/har1.html');
createPopup(28.795556, -96.048889, US, 'South Texas Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/stp1.html');
createPopup(34.298611, -81.314722, US, 'Virgil C. Summer Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/sum.html');
createPopup(37.165556, -76.697778, US, 'Surry Nuclear Power Plant', 'https://www.nrc.gov/info-finder/reactors/sur1.html');
createPopup(41.088889, -76.148889, US, 'Susquehanna Steam Electric Station', 'https://www.nrc.gov/info-finder/reactors/susq1.html');
createPopup(25.434167, -80.330556, US, 'Turkey Point Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/tp3.html');
createPopup(33.143333, -81.760556, US, 'Vogtle Electric Generating Plant', 'https://www.nrc.gov/info-finder/reactors/vog1.html');
createPopup(29.995278, -90.471111, US, 'Waterford Nuclear Generating Station', 'https://www.nrc.gov/info-finder/reactors/wat3.html');
createPopup(35.602778, -84.789444, US, 'Watts Bar Nuclear Plant', 'https://www.nrc.gov/info-finder/reactors/wb1.html');
createPopup(38.238889, -95.688889, US, 'Wolf Creek Generating Station', 'https://www.nrc.gov/info-finder/reactors/wc.html');

// Research reactors by country https://en.wikipedia.org/wiki/List_of_nuclear_research_reactors
createPopup(36.726111, 3.005556, 'Algeria', 'Draria Nuclear Reactor', 'https://en.wikipedia.org/wiki/NUR_Reactor');
createPopup(35.582222, 3.117222, 'Algeria', 'Es Salam Reactor at Birine Nuclear Research Center', 'https://en.wikipedia.org/wiki/Energy_in_Algeria');
createPopup(-31.435850, -64.193960, 'Argentina', 'RA-0 Research Reactor', 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-0');
createPopup(-34.5724057,-58.5145391, 'Argentina', 'RA-1 Enrico Fermi Research Reactor', 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-1');
createPopup(-34.822200, -58.575065, 'Argentina', 'RA-3 Medical Reactor', 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-3');
createPopup(-32.968401, -60.623014, 'Argentina', 'RA-4 Nuclear Reactor', 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-4');
createPopup(-41.121543, -71.414308, 'Argentina', 'RA-6 School Reactor', 'https://www.argentina.gob.ar/cnea/Tecnologia-nuclear/reactores-de-investigacion/ra-6');
createPopup(48.196856, 16.4129912, 'Austria', 'TRIGA Mark II Research Reactor', 'https://www.tuwien.at/en/trigacenter/trigareactor');
createPopup(23.952089, 90.279455, 'Bangladesh', 'TRIGA Mark II Research Reactor', 'https://en.wikipedia.org/wiki/Atomic_Energy_Research_Establishment_(Bangladesh)');
createPopup(51.217223, 5.085679, 'Belgium', 'Belgium Reactor 1 (BR1) Research Reactor', 'https://www.sckcen.be/en/about-sck-cen/corporate-information/infrastructure');
createPopup(51.215759, 5.095697, 'Belgium', 'Belgium Reactor 2 (BR2) Research Reactor', 'https://www.sckcen.be/en/about-sck-cen/corporate-information/infrastructure');
createPopup(51.216766, 5.086371, 'Belgium', 'VENUS Research Reactor', 'https://www.sckcen.be/en/about-sck-cen/corporate-information/infrastructure');
createPopup(-23.5640929,-46.7361189, 'Brazil', 'IEA-R1 Research Reactor', 'https://www.ipen.br/portal_por/portal/interna.php?secao_id=729');
createPopup(-19.8729795,-43.9675261, 'Brazil', 'IPR-R1 TRIGA Research Reactor', 'https://www.gov.br/cdtn/pt-br/laboratorios/reator-triga-ipr-r1');
createPopup(-22.864995, -43.225905, 'Brazil', 'ARGONAUTA Research Reactor', 'https://www.gov.br/ien/pt-br/instalacoes/reator-nuclear-de-pesquisa-argonauta/historico-do-reator-argonauta');
createPopup(-23.565469, -46.737695, 'Brazil', 'MB-01 Research Reactor', 'https://www.ipen.br/portal_por/portal/interna.php');
createPopup(46.0504302,-77.3630465, 'Canada', 'ZED-2 Research Reactor', 'https://www.cnl.ca/facilities/zed-2-research-reactor-2/');
createPopup(45.504541, -73.612882, 'Canada', 'SLOWPOKE-2 Research Reactor', 'https://nuclearsafety.gc.ca/eng/reactors/research-reactors/nuclear-facilities/ecole-polytechnique/index.cfm');
createPopup(43.263333, -79.918889, 'Canada', 'McMaster Nuclear Research Reactor', 'https://en.wikipedia.org/wiki/McMaster_Nuclear_Reactor');
createPopup(44.228885, -76.468428, 'Canada', 'SLOWPOKE-2 Research Reactor', 'https://nuclearsafety.gc.ca/eng/reactors/research-reactors/nuclear-facilities/royal-military-college/index.cfm');
createPopup(-33.42862, -70.524577, 'Chile', 'RECH 1 Research Reactor', 'https://www.cchen.cl/?page_id=1649');
createPopup(39.740833, 116.030278, 'China', 'https://en.wikipedia.org/wiki/China_Experimental_Fast_Reactor');
createPopup();
