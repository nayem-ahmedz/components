let profileBtn = document.getElementById('cB-profile');
let closeBtn = document.getElementById('cB-close');
let sectionNav = document.getElementById('section-nav');

profileBtn.addEventListener('click', displayNav);
closeBtn.addEventListener('click', closeNav);

function displayNav(){
    sectionNav.style.height = '270px';
    sectionNav.style.width = '250px';
    profileBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}
function closeNav(){
    closeBtn.style.display = 'none';
    sectionNav.style.height = '62px';
    sectionNav.style.width = '60px';
    profileBtn.style.display = 'block';
}