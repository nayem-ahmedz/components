//HTML Structure
const navHTML = `
    <section id="section-nav">
        <p id="corner-btn">
            <button id="cB-profile"><i class="fa-solid fa-user"></i></button>
            <button id="cB-close"><i class="fa-solid fa-x"></i></button>
        </p>
        <article id="nav-body">
            <h3 id="user-name">Nayem Ahmed</h3>
            <hr>
            <nav class="navigation">
                <li> <a href="#">Portfolio</a> </li>
                <li> <a href="#">All Projects</a> </li>
                <li> <a href="#">Contact Me!</a> </li>
            </nav>
            <div class="social-link">
                <a href="https://www.facebook.com/nayemAhmedz" target="_blank"> <i class="fa-brands fa-facebook"></i> </a>
                <a href="http://www.linkedin.com/in/nayem-ahmedz" target="_blank"> <i class="fa-brands fa-linkedin"></i> </a>
                <a href="https://www.youtube.com/@NayemsCanvas" target="_blank"> <i class="fa-brands fa-youtube"></i> </a>
                <a href="https://github.com/nayem-ahmedz" target="_blank"> <i class="fa-brands fa-github"></i> </a>
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
}