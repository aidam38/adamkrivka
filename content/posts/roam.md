---
title: "Roam Research: Opravdovsky revoluční zápiskovací aplikace"
url: "roam"
author: "Adam Křivka"
published: true
date: 2020-10-15
tags: ['Roam Research']
---


(S Roam Research, Inc. nejsem jakkoliv spojen.)

Během střední školy jsem byl takový ten student, který si zásadně nedělá zápisky a všechno se snaží zvládnout jen dáváním pozoru v hodinách nebo vždycky před písemkou škemrá u holek jejich krasopisné poznámky. Fungovalo to, ale měl jsem pocit, že se mi všechno hned vytrácí z hlavy. 

Problém byl, že mít sešit na každý předmět mi přišlo hrozně neefektivní. Co když se učíme o podobné věci ve dvou předmětech? Jak si mám spojit literárně-historický kontext v češtině s dějepisem? Nebo organickou chemii s biologií?

Dopadlo to tak, že jsem si celou střední místo toho kreslil do svého jednoho sešitu nápady na to, jak by mohla vypadat vhodná zápiskovací aplikace. Měl jsem s tím velké oči -- v jednu chvíli jsem to skoro už začal programovat!

**Ale pak jsem v únoru 2020 objevil Roam Research a všechno do sebe zapadlo.** Karanténa a maturita přede mnou... akorát čas zkonsolidovat vědomosti a udělat si ve věcech pořádek.

# Struktura článku

- Jak Roam funguje

- Čím byl Roam inspirován & vize

- Proč vám Roam dá 1000x víc než vás bude stát

- Jak začít

- Roam 1-on-1 zaučování

# Jak Roam funguje

Roam Research je zápiskovací aplikace, nebo spíš **nástroj pro myšlení** (angl. "tool for thought"), která vám umožňuje volně vytvářet poznámky a vzájemně je propojovat do jedné velké sítě. Takhle nějak by mohla vypadat ta síť:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FQMbbmEoavC.png?alt=media&token=0654f565-b59c-40b4-9cf7-5a8810afcd9b)

Moje síť, nebo správněji __graf__, ale vypadá už takhle:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2Fm2n3wTEtyr.png?alt=media&token=85fc17e3-3d4d-4c5b-8934-722dab294aca)

Dalo by se říct, že se právě koukáte na takový můj druhý mozek.

## Stránky, bloky a zpětné odkazy

V Roamu jsou dva základní elementy **stránka** a **blok** (angl. "page" a "block"). Blok je něco jako odrážka a stránka je prostě pojmenovaný seznam odrážek, samozřejmě s možností vnořovat (tj. mít "pododrážky"), něco jako dokument. 

Na každou stránku (ale i blok; o tom později) se dá odkazovat pomocí dvou hranatých závorek, např. v mém grafu by vás kliknutí na [[Roam Research: Opravdosky revoluční zápiskovací aplikace]] odkázalo na stránku, kde připravuju tenhle článek. 

A teď to revoluční: na každé stránce máte kromě jejího obsahu i seznam zpětných odkazů, tj. stránek (nebo spíš konkrétních bloků), které zmiňují stránku, na které se zrovna nacházíte. Někdy něco takového bývá na konci článků na Wikipedii, ale v Roamu je to mnohem víc. 

Ukážeme si to na příkladu. Řekněme, že mám stránku [[Na západní frontě klid]], kde mám informace o téhle knížce k maturitní četbě. No a řekněme, že mám taky stránku [[1. světová válka]], která je ale prázdná, protože jsem hajdalák a do dějepisu jsem si zápisky nedělal. Když ale někde v zápisu o [[Na západní frontě klid]] zmíním [[1. světová válka]], ukáže se mi to v tom seznamu zpětných odkazů, asi nějak takhle:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FSRUoN6ikTC.png?alt=media&token=054925bc-7559-45c0-9aab-1df86a9917f0)

Takže teď už v podstatě vím něco o 1. světové válce, přestože jsem si o ní ještě formální zápisek neudělal.

## Funkce zpětných odkazů

A čím jsou tedy tyto zpětné odkazy (angl. "backlink") nebo reference tak speciální?

- **Každou referenci lze přímo upravovat**. Např. při psaní tohoto článku jsem měl u Remarqua překlep (dobrovolní -> dobrovolník) a hned jsem ho opravil.

- **Každá reference umožňuje rozšířit kontext** -- podívat se, jaké bloky jsou "kolem" (a samozřejmě pak všechny viditelné bloky upravovat). Např. ve zmínkách stránky [[Erich Maria Remarque]] mám, že patřil mezi francouzské autory meziválečné prózy. Takto se můžu podívat, kteří další autoři patřili do meziválečné prózy:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FpZQ_udr_h-.gif?alt=media&token=23269363-8ea6-4d4d-8b83-fe1fd0879ba9)

Než ukážu další funkci, doplním, že # ("hashtag") funguje stejně jako [[]]. Tedy #recept je to samé jako [[recept]] (když je v názvu mezera, tak se přidá [[]]: #[[moje recepty]]). A ano, Roam je skvělý na recepty! Hned uvidíte v další funkci.

- **Reference se dají filtrovat**. Takto se například můžu podívat, které z mých receptů jsou hlavní jídla, přílohy, nebo menší pochutiny.

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FilDFLGefzm.gif?alt=media&token=66ba67b0-8066-4d48-a5ee-184e9efec458)

Doteď jsme se zabývali pouze explicitními odkazy, anglicky "Linked References". Poslední a možná nejsilnější funkce nám umožní však jít ještě dál:

- Na dělání odkazů pomocí [[]] nebo # vůbec nemusíte myslet. **Roam prohledává všechny vaše poznámky pro doslovné zmínky názvu stránky** a ukazuje vám je v sekci "Unlinked References". 

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2Ff4upiyYr1Q.gif?alt=media&token=76c15669-e566-4f2e-980b-36c0903e446e)

## Vytváření stránek

Když napíšete dvě hranaté závorky (pravou závorku to dodělává samo, na české klávesnici se levá hranatá závorka píše pravý Alt+F) nebo hashtag a začnete něco psát, Roam postupně ukazuje všechny stránky, které už to, co píšete, ve svém názvu obsahují (v podstatě takové vyhledávání). Pokud napíšete název stránky, která ještě neexistuje, **instantně se vytvoří**. Úplně stejně funguje vyhledávací řádek v horní části aplikace.

Stránky můžete přejmenovávat a název se změní v každé explicitní zmínce.

Speciálním druhem stránkem je tzv. **denní poznámka** (ang. "Daily Note"), která vám může sloužit jako takový diář, plánovač nebo prostor, pro myšlenky, které se nehodí nikam jinam. Denní poznámka se vytvoří automaticky pro každý den, kdy používáte Roam. Je jeden z hlavních **startovacích můstků** vašeho každodenního Roamování.

Druhým startovacím můstkem jsou **stránky s hvězdičkou**, které máte vždy v levém panelu.

Jak to vypadá uvidíte v následující sekci. 

## Roam jako diář

V tuhle chvíli vám můžu bez větších řečí ukázat další skvělé využití Roamu (někteří proponenti Roamu tento příklad považují za "nejrychlejší představení Roamu").

Na denní poznámku si napíšete:

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2F-i97kIlgp_.gif?alt=media&token=4f69ed16-2af5-487d-a3be-f11f94a24371)

A máte tři stránky:

- [[meeting]] se všemi meetingy i s poznámkami ve vnořených odrážkách a kontextem (např. co jiného jste daný den dělali), 

- [[Jan Novák]] se všemi interakcemi s osobou Jan Novák, 

- a [[projekt Lesní školka]] se všemi informacemi o tomto projektu, včetně všech zmínek, kdy jste se o něm s někým bavili nebo o něm přemýšleli.

(Pokud jste se doteď hrozili, že ty hranaté závorky se blbě čtou, tak si v ukázce výše všimněte, že po kliknutí mimo odrážku zmizely. Dá se to nastavit.)

Já si teď takhle třeba zapisuju přednášky na vysoké škole: 

- [[předmět A]] #[[přednáška]] na *téma* 

Do odrážek pod tímto blokem si pak dělám poznámky, které po přednášce znovu procházím, přidávám odkazy a případně přepisuju některé informace jinam. 

Nebo když se vrátíme zpátky k receptům -- někdy si napíšu:

- 12:00 #[[vařím]] [[vepřoknedlozelo]]

Za pár let se tak potom můžu dívat na všechny časy, kdy jsem něco vařil, nebo kdy jsem zrovna vařil vepřoknedlozelo.

## Blokové odkazy & boční panel

A co když vám řeknu, že (zpětné) **odkazování funguje i pro jednotlivé bloky**? 

Ano, prostě napíšete dvě jednoduché závorky (()), začnete psát a Roam vám najde blok, který zmiňuje slova, která píšete. Narozdíl od stránek ale pak místo obsahu bloku do jednoduchých závorek vloží takový kryptický kód; když ale kliknete mimo, zobrazí se tam text daného bloku. Druhý způsob, kterým vkládat blokové reference je přetažením odrážky při držení Ctrl (viz ukázka).

Někteří jiní proponenti Roamu tvrdí, že teprve blokové odkazy jsou to pravé ořechové. Já mám pocit, že je to docela pokročilá funkce a každý ji používá trochu jinak. Můžeme si ji však ukázat v kombinaci s bočním panelem.

Když na cokoliv kliknete s Shiftem (např. na stránkový nebo blokový odkaz), otevře se to v pravém výsuvném bočním panelu. Každá další věc, na kterou kliknete s Shiftem, se přidá na začátek. 

Boční panel vám otevírá nekonečné možnosti. Můžete v něm mít například otevřený nějaký text, se kterým pracujete, a kopírovat si z něho případné citace. Nebo si v něm můžete otevřít všechny své úkoly (ve zmínkách stránky "TODO") a "taháním" blokových referencí do denní poznámky si naplánovat den, viz ukázka.

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnotemap%2FZCLAkKJXpj.gif?alt=media&token=66d14da9-1df7-405c-a12b-57147435287a)



## Srandičky

V předchozí ukázce jste si mohli všimnout, že jsem měl u každého úkolu takové odškrtávátko. To se tam objeví, když dám Ctrl+Enter nebo napíšu {{[[TODO]]}} (skoro vždycky to ale dělám to zkratkou). Ostatní takovéhle vychytávky se skrývají pod menu, které se objeví, když napíšete lomeno /, např. můžete rychle vložit aktuální čas (hodí se na psaní diáře), zapnout si časovač na 25 minut, najít nějaké datum v miniaturním kalendář, vložit matematickou rovnici, atd.

Taky se samozřejmě v Roamu dají dělat nadpisy (tří úrovní, pomocí #, ## a ###), tučné a šikmé písmo (pomocí \*\*tučně\*\*, \_\_šikmo\_\_), zvýrazňovat (^^zvýrazněně^^), atd.

# Čím byl Roam inspirován & vize

Všechny cesty vedou do Říma / Roamu. Zakladatelé Roamu se často odkazují na úplně první průkopníky počítačových systém, kteří silně věřili, že největší pozitivní dopad počítačů bude v pomáhání lidem efektivněji myslet a v organizaci informací. Od té doby vzniklo několik projektů podobných Roamu, ale žádný nebyl velice úspěšný. Vlastně nejpodobnější Roamu je samotný internet v kombinaci s vyhledávačem, např. Google. 

A to je i samotná vize Roamu: organizovat vědomosti lidstva lépe, než je tomu teď. V tuto chvíli je Roam v podstatě výhradně individuální aplikace, ale tvůrci mají v plánu umožnit jednoduchou spolupráci a vytvořit tak v podstatě systém "kolektivního vědomí". 

Prakticky začíná historie Roamu přbližně 2-3 roky zpátky. Tou dobou vyšla kniha How To Take Smart Notes od Sönkeho Ahrense, která popisuje papírový zápiskovací systém německého sociologa Niklase Luhmanna jménem Zettelkasten, jímž je Roam silně inspirován (sám autor knihy na Roam přešel a účastní se některých seminářů pro uživatele). Četba této knihy nebo dlouhé zamyšlení nad vlastním zastřešujícím systémem organizace osobních vědomostí je skoro stejně důležitá v úspěšném používání Roamu jako pochopení všech jeho funkcí. 

Prvními testery Roamu byli výzkumníci v oblasti bezpečnosti umělé inteligence, existenciálních rizik a dlouhodobých cílů. Tak tomu bylo přibližně do září roku 2019, kdy se s Roamem po internetu (hlavně Twitteru) "roztrhl pytel" a uživatelská základna začal růst neskutečným tempem, až v květnu 2020 musel tým pozastavit registraci nových členů kvůli přehlcení serverů a v červnu produkt zpeněžnit.

# Proč vám Roam dá 1000x víc než vás bude stát

Přiznám se, že jsem Vám zamlčel jednu důležitou věc. **Roam stojí 7,5 dolaru, tj. cca 160 korun, měsíčně pro studenty a akademiky a 15 dolarů, tj. cca 330 korun, pro ostatní.** 

Já jsem student a předpokládám že hodně čtenářů taky. 160 korun je jako jedno menu s bagetou a pitím v Bageterii Boulevard. A já naprosto miluju Bageterii Boulevard, věřte mi! 

Ale vytváří pro mě jedna bageta v Bageterii Boulevard měsíčně opravdu takovou, jako používání Roamu jeden měsíc? Roam je první věc, kterou ráno na počítači otevřu. Předtím to byl Facebook, teď je to Roam. V podstatě celý den si do něj píšu myšlenky, poznámky a organizuju si v něm všechny informace, které se učíme. Díky Roamu jsem úspěšně odmaturoval s minimálním časem na učení; a teď na Caltechu, vyhlášeně náročné americké univerzitě, mám i přes online studium dobré výsledky. O prázdninách jsem zorganizoval tři velké zážitkové akce, jejichž program jsem sestavoval v Roamu. Neustále narážím na nějaké poznámky, které jsem psal třeba 6 měsíců zpátky (pomocí zpětných odkazů), a vždy mě to nějak překvapí a posune. Kdykoliv se cítím špatně, napíšu si #reflexe a vyliju si srdíčko; pak se můžu později smát, nad čím jsem to měl takovou blbou depku.

Takže v součtu.... jednu bagetu v bageterii Boulevard fakt oželím. 

Silně věřím, že to pro vás může být úplně stejné. Každý, kdo to dočetl až sem, má určitě ve svém životě mnoho oblastí, ve kterých jim Roam může zásadně pomoct. Prosím, bylo by hloupé, kdyby vás naťukání kreditky při zakládání účtu odradilo od používání tak skvělé aplikace. **První měsíc je zadarmo** a předplatné můžete kdykoliv zrušit.

https://roamresearch.com/

(Zopakuji, že nejsem s Roam Research finančně propojen.)

Pokud si chcete Roam vyzkoušet hned teď a tady, tak můžete zavítat na moji zaučovací anarchistickou veřejnou databázi. Je to jedna z mých osobních předplacených, kterou poskytuju lidem, aby si Roam vyzkoušeli, než budou muset naťukovat tu kreditku na free trial. Můžete psát cokoliv kamkoliv, jen vězte, že pokud to nesmažete, tak to tam zůstane.

https://roamresearch.com/#/app/use-this-app-it-will-change-your-life

# Jak začít

Tento článek to bral dost zhurta. Pokud byste teď otevřeli Roam, byli byste pravděpodobně pořád zmatení. To je normální. Já si až teď po půl roce přijdu, že Roam vážně zvládám. 

Začněte pomalu -- piště hlavně na denní poznámku, vytvářejte hodně stránek (nebojte se, že tam někde zůstanou viset... dokud na ně žádná stránka neukazuje, je to jakoby neexistovaly) a naučte se vnořovat odrážky. 

Úplně nejlepší je najít si nějaký konkrétní projekt, který byste chtěli v Roamu realizovat. Přepsat si zápisky ze školy, sledovat úkoly do práce, konečně sepsat ten recept na domácí buchty, začít objevovat svoje pocity...

Pokud byste ocenili, kdybych sepsal nějaký obsáhlejší český tutoriál na Roam, zanechte komentář níže pod tímto článkem nebo mi napište e-mail (krivka.adam@gmail.com). Snad se pak tomu snáz dokopu.

# Roam 1-on-1 zaučování

Každému zájemci nabízím **1-on-1 hodinovou zaučovací online schůzku**. Tuto službu nabízí i samotný support team Roamu, ale předpokládám, že anglický jazyk by pro velkou část českých uživatelů mohl být bariérou. Navíc pro mě to není velká časová dotace, aspoň se ty hodiny a hodiny strávené učením Roamu zužitkují tm, že ten proces urychlím někomu jinému. 

Zapište se tady: https://calendly.com/krivka-adam/roam-1-on-1-zauceni , nebo mi napište e-mail na krivka.adam@gmail.com.


