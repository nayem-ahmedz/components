let profileBtn = document.getElementById('profile-btn');
let sectionNav = document.getElementById('section-nav');
let closeBtn = document.querySelector('.close-btn');

profileBtn.addEventListener('click', displayNav);

function displayNav(){
    sectionNav.style.height = '250px';
    sectionNav.style.width = '250px';
    profileBtn.innerHTML = '<span class="close-btn" onclick="closeNav()">x</span>';
}
function closeNav(){
    sectionNav.style.height = '62px';
    sectionNav.style.width = '60px';
}