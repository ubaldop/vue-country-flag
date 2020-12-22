import { shallowMount } from '@vue/test-utils'
import CountryFlag from '../src/CountryFlag.vue'

const countriesMappings = {
    af: 'afg',
    ax: 'ala',
    al: 'alb',
    dz: 'dza',
    as: 'asm',
    ad: 'and',
    ao: 'ago',
    ai: 'aia',
    aq: 'ata',
    ag: 'atg',
    ar: 'arg',
    am: 'arm',
    aw: 'abw',
    au: 'aus',
    at: 'aut',
    az: 'aze',
    bs: 'bhs',
    bh: 'bhr',
    bd: 'bgd',
    bb: 'brb',
    by: 'blr',
    be: 'bel',
    bz: 'blz',
    bj: 'ben',
    bm: 'bmu',
    bt: 'btn',
    bo: 'bol',
    ba: 'bih',
    bw: 'bwa',
    bv: 'bvt',
    br: 'bra',
    vg: 'vgb',
    io: 'iot',
    bn: 'brn',
    bg: 'bgr',
    bf: 'bfa',
    bi: 'bdi',
    kh: 'khm',
    cm: 'cmr',
    ca: 'can',
    cv: 'cpv',
    ky: 'cym',
    cf: 'caf',
    td: 'tcd',
    cl: 'chl',
    cn: 'chn',
    hk: 'hkg',
    mo: 'mac',
    cx: 'cxr',
    cc: 'cck',
    co: 'col',
    km: 'com',
    cg: 'cog',
    cd: 'cod',
    ck: 'cok',
    cr: 'cri',
    ci: 'civ',
    hr: 'hrv',
    cu: 'cub',
    cy: 'cyp',
    cz: 'cze',
    dk: 'dnk',
    dj: 'dji',
    dm: 'dma',
    do: 'dom',
    ec: 'ecu',
    eg: 'egy',
    sv: 'slv',
    gq: 'gnq',
    er: 'eri',
    ee: 'est',
    et: 'eth',
    fk: 'flk',
    fo: 'fro',
    fj: 'fji',
    fi: 'fin',
    fr: 'fra',
    gf: 'guf',
    pf: 'pyf',
    tf: 'atf',
    ga: 'gab',
    gm: 'gmb',
    ge: 'geo',
    de: 'deu',
    gh: 'gha',
    gi: 'gib',
    gr: 'grc',
    gl: 'grl',
    gd: 'grd',
    gp: 'glp',
    gu: 'gum',
    gt: 'gtm',
    gg: 'ggy',
    gn: 'gin',
    gw: 'gnb',
    gy: 'guy',
    ht: 'hti',
    hm: 'hmd',
    va: 'vat',
    hn: 'hnd',
    hu: 'hun',
    is: 'isl',
    in: 'ind',
    id: 'idn',
    ir: 'irn',
    iq: 'irq',
    ie: 'irl',
    im: 'imn',
    il: 'isr',
    it: 'ita',
    jm: 'jam',
    jp: 'jpn',
    je: 'jey',
    jo: 'jor',
    kz: 'kaz',
    ke: 'ken',
    ki: 'kir',
    kp: 'prk',
    kr: 'kor',
    kw: 'kwt',
    kg: 'kgz',
    la: 'lao',
    lv: 'lva',
    lb: 'lbn',
    ls: 'lso',
    lr: 'lbr',
    ly: 'lby',
    li: 'lie',
    lt: 'ltu',
    lu: 'lux',
    mk: 'mkd',
    mg: 'mdg',
    mw: 'mwi',
    my: 'mys',
    mv: 'mdv',
    ml: 'mli',
    mt: 'mlt',
    mh: 'mhl',
    mq: 'mtq',
    mr: 'mrt',
    mu: 'mus',
    yt: 'myt',
    mx: 'mex',
    fm: 'fsm',
    md: 'mda',
    mc: 'mco',
    mn: 'mng',
    me: 'mne',
    ms: 'msr',
    ma: 'mar',
    mz: 'moz',
    mm: 'mmr',
    na: 'nam',
    nr: 'nru',
    np: 'npl',
    nl: 'nld',
    an: 'ant',
    nc: 'ncl',
    nz: 'nzl',
    ni: 'nic',
    ne: 'ner',
    ng: 'nga',
    nu: 'niu',
    nf: 'nfk',
    mp: 'mnp',
    no: 'nor',
    om: 'omn',
    pk: 'pak',
    pw: 'plw',
    ps: 'pse',
    pa: 'pan',
    pg: 'png',
    py: 'pry',
    pe: 'per',
    ph: 'phl',
    pn: 'pcn',
    pl: 'pol',
    pt: 'prt',
    pr: 'pri',
    qa: 'qat',
    re: 'reu',
    ro: 'rou',
    ru: 'rus',
    rw: 'rwa',
    bl: 'blm',
    sh: 'shn',
    kn: 'kna',
    lc: 'lca',
    mf: 'maf',
    pm: 'spm',
    vc: 'vct',
    ws: 'wsm',
    sm: 'smr',
    st: 'stp',
    sa: 'sau',
    sn: 'sen',
    rs: 'srb',
    sc: 'syc',
    sl: 'sle',
    sg: 'sgp',
    sk: 'svk',
    si: 'svn',
    sb: 'slb',
    so: 'som',
    za: 'zaf',
    gs: 'sgs',
    ss: 'ssd',
    es: 'esp',
    lk: 'lka',
    sd: 'sdn',
    sr: 'sur',
    sj: 'sjm',
    sz: 'swz',
    se: 'swe',
    ch: 'che',
    sy: 'syr',
    tw: 'twn',
    tj: 'tjk',
    tz: 'tza',
    th: 'tha',
    tl: 'tls',
    tg: 'tgo',
    tk: 'tkl',
    to: 'ton',
    tt: 'tto',
    tn: 'tun',
    tr: 'tur',
    tm: 'tkm',
    tc: 'tca',
    tv: 'tuv',
    ug: 'uga',
    ua: 'ukr',
    ae: 'are',
    gb: 'gbr',
    us: 'usa',
    um: 'umi',
    uy: 'ury',
    uz: 'uzb',
    vu: 'vut',
    ve: 'ven',
    vn: 'vnm',
    vi: 'vir',
    wf: 'wlf',
    eh: 'esh',
    ye: 'yem',
    zm: 'zmb',
    zw: 'zwe'
}

const buildNormalFlag = (country) => {
    return {
        country: country
    }
}

const buildFlag = (country, size, rounded) => {
    return {
        country: country,
        size: size,
        rounded: rounded || false
    }
}

const convertToISOAlphaThree = (country) => {
    return countriesMappings[country]
};

//see issue-27
const convertAndorraTwoDigitsToAndorra = (country) => {
    return (country === 'ad') ? 'andorra' : country
}



describe('CountryFlag', () => {

    describe('Component properties testing', () => {
        test('Default values: country should be undefined, size should be normal', () => {
            const flag = shallowMount(CountryFlag);
            expect(flag.props().size).toBe('normal');
            expect(flag.props().country).toBeUndefined();
        })

        test('size prop default is normal', () => {
            const flag = shallowMount(CountryFlag, {
                propsData: buildNormalFlag('it')
            });
            expect(flag.props().size).toBe('normal');
        })
    })


    describe('Flag sizes', () => {
        test('default size of country-flag should be normal', () => {
            const flag = shallowMount(CountryFlag, {
                propsData: buildNormalFlag('it')
            });
            expect(flag.attributes('class')).toBe('flag f-it normal-flag');
        })

        test('big size of country-flag should return a big flag', () => {
            const flag = shallowMount(CountryFlag, {
                propsData: buildFlag('se', 'big')
            });
            expect(flag.attributes('class')).toBe('flag f-se big-flag');
        })

        test("big size of rounded country-flag should return a rounded big flag", () => {
          const flag = shallowMount(CountryFlag, {
            propsData: buildFlag("se", "big", true)
          });
          expect(flag.attributes("class")).toBe(
            "flag f-se rounded big-flag"
          );
        });

        test('small size of country-flag should return a small flag', () => {
            const flag = shallowMount(CountryFlag, {
                propsData: buildFlag('se', 'small')
            });
            expect(flag.attributes('class')).toBe('flag f-se small-flag');
        })

        test("normal size of country-flag should return a normal flag", () => {
          const flag = shallowMount(CountryFlag, {
            propsData: buildFlag("se", "normal")
          });
          expect(flag.attributes("class")).toBe("flag f-se normal-flag");
        }),

        test("[CAPITAL LETTER lowercase conversion] normal size of country-flag should return a normal flag", () => {
            const flag = shallowMount(CountryFlag, {
              propsData: buildFlag("SE", "normal")
            });
            expect(flag.attributes("class")).toBe("flag f-se normal-flag");
          });
    });

    describe('CountryFlag ISO-3166-1 alpha-3 support', () => {
        test('it should return a flag also for three characters country identifier', () => {
            const flag = shallowMount(CountryFlag, {
                propsData: buildNormalFlag(convertToISOAlphaThree('it'))
            });
            expect(flag.attributes('class')).toBe('flag f-ita normal-flag');
        })

        test('it should map both two and three characters for all the countries', () => {
            for (let country in countriesMappings) {
                if (countriesMappings.hasOwnProperty(country)) {
                    let twoCharsIdentifier = convertAndorraTwoDigitsToAndorra(country);
                    let threeCharsIdentifier = countriesMappings[country];

                    const flagTwo = shallowMount(CountryFlag, {
                        propsData: buildNormalFlag(twoCharsIdentifier)
                    });

                    const flagThree = shallowMount(CountryFlag, {
                        propsData: buildNormalFlag(threeCharsIdentifier)
                    });

                    expect(flagTwo.attributes('class')).toBe('flag f-' + twoCharsIdentifier + ' normal-flag');
                    expect(flagThree.attributes('class')).toBe('flag f-' + threeCharsIdentifier + ' normal-flag');
                }
            }
        })
    })
})