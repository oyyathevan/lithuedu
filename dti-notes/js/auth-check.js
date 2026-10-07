// auth-check.js
// Protects any page: if not logged in → redirect to homepage.
//
// How to use:
//   Root page:     <script src="auth-check.js"></script>
//   Subfolder:     <script src="../auth-check.js"></script>

(function () {
  'use strict';

  function isLoggedIn() {
    return sessionStorage.getItem('lithuLoggedIn') === 'true';
  }

  function getHomePath() {
    // Build the correct relative path back to index.html
    // Example: /dti-notes/index-dti.html  →  ../index.html
    var path = window.location.pathname || '';
    var parts = path.split('/').filter(function (p) { return p.length > 0; });

    // remove current file name
    if (parts.length > 0) {
      parts.pop();
    }

    var depth = parts.length;
    if (depth === 0) {
      return 'index.html';
    }
    return '../'.repeat(depth) + 'index.html';
  }

  if (!isLoggedIn()) {
    // Force redirect (replace so back-button doesn't return to protected page)
    window.location.replace(getHomePath());
  }
})();
