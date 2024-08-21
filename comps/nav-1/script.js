let profileBtn = document.getElementById('cB-profile');
let closeBtn = document.getElementById('cB-close');
let sectionNav = document.getElementById('section-nav');

profileBtn.addEventListener('click', displayNav);
closeBtn.addEventListener('click', closeNav);

function displayNav(){
    sectionNav.style.width = '250px';
    setTimeout(()=>{
        sectionNav.style.height = '300px';
        profileBtn.style.display = 'none';
        closeBtn.style.display = 'inline-block';
    }, 500);
}
function closeNav(){
    closeBtn.style.display = 'none';
    profileBtn.style.display = 'block';
    sectionNav.style.height = '62px';
    setTimeout(()=>{
        sectionNav.style.width = '60px';
    }, 500);
}