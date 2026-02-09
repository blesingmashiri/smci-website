import React from "react";
import { motion } from "framer-motion";

const NashMusicCompetition2025: React.FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6 md:px-12">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">

        {/* Title */}
        <motion.header 
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            National Association of Secondary Heads (NASH)
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-semibold text-blue-600 mt-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Bulawayo Music Competitions 2025
          </motion.h2>
          <motion.p 
            className="text-gray-500 mt-3 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Guest of Honour Address
          </motion.p>
        </motion.header>

        {/* Introduction */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ladies and gentlemen, esteemed choirs, invited guests, composers, and
            honored dignitaries, I am delighted to stand before you today as the
            Guest of Honour at this vibrant music competition.
          </motion.p>
          <motion.p 
            className="text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            "Music is the language of the spirit. It opens the secret of life,
            bringing peace, abolishing strife." — Kahlil Gibran
          </motion.p>
        </motion.section>

        {/* Appreciation */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Appreciation and Recognition
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I would like to extend my heartfelt appreciation to the frontline
            protagonists, the choirs. Your performances were splendid and truly
            inspiring, displaying remarkable musical prowess.
          </motion.p>
          <motion.p 
            className="text-gray-700 leading-relaxed mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Congratulations to the composers for crafting such beautiful and
            uplifting music. To the teachers, coaches, mentors, and advisors —
            this professional and artful event would not have been possible
            without your dedication.
          </motion.p>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I also commend the NASH Bulawayo committees for their tireless efforts
            in organizing this competition. Above all, we acknowledge God
            Almighty for the gift of life, from which these talents flow.
          </motion.p>
        </motion.section>

        {/* Curriculum */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Heritage-Based Curriculum
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            As we competed today, we also celebrated a pivotal aspect of our
            education system — the Heritage-Based Curriculum introduced in 2024.
            This curriculum aligns education with Zimbabwe's rich heritage,
            fostering creativity, innovation, and production.
          </motion.p>
          <motion.p 
            className="text-gray-700 italic border-l-4 border-blue-500 pl-4 mb-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            "Music gives a soul to the universe, wings to the mind, flight to the
            imagination, and life to everything." — Plato
          </motion.p>

          <motion.ul 
            className="list-disc list-inside text-gray-700 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <strong>Life and Work:</strong> Preparing learners for an
              innovative, resource-based economy.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <strong>Life-long Learning:</strong> Encouraging continuous growth
              and development.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <strong>Participatory Citizenship:</strong> Developing responsible
              citizens who contribute to national development.
            </motion.li>
          </motion.ul>
        </motion.section>

        {/* Power of Music */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Power of Music in Education
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The performances showcased today highlight the transformative power
            of music in promoting cultural heritage among young people. Music
            inspires, educates, and unites communities.
          </motion.p>
          <motion.p 
            className="text-gray-700 italic border-l-4 border-blue-500 pl-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            "Music produces a kind of pleasure which human nature cannot do
            without." — Confucius
          </motion.p>
        </motion.section>

        {/* Venue */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Appreciation to the Venue
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I extend my sincere gratitude to Brethren In Christ Church Lobengula
            for providing an ideal venue. The acoustics and ambience greatly
            enhanced the musical experience.
          </motion.p>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-2xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Conclusion
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            I commend NASH Bulawayo for organizing this competition, which
            highlights the importance of arts in education. Together, let us
            nurture a generation proud of its heritage and equipped to shape a
            prosperous future.
          </motion.p>
          <motion.p 
            className="text-gray-700 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Thank you all, and I wish you success in your future endeavors.
          </motion.p>
        </motion.section>

      </article>
    </main>
  );
};

export default NashMusicCompetition2025;
