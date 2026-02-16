import {
    Stethoscope,
    Brain,
    Baby,
    Heart,
    Leaf,
    Sparkles,
    LucideIcon,
} from 'lucide-react'

export interface Service {
    slug: string
    title: string
    shortDescription: string
    description: string
    icon: LucideIcon
    color: string
    conditions: string[]
    benefits: string[]
    faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
    {
        slug: 'autoimmune-diseases',
        title: 'Autoimmune Diseases',
        shortDescription:
            'Effective homeopathic treatment for various autoimmune conditions.',
        description:
            'Autoimmune diseases occur when the immune system mistakenly attacks the body&apos;s own tissues. Our homeopathic approach focuses on regulating immune function naturally, reducing inflammation, and addressing the root causes of autoimmune responses.',
        icon: Brain,
        color: 'from-purple-500 to-indigo-600',
        conditions: [
            'Rheumatoid Arthritis',
            'Lupus (SLE)',
            'Multiple Sclerosis',
            'Hashimoto&apos;s Thyroiditis',
            'Psoriatic Arthritis',
            'Ankylosing Spondylitis',
            'Sjogren&apos;s Syndrome',
            'Celiac Disease',
        ],
        benefits: [
            'Natural immune system regulation',
            'Reduced inflammation without steroids',
            'Minimal side effects',
            'Long-term disease management',
            'Improved quality of life',
            'Personalized treatment plans',
        ],
        faqs: [
            {
                question: 'Can homeopathy cure autoimmune diseases?',
                answer:
                    'While autoimmune diseases are chronic conditions, homeopathy can effectively manage symptoms, reduce flare-ups, and improve quality of life. Many patients experience significant improvement and some achieve remission.',
            },
            {
                question: 'How long does treatment take?',
                answer:
                    'Treatment duration varies by condition and individual response. Most patients see improvement within 3-6 months, with continued treatment for optimal long-term management.',
            },
            {
                question: 'Can I take homeopathy with my current medications?',
                answer:
                    'Yes, homeopathic remedies can be safely taken alongside conventional medications. We work with your existing treatment plan and may help reduce dependency on immunosuppressants over time.',
            },
        ],
    },
    {
        slug: 'thyroid-disorders',
        title: 'Thyroid Disorders',
        shortDescription:
            'Natural treatment for hypothyroidism, hyperthyroidism, and thyroid nodules.',
        description:
            'Thyroid disorders affect millions worldwide, impacting metabolism, energy, and overall health. Our holistic approach addresses thyroid imbalances naturally, helping restore optimal thyroid function without dependency on synthetic hormones.',
        icon: Stethoscope,
        color: 'from-blue-500 to-cyan-600',
        conditions: [
            'Hypothyroidism',
            'Hyperthyroidism',
            'Hashimoto&apos;s Thyroiditis',
            'Graves&apos; Disease',
            'Thyroid Nodules',
            'Goiter',
            'Subclinical Thyroid Disorders',
        ],
        benefits: [
            'Natural hormone regulation',
            'Reduced medication dependency',
            'Improved energy levels',
            'Better metabolism',
            'Weight management support',
            'No artificial hormones',
        ],
        faqs: [
            {
                question: 'Can I stop thyroid medication with homeopathy?',
                answer:
                    'Many patients have successfully reduced or eliminated thyroid medication under medical supervision. We monitor your thyroid levels regularly and adjust treatment accordingly.',
            },
            {
                question: 'How effective is homeopathy for thyroid?',
                answer:
                    'Homeopathy has shown excellent results in managing thyroid disorders. Studies and clinical experience show significant improvement in TSH levels and symptoms for most patients.',
            },
            {
                question: 'Is homeopathy safe during pregnancy for thyroid issues?',
                answer:
                    'Yes, homeopathic remedies are safe during pregnancy and can help manage thyroid conditions without risking the baby. However, always consult before making any treatment changes.',
            },
        ],
    },
    {
        slug: 'pcos-infertility',
        title: 'PCOS & Infertility',
        shortDescription:
            'Gentle treatment for hormonal imbalances, PCOS, and fertility enhancement.',
        description:
            'PCOS affects 1 in 10 women of reproductive age, causing hormonal imbalances, irregular periods, and fertility challenges. Our natural approach helps regulate hormones, restore regular cycles, and enhance fertility without invasive procedures.',
        icon: Baby,
        color: 'from-pink-500 to-rose-600',
        conditions: [
            'Polycystic Ovary Syndrome (PCOS)',
            'Irregular Periods',
            'Amenorrhea',
            'Hormonal Imbalance',
            'Female Infertility',
            'Male Infertility',
            'Endometriosis',
            'Uterine Fibroids',
        ],
        benefits: [
            'Natural hormone balance',
            'Regular menstrual cycles',
            'Enhanced fertility',
            'Reduced PCOS symptoms',
            'No hormonal side effects',
            'Support during conception',
        ],
        faqs: [
            {
                question: 'Can homeopathy help me get pregnant?',
                answer:
                    'Yes, homeopathy has helped many couples conceive naturally by addressing underlying hormonal imbalances, improving egg quality, and creating optimal conditions for conception.',
            },
            {
                question: 'How long before I see results for PCOS?',
                answer:
                    'Most patients notice improvement in symptoms within 2-3 months. Complete cycle regulation typically takes 4-6 months of consistent treatment.',
            },
            {
                question: 'Is homeopathy effective for male infertility?',
                answer:
                    'Absolutely. Homeopathy can improve sperm count, motility, and morphology, addressing various causes of male factor infertility naturally.',
            },
        ],
    },
    {
        slug: 'lifestyle-disorders',
        title: 'Lifestyle Disorders',
        shortDescription:
            'Comprehensive treatment for diabetes, hypertension, obesity, and stress.',
        description:
            'Modern lifestyle has led to an epidemic of chronic conditions. Our integrated approach combines homeopathic treatment with lifestyle guidance to manage and reverse conditions caused by stress, diet, and sedentary habits.',
        icon: Heart,
        color: 'from-red-500 to-orange-600',
        conditions: [
            'Type 2 Diabetes',
            'Hypertension',
            'Obesity',
            'High Cholesterol',
            'Metabolic Syndrome',
            'Anxiety & Stress',
            'Insomnia',
            'Chronic Fatigue',
        ],
        benefits: [
            'Blood sugar management',
            'Blood pressure control',
            'Healthy weight loss',
            'Stress reduction',
            'Improved sleep quality',
            'Better energy levels',
        ],
        faqs: [
            {
                question: 'Can homeopathy control diabetes?',
                answer:
                    'Homeopathy can effectively manage blood sugar levels and help reduce dependency on diabetes medications. Combined with diet and lifestyle changes, many patients achieve excellent control.',
            },
            {
                question: 'Does homeopathy help with weight loss?',
                answer:
                    'Yes, by addressing underlying metabolic issues, hormonal imbalances, and emotional eating patterns, homeopathy supports sustainable weight loss.',
            },
            {
                question: 'Can I reduce my BP medications?',
                answer:
                    'Many patients have successfully reduced blood pressure medications with homeopathic treatment. This is done gradually under medical supervision.',
            },
        ],
    },
    {
        slug: 'skin-conditions',
        title: 'Skin Conditions',
        shortDescription:
            'Effective remedies for eczema, psoriasis, acne, and chronic skin disorders.',
        description:
            'Skin conditions often reflect internal imbalances. Our approach treats both the visible symptoms and underlying causes, providing lasting relief from chronic skin problems without steroid creams or harsh treatments.',
        icon: Sparkles,
        color: 'from-amber-500 to-yellow-600',
        conditions: [
            'Eczema',
            'Psoriasis',
            'Acne & Pimples',
            'Vitiligo',
            'Urticaria (Hives)',
            'Lichen Planus',
            'Fungal Infections',
            'Hair Loss (Alopecia)',
        ],
        benefits: [
            'Clear, healthy skin',
            'No steroid dependency',
            'Treats root cause',
            'Prevents recurrence',
            'Safe for all ages',
            'No side effects',
        ],
        faqs: [
            {
                question: 'Is homeopathy effective for psoriasis?',
                answer:
                    'Yes, homeopathy has excellent results for psoriasis. While it takes time, many patients achieve significant clearing of lesions and long-term remission.',
            },
            {
                question: 'Can homeopathy treat vitiligo?',
                answer:
                    'Homeopathy can help restore pigmentation in vitiligo, especially when started early. Results vary, but many patients see repigmentation within 6-12 months.',
            },
            {
                question: 'How long to clear acne with homeopathy?',
                answer:
                    'Most patients see noticeable improvement in 2-3 months. Complete clearing and prevention of scarring typically takes 4-6 months.',
            },
        ],
    },
    {
        slug: 'digestive-issues',
        title: 'Digestive Issues',
        shortDescription:
            'Natural relief for IBS, acid reflux, ulcers, and chronic digestive problems.',
        description:
            'Digestive health is central to overall wellbeing. Our gentle yet effective treatments address the full spectrum of gastrointestinal issues, restoring healthy digestion and eliminating chronic discomfort.',
        icon: Leaf,
        color: 'from-green-500 to-emerald-600',
        conditions: [
            'Irritable Bowel Syndrome (IBS)',
            'Acid Reflux (GERD)',
            'Gastric Ulcers',
            'Chronic Constipation',
            'Chronic Diarrhea',
            'Ulcerative Colitis',
            'Crohn&apos;s Disease',
            'Food Intolerances',
        ],
        benefits: [
            'Improved digestion',
            'Relief from bloating',
            'Regular bowel movements',
            'Reduced acidity',
            'Better nutrient absorption',
            'No antacid dependency',
        ],
        faqs: [
            {
                question: 'Can homeopathy cure IBS permanently?',
                answer:
                    'Yes, homeopathy addresses the underlying causes of IBS including stress, gut sensitivity, and microbiome imbalance, leading to lasting relief for many patients.',
            },
            {
                question: 'Is homeopathy effective for acid reflux?',
                answer:
                    'Very effective. Most patients can stop taking antacids within 2-3 months of homeopathic treatment while experiencing complete relief from symptoms.',
            },
            {
                question: 'Can homeopathy help with IBD (Crohn&apos;s/Colitis)?',
                answer:
                    'Homeopathy can help manage IBD symptoms, reduce inflammation, and extend remission periods. It works well alongside conventional treatment.',
            },
        ],
    },
]

export function getService(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug)
}
