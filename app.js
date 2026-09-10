const BATIK = [
  {id:"parang-kusumo",nama:"Parang Kusumo",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#1a365d"],img:"https://loremflickr.com/600/400/batik,parang?lock=1",makna:"Kekuasaan yang bijak - parang = senjata, kusumo = bunga raja",filosofi:"Motif larangan keraton. Hanya raja & keluarga boleh pakai. Lurik parang melambangkan ombak yang tak pernah putus - penguasa harus terus bergerak, tapi tetap halus.",history:"Dicipta era Mataram Islam, abad 16. Dari kata 'pereng' (lereng) - bentuknya seperti lereng curam.",usage:"Upacara keraton, pernikahan adat Solo. Jangan pakai sembarangan di acara santai.",en:"Royal forbidden pattern. Symbol of wise power - wavy dagger means relentless yet refined leadership. Once only for kings."},
  {id:"mega-mendung",nama:"Mega Mendung",daerah:"Cirebon",prov:"Jawa Barat",teknik:"Tulis",warna:["#1a365d","#2a9d8f","#e0f2fe"],img:"https://loremflickr.com/600/400/batik,mega-mendung?lock=2",makna:"Langit mendung yang menaungi - kesabaran & penahan amarah",filosofi:"7 gradasi warna dari gelap ke terang. Mendung tebal di atas, cerah di bawah - orang besar harus mampu menahan emosi, melindungi yang di bawah.",history:"Pengaruh Tionghoa abad 16, dari pelabuhan Cirebon. Awan bergelombang khas pesisir utara Jawa.",usage:"Kantor, kampus, acara semi-formal. Paling dicari turis karena gradasi cantik.",en:"Seven cloud gradations - teaches patience. Thick clouds above, bright below: leaders must shield, not burden."},
  {id:"kawung",nama:"Kawung",daerah:"Yogyakarta",prov:"DI Yogyakarta",teknik:"Tulis",warna:["#7c2d12","#c9a86a","#fffbf5"],img:"https://loremflickr.com/600/400/batik,kawung?lock=3",makna:"Kejujuran & keseimbangan - buah kawung/aren yang murni",filosofi:"4 belah buah aren yang tertata rapi = 4 nafsu manusia yang harus terkendali. Titik tengah = hati yang bersih.",history:"Motif paling tua, era Mataram Kuno abad 9. Ditemukan di candi Prambanan.",usage:"Seragam PNS Yogya hari tertentu, batik formal netral.",en:"Oldest motif, 9th century. Four palm fruits = four human desires to balance. Center dot = pure heart."},
  {id:"sidomukti",nama:"Sidomukti",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#2b1d12"],img:"https://loremflickr.com/600/400/batik,sidomukti?lock=4",makna:"Kemakmuran & harapan - sido = jadi, mukti = makmur",filosofi:"Doa agar pemakai hidup berkecukupan. Isen-isen mikro di dalam menunjukkan detail hidup yang harus dirawat.",history:"Kembangan dari motif Semen, era Kasunanan Surakarta abad 18.",usage:"Pernikahan, lamaran - doa kemakmuran untuk pengantin.",en:"Prosperity prayer - 'may life be prosperous'. Tiny fills mean life details matter."},
  {id:"truntum",nama:"Truntum",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#2b1d12","#fdf6e3"],img:"https://loremflickr.com/600/400/batik,truntum?lock=5",makna:"Cinta yang tumbuh lagi - tuntas-tum-tum, bintang yang tumbuh",filosofi:"Dicipta Kanjeng Ratu untuk menumbuhkan cinta raja yang pudar. Bintang kecil bertaburan = cinta yang kembali bersinar.",history:"Dibuat Ratu Pakubuwono III, abad 18, dari patah hati yang dijahit jadi doa.",usage:"Orang tua pakai saat nikahkan anak - simbol cinta yang diturunkan.",en:"Queen created it to regrow king's love. Scattered stars = love that blooms again."},
  {id:"lasem",nama:"Lasem Tiga Negeri",daerah:"Lasem",prov:"Jawa Tengah",teknik:"Kombinasi",warna:["#dc2626","#1a365d","#facc15"],img:"https://loremflickr.com/600/400/batik,lasem?lock=6",makna:"Akulturasi - Tionghoa, Jawa, Belanda dalam satu kain",filosofi:"Merah Lasem (Chinese), biru sogan (Jawa), putih (Belanda). Bukti Indonesia memang persilangan, bukan pemurnian.",history:"Lasem kota candu & batik tertua pesisir, abad 14. Disebut 'Little China of Java'.",usage:"Koleksi, pameran budaya. Harga tinggi karena 3x pewarnaan.",en:"Three-nation batik: Chinese red, Javanese blue, Dutch white. Proof Indonesia is hybrid, not pure."},
  {id:"pekalongan",nama:"Pekalongan Pesisir",daerah:"Pekalongan",prov:"Jawa Tengah",teknik:"Cap",warna:["#ec4899","#22c55e","#facc15","#38bdf8"],img:"https://loremflickr.com/600/400/batik,pekalongan?lock=7",makna:"Keceriaan pesisir - bunga, kupu, burung bebas warna",filosofi:"Bebas pakem keraton. Pesisir = dagang = warna berani campur. Lawan dari sogan kraton yang kalem.",history:"Abad 19, Pekalongan jadi 'Kota Batik' lewat jalur perdagangan. Pengaruh Arab, Belanda, Tionghoa.",usage:"Sehari-hari, kerja kreatif, acara santai.",en:"Coastal freedom - no palace rules. Bright flora, butterflies. Batik's pop side."},
  {id:"bali-merak",nama:"Merak Abyorhokokai",daerah:"Gianyar",prov:"Bali",teknik:"Tulis",warna:["#059669","#f59e0b","#1a365d"],img:"https://loremflickr.com/600/400/batik,bali?lock=8",makna:"Keanggunan & kebanggaan - burung merak yang mekar",filosofi:"Ciptaan Iwan Tirta era 1990s untuk Bali modern. Merak = percaya diri, tapi tetap anggun.",history:"Batik Bali baru marak 1970-an, tak terikat pakem Jawa. Banyak motif flora-fauna tropis.",usage:"Resort, wedding Bali, turis wajib.",en:"Modern Bali, 1990s. Peacock = proud yet graceful. Tourist favorite."},
  {id:"dayak",nama:"Batik Dayak Batang Garing",daerah:"Palangkaraya",prov:"Kalimantan Tengah",teknik:"Tulis",warna:["#7c2d12","#f59e0b","#1a365d"],img:"https://loremflickr.com/600/400/batik,dayak?lock=9",makna:"Pohon kehidupan - Batang Garing, poros dunia Dayak",filosofi:"Pohon kosmik yang hubungkan atas-bawah-dunia tengah. Burung enggang di puncak = penjaga.",history:"Motif ukir rumah betang diadaptasi ke kain sejak 2000-an. Upaya Dayak klaim ruang tekstil.",usage:"Acara adat Dayak, festival budaya.",en:"Tree of life, Dayak cosmos. Hornbill on top = guardian. From longhouse carvings to cloth."},
  {id:"sentani",nama:"Sentani Papua",daerah:"Jayapura",prov:"Papua",teknik:"Cap",warna:["#dc2626","#facc15","#2b1d12"],img:"https://loremflickr.com/600/400/batik,papua?lock=10",makna:"Tifa & ombak Danau Sentani - ritme & alam",filosofi:"Geometri tifa, perahu, danau. Papua ikut menulis batik - bukan hanya Jawa. Indonesia timur punya kain juga.",history:"Gerakan 2010-an, pengrajin Papua belajar canting di Jawa lalu pulang bawa teknik.",usage:"Festival Port Numbay, seragam lokal.",en:"Tifa drum, Sentani waves. East Indonesia writes batik too - not just Java."},
  {id:"betawi",nama:"Betawi Tumpal Pucuk Rebung",daerah:"Jakarta",prov:"DKI Jakarta",teknik:"Cap",warna:["#dc2626","#22c55e","#facc15"],img:"https://loremflickr.com/600/400/batik,jakarta?lock=11",makna:"Pucuk rebung - pertumbuhan & harapan baru",filosofi:"Tumpal segitiga di tepi = doa tumbuh ke atas. Betawi campur Melayu, Arab, Cina - warna ngejreng itu identitas.",history:"Batik Betawi hampir punah 1970-an, bangkit lagi lewat Sudin Kebudayaan DKI 2000-an.",usage:"Abang None, seragam DKI, ondel-ondel backdrop.",en:"Bamboo shoot triangle = growth. Betawi loud colors = mixed Malay-Arab-Chinese identity."},
  {id:"madura",nama:"Madura Sasegan",daerah:"Pamekasan",prov:"Jawa Timur",teknik:"Tulis",warna:["#dc2626","#1a365d","#22c55e"],img:"https://loremflickr.com/600/400/batik,madura?lock=12",makna:"Berani & tegas - merah darah, biru laut",filosofi:"Madura tak malu warna tabrak. Sasegan = sisik naga? Banyak tafsir. Yang jelas: petarung.",history:"Madura batik sejak abad 17, dibawa ulama. Khas: warna 'ngejreng' dan mori kasar.",usage:"Karapan sapi, acara Madura, daily wear berani.",en:"Daring, clashing red-blue-green. Warrior palette. Rough mori, bold soul."},
  {id:"garutan",nama:"Garutan",daerah:"Garut",prov:"Jawa Barat",teknik:"Tulis",warna:["#a3a3a3","#7c2d12","#fdf6e3"],img:"https://loremflickr.com/600/400/batik,garut?lock=13",makna:"Flora Priangan - kalem Sunda",filosofi:"Bunga kecil-kecil, merica, lereng. Sunda = halus, tidak teriak. Putih dominan = kesederhanaan.",history:"Garut batik abad 19, pusat priyangan. Sering dilupakan karena kalah tenar Cirebon.",usage:"Kebaya Sunda, acara halus.",en:"Sundanese calm - tiny florals, white base. Soft, not loud. Priangan subtlety."},
  {id:"sasirangan",nama:"Sasirangan",daerah:"Banjarmasin",prov:"Kalimantan Selatan",teknik:"Kombinasi",warna:["#facc15","#1a365d","#dc2626"],img:"https://loremflickr.com/600/400/batik,sasirangan?lock=14",makna:"Menyirang - menjelujur kain, diikat lalu dicelup",filosofi:"Teknik ikat-jelujur khas Banjar, abad 12 era Lambung Mangkurat. Bukan canting, tapi tusuk.",history:"Asal dari kain sakral kerajaan Banjar, untuk pengobatan. Sekarang seragam Kalsel tiap Kamis.",usage:"Kampus, kantor Kalsel, fashion modern.",en:"Jelujur-ikat-dye, 12th century Banjar kingdom. Sacred healing cloth, now daily uniform."},
  {id:"tujuh-rupa",nama:"Tujuh Rupa",daerah:"Pekalongan",prov:"Jawa Tengah",teknik:"Tulis",warna:["#ec4899","#22c55e","#38bdf8","#facc15"],img:"https://loremflickr.com/600/400/batik,pekalongan?lock=15",makna:"Tujuh rupa alam - multikulturalisme",filosofi:"Satu kain ada Cina (burung hong), Jawa (parang), Belanda (bouquet). Pekalongan memang pelabuhan campur.",history:"Julukan Pekalongan, 1930-an. Motif encim (perempuan Tionghoa) jadi ikon.",usage:"Ekspor favorit turis - warna paling 'Indonesia campur'.",en:"Seven visages - Chinese, Javanese, Dutch in one cloth. Port city hybrid."},
  {id:"sekar-jagad",nama:"Sekar Jagad",daerah:"Yogyakarta",prov:"DI Yogyakarta",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#c9a86a"],img:"https://loremflickr.com/600/400/batik,sekar-jagad?lock=16",makna:"Peta dunia - sekar = peta, jagad = dunia",filosofi:"Pulau-pulau motif berbeda jadi satu kain = keberagaman Indonesia. Doa: siapa pakai, dunia terbuka.",history:"Motif tambal (patchwork) era 18, tiap tambalan motif berbeda - world map patchwork.",usage:"Hadiah diplomatik, koleksi. Paling sering jadi cover buku batik.",en:"World map patchwork - different islands, one cloth. Who wears it, world opens."}
];

const $ = s => document.querySelector(s);
const grid = $("#grid"), q = $("#q"), fProv = $("#fProv"), fTeknik = $("#fTeknik"), fSort = $("#fSort"), countEl = $("#count"), emptyEl = $("#empty"), heroSearch=$("#heroSearch");
const modal = $("#modal"), modalBg=$("#modalBg"), modalX=$("#modalX");
let cur = null;
let lang = "id";

function initProv(){
  const provs = [...new Set(BATIK.map(b=>b.prov))].sort();
  provs.forEach(p=>{ const o=document.createElement("option");o.value=p;o.textContent=p;fProv.appendChild(o)})
}
function cardHTML(b){
  const dots = b.warna.map(c=>`<i style="background:${c}" title="${c}"></i>`).join("");
  const img = b.img || `https://picsum.photos/seed/${b.id}/600/400`;
  return `<article class="card" data-id="${b.id}" tabindex="0">
    <div class="card-media"><img src="${img}" alt="${b.nama} - ${b.daerah}" loading="lazy" onerror="this.src='https://picsum.photos/seed/'+b.id+'/600/400'"><span class="media-label">${b.daerah} • ${b.prov}</span></div>
    <div class="card-body">
      <h3>${b.nama}</h3>
      <div class="sub">${b.daerah} - ${b.teknik} • ${b.warna.length} warna</div>
      <p class="meaning">${b.makna}</p>
      <div class="card-foot"><span class="pill ${b.teknik==='Tulis'?'tulis':b.teknik==='Cap'?'cap':'komb'}">${b.teknik}</span><span class="color-dots">${dots}</span></div>
    </div>
  </article>`
}
function render(){
  const term = (q.value||heroSearch.value||"").toLowerCase().trim();
  const prov = fProv.value, teknik = fTeknik.value, sort = fSort.value;
  let list = BATIK.filter(b=>{
    if(prov && b.prov!==prov) return false;
    if(teknik && b.teknik!==teknik) return false;
    if(term){
      const hay = `${b.nama} ${b.daerah} ${b.prov} ${b.makna} ${b.filosofi} ${b.en}`.toLowerCase();
      if(!hay.includes(term)) return false;
    }
    return true;
  });
  list.sort((a,b)=>{
    if(sort==="prov") return a.prov.localeCompare(b.prov);
    if(sort==="teknik") return a.teknik.localeCompare(b.teknik);
    return a.nama.localeCompare(b.nama);
  });
  grid.innerHTML = list.map(cardHTML).join("");
  countEl.textContent = `${list.length} motif`;
  emptyEl.classList.toggle("hidden", list.length!==0);
  grid.querySelectorAll(".card").forEach(el=>{
    el.addEventListener("click",()=>openModal(el.dataset.id));
    el.addEventListener("keydown",e=>{ if(e.key==="Enter") openModal(el.dataset.id)})
  });
}
function openModal(id){
  const b = BATIK.find(x=>x.id===id); if(!b) return;
  cur=b;
  $("#mName").textContent=b.nama;
  $("#mProv").textContent=`${b.daerah}, ${b.prov}`;
  const pill=$("#mTeknik"); pill.textContent=b.teknik; pill.className=`pill ${b.teknik==='Tulis'?'tulis':b.teknik==='Cap'?'cap':'komb'}`;
  $("#mMeaning").textContent=`“${b.makna}”`;
  $("#mFilosofi").textContent=b.filosofi;
  $("#mHistory").textContent=b.history;
  $("#mColors").innerHTML = `${b.warna.map(c=>`<span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${c};border:1px solid rgba(0,0,0,.15);vertical-align:middle;margin-right:4px"></span>${c}`).join(" • ")}`;
  $("#mUsage").textContent=b.usage;
  $("#mEn").textContent=b.en;
  const img = b.img || `https://picsum.photos/seed/${b.id}/800/600`;
  $("#mMedia").innerHTML=`<img src="${img}" alt="${b.nama}" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'">`;
  modal.classList.remove("hidden"); document.body.style.overflow="hidden";
}
function closeModal(){ modal.classList.add("hidden"); document.body.style.overflow=""; cur=null}
function shareCurrent(){
  if(!cur) return;
  const text = `${cur.nama} (${cur.daerah}, ${cur.prov}) - ${cur.makna}. Lihat di BN Batik Negara.`;
  if(navigator.share){ navigator.share({title:cur.nama, text}).catch(()=>{}) }
  else if(navigator.clipboard){ navigator.clipboard.writeText(text); alert("Tersalin: "+text)}
  else alert(text)
}
$("#langToggle").addEventListener("click",()=>{
  lang = lang==="id"?"en":"id";
  alert(lang==="en" ? "EN mode: all cards have English in detail modal. Full UI EN support can be added later if needed." : "Kembali ke ID.");
});
$("#burger").addEventListener("click",()=>$("#mobileMenu").classList.toggle("open"));
[q,fProv,fTeknik,fSort].forEach(el=>el.addEventListener("input",render));
heroSearch.addEventListener("input",()=>{ q.value=heroSearch.value; render()});
modalBg.addEventListener("click",closeModal); modalX.addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal()});
initProv(); render();

// Filter is O(n), sufficient for current dataset size (16 motifs)
window.openModal=openModal; window.closeModal=closeModal; window.shareCurrent=shareCurrent;
