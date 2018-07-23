# Country flags as a Vue Component

<p align="center">
  <h4>Vue.js v2.x compatible <img src="https://img.shields.io/badge/vue%202.x-compatible-green.svg" alt="Vue.js 2 compatible"></h4>
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/npm-1.0.1-blue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
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

Vue.component('vue-country-flag', CountryFlag)

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
    <country-flag country='ru'/>
```

### API

Mandatory properties

| Property | Description | Type | Value
|:--|:--|:--|:--|
| country | **ISO 3166-1** identifier of the country | `String` | one of the values defined [here](#available-flags) |

Optional properties

| Property | Description | Type | Value
|:--|:--|:--|:--|
| size | Flag size | `String` | small, normal, big |

by default, the flag is displayed at *normal* size.


## Available Flags

Here follows the list of the currently available flags.
They are identified using the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard.

* Afghanistan (af)
* Aland Islands (ax)
* Albania (al)
* Algeria (dz)
* American Samoa (as)
* Andorra (ad)
* Angola (ao)
* Anguilla (ai)
* Antigua and Barbuda (ag)
* Argentina (ar)
* Armenia (am)
* Aruba (aw)
* Australia (au)
* Austria (at)
* Azerbaijan (az)
* Bahamas (bs)
* Bahrain (bh)
* Bangladesh (bd)
* Barbados (bb)
* Belarus (by)
* Belgium (be)
* Belize (bz)
* Benin (bj)
* Bermuda (bm)
* Bhutan (bt)
* Bolivia (bo)
* Bosnia and Herzegovina (ba)
* Botswana (bw)
* Brazil (br)
* British Virgin Islands (vg)
* Brunei (bn)
* Bulgaria (bg)
* Burkina Faso (bf)
* Burma (mm)
* Burundi (bi)
* Cambodia (kh)
* Cameroon (cm)
* Canada (ca)
* Canary Islands (ic)
* Cape Verde (cv)
* Cayman Islands (ky)
* Central African Republic (cf)
* Chad (td)
* Chile (cl)
* China (cn)
* Colombia (co)
* Comoros (km)
* Cook Islands (ck)
* Costa Rica (cr)
* Croatia (hr)
* Cuba (cu)
* Curacao (cw)
* Cyprus (cy)
* Czech Republic (cz)
* Democratic Republic of the Congo (cd)
* Denmark (dk)
* Djibouti (dj)
* Dominica (dm)
* Dominican Republic (do)
* East Timor (tl)
* Ecuador (ec)
* Egypt (eg)
* El Salvador (sv)
* Equatorial Guinea (gq)
* Eritrea (er)
* Estonia (ee)
* Ethiopia (et)
* European Union (eu)
* Falkland Islands (Malvinas) (fk)
* Faroe Islands (fo)
* Fiji
* Finland (fi)
* France (fr)
* French Polynesia (pf)
* French Southern Territories (tf)
* Gabon (ga)
* Gambia (gm)
* Georgia (ge)
* Germany (de)
* Ghana (gh)
* Gibraltar (gi)
* Granada (gd)
* Greece (gr)
* Greenland (gl)
* Guam (gu)
* Guatemala (gt)
* Guernsey (gg)
* Guinea (gn)
* Guinea-Bissau (gw)
* Guyana (gy)
* Haiti (ht)
* Honduras (hn)
* Hong Kong (hk)
* Hungary (hu)
* Iceland (is)
* India (in)
* Indonesia (id)
* Iran (go)
* Iraq (iq)
* Ireland (ie)
* Isle of Man (im)
* Israel (il)
* Italy (it)
* Ivory Coast (ci)
* Jamaica (jm)
* Japan (jp)
* Jersey (je)
* Jordan (jo)
* Kazakhstan (kz)
* Kenya (ke)
* Kiribati (ki)
* Kuwait (kw)
* Kyrgyzstan (kg)
* Laos (the)
* Latvia (lv)
* Lebanon (lb)
* Lesotho (ls)
* Liberia (lr)
* Libya (ly)
* Liechtenstein (li)
* Lithuania (lt)
* Luxembourg (lu)
* Macao (mo)
* Macedonia (mk)
* Madagascar (mg)
* Malawi (mw)
* Malaysia (my)
* Maldives (mv)
* Mali (ml)
* Malta (mt)
* Marshall, Islands (mh)
* Martinique (mq)
* Mauricio (mu)
* Mauritania (mr)
* Mayotte (yt)
* Mexico (mx)
* Micronesia (fm)
* Moldova (md)
* Monaco (mc)
* Mongolia (mn)
* Montenegro (me)
* Montserrat (ms)
* Morocco (ma)
* Mozambique (mz)
* Namibia (na)
* Nauru (nr)
* Nepal (np)
* Netherlands Antilles (an)
* New Caledonia (nc)
* New Zealand (nz)
* Nicaragua (ni)
* Niger (ne)
* Nigeria (ng)
* Niue (nu)
* Norfolk, Island (nf)
* North Korea (kp)
* Northern Mariana Islands (mp)
* Norway (no)
* Oman (om)
* Pakistan (pk)
* Palau (pw)
* Palestine (ps)
* Panama (pa)
* Papua New Guinea (pg)
* Paraguay (py)
* Peru (pe)
* Philippines (ph)
* Pitcairn (pn)
* Poland (pl)
* Portugal (pt)
* Puerto Rico (pr)
* Qatar (qa)
* Republic of the Congo (cg)
* Romania (ro)
* Russia (ru)
* Rwanda (rw)
* Saint Barthelemy (bl)
* Saint Helena (sh)
* Saint Kitts and Nevis (kn)
* Saint Lucia (lc)
* Saint Martin (mf)
* Saint Vincent and the Grenadines (vc)
* Samoa (ws)
* San Marino (sm)
* Sao Tome and Principe (st)
* Saudi Arabia (sa)
* Senegal (sn)
* Serbia (rs)
* Seychelles (sc)
* Sierra Leone (sl)
* Singapore (sg)
* Slovakia (sk)
* Slovenia (yes)
* Solomon Islands (sb)
* Somalia (so)
* South Africa (za)
* South Georgia and the South Sandwich Islands (gs)
* South Korea (kr)
* South Sudan (ss)
* Spain (en)
* Sri Lanka (lk)
* Sudan (sd)
* Suriname (sr)
* Swaziland (sz)
* Sweden (is)
* Switzerland (ch)
* Syria (sy)
* Taiwan (tw)
* Tajikistan (tj)
* Tanzania (tz)
* Thailand (th)
* The Netherlands (nl)
* Togo (tg)
* Tokelau (tk)
* Tonga (to)
* Trinidad and Tobago (tt)
* Tunisia (tn)
* Turkey (tr)
* Turkmenistan (tm)
* Turks and Caicos Islands (tc)
* Tuvalu (tv)
* Uganda (ug)
* Ukraine (ua)
* United Arab Emirates (ae)
* United Kingdom (gb)
* United States (us)
* Uruguay (uy)
* Uzbekistan (uz)
* Vanuatu (vu)
* Vatican City (va)
* Venezuela (ve)
* Vietnam (vn)
* Virgin Islands of the United States (vi)
* Wallis and Futuna (wf)
* Western Sahara (eh)
* Yemen (ye)
* Zambia (zm)
* Zimbabwe (zw)


## Credits

The flags used for this Vue components are provided by [CSS Flag Sprites generator](https://www.flag-sprites.com/ "Country flags in single CSS sprite").

## Contributing

Please follow the guidelines [here](https://github.com/P3trur0/vue-country-flag/blob/master/CONTRIBUTING.md).
