// ── LOVE LITTLE ME — WOUND DATA ──
// To add a new wound: add one object to this array.
// URL: education.html?wound=<id>

const WOUNDS_DATA = [
  {
    id: "abandonment",
    name: "Abandonment",
    subtitle: "The Child Who Was Left",
    chakra: "Heart Chakra",
    palette: {
      bg: "#0D1F1A",
      bg_warm: "#122620",
      bg_card: "#152E28",
      accent: "#4CAF82",
      accent_light: "#7DD4A8",
      accent_dim: "#2E7A55",
      accent_faint: "#1E4D38",
      text_light: "#C8E6D8",
      text_mid: "#8FBFA8",
      text_dim: "#5A8A72",
    },
    description: "You learned early that people leave. Not as a concept — as a fact you lived in your body. Whether a parent walked out, emotionally checked out, or was physically present but completely unreachable, the message was the same: you were not enough to make them stay.",
    what_it_is: "Abandonment wound forms when a child experiences the loss of a primary caregiver — through physical absence, emotional withdrawal, addiction, death, divorce, or chronic unavailability. The child doesn't have the cognitive ability to understand adult problems, so they do what all children do: they make it about themselves. The conclusion becomes: I am the reason they left. I am not worth staying for.",
    where_it_comes_from: "It comes from parents who left — literally or emotionally. The father who walked out and never came back. The mother who was physically present but emotionally elsewhere, numbed by depression or consumed by her own pain. The parent whose addiction meant they were gone even when they were in the room. It comes from the moments you needed someone and no one came.",
    how_it_shows_up: "You brace for abandonment in every relationship. You read silence as rejection. You interpret someone being busy as them pulling away. You push people away before they can leave you — because at least then you control the ending. You choose partners who are emotionally unavailable because that is what love felt like. You are fiercely self-sufficient because needing people has always felt dangerous.",
    why_it_matters: "This wound does not heal on its own. The child who concluded 'I am not worth staying for' grows into an adult who runs that same story in every relationship. The script needs to be rewritten — not around the adult you are now, but around the child who first received that message. That child needs to hear something different. That is what we give you.",
    signs: [
      "You feel panic when someone goes quiet or pulls back — even briefly",
      "You assume people will leave, so you either cling or push first",
      "Deep intimacy terrifies you even when you crave it",
      "You choose people who are unavailable — it feels like home",
      "You work hard to be needed so people have a reason to stay",
      "Being alone feels like confirmation that you are unlovable"
    ],
    affirmations: [
      "You did not cause them to leave.",
      "You are someone worth staying for.",
      "You will never be too much — or too little — for love.",
      "The leaving was about them. It was never about your worth."
    ],
    what_you_receive: "A personalized animated video of you as a child, held by a loving parent figure who stays — who looks at you and speaks your healing script directly to you. The words your child-self needed to hear. In a voice you choose. Yours to keep.",
    questions_preview: "After payment you will answer 5 guided questions about your specific experience — what happened, what you needed to hear, who you needed it from. Your answers shape a healing script written only for you."
  },
  {
    id: "neglect",
    name: "Neglect",
    subtitle: "The Child Whose Needs Went Unmet",
    chakra: "Root Chakra",
    palette: {
      bg: "#1A0A0A",
      bg_warm: "#220D0D",
      bg_card: "#2A1010",
      accent: "#C0392B",
      accent_light: "#E57373",
      accent_dim: "#8B1A1A",
      accent_faint: "#4A1010",
      text_light: "#F0C4C4",
      text_mid: "#C48A8A",
      text_dim: "#8A5555",
    },
    description: "Nothing dramatic happened to you. No one hit you. No one screamed. But no one showed up either. No one noticed when you were hungry, scared, sick, or sad. Your needs existed — and were consistently met with absence. That absence did as much damage as any violence.",
    what_it_is: "Neglect is the wound of absence. It is what happens when a child's basic needs — physical safety, food, warmth, touch, emotional attunement, consistent care — go chronically unmet. It is defined not by what was done to a child but by what was withheld. Because neglect leaves no visible marks, it is one of the most minimized and least validated childhood wounds. But research is clear: chronic neglect causes significant, lasting harm to brain development, attachment, and self-worth.",
    where_it_comes_from: "It comes from parents who were overwhelmed, absent, checked out, mentally ill, addicted, or simply not equipped to meet a child's needs. It comes from households where survival consumed everything and emotional attunement was a luxury no one had. It comes from being the child who learned to go quiet, stop asking, and figure it out alone — because asking led nowhere.",
    how_it_shows_up: "You do not know how to receive care. When someone offers help, you deflect. When someone asks what you need, you genuinely do not know. You became so self-sufficient out of necessity that needing anything now feels shameful. You minimize your own pain constantly. You tell yourself others have it worse. You run on empty and call it strength.",
    why_it_matters: "The child who learned their needs do not matter grows into an adult who does not advocate for themselves, who runs themselves into the ground, who cannot receive love without suspicion. The healing is not about learning to ask for help. It is about going back to the child who stopped asking — and finally giving them what they needed. That is what this video does.",
    signs: [
      "You genuinely struggle to identify what you need or want",
      "Receiving care makes you uncomfortable — it feels unearned",
      "You minimize your own pain and tell yourself others have it worse",
      "You are the person everyone leans on but you lean on no one",
      "Rest feels wrong — productivity is the only thing that feels justified",
      "A hollow longing for nurturing you cannot quite name or ask for"
    ],
    affirmations: [
      "Your needs were always valid.",
      "You deserved to be nourished, held, and attended to.",
      "It is safe to let someone take care of you now.",
      "You are allowed to need things — and to receive them fully."
    ],
    what_you_receive: "A personalized animated video where your younger self is finally nourished — seen, attended to, held — with a loving parent figure speaking your healing script with complete attention and warmth.",
    questions_preview: "After payment you will answer 5 guided questions about what went unmet and what your child-self most needed. Your answers shape a healing script that speaks directly to your specific hunger."
  },
  {
    id: "emotional-abuse",
    name: "Emotional Abuse",
    subtitle: "The Child Who Was Hurt With Words",
    chakra: "Throat Chakra",
    palette: {
      bg: "#0A0F1A",
      bg_warm: "#0D1422",
      bg_card: "#101828",
      accent: "#2E6DB4",
      accent_light: "#6AABDF",
      accent_dim: "#1A4A80",
      accent_faint: "#0F2D50",
      text_light: "#C4D8F0",
      text_mid: "#8AAED4",
      text_dim: "#557AA0",
    },
    description: "The words became a voice inside you. One that sounds like your own but is not. It tells you that you are stupid, worthless, too sensitive, a burden, a disappointment. You believe it because a child always believes what the people who are supposed to love them say. Those words were a lie. But they are still running.",
    what_it_is: "Emotional abuse is the systematic use of words, tone, silence, and behavior to undermine a child's sense of self. It includes constant criticism, humiliation, name-calling, ridicule, emotional manipulation, threats, gaslighting, and conditional love. Unlike physical abuse, it leaves no marks — which makes it easy to deny, minimize, and dismiss. But emotional abuse reshapes a child's brain and self-concept in ways that persist for decades.",
    where_it_comes_from: "It comes from parents who weaponized language. Who criticized everything. Who held love hostage to performance. Who said things like 'I'll give you something to cry about.' Who called you stupid, fat, lazy, worthless, dramatic. Who compared you unfavorably to siblings or other children. Who withheld affection as punishment. Who mocked your feelings. Who made you feel their unhappiness was your fault.",
    how_it_shows_up: "You have a relentless inner critic that never stops. It narrates your failures in real time. It tells you that you are not smart enough, not attractive enough, not productive enough, not enough period. You work harder than anyone but feel like a fraud. You cannot take a compliment. Praise makes you suspicious. You apologize constantly — for your opinions, your needs, your existence.",
    why_it_matters: "The critical voice was installed by someone who had no right to put it there. It is not the truth about you — it is a recording of someone else's dysfunction. But it runs on automatic, and it is destroying your relationship with yourself. The only way to quiet it is to go back to the child who first heard those words — and give them something true to hold onto instead. That is what this video does.",
    signs: [
      "A constant inner critic harsher than you would ever be to anyone else",
      "Difficulty accepting compliments — praise feels false or makes you anxious",
      "Perfectionism as armor — if you are perfect, no one can criticize you",
      "Chronic shame with no specific source — just a feeling of being wrong",
      "You apologize reflexively — for opinions, for existing, for taking up space",
      "You shrink yourself in groups, terrified of saying something stupid"
    ],
    affirmations: [
      "You were always enough — exactly as you were.",
      "Your worth was never conditional on your performance.",
      "The critical voice was never the truth about you.",
      "You deserved to be spoken to with kindness, patience, and love."
    ],
    what_you_receive: "A personalized animated video where your younger self hears something completely different — a loving parent figure speaking words of unconditional pride, truth, and encouragement. The antidote to every lie you were told.",
    questions_preview: "After payment you will answer 5 guided questions about the specific words that hurt most and what you needed to hear instead. Your script replaces the old voice with something true."
  },
  {
    id: "enmeshment",
    name: "Enmeshment",
    subtitle: "The Child Who Was Never Allowed to Be Themselves",
    chakra: "Solar Plexus Chakra",
    palette: {
      bg: "#1A1700",
      bg_warm: "#221E00",
      bg_card: "#2A2500",
      accent: "#C9A800",
      accent_light: "#E8CC4A",
      accent_dim: "#8A7200",
      accent_faint: "#4A3E00",
      text_light: "#F0E8B0",
      text_mid: "#C4B870",
      text_dim: "#8A8040",
    },
    description: "You were never allowed to be a separate person. Your feelings were managed, your preferences overridden, your identity absorbed. You were an extension of your parent — not a human being with your own inner life. You are still trying to figure out where they end and you begin.",
    what_it_is: "Enmeshment happens when the psychological boundary between parent and child is dissolved — when a parent cannot tolerate their child being separate, having different feelings, different opinions, or different needs. The child's role becomes to reflect, validate, manage, and soothe the parent rather than develop their own identity. Enmeshment is often disguised as closeness or love. It is neither. It is a form of control that prevents a child from ever fully becoming themselves.",
    where_it_comes_from: "It comes from parents who could not distinguish their own emotions from their child's. Who were threatened by their child's independence or differing opinions. Who made their child responsible for their emotional state. Who said things like 'you are all I have' or 'how could you do this to me.' Who treated their child as a confidant or emotional partner. Who responded to the child's individuality with guilt, withdrawal, or punishment.",
    how_it_shows_up: "You do not know what you actually want — separate from what others want for you. Making decisions is agonizing. You feel guilty whenever you prioritize yourself. You lose yourself in relationships, absorbing your partner's moods and reality. You feel responsible for other people's emotional states. You have a persistent, vague sense that you do not know who you are.",
    why_it_matters: "You cannot build a life that is genuinely yours when you were never allowed to know who you are. The work of healing enmeshment starts with meeting the child who was never permitted to be separate — and finally telling them: you are your own person. You always were. Your feelings belong to you. Your life is yours. That is what this video gives your younger self.",
    signs: [
      "Chronic difficulty knowing what you want, feel, or believe separate from others",
      "Guilt that activates the moment you prioritize yourself",
      "You absorb other people's moods and emotions as if they were your own",
      "Conflict feels catastrophic — disagreement feels like the relationship is ending",
      "A vague identity — you know who you are in relation to others but not alone",
      "You have lived your life according to someone else's script"
    ],
    affirmations: [
      "You are allowed to be a completely separate person.",
      "Your feelings are your own — not anyone else's to manage or override.",
      "You were always allowed to want different things.",
      "Your life belongs to you."
    ],
    what_you_receive: "A personalized animated video where your younger self is celebrated as a complete, separate, wonderful individual — with a loving parent figure honoring exactly who you are, not who they needed you to be.",
    questions_preview: "After payment you will answer 5 guided questions about who you were beneath the role you were assigned. Your script speaks to the self that was always there, waiting to be seen."
  },
  {
    id: "shame",
    name: "Shame",
    subtitle: "The Child Who Was Made to Feel Broken",
    chakra: "Sacral Chakra",
    palette: {
      bg: "#1A0D00",
      bg_warm: "#221200",
      bg_card: "#2A1800",
      accent: "#E07B20",
      accent_light: "#F0A855",
      accent_dim: "#A05010",
      accent_faint: "#4A2200",
      text_light: "#F0D4B0",
      text_mid: "#C4A070",
      text_dim: "#8A6840",
    },
    description: "This is not guilt — guilt says you did something bad. Shame says you are bad. It targets your identity, not your behavior. And it was taught to you. Through humiliation, through punishment of your natural feelings, through words and silences that told you something about you — at your core — was wrong.",
    what_it_is: "Toxic shame is the internalized belief that one is fundamentally defective, unworthy, or unlovable — not because of what one did, but because of who one is. It is one of the most painful and pervasive wounds in existence. Unlike healthy guilt, which motivates repair, toxic shame collapses the self. It lives in the body — in the way a person holds themselves, averts their eyes, shrinks in rooms, and hides the parts of themselves they were taught to find unacceptable.",
    where_it_comes_from: "It comes from being humiliated — publicly or privately. From parents who shamed your body, your emotions, your sexuality, your curiosity, your needs, your mistakes. From religion used as a weapon. From households where certain feelings were forbidden. From being laughed at when you cried. From being told you were too sensitive, too much, attention-seeking. From silence — the kind that told you certain parts of you were too disgusting to acknowledge.",
    how_it_shows_up: "You hide. Not physically — but you hide the parts of yourself you were taught were unacceptable. You perform a version of yourself in public that feels safer. Deep intimacy terrifies you because being truly known feels like being truly rejected. You sabotage good things because you do not believe you deserve them. Compliments make you want to disappear.",
    why_it_matters: "Shame cannot be thought away. It cannot be argued with. It has to be met with its opposite — radical, unconditional acceptance. The child who was made to feel broken needs to be looked at directly and told: there is nothing wrong with you. There never was. Every part of you was always acceptable. That is what this video gives your younger self — not reassurance, but truth.",
    signs: [
      "A persistent sense of being fundamentally flawed that you cannot logic your way out of",
      "You hide significant parts of yourself — even from people you trust",
      "Compliments and praise make you deeply uncomfortable",
      "You believe you do not deserve good things — and you find ways to prove it",
      "You have difficulty being truly known by another person",
      "Shame spirals that are disproportionate to what triggered them"
    ],
    affirmations: [
      "There is nothing wrong with who you are.",
      "You were born worthy of love — every part of you.",
      "The shame was never yours to carry.",
      "You are allowed to be fully seen — and fully loved exactly as you are."
    ],
    what_you_receive: "A personalized animated video of radical acceptance — your younger self seen completely, with nothing hidden, loved without condition by a parent figure who embraces every part of you.",
    questions_preview: "After payment you will answer 5 guided questions about the specific parts of yourself that were shamed. Your script speaks directly to those places with truth and complete acceptance."
  },
  {
    id: "unsafe-home",
    name: "Unsafe Home",
    subtitle: "The Child Who Never Felt Safe",
    chakra: "Root Chakra",
    palette: {
      bg: "#140808",
      bg_warm: "#1C0A0A",
      bg_card: "#240C0C",
      accent: "#8B1A1A",
      accent_light: "#C0392B",
      accent_dim: "#5A1010",
      accent_faint: "#380808",
      text_light: "#F0C0C0",
      text_mid: "#C48080",
      text_dim: "#8A5050",
    },
    description: "Home was supposed to be the one place in the world you could exhale. It was not. Whether it was violence, addiction, chaos, or the specific terror of not knowing which version of a parent you would come home to — your nervous system learned that safety was not something you got to have.",
    what_it_is: "An unsafe home wound forms when a child grows up in an environment of chronic threat — whether physical violence, domestic abuse, parental addiction, severe mental illness, explosive unpredictability, or persistent chaos. The child's brain, designed for survival, rewires itself. The stress response meant to activate occasionally becomes the permanent baseline. Hypervigilance — the constant scanning for danger — becomes a way of life that does not turn off when the child leaves.",
    where_it_comes_from: "It comes from homes where you walked on eggshells. Where you learned to read a parent's footsteps on the stairs and know within seconds what kind of night it was going to be. Where violence — or the threat of it — shaped every moment. Where addiction meant the person who was supposed to protect you was the source of danger. Where chaos was the only constant and safety was a thing other people had.",
    how_it_shows_up: "Your nervous system never fully settled. You are always waiting for the other shoe to drop. In relationships that are genuinely safe, you still brace for rupture. Ordinary conflict floods you. Raised voices and certain tones trigger a physical response that bypasses logic. You are exhausted from vigilance you cannot turn off. Rest feels unsafe — like letting your guard down.",
    why_it_matters: "The child who learned that home was dangerous grows into an adult whose body is still braced for impact. No amount of adult reasoning tells the nervous system it is safe now. Healing requires going back to the child in that house — and giving them something they never had: a parent who is safe, a place that is calm, words that mean: you are protected. I have you. That is what this video gives your younger self.",
    signs: [
      "Hypervigilance — constantly scanning for what might go wrong",
      "Difficulty relaxing or being present even in genuinely safe environments",
      "Physical anxiety responses triggered by tone of voice, raised volume, or tension",
      "You became a peacekeeper — your job was to manage the mood of the house",
      "Conflict, even healthy disagreement, floods your system",
      "Rest has never felt fully safe — letting your guard down feels like a risk"
    ],
    affirmations: [
      "It was not your job to keep the peace.",
      "You deserved a home that felt like safety and rest.",
      "You are allowed to feel safe now — in your body, in your life.",
      "The danger has passed. You are allowed to exhale."
    ],
    what_you_receive: "A personalized animated video of stillness and safety — your younger self held in a warm, calm place by a loving parent figure who means every word: you are safe here. I have you. Nothing will hurt you.",
    questions_preview: "After payment you will answer 5 guided questions about what unsafe felt like and what safety would have looked like for you. Your script creates the sanctuary you never had."
  },
  {
    id: "divorce",
    name: "Divorce & Family Rupture",
    subtitle: "The Child Caught in the Middle",
    chakra: "Heart Chakra",
    palette: {
      bg: "#1A0D10",
      bg_warm: "#221218",
      bg_card: "#2A1520",
      accent: "#C0527A",
      accent_light: "#E087A8",
      accent_dim: "#8A2A4A",
      accent_faint: "#4A1228",
      text_light: "#F0C4D4",
      text_mid: "#C488A0",
      text_dim: "#8A5568",
    },
    description: "You were too young to understand what was happening and too aware not to feel every bit of it. You loved people who could not be in the same room. And somewhere in the chaos of their ending, your own needs — your grief, your confusion, your loss — went largely unwitnessed.",
    what_it_is: "The divorce wound is not simply about parents separating. It is about what that separation does to a child — the loyalty binds, the parentification, the loss of the family as a unit, the exposure to adult conflict and pain, and the complete disruption of the child's sense of stability and security. When handled poorly, children become messengers, spies, emotional support for grieving adults, and pawns in adult conflicts. Their own grief rarely gets space.",
    where_it_comes_from: "It comes from being put in the middle — explicitly or implicitly. From being used as a messenger between two people who could not speak. From having to manage a devastated parent's emotions. From feeling guilty for loving the other parent. From parents who spoke about each other with contempt in front of you, or who interrogated you about the other household. From having to choose, over and over, in ways no child should ever have to choose.",
    how_it_shows_up: "You are a skilled mediator — because you had to be. Conflict between people you love sends you into a panicked need to fix it. You feel guilty when you favor one person over another. You have grief about the family you never got to have — a grief that was never witnessed because everyone was too busy surviving the rupture. You may believe, somewhere deep, that families just fall apart.",
    why_it_matters: "The child caught in the middle never got to simply be a child. They never got to grieve what was lost. They never got to love both parents freely without guilt. They carried adult weight. This video goes back to that child and does something simple but profound: it removes the weight. It gives them permission to grieve. It tells them it was never their fault, it was never their job, and they deserved to be held through it.",
    signs: [
      "You feel responsible for managing conflict between people you love",
      "Choosing between people — even trivially — activates guilt and anxiety",
      "Grief about the family you lost that has never had space to be felt",
      "A belief somewhere beneath everything that love does not last",
      "You became the one who holds everyone together — at cost to yourself",
      "Loyalty feels like a constant, impossible tension"
    ],
    affirmations: [
      "It was never your fault.",
      "You were not responsible for keeping them together.",
      "You deserved to love both of them freely, without guilt.",
      "Your grief about what was lost was always real and always valid."
    ],
    what_you_receive: "A personalized animated video where you are finally just a child — released from the middle, from the weight, from the loyalty bind — held by a loving parent figure who takes it all from your shoulders.",
    questions_preview: "After payment you will answer 5 guided questions about what the rupture took from you. Your script speaks to the specific losses and the child who was never allowed to simply grieve."
  }

  // ── ADD NEW WOUNDS BELOW THIS LINE ──
];

function getWoundById(id) {
  return WOUNDS_DATA.find(w => w.id === id) || null;
}
