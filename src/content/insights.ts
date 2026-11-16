import type { Locale } from "@/content/dictionary";

export type InsightSection = {
  heading?: string;
  paragraphs: string[];
};

export type InsightCopy = {
  title: string;
  dek: string;
  sections: InsightSection[];
};

export type Insight = {
  slug: string;
  index: string;
  en: InsightCopy;
  ar: InsightCopy;
};

export const insights: Insight[] = [
  {
    slug: "branding-is-more-than-decoration",
    index: "01",
    en: {
      title: "Branding is more than decoration",
      dek: "A mark can be drawn in a week. A brand is the meaning a company keeps.",
      sections: [
        {
          heading: "The visible layer",
          paragraphs: [
            "Decoration is the part of a brand you can point at: colour, type, a logo. It matters. It is also the easiest part to buy, and the easiest part to mistake for the work itself.",
            "When a company changes its surface and leaves the meaning untouched, people feel the gap. They may not call it strategy. They simply do not believe what they are seeing.",
          ],
        },
        {
          heading: "Meaning, then the system",
          paragraphs: [
            "Momentum treats branding as a sequence. Position before palette. Voice before a polished line. Guidelines so the meaning survives a sales deck, a booth, a social post, and a new colleague who was not in the room when the brand was made.",
            "The companies that look distinctive are rarely the ones that decorated the hardest. They decided what they meant, then let every application prove it. Recognition and trust should come from the same place.",
          ],
        },
      ],
    },
    ar: {
      title: "العلامة أكثر من زينة",
      dek: "يمكن رسم الشعار في أسبوع. العلامة هي المعنى الذي تحافظ عليه الشركة.",
      sections: [
        {
          heading: "الطبقة المرئية",
          paragraphs: [
            "الزينة هي الجزء الذي يمكن الإشارة إليه: اللون، والخط، والشعار. هي مهمة. وهي أيضاً الأسهل شراءً، والأسهل خلطاً بالعمل نفسه.",
            "حين تغيّر الشركة سطحها وتترك المعنى كما هو، يشعر الناس بالفجوة. قد لا يسمّونها استراتيجية. هم ببساطة لا يصدّقون ما يرونه.",
          ],
        },
        {
          heading: "المعنى، ثم النظام",
          paragraphs: [
            "تتعامل Momentum مع بناء العلامة بوصفه تسلسلاً. التموضع قبل لوحة الألوان. الصوت قبل الجملة المصقولة. والأدلة حتى يبقى المعنى سليماً في عرض المبيعات، والجناح، والمنشور، والزميل الجديد الذي لم يكن في الغرفة حين صُنعت العلامة.",
            "الشركات التي تبدو مميزة نادراً ما تكون تلك التي زيّنت أكثر. هي التي قررت ما تعنيه، ثم تركت كل تطبيق يُثبته. التعرّف والثقة يجب أن يأتيا من المكان نفسه.",
          ],
        },
      ],
    },
  },
  {
    slug: "why-marketing-needs-direction",
    index: "02",
    en: {
      title: "Why marketing needs direction",
      dek: "Channels are easy to fill. A point of view is not.",
      sections: [
        {
          heading: "Activity is not progress",
          paragraphs: [
            "Marketing fails quietly when it is busy. Posts go out. Campaigns launch. Reports fill with movement. The business still cannot say what changed for the person it needed to reach.",
            "Direction is the line between a commercial aim and the message that can carry it. Without that line, digital, social, and content become a calendar. Calendars do not create preference.",
          ],
        },
        {
          heading: "Craft inside a frame",
          paragraphs: [
            "Momentum asks the question a channel cannot answer: what should someone understand, feel, or do differently because this exists? Strategy is that answer, written clearly enough to guide a film, a caption, and a media plan without each of them inventing a new company.",
            "Creativity belongs inside the frame. A striking idea pointed the wrong way is an expensive detour. A correct idea with no craft is invisible. Performance analysis is how we learn whether the direction is landing — and what to adjust without losing the point.",
          ],
        },
      ],
    },
    ar: {
      title: "لماذا يحتاج التسويق إلى اتجاه",
      dek: "ملء القنوات سهل. أما وجهة النظر فلا.",
      sections: [
        {
          heading: "النشاط ليس تقدماً",
          paragraphs: [
            "يفشل التسويق بهدوء حين يكون مشغولاً. تخرج المنشورات. تنطلق الحملات. تمتلئ التقارير بالحركة. وتبقى الشركة عاجزة عن قول ما الذي تغيّر عند الشخص الذي أرادت الوصول إليه.",
            "الاتجاه هو الخط بين غاية تجارية والرسالة التي تستطيع حملها. من دون ذلك الخط يصبح الرقمي والاجتماعي والمحتوى تقويماً. والتقويمات لا تصنع تفضيلاً.",
          ],
        },
        {
          heading: "الحرفة داخل الإطار",
          paragraphs: [
            "تسأل Momentum السؤال الذي لا تستطيع القناة الإجابة عنه: ماذا ينبغي أن يفهم شخص، أو يشعر، أو يفعل بشكل مختلف لأن هذا الشيء موجود؟ الاستراتيجية هي ذلك الجواب، مكتوباً بوضوح يكفي ليوجّه فيلماً وتعليقاً وخطة وسائط من غير أن يخترع كل منها شركة جديدة.",
            "الإبداع مكانه داخل الإطار. الفكرة اللافتة التي تشير إلى الاتجاه الخطأ التفاف مكلف. والفكرة الصحيحة بلا حرفة غير مرئية. وتحليل الأداء هو كيف نعرف إن كان الاتجاه يصل — وماذا نعدّل من غير أن نضيع المعنى.",
          ],
        },
      ],
    },
  },
  {
    slug: "solve-the-real-business-problem",
    index: "03",
    en: {
      title: "Solve the real business problem",
      dek: "The brief is often a symptom. The useful work starts when the symptom is questioned.",
      sections: [
        {
          heading: "The instrument and the problem",
          paragraphs: [
            "Companies ask for a campaign, a conference, a rebrand, or a plan. Sometimes that is the right instrument. Often it is simply the instrument closest to hand.",
            "A launch that does not convert may be a message problem, or a sales process that cannot hold the interest the message created. A tired brand may need a new identity, or it may need the operation to match a promise the identity already made. A full event that changed nothing was a production success and a commercial miss.",
          ],
        },
        {
          heading: "Advice that can be carried",
          paragraphs: [
            "This is why consultancy sits with the creative work, not beside it as a separate world. Business strategy, growth, operations, process, and customer experience are how we check that the visible work is aimed at the real constraint.",
            "We would rather disappoint a brief early than deliver it faithfully and leave the problem standing. Understanding deeply means looking past the first request until the decision in front of the company is clear. Then creativity and execution have something worth serving.",
          ],
        },
      ],
    },
    ar: {
      title: "عالج مشكلة العمل الحقيقية",
      dek: "الطلب غالباً عَرَض. العمل المفيد يبدأ حين يُسأل العَرَض.",
      sections: [
        {
          heading: "الأداة والمشكلة",
          paragraphs: [
            "تطلب الشركات حملة، أو مؤتمراً، أو إعادة بناء للعلامة، أو خطة. أحياناً تكون تلك هي الأداة الصحيحة. وغالباً تكون فقط الأداة الأقرب إلى اليد.",
            "الإطلاق الذي لا يتحوّل قد يكون مشكلة رسالة، أو عملية بيع لا تستطيع أن تُمسك بالاهتمام الذي صنعته الرسالة. والعلامة المتعبة قد تحتاج هوية جديدة، أو قد تحتاج أن يطابق التشغيل وعداً سبق أن قطعته الهوية. والفعالية الممتلئة التي لم تغيّر شيئاً كانت نجاحاً في الإنتاج وإخفاقاً تجارياً.",
          ],
        },
        {
          heading: "مشورة يمكن حملها",
          paragraphs: [
            "لهذا تجلس الاستشارات مع العمل الإبداعي، لا إلى جواره كعالم منفصل. استراتيجية الأعمال، والنمو، والتشغيل، والعمليات، وتجربة العميل هي الطريقة التي نتحقق بها من أن العمل المرئي مصوَّب نحو القيد الحقيقي.",
            "نفضّل أن نُخيّب الطلب مبكراً على أن ننفّذه بأمانة ونترك المشكلة واقفة. الفهم العميق يعني النظر أبعد من أول طلب حتى يصبح القرار الذي أمام الشركة واضحاً. عندها يصبح للإبداع والتنفيذ ما يستحق أن يخدماه.",
          ],
        },
      ],
    },
  },
];

export function insightCopy(insight: Insight, locale: Locale) {
  return insight[locale];
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
