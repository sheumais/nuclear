var map = L.map('map').setView([25.0, 25.0], 2);

var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
	var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
    noWrap: true,
  bounds: [[-70, -180],[90, 180]],
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    iconSize: [12.5, 20.5],
    iconAnchor: [6.5, 20.5],
    popupAnchor: [1, -20.5],
    shadowSize: [20.5, 20.5]
  });

  var baseLayers = {'OpenStreetMap': tiles};
  var satellite = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
var layerControl = L.control.layers(baseLayers).addTo(map);

layerControl.addBaseLayer(satellite, 'Satellite');

let US = "United States of America";

function createPopup(latitude, longitude, country, name, link) {L.marker([latitude, longitude], {icon: greenIcon}).addTo(map).bindPopup("<b>"+name+"</b><br />"+country+"<br />"+"<a class='link' href="+link+" target='_blank'>"+link+"</a>");}
function createPopupNoLink(latitude, longitude, country, name) {L.marker([latitude, longitude], {icon: greenIcon}).addTo(map).bindPopup("<b>"+name+"</b><br />"+country+"<br />");}

createPopup(-34.051096, 150.978795, 'Australia', 'Open-pool Australian lightwater reactor (OPAL)', 'https://www.ansto.gov.au/research/facilities/opal-multi-purpose-reactor');
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
createPopup(-23.564093,-46.736119, 'Brazil', 'IEA-R1 Research Reactor', 'https://www.ipen.br/portal_por/portal/interna.php?secao_id=729');
createPopup(-19.8729795,-43.9675261, 'Brazil', 'IPR-R1 TRIGA Research Reactor', 'https://www.gov.br/cdtn/pt-br/laboratorios/reator-triga-ipr-r1');
createPopup(-22.864995, -43.225905, 'Brazil', 'ARGONAUTA Research Reactor', 'https://www.gov.br/ien/pt-br/instalacoes/reator-nuclear-de-pesquisa-argonauta/historico-do-reator-argonauta');
createPopup(-23.565469, -46.737695, 'Brazil', 'MB-01 Research Reactor', 'https://www.ipen.br/portal_por/portal/interna.php');
createPopup(46.0504302,-77.3630465, 'Canada', 'ZED-2 Research Reactor', 'https://www.cnl.ca/facilities/zed-2-research-reactor-2/');
createPopup(45.504541, -73.612882, 'Canada', 'SLOWPOKE-2 Research Reactor', 'https://nuclearsafety.gc.ca/eng/reactors/research-reactors/nuclear-facilities/ecole-polytechnique/index.cfm');
createPopup(43.263333, -79.918889, 'Canada', 'McMaster Nuclear Research Reactor', 'https://en.wikipedia.org/wiki/McMaster_Nuclear_Reactor');
createPopup(44.228885, -76.468428, 'Canada', 'SLOWPOKE-2 Research Reactor', 'https://nuclearsafety.gc.ca/eng/reactors/research-reactors/nuclear-facilities/royal-military-college/index.cfm');
createPopup(-33.42862, -70.524577, 'Chile', 'RECH 1 Research Reactor', 'https://www.cchen.cl/?page_id=1649');
createPopup(39.740833, 116.030278, 'China', 'China Experimental Fast Reactor', 'https://en.wikipedia.org/wiki/China_Experimental_Fast_Reactor');
createPopup(4.6401876, -74.092748, 'Colombia', 'IAN-R1 Research Reactor', 'https://es.wikipedia.org/wiki/IAN-R1');
createPopup(50.179425, 14.364952, 'Czechia', 'LVR-15 Research Reactor', 'http://cvrez.cz/en/infrastructure/research-reactor-lvr-15/');
createPopup(30.293056, 31.409028, 'Egypt', 'Experimental Training Research Reactor 1 & 2', 'https://en.wikipedia.org/wiki/ETRR-2');
createPopup(43.688447, 5.760781, 'France', 'Azur, Cabri, Eole, Masurca & Minerve Research Reactors', 'https://en.wikipedia.org/wiki/Cadarache');
createPopup(45.206099, 5.692817, 'France', 'Réacteur à Haut Flux Reasearch Reactor', 'https://fr.wikipedia.org/wiki/Réacteur_à_Haut_Flux');
createPopup(51.028611, 72694444, 'Germany', 'Ausbildungskernreaktor Dresden', 'https://tu-dresden.de/ing/maschinenwesen/iet/wket/ausbildungskernreaktor-akr-2/profil');
createPopup(53.404444, 10.426389, 'Germany', 'FRG-1 Research Reactor', 'https://second.wiki/wiki/forschungsreaktor_geesthacht');
createPopup(48.266, 11.676, 'Germany', 'Forschungsreaktor München II', 'https://www.frm2.tum.de/en/frm2/home/');
createPopup(49.992413, 8.237325, 'Germany', 'Forschungsreaktor Mainz', 'https://www.nuclear-chemistry.uni-mainz.de/reactor/');
createPopup(47.479013, 19.058363, 'Hungary', 'BME Nukleáris Technikai Intézet Reaktor', 'http://www.reak.bme.hu/en/training-reactor.html');
createPopup(47.488544, 18.953365, 'Hungary', 'KFKI Reaktor', 'https://www.aeki.kfki.hu/index.php?contentid=77&lang=en');
createPopup(19.162479, 73.133336, 'India', 'Bhabha Atomic Research Centre Reactors (4)', 'https://www.barc.gov.in/reactor/');
createPopup(12.571605, 80.173164, 'India', 'Indira Gandhi Centre for Atomic Research Reactors (2)', 'http://www.igcar.gov.in/index.html');
var circle = L.circle([-6.918, 107.615], {radius: 5000}).addTo(map).bindPopup("<b>Triga Mark III</b><br />Indonesia<br />");
circle.setStyle({color: 'green'});
// NEED LOCATION FOR TRIGA MARK III IN INDONESIA
createPopup(-7.7780155, 110.413848, 'Indonesia', 'Kartini Nuclear Research Reactor', 'https://www.batan.go.id/index.php/en/deputy-en/fasilitas-nuklir/143-kartini/1576-kartini-reactor-yogyakarta');
createPopup(-6.351963, 106.663339, 'Indonesia', 'Reaktor Serba Guna G.A. Siwabessy', 'https://www.batan.go.id/index.php/id/kedeputian/fasilitas-nuklir/144-gasiwabessy/153-reaktor-serba-guna-ga-siwabessy');
createPopup(35.73837, 51.388190, 'Iran', 'راکتور تحقیقاتی تهران (Tehran Research Reactor)', 'https://www.iranwatch.org/iranian-entities/teheran-nuclear-research-center-tnrc');
createPopup(33.725633, 51.725713, 'Iran', 'تأسیسات هسته‌ای نطنز (Natanz Nuclear Facility)', 'https://en.wikipedia.org/wiki/Nuclear_facilities_in_Iran#Natanz');
createPopup(31.899237, 34.702503, 'Israel', 'Soreq Nuclear Research Center', 'https://www.gov.il/he/departments/nuclear-research-center/govil-landing-page');
createPopup(31.00125, 35.144569, 'Israel', 'Negev Nuclear Research Center', 'https://en.wikipedia.org/wiki/Shimon_Peres_Negev_Nuclear_Research_Center');
createPopup(45.196705, 9.143113, 'Italy', 'Laboratorio Energia Nucleare Applicata', 'https://lena.unipv.it/en/the-reactor/');
createPopup(38.103589, 13.345927, 'Italy', 'AGN-201 "Costanza"', 'https://inis.iaea.org/search/37008214');
createPopup(42.040506, 12.301714, 'Italy', 'TAPIRO & TRIGA RC-1 in Casaccia', 'https://en.wikipedia.org/wiki/ENEA_(Italy)');
createPopup(18.006032, -76.746841, 'Jamaica', 'SLOWPOKE-2 Research Reactor', 'https://www.mona.uwi.edu/icens/slowpoke-2-research-reactor-jm-1');
createPopup(36.267966, 140.554173, 'Japan', 'Jōyō (常陽) Research Reactor', 'http://www.jaea.go.jp/04/o-arai/joyo/english/');
createPopup(36.266286, 140.54742, 'Japan', 'High-Temperature Engineering Test Reactor', 'http://httr.jaea.go.jp/eng/index.html');
createPopup(36.460530, 140.606431, 'Japan', 'Nuclear Safety Research Reactor', 'https://www.jaea.go.jp/english/04/ntokai/kasokuki/kasokuki_03.html');
createPopup(36.454775, 140.601204, 'Japan', 'Tōkai Japanese Research Reactor 3', 'https://jrr3.jaea.go.jp/jrr3e/index.htm');
createPopup(36.453975, 140.600672, 'Japan', 'Tōkai Japanese Research Reactor 4', 'https://www.jaea.go.jp/english/04/ntokai/kasokuki/kasokuki_02.html');
createPopup(34.649242, 135.587143, 'Japan', '近畿大学原子炉 (UTR－KINKI)', 'https://www.kindai.ac.jp/rd/research-center/aeri/facility/'); 
createPopup(34.387130, 135.347934, 'Japan', 'Kyoto Univeristy Critical Assembly', 'http://www.rri.kyoto-u.ac.jp/CAD/index-EN.html'); 
createPopup(32.462833, 35.972833, 'Jordan', 'Jordan Research and Training Reactor', 'https://jrtr.gov.jo/');
createPopup(43.352333, 77.143145, 'Kazakhstan', 'VVR-K', 'https://sci.kz/');
createPopup(43.606390, 51.282870, 'Kazakhstan', 'IVG-1M', 'https://www.nnc.kz/en/facilities/ivg1m.html');
createPopup(50.512284, 77.982967, 'Kazakhstan', 'IGR (Impulse Graphite Reactor)', 'https://www.nnc.kz/en/facilities/igr.html');
// https://gnssn.iaea.org/main/ANNuR/Activity%20Documents%20%20Public/Joint%20ANNuR%E2%80%93FNRBA%20Workshop%20on%20Milestones%20and%20Infrastructure%20for%20New%20Research%20Reactor%20Projects/Libya_presentation.pdf
// The Libyan reactor is supposedly shut down according to this document.
createPopup(2.909126, 101.769689, 'Malaysia', 'TRIGA Mark II Reasearch Reactor', 'https://www.nuclearmalaysia.gov.my/eng/rndActivities.php');
createPopup(19.289123, -99.379560, 'Mexico', 'TRIGA Mark III', 'https://www-pub.iaea.org/MTCD/Publications/PDF/SupplementaryMaterials/D482/LatinAmericaAndTheCaribbean.pdf');
createPopup(19.502660, -99.134444, 'Mexico', 'Nuclear-Chicago Modelo 9000', 'https://www.repositorionacionalcti.mx/recurso/oai:localhost:20.500.11845/801');
createPopup(51.991064, 4.381678, 'Kingdom of the Netherlands', 'Reactor Institute Delft', 'http://www.rid.tudelft.nl/');
createPopup(52.787952, 4.677495, 'Kingdom of the Netherlands', 'Petten Nuclear Reactor', 'https://www.nrg.eu/en/about/nuclear-research-facilities');
createPopup(39.797327, 125.755025, 'North Korea', 'IRT-2000 Nuclear Research Reactor', 'https://en.wikipedia.org/wiki/Nyongbyon_Nuclear_Scientific_Research_Center');
createPopup(33.653085, 73.259738, 'Pakistan', 'PARR-I Nuclear Research Reactor', 'https://paec.gov.pk/rnd/');
createPopup(33.653031, 73.258545, 'Pakistan', 'PARR-II Nuclear Research Reactor', 'https://paec.gov.pk/rnd/');
createPopup(32.009992, 72.172637, 'Pakistan', 'Plutonium Production Reactor', 'https://en.wikipedia.org/wiki/Khushab_Nuclear_Complex');
createPopup(32.008543, 72.172562, 'Pakistan', 'Plutonium Production Reactor', 'https://en.wikipedia.org/wiki/Khushab_Nuclear_Complex');
createPopup(32.001230, 72.172539, 'Pakistan', 'Plutonium Production Reactor', 'https://en.wikipedia.org/wiki/Khushab_Nuclear_Complex');
createPopup(32.020203, 72.207824, 'Pakistan', 'Plutonium Production Reactor', 'https://en.wikipedia.org/wiki/Khushab_Nuclear_Complex');
createPopup(-11.799460, -77.011983, 'Peru', 'RP-10 Research Reactor', 'https://www.ipen.gob.pe/index.php/ipen/infraestructura/centro-nuclear-racso'); //May take a while to load this website, but it should load after ~30 seconds.
createPopup(-12.085560, -77.009208, 'Peru', 'RP-0 Zero Power Training Reactor', 'https://www.ipen.gob.pe/index.php/ipen/infraestructura/sede-san-borja');
createPopup(52.123007, 21.344054, 'Poland', 'Maria Research Reactor', 'https://www.ncbj.gov.pl/en/o-nas/maria-research-reactor');
createPopup(38.812269, -9.094747, 'Portugal', 'RPI Research Reactor', 'http://www.ctn.tecnico.ulisboa.pt/facilities/uk_rpi.htm');
createPopup(44.953206, 24.977883, 'Romania', 'TRIGA Research Reactor', 'https://nuclear.ro/en/reactor-triga-si-laborator-de-examinare-post-iradiere-lepi/');
// Russia Power Plants + Research
createPopup(56.841582, 61.323003, 'Russia', 'Beloyarskaya', 'https://en.wikipedia.org/wiki/Beloyarsk_Nuclear_Power_Station');
createPopup(51.274414, 39.200914, 'Russia', 'Novovoronezh', 'https://en.wikipedia.org/wiki/Novovoronezh_Nuclear_Power_Plant');
createPopup(51.275433, 39.200850, 'Russia', 'Novovoronezh', 'https://en.wikipedia.org/wiki/Novovoronezh_Nuclear_Power_Plant');
createPopup(51.281903, 39.210247, 'Russia', 'Novovoronezh', 'https://en.wikipedia.org/wiki/Novovoronezh_Nuclear_Power_Plant');
createPopup(59.853094, 29.049397, 'Russia', 'Leningradskaya', 'https://en.wikipedia.org/wiki/Leningrad_Nuclear_Power_Plant');
createPopup(59.838956, 29.034119, 'Russia', 'Leningradskaya', 'https://en.wikipedia.org/wiki/Leningrad_Nuclear_Power_Plant');
createPopup(59.840719, 29.041486, 'Russia', 'Leningradskaya', 'https://en.wikipedia.org/wiki/Leningrad_Nuclear_Power_Plant');
createPopup(67.465556, 32.478889, 'Russia', 'Kolskaya', 'https://en.wikipedia.org/wiki/Kola_Nuclear_Power_Plant');
createPopup(68.050623, 166.539675, 'Russia', 'Bilibibskaya', 'https://en.wikipedia.org/wiki/Bilibino_Nuclear_Power_Plant');
createPopup(51.677506, 35.609044, 'Russia', 'Kurskaya', 'https://en.wikipedia.org/wiki/Kursk_Nuclear_Power_Plant');
createPopup(51.676514, 35.607211, 'Russia', 'Kurskaya', 'https://en.wikipedia.org/wiki/Kursk_Nuclear_Power_Plant');
createPopup(51.674911, 35.604183, 'Russia', 'Kurskaya', 'https://en.wikipedia.org/wiki/Kursk_Nuclear_Power_Plant');
createPopup(51.674344, 35.603239, 'Russia', 'Kurskaya', 'https://en.wikipedia.org/wiki/Kursk_Nuclear_Power_Plant');
createPopup(54.168150, 33.239683, 'Russia', 'Smolenskaya', 'https://en.wikipedia.org/wiki/Smolensk_Nuclear_Power_Plant');
createPopup(54.167397, 33.239061, 'Russia', 'Smolenskaya', 'https://en.wikipedia.org/wiki/Smolensk_Nuclear_Power_Plant');
createPopup(54.164897, 33.237044, 'Russia', 'Smolenskaya', 'https://en.wikipedia.org/wiki/Smolensk_Nuclear_Power_Plant');
createPopup(57.903331, 35.055978, 'Russia', 'Kalininskaya', 'https://en.wikipedia.org/wiki/Kalinin_Nuclear_Power_Plant');
createPopup(57.904383, 35.057406, 'Russia', 'Kalininskaya', 'https://en.wikipedia.org/wiki/Kalinin_Nuclear_Power_Plant');
createPopup(57.905642, 35.059153, 'Russia', 'Kalininskaya', 'https://en.wikipedia.org/wiki/Kalinin_Nuclear_Power_Plant');
createPopup(57.906742, 35.060661, 'Russia', 'Kalininskaya', 'https://en.wikipedia.org/wiki/Kalinin_Nuclear_Power_Plant');
createPopup(52.092269, 47.951139, 'Russia', 'Balakovskaya', 'https://en.wikipedia.org/wiki/Balakovo_Nuclear_Power_Plant');
createPopup(52.092856, 47.953253, 'Russia', 'Balakovskaya', 'https://en.wikipedia.org/wiki/Balakovo_Nuclear_Power_Plant');
createPopup(52.093417, 47.955364, 'Russia', 'Balakovskaya', 'https://en.wikipedia.org/wiki/Balakovo_Nuclear_Power_Plant');
createPopup(52.093997, 47.957472, 'Russia', 'Balakovskaya', 'https://en.wikipedia.org/wiki/Balakovo_Nuclear_Power_Plant');
createPopup(47.602982, 42.374613, 'Russia', 'Volgodonskaya', 'https://en.wikipedia.org/wiki/Rostov_Nuclear_Power_Plant');
createPopup(47.601665, 42.373583, 'Russia', 'Volgodonskaya', 'https://en.wikipedia.org/wiki/Rostov_Nuclear_Power_Plant');
createPopup(47.600493, 42.372639, 'Russia', 'Volgodonskaya', 'https://en.wikipedia.org/wiki/Rostov_Nuclear_Power_Plant');
createPopup(47.599263, 42.371523, 'Russia', 'Volgodonskaya', 'https://en.wikipedia.org/wiki/Rostov_Nuclear_Power_Plant');
createPopup(59.598880, 30.110579, 'Russia', 'PIK', 'http://www.pnpi.spb.ru/en/facilities/reactor-pik');
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
createPopup();
