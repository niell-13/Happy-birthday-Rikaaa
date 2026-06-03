// =========================
// NOMOR WHATSAPP
// =========================

const nomorWA = "6289698035890";


// =========================
// DATA HALAMAN
// =========================

const pages = [

{
title:"🌷 A Little Birthday Note 🎂",

photo:"photo1.jpg",

text:`Happy birthday Kamu🥳🎂🥳

utututuu udah gede anak orang,
18 tahun nih yeee🤗

Panjang umur, sehat selalu ya.
Semoga semua yang kamu usahain satu per satu bisa tercapai.

Maaf ya kalau hadiah yang aku kasih sederhana.

Tapi aku harap sedikit banyak bisa bikin hari spesial kamu jadi lebih berkesan.

Karena hari ini adalah hari seseorang yang pernah jadi alasan aku tersenyum tanpa alasan. 🌷`
},

{
title:"💕 The Days I Miss ✨",

photo:"photo2.jpg",

text:`Seneng deh bisa ketemu kamu lagi,
bareng kamu lagi,
deket sama kamu lagi,
meski agak renggang sih mwehehe.

Jujur aja, ada beberapa hal yang bikin aku sadar kalau kebersamaan itu nggak selalu soal seberapa lama.

Kadang cuma ngobrol sebentar,
kadang cuma saling sapa,
tapi rasanya tetap bisa bikin hari jadi lebih baik.

Dan entah kenapa,
aku masih seneng setiap kali semesta ngasih kesempatan buat ketemu kamu lagi. 💕`
},

{
title:"💌 Things I Never Said 🌙",

photo:"photo3.jpg",

text:`Beberapa minggu ini aku sadar,
kalau kita emang nggak bakal bisa bareng lagi dari awal.

Nyatanya cuma aku sendiri yang bertahan dari awal.

Tapi nggak apa-apa kok.

Karena pada akhirnya,
setiap orang punya jalan ceritanya masing-masing.

Dan kalau memang bukan aku yang ada di akhir cerita itu,
setidaknya aku pernah bahagia jadi bagian dari beberapa halamannya.

🎈🎂🎈 HBD 🎈🎂🎈`
}

];


// =========================
// ELEMENT
// =========================

const cover =
document.getElementById("cover");

const bookSection =
document.getElementById("bookSection");

const replySection =
document.getElementById("replySection");

const pageTitle =
document.getElementById("pageTitle");

const pagePhoto =
document.getElementById("pagePhoto");

const pageText =
document.getElementById("pageText");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");


// =========================
// COVER TYPING
// =========================

const coverMessage =
`Open when you're ready...

Aku punya sesuatu untukmu 💌`;

let coverIndex = 0;

function typeCover(){

if(
coverIndex < coverMessage.length
){

document
.getElementById("coverTyping")
.innerHTML +=
coverMessage.charAt(coverIndex);

coverIndex++;

setTimeout(
typeCover,
40
);

}

}

typeCover();


// =========================
// OPEN BOOK
// =========================

function openBook(){

cover.classList.add("hidden");

bookSection.classList.remove("hidden");

loadPage(currentPage);

const music =
document.getElementById("music");

music.play().catch(()=>{
console.log("Autoplay diblokir");
});

}


// =========================
// PAGE SYSTEM
// =========================

let currentPage = 0;

function loadPage(index){

pageTitle.innerHTML =
pages[index].title;

pagePhoto.src =
pages[index].photo;

typePageText(
pages[index].text
);

prevBtn.style.visibility =
index === 0
? "hidden"
: "visible";

if(
index === pages.length - 1
){

nextBtn.innerHTML =
"Last Page ❤️";

}else{

nextBtn.innerHTML =
"Next →";

}

}


// =========================
// TYPING HALAMAN
// =========================

function typePageText(text){

pageText.innerHTML = "";

let i = 0;

function typing(){

if(i < text.length){

pageText.innerHTML +=
text.charAt(i);

i++;

setTimeout(
typing,
18
);

}

}

typing();

}


// =========================
// NEXT
// =========================

function nextPage(){

if(
currentPage <
pages.length - 1
){

currentPage++;

loadPage(currentPage);

}else{

bookSection.classList.add(
"hidden"
);

replySection.classList.remove(
"hidden"
);

}

}


// =========================
// PREVIOUS
// =========================

function prevPage(){

if(currentPage > 0){

currentPage--;

loadPage(currentPage);

}

}


// =========================
// KEMBALI KE BUKU
// =========================

function backBook(){

replySection.classList.add(
"hidden"
);

bookSection.classList.remove(
"hidden"
);

}


// =========================
// WHATSAPP
// =========================

function kirimWA(){

const pesan =
document
.getElementById("pesan")
.value;

if(
pesan.trim() === ""
){

alert(
"Isi pesannya dulu ya ❤️"
);

return;

}

const text =

`Hai ❤️

Aku udah baca scrapbooknya.

Ini balasanku:

${pesan}`;

window.open(

"https://wa.me/"
+ nomorWA
+ "?text="
+ encodeURIComponent(text),

"_blank"

);

}


// =========================
// HEART EFFECT
// =========================

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add(
"heart"
);

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100
+ "vw";

heart.style.fontSize =
(Math.random()*20+15)
+ "px";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(
createHeart,
500
);
