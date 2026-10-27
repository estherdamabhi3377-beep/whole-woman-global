# Whole Woman Global — Master Content Map

Purpose: preserve the existing 12-lesson library while assigning deeper material from the saved framework to the correct learning pathways. The 12 lessons are the current entry-level foundation, not the limits of the platform.

## Current 12 lessons and where deeper material belongs

| ID | Current lesson | Existing framework material to integrate | Placement decision |
|---|---|---|---|
| 1 | You Are More Than What You Do | Bloom Blueprint; Emotional Healing Academy; Confidence & Identity | Core identity, self-worth, identity beyond roles, shame and self-compassion |
| 2 | Know What Matters to You | Purpose & Calling; Leadership; Career & Entrepreneurship; Financial Empowerment | Values, priorities, decision-making and alignment |
| 3 | Boundaries Are a Form of Wisdom | Communication Mastery; Marriage & Intimacy; Leadership; workplace safety | Limits, assertive communication, consent, workload and safety-aware boundaries |
| 4 | Name What You Feel | Emotional Healing Academy; Mental Health Master Module | Emotional literacy, triggers, regulation, when to seek professional support |
| 5 | Rest Is Not Laziness | Emotional Healing; Mental Health; Health & Wellness | Rest, stress, sustainable routines and recognising when fatigue needs medical care |
| 6 | When Life Feels Heavy | Emotional Healing; Mental Health; Grief & Loss | Overwhelm, support-seeking, grief, crisis/safety pathways and small next steps |
| 7 | Words Build or Break Relationships | Communication Mastery; Marriage & Intimacy; Parenting; Leadership | Listening, repair, difficult conversations, parent-child communication and conflict |
| 8 | Love Needs Grace and Responsibility | Marriage & Intimacy; Parenting; Emotional Healing; Sexual Health | Trust, accountability, shared responsibility, consent and safe relationship guidance |
| 9 | Purpose Can Grow With You | Purpose & Calling; Leadership; Career & Entrepreneurship; Generosity & Legacy | Calling across seasons, strengths, experiments, career change and contribution |
| 10 | Money Is a Tool, Not Your Identity | Financial Empowerment; Career & Entrepreneurship; wealth and decision-making principles | Money awareness, planning, risk, financial agency and relationship finances |
| 11 | Your Health Deserves a Place on the Calendar | Nutrition Science; Physical Fitness & Movement; Pregnancy/Postpartum; Menopause; Mental Health | Everyday health literacy, prevention, adaptations and referral to qualified care |
| 12 | Your Next Right Step | Leadership; Career & Entrepreneurship; Purpose & Calling; all learning pathways | Turning insight into safe, measurable action and reviewing progress |

## First implementation delivered

- Added frontend/src/lessonEnrichment.ts with full teaching sections for all 12 current lessons.
- Each lesson now has four substantial teaching sections, three lesson-specific reflection questions and links to related lessons.
- Updated frontend/src/main.tsx so opening a lesson displays its full teaching, questions to reflect on, practice and related themes.
- Added responsive styles in frontend/src/styles.css for long-form reading on mobile and desktop.

## Existing framework sections identified

The saved framework.docx describes material for Emotional Healing Academy, Mental Health Master Module, Marriage & Intimacy Mastery, Parenting by Life Stage, Leadership Academy, Career & Entrepreneurship, Financial Empowerment, Nutrition Science, Physical Fitness & Movement, AI & Digital Skills, Confidence & Identity, Communication Mastery, Grief & Loss, Purpose & Calling, Generosity & Legacy, Spiritual Growth and Community & Social Connection.

Important editorial rule: the framework contains different snapshots of the project's status, including conflicting labels such as “complete,” “in progress” and “queued.” Treat those labels as planning notes, not proof that every full module is present or publication-ready. Review actual text before marking any module complete.

## Next content-development sequence

1. Expand Marriage & Intimacy Mastery into a dedicated learning pathway, using the saved framework material and adding safety-aware, evidence-informed teaching.
2. Build Parenting by Life Stage, separating early childhood, school age, teens and adult children.
3. Expand Emotional Healing and Mental Health with clear scope boundaries and professional-help guidance.
4. Build Career & Entrepreneurship and Financial Empowerment.
5. Build Health & Wellness pathways, then Spiritual Growth and Bible Reading as a dedicated, optional faith-centred pathway.
6. Add a secure AI Coach only after a backend and protected API credentials are configured. The current GitHub Pages frontend does not provide a secure place for an AI provider secret.

## Global publishing standard

Every substantial module should include: learning outcomes, a complete teaching, practical real-life examples, reflection questions, an exercise or worksheet, a knowledge check where appropriate, related lessons, and clear guidance about when to seek qualified support. Content should be accessible, culturally aware, respectful of different backgrounds, and explicit about safety. Health, mental-health, legal and financial content must not pretend to replace qualified professional advice.

## Maintenance rule

When new materials are supplied, preserve the original source in the project archive, identify the most relevant pathway(s), adapt the learning content in original wording, cross-link it to existing lessons, update this map, and verify the build and deployment. Add new lessons by stable IDs rather than replacing existing ones, so saved reflections and progress remain associated with the correct lessons.
