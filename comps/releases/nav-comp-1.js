//HTML Structure
const navHTML = `
    <section id="section-nav">
        <p id="corner-btn">
            <button id="cB-profile"><i class="fa-solid fa-user"></i></button>
            <button id="cB-close"><i class="fa-solid fa-x"></i></button>
        </p>
        <article id="nav-body">
            <h3 id="user-name">Nayem Ahmed</h3>
            <p id="user-role">Front-end Web Developer</p>
            <hr>
            <nav class="navigation">
                <li> <a href="#">Portfolio</a> </li>
                <li> <a href="#">Contact Me!</a> </li>
                <li> <a href="#">All Projects</a> </li>
            </nav>
            <div class="social-link">
                <a href="https://www.facebook.com/nayemAhmedz" target="_blank" title="facebook profile"> <i class="fa-brands fa-facebook"></i> </a>
                <a href="http://www.linkedin.com/in/nayem-ahmedz" target="_blank" title="linkedin profile"> <i class="fa-brands fa-linkedin"></i> </a>
                <a href="https://www.youtube.com/@NayemsCanvas" target="_blank" title="youtube channel"> <i class="fa-brands fa-youtube"></i> </a>
                <a href="https://github.com/nayem-ahmedz" target="_blank" title="github profile"> <i class="fa-brands fa-github"></i> </a>
            </div>
        </article>
    </section> `;

// Include the navigation and it's functionalities
document.addEventListener('DOMContentLoaded', includeNav);
function includeNav(){
    document.body.insertAdjacentHTML('beforeend', navHTML);

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
}