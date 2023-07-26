import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="About" className="section about">
      <div className="about__item about-title-container">
        <h1 className="about__item__title">ABOUT ME</h1>
        <span className="special-underlining"></span>
      </div>
      <div className="about__item">
        <div className="about__item__description-container">
          <p className="about__item__description">
            <h3 className="about__item__description__subtitle">	&#60; Chi Sono /&#62;</h3>
            Sono Filippo Roccamatisi, un giovane sviluppatore di 19 anni appena
            diplomato in Sistemi Informativi Aziendali. La mia passione per la
            programmazione è nata durante il mio percorso di studi, durante il
            quale ho acquisito competenze e conoscenze significative. Durante
            gli anni di studio, ho avuto l'opportunità di approfondire le basi
            della programmazione e di acquisire una solida comprensione dei
            concetti fondamentali.
            <span className="about__item__description__special-line"></span>
            <h3 className="about__item__description__subtitle">&#60; Come Mi Sono Formato /&#62;</h3>
            Ho sperimentato diversi linguaggi di programmazione, tra cui Java, e
            C++, che mi hanno permesso di sviluppare soluzioni per problemi
            complessi e di apprendere i principi di base delle strutture dati e
            degli algoritmi. Tuttavia, la mia sete di conoscenza mi ha spinto ad
            andare oltre il programma di studio scolastico. Ho dedicato molto
            del mio tempo libero all'autoapprendimento tramite risorse online
            come Udemy e YouTube. Queste piattaforme mi hanno offerto un'ampia
            varietà di corsi e tutorial che mi hanno permesso di approfondire la
            mia conoscenza e di sviluppare le mie competenze nel campo dello
            sviluppo web. Sono un appassionato sia di front-end che di back-end
            development. La creazione di interfacce utente intuitive e
            coinvolgenti è qualcosa che mi affascina particolarmente.
            <span className="about__item__description__special-line"></span>
            <h3 className="about__item__description__subtitle">&#60; Quali sono le mie competenze /&#62;</h3>
            Ho imparato a utilizzare HTML, CSS e JavaScript per creare siti web
            dinamici e responsivi, offrendo agli utenti un'esperienza unica e
            coinvolgente. Nel corso del mio percorso di apprendimento, ho
            sviluppato anche una buona conoscenza di framework e librerie
            popolari come React.js e Node.js, che mi hanno permesso di creare
            applicazioni web sofisticate e scalabili. Sono consapevole che la
            programmazione è un campo in continua evoluzione e mi tengo
            costantemente aggiornato sulle ultime tendenze e best practice. Sono
            sempre alla ricerca di nuove sfide e opportunità per migliorare le
            mie competenze tecniche e affinare le mie abilità. Sono entusiasta
            di mettere in pratica le mie competenze acquisite durante il mio
            percorso di studi e il mio impegno nell'autoapprendimento per
            contribuire al successo dei progetti con cui collaboro.
            <span className="about__item__description__special-line"></span>
            <h3 className="about__item__description__subtitle">&#60; Perchè dovresti scegliermi /&#62;</h3>
            Se stai cercando un giovane e determinato sviluppatore pronto ad
            affrontare nuove sfide nel mondo dello sviluppo web, non esitare a
            contattarmi. Grazie per aver visitato il mio sito e per l'interesse
            mostrato verso il mio profilo. Sono impaziente di collaborare con te
            e di realizzare progetti innovativi insieme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
