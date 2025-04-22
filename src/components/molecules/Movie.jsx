import MovieList from '/src/components/atoms/MovieList';

import dontLook from '/src/assets/dontlook.png';
import allOfUs from '/src/assets/allofus.png';
import blueLock from '/src/assets/bluelock.png';
import otto from '/src/assets/otto.png';

import top1 from '/src/assets/top1.png';
import top2 from '/src/assets/top2.png';
import top3 from '/src/assets/top3.png';
import top4 from '/src/assets/top4.png';
import top5 from '/src/assets/top5.png';

import trend1 from '/src/assets/trend1.png';
import trend2 from '/src/assets/trend2.png';
import trend3 from '/src/assets/trend3.png';
import trend4 from '/src/assets/trend4.png';
import trend5 from '/src/assets/trend5.png';

const movies = [
  {
    src: dontLook,
    alt: "Don't Look Up",
    youtubeUrl: "https://www.youtube.com/embed/SL9aJcqrtnw",
    description: "Sebuah film satir tentang dua ilmuwan yang mencoba memperingatkan dunia tentang komet."
  },
  {
    src: allOfUs,
    alt: "All of Us Are Dead",
    youtubeUrl: "https://www.youtube.com/embed/IN5TD4VRcSM",
    description: "Sekelompok siswa SMA harus bertahan hidup saat sekolah mereka diserang wabah zombie."
  },
  {
    src: blueLock,
    alt: "Blue Lock",
    youtubeUrl: "https://www.youtube.com/embed/Auw1Qy5k5nM",
    description: "Anime kompetisi sepak bola yang intens demi menemukan striker terbaik Jepang."
  },
  {
    src: otto,
    alt: "A Man Called Otto",
    youtubeUrl: "https://www.youtube.com/embed/eFYUX9l-m5I?si=JbHga0wPHDXPGwsf",
    description: "Seorang pria pemarah menemukan kembali arti hidup berkat tetangganya yang ceria."
  },
  {
    src: dontLook,
    alt: "Don't Look Up",
    youtubeUrl: "https://www.youtube.com/embed/SL9aJcqrtnw",
    description: "Sebuah film satir tentang dua ilmuwan yang mencoba memperingatkan dunia tentang komet."
  },
  {
    src: allOfUs,
    alt: "All of Us Are Dead",
    youtubeUrl: "https://www.youtube.com/embed/IN5TD4VRcSM",
    description: "Sekelompok siswa SMA harus bertahan hidup saat sekolah mereka diserang wabah zombie."
  },
  {
    src: blueLock,
    alt: "Blue Lock",
    youtubeUrl: "https://www.youtube.com/embed/Auw1Qy5k5nM",
    description: "Anime kompetisi sepak bola yang intens demi menemukan striker terbaik Jepang."
  }
];

const topMovies = [
  {
    src: top1,
    alt: "Suzume",
    youtubeUrl: "https://www.youtube.com/embed/g0JMPkn7Wuo",
    description: "Petualangan remaja perempuan menutup portal bencana di seluruh Jepang dengan sentuhan fantasi."
  },
  {
    src: top2,
    alt: "Jurassic World Dominion",
    youtubeUrl: "https://www.youtube.com/embed/fb5ELWi-ekk",
    description: "Dinosaurus hidup berdampingan dengan manusia di dunia yang tak lagi sama."
  },
  {
    src: top3,
    alt: "Sonic The Hedgehog 2",
    youtubeUrl: "https://www.youtube.com/embed/G5kzUpWAusI",
    description: "Sonic menghadapi tantangan baru bersama Tails untuk melawan Dr. Robotnik dan Knuckles."
  },
  {
    src: top4,
    alt: "All of Us are Dead",
    youtubeUrl: "https://www.youtube.com/embed/IN5TD4VRcSM",
    description: "Zombie menyerbu sekolah, membuat para siswa harus bertahan hidup dari ancaman yang terus mengejar."
  },
  {
    src: top5,
    alt: "Big Hero 6",
    youtubeUrl: "https://www.youtube.com/embed/z3biFxZIJOQ",
    description: "Seorang anak jenius dan robot lucunya membentuk tim superhero untuk membela kota mereka."
  },
  {
    src: top2,
    alt: "Jurassic World Dominion",
    youtubeUrl: "https://www.youtube.com/embed/fb5ELWi-ekk",
    description: "Dinosaurus hidup berdampingan dengan manusia di dunia yang tak lagi sama."
  },
  {
    src: top1,
    alt: "Suzume",
    youtubeUrl: "https://www.youtube.com/embed/g0JMPkn7Wuo",
    description: "Petualangan remaja perempuan menutup portal bencana di seluruh Jepang dengan sentuhan fantasi."
  },
  {
    src: top2,
    alt: "Jurassic World Dominion",
    youtubeUrl: "https://www.youtube.com/embed/fb5ELWi-ekk",
    description: "Dinosaurus hidup berdampingan dengan manusia di dunia yang tak lagi sama."
  },
  {
    src: top3,
    alt: "Sonic The Hedgehog 2",
    youtubeUrl: "https://www.youtube.com/embed/G5kzUpWAusI",
    description: "Sonic menghadapi tantangan baru bersama Tails untuk melawan Dr. Robotnik dan Knuckles."
  }
];

const trendingMovies = [
  {
    src: trend1,
    alt: "The Tomorrow War",
    youtubeUrl: "https://www.youtube.com/embed/QPistcpGB8o",
    description: "Tentara masa depan datang untuk merekrut manusia demi berperang melawan alien."
  },
  {
    src: trend2,
    alt: "Ant-Man Wasp Quantumania",
    youtubeUrl: "https://www.youtube.com/embed/ZlNFpri-Y40",
    description: "Ant-Man dan keluarganya tersesat di dunia kuantum dan menghadapi ancaman baru dari Kang."
  },
  {
    src: trend3,
    alt: "Guardian Of The Galaxy Vol. 3",
    youtubeUrl: "https://www.youtube.com/embed/u3V5KDHRQvk",
    description: "Misi terakhir para Guardian untuk menyelamatkan salah satu anggota mereka dan masa depan galaksi."
  },
  {
    src: trend4,
    alt: "A Man Called Otto",
    youtubeUrl: "https://www.youtube.com/embed/eFYUX9l-m5I?si=JbHga0wPHDXPGwsf",
    description: "Kehidupan Otto berubah saat bertemu tetangganya yang membawa semangat baru."
  },
  {
    src: trend5,
    alt: "Little Mermaid Live Action",
    youtubeUrl: "https://www.youtube.com/embed/kpGo2_d3oYE",
    description: "Remake live-action dari kisah klasik tentang putri duyung yang ingin menjadi manusia."
  },
  {
    src: trend4,
    alt: "A Man Called Otto",
    youtubeUrl: "https://www.youtube.com/embed/eFYUX9l-m5I?si=JbHga0wPHDXPGwsf",
    description: "Kehidupan Otto berubah saat bertemu tetangganya yang membawa semangat baru."
  },
  {
    src: trend3,
    alt: "Guardian Of The Galaxy Vol. 3",
    youtubeUrl: "https://www.youtube.com/embed/u3V5KDHRQvk",
    description: "Misi terakhir para Guardian untuk menyelamatkan salah satu anggota mereka dan masa depan galaksi."
  },
  {
    src: trend2,
    alt: "Ant-Man Wasp Quantumania",
    youtubeUrl: "https://www.youtube.com/embed/ZlNFpri-Y40",
    description: "Ant-Man dan keluarganya tersesat di dunia kuantum dan menghadapi ancaman baru dari Kang."
  },
  {
    src: trend1,
    alt: "The Tomorrow War",
    youtubeUrl: "https://www.youtube.com/embed/QPistcpGB8o",
    description: "Tentara masa depan datang untuk merekrut manusia demi berperang melawan alien."
  }
];

function Movie() {
  return (
    <div>
      <MovieList 
        movies={movies} 
        topMovies={topMovies} 
        trendingMovies={trendingMovies} 
      />
    </div>
  );
}

export default Movie;
