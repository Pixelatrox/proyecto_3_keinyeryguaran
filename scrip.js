
async function buscarClima() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric');
    return await response.json();
}

async function mostrarClima() {
    const informacionClima = await buscarClima();
    const clima = informacionClima.weather[0].main;
    const descripcion = informacionClima.weather[0].description;
    const temperatura = informacionClima.main.temp;
    const sens_term = informacionClima.feels_like;
    const humedad = informacionClima.main.humidity;
    const presion = informacionClima.main.pressure;
    const latitud = informacionClima.coord.lat;
    const longitud = informacionClima.coord.lon;
    const icono = informacionClima.weather[0].icon;

    const iconoUrl = `https://openweathermap.org/img/wn/${icono}.png`;

    document.getElementById('clima').innerText = `Clima: ${clima}`;    
    document.getElementById('descripcion').innerText = `Descripción: ${descripcion}`;
    document.getElementById('temperatura').innerText = `Temperatura: ${temperatura}°C`;
    document.getElementById('sensacionTermica').innerText = `Sensación Térmica: ${sens_term}°C`;
    document.getElementById('humedad').innerText = `Humedad: ${humedad}%`;
    document.getElementById('presion').innerText = `Presión: ${presion} hPa`;
    document.getElementById('latitud').innerText = `Latitud: ${latitud}`;
    document.getElementById('longitud').innerText = `Longitud: ${longitud}`;
    document.getElementById('icono').src = iconoUrl;
}

mostrarClima();