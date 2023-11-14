import { IData } from './../@types/types';
import bachImage from './../assets/img/bach.png';
import bachMp3 from './../assets/audio/bah--ave-mariya.mp3';
import mozartImage from './../assets/img/mocart.png';
import mozartMp3 from './../assets/audio/mocart---simfoniya-40-1-chast---gp.mp3';
import bethovenImage from './../assets/img/bethoven.png';
import bethovenMp3 from './../assets/audio/bethoven.mp3';
import scarlattiImage from './../assets/img/scarlatti.png';
import scarlattiMp3 from './../assets/audio/alessandro-skarlatti-concerto-grosso-no-5-d-moll-iii---alleg.mp3';
import haydnImage from './../assets/img/haidn.png';
import haydnMp3 from './../assets/audio/y-gaydn-sonata-mi-minor-2-chast.mp3';
import vivaldiImage from './../assets/img/vivaldi.png';
import vivaldiMp3 from './../assets/audio/vival-di-vremena-goda-rington.mp3';

import chaykovskiyImage from './../assets/img/chaikovskiy.png';
import chaykovskiyMp3 from './../assets/audio/chaykovskiy-remiks-lebedinoe-ozero.mp3';
import prokofievImage from './../assets/img/prokofiev.png';
import prokofievMp3 from './../assets/audio/s-prokof-ev-utro-romeo-i-dzhul-etta.mp3';
import musorgskiyImage from './../assets/img/musorgskiy.png';
import musorgskiyMp3 from './../assets/audio/musorgskiy-balet-nevylup-ptencov.mp3';
import rahmaninovImage from './../assets/img/rahmaninov.png';
import rahmaninovMp3 from './../assets/audio/rahmaninov-2-koncert-3-chast--gp.mp3';
import rimskiyKorsakovImage from './../assets/img/rimskiy-korsakov.png';
import rimskiyKorsakovMp3 from './../assets/audio/rimskiy-korsakov-chernomor.mp3';
import schostakovichImage from './../assets/img/schostakovich.png';
import schostakovichMp3 from './../assets/audio/d-shostakovich-balet-zolotoy-vek--pol-ka.mp3';

import listImage from './../assets/img/list.png';
import listMp3 from './../assets/audio/list-vengerskaya-rapsodiya-2-2-fr.mp3';
import schubertImage from './../assets/img/schubert.png';
import schubertMp3 from './../assets/audio/f-shubert--muzykal-nyy-moment-3-fa-minor.mp3';
import schopinImage from './../assets/img/schopin.png';
import schopinMp3 from './../assets/audio/f-shopen-ballada-1-glavnaya-partiya.mp3';
import vagnerImage from './../assets/img/vagner.png';
import vagnerMp3 from './../assets/audio/vagner-svadebnyy-marsh-loengrin.mp3';
import verdiImage from './../assets/img/verdi.png';
import verdiMp3 from './../assets/audio/dzhuzeppe-verdi-aida-triumfal-nyy-marsh.mp3';
import mendelsonImage from './../assets/img/mendelson.png';
import mendelsonMp3 from './../assets/audio/mendel-son-svadebnyy-marsh.mp3';

import jacksonImage from './../assets/img/jackson.png';
import jacksonMp3 from './../assets/audio/michael-jackson-black-or-white-one.mp3';
import madonnaImage from './../assets/img/madonna.png';
import madonnaMp3 from './../assets/audio/madonna-wonderland.mp3';
import spearsImage from './../assets/img/spears.png';
import spearsMp3 from './../assets/audio/1-chast-britney-spears-do-some-thing.mp3';
import rihannaImage from './../assets/img/rihanna.png';
import rihannaMp3 from './../assets/audio/rihanna-only-girl-rington.mp3';
import aguileraImage from './../assets/img/aguilera.png';
import aguileraMp3 from './../assets/audio/christina-aguilera-hurt-na-zvonok.mp3';
import ladyGagaImage from './../assets/img/lady_gaga.png';
import ladyGagaMp3 from './../assets/audio/lady-gaga--bad-romance---otbivka.mp3';

import metallicaImage from './../assets/img/metallica.png';
import metallicaMp3 from './../assets/audio/metallica-na-zvanok-dlya-pacanof.mp3';
import greenDayImage from './../assets/img/green_day.png';
import greenDayMp3 from './../assets/audio/green-day-eye-of-the-tiger.mp3';
import scorpionsImage from './../assets/img/scorpions.png';
import scorpionsMp3 from './../assets/audio/scorpions-obsession.mp3';
import acdcImage from './../assets/img/ac_dc.png';
import acdcMp3 from './../assets/audio/ac-dc-high-way-to-hell-na-vyhod-minus.mp3';
import theDoorsImage from './../assets/img/the_doors.png';
import theDoorsMp3 from './../assets/audio/the-doors-hello-i-love-you-caribbean-nights.mp3';
import rollingStonesImage from './../assets/img/rolling_st.png';
import rollingStonesMp3 from './../assets/audio/the-rolling-stones-she-said-yeah-bleu-de-chanel.mp3';

import armstrongImage from './../assets/img/armstrong.png';
import armstrongMp3 from './../assets/audio/louis-armstrong-bibbidi-bobbidi-boo.mp3';
import whinehouseImage from './../assets/img/whinehouse.png';
import whinehouseMp3 from './../assets/audio/amy-whinehouse-make-me-feel-so-good.mp3';
import sinatraImage from './../assets/img/sinatra.png';
import sinatraMp3 from './../assets/audio/frank-sinatra-i-love-you-baby.mp3';
import hancockImage from './../assets/img/hancock.png';
import hancockMp3 from './../assets/audio/herbie-han.mp3';
import coreaImage from './../assets/img/corea.png';
import coreaMp3 from './../assets/audio/kovalenko-vitaliy-chick-corea---rumba-armando-fragment-s-kup.mp3';
import pastoriusImage from './../assets/img/pastorius.png';
import pastoriusMp3 from './../assets/audio/jaco-pastorius-kaver-kal-ciy--chiken.mp3';

export const headerListItems = [
  'Classic',
  'Russian',
  'Romantic',
  'Pop',
  'Rock',
  'Jazz',
];

export const data: IData[][] = [
  // Classic
  [
    {
      id: '1',
      game: 'Classic',
      name: 'Johann Sebastian Bach',
      mp3: bachMp3,
      attachment: 'German composer and musician',
      composition: 'Ave Maria',
      src: bachImage,
      alt: 'Composer',
      description:
        '31 March [O.S. 21 March] 1685 – 28 July 1750. The Bach family already counted several composers when Johann Sebastian was born as the last child of a city musician in Eisenach.',
    },
    {
      id: '2',
      game: 'Classic',
      name: 'Wolfgang Amadeus Mozart',
      mp3: mozartMp3,
      attachment: 'Austrian composer and virtuoso musician',
      composition: 'Symphony N40, part I',
      src: mozartImage,
      alt: 'Composer',
      description:
        '27 January 1756 – 5 December 1791. Born in Salzburg, in the Holy Roman Empire, Mozart showed prodigious ability from his earliest childhood. Already competent on keyboard and violin, he composed from the age of five and performed before European royalty.',
    },
    {
      id: '3',
      game: 'Classic',
      name: 'Ludwig van Beethoven',
      mp3: bethovenMp3,
      attachment: 'German composer, pianist and conductor',
      composition: 'Symphony N5',
      src: bethovenImage,
      alt: 'Composer',
      description:
        'baptised 17 December 1770 – 26 March 1827. His career has conventionally been divided into early, middle, and late periods. His early period, during which he forged his craft, is typically considered to have lasted until 1802.',
    },
    {
      id: '4',
      game: 'Classic',
      name: 'Domenico Scarlatti',
      mp3: scarlattiMp3,
      attachment: 'Italian composer and harpsichordist',
      composition: 'Concerto-grosso N5 Allegro',
      src: scarlattiImage,
      alt: 'Composer',
      description:
        '26 October 1685 – 23 July 1757. He is classified primarily as a Baroque composer chronologically, although his music was influential in the development of the Classical style.',
    },
    {
      id: '5',
      game: 'Classic',
      name: 'Franz Joseph Haydn',
      mp3: haydnMp3,
      attachment: 'Austrian composer',
      composition: 'Sonata mi-minor, part II',
      src: haydnImage,
      alt: 'Composer',
      description:
        '31 March[b] 1732 – 31 May 1809) was an Austrian composer of the Classical period. Haydn spent much of his career as a court musician for the wealthy Esterházy family at their Eszterháza Castle.',
    },
    {
      id: '6',
      game: 'Classic',
      name: 'Antonio Lucio Vivaldi',
      mp3: vivaldiMp3,
      attachment: 'Italian composer and virtuoso violinist',
      composition: 'Seasons Autumn',
      src: vivaldiImage,
      alt: 'Composer',
      description:
        "4 March 1678 – 28 July 1741. He consolidated the emerging concerto form into a widely accepted and followed idiom, which was paramount in the development of Johann Sebastian Bach's instrumental music.",
    },
  ],
  // Russian Classic
  [
    {
      id: '1',
      game: 'Russian classic',
      name: 'Pyotr Ilyich Tchaikovsky',
      mp3: chaykovskiyMp3,
      attachment: 'russian composer',
      composition: "Fragment from the ballet 'Swan Lake'",
      src: chaykovskiyImage,
      alt: 'Composer',
      description:
        '7 May 1840 – 6 November 1893. He wrote some of the most popular concert and theatrical music in the current classical repertoire, including the ballets Swan Lake and The Nutcracker, the 1812 Overture, his First Piano Concerto, Violin Concerto, the Romeo and Juliet Overture-Fantasy.',
    },
    {
      id: '2',
      game: 'Russian classic',
      name: 'Sergei Prokofiev',
      mp3: prokofievMp3,
      attachment: 'russian composer',
      composition: "'Morning' from 'Romeo and Juliet'",
      src: prokofievImage,
      alt: 'Composer',
      description:
        '27 April [O.S. 15 April] 1891 – 5 March 1953. Of the established forms and genres in which he worked, he created—excluding juvenilia—seven completed operas, seven symphonies, eight ballets, five piano concertos, two violin concertos, a cello concerto, a symphony-concerto for cello and orchestra, and nine completed piano sonatas.',
    },
    {
      id: '3',
      game: 'Russian classic',
      name: 'Modest Mussorgsky',
      mp3: musorgskiyMp3,
      attachment: 'russian composer',
      composition:
        "'Ballet of the Unhatched Chicks' from 'Pictures at an Exhibition'",
      src: musorgskiyImage,
      alt: 'Composer',
      description:
        '21 March 1839 – 28 March 1881. He strove to achieve a uniquely Russian musical identity, often in deliberate defiance of the established conventions of Western music.',
    },
    {
      id: '4',
      game: 'Russian classic',
      name: 'Sergei Rachmaninoff',
      mp3: rahmaninovMp3,
      attachment: 'russian composer',
      composition: 'Concert N2, part III',
      src: rahmaninovImage,
      alt: 'Composer',
      description:
        '1 April 1873 – 28 March 1943. Early influences of Tchaikovsky, Rimsky-Korsakov, and other Russian composers gave way to a thoroughly personal idiom notable for its song-like melodicism, expressiveness and rich orchestral colours.',
    },
    {
      id: '5',
      game: 'Russian classic',
      name: 'Nikolai Rimsky-Korsakov',
      mp3: rimskiyKorsakovMp3,
      attachment: 'russian composer',
      composition: "'March of Chernomor' from the opera 'Ruslan & Lyudmila'",
      src: rimskiyKorsakovImage,
      alt: 'Composer',
      description:
        '18 March 1844 – 21 June 1908. His best-known orchestral compositions—Capriccio Espagnol, the Russian Easter Festival Overture, and the symphonic suite Scheherazade—are staples of the classical music repertoire, along with suites and excerpts from some of his 15 operas.',
    },
    {
      id: '6',
      game: 'Russian classic',
      name: 'Dmitri Shostakovich',
      mp3: schostakovichMp3,
      attachment: 'soviet composer',
      composition: "'Polka' ballet 'Golden Age'",
      src: schostakovichImage,
      alt: 'Composer',
      description:
        '25 September [O.S. 12 September] 1906 – 9 August 1975. Soviet-era Russian composer and pianist[1] who became internationally known after the premiere of his First Symphony in 1926 and was regarded throughout his life as a major composer.',
    },
  ],
  // Romantic
  [
    {
      id: '1',
      game: 'Romantic',
      name: 'Franz Liszt',
      mp3: listMp3,
      attachment: 'Hungarian composer',
      composition: 'Vengerskaya rapsodiya',
      src: listImage,
      alt: 'Composer',
      description:
        '22 October 1811 – 31 July 1886. With a diverse body of work spanning more than six decades, he is considered to be one of the most prolific and influential composers of his era and remains one of the most popular composers in modern concert piano repertoire.',
    },
    {
      id: '2',
      game: 'Romantic',
      name: 'Franz Schubert',
      mp3: schubertMp3,
      attachment: 'Austrian composer',
      composition: "'Music moment' fa-minor",
      src: schubertImage,
      alt: 'Composer',
      description:
        '31 January 1797 – 19 November 1828. Despite his short lifetime, Schubert left behind a vast oeuvre, including more than 600 secular vocal works (mainly lieder), seven complete symphonies, sacred music, operas, incidental music, and a large body of piano and chamber music',
    },
    {
      id: '3',
      game: 'Romantic',
      name: 'Frédéric Chopin',
      mp3: schopinMp3,
      attachment: 'Polish composer',
      composition: 'Ballada, main part',
      src: schopinImage,
      alt: 'Composer',
      description:
        "1 March 1810 – 17 October 1849. He has maintained worldwide renown as a leading musician of his era, one whose 'poetic genius was based on a professional technique that was without equal in his generation'.",
    },
    {
      id: '4',
      game: 'Romantic',
      name: 'Richard Wagner',
      mp3: vagnerMp3,
      attachment: 'German composer',
      composition: "'Wedding marsch' 'Loengrin",
      src: vagnerImage,
      alt: 'Composer',
      description:
        '22 May 1813 – 13 February 1883. Unlike most opera composers, Wagner wrote both the libretto and the music for each of his stage works.',
    },
    {
      id: '5',
      game: 'Romantic',
      name: 'Giuseppe Verdi',
      mp3: verdiMp3,
      attachment: 'Italian composer',
      composition: "'Triumph marsh'",
      src: verdiImage,
      alt: 'Composer',
      description:
        '9 or 10 October 1813 – 27 January 1901. Verdi came to dominate the Italian opera scene after the era of Gioachino Rossini, Gaetano Donizetti, and Vincenzo Bellini, whose works significantly influenced him.',
    },
    {
      id: '6',
      game: 'Romantic',
      name: 'Felix Mendelssohn',
      mp3: mendelsonMp3,
      attachment: 'German composer',
      composition: "'Wedding marsh'",
      src: mendelsonImage,
      alt: 'Composer',
      description:
        "3 February 1809 – 4 November 1847. Mendelssohn's compositions include symphonies, concertos, piano music, organ music and chamber music.",
    },
  ],
  // Pop
  [
    {
      id: '1',
      game: 'Pop',
      name: 'Michael Jackson',
      mp3: jacksonMp3,
      attachment: 'American singer, songwriter, dancer, and philanthropist',
      composition: "'Black or White'",
      src: jacksonImage,
      alt: 'Composer',
      description:
        'August 29, 1958 – June 25, 2009. Over a four-decade career, his contributions to music, dance, and fashion, along with his publicized personal life, made him a global figure in popular culture.',
    },
    {
      id: '2',
      game: 'Pop',
      name: 'Madonna',
      mp3: madonnaMp3,
      attachment: 'American singer, songwriter, and actress',
      composition: "'Wonderland'",
      src: madonnaImage,
      alt: 'Composer',
      description:
        'Was born August 16, 1958. She has pushed the boundaries of artistic expression in mainstream music, while maintaining control over every aspect of her career.',
    },
    {
      id: '3',
      game: 'Pop',
      name: 'Britney Spears',
      mp3: spearsMp3,
      attachment: 'American singer, songwriter, and dancer',
      composition: "'Do something'",
      src: spearsImage,
      alt: 'Composer',
      description:
        'Was born December 2, 1981. Spears adopted a more mature and provocative style for her albums Britney (2001) and In the Zone (2003), and starred in the 2002 film Crossroads.',
    },
    {
      id: '4',
      game: 'Pop',
      name: 'Rihanna',
      mp3: rihannaMp3,
      attachment: 'Barbadian singer, actress, and businesswoman',
      composition: "'Only girl'",
      src: rihannaImage,
      alt: 'Composer',
      description:
        'Was born February 20, 1988. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna auditioned for American record producer Evan Rogers who invited her to the United States to record demo tapes.',
    },
    {
      id: '5',
      game: 'Pop',
      name: 'Christina Aguilera',
      mp3: aguileraMp3,
      attachment: 'русский композитор',
      composition: "'Hurt'",
      src: aguileraImage,
      alt: 'Composer',
      description:
        'Was born December 18, 1980. Her works, which incorporate feminism, sexuality, and domestic violence, have generated both critical praise and controversy, for which she is often cited as an influence by other artists.',
    },
    {
      id: '6',
      game: 'Pop',
      name: 'Lady Gaga',
      mp3: ladyGagaMp3,
      attachment: 'советский композитор',
      composition: "'Bad romance'",
      src: ladyGagaImage,
      alt: 'Composer',
      description:
        'Was born March 28, 1986. After Def Jam Recordings canceled her contract, she worked as a songwriter for Sony/ATV Music Publishing, where she signed a joint deal with Interscope Records and KonLive Distribution, in 2007.',
    },
  ],
  // Rock
  [
    {
      id: '1',
      game: 'Rock',
      name: 'Metallica',
      mp3: metallicaMp3,
      attachment: 'American heavy metal band',
      composition: "'Unforgiven'",
      src: metallicaImage,
      alt: 'Composer',
      description:
        "The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding 'big four' bands of thrash metal, alongside Megadeth, Anthrax and Slayer.",
    },
    {
      id: '2',
      game: 'Rock',
      name: 'Green Day',
      mp3: greenDayMp3,
      attachment: 'American rock band',
      composition: "'Eye of the tiger'",
      src: greenDayImage,
      alt: 'Composer',
      description:
        'Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist Billie Joe Armstrong, together with bassist and backing vocalist Mike Dirnt.',
    },
    {
      id: '3',
      game: 'Rock',
      name: 'Scorpions',
      mp3: scorpionsMp3,
      attachment: 'German rock band',
      composition: "'Obsession'",
      src: scorpionsImage,
      alt: 'Composer',
      description:
        "During the mid-1970s, with guitarist Uli Jon Roth (who replaced Schenker's younger brother Michael) part of the lineup, the music of the Scorpions was defined as hard rock.",
    },
    {
      id: '4',
      game: 'Rock',
      name: 'AC/DC',
      mp3: acdcMp3,
      attachment: 'Australian rock band',
      composition: "'Highway to hell'",
      src: acdcImage,
      alt: 'Composer',
      description:
        "Evans was fired from the band in 1977 and replaced by Cliff Williams, who has appeared on every AC/DC album since 1978's Powerage.",
    },
    {
      id: '5',
      game: 'Rock',
      name: 'The Doors',
      mp3: theDoorsMp3,
      attachment: 'American rock band',
      composition: "'Hello, I love you, Caribbean nights'",
      src: theDoorsImage,
      alt: 'Composer',
      description:
        "They were among the most controversial and influential rock acts of the 1960s, partly due to Morrison's lyrics and voice, along with his erratic stage persona.",
    },
    {
      id: '6',
      game: 'Rock',
      name: 'The Rolling Stones',
      mp3: rollingStonesMp3,
      attachment: 'English rock band',
      composition: "'She said, yeah, bleu de chanel'",
      src: rollingStonesImage,
      alt: 'Composer',
      description:
        'Jagger and Richards became the primary creative force behind the band, alienating Jones, who had developed a drug addiction that interfered with his ability to contribute meaningfully.',
    },
  ],
  // Jazz
  [
    {
      id: '1',
      game: 'Jazz',
      name: 'Louis Armstrong',
      mp3: armstrongMp3,
      attachment: 'American trumpeter and vocalist',
      composition: "'Bibbidi-bobbidi-boo'",
      src: armstrongImage,
      alt: 'Composer',
      description:
        'August 4, 1901 – July 6, 1971. After years of touring, he settled in Queens, New York, and by the 1950s, he was a national musical icon, assisted in part, by his appearances on radio and in film and television, in addition to his concerts.',
    },
    {
      id: '2',
      game: 'Jazz',
      name: 'Amy Winehouse',
      mp3: whinehouseMp3,
      attachment: 'English singer and songwriter',
      composition: "'Make me feel so good'",
      src: whinehouseImage,
      alt: 'Composer',
      description:
        "14 September 1983 – 23 July 2011. A member of the National Youth Jazz Orchestra during her youth, Winehouse signed to Simon Fuller's 19 Management in 2002 and soon recorded a number of songs before signing a publishing deal with EMI.",
    },
    {
      id: '3',
      game: 'Jazz',
      name: 'Frank Sinatra',
      mp3: sinatraMp3,
      attachment: 'American singer and actor',
      composition: "'I love you, baby'",
      src: sinatraImage,
      alt: 'Composer',
      description:
        "December 12, 1915 – May 14, 1998. Nicknamed the 'Chairman of the Board' and later called Ole 'Blue Eyes, Sinatra was one of the most popular entertainers of the 1940s, 1950s, and 1960s. He is among the world's best-selling music artists with an estimated 150 million record sales.",
    },
    {
      id: '4',
      game: 'Jazz',
      name: 'Herbie Hancock',
      mp3: hancockMp3,
      attachment: 'American jazz pianist, keyboardist, and composer',
      composition: "'Rockit'",
      src: hancockImage,
      alt: 'Composer',
      description:
        'Was born April 12, 1940. Hancock has won an Academy Award and 14 Grammy Awards, including Album of the Year for his 2007 Joni Mitchell tribute album River: The Joni Letters, becoming only the second jazz album to win the award after Getz/Gilberto in 1965.',
    },
    {
      id: '5',
      game: 'Jazz',
      name: 'Chick Corea',
      mp3: coreaMp3,
      attachment: 'American jazz composer, pianist, keyboardist',
      composition: "'Rumba-armando'",
      src: coreaImage,
      alt: 'Composer',
      description:
        'June 12, 1941 – February 9, 2021. Along with McCoy Tyner, Herbie Hancock, and Keith Jarrett, Corea is considered one of the foremost jazz pianists of the post-John Coltrane era.',
    },
    {
      id: '6',
      game: 'Jazz',
      name: 'Jaco Pastorius',
      mp3: pastoriusMp3,
      attachment: 'American jazz bassist, composer and producer',
      composition: "'Chiken'",
      src: pastoriusImage,
      alt: 'Composer',
      description:
        'December 1, 1951 – September 21, 1987. As of 2017 he was the only electric bassist of seven bassists inducted into the DownBeat Jazz Hall of Fame, and he has been lauded as one of the best electric bassists of all time.',
    },
  ],
];
