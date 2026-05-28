import * as Si from "react-icons/si";
import * as Fa from "react-icons/fa";

const ICON_MAP = {
  // Languages
  python: Si.SiPython,
  javascript: Si.SiJavascript,
  js: Si.SiJavascript,
  typescript: Si.SiTypescript,
  ts: Si.SiTypescript,
  html: Si.SiHtml5,
  html5: Si.SiHtml5,
  css: Si.SiCss3,
  css3: Si.SiCss3,
  php: Si.SiPhp,
  ruby: Si.SiRuby,
  go: Si.SiGo,
  rust: Si.SiRust,
  cpp: Si.SiCplusplus,
  java: Si.SiOpenjdk,

  // Frameworks / Libraries
  react: Si.SiReact,
  django: Si.SiDjango,
  vue: Si.SiVuedotjs,
  angular: Si.SiAngular,
  nextjs: Si.SiNextdotjs,
  vite: Si.SiVite,
  tailwind: Si.SiTailwindcss,
  tailwindcss: Si.SiTailwindcss,
  bootstrap: Si.SiBootstrap,
  express: Si.SiExpress,
  node: Si.SiNodedotjs,
  nodejs: Si.SiNodedotjs,
  flutter: Si.SiFlutter,
  laravel: Si.SiLaravel,

  // Databases
  sqlite: Si.SiSqlite,
  postgresql: Si.SiPostgresql,
  postgres: Si.SiPostgresql,
  mongodb: Si.SiMongodb,
  mysql: Si.SiMysql,
  redis: Si.SiRedis,

  // Tools / DevOps
  docker: Si.SiDocker,
  git: Si.SiGit,
  github: Si.SiGithub,
  aws: Si.SiAmazonwebservices,
  firebase: Si.SiFirebase,
  vercel: Si.SiVercel,
  figma: Si.SiFigma,
  postman: Si.SiPostman,
};

const getIcon = (name, iconStr) => {
  // 1. Try exact match from iconStr if it matches a Si or Fa icon name
  if (iconStr && Si[iconStr]) return Si[iconStr];
  if (iconStr && Fa[iconStr]) return Fa[iconStr];

  // 2. Try mapping from normalized name or iconStr
  const key = (iconStr || name || "").toLowerCase().trim();
  if (ICON_MAP[key]) return ICON_MAP[key];

  // 3. Try to find any Si icon that starts with the name
  const siKey = Object.keys(Si).find(k => k.toLowerCase() === `si${key}`);
  if (siKey) return Si[siKey];

  return null;
};

export default function TechIcon({ name, icon, className = "w-4 h-4" }) {
  const Icon = getIcon(name, icon);
  const isPath = icon && (icon.includes("/") || icon.includes("."));

  if (Icon) {
    return <Icon className={className} />;
  }

  if (isPath) {
    return (
      <img
        alt={name}
        className={`${className} object-contain grayscale brightness-200`}
      />
    );
  }

  return <Fa.FaCode className={`${className} opacity-50`} />;
}
