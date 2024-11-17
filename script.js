const muralLocations = [
  { lat: 40.73061, lng: -73.935242, name: "Mural 1", description: "A vibrant mural in New York City" },
  { lat: 48.8566, lng: 2.3522, name: "Mural 2", description: "A stunning artwork in Paris" },
  { lat: 35.6895, lng: 139.6917, name: "Mural 3", description: "A colorful piece in Tokyo" },
];

// Initialize the globe
const globe = Globe()(document.getElementById('globe-container'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg') // Add a dark earth texture
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Add 3D texture
  .backgroundColor('#000000') // Black background
  .showAtmosphere(true) // Enable atmosphere
  .atmosphereColor('#87ceeb') // Light blue atmosphere
  .atmosphereAltitude(0.15); // Set atmosphere height

// Stop the globe spinning on hover
const controls = globe.controls(); // Get the controls for the globe
const container = document.getElementById('globe-container');

// Desktop: Pause rotation on hover
container.addEventListener('mouseover', () => {
  controls.autoRotate = false;
});
container.addEventListener('mouseout', () => {
  controls.autoRotate = true;
});

// Mobile: Pause rotation on touch
container.addEventListener('touchstart', () => {
  controls.autoRotate = false;
});
container.addEventListener('touchend', () => {
  controls.autoRotate = true;
});

// Add automatic rotation
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.5;

// Console log when ready
console.log('The globe is up and spinning!');

// Plot mural locations
globe.pointsData(muralLocations)
  .pointAltitude(0.05) // Height of the points
  .pointColor(() => 'orange') // Color of the points
  .pointRadius(0.5); // Size of the points

// Add interactivity: Show tooltip on hover
globe.pointLabel(({ name, description }) => `
  <div style="background: white; padding: 5px; border-radius: 5px; color: black; text-align: center;">
    <strong>${name}</strong><br>${description}
  </div>
`);


function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
}
