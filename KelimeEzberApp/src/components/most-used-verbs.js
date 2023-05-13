import React, { useState, useEffect } from 'react';
import '../App.css';
import { BsCheckLg, BsXLg } from "react-icons/bs";
import { CiFaceSmile, CiFaceFrown } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti'
function MostUsedWords() {
    const [flippedCards, setFlippedCards] = useState({});
    const [numWords, setNumWords] = useState('Fiil sayısı?'); // kullanıcının girdiği kelime sayısı
    const [showCards, setShowCards] = useState(false); // kartların gösterilip gösterilmeyeceğini belirleyen state değişkeni




    const wordsThousand = [
        {
            rank: 1,
            targetWord: "",
            englishWord: "to be",
            img: '/img/answer.jpg',
            mean: 'olmak'
        },
        {
            rank: 2,
            targetWord: "",
            englishWord: "to have",
            img: '/img/answer.jpg',
            mean: 'sahip olmak'
        },
        {
            rank: 3,
            targetWord: "",
            englishWord: "to do",
            img: '/img/answer.jpg',
            mean: 'yapmak'
        },
        {
            rank: 4,
            targetWord: "",
            englishWord: "to say",
            img: '/img/answer.jpg',
            mean: 'söylemek'
        },
        {
            rank: 5,
            targetWord: "",
            englishWord: "to go",
            img: '/img/answer.jpg',
            mean: 'gitmek'
        },
        {
            rank: 6,
            targetWord: "",
            englishWord: "to get",
            img: '/img/answer.jpg',
            mean: 'almak, edinmek'
        },
        {
            rank: 7,
            targetWord: "",
            englishWord: "to make",
            img: '/img/answer.jpg',
            mean: 'yapmak'
        },
        {
            rank: 8,
            targetWord: "",
            englishWord: "to know",
            img: '/img/answer.jpg',
            mean: 'bilmek'
        },
        {
            rank: 9,
            targetWord: "",
            englishWord: "to think",
            img: '/img/answer.jpg',
            mean: 'düşünmek'
        },
        {
            rank: 10,
            targetWord: "",
            englishWord: "to take",
            img: '/img/answer.jpg',
            mean: 'almak'
        },
        {
            rank: 11,
            targetWord: "",
            englishWord: "to see",
            img: '/img/answer.jpg',
            mean: 'görmek'
        },
        {
            rank: 12,
            targetWord: "",
            englishWord: "to come",
            img: '/img/answer.jpg',
            mean: 'gelmek'
        },
        {
            rank: 13,
            targetWord: "",
            englishWord: "to want",
            img: '/img/answer.jpg',
            mean: 'istemek'
        },
        {
            rank: 14,
            targetWord: "",
            englishWord: "to look",
            img: '/img/answer.jpg',
            mean: 'bakmak'
        },
        {
            rank: 15,
            targetWord: "",
            englishWord: "to use",
            img: '/img/answer.jpg',
            mean: 'kullanmak'
        },
        {
            rank: 16,
            targetWord: "",
            englishWord: "to find",
            img: '/img/answer.jpg',
            mean: 'bulmak'
        },
        {
            rank: 17,
            targetWord: "",
            englishWord: "to give",
            img: '/img/answer.jpg',
            mean: 'vermek'
        },
        {
            rank: 18,
            targetWord: "",
            englishWord: "to tell",
            img: '/img/answer.jpg',
            mean: 'söylemek'
        },
        {
            rank: 19,
            targetWord: "",
            englishWord: "to work",
            img: '/img/answer.jpg',
            mean: 'çalışmak'
        },
        {
            rank: 20,
            targetWord: "",
            englishWord: "to call",
            img: '/img/answer.jpg',
            mean: 'çağırmak'
        },
        {
            rank: 21,
            targetWord: "",
            englishWord: "to try",
            img: '/img/answer.jpg',
            mean: 'denemek'
        },
        {
            rank: 22,
            targetWord: "",
            englishWord: "to ask",
            img: '/img/answer.jpg',
            mean: 'sormak'
        },
        {
            rank: 23,
            targetWord: "",
            englishWord: "to need",
            img: '/img/answer.jpg',
            mean: 'ihtiyacı olmak'
        },
        {
            rank: 24,
            targetWord: "",
            englishWord: "to feel",
            img: '/img/answer.jpg',
            mean: 'hissetmek'
        },
        {
            rank: 25,
            targetWord: "",
            englishWord: "to become",
            img: '/img/answer.jpg',
            mean: 'olmak'
        },
        {
            rank: 26,
            targetWord: "",
            englishWord: "to leave",
            img: '/img/answer.jpg',
            mean: 'ayrılmak'
        },
        {
            rank: 27,
            targetWord: "",
            englishWord: "to put",
            img: '/img/answer.jpg',
            mean: 'koymak'
        },
        {
            rank: 28,
            targetWord: "",
            englishWord: "to mean",
            img: '/img/answer.jpg',
            mean: 'anlamına gelmek'
        },
        {
            rank: 29,
            targetWord: "",
            englishWord: "to keep",
            img: '/img/answer.jpg',
            mean: 'tutmak'
        },
        {
            rank: 30,
            targetWord: "",
            englishWord: "to let",
            img: '/img/answer.jpg',
            mean: 'izin vermek'
        },
        {
            rank: 31,
            targetWord: "",
            englishWord: "to begin",
            img: '/img/answer.jpg',
            mean: 'almak, edinmek'
        },
        {
            rank: 32,
            targetWord: "",
            englishWord: "to seem",
            img: '/img/answer.jpg',
            mean: 'görünmek'
        },
        {
            rank: 33,
            targetWord: "",
            englishWord: "to help",
            img: '/img/answer.jpg',
            mean: 'yardım etmek'
        },
        {
            rank: 34,
            targetWord: "",
            englishWord: "to think",
            img: '/img/answer.jpg',
            mean: 'düşünmek'
        },
        {
            rank: 35,
            targetWord: "",
            englishWord: "to talk",
            img: '/img/answer.jpg',
            mean: 'konuşmak, sohbet etmek'
        },
        {
            rank: 36,
            targetWord: "",
            englishWord: "to turn",
            img: '/img/answer.jpg',
            mean: 'dönmek'
        },
        {
            rank: 37,
            targetWord: "",
            englishWord: "to start",
            img: '/img/answer.jpg',
            mean: 'başlamak'
        },
        {
            rank: 38,
            targetWord: "",
            englishWord: "to show",
            img: '/img/answer.jpg',
            mean: 'göstermek'
        },
        {
            rank: 39,
            targetWord: "",
            englishWord: "to hear",
            img: '/img/answer.jpg',
            mean: 'duymak'
        },
        {
            rank: 40,
            targetWord: "",
            englishWord: "to play",
            img: '/img/answer.jpg',
            mean: 'oynamak'
        },
        {
            rank: 41,
            targetWord: "",
            englishWord: "to run",
            img: '/img/answer.jpg',
            mean: 'koşmak'
        },
        {
            rank: 42,
            targetWord: "",
            englishWord: "to move",
            img: '/img/answer.jpg',
            mean: 'hareket etmek'
        },
        {
            rank: 43,
            targetWord: "",
            englishWord: "to like",
            img: '/img/answer.jpg',
            mean: 'beğenmek, sevmek'
        },
        {
            rank: 44,
            targetWord: "",
            englishWord: "to live",
            img: '/img/answer.jpg',
            mean: 'yaşamak'
        },
        {
            rank: 45,
            targetWord: "",
            englishWord: "to believe",
            img: '/img/answer.jpg',
            mean: 'inanmak'
        },
        {
            rank: 46,
            targetWord: "",
            englishWord: "to hold",
            img: '/img/answer.jpg',
            mean: 'tutmak'
        },
        {
            rank: 47,
            targetWord: "",
            englishWord: "to bring",
            img: '/img/answer.jpg',
            mean: 'getirmek'
        },
        {
            rank: 48,
            targetWord: "",
            englishWord: "to happen",
            img: '/img/answer.jpg',
            mean: 'meydana gelmek'
        },
        {
            rank: 49,
            targetWord: "",
            englishWord: "to write",
            img: '/img/answer.jpg',
            mean: 'yazmak'
        },
        {
            rank: 50,
            targetWord: "",
            englishWord: "to read",
            img: '/img/answer.jpg',
            mean: 'okumak'
        },
        {
            rank: 51,
            targetWord: "",
            englishWord: "to sit",
            img: '/img/answer.jpg',
            mean: 'oturmak'
        },
        {
            rank: 52,
            targetWord: "",
            englishWord: "to stand",
            img: '/img/answer.jpg',
            mean: 'ayakta durmak'
        },
        {
            rank: 53,
            targetWord: "",
            englishWord: "to lose",
            img: '/img/answer.jpg',
            mean: 'kaybetmek'
        },
        {
            rank: 54,
            targetWord: "",
            englishWord: "to keep",
            img: '/img/answer.jpg',
            mean: 'tutmak'
        },
        {
            rank: 55,
            targetWord: "",
            englishWord: "to pay",
            img: '/img/answer.jpg',
            mean: 'ödemek'
        },
        {
            rank: 56,
            targetWord: "",
            englishWord: "to meet",
            img: '/img/answer.jpg',
            mean: 'tanışmak, buluşmak'
        },
        {
            rank: 57,
            targetWord: "",
            englishWord: "to include",
            img: '/img/answer.jpg',
            mean: 'dahil etmek'
        },
        {
            rank: 58,
            targetWord: "",
            englishWord: "to decide",
            img: '/img/answer.jpg',
            mean: 'karar vermek'
        },
        {
            rank: 59,
            targetWord: "",
            englishWord: "to continue",
            img: '/img/answer.jpg',
            mean: 'devam etmek'
        },
        {
            rank: 60,
            targetWord: "",
            englishWord: "to set",
            img: '/img/answer.jpg',
            mean: 'ayarlamak'
        },
        {
            rank: 61,
            targetWord: "",
            englishWord: "to learn",
            img: '/img/answer.jpg',
            mean: 'öğrenmek'
        },
        {
            rank: 62,
            targetWord: "",
            englishWord: "to change",
            img: '/img/answer.jpg',
            mean: 'değişmek'
        },
        {
            rank: 63,
            targetWord: "",
            englishWord: "to lead",
            img: '/img/answer.jpg',
            mean: 'önderlik etmek'
        },
        {
            rank: 64,
            targetWord: "",
            englishWord: "to understand",
            img: '/img/answer.jpg',
            mean: 'anlamak'
        },
        {
            rank: 65,
            targetWord: "",
            englishWord: "to watch",
            img: '/img/answer.jpg',
            mean: 'izlemek'
        },
        {
            rank: 66,
            targetWord: "",
            englishWord: "to speak",
            img: '/img/answer.jpg',
            mean: 'konuşmak'
        },
        {
            rank: 67,
            targetWord: "",
            englishWord: "to follow",
            img: '/img/answer.jpg',
            mean: 'takip etmek'
        },
        {
            rank: 68,
            targetWord: "",
            englishWord: "to stop",
            img: '/img/answer.jpg',
            mean: 'durdurmak, durmak'
        },
        {
            rank: 69,
            targetWord: "",
            englishWord: "to create",
            img: '/img/answer.jpg',
            mean: 'yaratmak'
        },
        {
            rank: 70,
            targetWord: "",
            englishWord: "to allow",
            img: '/img/answer.jpg',
            mean: 'izin vermek'
        },
        {
            rank: 71,
            targetWord: "",
            englishWord: "to add",
            img: '/img/answer.jpg',
            mean: 'eklemek'
        },
        {
            rank: 72,
            targetWord: "",
            englishWord: "to spend",
            img: '/img/answer.jpg',
            mean: 'harcamak'
        },
        {
            rank: 73,
            targetWord: "",
            englishWord: "to grow",
            img: '/img/answer.jpg',
            mean: 'büyümek'
        },
        {
            rank: 74,
            targetWord: "",
            englishWord: "to open",
            img: '/img/answer.jpg',
            mean: 'açmak'
        },
        {
            rank: 75,
            targetWord: "",
            englishWord: "to walk",
            img: '/img/answer.jpg',
            mean: 'yürümek'
        },
        {
            rank: 76,
            targetWord: "",
            englishWord: "to win",
            img: '/img/answer.jpg',
            mean: 'kazanmak'
        },
        {
            rank: 77,
            targetWord: "",
            englishWord: "to offer",
            img: '/img/answer.jpg',
            mean: 'teklif etmek'
        },
        {
            rank: 78,
            targetWord: "",
            englishWord: "to remember",
            img: '/img/answer.jpg',
            mean: 'hatırlamak'
        },
        {
            rank: 79,
            targetWord: "",
            englishWord: "to love",
            img: '/img/answer.jpg',
            mean: 'aşık olmak'
        },
        {
            rank: 80,
            targetWord: "",
            englishWord: "to consider",
            img: '/img/answer.jpg',
            mean: 'dikkate almak'
        },
        {
            rank: 81,
            targetWord: "",
            englishWord: "to appear",
            img: '/img/answer.jpg',
            mean: 'görünmek'
        },
        {
            rank: 82,
            targetWord: "",
            englishWord: "to buy",
            img: '/img/answer.jpg',
            mean: 'satın almak'
        },
        {
            rank: 83,
            targetWord: "",
            englishWord: "to wait",
            img: '/img/answer.jpg',
            mean: 'beklemek'
        },
        {
            rank: 84,
            targetWord: "",
            englishWord: "to serve",
            img: '/img/answer.jpg',
            mean: 'hizmet etmek'
        },
        {
            rank: 85,
            targetWord: "",
            englishWord: "to die",
            img: '/img/answer.jpg',
            mean: 'ölmek'
        },
        {
            rank: 86,
            targetWord: "",
            englishWord: "to send",
            img: '/img/answer.jpg',
            mean: 'göndermek'
        },
        {
            rank: 87,
            targetWord: "",
            englishWord: "to expect",
            img: '/img/answer.jpg',
            mean: 'ummak'
        },
        {
            rank: 88,
            targetWord: "",
            englishWord: "to build",
            img: '/img/answer.jpg',
            mean: 'inşa etmek'
        },
        {
            rank: 89,
            targetWord: "",
            englishWord: "to stay",
            img: '/img/answer.jpg',
            mean: 'kalmak'
        },
        {
            rank: 90,
            targetWord: "",
            englishWord: "to fall",
            img: '/img/answer.jpg',
            mean: 'düşmek'
        },
        {
            rank: 91,
            targetWord: "",
            englishWord: "to cut",
            img: '/img/answer.jpg',
            mean: 'kesmek'
        },
        {
            rank: 92,
            targetWord: "",
            englishWord: "to reach",
            img: '/img/answer.jpg',
            mean: 'ulaşmak'
        },
        {
            rank: 93,
            targetWord: "",
            englishWord: "to kill",
            img: '/img/answer.jpg',
            mean: 'öldürmek'
        },
        {
            rank: 94,
            targetWord: "",
            englishWord: "to remain",
            img: '/img/answer.jpg',
            mean: 'sürdürmek'
        },
        {
            rank: 95,
            targetWord: "",
            englishWord: "to suggest",
            img: '/img/answer.jpg',
            mean: 'önermek'
        },
        {
            rank: 96,
            targetWord: "",
            englishWord: "to raise",
            img: '/img/answer.jpg',
            mean: 'kaldırmak'
        },
        {
            rank: 97,
            targetWord: "",
            englishWord: "to pass",
            img: '/img/answer.jpg',
            mean: 'geçmek'
        },
        {
            rank: 98,
            targetWord: "",
            englishWord: "to sell",
            img: '/img/answer.jpg',
            mean: 'satmak'
        },
        {
            rank: 99,
            targetWord: "",
            englishWord: "to require",
            img: '/img/answer.jpg',
            mean: 'gerekmek'
        },
        {
            rank: 100,
            targetWord: "",
            englishWord: "to report",
            img: '/img/answer.jpg',
            mean: 'bildirmek'
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
    // kullanıcının girdiği kelime sayısına göre ilk n kelimeyi alır
    const wordsToShow = wordsThousand.slice(0, numWords);
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

                <h1 style={{ color: '#fff' }} className='text-center mt-3'>En Çok Kullanılan <span style={{ color: '#F45050' }}>100</span> Fiil</h1>
                
                 <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'10px' }}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button style={{ textTransform: 'none', letterSpacing: '0px' }} className='btn btn-secondary btn-sm'>
                            Anasayfa
                        </button>
                    </Link>
                </div>





                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-sm-12 ">
                        <div className="input-group mb-3 ">
                            <input type="number" className="form-control" placeholder='Fiil sayısı?' aria-label="Recipient's username" id="numWordsInput" value={numWords === 'Fiil sayısı?' ? '' : numWords} onChange={(e) => {
                                setNumWords(parseInt(e.target.value) || 'Fiil sayısı?');
                                setShowCards(false); // kartları gösterme
                            }} onKeyDown={handleKeyPress} />
                            <button className='btn btn-outline-light' style={{ width: '50px', textTransform: 'none', letterSpacing: '0px', padding: '0' }} type="button" onClick={handleGetWords}>Getir</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='d-flex justify-content-center' style={{ color: 'gray', fontSize: '12px' }}><small>İyi çalışmalar!</small></p>
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
                                            <span style={{ position: 'absolute', top: '88%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '25px', color: 'white' }}>
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
                <Link to='/fiil'><button onClick={() => window.scrollTo(0, 0)} style={{ width: '50px', textTransform: 'none', letterSpacing: '0px', padding: '0' }} className='btn btn-secondary '>Yukarı</button></Link>
            </div>:''}


        </div>
    );
}
export default MostUsedWords








