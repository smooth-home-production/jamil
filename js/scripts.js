
const firebaseConfig = {
    apiKey: "AIzaSyC3zFoUAGJxq-hxgwtXHKEREquwx2PV3LA",
    authDomain: "merak-f35bf.firebaseapp.com",
    databaseURL: "https://merak-f35bf-default-rtdb.firebaseio.com",
    projectId: "merak-f35bf",
    storageBucket: "merak-f35bf.appspot.com",
    messagingSenderId: "861555556798",
    appId: "1:861555556798:web:a918790b39a6b8c94df9ef",
    measurementId: "G-96Z5HTT2KB"
};
const firebase = initializeApp(firebaseConfig);
function onSignIn(googleUser) {
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        if (!isUserEqual(googleUser, firebaseUser)) {
            var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.getAuthResponse().id_token);
            firebase.auth().signInWithCredential(credential).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                } else {
                    console.error(error);
                }
            });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}
function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                return true;
            }
        }
    }
    return false;
}
function initApp() {
    firebase.auth().onAuthStateChanged(user =>{
        console.log(user)
    });
}
window.addEventListener('DOMContentLoaded', event => {
    initApp();
    contactForm.addEventListener('submit',function(a){
        a.preventDefault()
        b = document
        c = b.createElement('div')
        c.classList = "container px-4 px-lg-5 mb-2 bg-light"
        d = b.createElement('p')
        d.classList = "text-primary mb-0"
        d.innerHTML = 'Nama'
        e = b.createElement('p')
        e.classList = "text-black mb-0"
        e.innerHTML = this.message.value
        f = b.createElement('p')
        f.classList = "text-muted"
        f.innerHTML = new Date().toLocaleString('id-ID',{
                    dateStyle:"full",
                    timeStyle:"full"
                })
        coment.appendChild(c)
        c.appendChild(d)
        c.appendChild(e)
        c.appendChild(f)
        message.value = ''
    })
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
