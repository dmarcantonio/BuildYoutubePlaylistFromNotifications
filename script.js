// Click the notifications button
document.querySelector(".style-scope ytd-notification-topbar-button-renderer").click();
// Give the api time to return the notifications list.
setTimeout(() => {   
    const vidLinks = document.querySelectorAll('#items > ytd-notification-renderer > a[href]');
    const ids = []; 
    vidLinks.forEach((link) => {
        ids.push(link.href.split('=')[1]);
    });
    const link = 'http://www.youtube.com/watch_videos?video_ids=' + ids.toString();
    console.log(link);
}, 5000);
