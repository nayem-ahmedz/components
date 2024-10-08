let profileBtn = document.getElementById('cB-profile');
let closeBtn = document.getElementById('cB-close');
let compNav = document.getElementById('comp-nav');

profileBtn.addEventListener('click', displayNav);
closeBtn.addEventListener('click', closeNav);

function displayNav(){
    compNav.style.width = '250px';
    setTimeout(()=>{
        compNav.style.height = '300px';
        profileBtn.style.display = 'none';
        closeBtn.style.display = 'inline-block';
    }, 500);
}
function closeNav(){
    closeBtn.style.display = 'none';
    profileBtn.style.display = 'block';
    compNav.style.height = '62px';
    setTimeout(()=>{
        compNav.style.width = '60px';
    }, 500);
}