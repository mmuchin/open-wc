// @ts-nocheck
/* istanbul ignore file */
/* eslint-disable */
function t(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
function e(t) {
  return (t && t.default) || t;
}
var r = e(
    Object.freeze({
      default: {
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376,
      },
    }),
  ),
  i = function(t) {
    if ((t >= 55296 && t <= 57343) || t > 1114111) return '�';
    t in r && (t = r[t]);
    var e = '';
    t > 65535 &&
      ((t -= 65536),
      (e += String.fromCharCode(((t >>> 10) & 1023) | 55296)),
      (t = 56320 | (1023 & t)));
    return (e += String.fromCharCode(t));
  };
var n = {
    Aacute: 'Á',
    aacute: 'á',
    Abreve: 'Ă',
    abreve: 'ă',
    ac: '∾',
    acd: '∿',
    acE: '∾̳',
    Acirc: 'Â',
    acirc: 'â',
    acute: '´',
    Acy: 'А',
    acy: 'а',
    AElig: 'Æ',
    aelig: 'æ',
    af: '⁡',
    Afr: '𝔄',
    afr: '𝔞',
    Agrave: 'À',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    Alpha: 'Α',
    alpha: 'α',
    Amacr: 'Ā',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    AMP: '&',
    andand: '⩕',
    And: '⩓',
    and: '∧',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angmsd: '∡',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    Aogon: 'Ą',
    aogon: 'ą',
    Aopf: '𝔸',
    aopf: '𝕒',
    apacir: '⩯',
    ap: '≈',
    apE: '⩰',
    ape: '≊',
    apid: '≋',
    apos: "'",
    ApplyFunction: '⁡',
    approx: '≈',
    approxeq: '≊',
    Aring: 'Å',
    aring: 'å',
    Ascr: '𝒜',
    ascr: '𝒶',
    Assign: '≔',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    Backslash: '∖',
    Barv: '⫧',
    barvee: '⊽',
    barwed: '⌅',
    Barwed: '⌆',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    Bcy: 'Б',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    Because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    Bfr: '𝔅',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bNot: '⫭',
    bnot: '⌐',
    Bopf: '𝔹',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxbox: '⧉',
    boxdl: '┐',
    boxdL: '╕',
    boxDl: '╖',
    boxDL: '╗',
    boxdr: '┌',
    boxdR: '╒',
    boxDr: '╓',
    boxDR: '╔',
    boxh: '─',
    boxH: '═',
    boxhd: '┬',
    boxHd: '╤',
    boxhD: '╥',
    boxHD: '╦',
    boxhu: '┴',
    boxHu: '╧',
    boxhU: '╨',
    boxHU: '╩',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxul: '┘',
    boxuL: '╛',
    boxUl: '╜',
    boxUL: '╝',
    boxur: '└',
    boxuR: '╘',
    boxUr: '╙',
    boxUR: '╚',
    boxv: '│',
    boxV: '║',
    boxvh: '┼',
    boxvH: '╪',
    boxVh: '╫',
    boxVH: '╬',
    boxvl: '┤',
    boxvL: '╡',
    boxVl: '╢',
    boxVL: '╣',
    boxvr: '├',
    boxvR: '╞',
    boxVr: '╟',
    boxVR: '╠',
    bprime: '‵',
    breve: '˘',
    Breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    Bscr: 'ℬ',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsolb: '⧅',
    bsol: '\\',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    Bumpeq: '≎',
    bumpeq: '≏',
    Cacute: 'Ć',
    cacute: 'ć',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    cap: '∩',
    Cap: '⋒',
    capcup: '⩇',
    capdot: '⩀',
    CapitalDifferentialD: 'ⅅ',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    Cayleys: 'ℭ',
    ccaps: '⩍',
    Ccaron: 'Č',
    ccaron: 'č',
    Ccedil: 'Ç',
    ccedil: 'ç',
    Ccirc: 'Ĉ',
    ccirc: 'ĉ',
    Cconint: '∰',
    ccups: '⩌',
    ccupssm: '⩐',
    Cdot: 'Ċ',
    cdot: 'ċ',
    cedil: '¸',
    Cedilla: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    CenterDot: '·',
    cfr: '𝔠',
    Cfr: 'ℭ',
    CHcy: 'Ч',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    Chi: 'Χ',
    chi: 'χ',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    CircleDot: '⊙',
    circledR: '®',
    circledS: 'Ⓢ',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    cir: '○',
    cirE: '⧃',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    Colon: '∷',
    Colone: '⩴',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    Congruent: '≡',
    conint: '∮',
    Conint: '∯',
    ContourIntegral: '∮',
    copf: '𝕔',
    Copf: 'ℂ',
    coprod: '∐',
    Coproduct: '∐',
    copy: '©',
    COPY: '©',
    copysr: '℗',
    CounterClockwiseContourIntegral: '∳',
    crarr: '↵',
    cross: '✗',
    Cross: '⨯',
    Cscr: '𝒞',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cupbrcap: '⩈',
    cupcap: '⩆',
    CupCap: '≍',
    cup: '∪',
    Cup: '⋓',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dagger: '†',
    Dagger: '‡',
    daleth: 'ℸ',
    darr: '↓',
    Darr: '↡',
    dArr: '⇓',
    dash: '‐',
    Dashv: '⫤',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    Dcaron: 'Ď',
    dcaron: 'ď',
    Dcy: 'Д',
    dcy: 'д',
    ddagger: '‡',
    ddarr: '⇊',
    DD: 'ⅅ',
    dd: 'ⅆ',
    DDotrahd: '⤑',
    ddotseq: '⩷',
    deg: '°',
    Del: '∇',
    Delta: 'Δ',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    Dfr: '𝔇',
    dfr: '𝔡',
    dHar: '⥥',
    dharl: '⇃',
    dharr: '⇂',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    diam: '⋄',
    diamond: '⋄',
    Diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    DifferentialD: 'ⅆ',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    DJcy: 'Ђ',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    Dopf: '𝔻',
    dopf: '𝕕',
    Dot: '¨',
    dot: '˙',
    DotDot: '⃜',
    doteq: '≐',
    doteqdot: '≑',
    DotEqual: '≐',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrowBar: '⤓',
    downarrow: '↓',
    DownArrow: '↓',
    Downarrow: '⇓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVectorBar: '⥖',
    DownLeftVector: '↽',
    DownRightTeeVector: '⥟',
    DownRightVectorBar: '⥗',
    DownRightVector: '⇁',
    DownTeeArrow: '↧',
    DownTee: '⊤',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    Dscr: '𝒟',
    dscr: '𝒹',
    DScy: 'Ѕ',
    dscy: 'ѕ',
    dsol: '⧶',
    Dstrok: 'Đ',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    DZcy: 'Џ',
    dzcy: 'џ',
    dzigrarr: '⟿',
    Eacute: 'É',
    eacute: 'é',
    easter: '⩮',
    Ecaron: 'Ě',
    ecaron: 'ě',
    Ecirc: 'Ê',
    ecirc: 'ê',
    ecir: '≖',
    ecolon: '≕',
    Ecy: 'Э',
    ecy: 'э',
    eDDot: '⩷',
    Edot: 'Ė',
    edot: 'ė',
    eDot: '≑',
    ee: 'ⅇ',
    efDot: '≒',
    Efr: '𝔈',
    efr: '𝔢',
    eg: '⪚',
    Egrave: 'È',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    Element: '∈',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    Emacr: 'Ē',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    EmptySmallSquare: '◻',
    emptyv: '∅',
    EmptyVerySmallSquare: '▫',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    ENG: 'Ŋ',
    eng: 'ŋ',
    ensp: ' ',
    Eogon: 'Ę',
    eogon: 'ę',
    Eopf: '𝔼',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    Epsilon: 'Ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    Equal: '⩵',
    equals: '=',
    EqualTilde: '≂',
    equest: '≟',
    Equilibrium: '⇌',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erarr: '⥱',
    erDot: '≓',
    escr: 'ℯ',
    Escr: 'ℰ',
    esdot: '≐',
    Esim: '⩳',
    esim: '≂',
    Eta: 'Η',
    eta: 'η',
    ETH: 'Ð',
    eth: 'ð',
    Euml: 'Ë',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    Exists: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    ExponentialE: 'ⅇ',
    fallingdotseq: '≒',
    Fcy: 'Ф',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    Ffr: '𝔉',
    ffr: '𝔣',
    filig: 'ﬁ',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    Fopf: '𝔽',
    fopf: '𝕗',
    forall: '∀',
    ForAll: '∀',
    fork: '⋔',
    forkv: '⫙',
    Fouriertrf: 'ℱ',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    Fscr: 'ℱ',
    gacute: 'ǵ',
    Gamma: 'Γ',
    gamma: 'γ',
    Gammad: 'Ϝ',
    gammad: 'ϝ',
    gap: '⪆',
    Gbreve: 'Ğ',
    gbreve: 'ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    gcirc: 'ĝ',
    Gcy: 'Г',
    gcy: 'г',
    Gdot: 'Ġ',
    gdot: 'ġ',
    ge: '≥',
    gE: '≧',
    gEl: '⪌',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    gescc: '⪩',
    ges: '⩾',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    Gfr: '𝔊',
    gfr: '𝔤',
    gg: '≫',
    Gg: '⋙',
    ggg: '⋙',
    gimel: 'ℷ',
    GJcy: 'Ѓ',
    gjcy: 'ѓ',
    gla: '⪥',
    gl: '≷',
    glE: '⪒',
    glj: '⪤',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gnE: '≩',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    Gopf: '𝔾',
    gopf: '𝕘',
    grave: '`',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gtcc: '⪧',
    gtcir: '⩺',
    gt: '>',
    GT: '>',
    Gt: '≫',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    Hacek: 'ˇ',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    HARDcy: 'Ъ',
    hardcy: 'ъ',
    harrcir: '⥈',
    harr: '↔',
    hArr: '⇔',
    harrw: '↭',
    Hat: '^',
    hbar: 'ℏ',
    Hcirc: 'Ĥ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    Hopf: 'ℍ',
    horbar: '―',
    HorizontalLine: '─',
    hscr: '𝒽',
    Hscr: 'ℋ',
    hslash: 'ℏ',
    Hstrok: 'Ħ',
    hstrok: 'ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    hybull: '⁃',
    hyphen: '‐',
    Iacute: 'Í',
    iacute: 'í',
    ic: '⁣',
    Icirc: 'Î',
    icirc: 'î',
    Icy: 'И',
    icy: 'и',
    Idot: 'İ',
    IEcy: 'Е',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    IJlig: 'Ĳ',
    ijlig: 'ĳ',
    Imacr: 'Ī',
    imacr: 'ī',
    image: 'ℑ',
    ImaginaryI: 'ⅈ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    Im: 'ℑ',
    imof: '⊷',
    imped: 'Ƶ',
    Implies: '⇒',
    incare: '℅',
    in: '∈',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    intcal: '⊺',
    int: '∫',
    Int: '∬',
    integers: 'ℤ',
    Integral: '∫',
    intercal: '⊺',
    Intersection: '⋂',
    intlarhk: '⨗',
    intprod: '⨼',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    IOcy: 'Ё',
    iocy: 'ё',
    Iogon: 'Į',
    iogon: 'į',
    Iopf: '𝕀',
    iopf: '𝕚',
    Iota: 'Ι',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    Iscr: 'ℐ',
    isin: '∈',
    isindot: '⋵',
    isinE: '⋹',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    Itilde: 'Ĩ',
    itilde: 'ĩ',
    Iukcy: 'І',
    iukcy: 'і',
    Iuml: 'Ï',
    iuml: 'ï',
    Jcirc: 'Ĵ',
    jcirc: 'ĵ',
    Jcy: 'Й',
    jcy: 'й',
    Jfr: '𝔍',
    jfr: '𝔧',
    jmath: 'ȷ',
    Jopf: '𝕁',
    jopf: '𝕛',
    Jscr: '𝒥',
    jscr: '𝒿',
    Jsercy: 'Ј',
    jsercy: 'ј',
    Jukcy: 'Є',
    jukcy: 'є',
    Kappa: 'Κ',
    kappa: 'κ',
    kappav: 'ϰ',
    Kcedil: 'Ķ',
    kcedil: 'ķ',
    Kcy: 'К',
    kcy: 'к',
    Kfr: '𝔎',
    kfr: '𝔨',
    kgreen: 'ĸ',
    KHcy: 'Х',
    khcy: 'х',
    KJcy: 'Ќ',
    kjcy: 'ќ',
    Kopf: '𝕂',
    kopf: '𝕜',
    Kscr: '𝒦',
    kscr: '𝓀',
    lAarr: '⇚',
    Lacute: 'Ĺ',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    Lambda: 'Λ',
    lambda: 'λ',
    lang: '⟨',
    Lang: '⟪',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    Laplacetrf: 'ℒ',
    laquo: '«',
    larrb: '⇤',
    larrbfs: '⤟',
    larr: '←',
    Larr: '↞',
    lArr: '⇐',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    latail: '⤙',
    lAtail: '⤛',
    lat: '⪫',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lBarr: '⤎',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    Lcaron: 'Ľ',
    lcaron: 'ľ',
    Lcedil: 'Ļ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    Lcy: 'Л',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    lE: '≦',
    LeftAngleBracket: '⟨',
    LeftArrowBar: '⇤',
    leftarrow: '←',
    LeftArrow: '←',
    Leftarrow: '⇐',
    LeftArrowRightArrow: '⇆',
    leftarrowtail: '↢',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVectorBar: '⥙',
    LeftDownVector: '⇃',
    LeftFloor: '⌊',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    LeftRightArrow: '↔',
    Leftrightarrow: '⇔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    LeftRightVector: '⥎',
    LeftTeeArrow: '↤',
    LeftTee: '⊣',
    LeftTeeVector: '⥚',
    leftthreetimes: '⋋',
    LeftTriangleBar: '⧏',
    LeftTriangle: '⊲',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVectorBar: '⥘',
    LeftUpVector: '↿',
    LeftVectorBar: '⥒',
    LeftVector: '↼',
    lEg: '⪋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    lescc: '⪨',
    les: '⩽',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    lessgtr: '≶',
    LessLess: '⪡',
    lesssim: '≲',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    Lfr: '𝔏',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lHar: '⥢',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    LJcy: 'Љ',
    ljcy: 'љ',
    llarr: '⇇',
    ll: '≪',
    Ll: '⋘',
    llcorner: '⌞',
    Lleftarrow: '⇚',
    llhard: '⥫',
    lltri: '◺',
    Lmidot: 'Ŀ',
    lmidot: 'ŀ',
    lmoustache: '⎰',
    lmoust: '⎰',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lnE: '≨',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    LongLeftArrow: '⟵',
    Longleftarrow: '⟸',
    longleftrightarrow: '⟷',
    LongLeftRightArrow: '⟷',
    Longleftrightarrow: '⟺',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    LongRightArrow: '⟶',
    Longrightarrow: '⟹',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    Lopf: '𝕃',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    Lscr: 'ℒ',
    lsh: '↰',
    Lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    Lstrok: 'Ł',
    lstrok: 'ł',
    ltcc: '⪦',
    ltcir: '⩹',
    lt: '<',
    LT: '<',
    Lt: '≪',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    ltrPar: '⦖',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    Map: '⤅',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    Mcy: 'М',
    mcy: 'м',
    mdash: '—',
    mDDot: '∺',
    measuredangle: '∡',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    midast: '*',
    midcir: '⫰',
    mid: '∣',
    middot: '·',
    minusb: '⊟',
    minus: '−',
    minusd: '∸',
    minusdu: '⨪',
    MinusPlus: '∓',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    Mopf: '𝕄',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    Mscr: 'ℳ',
    mstpos: '∾',
    Mu: 'Μ',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nabla: '∇',
    Nacute: 'Ń',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natural: '♮',
    naturals: 'ℕ',
    natur: '♮',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    Ncaron: 'Ň',
    ncaron: 'ň',
    Ncedil: 'Ņ',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    Ncy: 'Н',
    ncy: 'н',
    ndash: '–',
    nearhk: '⤤',
    nearr: '↗',
    neArr: '⇗',
    nearrow: '↗',
    ne: '≠',
    nedot: '≐̸',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    nexist: '∄',
    nexists: '∄',
    Nfr: '𝔑',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    nGg: '⋙̸',
    ngsim: '≵',
    nGt: '≫⃒',
    ngt: '≯',
    ngtr: '≯',
    nGtv: '≫̸',
    nharr: '↮',
    nhArr: '⇎',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    NJcy: 'Њ',
    njcy: 'њ',
    nlarr: '↚',
    nlArr: '⇍',
    nldr: '‥',
    nlE: '≦̸',
    nle: '≰',
    nleftarrow: '↚',
    nLeftarrow: '⇍',
    nleftrightarrow: '↮',
    nLeftrightarrow: '⇎',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nLl: '⋘̸',
    nlsim: '≴',
    nLt: '≪⃒',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nLtv: '≪̸',
    nmid: '∤',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    nopf: '𝕟',
    Nopf: 'ℕ',
    Not: '⫬',
    not: '¬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    notin: '∉',
    notindot: '⋵̸',
    notinE: '⋹̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangle: '⋫',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    nparallel: '∦',
    npar: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    nprec: '⊀',
    npreceq: '⪯̸',
    npre: '⪯̸',
    nrarrc: '⤳̸',
    nrarr: '↛',
    nrArr: '⇏',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nRightarrow: '⇏',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    Nscr: '𝒩',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    Nu: 'Ν',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvDash: '⊭',
    nVdash: '⊮',
    nVDash: '⊯',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvHarr: '⤄',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwarhk: '⤣',
    nwarr: '↖',
    nwArr: '⇖',
    nwarrow: '↖',
    nwnear: '⤧',
    Oacute: 'Ó',
    oacute: 'ó',
    oast: '⊛',
    Ocirc: 'Ô',
    ocirc: 'ô',
    ocir: '⊚',
    Ocy: 'О',
    ocy: 'о',
    odash: '⊝',
    Odblac: 'Ő',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    OElig: 'Œ',
    oelig: 'œ',
    ofcir: '⦿',
    Ofr: '𝔒',
    ofr: '𝔬',
    ogon: '˛',
    Ograve: 'Ò',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    Omacr: 'Ō',
    omacr: 'ō',
    Omega: 'Ω',
    omega: 'ω',
    Omicron: 'Ο',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    Oopf: '𝕆',
    oopf: '𝕠',
    opar: '⦷',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    operp: '⦹',
    oplus: '⊕',
    orarr: '↻',
    Or: '⩔',
    or: '∨',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oS: 'Ⓢ',
    Oscr: '𝒪',
    oscr: 'ℴ',
    Oslash: 'Ø',
    oslash: 'ø',
    osol: '⊘',
    Otilde: 'Õ',
    otilde: 'õ',
    otimesas: '⨶',
    Otimes: '⨷',
    otimes: '⊗',
    Ouml: 'Ö',
    ouml: 'ö',
    ovbar: '⌽',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    para: '¶',
    parallel: '∥',
    par: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    PartialD: '∂',
    Pcy: 'П',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    Pfr: '𝔓',
    pfr: '𝔭',
    Phi: 'Φ',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    Pi: 'Π',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plus: '+',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    PlusMinus: '±',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    Poincareplane: 'ℌ',
    pointint: '⨕',
    popf: '𝕡',
    Popf: 'ℙ',
    pound: '£',
    prap: '⪷',
    Pr: '⪻',
    pr: '≺',
    prcue: '≼',
    precapprox: '⪷',
    prec: '≺',
    preccurlyeq: '≼',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    pre: '⪯',
    prE: '⪳',
    precsim: '≾',
    prime: '′',
    Prime: '″',
    primes: 'ℙ',
    prnap: '⪹',
    prnE: '⪵',
    prnsim: '⋨',
    prod: '∏',
    Product: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    Proportional: '∝',
    Proportion: '∷',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    Pscr: '𝒫',
    pscr: '𝓅',
    Psi: 'Ψ',
    psi: 'ψ',
    puncsp: ' ',
    Qfr: '𝔔',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    Qopf: 'ℚ',
    qprime: '⁗',
    Qscr: '𝒬',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    QUOT: '"',
    rAarr: '⇛',
    race: '∽̱',
    Racute: 'Ŕ',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    Rang: '⟫',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarr: '→',
    Rarr: '↠',
    rArr: '⇒',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    Rarrtl: '⤖',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    rAtail: '⤜',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rBarr: '⤏',
    RBarr: '⤐',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    Rcaron: 'Ř',
    rcaron: 'ř',
    Rcedil: 'Ŗ',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    Rcy: 'Р',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    Re: 'ℜ',
    rect: '▭',
    reg: '®',
    REG: '®',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    Rfr: 'ℜ',
    rHar: '⥤',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    Rho: 'Ρ',
    rho: 'ρ',
    rhov: 'ϱ',
    RightAngleBracket: '⟩',
    RightArrowBar: '⇥',
    rightarrow: '→',
    RightArrow: '→',
    Rightarrow: '⇒',
    RightArrowLeftArrow: '⇄',
    rightarrowtail: '↣',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVectorBar: '⥕',
    RightDownVector: '⇂',
    RightFloor: '⌋',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    RightTeeArrow: '↦',
    RightTee: '⊢',
    RightTeeVector: '⥛',
    rightthreetimes: '⋌',
    RightTriangleBar: '⧐',
    RightTriangle: '⊳',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVectorBar: '⥔',
    RightUpVector: '↾',
    RightVectorBar: '⥓',
    RightVector: '⇀',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoustache: '⎱',
    rmoust: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    Ropf: 'ℝ',
    roplus: '⨮',
    rotimes: '⨵',
    RoundImplies: '⥰',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    Rrightarrow: '⇛',
    rsaquo: '›',
    rscr: '𝓇',
    Rscr: 'ℛ',
    rsh: '↱',
    Rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    RuleDelayed: '⧴',
    ruluhar: '⥨',
    rx: '℞',
    Sacute: 'Ś',
    sacute: 'ś',
    sbquo: '‚',
    scap: '⪸',
    Scaron: 'Š',
    scaron: 'š',
    Sc: '⪼',
    sc: '≻',
    sccue: '≽',
    sce: '⪰',
    scE: '⪴',
    Scedil: 'Ş',
    scedil: 'ş',
    Scirc: 'Ŝ',
    scirc: 'ŝ',
    scnap: '⪺',
    scnE: '⪶',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    Scy: 'С',
    scy: 'с',
    sdotb: '⊡',
    sdot: '⋅',
    sdote: '⩦',
    searhk: '⤥',
    searr: '↘',
    seArr: '⇘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    Sfr: '𝔖',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    SHCHcy: 'Щ',
    shchcy: 'щ',
    SHcy: 'Ш',
    shcy: 'ш',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    shortmid: '∣',
    shortparallel: '∥',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    shy: '­',
    Sigma: 'Σ',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    SmallCircle: '∘',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    SOFTcy: 'Ь',
    softcy: 'ь',
    solbar: '⌿',
    solb: '⧄',
    sol: '/',
    Sopf: '𝕊',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    Sqrt: '√',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    square: '□',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    squarf: '▪',
    squ: '□',
    squf: '▪',
    srarr: '→',
    Sscr: '𝒮',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    Star: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    Sub: '⋐',
    subdot: '⪽',
    subE: '⫅',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    Subset: '⋐',
    subseteq: '⊆',
    subseteqq: '⫅',
    SubsetEqual: '⊆',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succapprox: '⪸',
    succ: '≻',
    succcurlyeq: '≽',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    SuchThat: '∋',
    sum: '∑',
    Sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    Sup: '⋑',
    supdot: '⪾',
    supdsub: '⫘',
    supE: '⫆',
    supe: '⊇',
    supedot: '⫄',
    Superset: '⊃',
    SupersetEqual: '⊇',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    Supset: '⋑',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swarhk: '⤦',
    swarr: '↙',
    swArr: '⇙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    Tab: '\t',
    target: '⌖',
    Tau: 'Τ',
    tau: 'τ',
    tbrk: '⎴',
    Tcaron: 'Ť',
    tcaron: 'ť',
    Tcedil: 'Ţ',
    tcedil: 'ţ',
    Tcy: 'Т',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    Tfr: '𝔗',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    Therefore: '∴',
    Theta: 'Θ',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    ThickSpace: '  ',
    ThinSpace: ' ',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    THORN: 'Þ',
    thorn: 'þ',
    tilde: '˜',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    timesbar: '⨱',
    timesb: '⊠',
    times: '×',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    topbot: '⌶',
    topcir: '⫱',
    top: '⊤',
    Topf: '𝕋',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    TRADE: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    TripleDot: '⃛',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    Tscr: '𝒯',
    tscr: '𝓉',
    TScy: 'Ц',
    tscy: 'ц',
    TSHcy: 'Ћ',
    tshcy: 'ћ',
    Tstrok: 'Ŧ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    Uacute: 'Ú',
    uacute: 'ú',
    uarr: '↑',
    Uarr: '↟',
    uArr: '⇑',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    ubrcy: 'ў',
    Ubreve: 'Ŭ',
    ubreve: 'ŭ',
    Ucirc: 'Û',
    ucirc: 'û',
    Ucy: 'У',
    ucy: 'у',
    udarr: '⇅',
    Udblac: 'Ű',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    Ufr: '𝔘',
    ufr: '𝔲',
    Ugrave: 'Ù',
    ugrave: 'ù',
    uHar: '⥣',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    Umacr: 'Ū',
    umacr: 'ū',
    uml: '¨',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    uogon: 'ų',
    Uopf: '𝕌',
    uopf: '𝕦',
    UpArrowBar: '⤒',
    uparrow: '↑',
    UpArrow: '↑',
    Uparrow: '⇑',
    UpArrowDownArrow: '⇅',
    updownarrow: '↕',
    UpDownArrow: '↕',
    Updownarrow: '⇕',
    UpEquilibrium: '⥮',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    upsi: 'υ',
    Upsi: 'ϒ',
    upsih: 'ϒ',
    Upsilon: 'Υ',
    upsilon: 'υ',
    UpTeeArrow: '↥',
    UpTee: '⊥',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    Uring: 'Ů',
    uring: 'ů',
    urtri: '◹',
    Uscr: '𝒰',
    uscr: '𝓊',
    utdot: '⋰',
    Utilde: 'Ũ',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    Uuml: 'Ü',
    uuml: 'ü',
    uwangle: '⦧',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    vArr: '⇕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vBar: '⫨',
    Vbar: '⫫',
    vBarv: '⫩',
    Vcy: 'В',
    vcy: 'в',
    vdash: '⊢',
    vDash: '⊨',
    Vdash: '⊩',
    VDash: '⊫',
    Vdashl: '⫦',
    veebar: '⊻',
    vee: '∨',
    Vee: '⋁',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    Verbar: '‖',
    vert: '|',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    Vopf: '𝕍',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    Vscr: '𝒱',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    Vvdash: '⊪',
    vzigzag: '⦚',
    Wcirc: 'Ŵ',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    Wedge: '⋀',
    wedgeq: '≙',
    weierp: '℘',
    Wfr: '𝔚',
    wfr: '𝔴',
    Wopf: '𝕎',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    Wscr: '𝒲',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    Xfr: '𝔛',
    xfr: '𝔵',
    xharr: '⟷',
    xhArr: '⟺',
    Xi: 'Ξ',
    xi: 'ξ',
    xlarr: '⟵',
    xlArr: '⟸',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    Xopf: '𝕏',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrarr: '⟶',
    xrArr: '⟹',
    Xscr: '𝒳',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    Yacute: 'Ý',
    yacute: 'ý',
    YAcy: 'Я',
    yacy: 'я',
    Ycirc: 'Ŷ',
    ycirc: 'ŷ',
    Ycy: 'Ы',
    ycy: 'ы',
    yen: '¥',
    Yfr: '𝔜',
    yfr: '𝔶',
    YIcy: 'Ї',
    yicy: 'ї',
    Yopf: '𝕐',
    yopf: '𝕪',
    Yscr: '𝒴',
    yscr: '𝓎',
    YUcy: 'Ю',
    yucy: 'ю',
    yuml: 'ÿ',
    Yuml: 'Ÿ',
    Zacute: 'Ź',
    zacute: 'ź',
    Zcaron: 'Ž',
    zcaron: 'ž',
    Zcy: 'З',
    zcy: 'з',
    Zdot: 'Ż',
    zdot: 'ż',
    zeetrf: 'ℨ',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    zeta: 'ζ',
    zfr: '𝔷',
    Zfr: 'ℨ',
    ZHcy: 'Ж',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌',
  },
  o = Object.freeze({
    Aacute: 'Á',
    aacute: 'á',
    Abreve: 'Ă',
    abreve: 'ă',
    ac: '∾',
    acd: '∿',
    acE: '∾̳',
    Acirc: 'Â',
    acirc: 'â',
    acute: '´',
    Acy: 'А',
    acy: 'а',
    AElig: 'Æ',
    aelig: 'æ',
    af: '⁡',
    Afr: '𝔄',
    afr: '𝔞',
    Agrave: 'À',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    Alpha: 'Α',
    alpha: 'α',
    Amacr: 'Ā',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    AMP: '&',
    andand: '⩕',
    And: '⩓',
    and: '∧',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angmsd: '∡',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    Aogon: 'Ą',
    aogon: 'ą',
    Aopf: '𝔸',
    aopf: '𝕒',
    apacir: '⩯',
    ap: '≈',
    apE: '⩰',
    ape: '≊',
    apid: '≋',
    apos: "'",
    ApplyFunction: '⁡',
    approx: '≈',
    approxeq: '≊',
    Aring: 'Å',
    aring: 'å',
    Ascr: '𝒜',
    ascr: '𝒶',
    Assign: '≔',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    Backslash: '∖',
    Barv: '⫧',
    barvee: '⊽',
    barwed: '⌅',
    Barwed: '⌆',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    Bcy: 'Б',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    Because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    Bfr: '𝔅',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bNot: '⫭',
    bnot: '⌐',
    Bopf: '𝔹',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxbox: '⧉',
    boxdl: '┐',
    boxdL: '╕',
    boxDl: '╖',
    boxDL: '╗',
    boxdr: '┌',
    boxdR: '╒',
    boxDr: '╓',
    boxDR: '╔',
    boxh: '─',
    boxH: '═',
    boxhd: '┬',
    boxHd: '╤',
    boxhD: '╥',
    boxHD: '╦',
    boxhu: '┴',
    boxHu: '╧',
    boxhU: '╨',
    boxHU: '╩',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxul: '┘',
    boxuL: '╛',
    boxUl: '╜',
    boxUL: '╝',
    boxur: '└',
    boxuR: '╘',
    boxUr: '╙',
    boxUR: '╚',
    boxv: '│',
    boxV: '║',
    boxvh: '┼',
    boxvH: '╪',
    boxVh: '╫',
    boxVH: '╬',
    boxvl: '┤',
    boxvL: '╡',
    boxVl: '╢',
    boxVL: '╣',
    boxvr: '├',
    boxvR: '╞',
    boxVr: '╟',
    boxVR: '╠',
    bprime: '‵',
    breve: '˘',
    Breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    Bscr: 'ℬ',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsolb: '⧅',
    bsol: '\\',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    Bumpeq: '≎',
    bumpeq: '≏',
    Cacute: 'Ć',
    cacute: 'ć',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    cap: '∩',
    Cap: '⋒',
    capcup: '⩇',
    capdot: '⩀',
    CapitalDifferentialD: 'ⅅ',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    Cayleys: 'ℭ',
    ccaps: '⩍',
    Ccaron: 'Č',
    ccaron: 'č',
    Ccedil: 'Ç',
    ccedil: 'ç',
    Ccirc: 'Ĉ',
    ccirc: 'ĉ',
    Cconint: '∰',
    ccups: '⩌',
    ccupssm: '⩐',
    Cdot: 'Ċ',
    cdot: 'ċ',
    cedil: '¸',
    Cedilla: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    CenterDot: '·',
    cfr: '𝔠',
    Cfr: 'ℭ',
    CHcy: 'Ч',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    Chi: 'Χ',
    chi: 'χ',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    CircleDot: '⊙',
    circledR: '®',
    circledS: 'Ⓢ',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    cir: '○',
    cirE: '⧃',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    Colon: '∷',
    Colone: '⩴',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    Congruent: '≡',
    conint: '∮',
    Conint: '∯',
    ContourIntegral: '∮',
    copf: '𝕔',
    Copf: 'ℂ',
    coprod: '∐',
    Coproduct: '∐',
    copy: '©',
    COPY: '©',
    copysr: '℗',
    CounterClockwiseContourIntegral: '∳',
    crarr: '↵',
    cross: '✗',
    Cross: '⨯',
    Cscr: '𝒞',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cupbrcap: '⩈',
    cupcap: '⩆',
    CupCap: '≍',
    cup: '∪',
    Cup: '⋓',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dagger: '†',
    Dagger: '‡',
    daleth: 'ℸ',
    darr: '↓',
    Darr: '↡',
    dArr: '⇓',
    dash: '‐',
    Dashv: '⫤',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    Dcaron: 'Ď',
    dcaron: 'ď',
    Dcy: 'Д',
    dcy: 'д',
    ddagger: '‡',
    ddarr: '⇊',
    DD: 'ⅅ',
    dd: 'ⅆ',
    DDotrahd: '⤑',
    ddotseq: '⩷',
    deg: '°',
    Del: '∇',
    Delta: 'Δ',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    Dfr: '𝔇',
    dfr: '𝔡',
    dHar: '⥥',
    dharl: '⇃',
    dharr: '⇂',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    diam: '⋄',
    diamond: '⋄',
    Diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    DifferentialD: 'ⅆ',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    DJcy: 'Ђ',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    Dopf: '𝔻',
    dopf: '𝕕',
    Dot: '¨',
    dot: '˙',
    DotDot: '⃜',
    doteq: '≐',
    doteqdot: '≑',
    DotEqual: '≐',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrowBar: '⤓',
    downarrow: '↓',
    DownArrow: '↓',
    Downarrow: '⇓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVectorBar: '⥖',
    DownLeftVector: '↽',
    DownRightTeeVector: '⥟',
    DownRightVectorBar: '⥗',
    DownRightVector: '⇁',
    DownTeeArrow: '↧',
    DownTee: '⊤',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    Dscr: '𝒟',
    dscr: '𝒹',
    DScy: 'Ѕ',
    dscy: 'ѕ',
    dsol: '⧶',
    Dstrok: 'Đ',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    DZcy: 'Џ',
    dzcy: 'џ',
    dzigrarr: '⟿',
    Eacute: 'É',
    eacute: 'é',
    easter: '⩮',
    Ecaron: 'Ě',
    ecaron: 'ě',
    Ecirc: 'Ê',
    ecirc: 'ê',
    ecir: '≖',
    ecolon: '≕',
    Ecy: 'Э',
    ecy: 'э',
    eDDot: '⩷',
    Edot: 'Ė',
    edot: 'ė',
    eDot: '≑',
    ee: 'ⅇ',
    efDot: '≒',
    Efr: '𝔈',
    efr: '𝔢',
    eg: '⪚',
    Egrave: 'È',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    Element: '∈',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    Emacr: 'Ē',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    EmptySmallSquare: '◻',
    emptyv: '∅',
    EmptyVerySmallSquare: '▫',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    ENG: 'Ŋ',
    eng: 'ŋ',
    ensp: ' ',
    Eogon: 'Ę',
    eogon: 'ę',
    Eopf: '𝔼',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    Epsilon: 'Ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    Equal: '⩵',
    equals: '=',
    EqualTilde: '≂',
    equest: '≟',
    Equilibrium: '⇌',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erarr: '⥱',
    erDot: '≓',
    escr: 'ℯ',
    Escr: 'ℰ',
    esdot: '≐',
    Esim: '⩳',
    esim: '≂',
    Eta: 'Η',
    eta: 'η',
    ETH: 'Ð',
    eth: 'ð',
    Euml: 'Ë',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    Exists: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    ExponentialE: 'ⅇ',
    fallingdotseq: '≒',
    Fcy: 'Ф',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    Ffr: '𝔉',
    ffr: '𝔣',
    filig: 'ﬁ',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    Fopf: '𝔽',
    fopf: '𝕗',
    forall: '∀',
    ForAll: '∀',
    fork: '⋔',
    forkv: '⫙',
    Fouriertrf: 'ℱ',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    Fscr: 'ℱ',
    gacute: 'ǵ',
    Gamma: 'Γ',
    gamma: 'γ',
    Gammad: 'Ϝ',
    gammad: 'ϝ',
    gap: '⪆',
    Gbreve: 'Ğ',
    gbreve: 'ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    gcirc: 'ĝ',
    Gcy: 'Г',
    gcy: 'г',
    Gdot: 'Ġ',
    gdot: 'ġ',
    ge: '≥',
    gE: '≧',
    gEl: '⪌',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    gescc: '⪩',
    ges: '⩾',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    Gfr: '𝔊',
    gfr: '𝔤',
    gg: '≫',
    Gg: '⋙',
    ggg: '⋙',
    gimel: 'ℷ',
    GJcy: 'Ѓ',
    gjcy: 'ѓ',
    gla: '⪥',
    gl: '≷',
    glE: '⪒',
    glj: '⪤',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gnE: '≩',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    Gopf: '𝔾',
    gopf: '𝕘',
    grave: '`',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gtcc: '⪧',
    gtcir: '⩺',
    gt: '>',
    GT: '>',
    Gt: '≫',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    Hacek: 'ˇ',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    HARDcy: 'Ъ',
    hardcy: 'ъ',
    harrcir: '⥈',
    harr: '↔',
    hArr: '⇔',
    harrw: '↭',
    Hat: '^',
    hbar: 'ℏ',
    Hcirc: 'Ĥ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    Hopf: 'ℍ',
    horbar: '―',
    HorizontalLine: '─',
    hscr: '𝒽',
    Hscr: 'ℋ',
    hslash: 'ℏ',
    Hstrok: 'Ħ',
    hstrok: 'ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    hybull: '⁃',
    hyphen: '‐',
    Iacute: 'Í',
    iacute: 'í',
    ic: '⁣',
    Icirc: 'Î',
    icirc: 'î',
    Icy: 'И',
    icy: 'и',
    Idot: 'İ',
    IEcy: 'Е',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    IJlig: 'Ĳ',
    ijlig: 'ĳ',
    Imacr: 'Ī',
    imacr: 'ī',
    image: 'ℑ',
    ImaginaryI: 'ⅈ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    Im: 'ℑ',
    imof: '⊷',
    imped: 'Ƶ',
    Implies: '⇒',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    intcal: '⊺',
    int: '∫',
    Int: '∬',
    integers: 'ℤ',
    Integral: '∫',
    intercal: '⊺',
    Intersection: '⋂',
    intlarhk: '⨗',
    intprod: '⨼',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    IOcy: 'Ё',
    iocy: 'ё',
    Iogon: 'Į',
    iogon: 'į',
    Iopf: '𝕀',
    iopf: '𝕚',
    Iota: 'Ι',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    Iscr: 'ℐ',
    isin: '∈',
    isindot: '⋵',
    isinE: '⋹',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    Itilde: 'Ĩ',
    itilde: 'ĩ',
    Iukcy: 'І',
    iukcy: 'і',
    Iuml: 'Ï',
    iuml: 'ï',
    Jcirc: 'Ĵ',
    jcirc: 'ĵ',
    Jcy: 'Й',
    jcy: 'й',
    Jfr: '𝔍',
    jfr: '𝔧',
    jmath: 'ȷ',
    Jopf: '𝕁',
    jopf: '𝕛',
    Jscr: '𝒥',
    jscr: '𝒿',
    Jsercy: 'Ј',
    jsercy: 'ј',
    Jukcy: 'Є',
    jukcy: 'є',
    Kappa: 'Κ',
    kappa: 'κ',
    kappav: 'ϰ',
    Kcedil: 'Ķ',
    kcedil: 'ķ',
    Kcy: 'К',
    kcy: 'к',
    Kfr: '𝔎',
    kfr: '𝔨',
    kgreen: 'ĸ',
    KHcy: 'Х',
    khcy: 'х',
    KJcy: 'Ќ',
    kjcy: 'ќ',
    Kopf: '𝕂',
    kopf: '𝕜',
    Kscr: '𝒦',
    kscr: '𝓀',
    lAarr: '⇚',
    Lacute: 'Ĺ',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    Lambda: 'Λ',
    lambda: 'λ',
    lang: '⟨',
    Lang: '⟪',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    Laplacetrf: 'ℒ',
    laquo: '«',
    larrb: '⇤',
    larrbfs: '⤟',
    larr: '←',
    Larr: '↞',
    lArr: '⇐',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    latail: '⤙',
    lAtail: '⤛',
    lat: '⪫',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lBarr: '⤎',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    Lcaron: 'Ľ',
    lcaron: 'ľ',
    Lcedil: 'Ļ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    Lcy: 'Л',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    lE: '≦',
    LeftAngleBracket: '⟨',
    LeftArrowBar: '⇤',
    leftarrow: '←',
    LeftArrow: '←',
    Leftarrow: '⇐',
    LeftArrowRightArrow: '⇆',
    leftarrowtail: '↢',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVectorBar: '⥙',
    LeftDownVector: '⇃',
    LeftFloor: '⌊',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    LeftRightArrow: '↔',
    Leftrightarrow: '⇔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    LeftRightVector: '⥎',
    LeftTeeArrow: '↤',
    LeftTee: '⊣',
    LeftTeeVector: '⥚',
    leftthreetimes: '⋋',
    LeftTriangleBar: '⧏',
    LeftTriangle: '⊲',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVectorBar: '⥘',
    LeftUpVector: '↿',
    LeftVectorBar: '⥒',
    LeftVector: '↼',
    lEg: '⪋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    lescc: '⪨',
    les: '⩽',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    lessgtr: '≶',
    LessLess: '⪡',
    lesssim: '≲',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    Lfr: '𝔏',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lHar: '⥢',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    LJcy: 'Љ',
    ljcy: 'љ',
    llarr: '⇇',
    ll: '≪',
    Ll: '⋘',
    llcorner: '⌞',
    Lleftarrow: '⇚',
    llhard: '⥫',
    lltri: '◺',
    Lmidot: 'Ŀ',
    lmidot: 'ŀ',
    lmoustache: '⎰',
    lmoust: '⎰',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lnE: '≨',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    LongLeftArrow: '⟵',
    Longleftarrow: '⟸',
    longleftrightarrow: '⟷',
    LongLeftRightArrow: '⟷',
    Longleftrightarrow: '⟺',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    LongRightArrow: '⟶',
    Longrightarrow: '⟹',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    Lopf: '𝕃',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    Lscr: 'ℒ',
    lsh: '↰',
    Lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    Lstrok: 'Ł',
    lstrok: 'ł',
    ltcc: '⪦',
    ltcir: '⩹',
    lt: '<',
    LT: '<',
    Lt: '≪',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    ltrPar: '⦖',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    Mcy: 'М',
    mcy: 'м',
    mdash: '—',
    mDDot: '∺',
    measuredangle: '∡',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    midast: '*',
    midcir: '⫰',
    mid: '∣',
    middot: '·',
    minusb: '⊟',
    minus: '−',
    minusd: '∸',
    minusdu: '⨪',
    MinusPlus: '∓',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    Mopf: '𝕄',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    Mscr: 'ℳ',
    mstpos: '∾',
    Mu: 'Μ',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nabla: '∇',
    Nacute: 'Ń',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natural: '♮',
    naturals: 'ℕ',
    natur: '♮',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    Ncaron: 'Ň',
    ncaron: 'ň',
    Ncedil: 'Ņ',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    Ncy: 'Н',
    ncy: 'н',
    ndash: '–',
    nearhk: '⤤',
    nearr: '↗',
    neArr: '⇗',
    nearrow: '↗',
    ne: '≠',
    nedot: '≐̸',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    nexist: '∄',
    nexists: '∄',
    Nfr: '𝔑',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    nGg: '⋙̸',
    ngsim: '≵',
    nGt: '≫⃒',
    ngt: '≯',
    ngtr: '≯',
    nGtv: '≫̸',
    nharr: '↮',
    nhArr: '⇎',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    NJcy: 'Њ',
    njcy: 'њ',
    nlarr: '↚',
    nlArr: '⇍',
    nldr: '‥',
    nlE: '≦̸',
    nle: '≰',
    nleftarrow: '↚',
    nLeftarrow: '⇍',
    nleftrightarrow: '↮',
    nLeftrightarrow: '⇎',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nLl: '⋘̸',
    nlsim: '≴',
    nLt: '≪⃒',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nLtv: '≪̸',
    nmid: '∤',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    nopf: '𝕟',
    Nopf: 'ℕ',
    Not: '⫬',
    not: '¬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    notin: '∉',
    notindot: '⋵̸',
    notinE: '⋹̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangle: '⋫',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    nparallel: '∦',
    npar: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    nprec: '⊀',
    npreceq: '⪯̸',
    npre: '⪯̸',
    nrarrc: '⤳̸',
    nrarr: '↛',
    nrArr: '⇏',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nRightarrow: '⇏',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    Nscr: '𝒩',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    Nu: 'Ν',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvDash: '⊭',
    nVdash: '⊮',
    nVDash: '⊯',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvHarr: '⤄',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwarhk: '⤣',
    nwarr: '↖',
    nwArr: '⇖',
    nwarrow: '↖',
    nwnear: '⤧',
    Oacute: 'Ó',
    oacute: 'ó',
    oast: '⊛',
    Ocirc: 'Ô',
    ocirc: 'ô',
    ocir: '⊚',
    Ocy: 'О',
    ocy: 'о',
    odash: '⊝',
    Odblac: 'Ő',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    OElig: 'Œ',
    oelig: 'œ',
    ofcir: '⦿',
    Ofr: '𝔒',
    ofr: '𝔬',
    ogon: '˛',
    Ograve: 'Ò',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    Omacr: 'Ō',
    omacr: 'ō',
    Omega: 'Ω',
    omega: 'ω',
    Omicron: 'Ο',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    Oopf: '𝕆',
    oopf: '𝕠',
    opar: '⦷',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    operp: '⦹',
    oplus: '⊕',
    orarr: '↻',
    Or: '⩔',
    or: '∨',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oS: 'Ⓢ',
    Oscr: '𝒪',
    oscr: 'ℴ',
    Oslash: 'Ø',
    oslash: 'ø',
    osol: '⊘',
    Otilde: 'Õ',
    otilde: 'õ',
    otimesas: '⨶',
    Otimes: '⨷',
    otimes: '⊗',
    Ouml: 'Ö',
    ouml: 'ö',
    ovbar: '⌽',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    para: '¶',
    parallel: '∥',
    par: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    PartialD: '∂',
    Pcy: 'П',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    Pfr: '𝔓',
    pfr: '𝔭',
    Phi: 'Φ',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    Pi: 'Π',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plus: '+',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    PlusMinus: '±',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    Poincareplane: 'ℌ',
    pointint: '⨕',
    popf: '𝕡',
    Popf: 'ℙ',
    pound: '£',
    prap: '⪷',
    Pr: '⪻',
    pr: '≺',
    prcue: '≼',
    precapprox: '⪷',
    prec: '≺',
    preccurlyeq: '≼',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    pre: '⪯',
    prE: '⪳',
    precsim: '≾',
    prime: '′',
    Prime: '″',
    primes: 'ℙ',
    prnap: '⪹',
    prnE: '⪵',
    prnsim: '⋨',
    prod: '∏',
    Product: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    Proportional: '∝',
    Proportion: '∷',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    Pscr: '𝒫',
    pscr: '𝓅',
    Psi: 'Ψ',
    psi: 'ψ',
    puncsp: ' ',
    Qfr: '𝔔',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    Qopf: 'ℚ',
    qprime: '⁗',
    Qscr: '𝒬',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    QUOT: '"',
    rAarr: '⇛',
    race: '∽̱',
    Racute: 'Ŕ',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    Rang: '⟫',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarr: '→',
    Rarr: '↠',
    rArr: '⇒',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    Rarrtl: '⤖',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    rAtail: '⤜',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rBarr: '⤏',
    RBarr: '⤐',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    Rcaron: 'Ř',
    rcaron: 'ř',
    Rcedil: 'Ŗ',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    Rcy: 'Р',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    Re: 'ℜ',
    rect: '▭',
    reg: '®',
    REG: '®',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    Rfr: 'ℜ',
    rHar: '⥤',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    Rho: 'Ρ',
    rho: 'ρ',
    rhov: 'ϱ',
    RightAngleBracket: '⟩',
    RightArrowBar: '⇥',
    rightarrow: '→',
    RightArrow: '→',
    Rightarrow: '⇒',
    RightArrowLeftArrow: '⇄',
    rightarrowtail: '↣',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVectorBar: '⥕',
    RightDownVector: '⇂',
    RightFloor: '⌋',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    RightTeeArrow: '↦',
    RightTee: '⊢',
    RightTeeVector: '⥛',
    rightthreetimes: '⋌',
    RightTriangleBar: '⧐',
    RightTriangle: '⊳',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVectorBar: '⥔',
    RightUpVector: '↾',
    RightVectorBar: '⥓',
    RightVector: '⇀',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoustache: '⎱',
    rmoust: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    Ropf: 'ℝ',
    roplus: '⨮',
    rotimes: '⨵',
    RoundImplies: '⥰',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    Rrightarrow: '⇛',
    rsaquo: '›',
    rscr: '𝓇',
    Rscr: 'ℛ',
    rsh: '↱',
    Rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    RuleDelayed: '⧴',
    ruluhar: '⥨',
    rx: '℞',
    Sacute: 'Ś',
    sacute: 'ś',
    sbquo: '‚',
    scap: '⪸',
    Scaron: 'Š',
    scaron: 'š',
    Sc: '⪼',
    sc: '≻',
    sccue: '≽',
    sce: '⪰',
    scE: '⪴',
    Scedil: 'Ş',
    scedil: 'ş',
    Scirc: 'Ŝ',
    scirc: 'ŝ',
    scnap: '⪺',
    scnE: '⪶',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    Scy: 'С',
    scy: 'с',
    sdotb: '⊡',
    sdot: '⋅',
    sdote: '⩦',
    searhk: '⤥',
    searr: '↘',
    seArr: '⇘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    Sfr: '𝔖',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    SHCHcy: 'Щ',
    shchcy: 'щ',
    SHcy: 'Ш',
    shcy: 'ш',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    shortmid: '∣',
    shortparallel: '∥',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    shy: '­',
    Sigma: 'Σ',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    SmallCircle: '∘',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    SOFTcy: 'Ь',
    softcy: 'ь',
    solbar: '⌿',
    solb: '⧄',
    sol: '/',
    Sopf: '𝕊',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    Sqrt: '√',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    square: '□',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    squarf: '▪',
    squ: '□',
    squf: '▪',
    srarr: '→',
    Sscr: '𝒮',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    Star: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    Sub: '⋐',
    subdot: '⪽',
    subE: '⫅',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    Subset: '⋐',
    subseteq: '⊆',
    subseteqq: '⫅',
    SubsetEqual: '⊆',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succapprox: '⪸',
    succ: '≻',
    succcurlyeq: '≽',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    SuchThat: '∋',
    sum: '∑',
    Sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    Sup: '⋑',
    supdot: '⪾',
    supdsub: '⫘',
    supE: '⫆',
    supe: '⊇',
    supedot: '⫄',
    Superset: '⊃',
    SupersetEqual: '⊇',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    Supset: '⋑',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swarhk: '⤦',
    swarr: '↙',
    swArr: '⇙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    Tab: '\t',
    target: '⌖',
    Tau: 'Τ',
    tau: 'τ',
    tbrk: '⎴',
    Tcaron: 'Ť',
    tcaron: 'ť',
    Tcedil: 'Ţ',
    tcedil: 'ţ',
    Tcy: 'Т',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    Tfr: '𝔗',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    Therefore: '∴',
    Theta: 'Θ',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    ThickSpace: '  ',
    ThinSpace: ' ',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    THORN: 'Þ',
    thorn: 'þ',
    tilde: '˜',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    timesbar: '⨱',
    timesb: '⊠',
    times: '×',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    topbot: '⌶',
    topcir: '⫱',
    top: '⊤',
    Topf: '𝕋',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    TRADE: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    TripleDot: '⃛',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    Tscr: '𝒯',
    tscr: '𝓉',
    TScy: 'Ц',
    tscy: 'ц',
    TSHcy: 'Ћ',
    tshcy: 'ћ',
    Tstrok: 'Ŧ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    Uacute: 'Ú',
    uacute: 'ú',
    uarr: '↑',
    Uarr: '↟',
    uArr: '⇑',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    ubrcy: 'ў',
    Ubreve: 'Ŭ',
    ubreve: 'ŭ',
    Ucirc: 'Û',
    ucirc: 'û',
    Ucy: 'У',
    ucy: 'у',
    udarr: '⇅',
    Udblac: 'Ű',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    Ufr: '𝔘',
    ufr: '𝔲',
    Ugrave: 'Ù',
    ugrave: 'ù',
    uHar: '⥣',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    Umacr: 'Ū',
    umacr: 'ū',
    uml: '¨',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    uogon: 'ų',
    Uopf: '𝕌',
    uopf: '𝕦',
    UpArrowBar: '⤒',
    uparrow: '↑',
    UpArrow: '↑',
    Uparrow: '⇑',
    UpArrowDownArrow: '⇅',
    updownarrow: '↕',
    UpDownArrow: '↕',
    Updownarrow: '⇕',
    UpEquilibrium: '⥮',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    upsi: 'υ',
    Upsi: 'ϒ',
    upsih: 'ϒ',
    Upsilon: 'Υ',
    upsilon: 'υ',
    UpTeeArrow: '↥',
    UpTee: '⊥',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    Uring: 'Ů',
    uring: 'ů',
    urtri: '◹',
    Uscr: '𝒰',
    uscr: '𝓊',
    utdot: '⋰',
    Utilde: 'Ũ',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    Uuml: 'Ü',
    uuml: 'ü',
    uwangle: '⦧',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    vArr: '⇕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vBar: '⫨',
    Vbar: '⫫',
    vBarv: '⫩',
    Vcy: 'В',
    vcy: 'в',
    vdash: '⊢',
    vDash: '⊨',
    Vdash: '⊩',
    VDash: '⊫',
    Vdashl: '⫦',
    veebar: '⊻',
    vee: '∨',
    Vee: '⋁',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    Verbar: '‖',
    vert: '|',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    Vopf: '𝕍',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    Vscr: '𝒱',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    Vvdash: '⊪',
    vzigzag: '⦚',
    Wcirc: 'Ŵ',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    Wedge: '⋀',
    wedgeq: '≙',
    weierp: '℘',
    Wfr: '𝔚',
    wfr: '𝔴',
    Wopf: '𝕎',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    Wscr: '𝒲',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    Xfr: '𝔛',
    xfr: '𝔵',
    xharr: '⟷',
    xhArr: '⟺',
    Xi: 'Ξ',
    xi: 'ξ',
    xlarr: '⟵',
    xlArr: '⟸',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    Xopf: '𝕏',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrarr: '⟶',
    xrArr: '⟹',
    Xscr: '𝒳',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    Yacute: 'Ý',
    yacute: 'ý',
    YAcy: 'Я',
    yacy: 'я',
    Ycirc: 'Ŷ',
    ycirc: 'ŷ',
    Ycy: 'Ы',
    ycy: 'ы',
    yen: '¥',
    Yfr: '𝔜',
    yfr: '𝔶',
    YIcy: 'Ї',
    yicy: 'ї',
    Yopf: '𝕐',
    yopf: '𝕪',
    Yscr: '𝒴',
    yscr: '𝓎',
    YUcy: 'Ю',
    yucy: 'ю',
    yuml: 'ÿ',
    Yuml: 'Ÿ',
    Zacute: 'Ź',
    zacute: 'ź',
    Zcaron: 'Ž',
    zcaron: 'ž',
    Zcy: 'З',
    zcy: 'з',
    Zdot: 'Ż',
    zdot: 'ż',
    zeetrf: 'ℨ',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    zeta: 'ζ',
    zfr: '𝔷',
    Zfr: 'ℨ',
    ZHcy: 'Ж',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌',
    default: n,
  }),
  s = {
    Aacute: 'Á',
    aacute: 'á',
    Acirc: 'Â',
    acirc: 'â',
    acute: '´',
    AElig: 'Æ',
    aelig: 'æ',
    Agrave: 'À',
    agrave: 'à',
    amp: '&',
    AMP: '&',
    Aring: 'Å',
    aring: 'å',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    brvbar: '¦',
    Ccedil: 'Ç',
    ccedil: 'ç',
    cedil: '¸',
    cent: '¢',
    copy: '©',
    COPY: '©',
    curren: '¤',
    deg: '°',
    divide: '÷',
    Eacute: 'É',
    eacute: 'é',
    Ecirc: 'Ê',
    ecirc: 'ê',
    Egrave: 'È',
    egrave: 'è',
    ETH: 'Ð',
    eth: 'ð',
    Euml: 'Ë',
    euml: 'ë',
    frac12: '½',
    frac14: '¼',
    frac34: '¾',
    gt: '>',
    GT: '>',
    Iacute: 'Í',
    iacute: 'í',
    Icirc: 'Î',
    icirc: 'î',
    iexcl: '¡',
    Igrave: 'Ì',
    igrave: 'ì',
    iquest: '¿',
    Iuml: 'Ï',
    iuml: 'ï',
    laquo: '«',
    lt: '<',
    LT: '<',
    macr: '¯',
    micro: 'µ',
    middot: '·',
    nbsp: ' ',
    not: '¬',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    Oacute: 'Ó',
    oacute: 'ó',
    Ocirc: 'Ô',
    ocirc: 'ô',
    Ograve: 'Ò',
    ograve: 'ò',
    ordf: 'ª',
    ordm: 'º',
    Oslash: 'Ø',
    oslash: 'ø',
    Otilde: 'Õ',
    otilde: 'õ',
    Ouml: 'Ö',
    ouml: 'ö',
    para: '¶',
    plusmn: '±',
    pound: '£',
    quot: '"',
    QUOT: '"',
    raquo: '»',
    reg: '®',
    REG: '®',
    sect: '§',
    shy: '­',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    szlig: 'ß',
    THORN: 'Þ',
    thorn: 'þ',
    times: '×',
    Uacute: 'Ú',
    uacute: 'ú',
    Ucirc: 'Û',
    ucirc: 'û',
    Ugrave: 'Ù',
    ugrave: 'ù',
    uml: '¨',
    Uuml: 'Ü',
    uuml: 'ü',
    Yacute: 'Ý',
    yacute: 'ý',
    yen: '¥',
    yuml: 'ÿ',
  },
  a = Object.freeze({
    Aacute: 'Á',
    aacute: 'á',
    Acirc: 'Â',
    acirc: 'â',
    acute: '´',
    AElig: 'Æ',
    aelig: 'æ',
    Agrave: 'À',
    agrave: 'à',
    amp: '&',
    AMP: '&',
    Aring: 'Å',
    aring: 'å',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    brvbar: '¦',
    Ccedil: 'Ç',
    ccedil: 'ç',
    cedil: '¸',
    cent: '¢',
    copy: '©',
    COPY: '©',
    curren: '¤',
    deg: '°',
    divide: '÷',
    Eacute: 'É',
    eacute: 'é',
    Ecirc: 'Ê',
    ecirc: 'ê',
    Egrave: 'È',
    egrave: 'è',
    ETH: 'Ð',
    eth: 'ð',
    Euml: 'Ë',
    euml: 'ë',
    frac12: '½',
    frac14: '¼',
    frac34: '¾',
    gt: '>',
    GT: '>',
    Iacute: 'Í',
    iacute: 'í',
    Icirc: 'Î',
    icirc: 'î',
    iexcl: '¡',
    Igrave: 'Ì',
    igrave: 'ì',
    iquest: '¿',
    Iuml: 'Ï',
    iuml: 'ï',
    laquo: '«',
    lt: '<',
    LT: '<',
    macr: '¯',
    micro: 'µ',
    middot: '·',
    nbsp: ' ',
    not: '¬',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    Oacute: 'Ó',
    oacute: 'ó',
    Ocirc: 'Ô',
    ocirc: 'ô',
    Ograve: 'Ò',
    ograve: 'ò',
    ordf: 'ª',
    ordm: 'º',
    Oslash: 'Ø',
    oslash: 'ø',
    Otilde: 'Õ',
    otilde: 'õ',
    Ouml: 'Ö',
    ouml: 'ö',
    para: '¶',
    plusmn: '±',
    pound: '£',
    quot: '"',
    QUOT: '"',
    raquo: '»',
    reg: '®',
    REG: '®',
    sect: '§',
    shy: '­',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    szlig: 'ß',
    THORN: 'Þ',
    thorn: 'þ',
    times: '×',
    Uacute: 'Ú',
    uacute: 'ú',
    Ucirc: 'Û',
    ucirc: 'û',
    Ugrave: 'Ù',
    ugrave: 'ù',
    uml: '¨',
    Uuml: 'Ü',
    uuml: 'ü',
    Yacute: 'Ý',
    yacute: 'ý',
    yen: '¥',
    yuml: 'ÿ',
    default: s,
  }),
  c = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' },
  l = Object.freeze({ amp: '&', apos: "'", gt: '>', lt: '<', quot: '"', default: c }),
  u = e(o),
  p = e(a),
  h = e(l),
  f = Et,
  g = 0,
  d = g++,
  m = g++,
  b = g++,
  _ = g++,
  y = g++,
  w = g++,
  v = g++,
  q = g++,
  E = g++,
  x = g++,
  S = g++,
  A = g++,
  T = g++,
  L = g++,
  k = g++,
  D = g++,
  R = g++,
  N = g++,
  C = g++,
  B = g++,
  U = g++,
  O = g++,
  P = g++,
  I = g++,
  V = g++,
  j = g++,
  z = g++,
  G = g++,
  M = g++,
  H = g++,
  Y = g++,
  F = g++,
  J = g++,
  Z = g++,
  Q = g++,
  K = g++,
  W = g++,
  $ = g++,
  X = g++,
  tt = g++,
  et = g++,
  rt = g++,
  it = g++,
  nt = g++,
  ot = g++,
  st = g++,
  at = g++,
  ct = g++,
  lt = g++,
  ut = g++,
  pt = g++,
  ht = g++,
  ft = g++,
  gt = g++,
  dt = g++,
  mt = 0,
  bt = mt++,
  _t = mt++,
  yt = mt++;
function wt(t) {
  return ' ' === t || '\n' === t || '\t' === t || '\f' === t || '\r' === t;
}
function vt(t, e, r) {
  var i = t.toLowerCase();
  return t === i
    ? function(t) {
        t === i ? (this._state = e) : ((this._state = r), this._index--);
      }
    : function(n) {
        n === i || n === t ? (this._state = e) : ((this._state = r), this._index--);
      };
}
function qt(t, e) {
  var r = t.toLowerCase();
  return function(i) {
    i === r || i === t ? (this._state = e) : ((this._state = b), this._index--);
  };
}
function Et(t, e) {
  (this._state = d),
    (this._buffer = ''),
    (this._sectionStart = 0),
    (this._index = 0),
    (this._bufferOffset = 0),
    (this._baseState = d),
    (this._special = bt),
    (this._cbs = e),
    (this._running = !0),
    (this._ended = !1),
    (this._xmlMode = !(!t || !t.xmlMode)),
    (this._decodeEntities = !(!t || !t.decodeEntities));
}
(Et.prototype._stateText = function(t) {
  '<' === t
    ? (this._index > this._sectionStart && this._cbs.ontext(this._getSection()),
      (this._state = m),
      (this._sectionStart = this._index))
    : this._decodeEntities &&
      this._special === bt &&
      '&' === t &&
      (this._index > this._sectionStart && this._cbs.ontext(this._getSection()),
      (this._baseState = d),
      (this._state = pt),
      (this._sectionStart = this._index));
}),
  (Et.prototype._stateBeforeTagName = function(t) {
    '/' === t
      ? (this._state = y)
      : '<' === t
      ? (this._cbs.ontext(this._getSection()), (this._sectionStart = this._index))
      : '>' === t || this._special !== bt || wt(t)
      ? (this._state = d)
      : '!' === t
      ? ((this._state = k), (this._sectionStart = this._index + 1))
      : '?' === t
      ? ((this._state = R), (this._sectionStart = this._index + 1))
      : ((this._state = this._xmlMode || ('s' !== t && 'S' !== t) ? b : Y),
        (this._sectionStart = this._index));
  }),
  (Et.prototype._stateInTagName = function(t) {
    ('/' === t || '>' === t || wt(t)) &&
      (this._emitToken('onopentagname'), (this._state = q), this._index--);
  }),
  (Et.prototype._stateBeforeCloseingTagName = function(t) {
    wt(t) ||
      ('>' === t
        ? (this._state = d)
        : this._special !== bt
        ? 's' === t || 'S' === t
          ? (this._state = F)
          : ((this._state = d), this._index--)
        : ((this._state = w), (this._sectionStart = this._index)));
  }),
  (Et.prototype._stateInCloseingTagName = function(t) {
    ('>' === t || wt(t)) && (this._emitToken('onclosetag'), (this._state = v), this._index--);
  }),
  (Et.prototype._stateAfterCloseingTagName = function(t) {
    '>' === t && ((this._state = d), (this._sectionStart = this._index + 1));
  }),
  (Et.prototype._stateBeforeAttributeName = function(t) {
    '>' === t
      ? (this._cbs.onopentagend(), (this._state = d), (this._sectionStart = this._index + 1))
      : '/' === t
      ? (this._state = _)
      : wt(t) || ((this._state = E), (this._sectionStart = this._index));
  }),
  (Et.prototype._stateInSelfClosingTag = function(t) {
    '>' === t
      ? (this._cbs.onselfclosingtag(), (this._state = d), (this._sectionStart = this._index + 1))
      : wt(t) || ((this._state = q), this._index--);
  }),
  (Et.prototype._stateInAttributeName = function(t) {
    ('=' === t || '/' === t || '>' === t || wt(t)) &&
      (this._cbs.onattribname(this._getSection()),
      (this._sectionStart = -1),
      (this._state = x),
      this._index--);
  }),
  (Et.prototype._stateAfterAttributeName = function(t) {
    '=' === t
      ? (this._state = S)
      : '/' === t || '>' === t
      ? (this._cbs.onattribend(), (this._state = q), this._index--)
      : wt(t) || (this._cbs.onattribend(), (this._state = E), (this._sectionStart = this._index));
  }),
  (Et.prototype._stateBeforeAttributeValue = function(t) {
    '"' === t
      ? ((this._state = A), (this._sectionStart = this._index + 1))
      : "'" === t
      ? ((this._state = T), (this._sectionStart = this._index + 1))
      : wt(t) || ((this._state = L), (this._sectionStart = this._index), this._index--);
  }),
  (Et.prototype._stateInAttributeValueDoubleQuotes = function(t) {
    '"' === t
      ? (this._emitToken('onattribdata'), this._cbs.onattribend(), (this._state = q))
      : this._decodeEntities &&
        '&' === t &&
        (this._emitToken('onattribdata'),
        (this._baseState = this._state),
        (this._state = pt),
        (this._sectionStart = this._index));
  }),
  (Et.prototype._stateInAttributeValueSingleQuotes = function(t) {
    "'" === t
      ? (this._emitToken('onattribdata'), this._cbs.onattribend(), (this._state = q))
      : this._decodeEntities &&
        '&' === t &&
        (this._emitToken('onattribdata'),
        (this._baseState = this._state),
        (this._state = pt),
        (this._sectionStart = this._index));
  }),
  (Et.prototype._stateInAttributeValueNoQuotes = function(t) {
    wt(t) || '>' === t
      ? (this._emitToken('onattribdata'), this._cbs.onattribend(), (this._state = q), this._index--)
      : this._decodeEntities &&
        '&' === t &&
        (this._emitToken('onattribdata'),
        (this._baseState = this._state),
        (this._state = pt),
        (this._sectionStart = this._index));
  }),
  (Et.prototype._stateBeforeDeclaration = function(t) {
    this._state = '[' === t ? O : '-' === t ? N : D;
  }),
  (Et.prototype._stateInDeclaration = function(t) {
    '>' === t &&
      (this._cbs.ondeclaration(this._getSection()),
      (this._state = d),
      (this._sectionStart = this._index + 1));
  }),
  (Et.prototype._stateInProcessingInstruction = function(t) {
    '>' === t &&
      (this._cbs.onprocessinginstruction(this._getSection()),
      (this._state = d),
      (this._sectionStart = this._index + 1));
  }),
  (Et.prototype._stateBeforeComment = function(t) {
    '-' === t ? ((this._state = C), (this._sectionStart = this._index + 1)) : (this._state = D);
  }),
  (Et.prototype._stateInComment = function(t) {
    '-' === t && (this._state = B);
  }),
  (Et.prototype._stateAfterComment1 = function(t) {
    this._state = '-' === t ? U : C;
  }),
  (Et.prototype._stateAfterComment2 = function(t) {
    '>' === t
      ? (this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2)),
        (this._state = d),
        (this._sectionStart = this._index + 1))
      : '-' !== t && (this._state = C);
  }),
  (Et.prototype._stateBeforeCdata1 = vt('C', P, D)),
  (Et.prototype._stateBeforeCdata2 = vt('D', I, D)),
  (Et.prototype._stateBeforeCdata3 = vt('A', V, D)),
  (Et.prototype._stateBeforeCdata4 = vt('T', j, D)),
  (Et.prototype._stateBeforeCdata5 = vt('A', z, D)),
  (Et.prototype._stateBeforeCdata6 = function(t) {
    '[' === t
      ? ((this._state = G), (this._sectionStart = this._index + 1))
      : ((this._state = D), this._index--);
  }),
  (Et.prototype._stateInCdata = function(t) {
    ']' === t && (this._state = M);
  }),
  (Et.prototype._stateAfterCdata1 = function(t) {
    this._state = ']' === t ? H : G;
  }),
  (Et.prototype._stateAfterCdata2 = function(t) {
    '>' === t
      ? (this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2)),
        (this._state = d),
        (this._sectionStart = this._index + 1))
      : ']' !== t && (this._state = G);
  }),
  (Et.prototype._stateBeforeSpecial = function(t) {
    'c' === t || 'C' === t
      ? (this._state = J)
      : 't' === t || 'T' === t
      ? (this._state = it)
      : ((this._state = b), this._index--);
  }),
  (Et.prototype._stateBeforeSpecialEnd = function(t) {
    this._special !== _t || ('c' !== t && 'C' !== t)
      ? this._special !== yt || ('t' !== t && 'T' !== t)
        ? (this._state = d)
        : (this._state = at)
      : (this._state = $);
  }),
  (Et.prototype._stateBeforeScript1 = qt('R', Z)),
  (Et.prototype._stateBeforeScript2 = qt('I', Q)),
  (Et.prototype._stateBeforeScript3 = qt('P', K)),
  (Et.prototype._stateBeforeScript4 = qt('T', W)),
  (Et.prototype._stateBeforeScript5 = function(t) {
    ('/' === t || '>' === t || wt(t)) && (this._special = _t), (this._state = b), this._index--;
  }),
  (Et.prototype._stateAfterScript1 = vt('R', X, d)),
  (Et.prototype._stateAfterScript2 = vt('I', tt, d)),
  (Et.prototype._stateAfterScript3 = vt('P', et, d)),
  (Et.prototype._stateAfterScript4 = vt('T', rt, d)),
  (Et.prototype._stateAfterScript5 = function(t) {
    '>' === t || wt(t)
      ? ((this._special = bt),
        (this._state = w),
        (this._sectionStart = this._index - 6),
        this._index--)
      : (this._state = d);
  }),
  (Et.prototype._stateBeforeStyle1 = qt('Y', nt)),
  (Et.prototype._stateBeforeStyle2 = qt('L', ot)),
  (Et.prototype._stateBeforeStyle3 = qt('E', st)),
  (Et.prototype._stateBeforeStyle4 = function(t) {
    ('/' === t || '>' === t || wt(t)) && (this._special = yt), (this._state = b), this._index--;
  }),
  (Et.prototype._stateAfterStyle1 = vt('Y', ct, d)),
  (Et.prototype._stateAfterStyle2 = vt('L', lt, d)),
  (Et.prototype._stateAfterStyle3 = vt('E', ut, d)),
  (Et.prototype._stateAfterStyle4 = function(t) {
    '>' === t || wt(t)
      ? ((this._special = bt),
        (this._state = w),
        (this._sectionStart = this._index - 5),
        this._index--)
      : (this._state = d);
  }),
  (Et.prototype._stateBeforeEntity = vt('#', ht, ft)),
  (Et.prototype._stateBeforeNumericEntity = vt('X', dt, gt)),
  (Et.prototype._parseNamedEntityStrict = function() {
    if (this._sectionStart + 1 < this._index) {
      var t = this._buffer.substring(this._sectionStart + 1, this._index),
        e = this._xmlMode ? h : u;
      e.hasOwnProperty(t) && (this._emitPartial(e[t]), (this._sectionStart = this._index + 1));
    }
  }),
  (Et.prototype._parseLegacyEntity = function() {
    var t = this._sectionStart + 1,
      e = this._index - t;
    for (e > 6 && (e = 6); e >= 2; ) {
      var r = this._buffer.substr(t, e);
      if (p.hasOwnProperty(r)) return this._emitPartial(p[r]), void (this._sectionStart += e + 1);
      e--;
    }
  }),
  (Et.prototype._stateInNamedEntity = function(t) {
    ';' === t
      ? (this._parseNamedEntityStrict(),
        this._sectionStart + 1 < this._index && !this._xmlMode && this._parseLegacyEntity(),
        (this._state = this._baseState))
      : (t < 'a' || t > 'z') &&
        (t < 'A' || t > 'Z') &&
        (t < '0' || t > '9') &&
        (this._xmlMode ||
          this._sectionStart + 1 === this._index ||
          (this._baseState !== d
            ? '=' !== t && this._parseNamedEntityStrict()
            : this._parseLegacyEntity()),
        (this._state = this._baseState),
        this._index--);
  }),
  (Et.prototype._decodeNumericEntity = function(t, e) {
    var r = this._sectionStart + t;
    if (r !== this._index) {
      var n = this._buffer.substring(r, this._index),
        o = parseInt(n, e);
      this._emitPartial(i(o)), (this._sectionStart = this._index);
    } else this._sectionStart--;
    this._state = this._baseState;
  }),
  (Et.prototype._stateInNumericEntity = function(t) {
    ';' === t
      ? (this._decodeNumericEntity(2, 10), this._sectionStart++)
      : (t < '0' || t > '9') &&
        (this._xmlMode ? (this._state = this._baseState) : this._decodeNumericEntity(2, 10),
        this._index--);
  }),
  (Et.prototype._stateInHexEntity = function(t) {
    ';' === t
      ? (this._decodeNumericEntity(3, 16), this._sectionStart++)
      : (t < 'a' || t > 'f') &&
        (t < 'A' || t > 'F') &&
        (t < '0' || t > '9') &&
        (this._xmlMode ? (this._state = this._baseState) : this._decodeNumericEntity(3, 16),
        this._index--);
  }),
  (Et.prototype._cleanup = function() {
    this._sectionStart < 0
      ? ((this._buffer = ''), (this._bufferOffset += this._index), (this._index = 0))
      : this._running &&
        (this._state === d
          ? (this._sectionStart !== this._index &&
              this._cbs.ontext(this._buffer.substr(this._sectionStart)),
            (this._buffer = ''),
            (this._bufferOffset += this._index),
            (this._index = 0))
          : this._sectionStart === this._index
          ? ((this._buffer = ''), (this._bufferOffset += this._index), (this._index = 0))
          : ((this._buffer = this._buffer.substr(this._sectionStart)),
            (this._index -= this._sectionStart),
            (this._bufferOffset += this._sectionStart)),
        (this._sectionStart = 0));
  }),
  (Et.prototype.write = function(t) {
    this._ended && this._cbs.onerror(Error('.write() after done!')),
      (this._buffer += t),
      this._parse();
  }),
  (Et.prototype._parse = function() {
    for (; this._index < this._buffer.length && this._running; ) {
      var t = this._buffer.charAt(this._index);
      this._state === d
        ? this._stateText(t)
        : this._state === m
        ? this._stateBeforeTagName(t)
        : this._state === b
        ? this._stateInTagName(t)
        : this._state === y
        ? this._stateBeforeCloseingTagName(t)
        : this._state === w
        ? this._stateInCloseingTagName(t)
        : this._state === v
        ? this._stateAfterCloseingTagName(t)
        : this._state === _
        ? this._stateInSelfClosingTag(t)
        : this._state === q
        ? this._stateBeforeAttributeName(t)
        : this._state === E
        ? this._stateInAttributeName(t)
        : this._state === x
        ? this._stateAfterAttributeName(t)
        : this._state === S
        ? this._stateBeforeAttributeValue(t)
        : this._state === A
        ? this._stateInAttributeValueDoubleQuotes(t)
        : this._state === T
        ? this._stateInAttributeValueSingleQuotes(t)
        : this._state === L
        ? this._stateInAttributeValueNoQuotes(t)
        : this._state === k
        ? this._stateBeforeDeclaration(t)
        : this._state === D
        ? this._stateInDeclaration(t)
        : this._state === R
        ? this._stateInProcessingInstruction(t)
        : this._state === N
        ? this._stateBeforeComment(t)
        : this._state === C
        ? this._stateInComment(t)
        : this._state === B
        ? this._stateAfterComment1(t)
        : this._state === U
        ? this._stateAfterComment2(t)
        : this._state === O
        ? this._stateBeforeCdata1(t)
        : this._state === P
        ? this._stateBeforeCdata2(t)
        : this._state === I
        ? this._stateBeforeCdata3(t)
        : this._state === V
        ? this._stateBeforeCdata4(t)
        : this._state === j
        ? this._stateBeforeCdata5(t)
        : this._state === z
        ? this._stateBeforeCdata6(t)
        : this._state === G
        ? this._stateInCdata(t)
        : this._state === M
        ? this._stateAfterCdata1(t)
        : this._state === H
        ? this._stateAfterCdata2(t)
        : this._state === Y
        ? this._stateBeforeSpecial(t)
        : this._state === F
        ? this._stateBeforeSpecialEnd(t)
        : this._state === J
        ? this._stateBeforeScript1(t)
        : this._state === Z
        ? this._stateBeforeScript2(t)
        : this._state === Q
        ? this._stateBeforeScript3(t)
        : this._state === K
        ? this._stateBeforeScript4(t)
        : this._state === W
        ? this._stateBeforeScript5(t)
        : this._state === $
        ? this._stateAfterScript1(t)
        : this._state === X
        ? this._stateAfterScript2(t)
        : this._state === tt
        ? this._stateAfterScript3(t)
        : this._state === et
        ? this._stateAfterScript4(t)
        : this._state === rt
        ? this._stateAfterScript5(t)
        : this._state === it
        ? this._stateBeforeStyle1(t)
        : this._state === nt
        ? this._stateBeforeStyle2(t)
        : this._state === ot
        ? this._stateBeforeStyle3(t)
        : this._state === st
        ? this._stateBeforeStyle4(t)
        : this._state === at
        ? this._stateAfterStyle1(t)
        : this._state === ct
        ? this._stateAfterStyle2(t)
        : this._state === lt
        ? this._stateAfterStyle3(t)
        : this._state === ut
        ? this._stateAfterStyle4(t)
        : this._state === pt
        ? this._stateBeforeEntity(t)
        : this._state === ht
        ? this._stateBeforeNumericEntity(t)
        : this._state === ft
        ? this._stateInNamedEntity(t)
        : this._state === gt
        ? this._stateInNumericEntity(t)
        : this._state === dt
        ? this._stateInHexEntity(t)
        : this._cbs.onerror(Error('unknown _state'), this._state),
        this._index++;
    }
    this._cleanup();
  }),
  (Et.prototype.pause = function() {
    this._running = !1;
  }),
  (Et.prototype.resume = function() {
    (this._running = !0),
      this._index < this._buffer.length && this._parse(),
      this._ended && this._finish();
  }),
  (Et.prototype.end = function(t) {
    this._ended && this._cbs.onerror(Error('.end() after done!')),
      t && this.write(t),
      (this._ended = !0),
      this._running && this._finish();
  }),
  (Et.prototype._finish = function() {
    this._sectionStart < this._index && this._handleTrailingData(), this._cbs.onend();
  }),
  (Et.prototype._handleTrailingData = function() {
    var t = this._buffer.substr(this._sectionStart);
    this._state === G || this._state === M || this._state === H
      ? this._cbs.oncdata(t)
      : this._state === C || this._state === B || this._state === U
      ? this._cbs.oncomment(t)
      : this._state !== ft || this._xmlMode
      ? this._state !== gt || this._xmlMode
        ? this._state !== dt || this._xmlMode
          ? this._state !== b &&
            this._state !== q &&
            this._state !== S &&
            this._state !== x &&
            this._state !== E &&
            this._state !== T &&
            this._state !== A &&
            this._state !== L &&
            this._state !== w &&
            this._cbs.ontext(t)
          : (this._decodeNumericEntity(3, 16),
            this._sectionStart < this._index &&
              ((this._state = this._baseState), this._handleTrailingData()))
        : (this._decodeNumericEntity(2, 10),
          this._sectionStart < this._index &&
            ((this._state = this._baseState), this._handleTrailingData()))
      : (this._parseLegacyEntity(),
        this._sectionStart < this._index &&
          ((this._state = this._baseState), this._handleTrailingData()));
  }),
  (Et.prototype.reset = function() {
    Et.call(this, { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities }, this._cbs);
  }),
  (Et.prototype.getAbsoluteIndex = function() {
    return this._bufferOffset + this._index;
  }),
  (Et.prototype._getSection = function() {
    return this._buffer.substring(this._sectionStart, this._index);
  }),
  (Et.prototype._emitToken = function(t) {
    this._cbs[t](this._getSection()), (this._sectionStart = -1);
  }),
  (Et.prototype._emitPartial = function(t) {
    this._baseState !== d ? this._cbs.onattribdata(t) : this._cbs.ontext(t);
  });
var xt =
  'undefined' != typeof global
    ? global
    : 'undefined' != typeof self
    ? self
    : 'undefined' != typeof window
    ? window
    : {};
function St() {
  throw new Error('setTimeout has not been defined');
}
function At() {
  throw new Error('clearTimeout has not been defined');
}
var Tt = St,
  Lt = At;
function kt(t) {
  if (Tt === setTimeout) return setTimeout(t, 0);
  if ((Tt === St || !Tt) && setTimeout) return (Tt = setTimeout), setTimeout(t, 0);
  try {
    return Tt(t, 0);
  } catch (e) {
    try {
      return Tt.call(null, t, 0);
    } catch (e) {
      return Tt.call(this, t, 0);
    }
  }
}
'function' == typeof xt.setTimeout && (Tt = setTimeout),
  'function' == typeof xt.clearTimeout && (Lt = clearTimeout);
var Dt,
  Rt = [],
  Nt = !1,
  Ct = -1;
function Bt() {
  Nt && Dt && ((Nt = !1), Dt.length ? (Rt = Dt.concat(Rt)) : (Ct = -1), Rt.length && Ut());
}
function Ut() {
  if (!Nt) {
    var t = kt(Bt);
    Nt = !0;
    for (var e = Rt.length; e; ) {
      for (Dt = Rt, Rt = []; ++Ct < e; ) Dt && Dt[Ct].run();
      (Ct = -1), (e = Rt.length);
    }
    (Dt = null),
      (Nt = !1),
      (function(t) {
        if (Lt === clearTimeout) return clearTimeout(t);
        if ((Lt === At || !Lt) && clearTimeout) return (Lt = clearTimeout), clearTimeout(t);
        try {
          Lt(t);
        } catch (e) {
          try {
            return Lt.call(null, t);
          } catch (e) {
            return Lt.call(this, t);
          }
        }
      })(t);
  }
}
function Ot(t) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
  Rt.push(new Pt(t, e)), 1 !== Rt.length || Nt || kt(Ut);
}
function Pt(t, e) {
  (this.fun = t), (this.array = e);
}
Pt.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function It() {}
var Vt = It,
  jt = It,
  zt = It,
  Gt = It,
  Mt = It,
  Ht = It,
  Yt = It;
var Ft = xt.performance || {},
  Jt =
    Ft.now ||
    Ft.mozNow ||
    Ft.msNow ||
    Ft.oNow ||
    Ft.webkitNow ||
    function() {
      return new Date().getTime();
    };
var Zt = new Date();
var Qt = {
    nextTick: Ot,
    title: 'browser',
    browser: !0,
    env: {},
    argv: [],
    version: '',
    versions: {},
    on: Vt,
    addListener: jt,
    once: zt,
    off: Gt,
    removeListener: Mt,
    removeAllListeners: Ht,
    emit: Yt,
    binding: function(t) {
      throw new Error('process.binding is not supported');
    },
    cwd: function() {
      return '/';
    },
    chdir: function(t) {
      throw new Error('process.chdir is not supported');
    },
    umask: function() {
      return 0;
    },
    hrtime: function(t) {
      var e = 0.001 * Jt.call(Ft),
        r = Math.floor(e),
        i = Math.floor((e % 1) * 1e9);
      return t && ((r -= t[0]), (i -= t[1]) < 0 && (r--, (i += 1e9))), [r, i];
    },
    platform: 'browser',
    release: {},
    config: {},
    uptime: function() {
      return (new Date() - Zt) / 1e3;
    },
  },
  Kt = [],
  Wt = [],
  $t = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
  Xt = !1;
function te() {
  Xt = !0;
  for (
    var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', e = 0, r = t.length;
    e < r;
    ++e
  )
    (Kt[e] = t[e]), (Wt[t.charCodeAt(e)] = e);
  (Wt['-'.charCodeAt(0)] = 62), (Wt['_'.charCodeAt(0)] = 63);
}
function ee(t, e, r) {
  for (var i, n, o = [], s = e; s < r; s += 3)
    (i = (t[s] << 16) + (t[s + 1] << 8) + t[s + 2]),
      o.push(Kt[((n = i) >> 18) & 63] + Kt[(n >> 12) & 63] + Kt[(n >> 6) & 63] + Kt[63 & n]);
  return o.join('');
}
function re(t) {
  var e;
  Xt || te();
  for (var r = t.length, i = r % 3, n = '', o = [], s = 0, a = r - i; s < a; s += 16383)
    o.push(ee(t, s, s + 16383 > a ? a : s + 16383));
  return (
    1 === i
      ? ((e = t[r - 1]), (n += Kt[e >> 2]), (n += Kt[(e << 4) & 63]), (n += '=='))
      : 2 === i &&
        ((e = (t[r - 2] << 8) + t[r - 1]),
        (n += Kt[e >> 10]),
        (n += Kt[(e >> 4) & 63]),
        (n += Kt[(e << 2) & 63]),
        (n += '=')),
    o.push(n),
    o.join('')
  );
}
function ie(t, e, r, i, n) {
  var o,
    s,
    a = 8 * n - i - 1,
    c = (1 << a) - 1,
    l = c >> 1,
    u = -7,
    p = r ? n - 1 : 0,
    h = r ? -1 : 1,
    f = t[e + p];
  for (
    p += h, o = f & ((1 << -u) - 1), f >>= -u, u += a;
    u > 0;
    o = 256 * o + t[e + p], p += h, u -= 8
  );
  for (s = o & ((1 << -u) - 1), o >>= -u, u += i; u > 0; s = 256 * s + t[e + p], p += h, u -= 8);
  if (0 === o) o = 1 - l;
  else {
    if (o === c) return s ? NaN : (1 / 0) * (f ? -1 : 1);
    (s += Math.pow(2, i)), (o -= l);
  }
  return (f ? -1 : 1) * s * Math.pow(2, o - i);
}
function ne(t, e, r, i, n, o) {
  var s,
    a,
    c,
    l = 8 * o - n - 1,
    u = (1 << l) - 1,
    p = u >> 1,
    h = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    f = i ? 0 : o - 1,
    g = i ? 1 : -1,
    d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
  for (
    e = Math.abs(e),
      isNaN(e) || e === 1 / 0
        ? ((a = isNaN(e) ? 1 : 0), (s = u))
        : ((s = Math.floor(Math.log(e) / Math.LN2)),
          e * (c = Math.pow(2, -s)) < 1 && (s--, (c *= 2)),
          (e += s + p >= 1 ? h / c : h * Math.pow(2, 1 - p)) * c >= 2 && (s++, (c /= 2)),
          s + p >= u
            ? ((a = 0), (s = u))
            : s + p >= 1
            ? ((a = (e * c - 1) * Math.pow(2, n)), (s += p))
            : ((a = e * Math.pow(2, p - 1) * Math.pow(2, n)), (s = 0)));
    n >= 8;
    t[r + f] = 255 & a, f += g, a /= 256, n -= 8
  );
  for (s = (s << n) | a, l += n; l > 0; t[r + f] = 255 & s, f += g, s /= 256, l -= 8);
  t[r + f - g] |= 128 * d;
}
var oe = {}.toString,
  se =
    Array.isArray ||
    function(t) {
      return '[object Array]' == oe.call(t);
    };
function ae() {
  return le.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function ce(t, e) {
  if (ae() < e) throw new RangeError('Invalid typed array length');
  return (
    le.TYPED_ARRAY_SUPPORT
      ? ((t = new Uint8Array(e)).__proto__ = le.prototype)
      : (null === t && (t = new le(e)), (t.length = e)),
    t
  );
}
function le(t, e, r) {
  if (!(le.TYPED_ARRAY_SUPPORT || this instanceof le)) return new le(t, e, r);
  if ('number' == typeof t) {
    if ('string' == typeof e)
      throw new Error('If encoding is specified then the first argument must be a string');
    return he(this, t);
  }
  return ue(this, t, e, r);
}
function ue(t, e, r, i) {
  if ('number' == typeof e) throw new TypeError('"value" argument must not be a number');
  return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer
    ? (function(t, e, r, i) {
        if ((e.byteLength, r < 0 || e.byteLength < r))
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < r + (i || 0)) throw new RangeError("'length' is out of bounds");
        e =
          void 0 === r && void 0 === i
            ? new Uint8Array(e)
            : void 0 === i
            ? new Uint8Array(e, r)
            : new Uint8Array(e, r, i);
        le.TYPED_ARRAY_SUPPORT ? ((t = e).__proto__ = le.prototype) : (t = fe(t, e));
        return t;
      })(t, e, r, i)
    : 'string' == typeof e
    ? (function(t, e, r) {
        ('string' == typeof r && '' !== r) || (r = 'utf8');
        if (!le.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
        var i = 0 | me(e, r),
          n = (t = ce(t, i)).write(e, r);
        n !== i && (t = t.slice(0, n));
        return t;
      })(t, e, r)
    : (function(t, e) {
        if (de(e)) {
          var r = 0 | ge(e.length);
          return 0 === (t = ce(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
        }
        if (e) {
          if (
            ('undefined' != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer) ||
            'length' in e
          )
            return 'number' != typeof e.length || (i = e.length) != i ? ce(t, 0) : fe(t, e);
          if ('Buffer' === e.type && se(e.data)) return fe(t, e.data);
        }
        var i;
        throw new TypeError(
          'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
        );
      })(t, e);
}
function pe(t) {
  if ('number' != typeof t) throw new TypeError('"size" argument must be a number');
  if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function he(t, e) {
  if ((pe(e), (t = ce(t, e < 0 ? 0 : 0 | ge(e))), !le.TYPED_ARRAY_SUPPORT))
    for (var r = 0; r < e; ++r) t[r] = 0;
  return t;
}
function fe(t, e) {
  var r = e.length < 0 ? 0 : 0 | ge(e.length);
  t = ce(t, r);
  for (var i = 0; i < r; i += 1) t[i] = 255 & e[i];
  return t;
}
function ge(t) {
  if (t >= ae())
    throw new RangeError(
      'Attempt to allocate Buffer larger than maximum size: 0x' + ae().toString(16) + ' bytes',
    );
  return 0 | t;
}
function de(t) {
  return !(null == t || !t._isBuffer);
}
function me(t, e) {
  if (de(t)) return t.length;
  if (
    'undefined' != typeof ArrayBuffer &&
    'function' == typeof ArrayBuffer.isView &&
    (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
  )
    return t.byteLength;
  'string' != typeof t && (t = '' + t);
  var r = t.length;
  if (0 === r) return 0;
  for (var i = !1; ; )
    switch (e) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return r;
      case 'utf8':
      case 'utf-8':
      case void 0:
        return Ge(t).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 2 * r;
      case 'hex':
        return r >>> 1;
      case 'base64':
        return Me(t).length;
      default:
        if (i) return Ge(t).length;
        (e = ('' + e).toLowerCase()), (i = !0);
    }
}
function be(t, e, r) {
  var i = t[e];
  (t[e] = t[r]), (t[r] = i);
}
function _e(t, e, r, i, n) {
  if (0 === t.length) return -1;
  if (
    ('string' == typeof r
      ? ((i = r), (r = 0))
      : r > 2147483647
      ? (r = 2147483647)
      : r < -2147483648 && (r = -2147483648),
    (r = +r),
    isNaN(r) && (r = n ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length)
  ) {
    if (n) return -1;
    r = t.length - 1;
  } else if (r < 0) {
    if (!n) return -1;
    r = 0;
  }
  if (('string' == typeof e && (e = le.from(e, i)), de(e)))
    return 0 === e.length ? -1 : ye(t, e, r, i, n);
  if ('number' == typeof e)
    return (
      (e &= 255),
      le.TYPED_ARRAY_SUPPORT && 'function' == typeof Uint8Array.prototype.indexOf
        ? n
          ? Uint8Array.prototype.indexOf.call(t, e, r)
          : Uint8Array.prototype.lastIndexOf.call(t, e, r)
        : ye(t, [e], r, i, n)
    );
  throw new TypeError('val must be string, number or Buffer');
}
function ye(t, e, r, i, n) {
  var o,
    s = 1,
    a = t.length,
    c = e.length;
  if (
    void 0 !== i &&
    ('ucs2' === (i = String(i).toLowerCase()) ||
      'ucs-2' === i ||
      'utf16le' === i ||
      'utf-16le' === i)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (s = 2), (a /= 2), (c /= 2), (r /= 2);
  }
  function l(t, e) {
    return 1 === s ? t[e] : t.readUInt16BE(e * s);
  }
  if (n) {
    var u = -1;
    for (o = r; o < a; o++)
      if (l(t, o) === l(e, -1 === u ? 0 : o - u)) {
        if ((-1 === u && (u = o), o - u + 1 === c)) return u * s;
      } else -1 !== u && (o -= o - u), (u = -1);
  } else
    for (r + c > a && (r = a - c), o = r; o >= 0; o--) {
      for (var p = !0, h = 0; h < c; h++)
        if (l(t, o + h) !== l(e, h)) {
          p = !1;
          break;
        }
      if (p) return o;
    }
  return -1;
}
function we(t, e, r, i) {
  r = Number(r) || 0;
  var n = t.length - r;
  i ? (i = Number(i)) > n && (i = n) : (i = n);
  var o = e.length;
  if (o % 2 != 0) throw new TypeError('Invalid hex string');
  i > o / 2 && (i = o / 2);
  for (var s = 0; s < i; ++s) {
    var a = parseInt(e.substr(2 * s, 2), 16);
    if (isNaN(a)) return s;
    t[r + s] = a;
  }
  return s;
}
function ve(t, e, r, i) {
  return He(Ge(e, t.length - r), t, r, i);
}
function qe(t, e, r, i) {
  return He(
    (function(t) {
      for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
      return e;
    })(e),
    t,
    r,
    i,
  );
}
function Ee(t, e, r, i) {
  return qe(t, e, r, i);
}
function xe(t, e, r, i) {
  return He(Me(e), t, r, i);
}
function Se(t, e, r, i) {
  return He(
    (function(t, e) {
      for (var r, i, n, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
        (r = t.charCodeAt(s)), (i = r >> 8), (n = r % 256), o.push(n), o.push(i);
      return o;
    })(e, t.length - r),
    t,
    r,
    i,
  );
}
function Ae(t, e, r) {
  return 0 === e && r === t.length ? re(t) : re(t.slice(e, r));
}
function Te(t, e, r) {
  r = Math.min(t.length, r);
  for (var i = [], n = e; n < r; ) {
    var o,
      s,
      a,
      c,
      l = t[n],
      u = null,
      p = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
    if (n + p <= r)
      switch (p) {
        case 1:
          l < 128 && (u = l);
          break;
        case 2:
          128 == (192 & (o = t[n + 1])) && (c = ((31 & l) << 6) | (63 & o)) > 127 && (u = c);
          break;
        case 3:
          (o = t[n + 1]),
            (s = t[n + 2]),
            128 == (192 & o) &&
              128 == (192 & s) &&
              (c = ((15 & l) << 12) | ((63 & o) << 6) | (63 & s)) > 2047 &&
              (c < 55296 || c > 57343) &&
              (u = c);
          break;
        case 4:
          (o = t[n + 1]),
            (s = t[n + 2]),
            (a = t[n + 3]),
            128 == (192 & o) &&
              128 == (192 & s) &&
              128 == (192 & a) &&
              (c = ((15 & l) << 18) | ((63 & o) << 12) | ((63 & s) << 6) | (63 & a)) > 65535 &&
              c < 1114112 &&
              (u = c);
      }
    null === u
      ? ((u = 65533), (p = 1))
      : u > 65535 && ((u -= 65536), i.push(((u >>> 10) & 1023) | 55296), (u = 56320 | (1023 & u))),
      i.push(u),
      (n += p);
  }
  return (function(t) {
    var e = t.length;
    if (e <= Le) return String.fromCharCode.apply(String, t);
    var r = '',
      i = 0;
    for (; i < e; ) r += String.fromCharCode.apply(String, t.slice(i, (i += Le)));
    return r;
  })(i);
}
(le.TYPED_ARRAY_SUPPORT = void 0 === xt.TYPED_ARRAY_SUPPORT || xt.TYPED_ARRAY_SUPPORT),
  (le.poolSize = 8192),
  (le._augment = function(t) {
    return (t.__proto__ = le.prototype), t;
  }),
  (le.from = function(t, e, r) {
    return ue(null, t, e, r);
  }),
  le.TYPED_ARRAY_SUPPORT &&
    ((le.prototype.__proto__ = Uint8Array.prototype), (le.__proto__ = Uint8Array)),
  (le.alloc = function(t, e, r) {
    return (function(t, e, r, i) {
      return (
        pe(e),
        e <= 0
          ? ce(t, e)
          : void 0 !== r
          ? 'string' == typeof i
            ? ce(t, e).fill(r, i)
            : ce(t, e).fill(r)
          : ce(t, e)
      );
    })(null, t, e, r);
  }),
  (le.allocUnsafe = function(t) {
    return he(null, t);
  }),
  (le.allocUnsafeSlow = function(t) {
    return he(null, t);
  }),
  (le.isBuffer = function(t) {
    return (
      null != t &&
      (!!t._isBuffer ||
        Ye(t) ||
        (function(t) {
          return (
            'function' == typeof t.readFloatLE && 'function' == typeof t.slice && Ye(t.slice(0, 0))
          );
        })(t))
    );
  }),
  (le.compare = function(t, e) {
    if (!de(t) || !de(e)) throw new TypeError('Arguments must be Buffers');
    if (t === e) return 0;
    for (var r = t.length, i = e.length, n = 0, o = Math.min(r, i); n < o; ++n)
      if (t[n] !== e[n]) {
        (r = t[n]), (i = e[n]);
        break;
      }
    return r < i ? -1 : i < r ? 1 : 0;
  }),
  (le.isEncoding = function(t) {
    switch (String(t).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return !0;
      default:
        return !1;
    }
  }),
  (le.concat = function(t, e) {
    if (!se(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return le.alloc(0);
    var r;
    if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    var i = le.allocUnsafe(e),
      n = 0;
    for (r = 0; r < t.length; ++r) {
      var o = t[r];
      if (!de(o)) throw new TypeError('"list" argument must be an Array of Buffers');
      o.copy(i, n), (n += o.length);
    }
    return i;
  }),
  (le.byteLength = me),
  (le.prototype._isBuffer = !0),
  (le.prototype.swap16 = function() {
    var t = this.length;
    if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for (var e = 0; e < t; e += 2) be(this, e, e + 1);
    return this;
  }),
  (le.prototype.swap32 = function() {
    var t = this.length;
    if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for (var e = 0; e < t; e += 4) be(this, e, e + 3), be(this, e + 1, e + 2);
    return this;
  }),
  (le.prototype.swap64 = function() {
    var t = this.length;
    if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for (var e = 0; e < t; e += 8)
      be(this, e, e + 7), be(this, e + 1, e + 6), be(this, e + 2, e + 5), be(this, e + 3, e + 4);
    return this;
  }),
  (le.prototype.toString = function() {
    var t = 0 | this.length;
    return 0 === t
      ? ''
      : 0 === arguments.length
      ? Te(this, 0, t)
      : function(t, e, r) {
          var i = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
          if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return '';
          if ((r >>>= 0) <= (e >>>= 0)) return '';
          for (t || (t = 'utf8'); ; )
            switch (t) {
              case 'hex':
                return Re(this, e, r);
              case 'utf8':
              case 'utf-8':
                return Te(this, e, r);
              case 'ascii':
                return ke(this, e, r);
              case 'latin1':
              case 'binary':
                return De(this, e, r);
              case 'base64':
                return Ae(this, e, r);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return Ne(this, e, r);
              default:
                if (i) throw new TypeError('Unknown encoding: ' + t);
                (t = (t + '').toLowerCase()), (i = !0);
            }
        }.apply(this, arguments);
  }),
  (le.prototype.equals = function(t) {
    if (!de(t)) throw new TypeError('Argument must be a Buffer');
    return this === t || 0 === le.compare(this, t);
  }),
  (le.prototype.inspect = function() {
    var t = '';
    return (
      this.length > 0 &&
        ((t = this.toString('hex', 0, 50)
          .match(/.{2}/g)
          .join(' ')),
        this.length > 50 && (t += ' ... ')),
      '<Buffer ' + t + '>'
    );
  }),
  (le.prototype.compare = function(t, e, r, i, n) {
    if (!de(t)) throw new TypeError('Argument must be a Buffer');
    if (
      (void 0 === e && (e = 0),
      void 0 === r && (r = t ? t.length : 0),
      void 0 === i && (i = 0),
      void 0 === n && (n = this.length),
      e < 0 || r > t.length || i < 0 || n > this.length)
    )
      throw new RangeError('out of range index');
    if (i >= n && e >= r) return 0;
    if (i >= n) return -1;
    if (e >= r) return 1;
    if (this === t) return 0;
    for (
      var o = (n >>>= 0) - (i >>>= 0),
        s = (r >>>= 0) - (e >>>= 0),
        a = Math.min(o, s),
        c = this.slice(i, n),
        l = t.slice(e, r),
        u = 0;
      u < a;
      ++u
    )
      if (c[u] !== l[u]) {
        (o = c[u]), (s = l[u]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  }),
  (le.prototype.includes = function(t, e, r) {
    return -1 !== this.indexOf(t, e, r);
  }),
  (le.prototype.indexOf = function(t, e, r) {
    return _e(this, t, e, r, !0);
  }),
  (le.prototype.lastIndexOf = function(t, e, r) {
    return _e(this, t, e, r, !1);
  }),
  (le.prototype.write = function(t, e, r, i) {
    if (void 0 === e) (i = 'utf8'), (r = this.length), (e = 0);
    else if (void 0 === r && 'string' == typeof e) (i = e), (r = this.length), (e = 0);
    else {
      if (!isFinite(e))
        throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
      (e |= 0), isFinite(r) ? ((r |= 0), void 0 === i && (i = 'utf8')) : ((i = r), (r = void 0));
    }
    var n = this.length - e;
    if (((void 0 === r || r > n) && (r = n), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
      throw new RangeError('Attempt to write outside buffer bounds');
    i || (i = 'utf8');
    for (var o = !1; ; )
      switch (i) {
        case 'hex':
          return we(this, t, e, r);
        case 'utf8':
        case 'utf-8':
          return ve(this, t, e, r);
        case 'ascii':
          return qe(this, t, e, r);
        case 'latin1':
        case 'binary':
          return Ee(this, t, e, r);
        case 'base64':
          return xe(this, t, e, r);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return Se(this, t, e, r);
        default:
          if (o) throw new TypeError('Unknown encoding: ' + i);
          (i = ('' + i).toLowerCase()), (o = !0);
      }
  }),
  (le.prototype.toJSON = function() {
    return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) };
  });
var Le = 4096;
function ke(t, e, r) {
  var i = '';
  r = Math.min(t.length, r);
  for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
  return i;
}
function De(t, e, r) {
  var i = '';
  r = Math.min(t.length, r);
  for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
  return i;
}
function Re(t, e, r) {
  var i = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i);
  for (var n = '', o = e; o < r; ++o) n += ze(t[o]);
  return n;
}
function Ne(t, e, r) {
  for (var i = t.slice(e, r), n = '', o = 0; o < i.length; o += 2)
    n += String.fromCharCode(i[o] + 256 * i[o + 1]);
  return n;
}
function Ce(t, e, r) {
  if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
  if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
}
function Be(t, e, r, i, n, o) {
  if (!de(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > n || e < o) throw new RangeError('"value" argument is out of bounds');
  if (r + i > t.length) throw new RangeError('Index out of range');
}
function Ue(t, e, r, i) {
  e < 0 && (e = 65535 + e + 1);
  for (var n = 0, o = Math.min(t.length - r, 2); n < o; ++n)
    t[r + n] = (e & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
}
function Oe(t, e, r, i) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var n = 0, o = Math.min(t.length - r, 4); n < o; ++n)
    t[r + n] = (e >>> (8 * (i ? n : 3 - n))) & 255;
}
function Pe(t, e, r, i, n, o) {
  if (r + i > t.length) throw new RangeError('Index out of range');
  if (r < 0) throw new RangeError('Index out of range');
}
function Ie(t, e, r, i, n) {
  return n || Pe(t, 0, r, 4), ne(t, e, r, i, 23, 4), r + 4;
}
function Ve(t, e, r, i, n) {
  return n || Pe(t, 0, r, 8), ne(t, e, r, i, 52, 8), r + 8;
}
(le.prototype.slice = function(t, e) {
  var r,
    i = this.length;
  if (
    ((t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
    (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
    e < t && (e = t),
    le.TYPED_ARRAY_SUPPORT)
  )
    (r = this.subarray(t, e)).__proto__ = le.prototype;
  else {
    var n = e - t;
    r = new le(n, void 0);
    for (var o = 0; o < n; ++o) r[o] = this[o + t];
  }
  return r;
}),
  (le.prototype.readUIntLE = function(t, e, r) {
    (t |= 0), (e |= 0), r || Ce(t, e, this.length);
    for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) i += this[t + o] * n;
    return i;
  }),
  (le.prototype.readUIntBE = function(t, e, r) {
    (t |= 0), (e |= 0), r || Ce(t, e, this.length);
    for (var i = this[t + --e], n = 1; e > 0 && (n *= 256); ) i += this[t + --e] * n;
    return i;
  }),
  (le.prototype.readUInt8 = function(t, e) {
    return e || Ce(t, 1, this.length), this[t];
  }),
  (le.prototype.readUInt16LE = function(t, e) {
    return e || Ce(t, 2, this.length), this[t] | (this[t + 1] << 8);
  }),
  (le.prototype.readUInt16BE = function(t, e) {
    return e || Ce(t, 2, this.length), (this[t] << 8) | this[t + 1];
  }),
  (le.prototype.readUInt32LE = function(t, e) {
    return (
      e || Ce(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3]
    );
  }),
  (le.prototype.readUInt32BE = function(t, e) {
    return (
      e || Ce(t, 4, this.length),
      16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  }),
  (le.prototype.readIntLE = function(t, e, r) {
    (t |= 0), (e |= 0), r || Ce(t, e, this.length);
    for (var i = this[t], n = 1, o = 0; ++o < e && (n *= 256); ) i += this[t + o] * n;
    return i >= (n *= 128) && (i -= Math.pow(2, 8 * e)), i;
  }),
  (le.prototype.readIntBE = function(t, e, r) {
    (t |= 0), (e |= 0), r || Ce(t, e, this.length);
    for (var i = e, n = 1, o = this[t + --i]; i > 0 && (n *= 256); ) o += this[t + --i] * n;
    return o >= (n *= 128) && (o -= Math.pow(2, 8 * e)), o;
  }),
  (le.prototype.readInt8 = function(t, e) {
    return e || Ce(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
  }),
  (le.prototype.readInt16LE = function(t, e) {
    e || Ce(t, 2, this.length);
    var r = this[t] | (this[t + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (le.prototype.readInt16BE = function(t, e) {
    e || Ce(t, 2, this.length);
    var r = this[t + 1] | (this[t] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (le.prototype.readInt32LE = function(t, e) {
    return (
      e || Ce(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (le.prototype.readInt32BE = function(t, e) {
    return (
      e || Ce(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (le.prototype.readFloatLE = function(t, e) {
    return e || Ce(t, 4, this.length), ie(this, t, !0, 23, 4);
  }),
  (le.prototype.readFloatBE = function(t, e) {
    return e || Ce(t, 4, this.length), ie(this, t, !1, 23, 4);
  }),
  (le.prototype.readDoubleLE = function(t, e) {
    return e || Ce(t, 8, this.length), ie(this, t, !0, 52, 8);
  }),
  (le.prototype.readDoubleBE = function(t, e) {
    return e || Ce(t, 8, this.length), ie(this, t, !1, 52, 8);
  }),
  (le.prototype.writeUIntLE = function(t, e, r, i) {
    ((t = +t), (e |= 0), (r |= 0), i) || Be(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    var n = 1,
      o = 0;
    for (this[e] = 255 & t; ++o < r && (n *= 256); ) this[e + o] = (t / n) & 255;
    return e + r;
  }),
  (le.prototype.writeUIntBE = function(t, e, r, i) {
    ((t = +t), (e |= 0), (r |= 0), i) || Be(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
    var n = r - 1,
      o = 1;
    for (this[e + n] = 255 & t; --n >= 0 && (o *= 256); ) this[e + n] = (t / o) & 255;
    return e + r;
  }),
  (le.prototype.writeUInt8 = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 1, 255, 0),
      le.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (le.prototype.writeUInt16LE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 2, 65535, 0),
      le.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : Ue(this, t, e, !0),
      e + 2
    );
  }),
  (le.prototype.writeUInt16BE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 2, 65535, 0),
      le.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : Ue(this, t, e, !1),
      e + 2
    );
  }),
  (le.prototype.writeUInt32LE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 4, 4294967295, 0),
      le.TYPED_ARRAY_SUPPORT
        ? ((this[e + 3] = t >>> 24),
          (this[e + 2] = t >>> 16),
          (this[e + 1] = t >>> 8),
          (this[e] = 255 & t))
        : Oe(this, t, e, !0),
      e + 4
    );
  }),
  (le.prototype.writeUInt32BE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 4, 4294967295, 0),
      le.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : Oe(this, t, e, !1),
      e + 4
    );
  }),
  (le.prototype.writeIntLE = function(t, e, r, i) {
    if (((t = +t), (e |= 0), !i)) {
      var n = Math.pow(2, 8 * r - 1);
      Be(this, t, e, r, n - 1, -n);
    }
    var o = 0,
      s = 1,
      a = 0;
    for (this[e] = 255 & t; ++o < r && (s *= 256); )
      t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
        (this[e + o] = (((t / s) >> 0) - a) & 255);
    return e + r;
  }),
  (le.prototype.writeIntBE = function(t, e, r, i) {
    if (((t = +t), (e |= 0), !i)) {
      var n = Math.pow(2, 8 * r - 1);
      Be(this, t, e, r, n - 1, -n);
    }
    var o = r - 1,
      s = 1,
      a = 0;
    for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
      t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
        (this[e + o] = (((t / s) >> 0) - a) & 255);
    return e + r;
  }),
  (le.prototype.writeInt8 = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 1, 127, -128),
      le.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (le.prototype.writeInt16LE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 2, 32767, -32768),
      le.TYPED_ARRAY_SUPPORT ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8)) : Ue(this, t, e, !0),
      e + 2
    );
  }),
  (le.prototype.writeInt16BE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 2, 32767, -32768),
      le.TYPED_ARRAY_SUPPORT ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t)) : Ue(this, t, e, !1),
      e + 2
    );
  }),
  (le.prototype.writeInt32LE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 4, 2147483647, -2147483648),
      le.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t),
          (this[e + 1] = t >>> 8),
          (this[e + 2] = t >>> 16),
          (this[e + 3] = t >>> 24))
        : Oe(this, t, e, !0),
      e + 4
    );
  }),
  (le.prototype.writeInt32BE = function(t, e, r) {
    return (
      (t = +t),
      (e |= 0),
      r || Be(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      le.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : Oe(this, t, e, !1),
      e + 4
    );
  }),
  (le.prototype.writeFloatLE = function(t, e, r) {
    return Ie(this, t, e, !0, r);
  }),
  (le.prototype.writeFloatBE = function(t, e, r) {
    return Ie(this, t, e, !1, r);
  }),
  (le.prototype.writeDoubleLE = function(t, e, r) {
    return Ve(this, t, e, !0, r);
  }),
  (le.prototype.writeDoubleBE = function(t, e, r) {
    return Ve(this, t, e, !1, r);
  }),
  (le.prototype.copy = function(t, e, r, i) {
    if (
      (r || (r = 0),
      i || 0 === i || (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < r && (i = r),
      i === r)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError('targetStart out of bounds');
    if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds');
    if (i < 0) throw new RangeError('sourceEnd out of bounds');
    i > this.length && (i = this.length), t.length - e < i - r && (i = t.length - e + r);
    var n,
      o = i - r;
    if (this === t && r < e && e < i) for (n = o - 1; n >= 0; --n) t[n + e] = this[n + r];
    else if (o < 1e3 || !le.TYPED_ARRAY_SUPPORT) for (n = 0; n < o; ++n) t[n + e] = this[n + r];
    else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
    return o;
  }),
  (le.prototype.fill = function(t, e, r, i) {
    if ('string' == typeof t) {
      if (
        ('string' == typeof e
          ? ((i = e), (e = 0), (r = this.length))
          : 'string' == typeof r && ((i = r), (r = this.length)),
        1 === t.length)
      ) {
        var n = t.charCodeAt(0);
        n < 256 && (t = n);
      }
      if (void 0 !== i && 'string' != typeof i) throw new TypeError('encoding must be a string');
      if ('string' == typeof i && !le.isEncoding(i)) throw new TypeError('Unknown encoding: ' + i);
    } else 'number' == typeof t && (t &= 255);
    if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
    if (r <= e) return this;
    var o;
    if (
      ((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), 'number' == typeof t)
    )
      for (o = e; o < r; ++o) this[o] = t;
    else {
      var s = de(t) ? t : Ge(new le(t, i).toString()),
        a = s.length;
      for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
    }
    return this;
  });
var je = /[^+\/0-9A-Za-z-_]/g;
function ze(t) {
  return t < 16 ? '0' + t.toString(16) : t.toString(16);
}
function Ge(t, e) {
  var r;
  e = e || 1 / 0;
  for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
    if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
      if (!n) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (s + 1 === i) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        n = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), (n = r);
        continue;
      }
      r = 65536 + (((n - 55296) << 10) | (r - 56320));
    } else n && (e -= 3) > -1 && o.push(239, 191, 189);
    if (((n = null), r < 128)) {
      if ((e -= 1) < 0) break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0) break;
      o.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0) break;
      o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else {
      if (!(r < 1114112)) throw new Error('Invalid code point');
      if ((e -= 4) < 0) break;
      o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
    }
  }
  return o;
}
function Me(t) {
  return (function(t) {
    var e, r, i, n, o, s;
    Xt || te();
    var a = t.length;
    if (a % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    (o = '=' === t[a - 2] ? 2 : '=' === t[a - 1] ? 1 : 0),
      (s = new $t((3 * a) / 4 - o)),
      (i = o > 0 ? a - 4 : a);
    var c = 0;
    for (e = 0, r = 0; e < i; e += 4, r += 3)
      (n =
        (Wt[t.charCodeAt(e)] << 18) |
        (Wt[t.charCodeAt(e + 1)] << 12) |
        (Wt[t.charCodeAt(e + 2)] << 6) |
        Wt[t.charCodeAt(e + 3)]),
        (s[c++] = (n >> 16) & 255),
        (s[c++] = (n >> 8) & 255),
        (s[c++] = 255 & n);
    return (
      2 === o
        ? ((n = (Wt[t.charCodeAt(e)] << 2) | (Wt[t.charCodeAt(e + 1)] >> 4)), (s[c++] = 255 & n))
        : 1 === o &&
          ((n =
            (Wt[t.charCodeAt(e)] << 10) |
            (Wt[t.charCodeAt(e + 1)] << 4) |
            (Wt[t.charCodeAt(e + 2)] >> 2)),
          (s[c++] = (n >> 8) & 255),
          (s[c++] = 255 & n)),
      s
    );
  })(
    (function(t) {
      if (
        (t = (function(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
        })(t).replace(je, '')).length < 2
      )
        return '';
      for (; t.length % 4 != 0; ) t += '=';
      return t;
    })(t),
  );
}
function He(t, e, r, i) {
  for (var n = 0; n < i && !(n + r >= e.length || n >= t.length); ++n) e[n + r] = t[n];
  return n;
}
function Ye(t) {
  return (
    !!t.constructor && 'function' == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
  );
}
var Fe,
  Je = function(t) {
    return t instanceof le;
  },
  Ze = t(function(t, e) {
    var r =
        Object.getOwnPropertyDescriptors ||
        function(t) {
          for (var e = Object.keys(t), r = {}, i = 0; i < e.length; i++)
            r[e[i]] = Object.getOwnPropertyDescriptor(t, e[i]);
          return r;
        },
      i = /%[sdj%]/g;
    (e.format = function(t) {
      if (!m(t)) {
        for (var e = [], r = 0; r < arguments.length; r++) e.push(s(arguments[r]));
        return e.join(' ');
      }
      r = 1;
      for (
        var n = arguments,
          o = n.length,
          a = String(t).replace(i, function(t) {
            if ('%%' === t) return '%';
            if (r >= o) return t;
            switch (t) {
              case '%s':
                return String(n[r++]);
              case '%d':
                return Number(n[r++]);
              case '%j':
                try {
                  return JSON.stringify(n[r++]);
                } catch (t) {
                  return '[Circular]';
                }
              default:
                return t;
            }
          }),
          c = n[r];
        r < o;
        c = n[++r]
      )
        g(c) || !y(c) ? (a += ' ' + c) : (a += ' ' + s(c));
      return a;
    }),
      (e.deprecate = function(t, r) {
        if (void 0 !== Qt && !0 === Qt.noDeprecation) return t;
        if (void 0 === Qt)
          return function() {
            return e.deprecate(t, r).apply(this, arguments);
          };
        var i = !1;
        return function() {
          return i || (console.error(r), (i = !0)), t.apply(this, arguments);
        };
      });
    var n,
      o = {};
    function s(t, r) {
      var i = { seen: [], stylize: c };
      return (
        arguments.length >= 3 && (i.depth = arguments[2]),
        arguments.length >= 4 && (i.colors = arguments[3]),
        f(r) ? (i.showHidden = r) : r && e._extend(i, r),
        b(i.showHidden) && (i.showHidden = !1),
        b(i.depth) && (i.depth = 2),
        b(i.colors) && (i.colors = !1),
        b(i.customInspect) && (i.customInspect = !0),
        i.colors && (i.stylize = a),
        l(i, t, i.depth)
      );
    }
    function a(t, e) {
      var r = s.styles[e];
      return r ? '[' + s.colors[r][0] + 'm' + t + '[' + s.colors[r][1] + 'm' : t;
    }
    function c(t, e) {
      return t;
    }
    function l(t, r, i) {
      if (
        t.customInspect &&
        r &&
        q(r.inspect) &&
        r.inspect !== e.inspect &&
        (!r.constructor || r.constructor.prototype !== r)
      ) {
        var n = r.inspect(i, t);
        return m(n) || (n = l(t, n, i)), n;
      }
      var o = (function(t, e) {
        if (b(e)) return t.stylize('undefined', 'undefined');
        if (m(e)) {
          var r =
            "'" +
            JSON.stringify(e)
              .replace(/^"|"$/g, '')
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"') +
            "'";
          return t.stylize(r, 'string');
        }
        if (d(e)) return t.stylize('' + e, 'number');
        if (f(e)) return t.stylize('' + e, 'boolean');
        if (g(e)) return t.stylize('null', 'null');
      })(t, r);
      if (o) return o;
      var s = Object.keys(r),
        a = (function(t) {
          var e = {};
          return (
            t.forEach(function(t, r) {
              e[t] = !0;
            }),
            e
          );
        })(s);
      if (
        (t.showHidden && (s = Object.getOwnPropertyNames(r)),
        v(r) && (s.indexOf('message') >= 0 || s.indexOf('description') >= 0))
      )
        return u(r);
      if (0 === s.length) {
        if (q(r)) {
          var c = r.name ? ': ' + r.name : '';
          return t.stylize('[Function' + c + ']', 'special');
        }
        if (_(r)) return t.stylize(RegExp.prototype.toString.call(r), 'regexp');
        if (w(r)) return t.stylize(Date.prototype.toString.call(r), 'date');
        if (v(r)) return u(r);
      }
      var y,
        E = '',
        x = !1,
        S = ['{', '}'];
      (h(r) && ((x = !0), (S = ['[', ']'])), q(r)) &&
        (E = ' [Function' + (r.name ? ': ' + r.name : '') + ']');
      return (
        _(r) && (E = ' ' + RegExp.prototype.toString.call(r)),
        w(r) && (E = ' ' + Date.prototype.toUTCString.call(r)),
        v(r) && (E = ' ' + u(r)),
        0 !== s.length || (x && 0 != r.length)
          ? i < 0
            ? _(r)
              ? t.stylize(RegExp.prototype.toString.call(r), 'regexp')
              : t.stylize('[Object]', 'special')
            : (t.seen.push(r),
              (y = x
                ? (function(t, e, r, i, n) {
                    for (var o = [], s = 0, a = e.length; s < a; ++s)
                      A(e, String(s)) ? o.push(p(t, e, r, i, String(s), !0)) : o.push('');
                    return (
                      n.forEach(function(n) {
                        n.match(/^\d+$/) || o.push(p(t, e, r, i, n, !0));
                      }),
                      o
                    );
                  })(t, r, i, a, s)
                : s.map(function(e) {
                    return p(t, r, i, a, e, x);
                  })),
              t.seen.pop(),
              (function(t, e, r) {
                if (
                  t.reduce(function(t, e) {
                    return e.indexOf('\n'), t + e.replace(/\u001b\[\d\d?m/g, '').length + 1;
                  }, 0) > 60
                )
                  return r[0] + ('' === e ? '' : e + '\n ') + ' ' + t.join(',\n  ') + ' ' + r[1];
                return r[0] + e + ' ' + t.join(', ') + ' ' + r[1];
              })(y, E, S))
          : S[0] + E + S[1]
      );
    }
    function u(t) {
      return '[' + Error.prototype.toString.call(t) + ']';
    }
    function p(t, e, r, i, n, o) {
      var s, a, c;
      if (
        ((c = Object.getOwnPropertyDescriptor(e, n) || { value: e[n] }).get
          ? (a = c.set ? t.stylize('[Getter/Setter]', 'special') : t.stylize('[Getter]', 'special'))
          : c.set && (a = t.stylize('[Setter]', 'special')),
        A(i, n) || (s = '[' + n + ']'),
        a ||
          (t.seen.indexOf(c.value) < 0
            ? (a = g(r) ? l(t, c.value, null) : l(t, c.value, r - 1)).indexOf('\n') > -1 &&
              (a = o
                ? a
                    .split('\n')
                    .map(function(t) {
                      return '  ' + t;
                    })
                    .join('\n')
                    .substr(2)
                : '\n' +
                  a
                    .split('\n')
                    .map(function(t) {
                      return '   ' + t;
                    })
                    .join('\n'))
            : (a = t.stylize('[Circular]', 'special'))),
        b(s))
      ) {
        if (o && n.match(/^\d+$/)) return a;
        (s = JSON.stringify('' + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((s = s.substr(1, s.length - 2)), (s = t.stylize(s, 'name')))
          : ((s = s
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (s = t.stylize(s, 'string')));
      }
      return s + ': ' + a;
    }
    function h(t) {
      return Array.isArray(t);
    }
    function f(t) {
      return 'boolean' == typeof t;
    }
    function g(t) {
      return null === t;
    }
    function d(t) {
      return 'number' == typeof t;
    }
    function m(t) {
      return 'string' == typeof t;
    }
    function b(t) {
      return void 0 === t;
    }
    function _(t) {
      return y(t) && '[object RegExp]' === E(t);
    }
    function y(t) {
      return 'object' == typeof t && null !== t;
    }
    function w(t) {
      return y(t) && '[object Date]' === E(t);
    }
    function v(t) {
      return y(t) && ('[object Error]' === E(t) || t instanceof Error);
    }
    function q(t) {
      return 'function' == typeof t;
    }
    function E(t) {
      return Object.prototype.toString.call(t);
    }
    function x(t) {
      return t < 10 ? '0' + t.toString(10) : t.toString(10);
    }
    (e.debuglog = function(t) {
      if ((b(n) && (n = ''), (t = t.toUpperCase()), !o[t]))
        if (new RegExp('\\b' + t + '\\b', 'i').test(n)) {
          var r = Qt.pid;
          o[t] = function() {
            var i = e.format.apply(e, arguments);
            console.error('%s %d: %s', t, r, i);
          };
        } else o[t] = function() {};
      return o[t];
    }),
      (e.inspect = s),
      (s.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39],
      }),
      (s.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red',
      }),
      (e.isArray = h),
      (e.isBoolean = f),
      (e.isNull = g),
      (e.isNullOrUndefined = function(t) {
        return null == t;
      }),
      (e.isNumber = d),
      (e.isString = m),
      (e.isSymbol = function(t) {
        return 'symbol' == typeof t;
      }),
      (e.isUndefined = b),
      (e.isRegExp = _),
      (e.isObject = y),
      (e.isDate = w),
      (e.isError = v),
      (e.isFunction = q),
      (e.isPrimitive = function(t) {
        return (
          null === t ||
          'boolean' == typeof t ||
          'number' == typeof t ||
          'string' == typeof t ||
          'symbol' == typeof t ||
          void 0 === t
        );
      }),
      (e.isBuffer = Je);
    var S = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function A(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    (e.log = function() {
      var t, r;
      console.log(
        '%s - %s',
        ((t = new Date()),
        (r = [x(t.getHours()), x(t.getMinutes()), x(t.getSeconds())].join(':')),
        [t.getDate(), S[t.getMonth()], r].join(' ')),
        e.format.apply(e, arguments),
      );
    }),
      (e.inherits = Ke),
      (e._extend = function(t, e) {
        if (!e || !y(e)) return t;
        for (var r = Object.keys(e), i = r.length; i--; ) t[r[i]] = e[r[i]];
        return t;
      });
    var T = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
    function L(t, e) {
      if (!t) {
        var r = new Error('Promise was rejected with a falsy value');
        (r.reason = t), (t = r);
      }
      return e(t);
    }
    (e.promisify = function(t) {
      if ('function' != typeof t)
        throw new TypeError('The "original" argument must be of type Function');
      if (T && t[T]) {
        var e;
        if ('function' != typeof (e = t[T]))
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return (
          Object.defineProperty(e, T, { value: e, enumerable: !1, writable: !1, configurable: !0 }),
          e
        );
      }
      function e() {
        for (
          var e,
            r,
            i = new Promise(function(t, i) {
              (e = t), (r = i);
            }),
            n = [],
            o = 0;
          o < arguments.length;
          o++
        )
          n.push(arguments[o]);
        n.push(function(t, i) {
          t ? r(t) : e(i);
        });
        try {
          t.apply(this, n);
        } catch (t) {
          r(t);
        }
        return i;
      }
      return (
        Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
        T &&
          Object.defineProperty(e, T, { value: e, enumerable: !1, writable: !1, configurable: !0 }),
        Object.defineProperties(e, r(t))
      );
    }),
      (e.promisify.custom = T),
      (e.callbackify = function(t) {
        if ('function' != typeof t)
          throw new TypeError('The "original" argument must be of type Function');
        function e() {
          for (var e = [], r = 0; r < arguments.length; r++) e.push(arguments[r]);
          var i = e.pop();
          if ('function' != typeof i)
            throw new TypeError('The last argument must be of type Function');
          var n = this,
            o = function() {
              return i.apply(n, arguments);
            };
          t.apply(this, e).then(
            function(t) {
              Ot(o, null, t);
            },
            function(t) {
              Ot(L, t, o);
            },
          );
        }
        return (
          Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, r(t)), e
        );
      });
  }),
  Qe = (Ze.format,
  Ze.deprecate,
  Ze.debuglog,
  Ze.inspect,
  Ze.isArray,
  Ze.isBoolean,
  Ze.isNull,
  Ze.isNullOrUndefined,
  Ze.isNumber,
  Ze.isString,
  Ze.isSymbol,
  Ze.isUndefined,
  Ze.isRegExp,
  Ze.isObject,
  Ze.isDate,
  Ze.isError,
  Ze.isFunction,
  Ze.isPrimitive,
  Ze.isBuffer,
  Ze.log,
  Ze.inherits,
  Ze._extend,
  Ze.promisify,
  Ze.callbackify,
  t(function(t) {
    'function' == typeof Object.create
      ? (t.exports = function(t, e) {
          (t.super_ = e),
            (t.prototype = Object.create(e.prototype, {
              constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            }));
        })
      : (t.exports = function(t, e) {
          t.super_ = e;
          var r = function() {};
          (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
        });
  })),
  Ke = t(function(t) {
    try {
      var e = Ze;
      if ('function' != typeof e.inherits) throw '';
      t.exports = e.inherits;
    } catch (e) {
      t.exports = Qe;
    }
  }),
  We = 'object' == typeof Reflect ? Reflect : null,
  $e =
    We && 'function' == typeof We.apply
      ? We.apply
      : function(t, e, r) {
          return Function.prototype.apply.call(t, e, r);
        };
Fe =
  We && 'function' == typeof We.ownKeys
    ? We.ownKeys
    : Object.getOwnPropertySymbols
    ? function(t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
      }
    : function(t) {
        return Object.getOwnPropertyNames(t);
      };
var Xe =
  Number.isNaN ||
  function(t) {
    return t != t;
  };
function tr() {
  tr.init.call(this);
}
var er = tr;
(tr.EventEmitter = tr),
  (tr.prototype._events = void 0),
  (tr.prototype._eventsCount = 0),
  (tr.prototype._maxListeners = void 0);
var rr = 10;
function ir(t) {
  return void 0 === t._maxListeners ? tr.defaultMaxListeners : t._maxListeners;
}
function nr(t, e, r, i) {
  var n, o, s, a;
  if ('function' != typeof r)
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof r,
    );
  if (
    (void 0 === (o = t._events)
      ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
      : (void 0 !== o.newListener &&
          (t.emit('newListener', e, r.listener ? r.listener : r), (o = t._events)),
        (s = o[e])),
    void 0 === s)
  )
    (s = o[e] = r), ++t._eventsCount;
  else if (
    ('function' == typeof s ? (s = o[e] = i ? [r, s] : [s, r]) : i ? s.unshift(r) : s.push(r),
    (n = ir(t)) > 0 && s.length > n && !s.warned)
  ) {
    s.warned = !0;
    // eslint-disable-next-line no-restricted-syntax
    var c = new Error(
      'Possible EventEmitter memory leak detected. ' +
        s.length +
        ' ' +
        String(e) +
        ' listeners added. Use emitter.setMaxListeners() to increase limit',
    );
    (c.name = 'MaxListenersExceededWarning'),
      (c.emitter = t),
      (c.type = e),
      (c.count = s.length),
      (a = c),
      console && console.warn && console.warn(a);
  }
  return t;
}
function or(t, e, r) {
  var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
    n = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t.push(arguments[e]);
      this.fired ||
        (this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        $e(this.listener, this.target, t));
    }.bind(i);
  return (n.listener = r), (i.wrapFn = n), n;
}
function sr(t, e, r) {
  var i = t._events;
  if (void 0 === i) return [];
  var n = i[e];
  return void 0 === n
    ? []
    : 'function' == typeof n
    ? r
      ? [n.listener || n]
      : [n]
    : r
    ? (function(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
        return e;
      })(n)
    : cr(n, n.length);
}
function ar(t) {
  var e = this._events;
  if (void 0 !== e) {
    var r = e[t];
    if ('function' == typeof r) return 1;
    if (void 0 !== r) return r.length;
  }
  return 0;
}
function cr(t, e) {
  for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
  return r;
}
Object.defineProperty(tr, 'defaultMaxListeners', {
  enumerable: !0,
  get: function() {
    return rr;
  },
  set: function(t) {
    if ('number' != typeof t || t < 0 || Xe(t))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          t +
          '.',
      );
    rr = t;
  },
}),
  (tr.init = function() {
    (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
      ((this._events = Object.create(null)), (this._eventsCount = 0)),
      (this._maxListeners = this._maxListeners || void 0);
  }),
  (tr.prototype.setMaxListeners = function(t) {
    if ('number' != typeof t || t < 0 || Xe(t))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.',
      );
    return (this._maxListeners = t), this;
  }),
  (tr.prototype.getMaxListeners = function() {
    return ir(this);
  }),
  (tr.prototype.emit = function(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
    var i = 'error' === t,
      n = this._events;
    if (void 0 !== n) i = i && void 0 === n.error;
    else if (!i) return !1;
    if (i) {
      var o;
      if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
      var s = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
      throw ((s.context = o), s);
    }
    var a = n[t];
    if (void 0 === a) return !1;
    if ('function' == typeof a) $e(a, this, e);
    else {
      var c = a.length,
        l = cr(a, c);
      for (r = 0; r < c; ++r) $e(l[r], this, e);
    }
    return !0;
  }),
  (tr.prototype.addListener = function(t, e) {
    return nr(this, t, e, !1);
  }),
  (tr.prototype.on = tr.prototype.addListener),
  (tr.prototype.prependListener = function(t, e) {
    return nr(this, t, e, !0);
  }),
  (tr.prototype.once = function(t, e) {
    if ('function' != typeof e)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' + typeof e,
      );
    return this.on(t, or(this, t, e)), this;
  }),
  (tr.prototype.prependOnceListener = function(t, e) {
    if ('function' != typeof e)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' + typeof e,
      );
    return this.prependListener(t, or(this, t, e)), this;
  }),
  (tr.prototype.removeListener = function(t, e) {
    var r, i, n, o, s;
    if ('function' != typeof e)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' + typeof e,
      );
    if (void 0 === (i = this._events)) return this;
    if (void 0 === (r = i[t])) return this;
    if (r === e || r.listener === e)
      0 == --this._eventsCount
        ? (this._events = Object.create(null))
        : (delete i[t], i.removeListener && this.emit('removeListener', t, r.listener || e));
    else if ('function' != typeof r) {
      for (n = -1, o = r.length - 1; o >= 0; o--)
        if (r[o] === e || r[o].listener === e) {
          (s = r[o].listener), (n = o);
          break;
        }
      if (n < 0) return this;
      0 === n
        ? r.shift()
        : (function(t, e) {
            for (; e + 1 < t.length; e++) t[e] = t[e + 1];
            t.pop();
          })(r, n),
        1 === r.length && (i[t] = r[0]),
        void 0 !== i.removeListener && this.emit('removeListener', t, s || e);
    }
    return this;
  }),
  (tr.prototype.off = tr.prototype.removeListener),
  (tr.prototype.removeAllListeners = function(t) {
    var e, r, i;
    if (void 0 === (r = this._events)) return this;
    if (void 0 === r.removeListener)
      return (
        0 === arguments.length
          ? ((this._events = Object.create(null)), (this._eventsCount = 0))
          : void 0 !== r[t] &&
            (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[t]),
        this
      );
    if (0 === arguments.length) {
      var n,
        o = Object.keys(r);
      for (i = 0; i < o.length; ++i) 'removeListener' !== (n = o[i]) && this.removeAllListeners(n);
      return (
        this.removeAllListeners('removeListener'),
        (this._events = Object.create(null)),
        (this._eventsCount = 0),
        this
      );
    }
    if ('function' == typeof (e = r[t])) this.removeListener(t, e);
    else if (void 0 !== e) for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
    return this;
  }),
  (tr.prototype.listeners = function(t) {
    return sr(this, t, !0);
  }),
  (tr.prototype.rawListeners = function(t) {
    return sr(this, t, !1);
  }),
  (tr.listenerCount = function(t, e) {
    return 'function' == typeof t.listenerCount ? t.listenerCount(e) : ar.call(t, e);
  }),
  (tr.prototype.listenerCount = ar),
  (tr.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Fe(this._events) : [];
  });
var lr = f,
  ur = { input: !0, option: !0, optgroup: !0, select: !0, button: !0, datalist: !0, textarea: !0 },
  pr = {
    tr: { tr: !0, th: !0, td: !0 },
    th: { th: !0 },
    td: { thead: !0, th: !0, td: !0 },
    body: { head: !0, link: !0, script: !0 },
    li: { li: !0 },
    p: { p: !0 },
    h1: { p: !0 },
    h2: { p: !0 },
    h3: { p: !0 },
    h4: { p: !0 },
    h5: { p: !0 },
    h6: { p: !0 },
    select: ur,
    input: ur,
    output: ur,
    button: ur,
    datalist: ur,
    textarea: ur,
    option: { option: !0 },
    optgroup: { optgroup: !0 },
  },
  hr = {
    __proto__: null,
    area: !0,
    base: !0,
    basefont: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    isindex: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
  fr = { __proto__: null, math: !0, svg: !0 },
  gr = {
    __proto__: null,
    mi: !0,
    mo: !0,
    mn: !0,
    ms: !0,
    mtext: !0,
    'annotation-xml': !0,
    foreignObject: !0,
    desc: !0,
    title: !0,
  },
  dr = /\s|\//;
function mr(t, e) {
  (this._options = e || {}),
    (this._cbs = t || {}),
    (this._tagname = ''),
    (this._attribname = ''),
    (this._attribvalue = ''),
    (this._attribs = null),
    (this._stack = []),
    (this._foreignContext = []),
    (this.startIndex = 0),
    (this.endIndex = null),
    (this._lowerCaseTagNames =
      'lowerCaseTags' in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode),
    (this._lowerCaseAttributeNames =
      'lowerCaseAttributeNames' in this._options
        ? !!this._options.lowerCaseAttributeNames
        : !this._options.xmlMode),
    this._options.Tokenizer && (lr = this._options.Tokenizer),
    (this._tokenizer = new lr(this._options, this)),
    this._cbs.onparserinit && this._cbs.onparserinit(this);
}
Ke(mr, er.EventEmitter),
  (mr.prototype._updatePosition = function(t) {
    null === this.endIndex
      ? this._tokenizer._sectionStart <= t
        ? (this.startIndex = 0)
        : (this.startIndex = this._tokenizer._sectionStart - t)
      : (this.startIndex = this.endIndex + 1),
      (this.endIndex = this._tokenizer.getAbsoluteIndex());
  }),
  (mr.prototype.ontext = function(t) {
    this._updatePosition(1), this.endIndex--, this._cbs.ontext && this._cbs.ontext(t);
  }),
  (mr.prototype.onopentagname = function(t) {
    if (
      (this._lowerCaseTagNames && (t = t.toLowerCase()),
      (this._tagname = t),
      !this._options.xmlMode && t in pr)
    )
      for (var e; (e = this._stack[this._stack.length - 1]) in pr[t]; this.onclosetag(e));
    (!this._options.xmlMode && t in hr) ||
      (this._stack.push(t),
      t in fr ? this._foreignContext.push(!0) : t in gr && this._foreignContext.push(!1)),
      this._cbs.onopentagname && this._cbs.onopentagname(t),
      this._cbs.onopentag && (this._attribs = {});
  }),
  (mr.prototype.onopentagend = function() {
    this._updatePosition(1),
      this._attribs &&
        (this._cbs.onopentag && this._cbs.onopentag(this._tagname, this._attribs),
        (this._attribs = null)),
      !this._options.xmlMode &&
        this._cbs.onclosetag &&
        this._tagname in hr &&
        this._cbs.onclosetag(this._tagname),
      (this._tagname = '');
  }),
  (mr.prototype.onclosetag = function(t) {
    if (
      (this._updatePosition(1),
      this._lowerCaseTagNames && (t = t.toLowerCase()),
      (t in fr || t in gr) && this._foreignContext.pop(),
      !this._stack.length || (t in hr && !this._options.xmlMode))
    )
      this._options.xmlMode ||
        ('br' !== t && 'p' !== t) ||
        (this.onopentagname(t), this._closeCurrentTag());
    else {
      var e = this._stack.lastIndexOf(t);
      if (-1 !== e)
        if (this._cbs.onclosetag)
          for (e = this._stack.length - e; e--; ) this._cbs.onclosetag(this._stack.pop());
        else this._stack.length = e;
      else 'p' !== t || this._options.xmlMode || (this.onopentagname(t), this._closeCurrentTag());
    }
  }),
  (mr.prototype.onselfclosingtag = function() {
    this._options.xmlMode ||
    this._options.recognizeSelfClosing ||
    this._foreignContext[this._foreignContext.length - 1]
      ? this._closeCurrentTag()
      : this.onopentagend();
  }),
  (mr.prototype._closeCurrentTag = function() {
    var t = this._tagname;
    this.onopentagend(),
      this._stack[this._stack.length - 1] === t &&
        (this._cbs.onclosetag && this._cbs.onclosetag(t), this._stack.pop());
  }),
  (mr.prototype.onattribname = function(t) {
    this._lowerCaseAttributeNames && (t = t.toLowerCase()), (this._attribname = t);
  }),
  (mr.prototype.onattribdata = function(t) {
    this._attribvalue += t;
  }),
  (mr.prototype.onattribend = function() {
    this._cbs.onattribute && this._cbs.onattribute(this._attribname, this._attribvalue),
      this._attribs &&
        !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname) &&
        (this._attribs[this._attribname] = this._attribvalue),
      (this._attribname = ''),
      (this._attribvalue = '');
  }),
  (mr.prototype._getInstructionName = function(t) {
    var e = t.search(dr),
      r = e < 0 ? t : t.substr(0, e);
    return this._lowerCaseTagNames && (r = r.toLowerCase()), r;
  }),
  (mr.prototype.ondeclaration = function(t) {
    if (this._cbs.onprocessinginstruction) {
      var e = this._getInstructionName(t);
      this._cbs.onprocessinginstruction('!' + e, '!' + t);
    }
  }),
  (mr.prototype.onprocessinginstruction = function(t) {
    if (this._cbs.onprocessinginstruction) {
      var e = this._getInstructionName(t);
      this._cbs.onprocessinginstruction('?' + e, '?' + t);
    }
  }),
  (mr.prototype.oncomment = function(t) {
    this._updatePosition(4),
      this._cbs.oncomment && this._cbs.oncomment(t),
      this._cbs.oncommentend && this._cbs.oncommentend();
  }),
  (mr.prototype.oncdata = function(t) {
    this._updatePosition(1),
      this._options.xmlMode || this._options.recognizeCDATA
        ? (this._cbs.oncdatastart && this._cbs.oncdatastart(),
          this._cbs.ontext && this._cbs.ontext(t),
          this._cbs.oncdataend && this._cbs.oncdataend())
        : this.oncomment('[CDATA[' + t + ']]');
  }),
  (mr.prototype.onerror = function(t) {
    this._cbs.onerror && this._cbs.onerror(t);
  }),
  (mr.prototype.onend = function() {
    if (this._cbs.onclosetag)
      for (var t = this._stack.length; t > 0; this._cbs.onclosetag(this._stack[--t]));
    this._cbs.onend && this._cbs.onend();
  }),
  (mr.prototype.reset = function() {
    this._cbs.onreset && this._cbs.onreset(),
      this._tokenizer.reset(),
      (this._tagname = ''),
      (this._attribname = ''),
      (this._attribs = null),
      (this._stack = []),
      this._cbs.onparserinit && this._cbs.onparserinit(this);
  }),
  (mr.prototype.parseComplete = function(t) {
    this.reset(), this.end(t);
  }),
  (mr.prototype.write = function(t) {
    this._tokenizer.write(t);
  }),
  (mr.prototype.end = function(t) {
    this._tokenizer.end(t);
  }),
  (mr.prototype.pause = function() {
    this._tokenizer.pause();
  }),
  (mr.prototype.resume = function() {
    this._tokenizer.resume();
  }),
  (mr.prototype.parseChunk = mr.prototype.write),
  (mr.prototype.done = mr.prototype.end);
var br = mr;
/* eslint-disable import/no-extraneous-dependencies */ const _r = [
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'menuitem',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ],
  yr = ['script', 'style'];
export default function(t, e = {}) {
  const r = [],
    i = [],
    n = (function(t) {
      return t.ignoreTags ? [...yr, ...t.ignoreTags] : yr;
    })(e),
    o = e.ignoreAttributes ? e.ignoreAttributes.filter(t => 'string' == typeof t) : [],
    s = e.ignoreAttributes ? e.ignoreAttributes.filter(t => 'string' != typeof t) : [],
    a = e.ignoreLightDom || [],
    c = [];
  let l = 0;
  function u() {
    return r.length > 0;
  }
  function p() {
    return i.length > 0;
  }
  const h = () => {
      l += 1;
    },
    f = () => {
      l -= 1;
    },
    g = t => ' '.repeat(t),
    d = t => g(2 * t),
    m = t => {
      c.push(t);
    },
    b = () => {
      m('\n');
    },
    _ = () => {
      m((() => d(l))());
    },
    y = t => {
      m(`<${t}`);
    },
    w = (t = '>') => {
      b(),
        (t => {
          m(d(t));
        })(l - 1),
        m(t);
    },
    v = (t, e) => {
      let r = ` ${t}`;
      e.length > 0 && (r += `="${e}"`), m(r);
    },
    q = (t, e, r) => {
      b(), m((t => g(2 * l + t.length - 1))(r)), v(t, e);
    },
    E = (t, e) => {
      const r = {};
      return (
        Object.keys(t).forEach(i => {
          ((t, e) =>
            !!o.includes(t) ||
            !!s.find(r => {
              if (!r.tags || !r.attributes)
                throw new Error(
                  "An object entry to ignoreAttributes should contain a 'tags' and an 'attributes' property.",
                );
              return r.tags.includes(e) && r.attributes.includes(t);
            }))(i, e) || (r[i] = t[i]);
        }),
        r
      );
    },
    x = (t, e) => {
      const r = Object.keys(t);
      if ((1 === r.length && v(r[0], t[r[0]]), r.length <= 1)) return;
      let i = !0;
      Object.keys(t).forEach(r => {
        !0 === i ? ((i = !1), v(r, t[r])) : q(r, t[r], e);
      });
    },
    S = (t, e) => {
      Object.keys(t).length <= 1
        ? ((t = '>') => {
            m(t);
          })(e)
        : w(e);
    },
    A = t => -1 !== _r.indexOf(t),
    T = new br(
      {
        onprocessinginstruction(t, e) {
          if (u()) return;
          const r = 1 === i.length && i[0] === t;
          if (p() && !r) return;
          let n = '>';
          (t => '?xml' === t)(t) && (n = '?>'), b(), _(), h(), y(t);
          const o = (t => {
              const e = {},
                r = t.split(/\s/);
              delete r[0],
                r.forEach(t => {
                  0 !== t.length && -1 === t.indexOf('=') && (e[t] = '');
                });
              const i = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gim;
              let n;
              /* eslint-disable-next-line no-cond-assign */ for (; (n = i.exec(t)); )
                /* eslint-disable-next-line prefer-destructuring */
                e[n[1]] = n[2];
              return e;
            })(e),
            s = E(o, t);
          x(s, t), S(s, n), f();
        },
        onopentag(t, e) {
          if (a.includes(t)) {
            if ((i.push(t), i.length > 1)) return;
          } else if (i.length > 0) return;
          if (n.includes(t))
            return void (function(t) {
              r.push(t);
            })(t);
          if (u()) return;
          b(), _(), h(), y(t);
          const o = E(e, t);
          x(o, t), S(o, '>');
        },
        ontext(t) {
          if (u() || p()) return;
          const e = (t => t.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, ''))(t);
          0 !== e.length && (b(), _(), m(e));
        },
        onclosetag(t) {
          if (u())
            return void (function(t) {
              r[r.length - 1] === t && r.splice(r.length - 1, 1);
            })(t);
          if (p() && (i[i.length - 1] === t && i.splice(i.length - 1, 1), i.length > 0)) return;
          const e = A(t);
          !1 === A(t) && b(), f(), !0 !== e && (_(), m(`</${t}>`));
        },
        oncomment() {},
      },
      { lowerCaseTags: !1, recognizeSelfClosing: !0 },
    );
  return T.write(t), T.end(), b(), (() => c.join(''))();
}
