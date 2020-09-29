# GitLab üzerinde branchler ile çalışmak

Git üzerinden yönettiğimiz projelerde uzaktan çalışırken ekibin takibi , conflict sorunlarını azaltmak ve code review işlerini daha kolaylaştırmak ve
bunların yanı sıra ideal kod geliştirme ortamını yakalamak amacı ile artık projelerimizde kişiye ya da göreve özel **branch**ler ile çalışmaya başlıyoruz.

**Git-flow** modeline göre her projenin çalışan `yayına hazır` versiyonu **master** branch olmalıdır ve sadece **develop** branch den merge edilmelidir.(Acil durumlarda **hotfix** ten de edilebilir)


1. ![newbranch](http://fehmicansaglam.net/assets/images/git-flow.png)




**master** branch push yapmaya kapalıdır. Developerlar kendilerine özel ya da yaptıkları işe özel açılan **branch** üzerinde çalışırlar.

Süreç şöyle işler,
 
1. Proje yöneticisi ya da developer projede yeni bir **Issue** açar
![newbranch](https://i.imgur.com/UqH8Y5Z.png)
 
2. Açılan **Issue** Id ile yeni bir **branch** açar ve burada geliştirme yapar. Örneğin : bug-4, feature-36
![newbranch](https://i.imgur.com/K33E9tT.png)

2. İş bitiminde developer çalıştığı **branch** için `Merge request` açar. 
3. `Merge request` proje yöneticisine gider
4. Proje yöneticisi requesti ya kabul edip **develop** branch ile merge eder ya da kabul etmezse, etmeme nedeni ile birlikte requesti kapatır.
5. Red edilen `Merge request` developera geri döner, hatalarını düzeltir ve tekrar `Merge request` açar. `Merge request` kabul edilene kadar süreç bu şekilde devam eder.


**develop** branch gerekli testleri geçtikten sonra **master** version ile **merge** edilir ve yayına atılır. Bu sayede **master** branch her zaman yayına hazır version olarak kalır. O projede çalışmayan birisi bile ihtiyaç halince **master** branchin çalıştığını bildiğinden yayına atabilir.

### Örnek branch isimlendirme

* feature-4
* bug-65
* hotfix-15

`feature` : Yeni bir özellik geliştirileceği zaman birden fazla commit içerecek görece büyük değişiklikleri için açılır. Aynı anda birden fazla **feature** branch açılabilir. Feature ların ayrı **branch**lerde geliştirilmesi hem develop branchinin gereksiz commitler ile dolmasını engeller hem de bu yöntemle bir **feature** dan vazgeçilmesi durumunda yalnızca ilgili **feature** **branch**inin silinmesi yeterli olur. 

`bug` : bilinen ve bir sonraki yayında düzeltilmesi planlanan acil olmayan sorunlar

`hotfix` : acil yayınlanması gereken , production ortamında sorun çıkaran bir durumlar


## Yeni branch nasıl açılır ?
 
1. ![newbranch](https://i.imgur.com/SwHnmeu.png)

2. `Create From` yeni açılacak olan **branch** hangi mevcut **branch** i miras alarak açılsın ?  

![newbranch](https://i.imgur.com/K33E9tT.png)


Sırada yeni açtığımız **branch** i `SourceTree` üzerinde aktif hale getirmek var.

1. ![newbranch2](https://i.imgur.com/rj5NFrB.png)
2. ![newbranch2](https://i.imgur.com/oJsAfDp.png)
3. ![newbranch2](https://i.imgur.com/Qlm15Nk.png)

`BRANCHES` altında çalışmak istediğiniz **branch** koyu renk ile seçilmiş ise çalışmaya başlayabilirsiniz.

Yaptığınız tüm `pull` - `push` işlemleri sadece ilgili **branch** te olur. **develop** , **master** ya da diğer **branch**ler bundan etkilenmez.

Üzerinde çalıştığınız **branch** ile işiniz bittiğinde artık bunun **develop** ile merge edilmesi gerekmektedir. Bunun için **Git** üzerinden ya da **SourceTree** üzerinden `Merge Request` açmanız gerekmektedir. 

## GitLab üzerinde Merge Request nasıl açılır  ?

1. ![newbranch2](https://i.imgur.com/njMNC1G.png)

2. ![newbranch2](https://i.imgur.com/CbjsUig.png)


Burada **Assignee** olarak ilgili projenin yöneticisini seçiyoruz.

**Merge options** kısmında `Delete source branch when merge request is accepted` seçeneği *default* olarak seçili gelir.
Bunun anlamı `Merge Request` onaylanırsa, ilgili branch **merge** edildikten sonra silinir. Tavsiye edilen yöntem de budur.
Ancak çalışmanın bir kısmı bitmiş ve yayına atılması gerekiyorsa bu seçeneği pasif hale getirip istek göndermeniz gerekir. Çalışmanın kalanını da sonradan tekrar `Merge Request` açarak gönderebilirsiniz.

3. ![newbranch2](https://i.imgur.com/7TY98w1.png)


## Merge Request nasıl onaylanır/reddedilir ? 

`Merge Request` **Assignee** edilen kişi ilgili projeye **Git** üzerinden girdiğinde `Merge Request` menüsü üzerinden bekleyen işlemlerini görebilir.

![newbranch2](https://i.imgur.com/Ur24O1K.png)

Tıklayıp detayına gittiğinde,
**Merge** butonu ile işlemi onaylayabilir ya da red sebebini yazıp **Close Merge Request** butonuna basıp reddebilir.
**Commits** kısmından yapılan değişiklikleri görebilir.

![newbranch2](https://i.imgur.com/n0Sb2oF.png)


**Conflicts** olması durumunda **Git** üzerinde aşağıda görülen basit merge toolu ile hangi kodların stage edileceğini seçip sonrasında merge ya da red işlemini yapabilir.

![newbranch2](https://i.imgur.com/2S9E3iM.png)


Tüm bu işlemler sonrasında eğer branch merge edilirken silinmişse developer için yeni bir branch açılır ve geliştirme buradan devam eder.

**develop** branch gerekli testleri geçtikten sonra proje yöneticisi tarafından **master** version ile **merge** edilir ve yayın hazır hale getirilir.

Her yeni branch merge edilip silindiğinde **Git** üzerinden kaldırılmış olur ancak `SourceTree` üzerinde görülmeye devam eder. Bunları kaldırmak için aşağıdaki işlemi yapabilirsiniz.

![newbranch2](https://i.imgur.com/JjHnF42.png)

**develop** ve **master** branchleri **protected** olarak işaretlenmeli, yanlışlıkla silinmesinin önüne geçilmelidir.
Bu işlem proje sayfasında `Settings>Repository>Protected Branches` altından yapılabilir.

![newbranch2](https://i.imgur.com/MHRWMzv.png)


#### Not
> GitLab üzerinde Merge Request olan işlem GitHub ' da Pull Request olarak adlandırılmaktadır.
