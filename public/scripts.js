const vehicles = [
    { name: 'Maruti Suzuki Alto', topSpeed: 140, fuelEfficiency: 22.05, fuelCapacity: 35, maxRange: 771.75 },
    { name: 'Hyundai i20', topSpeed: 180, fuelEfficiency: 20.35, fuelCapacity: 37, maxRange: 753.05 },
    { name: 'Tata Nexon', topSpeed: 180, fuelEfficiency: 17.57, fuelCapacity: 44, maxRange: 772.68 },
    { name: 'Honda City', topSpeed: 180, fuelEfficiency: 17.8, fuelCapacity: 40, maxRange: 712.00 },
    { name: 'Mahindra Thar', topSpeed: 155, fuelEfficiency: 15.2, fuelCapacity: 57, maxRange: 866.40 },
    { name: 'Toyota Innova Crysta', topSpeed: 179, fuelEfficiency: 11.25, fuelCapacity: 55, maxRange: 618.75 },
    { name: 'Kia Seltos', topSpeed: 170, fuelEfficiency: 16.8, fuelCapacity: 50, maxRange: 840.00 },
    { name: 'Renault Kwid', topSpeed: 150, fuelEfficiency: 22.3, fuelCapacity: 28, maxRange: 624.40 },
    { name: 'Ford EcoSport', topSpeed: 182, fuelEfficiency: 15.9, fuelCapacity: 52, maxRange: 826.80 },
    { name: 'Tata Tiago', topSpeed: 150, fuelEfficiency: 23.84, fuelCapacity: 35, maxRange: 834.40 }
  ];
  
  document.getElementById('calculate-btn').addEventListener('click', () => {
    const distance = parseFloat(document.getElementById('distance').value);
    const selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
  
    const vehicle = vehicles.find(v => v.name === selectedVehicle);
    if (vehicle) {
      const travelTime = distance / vehicle.topSpeed;
      const fuelConsumption = distance / vehicle.fuelEfficiency;
      const outOfRange = distance > vehicle.maxRange;
  
      document.getElementById('travel-time').textContent = `Time to travel: ${travelTime.toFixed(2)} hours`;
      document.getElementById('fuel-consumption').textContent = outOfRange
        ? 'Out of range'
        : `Fuel consumption: ${fuelConsumption.toFixed(2)} liters`;
    }
  });
  
  document.getElementById('compare-btn').addEventListener('click', () => {
    const distance = parseFloat(document.getElementById('distance').value);
    const table = document.getElementById('comparison-table');
    table.innerHTML = `
      <tr>
        <th>Vehicle</th>
        <th>Travel Time (hours)</th>
        <th>Fuel Consumption (liters)</th>
        <th>Status</th>
      </tr>
    `;
  
    vehicles.forEach(vehicle => {
      const travelTime = distance / vehicle.topSpeed;
      const fuelConsumption = distance / vehicle.fuelEfficiency;
      const outOfRange = distance > vehicle.maxRange;
      const status = outOfRange ? 'Out of range' : 'In range';
  
      table.innerHTML += `
        <tr>
          <td>${vehicle.name}</td>
          <td>${travelTime.toFixed(2)}</td>
          <td>${fuelConsumption.toFixed(2)}</td>
          <td>${status}</td>
        </tr>
      `;
    });
  });
  