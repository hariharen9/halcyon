(() => {
    document.documentElement.classList.add('js')
    const e = window.matchMedia('(prefers-reduced-motion: reduce)'),
        n = window.navigator.userAgent,
        d = window.innerWidth / window.innerHeight
    !e.matches &&
        n.indexOf('MSIE') < 0 &&
        d < 2.49 &&
        document.documentElement.classList.contains('home') &&
        CSS &&
        CSS.supports &&
        CSS.supports('position', 'sticky')
        ? ((window.enhancedExperience = !0),
            document.documentElement.classList.add('enhanced'))
        : (window.enhancedExperience = !1)
})();
