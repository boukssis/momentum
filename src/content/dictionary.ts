export type Locale = "en" | "ar";

type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : T extends object
        ? { [K in keyof T]: Widen<T[K]> }
        : T;

const en = {
  meta: {
    defaultTitle: "Momentum — Make Them Care.",
    template: "%s · Momentum",
    description:
      "Momentum is an independent strategy and creative company in Salmiya, Kuwait. Event management, marketing, business consultancy, and branding — with a point of view.",
    ogAlt: "Momentum — Make Them Care.",
  },
  a11y: {
    skip: "Skip to content",
    newTab: "Opens in a new tab",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
  },
  nav: {
    home: "Home",
    expertise: "Expertise",
    about: "About",
    insights: "Insights",
    contact: "Contact",
    talk: "Let's Talk",
  },
  hero: {
    eyebrow: "Independent strategy & creative company — Kuwait",
    lines: ["Make", "them", "care."],
    support: "We turn business ambition into strategies, brands, and experiences that move people.",
    primary: "Let's Create Momentum",
    secondary: "Explore Our Expertise",
    scroll: "Scroll",
    meta: "Salmiya, Kuwait · Founded 2026",
  },
  manifesto: {
    index: "01",
    label: "Point of view",
    lines: ["Attention is easy.", "Meaning is harder.", "We create both."],
    body: "Strategy decides what deserves attention. Creativity gives it a form people can feel. Execution makes it real. Momentum holds the three together — because a sharp idea that never ships, and a busy programme that never means anything, fail in the same way.",
    pillars: [
      { title: "Strategy", text: "Decide what is worth making." },
      { title: "Creativity", text: "Give it a form people feel." },
      { title: "Execution", text: "Bring it into the world intact." },
    ],
  },
  servicesHome: {
    index: "02",
    title: ["Four disciplines.", "One direction."],
    intro: "Everything we do starts with understanding what matters — and making it matter to others.",
    all: "All disciplines",
    illustrative: "Illustrative photography. Not a Momentum project.",
  },
  diff: {
    index: "03",
    title: ["Not just ideas.", "Not just execution.", "Both."],
    intro:
      "Companies are often asked to choose between a strategy firm and a creative studio. The work that moves a market needs both, in the same room, aimed at the same outcome.",
    principles: [
      {
        index: "01",
        title: "Understand deeply",
        text: "We look beyond symptoms to understand the real business challenge.",
      },
      {
        index: "02",
        title: "Create purposefully",
        text: "Every strategy, campaign, and experience needs a clear reason to exist.",
      },
      {
        index: "03",
        title: "Execute with intent",
        text: "Ideas only create impact when they are brought to life.",
      },
    ],
  },
  interlude: {
    eyebrow: "A pause",
    line1: "Good ideas deserve",
    line2: "real momentum.",
  },
  leadership: {
    index: "04",
    label: "The people behind the purpose",
    title: "Experience that moves business forward.",
    bio: "With a career spanning telecommunications, digital platforms, commercial growth, and business operations, Salem Alsanea brings an execution-focused perspective to Momentum. His leadership experience across Snoonu, Jahez Kuwait, Ooredoo Kuwait, and Zain Kuwait informs a business approach rooted in strategy, customer understanding, and measurable progress.",
    connect: "Connect with Salem",
    careerNote:
      "Snoonu, Jahez Kuwait, Ooredoo Kuwait, and Zain Kuwait are part of Salem’s career. They are not Momentum clients.",
    photoAlt: "Portrait of Salem Alsanea, Co-Founder and CEO of Momentum.",
  },
  approach: {
    index: "05",
    label: "How the work moves",
    title: ["From understanding", "to impact."],
    note: "This sequence describes how Momentum approaches an engagement on this website. It is a working frame, not an independently certified methodology.",
    stages: [
      {
        index: "01",
        title: "Discover",
        text: "Listen to the business, the audience, and the constraints. Look for what is actually at stake.",
      },
      {
        index: "02",
        title: "Define",
        text: "Sharpen the problem, the people it concerns, and the outcome — so the work has a direction.",
      },
      {
        index: "03",
        title: "Create",
        text: "Shape the strategy, identity, campaign, or experience with a clear reason to exist.",
      },
      {
        index: "04",
        title: "Deliver",
        text: "Bring the work to life through production, communication, and operational follow-through.",
      },
      {
        index: "05",
        title: "Evolve",
        text: "Read what happened, keep what is working, and refine the next move.",
      },
    ],
  },
  insightsHome: {
    index: "06",
    label: "Ideas & insights",
    title: "A point of view, written plainly.",
    intro:
      "Three perspectives drawn from how Momentum talks about brands, marketing, and the problem underneath a brief. Public company updates live on LinkedIn.",
    read: "Read the perspective",
    linkedin: "Momentum on LinkedIn",
  },
  closing: {
    lines: ["Let's make", "something", "matter."],
    support: "Have a business challenge, a brand to build, or an experience worth creating? Let's talk.",
    cta: "Start a Conversation",
  },
  footer: {
    slogan: "Make them care.",
    services: "Disciplines",
    company: "Company",
    visit: "Visit",
    rights: "All rights reserved.",
    linkedin: "LinkedIn",
  },
  servicesPage: {
    eyebrow: "Expertise",
    title: ["Four ways in.", "One standard."],
    intro:
      "Events, marketing, consultancy, and branding are not separate offers bolted together. They are four ways of making a business matter — chosen according to the problem, not the department.",
    view: "View the discipline",
    end: "If the problem is clear, the discipline can follow.",
  },
  servicePage: {
    capabilities: "Capabilities",
    thinking: "How we hold the work",
    related: "The other disciplines",
    illustrative: "Illustrative photography. Not a client project, and not presented as Momentum’s work.",
    end: "Tell us what needs to move.",
  },
  aboutPage: {
    eyebrow: "The company",
    title: ["An independent company", "with a point of view."],
    lead: "Momentum is based in Salmiya and was founded in 2026. We combine strategy, creativity, and execution for companies that want to be understood — and remembered — for the right reasons.",
    philosophyTitle: "Creativity without purpose is noise.",
    philosophy: [
      "Momentum does not believe in creativity without purpose, marketing without direction, or business recommendations without execution. The company was built to hold those three in one practice.",
      "That means we can sit with a commercial question and stay through the thing the market actually sees: a brand, a campaign, a room, a plan people can run. The value is not a thicker deck. It is a clearer direction, carried all the way out.",
    ],
    factsTitle: "The facts",
    facts: [
      { label: "Founded", value: "2026" },
      { label: "Base", value: "Salmiya, Kuwait" },
      { label: "Disciplines", value: "Four" },
    ],
    disciplinesTitle: "What the practice holds",
    end: "The introduction is the work, not a brochure.",
  },
  insightsPage: {
    eyebrow: "Insights",
    title: ["Perspectives,", "not press releases."],
    intro:
      "These essays are written for this site from Momentum’s public point of view. They are not dated as articles, and they are not case studies. For the company’s own updates, use LinkedIn.",
    read: "Read the perspective",
    byline: "A perspective from Momentum",
    related: "Continue",
    linkedin: "Follow the company on LinkedIn",
    end: "If the question is yours, the conversation can start.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    intro: "Have a business challenge, a brand to build, or an experience worth creating? Write it down, or reach Momentum directly on LinkedIn.",
    honest:
      "If email delivery is connected, your note is sent to Momentum. If it is not, this page will say so. A message is never marked as sent unless it was.",
    address: "Studio",
    linkedin: "Momentum on LinkedIn",
    founder: "Salem on LinkedIn",
    formLabel: "Enquiry",
    name: "Name",
    company: "Business / company",
    email: "Email",
    service: "Interested service",
    message: "Message",
    send: "Send the note",
    sending: "Sending",
    errors: {
      name: "Please add your name.",
      company: "Please add the business or company.",
      email: "Please check that email address.",
      service: "Please choose a service.",
      message: "Please add a short note — at least a sentence.",
      long: "Please shorten this slightly.",
    },
    status: {
      sent: "Sent. Your note was delivered to Momentum by email.",
      notConfigured:
        "Not sent. Email delivery is not connected on this site, so the note was not delivered. Momentum’s LinkedIn page is the direct public route.",
      failed: "Not sent. The mail service did not accept the note. Try again, or use LinkedIn.",
      invalid: "Check the fields below and try again. Nothing was sent.",
    },
    linkedinCta: "Continue on LinkedIn",
  },
  notFound: {
    index: "00",
    title: "Off the line.",
    body: "This page is not part of the site.",
    cta: "Back to Momentum",
  },
  unsure: "Not sure yet",
};

const ar: Widen<typeof en> = {
  meta: {
    defaultTitle: "Momentum — اجعلهم يهتمون.",
    template: "%s · Momentum",
    description:
      "Momentum شركة مستقلة للاستراتيجية والإبداع في السالمية، الكويت. إدارة فعاليات، وتسويق، واستشارات تجارية، وبناء علامات — بوجهة نظر.",
    ogAlt: "Momentum — اجعلهم يهتمون.",
  },
  a11y: {
    skip: "تخطَّ إلى المحتوى",
    newTab: "يُفتح في تبويب جديد",
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
    language: "اللغة",
  },
  nav: {
    home: "الرئيسية",
    expertise: "الخبرات",
    about: "عن الشركة",
    insights: "رؤى",
    contact: "تواصل",
    talk: "لنتحدّث",
  },
  hero: {
    eyebrow: "شركة مستقلة للاستراتيجية والإبداع — الكويت",
    lines: ["اجعلهم", "يهتمّون."],
    support: "نحوّل طموح الأعمال إلى استراتيجيات وعلامات تجارية وتجارب تحرّك الناس.",
    primary: "لنصنع الزخم",
    secondary: "استكشف خبراتنا",
    scroll: "تمرير",
    meta: "السالمية، الكويت · تأسست 2026",
  },
  manifesto: {
    index: "01",
    label: "وجهة النظر",
    lines: ["الانتباه سهل.", "المعنى أصعب.", "نحن نصنع الاثنين."],
    body: "الاستراتيجية تقرّر ما يستحق الانتباه. والإبداع يمنحه شكلاً يمكن الإحساس به. والتنفيذ يجعله حقيقياً. تجمع Momentum الثلاثة معاً، لأن الفكرة الحادة التي لا تكتمل، والبرنامج المزدحم الذي لا يعني شيئاً، يخفقان بالطريقة نفسها.",
    pillars: [
      { title: "الاستراتيجية", text: "نقرّر ما يستحق أن يُصنع." },
      { title: "الإبداع", text: "نمنحه شكلاً يشعر به الناس." },
      { title: "التنفيذ", text: "نُخرجه إلى العالم كما قُصد له." },
    ],
  },
  servicesHome: {
    index: "02",
    title: ["أربعة تخصصات.", "اتجاه واحد."],
    intro: "كل ما نقوم به يبدأ بفهم ما يهم — ثم جعله يهم الآخرين.",
    all: "كل التخصصات",
    illustrative: "صورة توضيحية. ليست مشروعاً لـ Momentum.",
  },
  diff: {
    index: "03",
    title: ["ليست أفكاراً فقط.", "وليس تنفيذاً فقط.", "الاثنان معاً."],
    intro:
      "يُطلب من الشركات غالباً أن تختار بين بيت استراتيجية واستوديو إبداعي. العمل الذي يحرّك السوق يحتاج الاثنين، في الغرفة نفسها، نحو النتيجة نفسها.",
    principles: [
      {
        index: "01",
        title: "نفهم بعمق",
        text: "نتجاوز الأعراض لنصل إلى تحدي العمل الحقيقي.",
      },
      {
        index: "02",
        title: "نبدع بهدف",
        text: "كل استراتيجية وحملة وتجربة تحتاج سبباً واضحاً لتوجد.",
      },
      {
        index: "03",
        title: "ننفّذ بقصد",
        text: "الأفكار لا تصنع أثراً إلا حين تُحيا.",
      },
    ],
  },
  interlude: {
    eyebrow: "وقفة",
    line1: "الأفكار الجيدة تستحق",
    line2: "زخماً حقيقياً.",
  },
  leadership: {
    index: "04",
    label: "الناس وراء الغاية",
    title: "خبرة تدفع الأعمال إلى الأمام.",
    bio: "بمسيرة تمتد عبر الاتصالات والمنصات الرقمية والنمو التجاري وعمليات الأعمال، يقدّم سالم الصانع إلى Momentum نظرة مبنية على التنفيذ. خبرته القيادية في سنونو وجاهز الكويت وأوريدو الكويت وزين الكويت تغذّي مقاربة تقوم على الاستراتيجية وفهم العميل والتقدم القابل للقياس.",
    connect: "تواصل مع سالم",
    careerNote: "سنونو، وجاهز الكويت، وأوريدو الكويت، وزين الكويت جزء من مسيرة سالم المهنية. ليست عملاء لـ Momentum.",
    photoAlt: "صورة سالم الصانع، الشريك المؤسس والرئيس التنفيذي لـ Momentum.",
  },
  approach: {
    index: "05",
    label: "كيف يتحرك العمل",
    title: ["من الفهم", "إلى الأثر."],
    note: "يصف هذا التسلسل أسلوب Momentum في التعامل مع العمل كما هو معروض على هذا الموقع. هو إطار عملي، لا منهجية معتمدة بشكل مستقل.",
    stages: [
      {
        index: "01",
        title: "نكتشف",
        text: "نصغي إلى الشركة والجمهور والقيود، ونبحث عمّا هو على المحك فعلاً.",
      },
      {
        index: "02",
        title: "نحدّد",
        text: "نشحذ المشكلة ومن تعنيهم والنتيجة، حتى يكون للعمل اتجاه.",
      },
      {
        index: "03",
        title: "نبتكر",
        text: "نصوغ الاستراتيجية أو الهوية أو الحملة أو التجربة، ولها سبب واضح لتوجد.",
      },
      {
        index: "04",
        title: "نسلّم",
        text: "نُخرج العمل إلى الحياة عبر الإنتاج والتواصل والمتابعة التشغيلية.",
      },
      {
        index: "05",
        title: "نطوّر",
        text: "نقرأ ما حدث، ونُبقي ما ينجح، ونصقل الخطوة التالية.",
      },
    ],
  },
  insightsHome: {
    index: "06",
    label: "أفكار ورؤى",
    title: "وجهة نظر، مكتوبة بوضوح.",
    intro:
      "ثلاث رؤى مأخوذة من طريقة Momentum في الحديث عن العلامات والتسويق والمشكلة التي تحت الطلب. تحديثات الشركة العامة على لينكدإن.",
    read: "اقرأ الرؤية",
    linkedin: "Momentum على لينكدإن",
  },
  closing: {
    lines: ["لنجعل", "شيئاً", "يهم."],
    support: "تحدٍّ في العمل، أو علامة تُبنى، أو تجربة تستحق أن تُصنع. لنتحدّث.",
    cta: "ابدأ الحوار",
  },
  footer: {
    slogan: "اجعلهم يهتمون.",
    services: "التخصصات",
    company: "الشركة",
    visit: "الزيارة",
    rights: "جميع الحقوق محفوظة.",
    linkedin: "لينكدإن",
  },
  servicesPage: {
    eyebrow: "الخبرات",
    title: ["أربعة مداخل.", "معيار واحد."],
    intro:
      "الفعاليات والتسويق والاستشارات والعلامة ليست عروضاً متفرقة تُجمع. هي أربع طرق لجعل الشركة تهم — تُختار بحسب المشكلة، لا بحسب القسم.",
    view: "عرض التخصص",
    end: "إذا كانت المشكلة واضحة، يمكن للتخصص أن يتبع.",
  },
  servicePage: {
    capabilities: "القدرات",
    thinking: "كيف نُمسك بالعمل",
    related: "التخصصات الأخرى",
    illustrative: "صورة توضيحية. ليست مشروع عميل، ولا تُعرض بوصفها عملاً من Momentum.",
    end: "أخبرونا بما يحتاج أن يتحرك.",
  },
  aboutPage: {
    eyebrow: "الشركة",
    title: ["شركة مستقلة", "لها وجهة نظر."],
    lead: "مقر Momentum في السالمية، وتأسست عام 2026. نجمع الاستراتيجية والإبداع والتنفيذ للشركات التي تريد أن تُفهم — وأن تُذكر — للأسباب الصحيحة.",
    philosophyTitle: "الإبداع بلا غاية ضجيج.",
    philosophy: [
      "لا تؤمن Momentum بإبداع بلا غاية، ولا بتسويق بلا اتجاه، ولا بتوصيات تجارية بلا تنفيذ. بُنيت الشركة لتمسك بالثلاثة في ممارسة واحدة.",
      "هذا يعني أننا نستطيع الجلوس مع السؤال التجاري والبقاء حتى الشيء الذي يراه السوق فعلاً: علامة، أو حملة، أو قاعة، أو خطة يمكن تشغيلها. القيمة ليست ملفاً أثخن. القيمة اتجاه أوضح، يُحمل حتى النهاية.",
    ],
    factsTitle: "الوقائع",
    facts: [
      { label: "التأسيس", value: "2026" },
      { label: "المقر", value: "السالمية، الكويت" },
      { label: "التخصصات", value: "أربعة" },
    ],
    disciplinesTitle: "ما تحمله الممارسة",
    end: "التعارف هو بداية العمل، لا كتيّب.",
  },
  insightsPage: {
    eyebrow: "رؤى",
    title: ["رؤى،", "لا بيانات صحفية."],
    intro:
      "كُتبت هذه النصوص لهذا الموقع من وجهة نظر Momentum المعلنة. ليست مقالات مؤرخة، وليست دراسات حالة. لتحديثات الشركة نفسها، لينكدإن هو المكان.",
    read: "اقرأ الرؤية",
    byline: "رؤية من Momentum",
    related: "متابعة",
    linkedin: "تابعوا الشركة على لينكدإن",
    end: "إذا كان السؤال سؤالكم، يمكن للحوار أن يبدأ.",
  },
  contact: {
    eyebrow: "تواصل",
    title: "ابدأ الحوار.",
    intro: "تحدٍّ في العمل، أو علامة تُبنى، أو تجربة تستحق أن تُصنع؟ اكتبوها، أو تواصلوا مع Momentum مباشرة عبر لينكدإن.",
    honest:
      "إذا كان توصيل البريد مفعّلاً، تُرسل ملاحظتكم إلى Momentum. وإذا لم يكن، ستقول هذه الصفحة ذلك. لا تُعلَّم أي رسالة بأنها أُرسلت إلا إذا أُرسلت فعلاً.",
    address: "المكتب",
    linkedin: "Momentum على لينكدإن",
    founder: "سالم على لينكدإن",
    formLabel: "الاستفسار",
    name: "الاسم",
    company: "الشركة",
    email: "البريد الإلكتروني",
    service: "الخدمة المطلوبة",
    message: "الرسالة",
    send: "إرسال الملاحظة",
    sending: "جارٍ الإرسال",
    errors: {
      name: "أضيفوا الاسم.",
      company: "أضيفوا اسم الشركة.",
      email: "تحققوا من عنوان البريد.",
      service: "اختاروا خدمة.",
      message: "أضيفوا ملاحظة قصيرة، جملة على الأقل.",
      long: "اختصروا النص قليلاً.",
    },
    status: {
      sent: "أُرسلت. وصلت ملاحظتكم إلى Momentum بالبريد.",
      notConfigured:
        "لم تُرسل. توصيل البريد غير مفعّل على هذا الموقع، لذا لم تُسلَّم الملاحظة. صفحة لينكدإن الخاصة بـ Momentum هي الطريق العام المباشر.",
      failed: "لم تُرسل. لم تقبل خدمة البريد الملاحظة. أعيدوا المحاولة، أو استخدموا لينكدإن.",
      invalid: "راجعوا الحقول أدناه وأعيدوا المحاولة. لم يُرسل شيء.",
    },
    linkedinCta: "المتابعة على لينكدإن",
  },
  notFound: {
    index: "00",
    title: "خارج المسار.",
    body: "هذه الصفحة ليست جزءاً من الموقع.",
    cta: "العودة إلى Momentum",
  },
  unsure: "لست متأكداً بعد",
};

export const dictionary = { en, ar };
export type Dictionary = Widen<typeof en>;
