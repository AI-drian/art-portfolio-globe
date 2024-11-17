// Initialize the globe
const globe = Globe()(document.getElementById('globe-container'))
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg') // Add a dark earth texture
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Add 3D texture
  .backgroundColor('#000000') // Black background
  .showAtmosphere(true) // Enable atmosphere
  .atmosphereColor('#87ceeb') // Light blue atmosphere
  .atmosphereAltitude(0.25); // Set atmosphere height

// Add automatic rotation
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.5;

// Console log when ready
console.log('The globe is up and spinning!');

function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.style.display = menuLinks.style.display === 'block' ? 'none' : 'block';
}
