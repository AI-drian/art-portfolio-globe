const muralLocations = [
  {
    lat: 55.592111,
    lng: 13.011901,
    name: "Carl-Bertil",
    description: "2020",
    image: "images/pieces/Cartbertil.jpg"
  },
  {
    lat: 59.388171,
    lng: 17.903920,
    name: "Blue-Hair",
    description: "2021",
    image: "images/pieces/Bluehair.jpg"
  },
  {
    lat: 56.033995,
    lng: 12.707318,
    name: "Pink-Panther",
    description: "2021",
    image: "images/pieces/Pinkpanther.jpg"
  },
  {
    lat: 55.592111,
    lng: 13.011901,
    name: "Herman Hedning",
    description: "2020",
    image: "images/pieces/Hermanhedning.jpg"
  },
  {
    lat: 55.592100,
    lng: 13.011901,
    name: "Fruits",
    description: "2021",
    image: "images/pieces/Fruitvan.jpg"
  },
  {
    lat: 55.601222,
    lng: 13.005350,
    name: "Rent out the empty rooms in your mind",
    description: "2020",
    image: "images/pieces/Rentouttheemptyroomsinyourmind.jpg"
  },
  {
    lat: 55.592111,
    lng: 13.011981,
    name: "Skeletor",
    description: "2021",
    image: "images/pieces/Skeletor.jpg"
  },
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

function openPopup({ name, description, image }) {
  // Populate the popup with data
  document.getElementById("popup-title").innerText = name;
  document.getElementById("popup-description").innerText = description;
  document.getElementById("popup-image").src = image;

  // Show the popup
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

function closePopup() {
  // Hide the popup
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
}

// Add click event to globe points
globe.onPointClick((point) => {
  if (point) {
    openPopup(point); // Open popup with point data
  } else {
    console.log("No point clicked");
  }
});

