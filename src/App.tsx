import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Shield,
  BookOpen,
  Star,
  Sparkles,
  Filter,
  Languages,
  Download,
  CheckCircle2,
  Bookmark,
  FileText,
  ChevronRight,
  ChevronLeft,
  Printer,
  RefreshCw,
  Layers,
  Flag,
  MessageSquare,
  Info,
  Scale,
  Check,
  Trash2,
  Calendar,
  AlertCircle
} from "lucide-react";
import {
  ARTICLES_DATA,
  CONSTITUTION_PARTS,
  LAW_TYPES,
  REGULATION_CATEGORIES,
  preambleAr,
  preambleFr,
  Article
} from "./data/constitutionData";

const translations = {
  ar: {
    portalTitle: "بوابة الدستور الجزائري",
    subtitle: "بوابة الدستور الجزائري",
    tagline: "المنصة الرقمية الرسمية للاطلاع والبحث في دستور الجمهورية الجزائرية الديمقراطية الشعبية، موثقة ومعتمدة ومبوبة لتسهيل التصفح.",
    readButton: "اقرأ الدستور",
    exploreButton: "استكشف الدستور",
    home: "الرئيسية",
    about: "حول الدستور",
    fullText: "النص الكامل",
    institutions: "المؤسسات",
    searchPlaceholder: "ابحث عن مادة، فصل، أو كلمة مفتاحية (مثال: 'حرية الصحافة'، 'رئيس الجمهورية'، '88')...",
    all: "الكل",
    lawTypeLabel: "نوع القانون",
    categoryLabel: "الفئة التنظيمية",
    fullTextCardTitle: "النص الكامل",
    fullTextCardDesc: "الوصول المباشر إلى النسخة الرسمية والمحينة للدستور الجزائري لعام 2020.",
    advancedSearchTitle: "بحث متقدم",
    advancedSearchDesc: "ابحث بسهولة عن فصول، مواد، أو كلمات مفتاحية داخل النص الدستوري.",
    verifiedInfoTitle: "معلومات موثقة",
    verifiedInfoDesc: "استناد كامل لمحتوى الجريدة الرسمية للجمهورية الجزائرية الديمقراطية الشعبية.",
    indexTitle: "فهرس وفصول الدستور",
    downloadPDF: "تحميل PDF الرسمي",
    emptySearchResults: "لم يتم العثور على أي مواد تطابق معايير البحث والفلترة المحددة. جرب كلمة أخرى أو امسح الفلاتر.",
    articleLabel: "المادة",
    pageLabel: "الصفحة",
    ofLabel: "من الجريدة الرسمية",
    bookmarkAdded: "تمت إضافة المادة إلى المحفوظات",
    bookmarkRemoved: "تمت إزالة المادة من المحفوظات",
    bookmarksTitle: "المواد المحفوظة والملاحظات القانونية",
    noBookmarks: "لم تقم بحفظ أي مواد بعد. اضغط على أيقونة النجمة المجاورة للمواد لحفظها مع ملاحظات تفسيرية للرجوع السريع!",
    notesPlaceholder: "اكتب هنا ملاحظة قانونية شخصية أو تفسيراً أكاديمياً للمادة لتسهيل مذكراتك الدراسية...",
    saveNote: "حفظ التعليق",
    noteSaved: "تمت حفظ ملاحظتك الشخصية بنجاح!",
    compareTitle: "مقارنة النصوص التشريعية والدستورية",
    compareDesc: "قارن المادة المحددة بالتعديلات السابقة أو أضف تعليقاتك القانونية.",
    historicalDraft: "صياغة بديلة / منظور تاريخي",
    currentVersion: "النسخة الدستورية الحالية (2020)",
    aiConsultationTitle: "مرشد البحث الآلي والذكاء المساعد",
    aiConsultationDesc: "اختر سؤالاً قانونياً شائعاً أو اكتب استفسارك ليقوم النظام باستخراج المادة وتظليلها فوراً لمساعدتك على الفهم السريع!",
    aiPrompt1: "ما هو دين الدولة الرسمي واللغات المعتمدة؟",
    aiPrompt2: "كم عدد العهدات الرئاسية المسموح بها دستورياً؟",
    aiPrompt3: "ما هي المهام الدفاعية للجيش الوطني الشعبي وما هي المادة؟",
    aiPrompt4: "ما هي مبادئ ملكية الثروات الطبيعية والمناجم في باطن الأرض؟",
    aiPrompt5: "ما هي المواد التي لا يمكن تعديلها أبداً في الدستور الجزائري؟",
    aiResponseLabel: "إجابة المرشد الدستوري الآلي:",
    highlightedArticlesLabel: "المواد ذات الصلة المكتشفة:",
    statsTitle: "إحصائيات دستورية سريعة",
    statArticles: "عدد المواد الموثقة",
    statPages: "عدد صفحات الوثيقة",
    statUpdated: "آخر تعديل رسمي",
    statAuthority: "جهة الاعتماد الرسمية",
    purityLabel: "الجريدة الرسمية رقم 82",
    purityValue: "30 ديسمبر 2020",
    printTitle: "الملف الدستوري المطبوع",
    printDesc: "انقر لتهيئة مستند طباعة نظيف وخالٍ من عناصر الويب للملفات المحددة.",
    quickFilter: "تصفية سريعة حسب الأبواب الرئيسية",
    toastTitle: "تنبيه النظام",
    closeBtn: "إغلاق",
    aboutModalTitle: "حول بوابة الدستور الجزائري",
    aboutModalText1: "تم تطوير هذه البوابة الرقمية في إطار تمكين وتسهيل تصفح القوانين الأساسية للجمهورية الجزائرية الديمقراطية الشعبية للمواطنين والباحثين وطلاب القانون.",
    aboutModalText2: "تستند البوابة بالكامل على الجريدة الرسمية العدد 82 الصادر في 30 ديسمبر 2020، والمصادق عليها بموجب المرسوم الرئاسي رقم 20-442. ويتميز هذا الإصدار بتعميق الحقوق المدنية، حماية المرأة، تعزيز دور المجتمع المدني، والتحديد الصارم لعهود الرئاسة والبرلمان.",
    interactivePreamble: "المقدمة والتمهيد الدستوري",
    showLess: "عرض أقل",
    showMore: "قراءة الديباجة الكاملة",
    feedbackTitle: "نموذج التعليقات وتقديم الاقتراحات",
    feedbackPlaceholder: "اكتب رسالتك أو استفسارك حول مادة معينة...",
    sendFeedback: "إرسال الاقتراح",
    feedbackSent: "شكرًا لك! تم تسجيل اقتراحك القانوني بنجاح.",
    arabicLang: "العربية (RTL)",
    frenchLang: "Français (LTR)",
    activeFilters: "الفلاتر النشطة"
  },
  fr: {
    portalTitle: "Portail de la Constitution Algérienne",
    subtitle: "Portail Constitutionnel Algérie",
    tagline: "Plateforme numérique officielle interactive de consultation et de recherche dans la Constitution de la République Algérienne Démocratique et Populaire.",
    readButton: "Lire la Constitution",
    exploreButton: "Explorer les Articles",
    home: "Accueil",
    about: "À propos",
    fullText: "Texte Intégral",
    institutions: "Institutions",
    searchPlaceholder: "Rechercher un article, un chapitre, ou un mot-clé (ex: 'presse', 'président', '88')...",
    all: "Tous",
    lawTypeLabel: "Type de loi",
    categoryLabel: "Catégorie réglementaire",
    fullTextCardTitle: "Texte Intégral",
    fullTextCardDesc: "Accès direct à la version officielle et mise à jour de la Constitution Algérienne de 2020.",
    advancedSearchTitle: "Recherche Avancée",
    advancedSearchDesc: "Recherchez facilement des chapitres, des articles ou des mots-clés dans la Constitution.",
    verifiedInfoTitle: "Informations Certifiées",
    verifiedInfoDesc: "Conformité totale avec le Journal Officiel de la République Algérienne Populaire.",
    indexTitle: "Index & Chapitres de la Constitution",
    downloadPDF: "Télécharger le PDF Officiel",
    emptySearchResults: "Aucun article ne correspond à votre recherche. Essayez d'autres mots ou réinitialisez les filtres.",
    articleLabel: "Article",
    pageLabel: "Page",
    ofLabel: "du Journal Officiel",
    bookmarkAdded: "Article ajouté aux favoris",
    bookmarkRemoved: "Article retiré des favoris",
    bookmarksTitle: "Articles Sauvegardés & Notes Juridiques",
    noBookmarks: "Aucun article enregistré pour le moment. Cliquez sur l'étoile à côté des articles pour les enregistrer ici avec vos commentaires !",
    notesPlaceholder: "Saisissez ici une note juridique personnelle ou une explication académique pour cet article...",
    saveNote: "Enregistrer le commentaire",
    noteSaved: "Votre note personnelle a été enregistrée avec succès !",
    compareTitle: "Comparatif des Textes Législatifs",
    compareDesc: "Comparez l'article sélectionné avec les versions antérieures ou ajoutez vos propres analyses.",
    historicalDraft: "Perspective historique / version antérieure",
    currentVersion: "Version constitutionnelle en vigueur (2020)",
    aiConsultationTitle: "Assistant Virtuel & Consultation Juridique",
    aiConsultationDesc: "Choisissez une question fréquente ou soumettez un thème pour retrouver et surligner instantanément l'article correspondant !",
    aiPrompt1: "Quelle est la religion officielle de l'État et ses langues ?",
    aiPrompt2: "Combien de mandats présidentiels sont autorisés par la Constitution ?",
    aiPrompt3: "Quelles sont les missions de l'Armée Nationale Populaire ?",
    aiPrompt4: "Quels sont les principes de propriété des richesses naturelles et mines ?",
    aiPrompt5: "Quels sont les articles intangibles impossibles à réviser ?",
    aiResponseLabel: "Réponse de l'Assistant Constitutionnel :",
    highlightedArticlesLabel: "Articles pertinents identifiés :",
    statsTitle: "Statistiques Constitutionnelles",
    statArticles: "Articles documentés",
    statPages: "Nombre de pages",
    statUpdated: "Dernière révision",
    statAuthority: "Autorité de certification officielle",
    purityLabel: "Journal Officiel N° 82",
    purityValue: "30 Décembre 2020",
    printTitle: "Document Constitutionnel à Imprimer",
    printDesc: "Cliquez pour générer une mise en page d'impression propre, sans éléments web parasitaires.",
    quickFilter: "Filtrer rapidement par grands Titres",
    toastTitle: "Notification Système",
    closeBtn: "Fermer",
    aboutModalTitle: "À propos du Portail de la Constitution",
    aboutModalText1: "Ce portail numérique a été conçu pour simplifier et démocratiser l'accès aux lois fondamentales de la République Algérienne Démocratique et Populaire.",
    aboutModalText2: "Le contenu est entièrement basé sur le Journal Officiel numéro 82 du 30 décembre 2020, promulgué par le décret présidentiel N° 20-442. Cette révision constitutionnelle historique renforce les libertés publiques, améliore l'indépendance de la justice et instaure une limitation stricte des mandats.",
    interactivePreamble: "Préambule de la Constitution",
    showLess: "Réduire la lecture",
    showMore: "Lire le préambule complet",
    feedbackTitle: "Propositions & Retours d'Expérience",
    feedbackPlaceholder: "Saisissez votre remarque ou commentaire sur un projet d'article...",
    sendFeedback: "Envoyer l'avis",
    feedbackSent: "Merci ! Votre retour d'ordre juridique a été enregistré pour examen.",
    arabicLang: "العربية (RTL)",
    frenchLang: "Français (LTR)",
    activeFilters: "Filtres actifs"
  }
};

export default function App() {
  // Lang switcher state
  const [lang, setLang] = useState<"ar" | "fr">("ar");
  const t = translations[lang];

  // Active inputs & filters states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLawType, setSelectedLawType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Bookmarks & Personalized notes state
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    const saved = localStorage.getItem("dz_const_bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  const [notes, setNotes] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem("dz_const_notes");
    return saved ? JSON.parse(saved) : {};
  });

  // Current active note edit string
  const [tempNote, setTempNote] = useState("");
  const [activeNoteArticleId, setActiveNoteArticleId] = useState<number | null>(null);

  // Compare modal states
  const [compareArticle, setCompareArticle] = useState<Article | null>(null);

  // Help Assistant simulated responses
  const [simulationPrompt, setSimulationPrompt] = useState<string | null>(null);
  const [simulationText, setSimulationText] = useState("");
  const [simulationArticles, setSimulationArticles] = useState<number[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Visual modals
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPreamble, setShowPreamble] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Feedback form states
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Synced updates to localStorage
  useEffect(() => {
    localStorage.setItem("dz_const_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("dz_const_notes", JSON.stringify(notes));
  }, [notes]);

  // Set page direction element according to selected language
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  // Helper flash messages
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const toggleBookmark = (id: number) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((b) => b !== id));
      triggerToast(t.bookmarkRemoved);
    } else {
      setBookmarks([...bookmarks, id]);
      triggerToast(t.bookmarkAdded);
    }
  };

  const saveNote = (id: number) => {
    setNotes({ ...notes, [id]: tempNote });
    triggerToast(t.noteSaved);
    setActiveNoteArticleId(null);
    setTempNote("");
  };

  const clearNote = (id: number) => {
    const updated = { ...notes };
    delete updated[id];
    setNotes(updated);
    triggerToast(lang === "ar" ? "تم حذف الملاحظة بنجاح" : "Note supprimée");
  };

  // Filter logic
  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((art) => {
      // 1. Text & keyword search
      const query = searchQuery.trim().toLowerCase();
      let matchesQuery = true;
      if (query !== "") {
        const isNumQuery = !isNaN(Number(query));
        if (isNumQuery) {
          // If query is a exact number, highlight that specific article number
          matchesQuery = art.number === Number(query);
        } else {
          // Regular text search
          const searchInAr = art.textAr.toLowerCase() + " " + art.titleAr.toLowerCase() + " " + art.partAr.toLowerCase() + " " + art.chapterAr.toLowerCase();
          const searchInFr = art.textFr.toLowerCase() + " " + art.titleFr.toLowerCase() + " " + art.partFr.toLowerCase() + " " + art.chapterFr.toLowerCase();
          const keywordsStr = art.keywords.join(" ").toLowerCase();
          matchesQuery =
            searchInAr.includes(query) ||
            searchInFr.includes(query) ||
            keywordsStr.includes(query);
        }
      }

      // 2. Law Type Filter
      let matchesLawType = true;
      if (selectedLawType !== "all") {
        matchesLawType = art.lawType === selectedLawType;
      }

      // 3. Category Filter
      let matchesCategory = true;
      if (selectedCategory !== "all") {
        matchesCategory = art.category === selectedCategory;
      }

      // 4. Section Part Filter from the Index menu click
      let matchesPart = true;
      if (selectedPart !== null) {
        matchesPart = art.partAr === selectedPart || art.partFr === selectedPart;
      }

      return matchesQuery && matchesLawType && matchesCategory && matchesPart;
    });
  }, [searchQuery, selectedLawType, selectedCategory, selectedPart, lang]);

  // Adjust pagination gracefully when filters reduce matches
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLawType, selectedCategory, selectedPart]);

  // Paginated chunk
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(startIndex, startIndex + articlesPerPage);
  }, [filteredArticles, currentPage]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage) || 1;

  // Pre-configured questions handler with simulated delays for realism
  const handleAISimulation = (promptIndex: number) => {
    setIsSimulating(true);
    setSimulationText("");
    
    let answerText = "";
    let targets: number[] = [];

    if (promptIndex === 1) {
      answerText = lang === "ar" 
        ? "دين الدولة الرسمي هو الإسلام بموجب المادة 2. واللغة العربية هي اللغة الوطنية والرسمية الأولى (المادة 3). كما تعتبر تمازيغت (الأمازيغية) لغة وطنية ورسمية للدولة بموجب المادة 4."
        : "L'Islam est la religion de l'État (Article 2). La langue Arabe est la langue nationale et officielle (Article 3), et le Tamazight est également consacré langue nationale et officielle sous l'Article 4.";
      targets = [2, 3, 4];
    } else if (promptIndex === 2) {
      answerText = lang === "ar"
        ? "تحدد المادة 88 العهدة الرئاسية بخمس (5) سنوات، وتفرض قيداً صارماً غير قابل للتعديل يمنع تولي الرئاسة لأكثر من عهدتين متتاليتين أو منفصلتين تحت أي ظرف."
        : "L'Article 88 limite la durée du mandat présidentiel à cinq (5) ans, avec un verrou de limitation stricte empêchant quiconque d'exercer plus de deux mandats consécutifs ou séparés.";
      targets = [88];
    } else if (promptIndex === 3) {
      answerText = lang === "ar"
        ? "بموجب المادة 30، تنتظم القوات الدفاعية للأمة حول 'الجيش الوطني الشعبي'. وتتمثل مهمته الأساسية الدائمة في الدفاع عن استقلال الوطن ووحدة ترابه البري والبحري والجوي."
        : "Selon l'Article 30, les forces armées sont structurées autour de l'Armée Nationale Populaire (ANP). Sa mission constitutionnelle est la défense de l'intégrité nationale.";
      targets = [30];
    } else if (promptIndex === 4) {
      answerText = lang === "ar"
        ? "تُرسخ المادة 20 ملكية المجموعة الوطنية العامة غير المقسمة للثروات الطبيعية كافة، كالمناجم وحقول البترول وموارد الطاقة والغابات والمواد الطبيعية في باطن الأرض والبحار."
        : "L'Article 20 décrète la propriété publique exclusive de la collectivité nationale sur toutes les ressources naturelles, mines, carrières, hydrocarbures, forêts et sous-sol.";
      targets = [20];
    } else if (promptIndex === 5) {
      answerText = lang === "ar"
        ? "المادة 223 تطرح 'المواد الصماء' التي يُمنع مطلقاً تعديلها، وتشمل: الطابع الجمهوري للدولة، الإسلام كدين للدولة، العربية والتمازيغية كلغات رسمية، التعددية الديمقراطية، والحدود الرئاسية."
        : "L'Article 223 énumère les dispositions intangibles incisibles de la révision : le caractère républicain, l'Islam religion de l'État, les langues officielles, le multipartisme et la limitation des mandats.";
      targets = [223];
    }

    setSimulationPrompt(promptIndex === 1 ? t.aiPrompt1 : promptIndex === 2 ? t.aiPrompt2 : promptIndex === 3 ? t.aiPrompt3 : promptIndex === 4 ? t.aiPrompt4 : t.aiPrompt5);
    setSimulationArticles(targets);

    // Live typing effect simulation
    let charIndex = 0;
    const intervalRef = setInterval(() => {
      setSimulationText((prev) => prev + answerText.charAt(charIndex));
      charIndex++;
      if (charIndex >= answerText.length) {
        clearInterval(intervalRef);
        setIsSimulating(false);
      }
    }, 12);
  };

  const handleCustomSearchCardFocus = (focusType: 'text' | 'arg' | 'verified') => {
    if (focusType === 'text') {
      setSelectedPart(null);
      setSelectedCategory("all");
      setSelectedLawType("all");
      setSearchQuery("");
      triggerToast(lang === "ar" ? "تم تحويل العرض إلى كامل مواد الدستور" : "Affichage de toute la Constitution");
    } else if (focusType === 'arg') {
      setSelectedCategory("oversight");
      setSelectedLawType("all");
      triggerToast(lang === "ar" ? "تم تطبيق فلتر الرقابة والشفافية" : "Filtre Contrôle & Transparence activé");
    } else if (focusType === 'verified') {
      setShowAboutModal(true);
    }
  };

  // Safe Print action
  const handlePrint = () => {
    window.print();
  };

  // Mock download prompt helper
  const handlePDFDownloadMock = () => {
    triggerToast(lang === "ar" ? "جاري تهيئة وتجميع ملف الـ PDF الرسمي للجريدة الرسمية رقم 82..." : "Préparation du fichier PDF officiel du Journal Officiel N°82...");
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "#";
      triggerToast(lang === "ar" ? "تم إصدار نسخة العرض بنجاح وبدء التحميل!" : "Téléchargement initié avec succès !");
    }, 1800);
  };

  return (
    <div id="portal-root" className={`min-h-screen text-slate-900 font-sans antialiased bg-[#faf8ff] selection:bg-emerald-200`}>
      
      {/* 1. Frosted Glass Top Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 glassmorphism shadow-sm transition-all duration-300">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-white font-extrabold shadow-md transform hover:rotate-12 transition-transform">
              🇩🇿
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-arabic tracking-tight text-emerald-950 flex items-center gap-2">
                {t.portalTitle}
              </h1>
              <p className="text-[10px] text-emerald-800 font-medium tracking-wide">
                {lang === "ar" ? "المنصة الرسمية المحسنة" : "PLATEFORME OFFICIELLE INTERACTIVE"}
              </p>
            </div>
          </div>

          {/* Nav Items - Desktop */}
          <nav className="hidden md:flex items-center gap-6 font-arabic text-sm font-semibold text-slate-700">
            <button onClick={() => { setSearchQuery(""); setSelectedPart(null); setSelectedCategory("all"); setSelectedLawType("all"); }} className="hover:text-emerald-700 transition-colors pointer-events-auto">
              {t.home}
            </button>
            <button onClick={() => setShowAboutModal(true)} className="hover:text-emerald-700 transition-colors">
              {t.about}
            </button>
            <button onClick={() => { setSelectedLawType("constitution"); setSelectedPart(null); }} className="hover:text-emerald-700 transition-colors">
              {t.fullText}
            </button>
            <a href="#analytical-workbench" className="hover:text-emerald-700 transition-colors">
              {lang === "ar" ? "أدوات البحث والتحليل" : "Outils de recherche"}
            </a>
          </nav>

          {/* Interactive Flags & Options */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Lang Toggle pill */}
            <div className="bg-slate-100 p-0.5 rounded-full flex items-center border border-slate-200 shadow-inner">
              <button
                onClick={() => setLang("ar")}
                className={`px-3 py-1 text-xs rounded-full font-bold transition-all ${
                  lang === "ar"
                    ? "bg-white text-emerald-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                عربي
              </button>
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1 text-xs rounded-full font-bold transition-all ${
                  lang === "fr"
                    ? "bg-white text-emerald-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                FR
              </button>
            </div>

            {/* Premium action client trigger */}
            <button
              onClick={() => {
                const element = document.getElementById("analytical-workbench");
                element?.scrollIntoView({ behavior: "smooth" });
                triggerToast(lang === "ar" ? "تم الانتقال إلى لوحة تصنيفات البحث" : "Accès aux filtres contextuels");
              }}
              className="bg-emerald-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all shadow-md active:scale-95 duration-150 flex items-center gap-1.5"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{t.exploreButton}</span>
            </button>

          </div>
        </div>
      </header>

      {/* 2. Premium State Modernism Hero Banner */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:py-16 bg-gradient-to-b from-emerald-50 via-white to-slate-50 border-b border-slate-100">
        
        {/* Subtle geometric circles nodes mapping the flag */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute left-12 bottom-0 w-80 h-80 bg-red-100/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Quick Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-900 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm mb-4 border border-emerald-200/50 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{t.purityLabel} : {t.purityValue}</span>
              <span className="border-l border-emerald-300 h-3 mx-1" />
              <span>{lang === "ar" ? "بند دستوري محين وموثق" : "Articles certifiés"}</span>
            </div>

            {/* Display pairs fonts */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-arabic leading-tight">
              {lang === "ar" ? "بوابة الدستور الجزائري الرقمية" : "Portail Constitutionnel Algérien"}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium max-w-2xl mx-auto mb-8 font-arabic leading-relaxed">
              {t.tagline}
            </p>

            {/* Desktop Quick Commands buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("analytical-workbench");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.exploreButton}
              </button>
              
              <button
                onClick={() => setShowPreamble(!showPreamble)}
                className="bg-white border border-slate-300 text-slate-700 font-bold px-6 py-3 rounded-full hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-700" />
                <span>{t.interactivePreamble}</span>
              </button>

              <button
                onClick={handlePDFDownloadMock}
                className="bg-white border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-full hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm text-xs sm:text-sm"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>{t.downloadPDF}</span>
              </button>
            </div>

          </div>

          {/* Interactive Collapsible constitutional preamble */}
          {showPreamble && (
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-md max-w-3xl mx-auto transition-all duration-500 animate-fadeIn relative">
              <div className="absolute top-2 right-2 sm:right-4 bg-emerald-100 text-emerald-800 text-[10px] px-2.5 py-1 rounded-full font-bold">
                🇩🇿 {lang === "ar" ? "تمهيد رسمي" : "Préambule officiel"}
              </div>
              
              <h3 className="text-xl font-bold text-emerald-950 mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-700" />
                <span>{t.interactivePreamble}</span>
              </h3>

              <div className="text-sm sm:text-base text-slate-700 font-arabic leading-relaxed space-y-4 whitespace-pre-line text-justify max-h-96 overflow-y-auto pr-2 no-scrollbar">
                {lang === "ar" ? preambleAr : preambleFr}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowPreamble(false)}
                  className="text-xs text-emerald-800 hover:text-emerald-900 font-bold flex items-center gap-1"
                >
                  {t.showLess}
                </button>
              </div>
            </div>
          )}

          {/* 3. Showcase Bento Grid matching original screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto">
            
            {/* ShowCard 1 */}
            <div
              onClick={() => handleCustomSearchCardFocus('text')}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 bg-indigo-50 text-indigo-800 rounded-xl group-hover:bg-indigo-100 transition-all">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[10px] text-slate-400 font-bold bg-slate-50 px-2 py-1 rounded">
                  225 {lang === "ar" ? "مادة" : "articles"}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {t.fullTextCardTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t.fullTextCardDesc}
                </p>
              </div>
            </div>

            {/* ShowCard 2 */}
            <div
              onClick={() => handleCustomSearchCardFocus('arg')}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl group-hover:bg-emerald-100 transition-all">
                  <Search className="w-6 h-6" />
                </div>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">
                  {lang === "ar" ? "تصفية متطورة" : "Filtrage intelligent"}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {t.advancedSearchTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t.advancedSearchDesc}
                </p>
              </div>
            </div>

            {/* ShowCard 3 */}
            <div
              onClick={() => handleCustomSearchCardFocus('verified')}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 bg-red-50 text-red-800 rounded-xl group-hover:bg-red-100 transition-all">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-[10px] text-red-600 font-bold bg-red-50 px-2 py-1 rounded">
                  {lang === "ar" ? "رسمي وموثق" : "100% Officiel"}
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {t.verifiedInfoTitle}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {t.verifiedInfoDesc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Live active helper toast message alerts */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 text-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-slate-800 transition-all animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-bold font-arabic leading-normal">{toastMessage}</p>
        </div>
      )}

      {/* 4. MAIN ANALYTICAL WORKBENCH SECTION */}
      <main id="analytical-workbench" className="max-w-[1240px] mx-auto px-4 sm:px-6 py-12">
        
        {/* Statistics Widgets Banner */}
        <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 top-0 w-80 bg-gradient-to-l from-emerald-800/20 to-transparent pointer-events-none" />
          <h3 className="text-lg font-bold flex items-center gap-2 mb-6 text-emerald-200 font-arabic">
            <Info className="w-5 h-5" />
            <span>{t.statsTitle}</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-r border-emerald-900/40 last:border-0 pr-4">
              <span className="text-slate-400 text-xs">{t.statArticles}</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">225 {lang === "ar" ? "مادة" : "Arts"}</p>
            </div>
            <div className="border-r border-emerald-900/40 last:border-0 pr-4">
              <span className="text-slate-400 text-xs">{t.statPages}</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">64 {lang === "ar" ? "صفحة" : "Pages"}</p>
            </div>
            <div className="border-r border-emerald-900/40 last:border-0 pr-4">
              <span className="text-slate-400 text-xs">{t.statUpdated}</span>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-300 mt-1">12 / 2020</p>
            </div>
            <div className="pr-4">
              <span className="text-slate-400 text-xs">{t.statAuthority}</span>
              <p className="text-xs sm:text-sm font-semibold text-slate-100 mt-1 line-clamp-1">الرئاسة والجريدة الرسمية</p>
            </div>
          </div>
        </div>

        {/* Dynamic Guided AISearch Assistant */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-600 text-white rounded-xl">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-arabic">
                {t.aiConsultationTitle}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {t.aiConsultationDesc}
              </p>
            </div>
          </div>

          {/* Quick preset pertanyaan buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => handleAISimulation(1)}
              className="bg-white hover:bg-slate-100 border border-indigo-200 text-xs text-slate-800 font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              🎯 {t.aiPrompt1}
            </button>
            <button
              onClick={() => handleAISimulation(2)}
              className="bg-white hover:bg-slate-100 border border-indigo-200 text-xs text-slate-800 font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              🗳️ {t.aiPrompt2}
            </button>
            <button
              onClick={() => handleAISimulation(3)}
              className="bg-white hover:bg-slate-100 border border-indigo-200 text-xs text-slate-800 font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              🛡️ {t.aiPrompt3}
            </button>
            <button
              onClick={() => handleAISimulation(4)}
              className="bg-white hover:bg-slate-100 border border-indigo-200 text-xs text-slate-800 font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              🌋 {t.aiPrompt4}
            </button>
            <button
              onClick={() => handleAISimulation(5)}
              className="bg-white hover:bg-slate-100 border border-indigo-200 text-xs text-slate-800 font-semibold px-4 py-2 rounded-full cursor-pointer transition-all"
            >
              🔒 {t.aiPrompt5}
            </button>
          </div>

          {/* Simulation Output Area */}
          {simulationPrompt && (
            <div className="bg-white rounded-2xl p-5 border border-indigo-200 shadow-inner">
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100">
                <span className="text-xs text-indigo-700 font-mono font-bold">
                  {lang === "ar" ? "استفسار نشط" : "Requête active"} : "{simulationPrompt}"
                </span>
                
                {isSimulating && (
                  <span className="text-xs text-slate-400 flex items-center gap-1.5 animate-pulse">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                    <span>{lang === "ar" ? "جاري الاستقراء..." : "Induction en cours..."}</span>
                  </span>
                )}
              </div>

              <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-arabic mb-4">
                <strong>{t.aiResponseLabel}</strong>
                <p className="mt-1 bg-slate-50 p-3 rounded-xl border border-slate-100 whitespace-pre-line font-medium leading-relaxed">
                  {simulationText || "..."}
                </p>
              </div>

              {simulationArticles.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">{t.highlightedArticlesLabel}</span>
                  {simulationArticles.map((artNum) => (
                    <button
                      key={artNum}
                      onClick={() => {
                        setSearchQuery(artNum.toString());
                        setSelectedPart(null);
                        setSelectedCategory("all");
                        triggerToast(lang === "ar" ? `تم عرض المادة ${artNum}` : `Affichage Article ${artNum}`);
                      }}
                      className="bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold text-xs px-3.5 py-1.5 rounded-full border border-emerald-300 cursor-pointer transition-all active:scale-95 duration-100"
                    >
                      {t.articleLabel} {artNum} 🔍
                    </button>
                  ))}
                  
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSimulationPrompt(null);
                      setSimulationText("");
                      setSimulationArticles([]);
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-bold ml-auto"
                  >
                    {lang === "ar" ? "مسح الاستفسار" : "Effacer"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Searching & Real-time Filters Panel */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-slate-900 font-arabic">
              <Filter className="w-5 h-5 text-emerald-800" />
              <h3 className="text-lg font-bold">{lang === "ar" ? "أدوات البحث والفرز المتقدمة" : "Outils Flitres & Filtres"}</h3>
            </div>
            
            {/* Quick clears */}
            {(searchQuery || selectedLawType !== "all" || selectedCategory !== "all" || selectedPart) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLawType("all");
                  setSelectedPart(null);
                  triggerToast(lang === "ar" ? "تمت إعادة تعيين محركات البحث الفلاتر" : "Filtres réinitialisés");
                }}
                className="text-xs text-red-600 hover:text-red-800 font-bold underline cursor-pointer text-left md:text-right"
              >
                {lang === "ar" ? "إلغاء جميع خيارات الفلترة والبحث" : "Réinitialiser tous les filtres"}
              </button>
            )}
          </div>

          {/* Main search Input */}
          <div className="relative mb-6">
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-emerald-800" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-6 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:border-emerald-700 transition-all font-arabic"
            />
          </div>

          {/* Two Axis Selector: Law type & regulatory categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Axis 1: Law Types */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-arabic">
                ⚖️ {t.lawTypeLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {LAW_TYPES.map((type) => {
                  const label = lang === "ar" ? type.textAr : type.textFr;
                  const isActive = selectedLawType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedLawType(type.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-slate-900 text-white shadow-md border-slate-900"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Axis 2: Specific Regulation Categories */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 font-arabic">
                🏷️ {t.categoryLabel}
              </label>
              <div className="flex flex-wrap gap-2">
                {REGULATION_CATEGORIES.map((cat) => {
                  const label = lang === "ar" ? cat.textAr : cat.textFr;
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-emerald-900 text-white shadow-md border-emerald-900"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Selected Part Badge visual */}
          {selectedPart && (
            <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-900">
              <span className="flex items-center gap-1">
                <Bookmark className="w-3.5 h-3.5 text-emerald-700" />
                <span>{lang === "ar" ? `مستعرض نشط لـ : ${selectedPart}` : `Section active : ${selectedPart}`}</span>
              </span>
              <button onClick={() => setSelectedPart(null)} className="text-red-600 hover:text-red-800 font-extrabold cursor-pointer">
                ✕
              </button>
            </div>
          )}

        </div>

        {/* 5. SIDE-BY-SIDE MAIN PORTAL DISPLAY INTERFACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* A. Left / Right hand layout - INDEX PANEL OF THE CONSTITUTION (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-24 max-h-[80vh] overflow-y-auto no-scrollbar">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 font-arabic">
                <BookOpen className="w-5 h-5 text-emerald-800" />
                <span>{t.indexTitle}</span>
              </h3>
              
              {selectedPart && (
                <button
                  onClick={() => setSelectedPart(null)}
                  className="text-xs text-red-600 hover:text-red-700 font-bold"
                >
                  {t.all}
                </button>
              )}
            </div>

            <div className="space-y-2">
              {CONSTITUTION_PARTS.map((part) => {
                const text = lang === "ar" ? part.textAr : part.textFr;
                const isSelected = selectedPart === text;
                
                // Estimate how many articles belong to this part
                const count = ARTICLES_DATA.filter(
                  (a) => a.partAr === part.textAr || a.partFr === part.textFr
                ).length;

                return (
                  <button
                    key={part.id}
                    onClick={() => {
                      setSelectedPart(isSelected ? null : text);
                      triggerToast(lang === "ar" ? `تم عرض فصول: ${part.textAr}` : `Filtré par: ${part.textFr}`);
                    }}
                    className={`w-full text-right ${
                      lang === "fr" ? "text-left" : "text-right"
                    } p-3 rounded-xl text-xs font-semibold leading-relaxed transition-all duration-200 border flex items-center justify-between ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-950 border-emerald-300 shadow-sm font-bold"
                        : "bg-white text-slate-700 hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <span className="flex-1 pr-1 truncate text-ellipsis">{text}</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-full shrink-0 font-bold ml-2">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instructions box inside panel */}
            <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-[11px] text-slate-500 font-medium leading-relaxed font-arabic">
              <span className="font-bold text-emerald-800 block mb-1">💡 {lang === "ar" ? "توجيهات سريعة للتصفح" : "Astuces de navigation"}</span>
              {lang === "ar" ? "انقر على أي جزء في الفهرس لعزل مواده وقراءتها مباشرة. قم بتحديد معيار القانون أو الفئة في لوحة البحث لمطالعة الأحكام المتنقلة."
                 : "Cliquez sur une section de l'index pour filtrer instantanément ses articles. Utilisez les filtres contextuels pour des recherches combinées."}
            </div>

          </div>

          {/* B. MAIN PANELS DISPLAY - LIST OF ARTICLES (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            {/* Feedback stats label */}
            <div className="bg-white border-l-4 border-emerald-800 p-4 rounded-xl flex items-center justify-between text-xs text-slate-600 shadow-sm font-arabic">
              <span>
                {lang === "ar" ? "المواد المعروضة:" : "Articles trouvés :"} <strong className="text-emerald-950 font-bold">{filteredArticles.length}</strong> {lang === "ar" ? "مادة قانونية" : "articles constitutionnels"}.
              </span>
              
              <button
                onClick={handlePrint}
                className="text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{lang === "ar" ? "طباعة هذه المواد" : "Imprimer"}</span>
              </button>
            </div>

            {/* Empty view state handled elegantly */}
            {filteredArticles.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-slate-800 mb-2 font-arabic">
                  {lang === "ar" ? "عذراً، لا توجد نتائج للبحث" : "Aucun résultat trouvé"}
                </h4>
                <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                  {t.emptySearchResults}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLawType("all");
                    setSelectedPart(null);
                  }}
                  className="bg-emerald-900 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-all cursor-pointer"
                >
                  {lang === "ar" ? "إلغاء الفلاتر ومتابعة البحث" : "Réinitialiser la recherche"}
                </button>
              </div>
            )}

            {/* Detailed Articles iteration */}
            <div className="space-y-6">
              {paginatedArticles.map((art) => {
                const isBookmarked = bookmarks.includes(art.id);
                const hasNote = !!notes[art.id];
                const isEditingNote = activeNoteArticleId === art.id;

                return (
                  <div
                    key={art.id}
                    id={`art-${art.number}`}
                    className={`bg-white rounded-3xl border border-slate-200/80 shadow-sm relative overflow-hidden transition-all-custom duration-300 transform hover:shadow-md hover:border-emerald-200 ${
                      lang === "ar" ? "border-r-4 border-r-emerald-800" : "border-l-4 border-l-emerald-800"
                    }`}
                  >
                    
                    {/* Art Header bar with badges */}
                    <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-extrabold text-emerald-950 font-sans tracking-tight">
                          #{art.number}
                        </span>
                        
                        <div className="flex flex-wrap gap-1.5">
                          <span className="bg-emerald-100 text-emerald-900 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                            {lang === "ar" ? art.lawTypeLabelAr : art.lawTypeLabelFr}
                          </span>
                          <span className="bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full text-ellipsis max-w-[140px] truncate">
                            {lang === "ar" ? art.categoryLabelAr : art.categoryLabelFr}
                          </span>
                        </div>
                      </div>

                      {/* Control buttons */}
                      <div className="flex items-center gap-1.5">
                        
                        {/* Bookmark Button */}
                        <button
                          onClick={() => toggleBookmark(art.id)}
                          title="احفظ المادة"
                          className={`p-2 rounded-full cursor-pointer transition-colors ${
                            isBookmarked 
                              ? "bg-amber-50 text-amber-500 border border-amber-200" 
                              : "bg-white text-slate-400 hover:text-slate-600 border border-slate-200"
                          }`}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </button>

                        {/* Annotations Toggle */}
                        <button
                          onClick={() => {
                            if (isEditingNote) {
                              setActiveNoteArticleId(null);
                            } else {
                              setActiveNoteArticleId(art.id);
                              setTempNote(notes[art.id] || "");
                            }
                          }}
                          className={`p-2 rounded-full cursor-pointer transition-colors border ${
                            hasNote 
                              ? "bg-indigo-50 text-indigo-700 border-indigo-200" 
                              : "bg-white text-slate-400 hover:text-slate-600 border-slate-200"
                          }`}
                          title="تعليق وملاحظة"
                        >
                          <MessageSquare className="w-4 h-4" />
                        </button>

                        {/* Comparative view click */}
                        <button
                          onClick={() => setCompareArticle(art)}
                          className="bg-white text-emerald-800 hover:bg-emerald-50 border border-emerald-100 text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer"
                        >
                          {lang === "ar" ? "دراسة مقارنة" : "Étude comparative"}
                        </button>

                      </div>

                    </div>

                    {/* Art Middle Text Display body */}
                    <div className="p-6">
                      
                      {/* Chapter Context labels */}
                      <p className="text-[10px] sm:text-xs text-slate-400 font-bold mb-3 uppercase tracking-wider">
                        📂 {lang === "ar" ? `${art.partAr} • ${art.chapterAr}` : `${art.partFr} • ${art.chapterFr}`}
                      </p>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 font-arabic leading-relaxed flex items-center gap-1.5">
                        {lang === "ar" ? art.titleAr : art.titleFr}
                      </h4>

                      {/* Complete Bilingual reading panel layout */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 pt-2 border-t border-slate-50">
                        {/* Arabic column always present for high-fidelity compliance */}
                        <div className={`font-arabic text-sm sm:text-base leading-relaxed text-slate-800 text-justify ${lang === "ar" ? "font-medium" : "text-slate-500"}`} dir="rtl">
                          {art.textAr}
                        </div>
                        {/* French column */}
                        <div className={`font-sans text-xs sm:text-sm leading-relaxed text-slate-700 text-justify ${lang === "fr" ? "font-medium text-slate-900" : "text-slate-400"}`} dir="ltr">
                          {art.textFr}
                        </div>
                      </div>

                    </div>

                    {/* Persistent personal notes display inside cards if any */}
                    {hasNote && !isEditingNote && (
                      <div className="mx-6 mb-6 p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold text-indigo-800 uppercase block tracking-wider mb-1">
                            📝 {lang === "ar" ? "تعليقك القانوني الموثق" : "Votre annotation juridique"}
                          </span>
                          <p className="text-xs text-indigo-950 font-medium font-arabic">{notes[art.id]}</p>
                        </div>
                        <button
                          onClick={() => clearNote(art.id)}
                          className="p-1 text-red-500 hover:text-red-700 hover:bg-white rounded transition-colors"
                          title="حذف الملاحظة"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Integrated notes creation form */}
                    {isEditingNote && (
                      <div className="mx-6 mb-6 p-5 bg-slate-50 border border-slate-200 rounded-2xl animate-slideDown">
                        <label className="block text-xs font-bold text-slate-600 mb-2 font-arabic">
                          ✍️ {lang === "ar" ? "صياغة الملاحظة القانونية الشخصية" : "Rédiger l'annotation de cet article"}
                        </label>
                        
                        <textarea
                          rows={3}
                          value={tempNote}
                          onChange={(e) => setTempNote(e.target.value)}
                          placeholder={t.notesPlaceholder}
                          className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 font-arabic mb-3"
                        />

                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setActiveNoteArticleId(null)}
                            className="bg-white border border-slate-200 text-slate-500 hover:text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-full cursor-pointer"
                          >
                            {lang === "ar" ? "إلغاء" : "Annuler"}
                          </button>
                          
                          <button
                            onClick={() => saveNote(art.id)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-1.5 rounded-full cursor-pointer flex items-center gap-1.5"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>{t.saveNote}</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Card Footer references status */}
                    <div className="px-6 py-3.5 bg-slate-50/50 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
                      <span>{t.pageLabel} {art.pageNumber} {t.ofLabel}</span>
                      <span className="font-mono text-slate-400">#DZ-CONST-2020:A{art.number}</span>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Custom Interactive Pagination */}
            {totalPages > 1 && (
              <div className="bg-white border border-slate-200 rounded-3xl p-4 flex items-center justify-between mt-4 shadow-sm font-arabic">
                
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-200 ${
                    currentPage === 1 
                      ? "text-slate-300 bg-slate-50 border-slate-100 cursor-not-allowed" 
                      : "text-slate-700 hover:bg-slate-100 cursor-pointer"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>{lang === "ar" ? "السابق" : "Précédent"}</span>
                </button>

                <span className="text-xs font-bold text-slate-600">
                  {lang === "ar" ? "صفحة":"Page"} <strong className="text-emerald-950 font-extrabold">{currentPage}</strong> {t.ofLabel} <strong className="text-emerald-950 font-extrabold">{totalPages}</strong>
                </span>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-full border border-slate-200 ${
                    currentPage === totalPages 
                      ? "text-slate-300 bg-slate-50 border-slate-100 cursor-not-allowed" 
                      : "text-slate-700 hover:bg-slate-100 cursor-pointer"
                  }`}
                >
                  <span>{lang === "ar" ? "التالي" : "Suivant"}</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>

              </div>
            )}

            {/* C. BOOKMARKS & PERSONAL COMMENTARY REGISTRY AS A SECONDARY HUB */}
            <section id="bookmark-registry" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2 font-arabic">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>{t.bookmarksTitle}</span>
              </h3>

              {bookmarks.length === 0 ? (
                <div className="text-center py-6">
                  <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    {t.noBookmarks}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookmarks.map((bId) => {
                    const matchedArt = ARTICLES_DATA.find((a) => a.id === bId);
                    if (!matchedArt) return null;
                    const comment = notes[matchedArt.id];

                    return (
                      <div key={bId} className="bg-slate-50/50 hover:bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col justify-between md:flex-row gap-3">
                        <div className="flex-1">
                          <span className="bg-emerald-100 text-emerald-900 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                            {t.articleLabel} {matchedArt.number}
                          </span>
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-1.5 font-arabic">
                            {lang === "ar" ? matchedArt.titleAr : matchedArt.titleFr}
                          </h5>
                          {comment && (
                            <p className="border-r-2 border-indigo-400 pr-2 mt-2 text-xs text-indigo-900 font-medium font-arabic">
                              "{comment}"
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 self-end md:self-center">
                          <button
                            onClick={() => {
                              setSelectedPart(null);
                              setSelectedCategory("all");
                              setSearchQuery(matchedArt.number.toString());
                              triggerToast(lang === "ar" ? `الانتقال إلى المادة ${matchedArt.number}` : `Saut à l'Article ${matchedArt.number}`);
                            }}
                            className="bg-white hover:bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1.5 rounded-full border border-slate-200 transition-all cursor-pointer"
                          >
                            🔎 {lang === "ar" ? "تفاصيل" : "Voir"}
                          </button>
                          
                          <button
                            onClick={() => toggleBookmark(matchedArt.id)}
                            className="text-xs font-bold text-red-500 hover:text-red-700"
                          >
                            ✕ {lang === "ar" ? "حذف" : "Retirer"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

          </div>

        </div>

        {/* 6. Feedback & Interactive Citizens Suggestion Form */}
        <section id="citizens-feedback" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm mt-12 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 text-red-800 rounded-2 relative overflow-hidden hidden sm:block">
              🇩🇿
            </div>
            <div className="flex-1">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 font-arabic mb-1">
                {t.feedbackTitle}
              </h4>
              <p className="text-xs text-slate-400 leading-normal mb-4">
                {lang === "ar" 
                  ? "شارك برأيك أو اقتراحك الأكاديمي حول أي تعديل دستوري. هذه المساحة مخصصة للطلبة والمحامين لتدوين آرائهم المنهجية."
                  : "Partagez votre avis technique ou vos propositions académiques sur la révision constitutionnelle pour vos travaux de recherche."}
              </p>

              {feedbackSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-4 rounded-2xl flex items-center gap-2.5 font-arabic">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs text-emerald-950 font-bold">{t.feedbackSent}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <textarea
                    rows={3}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder={t.feedbackPlaceholder}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30 focus:bg-white font-arabic transition-all"
                  />
                  
                  <button
                    onClick={() => {
                      if (feedbackText.trim() !== "") {
                        setFeedbackSubmitted(true);
                        setFeedbackText("");
                      }
                    }}
                    className="bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-2.5 rounded-full cursor-pointer transition-all"
                  >
                    {t.sendFeedback}
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* 7. COMPARATIVE STUDY DRAWER / MODAL */}
      {compareArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl animate-scaleUp">
            
            {/* Header */}
            <div className="p-6 bg-emerald-950 text-white flex items-center justify-between border-b border- emerald-900">
              <div>
                <span className="bg-emerald-800 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {t.compareTitle}
                </span>
                <h4 className="text-base sm:text-lg font-bold font-arabic mt-1">
                  {t.articleLabel} {compareArticle.number} : {lang === "ar" ? compareArticle.titleAr : compareArticle.titleFr}
                </h4>
              </div>
              <button
                onClick={() => setCompareArticle(null)}
                className="text-white hover:text-slate-300 focus:outline-none text-xl p-1 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Content list content */}
            <div className="p-6 overflow-y-auto max-h-[70vh] space-y-6">
              
              <p className="text-xs text-slate-500 italic max-w-xl">
                📝 {t.compareDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                
                {/* Panel 1: Current Active text */}
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="bg-emerald-100 text-emerald-900 text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ★ {t.currentVersion}
                    </span>
                    
                    <p className="text-xs text-slate-400 font-bold mt-3 mb-2 font-arabic">
                      📂 {compareArticle.chapterAr}•{compareArticle.partAr}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-800 font-arabic leading-relaxed text-justify mt-2 whitespace-pre-line font-medium">
                      {compareArticle.textAr}
                    </p>
                  </div>

                  <div className="border-t border-emerald-200/50 pt-2.5 mt-4 text-[10px] text-emerald-800 font-bold">
                    منصوص عليه في دستور الجزائر 2020 المعدل
                  </div>
                </div>

                {/* Panel 2: Comparative Historical formulation */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="bg-slate-200 text-slate-700 text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ⏳ {t.historicalDraft}
                    </span>

                    <p className="text-xs text-slate-400 font-bold mt-3 mb-2">
                       (قبل تعديل ديسمبر 2020)
                    </p>

                    <p className="text-xs sm:text-sm text-slate-500 font-arabic leading-relaxed text-justify mt-2 italic whitespace-pre-line">
                      {lang === "ar"
                        ? `كان نص المادة قبل التعديل يفتقر لبعض الضمانات الدستورية المضافة حديثًا، وكان يخضع لتقديرات تنفيذية أوسع تم تقييدها في نسخة 2020 لتعزيز شفافية الدولة وتعيين الهيئات المستقلة التشاركية.`
                        : `L'ancienne formulation de cet article laissait une marge d'interprétation plus large à l'exécutif, réformée en 2020 pour codifier des critères constitutionnels stricts et promouvoir les libertés.`}
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-2.5 mt-4 text-[10px] text-slate-500">
                    أرشيف تعديلات الدستور (1996 / 2016)
                  </div>
                </div>

              </div>

              {/* Citizen Commentary widget */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <span className="text-xs font-bold text-slate-800 block mb-2">🛡️ المرجعية الفقهية والتشريعية للمادة</span>
                <p className="text-xs text-slate-500 leading-relaxed leading-normal">
                  ترسخ هذه المادة التوجه الديمقراطي للجمهورية وتحدد بشكل صارم استقلالية الهياكل المعنية وفقًا لأعلى معايير الإعلان العالمي لحقوق الإنسان والاتفاقيات الدولية التي صادقت عليها الجزائر.
                </p>
              </div>

            </div>

            {/* Footer action buttons */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
              <button
                onClick={() => {
                  toggleBookmark(compareArticle.id);
                  setCompareArticle(null);
                }}
                className="bg-emerald-900 text-white hover:bg-emerald-800 text-xs font-bold px-4 py-2 rounded-full cursor-pointer shadow-sm"
              >
                ★ {bookmarks.includes(compareArticle.id) ? "إزالة من المحفوظات" : "حفظ المادة للمقارنة"}
              </button>
              <button
                onClick={() => setCompareArticle(null)}
                className="bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold px-4 py-2 rounded-full cursor-pointer shadow-sm"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 8. ABOUT MODAL SCREEN */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl animate-scaleUp">
            
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <h4 className="text-base sm:text-lg font-bold font-arabic">
                {t.aboutModalTitle}
              </h4>
              <button
                onClick={() => setShowAboutModal(false)}
                className="text-white hover:text-slate-300 focus:outline-none font-bold text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4 text-slate-700 text-xs sm:text-sm font-arabic leading-relaxed text-justify">
              <p>{t.aboutModalText1}</p>
              <p>{t.aboutModalText2}</p>
              
              <div className="bg-slate-50 p-4 border border-slate-100 rounded-2xl text-[11px] text-slate-500">
                <span className="font-bold text-slate-800 block mb-1">الجمهورية الجزائرية الديمقراطية الشعبية</span>
                رئاسة الجمهورية • المحكمة الدستورية • الأمانة العامة للحكومة.
                هذا المستند مرجعي للاطلاع العام ولا يغني عن الجريدة الرسمية الأصلية المطبوعة بمطبعة الدولة.
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowAboutModal(false)}
                className="bg-emerald-950 text-white font-bold text-xs px-5 py-2 rounded-full cursor-pointer"
              >
                {t.closeBtn}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 9. PREMIUM FOOTER SECTION */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 mt-20 font-arabic text-xs py-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
            
            {/* Logo */}
            <div>
              <h4 className="text-lg font-bold text-white mb-1 font-arabic">
                {t.portalTitle}
              </h4>
              <p className="text-[10px] text-slate-500 max-w-sm font-arabic leading-relaxed">
                {lang === "ar"
                  ? "جميع الحقوق محفوظة للجمهورية الجزائرية الديمقراطية الشعبية © 2026. المنصة الرسمية لتمكين المصلحة العامة والاطلاع المنهجي الموثق."
                  : "Tous droits réservés. République Algérienne Démocratique et Populaire © 2026. Portail de centralisation légale et civique."}
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <button onClick={() => setShowAboutModal(true)} className="hover:text-white transition-colors">
                {lang === "ar" ? "شروط الخدمة" : "Conditions d'utilisation"}
              </button>
              <span className="text-slate-700">|</span>
              <button onClick={() => setShowAboutModal(true)} className="hover:text-white transition-colors">
                {lang === "ar" ? "سياسة الخصوصية" : "Données privées"}
              </button>
              <span className="text-slate-700">|</span>
              <button onClick={() => setShowAboutModal(true)} className="hover:text-white transition-colors">
                {lang === "ar" ? "رئاسة الجمهورية" : "Présidence de la République"}
              </button>
            </div>

          </div>

          <div className="text-center text-slate-600 text-[10px]">
            {lang === "ar"
              ? "© 2026 الأمانة العامة للحكومة - المحكمة الدستورية الجزائرية - بوابة الدستور الجزائري الرقمية"
              : "© 2026 Secrétariat Général du Gouvernement - Cour Constitutionnelle d'Algérie"}
          </div>

        </div>
      </footer>

      {/* Printing style variables for custom outputs */}
      <style>{`
        @media print {
          header, footer, section, # नागरिकों-feedback, # Citizens-feedback, button, input, select, .fixed {
            display: none !important;
          }
          #portal-root, main, #analytical-workbench {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
          }
          .lg\\:col-span-8 {
            width: 100% !important;
          }
          .lg\\:col-span-4 {
            display: none !important;
          }
          .border-r-4 {
            border: 1px solid #ccc !important;
            padding: 15px !important;
            margin-bottom: 20px !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>

    </div>
  );
}
