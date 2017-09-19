const openPhotoSwipe = () => {

    const pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    const items = [
        {
            src: 'imgs/Ski-Ride-Snowboard-New-Zealand-Mt-Dobson-HEROhomepage-gallery.jpg',
            w: 600,
            h: 400
        },
        {
            src: 'imgs/Ski-Ride-Snowboard-New-Zealand-Mt-Hutt-3homepage-gallery.jpg',
            w: 600,
            h: 400
        },
        {
            src: 'imgs/Ski-Ride-Snowboard-New-Zealand-Queenstown-1homepage-gallery.jpg',
            w: 600,
            h: 400
        }
    ];

    // define options (if needed)
    const options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

};

// click advert to initiate swipe gallery
document.getElementById('btn').onclick = openPhotoSwipe;
