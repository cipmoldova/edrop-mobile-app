import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

export enum InfoType {
    WHY_DONATE,
    HOW_TO_DONATE,
    WHERE_TO_DONATE,
    USEFUL_INFO,
    ABOUT_BLOOD,
    ABOUT_BLOOD_GROUPS,
    RIGHTS_AND_OBLIGATIONS,
    WHO_CAN_DONATE,
    HOW_TO_PREPARE_FOR_DONATION,
    ABOUT_CNTS,
    HISTORY_CNTS
}

export interface InfoItem {
    type: InfoType;
    title: string;
    detail: string;
}

export interface InfoItemList { // TODO ...
    type: InfoType;
    title: string;
}

@Injectable({
    providedIn: "root"
})
export class InfoService {

    private items = new Array<InfoItem>(
        {
            // http://cnts.md/?page_id=44
            type: InfoType.WHY_DONATE,
            title: "De ce să donez?",
            detail: "\
                <h1>10 argumente PRO donare</h1>\
                <ol>\
                    <li>&nbsp; Sîngele donat de tine poate contribui la salvarea vietii unui copil nou-nascut, unei mame, unui tata, unui frate sau surori. O donatie de sînge poate salva chiar trei vieti.</li>\
                    <li>&nbsp; Poti fi sigur ca sîngele donat de tine va fi întotdeauna necesar si poate fi de folos chiar cuiva apropiat tie.</blockquote></li>\
                    <li>&nbsp; Sîngele reprezinta un dar nepretuit, care nu poate fi cumparat cu bani, ci poate fi doar donat de la o presoana la alta.</li>\
                    <li>&nbsp; E ceva ce poti oferi „din inima”, desi uneori nu este suficient pentru toata lumea, care are nevoie.</li>\
                    <li>&nbsp; E un mod de a fi admirat de ceir din jur pentru gestul care l-ai facut.</li>\
                    <li>&nbsp; E un mod de a arata ca esti receptiv la suferintele altor oameni.</li>\
                    <li>&nbsp; Donînd sînge, întri în familia mare a donatorilor si poti fi sigur, ca cînd va fi nevoie, vei fi ajutat.</li>\
                    <li>&nbsp; Procedura de donatie e simpla, rapida si inofensiva. Îti va lua doar o jumatate de ora.</li>\
                    <li>&nbsp; E un lucru demn de urmat, uman, corect, care nu cere un efort mare pentru a-l efectua.</li>\
                    <li>&nbsp; Vei păși mai usor dupa donare, vei fi mai „usor” cu aproape o jumatate de kilogram.</li>\
                </ol>\
            "
        },
        {
            // http://cnts.md/?page_id=48
            type: InfoType.WHO_CAN_DONATE,
            title: "Cine poate fi donator?",
            detail: "\
                <strong>CE TREBUIE SĂ CUNOASCĂ PERSOANELE CARE POT FI DONATORI DE SANGE: </strong>\
                <ol>\
                    <li>&nbsp; <strong>Vîrsta</strong> cuprinsa între <strong>18-60 ani</strong>;</li>\
                    <li>&nbsp; <strong>Greutate</strong> corporala minima 50 kg;</li>\
                    <li>&nbsp; <strong>Tensiunea arteriala</strong> : maxima nu depaseste 180 mmHg, iar minima 100 mmHg;</li>\
                    <li>&nbsp; <strong>Valoarea hemoglibinei</strong> nu este mai joasa de 125g/l pentru femei si nu mai putin de 135 pentru barbati;</li>\
                    <li>&nbsp; Nu prezinta afectiuni de genul: boli de piele, sechele pulmonare, operatie de ulcer, tendinta de sîngerare anormala, s.a.;</li>\
                    <li>&nbsp; <strong>Intervalul de timp</strong> între doua donari de sînge nu poate fi mai mic de <strong>60 zile</strong>.</li>\
                </ol>\
                <p><strong>La o donare se recolteaza 450±10% mililitri sînge.</strong></p>\
                <p>&emsp; Controlul si triajul medical ai celor care doneaza trebuie sa urmareasca prevenirea oricarui risc, atît pentru cel care va dona cît si pentru beneficiarii acestui produs biologic. De aceea, controlul medical se bazeaza pe trei examene (clinic, de laborator si epidemiologic), prin care se pot stabili contraindicatiile donarii de sînge. Aceste contraindicatii pot fi: absolute (din cauze care exclud definitiv pe individ de la donare, cum sînt hepatita, tuberculoza, sifilisul, rezecarea stomacului, maladia mitrala, cancerul operat si vindecat, etc.), relative (din cauze care pot fi variabile, cum este tensiunea arteriala de o anumita valoare, care poate ulterior scadea, greutate ponderala sub 50 kg, care ulterior poate creste, etc.) si temporare (din cauze care tin de anumite fenomene ciclice, cum sînt perioada menstruala, sarcina, alaptarea, precum si o stare febrila provocata de o viroza respiratorie trecatoare, etc.).</p>\
                <p>&emsp; Donarea de sînge este permisa numai persoanelor în stare de sanatate, între 18 si 60 de ani (întrucît în afara acestor vîrste nu exista garantia unui raspuns armonios din partea organismului fata de pierderea a 450 ml de sînge), celor care nu au valorile tensiunii arteriale peste 180 mm Hg sau sub 100 mm Hg, femeilor în afara sarcinii sau a lauziei, celor ce nu manifesta stari emotionale exagerate, teama persistenta fata de actul donarii sau o stare de oboseala, nu au consumat alcool sau o masa bogata în grasimi înainte de a se prezenta la recoltare, au de la ultima donare de sînge minimum 60 de zile, nu au avut în ultimul timp pierderi de sînge si nu au fost supusi unor interventii chirurgicale.</p>\
                <p>&emsp; Si profesiunea donatorului poate constitui uneori o cauza a respingerii acestuia de la recoltare, cînd exista pericolul potential al infectiilor (cazul mulgatorilor, îngrijitorilor de animale, maturatorilor) sau al unei oboseli fizice (soferi pe mijloace de transport în comun, piloti, operatori la masini grele).</p>\
                <p>&emsp; Restrictiile de mai sus privind donarea de sange se explica astfel:</p>\
                <ul>\
                    <li>&nbsp; Starile emotionale exagerate sunt o expresie a afectarii sistemului nervos, cel care coordoneaza repartitia sangelui dupa necesitati, iar in acest caz raspunsul poate fi inadecvat.\
                    <li>&nbsp; Teama de actul donarii poate duce la o tulburare a circulatiei sîngelui, manifestata printr-o lipotimie (lesin).\
                    <li>&nbsp; Starea de oboseala (dupa munca în schimbul de noapte sau dupa eforturi mari) poate constitui o cauza a adaptarii necorespunzatoare a circulatiei sîngelui. Intervalul de minimum 45 de zile de la ultima recoltare este considerat suficient pentru refacerea tuturor elementelor sîngelui si rezervelor organismului pierdute cu ocazia ultimei recoltari.\
                    <li>&nbsp; Gravida nu poate dona sînge, întrucît organismul sau trebuie sa acopere si nevoile viitorului copil, iar interdictia se prelungeste 18 luni dupa nastere, pentru ca organismul mamei sa-si refaca pierderile.</li>\
                </ul>\
                <p>&emsp; O priza obisnuita de sînge este de 450 ml, cantitate care nu presupune nici un risc pentru donator, deoarece organismul are permanent în rezerva circa 300-400 ml de sînge (pe care îl foloseste cînd se depun eforturi mari), precum si capacitatea de a reface repede sîngele donat (cantitativ în 1- 2 ore), fara a fi necesar un tratament sau o alimentatie speciala, totul depinzînd de modul în care organismul repartizeaza diversele cantitati de sînge în raport de necesitati si de promptitudinea cu care se face aceasta permanenta adaptare.</p>\
            "
        },
        {
            type: InfoType.HOW_TO_DONATE,
            title: "Cum pot să donez?",
            detail: "\
            "
        },
        {
            // http://cnts.md/?page_id=280
            type: InfoType.WHERE_TO_DONATE,
            title: "Unde pot dona?",
            detail: "                                                                                                         \
                <ul>                                                                                                          \
                    <li>&nbsp; Centrul Național de Transfuzie a Sîngelui	Chișinău, str. Academiei 11, tel. 022 109055    </li> \
                    <li>&nbsp; Centrul Național de Transfuzie a Sîngelui	Bălți, str. Decebal 113, tel. 0231 72260        </li> \
                    <li>&nbsp; Centrul Național de Transfuzie a Sîngelui	Cahul, str. A. Mateevici 103/1, tel. 0299 81302 </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Anenii Noi, str. Uzinelor 30, tel. 0265 23671                   </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Orhei, str. Vasile Lupu 127, tel. 0235 21848                    </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Hîncești, str. M. Hîncu 238, tel. 0269 22934                    </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Ștefan Vodă, str. Testemițanu 1, tel. 0242 24994                </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Căușeni, str. Gagarin 54, tel. 0243 26904                       </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Calarași, str. Testemițanu 59, tel. 0244 21124                  </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Ungheni, str. Națională 79, tel. 0236 25337                     </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Nisporeni, str. Toma Ciorbă 5, tel. 0264 26505                  </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Cimișlia, str. Alexandru cel Bun 135, tel. 0241 24233           </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Cantemir, str. Testemițanu 1, tel. 0273 23485                   </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Ceadîr Lunga, str. Miciurin 2, tel. 0291 29027                  </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Taraclia, str. Cebanov 1, tel. 0294 23067                       </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Comrat, str. Odesa 2, tel. 0298 31891                           </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Soroca, str. Testemițanu 1, tel. 0230 21163                     </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Drochia, str. Sorocii 4, tel. 0252 22593                        </li> \
                    <li>&nbsp; IMSP STS Spitalul Raional Edineț, str. Independenței 83, tel. 0246 24932                  </li> \
                </ul>                                                                                                         \
            "
        },
        {
            // http://cnts.md/?page_id=50
            type: InfoType.HOW_TO_PREPARE_FOR_DONATION,
            title: "Ce trebuie să fac înainte, în timpul şi după donare?",
            detail: "\
                <p><strong>Înainte de donare: </p></strong>\
                <ul>\
                    <li>&nbsp; Odihniti-va bine în noaptea de dinaintea donarii.</li>\
                    <li>&nbsp; Mîncati ceva usor înainte de donare.</li>\
                    <li>&nbsp; Consumati mai multe lichide pentru a înlocui volumul pe care îl veti dona. Evitati însa ceaiul, cafeaua sau alte bauturi ce contin cofeina.</li>\
                    <li>&nbsp; Consumati alimente bogate în fier – carne rosie, peste, ficat, fasole, cereale îmbogatite cu fier, stafide sau prune.</li>\
                    <li>&nbsp; Evitati mîncarurile grase ca hamburgerii, cartofii prajiti ori înghetata înainte de donare. Testele pentru infectii facute asupra sîngelui donat, pot fi afectate de grasimi – lipide – ce apar în sînge la cîteva ore dupa ce au fost consumate mîncarurile grase.</li>\
                </ul>\
                <p><strong>În timpul donarii: </p></strong>\
                <ul>\
                    <li>&nbsp; Purtati haine cu mîneci care se pot ridica usor mai sus de cot.</li>\
                    <li>&nbsp; Relaxati-va!</li>\
                </ul>\
                <p><strong>După donare: </p></strong>\
                <ul>\
                    <li>&nbsp; Imediat dupa donare puteti servi un sandwich si un suc daca simtiti nevoia</li>\
                    <li>&nbsp; Rehidratati-va consumînd lichide.</li>\
                    <li>&nbsp; Daca va simtiti ametit, întindeti-va, preferabil cu picioarele mai sus, pîna cînd senzatia trece.</li>\
                    <li>&nbsp; În cazurile rare cînd mai au loc usoare sîngerari dupa îndepartarea bandajului, apasati locul respectiv si tineti bratul ridicat timp de 3-5 minute.</li>\
                    <li>&nbsp; Daca apar sîngerari sau vînatai sub piele, aplicati comprese reci pe locul respectiv în primele 24 de ore.</li>\
                </ul>\
                <p><strong> Bucurati-va de senzatia ce apare atunci cînd realizaţi ca e posibil sa fi salvat chiar si trei vieti numai cu o singură donaţie de sînge.</strong></p>\
            "
        },
        {
            // http://cnts.md/?p=11
            type: InfoType.USEFUL_INFO,
            title: "Informație utilă pentru donatori",
            detail: "\
                <p>Donarea de sînge este inofensivă sută la sută, nu te poți infecta cu HIV/SIDA sau alte infecții.</p>\
                <p>Se utilizeaza un ac steril si de unica folosinta pentru fiecare donare.</p>\
                <p>Senzatia de lesin sau oboseala dupa donare este foarte rar întâlnita.</p>\
                <p>Puteti dona doar daca starea de sanatate va permite si va simtiti bine.</p>\
                <p>Vi se vor pune cîteva întrebari legate de starea de sanatate si vi se va face un mic examen medical &#8211; temperatura, puls, tensiune.</p>\
                <p>Rezultatele testelor ramîn confidentiale.</p>\
                <p>Rezultatele testelor de laborator ramîn a fi confidentiale. Donatorii de sînge/componente sanguine, sunt în drept de a afla rezultatele testelor de laborator a sîngelui după donare. La solicitarea informației, obligatoriu se va prezenta actul de identitate.</p>\
                <p>Informația poate fi obținută în orice punct de colectare a sîngelui<strong><em>.</em></strong></p>\
                <p>Pentru a beneficia de o experienta placuta în urma donarii, donatorii sunt rugati sa stea cîteva minute dupa donare; sa evite exercitiile ori ridicarea de greutati îin urmatoarele 5 ore de la donare.</p>\
                <p>Calitatea sîngelui.</p>\
                <p>Asigurarea calitatii rezervelor de sînge se face printr-un proces ce presupune testari riguroase, procesare atenta, etichetare, stocare si un atent control al calitatii.</p>\
            ",
        },
        {
            // http://cnts.md/?page_id=39
            type: InfoType.ABOUT_BLOOD,
            title: "Sîngele şi originea lui",
            detail: "\
                <p><strong>Ce este sîngele? </strong></p>\
                <p>&emsp; Sîngele este un lichid care circula prin corp, transportînd oxigen si nutrienti catre fiecare celula si preluînd apoi materialele reziduale.<br />\
                &emsp; Sîngele joaca un rol principal în sistemul de aparare al organismului.<br />\
                &emsp; Este pompat de înima, printr-o retea ce masoara cîtiva km, spre orice parte a corpului. În medie corpul unui adult contine 4-5 litri de sînge. Exista patru mari componente ale sîngelui: celulele rosii (hematii), celulele albe (leucocite), plasma si trombocitele. În plus sîngele contine numerosi nutrienti si minerale.</p>\
                <p><strong>Tipuri de sînge</strong></p>\
                <p>&emsp; Desi sîngele este alcatuit din aceleasi elemente de baza, nu tot sîngele este la fel. În realitate exista 8 tipuri comune de celule rosii, care sunt determinate de prezenta sau absenta anumitor tipuri de antigeni. Pentru ca anumiti antigeni pot declansa sistemul imunitar al unui pacient sa atace celulele rosii primite prin transfuzie, terapia cu sînge presupune alegerea cu grija a grupelor de sînge potrivite.</p>\
                <p><strong>Originea sîngelui</strong></p>\
                <p>&emsp; Sîngele este produs în maduva osoasa, o substanta de consistenta jeleului din înteriorul oaselor. La adulti, coloana vertebrala, coastele si pelvisul sunt principalele oase care produc sînge. Pe masura ce celulele sîngelui se dezvolta din celulele sten din maduva, ele trec în sîngele ce trece prin oase si întra în circuitul sanguin.<br />\
                &emsp; Celulele sîngelui au diferite durate de viata &#8211; celulele rosii rezista cam 120 de zile, trombocitele 10 zile iar diferitele tipuri de celule albe au o durata de viata ce se masoara de la cîteva zile pana la cîtiva ani.<br />\
                &emsp; Organismul are un sistem de feedback ce îl anunta cînd sa produca mai mult sînge. Spre exemplu, daca oxigenul din sînge este scazut, rinichii produc un hormon numit &#8220;erythropoietin&#8221;, care stimuleaza celulele stem din maduva sa produca mai multe celule rosii.</p>\
                <p><strong>Cum circula sîngele</strong></p>\
                <p>&emsp; Sîngele circula în doua largi si continue circuite printr-o retea de vase de sînge. Circuitul &#8220;drept&#8221; duce sîngele din partea dreapta a inimii prin plamîni si înapoi la inima (în partea stînga). Circuitul &#8220;stîng&#8221; duce sîngele de la inima spre restul corpului si înapoi la inima<br />\
                &emsp; Exista mai multe tipuri de vase de sînge: artere, capilare si vene.<br />\
                &emsp; Arterele transporta sîngele dinspre inima. Se ramifica în artere mai mici (arteriole) care sunt conectate la capilare (peste un miliard). Capilarele sunt foarte înguste &#8211; de latimea unei celule. Înauntrul capilarelor, celulele rosii elibereaza oxigenul, ce trece prin peretii subtiri ai capilarelor în tesutul înconjurator. Tesuturile elibereaza reziduuri, cum ar fi dioxidul de carbon, care trece prin capilare în sînge. Sîngele se întoarce la inima prin vene. Venele contin un sistem de valve cu un singur sens, controlate de contractii ale muschilor, care permit sîngelui sa circule catre inima, chiar si împotriva gravitatiei. Din cauza ca sîngele din vene contine foarte putin oxigen, el apare ca avînd o culoare usor albastra în comparatie cu rosul aprins al sîngelui oxigenat.</p>\
            "
        },
        {
            // http://cnts.md/?page_id=41
            type: InfoType.ABOUT_BLOOD_GROUPS,
            title: "Grupele de sînge şi compatibilitatea lor",
            detail: "\
                <p><strong>Grupele de sînge au fost descoperite în anul 1900.</strong></p>\
                <p>&emsp; Americanul de origine austriaca Karl Landsteiner, patologist si imunologist, descopera în anul 1900, trei tipuri de sînge uman, ulterior numite A, B si O. În anul 1902 el descopera si tipul nr. patru ce primeste numele AB.</p>\
                <p>&emsp; Karl Landsteiner a cîstigat în 1930 Premiul NOBEL pentru medicina. El a descoperit cele patru mari grupe de sînge.</p>\
                <p>&emsp; Desi tot sîngele uman pare la fel, atunci cînd este testat folosind substante speciale, diferentele devin vizibile. Principalele grupe de celule rosii sunt AII, BIII, ABIV, si OI. Literele simbolizeaza doi antigeni (substante care pot fi atacate de catre sistemul imunitar) denumite A si B :</p>\
                <p>🔸 Grupa de sînge A, are doar antigenul A</p>\
                <p>🔸 Grupa de sînge B, are doar antigenul B</p>\
                <p>🔸 Grupa AB ii are pe amîndoi</p>\
                <p>🔸 Grupa O nu are nici unul</p>\
                <p>&emsp; Oamenii poseda pe suprafata globulelor rosii diferite structuri proteice (antigene) care determinî atît grupele sanguine cît si Rh-ul persoanei respective.Grupele de sînge clasificate mai departe ca Rh-pozitiv si Rh-negativ poarta denumirea de tipuri de sînge.</p>\
                <p>&emsp; Fiecare grupa sanguina poate fi Rh pozitiv sau Rh negativ. Rh-ul este determinat de o alta proteina, factorul Rh (D antigen). Daca acest factor este prezent pe suprafata eritrocitelor persoana respectiva este Rh pozitiva, daca nu, persoana respectiva este Rh negativa.</p>\
                <p><strong>Moştenirea Sîngelui</strong></p>\
                <p>&emsp; Ca si culoarea ochilor, grupele de sînge se mostenesc genetic de la parinti la copii. Orice grupa de sînge ai avea A,B, AB sau O, se bazeaza pe grupele de sînge ale mamei si tatalui tau. <em>Nota: Dificultatile de testare pot cauza exceptii de la regulile de mai sus. Doar tipurile AB si O nu sunt suficiente pentru a proba sau nega paternitatea ori maternitatea.</em></p>\
                <font color='darkGray' face='monospace'>        \
                            ____________________________        \
                <b> <br>    | &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;        \
                                      | Grupa de sînge |    \
                    <br>    | Părinți | &emsp;&emsp;&emsp;posibilă&emsp;&emsp;&emsp;&emsp;|        \
                    <br><u> |_________|__a_copilului___|</u>    \
                    <br><u> |_P1_|_P2_|_0_|_A_|_B_|_AB_|</u>    \
                </b><br><u> |_AB_|_AB_|___|_✔️|_✔️|_✔️_|</u>    \
                    <br><u> |_AB_|_B__|___|_✔️|_✔️|_✔️_|</u>    \
                    <br><u> |_AB_|_A__|___|_✔️|_✔️|_✔️_|</u>    \
                    <br><u> |_AB_|_0__|___|_✔️|_✔️|____|</u>    \
                    <br><u> |_B__|_B__|_✔️|___|_✔️|____|</u>    \
                    <br><u> |_A__|_B__|_✔️|_✔️|_✔️|_✔️_|</u>    \
                    <br><u> |_A__|_A__|_✔️|_✔️|___|____|</u>    \
                    <br><u> |_0__|_B__|_✔️|___|_✔️|____|</u>    \
                    <br><u> |_0__|_A__|_✔️|_✔️|___|____|</u>    \
                    <br><u> |_0__|_0__|_✔️|___|___|____|</u>    \
                </font>                                         \
            "
        },
        {
            // http://cnts.md/?page_id=46
            type: InfoType.RIGHTS_AND_OBLIGATIONS,
            title: "Drepturile şi Obligaţiile Donatorilor",
            detail: "\
                <p><strong>Drepturile Donatorului de sînge. </strong></p>\
                <p>&emsp; Conform Legii Republicii Moldova privind Drepturile si responsabilitatile Pacientului nr.263- XVI din 27 octombrie 2005, lucrînd cu pacientii, lucratorii medicali trebuie sa respecte principiile de baza ale realizarii drepturilor pacientilor:</p>\
                <ol>\
                    <li>&nbsp; respectarea drepturilor fundamentale ale omului si a demnitatii fiintei umane in domeniul ocrotirii sanatatii;</li>\
                    <li>&nbsp; recunoasterea vietii umane, a sanatatii omului ca valoare suprema;</li>\
                    <li>&nbsp; orientarea spre mentinerea vietii, a sanatatii fizice si psihice a pacientului în procesul prestarii serviciilor de sanatate;</li>\
                    <li>&nbsp; respectarea valorilor morale si culturale ale pacientului, a convingerilor lui religioase si filozofice;</li>\
                    <li>&nbsp; recunoasterea pacientului, iar în cazurile prevazute de legislatie, a reprezentantului sau legal (a rudei apropiate), în calitate de participant principal la luarea deciziei privind interventia medicala;</li>\
                    <li>&nbsp; reglementarea drepturilor, responsabilitatilor si a conditiilor de limitare a drepturilor pacientului în scopul protectiei sanatatii acestuia si respectarii drepturilor altor persoane;</li\
                    <li>&nbsp; încrederea reciproca dintre pacient si lucratorul medical.</li>\
                </ol>\
                <p><strong>Conform art. 5 al aceleasi legi, donatorul are urmatoarele drepturi:</strong></p>\
                <ol>\
                    <li>&nbsp; atitudine respectuoasa si umana din partea prestatorului de servicii de sanatate, indiferent de vîrsta, sex, apartenenta etnica, statut socio-economic, convingeri politice si religioase;</li>\
                    <li>&nbsp; securitate a vietii personale, integritate fizica, psihica si morala, cu asigurarea discretiei în timpul acordarii serviciilor de sanatate;</li>\
                    <li>&nbsp; reducere a suferintei si atenuare a durerii, provocate de o îmbolnavire si/sau interventie medicala, prin toate metodele si mijloacele legale disponibile, determinate de nivelul existent al stiintei medicale si de posibilitatile reale ale prestatorului de servicii de sanatate;</li>\
                    <li>&nbsp; opinie medicala alternativa si primirea recomandarilor altor specialisti, la solicitarea sa ori a reprezentantului sau legal (a rudei apropiate), in modul stabilit de legislatie;</li>\
                    <li>&nbsp; informatii cu privire la prestatorul de servicii de sanatate, profilul, volumul, calitatea, costul si modalitatea de prestare a serviciilor respective;</li>\
                    <li>&nbsp; examinare, tratament si întretinere in conditii adecvate normelor sanitaro-igienice;</li>\
                    <li>&nbsp; informatii exhaustive cu privire la propria sanatate, metodele de diagnostic, tratament si recuperare, profilaxie, precum si la riscul potential si eficienta terapeutica a acestora;</li>\
                    <li>&nbsp; informatie completa privind factorii nocivi ai mediului ambiant;</li>\
                    <li>&nbsp; exprimare benevola a consimtamîntului sau refuzului la interventie medicala si la participare la cercetarea biomedicala (studiul clinic), in modul stabilit de prezenta lege si de alte acte normative;</li>\
                    <li>&nbsp; informatie privind rezultatele examinarii plîngerilor si solicitarilor, în modul stabilit de legislatie;</li>\
                    <li>&nbsp; atacare, pe cale extrajudiciara si judiciara, a actiunilor lucratorilor medicali si ale altor prestatori ai serviciilor de sanatate, precum si a functionarilor responsabili de garantarea asistentei medicale si a serviciilor aferente în volumul prevazut de legislatie;</li>\
                    <li>&nbsp; îngrijire terminala demna de o fiinta umana;</li>\
                    <li>&nbsp; despagubire a daunelor aduse sanatatii, conform legislatiei.</li>\
                </ol>\
                <p>&emsp; Art. 6 prevede examinarea medicala obligatorie a persoanelor care doneaza benevol sînge, substante lichide biologice, organe si tesuturi, precum si efectuarea examinarii medicale obligatorii, inclusiv pentru depistarea infectiei HIV/SIDA, a sifilisului si a tuberculozei la persoanele aflate în penitenciare.</p>\
                <p>&emsp; Referitor la garantarea drepturilor sociale ale pacientului la asistenta medicala, art. 8 al legii sus mentionate se expune astfel:</p>\
                <ol>\
                    <li>&nbsp; În cazul în care prestatorii de servicii de sanatate sînt obligati sa recurga la selectarea de pacienti pentru anumite tipuri de tratament disponibile în numar limitat, selectarea se va face numai pe baza de criterii medicale aprobate de Ministerul Sanatatii si Protectiei Sociale.</li>\
                    <li>&nbsp; Personalul medical nu este în drept sa supuna pacientul nici unei forme de presiune pentru a-l determina pe acesta sa îl recompenseze altfel decît prevad reglementarile legale.</li>\
                </ol>\
                <p>&emsp; De-asemenea, toate datele privind identitatea si starea pacientului, rezultatele investigatiilor, diagnosticul, pronosticul, tratamentul, precum si datele cu caracter personal sînt confidentiale si urmeaza a fi protejate si dupa moartea acestuia.</p>\
            "
        },
        {
            type: InfoType.ABOUT_CNTS,
            title: "Informaţii generale despre CNTS",
            detail: "\
                <p>&emsp; <strong>Centrul Naţional de Transfuzie a Sîngelui</strong> este instituţia coordonatoare a dezvoltării serviciului de Sînge din Republica Moldova. Fiind situat în mun. Chişinău, str. Academiei 11, instituţia deserveşte zilnic, în mediu, 150 donatori de sînge/componente sanguine, prestează servicii de plasmofereză curativă, acordă servicii de testare a probelor de sînge, menţine secţia de producere a preparatelor sanguine şi acordă servicii de control al calităţii produselor din sînge şi soluţiilor.</p>\
                <p>&emsp; <strong>Centrul Naţional de Transfuzie a Sîngelui a obţinut \
                   <font color='red'><em>Certificatul de Acreditare la data de 12 decembrie 2017</em></font>, \
                   (Certificat Nr. 3350, eliberat CNTS, mun. Chişinău, str. Academiei 11), acesta fiind valabil pe o perioadă de 5 ani.</strong></p>\
                <p>&emsp; Primirea donatorilor de sînge/componente şi efectuarea testelor, analizelor se îndeplineşte zilnic cu începere de la orele 8.00 şi pînă la orele 15.00, pentru a afla informaţii mai detaliate despre modalităţile de a ajunge la Centrul Naţional de Transfuzie a Sîngelui vizitaţi pagina de informații <b>Contacte</b>.</p>\
                <p>&emsp; Veţi putea primi rezultatele analizelor efectuate cu cel mai performant echipament la orele 16.00 ale aceleeaşi zi. La momentul de faţă, Centrul Naţional de Transfuzie a Sîngelui dispune de echipament privind testarea sîngelui şi componentelor sale de ultimă generaţie cu cea mai înaltă sensibilitate şi precizie din ţară.</p>\
            "
        },
        {
            type: InfoType.HISTORY_CNTS,
            title: "Scurt istoric CNTS",
            detail: "\
                <p>Primul cabinet de transfuzie a sîngelui a fost creat în or. Ananiev în 1938 de doctorul S. Crivoseev. În acelasi an, doctorul Efrus, face primele transfuzii de sînge în sectia de chirurgie a or. Tiraspol.</p>\
                <p>În 1940 Crivoseev deschide Centrul de Transfuzie a sîngelui la spitalul chirurgical nr. 2 din or. Chisinau, în Republica Autonoma Moldova fiind înregistrati peste 150 de donatori.</p>\
                <p>Sub conducerea chirurgului Buciumenschii, în august 1944 redeschide Centrul de Transfuzie a Sîngelui în sectia chirurgicala a Spitalului Republican, primind primii donatori în acelasi an în luna decembrie.</p>\
                <p>Anul 1960, sub conducerea D-ei G. Dubovic, aduce Centrului de Transfuzie a Sîngelui o cladire noua, autonoma, situata pe str. Gh. Asachi a or. Chisinau, tot acolo fiind deschisa sectia hematologica cu 25 de paturi.</p>\
                <p>În anul 1993, subdiviziunile încadrate în colectarea, testarea si prepararea sîngelui de donator din Centrul Republican de Transfuzie a Sîngelui au fost transferate în cladirea fostului spital traumatologic din str. Academiei 11, unde pîna la moment se afla sediul Centrului National de Transfuzie a Sîngelui. Aceasta ultima denumire vine din data de 15.07.2002, cînd intra în vigoare Hotarîrea Guvernului nr. 1050, din 04.10.2001, prin care Centrul Republican de Transfuzie a Sîngelui este reorganizat în centrul National de Transfuzie a Sîngelui.</p>\
                <p>În prezent, Centrul National de Transfuzie a Sîngelui este principala institutie în vederea organizarii donarii si transfuziei de sînge din Republica Moldova. Totodata, CNTS detine calitatea de unica Banca de Sînge a Republicii.</p>\
                <p>Din momentul desfasurarii activitatii Centrului Republican, iar acum Centrul National de Transfuzie a Sîngelui, la conducerea sa au fost: G. Dubovic, S. Traian, V. Scurtu, G. Nistiriuc, I. Midrigan, I. Grama, V. Cojocaru, L. Catrinici, Svetlana Cebotari, actualmente Alexandru Gherman.</p>\
            "
        },
    );

    // a list containing only the titles
    private itemList: Array<InfoItemList> = this.items;

    getInfoItemList(): Observable<Array<InfoItemList>> {
        return of(this.itemList);
    }

    getInfoItem(type: InfoType): Observable<InfoItem> {
        return of(
            this.items.filter((infoItem: InfoItem) => infoItem.type === type)[0]
        );
    }
}
