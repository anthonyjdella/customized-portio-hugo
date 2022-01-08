function darkModeTheme() {

    var content = document.getElementsByClassName("contents")[0];
    var navbar = document.getElementById("hideNavBar");
    var heroBG = document.getElementsByClassName("hero_background-svg")[0];
    if (heroBG != undefined) {
        heroBG.classList.toggle("herobg-dark-mode");
    }
    var heroBlob = document.getElementsByClassName("hero_blob")[0];
    if (heroBlob != undefined) {
        heroBlob.classList.toggle("heroblob-filter-color");
    }
    var textDark = document.getElementsByClassName("text-dark");
    var blogBlob = document.getElementsByClassName("blog-preview__shape")[0];
    if (blogBlob != undefined) {
        blogBlob.classList.toggle("blogblob-filter-color");
    }
    var blogBoxes = document.getElementsByClassName("bg-white");
    var footerBG = document.getElementsByClassName("footer__background_shape")[0];
    var helloThere = document.getElementsByClassName("hello-there")[0];
    var aboutInner = document.getElementsByClassName("about_content-inner")[0];
    if (aboutInner != undefined) {
        aboutInner.classList.toggle("darker-bg");
    }
    var aboutBlob = document.getElementsByClassName("about_content-inner-blob")[0];
    if (aboutBlob != undefined) {
        aboutBlob.classList.toggle("aboutblob-filter-color");
    }
    var resumeBG = document.getElementsByClassName("resume__background")[0];
    if (resumeBG != undefined) {
        resumeBG.classList.toggle("darker-bg");
    }
    var resumeItems = document.getElementsByClassName("resume__education_item");
    if (resumeItems != undefined) {
        for (i = 0; i < resumeItems.length; i++) {
            var resumeItem = resumeItems[i];
            resumeItem.classList.toggle("dark-resume-text");
        }
    }
    var resumeTitles = document.getElementsByClassName("resume-tile");
    if (resumeTitles != undefined) {
        for (i = 0; i < resumeTitles.length; i++) {
            var resumeTitle = resumeTitles[i];
            resumeTitle.classList.toggle("dark-resume-text");
        }
    }
    var animateShapes = document.getElementsByClassName("animate-shape")[0];
    if (animateShapes != undefined) {
        animateShapes.classList.toggle("aboutblob-filter-color");
    }
    var serviceShape = document.getElementsByClassName("service__background_shape")[0];
    if (serviceShape != undefined) {
        serviceShape.classList.toggle("aboutblob-filter-color");
    }
    var serviceShape = document.getElementsByClassName("skill__background_shape")[0];
    if (serviceShape != undefined) {
        serviceShape.classList.toggle("aboutblob-filter-color");
    }
    var serviceBG = document.getElementsByClassName("service__background")[0];
    if (serviceBG != undefined) {
        serviceBG.classList.toggle("servicebg-dark-mode");
    }
    var serviceItems = document.getElementsByClassName("service__slider_item");
    if (serviceItems != undefined) {
        for (i = 0; i < serviceItems.length; i++) {
            var serviceItem = serviceItems[i];
            serviceItem.classList.toggle("dark-bg");
        }
    }
    var testimonial = document.getElementsByClassName("testimonial")[0];
    if (testimonial != undefined) {
        testimonial.classList.toggle("darkest-bg")
    }
    var testimonialBg = document.querySelector("#content > section.section.testimonial.darkest-bg > div.testimonial__background_shape > svg > path");
    if (testimonialBg != undefined) {
        testimonialBg.classList.toggle("darkest-fill")
    }
    var testimonialItems = document.getElementsByClassName("testimonial__slider_item");
    if (testimonialItems != undefined) {
        for (i = 0; i < testimonialItems.length; i++) {
            var testimonialItem = testimonialItems[i];
            testimonialItem.classList.toggle("darker-bg");
        }
    }
    var testimonialAuthors = document.getElementsByClassName("author-name");
    if (testimonialAuthors != undefined) {
        for (i = 0; i < testimonialAuthors.length; i++) {
            var testimonialAuthor = testimonialAuthors[i];
            testimonialAuthor.classList.toggle("white-text");
        }
    }
    var breadcrumbTitle = document.getElementsByClassName("breadcrumb-item active")[0];
    if (breadcrumbTitle != undefined) {
        breadcrumbTitle.classList.toggle("white-text");
    }
    var contactBgs = document.getElementsByClassName("contact__info_item");
    if (contactBgs != undefined) {
        for (i = 0; i < contactBgs.length; i++) {
            var contactBg = contactBgs[i];
            contactBg.classList.toggle("dark-bg");
        }
    }

    for (i = 0; i < textDark.length; i++) {
        var text = textDark[i];
        text.classList.toggle("white-text");
    }

    for (i = 0; i < blogBoxes.length; i++) {
        var blogBox = blogBoxes[i];
        blogBox.classList.toggle("dark-bg");
    }
    var algoliaSearchBox = document.getElementsByClassName("ais-SearchBox-input")[0];
    if (algoliaSearchBox != undefined) {
        algoliaSearchBox.classList.toggle("dark-bg")
    }
    var algoliaShowMore = document.getElementsByClassName("ais-Menu-showMore")[0];
    if (algoliaShowMore != undefined) {
        algoliaShowMore.classList.toggle("show-more-dark")
    }

    content.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mobile-menu");
    footerBG.classList.toggle("blogblob-filter-color");
    helloThere.classList.toggle("white-text");

}
