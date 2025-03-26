const donations = [
    {
        id: 1,
        name: "Jane Smith",
        amount: "€200.00",
        ribbonSrc: "img/ribbon.svg",
    },
    {
        id: 2,
        name: "Jane Smith",
        amount: "€200.00",
        ribbonSrc: "img/ribbon.svg",
    },
    {
        id: 3,
        name: "Jane Smith",
        amount: "€200.00",
        ribbonSrc: "img/ribbon.svg",
    },
    {
        id: 4,
        name: "Jane Smith",
        amount: "€200.00",
        ribbonSrc: "img/ribbon.svg",
    },
    {
        id: 5,
        name: "Jane Smith",
        amount: "€200.00",
        ribbonSrc: "img/ribbon.svg",
    },
];



// Initialize donation ticker
function initializeDonationTicker() {
    const ticker = document.getElementById('donationTicker');

    // Create and append donation items
    function appendDonationItems() {
        donations.forEach(donation => {
            const donationItem = document.createElement('div');
            donationItem.className = 'donation-item';
            donationItem.innerHTML = `
              <div class="relative">
                <img
                  src="${donation.ribbonSrc}"
                  alt="Donation ribbon"
                  class="donation-ribbon"
                />
              </div>
              <p class="donation-text">
                ${donation.name} just donated ${donation.amount}
              </p>
            `;
            ticker.appendChild(donationItem);
        });
    }

    // Append items twice for seamless scrolling
    appendDonationItems();
    appendDonationItems();
}

// Initialize fundraising stats
function initializeFundraisingStats() {
    // Update text content
    document.getElementById('currentlyRaised').textContent = `€${stats.currentlyRaised.toLocaleString()}`;
    document.getElementById('goal').textContent = `€${stats.goal.toLocaleString()}`;
    document.getElementById('peopleJoined').textContent = stats.peopleJoined.toLocaleString();

    // Update progress bar
    const progressPercentage = (stats.currentlyRaised / stats.goal) * 100;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
}

function initializeFundraisingStatsOnFundraisingPage() {
    // Update text content
    document.getElementById('raised').textContent = `€${stats.currentlyRaised.toLocaleString()}`;
    document.getElementById('target').textContent = `€${stats.goal.toLocaleString()}`;

    // Update progress bar
    const progressPercentage = (stats.currentlyRaised / stats.goal) * 100;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
}

// Video modal functionality
// Video modal functionality
function initializeVideoModal() {
    const modal = document.getElementById("videoModal");
    const playButton = document.getElementById("playButton");
    const iframe = document.querySelector(".modal-iframe");

    playButton.addEventListener("click", () => {
        modal.classList.add("active");
        // Ensure video autoplays when modal opens
        iframe.src = "https://www.youtube.com/embed/69BTi8s2hCQ";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            // Stop video by removing autoplay parameter
            iframe.src = "https://www.youtube.com/embed/69BTi8s2hCQ";
        }
    });

    // Add escape key support
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            modal.classList.remove("active");
            // Stop video by removing autoplay parameter
            iframe.src = "https://www.youtube.com/embed/69BTi8s2hCQ";
        }
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeDonationTicker();
    initializeFundraisingStats();
    initializeVideoModal();
    initializeFundraisingStatsOnFundraisingPage()
});
