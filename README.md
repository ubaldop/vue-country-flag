# vue-country-flag
_Country flags as a Vue Component_

<p align="center">
  <img src="https://github.com/P3trur0/vue-country-flag/blob/master/assets/logo.png?raw=true" alt="vue-country-flag"/>
</p>
<p align="center">
  <img src="https://packagephobia.now.sh/badge?p=vue-country-flag@1.3.1" alt="Install size">
  <img src="https://img.shields.io/badge/Vue.js%202-compatible-green.svg" alt="Vue.js 2 compatible">
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/npm-1.3.1-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/TypeScript-supported-blue" alt="TypeScript Supported">
  
</p>

## How to install

Get the package from NPM:

```bash
npm install vue-country-flag
```

## How to use

Register `CountryFlag` component in your app. You can use two approaches:

- in `main.js` you can mount it as a global Vue component:

```js

import Vue from 'vue'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

```

- in a specific component (e.g.: `Component.vue`):


```js
import CountryFlag from 'vue-country-flag'

new Vue({
    components: {
        CountryFlag
    }
})
```
Then, after the proper mounting, in your template you can call it like this:

```html
    <country-flag country='it' size='big'/>
    <country-flag country='hr' size='normal'/>
    <country-flag country='fr' size='small'/>
    <country-flag country='rus'/>
```

### API

**Mandatory properties**

| Property | Description | Type | Value
|:--|:--|:--|:--|
| country | **ISO 3166-1** identifier of the country | `String` | one of the values defined [here](#available-flags) |

**Optional properties**

| Property | Description | Type | Value
|:--|:--|:--|:--|
| size | Flag size | `String` | small, normal, big |

by default, the flag is displayed at *normal* size.


## Available Flags

Here follows the list of the available flags. They are identified using the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.  
This component currently supports both **alpha-2** and **alpha-3** alternatives of the standard.  

| **Country Name** | **alpha-2** | **alpha-3** |
|--------------|---------|---------|
| Afghanistan  | af | afg |
| Aland Islands  | ax | ala |
| Albania  | al | alb |
| Algeria  | dz | dza |
| American Samoa  | as | asm |
| Andorra  | ad | and |
| Angola  | ao | ago |
| Anguilla  | ai | aia |
| Antigua and Barbuda  | ag | atg |
| Argentina  | ar | arg |
| Armenia  | am | arm |
| Aruba  | aw | abw |
| Australia  | au | aus |
| Austria  | at | aut |
| Azerbaijan  | az | aze |
| Bahamas  | bs | bhs |
| Bahrain  | bh | bhr |
| Bangladesh  | bd | bgd |
| Barbados  | bb | brb |
| Belarus  | by | blr |
| Belgium  | be | bel |
| Belize  | bz | blz |
| Benin  | bj | ben |
| Bermuda  | bm | bmu |
| Bhutan  | bt | btn |
| Bolivia  | bo | bol |
| Bosnia and Herzegovina  | ba | bih |
| Botswana  | bw | bwa |
| Brazil  | br | bra |
| British Virgin Islands  | vg | vgb |
| Brunei  | bn | brn |
| Bulgaria  | bg | bgr |
| Burkina Faso  | bf | bfa |
| Burma  | mm | mmr |
| Burundi  | bi | bdi |
| Cambodia  | kh | khm |
| Cameroon  | cm | cmr |
| Canada  | ca | can |
| Canary Islands | ic | |
| Cape Verde  | cv | cpv |
| Cayman Islands  | ky | cym |
| Central African Republic  | cf | caf |
| Chad  | td | tcd |
| Chile  | cl | chl |
| China  | cn | chn |
| Colombia  | co | col |
| Comoros  | km | com |
| Cook Islands  | ck | cok |
| Costa Rica  | cr | cri |
| Croatia  | hr | hrv |
| Cuba  | cu | cub |
| Curacao | cw | cuw |
| Cyprus  | cy | cyp |
| Czech Republic  | cz | cze |
| Democratic Republic of the Congo  | cd | cod |
| Denmark  | dk | dnk |
| Djibouti  | dj | dji |
| Dominica  | dm | dma |
| Dominican Republic  | do | dom |
| East Timor  | tl | tls |
| Ecuador  | ec | ecu |
| Egypt  | eg | egy |
| El Salvador  | sv | slv |
| Equatorial Guinea  | gq | gnq |
| Eritrea  | er | eri |
| Estonia  | ee | est |
| Ethiopia  | et | eth |
| European Union | eu | |
| Falkland Islands (Malvinas)  | fk | flk |
| Faroe Islands  | fo | fro |
| Fiji  | fj | fji |
| Finland  | fi | fin |
| France  | fr | fra |
| French Polynesia  | pf | pyf |
| French Southern Territories  | tf | atf |
| Gabon  | ga | gab |
| Gambia  | gm | gmb |
| Georgia  | ge | geo |
| Germany  | de | deu |
| Ghana  | gh | gha |
| Gibraltar  | gi | gib |
| Granada  | gd | grd |
| Greece  | gr | grc |
| Greenland  | gl | grl |
| Guam  | gu | gum |
| Guatemala  | gt | gtm |
| Guernsey  | gg | ggy |
| Guinea  | gn | gin |
| Guinea-Bissau  | gw | gnb |
| Guyana  | gy | guy |
| Haiti  | ht | hti |
| Honduras  | hn | hnd |
| Hong Kong  | hk | hkg |
| Hungary  | hu | hun |
| Iceland  | is | isl |
| India  | in | ind |
| Indonesia  | id | idn |
| Iran  | ir | irn |
| Iraq  | iq | irq |
| Ireland  | ie | irl |
| Isle of Man  | im | imn |
| Israel  | il | isr |
| Italy  | it | ita |
| Ivory Coast  | ci | civ |
| Jamaica  | jm | jam |
| Japan  | jp | jpn |
| Jersey  | je | jey |
| Jordan  | jo | jor |
| Kazakhstan  | kz | kaz |
| Kenya  | ke | ken |
| Kiribati  | ki | kir |
| Kuwait  | kw | kwt |
| Kyrgyzstan  | kg | kgz |
| Laos  | la | lao |
| Latvia  | lv | lva |
| Lebanon  | lb | lbn |
| Lesotho  | ls | lso |
| Liberia  | lr | lbr |
| Libya  | ly | lby |
| Liechtenstein  | li | lie |
| Lithuania  | lt | ltu |
| Luxembourg  | lu | lux |
| Macao  | mo | mac |
| Macedonia  | mk | mkd |
| Madagascar  | mg | mdg |
| Malawi  | mw | mwi |
| Malaysia  | my | mys |
| Maldives  | mv | mdv |
| Mali  | ml | mli |
| Malta  | mt | mlt |
| Marshall, Islands  | mh | mhl |
| Martinique  | mq | mtq |
| Mauricio  | mu | mus |
| Mauritania  | mr | mrt |
| Mayotte  | yt | myt |
| Mexico  | mx | mex |
| Micronesia  | fm | fsm |
| Moldova  | md | mda |
| Monaco  | mc | mco |
| Mongolia  | mn | mng |
| Montenegro  | me | mne |
| Montserrat  | ms | msr |
| Morocco  | ma | mar |
| Mozambique  | mz | moz |
| Namibia  | na | nam |
| Nauru  | nr | nru |
| Nepal  | np | npl |
| Netherlands Antilles  | an | ant |
| New Caledonia  | nc | ncl |
| New Zealand  | nz | nzl |
| Nicaragua  | ni | nic |
| Niger  | ne | ner |
| Nigeria  | ng | nga |
| Niue  | nu | niu |
| Norfolk, Island  | nf | nfk |
| North Korea  | kp | prk |
| Northern Mariana Islands  | mp | mnp |
| Norway  | no | nor |
| Oman  | om | omn |
| Pakistan  | pk | pak |
| Palau  | pw | plw |
| Palestine  | ps | pse |
| Panama  | pa | pan |
| Papua New Guinea  | pg | png |
| Paraguay  | py | pry |
| Peru  | pe | per |
| Philippines  | ph | phl |
| Pitcairn  | pn | pcn |
| Poland  | pl | pol |
| Portugal  | pt | prt |
| Puerto Rico  | pr | pri |
| Qatar  | qa | qat |
| Republic of the Congo  | cg | cog |
| Romania  | ro | rou |
| Russia  | ru | rus |
| Rwanda  | rw | rwa |
| Saint Barthelemy  | bl | blm |
| Saint Helena  | sh | shn |
| Saint Kitts and Nevis  | kn | kna |
| Saint Lucia  | lc | lca |
| Saint Martin  | mf | maf |
| Saint Vincent and the Grenadines  | vc | vct |
| Samoa  | ws | wsm |
| San Marino  | sm | smr |
| Sao Tome and Principe  | st | stp |
| Saudi Arabia  | sa | sau |
| Senegal  | sn | sen |
| Serbia  | rs | srb |
| Seychelles  | sc | syc |
| Sierra Leone  | sl | sle |
| Singapore  | sg | sgp |
| Slovakia  | sk | svk |
| Slovenia  | si | svn |
| Solomon Islands  | sb | slb |
| Somalia  | so | som |
| South Africa  | za | zaf |
| South Georgia and the South Sandwich Islands  | gs | sgs |
| South Korea  | kr | kor |
| South Sudan  | ss | ssd |
| Spain  | es | esp |
| Sri Lanka  | lk | lka |
| Sudan  | sd | sdn |
| Suriname  | sr | sur |
| Swaziland  | sz | swz |
| Sweden  | se | swe |
| Switzerland  | ch | che |
| Syria  | sy | syr |
| Taiwan  | tw | twn |
| Tajikistan  | tj | tjk |
| Tanzania  | tz | tza |
| Thailand  | th | tha |
| The Netherlands  | nl | nld |
| Togo  | tg | tgo |
| Tokelau  | tk | tkl |
| Tonga  | to | ton |
| Trinidad and Tobago  | tt | tto |
| Tunisia  | tn | tun |
| Turkey  | tr | tur |
| Turkmenistan  | tm | tkm |
| Turks and Caicos Islands  | tc | tca |
| Tuvalu  | tv | tuv |
| Uganda  | ug | uga |
| Ukraine  | ua | ukr |
| United Arab Emirates  | ae | are |
| United Kingdom  | gb | gbr |
| United States  | us | usa |
| Uruguay  | uy | ury |
| Uzbekistan  | uz | uzb |
| Vanuatu  | vu | vut |
| Vatican City  | va | vat |
| Venezuela  | ve | ven |
| Vietnam  | vn | vnm |
| Virgin Islands of the United States  | vi | vir |
| Wallis and Futuna  | wf | wlf |
| Western Sahara  | eh | esh |
| Yemen  | ye | yem |
| Zambia  | zm | zmb |
| Zimbabwe  | zw | zwe |


## Credits

The flags used for this Vue components are provided by [CSS Flag Sprites generator](https://www.flag-sprites.com/ "Country flags in single CSS sprite").

## Contributing

Please follow the guidelines [here](https://github.com/P3trur0/vue-country-flag/blob/master/CONTRIBUTING.md).
