import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useHoverAnimation } from "../../hooks/useHoverAnimation";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiWordpress,
  SiPhp,
  SiPython,
  SiSharp,
  SiGithub,
  SiGit,
  SiDjango,
  SiKotlin,
  SiFlutter,
  SiAndroid,
  SiFigma,
  SiAndroidstudio,
  SiGitkraken,
  SiPostman,
  SiSpring,
  SiDbeaver,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Zap, Users, Shield, BookOpen, CheckCircle } from "lucide-react";

const frontendSkills = [
  { id: 1, name: "React", icon: SiReact, color: "#61DAFB" },
  { id: 2, name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { id: 3, name: "CSS3", icon: SiCss, color: "#1572B6" },
  { id: 4, name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { id: 5, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const backendSkills = [
  { id: 6, name: "Java", icon: FaJava, color: "#ED8B00" },
  { id: 7, name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { id: 8, name: "Python", icon: SiPython, color: "#3776AB" },
  { id: 9, name: "PHP", icon: SiPhp, color: "#777BB4" },
  { id: 10, name: "C#", icon: SiSharp, color: "#512BD4" },
  { id: 11, name: "Django", icon: SiDjango, color: "#44b78b" },
];

const mobileSkills = [
  { id: 12, name: "React Native", icon: SiReact, color: "#61DAFB" },
  { id: 13, name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { id: 14, name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { id: 15, name: "Java Android", icon: SiAndroid, color: "#3DDC84" },
];

const toolSkills = [
  { id: 16, name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { id: 17, name: "Git", icon: SiGit, color: "#F05032" },
  { id: 18, name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { id: 19, name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { id: 20, name: "GitKraken", icon: SiGitkraken, color: "#179287" },
  { id: 21, name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { id: 22, name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { id: 23, name: "DBeaver", icon: SiDbeaver, color: "#6D4C41" },
];

const softSkills = [
  { id: 1, key: "skill.soft_proatividade", fallback: "Proatividade", icon: Zap },
  { id: 2, key: "skill.soft_lideranca", fallback: "Liderança", icon: Users },
  { id: 3, key: "skill.soft_confianca", fallback: "Confiança", icon: Shield },
  { id: 4, key: "skill.soft_aprendizado", fallback: "Aprendizado", icon: BookOpen },
  { id: 5, key: "skill.soft_responsabilidade", fallback: "Responsabilidade", icon: CheckCircle },
];

interface SkillChipProps {
  name: string;
  icon: React.ElementType;
  color?: string;
  index: number;
}

const SkillChip = ({ name, icon: Icon, color, index }: SkillChipProps) => {
  const supportsHover = useHoverAnimation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.05 * index }}
      whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.15 } } : undefined}
      className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[rgba(104,9,189,0.08)] border border-[rgba(104,9,189,0.25)] hover:border-[rgba(104,9,189,0.5)] hover:bg-[rgba(104,9,189,0.18)] hover:shadow-[0_4px_20px_rgba(104,9,189,0.2)] transition-[background-color,border-color,box-shadow] duration-200 cursor-default"
    >
      <Icon size={22} color={color} />
      <span className="text-sm font-semibold text-white/90">{name}</span>
    </motion.div>
  );
};

const CategoryTitle = ({ label, delay }: { label: string; delay: number }) => (
  <motion.h3
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 mt-8 first:mt-0 text-center w-full"
  >
    {label}
  </motion.h3>
);

const Skills = () => {
  const { t } = useTranslation();
  const supportsHover = useHoverAnimation();

  return (
    <section className="bg-dark2 text-white py-16 scroll-mt-20" id="skills">
      <div className="container px-6 md:px-18">
        {/* Título */}
        <div className="flex flex-col items-center text-center gap-2.5 w-full mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
          >
            {t("skill.badge_hard", "Hard Skills")}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
            className="text-white font-releway font-semibold text-4xl"
          >
            {t("skill.title_hard", "Tecnologias")}
          </motion.h1>
        </div>

        {/* Hard Skills por categoria */}
        <div className="max-w-3xl mx-auto">
          {/* Frontend */}
          <CategoryTitle label={t("skill.cat_frontend", "Frontend")} delay={0.4} />
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {frontendSkills.map((skill, i) => (
              <SkillChip key={skill.id} name={skill.name} icon={skill.icon} color={skill.color} index={i} />
            ))}
          </div>

          {/* Backend */}
          <CategoryTitle label={t("skill.cat_backend", "Backend")} delay={0.5} />
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {backendSkills.map((skill, i) => (
              <SkillChip key={skill.id} name={skill.name} icon={skill.icon} color={skill.color} index={i} />
            ))}
          </div>

          {/* Mobile */}
          <CategoryTitle label={t("skill.cat_mobile", "Mobile")} delay={0.6} />
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {mobileSkills.map((skill, i) => (
              <SkillChip key={skill.id} name={skill.name} icon={skill.icon} color={skill.color} index={i} />
            ))}
          </div>

          {/* Ferramentas */}
          <CategoryTitle label={t("skill.cat_tools", "Ferramentas")} delay={0.7} />
          <div className="flex flex-wrap justify-center gap-3">
            {toolSkills.map((skill, i) => (
              <SkillChip key={skill.id} name={skill.name} icon={skill.icon} color={skill.color} index={i} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="flex flex-col items-center text-center gap-2.5 w-full mt-16 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="bg-[rgba(104,9,189,0.1)] px-8 py-2 rounded-[20px] text-primary font-releway font-semibold"
          >
            {t("skill.badge_soft", "Soft Skills")}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
            className="text-white font-releway font-semibold text-4xl"
          >
            {t("skill.title_soft", "Habilidades")}
          </motion.h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.08 * i }}
                whileHover={supportsHover ? { scale: 1.05, transition: { duration: 0.15 } } : undefined}
                className="flex items-center gap-2 bg-[rgba(104,9,189,0.1)] px-6 py-4 rounded-[20px] border border-[rgba(104,9,189,0.3)] hover:bg-[rgba(104,9,189,0.25)] hover:border-primary/60 transition-[background-color,border-color] duration-200 cursor-default"
              >
                <Icon size={18} className="text-primary" />
                <p className="font-semibold text-base">{t(skill.key, skill.fallback)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
