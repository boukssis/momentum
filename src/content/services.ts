import type { Locale } from "@/content/dictionary";

export type ServiceCopy = {
  title: string;
  summary: string;
  proposition: string;
  story: string[];
  capabilities: string[];
  imageAlt: string;
  secondaryAlt?: string;
  note: string;
};

export type Service = {
  slug: string;
  index: string;
  image: string;
  secondaryImage?: string;
  en: ServiceCopy;
  ar: ServiceCopy;
};

export const services: Service[] = [
  {
    slug: "event-management",
    index: "01",
    image: "/media/event-conference.jpg",
    secondaryImage: "/media/event-room.jpg",
    en: {
      title: "Event Management",
      summary: "Corporate events, exhibitions, conferences, production, and experiences with a point of view.",
      proposition: "An event is a business argument, made physical.",
      story: [
        "Momentum plans and produces corporate events, exhibitions, conferences, brand activations, and experiential programmes. The aim is not a crowded room. It is a room that changes what people understand about a company.",
        "Production is part of the idea. Sequence, space, message, and hospitality either carry the strategy or they dilute it. The work is to make them carry it.",
      ],
      capabilities: [
        "Corporate Events",
        "Exhibitions & Conferences",
        "Event Production",
        "Brand Activations",
        "Experiential Marketing",
      ],
      imageAlt: "Illustrative photograph of an audience seated at a conference. Not a Momentum project.",
      secondaryAlt: "Illustrative photograph of a conference hall prepared for an event. Not a Momentum project.",
      note: "The moment people talk about afterwards is designed with the same intent as the brief that started it.",
    },
    ar: {
      title: "إدارة الفعاليات",
      summary: "فعاليات الشركات، والمعارض والمؤتمرات، والإنتاج، وتجارب تُصمَّم بوجهة نظر.",
      proposition: "الفعالية حجة تجارية تُصنع في المكان.",
      story: [
        "تخطّط Momentum وتنفّذ فعاليات الشركات، والمعارض، والمؤتمرات، وتفعيلات العلامة، وبرامج التسويق التجريبي. الغاية ليست قاعة ممتلئة. الغاية قاعة تغيّر ما يفهمه الناس عن الشركة.",
        "الإنتاج جزء من الفكرة. التسلسل والمكان والرسالة والضيافة إما أن تحمل الاستراتيجية أو أن تُضعفها. عملنا أن نجعلها تحملها.",
      ],
      capabilities: [
        "فعاليات الشركات",
        "المعارض والمؤتمرات",
        "إنتاج الفعاليات",
        "تفعيلات العلامة",
        "التسويق التجريبي",
      ],
      imageAlt: "صورة توضيحية لجمهور في مؤتمر. ليست مشروعاً لـ Momentum.",
      secondaryAlt: "صورة توضيحية لقاعة مؤتمر مجهزة لفعالية. ليست مشروعاً لـ Momentum.",
      note: "اللحظة التي يتحدث عنها الناس بعد ذلك تُصمَّم بالقصد نفسه الذي بدأ به الطلب.",
    },
  },
  {
    slug: "marketing",
    index: "02",
    image: "/media/marketing.jpg",
    en: {
      title: "Marketing",
      summary: "Strategy, digital, social, content, and performance — aimed at one commercial point.",
      proposition: "Marketing only works when it knows where it is going.",
      story: [
        "Momentum builds marketing strategy and carries it through digital, social, content direction, and campaign management. Activity is not the goal. A change in how the right people see the business is the goal.",
        "Direction decides the message. Craft decides whether anyone stays with it. Performance analysis decides the next move, without abandoning the point we set out to make.",
      ],
      capabilities: [
        "Marketing Strategy",
        "Digital Marketing",
        "Social Media Marketing",
        "Campaign Planning & Management",
        "Content Direction",
        "Performance Analysis",
      ],
      imageAlt: "Illustrative photograph of people reviewing work together. Not a Momentum project.",
      note: "A channel plan without a point of view is a schedule. We do not sell schedules.",
    },
    ar: {
      title: "التسويق",
      summary: "استراتيجية، ورقمي، وتواصل اجتماعي، ومحتوى، وأداء — نحو نقطة تجارية واحدة.",
      proposition: "التسويق لا يعمل إلا إذا عرف إلى أين يمضي.",
      story: [
        "تبني Momentum استراتيجية التسويق وتمضي بها عبر الرقمي، والتواصل الاجتماعي، وتوجيه المحتوى، وإدارة الحملات. النشاط ليس الهدف. الهدف أن يتغيّر نظر الأشخاص المناسبين إلى العمل.",
        "الاتجاه يقرّر الرسالة. والحرفة تقرّر إن كان أحد سيبقى معها. وتحليل الأداء يقرّر الخطوة التالية، من غير التخلي عن المعنى الذي بدأنا به.",
      ],
      capabilities: [
        "استراتيجية التسويق",
        "التسويق الرقمي",
        "التسويق عبر التواصل الاجتماعي",
        "تخطيط الحملات وإدارتها",
        "توجيه المحتوى",
        "تحليل الأداء",
      ],
      imageAlt: "صورة توضيحية لأشخاص يراجعون عملاً معاً. ليست مشروعاً لـ Momentum.",
      note: "خطة قنوات بلا وجهة نظر ليست إلا جدولاً. نحن لا نبيع الجداول.",
    },
  },
  {
    slug: "business-consultancy",
    index: "03",
    image: "/media/consultancy.jpg",
    en: {
      title: "Business Consultancy",
      summary: "Strategy, growth, operations, and customer experience — advice built to be carried out.",
      proposition: "A recommendation that cannot be executed is an unfinished sentence.",
      story: [
        "Momentum works on business strategy, growth and commercial planning, operational improvement, performance, process and structure, and customer experience. We look for the constraint that is actually holding the company, not the one that is easiest to describe.",
        "The same practice that frames the problem can stay with the response until it reaches the market — through a plan, a programme, a brand, or an experience.",
      ],
      capabilities: [
        "Business Strategy",
        "Growth & Commercial Planning",
        "Operational Improvement",
        "Performance Analysis",
        "Process & Structure Review",
        "Customer Experience Improvement",
      ],
      imageAlt: "Illustrative photograph of glass office towers. Not a Momentum project.",
      note: "We would rather revise the question than deliver a polished answer to the wrong one.",
    },
    ar: {
      title: "الاستشارات التجارية",
      summary: "استراتيجية، ونمو، وتشغيل، وتجربة عميل — مشورة تُبنى لتُنفَّذ.",
      proposition: "التوصية التي لا تُنفَّذ جملة ناقصة.",
      story: [
        "تعمل Momentum على استراتيجية الأعمال، والتخطيط للنمو والشؤون التجارية، وتحسين التشغيل، والأداء، ومراجعة العمليات والهيكل، وتجربة العميل. نبحث عن القيد الذي يمسك الشركة فعلاً، لا عن القيد الأسهل وصفاً.",
        "الممارسة التي تؤطّر المشكلة تستطيع أن تبقى مع الرد حتى يصل إلى السوق — عبر خطة، أو برنامج، أو علامة، أو تجربة.",
      ],
      capabilities: [
        "استراتيجية الأعمال",
        "التخطيط للنمو والشؤون التجارية",
        "تحسين التشغيل",
        "تحليل الأداء",
        "مراجعة العمليات والهيكل",
        "تحسين تجربة العميل",
      ],
      imageAlt: "صورة توضيحية لأبراج مكاتب زجاجية. ليست مشروعاً لـ Momentum.",
      note: "نفضّل أن نراجع السؤال على أن نسلّم جواباً مصقولاً عن السؤال الخطأ.",
    },
  },
  {
    slug: "branding",
    index: "04",
    image: "/media/branding.jpg",
    en: {
      title: "Branding",
      summary: "Position, identity, voice, and the rules that keep a brand intact in the world.",
      proposition: "A brand is the meaning a company earns, then keeps.",
      story: [
        "Momentum shapes brand strategy, positioning, visual identity, logos, voice and messaging, guidelines, and the rollout that follows. The mark is the visible part. The decision underneath it is the work.",
        "Guidelines exist so the meaning survives a new campaign, a new market, and a new person telling the story. Recognition and trust should come from the same place.",
      ],
      capabilities: [
        "Brand Strategy",
        "Brand Positioning",
        "Visual Identity",
        "Logo & Identity Development",
        "Brand Voice & Messaging",
        "Brand Guidelines",
        "Brand Applications & Rollout",
      ],
      imageAlt: "Illustrative photograph of colour studies and identity materials. Not a Momentum project.",
      note: "Decoration is easy to commission. A position people can feel is the harder, more valuable thing.",
    },
    ar: {
      title: "بناء العلامة",
      summary: "التموضع، والهوية، والصوت، والقواعد التي تُبقي العلامة سليمة في العالم.",
      proposition: "العلامة هي المعنى الذي تكسبه الشركة، ثم تحافظ عليه.",
      story: [
        "تصوغ Momentum استراتيجية العلامة وتموضعها وهويتها البصرية وشعارها وصوتها ورسائلها وأدلتها وخطة تطبيقها. الشعار هو الجزء المرئي. القرار الذي تحته هو العمل.",
        "توجد الأدلة حتى يبقى المعنى سليماً مع حملة جديدة وسوق جديدة وشخص جديد يروي القصة. التعرّف والثقة يجب أن يأتيا من المكان نفسه.",
      ],
      capabilities: [
        "استراتيجية العلامة",
        "تموضع العلامة",
        "الهوية البصرية",
        "تطوير الشعار والهوية",
        "صوت العلامة والرسائل",
        "أدلة العلامة",
        "تطبيقات العلامة وخطة الإطلاق",
      ],
      imageAlt: "صورة توضيحية لدراسات لونية ومواد هوية. ليست مشروعاً لـ Momentum.",
      note: "الزينة سهلة التكليف. أما التموضع الذي يشعر به الناس فهو الأمر الأصعب والأثمن.",
    },
  },
];

export function serviceCopy(service: Service, locale: Locale) {
  return service[locale];
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
