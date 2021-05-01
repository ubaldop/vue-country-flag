<template>
    <span :class="flagIconClass" v-if="country" :style="{ backgroundImage: `url('${backgroundUrl}')` }"></span>
</template>

<script>
export default {
  name: 'CountryFlag',
  props: {
    country: {
      type: String,
      required: true
    },
    rounded: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: function(value) {
        return value === 'small' || value === 'normal' || value === 'big'
      },
      default: 'normal'
    },
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    backgroundUrl() {
      if(this.background && this.background != '') {
        return this.background;
      } else {
         return require(`__name/dist/flags.png`) //__name is dynamicall replaced through rollup-replace
      }
     
    },

    flagIconClass () {
      return {
        [`flag ${this.flagIconCountry}`]: true,
        [`rounded`]: this.rounded,
        [this.flagMargin]: true
      }
    },
    flagIconCountry () {
      let country = this.country.toLowerCase() 
      country = (country === 'ad') ? 'andorra' : country
      return `f-${country}`
    },
    flagMargin () {
      switch (this.size) {
        case 'small':
            return 'small-flag' 
        case 'normal':
            return 'normal-flag'
        case 'big':
            return 'big-flag'
        default:
            return 'normal-flag'
      }
    }
  }
}
</script>
<style scoped>
  .small-flag {
    margin: -15px -22.5px;
    transform: scale(0.25);
    -ms-transform: scale(0.25); 
    -webkit-transform: scale(0.25);
    -moz-transform: scale(0.25);
  }
  .normal-flag {
    margin: -10px -15px;
    transform: scale(0.5);
    -ms-transform: scale(0.5); 
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
  }
  .big-flag {
    margin: 0;
  }
  .small-flag.rounded {
    -moz-border-radius: 15px;
    border-radius: 15px;
  }
  .normal-flag.rounded {
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .big-flag.rounded {
    -moz-border-radius: 8px;
    border-radius: 8px;
  }

  .flag {
  width: 60px;
  height: 40px;
  display: inline-block;
}
.f-and,
.f-andorra {
  background-position: 0 -41px;
}
.f-are,
.f-ae {
  background-position: 0 -82px;
}
.f-afg,
.f-af {
  background-position: 0 -123px;
}
.f-atg,
.f-ag {
  background-position: 0 -164px;
}
.f-aia,
.f-ai {
  background-position: 0 -205px;
}
.f-alb,
.f-al {
  background-position: 0 -246px;
}
.f-arm,
.f-am {
  background-position: 0 -287px;
}
.f-ant,
.f-an {
  background-position: 0 -328px;
}
.f-ago,
.f-ao {
  background-position: 0 -369px;
}
.f-ata,
.f-aq {
  background-position: 0 -410px;
}
.f-arg,
.f-ar {
  background-position: 0 -451px;
}
.f-asm,
.f-as {
  background-position: 0 -492px;
}
.f-aut,
.f-at {
  background-position: 0 -533px;
}
.f-aus,
.f-au {
  background-position: 0 -574px;
}
.f-abw,
.f-aw {
  background-position: 0 -615px;
}
.f-ala,
.f-ax {
  background-position: 0 -656px;
}
.f-aze,
.f-az {
  background-position: 0 -697px;
}
.f-bih,
.f-ba {
  background-position: 0 -738px;
}
.f-brb,
.f-bb {
  background-position: 0 -779px;
}
.f-bgd,
.f-bd {
  background-position: 0 -820px;
}
.f-bel,
.f-be {
  background-position: 0 -861px;
}
.f-bfa,
.f-bf {
  background-position: 0 -902px;
}
.f-bgr,
.f-bg {
  background-position: 0 -943px;
}
.f-bhr,
.f-bh {
  background-position: 0 -984px;
}
.f-bdi,
.f-bi {
  background-position: 0 -1025px;
}
.f-ben,
.f-bj {
  background-position: 0 -1066px;
}
.f-blm,
.f-bl {
  background-position: 0 -1107px;
}
.f-bmu,
.f-bm {
  background-position: 0 -1148px;
}
.f-brn,
.f-bn {
  background-position: 0 -1189px;
}
.f-bol,
.f-bo {
  background-position: 0 -1230px;
}
.f-bes,
.f-bq {
  background-position: 0 -1271px;
}
.f-bra,
.f-br {
  background-position: 0 -1312px;
}
.f-bhs,
.f-bs {
  background-position: 0 -1353px;
}
.f-btn,
.f-bt {
  background-position: 0 -1394px;
}
.f-bvt,
.f-bv {
  background-position: 0 -1435px;
}
.f-bwa,
.f-bw {
  background-position: 0 -1476px;
}
.f-blr,
.f-by {
  background-position: 0 -1517px;
}
.f-blz,
.f-bz {
  background-position: 0 -1558px;
}
.f-can,
.f-ca {
  background-position: 0 -1599px;
}
.f-cck,
.f-cc {
  background-position: 0 -1640px;
}
.f-cod,
.f-cd {
  background-position: 0 -1681px;
}
.f-caf,
.f-cf {
  background-position: 0 -1722px;
}
.f-cog,
.f-cg {
  background-position: 0 -1763px;
}
.f-che,
.f-ch {
  background-position: 0 -1804px;
}
.f-civ,
.f-ci {
  background-position: 0 -1845px;
}
.f-cok,
.f-ck {
  background-position: 0 -1886px;
}
.f-chl,
.f-cl {
  background-position: 0 -1927px;
}
.f-cmr,
.f-cm {
  background-position: 0 -1968px;
}
.f-chn,
.f-cn {
  background-position: 0 -2009px;
}
.f-col,
.f-co {
  background-position: 0 -2050px;
}
.f-cri,
.f-cr {
  background-position: 0 -2091px;
}
.f-cub,
.f-cu {
  background-position: 0 -2132px;
}
.f-cpv,
.f-cv {
  background-position: 0 -2173px;
}
.f-cuw,
.f-cw {
  background-position: 0 -2214px;
}
.f-cxr,
.f-cx {
  background-position: 0 -2255px;
}
.f-cyp,
.f-cy {
  background-position: 0 -2296px;
}
.f-cze,
.f-cz {
  background-position: 0 -2337px;
}
.f-deu,
.f-de {
  background-position: 0 -2378px;
}
.f-dji,
.f-dj {
  background-position: 0 -2419px;
}
.f-dnk,
.f-dk {
  background-position: 0 -2460px;
}
.f-dma,
.f-dm {
  background-position: 0 -2501px;
}
.f-dom,
.f-do {
  background-position: 0 -2542px;
}
.f-dza,
.f-dz {
  background-position: 0 -2583px;
}
.f-ecu,
.f-ec {
  background-position: 0 -2624px;
}
.f-est,
.f-ee {
  background-position: 0 -2665px;
}
.f-egy,
.f-eg {
  background-position: 0 -2706px;
}
.f-esh,
.f-eh {
  background-position: 0 -2747px;
}
.f-eri,
.f-er {
  background-position: 0 -2788px;
}
.f-es-ca {
  background-position: 0 -2829px;
}
.f-esp,
.f-es {
  background-position: 0 -2870px;
}
.f-eth,
.f-et {
  background-position: 0 -2911px;
}
.f-eu {
  background-position: 0 -2952px;
}
.f-fin,
.f-fi {
  background-position: 0 -2993px;
}
.f-fji,
.f-fj {
  background-position: 0 -3034px;
}
.f-flk,
.f-fk {
  background-position: 0 -3075px;
}
.f-fsm,
.f-fm {
  background-position: 0 -3116px;
}
.f-fro,
.f-fo {
  background-position: 0 -3157px;
}
.f-fra,
.f-fr {
  background-position: 0 -3198px;
}
.f-gab,
.f-ga {
  background-position: 0 -3239px;
}
.f-gb-eng {
  background-position: 0 -3280px;
}
.f-gb-nir {
  background-position: 0 -3321px;
}
.f-gb-sct {
  background-position: 0 -3362px;
}
.f-gb-wls {
  background-position: 0 -3403px;
}
.f-gbr,
.f-gb {
  background-position: 0 -3444px;
}
.f-grd,
.f-gd {
  background-position: 0 -3485px;
}
.f-geo,
.f-ge {
  background-position: 0 -3526px;
}
.f-guf,
.f-gf {
  background-position: 0 -3567px;
}
.f-ggy,
.f-gg {
  background-position: 0 -3608px;
}
.f-gha,
.f-gh {
  background-position: 0 -3649px;
}
.f-gib,
.f-gi {
  background-position: 0 -3690px;
}
.f-grl,
.f-gl {
  background-position: 0 -3731px;
}
.f-gmb,
.f-gm {
  background-position: 0 -3772px;
}
.f-gin,
.f-gn {
  background-position: 0 -3813px;
}
.f-glp,
.f-gp {
  background-position: 0 -3854px;
}
.f-gnq,
.f-gq {
  background-position: 0 -3895px;
}
.f-grc,
.f-gr {
  background-position: 0 -3936px;
}
.f-sgs,
.f-gs {
  background-position: 0 -3977px;
}
.f-gtm,
.f-gt {
  background-position: 0 -4018px;
}
.f-gum,
.f-gu {
  background-position: 0 -4059px;
}
.f-gnb,
.f-gw {
  background-position: 0 -4100px;
}
.f-guy,
.f-gy {
  background-position: 0 -4141px;
}
.f-hkg,
.f-hk {
  background-position: 0 -4182px;
}
.f-hmd,
.f-hm {
  background-position: 0 -4223px;
}
.f-hnd,
.f-hn {
  background-position: 0 -4264px;
}
.f-hrv,
.f-hr {
  background-position: 0 -4305px;
}
.f-hti,
.f-ht {
  background-position: 0 -4346px;
}
.f-hun,
.f-hu {
  background-position: 0 -4387px;
}
.f-idn,
.f-id {
  background-position: 0 -4428px;
}
.f-irl,
.f-ie {
  background-position: 0 -4469px;
}
.f-isr,
.f-il {
  background-position: 0 -4510px;
}
.f-imn,
.f-im {
  background-position: 0 -4551px;
}
.f-ind,
.f-in {
  background-position: 0 -4592px;
}
.f-iot,
.f-io {
  background-position: 0 -4633px;
}
.f-irq,
.f-iq {
  background-position: 0 -4674px;
}
.f-irn,
.f-ir {
  background-position: 0 -4715px;
}
.f-isl,
.f-is {
  background-position: 0 -4756px;
}
.f-ita,
.f-it {
  background-position: 0 -4797px;
}
.f-jey,
.f-je {
  background-position: 0 -4838px;
}
.f-jam,
.f-jm {
  background-position: 0 -4879px;
}
.f-jor,
.f-jo {
  background-position: 0 -4920px;
}
.f-jpn,
.f-jp {
  background-position: 0 -4961px;
}
.f-ken,
.f-ke {
  background-position: 0 -5002px;
}
.f-kgz,
.f-kg {
  background-position: 0 -5043px;
}
.f-khm,
.f-kh {
  background-position: 0 -5084px;
}
.f-kir,
.f-ki {
  background-position: 0 -5125px;
}
.f-com,
.f-km {
  background-position: 0 -5166px;
}
.f-kna,
.f-kn {
  background-position: 0 -5207px;
}
.f-prk,
.f-kp {
  background-position: 0 -5248px;
}
.f-kor,
.f-kr {
  background-position: 0 -5289px;
}
.f-kwt,
.f-kw {
  background-position: 0 -5330px;
}
.f-cym,
.f-ky {
  background-position: 0 -5371px;
}
.f-kaz,
.f-kz {
  background-position: 0 -5412px;
}
.f-lao,
.f-la {
  background-position: 0 -5453px;
}
.f-lbn,
.f-lb {
  background-position: 0 -5494px;
}
.f-lca,
.f-lc {
  background-position: 0 -5535px;
}
.f-lie,
.f-li {
  background-position: 0 -5576px;
}
.f-lka,
.f-lk {
  background-position: 0 -5617px;
}
.f-lbr,
.f-lr {
  background-position: 0 -5658px;
}
.f-lso,
.f-ls {
  background-position: 0 -5699px;
}
.f-ltu,
.f-lt {
  background-position: 0 -5740px;
}
.f-lux,
.f-lu {
  background-position: 0 -5781px;
}
.f-lva,
.f-lv {
  background-position: 0 -5822px;
}
.f-lby,
.f-ly {
  background-position: 0 -5863px;
}
.f-mar,
.f-ma {
  background-position: 0 -5904px;
}
.f-mco,
.f-mc {
  background-position: 0 -5945px;
}
.f-mda,
.f-md {
  background-position: 0 -5986px;
}
.f-mne,
.f-me {
  background-position: 0 -6027px;
}
.f-maf,
.f-mf {
  background-position: 0 -6068px;
}
.f-mdg,
.f-mg {
  background-position: 0 -6109px;
}
.f-mhl,
.f-mh {
  background-position: 0 -6150px;
}
.f-mkd,
.f-mk {
  background-position: 0 -6191px;
}
.f-mli,
.f-ml {
  background-position: 0 -6232px;
}
.f-mmr,
.f-mm {
  background-position: 0 -6273px;
}
.f-mng,
.f-mn {
  background-position: 0 -6314px;
}
.f-mac,
.f-mo {
  background-position: 0 -6355px;
}
.f-mnp,
.f-mp {
  background-position: 0 -6396px;
}
.f-mtq,
.f-mq {
  background-position: 0 -6437px;
}
.f-mrt,
.f-mr {
  background-position: 0 -6478px;
}
.f-msr,
.f-ms {
  background-position: 0 -6519px;
}
.f-mlt,
.f-mt {
  background-position: 0 -6560px;
}
.f-mus,
.f-mu {
  background-position: 0 -6601px;
}
.f-mdv,
.f-mv {
  background-position: 0 -6642px;
}
.f-mwi,
.f-mw {
  background-position: 0 -6683px;
}
.f-mex,
.f-mx {
  background-position: 0 -6724px;
}
.f-mys,
.f-my {
  background-position: 0 -6765px;
}
.f-moz,
.f-mz {
  background-position: 0 -6806px;
}
.f-nam,
.f-na {
  background-position: 0 -6847px;
}
.f-ncl,
.f-nc {
  background-position: 0 -6888px;
}
.f-ner,
.f-ne {
  background-position: 0 -6929px;
}
.f-nfk,
.f-nf {
  background-position: 0 -6970px;
}
.f-nga,
.f-ng {
  background-position: 0 -7011px;
}
.f-nic,
.f-ni {
  background-position: 0 -7052px;
}
.f-nld,
.f-nl {
  background-position: 0 -7093px;
}
.f-nor,
.f-no {
  background-position: 0 -7134px;
}
.f-npl,
.f-np {
  background-position: 0 -7175px;
}
.f-nru,
.f-nr {
  background-position: 0 -7216px;
}
.f-niu,
.f-nu {
  background-position: 0 -7257px;
}
.f-nzl,
.f-nz {
  background-position: 0 -7298px;
}
.f-omn,
.f-om {
  background-position: 0 -7339px;
}
.f-pan,
.f-pa {
  background-position: 0 -7380px;
}
.f-per,
.f-pe {
  background-position: 0 -7421px;
}
.f-pyf,
.f-pf {
  background-position: 0 -7462px;
}
.f-png,
.f-pg {
  background-position: 0 -7503px;
}
.f-phl,
.f-ph {
  background-position: 0 -7544px;
}
.f-pak,
.f-pk {
  background-position: 0 -7585px;
}
.f-pol,
.f-pl {
  background-position: 0 -7626px;
}
.f-spm,
.f-pm {
  background-position: 0 -7667px;
}
.f-pcn,
.f-pn {
  background-position: 0 -7708px;
}
.f-pri,
.f-pr {
  background-position: 0 -7749px;
}
.f-pse,
.f-ps {
  background-position: 0 -7790px;
}
.f-prt,
.f-pt {
  background-position: 0 -7831px;
}
.f-plw,
.f-pw {
  background-position: 0 -7872px;
}
.f-pry,
.f-py {
  background-position: 0 -7913px;
}
.f-qat,
.f-qa {
  background-position: 0 -7954px;
}
.f-reu,
.f-re {
  background-position: 0 -7995px;
}
.f-rou,
.f-ro {
  background-position: 0 -8036px;
}
.f-srb,
.f-rs {
  background-position: 0 -8077px;
}
.f-rus,
.f-ru {
  background-position: 0 -8118px;
}
.f-rwa,
.f-rw {
  background-position: 0 -8159px;
}
.f-sau,
.f-sa {
  background-position: 0 -8200px;
}
.f-slb,
.f-sb {
  background-position: 0 -8241px;
}
.f-syc,
.f-sc {
  background-position: 0 -8282px;
}
.f-sdn,
.f-sd {
  background-position: 0 -8323px;
}
.f-swe,
.f-se {
  background-position: 0 -8364px;
}
.f-sgp,
.f-sg {
  background-position: 0 -8405px;
}
.f-shn,
.f-sh {
  background-position: 0 -8446px;
}
.f-svn,
.f-si {
  background-position: 0 -8487px;
}
.f-sjm,
.f-sj {
  background-position: 0 -8528px;
}
.f-svk,
.f-sk {
  background-position: 0 -8569px;
}
.f-sle,
.f-sl {
  background-position: 0 -8610px;
}
.f-smr,
.f-sm {
  background-position: 0 -8651px;
}
.f-sen,
.f-sn {
  background-position: 0 -8692px;
}
.f-som,
.f-so {
  background-position: 0 -8733px;
}
.f-sur,
.f-sr {
  background-position: 0 -8774px;
}
.f-ssd,
.f-ss {
  background-position: 0 -8815px;
}
.f-stp,
.f-st {
  background-position: 0 -8856px;
}
.f-slv,
.f-sv {
  background-position: 0 -8897px;
}
.f-sxm,
.f-sx {
  background-position: 0 -8938px;
}
.f-syr,
.f-sy {
  background-position: 0 -8979px;
}
.f-swz,
.f-sz {
  background-position: 0 -9020px;
}
.f-tca,
.f-tc {
  background-position: 0 -9061px;
}
.f-tcd,
.f-td {
  background-position: 0 -9102px;
}
.f-atf,
.f-tf {
  background-position: 0 -9143px;
}
.f-tgo,
.f-tg {
  background-position: 0 -9184px;
}
.f-tha,
.f-th {
  background-position: 0 -9225px;
}
.f-tjk,
.f-tj {
  background-position: 0 -9266px;
}
.f-tkl,
.f-tk {
  background-position: 0 -9307px;
}
.f-tls,
.f-tl {
  background-position: 0 -9348px;
}
.f-tkm,
.f-tm {
  background-position: 0 -9389px;
}
.f-tun,
.f-tn {
  background-position: 0 -9430px;
}
.f-ton,
.f-to {
  background-position: 0 -9471px;
}
.f-tur,
.f-tr {
  background-position: 0 -9512px;
}
.f-tto,
.f-tt {
  background-position: 0 -9553px;
}
.f-tuv,
.f-tv {
  background-position: 0 -9594px;
}
.f-twn,
.f-tw {
  background-position: 0 -9635px;
}
.f-tza,
.f-tz {
  background-position: 0 -9676px;
}
.f-ukr,
.f-ua {
  background-position: 0 -9717px;
}
.f-uga,
.f-ug {
  background-position: 0 -9758px;
}
.f-umi,
.f-um {
  background-position: 0 -9799px;
}
.f-un {
  background-position: 0 -9840px;
}
.f-usa,
.f-us {
  background-position: 0 -9881px;
}
.f-ury,
.f-uy {
  background-position: 0 -9922px;
}
.f-uzb,
.f-uz {
  background-position: 0 -9963px;
}
.f-vat,
.f-va {
  background-position: 0 -10004px;
}
.f-vct,
.f-vc {
  background-position: 0 -10045px;
}
.f-ven,
.f-ve {
  background-position: 0 -10086px;
}
.f-vgb,
.f-vg {
  background-position: 0 -10127px;
}
.f-vir,
.f-vi {
  background-position: 0 -10168px;
}
.f-vnm,
.f-vn {
  background-position: 0 -10209px;
}
.f-vut,
.f-vu {
  background-position: 0 -10250px;
}
.f-wlf,
.f-wf {
  background-position: 0 -10291px;
}
.f-wsm,
.f-ws {
  background-position: 0 -10332px;
}
.f-xk {
  background-position: 0 -10373px;
}
.f-yem,
.f-ye {
  background-position: 0 -10414px;
}
.f-myt,
.f-yt {
  background-position: 0 -10455px;
}
.f-zaf,
.f-za {
  background-position: 0 -10496px;
}
.f-zmb,
.f-zm {
  background-position: 0 -10537px;
}
.f-zwe,
.f-zw {
  background-position: 0 -10578px;
}
.f-sun,
.f-su {
  background-position: 0 -10619px;
}

</style>
