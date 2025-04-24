const toggleAbout = document.getElementById('toggle-about');
const aboutText = document.querySelector('.expanded p');

// Toggle "Read More" in About Section
document.getElementById('toggle-about').addEventListener('click', function () {
  const expanded = document.getElementById('expanded');
  if (expanded.style.display === 'block') {
    expanded.style.display = 'none';
    this.innerHTML = '▼ Read More';
  } else {
    expanded.style.display = 'block';
    this.innerHTML = '▲ Show Less';
  }
});

// Scroll to Contact Section
document.getElementById('scroll-contact').addEventListener('click', function () {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Toggle Navbar on small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
  const links = document.getElementById('nav-links');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
  } else {
    links.style.display = 'flex';
  }
});


toggleAbout.addEventListener('click', () => {
  aboutText.style.display = aboutText.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
  toggleAbout.textContent = aboutText.style.display === 'block' ? 'Read Less' : 'Read More'; // Update button text
});

// Assuming we want to dynamically set the progress based on some logic or data fetched elsewhere
const containers = document.querySelectorAll('.progress-container');

function updateProgress(container) {
    const progressElement = container.querySelector('.progress');
    const text = container.querySelector('span');
    const percentage = 40; // Replace with actual dynamic data
    progressElement.style.width = `${percentage}%`;
    text.textContent = `${percentage}%`;
}

// Example: Update based on data-id (not fetching data dynamically here, this is illustrative)
containers.forEach(container => {
    const id = container.dataset.id;
    switch (id) {
        case "frontEnd":
            updateProgress(container, 40); // Front End Development
            break;
        // Add cases for other progress containers and their respective percentages
        // ...
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll('.skill-progress');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
});

function sendMessage(event) {
  event.preventDefault();
  alert("Message sent successfully!");
}
