"use strict";(self.webpackChunkarcgis_map_test=self.webpackChunkarcgis_map_test||[]).push([[5963,526],{15160:(e,t,n)=>{n.d(t,{lY:()=>m,mT:()=>h});var s,r=n(86912),i=n(93435),a=n(10140);(s||(s={})).TimeZoneNotRecognized="TimeZoneNotRecognized";const o={[s.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class l extends Error{constructor(e,t){super((0,r.HC)(o[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,l)}}function c(e,t,n){return e<t?e-t:e>n?e-n:0}function u(e,t,n){return e<t?t:e>n?n:e}class m{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,n=1,s=0,r=0,i=0,o=0,l){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(s)||isNaN(r)||isNaN(i)||isNaN(o))return null;const d=a.c9.local(e,t).daysInMonth;let f=a.c9.fromObject({day:u(n,1,d),year:e,month:u(t,1,12),hour:u(s,0,23),minute:u(r,0,59),second:u(i,0,59),millisecond:u(o,0,999)},{zone:h(l)});return f=f.plus({months:c(t,1,12),days:c(n,1,d),hours:c(s,0,23),minutes:c(r,0,59),seconds:c(i,0,59),milliseconds:c(o,0,999)}),new m(f)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const n=h(t);return e.isUnknownTimeZone||n===i.GB.instance?m.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,n):new m(e._date.setZone(n))}static dateJSToArcadeDate(e){return new m(a.c9.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){const n=h(t);return new m(a.c9.fromJSDate(e,{zone:n}))}static unknownEpochToArcadeDate(e){return new m(a.c9.fromMillis(e,{zone:i.GB.instance}))}static unknownDateJSToArcadeDate(e){return new m(a.c9.fromMillis(e.getTime(),{zone:i.GB.instance}))}static epochToArcadeDate(e,t="system"){const n=h(t);return new m(a.c9.fromMillis(e,{zone:n}))}static dateTimeToArcadeDate(e){return new m(e)}clone(){return new m(this._date)}changeTimeZone(e){const t=h(e);return m.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const n=h(t);return e.zone===i.GB.instance||n===i.GB.instance?m.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,n):new m(e.setZone(n))}static nowToArcadeDate(e){const t=h(e);return new m(a.c9.fromJSDate(new Date,{zone:t}))}static nowUTCToArcadeDate(){return new m(a.c9.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===m.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===i.GB.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new m(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new m(this._date.toUTC())}toLocal(){return new m(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(e){if(!e)return null;const t=a.c9.fromISO(e,{setZone:!0});return new m(t)}}function h(e,t=!0){if(e instanceof a.bo)return e;if("system"===e.toLowerCase())return"system";if("utc"===e.toLowerCase())return"UTC";if("unknown"===e.toLowerCase())return i.GB.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e)){const t=a.mQ.parseSpecifier("UTC"+(e.startsWith("+")||e.startsWith("-")?"":"+")+e);if(t)return t}const n=a.oh.create(e);if(!n.isValid){if(t)throw new l(s.TimeZoneNotRecognized);return null}return n}},65965:(e,t,n)=>{n.d(t,{Fq:()=>l,SQ:()=>a,Yc:()=>i,Yq:()=>o,uf:()=>r});var s=n(57116);function r(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function i(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new s.A({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function a(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function o(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function l(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},31162:(e,t,n)=>{n.d(t,{n:()=>o});var s=n(15160),r=n(42355),i=n(10140);function a(e){e=e.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g,"[$&]");let t="";const n=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const s of e.match(n)||[])switch(s){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=s;break;default:s.length>=2&&"["===s.slice(0,1)&&"]"===s.slice(-1)?t+=`'${s.slice(1,-1)}'`:t+=`'${s}'`}return t}class o{constructor(e,t,n){this._year=e,this._month=t,this._day=n,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof o&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new o(this._year,this._month,this._day)}toDateTime(e){return i.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toDateTimeLuxon(e){return i.c9.fromObject({day:this.day,month:this.month,year:this.year},{zone:(0,s.mT)(e)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null,t=!0){if(null===e||""===e)return this.toString();if(t&&(e=a(e)),!e)return"";const n=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(n).toFormat(e,{locale:(0,r.JK)(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return s.lY.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return i.c9.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(e){const t=i.c9.fromMillis(e,{zone:i.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromSeconds(e){const t=i.c9.fromSeconds(e,{zone:i.mQ.utcInstance});return t.isValid?o.fromParts(t.year,t.month,t.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,n){const s=new o(e,t,n);return!1===s.isValid?null:s}static fromDateJS(e){return o.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return o.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const n=[];if(t)(t=a(t))&&n.push(t);else if(null===t||""===t){const t=i.c9.fromISO(e,{setZone:!0});return t.isValid?o.fromParts(t.year,t.month,t.day):null}for(const s of n){const n=i.c9.fromFormat(e,t??s);if(n.isValid)return new o(n.year,n.month,n.day)}return null}static fromNow(e="system"){const t=i.c9.fromJSDate(new Date).setZone((0,s.mT)(e));return new o(t.year,t.month,t.day)}}},76363:(e,t,n)=>{n.d(t,{k:()=>o});var s=n(65965),r=n(42355),i=n(10140);function a(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let n="";for(const s of e.match(t)||[])switch(s){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":n+=s;break;case"A":case"a":n+="a";break;default:n+=`'${s}'`}return n}class o{constructor(e,t,n,s){this._hour=e,this._minute=t,this._second=n,this._millisecond=s,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof o&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new o(this.hour,this.minute,this.second,this.millisecond)}isValid(){return(0,s.Fq)(this.hour)&&(0,s.Fq)(this.minute)&&(0,s.Fq)(this.second)&&(0,s.Fq)(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(e=null){return null===e||""===e?this.toString():(e=a(e))?i.c9.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(e,{locale:(0,r.JK)(),numberingSystem:"latn"}):""}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,n,s){const r=new o(e,t,n,s);return r.isValid()?r:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new o(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60),s=Math.floor(e/36e5%24),r=Math.floor(e%1e3);return new o(s,n,t,r)}static fromDateJS(e){return new o(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new o(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(e,t=null){if(""===e)return null;if(null===e)return null;const n=[];t?(t=a(t))&&n.push(t):null!==t&&""!==t||(n.push("HH:mm:ss"),n.push("HH:mm:ss.SSS"),n.push("hh:mm:ss a"),n.push("hh:mm:ss.SSS a"),n.push("HH:mm"),n.push("hh:mm a"),n.push("H:mm"),n.push("h:mm a"),n.push("H:mm:ss"),n.push("h:mm:ss a"),n.push("H:mm:ss.SSS"),n.push("h:mm:ss.SSS a"));for(const t of n){const n=i.c9.fromFormat(e,t);if(n.isValid)return new o(n.hour,n.minute,n.second,n.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return o.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return i.c9.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}},61933:(e,t,n)=>{n.d(t,{g:()=>s});const s={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const s=new r(e.getPointX(t),e.getPointY(t),n),i=e.hasZ(t),a=e.hasM(t);return i&&(s.z=e.getPointZ(t)),a&&(s.m=e.getPointM(t)),s},exportPolygon:function(e,t,n){return new i(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new a(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new o(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const s=e.hasZ(t),r=e.hasM(t),i=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(s){const n=e.getZExtent(t);i.zmin=n.vmin,i.zmax=n.vmax}if(r){const n=e.getMExtent(t);i.mmin=n.vmin,i.mmax=n.vmax}return i}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class i{constructor(e,t,n,s){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(e,t,n,s){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(e,t,n,s){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class l{constructor(e,t,n,s,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=s,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},40782:(e,t,n)=>{function s(e,t){return e?t?4:3:t?3:2}function r(e,t,n,r){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const o=e.coords,l=[],c=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:m}=t,h=s(n,r);let d=0;for(const e of u){const t=i(c,m,d,e,n,r);t&&l.push(t),d+=e*h}if(l.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&n&&(s=e[4]-t[4]),s})),l.length){let e=6*l[0][2];o[0]=l[0][0]/e,o[1]=l[0][1]/e,n&&(e=6*l[0][4],o[2]=0!==e?l[0][3]/e:0),(o[0]<c[0]||o[0]>c[1]||o[1]<c[2]||o[1]>c[3]||n&&(o[2]<c[4]||o[2]>c[5]))&&(o.length=0)}if(!o.length){const e=t.lengths[0]?a(m,0,u[0],n,r):null;if(!e)return null;o[0]=e[0],o[1]=e[1],n&&e.length>2&&(o[2]=e[2])}return e}function i(e,t,n,r,i,a){const o=s(i,a);let l=n,c=n+o,u=0,m=0,h=0,d=0,f=0;for(let n=0,s=r-1;n<s;n++,l+=o,c+=o){const n=t[l],s=t[l+1],r=t[l+2],a=t[c],o=t[c+1],y=t[c+2];let p=n*o-a*s;d+=p,u+=(n+a)*p,m+=(s+o)*p,i&&(p=n*y-a*r,h+=(r+y)*p,f+=p),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),i&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(d>0&&(d*=-1),f>0&&(f*=-1),!d)return null;const y=[u,m,.5*d];return i&&(y[3]=h,y[4]=.5*f),y}function a(e,t,n,r,i){const a=s(r,i);let m=t,h=t+a,d=0,f=0,y=0,p=0;for(let t=0,s=n-1;t<s;t++,m+=a,h+=a){const t=e[m],n=e[m+1],s=e[m+2],i=e[h],a=e[h+1],T=e[h+2],S=r?l(t,n,s,i,a,T):o(t,n,i,a);if(S)if(d+=S,r){const e=u(t,n,s,i,a,T);f+=S*e[0],y+=S*e[1],p+=S*e[2]}else{const e=c(t,n,i,a);f+=S*e[0],y+=S*e[1]}}return d>0?r?[f/d,y/d,p/d]:[f/d,y/d]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,n,s){const r=n-e,i=s-t;return Math.sqrt(r*r+i*i)}function l(e,t,n,s,r,i){const a=s-e,o=r-t,l=i-n;return Math.sqrt(a*a+o*o+l*l)}function c(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function u(e,t,n,s,r,i){return[e+.5*(s-e),t+.5*(r-t),n+.5*(i-n)]}n.d(t,{Q:()=>r})},76044:(e,t,n)=>{n.d(t,{LQ:()=>c,ag:()=>m,pL:()=>u});var s=n(85633),r=n(68517);const i=new r.A,a=new r.A,o=new r.A,l={esriGeometryPoint:s.DF,esriGeometryPolyline:s.BW,esriGeometryPolygon:s.z5,esriGeometryMultipoint:s.qK};function c(e,t,n,r=e.hasZ,i=e.hasM){if(null==t)return null;const a=e.hasZ&&r,l=e.hasM&&i;if(n){const c=(0,s.Nl)(o,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return(0,s.DF)(c,a,l)}return(0,s.DF)(t,a,l)}function u(e,t,n,r,c,u,m=t,h=n){const d=t&&m,f=n&&h,y=null!=r?"coords"in r?r:r.geometry:null;if(null==y)return null;if(c){let r=(0,s.kz)(a,y,t,n,e,c,m,h);return u&&(r=(0,s.Nl)(o,r,d,f,e,u)),l[e]?.(r,d,f)??null}if(u){const r=(0,s.Nl)(o,y,t,n,e,u,m,h);return l[e]?.(r,d,f)??null}return(0,s.Q4)(i,y,t,n,m,h),l[e]?.(i,d,f)??null}function m(e){return e&&h in e?JSON.parse(JSON.stringify(e,d)):e}const h="_geVersion",d=(e,t)=>e!==h?t:void 0},86041:(e,t,n)=>{n.d(t,{Cv:()=>p,Nk:()=>d,lK:()=>S});var s=n(16291),r=n(66011),i=n(69575),a=n(61933),o=n(85204),l=n(93548);const c=[0,0];function u(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,c),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,c),[n.xmax,n.ymax]=e(t.xmax,t.ymax,c),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:m(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:m(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function m(e,t){const n=[];for(const s of e)n.push(h(s,t));return n}function h(e,t){const n=[];for(const s of e){const e=t(s[0],s[1],[0,0]);n.push(e),s.length>2&&e.push(s[2]),s.length>3&&e.push(s[3])}return n}async function d(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(s.Ru):[e];await(0,i.initializeProjection)(n.map((e=>({source:e,dest:t}))))}const f=u.bind(null,l.je),y=u.bind(null,l.tD);function p(e,t,n,s){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,o.fn)(t)||!(0,o.fn)(n)||(0,o.aI)(t,n))return e;if((0,l.y7)(t,n)){const t=(0,o.K8)(n)?f(e):y(e);return t.spatialReference=n,t}return(0,i.projectMany)(a.g,[e],t,n,null,s)[0]}const T=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n,s){if(!e?.length||!t||!n||(0,o.aI)(t,n))return e;const i={geometries:e,inSpatialReference:t,outSpatialReference:n,geographicTransformation:s,resolve:(0,r.Tw)()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:s,resolve:r,geographicTransformation:c}=e;(0,l.y7)(n,s)?(0,o.K8)(s)?r(t.map(f)):r(t.map(y)):r((0,i.projectMany)(a.g,t,n,s,c,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function S(e,t,n,s){return T.push(e,t,n,s)}},45476:(e,t,n)=>{n.d(t,{GC:()=>d,T2:()=>f,v8:()=>h});var s=n(69453),r=n(57754),i=n(69575),a=n(13191),o=n(67593),l=n(16717),c=n(85204),u=n(86041);const m=new s.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({});async function d(e,t,n){const{outFields:s,orderByFields:r,groupByFieldsForStatistics:i,outStatistics:a}=e;if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(r)for(let e=0;e<r.length;e++)r[e]=r[e].trim();if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(a)for(let e=0;e<a.length;e++)a[e].onStatisticField&&(a[e].onStatisticField=a[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),f(e,t,n)}async function f(e,t,s){if(!e)return null;let{where:i}=e;if(e.where=i=i?.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(e.where=null),!e.geometry)return e;let d=await async function(e){const{distance:t,units:s}=e,i=e.geometry;if(null==t||"vertexAttributes"in i)return i;const a=i.spatialReference,o=s?m.fromJSON(s):(0,r.Ij)(a),l=a&&((0,c.EA)(a)||(0,c.K8)(a))?i:await(0,u.Nk)(a,c.KK).then((()=>(0,u.Cv)(i,c.KK)));return(await async function(){return(await Promise.all([n.e(7797),n.e(8599)]).then(n.bind(n,50980))).geodesicBuffer}())(l.spatialReference,l,t,o)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;d=(0,a.HA)(d),d.spatialReference=t}if(d){await(0,u.Nk)(d.spatialReference,s),d=function(e,t){const n=e.spatialReference;return y(e,t)&&(0,o.ZC)(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(d,s);const t=(await(0,l.el)((0,o.rS)(d)))[0];if(null==t)throw h;const n="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,r=n&&y(d,s)?{densificationStep:8*n}:void 0,i=t.toJSON(),a=(0,u.Cv)(i,i.spatialReference,s,r);if(!a)throw h;a.spatialReference=s,e.geometry=a}return e}function y(e,t){if(!e)return!1;const n=e.spatialReference;return((0,o.ZC)(e)||(0,o.Bi)(e)||(0,o.Rg)(e))&&!(0,c.aI)(n,t)&&!(0,i.canProjectWithoutEngine)(n,t)}},55304:(e,t,n)=>{n.d(t,{tC:()=>D,c0:()=>w,xt:()=>g});var s=n(51819),r=n(58521),i=n(20671);var a=n(67593),o=n(85204);function l(e,t){return e?t?4:3:t?3:2}function c(e,t,n,s,r,i){const a=l(r,i),{coords:o,lengths:c}=s;if(!c)return!1;for(let s=0,r=0;s<c.length;s++,r+=a)if(!u(e,t,n,o[r],o[r+1]))return!1;return!0}function u(e,t,n,s,r){if(!e)return!1;const i=l(t,n),{coords:a,lengths:o}=e;let c=!1,u=0;for(const e of o)c=m(c,a,i,u,e,s,r),u+=e*i;return c}function m(e,t,n,s,r,i,a){let o=e,l=s;for(let e=s,c=s+r*n;e<c;e+=n){l=e+n,l===c&&(l=s);const r=t[e],u=t[e+1],m=t[l],h=t[l+1];(u<a&&h>=a||h<a&&u>=a)&&r+(a-u)/(h-u)*(m-r)<i&&(o=!o)}return o}var h=n(85633),d=n(68517),f=n(76044),y=n(86041);const p="unsupported-query",T={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function g(e,t,s,o,l){if((0,a.Bi)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,h.Ye)(new d.A,t,!1,!1);return Promise.resolve((t=>function(e,t,n,s){return u(e,t,n,s.coords[0],s.coords[1])}(e,!1,!1,t)))}if((0,a.Bi)(t)&&"esriGeometryMultipoint"===s){const n=(0,h.Ye)(new d.A,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>c(n,!1,!1,e,o,l)))}if((0,a.ZC)(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.qz)(t,(0,f.pL)(s,o,l,e))));if((0,a.ZC)(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.rL)(t,(0,f.pL)(s,o,l,e))));if((0,a.ZC)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?i.xB:(0,i.xK)(e)}(s);return Promise.resolve((n=>e(t,(0,f.pL)(s,o,l,n))))}return Promise.all([n.e(7797),n.e(8599)]).then(n.bind(n,50980)).then((n=>{const r=n[T[e]].bind(null,t.spatialReference,t);return e=>r((0,f.pL)(s,o,l,e))}))}async function w(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!function(e){return null!=e&&!0===S.spatialRelationship[e]}(r))throw new s.A(p,"Unsupported query spatial relationship",{query:e});if((0,o.fn)(i.spatialReference)&&(0,o.fn)(n)){if(!function(e){return null!=e&&!0===S.queryGeometry[(0,a.$B)(e)]}(i))throw new s.A(p,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===S.layerGeometry[e]}(t))throw new s.A(p,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,y.Nk)(e.geometry?.spatialReference,e.outSR)}}}function D(e){if((0,a.ZC)(e))return!0;if((0,a.Bi)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},84525:(e,t,n)=>{async function s(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:s,endTimeField:r}=e;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(s&&r)await t.forEach((e=>{const t=n.getAttribute(e,s),o=n.getAttribute(e,r);null==t||isNaN(t)||(i=Math.min(i,t)),null==o||isNaN(o)||(a=Math.max(a,o))}));else{const e=s||r;await t.forEach((t=>{const s=n.getAttribute(t,e);null==s||isNaN(s)||(i=Math.min(i,s),a=Math.max(a,s))}))}return{start:i,end:a}}function r(e,t,n){if(!t||!e)return null;const{startTimeField:s,endTimeField:r}=e;if(!s&&!r)return null;const{start:i,end:a}=t;if(null===i&&null===a)return null;if(void 0===i&&void 0===a)return()=>!1;const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return s&&r?function(e,t,n,s,r){return null!=s&&null!=r?i=>{const a=e(i,t),o=e(i,n);return(null==a||a<=r)&&(null==o||o>=s)}:null!=s?t=>{const r=e(t,n);return null==r||r>=s}:null!=r?n=>{const s=e(n,t);return null==s||s<=r}:void 0}(o,s,r,i,a):function(e,t,n,s){return null!=n&&null!=s&&n===s?s=>e(s,t)===n:null!=n&&null!=s?r=>{const i=e(r,t);return null!=i&&i>=n&&i<=s}:null!=n?s=>{const r=e(s,t);return null!=r&&r>=n}:null!=s?n=>{const r=e(n,t);return null!=r&&r<=s}:void 0}(o,s||r,i,a)}n.d(t,{I:()=>r,W:()=>s})}}]);