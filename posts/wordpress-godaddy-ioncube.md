---
title: "WordPress Ioncube Hatası | GoDaddy ve Digital Ocean Çözümü"
date: "2021-02-23"
categories: 
  - "programlama"
tags: 
  - "programlama"
  - "blog"
---

Bir WordPress kurulumunu başka bir yerde barındırmaya kalktığımda şu sorunla karşılaştım. Siz de başka sebeplerden dolayı ioncube PHP Loader hatası alıyorsanız. Bu yazıda WordPress kurulumu ya da taşıması sırasında karşılaşılan Ioncube PHP Yükleyicisi hatasının çözümünü vermeye çalışacağım.

[Kişisel blog](https://www.cbsofyalioglu.com/blog-acmak/en-iyi-blog-siteleri/) olarak kullandığım bu sitede karşılaştığım sorunu ve çözümünü burada paylaşıyorum.

> Site error: the ionCube PHP Loader needs to be installed. This is a widely used PHP extension for running ioncube protected PHP code, website security and malware blocking. Please visit get-loader.ioncube.com for install assistance.

CPanel ile birlikte barındırılan bir WordPress uygulamasının yönetimli bir WordPress uygulamasına taşınması ya da aktarılması sürecinde oluşan bir hata olduğu kanısındayız.

Ayrıca çözümün bulunduğu makaleyi benimle paylaşan GoDaddy'den Aylin Hanım'a teşekkürlerimi iletiyorum. İlgisi ve desteği sayesinde bu çözüme ulaştığımı belirtmek isterim.

İngilizce makaleyi kafa karışıklığı yaratmaması sebebiyle paylaşmıyorum çünkü bir yerde sunduğu çözüm bugün itibariyle geçerli gözükmemektedir.

## IonCube Kurulumu

Şu adresten ioncube uygulamasını barındırma özelliklerinizi gözeterek indiriniz. Örneğin ben Linux 64Bit mimariye sahip versiyonu indirdim.

İndirdiğiniz sıkıştırılmış dosyayı bir klasöre çıkartın. Tutarlılık arz etmesi açısından bendeki konumunu paylaşacağım. Bu klasörün **~/Downloads/ioncube** adresinde olduğunu var sayalım.

### GoDaddy Çözümü

Eğer yeni sunucunuz GoDaddy'de ise gerekli güvenlik tedbirlerini geçtikten sonra FTP ile WordPress uygulamanıza bağlanın. Bunun nasıl yapıldığı bu yazının konusunu aşmaktadır. Zaten grafiksel arayüzü olan bir uygulama ile bu işlemi yapacağınız var sayılmaktadır.

Ardından yerel bilgiayarımızdaki **ioncube** klasörünü olduğu gibi uzak bilgisayardaki **/var/www** klasörüne yükleyiniz. Böylece ioncube dosyaları uzak bilgisyarınızın **/var/www/ioncube** dizininde olacaklar.

### Digital Ocean Çözümü

GoDaddy çözümünde yaptığımızı bu sefer Digital Ocean'daki uzak bilgisayarımıza SSH vasıtasıyla yapacağız. Terminalinizi açtıktan sonra, aşağıdaki komutu '@' işaretinden sonra kendi uzak bilgisayar IP numaranızı girerek onaylayınız.

sudo ssh root@64.227.123.240

Şimdi gelelim lokaldeki bir dizini uzak bir dizine kopyalamaya. Tekrar terminalinize aşağıdaki güvenli kopyalama metodunu recursive (-r) olarak giriniz. Örneğin benim durumumda komut şu şekilde olacak:

scp -r ~/Downloads/ioncube 
root@64.227.123.240:/var/www/html/

Böylece ioncube dosyaları, Digital Ocean'da barındırdığınız uzak bilgisyarınızın **/var/www/html/ioncube** dizininde olacaklar.

Not: GoDaddy için server dizininiz /var/www/ iken Digital Ocean için /var/www/html/ dizini olacak.

## Ioncube'ün Yüklenmesi

Belki fark etmişsinizdir, az önce uzak bilgisayara yüklemesini yaptığımız ioncube dizinin içerisinde **loader-wizard.php** isimli bir script dosyası mevcut. Şimdi uzak bilgisayarımızın sunucusunda mevcut olduğuna göre bu scripti çalıştırabiliriz. Diyelim ki alan adımız **webmeister.org**.

O halde bu scripti **https://webmeister.org/ioncube/loader-wizard.php** adresine giderek çalıştırmayı deneyiniz.

Karşınıza çıkan yükleme ekranında Paylaşımlı Barındırma'yı (Shared Host) seçiniz.

Ardından barındırıcı firmanız hangisiyse onu ve kullanacağınız alan adınızı sırasıyla giriniz.

Ardından çok yüksek ihtimalle şu hata ile karşılaşacaksınız. Hiç bir problem yok. Bu beklenen bir durum.

![](images/ioncube-install-error-1024x399.jpg)

The necessary zend\_extension line could not be found

Ioncube'ü yükleme teşebbüsümüz sırasında şu ana kadar bir adet php.ini dosyasının bu kurulum sırasında oluşmuş olmasını bekliyoruz. Eğer uzak bilgisayarınızın kök dizininde bu dosyayı bulamazsanız arama yapmanızı öneririm. Bunun için eğer SSH bağlantısına sahipseniz şu komut ile php.ini dosyasının yerini tespit edip, düzenlemek için açabilirsiniz.

```
find / -name "
```

Ben GoDaddy bilgisayarımda şu klasörde olduğunu **/etc/opt/remi/php73** fark ettim. PHP versiyonu ve dolayısıyla dizini muhtemelen siz de farklılık gösterebilecektir.

En garanti yöntem olarak GoDaddy panelinizden SSH ile erişime izin verip, sistemdeki "php.ini" dosyalarını taratmak olabilir.

sudo nano /etc/opt/remi/php73/php.ini

Eğer platformunuz GoDaddy ise

komutu ile bu başlangıç dosyasını açıp en üstüne aşağıdakileri giriniz. Daha önce de belirttiğim gibi sunucunun kök dizini GoDaddy ve Digital Ocean'da farklılık gösteriyor.

\[ZEND\]
zend\_extension = "/var/www/html/ioncube/ioncube\_loader\_lin\_7.3.so"

Eğer platformunuz Digital Ocean ise PHP sürümünüz de muhtemelen 7.4 olacaktır:

\[ZEND\]
zend\_extension = "/var/www/html/ioncube/ioncube\_loader\_lin\_7.4.so"

Olması Gereken format aslında aşağıdaki gibidir. Dolayısıyla doğru PHP versiyonuna göre yukarıdaki dizini kendinize uyarlayınız.

zend\_extension = "</path/to>/ioncube\_loader\_<plat>\_<x>.<y>.<ext>"

Ardından eğer Apache sunucu kullanıyorsanız yeniden başlatmanızı öneririm.

/etc/init.d/apache2 restart

Şimdi tekrardan **webmeister.org/ioncube/loader-wizard.php** adresine gittiğinizde herhangi bir sorundan bahsetmeyen ekranla karşılaşıyor olmalısınız.

![Ioncube Godaddy WordPress](images/Screenshot-from-2021-02-23-20_41_03-1024x157.jpg)

Umarım bu yazı ile WordPress uygulamalarınızda karşılaştığınız Ioncube PHP Loader hatasına bir çözüm getirebilmişimdir. Okuduğunuz için teşekkürler.
