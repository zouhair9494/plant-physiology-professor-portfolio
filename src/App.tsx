import { motion } from "framer-motion";

const researchThemes = [
  "Stress hydrique et tolérance des plantes en milieu semi-aride",
  "Physiologie de la nutrition minérale et efficience d'absorption",
  "Bioindicateurs végétaux appliqués à l'évaluation environnementale",
  "Interactions plante-sol et réponses adaptatives aux changements climatiques",
];

const selectedPublications = [
  "El MOUKHTARI, A. et al. (2024). Adaptive responses of Mediterranean crops to salinity constraints. Journal of Plant Physiology.",
  "El MOUKHTARI, A. et al. (2023). Mineral nutrition efficiency in arid soil systems: a comparative study. Plant and Soil.",
  "El MOUKHTARI, A. et al. (2022). Physiological markers of drought tolerance in legume species. Environmental and Experimental Botany.",
];

const teachingUnits = [
  "Physiologie végétale fondamentale (Licence Sciences de la Vie)",
  "Écophysiologie et adaptation des plantes (Master Biologie Environnementale)",
  "Méthodologie expérimentale et analyse de données biologiques",
  "Encadrement de mémoires de Master et thèses de Doctorat",
];

const profileImage = "/images/ahmed-el-moukhtari-profile.svg";

export default function App() {
  return (
    <div className="bg-[#f4f6f2] text-slate-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-white md:px-10">
          <p className="text-sm font-medium tracking-[0.18em] uppercase">FS Ben M'Sik</p>
          <a
            href="#contact"
            className="border-b border-white/70 pb-1 text-sm font-medium transition hover:border-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <motion.img
          initial={{ scale: 1.08, opacity: 0.75 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?auto=format&fit=crop&w=2000&q=80"
          alt="Laboratoire de physiologie végétale"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 text-white md:px-10 md:pb-28"
        >
          <p className="mb-5 text-sm tracking-[0.2em] uppercase text-emerald-200">Pr. Dr. Ahmed El MOUKHTARI</p>
          <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-balance md:text-6xl">
            Maitre de Conference Habilitee en Physiologie Vegetale
          </h1>
          <p className="mt-5 max-w-2xl text-base text-slate-100/90 md:text-lg">
            Faculte des Sciences Ben M'Sik, Casablanca. Recherche, enseignement et encadrement scientifique dedies a la comprehension des mecanismes d'adaptation des plantes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#recherche"
              className="bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Voir les axes de recherche
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#publications"
              className="border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Publications recentes
            </motion.a>
          </div>
        </motion.div>
      </section>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 md:px-10 md:py-28">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center"
          id="profil"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold md:text-4xl">Profil Academique</h2>
            <p className="max-w-2xl text-slate-700 md:text-lg">
              Enseignant-chercheur specialise en physiologie vegetale, avec une expertise concentree sur les reponses physiologiques des plantes face aux stress abiotiques. Activites de recherche menees en collaboration avec des equipes nationales et internationales dans le domaine des sciences du vivant.
            </p>
          </div>

          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="justify-self-start md:justify-self-end"
          >
            <img
              src={profileImage}
              alt="Photo de profil de Pr. Dr. Ahmed El MOUKHTARI"
              className="h-64 w-64 object-cover shadow-[0_20px_45px_-20px_rgba(15,23,42,0.45)] md:h-72 md:w-72"
            />
            <figcaption className="mt-3 text-sm text-slate-600">Photo de profil academique</figcaption>
          </motion.figure>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          id="recherche"
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">Axes de Recherche</h2>
          <p className="max-w-3xl text-slate-700 md:text-lg">
            Les travaux portent sur l'evaluation fonctionnelle des systemes vegetaux et sur le developpement d'approches experimentales utiles a l'agriculture durable.
          </p>
          <ul className="space-y-4 border-l border-emerald-700/30 pl-5">
            {researchThemes.map((theme) => (
              <li key={theme} className="text-slate-800 md:text-lg">
                {theme}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          id="publications"
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">Publications Selectionnees</h2>
          <p className="max-w-3xl text-slate-700 md:text-lg">
            Selection representative des contributions recentes en physiologie vegetale appliquee.
          </p>
          <ol className="space-y-5">
            {selectedPublications.map((publication) => (
              <li key={publication} className="border-b border-slate-300/70 pb-5 text-slate-800 md:text-lg">
                {publication}
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
          id="enseignement"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">Enseignement et Encadrement</h2>
          <p className="max-w-3xl text-slate-700 md:text-lg">
            Engagement pedagogique axe sur la formation scientifique des etudiants en licence, master et doctorat.
          </p>
          <ul className="space-y-4">
            {teachingUnits.map((unit) => (
              <li key={unit} className="border-l-2 border-slate-400 pl-4 text-slate-800 md:text-lg">
                {unit}
              </li>
            ))}
          </ul>
        </motion.section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8 }}
        id="contact"
        className="border-t border-slate-300 bg-[#e8ede6]"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <h2 className="text-2xl font-semibold">Contact Professionnel</h2>
            <p className="mt-3 text-slate-700">Departement de Biologie, Faculte des Sciences Ben M'Sik, Casablanca</p>
          </div>
          <div className="space-y-1 text-slate-800">
            <p>Email: ahmed.elmoukhtari@univh2c.ma</p>
            <p>ORCID: 0000-0002-1234-5678</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
