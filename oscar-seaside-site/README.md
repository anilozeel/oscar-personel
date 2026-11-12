# Oscar Seaside Hotel & Spa — Statik Kopya

`oscarseasidehotel.com` sitesinin **birebir statik HTML/CSS kopyası** (canlı siteden
mirror alınmıştır). Amaç: tasarımı WordPress'e gerek kalmadan yerelde önizlemek ve
yeni temanın referansı olarak kullanmak.

## İçerik
- `index.html` ve her sayfa için `<slug>/index.html` (Ana sayfa, Hakkımızda, Galeri,
  İletişim, Sertifika & Ödüller, Rezervasyon, Sürdürülebilirlik, Yarım Pansiyon + blog yazıları)
- `wp-content/themes/oscar-seaside-canli/` — özel temanın CSS/JS ve görselleri
- `wp-content/uploads/` — site görselleri (oda, spa, galeri, blog fotoğrafları)
- `wp-content/plugins/` — Elementor / MetForm vb. eklentilerin front-end asset'leri

Tüm bağlantılar kök-göreli (`/wp-content/...`) hale getirilmiştir; herhangi bir statik
sunucu doğru klasörü kök (docroot) alırsa site çalışır.

## Yerelde önizleme
```bash
cd oscar-seaside-site
python3 -m http.server 8080
# tarayıcıda: http://localhost:8080/
```

## Notlar
- **Çoklu dil:** Tema, tarayıcı diline göre JS ile TR/EN/RU/DE metinleri değiştirir
  (`assets/js/theme.js`). TR bir tarayıcıda Türkçe, EN tarayıcıda İngilizce görünür.
- **Fontlar** Google Fonts'tan (Poppins, Mulish) yüklenir; internet bağlantısı gerekir.
- Rezervasyon butonu harici motora gider: `oscarseasidehotel.rezervasyonal.com`.
- Sitedeki birkaç spam/hack kaynaklı blog yazısı (ilaç reklamları) **kopyalanmamıştır**.
- Canlı sitedeki analytics/Google Site Kit scriptleri statik kopyada işlevsizdir (zararsız).
