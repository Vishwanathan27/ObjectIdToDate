document.getElementById('convert').addEventListener('click', function() {
    var objectId = document.getElementById('objectId').value;
    var date = dateFromObjectId(objectId);
    document.getElementById('result').textContent = date.toString();
});

function dateFromObjectId(objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
}
