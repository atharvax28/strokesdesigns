(function () {
    const SESSION_KEY = 'auth_session_date';

    function getSessionDateKey() {
        try {
            return new Intl.DateTimeFormat('en-CA', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).format(new Date());
        } catch (e) {
            return new Date().toDateString();
        }
    }

    function isAuthenticated() {
        try {
            return localStorage.getItem(SESSION_KEY) === getSessionDateKey();
        } catch (e) {
            return false;
        }
    }

    const authenticated = isAuthenticated();
    const isSubdir = window.location.pathname.includes('/team/') ||
        window.location.pathname.includes('/work/') ||
        window.location.pathname.includes('/contact/');
    const isLoginPage = document.querySelector('meta[name="auth-page"]') !== null;

    if (isLoginPage) {
        if (authenticated) {
            window.location.replace('main.html');
        }
        return;
    }

    if (!authenticated) {
        const pathBack = isSubdir ? '../index.html' : 'index.html';
        window.location.replace(pathBack);
    }
})();
