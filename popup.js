document.getElementById('convert').addEventListener('click', function() {
    var objectId = document.getElementById('objectId').value;
    if (objectId.length !== 24) {
        document.getElementById('result').textContent = 'Invalid ObjectId!';
        return;
    }
    
    var date = dateFromObjectId(objectId);
    var timeAgo = getTimeAgo(date);
    document.getElementById('result').textContent = 'Date: ' + date.toString() + ' (' + timeAgo + ')';
});

function dateFromObjectId(objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}

function getTimeAgo(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}
