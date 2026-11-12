
(function(){
  var tb=document.getElementById('topbar');
  window.addEventListener('scroll',function(){tb.classList.toggle('scrolled',window.scrollY>60);},{passive:true});
  var dr=document.getElementById('drawer'),bg=document.getElementById('burger'),dc=document.getElementById('dclose');
  if(bg)bg.onclick=function(){dr.style.transform='translateY(0)';dr.style.visibility='visible';document.body.style.overflow='hidden';};
  function cd(){dr.style.transform='translateY(-100%)';document.body.style.overflow='';}
  if(dc)dc.onclick=cd; dr.querySelectorAll('a').forEach(function(a){a.onclick=cd;});
  var lbx=document.getElementById('langbox'),lbt=document.getElementById('langbtn');
  if(lbx&&lbt){lbt.onclick=function(e){e.stopPropagation();lbx.classList.toggle('open');};document.addEventListener('click',function(){lbx.classList.remove('open');});}
  var L=['tr','en','ru','de'];
  var T={
    announce:["2027 Erken Rezervasyon fırsatları başladı — yerini şimdi ayırt!","2027 Early Booking offers have started — reserve your spot now!","Стартовали предложения раннего бронирования на 2027 — забронируйте место сейчас!","Frühbucher-Angebote für 2027 sind gestartet — sichern Sie sich jetzt Ihren Platz!"],
    nav_about:["Hakkımızda","About","О нас","Über uns"],
    nav_rooms:["Odalar","Rooms","Номера","Zimmer"],
    nav_spa:["Spa","Spa","Спа","Spa"],
    nav_dining:["Lezzet","Dining","Кухня","Kulinarik"],
    nav_gallery:["Galeri","Gallery","Галерея","Galerie"],
    nav_blog:["Blog","Blog","Блог","Blog"],
    nav_contact:["İletişim","Contact","Контакты","Kontakt"],
    btn_res:["Rezervasyon","Book Now","Бронировать","Buchen"],
    btn_res_yap:["Rezervasyon Yap","Book Now","Забронировать","Jetzt buchen"],
    hero_h1:["Denize sıfır, <span>capcanlı</span> bir Bodrum tatili","A <span>vibrant</span> Bodrum holiday, right by the sea","<span>Яркий</span> отдых в Бодруме у самого моря","Ein <span>lebendiger</span> Bodrum-Urlaub direkt am Meer"],
    hero_lead:["Güvercinlik'in turkuaz koyunda; havuz, spa ve zengin lezzetlerle dolu, ferah ve keyifli bir tatil seni bekliyor.","In the turquoise bay of Güvercinlik, a spacious and cheerful holiday full of pool, spa and rich flavours awaits you.","В бирюзовой бухте Гюверджинлик вас ждёт просторный и радостный отдых с бассейном, спа и изысканными блюдами.","In der türkisfarbenen Bucht von Güvercinlik erwartet Sie ein großzügiger, fröhlicher Urlaub voller Pool, Spa und feiner Küche."],
    hero_discover:["Keşfet","Discover","Открыть","Entdecken"],
    bk_in:["Giriş","Check-in","Заезд","Anreise"],
    bk_out:["Çıkış","Check-out","Выезд","Abreise"],
    bk_guests:["Misafir","Guests","Гости","Gäste"],
    bk_a1:["1 Yetişkin","1 Adult","1 взрослый","1 Erwachsener"],
    bk_a2:["2 Yetişkin","2 Adults","2 взрослых","2 Erwachsene"],
    bk_a3:["3 Yetişkin","3 Adults","3 взрослых","3 Erwachsene"],
    bk_a4:["4 Yetişkin","4 Adults","4 взрослых","4 Erwachsene"],
    bk_go:["Müsaitlik ve Fiyat","Availability and Price","Наличие и цена","Verfügbarkeit und Preis"],
    hi1t:["Denize Sıfır","By the Sea","У самого моря","Direkt am Meer"],
    hi1d:["Özel iskele ve koy","Private pier and bay","Собственный причал и бухта","Privater Steg und Bucht"],
    hi2t:["Açık Havuz","Outdoor Pool","Открытый бассейн","Außenpool"],
    hi2d:["Güneşin tadını çıkar","Soak up the sun","Наслаждайтесь солнцем","Genießen Sie die Sonne"],
    hi3t:["Oscar Spa","Oscar Spa","Оскар Спа","Oscar Spa"],
    hi3d:["Sauna, hamam, masaj","Sauna, hammam, massage","Сауна, хаммам, массаж","Sauna, Hamam, Massage"],
    hi4t:["Her Şey Dahil","All Inclusive","Всё включено","All Inclusive"],
    hi4d:["Yaz sezonu açık büfe","Summer open buffet","Летний шведский стол","Sommer-Büfett"],
    about_eyebrow:["Hoş Geldiniz","Welcome","Добро пожаловать","Willkommen"],
    about_h2:["Bodrum'un keyifli sahil oteli","Bodrum's cheerful seaside hotel","Уютный приморский отель Бодрума","Bodrums charmantes Strandhotel"],
    about_lead:["Oscar Seaside Hotel ve Spa, doğayla iç içe konumu ve denize sıfır koyuyla ferah, keyifli bir tatil sunar.","Oscar Seaside Hotel and Spa offers a spacious, cheerful holiday with its location nestled in nature and its bay right by the sea.","Oscar Seaside Hotel and Spa дарит просторный и радостный отдых благодаря расположению среди природы и бухте у самого моря.","Das Oscar Seaside Hotel and Spa bietet einen großzügigen, fröhlichen Urlaub mit seiner Lage inmitten der Natur und seiner Bucht direkt am Meer."],
    about_p2:["Bodrum'a özgü beyaz mimari, ferah yaşam alanları, açık havuz ve lüks spa hizmetleriyle; sakinlik ve eğlenceyi bir arada yaşayacağın bir tatil bizi tercih edenleri bekliyor.","With Bodrum's signature white architecture, spacious living areas, an outdoor pool and luxurious spa services, a holiday that blends calm and fun awaits those who choose us.","Белоснежная архитектура в стиле Бодрума, просторные зоны отдыха, открытый бассейн и роскошный спа — отдых, сочетающий покой и веселье, ждёт тех, кто выбирает нас.","Mit der für Bodrum typischen weißen Architektur, großzügigen Wohnbereichen, einem Außenpool und luxuriösen Spa-Services erwartet ein Urlaub voller Ruhe und Spaß alle, die uns wählen."],
    chip1:["Denize sıfır","By the sea","У моря","Am Meer"],
    chip2:["Açık havuz","Outdoor pool","Открытый бассейн","Außenpool"],
    chip3:["Her Şey Dahil","All Inclusive","Всё включено","All Inclusive"],
    chip4:["Oscar Spa","Oscar Spa","Оскар Спа","Oscar Spa"],
    float_b:["Denize<br>sıfır","By the<br>sea","У самого<br>моря","Direkt<br>am Meer"],
    float_s:["Güvercinlik'in<br>turkuaz koyunda","in the turquoise<br>bay of Güvercinlik","в бирюзовой<br>бухте Гюверджинлик","in der türkisen<br>Bucht von Güvercinlik"],
    rooms_eyebrow:["Konaklama","Accommodation","Проживание","Unterkunft"],
    rooms_h2:["Konforlu, ferah odalar","Comfortable, spacious rooms","Комфортные, просторные номера","Komfortable, geräumige Zimmer"],
    rooms_lead:["Dinlendirici renkler ve deniz esintisiyle tasarlanan odalar.","Rooms designed with soothing colours and a sea breeze.","Номера, оформленные в успокаивающих тонах и с морским бризом.","Zimmer, gestaltet mit beruhigenden Farben und einer Meeresbrise."],
    r1_tag:["Ekonomik","Economy","Эконом","Economy"],
    r1_name:["Ekonomik Oda","Economy Room","Номер «Эконом»","Economy-Zimmer"],
    r1_desc:["Sıcak dokular ve dinlendirici renklerle tasarlanan, ferah ve konforlu odalar.","Spacious, comfortable rooms designed with warm textures and soothing colours.","Просторные и комфортные номера с тёплой отделкой и успокаивающими тонами.","Geräumige, komfortable Zimmer mit warmen Texturen und beruhigenden Farben."],
    r1_f1:["Klima","Air conditioning","Кондиционер","Klimaanlage"],
    r1_f3:["Oda servisi","Room service","Обслуживание номеров","Zimmerservice"],
    r1_f4:["Günlük temizlik","Daily housekeeping","Ежедневная уборка","Tägliche Reinigung"],
    r2_tag:["Standart","Standard","Стандарт","Standard"],
    r2_name:["Standart Deniz veya Havuz Manzaralı Oda","Standard Room with Sea or Pool View","Стандартный номер с видом на море или бассейн","Standardzimmer mit Meer- oder Poolblick"],
    r2_desc:["Balkonundan deniz veya havuz manzarasının eşlik ettiği ferah, konforlu odalar.","Spacious, comfortable rooms with a sea or pool view from the balcony.","Просторные, комфортные номера с видом на море или бассейн с балкона.","Geräumige, komfortable Zimmer mit Meer- oder Poolblick vom Balkon."],
    r2_f1:["Balkon","Balcony","Балкон","Balkon"],
    r2_f2:["Deniz veya havuz manzarası","Sea or pool view","Вид на море или бассейн","Meer- oder Poolblick"],
    r2_f3:["Klima","Air conditioning","Кондиционер","Klimaanlage"],
    spa_eyebrow:["Oscar Spa","Oscar Spa","Оскар Спа","Oscar Spa"],
    spa_h2:["Bedenini ve ruhunu yenile","Renew your body and soul","Обновите тело и душу","Erneuern Sie Körper und Seele"],
    spa_lead:["Uzman terapistler eşliğinde geniş bir wellness deneyimi — sağlığın ve keyfin için.","A wide wellness experience with expert therapists — for your health and pleasure.","Широкий велнес-опыт с опытными терапевтами — для вашего здоровья и удовольствия.","Ein umfangreiches Wellness-Erlebnis mit erfahrenen Therapeuten — für Ihre Gesundheit und Ihr Wohlbefinden."],
    s1t:["Buhar Odası","Steam Room","Парная","Dampfbad"],
    s1d:["Rahatlatıcı buharla gevşe.","Unwind with soothing steam.","Расслабьтесь в успокаивающем паре.","Entspannen Sie im wohltuenden Dampf."],
    s2t:["Masaj","Massage","Массаж","Massage"],
    s2d:["Vücudunu şımart.","Pamper your body.","Побалуйте своё тело.","Verwöhnen Sie Ihren Körper."],
    s3t:["Sauna","Sauna","Сауна","Sauna"],
    s3d:["Toksinlerini at.","Release your toxins.","Выведите токсины.","Befreien Sie sich von Giftstoffen."],
    s4t:["Türk Hamamı","Turkish Hammam","Турецкий хаммам","Türkisches Hamam"],
    s4d:["Geleneksel tazelenme.","Traditional refreshment.","Традиционное обновление.","Traditionelle Erfrischung."],
    din_eyebrow:["Konseptlerimiz","Our Concepts","Наши концепции","Unsere Konzepte"],
    din_h2:["Oda Kahvaltı ve Her Şey Dahil","Bed and Breakfast and All Inclusive","Завтрак и «Всё включено»","Frühstück und All Inclusive"],
    din_lead:["Sezona göre iki konsept sunuyoruz; tarihine uygun olanı seç.","We offer two concepts by season; choose the one that fits your dates.","Мы предлагаем две концепции по сезону — выберите подходящую вашим датам.","Wir bieten je nach Saison zwei Konzepte; wählen Sie das passende für Ihre Daten."],
    b1t:["Oda Kahvaltı","Bed and Breakfast","Завтрак (BB)","Übernachtung mit Frühstück"],
    b1d:["01 Ekim 2026 – 01 Mayıs 2027","1 Oct 2026 – 1 May 2027","1 окт 2026 – 1 мая 2027","1. Okt 2026 – 1. Mai 2027"],
    b2t:["Her Şey Dahil","All Inclusive","Всё включено","All Inclusive"],
    b2d:["01 Mayıs 2027 – 30 Eylül 2027","1 May 2027 – 30 Sep 2027","1 мая 2027 – 30 сен 2027","1. Mai 2027 – 30. Sep 2027"],
    din_note:["Güncel konsept ve fiyatlar için bizimle iletişime geçebilirsin.","Contact us for the current concept and prices.","Свяжитесь с нами, чтобы узнать актуальную концепцию и цены.","Kontaktieren Sie uns für das aktuelle Konzept und die Preise."],
    dq_s:["Yerli içecekler dahil","Local drinks included","Местные напитки включены","Lokale Getränke inklusive"],
    b1tag:["BB","BB","BB","BB"],
    b2tag:["AI","AI","AI","AI"],
    dq_b:["Açık Büfe","Open Buffet","Шведский стол","Büfett"],
    ai_title:["Her Şey Dahil konsepti","All Inclusive concept","Концепция «Всё включено»","All-Inclusive-Konzept"],
    ai_period:["01 Mayıs – 30 Eylül","1 May – 30 Sep","1 мая – 30 сен","1. Mai – 30. Sep"],
    meal_b:["Kahvaltı","Breakfast","Завтрак","Frühstück"],
    meal_l:["Öğle Yemeği","Lunch","Обед","Mittagessen"],
    meal_s:["Atıştırmalık","Snack Time","Полдник","Snackzeit"],
    meal_d:["Akşam Yemeği","Dinner","Ужин","Abendessen"],
    ai_incl_t:["Dahil olanlar","Included","Включено","Inklusive"],
    ai_paid_t:["Ücretli olanlar","Extra charge","За доплату","Gegen Gebühr"],
    ai_i1:["Kahvaltı, öğle ve akşam yemeği açık büfe","Breakfast, lunch and dinner as an open buffet","Завтрак, обед и ужин — шведский стол","Frühstück, Mittag- und Abendessen als Büfett"],
    ai_i2:["Yerli alkollü ve alkolsüz içecekler (11:00 – 23:00)","Local alcoholic and soft drinks (11:00 – 23:00)","Местные алкогольные и безалкогольные напитки (11:00 – 23:00)","Lokale alkoholische und alkoholfreie Getränke (11:00 – 23:00)"],
    ai_p1:["İthal alkollü ve alkolsüz içecekler","Imported alcoholic and soft drinks","Импортные алкогольные и безалкогольные напитки","Importierte alkoholische und alkoholfreie Getränke"],
    ai_p2:["Taze sıkılmış meyve suları","Freshly squeezed juices","Свежевыжатые соки","Frisch gepresste Säfte"],
    ai_p3:["Şişe şaraplar","Bottled wines","Вина в бутылках","Flaschenweine"],
    ai_p4:["Şişe ve yabancı marka içecekler","Bottled and foreign-brand drinks","Напитки в бутылках и иностранных марок","Flaschengetränke und ausländische Marken"],
    ai_p5:["Kokteyller","Cocktails","Коктейли","Cocktails"],
    ai_p6:["Türk kahvesi","Turkish coffee","Турецкий кофе","Türkischer Kaffee"],
    ai_note:["Her Şey Dahil hizmeti giriş günü atıştırmalık saatiyle başlar, çıkış günü kahvaltıyla sona erer.","The All Inclusive service starts with snack time on arrival day and ends with breakfast on departure day.","Услуга «Всё включено» начинается в полдник в день заезда и заканчивается завтраком в день выезда.","Der All-Inclusive-Service beginnt am Anreisetag zur Snackzeit und endet am Abreisetag mit dem Frühstück."],
    band_eyebrow:["Denize Sıfır","By the Sea","У самого моря","Direkt am Meer"],
    band_h2:["Berrak koylar, <span>gün batımı</span> ve sen","Clear bays, the <span>sunset</span> and you","Прозрачные бухты, <span>закат</span> и вы","Klare Buchten, der <span>Sonnenuntergang</span> und Sie"],
    band_p:["Dalgasız turkuaz koy, özel iskele ve keyifli bir atmosfer. Bodrum tatilini bambaşka yaşa.","A calm turquoise bay, a private pier and a delightful atmosphere. Experience your Bodrum holiday like never before.","Спокойная бирюзовая бухта, собственный причал и приятная атмосфера. Проведите отпуск в Бодруме как никогда прежде.","Eine ruhige türkisfarbene Bucht, ein privater Steg und eine herrliche Atmosphäre. Erleben Sie Ihren Bodrum-Urlaub wie nie zuvor."],
    band_btn:["Tarih Seç","Select Dates","Выбрать даты","Termine wählen"],
    gal_eyebrow:["Galeri","Gallery","Галерея","Galerie"],
    gal_h2:["Bir bakışta Oscar Seaside","Oscar Seaside at a glance","Oscar Seaside с первого взгляда","Oscar Seaside auf einen Blick"],
    blog_eyebrow:["Yazılarımız","Our Articles","Наши статьи","Unsere Artikel"],
    blog_h2:["Bodrum rehberi ve otel günlüğü","Bodrum guide and hotel journal","Путеводитель по Бодруму и дневник отеля","Bodrum-Guide und Hoteltagebuch"],
    blog_date:["Aralık 2025","December 2025","Декабрь 2025","Dezember 2025"],
    p1_title:["Bodrum Güvercinlik Rehberi","Bodrum Güvercinlik Guide","Путеводитель по Гюверджинлику","Bodrum-Güvercinlik-Reiseführer"],
    p1_ex:["Merkeze 20 dakika, dalgasız koylar ve doğayla iç içe sakin bir Bodrum.","20 minutes to the centre, calm bays and a peaceful Bodrum surrounded by nature.","20 минут до центра, спокойные бухты и умиротворённый Бодрум среди природы.","20 Minuten ins Zentrum, ruhige Buchten und ein friedliches Bodrum inmitten der Natur."],
    p2_title:["Bodrum'un Tarihi Zenginlikleri","The Historical Riches of Bodrum","Историческое богатство Бодрума","Die historischen Schätze von Bodrum"],
    p2_ex:["Kale, Mozole, Antik Tiyatro ve yaşayan Ege kültürü.","The Castle, the Mausoleum, the Ancient Theatre and living Aegean culture.","Замок, Мавзолей, античный театр и живая эгейская культура.","Die Burg, das Mausoleum, das antike Theater und lebendige ägäische Kultur."],
    p3_title:["Sürdürülebilirlik Nedir?","What Is Sustainability?","Что такое устойчивость?","Was ist Nachhaltigkeit?"],
    p3_ex:["Doğaya saygılı, bilinçli turizm ve azalan israf.","Nature-friendly, conscious tourism and reduced waste.","Экологичный, осознанный туризм и меньше отходов.","Naturfreundlicher, bewusster Tourismus und weniger Verschwendung."],
    p4_title:["Bodrum'da Gezilecek Yerler","Places to Visit in Bodrum","Что посмотреть в Бодруме","Sehenswürdigkeiten in Bodrum"],
    p4_ex:["Kale, Marina, Antik Tiyatro, koylar ve tekne turları.","The Castle, the Marina, the Ancient Theatre, bays and boat tours.","Замок, марина, античный театр, бухты и морские прогулки.","Die Burg, der Yachthafen, das antike Theater, Buchten und Bootstouren."],
    read_more:["Devamını Oku →","Read More →","Читать далее →","Weiterlesen →"],
    guides_eyebrow:["Rehberler","Guides","Путеводители","Ratgeber"],
    guides_h2:["Belgeler ve rehberler","Documents and guides","Документы и путеводители","Dokumente und Ratgeber"],
    guides_lead:["İncelemek için belgeleri açabilir veya indirebilirsin.","You can open or download the documents.","Вы можете открыть или скачать документы.","Sie können die Dokumente öffnen oder herunterladen."],
    guides_1t:["Sürdürülebilirlik","Sustainability","Устойчивое развитие","Nachhaltigkeit"],
    guides_1d:["3. Aşama sürdürülebilirlik yaklaşımımız ve raporumuz.","Our Stage 3 sustainability approach and report.","Наш подход к устойчивому развитию (этап 3) и отчёт.","Unser Nachhaltigkeitsansatz (Stufe 3) und Bericht."],
    guides_2t:["Bodrum'da Neler Var?","What to See in Bodrum?","Что посмотреть в Бодруме?","Was gibt es in Bodrum?"],
    guides_2d:["Çevredeki gezilecek yerler, koylar ve öneriler rehberi.","A guide to nearby places, bays and recommendations.","Путеводитель по местам, бухтам и рекомендациям поблизости.","Ein Ratgeber zu Orten, Buchten und Empfehlungen in der Umgebung."],
    guides_open:["PDF'i Aç →","Open PDF →","Открыть PDF →","PDF öffnen →"],
    contact_eyebrow:["İletişim","Contact","Контакты","Kontakt"],
    contact_h2:["Seni ağırlamak için buradayız","We're here to welcome you","Мы здесь, чтобы вас встретить","Wir sind hier, um Sie zu empfangen"],
    ci_adres:["Adres","Address","Адрес","Adresse"],
    ci_tel:["Telefon","Phone","Телефон","Telefon"],
    ci_email:["E-posta","E-mail","Эл. почта","E-Mail"],
    contact_side_h:["Ulaşım ve Konum","Getting Here and Location","Как добраться и расположение","Anfahrt und Lage"],
    contact_side_p:["Milas–Bodrum Havalimanı'na yakın, merkez kalabalığından uzak.","Close to Milas–Bodrum Airport, away from the crowds of the centre.","Рядом с аэропортом Милас–Бодрум, вдали от городской суеты.","Nahe dem Flughafen Milas–Bodrum, fern vom Trubel des Zentrums."],
    t1:["Milas–Bodrum Havalimanı","Milas–Bodrum Airport","Аэропорт Милас–Бодрум","Flughafen Milas–Bodrum"],
    t2:["Bodrum Otobüs Terminali","Bodrum Bus Terminal","Автовокзал Бодрума","Busbahnhof Bodrum"],
    t3:["Bodrum Merkez","Bodrum Centre","Центр Бодрума","Zentrum von Bodrum"],
    maps_btn:["Google Haritalar'da Aç","Open in Google Maps","Открыть в Google Картах","In Google Maps öffnen"],
    foot_about:["Bodrum Güvercinlik'te denize sıfır, ferah ve keyifli bir sahil oteli. Deniz, havuz, spa ve lezzet bir arada.","A spacious, cheerful seaside hotel right by the sea in Bodrum Güvercinlik. Sea, pool, spa and fine dining together.","Просторный, уютный приморский отель у самого моря в Гюверджинлике, Бодрум. Море, бассейн, спа и вкусная кухня вместе.","Ein großzügiges, charmantes Strandhotel direkt am Meer in Bodrum Güvercinlik. Meer, Pool, Spa und Kulinarik vereint."],
    foot_h1:["Keşfet","Explore","Обзор","Entdecken"],
    foot_h2:["Kurumsal","Corporate","Компания","Unternehmen"],
    foot_h3:["İletişim","Contact","Контакты","Kontakt"],
    foot_sust:["Sürdürülebilirlik","Sustainability","Устойчивое развитие","Nachhaltigkeit"],
    foot_cert:["Bodrum Rehberi","Bodrum Guide","Путеводитель по Бодруму","Bodrum-Reiseführer"],
    foot_online:["Online Rezervasyon","Online Booking","Онлайн-бронирование","Online-Buchung"],
    copyright:["© 2026 Oscar Seaside Hotel ve Spa. Tüm hakları saklıdır.","© 2026 Oscar Seaside Hotel and Spa. All rights reserved.","© 2026 Oscar Seaside Hotel and Spa. Все права защищены.","© 2026 Oscar Seaside Hotel and Spa. Alle Rechte vorbehalten."]
  };
  function setLang(code){
    var idx=L.indexOf(code); if(idx<0){idx=0;} code=L[idx];
    var els=document.querySelectorAll('[data-i18n]');
    for(var i=0;i<els.length;i++){var k=els[i].getAttribute('data-i18n');var v=T[k];if(v&&v[idx]!=null){els[i].innerHTML=v[idx];}}
    try{document.documentElement.lang=code;}catch(e){}
    var lc=document.getElementById('langcode'); if(lc){lc.textContent=code.toUpperCase();}
    var la=document.querySelectorAll('[data-lang]');
    for(var j=0;j<la.length;j++){la[j].classList.toggle('active',la[j].getAttribute('data-lang')===code);}
    try{localStorage.setItem('oscarLang',code);}catch(e){}
  }
  var langLinks=document.querySelectorAll('[data-lang]');
  for(var q=0;q<langLinks.length;q++){langLinks[q].addEventListener('click',function(e){e.preventDefault();setLang(this.getAttribute('data-lang'));if(lbx){lbx.classList.remove('open');}});}
  var savedLang='tr';
  try{
    var stored=localStorage.getItem('oscarLang');
    if(stored&&L.indexOf(stored)>=0){savedLang=stored;}
    else{var nl=(navigator.language||navigator.userLanguage||'tr').slice(0,2).toLowerCase(); if(L.indexOf(nl)>=0){savedLang=nl;}}
  }catch(e){}
  setLang(savedLang);
  var items=[].slice.call(document.querySelectorAll('.gitem')),lb=document.getElementById('lb'),li=document.getElementById('lbi'),cur=0;
  function show(i){cur=(i+items.length)%items.length;li.src=items[cur].querySelector('img').src;}
  items.forEach(function(b,i){b.onclick=function(){show(i);lb.classList.add('open');document.body.style.overflow='hidden';};});
  function close(){lb.classList.remove('open');document.body.style.overflow='';}
  document.getElementById('lbx').onclick=close;document.getElementById('lbp').onclick=function(){show(cur-1);};document.getElementById('lbn').onclick=function(){show(cur+1);};
  lb.onclick=function(e){if(e.target===lb)close();};
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
  var di=document.getElementById('bk-in'),dou=document.getElementById('bk-out');
  if(di&&dou){var t=new Date(),tm=new Date(Date.now()+864e5),iso=function(d){return d.toISOString().slice(0,10);};try{di.value=iso(t);dou.value=iso(tm);di.min=iso(t);dou.min=iso(tm);}catch(e){}}
})();
