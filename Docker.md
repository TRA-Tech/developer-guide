### Docker Nedir?
Docker, dünyada en çok kullanılan yazılım konteynerleştirme (Container) platformudur. Linux Kernel’e 2008 yılında eklenen Linux Containers (LXC) üzerine kurulu bir teknolojidir. LXC, Linux’da aynı işletim sistemi içerisinde birbirinden izole olmuş bir biçimde çalışan Container’lar (Linux tabanlı sistemler) sağlamaktadır.

LXC, işletim sistemi seviyesinde bir sanallaştırma altyapısı sunmaktadır. Container’lar içerisinde aynı işletim sistemi tarafından çalıştırılan uygulamalara, LXC tarafından işletim sisteminde sadece kendileri koşuyormuş gibi düşünmeleri için bir sanallaştırma ortamı sağlanmıştır.

LXC, Container’lara işletim sistemi tarafından sunulan dosya sistemi, ortam değişkenleri, vb fonksiyonları her bir Container’a özgü olarak sağlar. Aynı işletim sistemi içerisinde çalışmalarına rağmen Container’lar birbirlerinden izole edilmişlerdir ve birbirleri ile istenmediği müddetçe iletişime geçemezler.

Hypervisor bazlı sanal sunucuların hepsinin kendine ait Guest işletim sistemi bulundurması gereklidir, LXC’de ise Container’lar Host’un işletim sistemini kullanırlar yani bir işletim sistemini ortak olarak kullanırlar.

#### LXC'den Docker'a Geçiş
Docker, LXC’nin zengin mirasının üzerine oturmuştur fakat LXC’de manuel olarak yapılan işlemleri ustaca paketleyerek standardize etmiştir. Docker, LXC’nin sunduğu kapsamlı fonksiyonları ve konfigürasyonları detaylarından arındırarak kullanımını basitleştirmiştir. Docker’ın getirdiği en önemli özellik Container’ın yapısını metin bazlı Image formatı ile (Dockerfile) tanımlamasıdır. Bu sayede aynı Image formatı kullanılarak aynı özellikteki Container’lar kolaylıkla yaratılabilir, başka kişilerle Docker Registry (Docker Hub, NuGet Package Management Gibi) üzerinden paylaşılabilir ve kolaylıkla genişletilebilir.

**Container:** Sanal makineden farklı olarak üzerinde uygulama çalıştırabilmek için misafir işletim sistemine ihtiyaç duymuyor. Haliyle uygulamamızı başlatmak için de boot etmemiz gereken bir sistem yok. Bu da uygulamamızı saniyeler içerisinde çalıştırabilmemizi sağlıyor. Container yapısında tek bir işletim sistemi var, o da zaten çalışıyor ve tüm containerlar güvenli bir şekilde bu işletim sistemini paylaşıyorlar.

**Hypervisor:** Fiziksel olarak işletilen güçlü sunucular, ihtiyaç ölçüsünde farklı işletim sistemleri (kimi zaman hem Windows hem de Linux aynı fiziksel sunucuda) kurularak kolaylıkla işletilebilmektedir.

**Kaynaklar;**
-	https://gokhansengun.com/docker-nedir-nasil-calisir-nerede-kullanilir/ 
-	http://devnot.com/2016/container-dunyasi-ve-docker/ 
-	https://docs.docker.com/engine/examples/dotnetcore/
-	https://docs.microsoft.com/tr-tr/visualstudio/containers/overview?view=vs-2019
-	https://www.youtube.com/watch?v=wW9CAH9nSLs
-	https://www.youtube.com/watch?v=3N3n9FzebAA
