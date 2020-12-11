// Get the number of new videos via the notifications bell # 
const newVidCount = +document.querySelector("#notification-count").innerText;

// Click the notifications button
document.querySelector(".style-scope ytd-notification-topbar-button-renderer").click();

// Give the api time to return the notifications list.
setTimeout(() => {   
    const vidLinks = document.querySelectorAll('#items > ytd-notification-renderer > a[href]');
    const ids = []; 

    vidLinks.forEach((link) => {
        ids.push(link.href.split('=')[1]);
    });

    // Generate a playlist with the length of the new notifications count.
    const link = 'http://www.youtube.com/watch_videos?video_ids=' + ids.slice(0, newVidCount || ids.length);
    // Redirect to playlist!
    window.location.replace(link);
}, 2500);
