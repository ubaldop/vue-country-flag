# Country flags as a Vue Component

<p align="center">
  <h4>Vue.js v2.x compatible <img src="https://img.shields.io/badge/vue%202.x-compatible-green.svg" alt="Vue.js 2 compatible"></h4>
  <a href="https://www.npmjs.com/package/vue-country-flag"><img src="https://img.shields.io/badge/npm-1.0.0-blue.svg" alt="Version"></a>
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

* Afganistán (af)
* Aland Islands (ax)
* Albania (al)
* Germany (de)
* Andorra (ad)
* Angola (ao)
* Anguila (ai)
* Antigua and Barbuda (ag)
* Arabia Saudita (sa)
* Argelia (dz)
* Argentina (ar)
* Armenia (am)
* Aruba (aw)
* Australia (au)
* Austria (at)
* Azerbaiyán (az)
* Bahamas (bs)
* Bangladés (bd)
* Barbados (bb)
* Baréin (bh)
* Belice (bz)
* Benin (bj)
* Bermudas (bm)
* Bielorrusia (by)
* Birmania (mm)
* Bolivia (bo)
* Bosnia y Herzegovina (ba)
* Botsuana (bw)
* Brasil (br)
* Brunéi (bn)
* Bulgaria (bg)
* Burkina Faso (bf)
* Burundi (bi)
* Bután (bt)
* Belgium (be)
* Cabo Verde (cv)
* Camboya (kh)
* Camerún (cm)
* Canadá (ca)
* Canary Islands (ic)
* Catar (qa)
* Chad (td)
* Chile (cl)
* China (cn)
* Chipre (cy)
* Ciudad del Vaticano (va)
* Colombia (co)
* Comoras (km)
* Corea del Norte (kp)
* Corea del Sur (kr)
* Costa Rica (cr)
* Costa de Marfil (ci)
* Croacia (hr)
* Cuba (cu)
* Curazao (cw)
* Dinamarca (dk)
* Dominica (dm)
* Ecuador (ec)
* Egipto (eg)
* El Salvador (sv)
* Emiratos Árabes Unidos (ae)
* Eritrea (er)
* Eslovaquia (sk)
* Eslovenia (si)
* España (es)
* Estados Unidos (us)
* Estonia (ee)
* Etiopía (et)
* European Union (eu)
* Falkland Islands (Malvinas) (fk)
* Filipinas (ph)
* Finlandia (fi)
* Fiyi (fj)
* Francia (fr)
* Gabón (ga)
* Gambia (gm)
* Georgia (ge)
* Ghana (gh)
* Gibraltar (gi)
* Granada (gd)
* Grecia (gr)
* Groenlandia (gl)
* Guam (gu)
* Guatemala (gt)
* Guernsey (gg)
* Guinea (gn)
* Guinea Ecuatorial (gq)
* Guinea-Bisáu (gw)
* Guyana (gy)
* Haití (ht)
* Honduras (hn)
* Hong Kong (hk)
* Hungría (hu)
* India (in)
* Indonesia (id)
* Irak (iq)
* Irlanda (ie)
* Irán (ir)
* Islandia (is)
* Islas Caimán (ky)
* Islas Cook (ck)
* Islas Feroe (fo)
* Islas Georgias del Sur y Sandwich del Sur (gs)
* Islas Marianas del Norte (mp)
* Islas Turcas y Caicos (tc)
* Islas Vírgenes Británicas (vg)
* Islas Vírgenes de los Estados Unidos (vi)
* Isle of Man (im)
* Israel (il)
* Italia (it)
* Jamaica (jm)
* Japón (jp)
* Jersey (je)
* Jordania (jo)
* Kazajistán (kz)
* Kenia (ke)
* Kirguistán (kg)
* Kiribati (ki)
* Kuwait (kw)
* Laos (la)
* Lesoto (ls)
* Letonia (lv)
* Liberia (lr)
* Libia (ly)
* Liechtenstein (li)
* Lituania (lt)
* Luxemburgo (lu)
* Líbano (lb)
* Macao (mo)
* Macedonia (mk)
* Madagascar (mg)
* Malasia (my)
* Malaui (mw)
* Maldivas (mv)
* Malta (mt)
* Malí (ml)
* Marruecos (ma)
* Marshall, Islas (mh)
* Martinica (mq)
* Mauricio (mu)
* Mauritania (mr)
* Mayotte (yt)
* Micronesia (fm)
* Moldavia (md)
* Mongolia (mn)
* Montenegro (me)
* Montserrat (ms)
* Mozambique (mz)
* México (mx)
* Mónaco (mc)
* Namibia (na)
* Nauru (nr)
* Nepal (np)
* Netherlands Antilles (an)
* Nicaragua (ni)
* Nigeria (ng)
* Niue (nu)
* Norfolk, Isla (nf)
* Noruega (no)
* Nueva Caledonia (nc)
* Nueva Zelanda (nz)
* Níger (ne)
* Omán (om)
* Pakistán (pk)
* Palaos (pw)
* Palestina (ps)
* Panamá (pa)
* Papúa Nueva Guinea (pg)
* Paraguay (py)
* Países Bajos (nl)
* Perú (pe)
* Pitcairn (pn)
* Polinesia Francesa (pf)
* Polonia (pl)
* Portugal (pt)
* Puerto Rico (pr)
* Reino Unido (gb)
* República Centroafricana (cf)
* República Checa (cz)
* República Democrática del Congo (cd)
* República Dominicana (do)
* República del Congo (cg)
* Ruanda (rw)
* Rumania (ro)
* Rusia (ru)
* Sahara Occidental (eh)
* Saint Barthelemy (bl)
* Saint Kitts and Nevis (kn)
* Saint Lucia (lc)
* Saint Martin (mf)
* Saint Vincent and the Grenadines (vc)
* Samoa (ws)
* Samoa Americana (as)
* San Marino (sm)
* Santa Elena (sh)
* Santo Tomé y Príncipe (st)
* Senegal (sn)
* Serbia (rs)
* Seychelles (sc)
* Sierra Leona (sl)
* Singapur (sg)
* Siria (sy)
* Solomon Islands (sb)
* Somalia (so)
* Sri Lanka (lk)
* Suazilandia (sz)
* Sudáfrica (za)
* Sudán (sd)
* Sudán del Sur (ss)
* Suecia (se)
* Suiza (ch)
* Surinam (sr)
* Tailandia (th)
* Taiwán (tw)
* Tanzania (tz)
* Tayikistán (tj)
* Territorios Australes Franceses (tf)
* Timor Oriental (tl)
* Togo (tg)
* Tokelau (tk)
* Tonga (to)
* Trinidad y Tobago (tt)
* Turkmenistán (tm)
* Turquía (tr)
* Tuvalu (tv)
* Túnez (tn)
* Ucrania (ua)
* Uganda (ug)
* Uruguay (uy)
* Uzbekistán (uz)
* Vanuatu (vu)
* Venezuela (ve)
* Vietnam (vn)
* Wallis y Futuna (wf)
* Yemen (ye)
* Yibuti (dj)
* Zambia (zm)
* Zimbabwe (zw)

## Credits

The flags used for this Vue components are provided by [CSS Flag Sprites generator](https://www.flag-sprites.com/ "Country flags in single CSS sprite").

## Contributing

Please follow the guidelines [here](https://github.com/P3trur0/vue-country-flag/blob/master/CONTRIBUTING.md).
