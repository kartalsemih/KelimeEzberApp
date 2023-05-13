import React, { useState, useEffect } from 'react';
import '../App.css';
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { CiFaceSmile, CiFaceFrown } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti'
function MostUsedWords() {
    const [flippedCards, setFlippedCards] = useState({});
    const [numWords, setNumWords] = useState('Kelime sayısı?'); // kullanıcının girdiği kelime sayısı
    const [showCards, setShowCards] = useState(false); // kartların gösterilip gösterilmeyeceğini belirleyen state değişkeni




    const wordsThousand = [
        {
            rank: 1,
            targetWord: "",
            englishWord: "a",
            img: '/img/answer.jpg',
            mean: 'bir'
        },
        {
            rank: 2,
            targetWord: "",
            englishWord: "ability",
            img: '/img/answer.jpg',
            mean: 'kabiliyet, yetenek, beceri, güç, iktidar'
        },
        {
            rank: 3,
            targetWord: "",
            englishWord: "able",
            img: '/img/answer.jpg',
            mean: 'yapabilmek, yapabilen'
        },
        {
            rank: 4,
            targetWord: "",
            englishWord: "about",
            img: '/img/answer.jpg',
            mean: 'hakkında, ilgili, konusunda'
        },
        {
            rank: 5,
            targetWord: "",
            englishWord: "above",
            img: '/img/answer.jpg',
            mean: 'yukarıda'
        },
        {
            rank: 6,
            targetWord: "",
            englishWord: "accept",
            img: '/img/answer.jpg',
            mean: 'kabul etmek'
        },
        {
            rank: 7,
            targetWord: "",
            englishWord: "according",
            img: '/img/answer.jpg',
            mean: 'göre'
        },
        {
            rank: 8,
            targetWord: "",
            englishWord: "account",
            img: '/img/answer.jpg',
            mean: 'hesap, açıklama, banka hesabı'
        },
        {
            rank: 9,
            targetWord: "",
            englishWord: "across",
            img: '/img/answer.jpg',
            mean: 'karşısında'
        },
        {
            rank: 10,
            targetWord: "",
            englishWord: "act",
            img: '/img/answer.jpg',
            mean: 'hareket, eylem, davranış'
        },
        {
            rank: 11,
            targetWord: "",
            englishWord: "action",
            img: '/img/answer.jpg',
            mean: 'eylem, etki, hareket, aksiyon'
        },
        {
            rank: 12,
            targetWord: "",
            englishWord: "activity",
            img: '/img/answer.jpg',
            mean: 'faaliyet, etkinlik, aktivite'
        },
        {
            rank: 13,
            targetWord: "",
            englishWord: "actually",
            img: '/img/answer.jpg',
            mean: 'aslında, gerçekte'
        },
        {
            rank: 14,
            targetWord: "",
            englishWord: "add",
            img: '/img/answer.jpg',
            mean: 'eklemek, katmak, ilave etmek, toplamak, katmak'
        },
        {
            rank: 15,
            targetWord: "",
            englishWord: "address",
            img: '/img/answer.jpg',
            mean: 'adres'
        },
        {
            rank: 16,
            targetWord: "",
            englishWord: "administration",
            img: '/img/answer.jpg',
            mean: 'yönetim, idare'
        },
        {
            rank: 17,
            targetWord: "",
            englishWord: "admit",
            img: '/img/answer.jpg',
            mean: 'Kabul etmek'
        },
        {
            rank: 18,
            targetWord: "",
            englishWord: "adult",
            img: '/img/answer.jpg',
            mean: 'yetişkin, erişkin'
        },
        {
            rank: 19,
            targetWord: "",
            englishWord: "affect",
            img: '/img/answer.jpg',
            mean: 'etkilemek, etki etmek'
        },
        {
            rank: 20,
            targetWord: "",
            englishWord: "after",
            img: '/img/answer.jpg',
            mean: 'sonra, ardından, daha sonra'
        },
        {
            rank: 21,
            targetWord: "",
            englishWord: "again",
            img: '/img/answer.jpg',
            mean: 'tekrar, yeniden'
        },
        {
            rank: 22,
            targetWord: "",
            englishWord: "against",
            img: '/img/answer.jpg',
            mean: 'karşısında, karşı'
        },
        {
            rank: 23,
            targetWord: "",
            englishWord: "age",
            img: '/img/answer.jpg',
            mean: 'yaş'
        },
        {
            rank: 24,
            targetWord: "",
            englishWord: "agency",
            img: '/img/answer.jpg',
            mean: 'Ajans, acenta'
        },
        {
            rank: 25,
            targetWord: "",
            englishWord: "agent",
            img: '/img/answer.jpg',
            mean: 'ajan, temsilci, etken'
        },
        {
            rank: 26,
            targetWord: "",
            englishWord: "ago",
            img: '/img/answer.jpg',
            mean: 'önce, evvel'
        },
        {
            rank: 27,
            targetWord: "",
            englishWord: "agree",
            img: '/img/answer.jpg',
            mean: 'anlaşmak, kabul etmek'
        },
        {
            rank: 28,
            targetWord: "",
            englishWord: "agreement",
            img: '/img/answer.jpg',
            mean: 'anlaşma, sözleşme'
        },
        {
            rank: 29,
            targetWord: "",
            englishWord: "ahead",
            img: '/img/answer.jpg',
            mean: 'önde, ileri'
        },
        {
            rank: 30,
            targetWord: "",
            englishWord: "air",
            img: '/img/answer.jpg',
            mean: 'hava'
        },
        {
            rank: 31,
            targetWord: "",
            englishWord: "all",
            img: '/img/answer.jpg',
            mean: 'herşey, tüm, bütün'
        },
        {
            rank: 32,
            targetWord: "",
            englishWord: "allow",
            img: '/img/answer.jpg',
            mean: 'izin vermek'
        },
        {
            rank: 33,
            targetWord: "",
            englishWord: "almost",
            img: '/img/answer.jpg',
            mean: 'neredeyse, hemen hemen'
        },
        {
            rank: 34,
            targetWord: "",
            englishWord: "alone",
            img: '/img/answer.jpg',
            mean: 'yalnız, tek başına'
        },
        {
            rank: 35,
            targetWord: "",
            englishWord: "along",
            img: '/img/answer.jpg',
            mean: 'boyunca, yanı sıra'
        },
        {
            rank: 36,
            targetWord: "",
            englishWord: "already",
            img: '/img/answer.jpg',
            mean: 'zaten'
        },
        {
            rank: 37,
            targetWord: "",
            englishWord: "also",
            img: '/img/answer.jpg',
            mean: 'ayrıca, hem de'
        },
        {
            rank: 38,
            targetWord: "",
            englishWord: "although",
            img: '/img/answer.jpg',
            mean: 'rağmen, karşın , gerçi'
        },
        {
            rank: 39,
            targetWord: "",
            englishWord: "always",
            img: '/img/answer.jpg',
            mean: 'her zaman, daima'
        },
        {
            rank: 40,
            targetWord: "",
            englishWord: "American",
            img: '/img/answer.jpg',
            mean: 'amerikan'
        },
        {
            rank: 41,
            targetWord: "",
            englishWord: "among",
            img: '/img/answer.jpg',
            mean: 'arasında, içinde'
        },
        {
            rank: 42,
            targetWord: "",
            englishWord: "amount",
            img: '/img/answer.jpg',
            mean: 'miktar, tutar, değer'
        },
        {
            rank: 43,
            targetWord: "",
            englishWord: "analysis",
            img: '/img/answer.jpg',
            mean: 'analiz, çözümleme'
        },
        {
            rank: 44,
            targetWord: "",
            englishWord: "and",
            img: '/img/answer.jpg',
            mean: 've, ile'
        },
        {
            rank: 45,
            targetWord: "",
            englishWord: "animal",
            img: '/img/answer.jpg',
            mean: 'hayvan'
        },
        {
            rank: 46,
            targetWord: "",
            englishWord: "another",
            img: '/img/answer.jpg',
            mean: 'bir diğeri, başka, farklı, ayrı'
        },
        {
            rank: 47,
            targetWord: "",
            englishWord: "answer",
            img: '/img/answer.jpg',
            mean: 'cevap, yanıt'
        },
        {
            rank: 48,
            targetWord: "",
            englishWord: "any",
            img: '/img/answer.jpg',
            mean: 'herhangi, hiç, her'
        },
        {
            rank: 49,
            targetWord: "",
            englishWord: "anyone",
            img: '/img/answer.jpg',
            mean: 'kimse, herhangi biri, hiç kimse'
        },
        {
            rank: 50,
            targetWord: "",
            englishWord: "anything",
            img: '/img/answer.jpg',
            mean: 'bir şey, herhangi bir şey, hiçbir şey'
        },
        {
            rank: 51,
            targetWord: "",
            englishWord: "appear",
            img: '/img/answer.jpg',
            mean: 'görünmek, gözükmek'
        },
        {
            rank: 52,
            targetWord: "",
            englishWord: "apply",
            img: '/img/answer.jpg',
            mean: 'uygulamak, başvurmak'
        },
        {
            rank: 53,
            targetWord: "",
            englishWord: "approach",
            img: '/img/answer.jpg',
            mean: 'yaklaşım, yaklaşma'
        },
        {
            rank: 54,
            targetWord: "",
            englishWord: "area",
            img: '/img/answer.jpg',
            mean: 'alan, bölge'
        },
        {
            rank: 55,
            targetWord: "",
            englishWord: "argue",
            img: '/img/answer.jpg',
            mean: 'tartışmak'
        },
        {
            rank: 56,
            targetWord: "",
            englishWord: "arm",
            img: '/img/answer.jpg',
            mean: 'kol, silah, dal'
        },
        {
            rank: 57,
            targetWord: "",
            englishWord: "around",
            img: '/img/answer.jpg',
            mean: 'etrafında'
        },
        {
            rank: 58,
            targetWord: "",
            englishWord: "arrive",
            img: '/img/answer.jpg',
            mean: 'varmak, ulaşmak'
        },
        {
            rank: 59,
            targetWord: "",
            englishWord: "art",
            img: '/img/answer.jpg',
            mean: 'sanat'
        },
        {
            rank: 60,
            targetWord: "",
            englishWord: "article",
            img: '/img/answer.jpg',
            mean: 'makale, madde, yazı'
        },
        {
            rank: 61,
            targetWord: "",
            englishWord: "artist",
            img: '/img/answer.jpg',
            mean: 'sanatçı'
        },
        {
            rank: 62,
            targetWord: "",
            englishWord: "as",
            img: '/img/answer.jpg',
            mean: 'gibi, olarak'
        },
        {
            rank: 63,
            targetWord: "",
            englishWord: "ask",
            img: '/img/answer.jpg',
            mean: 'sormak, istemek'
        },
        {
            rank: 64,
            targetWord: "",
            englishWord: "assume",
            img: '/img/answer.jpg',
            mean: 'varsaymak, farzetmek'
        },
        {
            rank: 65,
            targetWord: "",
            englishWord: "attack",
            img: '/img/answer.jpg',
            mean: 'saldırı, atak'
        },
        {
            rank: 66,
            targetWord: "",
            englishWord: "attention",
            img: '/img/answer.jpg',
            mean: 'dikkat'
        },
        {
            rank: 67,
            targetWord: "",
            englishWord: "attorney",
            img: '/img/answer.jpg',
            mean: 'avukat, vekil'
        },
        {
            rank: 68,
            targetWord: "",
            englishWord: "audience",
            img: '/img/answer.jpg',
            mean: 'seyirci, izleyici'
        },
        {
            rank: 69,
            targetWord: "",
            englishWord: "author",
            img: '/img/answer.jpg',
            mean: 'yazar'
        },
        {
            rank: 70,
            targetWord: "",
            englishWord: "authority",
            img: '/img/answer.jpg',
            mean: 'yetki, otorite'
        },
        {
            rank: 71,
            targetWord: "",
            englishWord: "available",
            img: '/img/answer.jpg',
            mean: 'müsait, mevcut, geçerli'
        },
        {
            rank: 72,
            targetWord: "",
            englishWord: "avoid",
            img: '/img/answer.jpg',
            mean: 'önlemek, kaçınmak'
        },
        {
            rank: 73,
            targetWord: "",
            englishWord: "away",
            img: '/img/answer.jpg',
            mean: 'uzak, uzakta'
        },
        {
            rank: 74,
            targetWord: "",
            englishWord: "baby",
            img: '/img/answer.jpg',
            mean: 'bebek'
        },
        {
            rank: 75,
            targetWord: "",
            englishWord: "back",
            img: '/img/answer.jpg',
            mean: 'geri'
        },
        {
            rank: 76,
            targetWord: "",
            englishWord: "bad",
            img: '/img/answer.jpg',
            mean: 'kötü'
        },
        {
            rank: 77,
            targetWord: "",
            englishWord: "bag",
            img: '/img/answer.jpg',
            mean: 'sırt çantası'
        },
        {
            rank: 78,
            targetWord: "",
            englishWord: "ball",
            img: '/img/answer.jpg',
            mean: 'top'
        },
        {
            rank: 79,
            targetWord: "",
            englishWord: "bank",
            img: '/img/answer.jpg',
            mean: 'banka'
        },
        {
            rank: 80,
            targetWord: "",
            englishWord: "bar",
            img: '/img/answer.jpg',
            mean: 'bar'
        },
        {
            rank: 81,
            targetWord: "",
            englishWord: "base",
            img: '/img/answer.jpg',
            mean: 'üs, temel, baz'
        },
        {
            rank: 82,
            targetWord: "",
            englishWord: "be",
            img: '/img/answer.jpg',
            mean: 'olmak, var olmak'
        },
        {
            rank: 83,
            targetWord: "",
            englishWord: "beat",
            img: '/img/answer.jpg',
            mean: 'dövmek, yenmek'
        },
        {
            rank: 84,
            targetWord: "",
            englishWord: "beautiful",
            img: '/img/answer.jpg',
            mean: 'güzel'
        },
        {
            rank: 85,
            targetWord: "",
            englishWord: "because",
            img: '/img/answer.jpg',
            mean: 'çünkü'
        },
        {
            rank: 86,
            targetWord: "",
            englishWord: "become",
            img: '/img/answer.jpg',
            mean: 'olmak, haline gelmek'
        },
        {
            rank: 87,
            targetWord: "",
            englishWord: "bed",
            img: '/img/answer.jpg',
            mean: 'yatak'
        },
        {
            rank: 88,
            targetWord: "",
            englishWord: "before",
            img: '/img/answer.jpg',
            mean: 'önce'
        },
        {
            rank: 89,
            targetWord: "",
            englishWord: "begin",
            img: '/img/answer.jpg',
            mean: 'başlamak, başlatmak'
        },
        {
            rank: 90,
            targetWord: "",
            englishWord: "behavior",
            img: '/img/answer.jpg',
            mean: 'davranış, tutum, hareket'
        },
        {
            rank: 91,
            targetWord: "",
            englishWord: "behind",
            img: '/img/answer.jpg',
            mean: 'arkasında, gerisinde'
        },
        {
            rank: 92,
            targetWord: "",
            englishWord: "believe",
            img: '/img/answer.jpg',
            mean: 'inanmak, inancı olmak'
        },
        {
            rank: 93,
            targetWord: "",
            englishWord: "benefit",
            img: '/img/answer.jpg',
            mean: 'yarar, fayda'
        },
        {
            rank: 94,
            targetWord: "",
            englishWord: "best",
            img: '/img/answer.jpg',
            mean: 'en iyi, en iyisi, en'
        },
        {
            rank: 95,
            targetWord: "",
            englishWord: "better",
            img: '/img/answer.jpg',
            mean: 'daha iyi, daha güzel, daha iyi şekilde'
        },
        {
            rank: 96,
            targetWord: "",
            englishWord: "between",
            img: '/img/answer.jpg',
            mean: 'arasında, aralarında'
        },
        {
            rank: 97,
            targetWord: "",
            englishWord: "beyond",
            img: '/img/answer.jpg',
            mean: 'ötesinde, öte'
        },
        {
            rank: 98,
            targetWord: "",
            englishWord: "big",
            img: '/img/answer.jpg',
            mean: 'büyük'
        },
        {
            rank: 99,
            targetWord: "",
            englishWord: "bill",
            img: '/img/answer.jpg',
            mean: 'fatura'
        },
        {
            rank: 100,
            targetWord: "",
            englishWord: "billion",
            img: '/img/answer.jpg',
            mean: 'milyar'
        },
        {
            rank: 101,
            targetWord: "",
            englishWord: "black",
            img: '/img/answer.jpg',
            mean: 'siyah'
        },
        {
            rank: 102,
            targetWord: "",
            englishWord: "blood",
            img: '/img/answer.jpg',
            mean: 'kan'
        },
        {
            rank: 103,
            targetWord: "",
            englishWord: "blue",
            img: '/img/answer.jpg',
            mean: 'mavi'
        },
        {
            rank: 104,
            targetWord: "",
            englishWord: "board",
            img: '/img/answer.jpg',
            mean: 'yazı tahtası'
        },
        {
            rank: 105,
            targetWord: "",
            englishWord: "body",
            img: '/img/answer.jpg',
            mean: 'vücut'
        },
        {
            rank: 106,
            targetWord: "",
            englishWord: "book",
            img: '/img/answer.jpg',
            mean: 'kitap'
        },
        {
            rank: 107,
            targetWord: "",
            englishWord: "born",
            img: '/img/answer.jpg',
            mean: 'doğmuş, doğum'
        },
        {
            rank: 108,
            targetWord: "",
            englishWord: "both",
            img: '/img/answer.jpg',
            mean: 'her ikisi de, ikisi de'
        },
        {
            rank: 109,
            targetWord: "",
            englishWord: "box",
            img: '/img/answer.jpg',
            mean: 'kutu'
        },
        {
            rank: 110,
            targetWord: "",
            englishWord: "boy",
            img: '/img/answer.jpg',
            mean: 'erkek çocuk'
        },
        {
            rank: 111,
            targetWord: "",
            englishWord: "break",
            img: '/img/answer.jpg',
            mean: 'kırılma'
        },
        {
            rank: 112,
            targetWord: "",
            englishWord: "bring",
            img: '/img/answer.jpg',
            mean: 'getirmek'
        },
        {
            rank: 113,
            targetWord: "",
            englishWord: "brother",
            img: '/img/answer.jpg',
            mean: 'erkek kardeş'
        },
        {
            rank: 114,
            targetWord: "",
            englishWord: "budget",
            img: '/img/answer.jpg',
            mean: 'bütçe'
        },
        {
            rank: 115,
            targetWord: "",
            englishWord: "build",
            img: '/img/answer.jpg',
            mean: 'inşa etmek'
        },
        {
            rank: 116,
            targetWord: "",
            englishWord: "building",
            img: '/img/answer.jpg',
            mean: 'bina'
        },
        {
            rank: 117,
            targetWord: "",
            englishWord: "business",
            img: '/img/answer.jpg',
            mean: 'iş'
        },
        {
            rank: 118,
            targetWord: "",
            englishWord: "but",
            img: '/img/answer.jpg',
            mean: 'fakat, ama, lakin'
        },
        {
            rank: 119,
            targetWord: "",
            englishWord: "buy",
            img: '/img/answer.jpg',
            mean: 'satın almak'
        },
        {
            rank: 120,
            targetWord: "",
            englishWord: "by",
            img: '/img/answer.jpg',
            mean: 'tarafından, ile, göre, vasıtasıyla'
        },
        {
            rank: 121,
            targetWord: "",
            englishWord: "call",
            img: '/img/answer.jpg',
            mean: 'aramak'
        },
        {
            rank: 122,
            targetWord: "",
            englishWord: "camera",
            img: '/img/answer.jpg',
            mean: 'kamera'
        },
        {
            rank: 123,
            targetWord: "",
            englishWord: "campaign",
            img: '/img/answer.jpg',
            mean: 'kampanya'
        },
        {
            rank: 124,
            targetWord: "",
            englishWord: "can",
            img: '/img/answer.jpg',
            mean: 'yapabilmek'
        },
        {
            rank: 125,
            targetWord: "",
            englishWord: "cancer",
            img: '/img/answer.jpg',
            mean: 'kanser'
        },
        {
            rank: 126,
            targetWord: "",
            englishWord: "candidate",
            img: '/img/answer.jpg',
            mean: 'aday'
        },
        {
            rank: 127,
            targetWord: "",
            englishWord: "capital",
            img: '/img/answer.jpg',
            mean: 'başkent'
        },
        {
            rank: 128,
            targetWord: "",
            englishWord: "car",
            img: '/img/answer.jpg',
            mean: 'araba'
        },
        {
            rank: 129,
            targetWord: "",
            englishWord: "card",
            img: '/img/answer.jpg',
            mean: 'kart'
        },
        {
            rank: 130,
            targetWord: "",
            englishWord: "care",
            img: '/img/answer.jpg',
            mean: 'bakım'
        },
        {
            rank: 131,
            targetWord: "",
            englishWord: "career",
            img: '/img/answer.jpg',
            mean: 'kariyer'
        },
        {
            rank: 132,
            targetWord: "",
            englishWord: "carry",
            img: '/img/answer.jpg',
            mean: 'taşımak'
        },
        {
            rank: 133,
            targetWord: "",
            englishWord: "case",
            img: '/img/answer.jpg',
            mean: 'dava'
        },
        {
            rank: 134,
            targetWord: "",
            englishWord: "catch",
            img: '/img/answer.jpg',
            mean: 'yakalamak'
        },
        {
            rank: 135,
            targetWord: "",
            englishWord: "cause",
            img: '/img/answer.jpg',
            mean: 'sebep olmak'
        },
        {
            rank: 136,
            targetWord: "",
            englishWord: "cell",
            img: '/img/answer.jpg',
            mean: 'hücre'
        },
        {
            rank: 137,
            targetWord: "",
            englishWord: "center",
            img: '/img/answer.jpg',
            mean: 'merkez'
        },
        {
            rank: 138,
            targetWord: "",
            englishWord: "central",
            img: '/img/answer.jpg',
            mean: 'merkezi'
        },
        {
            rank: 139,
            targetWord: "",
            englishWord: "century",
            img: '/img/answer.jpg',
            mean: 'yüzyıl'
        },
        {
            rank: 140,
            targetWord: "",
            englishWord: "certain",
            img: '/img/answer.jpg',
            mean: 'belli'
        },
        {
            rank: 141,
            targetWord: "",
            englishWord: "certainly",
            img: '/img/answer.jpg',
            mean: 'kesinlikle'
        },
        {
            rank: 142,
            targetWord: "",
            englishWord: "chair",
            img: '/img/answer.jpg',
            mean: 'sandalye'
        },
        {
            rank: 143,
            targetWord: "",
            englishWord: "challenge",
            img: '/img/answer.jpg',
            mean: 'meydan okuma'
        },
        {
            rank: 144,
            targetWord: "",
            englishWord: "chance",
            img: '/img/answer.jpg',
            mean: 'şans'
        },
        {
            rank: 145,
            targetWord: "",
            englishWord: "change",
            img: '/img/answer.jpg',
            mean: 'değişiklik'
        },
        {
            rank: 146,
            targetWord: "",
            englishWord: "character",
            img: '/img/answer.jpg',
            mean: 'karakter'
        },
        {
            rank: 147,
            targetWord: "",
            englishWord: "charge",
            img: '/img/answer.jpg',
            mean: 'şarj etmek'
        },
        {
            rank: 148,
            targetWord: "",
            englishWord: "check",
            img: '/img/answer.jpg',
            mean: 'kontrol'
        },
        {
            rank: 149,
            targetWord: "",
            englishWord: "child",
            img: '/img/answer.jpg',
            mean: 'çocuk'
        },
        {
            rank: 150,
            targetWord: "",
            englishWord: "choice",
            img: '/img/answer.jpg',
            mean: 'seçim'
        },
        {
            rank: 151,
            targetWord: "",
            englishWord: "choose",
            img: '/img/answer.jpg',
            mean: 'seçmek'
        },
        {
            rank: 152,
            targetWord: "",
            englishWord: "church",
            img: '/img/answer.jpg',
            mean: 'kilise'
        },
        {
            rank: 153,
            targetWord: "",
            englishWord: "citizen",
            img: '/img/answer.jpg',
            mean: 'vatandaş'
        },
        {
            rank: 154,
            targetWord: "",
            englishWord: "city",
            img: '/img/answer.jpg',
            mean: 'şehir'
        },
        {
            rank: 155,
            targetWord: "",
            englishWord: "civil",
            img: '/img/answer.jpg',
            mean: 'sivil'
        },
        {
            rank: 156,
            targetWord: "",
            englishWord: "claim",
            img: '/img/answer.jpg',
            mean: 'iddia'
        },
        {
            rank: 157,
            targetWord: "",
            englishWord: "class",
            img: '/img/answer.jpg',
            mean: 'sınıf'
        },
        {
            rank: 158,
            targetWord: "",
            englishWord: "clear",
            img: '/img/answer.jpg',
            mean: 'açık'
        },
        {
            rank: 159,
            targetWord: "",
            englishWord: "clearly",
            img: '/img/answer.jpg',
            mean: 'açıkça'
        },
        {
            rank: 160,
            targetWord: "",
            englishWord: "close",
            img: '/img/answer.jpg',
            mean: 'kapat, kapalı'
        },
        {
            rank: 161,
            targetWord: "",
            englishWord: "coach",
            img: '/img/answer.jpg',
            mean: 'koç'
        },
        {
            rank: 162,
            targetWord: "",
            englishWord: "cold",
            img: '/img/answer.jpg',
            mean: 'soğuk'
        },
        {
            rank: 163,
            targetWord: "",
            englishWord: "collection",
            img: '/img/answer.jpg',
            mean: 'toplamak'
        },
        {
            rank: 164,
            targetWord: "",
            englishWord: "college",
            img: '/img/answer.jpg',
            mean: 'kolej'
        },
        {
            rank: 165,
            targetWord: "",
            englishWord: "color",
            img: '/img/answer.jpg',
            mean: 'renk'
        },
        {
            rank: 166,
            targetWord: "",
            englishWord: "come",
            img: '/img/answer.jpg',
            mean: 'gelmek'
        },
        {
            rank: 167,
            targetWord: "",
            englishWord: "commercial",
            img: '/img/answer.jpg',
            mean: 'ticari'
        },
        {
            rank: 168,
            targetWord: "",
            englishWord: "common",
            img: '/img/answer.jpg',
            mean: 'ortak'
        },
        {
            rank: 169,
            targetWord: "",
            englishWord: "community",
            img: '/img/answer.jpg',
            mean: 'topluluk'
        },
        {
            rank: 170,
            targetWord: "",
            englishWord: "company",
            img: '/img/answer.jpg',
            mean: 'şirket'
        },
        {
            rank: 171,
            targetWord: "",
            englishWord: "compare",
            img: '/img/answer.jpg',
            mean: 'karşılaştırmak'
        },
        {
            rank: 172,
            targetWord: "",
            englishWord: "computer",
            img: '/img/answer.jpg',
            mean: 'bilgisayar'
        },
        {
            rank: 173,
            targetWord: "",
            englishWord: "concern",
            img: '/img/answer.jpg',
            mean: 'ilgilendirmek'
        },
        {
            rank: 174,
            targetWord: "",
            englishWord: "condition",
            img: '/img/answer.jpg',
            mean: 'şart'
        },
        {
            rank: 175,
            targetWord: "",
            englishWord: "conference",
            img: '/img/answer.jpg',
            mean: 'konferans'
        },
        {
            rank: 176,
            targetWord: "",
            englishWord: "congress",
            img: '/img/answer.jpg',
            mean: 'kongre'
        },
        {
            rank: 177,
            targetWord: "",
            englishWord: "consider",
            img: '/img/answer.jpg',
            mean: 'göz önüne almak'
        },
        {
            rank: 178,
            targetWord: "",
            englishWord: "consumer",
            img: '/img/answer.jpg',
            mean: 'tüketici'
        },
        {
            rank: 179,
            targetWord: "",
            englishWord: "contain",
            img: '/img/answer.jpg',
            mean: 'içermek'
        },
        {
            rank: 180,
            targetWord: "",
            englishWord: "continue",
            img: '/img/answer.jpg',
            mean: 'devam et, devam etmek'
        },
        {
            rank: 181,
            targetWord: "",
            englishWord: "control",
            img: '/img/answer.jpg',
            mean: 'kontrol'
        },
        {
            rank: 182,
            targetWord: "",
            englishWord: "cost",
            img: '/img/answer.jpg',
            mean: 'maliyet'
        },
        {
            rank: 183,
            targetWord: "",
            englishWord: "could",
            img: '/img/answer.jpg',
            mean: 'yapabilir'
        },
        {
            rank: 184,
            targetWord: "",
            englishWord: "country",
            img: '/img/answer.jpg',
            mean: 'ülke'
        },
        {
            rank: 185,
            targetWord: "",
            englishWord: "couple",
            img: '/img/answer.jpg',
            mean: 'çift'
        },
        {
            rank: 186,
            targetWord: "",
            englishWord: "course",
            img: '/img/answer.jpg',
            mean: 'ders'
        },
        {
            rank: 187,
            targetWord: "",
            englishWord: "court",
            img: '/img/answer.jpg',
            mean: 'mahkeme'
        },
        {
            rank: 188,
            targetWord: "",
            englishWord: "cover",
            img: '/img/answer.jpg',
            mean: 'örtü'
        },
        {
            rank: 189,
            targetWord: "",
            englishWord: "create",
            img: '/img/answer.jpg',
            mean: 'yaratmak'
        },
        {
            rank: 190,
            targetWord: "",
            englishWord: "crime",
            img: '/img/answer.jpg',
            mean: 'suç'
        },
        {
            rank: 191,
            targetWord: "",
            englishWord: "cultural",
            img: '/img/answer.jpg',
            mean: 'kültürel'
        },
        {
            rank: 192,
            targetWord: "",
            englishWord: "culture",
            img: '/img/answer.jpg',
            mean: 'kültür'
        },
        {
            rank: 193,
            targetWord: "",
            englishWord: "cup",
            img: '/img/answer.jpg',
            mean: 'fincan'
        },
        {
            rank: 194,
            targetWord: "",
            englishWord: "current",
            img: '/img/answer.jpg',
            mean: 'şu andaki, şu anda'
        },
        {
            rank: 195,
            targetWord: "",
            englishWord: "customer",
            img: '/img/answer.jpg',
            mean: 'müşteri'
        },
        {
            rank: 196,
            targetWord: "",
            englishWord: "cut",
            img: '/img/answer.jpg',
            mean: 'kesmek'
        },
        {
            rank: 197,
            targetWord: "",
            englishWord: "dark",
            img: '/img/answer.jpg',
            mean: 'karanlık'
        },
        {
            rank: 198,
            targetWord: "",
            englishWord: "data",
            img: '/img/answer.jpg',
            mean: 'veri'
        },
        {
            rank: 199,
            targetWord: "",
            englishWord: "daughter",
            img: '/img/answer.jpg',
            mean: 'kız evlat, kız çocuğu'
        },
        {
            rank: 200,
            targetWord: "",
            englishWord: "day",
            img: '/img/answer.jpg',
            mean: 'gün'
        },
        {
            rank: 201,
            targetWord: "",
            englishWord: "dead",
            img: '/img/answer.jpg',
            mean: 'ölü'
        },
        {
            rank: 202,
            targetWord: "",
            englishWord: "deal",
            img: '/img/answer.jpg',
            mean: 'anlaşmak'
        },
        {
            rank: 203,
            targetWord: "",
            englishWord: "death",
            img: '/img/answer.jpg',
            mean: 'ölüm'
        },
        {
            rank: 204,
            targetWord: "",
            englishWord: "debate",
            img: '/img/answer.jpg',
            mean: 'tartışma'
        },
        {
            rank: 205,
            targetWord: "",
            englishWord: "decade",
            img: '/img/answer.jpg',
            mean: 'on yıl'
        },
        {
            rank: 206,
            targetWord: "",
            englishWord: "decide",
            img: '/img/answer.jpg',
            mean: 'karar vermek'
        },
        {
            rank: 207,
            targetWord: "",
            englishWord: "decision",
            img: '/img/answer.jpg',
            mean: 'karar'
        },
        {
            rank: 208,
            targetWord: "",
            englishWord: "deep",
            img: '/img/answer.jpg',
            mean: 'derin'
        },
        {
            rank: 209,
            targetWord: "",
            englishWord: "defense",
            img: '/img/answer.jpg',
            mean: 'savunma'
        },
        {
            rank: 210,
            targetWord: "",
            englishWord: "degree",
            img: '/img/answer.jpg',
            mean: 'derece'
        },
        {
            rank: 211,
            targetWord: "",
            englishWord: "democrat",
            img: '/img/answer.jpg',
            mean: 'demokrat'
        },
        {
            rank: 212,
            targetWord: "",
            englishWord: "democratic",
            img: '/img/answer.jpg',
            mean: 'demokratik'
        },
        {
            rank: 213,
            targetWord: "",
            englishWord: "describe",
            img: '/img/answer.jpg',
            mean: 'tanımlamak'
        },
        {
            rank: 214,
            targetWord: "",
            englishWord: "design",
            img: '/img/answer.jpg',
            mean: 'tasarım'
        },
        {
            rank: 215,
            targetWord: "",
            englishWord: "despite",
            img: '/img/answer.jpg',
            mean: 'rağmen'
        },
        {
            rank: 216,
            targetWord: "",
            englishWord: "detail",
            img: '/img/answer.jpg',
            mean: 'ayrıntı'
        },
        {
            rank: 217,
            targetWord: "",
            englishWord: "determine",
            img: '/img/answer.jpg',
            mean: 'belirlemek'
        },
        {
            rank: 218,
            targetWord: "",
            englishWord: "develop",
            img: '/img/answer.jpg',
            mean: 'geliştirmek'
        },
        {
            rank: 219,
            targetWord: "",
            englishWord: "development",
            img: '/img/answer.jpg',
            mean: 'kalkınma, gelişim'
        },
        {
            rank: 220,
            targetWord: "",
            englishWord: "die",
            img: '/img/answer.jpg',
            mean: 'ölmek'
        },
        {
            rank: 221,
            targetWord: "",
            englishWord: "difference",
            img: '/img/answer.jpg',
            mean: 'fark'
        },
        {
            rank: 222,
            targetWord: "",
            englishWord: "different",
            img: '/img/answer.jpg',
            mean: 'farklı'
        },
        {
            rank: 223,
            targetWord: "",
            englishWord: "difficult",
            img: '/img/answer.jpg',
            mean: 'zor'
        },
        {
            rank: 224,
            targetWord: "",
            englishWord: "dinner",
            img: '/img/answer.jpg',
            mean: 'akşam yemeği'
        },
        {
            rank: 225,
            targetWord: "",
            englishWord: "direction",
            img: '/img/answer.jpg',
            mean: 'yön'
        },
        {
            rank: 226,
            targetWord: "",
            englishWord: "director",
            img: '/img/answer.jpg',
            mean: 'yönetmen'
        },
        {
            rank: 227,
            targetWord: "",
            englishWord: "discover",
            img: '/img/answer.jpg',
            mean: 'keşfetmek'
        },
        {
            rank: 228,
            targetWord: "",
            englishWord: "discuss",
            img: '/img/answer.jpg',
            mean: 'tartışmak'
        },
        {
            rank: 229,
            targetWord: "",
            englishWord: "discussion",
            img: '/img/answer.jpg',
            mean: 'tartışma'
        },
        {
            rank: 230,
            targetWord: "",
            englishWord: "disease",
            img: '/img/answer.jpg',
            mean: 'hastalık'
        },
        {
            rank: 231,
            targetWord: "",
            englishWord: "do",
            img: '/img/answer.jpg',
            mean: 'yapmak'
        },
        {
            rank: 232,
            targetWord: "",
            englishWord: "doctor",
            img: '/img/answer.jpg',
            mean: 'doktor'
        },
        {
            rank: 233,
            targetWord: "",
            englishWord: "dog",
            img: '/img/answer.jpg',
            mean: 'köpek'
        },
        {
            rank: 234,
            targetWord: "",
            englishWord: "door",
            img: '/img/answer.jpg',
            mean: 'kapı'
        },
        {
            rank: 235,
            targetWord: "",
            englishWord: "down",
            img: '/img/answer.jpg',
            mean: 'aşağı'
        },
        {
            rank: 236,
            targetWord: "",
            englishWord: "draw",
            img: '/img/answer.jpg',
            mean: 'çizmek'
        },
        {
            rank: 237,
            targetWord: "",
            englishWord: "dream",
            img: '/img/answer.jpg',
            mean: 'rüya'
        },
        {
            rank: 238,
            targetWord: "",
            englishWord: "drive",
            img: '/img/answer.jpg',
            mean: 'sürmek'
        },
        {
            rank: 239,
            targetWord: "",
            englishWord: "drop",
            img: '/img/answer.jpg',
            mean: 'düşürmek'
        },
        {
            rank: 240,
            targetWord: "",
            englishWord: "drug",
            img: '/img/answer.jpg',
            mean: 'uyuşturucu'
        },
        {
            rank: 241,
            targetWord: "",
            englishWord: "during",
            img: '/img/answer.jpg',
            mean: 'sırasında'
        },
        {
            rank: 242,
            targetWord: "",
            englishWord: "each",
            img: '/img/answer.jpg',
            mean: 'her'
        },
        {
            rank: 243,
            targetWord: "",
            englishWord: "early",
            img: '/img/answer.jpg',
            mean: 'erken'
        },
        {
            rank: 244,
            targetWord: "",
            englishWord: "east",
            img: '/img/answer.jpg',
            mean: 'doğu'
        },
        {
            rank: 245,
            targetWord: "",
            englishWord: "easy",
            img: '/img/answer.jpg',
            mean: 'kolay'
        },
        {
            rank: 246,
            targetWord: "",
            englishWord: "eat",
            img: '/img/answer.jpg',
            mean: 'yemek'
        },
        {
            rank: 247,
            targetWord: "",
            englishWord: "economic",
            img: '/img/answer.jpg',
            mean: 'ekonomik'
        },
        {
            rank: 248,
            targetWord: "",
            englishWord: "economy",
            img: '/img/answer.jpg',
            mean: 'ekonomi'
        },
        {
            rank: 249,
            targetWord: "",
            englishWord: "edge",
            img: '/img/answer.jpg',
            mean: 'kenar'
        },
        {
            rank: 250,
            targetWord: "",
            englishWord: "education",
            img: '/img/answer.jpg',
            mean: 'eğitim'
        },
        {
            rank: 251,
            targetWord: "",
            englishWord: "effect",
            img: '/img/answer.jpg',
            mean: 'efekt'
        },
        {
            rank: 252,
            targetWord: "",
            englishWord: "effort",
            img: '/img/answer.jpg',
            mean: 'çaba'
        },
        {
            rank: 253,
            targetWord: "",
            englishWord: "eight",
            img: '/img/answer.jpg',
            mean: 'sekiz'
        },
        {
            rank: 254,
            targetWord: "",
            englishWord: "either",
            img: '/img/answer.jpg',
            mean: 'ya, ya da, herhangi biri'
        },
        {
            rank: 255,
            targetWord: "",
            englishWord: "election",
            img: '/img/answer.jpg',
            mean: 'seçim'
        },
        {
            rank: 256,
            targetWord: "",
            englishWord: "else",
            img: '/img/answer.jpg',
            mean: 'başka'
        },
        {
            rank: 257,
            targetWord: "",
            englishWord: "employee",
            img: '/img/answer.jpg',
            mean: 'çalışan'
        },
        {
            rank: 258,
            targetWord: "",
            englishWord: "end",
            img: '/img/answer.jpg',
            mean: 'son'
        },
        {
            rank: 259,
            targetWord: "",
            englishWord: "energy",
            img: '/img/answer.jpg',
            mean: 'enerji'
        },
        {
            rank: 260,
            targetWord: "",
            englishWord: "enjoy",
            img: '/img/answer.jpg',
            mean: 'keyif almak'
        },
        {
            rank: 261,
            targetWord: "",
            englishWord: "enough",
            img: '/img/answer.jpg',
            mean: 'yeterli'
        },
        {
            rank: 262,
            targetWord: "",
            englishWord: "enter",
            img: '/img/answer.jpg',
            mean: 'girmek'
        },
        {
            rank: 263,
            targetWord: "",
            englishWord: "entire",
            img: '/img/answer.jpg',
            mean: 'tamamı'
        },
        {
            rank: 264,
            targetWord: "",
            englishWord: "environment",
            img: '/img/answer.jpg',
            mean: 'çevre'
        },
        {
            rank: 265,
            targetWord: "",
            englishWord: "environmental",
            img: '/img/answer.jpg',
            mean: 'çevreci'
        },
        {
            rank: 266,
            targetWord: "",
            englishWord: "especially",
            img: '/img/answer.jpg',
            mean: 'özellikle'
        },
        {
            rank: 267,
            targetWord: "",
            englishWord: "establish",
            img: '/img/answer.jpg',
            mean: 'kurmak'
        },
        {
            rank: 268,
            targetWord: "",
            englishWord: "evening",
            img: '/img/answer.jpg',
            mean: 'akşam'
        },
        {
            rank: 269,
            targetWord: "",
            englishWord: "event",
            img: '/img/answer.jpg',
            mean: 'olay'
        },
        {
            rank: 270,
            targetWord: "",
            englishWord: "ever",
            img: '/img/answer.jpg',
            mean: 'hiç'
        },
        {
            rank: 271,
            targetWord: "",
            englishWord: "every",
            img: '/img/answer.jpg',
            mean: 'her'
        },
        {
            rank: 272,
            targetWord: "",
            englishWord: "everybody",
            img: '/img/answer.jpg',
            mean: 'herkes'
        },
        {
            rank: 273,
            targetWord: "",
            englishWord: "everyone",
            img: '/img/answer.jpg',
            mean: 'herkes'
        },
        {
            rank: 274,
            targetWord: "",
            englishWord: "everything",
            img: '/img/answer.jpg',
            mean: 'her şey'
        },
        {
            rank: 275,
            targetWord: "",
            englishWord: "evidence",
            img: '/img/answer.jpg',
            mean: 'delil'
        },
        {
            rank: 276,
            targetWord: "",
            englishWord: "exactly",
            img: '/img/answer.jpg',
            mean: 'kesinlikle'
        },
        {
            rank: 277,
            targetWord: "",
            englishWord: "example",
            img: '/img/answer.jpg',
            mean: 'örnek'
        },
        {
            rank: 278,
            targetWord: "",
            englishWord: "executive",
            img: '/img/answer.jpg',
            mean: 'yönetici'
        },
        {
            rank: 279,
            targetWord: "",
            englishWord: "exist",
            img: '/img/answer.jpg',
            mean: 'var olmak'
        },
        {
            rank: 280,
            targetWord: "",
            englishWord: "expect",
            img: '/img/answer.jpg',
            mean: 'ummak'
        },
        {
            rank: 281,
            targetWord: "",
            englishWord: "experience",
            img: '/img/answer.jpg',
            mean: 'deneyim'
        },
        {
            rank: 282,
            targetWord: "",
            englishWord: "expert",
            img: '/img/answer.jpg',
            mean: 'uzman'
        },
        {
            rank: 283,
            targetWord: "",
            englishWord: "explain",
            img: '/img/answer.jpg',
            mean: 'açıklamak'
        },
        {
            rank: 284,
            targetWord: "",
            englishWord: "eye",
            img: '/img/answer.jpg',
            mean: 'göz'
        },
        {
            rank: 285,
            targetWord: "",
            englishWord: "face",
            img: '/img/answer.jpg',
            mean: 'yüz'
        },
        {
            rank: 286,
            targetWord: "",
            englishWord: "fact",
            img: '/img/answer.jpg',
            mean: 'gerçek'
        },
        {
            rank: 287,
            targetWord: "",
            englishWord: "factor",
            img: '/img/answer.jpg',
            mean: 'faktör'
        },
        {
            rank: 288,
            targetWord: "",
            englishWord: "fail",
            img: '/img/answer.jpg',
            mean: 'başarısız'
        },
        {
            rank: 289,
            targetWord: "",
            englishWord: "fall",
            img: '/img/answer.jpg',
            mean: 'düşmek'
        },
        {
            rank: 290,
            targetWord: "",
            englishWord: "family",
            img: '/img/answer.jpg',
            mean: 'aile'
        },
        {
            rank: 291,
            targetWord: "",
            englishWord: "far",
            img: '/img/answer.jpg',
            mean: 'uzak'
        },
        {
            rank: 292,
            targetWord: "",
            englishWord: "fast",
            img: '/img/answer.jpg',
            mean: 'hızlı'
        },
        {
            rank: 293,
            targetWord: "",
            englishWord: "father",
            img: '/img/answer.jpg',
            mean: 'baba'
        },
        {
            rank: 294,
            targetWord: "",
            englishWord: "fear",
            img: '/img/answer.jpg',
            mean: 'korku'
        },
        {
            rank: 295,
            targetWord: "",
            englishWord: "federal",
            img: '/img/answer.jpg',
            mean: 'federal'
        },
        {
            rank: 296,
            targetWord: "",
            englishWord: "feel",
            img: '/img/answer.jpg',
            mean: 'hissetmek'
        },
        {
            rank: 297,
            targetWord: "",
            englishWord: "feeling",
            img: '/img/answer.jpg',
            mean: 'duygu'
        },
        {
            rank: 298,
            targetWord: "",
            englishWord: "few",
            img: '/img/answer.jpg',
            mean: 'az'
        },
        {
            rank: 299,
            targetWord: "",
            englishWord: "field",
            img: '/img/answer.jpg',
            mean: 'alan'
        },
        {
            rank: 300,
            targetWord: "",
            englishWord: "fight",
            img: '/img/answer.jpg',
            mean: 'kavga'
        },
        {
            rank: 301,
            targetWord: "",
            englishWord: "figure",
            img: '/img/answer.jpg',
            mean: 'şekil'
        },
        {
            rank: 302,
            targetWord: "",
            englishWord: "fill",
            img: '/img/answer.jpg',
            mean: 'doldurmak'
        },
        {
            rank: 303,
            targetWord: "",
            englishWord: "film",
            img: '/img/answer.jpg',
            mean: 'film'
        },
        {
            rank: 304,
            targetWord: "",
            englishWord: "final",
            img: '/img/answer.jpg',
            mean: 'nihai, final'
        },
        {
            rank: 305,
            targetWord: "",
            englishWord: "finally",
            img: '/img/answer.jpg',
            mean: 'en sonunda, sonunda'
        },
        {
            rank: 306,
            targetWord: "",
            englishWord: "financial",
            img: '/img/answer.jpg',
            mean: 'mali, finansal'
        },
        {
            rank: 307,
            targetWord: "",
            englishWord: "find",
            img: '/img/answer.jpg',
            mean: 'bulmak'
        },
        {
            rank: 308,
            targetWord: "",
            englishWord: "fine",
            img: '/img/answer.jpg',
            mean: 'güzel'
        },
        {
            rank: 309,
            targetWord: "",
            englishWord: "finger",
            img: '/img/answer.jpg',
            mean: 'parmak'
        },
        {
            rank: 310,
            targetWord: "",
            englishWord: "finish",
            img: '/img/answer.jpg',
            mean: 'bitiş'
        },
        {
            rank: 311,
            targetWord: "",
            englishWord: "fire",
            img: '/img/answer.jpg',
            mean: 'ateş'
        },
        {
            rank: 312,
            targetWord: "",
            englishWord: "firm",
            img: '/img/answer.jpg',
            mean: 'firma'
        },
        {
            rank: 313,
            targetWord: "",
            englishWord: "first",
            img: '/img/answer.jpg',
            mean: 'ilk'
        },
        {
            rank: 314,
            targetWord: "",
            englishWord: "fish",
            img: '/img/answer.jpg',
            mean: 'balık'
        },
        {
            rank: 315,
            targetWord: "",
            englishWord: "five",
            img: '/img/answer.jpg',
            mean: 'beş'
        },
        {
            rank: 316,
            targetWord: "",
            englishWord: "floor",
            img: '/img/answer.jpg',
            mean: 'zemin'
        },
        {
            rank: 317,
            targetWord: "",
            englishWord: "fly",
            img: '/img/answer.jpg',
            mean: 'uçmak'
        },
        {
            rank: 318,
            targetWord: "",
            englishWord: "focus",
            img: '/img/answer.jpg',
            mean: 'odaklanmak'
        },
        {
            rank: 319,
            targetWord: "",
            englishWord: "follow",
            img: '/img/answer.jpg',
            mean: 'takip etmek'
        },
        {
            rank: 320,
            targetWord: "",
            englishWord: "food",
            img: '/img/answer.jpg',
            mean: 'gıda, yiyecek, yemek'
        },
        {
            rank: 321,
            targetWord: "",
            englishWord: "foot",
            img: '/img/answer.jpg',
            mean: 'ayak'
        },
        {
            rank: 322,
            targetWord: "",
            englishWord: "for",
            img: '/img/answer.jpg',
            mean: 'için'
        },
        {
            rank: 323,
            targetWord: "",
            englishWord: "force",
            img: '/img/answer.jpg',
            mean: 'kuvvet'
        },
        {
            rank: 324,
            targetWord: "",
            englishWord: "foreign",
            img: '/img/answer.jpg',
            mean: 'yabancı'
        },
        {
            rank: 325,
            targetWord: "",
            englishWord: "forget",
            img: '/img/answer.jpg',
            mean: 'unutmak'
        },
        {
            rank: 326,
            targetWord: "",
            englishWord: "form",
            img: '/img/answer.jpg',
            mean: 'form'
        },
        {
            rank: 327,
            targetWord: "",
            englishWord: "former",
            img: '/img/answer.jpg',
            mean: 'eski'
        },
        {
            rank: 328,
            targetWord: "",
            englishWord: "forward",
            img: '/img/answer.jpg',
            mean: 'ileri'
        },
        {
            rank: 329,
            targetWord: "",
            englishWord: "four",
            img: '/img/answer.jpg',
            mean: 'dört'
        },
        {
            rank: 330,
            targetWord: "",
            englishWord: "free",
            img: '/img/answer.jpg',
            mean: 'ücretsiz'
        },
        {
            rank: 331,
            targetWord: "",
            englishWord: "friend",
            img: '/img/answer.jpg',
            mean: 'arkadaş'
        },
        {
            rank: 332,
            targetWord: "",
            englishWord: "front",
            img: '/img/answer.jpg',
            mean: 'ön'
        },
        {
            rank: 333,
            targetWord: "",
            englishWord: "full",
            img: '/img/answer.jpg',
            mean: 'tam'
        },
        {
            rank: 334,
            targetWord: "",
            englishWord: "fund",
            img: '/img/answer.jpg',
            mean: 'fon, sermaye'
        },
        {
            rank: 335,
            targetWord: "",
            englishWord: "future",
            img: '/img/answer.jpg',
            mean: 'gelecek'
        },
        {
            rank: 336,
            targetWord: "",
            englishWord: "game",
            img: '/img/answer.jpg',
            mean: 'oyun'
        },
        {
            rank: 337,
            targetWord: "",
            englishWord: "garden",
            img: '/img/answer.jpg',
            mean: 'bahçe'
        },
        {
            rank: 338,
            targetWord: "",
            englishWord: "gas",
            img: '/img/answer.jpg',
            mean: 'gaz'
        },
        {
            rank: 339,
            targetWord: "",
            englishWord: "general",
            img: '/img/answer.jpg',
            mean: 'genel'
        },
        {
            rank: 340,
            targetWord: "",
            englishWord: "generation",
            img: '/img/answer.jpg',
            mean: 'nesil'
        },
        {
            rank: 341,
            targetWord: "",
            englishWord: "get",
            img: '/img/answer.jpg',
            mean: 'almak'
        },
        {
            rank: 342,
            targetWord: "",
            englishWord: "girl",
            img: '/img/answer.jpg',
            mean: 'kız'
        },
        {
            rank: 343,
            targetWord: "",
            englishWord: "give",
            img: '/img/answer.jpg',
            mean: 'vermek'
        },
        {
            rank: 344,
            targetWord: "",
            englishWord: "glass",
            img: '/img/answer.jpg',
            mean: 'bardak'
        },
        {
            rank: 345,
            targetWord: "",
            englishWord: "go",
            img: '/img/answer.jpg',
            mean: 'gitmek'
        },
        {
            rank: 346,
            targetWord: "",
            englishWord: "goal",
            img: '/img/answer.jpg',
            mean: 'hedef'
        },
        {
            rank: 347,
            targetWord: "",
            englishWord: "good",
            img: '/img/answer.jpg',
            mean: 'iyi'
        },
        {
            rank: 348,
            targetWord: "",
            englishWord: "government",
            img: '/img/answer.jpg',
            mean: 'hükümet'
        },
        {
            rank: 349,
            targetWord: "",
            englishWord: "great",
            img: '/img/answer.jpg',
            mean: 'harika'
        },
        {
            rank: 350,
            targetWord: "",
            englishWord: "green",
            img: '/img/answer.jpg',
            mean: 'yeşil'
        },
        {
            rank: 351,
            targetWord: "",
            englishWord: "ground",
            img: '/img/answer.jpg',
            mean: 'zemin'
        },
        {
            rank: 352,
            targetWord: "",
            englishWord: "group",
            img: '/img/answer.jpg',
            mean: 'grup'
        },
        {
            rank: 353,
            targetWord: "",
            englishWord: "grow",
            img: '/img/answer.jpg',
            mean: 'büyümek'
        },
        {
            rank: 354,
            targetWord: "",
            englishWord: "growth",
            img: '/img/answer.jpg',
            mean: 'büyüme'
        },
        {
            rank: 355,
            targetWord: "",
            englishWord: "guess",
            img: '/img/answer.jpg',
            mean: 'tahmin'
        },
        {
            rank: 356,
            targetWord: "",
            englishWord: "gun",
            img: '/img/answer.jpg',
            mean: 'silah'
        },
        {
            rank: 357,
            targetWord: "",
            englishWord: "guy",
            img: '/img/answer.jpg',
            mean: 'adam'
        },
        {
            rank: 358,
            targetWord: "",
            englishWord: "hair",
            img: '/img/answer.jpg',
            mean: 'saç'
        },
        {
            rank: 359,
            targetWord: "",
            englishWord: "half",
            img: '/img/answer.jpg',
            mean: 'yarım'
        },
        {
            rank: 360,
            targetWord: "",
            englishWord: "hand",
            img: '/img/answer.jpg',
            mean: 'el'
        },
        {
            rank: 361,
            targetWord: "",
            englishWord: "hang",
            img: '/img/answer.jpg',
            mean: 'asmak'
        },
        {
            rank: 362,
            targetWord: "",
            englishWord: "happen",
            img: '/img/answer.jpg',
            mean: 'olmak'
        },
        {
            rank: 363,
            targetWord: "",
            englishWord: "happy",
            img: '/img/answer.jpg',
            mean: 'mutlu'
        },
        {
            rank: 364,
            targetWord: "",
            englishWord: "hard",
            img: '/img/answer.jpg',
            mean: 'zor'
        },
        {
            rank: 365,
            targetWord: "",
            englishWord: "have",
            img: '/img/answer.jpg',
            mean: 'sahip olmak'
        },
        {
            rank: 366,
            targetWord: "",
            englishWord: "he",
            img: '/img/answer.jpg',
            mean: 'o'
        },
        {
            rank: 367,
            targetWord: "",
            englishWord: "head",
            img: '/img/answer.jpg',
            mean: 'kafa'
        },
        {
            rank: 368,
            targetWord: "",
            englishWord: "health",
            img: '/img/answer.jpg',
            mean: 'sağlık'

        },
        {
            rank: 369,
            targetWord: "",
            englishWord: "hear",
            img: '/img/answer.jpg',
            mean: 'duymak'
        },
        {
            rank: 370,
            targetWord: "",
            englishWord: "heart",
            img: '/img/answer.jpg',
            mean: 'kalp'
        },
        {
            rank: 371,
            targetWord: "",
            englishWord: "heat",
            img: '/img/answer.jpg',
            mean: 'sıcaklık'
        },
        {
            rank: 372,
            targetWord: "",
            englishWord: "heavy",
            img: '/img/answer.jpg',
            mean: 'ağır'
        },
        {
            rank: 373,
            targetWord: "",
            englishWord: "help",
            img: '/img/answer.jpg',
            mean: 'yardım'
        },
        {
            rank: 374,
            targetWord: "",
            englishWord: "her",
            img: '/img/answer.jpg',
            mean: 'ona'
        },
        {
            rank: 375,
            targetWord: "",
            englishWord: "here",
            img: '/img/answer.jpg',
            mean: 'işte, burada, buraya'
        },
        {
            rank: 376,
            targetWord: "",
            englishWord: "herself",
            img: '/img/answer.jpg',
            mean: 'kendini'
        },
        {
            rank: 377,
            targetWord: "",
            englishWord: "high",
            img: '/img/answer.jpg',
            mean: 'yüksek'
        },
        {
            rank: 378,
            targetWord: "",
            englishWord: "him",
            img: '/img/answer.jpg',
            mean: 'onu'
        },
        {
            rank: 379,
            targetWord: "",
            englishWord: "himself",
            img: '/img/answer.jpg',
            mean: 'kendisi'
        },
        {
            rank: 380,
            targetWord: "",
            englishWord: "his",
            img: '/img/answer.jpg',
            mean: 'onun'
        },
        {
            rank: 381,
            targetWord: "",
            englishWord: "history",
            img: '/img/answer.jpg',
            mean: 'tarih'
        },
        {
            rank: 382,
            targetWord: "",
            englishWord: "hit",
            img: '/img/answer.jpg',
            mean: 'çarptı, vurmak, isabet, darbe'
        },
        {
            rank: 383,
            targetWord: "",
            englishWord: "hold",
            img: '/img/answer.jpg',
            mean: 'tutmak'
        },
        {
            rank: 384,
            targetWord: "",
            englishWord: "home",
            img: '/img/answer.jpg',
            mean: 'ev'
        },
        {
            rank: 385,
            targetWord: "",
            englishWord: "hope",
            img: '/img/answer.jpg',
            mean: 'umut'
        },
        {
            rank: 386,
            targetWord: "",
            englishWord: "hospital",
            img: '/img/answer.jpg',
            mean: 'hastane'
        },
        {
            rank: 387,
            targetWord: "",
            englishWord: "hot",
            img: '/img/answer.jpg',
            mean: 'sıcak'
        },
        {
            rank: 388,
            targetWord: "",
            englishWord: "hotel",
            img: '/img/answer.jpg',
            mean: 'otel'
        },
        {
            rank: 389,
            targetWord: "",
            englishWord: "hour",
            img: '/img/answer.jpg',
            mean: 'saat'
        },
        {
            rank: 390,
            targetWord: "",
            englishWord: "house",
            img: '/img/answer.jpg',
            mean: 'ev'
        },
        {
            rank: 391,
            targetWord: "",
            englishWord: "how",
            img: '/img/answer.jpg',
            mean: 'nasıl'
        },
        {
            rank: 392,
            targetWord: "",
            englishWord: "however",
            img: '/img/answer.jpg',
            mean: 'ancak'
        },
        {
            rank: 393,
            targetWord: "",
            englishWord: "huge",
            img: '/img/answer.jpg',
            mean: 'kocaman'
        },
        {
            rank: 394,
            targetWord: "",
            englishWord: "human",
            img: '/img/answer.jpg',
            mean: 'insan'
        },
        {
            rank: 395,
            targetWord: "",
            englishWord: "hundred",
            img: '/img/answer.jpg',
            mean: 'yüz'
        },
        {
            rank: 396,
            targetWord: "",
            englishWord: "husband",
            img: '/img/answer.jpg',
            mean: 'koca'
        },
        {
            rank: 397,
            targetWord: "",
            englishWord: "idea",
            img: '/img/answer.jpg',
            mean: 'fikir'
        },
        {
            rank: 398,
            targetWord: "",
            englishWord: "identify",
            img: '/img/answer.jpg',
            mean: 'tanımlamak'
        },
        {
            rank: 399,
            targetWord: "",
            englishWord: "if",
            img: '/img/answer.jpg',
            mean: 'eğer'
        },
        {
            rank: 400,
            targetWord: "",
            englishWord: "image",
            img: '/img/answer.jpg',
            mean: 'imge, resim, görüntü'
        },
        {
            rank: 401,
            targetWord: "",
            englishWord: "imagine",
            img: '/img/answer.jpg',
            mean: 'hayal etmek'
        },
        {
            rank: 402,
            targetWord: "",
            englishWord: "impact",
            img: '/img/answer.jpg',
            mean: 'etki'
        },
        {
            rank: 403,
            targetWord: "",
            englishWord: "important",
            img: '/img/answer.jpg',
            mean: 'önemli'
        },
        {
            rank: 404,
            targetWord: "",
            englishWord: "improve",
            img: '/img/answer.jpg',
            mean: 'geliştirmek'
        },
        {
            rank: 405,
            targetWord: "",
            englishWord: "in",
            img: '/img/answer.jpg',
            mean: 'içinde'
        },
        {
            rank: 406,
            targetWord: "",
            englishWord: "include",
            img: '/img/answer.jpg',
            mean: 'dahil etmek'
        },
        {
            rank: 407,
            targetWord: "",
            englishWord: "including",
            img: '/img/answer.jpg',
            mean: 'dahil olmak üzere'
        },
        {
            rank: 408,
            targetWord: "",
            englishWord: "increase",
            img: '/img/answer.jpg',
            mean: 'artırmak'
        },
        {
            rank: 409,
            targetWord: "",
            englishWord: "indeed",
            img: '/img/answer.jpg',
            mean: 'aslında'
        },
        {
            rank: 410,
            targetWord: "",
            englishWord: "indicate",
            img: '/img/answer.jpg',
            mean: 'belirtmek'
        },
        {
            rank: 411,
            targetWord: "",
            englishWord: "individual",
            img: '/img/answer.jpg',
            mean: 'bireysel'
        },
        {
            rank: 412,
            targetWord: "",
            englishWord: "industry",
            img: '/img/answer.jpg',
            mean: 'endüstri'
        },
        {
            rank: 413,
            targetWord: "",
            englishWord: "information",
            img: '/img/answer.jpg',
            mean: 'bilgi'
        },
        {
            rank: 414,
            targetWord: "",
            englishWord: "inside",
            img: '/img/answer.jpg',
            mean: 'içeride'
        },
        {
            rank: 415,
            targetWord: "",
            englishWord: "instead",
            img: '/img/answer.jpg',
            mean: 'yerine'
        },
        {
            rank: 416,
            targetWord: "",
            englishWord: "institution",
            img: '/img/answer.jpg',
            mean: 'kurum'
        },
        {
            rank: 417,
            targetWord: "",
            englishWord: "interest",
            img: '/img/answer.jpg',
            mean: 'faiz'
        },
        {
            rank: 418,
            targetWord: "",
            englishWord: "interesting",
            img: '/img/answer.jpg',
            mean: 'ilginç'
        },
        {
            rank: 419,
            targetWord: "",
            englishWord: "international",
            img: '/img/answer.jpg',
            mean: 'uluslararası'
        },
        {
            rank: 420,
            targetWord: "",
            englishWord: "interview",
            img: '/img/answer.jpg',
            mean: 'röportaj, mülakat'
        },
        {
            rank: 421,
            targetWord: "",
            englishWord: "into",
            img: '/img/answer.jpg',
            mean: 'içine'
        },
        {
            rank: 422,
            targetWord: "",
            englishWord: "investment",
            img: '/img/answer.jpg',
            mean: 'yatırım'
        },
        {
            rank: 423,
            targetWord: "",
            englishWord: "involve",
            img: '/img/answer.jpg',
            mean: 'dahil etmek'
        },
        {
            rank: 424,
            targetWord: "",
            englishWord: "issue",
            img: '/img/answer.jpg',
            mean: 'konu'
        },
        {
            rank: 425,
            targetWord: "",
            englishWord: "it",
            img: '/img/answer.jpg',
            mean: 'o'
        },
        {
            rank: 426,
            targetWord: "",
            englishWord: "item",
            img: '/img/answer.jpg',
            mean: 'öğe'
        },
        {
            rank: 427,
            targetWord: "",
            englishWord: "its",
            img: '/img/answer.jpg',
            mean: 'onun'
        },
        {
            rank: 428,
            targetWord: "",
            englishWord: "itself",
            img: '/img/answer.jpg',
            mean: 'kendisi'
        },
        {
            rank: 429,
            targetWord: "",
            englishWord: "job",
            img: '/img/answer.jpg',
            mean: 'iş'
        },
        {
            rank: 430,
            targetWord: "",
            englishWord: "join",
            img: '/img/answer.jpg',
            mean: 'katılmak'
        },
        {
            rank: 431,
            targetWord: "",
            englishWord: "just",
            img: '/img/answer.jpg',
            mean: 'sadece'
        },
        {
            rank: 432,
            targetWord: "",
            englishWord: "keep",
            img: '/img/answer.jpg',
            mean: 'tutmak'
        },
        {
            rank: 433,
            targetWord: "",
            englishWord: "key",
            img: '/img/answer.jpg',
            mean: 'anahtar'
        },
        {
            rank: 434,
            targetWord: "",
            englishWord: "kid",
            img: '/img/answer.jpg',
            mean: 'çocuk'
        },
        {
            rank: 435,
            targetWord: "",
            englishWord: "kill",
            img: '/img/answer.jpg',
            mean: 'öldürmek'
        },
        {
            rank: 436,
            targetWord: "",
            englishWord: "kind",
            img: '/img/answer.jpg',
            mean: 'tür'
        },
        {
            rank: 437,
            targetWord: "",
            englishWord: "kitchen",
            img: '/img/answer.jpg',
            mean: 'mutfak'
        },
        {
            rank: 438,
            targetWord: "",
            englishWord: "know",
            img: '/img/answer.jpg',
            mean: 'bilmek'
        },
        {
            rank: 439,
            targetWord: "",
            englishWord: "knowledge",
            img: '/img/answer.jpg',
            mean: 'bilgi'
        },
        {
            rank: 440,
            targetWord: "",
            englishWord: "land",
            img: '/img/answer.jpg',
            mean: 'arazi'
        },
        {
            rank: 441,
            targetWord: "",
            englishWord: "language",
            img: '/img/answer.jpg',
            mean: 'dil'
        },
        {
            rank: 442,
            targetWord: "",
            englishWord: "large",
            img: '/img/answer.jpg',
            mean: 'geniş'
        },
        {
            rank: 443,
            targetWord: "",
            englishWord: "last",
            img: '/img/answer.jpg',
            mean: 'son'
        },
        {
            rank: 444,
            targetWord: "",
            englishWord: "late",
            img: '/img/answer.jpg',
            mean: 'geç'
        },
        {
            rank: 445,
            targetWord: "",
            englishWord: "later",
            img: '/img/answer.jpg',
            mean: 'sonra'
        },
        {
            rank: 446,
            targetWord: "",
            englishWord: "laugh",
            img: '/img/answer.jpg',
            mean: 'gülmek'
        },
        {
            rank: 447,
            targetWord: "",
            englishWord: "law",
            img: '/img/answer.jpg',
            mean: 'hukuk'
        },
        {
            rank: 448,
            targetWord: "",
            englishWord: "lawyer",
            img: '/img/answer.jpg',
            mean: 'avukat'
        },
        {
            rank: 449,
            targetWord: "",
            englishWord: "lay",
            img: '/img/answer.jpg',
            mean: 'yatırmak'
        },
        {
            rank: 450,
            targetWord: "",
            englishWord: "lead",
            img: '/img/answer.jpg',
            mean: 'öncülük etmek'
        },
        {
            rank: 451,
            targetWord: "",
            englishWord: "leader",
            img: '/img/answer.jpg',
            mean: 'lider'
        },
        {
            rank: 452,
            targetWord: "",
            englishWord: "learn",
            img: '/img/answer.jpg',
            mean: 'öğrenmek'
        },
        {
            rank: 453,
            targetWord: "",
            englishWord: "least",
            img: '/img/answer.jpg',
            mean: 'en az'
        },
        {
            rank: 454,
            targetWord: "",
            englishWord: "leave",
            img: '/img/answer.jpg',
            mean: 'ayrılmak'
        },
        {
            rank: 455,
            targetWord: "",
            englishWord: "left",
            img: '/img/answer.jpg',
            mean: 'ayrıldı'
        },
        {
            rank: 456,
            targetWord: "",
            englishWord: "leg",
            img: '/img/answer.jpg',
            mean: 'bacak'
        },
        {
            rank: 457,
            targetWord: "",
            englishWord: "legal",
            img: '/img/answer.jpg',
            mean: 'yasal'
        },
        {
            rank: 458,
            targetWord: "",
            englishWord: "less",
            img: '/img/answer.jpg',
            mean: 'az'
        },
        {
            rank: 459,
            targetWord: "",
            englishWord: "let",
            img: '/img/answer.jpg',
            mean: 'izin vermek'
        },
        {
            rank: 460,
            targetWord: "",
            englishWord: "letter",
            img: '/img/answer.jpg',
            mean: 'mektup'
        },
        {
            rank: 461,
            targetWord: "",
            englishWord: "level",
            img: '/img/answer.jpg',
            mean: 'seviye'
        },
        {
            rank: 462,
            targetWord: "",
            englishWord: "lie",
            img: '/img/answer.jpg',
            mean: 'yalan'
        },
        {
            rank: 463,
            targetWord: "",
            englishWord: "life",
            img: '/img/answer.jpg',
            mean: 'hayat'
        },
        {
            rank: 464,
            targetWord: "",
            englishWord: "light",
            img: '/img/answer.jpg',
            mean: 'ışık'
        },
        {
            rank: 465,
            targetWord: "",
            englishWord: "like",
            img: '/img/answer.jpg',
            mean: 'sevmek, beğenmek'
        },
        {
            rank: 466,
            targetWord: "",
            englishWord: "likely",
            img: '/img/answer.jpg',
            mean: 'muhtemel'
        },
        {
            rank: 467,
            targetWord: "",
            englishWord: "line",
            img: '/img/answer.jpg',
            mean: 'çizgi, sıra'
        },
        {
            rank: 468,
            targetWord: "",
            englishWord: "list",
            img: '/img/answer.jpg',
            mean: 'liste'
        },
        {
            rank: 469,
            targetWord: "",
            englishWord: "listen",
            img: '/img/answer.jpg',
            mean: 'dinlemek'
        },
        {
            rank: 470,
            targetWord: "",
            englishWord: "little",
            img: '/img/answer.jpg',
            mean: 'küçük'
        },
        {
            rank: 471,
            targetWord: "",
            englishWord: "live",
            img: '/img/answer.jpg',
            mean: 'canlı'
        },
        {
            rank: 472,
            targetWord: "",
            englishWord: "local",
            img: '/img/answer.jpg',
            mean: 'yerel'
        },
        {
            rank: 473,
            targetWord: "",
            englishWord: "long",
            img: '/img/answer.jpg',
            mean: 'uzun'
        },
        {
            rank: 474,
            targetWord: "",
            englishWord: "look",
            img: '/img/answer.jpg',
            mean: 'bakmak'
        },
        {
            rank: 475,
            targetWord: "",
            englishWord: "lose",
            img: '/img/answer.jpg',
            mean: 'kaybetmek'
        },
        {
            rank: 476,
            targetWord: "",
            englishWord: "loss",
            img: '/img/answer.jpg',
            mean: 'kayıp'
        },
        {
            rank: 477,
            targetWord: "",
            englishWord: "lot",
            img: '/img/answer.jpg',
            mean: 'çok'
        },
        {
            rank: 478,
            targetWord: "",
            englishWord: "love",
            img: '/img/answer.jpg',
            mean: 'aşk'
        },
        {
            rank: 479,
            targetWord: "",
            englishWord: "low",
            img: '/img/answer.jpg',
            mean: 'düşük'
        },
        {
            rank: 480,
            targetWord: "",
            englishWord: "machine",
            img: '/img/answer.jpg',
            mean: 'makine'
        },
        {
            rank: 481,
            targetWord: "",
            englishWord: "magazine",
            img: '/img/answer.jpg',
            mean: 'dergi'
        },
        {
            rank: 482,
            targetWord: "",
            englishWord: "main",
            img: '/img/answer.jpg',
            mean: 'ana'
        },
        {
            rank: 483,
            targetWord: "",
            englishWord: "maintain",
            img: '/img/answer.jpg',
            mean: 'sürdürmek'
        },
        {
            rank: 484,
            targetWord: "",
            englishWord: "majority",
            img: '/img/answer.jpg',
            mean: 'çoğunluk'
        },
        {
            rank: 485,
            targetWord: "",
            englishWord: "make",
            img: '/img/answer.jpg',
            mean: 'yapmak'
        },
        {
            rank: 486,
            targetWord: "",
            englishWord: "man",
            img: '/img/answer.jpg',
            mean: 'adam'
        },
        {
            rank: 487,
            targetWord: "",
            englishWord: "manage",
            img: '/img/answer.jpg',
            mean: 'yönetmek'
        },
        {
            rank: 488,
            targetWord: "",
            englishWord: "management",
            img: '/img/answer.jpg',
            mean: 'yönetim'
        },
        {
            rank: 489,
            targetWord: "",
            englishWord: "manager",
            img: '/img/answer.jpg',
            mean: 'müdür'
        },
        {
            rank: 490,
            targetWord: "",
            englishWord: "many",
            img: '/img/answer.jpg',
            mean: 'çok'
        },
        {
            rank: 491,
            targetWord: "",
            englishWord: "market",
            img: '/img/answer.jpg',
            mean: 'pazar, piyasa'
        },
        {
            rank: 492,
            targetWord: "",
            englishWord: "marriage",
            img: '/img/answer.jpg',
            mean: 'evlilik'
        },
        {
            rank: 493,
            targetWord: "",
            englishWord: "material",
            img: '/img/answer.jpg',
            mean: 'malzeme'
        },
        {
            rank: 494,
            targetWord: "",
            englishWord: "matter",
            img: '/img/answer.jpg',
            mean: 'madde'
        },
        {
            rank: 495,
            targetWord: "",
            englishWord: "may",
            img: '/img/answer.jpg',
            mean: 'mayıs, mayıs ayı'
        },
        {
            rank: 496,
            targetWord: "",
            englishWord: "maybe",
            img: '/img/answer.jpg',
            mean: 'olabilir'
        },
        {
            rank: 497,
            targetWord: "",
            englishWord: "me",
            img: '/img/answer.jpg',
            mean: 'ben, bana, beni'
        },
        {
            rank: 498,
            targetWord: "",
            englishWord: "mean",
            img: '/img/answer.jpg',
            mean: 'anlamına gelmek'
        },
        {
            rank: 499,
            targetWord: "",
            englishWord: "measure",
            img: '/img/answer.jpg',
            mean: 'ölçmek'
        },
        {
            rank: 500,
            targetWord: "",
            englishWord: "media",
            img: '/img/answer.jpg',
            mean: 'medya'
        },
        {
            rank: 501,
            targetWord: "",
            englishWord: "medical",
            img: '/img/answer.jpg',
            mean: 'tıbbi'
        },
        {
            rank: 502,
            targetWord: "",
            englishWord: "meet",
            img: '/img/answer.jpg',
            mean: 'buluşmak, tanışmak, karşılamak'
        },
        {
            rank: 503,
            targetWord: "",
            englishWord: "meeting",
            img: '/img/answer.jpg',
            mean: 'toplantı'
        },
        {
            rank: 504,
            targetWord: "",
            englishWord: "member",
            img: '/img/answer.jpg',
            mean: 'üye'
        },
        {
            rank: 505,
            targetWord: "",
            englishWord: "memory",
            img: '/img/answer.jpg',
            mean: 'hafıza'
        },
        {
            rank: 506,
            targetWord: "",
            englishWord: "mention",
            img: '/img/answer.jpg',
            mean: 'söz etmek'
        },
        {
            rank: 507,
            targetWord: "",
            englishWord: "message",
            img: '/img/answer.jpg',
            mean: 'mesaj'
        },
        {
            rank: 508,
            targetWord: "",
            englishWord: "method",
            img: '/img/answer.jpg',
            mean: 'yöntem'
        },
        {
            rank: 509,
            targetWord: "",
            englishWord: "middle",
            img: '/img/answer.jpg',
            mean: 'orta'
        },
        {
            rank: 510,
            targetWord: "",
            englishWord: "might",
            img: '/img/answer.jpg',
            mean: 'belki'
        },
        {
            rank: 511,
            targetWord: "",
            englishWord: "military",
            img: '/img/answer.jpg',
            mean: 'askeri'
        },
        {
            rank: 512,
            targetWord: "",
            englishWord: "million",
            img: '/img/answer.jpg',
            mean: 'milyon'
        },
        {
            rank: 513,
            targetWord: "",
            englishWord: "mind",
            img: '/img/answer.jpg',
            mean: 'zihin'
        },
        {
            rank: 514,
            targetWord: "",
            englishWord: "minute",
            img: '/img/answer.jpg',
            mean: 'dakika'
        },
        {
            rank: 515,
            targetWord: "",
            englishWord: "miss",
            img: '/img/answer.jpg',
            mean: 'özlemek'
        },
        {
            rank: 516,
            targetWord: "",
            englishWord: "mission",
            img: '/img/answer.jpg',
            mean: 'misyon, görev'
        },
        {
            rank: 517,
            targetWord: "",
            englishWord: "model",
            img: '/img/answer.jpg',
            mean: 'model'
        },
        {
            rank: 518,
            targetWord: "",
            englishWord: "modern",
            img: '/img/answer.jpg',
            mean: 'modern'
        },
        {
            rank: 519,
            targetWord: "",
            englishWord: "moment",
            img: '/img/answer.jpg',
            mean: 'an'
        },
        {
            rank: 520,
            targetWord: "",
            englishWord: "money",
            img: '/img/answer.jpg',
            mean: 'para'
        },
        {
            rank: 521,
            targetWord: "",
            englishWord: "month",
            img: '/img/answer.jpg',
            mean: 'ay'
        },
        {
            rank: 522,
            targetWord: "",
            englishWord: "more",
            img: '/img/answer.jpg',
            mean: 'daha'
        },
        {
            rank: 523,
            targetWord: "",
            englishWord: "morning",
            img: '/img/answer.jpg',
            mean: 'sabah'
        },
        {
            rank: 524,
            targetWord: "",
            englishWord: "most",
            img: '/img/answer.jpg',
            mean: 'çoğu, en'
        },
        {
            rank: 525,
            targetWord: "",
            englishWord: "mother",
            img: '/img/answer.jpg',
            mean: 'anne'
        },
        {
            rank: 526,
            targetWord: "",
            englishWord: "mouth",
            img: '/img/answer.jpg',
            mean: 'ağız'
        },
        {
            rank: 527,
            targetWord: "",
            englishWord: "move",
            img: '/img/answer.jpg',
            mean: 'hareket etmek'
        },
        {
            rank: 528,
            targetWord: "",
            englishWord: "movement",
            img: '/img/answer.jpg',
            mean: 'hareket'
        },
        {
            rank: 529,
            targetWord: "",
            englishWord: "movie",
            img: '/img/answer.jpg',
            mean: 'film'
        },
        {
            rank: 530,
            targetWord: "",
            englishWord: "Mr",
            img: '/img/answer.jpg',
            mean: 'bay'
        },
        {
            rank: 531,
            targetWord: "",
            englishWord: "Mrs",
            img: '/img/answer.jpg',
            mean: 'bayan'
        },
        {
            rank: 532,
            targetWord: "",
            englishWord: "much",
            img: '/img/answer.jpg',
            mean: 'çok'
        },
        {
            rank: 533,
            targetWord: "",
            englishWord: "music",
            img: '/img/answer.jpg',
            mean: 'müzik'
        },
        {
            rank: 534,
            targetWord: "",
            englishWord: "must",
            img: '/img/answer.jpg',
            mean: 'zorunlu'
        },
        {
            rank: 535,
            targetWord: "",
            englishWord: "my",
            img: '/img/answer.jpg',
            mean: 'benim'
        },
        {
            rank: 536,
            targetWord: "",
            englishWord: "myself",
            img: '/img/answer.jpg',
            mean: 'kendim'
        },
        {
            rank: 537,
            targetWord: "",
            englishWord: "name",
            img: '/img/answer.jpg',
            mean: 'isim'
        },
        {
            rank: 538,
            targetWord: "",
            englishWord: "nation",
            img: '/img/answer.jpg',
            mean: 'ulus'
        },
        {
            rank: 539,
            targetWord: "",
            englishWord: "national",
            img: '/img/answer.jpg',
            mean: 'ulusal'
        },
        {
            rank: 540,
            targetWord: "",
            englishWord: "natural",
            img: '/img/answer.jpg',
            mean: 'doğal'
        },
        {
            rank: 541,
            targetWord: "",
            englishWord: "nature",
            img: '/img/answer.jpg',
            mean: 'doğa'
        },
        {
            rank: 542,
            targetWord: "",
            englishWord: "near",
            img: '/img/answer.jpg',
            mean: 'yakın'
        },
        {
            rank: 543,
            targetWord: "",
            englishWord: "nearly",
            img: '/img/answer.jpg',
            mean: 'neredeyse'
        },
        {
            rank: 544,
            targetWord: "",
            englishWord: "necessary",
            img: '/img/answer.jpg',
            mean: 'gerekli'
        },
        {
            rank: 545,
            targetWord: "",
            englishWord: "need",
            img: '/img/answer.jpg',
            mean: 'ihtiyaç'
        },
        {
            rank: 546,
            targetWord: "",
            englishWord: "network",
            img: '/img/answer.jpg',
            mean: 'ağ'
        },
        {
            rank: 547,
            targetWord: "",
            englishWord: "never",
            img: '/img/answer.jpg',
            mean: 'asla'
        },
        {
            rank: 548,
            targetWord: "",
            englishWord: "new",
            img: '/img/answer.jpg',
            mean: 'yeni'
        },
        {
            rank: 549,
            targetWord: "",
            englishWord: "news",
            img: '/img/answer.jpg',
            mean: 'haber'
        },
        {
            rank: 550,
            targetWord: "",
            englishWord: "newspaper",
            img: '/img/answer.jpg',
            mean: 'gazete'
        },
        {
            rank: 551,
            targetWord: "",
            englishWord: "next",
            img: '/img/answer.jpg',
            mean: 'sonraki'
        },
        {
            rank: 552,
            targetWord: "",
            englishWord: "nice",
            img: '/img/answer.jpg',
            mean: 'güzel'
        },
        {
            rank: 553,
            targetWord: "",
            englishWord: "night",
            img: '/img/answer.jpg',
            mean: 'gece'
        },
        {
            rank: 554,
            targetWord: "",
            englishWord: "no",
            img: '/img/answer.jpg',
            mean: 'yok, hayır'
        },
        {
            rank: 555,
            targetWord: "",
            englishWord: "none",
            img: '/img/answer.jpg',
            mean: 'yok'
        },
        {
            rank: 556,
            targetWord: "",
            englishWord: "nor",
            img: '/img/answer.jpg',
            mean: 'ne de'
        },
        {
            rank: 557,
            targetWord: "",
            englishWord: "north",
            img: '/img/answer.jpg',
            mean: 'kuzeyinde, kuzey'
        },
        {
            rank: 558,
            targetWord: "",
            englishWord: "not",
            img: '/img/answer.jpg',
            mean: 'değil'
        },
        {
            rank: 559,
            targetWord: "",
            englishWord: "note",
            img: '/img/answer.jpg',
            mean: 'not'
        },
        {
            rank: 560,
            targetWord: "",
            englishWord: "nothing",
            img: '/img/answer.jpg',
            mean: 'hiçbir şey'
        },
        {
            rank: 561,
            targetWord: "",
            englishWord: "notice",
            img: '/img/answer.jpg',
            mean: 'ihbar, fark etme, dikkat, uyarı'
        },
        {
            rank: 562,
            targetWord: "",
            englishWord: "now",
            img: '/img/answer.jpg',
            mean: 'şimdi'
        },
        {
            rank: 563,
            targetWord: "",
            englishWord: "number",
            img: '/img/answer.jpg',
            mean: 'numara'
        },
        {
            rank: 564,
            targetWord: "",
            englishWord: "occur",
            img: '/img/answer.jpg',
            mean: 'meydana gelmek'
        },
        {
            rank: 565,
            targetWord: "",
            englishWord: "off",
            img: '/img/answer.jpg',
            mean: 'kapalı'
        },
        {
            rank: 566,
            targetWord: "",
            englishWord: "offer",
            img: '/img/answer.jpg',
            mean: 'teklif etmek, teklif'
        },
        {
            rank: 567,
            targetWord: "",
            englishWord: "office",
            img: '/img/answer.jpg',
            mean: 'ofis'
        },
        {
            rank: 568,
            targetWord: "",
            englishWord: "officer",
            img: '/img/answer.jpg',
            mean: 'memur'
        },
        {
            rank: 569,
            targetWord: "",
            englishWord: "official",
            img: '/img/answer.jpg',
            mean: 'resmi'
        },
        {
            rank: 570,
            targetWord: "",
            englishWord: "often",
            img: '/img/answer.jpg',
            mean: 'sıklıkla'
        },
        {
            rank: 571,
            targetWord: "",
            englishWord: "oil",
            img: '/img/answer.jpg',
            mean: 'yağ'
        },
        {
            rank: 572,
            targetWord: "",
            englishWord: "ok",
            img: '/img/answer.jpg',
            mean: 'tamam'
        },
        {
            rank: 573,
            targetWord: "",
            englishWord: "old",
            img: '/img/answer.jpg',
            mean: 'eski'
        },
        {
            rank: 574,
            targetWord: "",
            englishWord: "on",
            img: '/img/answer.jpg',
            mean: 'üzerinde'
        },
        {
            rank: 575,
            targetWord: "",
            englishWord: "once",
            img: '/img/answer.jpg',
            mean: 'bir zamanlar'
        },
        {
            rank: 576,
            targetWord: "",
            englishWord: "one",
            img: '/img/answer.jpg',
            mean: 'bir'
        },
        {
            rank: 577,
            targetWord: "",
            englishWord: "only",
            img: '/img/answer.jpg',
            mean: 'bir tek, tek'
        },
        {
            rank: 578,
            targetWord: "",
            englishWord: "onto",
            img: '/img/answer.jpg',
            mean: 'üstüne'
        },
        {
            rank: 579,
            targetWord: "",
            englishWord: "open",
            img: '/img/answer.jpg',
            mean: 'açık'
        },
        {
            rank: 580,
            targetWord: "",
            englishWord: "operation",
            img: '/img/answer.jpg',
            mean: 'ameliyat'
        },
        {
            rank: 581,
            targetWord: "",
            englishWord: "opportunity",
            img: '/img/answer.jpg',
            mean: 'fırsat'
        },
        {
            rank: 582,
            targetWord: "",
            englishWord: "option",
            img: '/img/answer.jpg',
            mean: 'seçenek'
        },
        {
            rank: 583,
            targetWord: "",
            englishWord: "or",
            img: '/img/answer.jpg',
            mean: 'veya'
        },
        {
            rank: 584,
            targetWord: "",
            englishWord: "order",
            img: '/img/answer.jpg',
            mean: 'sipariş'
        },
        {
            rank: 585,
            targetWord: "",
            englishWord: "organization",
            img: '/img/answer.jpg',
            mean: 'organizasyon'
        },
        {
            rank: 586,
            targetWord: "",
            englishWord: "other",
            img: '/img/answer.jpg',
            mean: 'diğer'
        },
        {
            rank: 587,
            targetWord: "",
            englishWord: "others",
            img: '/img/answer.jpg',
            mean: 'diğerleri'
        },
        {
            rank: 588,
            targetWord: "",
            englishWord: "our",
            img: '/img/answer.jpg',
            mean: 'bizim'
        },
        {
            rank: 589,
            targetWord: "",
            englishWord: "out",
            img: '/img/answer.jpg',
            mean: 'dışarı'
        },
        {
            rank: 590,
            targetWord: "",
            englishWord: "outside",
            img: '/img/answer.jpg',
            mean: 'dışında'
        },
        {
            rank: 591,
            targetWord: "",
            englishWord: "over",
            img: '/img/answer.jpg',
            mean: 'bitti'
        },
        {
            rank: 592,
            targetWord: "",
            englishWord: "own",
            img: '/img/answer.jpg',
            mean: 'kendi'
        },
        {
            rank: 593,
            targetWord: "",
            englishWord: "owner",
            img: '/img/answer.jpg',
            mean: 'sahip'
        },
        {
            rank: 594,
            targetWord: "",
            englishWord: "page",
            img: '/img/answer.jpg',
            mean: 'sayfa'
        },
        {
            rank: 595,
            targetWord: "",
            englishWord: "pain",
            img: '/img/answer.jpg',
            mean: 'ağrı'
        },
        {
            rank: 596,
            targetWord: "",
            englishWord: "painting",
            img: '/img/answer.jpg',
            mean: 'boyama'
        },
        {
            rank: 597,
            targetWord: "",
            englishWord: "paper",
            img: '/img/answer.jpg',
            mean: 'kağıt'
        },
        {
            rank: 598,
            targetWord: "",
            englishWord: "parent",
            img: '/img/answer.jpg',
            mean: 'ebeveyn'
        },
        {
            rank: 599,
            targetWord: "",
            englishWord: "part",
            img: '/img/answer.jpg',
            mean: 'bölüm'
        },
        {
            rank: 600,
            targetWord: "",
            englishWord: "participant",
            img: '/img/answer.jpg',
            mean: 'katılımcı'
        },
        {
            rank: 601,
            targetWord: "",
            englishWord: "particular",
            img: '/img/answer.jpg',
            mean: 'özel'
        },
        {
            rank: 602,
            targetWord: "",
            englishWord: "particularly",
            img: '/img/answer.jpg',
            mean: 'özellikle'
        },
        {
            rank: 603,
            targetWord: "",
            englishWord: "partner",
            img: '/img/answer.jpg',
            mean: 'ortak'
        },
        {
            rank: 604,
            targetWord: "",
            englishWord: "party",
            img: '/img/answer.jpg',
            mean: 'parti'
        },
        {
            rank: 605,
            targetWord: "",
            englishWord: "pass",
            img: '/img/answer.jpg',
            mean: 'geçmek'
        },
        {
            rank: 606,
            targetWord: "",
            englishWord: "past",
            img: '/img/answer.jpg',
            mean: 'geçmiş'
        },
        {
            rank: 607,
            targetWord: "",
            englishWord: "patient",
            img: '/img/answer.jpg',
            mean: 'hasta'
        },
        {
            rank: 608,
            targetWord: "",
            englishWord: "pattern",
            img: '/img/answer.jpg',
            mean: 'desen'
        },
        {
            rank: 609,
            targetWord: "",
            englishWord: "pay",
            img: '/img/answer.jpg',
            mean: 'ödemek'
        },
        {
            rank: 610,
            targetWord: "",
            englishWord: "peace",
            img: '/img/answer.jpg',
            mean: 'barış'
        },
        {
            rank: 611,
            targetWord: "",
            englishWord: "people",
            img: '/img/answer.jpg',
            mean: 'insanlar'
        },
        {
            rank: 612,
            targetWord: "",
            englishWord: "per",
            img: '/img/answer.jpg',
            mean: 'başına'
        },
        {
            rank: 613,
            targetWord: "",
            englishWord: "perform",
            img: '/img/answer.jpg',
            mean: 'gerçekleştirmek'
        },
        {
            rank: 614,
            targetWord: "",
            englishWord: "performance",
            img: '/img/answer.jpg',
            mean: 'performans'
        },
        {
            rank: 615,
            targetWord: "",
            englishWord: "perhaps",
            img: '/img/answer.jpg',
            mean: 'belki'
        },
        {
            rank: 616,
            targetWord: "",
            englishWord: "period",
            img: '/img/answer.jpg',
            mean: 'dönem'
        },
        {
            rank: 617,
            targetWord: "",
            englishWord: "person",
            img: '/img/answer.jpg',
            mean: 'kişi'
        },
        {
            rank: 618,
            targetWord: "",
            englishWord: "personal",
            img: '/img/answer.jpg',
            mean: 'kişisel'
        },
        {
            rank: 619,
            targetWord: "",
            englishWord: "phone",
            img: '/img/answer.jpg',
            mean: 'telefon'
        },
        {
            rank: 620,
            targetWord: "",
            englishWord: "physical",
            img: '/img/answer.jpg',
            mean: 'fiziksel'
        },
        {
            rank: 621,
            targetWord: "",
            englishWord: "pick",
            img: '/img/answer.jpg',
            mean: 'almak'
        },
        {
            rank: 622,
            targetWord: "",
            englishWord: "picture",
            img: '/img/answer.jpg',
            mean: 'resim'
        },
        {
            rank: 623,
            targetWord: "",
            englishWord: "piece",
            img: '/img/answer.jpg',
            mean: 'parça'
        },
        {
            rank: 624,
            targetWord: "",
            englishWord: "place",
            img: '/img/answer.jpg',
            mean: 'yer'
        },
        {
            rank: 625,
            targetWord: "",
            englishWord: "plan",
            img: '/img/answer.jpg',
            mean: 'plan'
        },
        {
            rank: 626,
            targetWord: "",
            englishWord: "plant",
            img: '/img/answer.jpg',
            mean: 'bitki'
        },
        {
            rank: 627,
            targetWord: "",
            englishWord: "play",
            img: '/img/answer.jpg',
            mean: 'oynamak'
        },
        {
            rank: 628,
            targetWord: "",
            englishWord: "player",
            img: '/img/answer.jpg',
            mean: 'oyuncu'
        },
        {
            rank: 629,
            targetWord: "",
            englishWord: "point",
            img: '/img/answer.jpg',
            mean: 'puan'
        },
        {
            rank: 630,
            targetWord: "",
            englishWord: "police",
            img: '/img/answer.jpg',
            mean: 'polis'
        },
        {
            rank: 631,
            targetWord: "",
            englishWord: "policy",
            img: '/img/answer.jpg',
            mean: 'politika'
        },
        {
            rank: 632,
            targetWord: "",
            englishWord: "political",
            img: '/img/answer.jpg',
            mean: 'siyasi'
        },
        {
            rank: 633,
            targetWord: "",
            englishWord: "politics",
            img: '/img/answer.jpg',
            mean: 'siyaset, politika'
        },
        {
            rank: 634,
            targetWord: "",
            englishWord: "poor",
            img: '/img/answer.jpg',
            mean: 'fakir'
        },
        {
            rank: 635,
            targetWord: "",
            englishWord: "popular",
            img: '/img/answer.jpg',
            mean: 'popüler'
        },
        {
            rank: 636,
            targetWord: "",
            englishWord: "population",
            img: '/img/answer.jpg',
            mean: 'nüfus'
        },
        {
            rank: 637,
            targetWord: "",
            englishWord: "position",
            img: '/img/answer.jpg',
            mean: 'pozisyon'
        },
        {
            rank: 638,
            targetWord: "",
            englishWord: "positive",
            img: '/img/answer.jpg',
            mean: 'pozitif'
        },
        {
            rank: 639,
            targetWord: "",
            englishWord: "possible",
            img: '/img/answer.jpg',
            mean: 'mümkün'
        },
        {
            rank: 640,
            targetWord: "",
            englishWord: "power",
            img: '/img/answer.jpg',
            mean: 'güç'
        },
        {
            rank: 641,
            targetWord: "",
            englishWord: "practice",
            img: '/img/answer.jpg',
            mean: 'uygulama'
        },
        {
            rank: 642,
            targetWord: "",
            englishWord: "prepare",
            img: '/img/answer.jpg',
            mean: 'hazırlamak'
        },
        {
            rank: 643,
            targetWord: "",
            englishWord: "present",
            img: '/img/answer.jpg',
            mean: 'mevcut, sunmak'
        },
        {
            rank: 644,
            targetWord: "",
            englishWord: "president",
            img: '/img/answer.jpg',
            mean: 'devlet Başkanı'
        },
        {
            rank: 645,
            targetWord: "",
            englishWord: "pressure",
            img: '/img/answer.jpg',
            mean: 'basınç'
        },
        {
            rank: 646,
            targetWord: "",
            englishWord: "pretty",
            img: '/img/answer.jpg',
            mean: 'güzel'
        },
        {
            rank: 647,
            targetWord: "",
            englishWord: "prevent",
            img: '/img/answer.jpg',
            mean: 'engel olmak'
        },
        {
            rank: 648,
            targetWord: "",
            englishWord: "price",
            img: '/img/answer.jpg',
            mean: 'fiyat'
        },
        {
            rank: 649,
            targetWord: "",
            englishWord: "private",
            img: '/img/answer.jpg',
            mean: 'özel'
        },
        {
            rank: 650,
            targetWord: "",
            englishWord: "probably",
            img: '/img/answer.jpg',
            mean: 'muhtemelen'
        },
        {
            rank: 651,
            targetWord: "",
            englishWord: "problem",
            img: '/img/answer.jpg',
            mean: 'sorun, problem'
        },
        {
            rank: 652,
            targetWord: "",
            englishWord: "process",
            img: '/img/answer.jpg',
            mean: 'işlem'
        },
        {
            rank: 653,
            targetWord: "",
            englishWord: "produce",
            img: '/img/answer.jpg',
            mean: 'üretmek'
        },
        {
            rank: 654,
            targetWord: "",
            englishWord: "product",
            img: '/img/answer.jpg',
            mean: 'ürün'
        },
        {
            rank: 655,
            targetWord: "",
            englishWord: "production",
            img: '/img/answer.jpg',
            mean: 'üretim'
        },
        {
            rank: 656,
            targetWord: "",
            englishWord: "professional",
            img: '/img/answer.jpg',
            mean: 'profesyonel'
        },
        {
            rank: 657,
            targetWord: "",
            englishWord: "professor",
            img: '/img/answer.jpg',
            mean: 'profesör'
        },
        {
            rank: 658,
            targetWord: "",
            englishWord: "program",
            img: '/img/answer.jpg',
            mean: 'program'
        },
        {
            rank: 659,
            targetWord: "",
            englishWord: "project",
            img: '/img/answer.jpg',
            mean: 'proje'
        },
        {
            rank: 660,
            targetWord: "",
            englishWord: "property",
            img: '/img/answer.jpg',
            mean: 'gayrimenkul, mülk, özellik'
        },
        {
            rank: 661,
            targetWord: "",
            englishWord: "protect",
            img: '/img/answer.jpg',
            mean: 'korumak'
        },
        {
            rank: 662,
            targetWord: "",
            englishWord: "prove",
            img: '/img/answer.jpg',
            mean: 'kanıtlamak'
        },
        {
            rank: 663,
            targetWord: "",
            englishWord: "provide",
            img: '/img/answer.jpg',
            mean: 'sağlamak'
        },
        {
            rank: 664,
            targetWord: "",
            englishWord: "public",
            img: '/img/answer.jpg',
            mean: 'halka açık'
        },
        {
            rank: 665,
            targetWord: "",
            englishWord: "pull",
            img: '/img/answer.jpg',
            mean: 'çek'
        },
        {
            rank: 666,
            targetWord: "",
            englishWord: "purpose",
            img: '/img/answer.jpg',
            mean: 'amaç'
        },
        {
            rank: 667,
            targetWord: "",
            englishWord: "push",
            img: '/img/answer.jpg',
            mean: 'itmek'
        },
        {
            rank: 668,
            targetWord: "",
            englishWord: "put",
            img: '/img/answer.jpg',
            mean: 'koymak'
        },
        {
            rank: 669,
            targetWord: "",
            englishWord: "quality",
            img: '/img/answer.jpg',
            mean: 'kalite'
        },
        {
            rank: 670,
            targetWord: "",
            englishWord: "question",
            img: '/img/answer.jpg',
            mean: 'soru'
        },
        {
            rank: 671,
            targetWord: "",
            englishWord: "quickly",
            img: '/img/answer.jpg',
            mean: 'hızlı bir şekilde, hızlı'
        },
        {
            rank: 672,
            targetWord: "",
            englishWord: "quite",
            img: '/img/answer.jpg',
            mean: 'oldukça, epeyce'
        },
        {
            rank: 673,
            targetWord: "",
            englishWord: "race",
            img: '/img/answer.jpg',
            mean: 'yarış'
        },
        {
            rank: 674,
            targetWord: "",
            englishWord: "radio",
            img: '/img/answer.jpg',
            mean: 'radyo'
        },
        {
            rank: 675,
            targetWord: "",
            englishWord: "raise",
            img: '/img/answer.jpg',
            mean: 'yükseltmek, artırmak, artış'
        },
        {
            rank: 676,
            targetWord: "",
            englishWord: "range",
            img: '/img/answer.jpg',
            mean: 'menzil'
        },
        {
            rank: 677,
            targetWord: "",
            englishWord: "rate",
            img: '/img/answer.jpg',
            mean: 'oran'
        },
        {
            rank: 678,
            targetWord: "",
            englishWord: "rather",
            img: '/img/answer.jpg',
            mean: 'daha doğrusu'
        },
        {
            rank: 679,
            targetWord: "",
            englishWord: "reach",
            img: '/img/answer.jpg',
            mean: 'ulaşmak'
        },
        {
            rank: 680,
            targetWord: "",
            englishWord: "read",
            img: '/img/answer.jpg',
            mean: 'okumak'
        },
        {
            rank: 681,
            targetWord: "",
            englishWord: "ready",
            img: '/img/answer.jpg',
            mean: 'hazır'
        },
        {
            rank: 682,
            targetWord: "",
            englishWord: "real",
            img: '/img/answer.jpg',
            mean: 'gerçek'
        },
        {
            rank: 683,
            targetWord: "",
            englishWord: "reality",
            img: '/img/answer.jpg',
            mean: 'gerçeklik'
        },
        {
            rank: 684,
            targetWord: "",
            englishWord: "realize",
            img: '/img/answer.jpg',
            mean: 'farketmek'
        },
        {
            rank: 685,
            targetWord: "",
            englishWord: "really",
            img: '/img/answer.jpg',
            mean: 'gerçekten mi'
        },
        {
            rank: 686,
            targetWord: "",
            englishWord: "reason",
            img: '/img/answer.jpg',
            mean: 'neden'
        },
        {
            rank: 687,
            targetWord: "",
            englishWord: "receive",
            img: '/img/answer.jpg',
            mean: 'teslim almak'
        },
        {
            rank: 688,
            targetWord: "",
            englishWord: "recent",
            img: '/img/answer.jpg',
            mean: 'son, yeni'
        },
        {
            rank: 689,
            targetWord: "",
            englishWord: "recently",
            img: '/img/answer.jpg',
            mean: 'son günlerde'
        },
        {
            rank: 690,
            targetWord: "",
            englishWord: "recognize",
            img: '/img/answer.jpg',
            mean: 'tanımak'
        },
        {
            rank: 691,
            targetWord: "",
            englishWord: "record",
            img: '/img/answer.jpg',
            mean: 'kayıt'
        },
        {
            rank: 692,
            targetWord: "",
            englishWord: "red",
            img: '/img/answer.jpg',
            mean: 'kırmızı'
        },
        {
            rank: 693,
            targetWord: "",
            englishWord: "reduce",
            img: '/img/answer.jpg',
            mean: 'azaltmak'
        },
        {
            rank: 694,
            targetWord: "",
            englishWord: "reflect",
            img: '/img/answer.jpg',
            mean: 'yansıtmak'
        },
        {
            rank: 695,
            targetWord: "",
            englishWord: "region",
            img: '/img/answer.jpg',
            mean: 'bölge'
        },
        {
            rank: 696,
            targetWord: "",
            englishWord: "relate",
            img: '/img/answer.jpg',
            mean: 'ilişki kurmak'
        },
        {
            rank: 697,
            targetWord: "",
            englishWord: "relationship",
            img: '/img/answer.jpg',
            mean: 'ilişki'
        },
        {
            rank: 698,
            targetWord: "",
            englishWord: "religious",
            img: '/img/answer.jpg',
            mean: 'dini'
        },
        {
            rank: 699,
            targetWord: "",
            englishWord: "remain",
            img: '/img/answer.jpg',
            mean: 'kalmak'
        },
        {
            rank: 700,
            targetWord: "",
            englishWord: "remember",
            img: '/img/answer.jpg',
            mean: 'hatırlamak'
        },
        {
            rank: 701,
            targetWord: "",
            englishWord: "remove",
            img: '/img/answer.jpg',
            mean: 'kaldırmak, çıkarmak'
        },
        {
            rank: 702,
            targetWord: "",
            englishWord: "report",
            img: '/img/answer.jpg',
            mean: 'rapor'
        },
        {
            rank: 703,
            targetWord: "",
            englishWord: "represent",
            img: '/img/answer.jpg',
            mean: 'temsil etmek'
        },
        {
            rank: 704,
            targetWord: "",
            englishWord: "republican",
            img: '/img/answer.jpg',
            mean: 'cumhuriyetçi'
        },
        {
            rank: 705,
            targetWord: "",
            englishWord: "require",
            img: '/img/answer.jpg',
            mean: 'gerektirir, gerekmek'
        },
        {
            rank: 706,
            targetWord: "",
            englishWord: "research",
            img: '/img/answer.jpg',
            mean: 'araştırma'
        },
        {
            rank: 707,
            targetWord: "",
            englishWord: "resource",
            img: '/img/answer.jpg',
            mean: 'kaynak'
        },
        {
            rank: 708,
            targetWord: "",
            englishWord: "respond",
            img: '/img/answer.jpg',
            mean: 'yanıtlamak'
        },
        {
            rank: 709,
            targetWord: "",
            englishWord: "response",
            img: '/img/answer.jpg',
            mean: 'cevap'
        },
        {
            rank: 710,
            targetWord: "",
            englishWord: "responsibility",
            img: '/img/answer.jpg',
            mean: 'sorumluluk'
        },
        {
            rank: 711,
            targetWord: "",
            englishWord: "rest",
            img: '/img/answer.jpg',
            mean: 'dinlenme'
        },
        {
            rank: 712,
            targetWord: "",
            englishWord: "result",
            img: '/img/answer.jpg',
            mean: 'sonuç'
        },
        {
            rank: 713,
            targetWord: "",
            englishWord: "return",
            img: '/img/answer.jpg',
            mean: 'dönüş'
        },
        {
            rank: 714,
            targetWord: "",
            englishWord: "reveal",
            img: '/img/answer.jpg',
            mean: 'ortaya çıkarmak'
        },
        {
            rank: 715,
            targetWord: "",
            englishWord: "rich",
            img: '/img/answer.jpg',
            mean: 'zengin'
        },
        {
            rank: 716,
            targetWord: "",
            englishWord: "right",
            img: '/img/answer.jpg',
            mean: 'sağ, doğru, haklı'
        },
        {
            rank: 717,
            targetWord: "",
            englishWord: "rise",
            img: '/img/answer.jpg',
            mean: 'yükselmek'
        },
        {
            rank: 718,
            targetWord: "",
            englishWord: "risk",
            img: '/img/answer.jpg',
            mean: 'risk'
        },
        {
            rank: 719,
            targetWord: "",
            englishWord: "road",
            img: '/img/answer.jpg',
            mean: 'yol'
        },
        {
            rank: 720,
            targetWord: "",
            englishWord: "rock",
            img: '/img/answer.jpg',
            mean: 'kaya'
        },
        {
            rank: 721,
            targetWord: "",
            englishWord: "role",
            img: '/img/answer.jpg',
            mean: 'rol'
        },
        {
            rank: 722,
            targetWord: "",
            englishWord: "room",
            img: '/img/answer.jpg',
            mean: 'oda'
        },
        {
            rank: 723,
            targetWord: "",
            englishWord: "rule",
            img: '/img/answer.jpg',
            mean: 'kural'
        },
        {
            rank: 724,
            targetWord: "",
            englishWord: "run",
            img: '/img/answer.jpg',
            mean: 'koşmak'
        },
        {
            rank: 725,
            targetWord: "",
            englishWord: "safe",
            img: '/img/answer.jpg',
            mean: 'güvenli'
        },
        {
            rank: 726,
            targetWord: "",
            englishWord: "same",
            img: '/img/answer.jpg',
            mean: 'aynı'
        },
        {
            rank: 727,
            targetWord: "",
            englishWord: "save",
            img: '/img/answer.jpg',
            mean: 'kayıt etmek, kaydetmek, kurtarmak'
        },
        {
            rank: 728,
            targetWord: "",
            englishWord: "say",
            img: '/img/answer.jpg',
            mean: 'söylemek'
        },
        {
            rank: 729,
            targetWord: "",
            englishWord: "scene",
            img: '/img/answer.jpg',
            mean: 'sahne, olay, faaliyet alanı'
        },
        {
            rank: 730,
            targetWord: "",
            englishWord: "school",
            img: '/img/answer.jpg',
            mean: 'okul'
        },
        {
            rank: 731,
            targetWord: "",
            englishWord: "science",
            img: '/img/answer.jpg',
            mean: 'bilim'
        },
        {
            rank: 732,
            targetWord: "",
            englishWord: "scientist",
            img: '/img/answer.jpg',
            mean: 'bilim insanı'
        },
        {
            rank: 733,
            targetWord: "",
            englishWord: "score",
            img: '/img/answer.jpg',
            mean: 'skor'
        },
        {
            rank: 734,
            targetWord: "",
            englishWord: "sea",
            img: '/img/answer.jpg',
            mean: 'deniz'
        },
        {
            rank: 735,
            targetWord: "",
            englishWord: "season",
            img: '/img/answer.jpg',
            mean: 'sezon'
        },
        {
            rank: 736,
            targetWord: "",
            englishWord: "seat",
            img: '/img/answer.jpg',
            mean: 'koltuk'
        },
        {
            rank: 737,
            targetWord: "",
            englishWord: "second",
            img: '/img/answer.jpg',
            mean: 'ikinci'
        },
        {
            rank: 738,
            targetWord: "",
            englishWord: "section",
            img: '/img/answer.jpg',
            mean: 'bölüm'
        },
        {
            rank: 739,
            targetWord: "",
            englishWord: "security",
            img: '/img/answer.jpg',
            mean: 'güvenlik'
        },
        {
            rank: 740,
            targetWord: "",
            englishWord: "see",
            img: '/img/answer.jpg',
            mean: 'görmek'
        },
        {
            rank: 741,
            targetWord: "",
            englishWord: "seek",
            img: '/img/answer.jpg',
            mean: 'aramak'
        },
        {
            rank: 742,
            targetWord: "",
            englishWord: "seem",
            img: '/img/answer.jpg',
            mean: 'görünmek'
        },
        {
            rank: 743,
            targetWord: "",
            englishWord: "sell",
            img: '/img/answer.jpg',
            mean: 'satmak'
        },
        {
            rank: 744,
            targetWord: "",
            englishWord: "send",
            img: '/img/answer.jpg',
            mean: 'göndermek'
        },
        {
            rank: 745,
            targetWord: "",
            englishWord: "senior",
            img: '/img/answer.jpg',
            mean: 'kıdemli'
        },
        {
            rank: 746,
            targetWord: "",
            englishWord: "sense",
            img: '/img/answer.jpg',
            mean: 'anlam, algı, duyu'
        },
        {
            rank: 747,
            targetWord: "",
            englishWord: "series",
            img: '/img/answer.jpg',
            mean: 'dizi'
        },
        {
            rank: 748,
            targetWord: "",
            englishWord: "serious",
            img: '/img/answer.jpg',
            mean: 'ciddi'
        },
        {
            rank: 749,
            targetWord: "",
            englishWord: "serve",
            img: '/img/answer.jpg',
            mean: 'servis'
        },
        {
            rank: 750,
            targetWord: "",
            englishWord: "service",
            img: '/img/answer.jpg',
            mean: 'hizmet'
        },
        {
            rank: 751,
            targetWord: "",
            englishWord: "set",
            img: '/img/answer.jpg',
            mean: 'ayarlamak'
        },
        {
            rank: 752,
            targetWord: "",
            englishWord: "seven",
            img: '/img/answer.jpg',
            mean: 'yedi'
        },
        {
            rank: 753,
            targetWord: "",
            englishWord: "several",
            img: '/img/answer.jpg',
            mean: 'birkaç'
        },
        {
            rank: 754,
            targetWord: "",
            englishWord: "shake",
            img: '/img/answer.jpg',
            mean: 'sallamak'
        },
        {
            rank: 755,
            targetWord: "",
            englishWord: "share",
            img: '/img/answer.jpg',
            mean: 'paylaşmak'
        },
        {
            rank: 756,
            targetWord: "",
            englishWord: "she",
            img: '/img/answer.jpg',
            mean: 'o'
        },
        {
            rank: 757,
            targetWord: "",
            englishWord: "shoot",
            img: '/img/answer.jpg',
            mean: 'şut çekmek, film çekmek, çekim'
        },
        {
            rank: 758,
            targetWord: "",
            englishWord: "short",
            img: '/img/answer.jpg',
            mean: 'kısa'
        },
        {
            rank: 759,
            targetWord: "",
            englishWord: "shot",
            img: '/img/answer.jpg',
            mean: 'atış'
        },
        {
            rank: 760,
            targetWord: "",
            englishWord: "should",
            img: '/img/answer.jpg',
            mean: '-meli'
        },
        {
            rank: 761,
            targetWord: "",
            englishWord: "shoulder",
            img: '/img/answer.jpg',
            mean: 'omuz'
        },
        {
            rank: 762,
            targetWord: "",
            englishWord: "show",
            img: '/img/answer.jpg',
            mean: 'göstermek'
        },
        {
            rank: 763,
            targetWord: "",
            englishWord: "side",
            img: '/img/answer.jpg',
            mean: 'yan'
        },
        {
            rank: 764,
            targetWord: "",
            englishWord: "sign",
            img: '/img/answer.jpg',
            mean: 'işaret, imza'
        },
        {
            rank: 765,
            targetWord: "",
            englishWord: "significant",
            img: '/img/answer.jpg',
            mean: 'önemli'
        },
        {
            rank: 766,
            targetWord: "",
            englishWord: "similar",
            img: '/img/answer.jpg',
            mean: 'benzer'
        },
        {
            rank: 767,
            targetWord: "",
            englishWord: "simple",
            img: '/img/answer.jpg',
            mean: 'basit'
        },
        {
            rank: 768,
            targetWord: "",
            englishWord: "simply",
            img: '/img/answer.jpg',
            mean: 'basitçe'
        },
        {
            rank: 769,
            targetWord: "",
            englishWord: "since",
            img: '/img/answer.jpg',
            mean: 'dan beri'
        },
        {
            rank: 770,
            targetWord: "",
            englishWord: "sing",
            img: '/img/answer.jpg',
            mean: 'şarkı söylemek'
        },
        {
            rank: 771,
            targetWord: "",
            englishWord: "single",
            img: '/img/answer.jpg',
            mean: 'tek'
        },
        {
            rank: 772,
            targetWord: "",
            englishWord: "sister",
            img: '/img/answer.jpg',
            mean: 'kız kardeş'
        },
        {
            rank: 773,
            targetWord: "",
            englishWord: "sit",
            img: '/img/answer.jpg',
            mean: 'oturmak'
        },
        {
            rank: 774,
            targetWord: "",
            englishWord: "site",
            img: '/img/answer.jpg',
            mean: 'yer, alan'
        },
        {
            rank: 775,
            targetWord: "",
            englishWord: "situation",
            img: '/img/answer.jpg',
            mean: 'durum'
        },
        {
            rank: 776,
            targetWord: "",
            englishWord: "six",
            img: '/img/answer.jpg',
            mean: 'altı'
        },
        {
            rank: 777,
            targetWord: "",
            englishWord: "size",
            img: '/img/answer.jpg',
            mean: 'boyut, boy'
        },
        {
            rank: 778,
            targetWord: "",
            englishWord: "skill",
            img: '/img/answer.jpg',
            mean: 'beceri, yetenek, ustalık'
        },
        {
            rank: 779,
            targetWord: "",
            englishWord: "skin",
            img: '/img/answer.jpg',
            mean: 'cilt'
        },
        {
            rank: 780,
            targetWord: "",
            englishWord: "small",
            img: '/img/answer.jpg',
            mean: 'küçük'
        },
        {
            rank: 781,
            targetWord: "",
            englishWord: "smile",
            img: '/img/answer.jpg',
            mean: 'gülümseme'
        },
        {
            rank: 782,
            targetWord: "",
            englishWord: "so",
            img: '/img/answer.jpg',
            mean: 'yani'
        },
        {
            rank: 783,
            targetWord: "",
            englishWord: "social",
            img: '/img/answer.jpg',
            mean: 'sosyal'
        },
        {
            rank: 784,
            targetWord: "",
            englishWord: "society",
            img: '/img/answer.jpg',
            mean: 'toplum'
        },
        {
            rank: 785,
            targetWord: "",
            englishWord: "soldier",
            img: '/img/answer.jpg',
            mean: 'asker'
        },
        {
            rank: 786,
            targetWord: "",
            englishWord: "some",
            img: '/img/answer.jpg',
            mean: 'bazı'
        },
        {
            rank: 787,
            targetWord: "",
            englishWord: "somebody",
            img: '/img/answer.jpg',
            mean: 'birileri'
        },
        {
            rank: 788,
            targetWord: "",
            englishWord: "someone",
            img: '/img/answer.jpg',
            mean: 'birisi'
        },
        {
            rank: 789,
            targetWord: "",
            englishWord: "something",
            img: '/img/answer.jpg',
            mean: 'bir şey'
        },
        {
            rank: 790,
            targetWord: "",
            englishWord: "sometimes",
            img: '/img/answer.jpg',
            mean: 'ara sıra'
        },
        {
            rank: 791,
            targetWord: "",
            englishWord: "son",
            img: '/img/answer.jpg',
            mean: 'oğul'
        },
        {
            rank: 792,
            targetWord: "",
            englishWord: "song",
            img: '/img/answer.jpg',
            mean: 'şarkı'
        },
        {
            rank: 793,
            targetWord: "",
            englishWord: "soon",
            img: '/img/answer.jpg',
            mean: 'yakında'
        },
        {
            rank: 794,
            targetWord: "",
            englishWord: "sort",
            img: '/img/answer.jpg',
            mean: 'çeşit, tür, düzenlemek'
        },
        {
            rank: 795,
            targetWord: "",
            englishWord: "sound",
            img: '/img/answer.jpg',
            mean: 'ses'
        },
        {
            rank: 796,
            targetWord: "",
            englishWord: "source",
            img: '/img/answer.jpg',
            mean: 'kaynak'
        },
        {
            rank: 797,
            targetWord: "",
            englishWord: "south",
            img: '/img/answer.jpg',
            mean: 'güney'
        },
        {
            rank: 798,
            targetWord: "",
            englishWord: "southern",
            img: '/img/answer.jpg',
            mean: 'güney, güneyli'
        },
        {
            rank: 799,
            targetWord: "",
            englishWord: "space",
            img: '/img/answer.jpg',
            mean: 'boşluk'
        },
        {
            rank: 800,
            targetWord: "",
            englishWord: "speak",
            img: '/img/answer.jpg',
            mean: 'konuşmak'
        },
        {
            rank: 801,
            targetWord: "",
            englishWord: "special",
            img: '/img/answer.jpg',
            mean: 'özel, has'
        },
        {
            rank: 802,
            targetWord: "",
            englishWord: "specific",
            img: '/img/answer.jpg',
            mean: 'özel, belirli'
        },
        {
            rank: 803,
            targetWord: "",
            englishWord: "speech",
            img: '/img/answer.jpg',
            mean: 'konuşma'
        },
        {
            rank: 804,
            targetWord: "",
            englishWord: "spend",
            img: '/img/answer.jpg',
            mean: 'harcamak'
        },
        {
            rank: 805,
            targetWord: "",
            englishWord: "sport",
            img: '/img/answer.jpg',
            mean: 'spor'
        },
        {
            rank: 806,
            targetWord: "",
            englishWord: "spring",
            img: '/img/answer.jpg',
            mean: 'bahar'
        },
        {
            rank: 807,
            targetWord: "",
            englishWord: "staff",
            img: '/img/answer.jpg',
            mean: 'personel'
        },
        {
            rank: 808,
            targetWord: "",
            englishWord: "stage",
            img: '/img/answer.jpg',
            mean: 'sahne'
        },
        {
            rank: 809,
            targetWord: "",
            englishWord: "stand",
            img: '/img/answer.jpg',
            mean: 'durmak'
        },
        {
            rank: 810,
            targetWord: "",
            englishWord: "standard",
            img: '/img/answer.jpg',
            mean: 'standart'
        },
        {
            rank: 811,
            targetWord: "",
            englishWord: "star",
            img: '/img/answer.jpg',
            mean: 'star, yıldız'
        },
        {
            rank: 812,
            targetWord: "",
            englishWord: "start",
            img: '/img/answer.jpg',
            mean: 'başlama'
        },
        {
            rank: 813,
            targetWord: "",
            englishWord: "state",
            img: '/img/answer.jpg',
            mean: 'belirtmek'
        },
        {
            rank: 814,
            targetWord: "",
            englishWord: "statement",
            img: '/img/answer.jpg',
            mean: 'beyan'
        },
        {
            rank: 815,
            targetWord: "",
            englishWord: "	station",
            img: '/img/answer.jpg',
            mean: 'istasyon'
        },
        {
            rank: 816,
            targetWord: "",
            englishWord: "stay",
            img: '/img/answer.jpg',
            mean: 'kalmak'
        },
        {
            rank: 817,
            targetWord: "",
            englishWord: "step",
            img: '/img/answer.jpg',
            mean: 'adım'
        },
        {
            rank: 818,
            targetWord: "",
            englishWord: "still",
            img: '/img/answer.jpg',
            mean: 'hala'
        },
        {
            rank: 819,
            targetWord: "",
            englishWord: "stock",
            img: '/img/answer.jpg',
            mean: 'stok'
        },
        {
            rank: 820,
            targetWord: "",
            englishWord: "stop",
            img: '/img/answer.jpg',
            mean: 'dur'
        },
        {
            rank: 921,
            targetWord: "",
            englishWord: "store",
            img: '/img/answer.jpg',
            mean: 'mağaza'
        },
        {
            rank: 822,
            targetWord: "",
            englishWord: "story",
            img: '/img/answer.jpg',
            mean: 'öykü'
        },
        {
            rank: 823,
            targetWord: "",
            englishWord: "strategy",
            img: '/img/answer.jpg',
            mean: 'strateji'
        },
        {
            rank: 824,
            targetWord: "",
            englishWord: "street",
            img: '/img/answer.jpg',
            mean: 'sokak, cadde'
        },
        {
            rank: 825,
            targetWord: "",
            englishWord: "strong",
            img: '/img/answer.jpg',
            mean: 'güçlü'
        },
        {
            rank: 826,
            targetWord: "",
            englishWord: "structure",
            img: '/img/answer.jpg',
            mean: 'yapı'
        },
        {
            rank: 827,
            targetWord: "",
            englishWord: "student",
            img: '/img/answer.jpg',
            mean: 'öğrenci'
        },
        {
            rank: 828,
            targetWord: "",
            englishWord: "study",
            img: '/img/answer.jpg',
            mean: 'ders çalışma'
        },
        {
            rank: 829,
            targetWord: "",
            englishWord: "stuff",
            img: '/img/answer.jpg',
            mean: 'şey, madde, eşya'
        },
        {
            rank: 830,
            targetWord: "",
            englishWord: "style",
            img: '/img/answer.jpg',
            mean: 'stil'
        },
        {
            rank: 831,
            targetWord: "",
            englishWord: "subject",
            img: '/img/answer.jpg',
            mean: 'konu'
        },
        {
            rank: 832,
            targetWord: "",
            englishWord: "success",
            img: '/img/answer.jpg',
            mean: 'başarı'
        },
        {
            rank: 833,
            targetWord: "",
            englishWord: "successful",
            img: '/img/answer.jpg',
            mean: 'başarılı'
        },
        {
            rank: 834,
            targetWord: "",
            englishWord: "such",
            img: '/img/answer.jpg',
            mean: 'böyle'
        },
        {
            rank: 835,
            targetWord: "",
            englishWord: "suddenly",
            img: '/img/answer.jpg',
            mean: 'aniden'
        },
        {
            rank: 836,
            targetWord: "",
            englishWord: "suffer",
            img: '/img/answer.jpg',
            mean: 'acı çekmek'
        },
        {
            rank: 837,
            targetWord: "",
            englishWord: "suggest",
            img: '/img/answer.jpg',
            mean: 'önermek'
        },
        {
            rank: 838,
            targetWord: "",
            englishWord: "summer",
            img: '/img/answer.jpg',
            mean: 'yaz'
        },
        {
            rank: 839,
            targetWord: "",
            englishWord: "support",
            img: '/img/answer.jpg',
            mean: 'destek'
        },
        {
            rank: 840,
            targetWord: "",
            englishWord: "sure",
            img: '/img/answer.jpg',
            mean: 'emin, elbette'
        },
        {
            rank: 841,
            targetWord: "",
            englishWord: "surface",
            img: '/img/answer.jpg',
            mean: 'yüzey'
        },
        {
            rank: 842,
            targetWord: "",
            englishWord: "system",
            img: '/img/answer.jpg',
            mean: 'sistem'
        },
        {
            rank: 843,
            targetWord: "",
            englishWord: "table",
            img: '/img/answer.jpg',
            mean: 'tablo'
        },
        {
            rank: 844,
            targetWord: "",
            englishWord: "take",
            img: '/img/answer.jpg',
            mean: 'almak'
        },
        {
            rank: 845,
            targetWord: "",
            englishWord: "talk",
            img: '/img/answer.jpg',
            mean: 'konuşmak'
        },
        {
            rank: 846,
            targetWord: "",
            englishWord: "task",
            img: '/img/answer.jpg',
            mean: 'görev'
        },
        {
            rank: 847,
            targetWord: "",
            englishWord: "tax",
            img: '/img/answer.jpg',
            mean: 'vergi'
        },
        {
            rank: 848,
            targetWord: "",
            englishWord: "teach",
            img: '/img/answer.jpg',
            mean: 'öğretmek'
        },
        {
            rank: 849,
            targetWord: "",
            englishWord: "teacher",
            img: '/img/answer.jpg',
            mean: 'öğretmen'
        },
        {
            rank: 850,
            targetWord: "",
            englishWord: "team",
            img: '/img/answer.jpg',
            mean: 'takım'
        },
        {
            rank: 851,
            targetWord: "",
            englishWord: "technology",
            img: '/img/answer.jpg',
            mean: 'teknoloji'
        },
        {
            rank: 852,
            targetWord: "",
            englishWord: "television",
            img: '/img/answer.jpg',
            mean: 'televizyon'
        },
        {
            rank: 853,
            targetWord: "",
            englishWord: "tell",
            img: '/img/answer.jpg',
            mean: 'söylemek'
        },
        {
            rank: 854,
            targetWord: "",
            englishWord: "ten",
            img: '/img/answer.jpg',
            mean: 'on'
        },
        {
            rank: 855,
            targetWord: "",
            englishWord: "tend",
            img: '/img/answer.jpg',
            mean: 'eğilmek'
        },
        {
            rank: 856,
            targetWord: "",
            englishWord: "term",
            img: '/img/answer.jpg',
            mean: 'terim'
        },
        {
            rank: 857,
            targetWord: "",
            englishWord: "test",
            img: '/img/answer.jpg',
            mean: 'test'
        },
        {
            rank: 858,
            targetWord: "",
            englishWord: "thank",
            img: '/img/answer.jpg',
            mean: 'teşekkür'
        },
        {
            rank: 859,
            targetWord: "",
            englishWord: "that",
            img: '/img/answer.jpg',
            mean: 'o'
        },
        {
            rank: 860,
            targetWord: "",
            englishWord: "their",
            img: '/img/answer.jpg',
            mean: 'onların'
        },
        {
            rank: 861,
            targetWord: "",
            englishWord: "them",
            img: '/img/answer.jpg',
            mean: 'onları'
        },
        {
            rank: 862,
            targetWord: "",
            englishWord: "themselves",
            img: '/img/answer.jpg',
            mean: 'kendilerini'
        },
        {
            rank: 863,
            targetWord: "",
            englishWord: "then",
            img: '/img/answer.jpg',
            mean: 'sonra'
        },
        {
            rank: 864,
            targetWord: "",
            englishWord: "theory",
            img: '/img/answer.jpg',
            mean: 'teori'
        },
        {
            rank: 865,
            targetWord: "",
            englishWord: "there",
            img: '/img/answer.jpg',
            mean: 'orada'
        },
        {
            rank: 866,
            targetWord: "",
            englishWord: "these",
            img: '/img/answer.jpg',
            mean: 'bunlar'
        },
        {
            rank: 867,
            targetWord: "",
            englishWord: "they",
            img: '/img/answer.jpg',
            mean: 'onlar'
        },
        {
            rank: 868,
            targetWord: "",
            englishWord: "thing",
            img: '/img/answer.jpg',
            mean: 'şey'
        },
        {
            rank: 869,
            targetWord: "",
            englishWord: "think",
            img: '/img/answer.jpg',
            mean: 'düşünmek'
        },
        {
            rank: 870,
            targetWord: "",
            englishWord: "third",
            img: '/img/answer.jpg',
            mean: 'üçüncü'
        },
        {
            rank: 871,
            targetWord: "",
            englishWord: "this",
            img: '/img/answer.jpg',
            mean: 'bu'
        },
        {
            rank: 872,
            targetWord: "",
            englishWord: "those",
            img: '/img/answer.jpg',
            mean: 'bunlar'
        },
        {
            rank: 873,
            targetWord: "",
            englishWord: "though",
            img: '/img/answer.jpg',
            mean: 'olsa da, yine de, rağmen'
        },
        {
            rank: 874,
            targetWord: "",
            englishWord: "thought",
            img: '/img/answer.jpg',
            mean: 'düşünce, fikir, düşünme'
        },
        {
            rank: 875,
            targetWord: "",
            englishWord: "thousand",
            img: '/img/answer.jpg',
            mean: 'bin'
        },
        {
            rank: 876,
            targetWord: "",
            englishWord: "threat",
            img: '/img/answer.jpg',
            mean: 'tehdit'
        },
        {
            rank: 877,
            targetWord: "",
            englishWord: "three",
            img: '/img/answer.jpg',
            mean: 'üç'
        },
        {
            rank: 878,
            targetWord: "",
            englishWord: "through",
            img: '/img/answer.jpg',
            mean: 'başından sonuna kadar, sayesinde'
        },
        {
            rank: 879,
            targetWord: "",
            englishWord: "throughout",
            img: '/img/answer.jpg',
            mean: 'boyunca'
        },
        {
            rank: 880,
            targetWord: "",
            englishWord: "throw",
            img: '/img/answer.jpg',
            mean: 'atmak'
        },
        {
            rank: 881,
            targetWord: "",
            englishWord: "thus",
            img: '/img/answer.jpg',
            mean: 'böylece'
        },
        {
            rank: 882,
            targetWord: "",
            englishWord: "time",
            img: '/img/answer.jpg',
            mean: 'zaman'
        },
        {
            rank: 883,
            targetWord: "",
            englishWord: "to",
            img: '/img/answer.jpg',
            mean: 'için'
        },
        {
            rank: 884,
            targetWord: "",
            englishWord: "today",
            img: '/img/answer.jpg',
            mean: 'bugün'
        },
        {
            rank: 885,
            targetWord: "",
            englishWord: "together",
            img: '/img/answer.jpg',
            mean: 'birlikte'
        },
        {
            rank: 886,
            targetWord: "",
            englishWord: "tonight",
            img: '/img/answer.jpg',
            mean: 'bu gece'
        },
        {
            rank: 887,
            targetWord: "",
            englishWord: "too",
            img: '/img/answer.jpg',
            mean: 'çok'
        },
        {
            rank: 888,
            targetWord: "",
            englishWord: "top",
            img: '/img/answer.jpg',
            mean: 'üst'
        },
        {
            rank: 889,
            targetWord: "",
            englishWord: "total",
            img: '/img/answer.jpg',
            mean: 'genel toplam, toplam'
        },
        {
            rank: 890,
            targetWord: "",
            englishWord: "tough",
            img: '/img/answer.jpg',
            mean: 'sert, zorlu'
        },
        {
            rank: 891,
            targetWord: "",
            englishWord: "toward",
            img: '/img/answer.jpg',
            mean: 'karşı, yönünde, doğru'
        },
        {
            rank: 892,
            targetWord: "",
            englishWord: "town",
            img: '/img/answer.jpg',
            mean: 'kasaba'
        },
        {
            rank: 893,
            targetWord: "",
            englishWord: "trade",
            img: '/img/answer.jpg',
            mean: 'ticaret'
        },
        {
            rank: 894,
            targetWord: "",
            englishWord: "traditional",
            img: '/img/answer.jpg',
            mean: 'geleneksel'
        },
        {
            rank: 895,
            targetWord: "",
            englishWord: "training",
            img: '/img/answer.jpg',
            mean: 'eğitim, antrenman'
        },
        {
            rank: 896,
            targetWord: "",
            englishWord: "travel",
            img: '/img/answer.jpg',
            mean: 'seyahat'
        },
        {
            rank: 897,
            targetWord: "",
            englishWord: "treat",
            img: '/img/answer.jpg',
            mean: 'tedavi etmek'
        },
        {
            rank: 898,
            targetWord: "",
            englishWord: "treatment",
            img: '/img/answer.jpg',
            mean: 'tedavi'
        },
        {
            rank: 899,
            targetWord: "",
            englishWord: "tree",
            img: '/img/answer.jpg',
            mean: 'ağaç'
        },
        {
            rank: 900,
            targetWord: "",
            englishWord: "trial",
            img: '/img/answer.jpg',
            mean: 'deneme'
        },
        {
            rank: 901,
            targetWord: "",
            englishWord: "trip",
            img: '/img/answer.jpg',
            mean: 'yolculuk'
        },
        {
            rank: 902,
            targetWord: "",
            englishWord: "trouble",
            img: '/img/answer.jpg',
            mean: 'sorun'
        },
        {
            rank: 903,
            targetWord: "",
            englishWord: "true",
            img: '/img/answer.jpg',
            mean: 'doğru'
        },
        {
            rank: 904,
            targetWord: "",
            englishWord: "truth",
            img: '/img/answer.jpg',
            mean: 'hakikat'
        },
        {
            rank: 905,
            targetWord: "",
            englishWord: "try",
            img: '/img/answer.jpg',
            mean: 'denemek'
        },
        {
            rank: 906,
            targetWord: "",
            englishWord: "turn",
            img: '/img/answer.jpg',
            mean: 'çevirmek'
        },
        {
            rank: 907,
            targetWord: "",
            englishWord: "TV",
            img: '/img/answer.jpg',
            mean: 'televizyon'
        },
        {
            rank: 908,
            targetWord: "",
            englishWord: "two",
            img: '/img/answer.jpg',
            mean: 'iki'
        },
        {
            rank: 909,
            targetWord: "",
            englishWord: "type",
            img: '/img/answer.jpg',
            mean: 'tip, tür'
        },
        {
            rank: 910,
            targetWord: "",
            englishWord: "under",
            img: '/img/answer.jpg',
            mean: 'altında'
        },
        {
            rank: 911,
            targetWord: "",
            englishWord: "understand",
            img: '/img/answer.jpg',
            mean: 'anlamak'
        },
        {
            rank: 912,
            targetWord: "",
            englishWord: "unit",
            img: '/img/answer.jpg',
            mean: 'ünite'
        },
        {
            rank: 913,
            targetWord: "",
            englishWord: "until",
            img: '/img/answer.jpg',
            mean: 'a kadar'
        },
        {
            rank: 914,
            targetWord: "",
            englishWord: "up",
            img: '/img/answer.jpg',
            mean: 'yukarı'
        },
        {
            rank: 915,
            targetWord: "",
            englishWord: "upon",
            img: '/img/answer.jpg',
            mean: 'üzerinde'
        },
        {
            rank: 916,
            targetWord: "",
            englishWord: "us",
            img: '/img/answer.jpg',
            mean: 'bize, biz, bizi'
        },
        {
            rank: 917,
            targetWord: "",
            englishWord: "use",
            img: '/img/answer.jpg',
            mean: 'kullanmak'
        },
        {
            rank: 918,
            targetWord: "",
            englishWord: "usually",
            img: '/img/answer.jpg',
            mean: 'genellikle'
        },
        {
            rank: 919,
            targetWord: "",
            englishWord: "value",
            img: '/img/answer.jpg',
            mean: 'değer'
        },
        {
            rank: 920,
            targetWord: "",
            englishWord: "various",
            img: '/img/answer.jpg',
            mean: 'çeşitli'
        },
        {
            rank: 921,
            targetWord: "",
            englishWord: "very",
            img: '/img/answer.jpg',
            mean: 'çok'
        },
        {
            rank: 922,
            targetWord: "",
            englishWord: "victim",
            img: '/img/answer.jpg',
            mean: 'kurban'
        },
        {
            rank: 923,
            targetWord: "",
            englishWord: "view",
            img: '/img/answer.jpg',
            mean: 'görünüm, görüş, görmek'
        },
        {
            rank: 924,
            targetWord: "",
            englishWord: "violence",
            img: '/img/answer.jpg',
            mean: 'şiddet'
        },
        {
            rank: 925,
            targetWord: "",
            englishWord: "visit",
            img: '/img/answer.jpg',
            mean: 'ziyaret etmek, ziyaret'
        },
        {
            rank: 926,
            targetWord: "",
            englishWord: "voice",
            img: '/img/answer.jpg',
            mean: 'ses'
        },
        {
            rank: 927,
            targetWord: "",
            englishWord: "vote",
            img: '/img/answer.jpg',
            mean: 'oy'
        },
        {
            rank: 928,
            targetWord: "",
            englishWord: "wait",
            img: '/img/answer.jpg',
            mean: 'beklemek'
        },
        {
            rank: 929,
            targetWord: "",
            englishWord: "walk",
            img: '/img/answer.jpg',
            mean: 'yürümek'
        },
        {
            rank: 930,
            targetWord: "",
            englishWord: "wall",
            img: '/img/answer.jpg',
            mean: 'duvar'
        },
        {
            rank: 931,
            targetWord: "",
            englishWord: "want",
            img: '/img/answer.jpg',
            mean: 'istemek'
        },
        {
            rank: 932,
            targetWord: "",
            englishWord: "war",
            img: '/img/answer.jpg',
            mean: 'savaş'
        },
        {
            rank: 933,
            targetWord: "",
            englishWord: "watch",
            img: '/img/answer.jpg',
            mean: 'izlemek'
        },
        {
            rank: 934,
            targetWord: "",
            englishWord: "water",
            img: '/img/answer.jpg',
            mean: 'su'
        },
        {
            rank: 935,
            targetWord: "",
            englishWord: "way",
            img: '/img/answer.jpg',
            mean: 'yol'
        },
        {
            rank: 936,
            targetWord: "",
            englishWord: "we",
            img: '/img/answer.jpg',
            mean: 'biz'
        },
        {
            rank: 937,
            targetWord: "",
            englishWord: "weapon",
            img: '/img/answer.jpg',
            mean: 'silah'
        },
        {
            rank: 938,
            targetWord: "",
            englishWord: "wear",
            img: '/img/answer.jpg',
            mean: 'giyinmek, giymek, aşınma, yıpranma'
        },
        {
            rank: 939,
            targetWord: "",
            englishWord: "week",
            img: '/img/answer.jpg',
            mean: 'hafta'
        },
        {
            rank: 940,
            targetWord: "",
            englishWord: "weight",
            img: '/img/answer.jpg',
            mean: 'ağırlık'
        },
        {
            rank: 941,
            targetWord: "",
            englishWord: "well",
            img: '/img/answer.jpg',
            mean: 'iyi'
        },
        {
            rank: 942,
            targetWord: "",
            englishWord: "west",
            img: '/img/answer.jpg',
            mean: 'batısında'
        },
        {
            rank: 943,
            targetWord: "",
            englishWord: "western",
            img: '/img/answer.jpg',
            mean: 'batıda, batılı, batıya ait'
        },
        {
            rank: 944,
            targetWord: "",
            englishWord: "what",
            img: '/img/answer.jpg',
            mean: 'ne'
        },
        {
            rank: 945,
            targetWord: "",
            englishWord: "whatever",
            img: '/img/answer.jpg',
            mean: 'her neyse'
        },
        {
            rank: 946,
            targetWord: "",
            englishWord: "when",
            img: '/img/answer.jpg',
            mean: 'ne zaman'
        },
        {
            rank: 947,
            targetWord: "",
            englishWord: "where",
            img: '/img/answer.jpg',
            mean: 'nerede'
        },
        {
            rank: 948,
            targetWord: "",
            englishWord: "which",
            img: '/img/answer.jpg',
            mean: 'hangi'
        },
        {
            rank: 949,
            targetWord: "",
            englishWord: "while",
            img: '/img/answer.jpg',
            mean: 'iken'
        },
        {
            rank: 950,
            targetWord: "",
            englishWord: "white",
            img: '/img/answer.jpg',
            mean: 'beyaz'
        },
        {
            rank: 951,
            targetWord: "",
            englishWord: "who",
            img: '/img/answer.jpg',
            mean: 'kim'
        },
        {
            rank: 952,
            targetWord: "",
            englishWord: "whom",
            img: '/img/answer.jpg',
            mean: 'kime'
        },
        {
            rank: 953,
            targetWord: "",
            englishWord: "whose",
            img: '/img/answer.jpg',
            mean: 'kimin'
        },
        {
            rank: 954,
            targetWord: "",
            englishWord: "why",
            img: '/img/answer.jpg',
            mean: 'neden'
        },
        {
            rank: 955,
            targetWord: "",
            englishWord: "wide",
            img: '/img/answer.jpg',
            mean: 'geniş'
        },
        {
            rank: 956,
            targetWord: "",
            englishWord: "wife",
            img: '/img/answer.jpg',
            mean: 'kadın, eş'
        },
        {
            rank: 957,
            targetWord: "",
            englishWord: "win",
            img: '/img/answer.jpg',
            mean: 'kazanmak'
        },
        {
            rank: 958,
            targetWord: "",
            englishWord: "wind",
            img: '/img/answer.jpg',
            mean: 'rüzgar'
        },
        {
            rank: 959,
            targetWord: "",
            englishWord: "window",
            img: '/img/answer.jpg',
            mean: 'pencere'
        },
        {
            rank: 960,
            targetWord: "",
            englishWord: "wish",
            img: '/img/answer.jpg',
            mean: 'dilek'
        },
        {
            rank: 961,
            targetWord: "",
            englishWord: "with",
            img: '/img/answer.jpg',
            mean: 'ile'
        },
        {
            rank: 962,
            targetWord: "",
            englishWord: "within",
            img: '/img/answer.jpg',
            mean: 'içinde'
        },
        {
            rank: 963,
            targetWord: "",
            englishWord: "without",
            img: '/img/answer.jpg',
            mean: 'olmadan'
        },
        {
            rank: 964,
            targetWord: "",
            englishWord: "woman",
            img: '/img/answer.jpg',
            mean: 'kadın'
        },
        {
            rank: 965,
            targetWord: "",
            englishWord: "wonder",
            img: '/img/answer.jpg',
            mean: 'merak etmek'
        },
        {
            rank: 966,
            targetWord: "",
            englishWord: "word",
            img: '/img/answer.jpg',
            mean: 'kelime'
        },
        {
            rank: 967,
            targetWord: "",
            englishWord: "work",
            img: '/img/answer.jpg',
            mean: 'iş'
        },
        {
            rank: 968,
            targetWord: "",
            englishWord: "worker",
            img: '/img/answer.jpg',
            mean: 'işçi'
        },
        {
            rank: 969,
            targetWord: "",
            englishWord: "world",
            img: '/img/answer.jpg',
            mean: 'dünya'
        },
        {
            rank: 970,
            targetWord: "",
            englishWord: "worry",
            img: '/img/answer.jpg',
            mean: 'endişelenmek, endişe'
        },
        {
            rank: 971,
            targetWord: "",
            englishWord: "would",
            img: '/img/answer.jpg',
            mean: 'istemek, -cekti, -caktı, olur mu'
        },
        {
            rank: 972,
            targetWord: "",
            englishWord: "write",
            img: '/img/answer.jpg',
            mean: 'yazmak'
        },
        {
            rank: 973,
            targetWord: "",
            englishWord: "writer",
            img: '/img/answer.jpg',
            mean: 'yazar'
        },
        {
            rank: 974,
            targetWord: "",
            englishWord: "wrong",
            img: '/img/answer.jpg',
            mean: 'yanlış'
        },
        {
            rank: 975,
            targetWord: "",
            englishWord: "yard",
            img: '/img/answer.jpg',
            mean: 'avlu, bahçe'
        },
        {
            rank: 976,
            targetWord: "",
            englishWord: "yeah",
            img: '/img/answer.jpg',
            mean: 'evet'
        },
        {
            rank: 977,
            targetWord: "",
            englishWord: "year",
            img: '/img/answer.jpg',
            mean: 'yıl'
        },
        {
            rank: 978,
            targetWord: "",
            englishWord: "yes",
            img: '/img/answer.jpg',
            mean: 'evet'
        },
        {
            rank: 979,
            targetWord: "",
            englishWord: "yet",
            img: '/img/answer.jpg',
            mean: 'henüz'
        },
        {
            rank: 980,
            targetWord: "",
            englishWord: "you",
            img: '/img/answer.jpg',
            mean: 'sen'
        },
        {
            rank: 981,
            targetWord: "",
            englishWord: "young",
            img: '/img/answer.jpg',
            mean: 'genç'
        },
        {
            rank: 982,
            targetWord: "",
            englishWord: "your",
            img: '/img/answer.jpg',
            mean: 'senin'
        },
        {
            rank: 983,
            targetWord: "",
            englishWord: "yourself",
            img: '/img/answer.jpg',
            mean: 'kendin'
        },
        {
            rank: 984,
            targetWord: "",
            englishWord: "shine",
            img: '/img/answer.jpg',
            mean: 'parlamak, parlaklık'
        },
        {
            rank: 985,
            targetWord: "",
            englishWord: "post",
            img: '/img/answer.jpg',
            mean: 'postalamak, posta'
        },
        {
            rank: 986,
            targetWord: "",
            englishWord: "column",
            img: '/img/answer.jpg',
            mean: 'kolon , sütun'
        },
        {
            rank: 987,
            targetWord: "",
            englishWord: "molecule",
            img: '/img/answer.jpg',
            mean: 'molekül, zerre'
        },
        {
            rank: 988,
            targetWord: "",
            englishWord: "select",
            img: '/img/answer.jpg',
            mean: 'seçme, seçmek'
        },
        {
            rank: 989,
            targetWord: "",
            englishWord: "absolutely",
            img: '/img/answer.jpg',
            mean: 'kesinlikle'
        },
        {
            rank: 990,
            targetWord: "",
            englishWord: "gray",
            img: '/img/answer.jpg',
            mean: 'gri'
        },
        {
            rank: 991,
            targetWord: "",
            englishWord: "repeat",
            img: '/img/answer.jpg',
            mean: 'tekrarlamak, tekrar'
        },
        {
            rank: 992,
            targetWord: "",
            englishWord: "yellow",
            img: '/img/answer.jpg',
            mean: 'sarı'
        },
        {
            rank: 993,
            targetWord: "",
            englishWord: "broad",
            img: '/img/answer.jpg',
            mean: 'kalın, geniş'
        },
        {
            rank: 994,
            targetWord: "",
            englishWord: "zoom",
            img: '/img/answer.jpg',
            mean: 'yakınlaştır'
        },
        {
            rank: 995,
            targetWord: "",
            englishWord: "salt",
            img: '/img/answer.jpg',
            mean: 'tuz'
        },
        {
            rank: 996,
            targetWord: "",
            englishWord: "nose",
            img: '/img/answer.jpg',
            mean: 'burun'
        },
        {
            rank: 997,
            targetWord: "",
            englishWord: "plural",
            img: '/img/answer.jpg',
            mean: 'çoğul'
        },
        {
            rank: 998,
            targetWord: "",
            englishWord: "anger",
            img: '/img/answer.jpg',
            mean: 'kızgınlık, kızgın, öfke'
        },
        {
            rank: 999,
            targetWord: "",
            englishWord: "zoo",
            img: '/img/answer.jpg',
            mean: 'hayvanat bahçesi'
        },
        {
            rank: 1000,
            targetWord: "",
            englishWord: "continent",
            img: '/img/answer.jpg',
            mean: 'kıta, anakara'
        }
    ]

    const [cevaplar, setCevaplar] = useState(
        wordsThousand.map((item) => ({ rank: item.rank, cevap: "" }))
    );

    function handleClick(rank) {
        const flippedCardsCount = Object.values(flippedCards).filter(Boolean).length;
        if (flippedCardsCount === 1 && !flippedCards[rank]) {
            const flippedCardRank = Object.keys(flippedCards).find(
                (key) => flippedCards[key]
            );
            setFlippedCards((prevFlippedCards) => ({
                ...prevFlippedCards,
                [flippedCardRank]: false,
                [rank]: true,
            }));
        } else {
            setFlippedCards((prevFlippedCards) => ({
                ...prevFlippedCards,
                [rank]: !prevFlippedCards[rank],
            }));
        }
        const cevap = cevaplar.find((cevap) => cevap.rank === rank).cevap.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").trim().toLocaleLowerCase(); // cevabı küçük harfe çeviriyoruz, türkçe karakter uyumunu sağlıyoruz, büyük 'I' harfini küçük 'i' harfine çeviriyoruz ve boşlukları alıyoruz
        const word = wordsThousand.find((word) => word.rank === rank);
        const dogruCevaplar = word.mean.split(", ").map((cevap) => cevap.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i").trim().toLocaleLowerCase()); // doğru cevapları küçük harfe çeviriyoruz, türkçe karakter uyumunu sağlıyoruz, büyük 'I' harfini küçük 'i' harfine çeviriyoruz ve boşlukları alıyoruz

        if (dogruCevaplar.includes(cevap)) {
            // doğru cevap
            console.log("Doğru cevap!");
            setCevaplar((prevCevaplar) =>
                prevCevaplar.map((cevap) =>
                    cevap.rank === rank ? { ...cevap, correct: true } : cevap
                )
            );
        } else {
            // yanlış cevap
            console.log("Yanlış cevap!");
            setCevaplar((prevCevaplar) =>
                prevCevaplar.map((cevap) =>
                    cevap.rank === rank ? { ...cevap, correct: false } : cevap
                )
            );
        }
    }







    function capitalizeFirstLetter(str) {
        const firstLetter = str.charAt(0);
        const capitalizedFirstLetter = firstLetter.toLocaleUpperCase('tr-TR');
        return capitalizedFirstLetter + str.slice(1);
    }
    function handleGetWords() {
        if (numWords > 0) {
            setShowCards(true); // kartları göster

        } else {
            setShowCards(false); // kartları gösterme
        }
    }
    let startIndex = 0;
    if (numWords > 0 && numWords <= 100) {
        startIndex = 0;
    } else if (numWords > 100 && numWords <= 200) {
        startIndex = 100;
    } else if (numWords > 200 && numWords <= 300) {
        startIndex = 200;
    } else if (numWords > 300 && numWords <= 400) {
        startIndex = 300;
    } else if (numWords > 400 && numWords <= 500) {
        startIndex = 400;
    } else if (numWords > 500 && numWords <= 600) {
        startIndex = 500;
    } else if (numWords > 600 && numWords <= 700) {
        startIndex = 600;
    } else if (numWords > 700 && numWords <= 800) {
        startIndex = 700;
    } else if (numWords > 800 && numWords <= 900) {
        startIndex = 800;
    } else if (numWords > 900 && numWords <= 1000) {
        startIndex = 900;
    }
    const wordsToShow = wordsThousand.slice(startIndex, numWords);




    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // varsayılan form davranışını engelle
            handleGetWords(); // özel işlemi gerçekleştir
        }
    }



    const handleInputChange = (e, rank) => {
        setCevaplar((prevCevaplar) =>
            prevCevaplar.map((cevap) =>
                cevap.rank === rank ? { ...cevap, cevap: e.target.value } : cevap
            )
        );
    };



    const handleKeyDown = (event, rank) => {
        if (event.key === 'Enter') {
            handleClick(rank);
        }
    };

    const handleCevap = (rank, userCevap) => {
        const cevap = cevaplar.find((cevap) => cevap.rank === rank).cevap.toLowerCase();
        const word = wordsThousand.find((word) => word.rank === rank);
        const dogruCevaplar = word.mean.split(", ");

        if (dogruCevaplar.map((cevap) => cevap.toLowerCase()).includes(userCevap.toLowerCase())) {
            // doğru cevap
            setCevaplar((prevCevaplar) =>
                prevCevaplar.map((cevap) =>
                    cevap.rank === rank ? { ...cevap, correct: true } : cevap
                )
            );
        } else {
            // yanlış cevap
            setCevaplar((prevCevaplar) =>
                prevCevaplar.map((cevap) =>
                    cevap.rank === rank ? { ...cevap, correct: false } : cevap
                )
            );
        }
    };




















    return (
        <div className='zoom container'>


            <div className="container">

                <h1 style={{ color: '#fff' }} className='text-center mt-3'>En Çok Kullanılan <span style={{ color: '#F45050' }}>1000</span> Kelime</h1>
                <Link style={{ textDecoration: 'none' }} className='d-flex justify-content-center m-3' to='/'> <button style={{ textTransform: 'none', letterSpacing: '0px', }} className='btn btn-secondary btn-sm'>Anasayfa</button></Link>




                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12 ">
                        <div className="input-group mb-3 ">
                            <input type="number" className="form-control" placeholder='Kelime sayısı?' aria-label="Recipient's username" id="numWordsInput" value={numWords === 'Kelime sayısı?' ? '' : numWords} onChange={(e) => {
                                setNumWords(parseInt(e.target.value) || 'Kelime sayısı?');
                                setShowCards(false); // kartları gösterme
                            }} onKeyDown={handleKeyPress} />
                            <button className='btn btn-outline-light' style={{ width: '50px', textTransform: 'none', letterSpacing: '0px', padding: '0' }} type="button" onClick={handleGetWords}>Getir</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='d-flex justify-content-center' style={{ color: 'gray',fontSize:'12px' }}><small>Kartların breakpoint noktaları 100 ve katlarıdır.</small></p>
            {showCards && (
                <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {wordsToShow.map((word, index) => {
                        const cevap = cevaplar.find((cevap) => cevap.rank === word.rank);
                        const isCorrect = cevap && cevap.correct;
                        const isFlipped = flippedCards[word.rank];



                        return (
                            <div key={index} className="card-wrapper" style={{ width: '225px', height: '325px', margin: '40px' }}>
                                <div className={`card ${isFlipped ? 'card-flipped' : ''}`} onClick={() => handleClick(word.rank)}>

                                    <div className="card-front">
                                        <div style={{ position: 'relative' }}>
                                            
                                            <img src='img/markquestion.jpg' className='img-fluid' alt="Resim" />
                                            <span style={{ position: 'absolute', top: '5%', left: '10%', transform: 'translate(-50%, -50%)', fontSize: '20px', color: '#F45050', fontWeight: 'bold' }}>{word.rank}</span>


                                            <span style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', color: 'white' }}>
                                                {capitalizeFirstLetter(word.englishWord)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <img src={word.img} className='img-fluid' alt="Resim" />
                                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', color: '#333' }}>
                                            <div className='text-center'>
                                                {isCorrect ? <CiFaceSmile style={{ color: 'green', fontSize: '3rem' }} /> : <CiFaceFrown style={{ color: 'red', fontSize: '3rem' }} />}
                                            </div>
                                            <q>{capitalizeFirstLetter(word.mean)}</q>
                                        </span>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <input
                                        className='mt-1 form-control'
                                        value={cevap ? cevap.cevap : ''}
                                        style={{ width: '100px', marginLeft: '29px', height: '30px', marginRight: '5px' }}
                                        onChange={(e) => handleInputChange(e, word.rank)}
                                        onKeyDown={(e) => handleKeyDown(e, word.rank)}
                                    />
                                    <button style={{ width: '50px', textTransform: 'none', letterSpacing: '0px', padding: '0' }} onClick={() => handleClick(word.rank)} className='btn btn-primary mt-1 btn-sm'>
                                        Cevap
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            {wordsToShow.length >= 20 ? <div className='d-flex justify-content-center mb-3'>
                <Link to='/kelime'><button onClick={() => window.scrollTo(0, 0)} style={{ width: '50px', textTransform: 'none', letterSpacing: '0px', padding: '0' }} className='btn btn-secondary '>Yukarı</button></Link>
            </div>:''}



        </div>
    );
}
export default MostUsedWords








