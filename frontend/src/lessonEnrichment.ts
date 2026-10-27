export type TeachingSection = { heading: string; body: string };
export type LessonEnrichment = { teaching: TeachingSection[]; reflectionQuestions: string[]; related: string[] };

export const lessonEnrichment: Record<number, LessonEnrichment> = {
  1: {
    teaching: [
      { heading: "Your worth comes before your roles", body: "You may be a daughter, wife, mother, friend, employee, leader, caregiver, or business owner. These roles matter, but none of them contains the whole of you. When identity becomes tied only to performance, an ordinary mistake can feel like proof that you are not enough. A more grounded identity allows you to take responsibility for your choices without turning every outcome into a verdict on your value." },
      { heading: "Notice the hidden rules", body: "Many women carry silent rules: I must always be available; I must not disappoint anyone; I must be strong; I must earn rest; I must succeed before I can feel proud of myself. These rules can look like dedication while quietly producing exhaustion, resentment, and shame. Ask where each rule came from and whether it still serves the life you want to build." },
      { heading: "Practise dignity and responsibility together", body: "Knowing your worth does not mean avoiding feedback or refusing to grow. It means you can say, 'I made a mistake, and I can repair it,' instead of, 'I am a mistake.' You can celebrate another woman's success without treating it as evidence against your own. You can begin again without erasing what you have learned." },
      { heading: "Bring it into daily life", body: "At home, at work, in friendship, and in leadership, make choices from values rather than from the constant need to prove yourself. Give yourself the same fair, honest encouragement you would offer someone you love. Where you need to apologise, learn, or seek help, do so from dignity—not self-contempt." }
    ],
    reflectionQuestions: ["Which role has been consuming most of my identity lately?", "What do I fear people would think if I stopped over-proving myself?", "What is one kind, responsible action I can take without measuring my worth by the outcome?"],
    related: ["Know What Matters to You", "Rest Is Not Laziness", "Your Next Right Step"]
  },
  2: {
    teaching: [
      { heading: "Values are the compass beneath your choices", body: "Values are the qualities you want your life to express—perhaps faith, integrity, family, learning, health, courage, service, creativity, or freedom. Goals are destinations; values guide how you travel. You can achieve a goal in a way that damages what matters most, so success needs both direction and a way of measuring whether the journey is aligned." },
      { heading: "Separate your values from borrowed expectations", body: "Family, culture, social media, workplaces, and religious communities can all influence what you believe a successful woman should look like. Some expectations may be wise; others may not fit your season or circumstances. Rather than rejecting everything or obeying everything, examine each expectation thoughtfully: does it align with my convictions, responsibilities, wellbeing, and the kind of person I want to become?" },
      { heading: "Make values visible", body: "A value becomes useful when it changes a decision. If health matters, it should appear somewhere in your schedule. If family connection matters, it needs protected attention. If financial stability matters, you need honest awareness of income, spending, and obligations. If spiritual growth matters, choose a rhythm you can actually sustain. The calendar, conversations, and repeated choices reveal priorities more clearly than good intentions alone." },
      { heading: "Review without condemning yourself", body: "Life seasons change. A value may remain important while the way you practise it changes because of illness, caregiving, study, work, or new responsibilities. Review your priorities regularly and make adjustments with honesty rather than shame. Alignment is a practice, not a perfect score." }
    ],
    reflectionQuestions: ["Which three values do I most want my life to express?", "Where do my current commitments conflict with those values?", "What one decision this week could bring my life into better alignment?"],
    related: ["Boundaries Are a Form of Wisdom", "Money Is a Tool, Not Your Identity", "Your Health Deserves a Place on the Calendar"]
  },
  3: {
    teaching: [
      { heading: "A boundary tells the truth about capacity", body: "A boundary is a clear limit around your time, energy, body, resources, privacy, or participation. It is not a tool for controlling another person; it is a way of explaining what you can do and what you will do if a situation continues. Healthy boundaries protect connection from the resentment that grows when someone repeatedly agrees beyond their capacity." },
      { heading: "Kindness does not require unlimited access", body: "You can care about someone and still say no, ask for notice, decline a request, or end a conversation that has become insulting. A respectful boundary may disappoint another person, but their disappointment does not automatically mean you have done something wrong. At the same time, boundaries should be clear, proportionate, and respectful—not threats or punishment." },
      { heading: "Use clear, calm language", body: "Try: 'I want to help, but I cannot take this on today.' 'I am willing to discuss the issue, but not while we are shouting.' 'Please ask before sharing my personal information.' 'I can contribute this amount, but I cannot cover the full cost.' Specific language is easier to understand than hints, silent tests, or explanations that continue until the other person agrees." },
      { heading: "Plan for the response", body: "Some people will respect a new limit; others may resist because the old pattern benefited them. Repeat your boundary calmly and follow through where it is safe to do so. If saying no could expose you to violence, coercion, job loss, or other serious harm, prioritise safety and seek trusted, qualified support rather than treating direct confrontation as a requirement." }
    ],
    reflectionQuestions: ["Where am I saying yes while feeling resentment or exhaustion?", "What limit would protect both my wellbeing and the relationship?", "What exact sentence can I practise, and what support might I need to use it safely?"],
    related: ["Words Build or Break Relationships", "Love Needs Grace and Responsibility", "Rest Is Not Laziness"]
  },
  4: {
    teaching: [
      { heading: "Feelings are signals, not commands", body: "Emotions provide information about how you are experiencing a situation. Anger may signal a crossed limit; sadness may accompany loss; fear may point to uncertainty or danger; joy may reveal connection or meaning. A feeling deserves attention, but it does not automatically tell the whole story or dictate the next action." },
      { heading: "Name the experience more precisely", body: "Instead of 'I feel bad,' try naming the closest feeling: disappointed, anxious, embarrassed, lonely, overwhelmed, relieved, or hopeful. Then separate the event from the interpretation. For example: 'My message has not received a reply' is an observation; 'Nobody values me' is an interpretation. This distinction creates room to check facts before reacting." },
      { heading: "Pause, notice, choose", body: "Give yourself a short pause. Notice what is happening in your body, take a few comfortable breaths, name the feeling, and ask what you need: information, rest, repair, reassurance, a limit, or help? Choose a response that protects your values. You do not have to suppress emotion, and you do not have to release every emotion through an immediate message or argument." },
      { heading: "When more support is needed", body: "Persistent distress, panic, numbness, sleep disruption, or difficulty functioning deserves care—not blame. A trusted person or qualified mental-health professional can help you understand what is happening. If you feel in immediate danger or might harm yourself or someone else, contact local emergency services or a crisis support service in your area." }
    ],
    reflectionQuestions: ["What feeling has visited me most often recently?", "What happened, and what meaning have I attached to it?", "What would a wise and caring response to this feeling look like?"],
    related: ["When Life Feels Heavy", "Words Build or Break Relationships", "Boundaries Are a Form of Wisdom"]
  },
  5: {
    teaching: [
      { heading: "Rest is part of sustainable effort", body: "Rest is not a prize reserved for people who have finished every task. Most lives do not reach a point where every responsibility is complete. Sleep, quiet, recreation, spiritual stillness, and breaks help people recover attention and energy. Treating exhaustion as proof of commitment can make it harder to notice when a routine is no longer sustainable." },
      { heading: "Look beyond sleep alone", body: "Different forms of rest answer different needs. Physical rest may mean sleep or gentle recovery; mental rest may mean stepping away from constant decisions; sensory rest may mean reducing noise and screens; emotional rest may mean speaking honestly with someone safe; social rest may mean time alone or time with people around whom you do not need to perform." },
      { heading: "Rest within real responsibilities", body: "Caregiving, shift work, parenting, financial pressure, and health conditions can make rest difficult. Start with realistic changes rather than an ideal routine you cannot maintain. Ask for a fair division of work, prepare for tomorrow before bedtime, protect a short pause, or seek help where possible. Rest is not a substitute for solving unfair burdens, but it can support you while you address them." },
      { heading: "Take persistent exhaustion seriously", body: "If tiredness is severe, prolonged, new, or accompanied by other symptoms, consider speaking with a qualified healthcare professional. Do not assume every symptom is simply stress or a lack of faith. Caring for yourself includes seeking appropriate care." }
    ],
    reflectionQuestions: ["What kind of rest am I missing most: physical, mental, emotional, sensory, or social?", "What belief makes rest feel undeserved?", "What small, realistic period of rest can I protect this week?"],
    related: ["Your Health Deserves a Place on the Calendar", "Boundaries Are a Form of Wisdom", "When Life Feels Heavy"]
  },
  6: {
    teaching: [
      { heading: "Overwhelm is a signal to reduce the load", body: "When several pressures arrive together, the mind can treat every problem as urgent and every unfinished task as evidence of failure. Instead of trying to solve your whole life at once, write down what is happening. Separate what needs action today, what can wait, what is outside your control, and what requires another person's help." },
      { heading: "Choose the next safe, useful step", body: "A next step should be small enough to begin. It might be making one appointment, asking for an extension, preparing a simple meal, checking a bill, telling a trusted person the truth, or resting before making a major decision. Small steps do not make a serious problem small; they make movement possible while you work through it." },
      { heading: "Let support be part of strength", body: "People are not designed to carry every burden alone. Ask for specific help: 'Could you stay with the children for an hour?' 'Can you help me understand this form?' 'I am struggling and need someone to listen.' Where the issue requires specialist knowledge—medical, legal, financial, or mental-health support—seek an appropriate professional rather than relying only on general advice." },
      { heading: "Make room for safety and recovery", body: "If you are facing abuse, threats, coercion, or immediate danger, the priority is safety, not simply better time management or communication. Reach out to trusted local support and emergency services where needed. After a difficult season, recovery may be gradual; measure progress by the next helpful action, not by whether you feel completely fine." }
    ],
    reflectionQuestions: ["What is making life feel heavy right now?", "Which part needs action first, and which part can wait?", "Who could help me with one specific task or decision?"],
    related: ["Name What You Feel", "Rest Is Not Laziness", "Your Next Right Step"]
  },
  7: {
    teaching: [
      { heading: "Words shape the emotional climate", body: "Communication affects whether people feel safe enough to be honest, whether a conflict can be repaired, and whether a home or workplace becomes a place of dignity. Words do not control every outcome, and no woman is responsible for another person's harmful behaviour. Still, the way we speak can either clarify the issue or add humiliation and confusion to it." },
      { heading: "Speak about behaviour, not a person's worth", body: "Compare 'You are useless' with 'When the agreed task is not done, I feel left alone with the responsibility. Can we decide who will handle it and by when?' The second sentence identifies a behaviour, its impact, and a request. Avoid insults, threats, contempt, public shaming, and using private vulnerabilities as weapons." },
      { heading: "Listen to understand before answering", body: "Listening does not mean agreeing with everything. It means giving the other person enough attention to understand what they are saying, then checking your understanding: 'Are you saying you felt ignored when I made that decision without you?' This can uncover the real issue beneath a repeated argument. If the conversation becomes unsafe or abusive, pause and seek support rather than forcing it to continue." },
      { heading: "Repair when words cause harm", body: "A useful apology names what you did, acknowledges its impact, avoids excuses, and explains what you will try to change. 'I interrupted and dismissed what you were saying. That was disrespectful. I am sorry. I will let you finish before I respond.' Trust is rebuilt through consistent behaviour, not a single perfect sentence." }
    ],
    reflectionQuestions: ["Which words do I tend to use when I feel hurt or defensive?", "What might the other person be experiencing that I have not yet understood?", "What difficult message can I make clearer and more respectful without hiding the truth?"],
    related: ["Boundaries Are a Form of Wisdom", "Love Needs Grace and Responsibility", "Know What Matters to You"]
  },
  8: {
    teaching: [
      { heading: "Love needs both care and responsibility", body: "Healthy relationships are not sustained by affection alone. They also need honesty, reliability, mutual respect, shared effort, and the willingness to repair harm. Grace makes room for human imperfection; responsibility asks what must change. When one is missing, a relationship may become either harsh and unforgiving or endlessly excusing behaviour that continues to hurt." },
      { heading: "Marriage and partnership are lived practices", body: "In marriage or committed partnership, connection is built through everyday decisions: sharing the mental load, discussing money honestly, making time for friendship, handling conflict without humiliation, respecting consent, and noticing when one person is carrying too much. Couples may have different cultural, faith, or family expectations; the task is to discuss them openly rather than assuming one person's expectations are universal." },
      { heading: "Trust grows through repeated evidence", body: "When trust has been damaged, promises alone rarely repair it. The person who caused harm needs to take responsibility and demonstrate change over time; the person who was hurt needs room to decide what they can safely rebuild. Forgiveness, reconciliation, and restored access are not identical. No one is required to remain in a violent or coercive situation to prove they are loving or forgiving." },
      { heading: "Care for relationships beyond marriage", body: "The same principles apply to parenting, friendship, extended family, work, and leadership. Show care through follow-through. Ask for what you need directly. Set limits when necessary. Notice patterns instead of judging a relationship by one good or bad day. Where conflict becomes entrenched, counselling or another suitable form of professional support may help, provided it is safe to participate." }
    ],
    reflectionQuestions: ["Where does a relationship in my life need more care, honesty, or shared responsibility?", "What pattern needs to change—not just be apologised for?", "What is one safe, specific action that could support repair or a clearer boundary?"],
    related: ["Words Build or Break Relationships", "Boundaries Are a Form of Wisdom", "Name What You Feel"]
  },
  9: {
    teaching: [
      { heading: "Purpose can develop across seasons", body: "Purpose is not always one grand discovery. It may emerge through strengths you develop, problems you care about, people you serve, and responsibilities you choose. A season of parenting, study, recovery, paid work, caregiving, or rebuilding may change how you express purpose without making your life meaningless." },
      { heading: "Use curiosity as evidence", body: "Notice the activities that engage you, the problems people trust you to help solve, the skills you are willing to practise, and the values you do not want to compromise. These clues are more useful than waiting for perfect certainty. Test a direction through a small project, a conversation with someone in the field, a course, volunteering, or a modest business experiment." },
      { heading: "Purpose must meet practical reality", body: "A meaningful direction still needs resources, boundaries, planning, and feedback. Consider your time, health, family responsibilities, finances, and the skills you need to build. You do not have to abandon stability to honour purpose; sometimes the wiser route is to prepare carefully while taking one manageable step." },
      { heading: "Let growth include revision", body: "Changing direction after learning more is not automatically failure. Review what is working, what is draining you, and what impact you are having. Ask trusted people for honest feedback, but do not give every opinion equal authority over your life. Purpose becomes clearer when reflection is followed by thoughtful action." }
    ],
    reflectionQuestions: ["What meaningful problem or contribution keeps drawing my attention?", "Which strength or skill could I develop further?", "What small experiment can I complete in the next month to test a direction?"],
    related: ["Your Next Right Step", "Know What Matters to You", "Money Is a Tool, Not Your Identity"]
  },
  10: {
    teaching: [
      { heading: "Money is information, not identity", body: "Income, savings, debt, and financial setbacks describe part of your current situation; they do not measure your dignity or potential. Shame often encourages avoidance, while honest information makes planning possible. Begin with what is true today, even if the numbers are uncomfortable." },
      { heading: "Build a clear picture", body: "List reliable income, essential expenses, debt obligations, dependants' needs, and irregular costs. Track spending for a short period without insulting yourself for what you discover. Distinguish essentials, commitments, wants, and future goals. If your income is insufficient for basic needs, the answer is not simply to budget harder; you may need support, income options, debt advice, or a change in circumstances." },
      { heading: "Create habits that protect future choices", body: "Where possible, build a small emergency buffer, review recurring expenses, understand the terms of loans, and avoid investments you cannot explain. Be cautious of guaranteed high returns, pressure to act immediately, secret schemes, and requests to transfer money to unlock promised profits. Seek qualified, regulated advice for complex financial decisions." },
      { heading: "Include relationships and agency", body: "Money conversations affect couples, families, parenting, caregiving, and business. Agree on responsibilities where it is safe and appropriate, discuss major decisions, and protect access to essential documents and information. Financial control or forced dependence can be a form of abuse; if that describes your situation, prioritise safety and seek trusted local support." }
    ],
    reflectionQuestions: ["What do I currently know—and not know—about my financial picture?", "What money belief or fear is influencing my decisions?", "What one practical step would improve clarity or protection this week?"],
    related: ["Know What Matters to You", "Your Next Right Step", "Your Health Deserves a Place on the Calendar"]
  },
  11: {
    teaching: [
      { heading: "Health is part of the life you are building", body: "Health influences how you work, care for others, learn, relate, and pursue your goals. It deserves attention before a crisis, not only after exhaustion or symptoms force you to stop. Your circumstances may limit what is possible, so focus on realistic support rather than comparing your routine with someone else's." },
      { heading: "Build a sustainable foundation", body: "Regular sleep where possible, varied nourishing food, movement suited to your body, hydration, social connection, and preventive healthcare can support wellbeing. Small repeatable habits often last longer than dramatic plans. If you have a disability, chronic illness, pregnancy-related needs, or other medical considerations, adapt advice with a qualified healthcare professional." },
      { heading: "Use appointments and information wisely", body: "Keep track of symptoms, medicines, allergies, and questions for a clinician. Follow recommended screenings and seek professional care for new, severe, or persistent symptoms. Online content can support learning, but it cannot examine you or replace individual medical assessment. Avoid stopping prescribed treatment because of a social media claim or an unverified remedy." },
      { heading: "Make health compatible with real life", body: "Put one health-supporting action on your calendar and consider what could prevent it. You may need childcare, transport, money, workplace flexibility, or help from family. Asking for support is part of planning. Health is not a moral test; when a habit is difficult to sustain, review the barriers and adjust the plan." }
    ],
    reflectionQuestions: ["What part of my wellbeing have I been postponing?", "What barrier makes healthy choices difficult in my current circumstances?", "What realistic action can I schedule, and what support would make it easier?"],
    related: ["Rest Is Not Laziness", "Money Is a Tool, Not Your Identity", "When Life Feels Heavy"]
  },
  12: {
    teaching: [
      { heading: "Clarity often comes after movement", body: "Waiting until you feel completely ready can keep an important decision frozen. You may not be able to solve every uncertainty before you begin, but you can often identify a small, reversible, useful step. Action gives you information that thinking alone cannot provide." },
      { heading: "Make the next step specific", body: "Replace 'I need to fix my finances' with 'I will list my essential expenses this evening.' Replace 'I need a better relationship' with 'I will ask for a calm conversation about one specific issue.' A useful step has a clear action, a realistic time, and a way to know it happened." },
      { heading: "Distinguish courage from rushing", body: "Not every situation calls for immediate action. Major medical, legal, financial, career, or relationship decisions may require evidence, advice, planning, or safety considerations. A next right step might be gathering information, asking a qualified professional, making a safety plan, or deciding not to act until you understand the risks." },
      { heading: "Review and continue", body: "After taking a step, notice what you learned. Did it help? What changed? What is the next decision? Progress is often a sequence of thoughtful adjustments rather than a dramatic transformation. Celebrate follow-through, and treat setbacks as information for the next attempt." }
    ],
    reflectionQuestions: ["What am I postponing because I want certainty first?", "What is the smallest safe and useful action I can take within 24 hours?", "What information or support do I need before moving further?"],
    related: ["Purpose Can Grow With You", "Know What Matters to You", "When Life Feels Heavy"]
  }
};
