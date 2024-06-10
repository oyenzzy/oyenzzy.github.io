const menuBurger = document.querySelector(`.burger-menu input`);
const nav = document.querySelector(`.navbar ul`);

menuBurger.addEventListener(`click`, function () {
  nav.classList.toggle(`slide`);
});

const Today = [`minggu`, `senin`, `selasa`, `rabu`, `kamis`, `jumat`, `sabtu`];
let hari = new Date().getDay();
if ((hari = Today[hari])) {
  hasil = hari;
}
console.log(`hari ini adalah hari ${hasil}`);

// let nama = prompt('Siapakah nama mu?')
// alert(
// `Haii ${nama}`
// )

let charList = [
  "Amber",
  "Barbara",
  "Beidou",
  "Bennett",
  "Chongyun",
  "Diluc",
  "Fischl",
  "Jean",
  "Kaeya",
  "Keqing",
  "Klee",
  "Lisa",
  "Mona",
  "Ningguang",
  "Noelle",
  "Qiqi",
  "Razor",
  "Sucrose",
  "Traveler",
  "Venti",
  "Xiangling",
  "Xingqiu",
  "Diona",
  "Childe",
  "Xinyan",
  "Zhongli",
  "Albedo",
  "Ganyu",
  "Hu Tao",
  "Xiao",
  "Rosaria",
  "Eula",
  "Yanfei",
  "Kazuha",
  "Ayaka",
  "Sayu",
  "Yoimiya",
  "Aloy",
  "Kujou Sara",
  "Raiden Shogun",
  "Kokomi",
  "Thoma",
  "Arataki Itto",
  "Gorou",
  "Shenhe",
  "Yun Jin",
  "Yae Miko",
  "Ayato",
  "Yelan",
  "Kuki Shinobu",
  "Heizou",
  "Tighnari",
  "Collei",
  "Dori",
  "Nilou",
  "Cyno",
  "Candace",
  "Nahida",
  "Layla",
  "Wanderer",
  "Faruzan",
  "Alhaitham",
  "Yaoyao",
  "Dehya",
  "Mika",
  "Baizhu",
  "Kaveh",
  "Kirara",
  "Lyney",
  "Lynette",
  "Neuvillette",
  "Wriothesley",
  "Furina",
  "Charlotte",
  "Navia",
  "Chevreuse",
  "Xianyun",
  "Gaming",
  "Chiori",
  "Arlecchino",
  "Freminet",
];
let charListShort = charList.sort();
console.log(charListShort);
