var sentence = " Technology is nothing. What’s important is that you have faith in people, that they’re basically good and smart.";

var url = "https://tr.wıkıpedıa.org/wıkı/Steve Jobs";

// Verilen cümle kaç karakterlidir?
console.log("string.length", sentence.length);

// Verilen cümle kaç kelimeden oluşmaktadır?
console.log(sentence.trim().split(' ').length);

/* toLowerCase(): Bir dizeyi küçük harflere dönüştürür. */
console.log("toLowerCase(): ", sentence.toLowerCase());

/*toUpperCase(): Bir dizeyi büyük harflere dönüştürür.*/
console.log("toUpperCase(): ", sentence.toUpperCase());


/* trim(): Bir dizgenin her iki tarafındaki boşlukları kaldırır. */
console.log("trim(): ", sentence.trim());

// '.' karakterini silin.
console.log(sentence.replace('.', ''));


/* replace(): Bir değer veya normal ifade için bir dize arar. Değiştirilen değer(ler)le yeni bir dize döndürür. */

// url'nin içinden str kısmını çıkarma
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, '.com' ifadesini içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleme

console.log(url.toString()
    .replace(/ /g, '_')
    .replace(/ı/g, 'i')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
);