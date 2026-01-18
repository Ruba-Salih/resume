import { createI18n } from "vue-i18n";

const messages = {
  en: {
    index: {
      headline: "Build your resume",
      subtitle: "Fast, clean, and professional",
      description:
        "Pick a modern template and create a professional resume in minutes. Edit anytime. Export when ready.",
      createCta: "Create new resume",
      recentTitle: "Continue where you left off",
      untitled: "Untitled resume",
      edited: "Edited",
      open: "Open",
      templatesTitle: "Start from a template"
    },

    landing: {
        headline: "Build your resume",
        subtitle: "Fast. Clean. Professional.",
        description:
        "Create stunning resumes with modern templates, live preview, and easy editing — all in one place.",
        getStarted: "Get Started Free",
        login: "Login",

        examplesTitle: "Same resume, different layouts",
        examplesSubtitle:
        "One profile — styled with multiple professional templates",

        classic: "Classic layout",
        sidebar: "Sidebar layout",
        minimal: "Minimal layout",

        ctaBottom: "Create your resume now",

        features: {
        livePreview: "Live Preview",
        livePreviewDesc:
            "See changes instantly while editing your resume.",
        layouts: "Multiple Layouts",
        layoutsDesc:
            "Choose from classic, modern, sidebar, and minimal designs.",
        export: "Export Ready",
        exportDesc:
            "Download and share your resume anytime."
        }
    },

    login: {
        title: "Welcome back",
        subtitle: "Log in to continue building your resume",

        emailLabel: "Email address",
        emailPlaceholder: "you@example.com",

        passwordLabel: "Password",
        passwordPlaceholder: "••••••••",

        submit: "Login",
        submitting: "Logging in…",

        errorRequired: "Email and password are required",
        errorInvalid: "Invalid email or password",

        noAccount: "Don’t have an account?",
        createAccount: "Create one"
    },

     register: {
        title: "Create your account",
        subtitle: "Start building your professional resume",

        nameLabel: "Full name",
        namePlaceholder: "John Doe",

        emailLabel: "Email address",
        emailPlaceholder: "you@example.com",

        passwordLabel: "Password",
        passwordPlaceholder: "••••••••",
        passwordHint: "Minimum 6 characters",

        submit: "Create account",
        submitting: "Creating account…",

        errorRequired: "All fields are required",
        errorExists: "Registration failed. Try a different email.",

        haveAccount: "Already have an account?"
    },

    common: {
      appName: "ResumeBuilder",
      save: "Save",
      saving: "Saving…",
      login: "Login",
      register: "Register",
      logout: "Logout"
    },

    editor: {
      title: "Resume Editor",
      subtitle: "Edit content & choose layout",
      content: "Content",
      preview: "Live Preview",
      previewHint: "Updates instantly",
      saved: "✅ Resume saved",
      updated: "✅ Resume updated",
      failed: "❌ Failed to save resume",
      untitled: "Untitled Resume"
    },

    footer: {
        appName: "ResumeBuilder",
        rights: "All rights reserved",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact"
    }
  },

  ar: {
    index: {
      headline: "أنشئ سيرتك الذاتية",
      subtitle: "بسرعة واحترافية",
      description:
        "اختر قالبًا عصريًا وأنشئ سيرة ذاتية احترافية خلال دقائق. عدّل في أي وقت وصدّر عند الجاهزية.",
      createCta: "إنشاء سيرة ذاتية جديدة",
      recentTitle: "تابع من حيث توقفت",
      untitled: "سيرة ذاتية بدون عنوان",
      edited: "آخر تعديل",
      open: "فتح",
      templatesTitle: "ابدأ من قالب"
    },

    landing: {
        headline: "أنشئ سيرتك الذاتية",
        subtitle: "بسرعة. أناقة. احترافية.",
        description:
        "أنشئ سير ذاتية رائعة باستخدام قوالب حديثة، معاينة مباشرة، وتحرير سهل — كل ذلك في مكان واحد.",
        getStarted: "ابدأ مجانًا",
        login: "تسجيل الدخول",

        examplesTitle: "سيرة ذاتية واحدة، تصاميم متعددة",
        examplesSubtitle:
        "نفس المحتوى بأساليب احترافية مختلفة",

        classic: "التصميم الكلاسيكي",
        sidebar: "تصميم الشريط الجانبي",
        minimal: "التصميم البسيط",

        ctaBottom: "أنشئ سيرتك الذاتية الآن",

        features: {
        livePreview: "معاينة مباشرة",
        livePreviewDesc:
            "شاهد التغييرات فورًا أثناء تحرير سيرتك الذاتية.",
        layouts: "تصاميم متعددة",
        layoutsDesc:
            "اختر من بين تصاميم كلاسيكية، حديثة، جانبية وبسيطة.",
        export: "جاهز للتصدير",
        exportDesc:
            "قم بتنزيل ومشاركة سيرتك الذاتية في أي وقت."
        }
    },

    login: {
        title: "مرحبًا بعودتك",
        subtitle: "سجّل الدخول لمتابعة إنشاء سيرتك الذاتية",

        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "you@example.com",

        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "••••••••",

        submit: "تسجيل الدخول",
        submitting: "جارٍ تسجيل الدخول…",

        errorRequired: "البريد الإلكتروني وكلمة المرور مطلوبان",
        errorInvalid: "البريد الإلكتروني أو كلمة المرور غير صحيحة",

        noAccount: "ليس لديك حساب؟",
        createAccount: "أنشئ حسابًا"
    },

    register: {
        title: "أنشئ حسابك",
        subtitle: "ابدأ بإنشاء سيرتك الذاتية الاحترافية",

        nameLabel: "الاسم الكامل",
        namePlaceholder: "محمد أحمد",

        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "you@example.com",

        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "••••••••",
        passwordHint: "6 أحرف على الأقل",

        submit: "إنشاء حساب",
        submitting: "جارٍ إنشاء الحساب…",

        errorRequired: "جميع الحقول مطلوبة",
        errorExists: "فشل إنشاء الحساب. جرّب بريدًا إلكترونيًا آخر.",

        haveAccount: "لديك حساب بالفعل؟"
    },

    common: {
      appName: "منشئ السيرة الذاتية",
      save: "حفظ",
      saving: "جارٍ الحفظ…",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      logout: "تسجيل الخروج"
    },

    editor: {
      title: "محرر السيرة الذاتية",
      subtitle: "عدّل المحتوى واختر القالب",
      content: "المحتوى",
      preview: "المعاينة المباشرة",
      previewHint: "يتم التحديث فورًا",
      saved: "✅ تم حفظ السيرة الذاتية",
      updated: "✅ تم تحديث السيرة الذاتية",
      failed: "❌ فشل حفظ السيرة الذاتية",
      untitled: "سيرة ذاتية بدون عنوان"
    },

    footer: {
        appName: "منشئ السيرة الذاتية",
        rights: "جميع الحقوق محفوظة",
        privacy: "الخصوصية",
        terms: "الشروط",
        contact: "اتصل بنا"
    }
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages
});
