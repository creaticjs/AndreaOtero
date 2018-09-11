var infoEquipos = [
    {
        nombre: "Atlético Huila",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Escudo_de_Atl%C3%A9tico_Huila.svg/1200px-Escudo_de_Atl%C3%A9tico_Huila.svg.png",
        PJ: 10,
        G1: 8,
        E: 1,
        P: 1,
        G: "22:3",
        Pts: 25,
        categoria: "Grupo A",
    },
    {
        nombre: "Tolima",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Tolima_Campe%C3%B3n_2018.png/1200px-Tolima_Campe%C3%B3n_2018.png",
        PJ: 10,
        G1: 4,
        E: 4,
        P: 2,
        G: "13:11",
        Pts: 16,
        categoria: "Grupo A",
    },
    {
        nombre: "Alianza Petrolera",
        urlImage: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/LogoAlianza.svg/1200px-LogoAlianza.svg.png",
        PJ: 10,
        G1: 4,
        E: 3,
        P: 3,
        G: "10:10",
        Pts: 15,
        categoria: "Grupo A",
    },
    {
        nombre: "Cúcuta",
        urlImage: "http://3.bp.blogspot.com/-mLr6bXpougg/UuRwx_fkMlI/AAAAAAABaIk/mwqNdxlbl2U/s1600/cd.jpg",
        PJ: 10,
        G1: 3,
        E: 4,
        P: 3,
        G: "14:17",
        Pts: 13,
        categoria: "Grupo A",
    },
    {
        nombre: "Bucaramanga",
        urlImage: "http://capsulas.com.co/wp-content/uploads/2013/12/atletico_bucaramanga.gif",
        PJ: 10,
        G1: 2,
        E: 1,
        P: 7,
        G: "7:14",
        Pts: 7,
        categoria: "Grupo A",
    },
    {
        nombre: "Real Santander",
        urlImage: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Racing_de_Santander_logo.svg/1200px-Racing_de_Santander_logo.svg.png",
        PJ: 10,
        G1: 1,
        E: 3,
        P: 6,
        G: "11:22",
        Pts: 6,
        categoria: "Grupo A",
    },
    {
        nombre: "Santa Fe",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Escudo_de_Independiente_Santa_Fe.svg/1200px-Escudo_de_Independiente_Santa_Fe.svg.png",
        PJ: 10,
        G1: 8,
        E: 1,
        P: 1,
        G: "37:6",
        Pts: 25,
        categoria: "Grupo B",
    },
    {
        nombre: "Patriotas",
        urlImage: "https://www.boyacaradio.com/imagenes/fotos_noticias/z0KMTTIF.jpg",
        PJ: 10,
        G1: 6,
        E: 2,
        P: 2,
        G: "22:8",
        Pts: 20,
        categoria: "Grupo B",
    },
    {
        nombre: "Fortaleza",
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/FortalezaEsporteClube.png/1200px-FortalezaEsporteClube.png",
        PJ: 10,
        G1: 4,
        E: 4,
        P: 2,
        G: "14:13",
        Pts: 16,
        categoria: "Grupo B",
    },
    {
        nombre: "La Equidad",
        urlImage: "http://www.equidadclubdeportivo.coop/wp-content/uploads/2016/04/icono.png",
        PJ: 10,
        G1: 4,
        E: 3,
        P: 3,
        G: "11:10",
        Pts: 15,
        categoria: "Grupo B",
    }
];

function getRequestClasificacion(){
    var cTable = document.getElementById('cuerpoTabla');
var auxT = "";
infoEquipos.forEach(function(equipo,index){
    auxT +="<tr><td>"+equipo.nombre+"</td>";
    auxT +="<td>"+equipo.PJ+"</td>";
    auxT +="<td>"+equipo.G1+"</td>";
    auxT +="<td>"+equipo.E+"</td>";
    auxT +="<td>"+equipo.P+"</td>";
    auxT +="<td>"+equipo.G+"</td>";
    auxT +="<td>"+equipo.Pts+"</td></tr>";
});
cTable.innerHTML = auxT;
document.getElementById('clasificacion').style.visibility = 'visible';
document.getElementById('equipos').style.visibility= 'hidden';
}

function getRequestEquipos() {
    var equipos ="";
    var equipos2 ="";
    infoEquipos.forEach(function (item) { //renderizar equipos en html
        if (item.categoria === "Grupo A") {
            equipos += "<div class='col-md-3'>" + "<div style='margin:10px' class='card'>" + 
            "<h4 style='text-align: center; color:black'>" + item.nombre + "</h4>" + "<img src='" + item.urlImage + "' class='img-responsive' width='220' height='220'>" 
            + "</div>"+ "</div>"
            document.getElementById("contenedor").innerHTML = equipos;
        }
    });
    
    infoEquipos.forEach(function (item) { //renderizar equipos en html
        if (item.categoria === "Grupo B") {
            equipos2 += "<div class='gallery_product col-lg-3 col-md-3 col-sm-3 col-xs-6 filter hdpe'>" + "<div class='card'>" + 
            "<h4 style='text-align:center; color:black'>" + item.nombre + "</h4>" + "<img src='" + item.urlImage + "' class='img-responsive' width='220' height='220'>" 
           + "</div>"+ "</div>"
           document.getElementById("contenedor2").innerHTML = equipos2;
        }
    });
    document.getElementById('equipos').style.visibility= 'visible';
    document.getElementById('clasificacion').style.visibility = 'hidden';
}