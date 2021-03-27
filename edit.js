function sms() {
    alert("Vui lòng Đăng nhập để xem thông báo !");
}
class Manga {
    constructor(name, chapter, image, url) {
        this.name = name;
        this.chapter = chapter;
        this.image = image;
        this.url = url;
    }
};
let manga = [];
let bachluyenthanhthan = new Manga("Bách luyện thành thần", 714, "images/bachluyenthanhthan.jpg", "http://nhattruyen.com/truyen-tranh/bach-luyen-thanh-than-110926");
let toanchucphapsu = new Manga("Toàn chức pháp sư", 670, "images/toanchucphapsu.jpg", "http://nhattruyen.com/truyen-tranh/toan-chuc-phap-su-17023");
let tongtaitaithuong = new Manga("Tổng tài tại thượng", 365, "images/tongtaitaithuong.jpg", "http://nhattruyen.com/truyen-tranh/tong-tai-tai-thuong-14549");
let vancokiemthan = new Manga("Vạn cổ kiếm thần", 122, "images/vancokiemthan.jpg", "http://nhattruyen.com/truyen-tranh/van-co-kiem-than-18211");
let voluyendinhphong = new Manga("Võ luyện đỉnh phong", 1044, "images/voluyendinhphong.jpg", "http://nhattruyen.com/truyen-tranh/vo-luyen-dinh-phong-17696");
manga = [bachluyenthanhthan, toanchucphapsu, tongtaitaithuong, vancokiemthan, voluyendinhphong];
function showManga() {
    let tbManga = document.getElementById("depute");
    tbManga.innerHTML = "";
    manga.forEach(function(item) {
        tbManga.innerHTML += `<td><a href=${item.url}><img src=${item.image}><br><p>${item.name}</p><p>Chapter:${item.chapter}</p></a></td>`;
    });
}
showManga();
let mangaUp = new Array();
let daptoaitienha = new Manga("Đạp Toái Tiên Hà", 167, "images/daptoaitienha.jpg", "http://nhattruyen.com/truyen-tranh/dap-toai-tien-ha-23865");
let thomaysieucap = new Manga("Thợ Máy Siêu Cấp", 6, "images/thomaysieucap.jpg", "http://nhattruyen.com/truyen-tranh/tho-may-sieu-cap-38768");
let cuocphieuluubian = new Manga("Cuộc Phiêu Lưu Bí Ẩn Phần 7: Steel...", 43, "images/cuocphieuluubianphan7steelballrun.jpg", "http://nhattruyen.com/truyen-tranh/cuoc-phieu-luu-bi-an-phan-7-steel-ball-run-17019");
let tulakiemton = new Manga("Tu La Kiếm Tôn", 195, "images/tulakiemton.jpg", "http://nhattruyen.com/truyen-tranh/tu-la-kiem-ton-28123");
let nhatkiemdocton = new Manga("Nhất Kiếm Độc Tôn", 110, "images/nhatkiemdocton.jpg", "http://nhattruyen.com/truyen-tranh/nhat-kiem-doc-ton-34280");
let hokuhokuseinikumotoike = new Manga("Hokuhokusei Nikumo To Ike", 16, "images/hokuhokuseinikumotoike.jpg", "http://nhattruyen.com/truyen-tranh/hokuhokusei-ni-kumo-to-ike-23080");
let thereincarnationmagician = new Manga("The Reincarnation Magician Of The...", 45, "images/thereincarnationmagicianoftheinferioreyes.jpg", "http://nhattruyen.com/truyen-tranh/the-reincarnation-magician-of-the-inferior-eyes-21535");
let negakunvaposichan = new Manga("Nega-kun Và Posi-chan", 21, "images/negakunvaposichan.jpg", "http://nhattruyen.com/truyen-tranh/nega-kun-va-posi-chan-27438");
let truyenngandoraemon = new Manga("Truyện Ngắn Doraemon Mới Nhất", 8, "images/truyenngandoraemonmoinhat.jpg", "http://nhattruyen.com/truyen-tranh/truyen-ngan-doraemon-moi-nhat-27863");
let phongkhoithuonglam = new Manga("Phong Khởi Thương Lam", 489, "images/phongkhoithuonglam.jpg", "http://nhattruyen.com/truyen-tranh/phong-khoi-thuong-lam-43450");
let ngulinhthegioi = new Manga("Ngự Linh Thế Giới", 511, "images/ngulinhthegioi.jpg", "http://nhattruyen.com/truyen-tranh/ngu-linh-the-gioi-14490");
let mangaUp1 = [daptoaitienha, thomaysieucap, cuocphieuluubian, tulakiemton, nhatkiemdocton, hokuhokuseinikumotoike,
thereincarnationmagician, negakunvaposichan, truyenngandoraemon, phongkhoithuonglam, ngulinhthegioi, voluyendinhphong];
function showMangaUp1() {
    let tbMangaUp1 = document.getElementById("update1");
    tbMangaUp1.innerHTML = "";
    mangaUp1.forEach(function(item) {
        tbMangaUp1.innerHTML += `<tr>
                                <td><a href=${item.url}><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</a></td>
                                </tr>`;
    });
}
showMangaUp1();
let quyenbathienha = new Manga("Quyền Bá Thiên Hạ", 378, "images/quyenbathienha.jpg", "http://nhattruyen.com/truyen-tranh/quyen-ba-thien-ha-13091");
let caithedeton = new Manga("Cái Thế Đế Tôn", 179, "images/caithedeton.jpg", "http://nhattruyen.com/truyen-tranh/cai-the-de-ton-26423");
let hoahongniendai = new Manga("Hỏa Hồng Niên Đại Hắc Cốt Đường", 967, "images/hoahongniendaihaccotduong.jpg", "http://nhattruyen.com/truyen-tranh/hoa-hong-nien-dai-hac-cot-duong-17065");
let chienluyencaotiep = new Manga("Chiến Luyến Cáo Tiệp", 31, "images/chienluyencaotiep.jpg", "http://nhattruyen.com/truyen-tranh/chien-luyen-cao-tiep-20303");
let thukycuaalexandros = new Manga("Thư Ký Của Alexandros Đại Đế", 65, "images/thukycuaalexandrosdaide.jpg", "http://nhattruyen.com/truyen-tranh/thu-ky-cua-alexandros-dai-de-5335");
let khongxoasoconnguoiduoc = new Manga("Không Xóa Sổ Con Người Được!!", 2, "images/khongxoasoconnguoiduoc.jpg", "http://nhattruyen.com/truyen-tranh/khong-xoa-so-con-nguoi-duoc-38892");
let loop7kaimenoakuyaku = new Manga("Loop 7- Kaime No Akuyaku Reijou wa...", 1, "images/loop7kaimenoakuyakureijouwamototekikokude.jpg", "http://nhattruyen.com/truyen-tranh/loop-7-kaime-no-akuyaku-reijou-wa-moto-tekikoku-de-juukimama-na-hanayome-seikatsu-o-mankitsu-suru-38881");
let chugioimatnhataituyen = new Manga("Chư Giới Mạt Nhân Tại Tuyến", 18, "images/chugioimatnhantaituyen.jpg", "http://nhattruyen.com/truyen-tranh/chu-gioi-mat-nhan-tai-tuyen-36595");
let thanlongvuongtoa = new Manga("Thần Long Vương Tọa", 49, "images/thanlongvuongtoa.jpg", "http://nhattruyen.com/truyen-tranh/than-long-vuong-toa-35881");
let mrblue = new Manga("Mr.Blue", 8, "images/mrblue.jpg", "http://nhattruyen.com/truyen-tranh/mr-blue-34738");
let koujodenkanokateiyoushi = new Manga("Koujo Denka No Kateiyoushi", 2, "images/koujodenkanokateiyoushi.jpg", "http://nhattruyen.com/truyen-tranh/koujo-denka-no-kateikyoushi-38871");
let thanvothienton = new Manga("Thần Võ Thiên Tôn", 299, "images/thanvothienton.jpg", "http://nhattruyen.com/truyen-tranh/than-vo-thien-ton-24262");
let mangaUp2 = [quyenbathienha, caithedeton, hoahongniendai, chienluyencaotiep, thukycuaalexandros, khongxoasoconnguoiduoc,
loop7kaimenoakuyaku, chugioimatnhataituyen, thanlongvuongtoa, mrblue, koujodenkanokateiyoushi, thanvothienton];
function showMangaUp2() {
    let tbMangaUp2 = document.getElementById("update2");
    tbMangaUp2.innerHTML = "";
    mangaUp2.forEach(function(item) {
        tbMangaUp2.innerHTML += `<tr>
                                <td><a href=${item.url}><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</a></td>
                                </tr>`;
    });
}
showMangaUp2();
let runwaydewaratte = new Manga("Runway De Waratte", 138, "images/runwaydewaratte.jpg", "http://nhattruyen.com/truyen-tranh/runway-de-waratte-19932");
let suquyenrucua25d = new Manga("Sự Quyến Rũ Của 2.5D", 30, "images/suquyenrucua25d.jpg", "http://nhattruyen.com/truyen-tranh/su-quyen-ru-cua-25d-24819");
let thelive = new Manga("The Live", 67, "images/thelive.jpg", "http://nhattruyen.com/truyen-tranh/the-live-35688");
let anhon100 = new Manga("Ẩn Hôn 100%: Chọc Tức Vợ Yêu Mua...", 274, "images/anhon100choctucvoyeumua1tang1.jpg", "http://nhattruyen.com/truyen-tranh/an-hon-100-choc-tuc-vo-yeu-mua-mot-tang-mot-253551");
let toimuontrothanhtieuthu = new Manga("Tôi Muốn Trở Thành Tiểu Thư...", 91, "images/toimuontrothanhtieuthucongtuocphevat.jpg", "http://nhattruyen.com/truyen-tranh/toi-muon-tro-thanh-tieu-thu-cong-tuoc-phe-vat-30066");
let trongbongtoi = new Manga("Trong Bóng Tối", 43, "images/trongbongtoi.jpg", "http://nhattruyen.com/truyen-tranh/trong-bong-toi-34093");
let tsuyokutenewsaga = new Manga("Tsuyokute New Saga", 83, "images/tsuyokutenewsaga.jpg", "http://nhattruyen.com/truyen-tranh/tsuyokute-new-saga-3785");
let huyetmanhan = new Manga("Huyết Ma Nhân", 729, "images/huyetmanhan.jpg", "http://nhattruyen.com/truyen-tranh/huyet-ma-nhan-10001");
let trongsinhdothitutien = new Manga("Trọng Sinh Đô Thị Tu Tiên", 567, "images/trongsinhdothitutien.jpg", "http://nhattruyen.com/truyen-tranh/trong-sinh-do-thi-tu-tien-19413");
let toicuongphansaolohethong = new Manga("Tối Cường Phản Sáo Lộ Hệ Thống", 363, "images/toicuongphansaolohethong.jpg", "http://nhattruyen.com/truyen-tranh/toi-cuong-phan-sao-lo-he-thong-18237");
let vothanchuate = new Manga("Võ Thần Chúa Tể", 478, "images/vothanchuate.jpg", "http://nhattruyen.com/truyen-tranh/vo-than-chua-te-16199");
let satanophany = new Manga("Satanophany", 110, "images/satanophany.jpg", "http://nhattruyen.com/truyen-tranh/satanophany-16474");
let mangaUp3 = [runwaydewaratte, suquyenrucua25d, thelive, anhon100, toimuontrothanhtieuthu, trongbongtoi,
tsuyokutenewsaga, huyetmanhan, trongsinhdothitutien, toicuongphansaolohethong, vothanchuate, satanophany];
function showMangaUp3() {
    let tbMangaUp3 = document.getElementById("update3");
    tbMangaUp3.innerHTML = "";
    mangaUp3.forEach(function(item) {
        tbMangaUp3.innerHTML += `<tr>
                                <td><a href=${item.url}><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</a></td>
                                </tr>`;
    });
}
showMangaUp3();
let chugioitantheonline = new Manga("Chư Giới- Tận Thế Online", 18, "images/chugioitantheonline.jpg", "http://nhattruyen.com/truyen-tranh/chu-gioi-tan-the-online-36430");
let magicalexplorereroge = new Manga("Magical☆Explorer Eroge...", 3, "images/magicalexplorererogenoyuujinkyaranitensei.jpeg", "http://nhattruyen.com/truyen-tranh/magicalexplorer-eroge-no-yuujin-kyara-ni-tensei-shitakedo-game-chishiki-tsukatte-jiyuu-ni-ikiru-26090");
let mairimashitairumakun = new Manga("Mairimashita! Iruma- kun", 196, "images/mairimashitairukakun.jpg", "http://nhattruyen.com/truyen-tranh/mairimashita-iruma-kun-15985");
let sukedachi09 = new Manga("Sukedachi 09", 25, "images/sukedachi09.jpg", "http://nhattruyen.com/truyen-tranh/sukedachi-09-15339");
let longho5the = new Manga("Long Hổ 5 Thế", 173, "images/longho5the.jpg", "http://nhattruyen.com/truyen-tranh/long-ho-5-the-30070");
let digioicongchua = new Manga("Dị Giới Công Chúa", 3, "images/digioicongchua.jpg", "http://nhattruyen.com/truyen-tranh/di-gioi-cong-chua-38458");
let mokushiroku = new Manga("Mokushiroku No Yonkishi", 4, "images/mokushirokunoyonkishi.jpg", "http://nhattruyen.com/truyen-tranh/mokushiroku-no-yonkishi-38414");
let bocchidikiemban = new Manga("Bocchi Đi Kiếm Bạn", 36, "images/bocchidikiemban.png", "http://nhattruyen.com/truyen-tranh/bocchi-di-kiem-ban-9892");
let chiemcaidinhnuilamdaivuong= new Manga("Ciếm Cái Đỉnh Núi Làm Đại Vương", 131, "images/chiemcaidinhnuilamdaivuong.jpg", "http://nhattruyen.com/truyen-tranh/chiem-cai-dinh-nui-lam-dai-vuong-22890");
let mangaUp4 = [chugioitantheonline, magicalexplorereroge, mairimashitairumakun, sukedachi09, longho5the, digioicongchua,
mokushiroku, bocchidikiemban, chiemcaidinhnuilamdaivuong, bachluyenthanhthan, tongtaitaithuong, toanchucphapsu];
function showMangaUp4() {
    let tbMangaUp4 = document.getElementById("update4");
    tbMangaUp4.innerHTML = "";
    mangaUp4.forEach(function(item) {
        tbMangaUp4.innerHTML += `<tr>
                                <td><a href=${item.url}><img src=${item.image}><br>${item.name}<br>Chapter:${item.chapter}</a></td>
                                </tr>`;
    });
}
showMangaUp4();
let mangaTop = [voluyendinhphong, toanchucphapsu, tongtaitaithuong, trongsinhdothitutien, hoahongniendai, vothanchuate,
thanvothienton, huyetmanhan, vothanchuate, phongkhoithuonglam];
function showMangaTop() {
    let tbMangaTop = document.getElementById("rank");
    tbMangaTop.innerHTML = "";
    let top = 1;
    mangaTop.forEach(function(item) {
        tbMangaTop.innerHTML += `<tr style="border: solid 1px grey;">
                                <td style="text-align: right; font-size: 24px; width: 20px;">${top++}</td><td><a href=${item.url}><img src=${item.image}></a></td><td colspan="2" style="font-weight: bold;">${item.name}<br><span style="font-weight: normal;">Chapter:${item.chapter}</span></td></a>
                                </tr>`;
    });
}
showMangaTop();

class MemberComment {
    constructor(manga, chapter, name, avatar, comment) {
        this.manga = manga;
        this.chapter = chapter;
        this.name = name;
        this.avatar = avatar;
        this.comment = comment;
    }
}
let duongbui = new MemberComment("Võ Luyện Đỉnh Phong", 1046, "Duong Bui", "images/anonymous.png",
"Cái đoạn main ở bí cảnh Man tộc được gì k ae, t đọc đến đấy thì hết cmnr");
let tranmanhtung = new MemberComment("Bổn Tế Tu Chính Là Tiện Đạo", 97, "Tran Manh Tung", "images/anonymous.png",
"Đừng nói la h main chưa chết mà có chết mà thằng này lại dám ảo tưởng con chị main để y");
let chanstudio = new MemberComment("Nhất Kiếm Độc Tôn", 110, "Chan Studio", "images/anonymous.png",
"nạp vip vào ~~");
let jackdote = new MemberComment("Tổng Tài Tại Thượng", 365, "Jack Đồ Tể", "images/anonymous.png",
"Bị hiểu lầm có con với tổng tài và ông nội đó đòi có đứa con :v");
let phamvan = new MemberComment("Xuyên Không Vào Thế Giới...", 193, "Phạm Văn", "images/anonymous.png",
"main bị nó hiếp hay nó bị main hiếp");
let ngaothien = new MemberComment("Ta Nhặt Được Thuộc Tính...", 31, "Ngạo Thiên", "images/anonymous.png",
"ám hiệu mật, mà nó truyền cả tông.");
let newComment = [duongbui, tranmanhtung, chanstudio, jackdote, phamvan, ngaothien];
function showComment() {
    let tbComment = document.getElementById("comment");
    tbComment.innerHTML = "";
    newComment.forEach(function(item) {
        tbComment.innerHTML += `<tr style="border-top: solid 1px grey; border-left: solid 1px grey; border-right: solid 1px grey;">
                                <td colspan="3" style="color: black; font-weight: bold;">${item.manga}</td><td  style="color: blue; text-align: right;">Chapter${item.chapter}</td>
                                </tr>
                                <tr style=" border-left: solid 1px grey; border-right: solid 1px grey; border-bottom: solid 1px grey;">
                                <td><img src=${item.avatar} style="width: 45px; height:50px;"></td><td colspan="3" style="color: blue; font-weight: bold;">${item.name}<br><span style="color: black; font-weight: normal; font-style: italic;">${item.comment}</span>
                                </tr>`;
    });
}
showComment();

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}