# vue-country-flag
_Country flags as a Vue Component_

<p align="center">
  <img src="https://github.com/P3trur0/vue-country-flag/blob/master/assets/logo.png?raw=true" alt="vue-country-flag"/>
</p>
<p align="center">
  <img src="https://packagephobia.now.sh/badge?p=vue-country-flag@2.3.2" alt="Install size">
  <img src="https://img.shields.io/badge/Vue.js%202-compatible-green.svg" alt="Vue.js 2 compatible">
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/npm-2.3.2-blue.svg" alt="Version"></a>
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
| country | **ISO 3166-1** identifier of the country | `String` | one of the values defined [here](#available-flags) or in the [extra flags](#extra-flags) |

**Optional properties**

| Property | Description | Type | Value
|:--|:--|:--|:--|
| size | Flag size | `String` | small, normal, big |
| rounded | Flag with rounded borders | `Boolean` | `false` by default |
| shadow | Flag with box shadow around | `Boolean` | `false` by default |ß 

by default, the flag is displayed at *normal* size.


## Available Flags
The flags are identified using the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.  
This component currently supports both **alpha-2** and **alpha-3** alternatives.  

| **Country Name** | **alpha-2** | **alpha-3** |
|--------------|---------|---------|
| Afghanistan | af | afg |
| Åland Islands | ax | ala |
| Albania | al | alb |
| Algeria | dz | dza |
| American Samoa | as | asm |
| Andorra | ad | and |
| Angola | ao | ago |
| Anguilla | ai | aia |
| Antarctica | aq | ata |
| Antigua and Barbuda | ag | atg |
| Argentina | ar | arg |
| Armenia | am | arm |
| Aruba | aw | abw |
| Australia | au | aus |
| Austria | at | aut |
| Azerbaijan | az | aze |
| Bahamas | bs | bhs |
| Bahrain | bh | bhr |
| Bangladesh | bd | bgd |
| Barbados | bb | brb |
| Belarus | by | blr |
| Belgium | be | bel |
| Belize | bz | blz |
| Benin | bj | ben |
| Bermuda | bm | bmu |
| Bhutan | bt | btn |
| Bolivia (Plurinational State of) | bo | bol |
| Bonaire, Sint Eustatius and Saba | bq | bes |
| Bosnia and Herzegovina | ba | bih |
| Botswana | bw | bwa |
| Bouvet Island | bv | bvt |
| Brazil | br | bra |
| Virgin Islands (British) | vg | vgb |
| British Indian Ocean Territory | io | iot |
| Brunei Darussalam | bn | brn |
| Bulgaria | bg | bgr |
| Burkina Faso | bf | bfa |
| Burundi | bi | bdi |
| Cambodia | kh | khm |
| Cameroon | cm | cmr |
| Canada | ca | can |
| Cabo Verde | cv | cpv |
| Cayman Islands | ky | cym |
| Central African Republic | cf | caf |
| Chad | td | tcd |
| Chile | cl | chl |
| China | cn | chn |
| Hong Kong | hk | hkg |
| Macao | mo | mac |
| Christmas Island | cx | cxr |
| Cocos (Keeling) Islands | cc | cck |
| Colombia | co | col |
| Comoros | km | com |
| Congo | cg | cog |
| Congo, Democratic Republic of the | cd | cod |
| Cook Islands | ck | cok |
| Costa Rica | cr | cri |
| Côte d'Ivoire | ci | civ |
| Croatia | hr | hrv |
| Cuba | cu | cub |
| Curaçao | cw | cuw |
| Cyprus | cy | cyp |
| Czechia | cz | cze |
| Denmark | dk | dnk |
| Djibouti | dj | dji |
| Dominica | dm | dma |
| Dominican Republic | do | dom |
| Ecuador | ec | ecu |
| Egypt | eg | egy |
| El Salvador | sv | slv |
| Equatorial Guinea | gq | gnq |
| Eritrea | er | eri |
| Estonia | ee | est |
| Ethiopia | et | eth |
| Falkland Islands (Malvinas) | fk | flk |
| Faroe Islands | fo | fro |
| Fiji | fj | fji |
| Finland | fi | fin |
| France | fr | fra |
| French Guiana | gf | guf |
| French Polynesia | pf | pyf |
| French Southern Territories | tf | atf |
| Gabon | ga | gab |
| Gambia | gm | gmb |
| Georgia | ge | geo |
| Germany | de | deu |
| Ghana | gh | gha |
| Gibraltar | gi | gib |
| Greece | gr | grc |
| Greenland | gl | grl |
| Grenada | gd | grd |
| Guadeloupe | gp | glp |
| Guam | gu | gum |
| Guatemala | gt | gtm |
| Guernsey | gg | ggy |
| Guinea | gn | gin |
| Guinea-Bissau | gw | gnb |
| Guyana | gy | guy |
| Haiti | ht | hti |
| Heard Island and McDonald Islands | hm | hmd |
| Holy See | va | vat |
| Honduras | hn | hnd |
| Hungary | hu | hun |
| Iceland | is | isl |
| India | in | ind |
| Indonesia | id | idn |
| Iran (Islamic Republic of) | ir | irn |
| Iraq | iq | irq |
| Ireland | ie | irl |
| Isle of Man | im | imn |
| Israel | il | isr |
| Italy | it | ita |
| Jamaica | jm | jam |
| Japan | jp | jpn |
| Jersey | je | jey |
| Jordan | jo | jor |
| Kazakhstan | kz | kaz |
| Kenya | ke | ken |
| Kiribati | ki | kir |
| Korea (Democratic People's Republic of) | kp | prk |
| Korea, Republic of | kr | kor |
| Kuwait | kw | kwt |
| Kyrgyzstan | kg | kgz |
| Lao People's Democratic Republic | la | lao |
| Latvia | lv | lva |
| Lebanon | lb | lbn |
| Lesotho | ls | lso |
| Liberia | lr | lbr |
| Libya | ly | lby |
| Liechtenstein | li | lie |
| Lithuania | lt | ltu |
| Luxembourg | lu | lux |
| North Macedonia | mk | mkd |
| Madagascar | mg | mdg |
| Malawi | mw | mwi |
| Malaysia | my | mys |
| Maldives | mv | mdv |
| Mali | ml | mli |
| Malta | mt | mlt |
| Marshall Islands | mh | mhl |
| Martinique | mq | mtq |
| Mauritania | mr | mrt |
| Mauritius | mu | mus |
| Mayotte | yt | myt |
| Mexico | mx | mex |
| Micronesia (Federated States of) | fm | fsm |
| Moldova, Republic of | md | mda |
| Monaco | mc | mco |
| Mongolia | mn | mng |
| Montenegro | me | mne |
| Montserrat | ms | msr |
| Morocco | ma | mar |
| Mozambique | mz | moz |
| Myanmar | mm | mmr |
| Namibia | na | nam |
| Nauru | nr | nru |
| Nepal | np | npl |
| Netherlands | nl | nld |
| New Caledonia | nc | ncl |
| New Zealand | nz | nzl |
| Nicaragua | ni | nic |
| Niger | ne | ner |
| Nigeria | ng | nga |
| Niue | nu | niu |
| Norfolk Island | nf | nfk |
| Northern Mariana Islands | mp | mnp |
| Norway | no | nor |
| Oman | om | omn |
| Pakistan | pk | pak |
| Palau | pw | plw |
| Palestine, State of | ps | pse |
| Panama | pa | pan |
| Papua New Guinea | pg | png |
| Paraguay | py | pry |
| Peru | pe | per |
| Philippines | ph | phl |
| Pitcairn | pn | pcn |
| Poland | pl | pol |
| Portugal | pt | prt |
| Puerto Rico | pr | pri |
| Qatar | qa | qat |
| Réunion | re | reu |
| Romania | ro | rou |
| Russian Federation | ru | rus |
| Rwanda | rw | rwa |
| Saint Barthélemy | bl | blm |
| Saint Helena, Ascension and Tristan da Cunha | sh | shn |
| Saint Kitts and Nevis | kn | kna |
| Saint Lucia | lc | lca |
| Saint Martin (French part) | mf | maf |
| Saint Pierre and Miquelon | pm | spm |
| Saint Vincent and the Grenadines | vc | vct |
| Samoa | ws | wsm |
| San Marino | sm | smr |
| Sao Tome and Principe | st | stp |
| Saudi Arabia | sa | sau |
| Senegal | sn | sen |
| Serbia | rs | srb |
| Seychelles | sc | syc |
| Sierra Leone | sl | sle |
| Singapore | sg | sgp |
| Sint Maarten (Dutch part) | sx | sxm |
| Slovakia | sk | svk |
| Slovenia | si | svn |
| Solomon Islands | sb | slb |
| Somalia | so | som |
| South Africa | za | zaf |
| South Georgia and the South Sandwich Islands | gs | sgs |
| South Sudan | ss | ssd |
| Soviet Union | su | sun |
| Spain | es | esp |
| Sri Lanka | lk | lka |
| Sudan | sd | sdn |
| Suriname | sr | sur |
| Svalbard and Jan Mayen | sj | sjm |
| Eswatini | sz | swz |
| Sweden | se | swe |
| Switzerland | ch | che |
| Syrian Arab Republic | sy | syr |
| Taiwan, Province of China | tw | twn |
| Tajikistan | tj | tjk |
| Tanzania, United Republic of | tz | tza |
| Thailand | th | tha |
| Timor-Leste | tl | tls |
| Togo | tg | tgo |
| Tokelau | tk | tkl |
| Tonga | to | ton |
| Trinidad and Tobago | tt | tto |
| Tunisia | tn | tun |
| Turkey | tr | tur |
| Turkmenistan | tm | tkm |
| Turks and Caicos Islands | tc | tca |
| Tuvalu | tv | tuv |
| Uganda | ug | uga |
| Ukraine | ua | ukr |
| United Arab Emirates | ae | are |
| United Kingdom of Great Britain and Northern Ireland | gb | gbr |
| United States of America | us | usa |
| United States Minor Outlying Islands | um | umi |
| Uruguay | uy | ury |
| Uzbekistan | uz | uzb |
| Vanuatu | vu | vut |
| Venezuela (Bolivarian Republic of) | ve | ven |
| Viet Nam | vn | vnm |
| Virgin Islands (U.S.) | vi | vir |
| Wallis and Futuna | wf | wlf |
| Western Sahara | eh | esh |
| Yemen | ye | yem |
| Zambia | zm | zmb |
| Zimbabwe | zw | zwe |


## Extra flags

| **Country Name** | **Flag Code** |
|--------------|---------|
| Catalonia | es-ca |
| England | gb-eng |
| Europe | eu |
| Galles | gb-wls |
| Kosovo | xk |
| Scotland | gb-sct |
| United Nations | un |

## Credits

The flags used for this Vue components are provided by [Flag Icons CSS](https://github.com/lipis/flag-icon-css "Flag Icons CSS").

## Contributing

Please follow the guidelines [here](https://github.com/P3trur0/vue-country-flag/blob/master/CONTRIBUTING.md).
