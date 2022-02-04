function generate(){
    var quotes = { //Dictionary is a data type that can be used for different purposes. Dictionaries provide one key and one value matched together.
        "- Maxime Lagace" : '"Stand for what’s right. Make your life beautiful. Make your life meaningful."',
        "- Malcolm X"  : '"A man who believes in freedom will do anything under the sun to acquire, or preserve his freedom."',
        "- Aung San Suu Kyi" : '"The only real prison is fear, and the only real freedom is freedom from fear."'
    }

    var authors = Object.keys(quotes) //with the Object.keys command we can get an array of a given object's properties names in this case it would be an array of the strings that we wrote as the keys of our strings on the object "quotes" that we just created in the first line

    var author = authors[Math.floor(Math.random() * authors.length)] //All this function what it does is to select randomly a number among our given range which in this case we specified to be the length of our array "authors" which as we can see in the browser has 3 elements on it 

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;

    document.getElementById("author").innerHTML = author;
}