// auth-check.js
// Include this script in ANY page you want to protect.
// If the user is not logged in, they are redirected to the homepage.
//
// How to use:
//   - Page in root folder:     <script src="auth-check.js"></script>
//   - Page in subfolder:       <script src="../auth-check.js"></script>
//   - Page 2 levels deep:      <script src="../../auth-check.js"></script>

(function () {
  const isLoggedIn = sessionStorage.getItem('lithuLoggedIn') === 'true';

  if (!isLoggedIn) {
    // Figure out how deep we are so we can go back to index.html
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    // Remove the filename itself
    pathParts.pop();
    const depth = pathParts.length;
    const prefix = depth > 0 ? '../'.repeat(depth) : './';
    window.location.replace(prefix + 'index.html');
  }
})();
