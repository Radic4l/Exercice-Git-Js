function afficheRatatouille(ratatouille){
    var ul = document.getElementById('s1_legumes');
    var i = 0;
    do{
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(ratatouille[i]));
        ul.appendChild(li);
        i += 1;
    } while(i < ratatouille.length);
}
                
