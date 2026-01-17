// Project data array
const projects = [
    {
        id: "impulse",
        title: "IMPULSE",
        subtitle: "The Next-Gen FPS Competitive Multiplayer Shooter",
        description: "An exclusive PC FPS featuring tactical combat, skill-based gunplay, and next-gen graphics for an immersive competitive experience.",
        icon: "images/Games/Impulse/icon.png",
        thumbnail: "images/Games/Impulse/Thumbnail.png",
        //tags: ["FPS"],
        tech: ["Unity", "C#", "AWS-Powered Servers", "Multiplayer", "Opsive"],
        media: [
            { type: "image", url: "images/Games/Impulse/Thumbnail.png" },
            // { type: "video", url: "images/Games/Impulse/ImpulseGameplay.mp4" }
            { type: "video", url: "https://www.youtube.com/watch?v=Ea8v3A86cv0" }
        ],
        // features: [
        //     "Realistic weapon mechanics",
        //     "Competitive ranking system",
        //     "Multiple game modes",
        //     "Dedicated server infrastructure"
        // ],
        role: "Lead Developer",
        //challenges: "Optimizing netcode for 60Hz gameplay, implementing realistic ballistics system"
    },
    {
        id: "champions-arena",
        title: "Champions Arena",
        subtitle: "MOBA-style Third-Person Shooter (TPS)",
        description: "Featuring 1v1, 2v2, and 3v3 battles with runtime map loading and three unique maps for dynamic gameplay.",
        icon: "images/Games/ChampionsArena/icon.webp",
        thumbnail: "images/Games/ChampionsArena/Thumbnail.png",
        //tags: ["MOBA", "Shooter"],
        tech: ["Unity", "C#", "Google Ads", "Firebase", "PlayFab"],
        media: [
            { type: "image", url: "images/Games/ChampionsArena/Thumbnail.png" },
            { type: "image", url: "images/Games/ChampionsArena/Thumbnail.png" }
        ],
        role: "Lead Developer"
    },
    {
        id: "6ball-cricket",
        title: "6Ball Cricket",
        subtitle: "Real-time multiplayer 3D cricket game",
        description: "Features 1-over (6-ball) gameplay with an exciting tournament system for competitive matches.",
        icon: "images/Games/6Ball_Cricket/icon.png",
        thumbnail: "images/Games/6Ball_Cricket/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebSocket", "Payment Gateway", "Firebase", "Facebook Integration"],
        media: [
            { type: "image", url: "images/Games/6Ball_Cricket/Thumbnail.png" },
            { type: "image", url: "images/Games/6Ball_Cricket/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "tank.io-demo",
        title: "Tank.io - Demo",
        subtitle: "Multiplayer tank battle game",
        description: "Features real-time combat and strategic gameplay with multiplayer functionality.",
        icon: "images/Games/Tank.io/icon.jpg",
        thumbnail: "images/Games/Tank.io/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Photon PUN", "Multiplayer"],
        media: [
            { type: "image", url: "images/Games/Tank.io/Thumbnail.png" },
            { type: "image", url: "images/Games/Tank.io/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "step-out-and-learn",
        title: "Step Out And Learn",
        subtitle: "Location-Based Educational Project",
        description: "A teacher assigns an activity to a student and can track the student's location in real time during the activity.",
        icon: "images/Games/StepOutAndLearn/icon.jpg",
        thumbnail: "images/Games/StepOutAndLearn/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Socket.io", "Maps API"],
        media: [
            { type: "image", url: "images/Games/StepOutAndLearn/Thumbnail.png" },
            { type: "image", url: "images/Games/StepOutAndLearn/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "weapon-craft-run",
        title: "Weapon Craft Run and Guns Hero",
        subtitle: "Weapon Craft Run – Shoot, Collect, and Build the Ultimate Firearm",
        description: "Shoot the obstacles & doors, Collect the chargers which you load, Upgrade your gun and evolve!",
        icon: "images/Games/Weapon_Craft/icon.webp",
        thumbnail: "images/Games/Weapon_Craft/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Ad Mediation"],
        media: [
            { type: "image", url: "images/Games/Weapon_Craft/Thumbnail.png" },
            { type: "image", url: "images/Games/Weapon_Craft/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "color-rings",
        title: "Tic Tac Toe Pro : Color Rings",
        subtitle: "",
        description: "Step into a colorful world of strategy with Color Rings Tic Tac Toe: 2 3 4 Multiplayer XOXO! Whether you’re challenging the CPU, playing with a friend, or joining a 4-player online match, this game is all about smart moves and quick thinking. It’s easy to learn, fun for all ages, and perfect for players who love a strategic twist on the classic Tic Tac Toe!.",
        icon: "images/Games/Color_Ring_Puzzle/icon.webp",
        thumbnail: "images/Games/Color_Ring_Puzzle/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN"],
        media: [
            { type: "image", url: "images/Games/Color_Ring_Puzzle/Thumbnail.webp" },
            { type: "image", url: "images/Games/Color_Ring_Puzzle/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "crokinole",
        title: "Crokinole Mobile : Carrom Board",
        subtitle: "",
        description: "Dive into the captivating world of Crokinole, a classic Canadian multiplayer board game dating back to the 1860s, now beautifully reimagined for your mobile device. Experience the thrill of this circular track-based new carrom game, where precision and strategy reign supreme. Challenge players from every corner of the globe, compete against your friends, or host private matches for an unforgettable tabletop gaming experience.",
        icon: "images/Games/Crokinole_Mobile/icon.webp",
        thumbnail: "images/Games/Crokinole_Mobile/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN"],
        media: [
            { type: "image", url: "images/Games/Crokinole_Mobile/Thumbnail.webp" },
            { type: "image", url: "images/Games/Crokinole_Mobile/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "ludo-speed",
        title: "Ludo Speed - Dice Game Fun!",
        subtitle: "",
        description: "Get ready to relive the fun of the classic Ludo game right on your phone! Challenge your friends, family, or the computer in this exciting board game! 🎯 <br> Ludo King follows the traditional rules and the old school look of the Ludo game. Just like the kings and queens of India's golden age, your fate depends on the roll of the Ludo's dice and your strategy of moving the tokens effectively.",
        icon: "images/Games/Ludo_Speed/icon.webp",
        thumbnail: "images/Games/Ludo_Speed/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads"],
        media: [
            { type: "image", url: "images/Games/Ludo_Speed/Thumbnail.webp" },
            { type: "image", url: "images/Games/Ludo_Speed/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "mpl-cricket",
        title: "MPL Cricket",
        subtitle: "Madhya Pradesh League: Scindia Cup Cricket",
        description: "A franchise-based professional T20 cricket league game featuring realistic gameplay mechanics and multiple game modes.",
        icon: "images/Games/MPL_Cricket/icon.png",
        thumbnail: "images/Games/MPL_Cricket/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Gameplay Mechanics", "League System"],
        media: [
            { type: "image", url: "images/Games/MPL_Cricket/Thumbnail.png" },
            { type: "image", url: "images/Games/MPL_Cricket/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "ludo-cash",
        title: "Ludo Cash - Win Real Money",
        subtitle: "",
        description: "Get ready to relive the fun of the classic Ludo game right on your phone! Challenge your friends, family, or the computer in this exciting board game! 🎯 <br> Step into the world of Ludo Cash - Win Real Money, where your skills can earn you real cash prizes! Compete in thrilling tournaments and win cash prizes without spending a dime. No deposits, subscriptions, or in-app purchases required—just pure fun and rewards!",
        icon: "images/Games/Ludo_Cash/icon.webp",
        thumbnail: "images/Games/Ludo_Cash/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "ironSource", "Socket.io"],
        media: [
            { type: "image", url: "images/Games/Ludo_Cash/Thumbnail.webp" },
            { type: "image", url: "images/Games/Ludo_Cash/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "perfect-duet",
        title: "Perfect Duet: Kitty Music Beat",
        subtitle: "Catch the Beat with Every Paw-some Note!",
        description: "😺 Get ready to purr along with the cutest musical adventure! 😻 <br> Join adorable cats as they sing and dance their way through exciting musical levels! 🐾 Tap to the rhythm 🎵 and help the kitties hit every note 🎶 in this pawsome, relaxing, and fun game. 🎸🎤",
        icon: "images/Games/Perfect_Duet/icon.webp",
        thumbnail: "images/Games/Perfect_Duet/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads"],
        media: [
            { type: "image", url: "images/Games/Perfect_Duet/Thumbnail.webp" },
            { type: "image", url: "images/Games/Perfect_Duet/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "star-square",
        title: "Star Square - Multiplayer Game",
        subtitle: "Connect the Dots, Chat, and Conquer the Board!",
        description: "Play Star Square is with the online real players, This is a new Board Game. This is basically DOT (🔵) CONNECTING SQUARE MAKING GAME. Real time Chat🗨️/ Fantastic Emojis😍/ real time Talk 📞/ Real time multiplayer (more than 1 player, just like ludo, Carrom ) on this board game. THIS IS THE BEST LUDO ALTERNATIVE GAME.",
        icon: "images/Games/Star_Square/icon.webp",
        thumbnail: "images/Games/Star_Square/Thumbnail.jpg",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN", "Real-Time Chat", "Multiplayer"],
        media: [
            { type: "image", url: "images/Games/Star_Square/Thumbnail.jpg" },
            { type: "youtube", url: "https://www.youtube.com/embed/PtjGxmFIM5I" }
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "melody-rush-music",
        title: "Melody Rush Music Game",
        subtitle: "Chase the Path. Beat the Score. Feel the Music.",
        description: "Melody Rush is a free game that relaxes your mind using the most peaceful sound. Just go with the flow. The ultimate fun of this game is that you can't predict the path location. The path appears on random spots, you have to move the ball to the corresponding location. Melody Rush is a kind of endless game where you continue to move forward, the path will keep appearing along the way. If you skip any path, your game is over. Make the highest score and try to beat your own highest score.",
        icon: "images/Games/Melody_Rush_Music/icon.webp",
        thumbnail: "images/Games/Melody_Rush_Music/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Play Games", "Google Ads"],
        media: [
            { type: "image", url: "images/Games/Melody_Rush_Music/Thumbnail.webp" },
            { type: "image", url: "images/Games/Melody_Rush_Music/Thumbnail.webp" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "burger-delivery-simulator",
        title: "Burger Delivery Simulator",
        subtitle: "Fast-Paced Burger Delivery Adventure!",
        description: "In Burger Delivery Simulator, you step into the shoes of a burger delivery person racing against the clock to deliver delicious burgers to hungry customers. Navigate through busy streets, avoid obstacles, and make quick decisions to ensure your deliveries are on time. Upgrade your vehicle, unlock new routes, and master the art of fast food delivery in this exciting and fast-paced simulator game!",
        icon: "images/Games/Burger_Delivery_Simulator/icon.png",
        thumbnail: "images/Games/Burger_Delivery_Simulator/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Desktop and Console", "Gameplay Mechanics"],
        media: [
            { type: "image", url: "images/Games/Burger_Delivery_Simulator/Thumbnail.png" },
            { type: "image", url: "images/Games/Burger_Delivery_Simulator/Thumbnail.png" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "arrow-duel",
        title: "Arrow Duel",
        subtitle: "Aim, Power Up, and Outsmart Your Opponent in Epic Arrow Duels!",
        description: "Archery is the thrilling skill of shooting arrows with precision using a bow. In this exciting duel game, your goal is to hit your opponent’s target before they hit yours. The player who reaches 10 hits/score first wins the duel. <br><br> Score 5 points to advance to the next level and face greater challenges. <br><br> During the game, special power-ups may appear to give you an advantage: <br> Arrow: Shoot double arrows at once, hitting your opponent twice! <br> Bomb: Your arrow explodes on impact, dealing extra damage. <br> Freeze: Temporarily freeze your opponent for a few seconds, giving you an edge. <br><br> Additionally, wind may appear randomly, blowing left or right for a few seconds and affecting the arrow’s trajectory. <br><br> Aim carefully, use your powers wisely, and master the wind to become the ultimate archery champion!",
        icon: "images/Games/Arrow_Duel/icon.png",
        thumbnail: "images/Games/Arrow_Duel/Thumbnail.jpg",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebGL", "Photon Fusion-2", "WebSocket"],
        media: [
            { type: "image", url: "images/Games/Arrow_Duel/Thumbnail.jpg" },
            { type: "video", url: "images/Games/Arrow_Duel/Gameplay_video.mp4" },
        ],
        role: "Lead Developer, Designer, Animator",
        challenges: ""
    },
    {
        id: "traffic-dash",
        title: "Traffic Dash",
        subtitle: "Speed Through Traffic and Avoid Collisions in This Thrilling Dash!",
        description: "Traffic Dash is a first-person motorcycle driving game that puts you directly on the bike for a fast and immersive ride. Races are goal-based, requiring players to complete the race before the timer ends by reaching the finish line. The game focuses on smooth highway racing, realistic bike sounds, and detailed visuals. Players speed through traffic, overtake vehicles closely, and maintain control at high speeds. Traffic Dash supports single-player and multiplayer gameplay, allowing players to compete while mastering timing, speed, and precision on busy roads.",
        icon: "images/Games/Traffic_Dash/icon.png",
        thumbnail: "images/Games/Traffic_Dash/Thumbnail.jpg",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebGL", "Photon Fusion-2", "WebSocket"],
        media: [
            { type: "image", url: "images/Games/Traffic_Dash/Thumbnail.jpg" },
            { type: "video", url: "images/Games/Traffic_Dash/Gameplay_video.mp4" },
        ],
        role: "Lead Developer, Designer",
        challenges: ""
    },
    // {
    //     id: "highway-rivals",
    //     title: "Highway Rivals",
    //     subtitle: "Speed Through Traffic and Avoid Collisions in This Thrilling Dash!",
    //     description: "Highway Rivals is a fast-paced car racing game that puts you behind the wheel for intense highway action. Races are goal-based, requiring players to reach the finish line before the timer ends. The game emphasizes smooth driving, high-speed overtakes, and detailed environments as you weave through traffic on busy highways. Precision, timing, and control are key to winning each race. Highway Rivals features both single-player and multiplayer modes, allowing players to race solo or compete against others in thrilling highway battles.",
    //     icon: "images/Games/Highway_Rivals/icon.png",
    //     thumbnail: "images/Games/Highway_Rivals/Thumbnail.jpg",
    //     //tags: ["Sports", "Multiplayer"],
    //     tech: ["Unity", "C#", "WebGL", "Photon Fusion-2", "WebSocket"],
    //     media: [
    //         { type: "image", url: "images/Games/Highway_Rivals/Thumbnail.jpg" },
    //         { type: "video", url: "images/Games/Highway_Rivals/Gameplay_video.mp4" },
    //     ],
    //     role: "Lead Developer, Designer",
    //     challenges: ""
    // },
    {
        id: "tag-fall",
        title: "Tag Fall",
        subtitle: "Catch, Run, Dodge – Don’t Get Tagged!",
        description: "Dive into the ultimate autumn chase! In Tag Fall, sprint, dodge, and outsmart your opponents across vibrant fall landscapes. Grab exciting power-ups, navigate seasonal obstacles, and stay on your toes—every round is a race against the clock. Will you be the fastest, the cleverest, or the luckiest? But beware: when the timer runs out, the tagger loses! <br><br> Simply walk into another character to tag them, you will see a white arrow above the player who is on!",
        icon: "images/Games/Tag_Fall/icon.png",
        thumbnail: "images/Games/Tag_Fall/Thumbnail.jpg",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebGL", "Photon Fusion-2", "WebSocket"],
        media: [
            { type: "image", url: "images/Games/Tag_Fall/Thumbnail.jpg" },
            { type: "video", url: "images/Games/Tag_Fall/Gameplay_video.mp4" },
        ],
        role: "Lead Developer",
        challenges: ""
    },
    {
        id: "water-ring-toss",
        title: "Water Ring Toss",
        subtitle: "",
        description: "A cozy simulator of the Water Ring Toss toy from everyone's childhood. Relax while enjoying this frustrating game. Get all the rings on the cone and win! <br><br> Control the pressure of water, just like the real thing, and get all of the rings on the cone. Water physics are simulated to make it feel authentic. <br><br> Local two player co-op also available. Each player gets a toy and both race to win! <br><br> List of features: <br> Fluid physics <br> Two player Ai and co-op <br> Cozy atmosphere and calm music",
        icon: "images/Games/Water_Ring_Toss/icon.png",
        thumbnail: "images/Games/Water_Ring_Toss/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebGL", "Photon Fusion-2", "WebSocket"],
        media: [
            { type: "image", url: "images/Games/Water_Ring_Toss/Thumbnail.png" },
            { type: "image", url: "images/Games/Water_Ring_Toss/Thumbnail.png" },
            // { type: "video", url: "images/Games/Water_Ring_Toss/Gameplay_video.mp4" },
        ],
        role: "Lead Developer",
        challenges: ""
    }
    // Continue with all other projects...
];

// Function to generate project cards
// Generate project cards with more game-focused elements
function generateProjectCards() {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear existing content

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.projectId = project.id;
        card.innerHTML = `
            <img class="game-icon" src="${project.icon}" alt="${project.title} Icon">
            <div class="project-image-container">
                <div class="project-image" style="background-image: url('${project.thumbnail}')"></div>
                <div class="game-tags">
                    ${project.tech.slice(0, 3).map(tech =>
            `<span class="tech-item">${tech}</span>`
        ).join('')}
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <p class="project-description">
                ${
                    project.description.split(' ').length > 25
                      ? project.description.split(' ').slice(0, 25).join(' ') + '...'
                      : project.description
                  }
                </p>
                </div>
                `;
//                 <button class="view-details" data-project-index="${index}">
//     VIEW DETAILS <i class="fas fa-chevron-right"></i>
// </button>

        container.appendChild(card);
    });

    // Update project count in HUD
    //document.getElementById('project-count').textContent = projects.length;
}

// Add this after generateProjectCards() call
document.addEventListener('DOMContentLoaded', function () {
    // Generate cards first
    generateProjectCards();

    // Then add event listeners to all buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const projectIndex = this.getAttribute('data-project-index');
            openProjectModal(parseInt(projectIndex));
        });
    });
});


// Modal functionality
let currentProjectIndex = 0;
let currentVideoElement = null;
let isVideoPlaying = false;

function openProjectModal(projectIndex) {
    const project = projects[projectIndex];
    currentProjectIndex = projectIndex;

    const modal = document.getElementById('projectModal');
    const mediaContainer = document.getElementById('modal-media-container');
    const descriptionContainer = document.getElementById('modal-description');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    // Reset video state
    isVideoPlaying = false;
    if (currentVideoElement) {
        currentVideoElement.src = '';
        currentVideoElement = null;
    }

    // Clear previous content
    mediaContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    // Add media (first item by default)
    if (project.media && project.media.length > 1) { // Only show thumbnails if multiple media

        updateMediaDisplay(project.media[0]);

        project.media.forEach((media, index) => {
            const thumbnailWrapper = document.createElement('div');
            thumbnailWrapper.className = 'thumbnail-wrapper';

            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            //thumbnail.src = media.type === 'image' ? media.url : getYouTubeThumbnail(media.url);
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.dataset.mediaIndex = index;

            if (media.type === 'image') {
                thumbnail.src = media.url;
            } else if (media.type === 'youtube') {
                thumbnail.src = getYouTubeThumbnail(media.url);
            } else if (media.type === 'video') {
                // Create video element to load and grab a frame
                const video = document.createElement('video');
                video.src = media.url;
                video.crossOrigin = 'anonymous';
                video.muted = true;
                video.currentTime = 2;
            
                video.addEventListener('loadeddata', () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
                    const imgURL = canvas.toDataURL('image/png');
                    thumbnail.src = imgURL;
                }, { once: true });
            }

            // Add media type indicator
            const mediaTypeBadge = document.createElement('div');
            mediaTypeBadge.className = 'media-type-badge';
            mediaTypeBadge.textContent = media.type === 'image' ? '🖼' : '▶';

            thumbnailWrapper.appendChild(thumbnail);
            thumbnailWrapper.appendChild(mediaTypeBadge);

            thumbnailWrapper.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
                updateMediaDisplay(project.media[index]);
            });

            thumbnailContainer.appendChild(thumbnailWrapper);
        });
    }

    // Add project details
    descriptionContainer.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <p class="project-subtitle">${project.subtitle}</p>
            ${project.role ? `<p class="project-role"><strong>My Role:</strong> ${project.role}</p>` : ''}
        </div>
        
        <div class="modal-section">
            <h3>📝 DESCRIPTION</h3>
            <p>${project.description}</p>
        </div>
        
        ${project.features ? `
        <div class="modal-section">
            <h3>🎮 KEY FEATURES</h3>
            <ul class="feature-list">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        ` : ''}
        
        ${project.challenges ? `
        <div class="modal-section">
            <h3>⚙️ TECHNICAL CHALLENGES</h3>
            <p>${project.challenges}</p>
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h3>🛠️ TECHNOLOGIES USED</h3>
            <div class="tech-list">
                ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
}

function getYouTubeThumbnail(url) {
    const videoId = url.split('/').pop().split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; // mqdefault gives consistent size
}


function updateMediaDisplay(media) {
    const mediaContainer = document.getElementById('modal-media-container');

    // Pause any currently playing video
    if (currentVideoElement) {
        currentVideoElement.src = '';
        currentVideoElement = null;
    }

    isVideoPlaying = false;

    if (media.type === 'image') {
        mediaContainer.innerHTML = `
            <div class="image-container">
                <img src="${media.url}" alt="Project Screenshot" loading="lazy">
            </div>
        `;
    } else if (media.type === 'video' || media.type === 'youtube') {
        mediaContainer.innerHTML = `
            <div class="video-container">
                <iframe id="modal-video" src="${media.url}?autoplay=1&mute=1" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
            </div>
        `;

        currentVideoElement = document.getElementById('modal-video');

        // Add event listeners to track video state
        currentVideoElement.addEventListener('play', () => {
            isVideoPlaying = true;
        });

        currentVideoElement.addEventListener('pause', () => {
            isVideoPlaying = false;
        });

        currentVideoElement.addEventListener('ended', () => {
            isVideoPlaying = false;
        });

    }
}

function navigateGallery(direction) {
    const project = projects[currentProjectIndex];
    if (!project.media || project.media.length <= 1) return;

    const currentThumbnail = document.querySelector('.thumbnail.active');
    let currentMediaIndex = currentThumbnail ? parseInt(currentThumbnail.dataset.mediaIndex) : 0;
    let newMediaIndex = currentMediaIndex + direction;

    // Wrap around
    if (newMediaIndex < 0) newMediaIndex = project.media.length - 1;
    if (newMediaIndex >= project.media.length) newMediaIndex = 0;

    // Update display
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    const newThumbnail = document.querySelector(`.thumbnail[data-media-index="${newMediaIndex}"]`);
    if (newThumbnail) {
        newThumbnail.classList.add('active');
        updateMediaDisplay(project.media[newMediaIndex]);
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';

    // Stop any playing video
    if (currentVideoElement) {
        currentVideoElement.src = '';
        currentVideoElement = null;
    }
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGallery(1);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

// Generate cards when DOM is loaded
//document.addEventListener('DOMContentLoaded', generateProjectCards);


// At the bottom of projects.js
window.generateProjectCards = generateProjectCards;
window.openProjectModal = openProjectModal;
window.navigateGallery = navigateGallery;
window.closeModal = closeModal;