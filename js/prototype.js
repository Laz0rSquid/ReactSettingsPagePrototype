function toggleDiv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "inline-block" : "none";
}

function expandAll() {
    for (i = 1; i < 7; i++){
        toggleHelper(document.getElementById('id' + i), 'inline-block');
    }
}

function collapseAll() {
    for (i = 1; i < 7; i++){
        toggleHelper(document.getElementById('id' + i), 'none');
    }
}

function toggleHelper(div, value) {
    if (div.style.display != value) {
        div.style.display = value;
    }
}