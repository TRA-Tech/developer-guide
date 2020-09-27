## ReactJS Nedir?

React kendi resmi sitesinde belirtildiği üzere ‘A JavaScript library for building user interfaces’ yani ‘kullanıcı arayüzü oluşturmak için bir JavaScript kütüphanesi’ olarak tanımlanıyor.

> Hikayesi; Facebook tarafından geliştirilmiş, FB’nin Instagram’ı satın almasıyla birlikte FB’den bağımsız hale getirilerek açık kaynak kod olarak paylaşılmış bir JavaScript kütüphanesi. IG’nin web uygulaması React ile geliştirilmiştir.

-	https://reactjs.org/

#### Virtual DOM

DOM ile uğraşmak, DOM’a sürekli yeni element’ler ekleyip çıkarmak oldukça masraflı bir iş. Aslında DOM’daki bir element’in CSS class’ini bile değiştirmek bütün DOM ağacının tekrar üzerinden geçilmesine neden oluyor. Bu yüzden React bu tur islerin tamamını gerçek DOM üzerinde değil de gerçek DOM’un bir yansıması olan sanal bir DOM (Virtual DOM) üzerinde yapıyor.

React her state değişikliğinde render edilen gerçek DOM’u bütünüyle tekrar oluşturmak yerine, state değişikliğini Virtual DOM’a yansıtmaktadır. Bu sayede gerçek DOM ile ve yeni sanal(virtual) DOM arasındaki farklılıkları tespit ederek, gerçek DOM’da yapılacak değişikleri hesaplar ve tek seferde sadece gerçek DOM’da değişen elemanları yeniden render eder. Bu şekilde state her değiştiğinde ana DOM’un tüm elemanlarıyla yeniden oluşturulması maliyetinden korunulmuş ve azami performans iyileştirmesi sağlanmaktadır.

**DOM (Document Object Model):** İnternet tarayıcıları girilen internet sayfasını bir belge, bu belge (sayfa) içerisinde bulunan tüm elemanları da nesne olarak kabul eder. Buna göre resim, yazı, form gibi tüm elemanlar nesnedir. İşte DOM sayfa içindeki herhangi bir nesnenin özelliğine müdahele edebilmemize, nesne özelliklerini değiştirebilmemize olanak sağlar. Bunu yapabilmek için de JavaScript gibi bazı script dilleri kullanmamız gerekir.

> Virtual DOM Yapısını Kullanan Diğer Kütüphaneler; https://bestofjs.org/tags/vdom

**Kaynak:**
-	https://muratbalcii.wordpress.com/2016/12/16/virtual-dom-nedir/
-	https://fatihacet.com/react-ve-virtual-dom-mimarisi-uzerine/
-	https://tr.wikipedia.org/wiki/Document_Object_Model

#### JSX
React ile geliştirme yaparken JS yerine JSX syntax tercih etmek bir best practice’tir.
JSX kod yazımını kolaylaştırmak ve okunabilirliği arttırmak için geliştirilmiş bir JavaScript söz dizimidir. JSX söz dizimi kullanmadan React ile geliştirim yapmak zordur diyebiliriz. Bunun neden böyle olduğunu anlamak için bir html elemanının JS ve JSX’te nasıl oluşturulduğunu görelim.

**JS:**
```javascript
React.createElement(“button”, {className: “btn btn-primary”}, “Button”);
```

**JSX:**
```jsx
<button className="btn btn-primary">Button</button>
```

**Kaynak:**
-	https://kodcu.com/2016/07/react-js/

### ReactJS Geliştirirken Bilinmesi Gerekenler

**NPM (Node Package Manager):** Npm, paket yönetim sistemidir. .NET’te ki ‘Nuget’ paketlerinin bir benzeri. Ama çok daha geniş. Belli başlı birkaç komutu var. Bu komutlarla işin çoğunu hallediyorsun.

**ECMAScript:** Javascript dilinin standartlaştırılmış sürümünün adıdır. React projelerinde biz Ecmascript 6 versiyonu ile kod yazacağız. Fakat tarayıcılar hala bu versiyona tam destek vermiyor. O yüzden kodlarımızı Ecmascript 5 dönüştürmemiz gerekiyor. Bu dönüşüm işlemi için BabelJs kullanmamız gerekiyor. ECMAScript hakkında ilerleyen sayfalarda ayrıntılı bilgi vereceğim.

**BabelJS:**ES6 şuan tüm web tarayıcıları tarafından desteklenmiyor. Bu nedenle BabelJS kullanarak yazmış olduğumuz ES6 kodunu ES5 koduna çevirmiş oluyoruz.

**WebPack:** Bir ‘Module Bundler’. Türkçesi modül paketleyici. Sizin yazdığınız kodu düzenler, karıştırır, birleştirir, çalışır hale getirir.

**Kaynak :**
-	https://medium.com/t%C3%BCrkiye/javascriptin-en-g%C4%B1c%C4%B1k-konular%C4%B1-webpack-babel-eslint-ve-di%C4%9Ferleri-fb2e1232a085
-	http://es6-features.org/#Constants (ES6 yenilikler)
-	https://babeljs.io/ (Resmi sitesi, compile örnekleri mevcut)
-	https://webpack.js.org/ (Resmi sitesi)

**React-Scripts:**Yakın bir zamana kadar BabelJS, WebPack gibi araçları kullanmak için projemize ekleyerek ayrı ayrı konfigüre etmemiz gerekiyordu. Bu nedenle bir ReactJS projesine başlamak biraz zahmetli ve uzun bir süreç oluyordu.

**Kaynak:**
-	https://stackoverflow.com/a/47006938 
-	https://stackoverflow.com/a/52179673 

**Create React App**

Single-Page React uygulamaları geliştirmek için FB tarafından resmi olarak desteklenen bir yoldur. React-Scripts ile birlikte artık Babel, WebPack gibi araçları projemize dahil etmek için herhangi bir çabalamıyoruz. Create React App ile projemize otomatik olarak dahil olup konfigüre ediliyorlar. Bu sayede projemizi oluşturup direk React kodlarımıza odaklanabiliyoruz.

**Kaynak:**
-	https://facebook.github.io/create-react-app/docs/getting-started

### Hook

React Hook ile klasik bileşen yapısından 'Arrow Function Component' yapısı kullanılmaya başlandı. 

> Hook’lar React 16.8’deki yeni bir eklentidir. Bir sınıf yazmadan state ve diğer React özelliklerini kullanmanıza olanak sağlarlar.

**Kaynak:**
https://tr.reactjs.org/docs/hooks-intro.html

### Bileşen (Component) Yapısı,

Componentler, uygulamanızı tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir. Kavramsal olarak, componentler JavaScript fonksiyonlarına benzemektedir.

Bunlar rasgele girdileri (props olarak adlandırılır) kabul eder ve ekranda neler görüneceğini açıklayan React elementleri return ederler.

React ile geliştirdiğimiz her şey esasında bir bileşendir. Bu geliştirdiğimiz bileşenleri bir araya getirerek bir aplikasyon oluşturuyoruz. Bu bileşen yapısı sayesinde daha az kod ile daha çok iş yapabiliyoruz. Her ne kadar farklı katmanlara ayrılıyor olsa da (component, container, layout vb.) işin özünde her şey component’dır.

**Props:** Geliştirmiş olduğumuz bileşenimize veri aktarımı için kullanıyoruz. Props’lar read-only olup sadece okunabilir.

**State:** Yalnızca componentler için kullanılabilen bir özelliktir. State bu componentin global değişkeni olarak düşünülebilir. 'Set' edildiği zaman component tekrar render edilecektir.

**Kaynak:**
-	https://omergulcicek.github.io/react/hizli-baslangic/component-ve-props.html
-	http://www.firatipek.com/entry/22

#### Bileşen (Component) Yaşam Döngüsü (Lifecycle)

Her bileşenin yüklenmeden önce, yüklenirken ve sonrasında çalıştırılacak metotları mevcuttur. Yüklenmeden önceki metotlar için “will” kelimesi, yüklendikten sonraki metotlar için “did” kelimesi kullanılır.

**constructor():** Bileşen yüklenmeden önce çağırılır. Bilşenimiz, React.Component’in alt sınıfı olduğu için “super(props)” ile birlikte kullanılması gerekir, aksi takdirde bileşen property’leri, constructor() metoduna aktarılmaz.

**getDerivedStateFromProps():** Bileşenin property’leri değiştiğinde, state’ini de değiştirir. Tabi bu işlemin nasıl yapılacağını siz belirlersiniz. İçerisinde yapacağınız işlemler state değerlerini “null” olarak dönerse, state güncellenmez, state değerlerini dönerseniz güncellenir.

**componentDidMount():** Bileşen yüklendikten sonra çalışır. Özellikle RESTful isteklerini burada yapmak en doğrusu oluyor. “setState()” metodunu burada kullanmak çok tehlikelidir. Her state güncellemesinde bileşen yeniden “render” oluyor.

**shouldComponentUpdate():** Bool bir değer return eder. İçerisine yazıdığımız koşullara göre “true” yada “false” değer döndürürüz. Default olarak “true” değer döndürür.

**getSnapshotBeforeUpdate():** Bileşenin state’i güncellenmeden önceki son değerlerini saklayabilirsiniz. Bu veri biraz sonra bahsedeceğimiz “componentDidUpdate” metoduna otomatikman parametre olarak gönderilir.

**componentDidUpdate():** Bileşen tamamen güncellendikten sonra çağırılır. Özellikle RESTful istekler yaptıktan sonra, gelen verilerle bileşen verilerini karşılaştırmak için en uygun yerdir.

**componentWillUnmount():** Bileşen kaldırıldığında, yok edildiğinde çalışır. Bileşen ile ilgili tüm bilgiler tarayıcıdan silebilirsiniz, timer yada RESTfull istekleri sonlandırabilirsiniz. jQuery Plugin’lerin destroy metotlarıyla aynı diyebiliriz.

Ayrıca bileşenlerin hangi olayları (event) desteklediğine aşağıdaki adresten ayrıntılı bir biçimde inceleyebilirsiniz. (https://reactjs.org/docs/events.html) 

**Kaynak :**
-	https://medium.com/@hvsonmez/reactjs-component-lifecycle-b%C3%B6l%C3%BCm-3-6ce01128fc58
-	https://overreacted.io/tr/why-do-we-write-super-props/

### ECMAScript
ECMAScript bir yazılım dili standardıdır. JavaScript ise bu standartların uygulanmış olduğu en popüler programlama dilidir. ES6 ile birlikte bir çok değişiklik gerçekleşti bu değişikliklerden en çok kullanılan özelliklere değinmek istiyorum. Şuan ECMAScript ES8 versiyonunu yayınlamış durumda. İlgili arkadaşlar yenilikleri ayrıntılı olarak kaynaklardan takip edebilir.

#### ES – Yeni Değişkenler
Sık karşılaşabileceğimiz “var” dışında iki farklı değişken tipi ES6 ile birlikte kullanılmaya başlandı. ‘let ve const’ değişkenlerinden kısaca bahsedeceğim. Kaynaklar kısmında ayrıntılı bilgi bulabilirsiniz.

**Var:** Değişken birden fazla tanımlanabilir, içeriği değiştirilebilir. Function Scope bir değişken olup if-for içinde tanımlanan değişkenlere fonksiyon içerisinden erişilebilir.

**Const:** Yalnızca bir kez tanımlanabilen değişkenlerdir, içeriği değiştirilemez. Block Scope bir değişken olup, yalnızca tanımlandığı {} blok arasında erişilebilir.

**Let:** Sadece bir kez tanımlanabilir, içeriği değiştirilebilir. Block Scope bir değişken olup, yalnızca tanımlandığı {} blok içerisinden erişilebilir.

#### Varsayılan Parametreler
Artık fonksiyonlarımızı oluştururken parametrelerimize varsayılan değerler tanımlayabiliyoruz. Önceki sürümlerde bu mümkün değildi.

```javascript
var test = function(value = 'Varsayılan Değer')  { console.log(value); }
```

> Çıktı: Varsayılan Değer

#### String Şablonlar
String şablonlar oluştururken artık değişken eklerken + işaretini kullanmamız gerekmiyor. Bunu yapabilmek için ` işareti ile değişkenimizi tanımlamamız gerekiyor.

```javascript
var test = `String şablon ${değişken1} ${değişken1}.`
```


#### Multi-line Strings
Multi-Line strings değişken verileri oluştururken artık \n\t kullanmamız gerekmiyor. Yine ` işareti ile oluşturduğumuz değişkenlerin çıktısı aynı şekilde oluyor.

```javascript
var greyPoem = 
`Once more into the fray,
Into the last good fight I'll ever know
Live or die on this day,
Live or die on this day`
```

#### Arrow Functions
Artık herhangi bir fonksiyon tanımlarken Function kelimesine ihtiyaç duymuyoruz.
```javascript
const test = (value = 'Varsayılan Değer') =>  { console.log(value); };
```
> Çıktı: Varsayılan Değer

#### Object Destructuring
Bir javascript nesnesinden yada dizisinden, değişkenleri almak için kullanılan yeni yöntem.
```javascript
const httpOptions = { method:"GET", url:"/api/products" };
const { method } = httpOptions;
```
>Çıktı: method: “GET”


#### Obje ve Dizi Rest/Spread Operatörleri
İşimizi oldukça kolaylaştıracak .Net Core da anlatmış olduğum AutoMapper özelliğine benzer bir özellik. Kullanımı oldukça basit örnekler le açıklayayım;

**Rest Operator**
```javascript
const obj = {  a: 1, b: 2, c: 3, d: 4, e: 5 }
const { a, b, ...z } = obj;

console.log(a, b, z);
```
> Çıktı: 1, 2, { c: 3, d: 4, e: 5}

**Spread Operator**
```javascript
const obj2 = { a, ...z }

console.log(obj2);
```

> Çıktı: { a: 1, c: 3, d: 4, e: 5 }

#### Property-Value Shorthand Notation
Bir objeye property atarken eğer atayacağınız değişkenin ismi ile property ismi aynı ise tekrar kendisini yazmanıza gerek kalmıyor.

```javascript
const name = "Okuyucu"
const obj = {
    id: 1,
    name,
}
```
> Çıktı: obj = { id:1, name: “okuyucu”}

#### Promise
Promise ile Asenkron olarak gerçekleştirdiğim işlemlerin (setTimeout, Ajax) kontrolünü sağlayabiliyoruz. İşlem sonucuna göre resolve/reject şeklinde iki farklı sonuç döndürebiliyor.

```javascript
new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
    }).then(() => {
      console.log("resolve");
    }).catch(() => {
      console.log("reject");
    });
```
> Çıktı: 1sn sonra console = resolve

**Kaynak :**
-	https://medium.com/@busramemis/js-var-const-ve-let-ce26bc9818f7
-	https://yazilimgunlugu.org/es6-es7-ile-javascript-e-gelen-yenilikler/
-	https://blog.durul.me/2018/03/21/javascript-es6-en-cok-kullandigim-5-ozellik.html
-	https://node.university/blog/7297/es7-es8-post
-	https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a
-	https://webapplog.com/es6/
