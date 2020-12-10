// Click the notifications button
document.querySelector(".style-scope ytd-notification-topbar-button-renderer").click();
// Give the api time to return the notifications list.
setTimeout(() => {   
    const vidLinks = document.querySelectorAll('#items > ytd-notification-renderer > a[href]');
    const ids = []; 

    vidLinks.forEach((link) => {
        ids.push(link.href.split('=')[1]);
    });

    // Get the number of new notifications and make the playlist of that length.
    const newVids = +document.querySelector("#notification-count").innerText;
    const link = 'http://www.youtube.com/watch_videos?video_ids=' + ids.slice(0, newVids || ids.length).toString();
    // Redirect to playlist!
    window.location.replace(link);
}, 2500);
