
document.addEventListener('DOMContentLoaded', function () {
    fetchData();
});
function fetchData() {
    fetch('https://micbrucecounty22f.onrender.com/get-predict')
        .then(response => response.json())
        .then(data => {
            displayEnvironmentalData(data[0]); // Assuming the first item contains relevant data
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayEnvironmentalData(data) {
    // Assuming you've structured your IDs as shown above
    document.getElementById('airPressure1').textContent = data['air_pressure_at_mean_sea_level (Pa)'].toFixed(2);
    document.getElementById('waveHeight1').textContent = data['sea_surface_wave_significant_height (m)'].toFixed(2);
    document.getElementById('airTemp1').textContent = (data['air_temperature (K)'] - 140.15).toFixed(2);
    document.getElementById('windSpeed1').textContent = data['wind_speed (m s-1)'].toFixed(2);
    document.getElementById('waterTemp1').textContent = data['sea_water_temperature_1 (K)'].toFixed(2);
    document.getElementById('waterVelocity1').textContent = data['total_water_velocity_1'].toFixed(2);

    // Repeat the same for other members if different data is required
}