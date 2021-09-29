(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        "42UT": function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, "HomeModule", function() {
                return Nt
            });
            var i = e("SVse"),
                o = e("iInd"),
                a = e("FpXt"),
                c = e("JX91"),
                l = e("eIep"),
                r = e("AytR"),
                s = e("wd/R"),
                b = e("quSY"),
                d = e("HDdC"),
                g = e("D0XW"),
                p = e("Y7HM");

            function P(n) {
                const {
                    subscriber: t,
                    counter: e,
                    period: i
                } = n;
                t.next(e), this.schedule({
                    subscriber: t,
                    counter: e + 1,
                    period: i
                }, i)
            }
            var M = e("8Y7J"),
                _ = e("IheW");
            const C = s;
            let m = (() => {
                class n {
                    constructor(n) {
                        this.http = n
                    }
                    getPublicReports(n = "", t = "", e = "") {
                        return this.http.get(`${r.a.report_prefix_direct_url}/v2/getPublicReports?state_id=${n}&district_id=${t}&date=${e}`)
                    }
                    dashboardLogin() {
                        return this.http.post(r.a.auth_prefix_url + "/guest/dashboard_login", {}, {
                            responseType: "text"
                        })
                    }
                    getLiveVaccinationCounter() {
                        return C().format("YYYY-MM-DD"), this.http.get("https://cdn-api.co-vin.in/api/v1/reports/getLiveVaccination")
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(M.Ub(_.b))
                }, n.\u0275prov = M.Hb({
                    token: n,
                    factory: n.\u0275fac,
                    providedIn: "root"
                }), n
            })();
            const O = {
                    UKNOWN: "Unknown"
                },
                h = {
                    CHROME: "Chrome",
                    FIREFOX: "Firefox",
                    SAFARI: "Safari",
                    OPERA: "Opera",
                    IE: "IE",
                    MS_EDGE: "MS-Edge",
                    MS_EDGE_CHROMIUM: "MS-Edge-Chromium",
                    FB_MESSANGER: "FB-Messanger",
                    SAMSUNG: "Samsung",
                    UCBROWSER: "UC-Browser",
                    UNKNOWN: O.UKNOWN
                },
                x = {
                    HTC: /HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\bEVO\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel/,
                    NEXUS_PHONE: /Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6/,
                    DELL: /Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\b001DL\b|\b101DL\b|\bGS01\b/,
                    MOTOROLA: new RegExp("Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|\n      A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|\n      MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|\n      ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|\n      WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|\n      XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|\n      XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052"),
                    SAMSUNG: new RegExp("\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|\n      GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|\n      GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|\n      GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|\n      GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|\n      GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|\n      GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|\n      GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|\n      GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|\n      GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|\n      GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|\n      GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|\n      GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|\n      GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|\n      GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|\n      GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|\n      GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|\n      GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|\n      SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|\n      SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|\n      SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|\n      SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|\n      SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|\n      SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|\n      SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|\n      SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|\n      SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|\n      SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|\n      SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|\n      SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|\n      SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|\n      SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|\n      SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|\n      SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|\n      SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|\n      SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|\n      SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|\n      SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|\n      SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|\n      SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|\n      SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|\n      SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|\n      SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|\n      SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|\n      SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|\n      SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|\n      SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|\n      SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|\n      SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|\n      GT-N7105|SCH-I535|SM-N900A|SM-N900T|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|\n      GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|\n      GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|\n      SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|\n      SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|\n      SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F"),
                    LG: new RegExp("\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|\n      LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|\n      C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|\n      LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|\n      VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|\n      MS323|M257)"),
                    SONY: /SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533/,
                    ASUS: /Asus.*Galaxy|PadFone.*Mobile/,
                    NOKIA_LUMIA: /Lumia [0-9]{3,4}/,
                    MICROMAX: /Micromax.*\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\b/,
                    PALM: /PalmSource|Palm/,
                    VERTU: /Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature/,
                    PANTECH: new RegExp("PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|\n        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|\n        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|\n        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|\n        P2000|P7040|P7000|C790"),
                    FLY: /IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250/,
                    WIKO: new RegExp("KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|\n        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|\n        CINK KING|CINK PEAX|CINK SLIM|SUBLIM"),
                    I_MOBILE: /i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)/,
                    SIMVALLEY: /\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\b/,
                    WOLFGANG: /AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q/,
                    ALCATEL: /Alcatel|Mobile; rv:49.0|Mobile; ALCATEL 4052R; rv:48.0/,
                    NINTENDO: /Nintendo (3DS|Switch)/,
                    AMOI: /Amoi/,
                    INQ: /INQ/,
                    VITA: /\bVita\b/,
                    BLACKBERRY: /\bBlackBerry\b|\bBB10\b|rim[0-9]+/,
                    FIREFOX_OS: /\bFirefox-OS\b/,
                    IPHONE: /\biPhone\b/,
                    iPod: /\biPod\b/,
                    ANDROID: /\bAndroid\b/,
                    WINDOWS_PHONE: /\bWindows-Phone\b/,
                    GENERIC_PHONE: new RegExp("Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|\n        up.link|vodafone|\\bwap\\b|nokia|Nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser")
                },
                T = {
                    iPad: /iPad|iPad.*Mobile/,
                    NexusTablet: /Android.*Nexus[\s]+(7|9|10)/,
                    GoogleTablet: /Android.*Pixel C/,
                    SamsungTablet: new RegExp("SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|\n        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|\n        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|\n        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|\n        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|\n        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|\n        SHV-E230S|SHW-M180K|SHW-M180L|SM-T865|SM-T290|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|\n        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|\n        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T385M|SM-P585M|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|\n        SM-P601|SM-P605|SM-P615|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|\n        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|\n        SM-T510|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|\n        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T500|SM-T330|\n        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|\n        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|\n        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|\n        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|\n        SM-T719|SM-T813|SM-T819|SM-T580|SM-T590|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|\n        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-P585Y"),
                    Kindle: new RegExp("Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|\n        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome        /[0-9.]+ (?!Mobile)"),
                    SurfaceTablet: /Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)/,
                    HPTablet: /HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10/,
                    AsusTablet: new RegExp("^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|\n        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|\n        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|\n        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|\n        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b"),
                    BlackBerryTablet: /PlayBook|RIM Tablet/,
                    HTCtablet: /HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410/,
                    MotorolaTablet: /xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617/,
                    NookTablet: /Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2/,
                    AcerTablet: new RegExp("Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|\n        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\n        \\bA3-A20\\b|\\bA3-A30"),
                    ToshibaTablet: /Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO/,
                    LGTablet: /\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\b/,
                    FujitsuTablet: /Android.*\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\b/,
                    PrestigioTablet: new RegExp("PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|\n        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|\n        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|\n        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|\n        PMT5887|PMT5001|PMT5002"),
                    LenovoTablet: new RegExp("Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|\n        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|\n        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X606F|TB-X103F|TB-X304F|TB-X304L|TB-X704F|TB-8703F|Tab2A7-10F|TB2-X30L|TB-8504F"),
                    DellTablet: /Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7/,
                    YarvikTablet: new RegExp("Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|\n        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|\n        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|\n        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|\n        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b"),
                    MedionTablet: /Android.*\bOYO\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB/,
                    ArnovaTablet: /97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2/,
                    IntensoTablet: /INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004/,
                    IRUTablet: /M702pro/,
                    MegafonTablet: /MegaFon V9|\bZTE V9\b|Android.*\bMT7A\b/,
                    EbodaTablet: /E-Boda (Supreme|Impresspeed|Izzycomm|Essential)/,
                    AllViewTablet: /Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)/,
                    ArchosTablet: new RegExp("\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|\n         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b"),
                    AinolTablet: /NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark/,
                    NokiaLumiaTablet: /Lumia 2520/,
                    SonyTablet: new RegExp("Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|\n        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|\n        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|\n        SGP612|SGP712"),
                    PhilipsTablet: /\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\b/,
                    CubeTablet: /Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT/,
                    CobyTablet: new RegExp("MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|\n        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010"),
                    MIDTablet: new RegExp("M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|\n        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|\n        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10"),
                    MSITablet: new RegExp("MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|\n        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b"),
                    SMiTTablet: /Android.*(\bMID\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)/,
                    RockChipTablet: /Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A/,
                    FlyTablet: /IQ310|Fly Vision/,
                    bqTablet: new RegExp("Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|\n        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus"),
                    HuaweiTablet: new RegExp("MediaPad|MediaPad 7 Youth|MediaPad T3 10|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|\n        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-W09"),
                    NecTablet: /\bN-06D|\bN-08D/,
                    PantechTablet: /Pantech.*P4100/,
                    BronchoTablet: /Broncho.*(N701|N708|N802|a710)/,
                    VersusTablet: /TOUCHPAD.*[78910]|\bTOUCHTAB\b/,
                    ZyncTablet: /z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900/,
                    PositivoTablet: /TB07STA|TB10STA|TB07FTA|TB10FTA/,
                    NabiTablet: /Android.*\bNabi/,
                    KoboTablet: /Kobo Touch|\bK080\b|\bVox\b Build|\bArc\b Build/,
                    DanewTablet: /DSlide.*\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\b/,
                    TexetTablet: new RegExp("NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|\n        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|\n        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|\n        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|\n        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|\n        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|\n        TB-436|TB-416|TB-146SE|TB-126SE"),
                    PlaystationTablet: /Playstation.*(Portable|Vita)/,
                    TrekstorTablet: /ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab/,
                    PyleAudioTablet: /\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\b/,
                    AdvanTablet: new RegExp("Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|\n        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b"),
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|\n        Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: /Android.*\bG1\b(?!\))/,
                    MicromaxTablet: /Funbook|Micromax.*\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\b/,
                    KarbonnTablet: /Android.*\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\b/,
                    AllFineTablet: /Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide/,
                    PROSCANTablet: new RegExp("\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|\n        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|\n        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|\n        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b"),
                    YONESTablet: /BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026/,
                    ChangJiaTablet: new RegExp("TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|\n        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|\n        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|\n        TPC10111|TPC10203|TPC10205|TPC10503"),
                    GUTablet: /TX-A1301|TX-M9002|Q702|kf026/,
                    PointOfViewTablet: new RegExp("TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|\n        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|\n        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|\n        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10"),
                    OvermaxTablet: new RegExp("OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|\n        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027"),
                    HCLTablet: /HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync/,
                    DPSTablet: /DPS Dream 9|DPS Dual 7/,
                    VistureTablet: /V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10/,
                    CrestaTablet: /CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989/,
                    MediatekTablet: /\bMT8125|MT8389|MT8135|MT8377\b/,
                    ConcordeTablet: /Concorde([ ]+)?Tab|ConCorde ReadMan/,
                    GoCleverTablet: new RegExp("GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|\n        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|\n        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|\n        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|\n        TAB R104|TAB R83.3|TAB A1042"),
                    ModecomTablet: new RegExp("FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|\n        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|\n        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003"),
                    VoninoTablet: new RegExp("\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|\n        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|\n        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b"),
                    ECSTablet: /V07OT2|TM105A|S10OT1|TR10CS1/,
                    StorexTablet: /eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab/,
                    VodafoneTablet: /SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497/,
                    EssentielBTablet: /Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2/,
                    RossMoorTablet: /RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711/,
                    iMobileTablet: /i-mobile i-note/,
                    TolinoTablet: /tolino tab [0-9.]+|tolino shine/,
                    AudioSonicTablet: /\bC-22Q|T7-QC|T-17B|T-17P\b/,
                    AMPETablet: /Android.* A78 /,
                    SkkTablet: /Android.* (SKYPAD|PHOENIX|CYCLOPS)/,
                    TecnoTablet: /TECNO P9|TECNO DP8D/,
                    JXDTablet: new RegExp("Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|\n        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|\n        P1000|P300|S18|S6600|S9100)\\b"),
                    iJoyTablet: new RegExp("Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|\n        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|\n        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|\n        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|\n        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)"),
                    FX2Tablet: /FX2 PAD7|FX2 PAD10/,
                    XoroTablet: new RegExp("KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|\n        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|\n        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|\n        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151"),
                    ViewsonicTablet: /ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a/,
                    VerizonTablet: /QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1/,
                    OdysTablet: /LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\bXELIO\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10/,
                    CaptivaTablet: /CAPTIVA PAD/,
                    IconbitTablet: new RegExp("NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|\n        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S"),
                    TeclastTablet: new RegExp("T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\n        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\n        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\n        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\n        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\n        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\n        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\n        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\n        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi"),
                    OndaTablet: new RegExp("\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|\n        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|\n        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|\n        Vi40)\\b[s]+|V10 \\b4G\\b"),
                    JaytechTablet: /TPC-PA762/,
                    BlaupunktTablet: /Endeavour 800NG|Endeavour 1010/,
                    DigmaTablet: /\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\b/,
                    EvolioTablet: /ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\bEvotab\b|\bNeura\b/,
                    LavaTablet: /QPAD E704|\bIvoryS\b|E-TAB IVORY|\bE-TAB\b/,
                    AocTablet: /MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712/,
                    MpmanTablet: new RegExp("MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\n        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|\n        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010"),
                    CelkonTablet: /CT695|CT888|CT[\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\bCT-1\b/,
                    WolderTablet: new RegExp("miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|\n        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|\n        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b"),
                    MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                    MiTablet: /\bMI PAD\b|\bHM NOTE 1W\b/,
                    NibiruTablet: /Nibiru M1|Nibiru Jupiter One/,
                    NexoTablet: /NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI/,
                    LeaderTablet: new RegExp("TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|\n        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100"),
                    UbislateTablet: /UbiSlate[\s]?7C/,
                    PocketBookTablet: /Pocketbook/,
                    KocasoTablet: /\b(TB-1207)\b/,
                    HisenseTablet: /\b(F5281|E2371)\b/,
                    Hudl: /Hudl HT7S3|Hudl 2/,
                    TelstraTablet: /T-Hub2/,
                    Honeywell: /RT10A/,
                    GenericTablet: new RegExp("Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|\n        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|\n        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107")
                },
                S = {
                    BLACKBERRY: "Blackberry",
                    FIREFOX_OS: "Firefox-OS",
                    CHROME_BOOK: "Chrome-Book",
                    WINDOWS_PHONE: "Windows-Phone",
                    VITA: "Vita",
                    PS4: "PS4",
                    MAC: "Macintosh",
                    CHROMECAST: "Chromecast",
                    APPLE_TV: "Apple-TV",
                    GOOGLE_TV: "Google-TV",
                    ANDROID: "Android",
                    Tesla: "Tesla",
                    iPad: "iPad",
                    IPHONE: "iPhone",
                    iPod: "iPod",
                    UNKNOWN: O.UKNOWN,
                    HTC: "HTC",
                    NEXUS_PHONE: "Nexus Phone",
                    NexusTablet: "Nexus Tablet",
                    DELL: "Dell",
                    MOTOROLA: "Motorola",
                    SAMSUNG: "Samsung",
                    LG: "LG",
                    SONY: "Sony",
                    ASUS: "Asus",
                    NOKIA_LUMIA: "Nokia Lumia",
                    MICROMAX: "Micromax",
                    PALM: "Palm",
                    VERTU: "Vertu",
                    PANTECH: "PANTECH",
                    FLY: "Fly",
                    WIKO: "WIKO",
                    I_MOBILE: "i-mobile",
                    SIMVALLEY: "Simvalley",
                    WOLFGANG: "Wolfgang",
                    ALCATEL: "Alcatel",
                    HONEYWELL: "Honeywell",
                    NINTENDO: "Nintendo",
                    AMOI: "Amoi",
                    INQ: "INQ",
                    GENERIC_PHONE: "Generic Phone",
                    MI_SE_9: "Mi SE 9"
                },
                f = [S.PS4, S.CHROME_BOOK, S.MAC, S.DELL, S.ASUS, S.UNKNOWN],
                u = {
                    WINDOWS: "Windows",
                    MAC: "Mac",
                    IOS: "iOS",
                    ANDROID: "Android",
                    LINUX: "Linux",
                    UNIX: "Unix",
                    FIREFOX_OS: "Firefox-OS",
                    CHROME_OS: "Chrome-OS",
                    WINDOWS_PHONE: "Windows-Phone",
                    UNKNOWN: O.UKNOWN
                },
                w = {
                    WINDOWS_3_11: "windows-3-11",
                    WINDOWS_95: "windows-95",
                    WINDOWS_ME: "windows-me",
                    WINDOWS_98: "windows-98",
                    WINDOWS_CE: "windows-ce",
                    WINDOWS_2000: "windows-2000",
                    WINDOWS_XP: "windows-xp",
                    WINDOWS_SERVER_2003: "windows-server-2003",
                    WINDOWS_VISTA: "windows-vista",
                    WINDOWS_7: "windows-7",
                    WINDOWS_8_1: "windows-8-1",
                    WINDOWS_8: "windows-8",
                    WINDOWS_10: "windows-10",
                    WINDOWS_PHONE_7_5: "windows-phone-7-5",
                    WINDOWS_PHONE_8_1: "windows-phone-8-1",
                    WINDOWS_PHONE_10: "windows-phone-10",
                    WINDOWS_NT_4_0: "windows-nt-4-0",
                    MACOSX_11_0: "mac-os-x-11-0",
                    MACOSX_16: "mac-os-x-16",
                    MACOSX_15: "mac-os-x-15",
                    MACOSX_14: "mac-os-x-14",
                    MACOSX_13: "mac-os-x-13",
                    MACOSX_12: "mac-os-x-12",
                    MACOSX_11: "mac-os-x-11",
                    MACOSX_10: "mac-os-x-10",
                    MACOSX_9: "mac-os-x-9",
                    MACOSX_8: "mac-os-x-8",
                    MACOSX_7: "mac-os-x-7",
                    MACOSX_6: "mac-os-x-6",
                    MACOSX_5: "mac-os-x-5",
                    MACOSX_4: "mac-os-x-4",
                    MACOSX_3: "mac-os-x-3",
                    MACOSX_2: "mac-os-x-2",
                    MACOSX: "mac-os-x",
                    iOS: "iOS",
                    ANDROID_9: "android-9",
                    UNKNOWN: O.UKNOWN.toLowerCase()
                },
                v = {
                    WINDOWS: {
                        and: [{
                            or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/]
                        }, {
                            not: /\bWindows Phone\b/
                        }]
                    },
                    MAC: {
                        and: [/\bMac OS\b/, {
                            not: {
                                or: [/\biPhone\b/, /\biPad\b/, /\biPod\b/, /\bWindows Phone\b/]
                            }
                        }]
                    },
                    IOS: {
                        and: [{
                            or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/]
                        }, {
                            not: /\bWindows Phone\b/
                        }]
                    },
                    ANDROID: {
                        and: [/\bAndroid\b/, {
                            not: /\bWindows Phone\b/
                        }]
                    },
                    LINUX: /\bLinux\b/,
                    UNIX: /\bUNIX\b/,
                    FIREFOX_OS: {
                        and: [/\bFirefox\b/, /Mobile\b/]
                    },
                    CHROME_OS: /\bCrOS\b/,
                    WINDOWS_PHONE: {
                        or: [/\bIEMobile\b/, /\bWindows Phone\b/]
                    },
                    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
                    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
                },
                A = Object.assign(Object.assign(Object.assign(Object.assign({}, x), T), v), {
                    FIREFOX_OS: {
                        and: [/\bFirefox\b/, /\bMobile\b/]
                    },
                    CHROME_BOOK: /\bCrOS\b/,
                    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
                    CHROMECAST: /\bCrKey\b/,
                    APPLE_TV: /^iTunes-AppleTV\/4.1$/,
                    GOOGLE_TV: /\bGoogleTV\b/,
                    Tesla: /Tesla\/([0-9]{4}.[0-9]{1,2}.?[0-9]{0,2}.?[0-9]{0,2})-(.{7})/,
                    MI_SE_9: /\bXiaomi\b/,
                    MAC: {
                        and: [/\bMac OS\b/, {
                            not: {
                                or: [/\biPhone\b/, /\biPad\b/, /\biPod\b/, /\bWindows Phone\b/]
                            }
                        }]
                    }
                }),
                G = {
                    WINDOWS_3_11: /Win16/,
                    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
                    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
                    WINDOWS_98: /(Windows 98|Win98)/,
                    WINDOWS_CE: /Windows CE/,
                    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
                    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
                    WINDOWS_SERVER_2003: /Windows NT 5.2/,
                    WINDOWS_VISTA: /Windows NT 6.0/,
                    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
                    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
                    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
                    WINDOWS_10: /(Windows NT 10.0)/,
                    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
                    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
                    WINDOWS_PHONE_10: /(Windows Phone 10)/,
                    WINDOWS_NT_4_0: {
                        and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, {
                            not: /Windows NT 10.0/
                        }]
                    },
                    MACOSX: /(MAC OS X\s*[^ 0-9])/,
                    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
                    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
                    MACOSX_5: /(Mac OS X 10.5)/,
                    MACOSX_6: /(Mac OS X 10.6)/,
                    MACOSX_7: /(Mac OS X 10.7)/,
                    MACOSX_8: /(Mac OS X 10.8)/,
                    MACOSX_9: /(Mac OS X 10.9)/,
                    MACOSX_10: /(Mac OS X 10.10)/,
                    MACOSX_11: /(Mac OS X 10.11)/,
                    MACOSX_12: /(Mac OS X 10.12)/,
                    MACOSX_13: /(Mac OS X 10.13)/,
                    MACOSX_14: /(Mac OS X 10.14)/,
                    MACOSX_15: /(Mac OS X 10.15)/,
                    MACOSX_16: /(Mac OS X 10.16)/,
                    MACOSX_11_0: {
                        or: [/11_0 like Mac OS X/, /Mac OS X 11/]
                    },
                    iOS: /(iPhone OS\s*[0-9_]+)/,
                    ANDROID_9: /(Android 9)/
                },
                y = {
                    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/, /\bHeadlessChrome\/([\d\.]+)\b/],
                    FIREFOX: [/\bFirefox\/([\d\.]+)\b/, /\bFxiOS\/([\d\.]+)\b/],
                    SAFARI: [/\bVersion\/([\d\.]+)\b/, /\bSafari\/([\d\.]+)\b/],
                    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
                    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
                    MS_EDGE: /\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,
                    MS_EDGE_CHROMIUM: /\bEdg\/([\d\.]+)\b/,
                    SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/,
                    UCBROWSER: /\bUCBrowser\/([\d\.]+)\b/
                },
                H = (n, t) => (n[t] = G[t], n),
                I = Object.keys(G).reduce(H, {}),
                E = (n, t) => (n[h[t]] = y[t], n),
                D = Object.keys(y).reduce(E, {});
            var Q = Object.freeze({
                __proto__: null,
                GENERAL: O,
                BROWSERS: h,
                MOBILES_RE: x,
                TABLETS_RE: T,
                DEVICES: S,
                DESKTOP_DEVICES: f,
                OS: u,
                OS_VERSIONS: w,
                OS_RE: v,
                BROWSERS_RE: {
                    CHROME: {
                        and: [{
                            or: [/\bChrome\b/, /\bCriOS\b/, /\bHeadlessChrome\b/]
                        }, {
                            not: {
                                or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                            }
                        }]
                    },
                    FIREFOX: {
                        or: [/\bFirefox\b/, /\bFxiOS\b/]
                    },
                    SAFARI: {
                        and: [/^((?!CriOS).)*\Safari\b.*$/, {
                            not: {
                                or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                            }
                        }]
                    },
                    OPERA: {
                        or: [/Opera\b/, /\bOPR\b/]
                    },
                    IE: {
                        or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/]
                    },
                    MS_EDGE: {
                        or: [/\bEdg(e|A|iOS)\b/]
                    },
                    MS_EDGE_CHROMIUM: /\bEdg\/\b/,
                    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
                    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
                    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
                    SAMSUNG: /\bSamsungBrowser\b/,
                    UCBROWSER: /\bUCBrowser\b/
                },
                DEVICES_RE: A,
                OS_VERSIONS_RE_MAP: G,
                BROWSER_VERSIONS_RE_MAP: y,
                OS_VERSIONS_RE: I,
                BROWSER_VERSIONS_RE: D,
                "\u02750": H,
                "\u02751": E
            });
            class k {
                constructor() {}
                test(n, t) {
                    return "string" == typeof t && (t = new RegExp(t)), t instanceof RegExp ? t.test(n) : t && Array.isArray(t.and) ? t.and.every(t => this.test(n, t)) : t && Array.isArray(t.or) ? t.or.some(t => this.test(n, t)) : !(!t || !t.not || this.test(n, t.not))
                }
                exec(n, t) {
                    return "string" == typeof t && (t = new RegExp(t)), t instanceof RegExp ? t.exec(n) : t && Array.isArray(t) ? t.reduce((t, e) => t || this.exec(n, e), null) : null
                }
            }
            var L = function(n) {
                    return n.Mobile = "mobile", n.Tablet = "tablet", n.Desktop = "desktop", n.Unknown = "unknown", n
                }({}),
                B = function(n) {
                    return n.Portrait = "portrait", n.Landscape = "landscape", n
                }({});
            let z = (() => {
                class n {
                    constructor(n) {
                        this.platformId = n, this.ua = "", this.userAgent = "", this.os = "", this.browser = "", this.device = "", this.os_version = "", this.browser_version = "", this.reTree = new k, this.deviceType = "", this.orientation = "", Object(i.u)(this.platformId) && "undefined" != typeof window && (this.userAgent = window.navigator.userAgent), this.setDeviceInfo(this.userAgent)
                    }
                    setDeviceInfo(n = this.userAgent) {
                        n !== this.userAgent && (this.userAgent = n);
                        const t = [{
                            const: "OS",
                            prop: "os"
                        }, {
                            const: "BROWSERS",
                            prop: "browser"
                        }, {
                            const: "DEVICES",
                            prop: "device"
                        }, {
                            const: "OS_VERSIONS",
                            prop: "os_version"
                        }];
                        if (t.forEach(t => {
                                this[t.prop] = Object.keys(Q[t.const]).reduce((e, o) => "device" === Q[t.const][o] && Object(i.u)(this.platformId) && (this.reTree.test(this.userAgent, T.iPad) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ? (e[Q[t.const][o]] = "iPad", Object) : (e[Q[t.const][o]] = this.reTree.test(n, Q[t.const+"_RE"][o]), e), {})
                            }), t.forEach(n => {
                                this[n.prop] = Object.keys(Q[n.const]).map(t => Q[n.const][t]).reduce((t, e) => "device" === n.prop && t === Q[n.const].ANDROID ? this[n.prop][e] ? e : t : t === Q[n.const].UNKNOWN && this[n.prop][e] ? e : t, Q[n.const].UNKNOWN)
                            }), this.browser_version = "0", this.browser !== h.UNKNOWN) {
                            const t = this.reTree.exec(n, D[this.browser]);
                            t && (this.browser_version = t[1])
                        }
                        this.orientation = "undefined" != typeof window && window.matchMedia ? window.matchMedia("(orientation: landscape)").matches ? B.Landscape : B.Portrait : O.UKNOWN, this.deviceType = this.isTablet() ? L.Tablet : this.isMobile(this.userAgent) ? L.Mobile : this.isDesktop(this.userAgent) ? L.Desktop : L.Unknown
                    }
                    getDeviceInfo() {
                        return {
                            userAgent: this.userAgent,
                            os: this.os,
                            browser: this.browser,
                            device: this.device,
                            os_version: this.os_version,
                            browser_version: this.browser_version,
                            deviceType: this.deviceType,
                            orientation: this.orientation
                        }
                    }
                    isMobile(n = this.userAgent) {
                        return !this.isTablet(n) && !!Object.keys(x).find(t => this.reTree.test(n, x[t]))
                    }
                    isTablet(n = this.userAgent) {
                        return !(!Object(i.u)(this.platformId) || !(this.reTree.test(this.userAgent, T.iPad) || "undefined" != typeof navigator && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)) || !!Object.keys(T).find(t => !!this.reTree.test(n, T[t]))
                    }
                    isDesktop(n = this.userAgent) {
                        return (this.device !== S.UNKNOWN || !this.isMobile(n) && !this.isTablet(n)) && f.indexOf(this.device) > -1
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(M.Ub(M.B))
                }, n.\u0275prov = M.Hb({
                    factory: function() {
                        return new n(M.Ub(M.B))
                    },
                    token: n,
                    providedIn: "root"
                }), n
            })();
            var N = e("gxae"),
                F = e("/nzl"),
                R = e("TSSN"),
                V = e("Osdn"),
                X = e("miJQ"),
                W = e("s7LF"),
                U = e("LvDl"),
                K = e("knbn"),
                Y = e("M9ds"),
                j = e("Q2Ze"),
                $ = e("ZTz/"),
                Z = e("Z5Gg"),
                J = e("e6WT"),
                q = e("FTva"),
                nn = e("4gwH"),
                tn = e("UhP/"),
                en = e("g6Gt");

            function on(n, t) {
                1 & n && (M.Qb(0, "small", 39), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Please_enter_correct_pincode")))
            }

            function an(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 40), M.Qb(1, "button", 41), M.Xb("click", function() {
                        return M.vc(n), M.bc(3).loadCentersByAvailableData()
                    }), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Pb()
                }
                2 & n && (M.zb(2), M.Ic(" ", M.dc(3, 1, "SLOT_SEARCH.Search"), " "))
            }

            function cn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 35), M.Qb(1, "div", 36), M.Qb(2, "input", 37), M.Xb("change", function() {
                        return M.vc(n), M.bc(2).pinChanged()
                    })("keyup", function(t) {
                        return M.vc(n), M.bc(2).restrictUserToTypeMoreThanLength(t, 6, "pincode")
                    }), M.cc(3, "translate"), M.Pb(), M.Ec(4, on, 3, 3, "small", 19), M.Ec(5, an, 4, 3, "div", 38), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(2);
                    M.zb(2), M.jc("placeholder", M.dc(3, 3, "SLOT_SEARCH.Enter_your_PIN")), M.zb(2), M.ic("ngIf", n.appointmentForm.get("pincode").touched && n.appointmentForm.get("pincode").errors), M.zb(1), M.ic("ngIf", "Pincode" == n.searchType)
                }
            }

            function ln(n, t) {
                1 & n && M.Mb(0, "div", 42)
            }

            function rn(n, t) {
                if (1 & n && (M.Qb(0, "mat-option", 43), M.Gc(1), M.cc(2, "titleCaseCustom"), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.ic("value", n.state_id), M.zb(1), M.Ic(" ", M.dc(2, 2, null == n ? null : n.state_name), " ")
                }
            }

            function sn(n, t) {
                1 & n && (M.Qb(0, "small", 39), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Please_select_correct_state")))
            }

            function bn(n, t) {
                if (1 & n && (M.Qb(0, "mat-option", 43), M.Gc(1), M.cc(2, "titleCaseCustom"), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.ic("value", n.district_id), M.zb(1), M.Ic(" ", M.dc(2, 2, null == n ? null : n.district_name), " ")
                }
            }

            function dn(n, t) {
                1 & n && (M.Qb(0, "small", 39), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Please_select_correct_district")))
            }

            function gn(n, t) {
                1 & n && (M.Qb(0, "div", 44), M.Qb(1, "div", 45), M.Mb(2, "span", 46), M.Qb(3, "div", 47), M.Qb(4, "h3", 48), M.Gc(5), M.cc(6, "translate"), M.Pb(), M.Qb(7, "ul"), M.Qb(8, "li", 48), M.Qb(9, "span", 49), M.Mb(10, "span", 50), M.Gc(11), M.cc(12, "translate"), M.Pb(), M.Mb(13, "span", 51), M.cc(14, "translate"), M.Pb(), M.Mb(15, "li", 52), M.cc(16, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n && (M.zb(5), M.Hc(M.dc(6, 4, "SLOT_SEARCH.Information_regarding_slots")), M.zb(6), M.Ic("", M.dc(12, 6, "SLOT_SEARCH.Walk-in-available"), " "), M.zb(2), M.ic("innerHTML", M.dc(14, 8, "SLOT_SEARCH.Walk-in-note"), M.wc), M.zb(2), M.ic("innerHTML", M.dc(16, 10, "SLOT_SEARCH.NOTE1"), M.wc))
            }

            function pn(n, t) {
                1 & n && (M.Qb(0, "span", 75), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Ic("", M.dc(2, 1, "SLOT_SEARCH.Showing results for"), ": "))
            }

            function Pn(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Qb(1, "span", 61), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Qb(4, "span", 76), M.Gc(5), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(3);
                    M.zb(2), M.Ic("", M.dc(3, 3, "SLOT_SEARCH.Age"), ": "), M.zb(2), M.Ab("aria-label", n.filter_age_txt), M.zb(1), M.Hc(n.filter_age_txt)
                }
            }

            function Mn(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Qb(1, "span", 70), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Qb(4, "span", 76), M.Gc(5), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(3);
                    M.zb(2), M.Ic("", M.dc(3, 3, "SLOT_SEARCH.Cost"), ": "), M.zb(2), M.Ab("aria-label", n.filter_paid_txt), M.zb(1), M.Hc(n.filter_paid_txt)
                }
            }

            function _n(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Qb(1, "span", 77), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Qb(4, "span", 76), M.Gc(5), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(3);
                    M.zb(2), M.Ic("", M.dc(3, 3, "SLOT_SEARCH.Vaccine"), ": "), M.zb(2), M.Ab("aria-label", n.filter_vaccine_txt), M.zb(1), M.Hc(n.filter_vaccine_txt)
                }
            }
            const Cn = function() {
                return ["covishieldFilter"]
            };

            function mn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 63), M.Qb(1, "input", 79), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(4).filterData("COVISHIELD", t)
                    }), M.Pb(), M.Qb(2, "label", 80), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(4);
                        return t.filterData("COVISHIELD", null, "" == t.appointmentForm.get(["covishieldFilter"]).value ? "COVISHIELD" : "")
                    }), M.Gc(3), M.cc(4, "translate"), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(4);
                    M.zb(1), M.ic("checked", n.appointmentForm.get(M.mc(4, Cn)).value), M.zb(2), M.Hc(M.dc(4, 2, "SLOT_SEARCH.Covishield"))
                }
            }
            const On = function() {
                return ["covaxinFilter"]
            };

            function hn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 63), M.Qb(1, "input", 81), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(4).filterData("COVAXIN", t)
                    }), M.Pb(), M.Qb(2, "label", 82), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(4);
                        return t.filterData("COVAXIN", null, "" == t.appointmentForm.get(["covaxinFilter"]).value ? "COVAXIN" : "")
                    }), M.Gc(3), M.cc(4, "translate"), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(4);
                    M.zb(1), M.ic("checked", n.appointmentForm.get(M.mc(4, On)).value), M.zb(2), M.Hc(M.dc(4, 2, "SLOT_SEARCH.Covaxin"))
                }
            }
            const xn = function() {
                return ["sputnikFilter"]
            };

            function Tn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 63), M.Qb(1, "input", 83), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(4).filterData("SPUTNIK V", t)
                    }), M.Pb(), M.Qb(2, "label", 84), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(4);
                        return t.filterData("SPUTNIK V", null, "" == t.appointmentForm.get(["sputnikFilter"]).value ? "SPUTNIK V" : "")
                    }), M.Gc(3), M.cc(4, "translate"), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(4);
                    M.zb(1), M.ic("checked", n.appointmentForm.get(M.mc(4, xn)).value), M.zb(2), M.Hc(M.dc(4, 2, "SLOT_SEARCH.Sputnik_V"))
                }
            }

            function Sn(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Qb(1, "p", 77), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Qb(4, "div", 62), M.Ec(5, mn, 5, 5, "div", 78), M.Ec(6, hn, 5, 5, "div", 78), M.Ec(7, Tn, 5, 5, "div", 78), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(3);
                    M.zb(2), M.Ic("", M.dc(3, 4, "SLOT_SEARCH.Vaccine"), " "), M.zb(3), M.ic("ngIf", "" == n.vaccineName), M.zb(1), M.ic("ngIf", "" == n.vaccineName), M.zb(1), M.ic("ngIf", "" == n.vaccineName)
                }
            }
            const fn = function() {
                    return ["minAgeFilter"]
                },
                un = function() {
                    return ["age1844Filter"]
                },
                wn = function() {
                    return ["maxAgeFilter"]
                },
                vn = function() {
                    return ["paidFilter"]
                },
                An = function() {
                    return ["freeFilter"]
                };

            function Gn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 53), M.Qb(1, "div", 54), M.Qb(2, "h5"), M.Qb(3, "span", 55), M.cc(4, "translate"), M.Gc(5), M.cc(6, "translate"), M.Pb(), M.Qb(7, "span", 56), M.Gc(8), M.cc(9, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(10, "div", 57), M.Ec(11, pn, 3, 3, "span", 58), M.Qb(12, "ul"), M.Ec(13, Pn, 6, 5, "li", 6), M.Ec(14, Mn, 6, 5, "li", 6), M.Ec(15, _n, 6, 5, "li", 6), M.Pb(), M.Pb(), M.Qb(16, "div", 59), M.Qb(17, "span", 60), M.Gc(18), M.cc(19, "translate"), M.Pb(), M.Qb(20, "ul"), M.Qb(21, "li"), M.Qb(22, "p", 61), M.Gc(23), M.cc(24, "translate"), M.Pb(), M.Qb(25, "div", 62), M.Qb(26, "div", 63), M.Qb(27, "input", 64), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(2).filterData(18, t)
                    }), M.Pb(), M.Qb(28, "label", 65), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(2);
                        return t.filterData(18, null, "" == t.appointmentForm.get(["minAgeFilter"]).value ? 18 : "")
                    }), M.Gc(29), M.cc(30, "translate"), M.Pb(), M.Pb(), M.Qb(31, "div", 63), M.Qb(32, "input", 66), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(2).filterData(1844, t)
                    }), M.Pb(), M.Qb(33, "label", 67), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(2);
                        return t.filterData(1844, null, "" == t.appointmentForm.get(["age1844Filter"]).value ? 1844 : "")
                    }), M.Gc(34), M.cc(35, "translate"), M.Pb(), M.Pb(), M.Qb(36, "div", 63), M.Qb(37, "input", 68), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(2).filterData(45, t)
                    }), M.Pb(), M.Qb(38, "label", 69), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(2);
                        return t.filterData(45, null, "" == t.appointmentForm.get(["maxAgeFilter"]).value ? 45 : "")
                    }), M.Gc(39), M.cc(40, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(41, "li"), M.Qb(42, "p", 70), M.Gc(43), M.cc(44, "translate"), M.Pb(), M.Qb(45, "div", 62), M.Qb(46, "div", 63), M.Qb(47, "input", 71), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(2).filterData("Paid", t)
                    }), M.Pb(), M.Qb(48, "label", 72), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(2);
                        return t.filterData("Paid", null, "" == t.appointmentForm.get(["paidFilter"]).value ? "Paid" : "")
                    }), M.Gc(49), M.cc(50, "translate"), M.Pb(), M.Pb(), M.Qb(51, "div", 63), M.Qb(52, "input", 73), M.Xb("change", function(t) {
                        return M.vc(n), M.bc(2).filterData("Free", t)
                    }), M.Pb(), M.Qb(53, "label", 74), M.Xb("keydown.enter", function() {
                        M.vc(n);
                        const t = M.bc(2);
                        return t.filterData("Free", null, "" == t.appointmentForm.get(["freeFilter"]).value ? "Free" : "")
                    }), M.Gc(54), M.cc(55, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Ec(56, Sn, 8, 6, "li", 6), M.Pb(), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(2);
                    M.zb(3), M.Ab("aria-label", M.dc(4, 23, "SLOT_SEARCH.Slot Search Results")), M.zb(2), M.Hc(M.dc(6, 25, "SLOT_SEARCH.Slot Search Results")), M.zb(2), M.Ab("aria-label", (null == n.centerList ? null : n.centerList.length) + "Center(s) Found"), M.zb(1), M.Jc("(", null == n.centerList ? null : n.centerList.length, " ", M.dc(9, 27, "SLOT_SEARCH.Center_Found"), ")"), M.zb(3), M.ic("ngIf", "" != n.filter_age_txt || "" != n.filter_vaccine_txt || "" != n.filter_paid_txt), M.zb(2), M.ic("ngIf", n.filter_age_txt && "" != n.filter_age_txt), M.zb(1), M.ic("ngIf", n.filter_paid_txt && "" != n.filter_paid_txt), M.zb(1), M.ic("ngIf", n.filter_vaccine_txt && "" != n.filter_vaccine_txt), M.zb(3), M.Ic("", M.dc(19, 29, "SLOT_SEARCH.Filter results by"), ": "), M.zb(5), M.Hc(M.dc(24, 31, "SLOT_SEARCH.Age")), M.zb(4), M.ic("checked", n.appointmentForm.get(M.mc(45, fn)).value), M.zb(2), M.Hc(M.dc(30, 33, "SLOT_SEARCH.18Above")), M.zb(3), M.ic("checked", n.appointmentForm.get(M.mc(46, un)).value), M.zb(2), M.Hc(M.dc(35, 35, "SLOT_SEARCH.18-44Only")), M.zb(3), M.ic("checked", n.appointmentForm.get(M.mc(47, wn)).value), M.zb(2), M.Hc(M.dc(40, 37, "SLOT_SEARCH.45Above")), M.zb(4), M.Hc(M.dc(44, 39, "SLOT_SEARCH.Cost")), M.zb(4), M.ic("checked", n.appointmentForm.get(M.mc(48, vn)).value), M.zb(2), M.Hc(M.dc(50, 41, "SLOT_SEARCH.Paid")), M.zb(3), M.ic("checked", n.appointmentForm.get(M.mc(49, An)).value), M.zb(2), M.Hc(M.dc(55, 43, "SLOT_SEARCH.Free")), M.zb(2), M.ic("ngIf", "" == n.vaccineName)
                }
            }

            function yn(n, t) {
                1 & n && (M.Qb(0, "div", 85), M.Qb(1, "div", 45), M.Mb(2, "span", 46), M.Qb(3, "div", 47), M.Qb(4, "ul"), M.Mb(5, "li", 52), M.cc(6, "translate"), M.Qb(7, "li"), M.Qb(8, "span", 86), M.Mb(9, "span", 50), M.Gc(10), M.cc(11, "translate"), M.Pb(), M.Mb(12, "span", 51), M.cc(13, "translate"), M.Pb(), M.Qb(14, "li"), M.Qb(15, "span", 87), M.Gc(16), M.cc(17, "translate"), M.Pb(), M.Qb(18, "span", 87), M.Gc(19), M.cc(20, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n && (M.zb(5), M.ic("innerHTML", M.dc(6, 5, "SLOT_SEARCH.NOTE1"), M.wc), M.zb(5), M.Hc(M.dc(11, 7, "SLOT_SEARCH.Walk-in-available")), M.zb(2), M.ic("innerHTML", M.dc(13, 9, "SLOT_SEARCH.Walk-in-note"), M.wc), M.zb(4), M.Hc(M.dc(17, 11, "SLOT_SEARCH.note-dose1")), M.zb(3), M.Hc(M.dc(20, 13, "SLOT_SEARCH.note-dose2")))
            }
            const Hn = function(n) {
                    return {
                        active: n
                    }
                },
                In = function() {
                    return []
                };

            function En(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "li", 95), M.Qb(1, "a", 96), M.Xb("click", function() {
                        M.vc(n);
                        const e = t.$implicit,
                            i = t.index;
                        return M.bc(3).mv_selectDate(e, i)
                    }), M.Qb(2, "p", 97), M.Gc(3), M.Pb(), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = t.$implicit,
                        e = M.bc(3);
                    M.ic("ngClass", M.nc(3, Hn, n.value == e.selectedDate)), M.zb(1), M.ic("routerLink", M.mc(5, In)), M.zb(2), M.Hc(n.text)
                }
            }

            function Dn(n, t) {
                1 & n && (M.Qb(0, "span", 124), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Free")))
            }

            function Qn(n, t) {
                1 & n && (M.Qb(0, "span", 125), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Paid")))
            }

            function kn(n, t) {
                if (1 & n && (M.Qb(0, "div", 126), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Kc(" ", null == n ? null : n.min_age_limit, "-", null == n ? null : n.max_age_limit, " ", M.dc(2, 3, "SLOT_SEARCH.ONLY_LBL"), " ")
                }
            }

            function Ln(n, t) {
                if (1 & n && (M.Qb(0, "div", 126), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Jc(" ", null == n ? null : n.min_age_limit, " ", M.dc(2, 2, "SLOT_SEARCH.ANDABOVE_LBL"), " ")
                }
            }

            function Bn(n, t) {
                if (1 & n && (M.Qb(0, "div", 127), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Jc(" ", null == n ? null : n.min_age_limit, " ", M.dc(2, 2, "SLOT_SEARCH.ANDABOVE_LBL"), " ")
                }
            }

            function zn(n, t) {
                if (1 & n && (M.Qb(0, "span", 128), M.Gc(1), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Ic("", null == n ? null : n.available_capacity_dose1, " slots")
                }
            }

            function Nn(n, t) {
                if (1 & n && (M.Qb(0, "span", 129), M.Gc(1), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Ic("", null == n ? null : n.available_capacity_dose1, " slots")
                }
            }

            function Fn(n, t) {
                1 & n && (M.Qb(0, "span", 130), M.Gc(1, "\u2716"), M.Pb())
            }

            function Rn(n, t) {
                if (1 & n && (M.Qb(0, "span", 128), M.Gc(1), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Ic("", null == n ? null : n.available_capacity_dose2, " slots")
                }
            }

            function Vn(n, t) {
                if (1 & n && (M.Qb(0, "span", 129), M.Gc(1), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.Ic("", null == n ? null : n.available_capacity_dose2, " slots")
                }
            }

            function Xn(n, t) {
                1 & n && (M.Qb(0, "span", 130), M.Gc(1, "\u2716"), M.Pb())
            }

            function Wn(n, t) {
                if (1 & n && (M.Qb(0, "div", 99), M.Qb(1, "div", 100), M.Qb(2, "a", 101), M.Qb(3, "div", 102), M.Qb(4, "div", 103), M.Qb(5, "h5", 104), M.Gc(6), M.cc(7, "titleCaseCustom"), M.Pb(), M.Qb(8, "p", 105), M.Gc(9), M.Pb(), M.Pb(), M.Qb(10, "div", 106), M.Qb(11, "div", 107), M.Qb(12, "h5", 108), M.Gc(13), M.Pb(), M.Qb(14, "div", 109), M.Ec(15, Dn, 3, 3, "span", 110), M.Ec(16, Qn, 3, 3, "span", 111), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(17, "div", 112), M.Qb(18, "div", 113), M.Qb(19, "div", 114), M.Qb(20, "div", 115), M.Ec(21, kn, 3, 5, "div", 116), M.Ec(22, Ln, 3, 4, "div", 116), M.Ec(23, Bn, 3, 4, "div", 117), M.Pb(), M.Qb(24, "div", 118), M.Qb(25, "span", 119), M.Gc(26, "Dose 1"), M.Pb(), M.Ec(27, zn, 2, 1, "span", 120), M.Ec(28, Nn, 2, 1, "span", 121), M.Ec(29, Fn, 2, 0, "span", 122), M.Pb(), M.Qb(30, "div", 123), M.Qb(31, "span", 119), M.Gc(32, "Dose 2"), M.Pb(), M.Ec(33, Rn, 2, 1, "span", 120), M.Ec(34, Vn, 2, 1, "span", 121), M.Ec(35, Xn, 2, 0, "span", 122), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit,
                        t = M.bc(2).$implicit;
                    M.zb(6), M.Ic(" ", M.dc(7, 14, null == t ? null : t.name), " "), M.zb(3), M.Ic(" ", null == t ? null : t.addressString, " "), M.zb(4), M.Ic(" ", null == n ? null : n.vaccine, " "), M.zb(2), M.ic("ngIf", "Paid" != (null == t ? null : t.fee_type)), M.zb(1), M.ic("ngIf", "Paid" == (null == t ? null : t.fee_type)), M.zb(5), M.ic("ngIf", (null == n ? null : n.min_age_limit) <= 44 && (null == n ? null : n.max_age_limit) <= 44), M.zb(1), M.ic("ngIf", (null == n ? null : n.min_age_limit) <= 44 && null == (null == n ? null : n.max_age_limit)), M.zb(1), M.ic("ngIf", (null == n ? null : n.min_age_limit) >= 45), M.zb(4), M.ic("ngIf", (null == n ? null : n.available_capacity_dose1) > 10), M.zb(1), M.ic("ngIf", (null == n ? null : n.available_capacity_dose1) <= 10 && (null == n ? null : n.available_capacity_dose1) >= 1), M.zb(1), M.ic("ngIf", (null == n ? null : n.available_capacity_dose1) <= 0), M.zb(4), M.ic("ngIf", (null == n ? null : n.available_capacity_dose2) > 10), M.zb(1), M.ic("ngIf", (null == n ? null : n.available_capacity_dose2) <= 10 && (null == n ? null : n.available_capacity_dose2) >= 1), M.zb(1), M.ic("ngIf", (null == n ? null : n.available_capacity_dose2) <= 0)
                }
            }

            function Un(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Ec(1, Wn, 36, 16, "div", 98), M.Pb()), 2 & n) {
                    const n = t.$implicit,
                        e = M.bc(5);
                    M.zb(1), M.ic("ngIf", !e.mv_isEmpty && n.date == e.selectedDate && "" != n.session_id)
                }
            }

            function Kn(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Ec(1, Un, 2, 1, "div", 93), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(1), M.ic("ngForOf", n)
                }
            }

            function Yn(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Ec(1, Kn, 2, 1, "div", 93), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(1), M.ic("ngForOf", n.newSessions)
                }
            }

            function jn(n, t) {
                1 & n && (M.Qb(0, "div", 131), M.Qb(1, "div", 132), M.Qb(2, "span", 133), M.ac(), M.Qb(3, "svg", 134), M.Mb(4, "path", 135), M.Mb(5, "path", 136), M.Pb(), M.Pb(), M.Zb(), M.Qb(6, "p"), M.Qb(7, "strong"), M.Gc(8), M.cc(9, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n && (M.zb(8), M.Hc(M.dc(9, 1, "SLOT_SEARCH.No_Vaccination_center_is_available_for_booking.")))
            }

            function $n(n, t) {
                if (1 & n && (M.Qb(0, "div", 88), M.Mb(1, "div", 89), M.Qb(2, "div", 90), M.Qb(3, "ul", 91), M.Ec(4, En, 4, 6, "li", 92), M.Pb(), M.Pb(), M.Ec(5, Yn, 2, 1, "div", 93), M.Ec(6, jn, 10, 3, "div", 94), M.Pb()), 2 & n) {
                    const n = M.bc(2);
                    M.zb(4), M.ic("ngForOf", n.sliderDates), M.zb(1), M.ic("ngForOf", n.centerList), M.zb(1), M.ic("ngIf", n.mv_isEmpty)
                }
            }

            function Zn(n, t) {
                1 & n && M.Mb(0, "div", 137)
            }

            function Jn(n, t) {
                if (1 & n && (M.Qb(0, "slide"), M.Qb(1, "li", 143), M.Qb(2, "a"), M.Qb(3, "p"), M.Gc(4), M.Qb(5, "span", 31), M.Gc(6), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(4), M.Ic("", n.text, " "), M.zb(2), M.Hc(n.yeartxt)
                }
            }

            function qn(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Qb(0, "div", 138), M.Qb(1, "div", 139), M.Qb(2, "div", 140), M.Qb(3, "ul", 141), M.Qb(4, "carousel", 142), M.Xb("slideRangeChange", function(t) {
                        return M.vc(n), M.bc(2).onSlideRangeChange(t)
                    }), M.Ec(5, Jn, 7, 2, "slide", 93), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()
                }
                if (2 & n) {
                    const n = M.bc(2);
                    M.zb(4), M.ic("itemsPerSlide", n.itemsPerSlide)("noWrap", n.noWrap)("interval", 0)("singleSlideOffset", n.singleSlideOffset)("showIndicators", !1)("startFromIndex", 0), M.zb(1), M.ic("ngForOf", n.sliderDates)
                }
            }

            function nt(n, t) {
                1 & n && (M.Qb(0, "div", 150), M.Qb(1, "p", 151), M.Gc(2), M.cc(3, "translate"), M.Pb(), M.Pb()), 2 & n && (M.zb(2), M.Ic(" ", M.dc(3, 1, "SLOT_SEARCH.No_Vaccination_center_is_available_for_booking."), ""))
            }

            function tt(n, t) {
                1 & n && (M.Qb(0, "span", 125), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.Hc(M.dc(2, 1, "SLOT_SEARCH.Paid")))
            }

            function et(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit;
                    M.zb(1), M.Jc("", null == n ? null : n.vaccine, ": \u20b9", null == n ? null : n.fee, "")
                }
            }

            function it(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Ec(1, et, 2, 2, "span", 6), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(1), M.ic("ngIf", n.vaccine && n.fee)
                }
            }

            function ot(n, t) {
                if (1 & n && (M.Qb(0, "div", 109), M.Qb(1, "ul"), M.Ec(2, it, 2, 1, "li", 93), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit;
                    M.zb(2), M.ic("ngForOf", n.vaccine_fees)
                }
            }
            const at = function(n) {
                return {
                    "vaccine-padding": n
                }
            };

            function ct(n, t) {
                if (1 & n && (M.Qb(0, "div", 163), M.Qb(1, "div", 164), M.Qb(2, "a", 165), M.cc(3, "translate"), M.Gc(4, " NA "), M.Pb(), M.Qb(5, "div", 107), M.Mb(6, "h5", 108), M.Pb(), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(1), M.ic("ngClass", M.nc(4, at, n.length <= 1)), M.zb(1), M.jc("title", M.dc(3, 2, "SLOT_SEARCH.Not_Available"))
                }
            }

            function lt(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Jc("", null == n ? null : n.min_age_limit, " ", M.dc(2, 2, "SLOT_SEARCH.ANDABOVE_LBL"), "")
                }
            }

            function rt(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Kc("", null == n ? null : n.min_age_limit, "-", null == n ? null : n.max_age_limit, " ", M.dc(2, 3, "SLOT_SEARCH.ONLY_LBL"), "")
                }
            }

            function st(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Qb(1, "span", 170), M.Ec(2, lt, 3, 4, "span", 6), M.Ec(3, rt, 3, 5, "span", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(2), M.ic("ngIf", null == (null == n ? null : n.max_age_limit)), M.zb(1), M.ic("ngIf", (null == n ? null : n.max_age_limit) >= 44)
                }
            }

            function bt(n, t) {
                if (1 & n && (M.Qb(0, "div", 166), M.Qb(1, "div", 107), M.Qb(2, "h5", 167), M.Gc(3), M.Pb(), M.Pb(), M.Qb(4, "div", 168), M.Qb(5, "a", 169), M.cc(6, "translate"), M.Gc(7), M.cc(8, "translate"), M.Pb(), M.Ec(9, st, 4, 2, "div", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit,
                        t = M.bc().$implicit,
                        e = M.bc().$implicit;
                    M.zb(3), M.Ic(" ", n.vaccine, " "), M.zb(1), M.ic("ngClass", M.nc(9, at, t.length <= 1)), M.zb(1), M.jc("title", M.dc(6, 5, "SLOT_SEARCH.Fully_Booked")), M.zb(2), M.Ic(" ", M.dc(8, 7, "SLOT_SEARCH.Booked"), " "), M.zb(2), M.ic("ngIf", (null == e ? null : e.age_limit) && (null == e ? null : e.age_limit) > 0)
                }
            }

            function dt(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Jc("", null == n ? null : n.min_age_limit, " ", M.dc(2, 2, "SLOT_SEARCH.ANDABOVE_LBL"), "")
                }
            }

            function gt(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Kc("", null == n ? null : n.min_age_limit, "-", null == n ? null : n.max_age_limit, " ", M.dc(2, 3, "SLOT_SEARCH.ONLY_LBL"), "")
                }
            }

            function pt(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Qb(1, "span", 176), M.Ec(2, dt, 3, 4, "span", 6), M.Ec(3, gt, 3, 5, "span", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(2), M.ic("ngIf", null == (null == n ? null : n.max_age_limit)), M.zb(1), M.ic("ngIf", (null == n ? null : n.max_age_limit) >= 44)
                }
            }

            function Pt(n, t) {
                if (1 & n && (M.Qb(0, "div", 171), M.Qb(1, "div", 168), M.Qb(2, "div", 107), M.Qb(3, "h5", 108), M.Gc(4), M.Pb(), M.Pb(), M.Qb(5, "div", 172), M.Qb(6, "span", 173), M.cc(7, "translate"), M.Qb(8, "p"), M.Gc(9, "D1 "), M.Pb(), M.Gc(10), M.Pb(), M.Qb(11, "a", 174), M.Gc(12), M.Pb(), M.Qb(13, "span", 175), M.cc(14, "translate"), M.Qb(15, "p"), M.Gc(16, "D2 "), M.Pb(), M.Gc(17), M.Pb(), M.Pb(), M.Ec(18, pt, 4, 2, "div", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit,
                        t = M.bc().$implicit;
                    M.zb(1), M.ic("ngClass", M.nc(12, at, t.length <= 1)), M.zb(3), M.Ic(" ", n.vaccine, " "), M.zb(2), M.jc("title", M.dc(7, 8, "SLOT_SEARCH.Dose_1")), M.zb(4), M.Ic(" ", null != n && n.available_capacity_dose1 && (null == n ? null : n.available_capacity_dose1) > 0 ? n.available_capacity_dose1 : 0, " "), M.zb(2), M.Ic(" ", n.available_capacity > 0 ? n.available_capacity : 0, " "), M.zb(1), M.jc("title", M.dc(14, 10, "SLOT_SEARCH.Dose_2")), M.zb(4), M.Ic(" ", null != n && n.available_capacity_dose2 && (null == n ? null : n.available_capacity_dose2) > 0 ? n.available_capacity_dose2 : 0, " "), M.zb(1), M.ic("ngIf", (null == n ? null : n.min_age_limit) && (null == n ? null : n.min_age_limit) > 0)
                }
            }

            function Mt(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Jc("", null == n ? null : n.min_age_limit, " ", M.dc(2, 2, "SLOT_SEARCH.ANDABOVE_LBL"), "")
                }
            }

            function _t(n, t) {
                if (1 & n && (M.Qb(0, "span"), M.Gc(1), M.cc(2, "translate"), M.Pb()), 2 & n) {
                    const n = M.bc(3).$implicit;
                    M.zb(1), M.Kc("", null == n ? null : n.min_age_limit, "-", null == n ? null : n.max_age_limit, " ", M.dc(2, 3, "SLOT_SEARCH.ONLY_LBL"), "")
                }
            }

            function Ct(n, t) {
                if (1 & n && (M.Qb(0, "div"), M.Qb(1, "span", 176), M.Ec(2, Mt, 3, 4, "span", 6), M.Ec(3, _t, 3, 5, "span", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(2).$implicit;
                    M.zb(2), M.ic("ngIf", null == (null == n ? null : n.max_age_limit)), M.zb(1), M.ic("ngIf", (null == n ? null : n.max_age_limit) >= 44)
                }
            }

            function mt(n, t) {
                if (1 & n && (M.Qb(0, "div", 177), M.Qb(1, "div", 168), M.Qb(2, "div", 107), M.Qb(3, "h5", 108), M.Gc(4), M.Pb(), M.Pb(), M.Qb(5, "div", 172), M.Qb(6, "span", 165), M.cc(7, "translate"), M.Qb(8, "p"), M.Gc(9, "D1 "), M.Pb(), M.Gc(10), M.Pb(), M.Qb(11, "a", 174), M.Gc(12), M.Pb(), M.Qb(13, "span", 165), M.cc(14, "translate"), M.Qb(15, "p"), M.Gc(16, "D2 "), M.Pb(), M.Gc(17), M.Pb(), M.Pb(), M.Ec(18, Ct, 4, 2, "div", 6), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc().$implicit,
                        t = M.bc().$implicit;
                    M.zb(1), M.ic("ngClass", M.nc(12, at, t.length <= 1)), M.zb(3), M.Ic(" ", n.vaccine, " "), M.zb(2), M.jc("title", M.dc(7, 8, "SLOT_SEARCH.Dose_1")), M.zb(4), M.Ic(" ", null != n && n.available_capacity_dose1 && (null == n ? null : n.available_capacity_dose1) > 0 ? n.available_capacity_dose1 : 0, " "), M.zb(2), M.Ic(" ", n.available_capacity > 0 ? n.available_capacity : 0, " "), M.zb(1), M.jc("title", M.dc(14, 10, "SLOT_SEARCH.Dose_2")), M.zb(4), M.Ic(" ", null != n && n.available_capacity_dose2 && (null == n ? null : n.available_capacity_dose2) > 0 ? n.available_capacity_dose2 : 0, " "), M.zb(1), M.ic("ngIf", (null == n ? null : n.min_age_limit) && (null == n ? null : n.min_age_limit) > 0)
                }
            }

            function Ot(n, t) {
                if (1 & n && (M.Ob(0), M.Ec(1, ct, 7, 6, "div", 159), M.Ec(2, bt, 10, 11, "div", 160), M.Ec(3, Pt, 19, 14, "div", 161), M.Ec(4, mt, 19, 14, "div", 162), M.Nb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(1), M.ic("ngIf", "" == n.session_id), M.zb(1), M.ic("ngIf", n.available_capacity <= 0 && "" != n.session_id), M.zb(1), M.ic("ngIf", "" != n.session_id && n.available_capacity > 0 && n.available_capacity <= 10), M.zb(1), M.ic("ngIf", "" != n.session_id && n.available_capacity > 10)
                }
            }

            function ht(n, t) {
                if (1 & n && (M.Qb(0, "li"), M.Ec(1, Ot, 5, 4, "ng-container", 93), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(1), M.ic("ngForOf", n)
                }
            }

            function xt(n, t) {
                if (1 & n && (M.Qb(0, "div", 152), M.Qb(1, "div", 153), M.Qb(2, "div"), M.Qb(3, "div", 154), M.Qb(4, "div", 155), M.Qb(5, "h5", 104), M.Gc(6), M.cc(7, "titleCaseCustom"), M.Ec(8, tt, 3, 3, "span", 111), M.Pb(), M.Qb(9, "p", 105), M.Gc(10), M.Pb(), M.Ec(11, ot, 3, 1, "div", 156), M.Pb(), M.Pb(), M.Qb(12, "div", 157), M.Qb(13, "ul", 158), M.Ec(14, ht, 2, 1, "li", 93), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n) {
                    const n = t.$implicit;
                    M.zb(6), M.Ic(" ", M.dc(7, 5, null == n ? null : n.name), " "), M.zb(2), M.ic("ngIf", "Paid" == (null == n ? null : n.fee_type)), M.zb(2), M.Ic(" ", null == n ? null : n.addressString, " "), M.zb(1), M.ic("ngIf", "Paid" == (null == n ? null : n.fee_type) && (null == n ? null : n.vaccine_fees)), M.zb(3), M.ic("ngForOf", n.newSessions)
                }
            }
            const Tt = function(n) {
                return {
                    "center-list": n
                }
            };

            function St(n, t) {
                if (1 & n && (M.Qb(0, "div", 144), M.Qb(1, "div", 145), M.Qb(2, "div", 146), M.Ec(3, nt, 4, 3, "div", 147), M.Qb(4, "div", 148), M.Ec(5, xt, 15, 7, "div", 149), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n) {
                    const n = M.bc(2);
                    M.zb(3), M.ic("ngIf", !n.isSearching && (!n.centerList || n.centerList.length <= 0)), M.zb(1), M.ic("ngClass", M.nc(3, Tt, n.marginClass)), M.zb(1), M.ic("ngForOf", n.centerList)
                }
            }

            function ft(n, t) {
                if (1 & n) {
                    const n = M.Rb();
                    M.Ob(0), M.Qb(1, "div", 5), M.Qb(2, "div"), M.Qb(3, "div", 7), M.Qb(4, "div"), M.Qb(5, "div"), M.Mb(6, "div", 8), M.Qb(7, "form", 9), M.Qb(8, "mat-tab-group", 10), M.Xb("selectedTabChange", function(t) {
                        return M.vc(n), M.bc().tabChanged(t)
                    }), M.Qb(9, "mat-tab", 11), M.cc(10, "translate"), M.Ec(11, cn, 6, 5, "div", 12), M.Ec(12, ln, 1, 0, "div", 13), M.Pb(), M.Qb(13, "mat-tab", 11), M.cc(14, "translate"), M.Qb(15, "div", 14), M.Qb(16, "div", 15), M.Qb(17, "mat-form-field", 16), M.Qb(18, "mat-select", 17), M.Xb("selectionChange", function() {
                        M.vc(n);
                        const t = M.bc();
                        return t.getPermanentDistrictList(t.appointmentForm.get(["state_id"]).value)
                    }), M.cc(19, "translate"), M.Ec(20, rn, 3, 4, "mat-option", 18), M.Pb(), M.Ec(21, sn, 3, 3, "small", 19), M.Pb(), M.Pb(), M.Qb(22, "div", 20), M.Qb(23, "mat-form-field", 21), M.Qb(24, "mat-select", 22), M.cc(25, "translate"), M.Ec(26, bn, 3, 4, "mat-option", 18), M.Pb(), M.Ec(27, dn, 3, 3, "small", 19), M.Pb(), M.Pb(), M.Qb(28, "div", 23), M.Qb(29, "button", 24), M.Xb("click", function() {
                        return M.vc(n), M.bc().loadCentersByAvailableData()
                    }), M.Gc(30), M.cc(31, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(32, "mat-tab", 25), M.cc(33, "translate"), M.Mb(34, "appointment-map"), M.Pb(), M.Pb(), M.Pb(), M.Qb(35, "div", 26), M.Qb(36, "form", 9), M.Qb(37, "div"), M.Qb(38, "div"), M.Ec(39, gn, 17, 12, "div", 27), M.Ec(40, Gn, 57, 50, "div", 28), M.Ec(41, yn, 21, 15, "div", 29), M.Ec(42, $n, 7, 3, "div", 30), M.Qb(43, "div", 31), M.Ec(44, Zn, 1, 0, "div", 32), M.Ec(45, qn, 6, 7, "div", 33), M.Ec(46, St, 6, 5, "div", 34), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Nb()
                }
                if (2 & n) {
                    const n = M.bc();
                    M.zb(7), M.ic("formGroup", n.appointmentForm), M.zb(2), M.jc("label", M.dc(10, 21, "SLOT_SEARCH.Search_BY_PIN")), M.zb(2), M.ic("ngIf", "Pincode" == n.searchType), M.zb(1), M.ic("ngIf", "Pincode" == n.searchType), M.zb(1), M.jc("label", M.dc(14, 23, "SLOT_SEARCH.Search_by_District")), M.zb(5), M.ic("placeholder", M.dc(19, 25, "SLOT_SEARCH.Select_State")), M.zb(2), M.ic("ngForOf", n.stateList), M.zb(1), M.ic("ngIf", n.appointmentForm.get("state_id").touched && n.appointmentForm.get("state_id").errors), M.zb(3), M.ic("placeholder", M.dc(25, 27, "SLOT_SEARCH.Select_District")), M.zb(2), M.ic("ngForOf", n.districtListPermanent), M.zb(1), M.ic("ngIf", n.appointmentForm.get("district_id").touched && n.appointmentForm.get("district_id").errors), M.zb(3), M.Hc(M.dc(31, 29, "SLOT_SEARCH.Search")), M.zb(2), M.jc("label", M.dc(33, 31, "SLOT_SEARCH.Search_BY_MAP")), M.zb(4), M.ic("formGroup", n.appointmentForm), M.zb(3), M.ic("ngIf", n.showTables), M.zb(1), M.ic("ngIf", n.showTables), M.zb(1), M.ic("ngIf", n.showTables), M.zb(1), M.ic("ngIf", n.showTables), M.zb(2), M.ic("ngIf", n.showTables), M.zb(1), M.ic("ngIf", n.showTables), M.zb(1), M.ic("ngIf", n.showTables)
                }
            }
            let ut = (() => {
                class n {
                    constructor(n, t, e) {
                        this.appointmentV2 = n, this.utilsService = t, this.router = e, this.checked = !1, this.dateFormat = "DD-MM-YYYY", this.displayDateFormat = "DD MMM YYYY", this.confirmBooking = !1, this.bookAppointment = !0, this.startDate = new Date, this.minDate = new Date, this.marginClass = !1, this.availableSlots = [], this.centerList = [], this.backupCenterList = [], this.stateList = [], this.districtListPermanent = [], this.blockListPermanent = [], this.pincodeListCurrent = [], this.currentLocationVillageList = [], this.linkedBeneficiaryList = [], this.confirmAppointmentDetails = {}, this.addressString = "", this.slotDateList = [], this.activeSlotId = "", this.currentPage = 1, this.activeAppointmentId = "", this.showTables = !1, this.showLoader = !1, this.isCenterSelected = !1, this.disableSubmit = !1, this.searchType = "Pincode", this.sliderDates = [], this.itemsPerSlide = 7, this.dateRangeLength = 7, this.singleSlideOffset = !1, this.noWrap = !0, this.selectedDate = new Date, this.timeingArray = [], this.vaccineName = "", this.vaccStatus = "", this.selectedTimeInd = null, this.COVISHIELD = "COVISHIELD", this.partiallyVaccinated = "Partially Vaccinated", this.vaccinated = "Vaccinated", this.benNamesForComobility = "", this.isBenYearValidationMatch = !1, this.isBenDateValidationMatch = !1, this.counter = 0, this.maxBeneficiary = 4, this.countChecked = 0, this.isSearching = !1, this.minBenAge = 0, this.mv_isEmpty = !0, this.filter_age_txt = "", this.filter_paid_txt = "", this.filter_vaccine_txt = ""
                    }
                    ionViewWillEnter() {
                        this.activeAppointmentId = "", this.getScreenSize(null, !1), this.isBenYearValidationMatch = !1, this.isBenDateValidationMatch = !1, this.benNamesForComobility = "", this.selectedTimeInd = null, this.confirmBooking = !1, this.bookAppointment = !0, this.searchType = "Pincode", this.vaccineName = "", this.vaccStatus = "", this.dose1Date = "", this.showTables = !1, this.startDate = new Date, this.loadDropdowns(), this.appointmentForm && this.appointmentForm.reset(), this.centerList = [], this.availableSlots = [], this.activeSlotId = "", this.isCenterSelected = !1, this.showLoader = !1, this.utilsService.isPresent(this.vaccineName) || this.setDateValues()
                    }
                    setDateValues() {
                        this.selectedDate = s(this.startDate).format(this.dateFormat);
                        let n = U.clone(this.startDate);
                        this.fromDate = U.clone(n), n.setDate(n.getDate() + 6), this.toDate = U.clone(n), this.generateDatesForFilters()
                    }
                    ngOnInit() {
                        this.initappointmentForm(), this.ionViewWillEnter(), console.log("010610")
                    }
                    generateDatesForFilters() {
                        this.sliderDates = [];
                        let n = U.clone(this.startDate);
                        for (let t = 0; t < 84; t++) this.sliderDates.push({
                            text: s(n).format("DD MMM"),
                            yeartxt: s(n).format("YYYY"),
                            value: s(n).format(this.dateFormat)
                        }), n = s(n).add(1, "days");
                        this.dateRangeLength = this.sliderDates.length
                    }
                    getLinkedBeneficiaryList() {
                        this.linkedBeneficiaryList = []
                    }
                    loadDropdowns() {
                        this.stateListSub && this.stateListSub.unsubscribe(), this.stateListSub = this.appointmentV2.getV2StateList().subscribe(n => {
                            this.stateList = n.states, this.stateList.sort((n, t) => n.state_name.toLowerCase() > t.state_name.toLowerCase() ? 1 : t.state_name.toLowerCase() > n.state_name.toLowerCase() ? -1 : 0)
                        })
                    }
                    ngOnDestroy() {
                        this.subscription && this.subscription.unsubscribe(), this.slotSubScription && this.slotSubScription.unsubscribe(), this.districtSub && this.districtSub.unsubscribe(), this.pincodeSubscription && this.pincodeSubscription.unsubscribe()
                    }
                    makeAddressString(n, t = !1) {
                        let e = "";
                        return this.utilsService.isPresent(n.name) && t && (e += n.name + ", "), this.utilsService.isPresent(n.address) && (e += n.address + ", "), this.utilsService.isPresent(n.district_name) && (e += n.district_name + ", "), this.utilsService.isPresent(n.state_name) && (e += n.state_name + ", "), this.utilsService.isPresent(n.pincode) && 0 != n.pincode && (e += n.pincode + ""), e
                    }
                    loadCentersByAvailableData(n) {
                        let t = this.appointmentForm.get("pincode").value,
                            e = (this.appointmentForm.get("block_id"), this.appointmentForm.get("district_id").value);
                        if (this.appointmentForm.get("state_id"), this.pincodeSubscription && this.pincodeSubscription.unsubscribe(), this.districtSub && this.districtSub.unsubscribe(), this.utilsService.isPresent(t) && this.appointmentForm.get("pincode").valid) {
                            this.showTables || (this.showTables = !0);
                            let n = {
                                date: this.selectedDate,
                                pincode: t,
                                name_filter: ""
                            };
                            this.utilsService.isPresent(this.vaccineName) && this.utilsService.isPresent(this.dose1Date) && (n.vaccine = this.vaccineName), this.getSessionCalenderByPincode(n)
                        } else if (this.utilsService.isPresent(e)) {
                            this.showTables || (this.showTables = !0);
                            let n = {
                                date: this.selectedDate,
                                district_id: e,
                                name_filter: ""
                            };
                            this.utilsService.isPresent(this.vaccineName) && this.utilsService.isPresent(this.dose1Date) && (n.vaccine = this.vaccineName), this.getSessionCalanderByDistrict(n)
                        } else this.appointmentForm.markAllAsTouched()
                    }
                    initappointmentForm() {
                        this.appointmentForm = new W.f({
                            state_id: new W.c("", W.t.required),
                            district_id: new W.c("", W.t.required),
                            block_id: new W.c(""),
                            pincode: new W.c("", W.t.required),
                            searchType: new W.c,
                            minAgeFilter: new W.c(""),
                            age1844Filter: new W.c(""),
                            maxAgeFilter: new W.c(""),
                            covaxinFilter: new W.c(""),
                            covishieldFilter: new W.c(""),
                            freeFilter: new W.c(""),
                            sputnikFilter: new W.c(""),
                            paidFilter: new W.c(""),
                            center_id: new W.c(""),
                            dateFilter: new W.c("")
                        }), setTimeout(() => {
                            this.appointmentForm.get("minAgeFilter").setValue(""), this.appointmentForm.get("age1844Filter").setValue(""), this.appointmentForm.get("maxAgeFilter").setValue(""), this.appointmentForm.get("covaxinFilter").setValue(""), this.appointmentForm.get("covishieldFilter").setValue(""), this.appointmentForm.get("sputnikFilter").setValue(""), this.appointmentForm.get("freeFilter").setValue(""), this.appointmentForm.get("paidFilter").setValue("")
                        }, 500)
                    }
                    getPermanentDistrictList(n) {
                        this.appointmentForm.get(["district_id"]).setValue(""), this.appointmentForm.get(["block_id"]).setValue(""), this.appointmentForm.get(["pincode"]).setValue(""), this.blockListPermanent = [], this.pincodeListCurrent = [], this.currentLocationVillageList = [], n && (this.districtListSub && this.districtListSub.unsubscribe(), this.districtListSub = this.appointmentV2.getV2DistrictList(n).subscribe(n => {
                            this.districtListPermanent = n.districts, this.districtListPermanent.sort((n, t) => n.district_name.toLowerCase() > t.district_name.toLowerCase() ? 1 : t.district_name.toLowerCase() > n.district_name.toLowerCase() ? -1 : 0)
                        }))
                    }
                    restrictUserToTypeMoreThanLength(n, t, e) {
                        const i = n.srcElement.value;
                        return !(i.length > t && (n.srcElement.value = i.substring(0, t), "pincode" === e && this.appointmentForm.get("pincode").setValue(i.substring(0, t)), n.stopPropagation(), 1))
                    }
                    pinChanged() {
                        this.appointmentForm.get("state_id").setValue(""), this.appointmentForm.get("district_id").setValue("")
                    }
                    searchChange(n) {
                        this.searchType = n, this.appointmentForm.get("state_id").setValue(""), this.appointmentForm.get("district_id").setValue(""), this.appointmentForm.get("pincode").setValue("")
                    }
                    showDateData(n) {
                        this.selectedDate = n.value, this.loadCentersByAvailableData()
                    }
                    getSessionCalenderByPincode(n) {
                        this.pincodeSubscription && this.pincodeSubscription.unsubscribe(), this.isSearching = !0, this.pincodeSubscription = this.appointmentV2.getSessionCalanderByPincode(n).subscribe(n => {
                            this.resetFilterAndData(), this.isSearching = !1, this.centerList = n.centers, this.backupCenterList = U.cloneDeep(this.centerList), this.centerList.sort((n, t) => n.name.toLowerCase() > t.name.toLowerCase() ? 1 : t.name.toLowerCase() > n.name.toLowerCase() ? -1 : 0), this.setCalenderEmptySessions()
                        })
                    }
                    makeTimeString(n) {
                        let t = n.from,
                            e = n.to;
                        return (s(t, "hh:mm:ss").isValid() ? s(t, "hh:mm:ss").format("hh:mmA") : t) + "-" + (s(e, "hh:mm:ss").isValid() ? s(e, "hh:mm:ss").format("hh:mmA") : e)
                    }
                    getSessionCalanderByDistrict(n) {
                        this.districtSub && this.districtSub.unsubscribe(), this.isSearching = !0, this.districtSub = this.appointmentV2.getSessionCalanderByDistrict(n).subscribe(n => {
                            this.resetFilterAndData(), this.isSearching = !1, this.centerList = n.centers, this.backupCenterList = U.cloneDeep(this.centerList), this.centerList.sort((n, t) => n.name.toLowerCase() > t.name.toLowerCase() ? 1 : t.name.toLowerCase() > n.name.toLowerCase() ? -1 : 0), this.setCalenderEmptySessions()
                        })
                    }
                    resetFilterAndData() {
                        this.centerList = [], this.availableSlots = [], this.appointmentForm.get("minAgeFilter").setValue(""), this.appointmentForm.get("age1844Filter").setValue(""), this.appointmentForm.get("maxAgeFilter").setValue(""), this.appointmentForm.get("covaxinFilter").setValue(""), this.appointmentForm.get("sputnikFilter").setValue(""), this.appointmentForm.get("covishieldFilter").setValue(""), this.appointmentForm.get("freeFilter").setValue(""), this.appointmentForm.get("paidFilter").setValue(""), this.filter_age_txt = "", this.filter_paid_txt = "", this.filter_vaccine_txt = "", this.activeSlotId = "", this.appointmentForm.get("center_id").setValue(null), this.isCenterSelected = !1, this.confirmAppointmentDetails.slotDetails = null
                    }
                    setCalenderEmptySessions() {
                        let n = this.appointmentForm.get("minAgeFilter").value,
                            t = this.appointmentForm.get("age1844Filter").value,
                            e = this.appointmentForm.get("maxAgeFilter").value,
                            i = this.appointmentForm.get("covaxinFilter").value,
                            o = this.appointmentForm.get("covishieldFilter").value,
                            a = this.appointmentForm.get("sputnikFilter").value,
                            c = this.appointmentForm.get("freeFilter").value,
                            l = this.appointmentForm.get("paidFilter").value;
                        this.mv_isEmpty = !0, this.centerList.map((r, b) => {
                            r.addressString = this.makeAddressString(r), r.timeString = this.makeTimeString(r), this.utilsService.isPresent(n) && this.utilsService.isPresent(e) && this.utilsService.isPresent(t) ? r.sessions = r.sessions.filter(n => n.min_age_limit >= 0) : this.utilsService.isPresent(n) && this.utilsService.isPresent(e) ? r.sessions = r.sessions.filter(n => !this.utilsService.isPresent(n.max_age_limit)) : this.utilsService.isPresent(n) && this.utilsService.isPresent(t) ? r.sessions = r.sessions.filter(t => t.min_age_limit >= n && t.min_age_limit < 45 || this.utilsService.isPresent(t.max_age_limit)) : this.utilsService.isPresent(e) && this.utilsService.isPresent(t) ? r.sessions = r.sessions.filter(n => n.min_age_limit == e || this.utilsService.isPresent(n.max_age_limit)) : this.utilsService.isPresent(n) ? r.sessions = r.sessions.filter(t => t.min_age_limit >= n && t.min_age_limit < 45 && !this.utilsService.isPresent(t.max_age_limit)) : this.utilsService.isPresent(e) ? r.sessions = r.sessions.filter(n => n.min_age_limit == e && !this.utilsService.isPresent(n.max_age_limit)) : this.utilsService.isPresent(t) && (r.sessions = r.sessions.filter(n => n.min_age_limit >= 18 && this.utilsService.isPresent(n.max_age_limit) && 44 == n.max_age_limit)), this.utilsService.isPresent(i) && this.utilsService.isPresent(o) && this.utilsService.isPresent(a) ? r.sessions = r.sessions.filter(n => n.vaccine == i || n.vaccine == o || n.vaccine == a) : this.utilsService.isPresent(i) && this.utilsService.isPresent(o) ? r.sessions = r.sessions.filter(n => n.vaccine == i || n.vaccine == o) : this.utilsService.isPresent(i) && this.utilsService.isPresent(a) ? r.sessions = r.sessions.filter(n => n.vaccine == i || n.vaccine == a) : this.utilsService.isPresent(o) && this.utilsService.isPresent(a) ? r.sessions = r.sessions.filter(n => n.vaccine == o || n.vaccine == a) : this.utilsService.isPresent(i) ? r.sessions = r.sessions.filter(n => n.vaccine == i) : this.utilsService.isPresent(o) || this.utilsService.isPresent(o) ? r.sessions = r.sessions.filter(n => n.vaccine == o) : this.utilsService.isPresent(a) && (r.sessions = r.sessions.filter(n => n.vaccine == a)), this.utilsService.isPresent(c) && this.utilsService.isPresent(l) ? r.sessions = r.sessions.filter(n => r.fee_type == c || r.fee_type == l) : this.utilsService.isPresent(c) ? r.sessions = r.sessions.filter(n => r.fee_type == c) : this.utilsService.isPresent(l) && (r.sessions = r.sessions.filter(n => r.fee_type == l)), r.sessions.sort(function(n, t) {
                                return new Date(n.date) - new Date(t.date)
                            });
                            let d = this.dateRangeLength;
                            (0 == this.utilsService.isPresent(d) || d > 7) && (d = 7);
                            let g = U.clone(this.selectedDate),
                                p = [],
                                P = 0,
                                M = null,
                                _ = 0;
                            for (let n = 0; n < d; n++) {
                                let n = [],
                                    t = r.sessions[P];
                                if (this.utilsService.isPresent(t) && (t.available_capacity = Math.round(t.available_capacity)), this.utilsService.isPresent(t) && t.date == s(g, this.dateFormat).format(this.dateFormat)) {
                                    n.push(t), P++, !M && M <= 0 && (M = t.min_age_limit);
                                    let e = r.sessions[P];
                                    for (; this.utilsService.isPresent(e) && e.date == s(g, this.dateFormat).format(this.dateFormat);) n.push(e), P++, e = r.sessions[P];
                                    n.sort((n, t) => n.vaccine.toLowerCase() > t.vaccine.toLowerCase() ? 1 : t.vaccine.toLowerCase() > n.vaccine.toLowerCase() ? -1 : 0), p.push(n), t.date == this.selectedDate && n.length > 0 && (this.mv_isEmpty = !1)
                                } else p.push([{
                                    date: s(g, this.dateFormat).format(this.dateFormat),
                                    available_capacity: 0,
                                    session_id: ""
                                }]), _++;
                                g = s(g, this.dateFormat).add(1, "days").format(this.dateFormat)
                            }
                            M && M > 0 && (r.age_limit = M), r.isEmpty = _ == d, r.newSessions = p
                        }), this.centerList = this.centerList.filter(n => 0 == n.isEmpty)
                    }
                    onSlideRangeChange(n) {
                        if (this.utilsService.isPresent(n)) {
                            let t = this.sliderDates[n[0]];
                            this.dateRangeLength = n.length, this.showDateData(t)
                        }
                    }
                    searchpinChanged(n) {
                        this.searchType = "Pincode" == this.searchType ? "District" : "Pincode"
                    }
                    getScreenSize(n, t = !1) {
                        let e = window.innerWidth;
                        e >= 1200 || e >= 1024 ? (this.dateRangeLength = 7, this.itemsPerSlide = 7) : e >= 768 || e >= 568 ? (this.dateRangeLength = 6, this.itemsPerSlide = 6) : e >= 375 ? (this.dateRangeLength = 5, this.itemsPerSlide = 5) : e >= 320 || e <= 320 ? (this.dateRangeLength = 4, this.itemsPerSlide = 4) : (this.dateRangeLength = 7, this.itemsPerSlide = 7), t && window.location.reload()
                    }
                    screenChanged() {
                        this.getScreenSize(null, !0)
                    }
                    filterData(n, t, e) {
                        this.utilsService.isPresent(t) || (t = {
                            target: {
                                checked: e
                            }
                        }), t.target.checked ? (18 == n && this.appointmentForm.get("minAgeFilter").setValue(n), 1844 == n && this.appointmentForm.get("age1844Filter").setValue(n), 45 == n && this.appointmentForm.get("maxAgeFilter").setValue(n), "COVISHIELD" == n && this.appointmentForm.get("covishieldFilter").setValue(n), "COVAXIN" == n && this.appointmentForm.get("covaxinFilter").setValue(n), "SPUTNIK V" == n && this.appointmentForm.get("sputnikFilter").setValue(n), "Free" == n && this.appointmentForm.get("freeFilter").setValue(n), "Paid" == n && this.appointmentForm.get("paidFilter").setValue(n)) : (18 == n && this.appointmentForm.get("minAgeFilter").setValue(""), 1844 == n && this.appointmentForm.get("age1844Filter").setValue(""), 45 == n && this.appointmentForm.get("maxAgeFilter").setValue(""), "COVISHIELD" == n && this.appointmentForm.get("covishieldFilter").setValue(""), "COVAXIN" == n && this.appointmentForm.get("covaxinFilter").setValue(""), "SPUTNIK V" == n && this.appointmentForm.get("sputnikFilter").setValue(""), "Free" == n && this.appointmentForm.get("freeFilter").setValue(""), "Paid" == n && this.appointmentForm.get("paidFilter").setValue("")), this.getFilterValue(), this.centerList = U.cloneDeep(this.backupCenterList), this.setCalenderEmptySessions()
                    }
                    tabChanged(n) {
                        2 == n.index && (this.showTables = !1, this.appointmentV2.seachTabChanged.next(n.index))
                    }
                    mv_selectDate(n, t) {
                        this.selectedDate = n.value, this.loadCentersByAvailableData()
                    }
                    getFilterValue() {
                        if (this.utilsService.isPresent(this.vaccineName)) this.filter_vaccine_txt = this.vaccineName;
                        else {
                            let n = this.appointmentForm.get("covishieldFilter").value,
                                t = this.appointmentForm.get("covaxinFilter").value,
                                e = this.appointmentForm.get("sputnikFilter").value,
                                i = [];
                            this.utilsService.isPresent(n) && i.push(n), this.utilsService.isPresent(t) && i.push(t), this.utilsService.isPresent(e) && i.push(e), this.filter_vaccine_txt = i.length > 0 ? i.join(", ") : ""
                        }
                        let n = this.appointmentForm.get("freeFilter").value,
                            t = this.appointmentForm.get("paidFilter").value,
                            e = [];
                        this.utilsService.isPresent(t) && e.push(t), this.utilsService.isPresent(n) && e.push(n), this.filter_paid_txt = e.length > 0 ? e.join(", ") : "";
                        let i = this.appointmentForm.get("minAgeFilter").value,
                            o = this.appointmentForm.get("maxAgeFilter").value,
                            a = this.appointmentForm.get("age1844Filter").value,
                            c = [];
                        this.utilsService.isPresent(i) && c.push(i + "+"), this.utilsService.isPresent(a) && c.push("18-44"), this.utilsService.isPresent(o) && c.push(o + "+"), this.filter_age_txt = c.length > 0 ? c.join(", ") : ""
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(M.Lb(K.a), M.Lb(F.a), M.Lb(o.c))
                }, n.\u0275cmp = M.Fb({
                    type: n,
                    selectors: [
                        ["appointment-table"]
                    ],
                    hostBindings: function(n, t) {
                        1 & n && M.Xb("orientationchange", function(n) {
                            return t.screenChanged(n)
                        }, !1, M.uc)
                    },
                    decls: 8,
                    vars: 1,
                    consts: [
                        ["appScrollbarTheme", ""],
                        ["rel", "stylesheet", "href", M.Lc("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css")],
                        ["rel", "stylesheet", "href", M.Lc("https://unpkg.com/ngx-bootstrap/datepicker/bs-datepicker.css")],
                        [1, "page-wrapper"],
                        [1, "register-wrap"],
                        [1, "padding-0"],
                        [4, "ngIf"],
                        ["size-lg", "8", "size-md", "12", "size-sm", "12", "size-xs", "12", "offset-lg", "2", 1, "register-box"],
                        ["size-lg", "12", "size-md", "12", "size-sm", "12", "size-xs", "12", "role", "presentation", "tabindex", "0", 1, "register-header"],
                        [3, "formGroup"],
                        ["mat-align-tabs", "center", "animationDuration", "0ms", 1, "tab-group", 3, "selectedTabChange"],
                        ["tabindex", "0", 1, "mt-tab", "accessibility-plugin-ac", 3, "label"],
                        ["size-lg", "6", "size-md", "6", "size-sm", "12", "size-xs", "12", "class", "col-padding filerandsearchblock margin0auto", "style", "display:table !important;", 4, "ngIf"],
                        ["size-lg", "12", "size-md", "12", "size-sm", "12", "size-xs", "12", "class", "col-padding accessibility-plugin-a", 4, "ngIf"],
                        [1, "searchBox"],
                        [1, "pullleft", "nopaddingcls", "col-sm-6", "col-md-6", "col-xs-12"],
                        ["appearance", "standard", 1, "search-select"],
                        ["tabindex", "0", "formControlName", "state_id", "aria-required", "true", 3, "placeholder", "selectionChange"],
                        [3, "value", 4, "ngFor", "ngForOf"],
                        ["class", "error-text", 4, "ngIf"],
                        [1, "pullleft", "nopaddingcls", "col-sm-6", "col-md-6", "col-xs-12", "search-by-pin-wrapper"],
                        ["appearance", "standard", 1, "pin-search", "select-dist", "margin0"],
                        ["tabindex", "0", "formControlName", "district_id", "aria-required", "true", 3, "placeholder"],
                        [1, "pinbtncover", "pt-4"],
                        ["tabindex", "0", 1, "searchBtn", "pin-search-btn", "district-search", 3, "click"],
                        ["tabindex", "0", 1, "accessibility-plugin-ac", 3, "label"],
                        ["size", "12"],
                        ["class", "col-12 mb-4 noteTextMobile", 4, "ngIf"],
                        ["class", "filter-section mb-4", 4, "ngIf"],
                        ["class", "col-12 mb-4 noteTextDesktop", 4, "ngIf"],
                        ["class", "dayview-mobile", 4, "ngIf"],
                        [1, "mobile-hide"],
                        ["class", "pullleft col-lg-3 col-md-3 col-sm-1 col-xs-1", 4, "ngIf"],
                        ["class", "pullleft availablitymobile col-padding col-lg-9 col-md-9 col-sm-9 col-xs-12", 4, "ngIf"],
                        ["size-lg", "12", "size-md", "12", "size-sm", "12", "size-xs", "12", "class", "col-padding matlistingblock", 4, "ngIf"],
                        ["size-lg", "6", "size-md", "6", "size-sm", "12", "size-xs", "12", 1, "col-padding", "filerandsearchblock", "margin0auto", 2, "display", "table !important"],
                        [1, "pin-search"],
                        ["tabindex", "0", "maxlength", "6", "numbersOnly", "", "appInputChar", "pincode", "autocomplete", "off", "formControlName", "pincode", "matInput", "", "type", "search", "aria-required", "true", 1, "pintextbox", 3, "placeholder", "change", "keyup"],
                        ["class", "pinbtncover accessibility-plugin-a", 4, "ngIf"],
                        [1, "error-text"],
                        [1, "pinbtncover", "accessibility-plugin-a"],
                        ["tabindex", "0", 1, "searchBtn", "pin-search-btn", "accessibility-plugin-ac", 3, "click"],
                        ["size-lg", "12", "size-md", "12", "size-sm", "12", "size-xs", "12", 1, "col-padding", "accessibility-plugin-a"],
                        [3, "value"],
                        [1, "col-12", "mb-4", "noteTextMobile"],
                        [1, "walkin-note"],
                        [1, "icon-information-outline"],
                        [1, "walkin-msg"],
                        [1, "accessibility-plugin-ac"],
                        [1, "timing", "accessibility-plugin-ac"],
                        [1, "icon-pedestrian-walking"],
                        [3, "innerHTML"],
                        [1, "accessibility-plugin-ac", 3, "innerHTML"],
                        [1, "filter-section", "mb-4"],
                        [1, "search-with-walkin"],
                        ["tabindex", "0", 1, "search-title", "accessibility-plugin-ac"],
                        ["tabindex", "0", 1, "center-count", "accessibility-plugin-ac"],
                        [1, "show-result"],
                        ["class", "show-result__text accessibility-plugin-ac", "aria-label", "Showing Results For", "tabindex", "0", 4, "ngIf"],
                        [1, "filter-result"],
                        ["aria-label", "Filter results by", "tabindex", "0", 1, "filter-result__text", "accessibility-plugin-ac"],
                        ["aria-label", "Age", "tabindex", "0", 1, "accessibility-plugin-ac"],
                        [1, "agefilterblock"],
                        [1, "form-check"],
                        ["type", "checkbox", "id", "c1", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c1", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["type", "checkbox", "id", "ca1", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "ca1", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["type", "checkbox", "id", "c2", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c2", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["aria-label", "Cost", "tabindex", "0", 1, "accessibility-plugin-ac"],
                        ["type", "checkbox", "id", "c6", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c6", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["type", "checkbox", "id", "c7", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c7", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["aria-label", "Showing Results For", "tabindex", "0", 1, "show-result__text", "accessibility-plugin-ac"],
                        ["tabindex", "0", 1, "label-search", "accessibility-plugin-ac"],
                        ["aria-label", "Vaccine", "tabindex", "0", 1, "accessibility-plugin-ac"],
                        ["class", "form-check", 4, "ngIf"],
                        ["type", "checkbox", "id", "c3", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c3", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["type", "checkbox", "id", "c4", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c4", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        ["type", "checkbox", "id", "c5", 1, "chk-btn", 3, "checked", "change"],
                        ["for", "c5", "tabindex", "0", 1, "accessibility-plugin-ac", 3, "keydown.enter"],
                        [1, "col-12", "mb-4", "noteTextDesktop"],
                        [1, "accessibility-plugin-ac", "walkin-ava"],
                        [1, "accessibility-plugin-ac", "dose1-vaccine"],
                        [1, "dayview-mobile"],
                        [2, "clear", "both"],
                        [1, "availability-box-mobile"],
                        [1, "availability-date-ul-mobile"],
                        ["class", "less-slot", 3, "ngClass", 4, "ngFor", "ngForOf"],
                        [4, "ngFor", "ngForOf"],
                        ["class", "col-12", 4, "ngIf"],
                        [1, "less-slot", 3, "ngClass"],
                        [3, "routerLink", "click"],
                        [1, "date-txt"],
                        ["class", "seperator-box ion-text-start", 4, "ngIf"],
                        [1, "seperator-box", "ion-text-start"],
                        [1, "col-12", "padding-lr"],
                        [1, "card-box"],
                        [1, "appointment-info", "row-disp"],
                        [1, "center-name-box"],
                        [1, "center-name-title"],
                        [1, "center-name-text"],
                        [1, "vaccine-name-box"],
                        [1, "vaccine-cnt"],
                        [1, "name"],
                        [1, "vaccine-list"],
                        ["class", "free-button", 4, "ngIf"],
                        ["class", "paid-button", 4, "ngIf"],
                        [1, "dose-block"],
                        [1, "dose-block-2"],
                        [1, "dose-info"],
                        [1, "filter-block"],
                        ["class", "age18 filter", 4, "ngIf"],
                        ["class", "age45 filter", 4, "ngIf"],
                        [1, "dose1-block"],
                        [1, "dose-title"],
                        ["class", "available-slot", 4, "ngIf"],
                        ["class", "less-slot", 4, "ngIf"],
                        ["class", "booked-slot", "title", "Fully Booked", 4, "ngIf"],
                        [1, "dose2-block"],
                        [1, "free-button"],
                        [1, "paid-button"],
                        [1, "age18", "filter"],
                        [1, "age45", "filter"],
                        [1, "available-slot"],
                        [1, "less-slot"],
                        ["title", "Fully Booked", 1, "booked-slot"],
                        [1, "col-12"],
                        [1, "not-availble-cnt"],
                        [1, ""],
                        ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-file-earmark-text", "empty-cnt"],
                        ["d", "M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"],
                        ["d", "M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"],
                        [1, "pullleft", "col-lg-3", "col-md-3", "col-sm-1", "col-xs-1"],
                        [1, "pullleft", "availablitymobile", "col-padding", "col-lg-9", "col-md-9", "col-sm-9", "col-xs-12"],
                        [1, "availability-box"],
                        [1, "availability-main-field"],
                        [1, "availability-date-ul"],
                        [3, "itemsPerSlide", "noWrap", "interval", "singleSlideOffset", "showIndicators", "startFromIndex", "slideRangeChange"],
                        ["size-lg", "2", "size-md", "2", "size-sm", "2", "size-xs", "2", 1, "availability-date"],
                        ["size-lg", "12", "size-md", "12", "size-sm", "12", "size-xs", "12", 1, "col-padding", "matlistingblock"],
                        [1, "center-box"],
                        [1, "mat-main-field", "center-main-field"],
                        ["style", "color: black;", "class", "appointment-msg", 4, "ngIf"],
                        [3, "ngClass"],
                        ["class", "row", 4, "ngFor", "ngForOf"],
                        [1, "appointment-msg", 2, "color", "black"],
                        [1, "available-para", 2, "margin", "auto"],
                        [1, "row"],
                        [1, "col-sm-12", "col-md-12", "col-lg-12", 2, "border-bottom", "1px solid #e7e7e7", "padding", "10px 0px !Important"],
                        [1, "main-slider-wrap", "col", "col-lg-3", "col-md-3", "col-sm-3", "col-xs-12"],
                        [1, "row-disp"],
                        ["class", "vaccine-list", 4, "ngIf"],
                        [1, "slot-available-main", "col-padding", "col", "col-lg-9", "col-md-9", "col-sm-9", "col-xs-12"],
                        [1, "slot-available-wrap"],
                        ["class", "slots-box no-available", 4, "ngIf"],
                        ["class", "slots-box no-seat", 4, "ngIf"],
                        ["class", "slots-box less-seat", 4, "ngIf"],
                        ["class", "slots-box", 4, "ngIf"],
                        [1, "slots-box", "no-available"],
                        ["tooltip", "No Session Available", "theme", "light", "placement", "top", "show-delay", "100", 1, "vaccine-box", "vaccine-box1", 3, "ngClass"],
                        [3, "title"],
                        [1, "slots-box", "no-seat"],
                        [1, "name", "nopad"],
                        [1, "vaccine-box", "vaccine-box1", 3, "ngClass"],
                        ["tooltip", "Fully Booked", "placement", "top", "show-delay", "100", 3, "title"],
                        ["title", "Age", 1, "age-limit"],
                        [1, "slots-box", "less-seat"],
                        [1, "dosetotal"],
                        ["tooltip", "Dose 1", "theme", "light", "placement", "top", "show-delay", "100", 3, "title"],
                        [1, "totalslts"],
                        ["tooltip", "Dose 2", "theme", "light", "placement", "top", "show-delay", "100", 3, "title"],
                        [1, "age-limit"],
                        [1, "slots-box"]
                    ],
                    template: function(n, t) {
                        1 & n && (M.Qb(0, "div", 0), M.Mb(1, "link", 1), M.Mb(2, "link", 2), M.Qb(3, "div", 3), M.Qb(4, "div", 4), M.Qb(5, "div", 5), M.Qb(6, "div"), M.Ec(7, ft, 47, 33, "ng-container", 6), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n && (M.zb(7), M.ic("ngIf", t.bookAppointment))
                    },
                    directives: [i.l, W.u, W.n, W.g, Y.b, Y.a, j.c, $.a, W.m, W.e, i.k, Z.a, W.b, J.a, W.i, q.a, nn.a, tn.h, i.j, o.f, V.a, V.c],
                    pipes: [R.b, en.a],
                    styles: ['@charset "UTF-8";.no-padding[_ngcontent-%COMP%]{padding:0}ion-item[_ngcontent-%COMP%]::part(native){--padding-start:0}form[_ngcontent-%COMP%]   .register-beneficiary-form[_ngcontent-%COMP%]{margin:0 15px;padding-bottom:0}@media only screen and (min-width:320px) and (max-width:768px){form[_ngcontent-%COMP%]   .register-beneficiary-form[_ngcontent-%COMP%]{margin:0}}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .seperator[_ngcontent-%COMP%]{padding-top:15px;border-bottom:4px solid #707070}form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%]{--border-color:transparent;--border-width:0}form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--highlight-height:0px}.capture-image[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .item-select[_ngcontent-%COMP%]{--background:transparent}.capture-image[_ngcontent-%COMP%]{--color:#002060;width:auto;height:43px;--border-width:1px;--border-color:#002060;--border-style:solid;margin-top:0}.capture-image[_ngcontent-%COMP%]   .button-inner[_ngcontent-%COMP%]{display:block}.capture-image__tick[_ngcontent-%COMP%]{--color:#2e9a00;--border-color:#2e9a00}.capture-image[_ngcontent-%COMP%]   .icon-icon-tick[_ngcontent-%COMP%]{font-size:15px}.capture-image[_ngcontent-%COMP%]   .icon-attachment[_ngcontent-%COMP%]{font-size:20px;margin-top:-1px;float:left}@media only screen and (min-width:320px) and (max-width:374px){.capture-image[_ngcontent-%COMP%]   .icon-attachment[_ngcontent-%COMP%]{font-size:15px}}.capture-image[_ngcontent-%COMP%]   .icon-qrcode[_ngcontent-%COMP%]{font-size:25px}.capture-image[_ngcontent-%COMP%]   .attchtext[_ngcontent-%COMP%]{margin-left:5px;font-size:16px}@media only screen and (min-width:320px) and (max-width:374px){.capture-image[_ngcontent-%COMP%]   .attchtext[_ngcontent-%COMP%]{font-size:13px}}.capture-image[_ngcontent-%COMP%]   .icon-icon-view[_ngcontent-%COMP%]{font-size:15px;right:auto;top:auto}@media only screen and (min-width:320px) and (max-width:767px){.capture-image[_ngcontent-%COMP%]{margin-top:10px}}.extra-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.extra-notes[_ngcontent-%COMP%]{margin-bottom:10px}.icon-icon-circular-arrow[_ngcontent-%COMP%]{position:absolute;right:10px;top:0;line-height:55px;color:#002060;cursor:pointer;z-index:999!important}ion-item[_ngcontent-%COMP%]::part(native){--padding-end:0}.text-center[_ngcontent-%COMP%]{text-align:center}.register-wrap[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-top:0;text-align:center}@media only screen and (min-width:320px) and (max-width:374px){.register-wrap[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:17px;margin-top:0;margin-bottom:20px}}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin-top:0;margin-bottom:20}}.register-wrap[_ngcontent-%COMP%]   .register-box[_ngcontent-%COMP%]{margin-top:0;padding:20px;background:#fff}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .register-box[_ngcontent-%COMP%]{margin-top:0;box-shadow:none;border-radius:0;padding:10px 0}}.register-wrap[_ngcontent-%COMP%]   .pintextbox[_ngcontent-%COMP%]{border:1px solid #ccc;padding:8px 15px!important;width:90%;float:left;border-radius:20px}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pintextbox[_ngcontent-%COMP%]{width:88%;float:none}}.register-wrap[_ngcontent-%COMP%]   .filerandsearchblock[_ngcontent-%COMP%]{display:flex;margin:15px auto;width:48%}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .filerandsearchblock[_ngcontent-%COMP%]{display:block;width:100%}}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]{display:block;width:100%;justify-content:center;margin:0;float:left}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]{display:block;width:100%}}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{float:left}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%]{width:100%;margin:0}}.register-wrap[_ngcontent-%COMP%]   .pinbtncover[_ngcontent-%COMP%]{float:none;display:flex}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pinbtncover[_ngcontent-%COMP%]{width:100%;float:none;margin:0 auto}}.register-wrap[_ngcontent-%COMP%]   .covid-button-desktop[_ngcontent-%COMP%]   .register-aadhaar[_ngcontent-%COMP%]{width:auto;margin:20px 0 10px}.register-wrap[_ngcontent-%COMP%]   .covid-button-desktop[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]{width:150px}.register-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%;text-align:center;position:relative;margin:0}.register-wrap[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{position:relative;padding:10px;background:#fff;display:inline-block;z-index:1;color:#333;margin:0;font-size:14px}.register-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(0,32,96,.1568627450980392);z-index:0}.register-wrap[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]::part(native){--padding-end:0}.register-wrap[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}.register-wrap[_ngcontent-%COMP%]   .mat-main-field[_ngcontent-%COMP%]{margin-right:-16px;--min-height:20px;max-height:500px;overflow-y:auto}.register-wrap[_ngcontent-%COMP%]   .col-padding[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.register-wrap[_ngcontent-%COMP%]   .vacc-detail[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}@media only screen and (min-width:320px) and (max-width:991px){.register-wrap[_ngcontent-%COMP%]   .vacc-detail[_ngcontent-%COMP%]{margin-bottom:5px}}.register-wrap[_ngcontent-%COMP%]   .labelClass[_ngcontent-%COMP%]{color:#2e2e2e;font-size:14px;text-align:left;font-weight:400}@media only screen and (min-width:992px) and (max-width:1024px){.register-wrap[_ngcontent-%COMP%]   .labelClass[_ngcontent-%COMP%]{font-size:10.5px}}@media only screen and (min-width:1025px) and (max-width:1199px){.register-wrap[_ngcontent-%COMP%]   .labelClass[_ngcontent-%COMP%]{font-size:11.5px}}.register-wrap[_ngcontent-%COMP%]   .valueClass[_ngcontent-%COMP%]{color:#2e2e2e;font-size:14px;text-align:left;margin-left:5px;font-weight:700}@media only screen and (min-width:992px) and (max-width:1024px){.register-wrap[_ngcontent-%COMP%]   .valueClass[_ngcontent-%COMP%]{font-size:10.5px}}@media only screen and (min-width:1025px) and (max-width:11199px){.register-wrap[_ngcontent-%COMP%]   .valueClass[_ngcontent-%COMP%]{font-size:11.5px;font-weight:500}}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .book-appoinment-header[_ngcontent-%COMP%]{padding-top:35px}}.register-wrap[_ngcontent-%COMP%]   .book-appoinment-header[_ngcontent-%COMP%]   h5.book-appointment[_ngcontent-%COMP%]{padding:0 0 15px!important;font-size:18px;color:#333;font-weight:700}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .book-appoinment-header[_ngcontent-%COMP%]   h5.book-appointment[_ngcontent-%COMP%]{font-size:17px;font-weight:600;display:none}}.register-wrap[_ngcontent-%COMP%]   .book-appoinment-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#7f7f7f;margin:10px 0 0}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .book-appoinment-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}}.register-wrap[_ngcontent-%COMP%]   .covid-button-desktop.book-btn-end[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.register-wrap[_ngcontent-%COMP%]   .success-msg[_ngcontent-%COMP%]{font-size:18px;text-align:left}.register-wrap[_ngcontent-%COMP%]   .checkmark-circle-outline[_ngcontent-%COMP%]{font-size:40px;color:#2e9a00}.register-wrap[_ngcontent-%COMP%]   .center-cap[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .center-date[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .center-name[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .center-time[_ngcontent-%COMP%]{margin-right:15px}.register-wrap[_ngcontent-%COMP%]   .new-app[_ngcontent-%COMP%]{width:auto}.register-wrap[_ngcontent-%COMP%]   .tbl-header[_ngcontent-%COMP%]{margin-left:15px}.register-wrap[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]{width:100%;padding-top:0}.register-wrap[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{height:auto;border-bottom:1px solid #eaeaea;margin-bottom:0;border-radius:0}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{border-bottom:0}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]{padding:0}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]{padding:0}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{background-color:initial;font-size:13px;font-weight:400;color:#002060;padding:0;line-height:20px;text-transform:uppercase}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .center-name-title[_ngcontent-%COMP%]{color:#002060}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#333;margin-bottom:0;margin-top:0;font-weight:400}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;margin-top:0}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .center-name-text[_ngcontent-%COMP%]{color:#998fa2}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .center-name-text[_ngcontent-%COMP%]{display:none}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .danger-red[_ngcontent-%COMP%]{color:#ad0000;text-align:left;margin-left:20px}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .danger-red[_ngcontent-%COMP%]{text-align:center;margin-left:0}}.register-wrap[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:100%;color:#ad0000}.resend[_ngcontent-%COMP%]{color:#333;font-size:15px;display:inline-block}.not-now[_ngcontent-%COMP%]{text-decoration:none;margin-right:0;color:#002060}@media only screen and (min-width:320px) and (max-width:767px){.not-now[_ngcontent-%COMP%]{font-size:12px}}.not-now[_ngcontent-%COMP%]:hover{color:#998fa2}.app_bookcls[_ngcontent-%COMP%], .app_bookcls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center!important}.app_bookcls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;font-size:17px}.app_bookcls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center!important}.customregist[_ngcontent-%COMP%]{width:1080px!important}.date-availability[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:10px 0;font-weight:400;color:#002060;font-size:16px;text-align:left;display:flex}.date-availability[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}.date-availability[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#333;text-align:left}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]{display:flex}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]{margin:0 5px;border:1px solid #c7c7c7;flex:1}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]:hover{background-color:rgba(0,32,96,.0392156862745098)}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]:first-child{margin-left:0}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]:last-child{margin-right:0}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]   .slide-head[_ngcontent-%COMP%]{font-size:14px;font-weight:600;border-bottom:1px solid #c7c7c7;padding:10px;background-color:#f9f9f9}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]:hover   .slide-head[_ngcontent-%COMP%]{background-color:rgba(0,32,96,.0392156862745098)}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]   .slide-cont[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]   .slide-cont[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:13px;display:inline-block;width:50%;border-right:1px solid #c7c7c7;padding:5px}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item[_ngcontent-%COMP%]   .slide-cont[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-right:0}.date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item.active[_ngcontent-%COMP%], .date-availability[_ngcontent-%COMP%]   .slider-wrap[_ngcontent-%COMP%]   .slide-item.active[_ngcontent-%COMP%]   .slide-head[_ngcontent-%COMP%]{background-color:rgba(0,32,96,.0392156862745098)}.time-slot[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin:10px 0;font-weight:600;color:#333;font-size:16px;text-align:left}.time-slot[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400}.time-slot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style-type:none;text-align:left}.time-slot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;color:#333;margin:0 0 10px}.list-head[_ngcontent-%COMP%]{margin:10px 0;font-weight:400;color:#002060;font-size:16px;text-align:left;display:flex}.list-head[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:5px}.list-availablity[_ngcontent-%COMP%]{border:1px solid #c7c7c7;border-radius:5px;padding:0 10px;margin-bottom:10px}.list-availablity[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{display:flex;align-items:center}.list-availablity[_ngcontent-%COMP%]   p.availablity[_ngcontent-%COMP%], .list-availablity[_ngcontent-%COMP%]   p.center-name[_ngcontent-%COMP%], .list-availablity[_ngcontent-%COMP%]   p.timing[_ngcontent-%COMP%]{text-align:left;margin:0;font-size:14px;color:#333}.list-availablity[_ngcontent-%COMP%]   .covid-button-desktop.book-btn[_ngcontent-%COMP%]   .vac-btn[_ngcontent-%COMP%]{width:80px;--background:transparent;--color:#002060;border:1px solid #002060;--box-shadow:none;border-radius:31px;font-size:14px;height:35px;font-weight:700;margin:10px 0}.list-availablity[_ngcontent-%COMP%]:nth-child(2n){background-color:rgba(0,32,96,.0392156862745098)}.mat-label[_ngcontent-%COMP%]{display:flex}.covid-button-desktop.book-btn[_ngcontent-%COMP%]   .vac-btn.confirm-btn[_ngcontent-%COMP%]{width:140px;margin-top:10px}.icon-box[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;position:absolute;right:3px;top:5px;text-align:right}@media only screen and (min-width:320px) and (max-width:767px){.icon-box[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px;position:relative;right:0;top:0;text-align:center}}.icon-box[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;margin-left:10px}.icon-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-size:16px}.thank-msg[_ngcontent-%COMP%]{text-align:left;margin:0;padding-bottom:0;color:#333;font-weight:600}.covid-button-desktop.book-btn[_ngcontent-%COMP%]   .vac-btn[_ngcontent-%COMP%], .covid-button-desktop[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]{width:130px;color:#002060;border:1px solid #002060;--border-radius:5px;border-radius:5px;--background:transparent;--box-shadow:0}.covid-button-desktop.book-btn[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]{--color:#333;border:1px solid #868686;--background:#f3f4f6;border-radius:31px;--box-shadow:none}.next-week[_ngcontent-%COMP%]{justify-content:flex-end}.next-week[_ngcontent-%COMP%], .prev-week[_ngcontent-%COMP%]{display:flex;text-decoration:none;font-size:14px;align-items:center;margin-bottom:15px;cursor:pointer}.prev-week[_ngcontent-%COMP%]{justify-content:flex-start}.custombtns[_ngcontent-%COMP%]{color:#002060!important}.register-vaccine-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#002060;font-size:24px}.register-vaccine-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;font-size:16px;margin-bottom:10px}.register-vaccine-header[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:100%;background-color:#fff;display:flex;align-items:center;justify-content:center;margin:-80px auto 0;box-shadow:0 2px 3px 0 rgba(0,0,0,.19)}.register-vaccine-header[_ngcontent-%COMP%]   .image-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;text-align:center}.register-main-box[_ngcontent-%COMP%]{margin-top:100px}div.blueTable[_ngcontent-%COMP%]{border:1px solid #dde4ff;width:100%;text-align:left;border-collapse:collapse}.divTable.blueTable[_ngcontent-%COMP%]   .divTableCell[_ngcontent-%COMP%], .divTable.blueTable[_ngcontent-%COMP%]   .divTableHead[_ngcontent-%COMP%]{border:0 solid #aaa;padding:10px;text-transform:capitalize}@media only screen and (min-width:320px) and (max-width:568px){.divTable.blueTable[_ngcontent-%COMP%]   .divTableCell[_ngcontent-%COMP%], .divTable.blueTable[_ngcontent-%COMP%]   .divTableHead[_ngcontent-%COMP%]{padding:10px 5px}}.divTable.blueTable[_ngcontent-%COMP%]   .divTableBody[_ngcontent-%COMP%]   .divTableCell[_ngcontent-%COMP%]{font-size:15px;color:#002060;font-weight:400}@media only screen and (min-width:320px) and (max-width:568px){.divTable.blueTable[_ngcontent-%COMP%]   .divTableBody[_ngcontent-%COMP%]   .divTableCell[_ngcontent-%COMP%]{font-size:13px}}.divTable.blueTable[_ngcontent-%COMP%]   .divTableHeading[_ngcontent-%COMP%]{background:#e8e5e5;background:linear-gradient(180deg,#eeebeb 0,#eae7e7 66%,#e8e5e5)}.divTable.blueTable[_ngcontent-%COMP%]   .divTableHeading[_ngcontent-%COMP%]   .divTableHead[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#002060}@media only screen and (min-width:320px) and (max-width:568px){.divTable.blueTable[_ngcontent-%COMP%]   .divTableHeading[_ngcontent-%COMP%]   .divTableHead[_ngcontent-%COMP%]{font-size:13px}}.blueTable[_ngcontent-%COMP%]   .tableFootStyle[_ngcontent-%COMP%]{font-size:14px}.blueTable[_ngcontent-%COMP%]   .tableFootStyle[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{text-align:right}.blueTable[_ngcontent-%COMP%]   .tableFootStyle[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;background:#1c6ea4;color:#fff;padding:2px 8px;border-radius:5px}.blueTable.outerTableFooter[_ngcontent-%COMP%]{border-top:none}.blueTable.outerTableFooter[_ngcontent-%COMP%]   .tableFootStyle[_ngcontent-%COMP%]{padding:3px 5px}.divTable[_ngcontent-%COMP%]{display:table}.divTableRow[_ngcontent-%COMP%]{display:table-row}.divTableCell[_ngcontent-%COMP%], .divTableHead[_ngcontent-%COMP%]{display:table-cell}.divTableHeading[_ngcontent-%COMP%]{display:table-header-group}.divTableFoot[_ngcontent-%COMP%]{display:table-footer-group}.divTableBody[_ngcontent-%COMP%]{display:table-row-group}.availability-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .center-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#002060;margin:0;text-align:left}.border-sperator[_ngcontent-%COMP%]{border-top:2px solid #cec7c7;margin-top:15px;padding:0}@media only screen and (min-width:320px) and (max-width:767px){.border-sperator[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:320px) and (max-width:767px){.availability-box[_ngcontent-%COMP%]{margin-top:0;padding-top:0}}.availability-date[_ngcontent-%COMP%]{display:inline-block;border:1px solid #eaeaea}.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#333;padding:10px;margin:0;text-align:center}@media only screen and (min-width:320px) and (max-width:768px){.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center}}.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{background:rgba(0,0,0,.04);border-bottom:1px solid #eaeaea;font-weight:600;padding:10px 7px!important}@media only screen and (min-width:320px) and (max-width:767px){.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{padding:0 8px}}@media only screen and (min-width:1035px) and (max-width:1118px){.availability-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child{height:80px}}.availability-date-ul[_ngcontent-%COMP%]{padding:0;margin:0}.carousel-active-slide[_ngcontent-%COMP%]{border-bottom:1px solid #002060}.carousel-active-slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#002060;background:#daebff!important}.date-availability-wrap[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}@media only screen and (min-width:320px) and (max-width:767px){.date-availability-wrap[_ngcontent-%COMP%]{height:auto}}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]{width:100%;margin:5px;border-radius:5px;display:flex;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .left-data[_ngcontent-%COMP%]{background-color:#f5f6f9;border-right:1px solid #bfbfbf;width:50%;display:flex;align-items:center}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .left-data[_ngcontent-%COMP%]   .center-date[_ngcontent-%COMP%]{font-size:13px;text-align:left;padding:10px;color:#333;font-weight:600;margin:0}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .left-data[_ngcontent-%COMP%]   .center-date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-transform:uppercase}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .left-data[_ngcontent-%COMP%]   .center-date[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{font-size:10px;font-weight:400}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]{width:100%;display:grid}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]:hover{background:#f3f4f6}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .available-capacity[_ngcontent-%COMP%]{font-size:13px;text-align:center;color:#2e9a00;font-weight:500}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .available-capacity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:15px}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;text-align:center;border-top:1px solid #bfbfbf}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:12px;text-align:center;padding:15px;width:50%;color:#333;font-weight:500;border-right:1px solid #bfbfbf;cursor:pointer}@media only screen and (min-width:320px) and (max-width:767px){.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px 0}}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#002060;color:#fff}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-right:0}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#002060;color:#fff;position:relative}.date-availability-wrap[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .right-data[_ngcontent-%COMP%]   .timings[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after{content:"\ue914";font-family:icomoon;color:#fff;font-size:8px;border-radius:100%;vertical-align:middle;margin:0 0 0 5px}.center-name-red[_ngcontent-%COMP%]{color:#ad0000}.center-main-field[_ngcontent-%COMP%]{margin-right:0!important;text-align:left;margin-left:0!important}.button-container[_ngcontent-%COMP%]{width:50%;display:inline-block;text-align:left}@media only screen and (min-width:320px) and (max-width:767px){.button-container[_ngcontent-%COMP%]{position:absolute;top:-20px;left:0}}.button-container__right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end}.or-separator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:12px auto;font-weight:500;font-size:18px;color:#002060}@media only screen and (min-width:320px) and (max-width:767px){.or-separator[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 auto}}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.available-para[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin-top:25px!important;text-align:center}@media only screen and (min-width:320px) and (max-width:767px){.available-para[_ngcontent-%COMP%]{font-size:13px;margin:40px 0 0!important;text-align:left}}.appointment-msg[_ngcontent-%COMP%]{--min-height:20px}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{top:15px!important}}.register-wrap[_ngcontent-%COMP%]   .pin-search-btn[_ngcontent-%COMP%]{color:#fff;cursor:pointer;margin:-10px 0 0 10px;font-weight:700}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search-btn[_ngcontent-%COMP%]{float:right;font-size:14px}}.book-apt-btn[_ngcontent-%COMP%]{float:right}.book-apt-btn[_ngcontent-%COMP%]   .vac-btn[_ngcontent-%COMP%]{border:1px solid #9cd2ff;--border-radius:31px;border-radius:31px;--background:transparent;color:#008cff;font-size:14px;height:33px;font-weight:700;--box-shadow:none;background-color:#daebff;--background-activated:rgba(218,235,255,0.6);--background-focused:rgba(218,235,255,0.6);--background-hover:rgba(218,235,255,0.6)}.register-wrap[_ngcontent-%COMP%]   .search-bar-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{padding:6px;border-bottom:1px solid #bfbfbf;display:inline-block}.register-wrap[_ngcontent-%COMP%]   .pin-search.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{border-bottom:1px solid #ad0000}.register-wrap[_ngcontent-%COMP%]   .pin-search.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element.ng-invalid[_ngcontent-%COMP%]{color:#ad0000}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:absolute;top:19px;left:15px}.register-wrap[_ngcontent-%COMP%]   .pin-search-btn[_ngcontent-%COMP%]{display:inline-block;color:#002060;border:1px solid #002060;--border-radius:5px;border-radius:5px;--background:transparent;height:32px;--padding-start:1.8em;--padding-end:1.8em;--box-shadow:none;margin-top:0;margin-left:10px;margin-bottom:10px;text-transform:capitalize}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search-btn[_ngcontent-%COMP%]{margin:10px 0;height:30px;width:100%}}.register-wrap[_ngcontent-%COMP%]   .pin-search-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{position:relative;top:0;left:0;color:#505050}.register-wrap[_ngcontent-%COMP%]   .search-select[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{padding:5px 5px 5px 0;border-bottom:1px solid #bfbfbf;border-radius:0}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .search-select[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{padding:8px 5px;font-size:12px}}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{padding:5px;border-bottom:1px solid #bfbfbf;border-radius:0}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{padding:8px 5px;font-size:12px}}.register-wrap[_ngcontent-%COMP%]   .pin-search-btn.district-search[_ngcontent-%COMP%]{margin-top:5px;margin-left:0;margin-bottom:10px}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .pin-search-btn.district-search[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}}.register-wrap[_ngcontent-%COMP%]   .pin-search.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .search-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{border:1px solid #ad0000}@media only screen and (min-width:320px) and (max-width:767px){.pin-district-radio[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%]{margin-right:15px}}.search-text[_ngcontent-%COMP%]{font-size:14px;margin:0 0 5px;color:#002060;text-align:right;display:block;position:absolute;right:5px;top:-5px}@media only screen and (min-width:320px) and (max-width:767px){.search-text[_ngcontent-%COMP%]{margin-top:0;top:-20px;font-size:13px}}.search-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#002060;text-decoration:none;margin-right:20px}.search-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#998fa2}.search-text-pin[_ngcontent-%COMP%]{margin-top:7px;text-align:right;position:absolute;right:5px;top:-5px}@media only screen and (min-width:320px) and (max-width:767px){.search-text-pin[_ngcontent-%COMP%]{margin-top:0;top:-18px}}.col-space[_ngcontent-%COMP%]{padding-left:0}@media only screen and (min-width:320px) and (max-width:767px){.col-space-mobile[_ngcontent-%COMP%]{padding-left:0}}@media only screen and (min-width:320px) and (max-width:767px){.center-align-cap[_ngcontent-%COMP%]{text-align:center}}.register-wrap[_ngcontent-%COMP%]   .register-header[_ngcontent-%COMP%]   h3.appoint-success[_ngcontent-%COMP%]{margin:0}.Hospital-name[_ngcontent-%COMP%]{text-align:left}.Hospital-name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:17px;color:#2e2e2e;margin:0;padding:0;font-weight:700;text-align:left}@media only screen and (min-width:320px) and (max-width:767px){.Hospital-name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:15px}}.Hospital-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#9f9f9f;margin:0 0 5px;font-weight:400;text-align:left}.vaccination-date[_ngcontent-%COMP%]{font-size:15px;color:#333;font-weight:600;margin:0;text-align:left}.time-slot-list[_ngcontent-%COMP%]{text-align:left}.time-slot-list[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{width:100%;color:#ad0000;font-size:14px;text-align:left;margin:0;padding:0}.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{--background:#fff;border:1px solid #707070;color:#2e2e2e;--border-radius:5px;border-radius:5px;font-size:15px;font-weight:700;--box-shadow:none;margin-right:10px;min-width:173px;max-width:173px}@media only screen and (min-width:320px) and (max-width:480px){.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{min-width:49%;max-width:49%;margin-right:5px;font-size:12px;margin-left:0}.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]:nth-child(2n){margin-right:0}}@media only screen and (min-width:481px) and (max-width:767px){.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{min-width:170px;max-width:170px;font-size:13px}}@media only screen and (min-width:768px) and (max-width:991px){.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]{min-width:170px;max-width:170px;font-size:13px}}.time-slot-list[_ngcontent-%COMP%]   .time-slot[_ngcontent-%COMP%]:last-child{margin-right:0}.paid-button[_ngcontent-%COMP%]{color:#fff;font-size:9px;font-weight:600;background-color:#2152b3;border-radius:20px;padding:2px 5px;margin-left:3px}@media only screen and (min-width:320px) and (max-width:767px){.paid-button[_ngcontent-%COMP%]{font-size:8px}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5.available-cls[_ngcontent-%COMP%]{background:#c5e0b4;padding:4px 20px;border-radius:3px;color:#0070c0;font-weight:500}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5.available-cls[_ngcontent-%COMP%]{padding:4px 10px;margin:0}}@media only screen and (min-width:320px) and (max-width:767px){.availability-box-wrap[_ngcontent-%COMP%]{float:right}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   p.available-cls-cnt[_ngcontent-%COMP%]{color:#707070;text-align:left;margin-left:20px}@media only screen and (min-width:320px) and (max-width:767px){.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   p.available-cls-cnt[_ngcontent-%COMP%]{text-align:center;margin-left:0}}.register-wrap[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   p.center-time[_ngcontent-%COMP%]{color:#0070c0;font-weight:500}.activeBtn[_ngcontent-%COMP%]{--background:rgba(132,147,177,0.2196078431372549)!important}.next-week-text[_ngcontent-%COMP%]{text-decoration:none;color:#002060}.next-week-text[_ngcontent-%COMP%]:hover{color:#998fa2}.slot-available-main[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0!important;float:left}.slot-available-main[_ngcontent-%COMP%]   .nopad[_ngcontent-%COMP%]{padding:0}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;display:flex;width:100%}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border:0;border-right:0;padding:5px 0;text-align:center;width:15%}@media only screen and (min-width:320px) and (max-width:374px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 0 5px;width:24.5%}}@media only screen and (min-width:375px) and (max-width:567px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 0 5px;width:20%}}@media only screen and (min-width:568px) and (max-width:767px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 6px 5px;width:17%}}@media only screen and (min-width:768px) and (max-width:1023px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 11px;width:16.5%}}@media only screen and (min-width:1024px) and (max-width:1199px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:10px 6px;width:14%}}@media only screen and (min-width:1200px) and (max-width:1399px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px 0;width:14%}}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slot-date[_ngcontent-%COMP%]{font-size:13px;color:#333;display:block}@media only screen and (min-width:320px) and (max-width:767px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slot-date[_ngcontent-%COMP%]{display:block;margin-bottom:5px}}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]{border-right:0;margin:0 auto;border-bottom:0}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   .vaccine-cnt[_ngcontent-%COMP%]{padding:0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   .vaccine-cnt[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:12px;color:#2e2e2e;margin:0;padding:0 0 3px;background:transparent}@media only screen and (min-width:320px) and (max-width:768px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   .vaccine-cnt[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:11px}}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   .vaccine-cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#9f9f9f;margin:0}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-box1[_ngcontent-%COMP%]{padding-bottom:5px;margin-bottom:5px}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   .vaccine-padding[_ngcontent-%COMP%]{padding-bottom:0;margin-bottom:0}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box.no-available[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#f3f3f3;color:#afafaf;border:1px solid #afafaf}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box.less-seat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ffbf00!important}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#2e2e2e;font-size:12px;font-weight:700;background-color:#a9d18e;padding:0;min-width:35px;text-align:center;display:flex;justify-content:center;align-items:center;border-radius:0;border:0}@media only screen and (min-width:320px) and (max-width:767px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:11px;min-width:24px}}@media only screen and (min-width:1024px) and (max-width:1199px){.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:11px}}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#c5e0b4}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box.no-seat[_ngcontent-%COMP%]   .vaccine-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ad0000;color:#fff;padding:0 5px}.slot-available-main[_ngcontent-%COMP%]   .slot-available-wrap[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .slots-box[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{color:#2e2e2e}@media screen and (min-width:812px) and (max-width:1150px){.slot-available-main[_ngcontent-%COMP%]{padding-left:15px!important}}@media only screen and (min-width:320px) and (max-width:767px){.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%]{padding:0!important}}.mobile-next-week-wrapper[_ngcontent-%COMP%]{display:none;display:block}@media only screen and (min-width:320px) and (max-width:767px){.mobile-next-week-wrapper[_ngcontent-%COMP%]{display:block}}.mobile-next-week-wrapper[_ngcontent-%COMP%]   .previous-week[_ngcontent-%COMP%]{float:left;display:none;font-size:14px;color:#002060}.mobile-next-week-wrapper[_ngcontent-%COMP%]   .previous-week[_ngcontent-%COMP%]:hover{color:#998fa2}@media only screen and (min-width:320px) and (max-width:767px){.mobile-next-week-wrapper[_ngcontent-%COMP%]   .previous-week[_ngcontent-%COMP%]{display:block}}.mobile-next-week-wrapper[_ngcontent-%COMP%]   .next-week[_ngcontent-%COMP%]{float:right;display:none;font-size:14px;color:#002060}.mobile-next-week-wrapper[_ngcontent-%COMP%]   .next-week[_ngcontent-%COMP%]:hover{color:#998fa2}@media only screen and (min-width:320px) and (max-width:767px){.mobile-next-week-wrapper[_ngcontent-%COMP%]   .next-week[_ngcontent-%COMP%]{display:block}}.error-text[_ngcontent-%COMP%]{margin-left:5px;color:#ad0000}.search-by-district-wrapper[_ngcontent-%COMP%]   .mat-form-field-invalid[_ngcontent-%COMP%], .search-by-pin-wrapper[_ngcontent-%COMP%]   .mat-form-field-invalid[_ngcontent-%COMP%]{margin-bottom:-18px}.search-by-district-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}@media only screen and (min-width:320px) and (max-width:767px){.search-by-district-wrapper[_ngcontent-%COMP%]{display:block}}@media only screen and (min-width:320px) and (max-width:767px){.mobile-hide[_ngcontent-%COMP%]{display:none}}.certi-text[_ngcontent-%COMP%]{font-size:14px;text-align:left}@media only screen and (min-width:320px) and (max-width:767px){.certi-text[_ngcontent-%COMP%]{font-size:12px}}.search-text-pin.search-mobile[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:320px) and (max-width:767px){.search-text-pin.search-mobile[_ngcontent-%COMP%]{display:block}}.search-text-pin[_ngcontent-%COMP%]{display:block}@media only screen and (min-width:320px) and (max-width:767px){.search-text-pin[_ngcontent-%COMP%]{display:none}}.back-arrow[_ngcontent-%COMP%]{padding-right:2px;font-size:28px;vertical-align:middle}@media only screen and (min-width:320px) and (max-width:767px){.back-arrow[_ngcontent-%COMP%]{font-size:22px}}.back-desktop[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:320px) and (max-width:767px){.back-desktop[_ngcontent-%COMP%]{display:block}}.custom-checkbox[_ngcontent-%COMP%]{width:50%;margin:0 auto}@media only screen and (min-width:320px) and (max-width:767px){.custom-checkbox[_ngcontent-%COMP%]{width:100%}}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%]{display:none}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{height:100%;width:100%;font-size:13px;font-weight:700}@media only screen and (min-width:320px) and (max-width:767px){.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{margin-bottom:10px}}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]{cursor:pointer;width:100%;height:40px;position:relative;background-color:#fff;color:#2e2e2e;transition:all .5s ease;padding:0;border-radius:50px;border:1px solid #2e2e2e}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:after, .custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:before{border-radius:50px;width:50%;display:flex;align-items:center;position:absolute;justify-content:center;transition:all .3s ease}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:before{height:45px;background-color:#002060;color:#fff;box-shadow:0 0 10px rgba(0,0,0,.16);left:0;top:-3px;z-index:10;content:attr(data-unchecked)}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:after{height:45px;right:0;content:attr(data-checked);padding-bottom:7px}@media only screen and (min-width:320px) and (max-width:767px){.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%] + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:after{padding-bottom:7px}}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]{background-color:#fff}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:after{left:0;content:attr(data-unchecked)}.custom-checkbox[_ngcontent-%COMP%]   input#status[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%] > .status-switch[_ngcontent-%COMP%]:before{color:#fff;left:50%;content:attr(data-checked)}.mat-form-field-label[_ngcontent-%COMP%]{font-size:15px;color:#2e2e2e}.covid-button-desktop.book-btn[_ngcontent-%COMP%]   .vac-btn.confirm-btn[_ngcontent-%COMP%]{--background:#002060;color:#fff;border:0;-webkit-appearance:none}.vacc-confirm-list[_ngcontent-%COMP%]{border:.5px solid #707070;border-radius:5px}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;list-style:none;padding:0}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px;border-bottom:.5px solid #707070}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;color:#2e2e2e;font-weight:700;text-align:left;display:flex;justify-content:space-between;margin-bottom:5px}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#002060}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#9f9f9f;font-weight:400;text-align:left;margin:0}.vacc-confirm-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:0}.add-member[_ngcontent-%COMP%]{text-align:right;margin:10px 0 0;font-size:14px;text-transform:uppercase;font-weight:700;cursor:pointer;color:#002060}.add-member[_ngcontent-%COMP%]:hover{color:#9f9f9f}.vac-detail-wrap[_ngcontent-%COMP%]{margin-bottom:15px}.hosp-name-wrap[_ngcontent-%COMP%]{padding-bottom:0}.appoint-detail[_ngcontent-%COMP%]{padding-left:0}@media only screen and (min-width:768px) and (max-width:991px){.col-space-tab[_ngcontent-%COMP%]{padding-left:0}}@media only screen and (min-width:320px) and (max-width:767px){.confirm-btn[_ngcontent-%COMP%]{height:30px!important}}.main-slider-wrap[_ngcontent-%COMP%]{display:block;float:left;align-items:center}.vaccine-list[_ngcontent-%COMP%]{margin-top:0}.vaccine-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}.vaccine-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;color:#998fa2;font-size:11px;line-height:14px;margin-right:10px;font-weight:600}.age-limit[_ngcontent-%COMP%]{color:#c20505;font-size:11px;text-transform:capitalize}.select-time-header[_ngcontent-%COMP%]{font-size:18px;font-weight:500;text-align:left;margin-top:20px;color:#c20505}.appointment-note[_ngcontent-%COMP%]{color:#2e2e2e;display:flex;margin:0 0 0 15px;font-size:14px}.pullleft[_ngcontent-%COMP%]{float:left}.mat-form-field-flex[_ngcontent-%COMP%]{background:transparent!important}.matlistingblock[_ngcontent-%COMP%]{display:table;width:100%}.margin0[_ngcontent-%COMP%], .matlistingblock[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin:0!important}.margin0[_ngcontent-%COMP%]{display:block!important}.searchdistwrper[_ngcontent-%COMP%]{display:block;width:50%}@media only screen and (min-width:320px) and (max-width:767px){.searchdistwrper[_ngcontent-%COMP%]{width:100%}}@media only screen and (min-width:320px) and (max-width:767px){.nopaddingcls[_ngcontent-%COMP%]{padding:0!important}}.agefilterblock[_ngcontent-%COMP%]{display:inherit;margin:0 0 20px;width:100%;justify-content:center}@media only screen and (min-width:320px) and (max-width:767px){.agefilterblock[_ngcontent-%COMP%]{display:table}}.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{margin:0;cursor:pointer}@media only screen and (min-width:320px) and (max-width:767px){.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{margin-bottom:10px;padding-left:5px}}.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}@media only screen and (min-width:320px) and (max-width:767px){.agefilterblock[_ngcontent-%COMP%]{width:100%;text-align:left;margin:20px 0}}.agefilterblock[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ccc;padding:6.7px;border-radius:5px}.search-by-district-wrapper[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding-bottom:0!important}.search-by-district-wrapper[_ngcontent-%COMP%]   .agefilterblock[_ngcontent-%COMP%]{width:100%;margin-top:8px}@media only screen and (min-width:320px) and (max-width:767px){.search-by-district-wrapper[_ngcontent-%COMP%]   .agefilterblock[_ngcontent-%COMP%]{width:100%;text-align:left;margin:20px 0}}.nomargright[_ngcontent-%COMP%]{margin-right:0!important}.nomargleft[_ngcontent-%COMP%]{margin-left:0!important;padding-left:0}.filerandsearchblock[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]{display:none}.filerandsearchblock[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{border:1px solid grey;background:#fff;padding:5px 8px;width:-webkit-max-content;width:max-content;cursor:pointer;border-radius:5px}.filerandsearchblock[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:active, .filerandsearchblock[_ngcontent-%COMP%]   input.form-check-input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#002060;color:#fff}.mt-tab[_ngcontent-%COMP%]{background:#ad0000!important;--background:#ad0000!important}.note-msg[_ngcontent-%COMP%]{font-size:12px}.dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3c3c3c;font-size:12px;padding:5px 7px;text-align:center}.dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0;margin:0}@media only screen and (min-width:320px) and (max-width:767px){.dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;padding:0 3px;font-size:11px}}.dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{border-left:none}@media only screen and (min-width:320px) and (max-width:767px){.dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{border-right:0;padding-right:3px;padding-left:3px;margin-right:0}}@media only screen and (min-width:320px) and (max-width:767px){.map-avail-table[_ngcontent-%COMP%]   .dosetotal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:25px}}.dosetotal[_ngcontent-%COMP%]{display:flex;text-align:center;align-items:stretch;border:1px solid #ccc;line-height:16px}.beta-txt[_ngcontent-%COMP%]{font-weight:700;color:#001f60;text-transform:uppercase;font-size:14px;background:#ffc002;border-radius:5px;display:inline-block;padding:2px 15px;margin:auto}.seperator-box[_ngcontent-%COMP%]{border:1px solid #c7c2c2;background:#fff;margin-bottom:10px;min-height:100px;border-radius:10px;padding:10px 0}.dayview-mobile[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:320px) and (max-width:767px){.dayview-mobile[_ngcontent-%COMP%]{display:block}}.dayview-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.dayview-mobile[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5.center-name-title[_ngcontent-%COMP%]{font-weight:500}.dayview-mobile[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   .center-name-text[_ngcontent-%COMP%]{display:block}.dayview-mobile[_ngcontent-%COMP%]   .appointment-info[_ngcontent-%COMP%]{display:flex}.dayview-mobile[_ngcontent-%COMP%]   .center-name-box[_ngcontent-%COMP%]{width:60%;position:relative}.dayview-mobile[_ngcontent-%COMP%]   .vaccine-name-box[_ngcontent-%COMP%]{width:40%;text-align:right}.dayview-mobile[_ngcontent-%COMP%]   .row-disp[_ngcontent-%COMP%]   h5.name[_ngcontent-%COMP%]{color:#998fa2;text-transform:uppercase;font-weight:500;line-height:1.2}.dayview-mobile[_ngcontent-%COMP%]   .vaccine-fees[_ngcontent-%COMP%]{color:#998fa2;font-size:12px;padding-right:5px}.dayview-mobile[_ngcontent-%COMP%]   .center-name-text[_ngcontent-%COMP%]{padding-top:3px;display:block}.dayview-mobile[_ngcontent-%COMP%]   .vaccine-cnt[_ngcontent-%COMP%]{padding-top:22px}.dayview-mobile[_ngcontent-%COMP%]   .paid-button[_ngcontent-%COMP%]{background-color:#2152b3}.dayview-mobile[_ngcontent-%COMP%]   .free-button[_ngcontent-%COMP%], .dayview-mobile[_ngcontent-%COMP%]   .paid-button[_ngcontent-%COMP%]{border-radius:5px;font-size:11px;padding:4px 8px;font-weight:400;display:inline-block;margin-left:0;line-height:normal;vertical-align:middle}.dayview-mobile[_ngcontent-%COMP%]   .free-button[_ngcontent-%COMP%]{background-color:#048604;color:#fff}.dayview-mobile[_ngcontent-%COMP%]   .total-slots[_ngcontent-%COMP%]{color:#ffbf00;font-weight:500;font-size:12px;padding:5px 0}.dayview-mobile[_ngcontent-%COMP%]   .availability-box-mobile[_ngcontent-%COMP%]{width:100vw;background:#f5f5f5;padding:15px;margin:0 -10px 10px}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]{padding:0;margin:0;white-space:nowrap;overflow-x:auto;width:100%;overflow-y:hidden}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;border:1px solid #979797;border-radius:4px;font-size:12px;background:#fff;margin-right:10px;padding:5px 20px;line-height:1.3;margin-bottom:5px}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border:1px solid #333;background:#e1ffe1}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li.less-slot[_ngcontent-%COMP%]   .slot-txt[_ngcontent-%COMP%]{color:#ffbf00}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li.available-slot[_ngcontent-%COMP%]   .date-text[_ngcontent-%COMP%]{color:#002060}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li.available-slot[_ngcontent-%COMP%]   .slot-txt[_ngcontent-%COMP%]{color:#048604}.dayview-mobile[_ngcontent-%COMP%]   .availability-date-ul-mobile[_ngcontent-%COMP%]   li.booked-slot[_ngcontent-%COMP%]   .slot-txt[_ngcontent-%COMP%]{color:red}.dayview-mobile[_ngcontent-%COMP%]   .dose-block-1[_ngcontent-%COMP%]{padding:10px 0 0;color:#998fa2}.dayview-mobile[_ngcontent-%COMP%]   .dose-block-2[_ngcontent-%COMP%]{padding:10px 0 0}.dayview-mobile[_ngcontent-%COMP%]   .dose-info[_ngcontent-%COMP%]{display:flex;align-items:center}.dayview-mobile[_ngcontent-%COMP%]   .filerandsearchblock[_ngcontent-%COMP%]{display:block;flex:0.9;margin:0}.dayview-mobile[_ngcontent-%COMP%]   .topfilter[_ngcontent-%COMP%]   .filerandsearchblock[_ngcontent-%COMP%]{margin:10px 0 5px}.dayview-mobile[_ngcontent-%COMP%]   .filter-block[_ngcontent-%COMP%]{width:33.33333%}.dayview-mobile[_ngcontent-%COMP%]   .dose1-block[_ngcontent-%COMP%]{width:33.33333%;font-weight:400}@media only screen and (min-width:320px) and (max-width:374px){.dayview-mobile[_ngcontent-%COMP%]   .dose1-block[_ngcontent-%COMP%]{font-size:12px}}.dayview-mobile[_ngcontent-%COMP%]   .dose2-block[_ngcontent-%COMP%]{width:33.33333%;font-weight:400}@media only screen and (min-width:320px) and (max-width:374px){.dayview-mobile[_ngcontent-%COMP%]   .dose2-block[_ngcontent-%COMP%]{font-size:12px}}.dayview-mobile[_ngcontent-%COMP%]   .less-slot[_ngcontent-%COMP%]{color:#ffbf00;font-weight:500}@media only screen and (min-width:320px) and (max-width:414px){.dayview-mobile[_ngcontent-%COMP%]   .less-slot[_ngcontent-%COMP%]{font-size:12px}}.dayview-mobile[_ngcontent-%COMP%]   .available-slot[_ngcontent-%COMP%]{color:#048604;font-weight:500}@media only screen and (min-width:320px) and (max-width:414px){.dayview-mobile[_ngcontent-%COMP%]   .available-slot[_ngcontent-%COMP%]{font-size:12px}}.dayview-mobile[_ngcontent-%COMP%]   .booked-slot[_ngcontent-%COMP%]{color:red;font-weight:500;font-size:18px}@media only screen and (min-width:320px) and (max-width:374px){.dayview-mobile[_ngcontent-%COMP%]   .booked-slot[_ngcontent-%COMP%]{font-size:16px}}.card-box[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}.date-txt[_ngcontent-%COMP%]{font-weight:600;font-size:14px;color:#333}.slot-txt[_ngcontent-%COMP%]{font-size:12px}.icon-traffic-sign[_ngcontent-%COMP%]{color:#998fa2;position:absolute;right:-30px;top:0;font-size:16px}.scroll[_ngcontent-%COMP%]{overflow-x:scroll}.not-availble-cnt[_ngcontent-%COMP%]   .empty-cnt[_ngcontent-%COMP%]{font-size:100px;color:#dbe3f5;display:block;text-align:center;width:175px;height:175px;margin:0 auto 10px}.not-availble-cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#002060}.dose-title[_ngcontent-%COMP%]{margin-right:5px;display:inline-block;color:#998fa2}@media only screen and (min-width:320px) and (max-width:374px){.dose-title[_ngcontent-%COMP%]{font-size:12px}}@media only screen and (min-width:320px) and (max-width:374px){.padding-lr[_ngcontent-%COMP%]{padding:0 5px}}.age18.filter[_ngcontent-%COMP%], .age45.filter[_ngcontent-%COMP%]{border:1px solid #007bff;color:#fff;font-size:13px;padding:3px 5px;border-radius:5px;display:inline-block;width:83px;text-align:center;background:#007bff}.tab-group[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]{width:60%;margin:0 auto}@media only screen and (min-width:320px) and (max-width:767px){.tab-group[_ngcontent-%COMP%]   .searchBox[_ngcontent-%COMP%]{width:100%}}.register-wrap[_ngcontent-%COMP%]   .pin-search[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%], .register-wrap[_ngcontent-%COMP%]   .search-select[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%]{border:1px solid #bfbfbf;padding:10px 15px;border-radius:20px;text-transform:uppercase;font-weight:400}.filter-section[_ngcontent-%COMP%]{text-align:left}.filter-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{text-align:left;padding:0}.filter-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin-right:5px;color:#002060}@media only screen and (min-width:320px) and (max-width:360px){.filter-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%]{font-size:18px}}.filter-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   .center-count[_ngcontent-%COMP%]{font-size:12px;color:#998fa2}.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]{margin:10px 0;display:flex}@media only screen and (min-width:320px) and (max-width:567px){.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]{display:block}}@media only screen and (min-width:320px) and (max-width:767px){.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]{margin:5px 0}}.filter-section[_ngcontent-%COMP%]   .show-result__text[_ngcontent-%COMP%]{font-size:12px;color:#998fa2;font-weight:500;margin-right:10px}.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;list-style:none}.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 10px;font-size:12px;color:#998fa2;font-weight:500;border-left:1px solid #ddd}@media only screen and (min-width:320px) and (max-width:360px){.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:10px;padding:0 10px 0 0;border:0}}@media only screen and (min-width:361px) and (max-width:460px){.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:11px;padding:0 5px}}.filter-section[_ngcontent-%COMP%]   .show-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .label-search[_ngcontent-%COMP%]{font-weight:600}.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]{margin:10px 0;display:flex;align-items:flex-end}@media only screen and (min-width:320px) and (max-width:567px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]{display:block}}@media only screen and (min-width:320px) and (max-width:767px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]{margin:5px 0}}.filter-section[_ngcontent-%COMP%]   .filter-result__text[_ngcontent-%COMP%]{font-size:12px;color:#2e2e2e;font-weight:500;margin-right:10px;min-width:108px}.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;margin:0;padding:0;list-style:none}@media only screen and (min-width:320px) and (max-width:666px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:grid}}.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 20px;border-left:1px solid #ddd}@media only screen and (min-width:320px) and (max-width:666px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 0 10px;border:0}}@media only screen and (min-width:667px) and (max-width:767px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 10px}}@media only screen and (min-width:992px) and (max-width:1100px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 10px}}.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#002060;margin-bottom:5px}.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .agefilterblock[_ngcontent-%COMP%]{margin-bottom:0}@media only screen and (min-width:667px) and (max-width:767px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:13px}}@media only screen and (min-width:992px) and (max-width:1100px){.filter-section[_ngcontent-%COMP%]   .filter-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:13px}}.agefilterblock[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:-10px;font-size:14px;margin-left:0}.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%]{opacity:0;position:absolute;top:10px}.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%]:focus{outline:1px auto -webkit-focus-ring-color}.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{border:1px solid #002060;background:#fff;padding:2px 10px;cursor:pointer;border-radius:5px;color:#002060;margin-top:10px;margin-bottom:0;font-size:13px}@media only screen and (min-width:320px) and (max-width:374px){.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:2px 10px}}@media only screen and (min-width:768px) and (max-width:1024px){.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]{padding:5px}}.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%]:not(:checked) + label[_ngcontent-%COMP%]:hover{background:rgba(31,93,228,.054901960784313725);color:#002060}.agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%] + label[_ngcontent-%COMP%]:active, .agefilterblock[_ngcontent-%COMP%]   input.chk-btn[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:#002060;color:#fff}.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{padding-right:7px;padding-left:0;display:inline-block;float:left}@media only screen and (min-width:320px) and (max-width:768px){.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{float:none}}@media only screen and (min-width:768px) and (max-width:1024px){.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{padding:0 5px 0 0}}.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px}@media only screen and (min-width:320px) and (max-width:374px){.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:12px}}.agefilterblock[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]:last-child{padding-right:0}.splNoteSection[_ngcontent-%COMP%], .walkin-note[_ngcontent-%COMP%]{background-color:#f7fcff}.walkin-note[_ngcontent-%COMP%]{border-radius:10px;padding:15px;text-align:left;display:flex;color:#002060}.walkin-note[_ngcontent-%COMP%]   .icon-info_outline[_ngcontent-%COMP%]{font-size:20px;color:#002060}.walkin-note[_ngcontent-%COMP%]   .icon-information-outline[_ngcontent-%COMP%]{font-size:24px}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:30px}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;color:#2e2e2e;margin-bottom:5px}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .timing[_ngcontent-%COMP%]{font-weight:700;color:#002060}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dose1-vaccine[_ngcontent-%COMP%], .walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .walkin-ava[_ngcontent-%COMP%]{font-size:14px;margin-right:50px}@media only screen and (min-width:320px) and (max-width:568px){.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dose1-vaccine[_ngcontent-%COMP%], .walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .walkin-ava[_ngcontent-%COMP%]{display:block}}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .walkin-ava[_ngcontent-%COMP%]{margin-right:4px;font-weight:600;color:#002060}.walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{font-size:12px;color:#998fa2}.noteTextDesktop[_ngcontent-%COMP%]{display:block}@media only screen and (min-width:320px) and (max-width:767px){.noteTextDesktop[_ngcontent-%COMP%]{display:none}}.noteTextMobile[_ngcontent-%COMP%]{display:none}@media only screen and (min-width:320px) and (max-width:767px){.noteTextMobile[_ngcontent-%COMP%]{display:block}.noteTextMobile[_ngcontent-%COMP%]   .walkin-note[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #eee}.noteTextMobile[_ngcontent-%COMP%]   .walkin-note[_ngcontent-%COMP%]   .icon-information-outline[_ngcontent-%COMP%]{font-size:21px;margin-right:5px}.noteTextMobile[_ngcontent-%COMP%]   .walkin-note[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:600;font-size:17px;line-height:21px}.noteTextMobile[_ngcontent-%COMP%]   .walkin-note[_ngcontent-%COMP%]   .walkin-msg[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0}}.select-dist[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:2px!important}']
                }), n
            })();
            var wt = e("o4Yh");

            function vt(n, t) {
                1 & n && (M.Qb(0, "h3", 96), M.Mb(1, "span", 97), M.cc(2, "translate"), M.Pb()), 2 & n && (M.zb(1), M.ic("innerHTML", M.dc(2, 1, "HOME.BANNER1_DESC"), M.wc))
            }

            function At(n, t) {
                1 & n && (M.Qb(0, "span", 25), M.Gc(1, "\u0905\u092a\u0928\u093e \u0938\u094d\u0932\u0949\u091f \u092c\u0941\u0915 \u0915\u0930"), M.Pb())
            }

            function Gt(n, t) {
                1 & n && (M.Qb(0, "span", 25), M.Gc(1, " \u092a\u094d\u0930\u092e\u093e\u0923\u092a\u0924\u094d\u0930 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902"), M.Pb())
            }

            function yt(n, t) {
                1 & n && (M.Ob(0), M.Qb(1, "a", 98), M.Gc(2, "1075"), M.Pb(), M.Nb())
            }

            function Ht(n, t) {
                1 & n && (M.Ob(0), M.Gc(1, " ("), M.Qb(2, "a", 98), M.Gc(3, "1075"), M.Pb(), M.Gc(4, " \xa0/\xa0"), M.Qb(5, "a", 99), M.Gc(6, "104"), M.Pb(), M.Gc(7, ") "), M.Nb())
            }

            function It(n, t) {
                1 & n && (M.Ob(0), M.Qb(1, "a", 98), M.Gc(2, "1075"), M.Pb(), M.Nb())
            }

            function Et(n, t) {
                1 & n && (M.Ob(0), M.Gc(1, " ("), M.Qb(2, "a", 98), M.Gc(3, "1075"), M.Pb(), M.Gc(4, " \xa0/\xa0"), M.Qb(5, "a", 99), M.Gc(6, "104"), M.Pb(), M.Gc(7, ") "), M.Nb())
            }

            function Dt(n, t) {
                1 & n && (M.Ob(0), M.Qb(1, "a", 98), M.Gc(2, "1075"), M.Pb(), M.Nb())
            }

            function Qt(n, t) {
                1 & n && (M.Ob(0), M.Gc(1, " ("), M.Qb(2, "a", 98), M.Gc(3, "1075"), M.Pb(), M.Gc(4, " \xa0/\xa0"), M.Qb(5, "a", 99), M.Gc(6, "104"), M.Pb(), M.Gc(7, ") "), M.Nb())
            }

            function kt(n, t) {
                1 & n && (M.Ob(0), M.Gc(1, " \xa0/\xa0"), M.Qb(2, "a", 99), M.Gc(3, "104"), M.Pb(), M.Nb())
            }
            let Lt = (() => {
                class n {
                    constructor(n, t, e, i, o) {
                        this.publicReportService = n, this.deviceService = t, this.i18nService = e, this.util = i, this.translate = o, this.urls = {}, this.title = "cowindashboard", this.updateInterval = 300, this.updateCount = 0, this.numberOfElements = 200, this.currLang = "en", this.dosDontsFileName = "Dos_and_Donts_for_Citizens.pdf", this.langFiles = {
                            en: "Dos_and_Donts_for_Citizens.pdf",
                            hi: "Dos_and_Donts_for_Citizens_Hindi.pdf",
                            mr: "Dos_and_Donts_for_Citizens.pdf",
                            ml: "Dos_and_Donts_for_Citizens.pdf",
                            pb: "Dos_and_Donts_for_Citizens.pdf",
                            te: "Dos_and_Donts_for_Citizens.pdf",
                            gu: "Dos_and_Donts_for_Citizens_Gujarati.pdf",
                            as: "Dos_and_Donts_for_Citizens.pdf",
                            be: "Dos_and_Donts_for_Citizens.pdf",
                            ka: "Dos_and_Donts_for_Citizens.pdf",
                            or: "Dos_and_Donts_for_Citizens_Odia.pdf",
                            ta: "Dos_and_Donts_for_Citizens_Tamil.pdf"
                        }, this.options = {
                            useGrouping: !1,
                            formattingFn: n => n.toLocaleString("en-IN")
                        }, this.intervalSub$ = new b.a
                    }
                    ngOnInit() {
                        this.urls = r.a.AppRedirectUrls, this.carouselItems = [{
                            imageUrl: "assets/images/banner1img.png",
                            title: " SERVING THE COMMUNITY WITH THE GIFT OF IMMUNITY",
                            caption: "Humanity needs leadership and solidarity to defeat the corona"
                        }], this.getNewDashboardData(), this.getLiveVaccinationCounter(), this.currLang = this.translate.currentLang, this.translate.onLangChange.subscribe(n => {
                            this.currLang = this.translate.currentLang, this.dosDontsFileName = this.langFiles[this.translate.currentLang]
                        })
                    }
                    getLiveVaccinationCounter() {
                        this.intervalSub$ = function(n = 0, t = g.a) {
                            return (!Object(p.a)(n) || n < 0) && (n = 0), t && "function" == typeof t.schedule || (t = g.a), new d.a(e => (e.add(t.schedule(P, n, {
                                subscriber: e,
                                counter: 0,
                                period: n
                            })), e))
                        }(1e3).pipe(Object(c.a)(0), Object(l.a)(() => this.publicReportService.getLiveVaccinationCounter())).subscribe(n => {
                            this.liveVaccinationCounter = n.count
                        }, n => {})
                    }
                    get covertVaccCounterToArr() {
                        return Array.from(String(this.liveVaccinationCounter), n => Number(n))
                    }
                    getReportData() {
                        this.publicReportService.dashboardLogin().pipe(Object(l.a)(n => (sessionStorage.setItem("userToken", JSON.stringify(n)), this.publicReportService.getPublicReports()))).subscribe(n => {
                            this.reportData = n, console.log("this.reportData", this.reportData)
                        })
                    }
                    getNewDashboardData(n = "", t = "") {
                        this.publicReportService.getPublicReports().subscribe(n => {
                            this.totVaccination = this.util.changeNumberFormat(n.topBlock.vaccination.total_doses), this.totDose1 = this.util.changeNumberFormat(n.topBlock.vaccination.tot_dose_1), this.totDose2 = this.util.changeNumberFormat(n.topBlock.vaccination.tot_dose_2), this.totFemale = this.util.changeNumberFormat(n.topBlock.vaccination.female), this.totMale = this.util.changeNumberFormat(n.topBlock.vaccination.male), this.totAefi = n.topBlock.vaccination.aefi, this.todayVaccination = n.topBlock.vaccination.today, this.todayDose1 = n.topBlock.vaccination.today_dose_one, this.todayDose2 = n.topBlock.vaccination.today_dose_two, this.todayFemale = n.topBlock.vaccination.today_female, this.todayMale = n.topBlock.vaccination.today_male, this.todayAefi = n.topBlock.vaccination.today_aefi, this.yesterdayVacc = this.util.changeNumberFormat(n.topBlock.vaccination.yesterday_vac), this.yesterdayReg = this.util.changeNumberFormat(n.topBlock.registration.yesterday), this.yesterdayDoseTwoVacc = this.util.changeNumberFormat(n.topBlock.vaccination.yesterday_dose_two), console.log("this.reportData", this.totVaccination), this.totReg = this.util.changeNumberFormat(n.topBlock.registration.total)
                        })
                    }
                    ngOnDestroy() {
                        this.intervalSub$ && this.intervalSub$.unsubscribe()
                    }
                }
                return n.\u0275fac = function(t) {
                    return new(t || n)(M.Lb(m), M.Lb(z), M.Lb(N.a), M.Lb(F.a), M.Lb(R.c))
                }, n.\u0275cmp = M.Fb({
                    type: n,
                    selectors: [
                        ["app-home"]
                    ],
                    decls: 479,
                    vars: 314,
                    consts: [
                        [1, "banner-block"],
                        [3, "isAnimated", "interval", "noPause", "showIndicators"],
                        [1, "slide"],
                        [1, "homeBannerSection"],
                        [1, "container"],
                        [1, "row"],
                        [1, "col-12", "col-md-8"],
                        [1, "accessibility-plugin-ac", 3, "innerHTML"],
                        ["class", "mt-4 accessibility-plugin-ac", 4, "ngIf"],
                        [1, "row", "mt-md-5"],
                        [1, "col", "col-md-6"],
                        [1, "form-group"],
                        ["target", "_blank", 1, "btn", "btn-warning", "btn-block", "accessibility-plugin-ac", 3, "href"],
                        ["class", "accessibility-plugin-ac", 4, "ngIf"],
                        ["target", "_blank", 1, "btn", "btn-secondary", "btn-block", "accessibility-plugin-ac", 3, "href"],
                        [1, "col-12", "col-md-4", "bannerImg"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/sandbox/assets/images/modi-home-banner.png", "alt", "largest vaccine drive"],
                        [1, "vaccinationCounter"],
                        [1, "vaccinCount"],
                        [1, "mobileCount", 3, "countUp", "options"],
                        [1, "helplineSection"],
                        [1, "mobileOnly"],
                        [1, "accessibility-plugin-ac", "text-center"],
                        [1, "icon-phone"],
                        [1, "helplineNumbers"],
                        [1, "accessibility-plugin-ac"],
                        ["href", "tel:911123978046", "aria-label", "911123978046", 1, "accessibility-plugin-ac"],
                        [4, "ngIf"],
                        ["aria-label", "1098", "href", "tel:1098", 1, "accessibility-plugin-ac"],
                        ["aria-label", "08046110007", "href", "tel:08046110007", 1, "accessibility-plugin-ac"],
                        ["aria-label", "14567", "href", "tel:14567", 1, "accessibility-plugin-ac"],
                        [1, "row", "noMobile"],
                        [1, "col-12", "col-md-10"],
                        [1, "col-12", "col-sm-12", "col-md-2"],
                        [1, "col-6", "col-sm-6", "col-md-2"],
                        [1, "col-6", "col-md-2"],
                        [1, "col-12", "col-md-2"],
                        [1, "row", "noDisktop"],
                        [1, "col-12", "col-md-12"],
                        [1, "col-12", "col-sm-12", "col-md-12", "text-center"],
                        [1, "row", "justify-content-center"],
                        ["aria-label", "911123978046", "href", "tel:911123978046", 1, "accessibility-plugin-ac"],
                        [1, "col-6", "v", "col-md-2"],
                        [1, "nearestCentersSection"],
                        ["id", "Search-Vaccination-Center", 1, "container"],
                        [1, "text-center", "accessibility-plugin-ac"],
                        [1, "getVaccinationSection"],
                        [1, "row", "mt-5", "d-flex", "justify-content-center"],
                        [1, "col-12", "col-sm-6", "col-md-4", "col-lg-4"],
                        [1, "card"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/sandbox/assets/images/vaccination-thumb-1.jpg", "alt", "largest vaccine drive", 1, "card-img-top"],
                        [1, "card-body"],
                        [1, "card-title", "accessibility-plugin-ac", 3, "innerHTML"],
                        [1, "card-text", "text-center"],
                        ["href", "https://prod-cdn.preprod.co-vin.in/assets/pdf/User_Guide_Citizen%20registration_18%2B.pdf", "target", "_blank", 1, "accessibility-plugin-ac", 3, "title"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/sandbox/assets/images/vaccination-thumb-2.jpg", "alt", "largest vaccine drive", 1, "card-img-top"],
                        ["target", "_blank", 1, "accessibility-plugin-ac", 3, "href", "title"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/sandbox/assets/images/vaccination-thumb-3.jpg", "alt", "largest vaccine drive", 1, "card-img-top"],
                        [1, "videoSection", 3, "hidden"],
                        [1, "col-12", "col-sm-12", "col-md-12", "col-lg-6", "mb-4"],
                        ["controls", "controls", "name", "media"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/assets/videos/CoWIN-Vaccination.mp4", "type", "video/mp4"],
                        ["src", "https://prod-cdn.preprod.co-vin.in/assets/videos/CoWIN-Citizens.mp4", "type", "video/mp4"],
                        ["id", "howcanweHelp", 1, "helpYouSection"],
                        [1, "row", "mt-5"],
                        [1, "col-12", "col-md-6"],
                        ["role", "link", "tabindex", "0", 1, "helpListUL"],
                        ["target", "_blank", 1, "btn", "btn-primary", "btn-block", "btn-sm", "accessibility-plugin-ac", 3, "href", "title"],
                        [1, "icon-arrow-right"],
                        [1, "col-12", "col-md-1"],
                        [1, "col-12", "col-md-5", "contact"],
                        [1, "row", "mb-2"],
                        [1, "col-12", "col-md-4"],
                        [1, "col-12", "col-md-8", "accessibility-plugin-ac"],
                        ["href", "tel:911123978046"],
                        ["href", "tel:1075", "aria-label", "1075"],
                        ["href", "tel:01204473222", "aria-label", "0120 4473222"],
                        [1, "faqSection"],
                        [1, "card", "mt-5"],
                        [1, "card-title", "mb-0"],
                        [1, "mb-0", "accessibility-plugin-ac"],
                        [1, "card-body", "p-0"],
                        ["multi", "true"],
                        [1, "pt-1"],
                        [1, "row", "mt-4"],
                        [1, "col-12", "faqMoreBtnPanel"],
                        ["routerLink", "/faq", 1, "btn", "btn-primary", "btn-sm", "accessibility-plugin-ac", 3, "title"],
                        [1, "icon-question-circle-o"],
                        [1, "vaccinaitonDriveSection"],
                        [1, "vaccinationDriveUL", "mt-5"],
                        [1, "col-3", "accessibility-plugin-ac"],
                        [1, "icon-groups"],
                        [1, "col-9"],
                        [1, "col-12", "text-center"],
                        ["target", "_blank", 1, "btn", "btn-secondary", "btn-sm", "accessibility-plugin-ac", 3, "href", "title"],
                        [1, "icon-launch"],
                        [1, "mt-4", "accessibility-plugin-ac"],
                        [3, "innerHTML"],
                        ["aria-label", "91-11-23978046", "href", "tel:1075", 1, "accessibility-plugin-ac"],
                        ["href", "tel:104", 1, "accessibility-plugin-ac"]
                    ],
                    template: function(n, t) {
                        1 & n && (M.Qb(0, "div", 0), M.Qb(1, "carousel", 1), M.Qb(2, "slide"), M.Qb(3, "div", 2), M.Qb(4, "div", 3), M.Qb(5, "div", 4), M.Qb(6, "div", 5), M.Qb(7, "div", 6), M.Mb(8, "h1", 7), M.cc(9, "translate"), M.Ec(10, vt, 3, 3, "h3", 8), M.Qb(11, "div", 9), M.Qb(12, "div", 10), M.Qb(13, "div", 11), M.Qb(14, "a", 12), M.Gc(15), M.cc(16, "translate"), M.Ec(17, At, 2, 0, "span", 13), M.Pb(), M.Pb(), M.Pb(), M.Qb(18, "div", 10), M.Qb(19, "div", 11), M.Qb(20, "a", 14), M.Gc(21), M.cc(22, "translate"), M.Ec(23, Gt, 2, 0, "span", 13), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(24, "div", 15), M.Mb(25, "img", 16), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(26, "div", 17), M.Qb(27, "div", 4), M.Qb(28, "h3"), M.Gc(29, "Vaccination Today"), M.Pb(), M.Qb(30, "div", 18), M.Mb(31, "span", 19), M.Pb(), M.Pb(), M.Pb(), M.Qb(32, "div", 20), M.Qb(33, "div", 4), M.Qb(34, "div", 21), M.Qb(35, "h4", 22), M.Mb(36, "i", 23), M.Gc(37), M.cc(38, "translate"), M.Pb(), M.Qb(39, "div", 24), M.Qb(40, "ul"), M.Qb(41, "li"), M.Qb(42, "h6", 25), M.Gc(43), M.cc(44, "translate"), M.Pb(), M.Qb(45, "a", 26), M.Gc(46, "91-11-23978046"), M.Pb(), M.Pb(), M.Qb(47, "li"), M.Qb(48, "h6", 25), M.Gc(49), M.cc(50, "translate"), M.Pb(), M.Ec(51, yt, 3, 0, "ng-container", 27), M.Ec(52, Ht, 8, 0, "ng-container", 27), M.Pb(), M.Qb(53, "li"), M.Qb(54, "h6", 25), M.Gc(55), M.cc(56, "translate"), M.Pb(), M.Qb(57, "a", 28), M.Gc(58, "1098"), M.Pb(), M.Pb(), M.Qb(59, "li"), M.Qb(60, "h6", 25), M.Gc(61), M.cc(62, "translate"), M.Pb(), M.Qb(63, "a", 29), M.Gc(64, "08046110007"), M.Pb(), M.Pb(), M.Qb(65, "li"), M.Qb(66, "h6", 25), M.Gc(67), M.cc(68, "translate"), M.Pb(), M.Qb(69, "a", 30), M.Gc(70, "14567"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(71, "div", 31), M.Qb(72, "div", 32), M.Qb(73, "div", 5), M.Qb(74, "div", 33), M.Qb(75, "div", 11), M.Qb(76, "h4", 25), M.Mb(77, "i", 23), M.Gc(78), M.cc(79, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(80, "div", 34), M.Qb(81, "div", 11), M.Qb(82, "h6", 25), M.Gc(83), M.cc(84, "translate"), M.Pb(), M.Qb(85, "a", 26), M.Gc(86, "91-11-23978046"), M.Pb(), M.Pb(), M.Pb(), M.Qb(87, "div", 34), M.Qb(88, "div", 11), M.Qb(89, "h6", 25), M.Gc(90), M.cc(91, "translate"), M.Pb(), M.Ec(92, It, 3, 0, "ng-container", 27), M.Ec(93, Et, 8, 0, "ng-container", 27), M.Pb(), M.Pb(), M.Qb(94, "div", 34), M.Qb(95, "div", 11), M.Qb(96, "h6", 25), M.Gc(97), M.cc(98, "translate"), M.Pb(), M.Qb(99, "a", 28), M.Gc(100, "1098"), M.Pb(), M.Pb(), M.Pb(), M.Qb(101, "div", 34), M.Qb(102, "div", 11), M.Qb(103, "h6", 25), M.Gc(104), M.cc(105, "translate"), M.Pb(), M.Qb(106, "a", 29), M.Gc(107, "08046110007"), M.Pb(), M.Pb(), M.Pb(), M.Qb(108, "div", 35), M.Qb(109, "div", 11), M.Qb(110, "h6", 25), M.Gc(111), M.cc(112, "translate"), M.Pb(), M.Qb(113, "a", 30), M.Gc(114, "14567"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Mb(115, "div", 36), M.Pb(), M.Qb(116, "div", 37), M.Qb(117, "div", 38), M.Qb(118, "div", 5), M.Qb(119, "div", 39), M.Qb(120, "div", 11), M.Qb(121, "h4", 25), M.Mb(122, "i", 23), M.Gc(123), M.cc(124, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(125, "div", 40), M.Qb(126, "div", 34), M.Qb(127, "div", 11), M.Qb(128, "h6", 25), M.Gc(129), M.cc(130, "translate"), M.Pb(), M.Qb(131, "a", 41), M.Gc(132, "91-11-23978046"), M.Pb(), M.Pb(), M.Pb(), M.Qb(133, "div", 34), M.Qb(134, "div", 11), M.Qb(135, "h6", 25), M.Gc(136), M.cc(137, "translate"), M.Pb(), M.Ec(138, Dt, 3, 0, "ng-container", 27), M.Ec(139, Qt, 8, 0, "ng-container", 27), M.Pb(), M.Pb(), M.Qb(140, "div", 34), M.Qb(141, "div", 11), M.Qb(142, "h6", 25), M.Gc(143), M.cc(144, "translate"), M.Pb(), M.Qb(145, "a", 28), M.Gc(146, "1098"), M.Pb(), M.Pb(), M.Pb(), M.Qb(147, "div", 34), M.Qb(148, "div", 11), M.Qb(149, "h6", 25), M.Gc(150), M.cc(151, "translate"), M.Pb(), M.Qb(152, "a", 29), M.Gc(153, "08046110007"), M.Pb(), M.Pb(), M.Pb(), M.Qb(154, "div", 42), M.Qb(155, "div", 11), M.Qb(156, "h6", 25), M.Gc(157), M.cc(158, "translate"), M.Pb(), M.Qb(159, "a", 30), M.Gc(160, "14567"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(161, "div", 43), M.Qb(162, "div", 44), M.Qb(163, "h1", 45), M.Gc(164), M.cc(165, "translate"), M.Pb(), M.Mb(166, "appointment-table"), M.Pb(), M.Pb(), M.Qb(167, "div", 46), M.Qb(168, "div", 4), M.Qb(169, "h1", 45), M.Gc(170), M.cc(171, "translate"), M.Pb(), M.Qb(172, "div", 47), M.Qb(173, "div", 48), M.Qb(174, "div", 49), M.Mb(175, "img", 50), M.Qb(176, "div", 51), M.Mb(177, "h3", 52), M.cc(178, "translate"), M.Qb(179, "p", 53), M.Qb(180, "a", 54), M.cc(181, "translate"), M.cc(182, "translate"), M.Gc(183), M.cc(184, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(185, "div", 48), M.Qb(186, "div", 49), M.Mb(187, "img", 55), M.Qb(188, "div", 51), M.Mb(189, "h3", 52), M.cc(190, "translate"), M.Qb(191, "p", 53), M.Qb(192, "a", 56), M.cc(193, "translate"), M.cc(194, "translate"), M.Gc(195), M.cc(196, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(197, "div", 48), M.Qb(198, "div", 49), M.Mb(199, "img", 57), M.Qb(200, "div", 51), M.Mb(201, "h3", 52), M.cc(202, "translate"), M.Qb(203, "p", 53), M.Qb(204, "a", 56), M.cc(205, "translate"), M.cc(206, "translate"), M.Gc(207), M.cc(208, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(209, "div", 58), M.Qb(210, "div", 4), M.Qb(211, "h1", 45), M.Gc(212, "CoWIN Vaccination Program"), M.Pb(), M.Qb(213, "div", 47), M.Qb(214, "div", 59), M.Qb(215, "div", 49), M.Qb(216, "div", 51), M.Qb(217, "video", 60), M.Mb(218, "source", 61), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(219, "div", 59), M.Qb(220, "div", 49), M.Qb(221, "div", 51), M.Qb(222, "video", 60), M.Mb(223, "source", 62), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(224, "div", 63), M.Qb(225, "div", 4), M.Qb(226, "h1", 45), M.Gc(227), M.cc(228, "translate"), M.Pb(), M.Qb(229, "div", 64), M.Qb(230, "div", 65), M.Qb(231, "h2"), M.Gc(232), M.cc(233, "translate"), M.Pb(), M.Qb(234, "ul", 66), M.Qb(235, "li"), M.Qb(236, "a", 67), M.cc(237, "translate"), M.cc(238, "translate"), M.Qb(239, "span"), M.Gc(240), M.cc(241, "translate"), M.Pb(), M.Mb(242, "i", 68), M.Pb(), M.Pb(), M.Qb(243, "li"), M.Qb(244, "a", 67), M.cc(245, "translate"), M.cc(246, "translate"), M.Qb(247, "span"), M.Gc(248), M.cc(249, "translate"), M.Pb(), M.Mb(250, "i", 68), M.Pb(), M.Pb(), M.Qb(251, "li"), M.Qb(252, "a", 67), M.cc(253, "translate"), M.cc(254, "translate"), M.Qb(255, "span"), M.Gc(256), M.cc(257, "translate"), M.Pb(), M.Mb(258, "i", 68), M.Pb(), M.Pb(), M.Qb(259, "li"), M.Qb(260, "a", 67), M.cc(261, "translate"), M.cc(262, "translate"), M.Qb(263, "span"), M.Gc(264), M.cc(265, "translate"), M.Pb(), M.Mb(266, "i", 68), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Mb(267, "div", 69), M.Qb(268, "div", 70), M.Qb(269, "h2"), M.Gc(270), M.cc(271, "translate"), M.Pb(), M.Qb(272, "div", 71), M.Qb(273, "div", 72), M.Qb(274, "h5", 25), M.Gc(275), M.cc(276, "translate"), M.Pb(), M.Pb(), M.Qb(277, "div", 73), M.Gc(278, "+"), M.Qb(279, "a", 74), M.Gc(280, "91 11 23978046"), M.Pb(), M.Gc(281), M.cc(282, "translate"), M.Qb(283, "a", 75), M.Gc(284, "1075"), M.Pb(), M.Ec(285, kt, 4, 0, "ng-container", 27), M.Gc(286, " )"), M.Pb(), M.Pb(), M.Qb(287, "div", 71), M.Qb(288, "div", 72), M.Qb(289, "h5", 25), M.Gc(290), M.cc(291, "translate"), M.Pb(), M.Pb(), M.Qb(292, "div", 73), M.Qb(293, "a", 76), M.Gc(294, "0120 4473222"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(295, "div", 77), M.Qb(296, "div", 4), M.Qb(297, "h1", 45), M.Gc(298), M.cc(299, "translate"), M.Pb(), M.Qb(300, "div", 78), M.Qb(301, "div", 79), M.Qb(302, "h3", 80), M.Gc(303), M.cc(304, "translate"), M.Pb(), M.Pb(), M.Qb(305, "div", 81), M.Qb(306, "mat-accordion", 82), M.Qb(307, "mat-expansion-panel"), M.Qb(308, "mat-expansion-panel-header"), M.Qb(309, "mat-panel-title", 25), M.Gc(310), M.cc(311, "translate"), M.Pb(), M.Pb(), M.Qb(312, "div", 83), M.Qb(313, "p", 25), M.Gc(314), M.cc(315, "translate"), M.Pb(), M.Qb(316, "p", 25), M.Gc(317), M.cc(318, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(319, "mat-expansion-panel"), M.Qb(320, "mat-expansion-panel-header"), M.Qb(321, "mat-panel-title", 25), M.Gc(322), M.cc(323, "translate"), M.Pb(), M.Pb(), M.Qb(324, "div", 83), M.Qb(325, "p", 25), M.Gc(326), M.cc(327, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(328, "mat-expansion-panel"), M.Qb(329, "mat-expansion-panel-header"), M.Qb(330, "mat-panel-title", 25), M.Gc(331), M.cc(332, "translate"), M.Pb(), M.Pb(), M.Qb(333, "div", 83), M.Qb(334, "p", 25), M.Gc(335), M.cc(336, "translate"), M.Mb(337, "br"), M.Gc(338), M.cc(339, "translate"), M.Mb(340, "br"), M.Gc(341), M.cc(342, "translate"), M.Mb(343, "br"), M.Gc(344), M.cc(345, "translate"), M.Mb(346, "br"), M.Gc(347), M.cc(348, "translate"), M.Mb(349, "br"), M.Gc(350), M.cc(351, "translate"), M.Mb(352, "br"), M.Gc(353), M.cc(354, "translate"), M.Mb(355, "br"), M.Gc(356), M.cc(357, "translate"), M.Mb(358, "br"), M.Gc(359), M.cc(360, "translate"), M.Mb(361, "br"), M.Gc(362), M.cc(363, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(364, "mat-expansion-panel"), M.Qb(365, "mat-expansion-panel-header"), M.Qb(366, "mat-panel-title", 25), M.Gc(367), M.cc(368, "translate"), M.Pb(), M.Pb(), M.Qb(369, "div", 83), M.Qb(370, "p", 25), M.Gc(371), M.cc(372, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(373, "mat-expansion-panel"), M.Qb(374, "mat-expansion-panel-header"), M.Qb(375, "mat-panel-title", 25), M.Gc(376), M.cc(377, "translate"), M.Pb(), M.Pb(), M.Qb(378, "div", 83), M.Qb(379, "p", 25), M.Gc(380), M.cc(381, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(382, "mat-expansion-panel"), M.Qb(383, "mat-expansion-panel-header"), M.Qb(384, "mat-panel-title", 25), M.Gc(385), M.cc(386, "translate"), M.Pb(), M.Pb(), M.Qb(387, "div", 83), M.Qb(388, "p", 25), M.Gc(389), M.cc(390, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(391, "mat-expansion-panel"), M.Qb(392, "mat-expansion-panel-header"), M.Qb(393, "mat-panel-title", 25), M.Gc(394), M.cc(395, "translate"), M.Pb(), M.Pb(), M.Qb(396, "div", 83), M.Qb(397, "p", 25), M.Gc(398), M.cc(399, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Qb(400, "mat-expansion-panel"), M.Qb(401, "mat-expansion-panel-header"), M.Qb(402, "mat-panel-title", 25), M.Gc(403), M.cc(404, "translate"), M.Pb(), M.Pb(), M.Qb(405, "div", 83), M.Qb(406, "p", 25), M.Gc(407), M.cc(408, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(409, "div", 84), M.Qb(410, "div", 85), M.Qb(411, "a", 86), M.cc(412, "translate"), M.cc(413, "translate"), M.Mb(414, "i", 87), M.Gc(415), M.cc(416, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(417, "div", 88), M.Qb(418, "div", 4), M.Qb(419, "h1", 45), M.Gc(420), M.cc(421, "translate"), M.Pb(), M.Qb(422, "ul", 89), M.Qb(423, "li"), M.Qb(424, "div", 49), M.Qb(425, "div", 5), M.Qb(426, "div", 90), M.Mb(427, "i", 91), M.Pb(), M.Qb(428, "div", 92), M.Qb(429, "h6", 80), M.Gc(430), M.cc(431, "translate"), M.Pb(), M.Qb(432, "h4", 80), M.Gc(433), M.Pb(), M.Qb(434, "h5", 80), M.Qb(435, "span", 25), M.Gc(436), M.Pb(), M.Gc(437), M.cc(438, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(439, "li"), M.Qb(440, "div", 49), M.Qb(441, "div", 5), M.Qb(442, "div", 90), M.Mb(443, "i", 91), M.Pb(), M.Qb(444, "div", 92), M.Qb(445, "h6", 80), M.Gc(446), M.cc(447, "translate"), M.Pb(), M.Qb(448, "h4", 80), M.Gc(449), M.Pb(), M.Qb(450, "h5", 80), M.Qb(451, "span", 25), M.Gc(452), M.Pb(), M.Gc(453), M.cc(454, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(455, "li"), M.Qb(456, "div", 49), M.Qb(457, "div", 5), M.Qb(458, "div", 90), M.Mb(459, "i", 91), M.Pb(), M.Qb(460, "div", 92), M.Qb(461, "h6", 80), M.Gc(462), M.cc(463, "translate"), M.Pb(), M.Qb(464, "h4", 80), M.Gc(465), M.Pb(), M.Qb(466, "h5", 80), M.Qb(467, "span", 25), M.Gc(468), M.Pb(), M.Gc(469), M.cc(470, "translate"), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Qb(471, "div", 84), M.Qb(472, "div", 93), M.Qb(473, "a", 94), M.cc(474, "translate"), M.cc(475, "translate"), M.Gc(476), M.cc(477, "translate"), M.Mb(478, "i", 95), M.Pb(), M.Pb(), M.Pb(), M.Pb(), M.Pb()), 2 & n && (M.zb(1), M.ic("isAnimated", !0)("interval", 5e3)("noPause", !0)("showIndicators", !0), M.zb(7), M.ic("innerHTML", M.dc(9, 126, "HOME.BANNER1_TITLE"), M.wc), M.zb(2), M.ic("ngIf", "hi" !== t.currLang), M.zb(4), M.jc("href", t.urls.selfReg, M.xc), M.zb(1), M.Ic(" ", M.dc(16, 128, "HOME.Book_Your_Slot"), " "), M.zb(2), M.ic("ngIf", "hi" !== t.currLang), M.zb(3), M.jc("href", t.urls.verifyCertificate, M.xc), M.zb(1), M.Ic(" ", M.dc(22, 130, "HEADER.VERIFY_CERTIFICATE"), " "), M.zb(2), M.ic("ngIf", "hi" !== t.currLang), M.zb(8), M.ic("countUp", t.liveVaccinationCounter)("options", t.options), M.zb(6), M.Hc(M.dc(38, 132, "HOME.HELPLINE")), M.zb(6), M.Hc(M.dc(44, 134, "HOME.NUMBER")), M.zb(6), M.Hc(M.dc(50, 136, "HOME.HEALTH_MINISTRY")), M.zb(2), M.ic("ngIf", "ta" != t.currLang), M.zb(1), M.ic("ngIf", "ta" == t.currLang), M.zb(3), M.Hc(M.dc(56, 138, "HOME.CHILD")), M.zb(6), M.Hc(M.dc(62, 140, "HOME.MENTAL_HEALTH")), M.zb(6), M.Hc(M.dc(68, 142, "HOME.SENIOR_CITIZENS")), M.zb(11), M.Hc(M.dc(79, 144, "HOME.HELPLINE")), M.zb(5), M.Hc(M.dc(84, 146, "HOME.NUMBER")), M.zb(7), M.Hc(M.dc(91, 148, "HOME.HEALTH_MINISTRY")), M.zb(2), M.ic("ngIf", "ta" != t.currLang), M.zb(1), M.ic("ngIf", "ta" == t.currLang), M.zb(4), M.Hc(M.dc(98, 150, "HOME.CHILD")), M.zb(7), M.Hc(M.dc(105, 152, "HOME.MENTAL_HEALTH")), M.zb(7), M.Hc(M.dc(112, 154, "HOME.SENIOR_CITIZENS")), M.zb(12), M.Hc(M.dc(124, 156, "HOME.HELPLINE")), M.zb(6), M.Hc(M.dc(130, 158, "HOME.Support")), M.zb(7), M.Hc(M.dc(137, 160, "HOME.HEALTH_MINISTRY")), M.zb(2), M.ic("ngIf", "ta" != t.currLang), M.zb(1), M.ic("ngIf", "ta" == t.currLang), M.zb(4), M.Hc(M.dc(144, 162, "HOME.CHILD")), M.zb(7), M.Hc(M.dc(151, 164, "HOME.MENTAL_HEALTH")), M.zb(7), M.Hc(M.dc(158, 166, "HOME.SENIOR_CITIZENS")), M.zb(7), M.Hc(M.dc(165, 168, "SLOT_SEARCH.TITLE")), M.zb(6), M.Hc(M.dc(171, 170, "HOME.CARD_HEADER")), M.zb(7), M.ic("innerHTML", M.dc(178, 172, "HOME.CARD1_CONTENT"), M.wc), M.zb(3), M.jc("title", M.dc(182, 176, "HOME.CARD1_LINK_TITLE")), M.Ab("aria-label", M.dc(181, 174, "HOME.CARD1_LINK_TITLE")), M.zb(3), M.Ic(" ", M.dc(184, 178, "HOME.CARD1_LINK_TITLE"), ""), M.zb(6), M.ic("innerHTML", M.dc(190, 180, "HOME.CARD2_CONTENT"), M.wc), M.zb(3), M.kc("href", "https://prod-cdn.preprod.co-vin.in/assets/pdf/", t.dosDontsFileName, "", M.xc), M.jc("title", M.dc(194, 184, "HOME.CARD2_LINK_TITLE")), M.Ab("aria-label", M.dc(193, 182, "HOME.CARD2_LINK_TITLE")), M.zb(3), M.Hc(M.dc(196, 186, "HOME.CARD2_LINK_TITLE")), M.zb(6), M.ic("innerHTML", M.dc(202, 188, "HOME.CARD3_CONTENT"), M.wc), M.zb(3), M.jc("href", t.urls.certificate, M.xc), M.jc("title", M.dc(206, 192, "HOME.CARD3_LINK_TITLE")), M.Ab("aria-label", M.dc(205, 190, "HOME.CARD3_LINK_TITLE")), M.zb(3), M.Hc(M.dc(208, 194, "HOME.CARD3_LINK_TITLE")), M.zb(2), M.ic("hidden", !0), M.zb(18), M.Hc(M.dc(228, 196, "HOME.How_Can_We_Help_You")), M.zb(5), M.Hc(M.dc(233, 198, "HOME.Raise_An_Issue")), M.zb(4), M.kc("href", "", t.urls.selfReg, "certificate-correction", M.xc), M.jc("title", M.dc(238, 202, "HOME.Get_Your_Certificate_Corrected")), M.Ab("aria-label", M.dc(237, 200, "HOME.Get_Your_Certificate_Corrected")), M.zb(4), M.Hc(M.dc(241, 204, "HOME.Get_Your_Certificate_Corrected")), M.zb(4), M.kc("href", "", t.urls.selfReg, "certificate-correction/passport", M.xc), M.jc("title", M.dc(246, 208, "HOME.Add_Passport_Details_Vaccination_Certificate")), M.Ab("aria-label", M.dc(245, 206, "HOME.Add_Passport_Details_Vaccination_Certificate")), M.zb(4), M.Hc(M.dc(249, 210, "HOME.Add_Passport_Details_Vaccination_Certificate")), M.zb(4), M.jc("href", t.urls.selfReg, M.xc), M.jc("title", M.dc(254, 214, "HOME.Vaccine_Certificate_Not_Recieved")), M.Ab("aria-label", M.dc(253, 212, "HOME.Vaccine_Certificate_Not_Recieved")), M.zb(4), M.Hc(M.dc(257, 216, "HOME.Vaccine_Certificate_Not_Recieved")), M.zb(4), M.kc("href", "", t.urls.selfReg, "certificate-correction/merge/certificates", M.xc), M.jc("title", M.dc(262, 220, "HOME.Merge_Multiple_Dose#1_Certificates")), M.Ab("aria-label", M.dc(261, 218, "HOME.Merge_Multiple_Dose#1_Certificates")), M.zb(4), M.Hc(M.dc(265, 222, "HOME.Merge_Multiple_Dose#1_Certificates")), M.zb(6), M.Hc(M.dc(271, 224, "HEADER.Contactus")), M.zb(5), M.Hc(M.dc(276, 226, "HOME.HELPLINE")), M.zb(6), M.Ic(" (", M.dc(282, 228, "HEADER.Toll free"), " - "), M.zb(4), M.ic("ngIf", "ta" == t.currLang), M.zb(5), M.Hc(M.dc(291, 230, "HOME.Technical_Helpline")), M.zb(8), M.Hc(M.dc(299, 232, "HOME.FREQUENTLY_ASKED_QUESTIONS")), M.zb(5), M.Hc(M.dc(304, 234, "HOME.Top_Questions")), M.zb(7), M.Ic(" ", M.dc(311, 236, "FAQ.FAQ4"), " "), M.zb(4), M.Ic(" ", M.dc(315, 238, "FAQ.FAQ4_ANS"), " "), M.zb(3), M.Hc(M.dc(318, 240, "FAQ.FAQ4_ANS1")), M.zb(5), M.Ic(" ", M.dc(323, 242, "FAQ.FAQ5"), " "), M.zb(4), M.Ic(" ", M.dc(327, 244, "FAQ.FAQ5_ANS"), ""), M.zb(5), M.Ic(" ", M.dc(332, 246, "FAQ.FAQ7"), " "), M.zb(4), M.Ic(" ", M.dc(336, 248, "FAQ.FAQ7_ANS"), " "), M.zb(3), M.Ic(" ", M.dc(339, 250, "FAQ.FAQ7_ANS_A"), " "), M.zb(3), M.Ic(" ", M.dc(342, 252, "FAQ.FAQ7_ANS_B"), " "), M.zb(3), M.Ic(" ", M.dc(345, 254, "FAQ.FAQ7_ANS_C"), " "), M.zb(3), M.Ic(" ", M.dc(348, 256, "FAQ.FAQ7_ANS_D"), " "), M.zb(3), M.Ic(" ", M.dc(351, 258, "FAQ.FAQ7_ANS_E"), " "), M.zb(3), M.Ic(" ", M.dc(354, 260, "FAQ.FAQ7_ANS_F"), " "), M.zb(3), M.Ic(" ", M.dc(357, 262, "FAQ.FAQ7_ANS_G"), " "), M.zb(3), M.Ic(" ", M.dc(360, 264, "FAQ.FAQ7_ANS_H"), " "), M.zb(3), M.Ic(" ", M.dc(363, 266, "FAQ.FAQ7_ANS_I"), " "), M.zb(5), M.Ic(" ", M.dc(368, 268, "FAQ.FAQ8"), " "), M.zb(4), M.Hc(M.dc(372, 270, "FAQ.FAQ8_ANS")), M.zb(5), M.Ic(" ", M.dc(377, 272, "FAQ.FAQ11"), " "), M.zb(4), M.Ic(" ", M.dc(381, 274, "FAQ.FAQ11_ANS"), " "), M.zb(5), M.Ic(" ", M.dc(386, 276, "FAQ.FAQ14_ANS"), " "), M.zb(4), M.Ic(" ", M.dc(390, 278, "FAQ.FAQ14_ANS"), ""), M.zb(5), M.Ic(" ", M.dc(395, 280, "FAQ.FAQ16"), " "), M.zb(4), M.Ic(" ", M.dc(399, 282, "FAQ.FAQ16_ANS"), " "), M.zb(5), M.Ic(" ", M.dc(404, 284, "FAQ.FAQ18"), " "), M.zb(4), M.Ic(" ", M.dc(408, 286, "FAQ.FAQ18_ANS"), ""), M.zb(4), M.jc("title", M.dc(413, 290, "HOME.READ_ALL_FAQ")), M.Ab("aria-label", M.dc(412, 288, "HOME.READ_ALL_FAQ")), M.zb(4), M.Ic(" ", M.dc(416, 292, "HOME.READ_ALL_FAQ"), ""), M.zb(5), M.Hc(M.dc(421, 294, "HOME.Join_The_Largest_Vaccination_Drive")), M.zb(10), M.Hc(M.dc(431, 296, "HOME.CoWIN_Registrations")), M.zb(3), M.Hc(t.totReg), M.zb(3), M.Ic("+ ", t.yesterdayReg, ""), M.zb(1), M.Ic(" ", M.dc(438, 298, "HOME.Yesterday"), ""), M.zb(9), M.Hc(M.dc(447, 300, "HOME.Vaccinations_Delivered")), M.zb(3), M.Hc(t.totVaccination), M.zb(3), M.Ic("+ ", t.yesterdayVacc, ""), M.zb(1), M.Ic(" ", M.dc(454, 302, "HOME.Yesterday"), ""), M.zb(9), M.Hc(M.dc(463, 304, "HOME.Fully_Vaccinated")), M.zb(3), M.Hc(t.totDose2), M.zb(3), M.Ic("+ ", t.yesterdayDoseTwoVacc, ""), M.zb(1), M.Ic(" ", M.dc(470, 306, "HOME.Yesterday"), ""), M.zb(4), M.jc("href", t.urls.dashboard, M.xc), M.jc("title", M.dc(475, 310, "HOME.View_Vaccination_Dashboard")), M.Ab("aria-label", M.dc(474, 308, "HOME.View_Vaccination_Dashboard")), M.zb(3), M.Hc(M.dc(477, 312, "HOME.View_Vaccination_Dashboard")))
                    },
                    directives: [V.a, V.c, i.l, X.a, ut, wt.a, wt.c, wt.d, wt.e, o.f],
                    pipes: [R.b],
                    styles: ['@media only screen and (min-width:320px) and (max-width:767px){.availablitymobile[_ngcontent-%COMP%]{padding:0!important}}@media only screen and (min-width:320px) and (max-width:767px){.covidcertificat[_ngcontent-%COMP%]   .certiblock[_ngcontent-%COMP%]   .block1.pldg.undp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:40px}}.heading-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;font-size:20px;line-height:25px;font-weight:700;margin-top:15px;margin-bottom:20px;color:#212529}.helpline-detail[_ngcontent-%COMP%]{padding-bottom:20px;background-color:#fff}.helpline-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:5px;font-weight:600;color:#000}.helpline-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px}.helpline-detail[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.helpline[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:10px}@media only screen and (min-width:320px) and (max-width:767px){.helpline[_ngcontent-%COMP%]{margin-bottom:10px}}@media only screen and (min-width:768px) and (max-width:991px){.helpline[_ngcontent-%COMP%]{margin-bottom:10px}}.helpline[_ngcontent-%COMP%]   .icon-children[_ngcontent-%COMP%], .helpline[_ngcontent-%COMP%]   .icon-citizen[_ngcontent-%COMP%], .helpline[_ngcontent-%COMP%]   .icon-mental-health[_ngcontent-%COMP%], .helpline[_ngcontent-%COMP%]   .icon-ministry-helpline[_ngcontent-%COMP%], .helpline[_ngcontent-%COMP%]   span.icon-helpline[_ngcontent-%COMP%]{font-size:35px;color:#000;margin-right:10px;width:35px;text-align:right}.helpline[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:5px}.helpline[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]   span.icon-phone[_ngcontent-%COMP%]{color:#000;vertical-align:middle;margin-right:5px}.margin0cls[_ngcontent-%COMP%]{margin:0!important}.nopaddingclsblock[_ngcontent-%COMP%]{padding:0!important}.btn-primary[_ngcontent-%COMP%]{background-color:#002060}.flashNewsSection[_ngcontent-%COMP%]{background-color:#fff;padding:20px 0}.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]{background-color:#f6fbff;padding:8px 10px;border-radius:8px;border:1px solid #edeff0}.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;color:#002060;font-size:18px;margin-bottom:0}.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#808589;margin-bottom:0}.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #002060;border-radius:20px;color:#002060;text-transform:uppercase;padding:2px 10px;font-weight:500;width:130px}@media only screen and (min-width:320px) and (max-width:767px){.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]{text-align:center;padding-bottom:16px}.flashNewsSection[_ngcontent-%COMP%]   .newsPanel[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{margin-top:10px}}.homeBannerSection[_ngcontent-%COMP%]{background-color:#fff;padding-top:25px}.homeBannerSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:300;font-size:48px;line-height:64px;color:#002060}.homeBannerSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#002060}.homeBannerSection[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{text-align:right}.homeBannerSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#002060;text-transform:uppercase;font-weight:500;box-shadow:2px 2px 5px #999}.homeBannerSection[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]{border-radius:30px}.homeBannerSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:11px}.homeBannerSection[_ngcontent-%COMP%]   a.btn-warning[_ngcontent-%COMP%]{background-color:#ffc000;color:#002060}.homeBannerSection[_ngcontent-%COMP%]   a.btn-warning[_ngcontent-%COMP%]:hover{background-color:#ffc000}.homeBannerSection[_ngcontent-%COMP%]   a.btn-warning[_ngcontent-%COMP%]:focus{color:#002060}.homeBannerSection[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #002060}.homeBannerSection[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#fff}.homeBannerSection[_ngcontent-%COMP%]   a.btn-secondary[_ngcontent-%COMP%]:focus{color:#002060}@media only screen and (min-width:320px) and (max-width:767px){.homeBannerSection[_ngcontent-%COMP%]{padding-top:10px}.homeBannerSection[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]{text-align:center}.homeBannerSection[_ngcontent-%COMP%]   .bannerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%}.homeBannerSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:28px;line-height:32px}.homeBannerSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .homeBannerSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}}@media only screen and (min-width:320px) and (max-width:640px){.homeBannerSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px) and (max-width:938x){.homeBannerSection[_ngcontent-%COMP%]   .responsiveDesktop[_ngcontent-%COMP%]{display:none}.homeBannerSection[_ngcontent-%COMP%]   .responsiveTab[_ngcontent-%COMP%]{display:block}}.vaccinationCounter[_ngcontent-%COMP%]{margin-top:3px;background-color:#f7fcff;box-shadow:0 0 5px rgba(0,30,75,.3);padding:20px 0;text-align:center}.vaccinationCounter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:500;color:#002060;margin-bottom:5px}.vaccinationCounter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#002060}.vaccinationCounter[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;color:#343a40;font-size:15px;font-weight:500;margin-right:5px}.vaccinationCounter[_ngcontent-%COMP%]   .vaccinCount[_ngcontent-%COMP%]{position:relative}.vaccinationCounter[_ngcontent-%COMP%]   .vaccinCount[_ngcontent-%COMP%]   .mobileCount[_ngcontent-%COMP%]{font-size:28px;font-weight:500;letter-spacing:2px;display:block;margin-top:10px;margin-bottom:10px;pointer-events:none}.helplineSection[_ngcontent-%COMP%]{background-color:#fff;padding:20px 0}.helplineSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:0}.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:6px;text-transform:uppercase;border-right:1px solid #002060}.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:6px}.helplineSection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .helplineSection[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{margin-bottom:0}.helplineSection[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.helplineSection[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:600;color:#0056b3}.helplineSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#333;font-weight:600;font-size:12px;color:#0056b3}.helplineSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .helplineSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.helplineSection[_ngcontent-%COMP%]   .noMobile[_ngcontent-%COMP%]{display:block}.helplineSection[_ngcontent-%COMP%]   .mobileOnly[_ngcontent-%COMP%], .helplineSection[_ngcontent-%COMP%]   .noDisktop[_ngcontent-%COMP%]{display:none}.helplineSection[_ngcontent-%COMP%]   .helplineNumbers[_ngcontent-%COMP%]{overflow:auto}.helplineSection[_ngcontent-%COMP%]   .helplineNumbers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0 auto;padding:0;width:650px;text-align:center}.helplineSection[_ngcontent-%COMP%]   .helplineNumbers[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-block;width:130px;margin-bottom:10px;text-align:left}.helplineSection[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{height:2px;width:4px;border:1px solid #eee}@media only screen and (min-width:320px) and (max-width:767px){.helplineSection[_ngcontent-%COMP%]   .mobileOnly[_ngcontent-%COMP%]{display:block}.helplineSection[_ngcontent-%COMP%]   .noMobile[_ngcontent-%COMP%]{display:none}.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;border-right:0;position:relative}.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after{position:absolute;content:"";width:40px;height:1px;background-color:#002060;bottom:-2px;left:6px;right:0;margin:0 auto}.helplineSection[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:1rem}}@media only screen and (min-width:768px) and (max-width:938px){.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;border-right:0;position:relative}.helplineSection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:after{position:absolute;content:"";width:40px;height:1px;background-color:#002060;bottom:-2px;left:6px;right:0;margin:0 auto}.helplineSection[_ngcontent-%COMP%]   .noMobile[_ngcontent-%COMP%]{display:none}.helplineSection[_ngcontent-%COMP%]   .noDisktop[_ngcontent-%COMP%]{display:block}}@media only screen and (min-width:640px) and (max-width:667px){.helplineSection[_ngcontent-%COMP%]   .helplineNumbers[_ngcontent-%COMP%]{overflow:inherit}}.nearestCentersSection[_ngcontent-%COMP%]{box-shadow:0 0 6px rgba(0,30,75,.3);padding:60px 0 0;background-color:#fff}.nearestCentersSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.getVaccinationSection[_ngcontent-%COMP%]{padding:60px 0;background-color:#fff}.getVaccinationSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{width:180px;margin:0 auto -50px;z-index:99}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#f7fcff;border-radius:10px;box-shadow:0 1px 2px #999}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-weight:600;padding-top:50px;line-height:21px;text-align:center;color:#002060}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:11px;text-transform:uppercase;color:#002060;text-decoration:underline}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}@media only screen and (min-width:320px) and (max-width:767px){.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin-bottom:20px}}@media only screen and (min-width:768px) and (max-width:938px){.getVaccinationSection[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{min-height:235px}}@media only screen and (min-width:768px) and (max-width:1024px){.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:14px}.getVaccinationSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{width:140px}}.videoSection[_ngcontent-%COMP%]{padding:60px 0;background-color:#fff}.videoSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.videoSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0}.videoSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-color:#f7fcff;border-radius:5px;box-shadow:0 1px 2px #999;padding:7px;display:flex;align-items:center}.videoSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:auto}.helpYouSection[_ngcontent-%COMP%]{padding:60px 0;background-color:#f7fcff}.helpYouSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.helpYouSection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#002060}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]{padding:0;margin:0}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;list-style-type:none}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:95%}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-align:left;border:none;border-radius:8px;padding:8px 15px;white-space:pre-wrap}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;top:3px;right:0;float:right}.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{font-weight:500}.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{border-bottom:2px solid #3b3f47;padding-bottom:10px}.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:0;color:#374957;font-weight:500}.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}@media only screen and (min-width:320px) and (max-width:767px){.helpYouSection[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{margin-top:40px}}@media screen and (max-width:360px){.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px}.helpYouSection[_ngcontent-%COMP%]   .helpListUL[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:8px 12px}}.faqSection[_ngcontent-%COMP%]{background-color:#fff;padding:60px 0}.faqSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.faqSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:1px solid #999;border-radius:10px}.faqSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{background-color:#002060;color:#fff;padding:10px 20px;font-weight:600;border-radius:10px 10px 0 0}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0;margin-bottom:0}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]   .mat-expanded[_ngcontent-%COMP%]{background-color:#f7fcff}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-child{border-radius:0 0 10px 10px}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{min-height:60px;height:auto;padding-top:8px;padding-bottom:8px}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]   mat-panel-title[_ngcontent-%COMP%]{font-weight:600}.faqSection[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel-spacing[_ngcontent-%COMP%]{margin:0}.faqSection[_ngcontent-%COMP%]   .faqMoreBtnPanel[_ngcontent-%COMP%]{text-align:right}.faqSection[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{border:0;border-radius:30px;padding:8px 40px;text-transform:uppercase;white-space:normal}.faqSection[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;margin-right:5px}@media only screen and (min-width:320px) and (max-width:767px){.faqSection[_ngcontent-%COMP%]   .faqMoreBtnPanel[_ngcontent-%COMP%]{text-align:center}}.vaccinaitonDriveSection[_ngcontent-%COMP%]{color:#002060;padding:60px 0;background-color:#f7fcff}.vaccinaitonDriveSection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#002060;line-height:40px}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .vaccinationDriveUL[_ngcontent-%COMP%]{margin:0;padding:0;text-align:center}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .vaccinationDriveUL[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style-type:none;display:inline-block;margin:0 10px 15px}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{background-color:#fff;width:240px;text-align:left;padding:10px 15px;box-shadow:0 0 4px rgba(0,30,95,.4);border-radius:10px}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2e9a00;font-weight:500}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:11px}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:36px;display:inline-block;margin-top:10px}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;color:#002060;text-transform:uppercase;padding-left:15px;padding-right:15px;font-size:12px;font-weight:500;border:0;box-shadow:0 0 4px rgba(0,30,95,.4)}.vaccinaitonDriveSection[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:8px}.nationalBanner[_ngcontent-%COMP%]{background:#ffd967;padding:48px 0}.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#002060;text-transform:capitalize;font-weight:400;font-size:30px;line-height:1.5}.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#002060;font-weight:400;font-size:20px}.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]   .knowmoreBtn[_ngcontent-%COMP%]{color:#fff;background-color:#1e3770;border-radius:30px;padding:8px 20px;font-size:12px;border:none;text-transform:uppercase}.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]   .knowmoreBtn[_ngcontent-%COMP%]   .knowmoreBtn[_ngcontent-%COMP%]:focus{outline:none}@media only screen and (min-width:320px) and (max-width:767px){.nationalBanner[_ngcontent-%COMP%]   .textCol[_ngcontent-%COMP%]{text-align:center}}.nationalBanner[_ngcontent-%COMP%]   .nationbannerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:auto}@media only screen and (min-width:320px) and (max-width:767px){.nationalBanner[_ngcontent-%COMP%]   .nationbannerImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:80%;margin:0 auto;display:block}}@media only screen and (min-width:320px) and (max-width:767px){.nationalBanner[_ngcontent-%COMP%]{padding:20px 0}}.bannerimgcontent[_ngcontent-%COMP%]{color:#fff;margin:0 auto;background:#ffd967;min-height:381px}.bannerimgcontent[_ngcontent-%COMP%]   .bannerinnercontent[_ngcontent-%COMP%]{display:table;margin:0 auto}@media only screen and (min-width:320px) and (max-width:767px){.bannerimgcontent[_ngcontent-%COMP%]   .bannerinnercontent[_ngcontent-%COMP%]{width:100%;margin:0 auto}}.bannerimgcontent[_ngcontent-%COMP%]   .bannerimgblock[_ngcontent-%COMP%]{width:320px;float:left;margin-top:70px;margin-left:50px}.bannerimgcontent[_ngcontent-%COMP%]   .bannerimgblock[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}@media only screen and (min-width:320px) and (max-width:767px){.bannerimgcontent[_ngcontent-%COMP%]   .bannerimgblock[_ngcontent-%COMP%]{float:none}}.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]{float:left;width:455px;margin-top:70px}.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;padding:0;text-transform:uppercase;font-size:28px;font-weight:400;color:#001f60}.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px;font-weight:600!important}@media only screen and (min-width:320px) and (max-width:767px){.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}}.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:10px 0 0;color:#001f60;font-size:16px;line-height:1.5;font-weight:400}@media only screen and (min-width:320px) and (max-width:767px){.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:12px;line-height:1.5}}@media only screen and (min-width:320px) and (max-width:767px){.bannerimgcontent[_ngcontent-%COMP%]   .bannerinfo[_ngcontent-%COMP%]{width:100%;margin:20px auto 0;float:none;padding:10px}}.banner-2[_ngcontent-%COMP%]{background:#ffd967;height:384px;width:100%}.knowmore-block[_ngcontent-%COMP%]{padding-top:15px}.knowmore-btn[_ngcontent-%COMP%]{background:#001f60;color:#fff;padding:8px 20px;border-radius:31px;font-weight:400;line-height:1.5;display:flex;text-decoration:none;width:117px;justify-content:center;align-items:center;font-size:14px}']
                }), n
            })();
            var Bt = e("GcOp");
            const zt = [{
                path: "",
                component: Lt
            }];
            let Nt = (() => {
                class n {}
                return n.\u0275mod = M.Jb({
                    type: n
                }), n.\u0275inj = M.Ib({
                    factory: function(t) {
                        return new(t || n)
                    },
                    imports: [
                        [i.c, a.a, o.g.forChild(zt), Y.c, Bt.a, X.b]
                    ]
                }), n
            })()
        }
    }
]);