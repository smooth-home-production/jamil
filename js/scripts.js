
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
    function toggleSignIn() {
      // Disable the sign-in button during async sign-in tasks.
      document.getElementById('quickstart-sign-in').disabled = true;

      if (firebase.auth().currentUser) {
        firebase.auth().signOut().catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          handleError(error);
        });
      } else {
        var email = document.getElementById('email').value;
        // Sending email with sign-in link.
        var actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this URL
          // must be whitelisted in the Firebase Console.
          'url': window.location.href, // Here we redirect back to this same page.
          'handleCodeInApp': true // This must be true.
         };

        firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings).then(function() {
          // Save the email locally so you don’t need to ask the user for it again if they open
          // the link on the same device.
          window.localStorage.setItem('emailForSignIn', email);
          // The link was successfully sent. Inform the user.
          alert('An email was sent to ' + email + '. Please use the link in the email to sign-in.');
          // Re-enable the sign-in button.
          document.getElementById('quickstart-sign-in').disabled = false;
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          handleError(error);
        });
      }
    }

    /**
     * Handles Errors from various Promises..
     */
    function handleError(error) {
      // Display Error.
      alert('Error: ' + error.message);
      console.log(error);
      // Re-enable the sign-in button.
      document.getElementById('quickstart-sign-in').disabled = false;
    }

    /**
     * Handles automatically signing-in the app if we clicked on the sign-in link in the email.
     */
    function handleSignIn() {
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Disable the sign-in button during async sign-in tasks.
        document.getElementById('quickstart-sign-in').disabled = true;

        // You can also get the other parameters passed in the query string such as state=STATE.
        // Get the email if available.
        var email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. To prevent session fixation attacks, ask the
          // user to provide the associated email again. For example:
          email = window.prompt('Please provide the email you\'d like to sign-in with for confirmation.');
        }
        if (email) {
          // The client SDK will parse the code from the link for you.
          firebase.auth().signInWithEmailLink(email, window.location.href).then(function(result) {
            // Clear the URL to remove the sign-in link parameters.
            if (history && history.replaceState) {
              window.history.replaceState({}, document.title, window.location.href.split('?')[0]);
            }
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            // Signed-in user's information.
            var user = result.user;
            var isNewUser = result.additionalUserInfo.isNewUser;
            console.log(result)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            handleError(error);
          });
        }
      }
    }

    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Restore the previously used value of the email.
      var email = window.localStorage.getItem('emailForSignIn');
      document.getElementById('email').value = email;

      // Automatically signs the user-in using the link.
      handleSignIn();

      // Listening for auth state changes.
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // Update UI.
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
          document.getElementById('quickstart-sign-in').textContent = 'Sign out';
          document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
        } else {
          // User is signed out.
          // Update UI.
          document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
          document.getElementById('quickstart-sign-in').textContent = 'Sign In without password';
          document.getElementById('quickstart-account-details').textContent = 'null';
        }
        document.getElementById('quickstart-sign-in').disabled = false;
      });

      document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
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
