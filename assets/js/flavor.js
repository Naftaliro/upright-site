// runs before the page paints so a saved flavor doesn't flash mocha first
try { var f = localStorage.getItem('flavor'); if (f) document.documentElement.dataset.flavor = f; } catch (e) {}
