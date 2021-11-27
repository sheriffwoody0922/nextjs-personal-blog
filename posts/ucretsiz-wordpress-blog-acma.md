---
title: "Ücretsiz Blog Açma -  WordPress Blog Oluşturma   (2021)"
date: "2021-02-15"
categories: 
  - "blog-acmak"
tags: 
  - "blogging"
  - "blog"
---

Hiç kod kullanmadan ücretsiz blog açma meselesini merak ediyorsanız bu yazıda bunun cevabını bulacaksınız. Üstelik ücretsiz WordPress site açma desem. Tamam düzeltiyorum. Bu yazının sonuna geldiğinizde, ücretsiz WordPress ile geliştirilmiş bir siteye sahip olacaksınız.

Hem de ücretsiz olarak sunulan alt alan adıyla birlikte verilen paketleri kast etmiyorum. Sahip olduğunuz alan adınız ile kullanabileceğiniz WordPress ile geliştirilmiş ücretsiz bir blogdan bahsediyorum.

Python ve JavaScript tecrübesi olan biri olarak WordPress'i daha önce hiç kullanmamıştım. Sebebi de kolaya kaçabilme imkanını doğuracak olmasıydı. Geçen aylarda ilk defa kullanmaya başladım ve sevdim de.

Daha önce [en iyi blog açma platformlarını listelediğim yazı](http://cbsofyalioglu.local/blog-acmak/en-iyi-blog-siteleri/)da WordPress'ten bahsetmiştim. Şimdi WordPress ile geliştirilmiş ücretsiz bir blog sitesine nasıl sahip olursunuz onu anlatacağım.

Kolay olacağını söylemiyorum. Dediklerimi dikkatli şekilde yaparsanız eğer, size istediğiniz kadar WordPress site yapabilmenin yolunu göstereceğim. Tabi ki sınırsız site yapmak hiç rasyonel bir tavır olmazdı. Sonuçta alan adına para ödüyor olacaksınız.

Ayrıca o kadar ücretsiz sitenin içeriğini doldurmak da ayrı bir dert olurdu.

Ücretsiz blog açma girişiminden önce biraz teorik bilgiye ihtiyacınız olacak. Bu kısmı anlamanız elzem. Söz veriyorum sizi çok fazla detaya boğmayacağım.

* * *

## Geleneksel Web Site Mimarisi

### Dinamik Web Sitesi Nedir?

Bugün geleneksel diyebileceğimiz web siteleri bir sunucu'ya (server'a) ihtiyaç duyarlar. Web sitesine bir ziyaretçi geldiğinde, o ziyaretçinin ekranında çıkması gereken kod bu sunucu tarafından gönderilir. WordPress de bu tip bir sitedir.

Sunucu dediğimiz şey aslında bir başkasının hazır çalışan bilgisayarıdır. Bu başkası da sizin barındırıcınız, yani hosting firmanızdır. Örnek olarak Google Cloud Platform, Amazon Web Services, Digital Ocean, Vultr vb..

Bir de veri tabanı (database) var. Bu da tüm bilgilerin kaydedildiği, sunucudan ayrı olarak çalışabilen, bilginin kaybolmaması adına özel olarak tasarlanan sistemlerdir.

Sunucu dediğimiz bilgisayar ziyaretçisine hangi bilginin gösterileceğine karar verir. Bu bilgiyi de veri tabanına istek gönderip aldıktan sonra yapar.

Mesela LAMP denilen teknolojiler bütünü bunlara bir örnektir.

L ---> A ---> M ---> P  
Linux: Sunucu bilgisayarın işletim sistemi  
Apache: HTTP Sunucusu  
MySQL: SQL tipi Veri Tabanı  
PHP: Sunucunun üzerinde çalışan yazılım dili

Özetlemek gerekirse, bir ziyaretçi siteye geldiğinde şunlar olur:

1. Sunucu ziyaretçinin bulunduğu sayfaya göre belirli hesaplamalar yapar ve doğru bilgiyi veri tabanından ister.
2. Veri tabanından gelen bilgi ile gerekli markup'ı (biçimlendirme) hazırlar. Yeni gelen bilginin sayfada nasıl ve ne şekilde gözükeceğini bu markup belirleyecektir. Bu markup dediğimiz aslında HTML + CSS + JavaScript kodlarının bir bütünüdür.
3. Biçim ile veri birleştirilir ve ziyaretçiye gösterilmesi gereken web sayfasının son hali hazırlanır. Ziyaretçiye gönderilir.

Peki Web Sitesi Her Kullanıcıya Aynı Sayfayı Gösteriyorsa?

* * *

### Statik Web Sitesi Nedir?

Kim olduğu, ne iş yaptığı ve iletişim bilgilerinin olduğu bir web sitesi düşünelim. Bilirsiniz bu siteleri. Kimisi formalite gereği, kimisi de yeterli gördüğü için bu tip bir site açar.

Her gelen kullanıcıya aynı HTML+CSS+JS'den oluşan kod gönderilecekse veri tabanına niye ihtiyaç olsun. Bu durumda bir veri tabanına ihtiyaç olmayacaktır.

Kabaca söylemek gerekirse, siteyi ziyaret eden kişi Google Drive ya da Dropbox'ınızdaki bir görsele erişiyormuş gibi buna erişebilmelidir.

İşte bu tip sitelere de statik site diyoruz. Bu siteler bir sunucuya ihtiyaç duymuyorlar. Sitenin son haline karar verildikten sonra çıktısı alınıyor ve gerekli işlemlerin ardından internete açık hale getiriliyor.

Sunucuya ihtiyaç duymadıkları için ya çok ucuzlar ya da bedavalar. Neden bedava derseniz, ben rekabet olduğu için derim.

Ama dezavantajları da var. Mesela öyle her istediğinizde güncelleyemezsiniz. Kod bilmek çoğu zaman zaruridir. Güncelleyeceğiniz zaman da bir sürü uğraş çıkartırlar.

Peki öyle bir çalışma ortamı kursak ki sadece siteyi güncelleyeceğimiz zaman sunucumuz çalışsa ve sitenin son halini statik bir site olarak yayınlasa?

* * *

## JAMSTACK Devrimi

Şimdi gelelim son yıllarda çokça popüler olan yeni bir mimari tipine.

[Jamstack nedir?](https://www.cbsofyalioglu.com/programlama/wordpress-vs-jamstack/) Yazılım dünyasındaki gelişmeler ile sunucu ücretlerinin düşmeye başlaması bize yeni bir mimarinin kapısını araladı.

J --> A --> M  
JavaScript --> API --> Markup

Temel olarak iki ana ilke üzerine dayanır. Pre-rendering (Ön işleme) ve decoupling (ayrıştırma).

Diğer mimarilere göre daha güvenlidir. Daha ucuzdur. Daha hızlıdır.

Ancak bir çok 3.taraf ile entegrasyon sağlamak yorucu olabilmektedir.

Daha önce sunucu tarafında yapılan işlemler yükleri artık burada başka adımlara dağıtılmış vaziyette.  
Mesela, sunucu tarafında hangi bilginin veri tabanında çekilmeceğine karar veren mantıksal kod burada JavaScript tarafından sağlanır.

Veri tabanı artık 3.taraf hizmetler ile sağlanacaktır. Burada iki programın haberleşmesini sağlayan API (Application Program Interface) ekosistemi devreye girer.

Bir de son olarak bu işlemi yapacak olan bir barındırıcı hizmeti olsa tadından yenmez. Hem de bu hizmeti, çoğu zaman ücretsiz olarak verse.

Bu teknolojinin öncüsü Netlify'dır. Bir çok alternatifi vardır. Hemen hemen tüm bulut platformlarında ücretsiz olarak bu hizmeti alabilirsiniz. Vercel, Surge, Digital Ocean vs...

* * *

## Ücretsiz Blog Açma Projesi Ön Bilgiler

### Ücretsiz Blog Açma Proje Tanımı

Projemiz az önce yukarıda anlatılanlar ışığında aşağıdaki gibi yapılacaktır:

1. PC'mize lokal WordPress geliştirme uygulaması yoksa kuracağız ve WordPress sunucusunu kendi bilgisayarımızda çalıştıracağız
2. Gerekli değişikliklerimizi yapıp, sitenin paylaşmaya hazır olduğunu düşündüğümüzde sitemizin birer statik kopyasını alacağız.
3. Blog sitemizi statik olarak render edecek eklentiyi kurup, Netlify'a yükleyerek burada ücretsiz olarak kullanıma sunacağız.
4. Sitemizi güncellemek istediğimizde tekrar 2.numaraya gidip kalan işlemlere devam edeceğiz.

### Ücretsiz Blog Açmak için Gerekenler

1. Alan adı (Ücret vereceğiniz tek kısım burası). Dilerseniz Netlify'ın size verdiği alt alan adını da ücretsiz kullanabilirsiniz.
2. Netlify Hesabı
3. WordPress geliştirme uygulaması.
4. WordPress sitemizin statik versiyonunu almamızı ve Netlify'a yüklememizi sağlayacak WordPress eklentisi

Söz verdiğim şekilde yazının sonunda ücretsiz WordPress blog sitenize sahip olacaksınız. Burada yapılacakları 3 kısıma ayırdım. O halde başlayalım

### 1) Ücretsiz Blog için Geliştirme Ortamı

Sunucumuzu kendi bilgisayarımıza kuracağımızı, ve blog sitemizi güncelleyeceğimiz zaman önce bu sunucuyu çalıştırıp, tüm içeriğimizi buna kaydedeceğimizi belirtmiştim.

PC'mize WordPress kurulumunu kolayca yapabilmek için 2 seçeneğimiz var. Bunlar Bitnami ve Local uygulamaları. Aralarında bizim açımızdan fark yaratacak özellik şu: Eğer yalnız tek bir ücretsiz WordPress site geliştirmek istiyorsanız Bitnami bunun için idealdir. Eğer birden fazla WordPress site geliştirmek istiyorsanız ve belki de biraz kurcalamak istiyorsanız Local daha uygun olacaktır.

Ben bu yazıda Local uygulamasını kullanarak anlatmayı seçiyorum. FlyWheel barındırıcı firması tarafından geliştirilen bu ücretsiz uygulama ile PC'nize dilediğiniz kadar birbirinden izole geliştirme ortamı kurabilirsiniz.

#### 1.1) WordPress Blog için Geliştirme Ortamının Kurulumu

[Local by FlyWheel uygulamasını bu adrese tıklayıp](https://localwp.com/) sağ üst köşedeki Download butonuna basınız.

- Açılan pencereden işletim sisteminizi seçiniz
- Gerekli form bilgilerini doldurunuz.
- Alttaki buton ile uygulamanın kurulum dosyasının bilgisayarınıza indiriniz.  
    Ardından uygulamanın bilgisayarınıza inmesini bekleyiniz. İndirilen dosya ile kurulumu gerçekleştiriniz.

#### 1.2) WordPress Blog Kurulumu

Eğer sorunsuz bir şekilde Local uygulamasını kurduysanız, onu çalıştırabilirsiniz.

- Açılan uygulamanın sol alt köşesindeki büyük (+) işaretine tıklayınız.
- Size WordPress sunucunuzun adını soracak. Buraya dilediğiniz ismi girebilirsiniz. Sağ alttaki buton ile ilerleyiniz.
- Preferred (Tercih edilen) seçeneği seçili şekilde tekrar ilerleyiniz
- Çıkan ekranda WordPress Username ve WordPress Password kısmı sizin admin/yönetici paneli kullanıcı adınız ve de parolanız olacaktır. O yüzden dikkatle seçiniz. Tekrar ilerle tuşuna basarak WordPress kurulumunu başatınız.

Kurulum esnasında sizden bazı kurulum onayları vermenizi isteyebilir. Bunlara onay veriniz.

#### 1.3) WordPress Blog Çalıştırma

Eğer hiç bir sorunla karşılşmadıysanız bilgisayarınıza WordPress blog kurma işlemi gerçekleşmiştir.

Sol üstteki Local Sites başlığının altında WordPress ortamınızı görüyor olmanız lazım. Eğer yanında yeşil ışık ya da ibare varsa şu an aktif demektir.

Eğer yeşil ibare mevcutsa sağ üst taraftaki kırmızı "Stop Site" düğmesine tıklayarak çalışmayı dilediğiniz zaman buradan durdurabilirsiniz.

Eğer yeşil ibare yoksa bu sefer sağ üst tarafta yeşil "Start Site" düğmesini göreceksiniz. Bununla dilediğiniz zaman WordPress ortamınızı tekrardan aktif hale getirebilirsiniz.

## 2) WordPress Blog Sitemizin Kullanımı

Bir WordPress blog nasıl kullanılır sorusu bu yazının kapsamı dışındadır. Bu yüzden asgari düzeyde bir kullanım göstereceğim.

### 2.1) Yönetici ve Blog Sayfasına Erişim

  
Eğer siteniz değilse aktif hale getiriniz. Ardından sağ taraftaki "ADMIN" ve "OPEN SITE" düğmelerine tıklayarak sırasıyla WordPress yönetici sayfasını ve blog sayfanızı açınız.

Yönetici sayfasına geldiğinizde, size kullanıcı adı ve parola sorduğunu göreceksiniz. Buraya 1.2'nin son adımında girdiğiniz kullanıcı adı ve parolayı giriniz. Artık yönetici sayfasına erişmiş bulunmaktasınız.

Gördüğünüz ekran WordPress'in yönetici panel ekranıdır.

##### 2.1.1) WordPress'i Türkçe Kullanmak (Opsiyonel)

- WordPress'i Türkçe kullanmak için işaretçinizi (mouse'unuzu) sol taraftaki "Settings" düğmesinin üzerine getiriniz.
- Yana doğru açılan mini-pencereden "General" düğmesine tıklayınız.
- Açılan sayfanın ortalarına doğru "Site Language" kısmını göreceksiniz. Buradan Türkçe'yi seçiniz ve en aşağıdaki "Save Changes" düğmesine tıklayınız. Böylece WordPress blogunuzu artık Türkçe olarak yönetebilirsiniz.

#### 2.2) Tema Seçimi

WordPress size çok geniş bir eklenti ve tema seçeneklerinin olduğu bir dünya sunuyor. Bunların bir kısmı ücretsiz, bir kısmı da ücretli. Büyük çoğunluğu ise "Freemium" denilen ekonomik plana dahil. "Free" ve "Premium" kelimelerinin birleşiminden oluşan bu "Freemium" planlar size ücretsiz olarak bir kısım özellikleri kullandırtıyor. Bir takım daha gelişmiş özellikler için ise ücret talep ediyorlar.

Ücretsiz WordPress blog siteniz için tema seçimini yapalım.

- Tema seçimi için yönetici panelinin sol kısmından "Görünüm" düğmesine tıklayınız. Hali hazırda yüklü olan temaları buradan görebilirsiniz.
- Üst tarafta bulunan "Yeni Ekle" düğmesine tıklayınız. Burada yükleyebileceğiniz temaları görüyorsunuz. Sağ taraftan arama da yapabilirsiniz.
- Herhangi beğendiğiniz bir temanın üzerine işaretçinizi götürdüğünüzde çıkan "Kur" düğmesi ile o temayı bloğunuza kurunuz.

#### 2.3) Tema Ayarlarını Değiştime

WordPress yönetici ekranınızdayken işaretçinizi "Görünüm" düğmesine götürdüğünüzde açılan mini-pencereden "Özelleştir" düğmesine tıklayarak ücretsiz WordPress temanızın ayarlarıyla oynayabilirsiniz. Bu ücretsiz blog siteniz üzerinde görsel değişiklikler yapmanızı sağlayacaktır.

#### 2.4) Blog Yazısı Oluşturma ve Gutenberg Editör

Artık siz de bir içerik üreticisi oldunuz. Şimdi ilk blog yazınızı yazmanın zamanı olmasa da, deneme amaçlı bir yazı koymanın zamanı olabilir.

Sol panelden "Yazılar" düğmesine tıklayınız. Neredeyse tüm programlama dillerine başlanırken ilk yazılan jenerik yazı Hello World'dür. Burada da örnek amaçlı bir "Hello World" başlıklı yazıyla karşılaşacaksınız.

Dilerseniz silin ve yukarıdaki "Yeni Ekle" düğmesine tıklayınız.

Karşınızda WordPress'in Gutenberg isimli son teknoloji blok editörü duruyor. Bu çok güçlü bir editör. Yalnız yazı yazmaya değil, baştan aşağı bir web sayfası tasarlamanıza izin veriyor.

Blog sitenizin ilk yazısı için bir başlık atın. Ardından, ya sol üstte bulunan mavi ya da başlığın altında çıkan siyah\[+\] düğmesine tıklayınız.

Karşınızda Gutenber editörün en başta kurulu gelen seçeneklerini bulacaksınız.

Yazı içeriğini de girdikten sonra sağ üstteki "Yayımla" düğmesi ile yazınızı paylaşınız.

Daha sonra sol üstteki "W" ibareli düğmeye tıklayarak tekrar WordPress yönetici konsoluna geri dönünüz.

#### 2.5) WordPress Bloğunuzun Statik Kopyasını Alacak Eklentiyi Kurmak

Artık kendi bilgisayarımızda da olsa ücretsiz bir WordPress blog sahibiyiz. Ancak bu bizim bilgisayarımızdaki bir sunucuda çalışıyor. Biz bunu istemiyoruz. Bizim istediğimiz şu an bu sunucunun tüm çıktılarını alıp statik bir site haline dönüştürecek bir eklenti.

Bu kısımda ilk eklentimizi kuracağız. WordPress'in çok zengin bir eklenti ekosistemi mevcut.

Bizim ihtiyacımız olan eklentiyi yazan [Leon Stafford](https://ljs.dev/)'a samimi teşekkürlerimizi iletiyoruz.

Eklentiyi indirmenin 2 yolu var. Herhangi birini seçiniz.

1. Dilerseniz kaynak kodun bulunduğu [Github](https://github.com/leonstafford/static-html-output) adresindeki yeşil "Code" düğmesine tıklayarak indirebilirsiniz.
2. [Buraya tıklayarak](https://drive.google.com/file/d/1w_d7-jUWvocY6wVQXkZeuMu4vj2ASJsq/view?usp=sharing) Drive'daki bir kopyasını ya da aşağıdaki Download düğmesinden direkt buradan indirebilirsiniz.
3. WordPress yönetici sayfanıza gelip, sol taraftaki "Eklentiler" düğmesine tıklayın.
4. Üst kısımda bulunan "Yeni Ekle" düğmesine tıklayın.
5. Üst kısımda bulunan "Eklenti Yükle" düğmesine tıklayın.
6. Genişleyen kısımda "Dosyayı Seç" düğmesine tıklayarak az önce indirdiğiniz "static-html-output-plugin.zip" isimli dosyayı seçiniz ve yükleyiniz.
7. Yükleme işlemi bittiğinde "Etkinleştir" düğmesine tıklayarak aktif hale getiriniz

[static-html-output-plugin-6.6.21-1](http://cbsofyalioglu.local/wp-content/uploads/2021/02/static-html-output-plugin-6.6.21-1.zip)[Download](http://cbsofyalioglu.local/wp-content/uploads/2021/02/static-html-output-plugin-6.6.21-1.zip)

Eklenti yüklendikten sonra ekranda bazı hatalar görebilirsiniz. Sorun yaşarsanız. Önce sayfayı yenilemeyi deneyiniz. Sorun hala devam ederse Local uygulamasından sunucuyu durdurup tekrar başlatmanızı öneriririm. Ancak bir sorun olmayacağını tahmin ediyorum.

Artık WordPress sitemizin statik çıktısını da alabileceğiz. Geldik son bölüme.

### 3) Ücretsiz Blog Açma'nın Son Aşaması: Netlify'a Yükleme

Ücretsiz blog açma yazımızın son aşamasına geldik. Bu kısımda önce bir Netlify hesabı açacağız. Ardından alan adımızı Netlify'a yönlendireceğiz. En son olarak da sitemizi Netlify'a yükleceğiz.

#### 3.1) Netlify Hesabı Oluşturma

[Netlify](https://www.netlify.com/) adresine gidip sağ üstteki "Sign up" bağlantısına tıklıyoruz. Ardından en alttaki Email seçeneğini seçiyoruz. Eposta hesabı ve parola bilgilerimizi giriyoruz. Ardından epostamıza gelecek olan onay mailindeki linke tıklıyoruz.

Açılan sayfada ismimizi giriyor ve Personal/Blog seçeneğini seçiyoruz. Farklı bir ekran çıkması durumunda herhangi bir sıkıntı olmayacaktır.

#### 3.2) Alan Adını Netlify'a Yönlendirme

Sizlere söz verdiğim gibi WordPress'de geliştirilmiş sitenizi, özel alan adınız ile birlikte ücretsiz şekilde yayımlayacağız.  
Bunun için daha önceden bir alan adınız olduğunu var sayıyorum.

Eğer yoksa indirimli satın alımlar yapabileceğiniz referanslı [GoDaddy](http://godaddy.pro/q5M) linki üzerinden bir hesap oluşturabilir ve istediğiniz alan adınızı alabilirsiniz.

Netlify hesabınızda oturumunuz zaten açıktı.

1. Üstteki menülerden "Domains" balantısına tıklayın.
2. "Add or register domain" düğmesini seçiniz.
3. Kutucuğun içine alan adınızı giriniz. (Örneğin webmeister.org)
4. Verify düğmesine tıklayınız.
5. Çıkan ekranda "Yes, add domain" seçeneğini seçiniz.
6. Sonraki sayfada "Continue" seçeneğini seçiniz.
7. Şimdi bu ekranda gelen kayıtları not alın. Muhtemelen 4 adet Name Server kaydı çıkacaktır.
8. Ardından "Done" butonuna basınız.
9. Çıkan sayfanın en üstündeki yeşil Netlify logosuna tıklayarak ana sayfanıza dönünüz.

Şimdi aldığımız bu NS (Name Server) kayıtlarını alan adı sağlayıcımıza gireceğiz.

Hangi firmada olursa olsun yapmanız gereken bir kaç adım var.

1. Alan adı sağlayıcınızda oturum açın.
2. Kullanmak istediğiniz alan adını seçin.
3. Bu alan adına ait DNS ayarları kısmını bulun.
4. DNS ayarları kısmında Name Server ya da NS olarak geçen bir kısım olacaktır. Orda olan tüm kayıtları silin.
5. Bir önceki kısımda Netlify'ın bize verdiği kayıtları ayrı ayrı giriniz.
6. Yaptığınız işlemi kaydediniz.

Böylece, internet üzerinde bizim alan adımız tarayıcıya girildiğinde tüm yapılacak sorgular Netlify'a yönelmiş olacaklar.

Alan adının yönlendirilmesi konusunda son bir aşama kaldı. Az önce belirttiğim gibi alan adına gidildiğinde tüm sorgular Netlify'a gidiyor. Netlify'ın bu sorguları bizim sitemize yönlendirebilmesi için bir siteye ihtiyacımız var. Henüz sitemizin kopyasını oluşturmadığımız için bir kısa yol önereceğim.

Bilgisayarınızda boş bir klasör oluşturun ve bu klasörü Netlify ana ekranınızdaki Sites alanının içine sürükleyip bırakın. Böylece boş da olsa Netlify'da ilk projemizi başlatmış olacağız.

Ardından "Domain Settings" düğmesine tıklayınız.

- "Custom Domains" başlığı altındaki "Add custom domain" düğmesine tıklayınız.
- Buraya alan adınızı giriniz. "Verify" düğmesine basınız.
- "Yes, add domain" düğmesini seçiniz.

Artık alan adınız Netlify'da bu projeye yönlendirilmiş durumda. Sonraki aşamaya geçelim.

#### 3.3) Blog Sitemizin Statik Kopyasını Oluşturup Netlify'a Yüklemek

Geldik en sonuncu adıma. Tekrardan tarayımızda açık olduğunu düşündüğüm WordPress yönetici paneline geçelim. Sol üstteki "Static HTML" linkine tıklayınız ve bu amaçla kurduğumuz eklentinin ekranına geçiniz.

##### 3.3.1) Statik Kopyanın Çıktısı

Burada karşımıza çıkan ekrandaki ilk kutucuğa bakınız. Bu seçenek statik sitemizin çıktısı hakkında bilgi veriyor. Halihazırda zip uzantılı bir dosya seçeneği mevcut. Onu Netlify olarak değiştiriniz.

Dilerseniz bu şekilde bırakıp, tüm çıktıyı zip dosyasında alabilirsiniz. Daha sonra da klasöre çıkaracağınız bu klasörünü Netlify'a yükleyebilirsiniz.

Ancak her defasında bu işlemi yapmak yorucu olacaktır. Dolayısıyla o kutucuklardan Netlify seçeneğini seçiniz.

##### 3.3.1) Yerel Blog Bağlantı Adreslerinin Değişimi

Ardından "Destination URL" kısmına kullanmak istediğimiz alan adının URL'sini yazacağız. (Örneğin: https://webmeister.org) Siz WordPress sitenizi oluştururken tüm linkler yerel sunucunuza göre ayarlandı. Sayfa ve yazıların bağlantıları bu kutucuğa gireceğiniz alan adı ile değiştirilecek.

##### 3.3.2) Netlify Uzak Erişimi için Token Alımı

"Personal Access Token" kısmının yanında "How do I get this" bağlantısına tıklayınız. Netlify sayfası açılacak. Kutucuğa herhangi bir şey yazabilirsiniz. Ben "local-wp" yazıyorum.

Ardından "Generate Token" düğmesine basarak Token'inizi oluşturn.  
Şimdi bir çok harf ve rakamdan oluşan bu Token'i kopyalayın ve WordPress sayfasındaki "Personal Access Token" kutucuğuna yapıştırınız.

##### 3.3.2) Netlify Uzak Erişimi için Hedef Projeyi Seçme

"Site ID" kutucuğuna Netlify'daki özel alan adınızı giriniz. Eğer özel alan adınızın DNS yayılması gerçekleşmediyse bu çalışmayacaktır. Bir süre bekleyebilirsiniz.

Ya da Netlify'daki projenizin hazır gelen alan adını yazınız. Az önce işlem yaptığımız Netlify sayfasında, "Custom Domains" başlığı altındaki alan adını seçiniz. Bu alan adı şuna benzeyecektir: "quizzical-northcutt-0845.netlify.app". Buna benzeyen ve "netlify.app" uzantılı alan adını kopyalayıp "Site ID" kutusuna giriniz.

Eğer tekrar etmemiz gerekirse:

1. Web sitenizin statik kopyasının ne yapılması gerektiğini gösterir
2. Web sitenizin kullanacağı alan adını gösterir.
3. Netlify'a yüklemrken sizin kimliğinizi tanımlayan Tokeni gösterir.
4. Netlify'daki hangi projeye yükleneceğini gösterir.
5. WordPress lokal sitenizin statik çıktısını almaya yarar.
6. Ayarları kaydetmenizi sağlar.

##### 3.3.3) Ücretsiz Blog Açmak için Son Adım

Şimdi aşağıda gördüğünüz düğmeler arasından önce "Save current option" seçeneğine tıklıyoruz. Bu yaptığımız ayarları kaydememize yarayacak.

Ardından Sayfayı aşağı doğru kaydırdığınızda "Test Netlify Settings" düğmesini göreceksiniz. Bununla Netlify bağlantınızı doğru yapıp yapmadığınızı test edebilirsiniz. Eğer success mesajını göremezseniz tekrardan 3.3.1'den itibaren tüm adımları kontrol ediniz. Gene olmazsa Statik çıktınızı zip olarak alıp Netlify'a yüklemeyi deneyiniz.

Son olarak sol altta bulunan "Static site export" butonuna basınız.

Şu anda yerel WordPress blogunuzun statik birer çıktısı alınıyor. Bu biraz sürebilir. Hemen ardından bu çıktı Netlify'a yüklenecektir. Statik çıktılama işlemi bittikten sonra alan adınıza giderek test edebilirsiniz.

Biraz uzun oldu. Umuyorum ki ücretsiz blog açma konusuna WordPress blog ile yardımcı olmuşumdur. Okuduğunuz için teşekkürler.
