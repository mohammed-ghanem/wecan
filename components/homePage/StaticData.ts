export type LocalizedText = {
  en: string;
  ar: string;
};

export type DesignCard = {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  /** Behance case study link — leave empty to hide "View on Behance" */
  behanceUrl?: string;
  /**
   * Live project link (website URL or app store / deep link).
   * Optional — omit if there is no live project yet.
   */
  projectUrl?: string;
  /** Label for the project link, e.g. "Visit website" / "زيارة الموقع" */
  projectTitle?: LocalizedText;
  /** Path under /public, e.g. "/assets/images/designs/foo.jpg" — leave empty for gradient placeholder */
  image?: string;
};

/** Behance profile link shown in Designs section header */
export const behanceProfileUrl = "https://www.behance.net/manar_elsadaty";

/**
 * UI/UX design cards — add / edit / remove items here.
 * Titles & descriptions support both `en` and `ar`.
 */
export const designsData: DesignCard[] = [
  {
    id: 1,
    title: {
      en: "Sorooj Center for Studies and Research",
      ar: "مركز سرج للدراسات والأبحاث",
    },
    description: {
      en: "Sorooj Center – A beacon of scientific research and specialized education dedicated to exploring and understanding contemporary intellectual schools of thought.",
      ar: "مركز سُرُجْ - منارة للبحث العلمى والتعليم المتخصص فى استكشاف وفهم المذاهب الفكرية المعاصرة ",
    },
    behanceUrl:
      "https://www.behance.net/gallery/218691583/Sorog-Academy-islamic-educational-website",
    projectUrl: "https://www.sorooj.org",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/sorooj-center.webp",
  },
  {
    id: 2,
    title: {
      en: "DUKKANTI || Vintage Local Marketplace Experience",
      ar: "دكانتي || تجربة معارض المحليات القديمة",
    },
    description: {
      en: "DUKKANTI is a vintage local marketplace experience that allows you to browse and buy products from local vendors.",
      ar: "دكانتي - تجربة معارض المحليات القديمة تسمح لك بتصفح وشراء المنتجات من الموردين المحليين.",
    },
    behanceUrl:
      "https://www.behance.net/gallery/249292667/DUKKANTIVintage-Local-Marketplace-Experience",
    projectUrl: "",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/dukkanti.webp",
  },
  {
    id: 3,
    title: {
      en: "Sorooj Academy - Islamic Educational Website",
      ar: "اكاديمية سرج - مسار دراسي متكامل يجمع بين التأصيل العلمي، الفهم المنهجي، والتطبيق العملي في الدراسات الإسلامية.",
    },
    description: {
      en: "Sorooj Academy is an Islamic educational platform dedicated to providing high-quality Islamic education to students worldwide.",
      ar: "اكاديمية سرج -   تهدف إلى تقديم تعليم إسلامي لفهم اصول الدين  للطلاب حول العالم.",
    },
    behanceUrl: "",
    projectUrl: "https://academy.sorooj.org",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/sorooj-academy.webp",
  },
  {
    id: 4,
    title: {
      en: "Decorize|AI-Powered Interior Design || User & Worker App",
      ar: "ديكوريز | تصميم داخلي مدعوم بالذكاء الاصطناعي || تطبيق المستخدم والعامل",
    },
    description: {
      en: "Decorize is an AI-powered interior design platform that allows you to design your home or office with ease.",
      ar: "ديكوريز - تصميم داخلي مدعوم بالذكاء الاصطناعي تسمح لك بتصميم منزلك أو مكتبك بسهولة.",
    },
    behanceUrl:
      "https://www.behance.net/gallery/232621923/Decorize-AI-Powered-Interior-Design-User-Worker-App",
    projectUrl: "",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/decorize.webp",
  },
  {
    id: 5,
    title: {
      en: "Mandakar Website - Islamic Educational Website",
      ar: "التراث العلمى لفضيلة الشيخ فلاح بن اسماعيل مندكار",
    },
    description: {
      en: "Mandakar Website is an Islamic educational website dedicated to providing high-quality Islamic education to students worldwide.",
      ar: "التراث العلمى  لفضيلة الشيخ فلاح بن اسماعيل مندكار رحمة الله تعالى",
    },
    behanceUrl: "",
    projectUrl: "https://mandakar-website.sorooj.org",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/mandakar.webp",
  },
  {
    id: 6,
    title: {
      en: "WeGo || Medical Health",
      ar: "ويجو || الصحة الطبية",
    },
    description: {
      en: "WeGo is a medical health platform that allows you to book appointments with doctors and get medical advice.",
      ar: "ويجو - تطبيق طبي يسمح لك بحجز مواعيد مع الأطباء والحصول على مشاورات طبية.",
    },
    behanceUrl:
      "https://www.behance.net/gallery/222042789/WeGo-Landing-page-Medical-Health-Landing-page",
    projectUrl: "",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/wegoo.webp",
  },
  {
    id: 7,
    title: {
      en: "Tawasal || Educational website for children",
      ar: "تواصل || موقع تعليمي للأطفال",
    },
    description: {
      en: "Tawasl website for courses for children with special needs is an educational platform designed specifically to meet the needs of this important group of children.",
      ar: "يُعد موقع تواصل للكورسات الخاصة بالأطفال ذوي الاحتياجات الخاصة منصة تعليمية صُممت خصيصًا لتلبية احتياجات هذه الفئة المهمة من الأطفال. يهدف الموقع إلى تقديم محتوى تعليمي شامل ومتنوع يتناسب مع قدرات واحتياجات الأطفال ذوي الاحتياجات الخاصة، ويساعدهم على تنمية مهاراتهم ومعارفهم في مختلف المجالات. ",
    },
    behanceUrl:
      "https://www.behance.net/gallery/196685043/-Educational-website-for-children",
    projectUrl: "",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/tawasal.webp",
  },
  {
    id: 8,
    title: {
      en: "Hamdan Al-Hajri Official Website",
      ar: "الموقع الرسمى لفضيلة الدكتور حمد بن محمد الهاجرى",
    },
    description: {
      en: "The Official Website of Dr. Hamad bin Muhammad Al-Hajri, Professor of Comparative Jurisprudence and Sharia-based Governance, College of Sharia – Kuwait.",
      ar: "الموقع الرسمى لفضيلة الدكتور حمد بن محمد الهاجرى استاذ الفقة المقارن والسياسة الشرعية كلية الشريعة - الكويت",
    },
    behanceUrl: "",
    projectUrl: "https://www.hamadalhajri.net",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/hamad.webp",
  },
  {
    id: 9,
    title: {
      en: "Coffee Heaven || Coffee Shop Website",
      ar: "جنة القهوة || تسوق جميع منتجات القهوة",
    },
    description: {
      en: "Coffee Heaven is a coffee shop website that allows you to browse and buy coffee products.",
      ar: "جنة القهوة - تسوق جميع منتجات القهوة تسمح لك بتصفح وشراء المنتجات القهوية.",
    },
    behanceUrl: "",
    projectUrl: "https://coffe-heaven.vercel.app/",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/coffee.webp",
  },
  {
    id: 10,
    title: {
      en: "Se7ty / Appointmwnt app",
      ar: "صحتى / تطبيق حجز مواعيد",
    },
    description: {
      en: "Se7ty is an appointment app that allows you to book appointments with doctors and get medical advice.",
      ar: "صحتى - تطبيق حجز مواعيد يسمح لك بحجز مواعيد مع الأطباء والحصول على مشاورات طبية.",
    },
    behanceUrl:
      "https://www.behance.net/gallery/167536045/Se7tyAppointmwnt-appArabic-case-study",
    projectUrl: "",
    projectTitle: {
      en: "Visit website",
      ar: "زيارة الموقع",
    },
    image: "/assets/images/se7ty.webp",
  },
];

export function pickLocalized(text: LocalizedText, lang: string) {
  if (lang === "ar") return text.ar || text.en;
  return text.en || text.ar;
}
