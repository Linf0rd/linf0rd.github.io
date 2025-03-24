document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', () => {
        navRight.classList.toggle('show');
    });

    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navRight.classList.remove('show');
        });
    });

    const desktopImageTiles = document.querySelectorAll('.desktop-grid .image-tile img');
    const mobileImageTiles = document.querySelectorAll('.mobile-grid .image-tile img');
    const desktopImages = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg',
        '/images/image5.jpg',
        '/images/image6.jpg',
        '/images/image7.jpg',
        '/images/image8.jpg',
        '/images/image9.jpg',
        '/images/image10.jpg',
        '/images/image11.jpg',
        '/images/image12.jpg',
        '/images/image13.jpg',
        '/images/image14.jpg',
        '/images/image15.jpg',
        '/images/image16.jpg',
    ];
    const mobileImages = [
        '/images/image1.jpg',
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg',
        '/images/image5.jpg',
        '/images/image6.jpg',
        '/images/image7.jpg',
        '/images/image8.jpg',
    ];

    desktopImageTiles.forEach((img, index) => {
        let i = (index * 3) % desktopImages.length;
        setInterval(() => {
            img.src = desktopImages[i];
            i = (i + 1) % desktopImages.length;
        }, 3000); 
    });

    mobileImageTiles.forEach((img, index) => {
        let i = (index * 3) % mobileImages.length; 
        setInterval(() => {
            img.src = mobileImages[i];
            i = (i + 1) % mobileImages.length;
        }, 3000);
    });
});
