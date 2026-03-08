const saveBtn = document.getElementById("saveLocation");
const findBtn = document.getElementById("findCar");

const latSpan = document.getElementById("lat");
const lonSpan = document.getElementById("lon");
const timeSpan = document.getElementById("time");

const result = document.getElementById("result");
const statusText = document.getElementById("status");

const mapsLink = document.getElementById("mapsLink");
const copyBtn = document.getElementById("copyCoords");

saveBtn.onclick = () => {

navigator.geolocation.getCurrentPosition(position => {

const lat = position.coords.latitude;
const lon = position.coords.longitude;
const time = new Date().toLocaleString();

localStorage.setItem("carLocation", JSON.stringify({lat,lon,time}));

statusText.innerText="Ubicación guardada";

});
};

findBtn.onclick = () => {

const saved = localStorage.getItem("carLocation");

if(!saved){
statusText.innerText="No hay ubicación guardada";
return;
}

const data = JSON.parse(saved);

latSpan.innerText=data.lat;
lonSpan.innerText=data.lon;
timeSpan.innerText=data.time;

mapsLink.href=`https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lon}`;

result.style.display="block";
};

copyBtn.onclick = () => {

const coords=`${latSpan.innerText},${lonSpan.innerText}`;

navigator.clipboard.writeText(coords);

statusText.innerText="Coordenadas copiadas";
};
