const BATIK = [
  {id:"parang-kusumo",nama:"Parang Kusumo",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#1a365d"],img:"https://images.unsplash.com/photo-1762111908673-4c0f4643baa9?auto=format&fit=crop&w=600&q=80&sig=1",makna:"Kekuasaan yang bijak - parang = senjata, kusumo = bunga raja",filosofi:"Motif larangan keraton. Hanya raja & keluarga boleh pakai. Lurik parang melambangkan ombak yang tak pernah putus - penguasa harus terus bergerak, tapi tetap halus.",history:"Dicipta era Mataram Islam, abad 16. Dari kata 'pereng' (lereng) - bentuknya seperti lereng curam.",usage:"Upacara keraton, pernikahan adat Solo. Jangan pakai sembarangan di acara santai.",en:"Royal forbidden pattern. Symbol of wise power - wavy dagger means relentless yet refined leadership. Once only for kings."},
  {id:"mega-mendung",nama:"Mega Mendung",daerah:"Cirebon",prov:"Jawa Barat",teknik:"Tulis",warna:["#1a365d","#2a9d8f","#e0f2fe"],img:"https://images.unsplash.com/photo-1761516659531-81f8cce1b480?auto=format&fit=crop&w=600&q=80&sig=2",makna:"Langit mendung yang menaungi - kesabaran & penahan amarah",filosofi:"7 gradasi warna dari gelap ke terang. Mendung tebal di atas, cerah di bawah - orang besar harus mampu menahan emosi, melindungi yang di bawah.",history:"Pengaruh Tionghoa abad 16, dari pelabuhan Cirebon. Awan bergelombang khas pesisir utara Jawa.",usage:"Kantor, kampus, acara semi-formal. Paling dicari turis karena gradasi cantik.",en:"Seven cloud gradations - teaches patience. Thick clouds above, bright below: leaders must shield, not burden."},
  {id:"kawung",nama:"Kawung",daerah:"Yogyakarta",prov:"DI Yogyakarta",teknik:"Tulis",warna:["#7c2d12","#c9a86a","#fffbf5"],img:"https://images.unsplash.com/photo-1761516126097-98d996214b75?auto=format&fit=crop&w=600&q=80&sig=3",makna:"Kejujuran & keseimbangan - buah kawung/aren yang murni",filosofi:"4 belah buah aren yang tertata rapi = 4 nafsu manusia yang harus terkendali. Titik tengah = hati yang bersih.",history:"Motif paling tua, era Mataram Kuno abad 9. Ditemukan di candi Prambanan.",usage:"Seragam PNS Yogya hari tertentu, batik formal netral.",en:"Oldest motif, 9th century. Four palm fruits = four human desires to balance. Center dot = pure heart."},
  {id:"sidomukti",nama:"Sidomukti",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#2b1d12"],img:"https://images.unsplash.com/photo-1762111067697-46767ad6fbb6?auto=format&fit=crop&w=600&q=80&sig=4",makna:"Kemakmuran & harapan - sido = jadi, mukti = makmur",filosofi:"Doa agar pemakai hidup berkecukupan. Isen-isen mikro di dalam menunjukkan detail hidup yang harus dirawat.",history:"Kembangan dari motif Semen, era Kasunanan Surakarta abad 18.",usage:"Pernikahan, lamaran - doa kemakmuran untuk pengantin.",en:"Prosperity prayer - 'may life be prosperous'. Tiny fills mean life details matter."},
  {id:"truntum",nama:"Truntum",daerah:"Solo",prov:"Jawa Tengah",teknik:"Tulis",warna:["#2b1d12","#fdf6e3"],img:"https://images.unsplash.com/photo-1762111067841-638cbbe9c6c7?auto=format&fit=crop&w=600&q=80&sig=5",makna:"Cinta yang tumbuh lagi - tuntas-tum-tum, bintang yang tumbuh",filosofi:"Dicipta Kanjeng Ratu untuk menumbuhkan cinta raja yang pudar. Bintang kecil bertaburan = cinta yang kembali bersinar.",history:"Dibuat Ratu Pakubuwono III, abad 18, dari patah hati yang dijahit jadi doa.",usage:"Orang tua pakai saat nikahkan anak - simbol cinta yang diturunkan.",en:"Queen created it to regrow king's love. Scattered stars = love that blooms again."},
  {id:"lasem",nama:"Lasem Tiga Negeri",daerah:"Lasem",prov:"Jawa Tengah",teknik:"Kombinasi",warna:["#dc2626","#1a365d","#facc15"],img:"https://images.unsplash.com/photo-1762111908757-2444be02131d?auto=format&fit=crop&w=600&q=80&sig=6",makna:"Akulturasi - Tionghoa, Jawa, Belanda dalam satu kain",filosofi:"Merah Lasem (Chinese), biru sogan (Jawa), putih (Belanda). Bukti Indonesia memang persilangan, bukan pemurnian.",history:"Lasem kota candu & batik tertua pesisir, abad 14. Disebut 'Little China of Java'.",usage:"Koleksi, pameran budaya. Harga tinggi karena 3x pewarnaan.",en:"Three-nation batik: Chinese red, Javanese blue, Dutch white. Proof Indonesia is hybrid, not pure."},
  {id:"pekalongan",nama:"Pekalongan Pesisir",daerah:"Pekalongan",prov:"Jawa Tengah",teknik:"Cap",warna:["#ec4899","#22c55e","#facc15","#38bdf8"],img:"https://images.unsplash.com/photo-1761517100146-f1f3ad9270a2?auto=format&fit=crop&w=600&q=80&sig=7",makna:"Keceriaan pesisir - bunga, kupu, burung bebas warna",filosofi:"Bebas pakem keraton. Pesisir = dagang = warna berani campur. Lawan dari sogan kraton yang kalem.",history:"Abad 19, Pekalongan jadi 'Kota Batik' lewat jalur perdagangan. Pengaruh Arab, Belanda, Tionghoa.",usage:"Sehari-hari, kerja kreatif, acara santai.",en:"Coastal freedom - no palace rules. Bright flora, butterflies. Batik's pop side."},
  {id:"bali-merak",nama:"Merak Abyorhokokai",daerah:"Gianyar",prov:"Bali",teknik:"Tulis",warna:["#059669","#f59e0b","#1a365d"],img:"https://images.unsplash.com/photo-1762111067697-46767ad6fbb6?auto=format&fit=crop&w=600&q=80&sig=8",makna:"Keanggunan & kebanggaan - burung merak yang mekar",filosofi:"Ciptaan Iwan Tirta era 1990s untuk Bali modern. Merak = percaya diri, tapi tetap anggun.",history:"Batik Bali baru marak 1970-an, tak terikat pakem Jawa. Banyak motif flora-fauna tropis.",usage:"Resort, wedding Bali, turis wajib.",en:"Modern Bali, 1990s. Peacock = proud yet graceful. Tourist favorite."},
  {id:"dayak",nama:"Batik Dayak Batang Garing",daerah:"Palangkaraya",prov:"Kalimantan Tengah",teknik:"Tulis",warna:["#B71827","#4D875E","#D8C732"],img:"https://down-id.img.susercontent.com/file/id-11134207-7r98x-lse40c8megivde",makna:"Pohon kehidupan - Batang Garing, poros dunia Dayak",filosofi:"Pohon kosmik yang hubungkan atas-bawah-dunia tengah. Burung enggang di puncak = penjaga.",history:"Motif ukir rumah betang diadaptasi ke kain sejak 2000-an. Upaya Dayak klaim ruang tekstil.",usage:"Acara adat Dayak, festival budaya.",en:"Tree of life, Dayak cosmos. Hornbill on top = guardian. From longhouse carvings to cloth."},
  {id:"sentani",nama:"Sentani Papua",daerah:"Jayapura",prov:"Papua",teknik:"Cap",warna:["#dc2626","#facc15","#2b1d12"],img:"https://images.unsplash.com/photo-1761516659531-81f8cce1b480?auto=format&fit=crop&w=600&q=80&sig=10",makna:"Tifa & ombak Danau Sentani - ritme & alam",filosofi:"Geometri tifa, perahu, danau. Papua ikut menulis batik - bukan hanya Jawa. Indonesia timur punya kain juga.",history:"Gerakan 2010-an, pengrajin Papua belajar canting di Jawa lalu pulang bawa teknik.",usage:"Festival Port Numbay, seragam lokal.",en:"Tifa drum, Sentani waves. East Indonesia writes batik too - not just Java."},
  {id:"betawi",nama:"Betawi Tumpal Pucuk Rebung",daerah:"Jakarta",prov:"DKI Jakarta",teknik:"Cap",warna:["#dc2626","#22c55e","#facc15"],img:"https://images.unsplash.com/photo-1761516126097-98d996214b75?auto=format&fit=crop&w=600&q=80&sig=11",makna:"Pucuk rebung - pertumbuhan & harapan baru",filosofi:"Tumpal segitiga di tepi = doa tumbuh ke atas. Betawi campur Melayu, Arab, Cina - warna ngejreng itu identitas.",history:"Batik Betawi hampir punah 1970-an, bangkit lagi lewat Sudin Kebudayaan DKI 2000-an.",usage:"Abang None, seragam DKI, ondel-ondel backdrop.",en:"Bamboo shoot triangle = growth. Betawi loud colors = mixed Malay-Arab-Chinese identity."},
  {id:"madura",nama:"Madura Sasegan",daerah:"Pamekasan",prov:"Jawa Timur",teknik:"Tulis",warna:["#dc2626","#1a365d","#22c55e"],img:"https://images.unsplash.com/photo-1762111067697-46767ad6fbb6?auto=format&fit=crop&w=600&q=80&sig=12",makna:"Berani & tegas - merah darah, biru laut",filosofi:"Madura tak malu warna tabrak. Sasegan = sisik naga? Banyak tafsir. Yang jelas: petarung.",history:"Madura batik sejak abad 17, dibawa ulama. Khas: warna 'ngejreng' dan mori kasar.",usage:"Karapan sapi, acara Madura, daily wear berani.",en:"Daring, clashing red-blue-green. Warrior palette. Rough mori, bold soul."},
  {id:"garutan",nama:"Garutan",daerah:"Garut",prov:"Jawa Barat",teknik:"Tulis",warna:["#a3a3a3","#7c2d12","#fdf6e3"],img:"https://images.unsplash.com/photo-1762111067841-638cbbe9c6c7?auto=format&fit=crop&w=600&q=80&sig=13",makna:"Flora Priangan - kalem Sunda",filosofi:"Bunga kecil-kecil, merica, lereng. Sunda = halus, tidak teriak. Putih dominan = kesederhanaan.",history:"Garut batik abad 19, pusat priyangan. Sering dilupakan karena kalah tenar Cirebon.",usage:"Kebaya Sunda, acara halus.",en:"Sundanese calm - tiny florals, white base. Soft, not loud. Priangan subtlety."},
  {id:"sasirangan",nama:"Sasirangan",daerah:"Banjarmasin",prov:"Kalimantan Selatan",teknik:"Kombinasi",warna:["#facc15","#1a365d","#dc2626"],img:"https://images.unsplash.com/photo-1762111908757-2444be02131d?auto=format&fit=crop&w=600&q=80&sig=14",makna:"Menyirang - menjelujur kain, diikat lalu dicelup",filosofi:"Teknik ikat-jelujur khas Banjar, abad 12 era Lambung Mangkurat. Bukan canting, tapi tusuk.",history:"Asal dari kain sakral kerajaan Banjar, untuk pengobatan. Sekarang seragam Kalsel tiap Kamis.",usage:"Kampus, kantor Kalsel, fashion modern.",en:"Jelujur-ikat-dye, 12th century Banjar kingdom. Sacred healing cloth, now daily uniform."},
  {id:"tujuh-rupa",nama:"Tujuh Rupa",daerah:"Pekalongan",prov:"Jawa Tengah",teknik:"Tulis",warna:["#ec4899","#22c55e","#38bdf8","#facc15"],img:"https://images.unsplash.com/photo-1761517100146-f1f3ad9270a2?auto=format&fit=crop&w=600&q=80&sig=15",makna:"Tujuh rupa alam - multikulturalisme",filosofi:"Satu kain ada Cina (burung hong), Jawa (parang), Belanda (bouquet). Pekalongan memang pelabuhan campur.",history:"Julukan Pekalongan, 1930-an. Motif encim (perempuan Tionghoa) jadi ikon.",usage:"Ekspor favorit turis - warna paling 'Indonesia campur'.",en:"Seven visages - Chinese, Javanese, Dutch in one cloth. Port city hybrid."},
  {id:"sekar-jagad",nama:"Sekar Jagad",daerah:"Yogyakarta",prov:"DI Yogyakarta",teknik:"Tulis",warna:["#7c2d12","#fdf6e3","#c9a86a"],img:"https://images.unsplash.com/photo-1762111067697-46767ad6fbb6?auto=format&fit=crop&w=600&q=80&sig=16",makna:"Peta dunia - sekar = peta, jagad = dunia",filosofi:"Pulau-pulau motif berbeda jadi satu kain = keberagaman Indonesia. Doa: siapa pakai, dunia terbuka.",history:"Motif tambal (patchwork) era 18, tiap tambalan motif berbeda - world map patchwork.",usage:"Hadiah diplomatik, koleksi. Paling sering jadi cover buku batik.",en:"World map patchwork - different islands, one cloth. Who wears it, world opens."}
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
      <p class="meaning">${lang==="en" ? b.en : b.makna}</p>
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
  countEl.textContent = `${list.length}${I18N[lang].countSuffix}`;
  emptyEl.textContent = I18N[lang].empty;
  emptyEl.classList.toggle("hidden", list.length!==0);
  grid.querySelectorAll(".card").forEach(el=>{
    el.addEventListener("click",()=>openModal(el.dataset.id));
    el.addEventListener("keydown",e=>{ if(e.key==="Enter") openModal(el.dataset.id)})
  });
}
function setAdaptiveBg(imgEl, fallback){
  const container=document.getElementById("mMedia");
  if(!container) return;
  container.style.background=fallback;
  try{
    const c=document.createElement("canvas");
    const ctx=c.getContext("2d");
    c.width=20; c.height=20;
    ctx.drawImage(imgEl,0,0,20,20);
    const d=ctx.getImageData(0,10,20,1).data;
    let r=0,g=0,b=0,n=20;
    for(let i=0;i<d.length;i+=4){ r+=d[i]; g+=d[i+1]; b+=d[i+2]; }
    r=Math.round(r/n); g=Math.round(g/n); b=Math.round(b/n);
    container.style.background=`rgb(${r},${g},${b})`;
  }catch(e){
    container.style.background=fallback;
  }
}
function openModal(id){
  const b = BATIK.find(x=>x.id===id); if(!b) return;
  cur=b;
  $("#mName").textContent=b.nama;
  $("#mProv").textContent=`${b.daerah}, ${b.prov}`;
  const pill=$("#mTeknik"); pill.textContent=b.teknik; pill.className=`pill ${b.teknik==='Tulis'?'tulis':b.teknik==='Cap'?'cap':'komb'}`;
  $("#mMeaning").textContent=`\u201c${lang==="en" ? b.en : b.makna}\u201d`;
  $("#mFilosofi").textContent=b.filosofi;
  $("#mHistory").textContent=b.history;
  $("#mColors").innerHTML = `${b.warna.map(c=>`<span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${c};border:1px solid rgba(0,0,0,.15);vertical-align:middle;margin-right:4px"></span>${c}`).join(" • ")}`;
  $("#mUsage").textContent=b.usage;
  $("#mEn").textContent=b.en;
  const enBox=document.querySelector(".m-en");
  if(enBox) enBox.style.display = lang==="en" ? "none" : "block";
  const img = b.img || `https://picsum.photos/seed/${b.id}/800/600`;
  const fallback=b.warna && b.warna[0] ? b.warna[0] : "var(--surface-1)";
  const mMedia=document.getElementById("mMedia");
  if(mMedia) mMedia.style.background=fallback;
  $("#mMedia").innerHTML=`<img src="${img}" alt="${b.nama}" style="max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;display:block" crossorigin="anonymous" onerror="this.style.display='none'">`;
  const imgEl=mMedia ? mMedia.querySelector("img") : null;
  if(imgEl){
    imgEl.onload=()=>setAdaptiveBg(imgEl, fallback);
    if(imgEl.complete) setAdaptiveBg(imgEl, fallback);
  }
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
const I18N={
  id:{
    navKoleksi:"Koleksi",navMakna:"Makna & Filosofi",navBela:"Bela Negara",navJelajah:"Jelajahi Batik",
    heroBadge:"Warisan UNESCO 2009 - Milik Bersama 270 Juta Warga",
    heroTitle:'Lestarikan<br><span class="serif">Batik,</span> Bela<br>Negara.',
    heroDesc:'Bela negara tak selalu angkat senjata. Kadang sesederhana <strong>mengenal, memakai, dan menjaga</strong> kain yang bercerita 400 tahun - agar turis mengerti, warga ingat.',
    heroSearch:"Cari motif, daerah, atau makna...  cth: Mega Mendung",
    heroMeta:'<span><b>16</b> motif terkurasi</span><span class="dot">\u2022</span><span><b>11</b> provinsi</span><span class="dot">\u2022</span><span><b>3</b> teknik: Tulis, Cap, Kombinasi</span>',
    heroBtn1:"Jelajahi Koleksi →",heroBtn2:"Kenapa ini bela negara?",
    koleksiEyebrow:"DATABASE - DIKURASI UNTUK TURIS & WARGA LOKAL",koleksiTitle:"Koleksi Batik Indonesia",koleksiDesc:"Tap kartu untuk baca filosofi, teknik, dan warna. Semua konten dwibahasa - Indonesia & English.",
    filterAllProv:"Semua Provinsi",filterAllTeknik:"Semua Teknik",sortNama:"Urut: Nama A-Z",sortProv:"Urut: Provinsi",sortTeknik:"Urut: Teknik",
    maknaEyebrow:"FILOSOFI DALAM KAIN",maknaTitle:"Setiap guratan ada doa.",maknaDesc:'Batik bukan hiasan. <b>Parang</b> untuk keberanian, <b>Kawung</b> untuk kejujuran, <b>Truntum</b> untuk cinta yang tumbuh lagi. MEMAHAMI makna = menghargai pembuatnya.',
    belaEyebrow:"BELA NEGARA VERSI MAHASISWA",belaTitle:"Bela negara dari tindakan kecil - lewat batik.",
    touristTitle:"For Tourists - Quick Guide",touristDesc:'Batik <b>Tulis</b> = hand-drawn (weeks, $), <b>Cap</b> = stamped (hours, $), <b>Kombinasi</b> = both. Real batik has pattern on <b>both sides</b>. Check tag: \u201cBatik Tulis Asli\u201d.',
    footerDesc:"Batik Negara - database batik Indonesia sebagai aksi bela negara. Dibuat mahasiswa, untuk Indonesia.",
    footerJelajah:"Jelajah",footerEdukasi:"Edukasi",footerBN:"BN",
    countSuffix:" motif",empty:"Tidak ada motif cocok. Coba kata kunci lain.",
    modalFilosofi:"Filosofi",modalSejarah:"Sejarah Singkat",modalWarna:"Warna & Bahan",modalPakai:"Pemakaian",modalEnTitle:"EN - For Tourists",
    btnBagikan:"Bagikan Motif",btnTutup:"Tutup",btnBrowse:"Browse Collection"
  },
  en:{
    navKoleksi:"Collection",navMakna:"Meaning & Philosophy",navBela:"Defend the Nation",navJelajah:"Explore Batik",
    heroBadge:"UNESCO Heritage 2009 - Shared by 270 Million",
    heroTitle:'Preserve<br><span class="serif">Batik,</span> Defend<br>the Nation.',
    heroDesc:'Defending the nation is not always about weapons. Sometimes it is as simple as <strong>knowing, wearing, and preserving</strong> a 400-year-old cloth - so tourists understand and locals remember.',
    heroSearch:"Search motif, region, or meaning... e.g. Mega Mendung",
    heroMeta:'<span><b>16</b> curated motifs</span><span class="dot">\u2022</span><span><b>11</b> provinces</span><span class="dot">\u2022</span><span><b>3</b> techniques: Tulis, Cap, Kombinasi</span>',
    heroBtn1:"Explore Collection →",heroBtn2:"Why is this defending the nation?",
    koleksiEyebrow:"DATABASE - CURATED FOR TOURISTS & LOCALS",koleksiTitle:"Indonesian Batik Collection",koleksiDesc:"Tap a card to read philosophy, technique, and colors. Bilingual content - Indonesian & English.",
    filterAllProv:"All Provinces",filterAllTeknik:"All Techniques",sortNama:"Sort: Name A-Z",sortProv:"Sort: Province",sortTeknik:"Sort: Technique",
    maknaEyebrow:"PHILOSOPHY IN CLOTH",maknaTitle:"Every stroke is a prayer.",maknaDesc:'Batik is not decoration. <b>Parang</b> for courage, <b>Kawung</b> for honesty, <b>Truntum</b> for love that grows again. Understanding meaning = honoring the maker.',
    belaEyebrow:"DEFENDING THE NATION - STUDENT VERSION",belaTitle:"Defend the nation through small daily batik actions.",
    touristTitle:"For Tourists - Quick Guide",touristDesc:'Batik <b>Tulis</b> = hand-drawn (weeks, $), <b>Cap</b> = stamped (hours, $), <b>Kombinasi</b> = both. Real batik has pattern on <b>both sides</b>. Check tag: \u201cBatik Tulis Asli\u201d.',
    footerDesc:"Batik Negara - Indonesian batik database as a student action to defend the nation. Made by students, for Indonesia.",
    footerJelajah:"Explore",footerEdukasi:"Education",footerBN:"BN",
    countSuffix:" motifs",empty:"No matching motifs. Try another keyword.",
    modalFilosofi:"Philosophy",modalSejarah:"History",modalWarna:"Colors & Material",modalPakai:"Usage",modalEnTitle:"EN - For Tourists",
    btnBagikan:"Share Motif",btnTutup:"Close",btnBrowse:"Browse Collection"
  }
};
function applyLang(){
  const d=I18N[lang];
  document.documentElement.lang=lang;
  const nav=document.querySelectorAll(".nav-links a");
  if(nav[0]) nav[0].textContent=d.navKoleksi;
  if(nav[1]) nav[1].textContent=d.navMakna;
  if(nav[2]) nav[2].textContent=d.navBela;
  const navBtn=document.querySelector(".nav-actions .btn-primary");
  if(navBtn) navBtn.textContent=d.navJelajah;
  const badge=document.querySelector(".hero-badge");
  if(badge) badge.textContent=d.heroBadge;
  const heroH1=document.querySelector(".hero-card h1");
  if(heroH1) heroH1.innerHTML=d.heroTitle;
  const heroP=document.querySelector(".hero-card p");
  if(heroP) heroP.innerHTML=d.heroDesc;
  const hs=document.getElementById("heroSearch");
  if(hs) hs.placeholder=d.heroSearch;
  const hm=document.querySelector(".hero-meta");
  if(hm) hm.innerHTML=d.heroMeta;
  const hb=document.querySelectorAll(".hero-actions a");
  if(hb[0]) hb[0].textContent=d.heroBtn1;
  if(hb[1]) hb[1].textContent=d.heroBtn2;
  const ey=document.querySelector("#koleksi .eyebrow");
  if(ey) ey.textContent=d.koleksiEyebrow;
  const kt=document.querySelector("#koleksi h2");
  if(kt) kt.textContent=d.koleksiTitle;
  const kd=document.querySelector("#koleksi .section-head p");
  if(kd) kd.textContent=d.koleksiDesc;
  const fp=document.getElementById("fProv");
  if(fp && fp.options[0]) fp.options[0].textContent=d.filterAllProv;
  const ft=document.getElementById("fTeknik");
  if(ft && ft.options[0]) ft.options[0].textContent=d.filterAllTeknik;
  const fs=document.getElementById("fSort");
  if(fs){ if(fs.options[0]) fs.options[0].textContent=d.sortNama; if(fs.options[1]) fs.options[1].textContent=d.sortProv; if(fs.options[2]) fs.options[2].textContent=d.sortTeknik; }
  const me=document.querySelector("#makna .eyebrow");
  if(me) me.textContent=d.maknaEyebrow;
  const mt=document.querySelector("#makna h2");
  if(mt) mt.textContent=d.maknaTitle;
  const md=document.querySelector("#makna .split p");
  if(md) md.innerHTML=d.maknaDesc;
  const be=document.querySelector("#bela .eyebrow");
  if(be) be.textContent=d.belaEyebrow;
  const bt=document.querySelector("#bela h2");
  if(bt) bt.textContent=d.belaTitle;
  const fd=document.querySelector(".footer-in div p");
  if(fd) fd.textContent=d.footerDesc;
  const fj=document.querySelectorAll(".footer-in h4");
  if(fj[0]) fj[0].textContent=d.footerJelajah;
  if(fj[1]) fj[1].textContent=d.footerEdukasi;
  if(fj[2]) fj[2].textContent=d.footerBN;
  const trH3=document.querySelector(".tourist h3");
  if(trH3) trH3.textContent=d.touristTitle;
  const trP=document.querySelector(".tourist p");
  if(trP) trP.innerHTML=d.touristDesc;
  const trBtn=document.querySelector(".tourist-cta .btn-primary");
  if(trBtn) trBtn.textContent=d.btnBrowse;
  const trSpan=document.querySelector(".tourist-cta span");
  if(trSpan) trSpan.textContent=lang==="id" ? "Semua kartu ada EN translation - tap “EN” di detail." : "All cards have EN translation - tap “EN” in details.";
  const mgH4=document.querySelectorAll(".m-grid h4");
  if(mgH4[0]) mgH4[0].textContent=d.modalFilosofi;
  if(mgH4[1]) mgH4[1].textContent=d.modalSejarah;
  if(mgH4[2]) mgH4[2].textContent=d.modalWarna;
  if(mgH4[3]) mgH4[3].textContent=d.modalPakai;
  const meH4=document.querySelector(".m-en h4");
  if(meH4) meH4.textContent=d.modalEnTitle;
  const mb=document.querySelectorAll(".modal-actions button");
  if(mb[0]) mb[0].textContent=d.btnBagikan;
  if(mb[1]) mb[1].textContent=d.btnTutup;
  const btn=document.getElementById("langToggle");
  if(btn) btn.textContent=lang==="id" ? "ID / EN" : "EN / ID";
  render();
}
$("#langToggle").addEventListener("click",()=>{
  lang = lang==="id"?"en":"id";
  applyLang();
});
$("#burger").addEventListener("click",()=>$("#mobileMenu").classList.toggle("open"));
[q,fProv,fTeknik,fSort].forEach(el=>el.addEventListener("input",render));
heroSearch.addEventListener("input",()=>{ q.value=heroSearch.value; render()});
modalBg.addEventListener("click",closeModal); modalX.addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeModal()});
initProv(); render();

// Filter is O(n), sufficient for current dataset size (16 motifs)
window.openModal=openModal; window.closeModal=closeModal; window.shareCurrent=shareCurrent;
