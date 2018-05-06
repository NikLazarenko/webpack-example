export default function (array, className) {
    var menu = document.createElement("ul");
    var listItems = '';
    menu.className = className;
    for (var i = 0; i < array.length; i++) {
        listItems += '<li class="menu-item"><a class="menu-link" href="#">' + array[i] + '</a></li>';
    }
    menu.innerHTML = listItems;
    return menu;
}