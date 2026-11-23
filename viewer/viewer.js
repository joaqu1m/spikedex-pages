var ng=Object.defineProperty;var ig=(n,e)=>{for(var t in e)ng(n,t,{get:e[t],enumerable:!0})};var Rh="170";var sg=0,Gf=1,rg=2;var cp=1,og=2,fi=3,tn=0,Zt=1,on=2,Hi=0,tr=1,Vf=2,Wf=3,Xf=4,ag=5,fs=100,cg=101,lg=102,hg=103,ug=104,fg=200,dg=201,pg=202,mg=203,gl=204,_l=205,gg=206,_g=207,xg=208,yg=209,vg=210,Mg=211,bg=212,Sg=213,Ag=214,xl=0,yl=1,vl=2,rr=3,Ml=4,bl=5,Sl=6,Al=7,lp=0,wg=1,Tg=2,Gi=0,Eg=1,Rg=2,Cg=3,Ig=4,Pg=5,Lg=6,Dg=7,qf="attached",Ng="detached",hp=300,or=301,ar=302,wl=303,Tl=304,$a=306,ps=1e3,pi=1001,Qr=1002,jt=1003,Ch=1004;var Qs=1005;var Rt=1006,Zr=1007;var Yn=1008;var Bn=1009,up=1010,fp=1011,eo=1012,Ih=1013,ms=1014,Fn=1015,uo=1016,Ph=1017,Lh=1018,cr=1020,dp=35902,pp=1021,mp=1022,an=1023,gp=1024,_p=1025,nr=1026,lr=1027,Dh=1028,Nh=1029,xp=1030,Uh=1031;var Oh=1033,xa=33776,ya=33777,va=33778,Ma=33779,El=35840,Rl=35841,Cl=35842,Il=35843,Pl=36196,Ll=37492,Dl=37496,Nl=37808,Ul=37809,Ol=37810,Fl=37811,kl=37812,Bl=37813,zl=37814,Hl=37815,Gl=37816,Vl=37817,Wl=37818,Xl=37819,ql=37820,Yl=37821,ba=36492,Kl=36494,Zl=36495,yp=36283,jl=36284,Jl=36285,$l=36286;var hr=2300,ur=2301,Fc=2302,Yf=2400,Kf=2401,Zf=2402,Ug=2500;var vp=0,Qa=1,fo=2,Og=3200,Fg=3201;var Mp=0,kg=1,mn="",Ot="srgb",kt="srgb-linear",ec="linear",lt="srgb";var Xn=7680,tc=7681;var bp=517;var fr=519,Bg=512,zg=513,Hg=514,Sp=515,Gg=516,Vg=517,Wg=518,Xg=519,Ql=35044;var jf="300 es",mi=2e3,Sa=2001,Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jf=1234567,jr=Math.PI/180,dr=180/Math.PI;function kn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function Fh(n,e){return(n%e+e)%e}function qg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Yg(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function Kg(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function Zg(n,e=1){return e-Math.abs(Fh(n,e*2)-e)}function jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $g(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Qg(n,e){return n+Math.random()*(e-n)}function e_(n){return n*(.5-Math.random())}function t_(n){n!==void 0&&(Jf=n);let e=Jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function n_(n){return n*jr}function i_(n){return n*dr}function s_(n){return(n&n-1)===0&&n!==0}function r_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function o_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function a_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var po={DEG2RAD:jr,RAD2DEG:dr,generateUUID:kn,clamp:Kt,euclideanModulo:Fh,mapLinear:qg,inverseLerp:Yg,lerp:Jr,damp:Kg,pingpong:Zg,smoothstep:jg,smootherstep:Jg,randInt:$g,randFloat:Qg,randFloatSpread:e_,seededRandom:t_,degToRad:n_,radToDeg:i_,isPowerOfTwo:s_,ceilPowerOfTwo:r_,floorPowerOfTwo:o_,setQuaternionFromProperEuler:a_,normalize:ct,denormalize:On},De=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class n{constructor(e,t,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],d=s[6],M=s[1],y=s[4],x=s[7],w=s[2],S=s[5],A=s[8];return r[0]=o*_+a*M+c*w,r[3]=o*p+a*y+c*S,r[6]=o*d+a*x+c*A,r[1]=l*_+h*M+u*w,r[4]=l*p+h*y+u*S,r[7]=l*d+h*x+u*A,r[2]=f*_+m*M+g*w,r[5]=f*p+m*y+g*S,r[8]=f*d+m*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=t*u+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kc.makeScale(e,t)),this}rotate(e){return this.premultiply(kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(kc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kc=new We;function Ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c_(){let n=to("canvas");return n.style.display="block",n}var $f={};function Yr(n){n in $f||($f[n]=!0,console.warn(n))}function l_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function h_(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function u_(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:kt,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(n.r=gi(n.r),n.g=gi(n.g),n.b=gi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mn?ec:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qf=[.64,.33,.3,.6,.15,.06],ed=[.2126,.7152,.0722],td=[.3127,.329],nd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[kt]:{primaries:Qf,whitePoint:td,transfer:ec,toXYZ:nd,fromXYZ:id,luminanceCoefficients:ed,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:Qf,whitePoint:td,transfer:lt,toXYZ:nd,fromXYZ:id,luminanceCoefficients:ed,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}});var Us,eh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=to("canvas")),Us.width=e.width,Us.height=e.height;let i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gi(t[i]/255)*255):t[i]=gi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},f_=0,Aa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bc(s[o].image)):r.push(Bc(s[o]))}else r=Bc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Bc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?eh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var d_=0,Ft=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=pi,s=pi,r=Rt,o=Yn,a=an,c=Bn,l=n.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=kn(),this.name="",this.source=new Aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=hp;Ft.DEFAULT_ANISOTROPY=1;var tt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(m+1)/2,w=(d+1)/2,S=(h+f)/4,A=(u+_)/4,T=(g+p)/4;return y>x&&y>w?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=S/i,r=A/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=S/s,r=T/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=A/r,s=T/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},th=class extends Vi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new Ft(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Aa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends th{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wa=class extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nh=class extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==m||h!==g){let p=1-a,d=c*f+l*m+h*g+u*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let w=Math.sqrt(y),S=Math.atan2(w,d*M);p=Math.sin(p*S)/w,a=Math.sin(a*S)/w}let x=a*M;if(c=c*p+f*x,l=l*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-a){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*m-l*f,e[t+1]=c*g+h*f+l*u-a*m,e[t+2]=l*g+h*m+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u+f*m*g;break;case"YZX":this._x=f*h*u+l*m*g,this._y=l*m*u+f*h*g,this._z=l*h*g-f*m*u,this._w=l*h*u-f*m*g;break;case"XZY":this._x=f*h*u-l*m*g,this._y=l*m*u-f*h*g,this._z=l*h*g+f*m*u,this._w=l*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new z,sd=new zn,An=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),Vo.subVectors(this.max,Or),Os.subVectors(e.a,Or),Fs.subVectors(e.b,Or),ks.subVectors(e.c,Or),Di.subVectors(Fs,Os),Ni.subVectors(ks,Fs),rs.subVectors(Os,ks);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-rs.z,rs.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,rs.z,0,-rs.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-rs.y,rs.x,0];return!Hc(t,Os,Fs,ks,Vo)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Os,Fs,ks,Vo))?!1:(Wo.crossVectors(Di,Ni),t=[Wo.x,Wo.y,Wo.z],Hc(t,Os,Fs,ks,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new z,new z,new z,new z,new z,new z,new z,new z],Dn=new z,Go=new An,Os=new z,Fs=new z,ks=new z,Di=new z,Ni=new z,rs=new z,Or=new z,Vo=new z,Wo=new z,os=new z;function Hc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){os.fromArray(n,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),c=e.dot(os),l=t.dot(os),h=i.dot(os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var p_=new An,Fr=new z,Gc=new z,_n=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):p_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Gc)),this.expandByPoint(Fr.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new z,Vc=new z,Xo=new z,Ui=new z,Wc=new z,qo=new z,Xc=new z,pr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Ui.dot(this.direction),c=-Ui.dot(Xo),l=Ui.lengthSq(),h=Math.abs(1-o*o),u,f,m,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(Xo,f),m}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,s,r){Wc.subVectors(t,e),qo.subVectors(i,e),Xc.crossVectors(Wc,qo);let o=this.direction.dot(Xc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);let c=a*this.direction.dot(qo.crossVectors(Ui,qo));if(c<0)return null;let l=a*this.direction.dot(Wc.cross(Ui));if(l<0||c+l>o)return null;let h=-a*Ui.dot(Xc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fe=class n{constructor(e,t,i,s,r,o,a,c,l,h,u,f,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,f,m,g,_,p)}set(e,t,i,s,r,o,a,c,l,h,u,f,m,g,_,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,m=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,m=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m_,e,g_)}lookAt(e,t,i){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Oi.crossVectors(i,dn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Oi.crossVectors(i,dn)),Oi.normalize(),Yo.crossVectors(dn,Oi),s[0]=Oi.x,s[4]=Yo.x,s[8]=dn.x,s[1]=Oi.y,s[5]=Yo.y,s[9]=dn.y,s[2]=Oi.z,s[6]=Yo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],M=i[3],y=i[7],x=i[11],w=i[15],S=s[0],A=s[4],T=s[8],v=s[12],b=s[1],C=s[5],L=s[9],P=s[13],U=s[2],k=s[6],F=s[10],O=s[14],D=s[3],q=s[7],Z=s[11],re=s[15];return r[0]=o*S+a*b+c*U+l*D,r[4]=o*A+a*C+c*k+l*q,r[8]=o*T+a*L+c*F+l*Z,r[12]=o*v+a*P+c*O+l*re,r[1]=h*S+u*b+f*U+m*D,r[5]=h*A+u*C+f*k+m*q,r[9]=h*T+u*L+f*F+m*Z,r[13]=h*v+u*P+f*O+m*re,r[2]=g*S+_*b+p*U+d*D,r[6]=g*A+_*C+p*k+d*q,r[10]=g*T+_*L+p*F+d*Z,r[14]=g*v+_*P+p*O+d*re,r[3]=M*S+y*b+x*U+w*D,r[7]=M*A+y*C+x*k+w*q,r[11]=M*T+y*L+x*F+w*Z,r[15]=M*v+y*P+x*O+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*m-i*c*m)+_*(+t*c*m-t*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+t*l*u-t*a*m-r*o*u+i*o*m+r*a*h-i*l*h)+d*(-s*a*h-t*c*u+t*a*f+s*o*u-i*o*f+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],M=u*p*l-_*f*l+_*c*m-a*p*m-u*c*d+a*f*d,y=g*f*l-h*p*l-g*c*m+o*p*m+h*c*d-o*f*d,x=h*_*l-g*u*l+g*a*m-o*_*m-h*a*d+o*u*d,w=g*u*c-h*_*c-g*a*f+o*_*f+h*a*p-o*u*p,S=t*M+i*y+s*x+r*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return e[0]=M*A,e[1]=(_*f*r-u*p*r-_*s*m+i*p*m+u*s*d-i*f*d)*A,e[2]=(a*p*r-_*c*r+_*s*l-i*p*l-a*s*d+i*c*d)*A,e[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*m-i*c*m)*A,e[4]=y*A,e[5]=(h*p*r-g*f*r+g*s*m-t*p*m-h*s*d+t*f*d)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*d-t*c*d)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*m+t*c*m)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*i*m+t*_*m+h*i*d-t*u*d)*A,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*i*l+t*u*l+o*i*m-t*a*m)*A,e[12]=w*A,e[13]=(h*_*s-g*u*s+g*i*f-t*_*f-h*i*p+t*u*p)*A,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*i*c-t*u*c-o*i*f+t*a*f)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,M=c*l,y=c*h,x=c*u,w=i.x,S=i.y,A=i.z;return s[0]=(1-(_+d))*w,s[1]=(m+x)*w,s[2]=(g-y)*w,s[3]=0,s[4]=(m-x)*S,s[5]=(1-(f+d))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(g+y)*A,s[9]=(p-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),a=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);let l=1/r,h=1/o,u=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=mi){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),m,g;if(a===mi)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Sa)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=mi){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*l,m=(i+s)*h,g,_;if(a===mi)g=(o+r)*u,_=-2*u;else if(a===Sa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Bs=new z,Nn=new Fe,m_=new z(0,0,0),g_=new z(1,1,1),Oi=new z,Yo=new z,dn=new z,rd=new Fe,od=new zn,Kn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},__=0,ad=new z,zs=new zn,ci=new Fe,Ko=new z,kr=new z,x_=new z,y_=new zn,cd=new z(1,0,0),ld=new z(0,1,0),hd=new z(0,0,1),ud={type:"added"},v_={type:"removed"},Hs={type:"childadded",child:null},qc={type:"childremoved",child:null},bt=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new Kn,i=new zn,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new We}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(cd,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(hd,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cd,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ko.copy(e):Ko.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(kr,Ko,this.up):ci.lookAt(Ko,kr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(ci),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v_),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,x_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,y_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};bt.DEFAULT_UP=new z(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new z,li=new z,Yc=new z,hi=new z,Gs=new z,Vs=new z,fd=new z,Kc=new z,Zc=new z,jc=new z,Jc=new tt,$c=new tt,Qc=new tt,Bi=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),li.subVectors(i,t),Yc.subVectors(e,t);let o=Un.dot(Un),a=Un.dot(li),c=Un.dot(Yc),l=li.dot(li),h=li.dot(Yc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(o,hi.y),c.addScaledVector(a,hi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Jc.setScalar(0),$c.setScalar(0),Qc.setScalar(0),Jc.fromBufferAttribute(e,t),$c.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector($c,r.y),o.addScaledVector(Qc,r.z),o}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),li.subVectors(e,t),Un.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,i),Vs.subVectors(r,i),Kc.subVectors(e,i);let c=Gs.dot(Kc),l=Vs.dot(Kc);if(c<=0&&l<=0)return t.copy(i);Zc.subVectors(e,s);let h=Gs.dot(Zc),u=Vs.dot(Zc);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(Gs,o);jc.subVectors(e,r);let m=Gs.dot(jc),g=Vs.dot(jc);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Vs,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return fd.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(fd,a);let d=1/(p+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(Gs,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Fh(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=el(o,r,e+1/3),this.g=el(o,r,e),this.b=el(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ze.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Kt(Yt.r*255,0,255))*65536+Math.round(Kt(Yt.g*255,0,255))*256+Math.round(Kt(Yt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ot){Ze.fromWorkingColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Zo);let i=Jr(Fi.h,Zo.h,t),s=Jr(Fi.s,Zo.s,t),r=Jr(Fi.l,Zo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ne;Ne.NAMES=wp;var M_=0,cn=class extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=kn(),this.name="",this.blending=tr,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gl&&(i.blendSrc=this.blendSrc),this.blendDst!==_l&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fr&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Zn=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new z,jo=new De,ht=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}};var Ea=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ra=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var en=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i)}},b_=0,Sn=new Fe,tl=new bt,Ws=new z,pn=new An,Br=new An,Ut=new z,Ht=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?Ra:Ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{for(let i=0,s=t.count;i<s;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(pn.min,Br.min),pn.expandByPoint(Ut),Ut.addVectors(pn.max,Br.max),pn.expandByPoint(Ut)):(pn.expandByPoint(Br.min),pn.expandByPoint(Br.max))}pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ut.fromBufferAttribute(a,l),c&&(Ws.fromBufferAttribute(e,l),Ut.add(Ws)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new z,c[T]=new z;let l=new z,h=new z,u=new z,f=new De,m=new De,g=new De,_=new z,p=new z;function d(T,v,b){l.fromBufferAttribute(i,T),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,b),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),m.sub(f),g.sub(f);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[T].add(_),a[v].add(_),a[b].add(_),c[T].add(p),c[v].add(p),c[b].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,v=M.length;T<v;++T){let b=M[T],C=b.start,L=b.count;for(let P=C,U=C+L;P<U;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new z,x=new z,w=new z,S=new z;function A(T){w.fromBufferAttribute(s,T),S.copy(w);let v=a[T];y.copy(v),y.sub(w.multiplyScalar(w.dot(v))).normalize(),x.crossVectors(S,v);let C=x.dot(c[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,C)}for(let T=0,v=M.length;T<v;++T){let b=M[T],C=b.start,L=b.count;for(let P=C,U=C+L;P<U;P+=3)A(e.getX(P+0)),A(e.getX(P+1)),A(e.getX(P+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[m++]}return new ht(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dd=new Fe,as=new pr,Jo=new _n,pd=new z,$o=new z,Qo=new z,ea=new z,nl=new z,ta=new z,md=new z,na=new z,Mt=class extends bt{constructor(e=new Ht,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(nl.fromBufferAttribute(u,e),o?ta.addScaledVector(nl,h):ta.addScaledVector(nl.sub(t),h))}t.add(ta)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Jo.containsPoint(as.origin)===!1&&(as.intersectSphere(Jo,pd)===null||as.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(dd.copy(r).invert(),as.copy(e.ray).applyMatrix4(dd),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,w=y;x<w;x+=3){let S=a.getX(x),A=a.getX(x+1),T=a.getX(x+2);s=ia(this,d,e,i,l,h,u,S,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let M=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);s=ia(this,o,e,i,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],d=o[p.materialIndex],M=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=M,w=y;x<w;x+=3){let S=x,A=x+1,T=x+2;s=ia(this,d,e,i,l,h,u,S,A,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){let M=p,y=p+1,x=p+2;s=ia(this,o,e,i,l,h,u,M,y,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function S_(n,e,t,i,s,r,o,a){let c;if(e.side===Zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===tn,a),c===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(na);return l<t.near||l>t.far?null:{distance:l,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,$o),n.getVertexPosition(c,Qo),n.getVertexPosition(l,ea);let h=S_(n,e,t,i,$o,Qo,ea,md);if(h){let u=new z;Bi.getBarycoord(md,$o,Qo,ea,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,c,l,u,new De)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,c,l,u,new De)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new z,materialIndex:0};Bi.getNormal($o,Qo,ea,f.normal),h.face=f,h.barycoord=u}return h}var no=class n extends Ht{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(h,3)),this.setAttribute("uv",new en(u,2));function g(_,p,d,M,y,x,w,S,A,T,v){let b=x/A,C=w/T,L=x/2,P=w/2,U=S/2,k=A+1,F=T+1,O=0,D=0,q=new z;for(let Z=0;Z<F;Z++){let re=Z*C-P;for(let me=0;me<k;me++){let ve=me*b-L;q[_]=ve*M,q[p]=re*y,q[d]=U,l.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[d]=S>0?1:-1,h.push(q.x,q.y,q.z),u.push(me/A),u.push(1-Z/T),O+=1}}for(let Z=0;Z<T;Z++)for(let re=0;re<A;re++){let me=f+re+k*Z,ve=f+re+k*(Z+1),J=f+(re+1)+k*(Z+1),se=f+(re+1)+k*Z;c.push(me,ve,se),c.push(ve,J,se),D+=6}a.addGroup(m,D,v),m+=D,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=mr(n[t]);for(let s in i)e[s]=i[s]}return e}function A_(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var w_={clone:mr,merge:Qt},T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ca=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ki=new z,gd=new De,_d=new De,Et=class extends Ca{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,gd,_d),t.subVectors(_d,gd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xs=-90,qs=1,ih=class extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Et(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new Et(Xs,qs,e,t);r.layers=this.layers,this.add(r);let o=new Et(Xs,qs,e,t);o.layers=this.layers,this.add(o);let a=new Et(Xs,qs,e,t);a.layers=this.layers,this.add(a);let c=new Et(Xs,qs,e,t);c.layers=this.layers,this.add(c);let l=new Et(Xs,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ia=class extends Ft{constructor(e,t,i,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sh=class extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new no(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Hi});r.uniforms.tEquirect.value=t;let o=new Mt(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Rt),new ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},il=new z,R_=new z,C_=new We,di=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=il.subVectors(i,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(il),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||C_.getNormalMatrix(e),s=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new _n,sa=new z,io=class{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,o=new di){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=mi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],M=s[13],y=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,p-m,x-d).normalize(),i[1].setComponents(c+r,f+l,p+m,x+d).normalize(),i[2].setComponents(c+o,f+h,p+g,x+M).normalize(),i[3].setComponents(c-o,f-h,p-g,x-M).normalize(),i[4].setComponents(c-a,f-u,p-_,x-y).normalize(),t===mi)i[5].setComponents(c+a,f+u,p+_,x+y).normalize();else if(t===Sa)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(sa.x=s.normal.x>0?e.max.x:e.min.x,sa.y=s.normal.y>0?e.max.y:e.min.y,sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ep(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function I_(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){let g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pa=class n extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){let M=d*f-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-M,0),_.push(0,0,1),p.push(y/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let y=M+l*d,x=M+l*(d+1),w=M+1+l*(d+1),S=M+1+l*d;m.push(y,x,S),m.push(x,w,S)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},P_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:P_,alphahash_pars_fragment:L_,alphamap_fragment:D_,alphamap_pars_fragment:N_,alphatest_fragment:U_,alphatest_pars_fragment:O_,aomap_fragment:F_,aomap_pars_fragment:k_,batching_pars_vertex:B_,batching_vertex:z_,begin_vertex:H_,beginnormal_vertex:G_,bsdfs:V_,iridescence_fragment:W_,bumpmap_pars_fragment:X_,clipping_planes_fragment:q_,clipping_planes_pars_fragment:Y_,clipping_planes_pars_vertex:K_,clipping_planes_vertex:Z_,color_fragment:j_,color_pars_fragment:J_,color_pars_vertex:$_,color_vertex:Q_,common:e1,cube_uv_reflection_fragment:t1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:a1,colorspace_pars_fragment:c1,envmap_fragment:l1,envmap_common_pars_fragment:h1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:S1,envmap_vertex:d1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:_1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:y1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:M1,lights_pars_begin:b1,lights_toon_fragment:A1,lights_toon_pars_fragment:w1,lights_phong_fragment:T1,lights_phong_pars_fragment:E1,lights_physical_fragment:R1,lights_physical_pars_fragment:C1,lights_fragment_begin:I1,lights_fragment_maps:P1,lights_fragment_end:L1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:O1,map_fragment:F1,map_pars_fragment:k1,map_particle_fragment:B1,map_particle_pars_fragment:z1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:V1,morphcolor_vertex:W1,morphnormal_vertex:X1,morphtarget_pars_vertex:q1,morphtarget_vertex:Y1,normal_fragment_begin:K1,normal_fragment_maps:Z1,normal_pars_fragment:j1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:cx,dithering_pars_fragment:lx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:xx,skinnormal_vertex:yx,specularmap_fragment:vx,specularmap_pars_fragment:Mx,tonemapping_fragment:bx,tonemapping_pars_fragment:Sx,transmission_fragment:Ax,transmission_pars_fragment:wx,uv_pars_fragment:Tx,uv_pars_vertex:Ex,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Ux,depth_vert:Ox,depth_frag:Fx,distanceRGBA_vert:kx,distanceRGBA_frag:Bx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Gx,linedashed_frag:Vx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:Kx,meshmatcap_frag:Zx,meshnormal_vert:jx,meshnormal_frag:Jx,meshphong_vert:$x,meshphong_frag:Qx,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:sy,points_frag:ry,shadow_vert:oy,shadow_frag:ay,sprite_vert:cy,sprite_frag:ly},ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qn={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};qn.physical={uniforms:Qt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ra={r:0,b:0,g:0},ls=new Kn,hy=new Fe;function uy(n,e,t,i,s,r,o){let a=new Ne(0),c=r===!0?0:1,l,h,u=null,f=0,m=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1,x=g(M);x===null?d(a,c):x&&x.isColor&&(d(x,1),y=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===$a)?(h===void 0&&(h=new Mt(new no(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:mr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ls.copy(y.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(ls)),h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,(u!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Mt(new Pa(2,2),new Gt({name:"BackgroundMaterial",uniforms:mr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,y){M.getRGB(ra,Tp(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:_,addToRenderList:p}}function fy(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(b,C,L,P,U){let k=!1,F=u(P,L,C);r!==F&&(r=F,l(r.object)),k=m(b,P,L,U),k&&g(b,P,L,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(b,C,L,P),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,C,L){let P=L.wireframe===!0,U=i[b.id];U===void 0&&(U={},i[b.id]=U);let k=U[C.id];k===void 0&&(k={},U[C.id]=k);let F=k[P];return F===void 0&&(F=f(c()),k[P]=F),F}function f(b){let C=[],L=[],P=[];for(let U=0;U<t;U++)C[U]=0,L[U]=0,P[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:L,attributeDivisors:P,object:b,attributes:{},index:null}}function m(b,C,L,P){let U=r.attributes,k=C.attributes,F=0,O=L.getAttributes();for(let D in O)if(O[D].location>=0){let Z=U[D],re=k[D];if(re===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;F++}return r.attributesNum!==F||r.index!==P}function g(b,C,L,P){let U={},k=C.attributes,F=0,O=L.getAttributes();for(let D in O)if(O[D].location>=0){let Z=k[D];Z===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor));let re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),U[D]=re,F++}r.attributes=U,r.attributesNum=F,r.index=P}function _(){let b=r.newAttributes;for(let C=0,L=b.length;C<L;C++)b[C]=0}function p(b){d(b,0)}function d(b,C){let L=r.newAttributes,P=r.enabledAttributes,U=r.attributeDivisors;L[b]=1,P[b]===0&&(n.enableVertexAttribArray(b),P[b]=1),U[b]!==C&&(n.vertexAttribDivisor(b,C),U[b]=C)}function M(){let b=r.newAttributes,C=r.enabledAttributes;for(let L=0,P=C.length;L<P;L++)C[L]!==b[L]&&(n.disableVertexAttribArray(L),C[L]=0)}function y(b,C,L,P,U,k,F){F===!0?n.vertexAttribIPointer(b,C,L,U,k):n.vertexAttribPointer(b,C,L,P,U,k)}function x(b,C,L,P){_();let U=P.attributes,k=L.getAttributes(),F=C.defaultAttributeValues;for(let O in k){let D=k[O];if(D.location>=0){let q=U[O];if(q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){let Z=q.normalized,re=q.itemSize,me=e.get(q);if(me===void 0)continue;let ve=me.buffer,J=me.type,se=me.bytesPerElement,le=J===n.INT||J===n.UNSIGNED_INT||q.gpuType===Ih;if(q.isInterleavedBufferAttribute){let he=q.data,Ie=he.stride,Le=q.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<D.locationSize;ke++)d(D.location+ke,he.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<D.locationSize;ke++)p(D.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let ke=0;ke<D.locationSize;ke++)y(D.location+ke,re/D.locationSize,J,Z,Ie*se,(Le+re/D.locationSize*ke)*se,le)}else{if(q.isInstancedBufferAttribute){for(let he=0;he<D.locationSize;he++)d(D.location+he,q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<D.locationSize;he++)p(D.location+he);n.bindBuffer(n.ARRAY_BUFFER,ve);for(let he=0;he<D.locationSize;he++)y(D.location+he,re/D.locationSize,J,Z,re*se,re/D.locationSize*he*se,le)}}else if(F!==void 0){let Z=F[O];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(D.location,Z);break;case 3:n.vertexAttrib3fv(D.location,Z);break;case 4:n.vertexAttrib4fv(D.location,Z);break;default:n.vertexAttrib1fv(D.location,Z)}}}}M()}function w(){T();for(let b in i){let C=i[b];for(let L in C){let P=C[L];for(let U in P)h(P[U].object),delete P[U];delete C[L]}delete i[b]}}function S(b){if(i[b.id]===void 0)return;let C=i[b.id];for(let L in C){let P=C[L];for(let U in P)h(P[U].object),delete P[U];delete C[L]}delete i[b.id]}function A(b){for(let C in i){let L=i[C];if(L[b.id]===void 0)continue;let P=L[b.id];for(let U in P)h(P[U].object),delete P[U];delete L[b.id]}}function T(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function dy(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function c(l,h,u,f){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function py(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==an&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let T=A===uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!T)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,S=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:S}}function my(n){let e=this,t=null,i=0,s=!1,r=!1,o=new di,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||i!==0||s;return s=f,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:i,y=M*4,x=d.clippingState||null;c.value=x,x=h(g,f,y,m);for(let w=0;w!==y;++w)x[w]=t[w];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let d=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,x=m;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function gy(n){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=or:a===Tl&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===Tl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new sh(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var gr=class extends Ca{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},er=4,xd=[.125,.215,.35,.446,.526,.582],ds=20,sl=new gr,yd=new Ne,rl=null,ol=0,al=0,cl=!1,us=(1+Math.sqrt(5))/2,Ys=1/us,vd=[new z(-us,Ys,0),new z(us,Ys,0),new z(-Ys,0,us),new z(Ys,0,us),new z(0,us,-Ys),new z(0,us,Ys),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],La=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,ol,al),this._renderer.xr.enabled=cl,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:uo,format:an,colorSpace:kt,depthBuffer:!1},s=Md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_y(r)),this._blurMaterial=xy(r,e,t)}return s}_compileMaterial(e){let t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,i,s){let a=new Et(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yd),h.toneMapping=Gi,h.autoClear=!1;let m=new Zn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Mt(new no,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(yd),_=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let y=this._cubeSize;oa(s,M*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,sl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vd[(s-r-1)%vd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Mt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ds-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):ds;p>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);let d=[],M=0;for(let A=0;A<ds;++A){let T=A/_,v=Math.exp(-T*T/2);d.push(v),A===0?M+=v:A<p&&(M+=2*v)}for(let A=0;A<d.length;A++)d[A]=d[A]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let x=this._sizeLods[s],w=3*x*(s>y-er?s-y+er:0),S=4*(this._cubeSize-x);oa(t,w,S,3*x,2*x),c.setRenderTarget(t),c.render(u,sl)}};function _y(n){let e=[],t=[],i=[],s=n,r=n-er+1+xd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>n-er?c=xd[o-n+er-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,M=new Float32Array(_*g*m),y=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let S=0;S<m;S++){let A=S%3*2/3-1,T=S>2?0:-1,v=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];M.set(v,_*g*S),y.set(f,p*g*S);let b=[S,S,S,S,S,S];x.set(b,d*g*S)}let w=new Ht;w.setAttribute("position",new ht(M,_)),w.setAttribute("uv",new ht(y,p)),w.setAttribute("faceIndex",new ht(x,d)),e.push(w),s>er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Md(n,e,t){let i=new _i(n,e,t);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function xy(n,e,t){let i=new Float32Array(ds),s=new z(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function bd(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Sd(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===wl||c===Tl,h=c===or||c===ar;if(l||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new La(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new La(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Yr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function My(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)e.update(f[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],n.ARRAY_BUFFER)}}function l(u){let f=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let M=m.array;_=m.version;for(let y=0,x=M.length;y<x;y+=3){let w=M[y+0],S=M[y+1],A=M[y+2];f.push(w,S,S,A,A,w)}}else if(g!==void 0){let M=g.array;_=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let w=y+0,S=y+1,A=y+2;f.push(w,S,S,A,A,w)}}else return;let p=new(Ap(f)?Ra:Ea)(f,1);p.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function by(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){n.drawElements(i,m,r,f*o),t.update(m,i,1)}function l(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),t.update(m,i,g))}function h(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,i,1)}function u(f,m,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=m[M]*_[M];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sy(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ay(n,e,t){let i=new WeakMap,s=new tt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let v=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*w*4*u),A=new wa(S,x,w,u);A.type=Fn,A.needsUpdate=!0;let T=y*4;for(let b=0;b<u;b++){let C=p[b],L=d[b],P=M[b],U=x*w*4*b;for(let k=0;k<C.count;k++){let F=k*T;m===!0&&(s.fromBufferAttribute(C,k),S[U+F+0]=s.x,S[U+F+1]=s.y,S[U+F+2]=s.z,S[U+F+3]=0),g===!0&&(s.fromBufferAttribute(L,k),S[U+F+4]=s.x,S[U+F+5]=s.y,S[U+F+6]=s.z,S[U+F+7]=0),_===!0&&(s.fromBufferAttribute(P,k),S[U+F+8]=s.x,S[U+F+9]=s.y,S[U+F+10]=s.z,S[U+F+11]=P.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new De(x,w)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function wy(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Da=class extends Ft{constructor(e,t,i,s,r,o,a,c,l,h=nr){if(h!==nr&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===nr&&(i=ms),i===void 0&&h===lr&&(i=cr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=c!==void 0?c:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rp=new Ft,Ad=new Da(1,1),Cp=new wa,Ip=new nh,Pp=new Ia,wd=[],Td=[],Ed=new Float32Array(16),Rd=new Float32Array(9),Cd=new Float32Array(4);function Mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nc(n,e){let t=Td[e];t===void 0&&(t=new Int32Array(e),Td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ty(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ey(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function Cy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function Iy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;Cd.set(i),n.uniformMatrix2fv(this.addr,!1,Cd),It(t,i)}}function Py(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;Rd.set(i),n.uniformMatrix3fv(this.addr,!1,Rd),It(t,i)}}function Ly(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Ct(t,i))return;Ed.set(i),n.uniformMatrix4fv(this.addr,!1,Ed),It(t,i)}}function Dy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Uy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function Oy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function Fy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ky(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function By(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function zy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Hy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ad.compareFunction=Sp,r=Ad):r=Rp,t.setTexture2D(e||r,s)}function Gy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ip,s)}function Vy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function Wy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Cp,s)}function Xy(n){switch(n){case 5126:return Ty;case 35664:return Ey;case 35665:return Ry;case 35666:return Cy;case 35674:return Iy;case 35675:return Py;case 35676:return Ly;case 5124:case 35670:return Dy;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return ky;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(n,e){n.uniform1fv(this.addr,e)}function Yy(n,e){let t=Mr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ky(n,e){let t=Mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Zy(n,e){let t=Mr(e,this.size,4);n.uniform4fv(this.addr,t)}function jy(n,e){let t=Mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jy(n,e){let t=Mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $y(n,e){let t=Mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Qy(n,e){n.uniform1iv(this.addr,e)}function ev(n,e){n.uniform2iv(this.addr,e)}function tv(n,e){n.uniform3iv(this.addr,e)}function nv(n,e){n.uniform4iv(this.addr,e)}function iv(n,e){n.uniform1uiv(this.addr,e)}function sv(n,e){n.uniform2uiv(this.addr,e)}function rv(n,e){n.uniform3uiv(this.addr,e)}function ov(n,e){n.uniform4uiv(this.addr,e)}function av(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rp,r[o])}function cv(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ip,r[o])}function lv(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function hv(n,e,t){let i=this.cache,s=e.length,r=nc(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cp,r[o])}function uv(n){switch(n){case 5126:return qy;case 35664:return Yy;case 35665:return Ky;case 35666:return Zy;case 35674:return jy;case 35675:return Jy;case 35676:return $y;case 5124:case 35670:return Qy;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return hv}}var rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Xy(t.type)}},oh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uv(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},ll=/(\w+)(\])?(\[|\.)?/g;function Id(n,e){n.seq.push(e),n.map[e.id]=e}function fv(n,e,t){let i=n.name,s=i.length;for(ll.lastIndex=0;;){let r=ll.exec(i),o=ll.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Id(t,l===void 0?new rh(a,n,e):new oh(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new ah(a),Id(t,u)),t=u}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Pd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dv=37297,pv=0;function mv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Ld=new We;function gv(n){Ze._getMatrix(Ld,Ze.workingColorSpace,n);let e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case ec:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mv(n.getShaderSource(e),o)}else return s}function _v(n,e){let t=gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xv(n,e){let t;switch(e){case Eg:t="Linear";break;case Rg:t="Reinhard";break;case Cg:t="Cineon";break;case Ig:t="ACESFilmic";break;case Lg:t="AgX";break;case Dg:t="Neutral";break;case Pg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var aa=new z;function yv(){Ze.getLuminanceCoefficients(aa);let n=aa.x.toFixed(4),e=aa.y.toFixed(4),t=aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Mv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Kr(n){return n!==""}function Nd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(n){return n.replace(Sv,wv)}var Av=new Map;function wv(n,e){let t=Xe[e];if(t===void 0){let i=Av.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}var Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Od(n){return n.replace(Tv,Ev)}function Ev(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===og?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Pv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case wg:e="ENVMAP_BLENDING_MIX";break;case Tg:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Dv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Rv(t),l=Cv(t),h=Iv(t),u=Pv(t),f=Lv(t),m=vv(t),g=Mv(r),_=s.createProgram(),p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),d.length>0&&(d+=`
`)):(p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),d=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Gi?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,_v("linearToOutputTexel",t.outputColorSpace),yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=ch(o),o=Nd(o,t),o=Ud(o,t),a=ch(a),a=Nd(a,t),a=Ud(a,t),o=Od(o),a=Od(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=M+p+o,x=M+d+a,w=Pd(s,s.VERTEX_SHADER,y),S=Pd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(_).trim(),P=s.getShaderInfoLog(w).trim(),U=s.getShaderInfoLog(S).trim(),k=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,S);else{let O=Dd(s,w,"vertex"),D=Dd(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+O+`
`+D)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||U==="")&&(F=!1);F&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:d}})}s.deleteShader(w),s.deleteShader(S),T=new sr(s,_),v=bv(s,_)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,dv)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}var Nv=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new hh(e),t.set(e,i)),i}},hh=class{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}};function Uv(n,e,t,i,s,r,o){let a=new Ta,c=new lh,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,C,L,P){let U=L.fog,k=P.geometry,F=v.isMeshStandardMaterial?L.environment:null,O=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),D=O&&O.mapping===$a?O.image.height:null,q=g[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,re=Z!==void 0?Z.length:0,me=0;k.morphAttributes.position!==void 0&&(me=1),k.morphAttributes.normal!==void 0&&(me=2),k.morphAttributes.color!==void 0&&(me=3);let ve,J,se,le;if(q){let at=qn[q];ve=at.vertexShader,J=at.fragmentShader}else ve=v.vertexShader,J=v.fragmentShader,c.update(v),se=c.getVertexShaderID(v),le=c.getFragmentShaderID(v);let he=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,ke=P.isBatchedMesh===!0,dt=!!v.map,Je=!!v.matcap,yt=!!O,X=!!v.aoMap,Nt=!!v.lightMap,He=!!v.bumpMap,Ke=!!v.normalMap,we=!!v.displacementMap,it=!!v.emissiveMap,Ae=!!v.metalnessMap,I=!!v.roughnessMap,E=v.anisotropy>0,Y=v.clearcoat>0,N=v.dispersion>0,W=v.iridescence>0,H=v.sheen>0,ee=v.transmission>0,Q=E&&!!v.anisotropyMap,ie=Y&&!!v.clearcoatMap,fe=Y&&!!v.clearcoatNormalMap,te=Y&&!!v.clearcoatRoughnessMap,oe=W&&!!v.iridescenceMap,de=W&&!!v.iridescenceThicknessMap,ye=H&&!!v.sheenColorMap,ce=H&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,Pe=!!v.specularColorMap,Qe=!!v.specularIntensityMap,B=ee&&!!v.transmissionMap,pe=ee&&!!v.thicknessMap,$=!!v.gradientMap,ne=!!v.alphaMap,xe=v.alphaTest>0,ge=!!v.alphaHash,Ge=!!v.extensions,St=Gi;v.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(St=n.toneMapping);let Xt={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:ve,fragmentShader:J,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:ke,batchingColor:ke&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:kt,alphaToCoverage:!!v.alphaToCoverage,map:dt,matcap:Je,envMap:yt,envMapMode:yt&&O.mapping,envMapCubeUVHeight:D,aoMap:X,lightMap:Nt,bumpMap:He,normalMap:Ke,displacementMap:f&&we,emissiveMap:it,normalMapObjectSpace:Ke&&v.normalMapType===kg,normalMapTangentSpace:Ke&&v.normalMapType===Mp,metalnessMap:Ae,roughnessMap:I,anisotropy:E,anisotropyMap:Q,clearcoat:Y,clearcoatMap:ie,clearcoatNormalMap:fe,clearcoatRoughnessMap:te,dispersion:N,iridescence:W,iridescenceMap:oe,iridescenceThicknessMap:de,sheen:H,sheenColorMap:ye,sheenRoughnessMap:ce,specularMap:Ce,specularColorMap:Pe,specularIntensityMap:Qe,transmission:ee,transmissionMap:B,thicknessMap:pe,gradientMap:$,opaque:v.transparent===!1&&v.blending===tr&&v.alphaToCoverage===!1,alphaMap:ne,alphaTest:xe,alphaHash:ge,combine:v.combine,mapUv:dt&&_(v.map.channel),aoMapUv:X&&_(v.aoMap.channel),lightMapUv:Nt&&_(v.lightMap.channel),bumpMapUv:He&&_(v.bumpMap.channel),normalMapUv:Ke&&_(v.normalMap.channel),displacementMapUv:we&&_(v.displacementMap.channel),emissiveMapUv:it&&_(v.emissiveMap.channel),metalnessMapUv:Ae&&_(v.metalnessMap.channel),roughnessMapUv:I&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:ie&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ce&&_(v.sheenRoughnessMap.channel),specularMapUv:Ce&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Qe&&_(v.specularIntensityMap.channel),transmissionMapUv:B&&_(v.transmissionMap.channel),thicknessMapUv:pe&&_(v.thicknessMap.channel),alphaMapUv:ne&&_(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ke||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!k.attributes.uv&&(dt||ne),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:P.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:me,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:dt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:it&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===on,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function d(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)b.push(C),b.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(M(b,v),y(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function y(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let b=g[v.type],C;if(b){let L=qn[b];C=w_.clone(L.uniforms)}else C=v.uniforms;return C}function w(v,b){let C;for(let L=0,P=h.length;L<P;L++){let U=h[L];if(U.cacheKey===b){C=U,++C.usedTimes;break}}return C===void 0&&(C=new Dv(n,b,v,r),h.push(C)),C}function S(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function A(v){c.remove(v)}function T(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:T}}function Ov(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,m,g,_,p){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function a(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,f,m,g,_,p){let d=o(u,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||Fv),i.length>1&&i.sort(f||kd),s.length>1&&s.sort(f||kd)}function h(){for(let u=e,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function kv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Bd,n.set(i,[o])):s>=r.length?(o=new Bd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function zv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Hv=0;function Gv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vv(n){let e=new Bv,t=zv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);let s=new z,r=new Fe,o=new Fe;function a(l){let h=0,u=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,M=0,y=0,x=0,w=0,S=0,A=0;l.sort(Gv);for(let v=0,b=l.length;v<b;v++){let C=l[v],L=C.color,P=C.intensity,U=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=L.r*P,u+=L.g*P,f+=L.b*P;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],P);A++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,D=t.get(C);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=F,m++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(L).multiplyScalar(P),F.distance=U,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;let O=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,O.updateMatrices(C),C.castShadow&&S++),i.spotLightMatrix[_]=O.matrix,C.castShadow){let D=t.get(C);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=k,x++}_++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(L).multiplyScalar(P),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=F,p++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let O=C.shadow,D=t.get(C);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=F,g++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(P),F.groundColor.copy(C.groundColor).multiplyScalar(P),i.hemi[d]=F,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let T=i.hash;(T.directionalLength!==m||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==p||T.hemiLength!==d||T.numDirectionalShadows!==M||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==w||T.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+w-S,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,T.directionalLength=m,T.pointLength=g,T.spotLength=_,T.rectAreaLength=p,T.hemiLength=d,T.numDirectionalShadows=M,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=w,T.numLightProbes=A,i.version=Hv++)}function c(l,h){let u=0,f=0,m=0,g=0,_=0,p=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){let y=l[d];if(y.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(y.isSpotLight){let x=i.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:i}}function zd(n){let e=new Vv(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zd(n),e.set(s,[a])):r>=o.length?(a=new zd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var uh=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fh=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yv(n,e,t){let i=new io,s=new De,r=new De,o=new tt,a=new uh({depthPacking:Fg}),c=new fh,l={},h=t.maxTextureSize,u={[tn]:Zt,[Zt]:tn,[on]:on},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Mt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let d=this.type;this.render=function(S,A,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;let v=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Hi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=d!==fi&&this.type===fi,U=d===fi&&this.type!==fi;for(let k=0,F=S.length;k<F;k++){let O=S[k],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let q=D.getFrameExtents();if(s.multiply(q),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/q.x),s.x=r.x*q.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/q.y),s.y=r.y*q.y,D.mapSize.y=r.y)),D.map===null||P===!0||U===!0){let re=this.type!==fi?{minFilter:jt,magFilter:jt}:{};D.map!==null&&D.map.dispose(),D.map=new _i(s.x,s.y,re),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();let Z=D.getViewportCount();for(let re=0;re<Z;re++){let me=D.getViewport(re);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),L.viewport(o),D.updateMatrices(O,re),i=D.getFrustum(),x(A,T,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===fi&&M(D,T),D.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(v,b,C)};function M(S,A){let T=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _i(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,T,f,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,T,m,_,null)}function y(S,A,T,v){let b=null,C=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)b=C;else if(b=T.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=b.uuid,P=A.uuid,U=l[L];U===void 0&&(U={},l[L]=U);let k=U[P];k===void 0&&(k=b.clone(),U[P]=k,A.addEventListener("dispose",w)),b=k}if(b.visible=A.visible,b.wireframe=A.wireframe,v===fi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let L=n.properties.get(b);L.light=T}return b}function x(S,A,T,v,b){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===fi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let P=e.update(S),U=S.material;if(Array.isArray(U)){let k=P.groups;for(let F=0,O=k.length;F<O;F++){let D=k[F],q=U[D.materialIndex];if(q&&q.visible){let Z=y(S,q,v,b);S.onBeforeShadow(n,S,A,T,P,Z,D),n.renderBufferDirect(T,null,P,Z,S,D),S.onAfterShadow(n,S,A,T,P,Z,D)}}}else if(U.visible){let k=y(S,U,v,b);S.onBeforeShadow(n,S,A,T,P,k,null),n.renderBufferDirect(T,null,P,k,S,null),S.onAfterShadow(n,S,A,T,P,k,null)}}let L=S.children;for(let P=0,U=L.length;P<U;P++)x(L[P],A,T,v,b)}function w(S){S.target.removeEventListener("dispose",w);for(let T in l){let v=l[T],b=S.target.uuid;b in v&&(v[b].dispose(),delete v[b])}}}var Kv={[xl]:yl,[vl]:Sl,[Ml]:Al,[rr]:bl,[yl]:xl,[Sl]:vl,[Al]:Ml,[bl]:rr};function Zv(n,e){function t(){let B=!1,pe=new tt,$=null,ne=new tt(0,0,0,0);return{setMask:function(xe){$!==xe&&!B&&(n.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){B=xe},setClear:function(xe,ge,Ge,St,Xt){Xt===!0&&(xe*=St,ge*=St,Ge*=St),pe.set(xe,ge,Ge,St),ne.equals(pe)===!1&&(n.clearColor(xe,ge,Ge,St),ne.copy(pe))},reset:function(){B=!1,$=null,ne.set(-1,0,0,0)}}}function i(){let B=!1,pe=!1,$=null,ne=null,xe=null;return{setReversed:function(ge){if(pe!==ge){let Ge=e.get("EXT_clip_control");pe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let St=xe;xe=null,this.setClear(St)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?he(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(ge){$!==ge&&!B&&(n.depthMask(ge),$=ge)},setFunc:function(ge){if(pe&&(ge=Kv[ge]),ne!==ge){switch(ge){case xl:n.depthFunc(n.NEVER);break;case yl:n.depthFunc(n.ALWAYS);break;case vl:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case Ml:n.depthFunc(n.EQUAL);break;case bl:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=ge}},setLocked:function(ge){B=ge},setClear:function(ge){xe!==ge&&(pe&&(ge=1-ge),n.clearDepth(ge),xe=ge)},reset:function(){B=!1,$=null,ne=null,xe=null,pe=!1}}}function s(){let B=!1,pe=null,$=null,ne=null,xe=null,ge=null,Ge=null,St=null,Xt=null;return{setTest:function(at){B||(at?he(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(at){pe!==at&&!B&&(n.stencilMask(at),pe=at)},setFunc:function(at,Pn,si){($!==at||ne!==Pn||xe!==si)&&(n.stencilFunc(at,Pn,si),$=at,ne=Pn,xe=si)},setOp:function(at,Pn,si){(ge!==at||Ge!==Pn||St!==si)&&(n.stencilOp(at,Pn,si),ge=at,Ge=Pn,St=si)},setLocked:function(at){B=at},setClear:function(at){Xt!==at&&(n.clearStencil(at),Xt=at)},reset:function(){B=!1,pe=null,$=null,ne=null,xe=null,ge=null,Ge=null,St=null,Xt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,M=null,y=null,x=null,w=null,S=null,A=new Ne(0,0,0),T=0,v=!1,b=null,C=null,L=null,P=null,U=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,O=0,D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),F=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),F=O>=2);let q=null,Z={},re=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ve=new tt().fromArray(re),J=new tt().fromArray(me);function se(B,pe,$,ne){let xe=new Uint8Array(4),ge=n.createTexture();n.bindTexture(B,ge),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<$;Ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(pe+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ge}let le={};le[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(rr),He(!1),Ke(Gf),he(n.CULL_FACE),X(Hi);function he(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function Ie(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function Le(B,pe){return u[B]!==pe?(n.bindFramebuffer(B,pe),u[B]=pe,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ke(B,pe){let $=m,ne=!1;if(B){$=f.get(pe),$===void 0&&($=[],f.set(pe,$));let xe=B.textures;if($.length!==xe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ge=0,Ge=xe.length;ge<Ge;ge++)$[ge]=n.COLOR_ATTACHMENT0+ge;$.length=xe.length,ne=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ne=!0);ne&&n.drawBuffers($)}function dt(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let Je={[fs]:n.FUNC_ADD,[cg]:n.FUNC_SUBTRACT,[lg]:n.FUNC_REVERSE_SUBTRACT};Je[hg]=n.MIN,Je[ug]=n.MAX;let yt={[fg]:n.ZERO,[dg]:n.ONE,[pg]:n.SRC_COLOR,[gl]:n.SRC_ALPHA,[vg]:n.SRC_ALPHA_SATURATE,[xg]:n.DST_COLOR,[gg]:n.DST_ALPHA,[mg]:n.ONE_MINUS_SRC_COLOR,[_l]:n.ONE_MINUS_SRC_ALPHA,[yg]:n.ONE_MINUS_DST_COLOR,[_g]:n.ONE_MINUS_DST_ALPHA,[Mg]:n.CONSTANT_COLOR,[bg]:n.ONE_MINUS_CONSTANT_COLOR,[Sg]:n.CONSTANT_ALPHA,[Ag]:n.ONE_MINUS_CONSTANT_ALPHA};function X(B,pe,$,ne,xe,ge,Ge,St,Xt,at){if(B===Hi){_===!0&&(Ie(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),B!==ag){if(B!==p||at!==v){if((d!==fs||x!==fs)&&(n.blendEquation(n.FUNC_ADD),d=fs,x=fs),at)switch(B){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,y=null,w=null,S=null,A.set(0,0,0),T=0,p=B,v=at}return}xe=xe||pe,ge=ge||$,Ge=Ge||ne,(pe!==d||xe!==x)&&(n.blendEquationSeparate(Je[pe],Je[xe]),d=pe,x=xe),($!==M||ne!==y||ge!==w||Ge!==S)&&(n.blendFuncSeparate(yt[$],yt[ne],yt[ge],yt[Ge]),M=$,y=ne,w=ge,S=Ge),(St.equals(A)===!1||Xt!==T)&&(n.blendColor(St.r,St.g,St.b,Xt),A.copy(St),T=Xt),p=B,v=!1}function Nt(B,pe){B.side===on?Ie(n.CULL_FACE):he(n.CULL_FACE);let $=B.side===Zt;pe&&($=!$),He($),B.blending===tr&&B.transparent===!1?X(Hi):X(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ne=B.stencilWrite;a.setTest(ne),ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),it(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function Ke(B){B!==sg?(he(n.CULL_FACE),B!==C&&(B===Gf?n.cullFace(n.BACK):B===rg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),C=B}function we(B){B!==L&&(F&&n.lineWidth(B),L=B)}function it(B,pe,$){B?(he(n.POLYGON_OFFSET_FILL),(P!==pe||U!==$)&&(n.polygonOffset(pe,$),P=pe,U=$)):Ie(n.POLYGON_OFFSET_FILL)}function Ae(B){B?he(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function I(B){B===void 0&&(B=n.TEXTURE0+k-1),q!==B&&(n.activeTexture(B),q=B)}function E(B,pe,$){$===void 0&&(q===null?$=n.TEXTURE0+k-1:$=q);let ne=Z[$];ne===void 0&&(ne={type:void 0,texture:void 0},Z[$]=ne),(ne.type!==B||ne.texture!==pe)&&(q!==$&&(n.activeTexture($),q=$),n.bindTexture(B,pe||le[B]),ne.type=B,ne.texture=pe)}function Y(){let B=Z[q];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function N(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(B){ve.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),ve.copy(B))}function ce(B){J.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Ce(B,pe){let $=l.get(pe);$===void 0&&($=new WeakMap,l.set(pe,$));let ne=$.get(B);ne===void 0&&(ne=n.getUniformBlockIndex(pe,B.name),$.set(B,ne))}function Pe(B,pe){let ne=l.get(pe).get(B);c.get(pe)!==ne&&(n.uniformBlockBinding(pe,ne,B.__bindingPointIndex),c.set(pe,ne))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},q=null,Z={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,M=null,y=null,x=null,w=null,S=null,A=new Ne(0,0,0),T=0,v=!1,b=null,C=null,L=null,P=null,U=null,ve.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Ie,bindFramebuffer:Le,drawBuffers:ke,useProgram:dt,setBlending:X,setMaterial:Nt,setFlipSided:He,setCullFace:Ke,setLineWidth:we,setPolygonOffset:it,setScissorTest:Ae,activeTexture:I,bindTexture:E,unbindTexture:Y,compressedTexImage2D:N,compressedTexImage3D:W,texImage2D:oe,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:fe,texStorage3D:te,texSubImage2D:H,texSubImage3D:ee,compressedTexSubImage2D:Q,compressedTexSubImage3D:ie,scissor:ye,viewport:ce,reset:Qe}}function Hd(n,e,t,i){let s=jv(i);switch(t){case pp:return n*e;case gp:return n*e;case _p:return n*e*2;case Dh:return n*e/s.components*s.byteLength;case Nh:return n*e/s.components*s.byteLength;case xp:return n*e*2/s.components*s.byteLength;case Uh:return n*e*2/s.components*s.byteLength;case mp:return n*e*3/s.components*s.byteLength;case an:return n*e*4/s.components*s.byteLength;case Oh:return n*e*4/s.components*s.byteLength;case xa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:case Ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Il:return Math.max(n,16)*Math.max(e,8)/4;case El:case Cl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ba:case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yp:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Jl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jv(n){switch(n){case Bn:case up:return{byteLength:1,components:1};case eo:case fp:case uo:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case ms:case Ih:case Fn:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Jv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):to("canvas")}function _(I,E,Y){let N=1,W=Ae(I);if((W.width>Y||W.height>Y)&&(N=Y/Math.max(W.width,W.height)),N<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let H=Math.floor(N*W.width),ee=Math.floor(N*W.height);u===void 0&&(u=g(H,ee));let Q=E?g(H,ee):u;return Q.width=H,Q.height=ee,Q.getContext("2d").drawImage(I,0,0,H,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+H+"x"+ee+")."),Q}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),I;return I}function p(I){return I.generateMipmaps}function d(I){n.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,E,Y,N,W=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let H=E;if(E===n.RED&&(Y===n.FLOAT&&(H=n.R32F),Y===n.HALF_FLOAT&&(H=n.R16F),Y===n.UNSIGNED_BYTE&&(H=n.R8)),E===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(H=n.R8UI),Y===n.UNSIGNED_SHORT&&(H=n.R16UI),Y===n.UNSIGNED_INT&&(H=n.R32UI),Y===n.BYTE&&(H=n.R8I),Y===n.SHORT&&(H=n.R16I),Y===n.INT&&(H=n.R32I)),E===n.RG&&(Y===n.FLOAT&&(H=n.RG32F),Y===n.HALF_FLOAT&&(H=n.RG16F),Y===n.UNSIGNED_BYTE&&(H=n.RG8)),E===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(H=n.RG8UI),Y===n.UNSIGNED_SHORT&&(H=n.RG16UI),Y===n.UNSIGNED_INT&&(H=n.RG32UI),Y===n.BYTE&&(H=n.RG8I),Y===n.SHORT&&(H=n.RG16I),Y===n.INT&&(H=n.RG32I)),E===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(H=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(H=n.RGB16UI),Y===n.UNSIGNED_INT&&(H=n.RGB32UI),Y===n.BYTE&&(H=n.RGB8I),Y===n.SHORT&&(H=n.RGB16I),Y===n.INT&&(H=n.RGB32I)),E===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),Y===n.UNSIGNED_INT&&(H=n.RGBA32UI),Y===n.BYTE&&(H=n.RGBA8I),Y===n.SHORT&&(H=n.RGBA16I),Y===n.INT&&(H=n.RGBA32I)),E===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),E===n.RGBA){let ee=W?ec:Ze.getTransfer(N);Y===n.FLOAT&&(H=n.RGBA32F),Y===n.HALF_FLOAT&&(H=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(H=ee===lt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(I,E){let Y;return I?E===null||E===ms||E===cr?Y=n.DEPTH24_STENCIL8:E===Fn?Y=n.DEPTH32F_STENCIL8:E===eo&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ms||E===cr?Y=n.DEPTH_COMPONENT24:E===Fn?Y=n.DEPTH_COMPONENT32F:E===eo&&(Y=n.DEPTH_COMPONENT16),Y}function w(I,E){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==jt&&I.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function S(I){let E=I.target;E.removeEventListener("dispose",S),T(E),E.isVideoTexture&&h.delete(E)}function A(I){let E=I.target;E.removeEventListener("dispose",A),b(E)}function T(I){let E=i.get(I);if(E.__webglInit===void 0)return;let Y=I.source,N=f.get(Y);if(N){let W=N[E.__cacheKey];W.usedTimes--,W.usedTimes===0&&v(I),Object.keys(N).length===0&&f.delete(Y)}i.remove(I)}function v(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let Y=I.source,N=f.get(Y);delete N[E.__cacheKey],o.memory.textures--}function b(I){let E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(E.__webglFramebuffer[N]))for(let W=0;W<E.__webglFramebuffer[N].length;W++)n.deleteFramebuffer(E.__webglFramebuffer[N][W]);else n.deleteFramebuffer(E.__webglFramebuffer[N]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[N])}else{if(Array.isArray(E.__webglFramebuffer))for(let N=0;N<E.__webglFramebuffer.length;N++)n.deleteFramebuffer(E.__webglFramebuffer[N]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let N=0;N<E.__webglColorRenderbuffer.length;N++)E.__webglColorRenderbuffer[N]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[N]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let Y=I.textures;for(let N=0,W=Y.length;N<W;N++){let H=i.get(Y[N]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(Y[N])}i.remove(I)}let C=0;function L(){C=0}function P(){let I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function U(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function k(I,E){let Y=i.get(I);if(I.isVideoTexture&&we(I),I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){let N=I.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Y,I,E);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+E)}function F(I,E){let Y=i.get(I);if(I.version>0&&Y.__version!==I.version){J(Y,I,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+E)}function O(I,E){let Y=i.get(I);if(I.version>0&&Y.__version!==I.version){J(Y,I,E);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+E)}function D(I,E){let Y=i.get(I);if(I.version>0&&Y.__version!==I.version){se(Y,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+E)}let q={[ps]:n.REPEAT,[pi]:n.CLAMP_TO_EDGE,[Qr]:n.MIRRORED_REPEAT},Z={[jt]:n.NEAREST,[Ch]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Rt]:n.LINEAR,[Zr]:n.LINEAR_MIPMAP_NEAREST,[Yn]:n.LINEAR_MIPMAP_LINEAR},re={[Bg]:n.NEVER,[Xg]:n.ALWAYS,[zg]:n.LESS,[Sp]:n.LEQUAL,[Hg]:n.EQUAL,[Wg]:n.GEQUAL,[Gg]:n.GREATER,[Vg]:n.NOTEQUAL};function me(I,E){if(E.type===Fn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rt||E.magFilter===Zr||E.magFilter===Qs||E.magFilter===Yn||E.minFilter===Rt||E.minFilter===Zr||E.minFilter===Qs||E.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,q[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,q[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,q[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Qs&&E.minFilter!==Yn||E.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ve(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",S));let N=E.source,W=f.get(N);W===void 0&&(W={},f.set(N,W));let H=U(E);if(H!==I.__cacheKey){W[H]===void 0&&(W[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),W[H].usedTimes++;let ee=W[I.__cacheKey];ee!==void 0&&(W[I.__cacheKey].usedTimes--,ee.usedTimes===0&&v(E)),I.__cacheKey=H,I.__webglTexture=W[H].texture}return Y}function J(I,E,Y){let N=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=n.TEXTURE_3D);let W=ve(I,E),H=E.source;t.bindTexture(N,I.__webglTexture,n.TEXTURE0+Y);let ee=i.get(H);if(H.version!==ee.__version||W===!0){t.activeTexture(n.TEXTURE0+Y);let Q=Ze.getPrimaries(Ze.workingColorSpace),ie=E.colorSpace===mn?null:Ze.getPrimaries(E.colorSpace),fe=E.colorSpace===mn||Q===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let te=_(E.image,!1,s.maxTextureSize);te=it(E,te);let oe=r.convert(E.format,E.colorSpace),de=r.convert(E.type),ye=y(E.internalFormat,oe,de,E.colorSpace,E.isVideoTexture);me(N,E);let ce,Ce=E.mipmaps,Pe=E.isVideoTexture!==!0,Qe=ee.__version===void 0||W===!0,B=H.dataReady,pe=w(E,te);if(E.isDepthTexture)ye=x(E.format===lr,E.type),Qe&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,ye,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,oe,de,null));else if(E.isDataTexture)if(Ce.length>0){Pe&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Ce[0].width,Ce[0].height);for(let $=0,ne=Ce.length;$<ne;$++)ce=Ce[$],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,oe,de,ce.data):t.texImage2D(n.TEXTURE_2D,$,ye,ce.width,ce.height,0,oe,de,ce.data);E.generateMipmaps=!1}else Pe?(Qe&&t.texStorage2D(n.TEXTURE_2D,pe,ye,te.width,te.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,oe,de,te.data)):t.texImage2D(n.TEXTURE_2D,0,ye,te.width,te.height,0,oe,de,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,Ce[0].width,Ce[0].height,te.depth);for(let $=0,ne=Ce.length;$<ne;$++)if(ce=Ce[$],E.format!==an)if(oe!==null)if(Pe){if(B)if(E.layerUpdates.size>0){let xe=Hd(ce.width,ce.height,E.format,E.type);for(let ge of E.layerUpdates){let Ge=ce.data.subarray(ge*xe/ce.data.BYTES_PER_ELEMENT,(ge+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ge,ce.width,ce.height,1,oe,Ge)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,oe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ye,ce.width,ce.height,te.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,ce.width,ce.height,te.depth,oe,de,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ye,ce.width,ce.height,te.depth,0,oe,de,ce.data)}else{Pe&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,ye,Ce[0].width,Ce[0].height);for(let $=0,ne=Ce.length;$<ne;$++)ce=Ce[$],E.format!==an?oe!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ye,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,ce.width,ce.height,oe,de,ce.data):t.texImage2D(n.TEXTURE_2D,$,ye,ce.width,ce.height,0,oe,de,ce.data)}else if(E.isDataArrayTexture)if(Pe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,ye,te.width,te.height,te.depth),B)if(E.layerUpdates.size>0){let $=Hd(te.width,te.height,E.format,E.type);for(let ne of E.layerUpdates){let xe=te.data.subarray(ne*$/te.data.BYTES_PER_ELEMENT,(ne+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,te.width,te.height,1,oe,de,xe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,de,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,oe,de,te.data);else if(E.isData3DTexture)Pe?(Qe&&t.texStorage3D(n.TEXTURE_3D,pe,ye,te.width,te.height,te.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,de,te.data)):t.texImage3D(n.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,oe,de,te.data);else if(E.isFramebufferTexture){if(Qe)if(Pe)t.texStorage2D(n.TEXTURE_2D,pe,ye,te.width,te.height);else{let $=te.width,ne=te.height;for(let xe=0;xe<pe;xe++)t.texImage2D(n.TEXTURE_2D,xe,ye,$,ne,0,oe,de,null),$>>=1,ne>>=1}}else if(Ce.length>0){if(Pe&&Qe){let $=Ae(Ce[0]);t.texStorage2D(n.TEXTURE_2D,pe,ye,$.width,$.height)}for(let $=0,ne=Ce.length;$<ne;$++)ce=Ce[$],Pe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,oe,de,ce):t.texImage2D(n.TEXTURE_2D,$,ye,oe,de,ce);E.generateMipmaps=!1}else if(Pe){if(Qe){let $=Ae(te);t.texStorage2D(n.TEXTURE_2D,pe,ye,$.width,$.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,de,te)}else t.texImage2D(n.TEXTURE_2D,0,ye,oe,de,te);p(E)&&d(N),ee.__version=H.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function se(I,E,Y){if(E.image.length!==6)return;let N=ve(I,E),W=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+Y);let H=i.get(W);if(W.version!==H.__version||N===!0){t.activeTexture(n.TEXTURE0+Y);let ee=Ze.getPrimaries(Ze.workingColorSpace),Q=E.colorSpace===mn?null:Ze.getPrimaries(E.colorSpace),ie=E.colorSpace===mn||ee===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let fe=E.isCompressedTexture||E.image[0].isCompressedTexture,te=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let ne=0;ne<6;ne++)!fe&&!te?oe[ne]=_(E.image[ne],!0,s.maxCubemapSize):oe[ne]=te?E.image[ne].image:E.image[ne],oe[ne]=it(E,oe[ne]);let de=oe[0],ye=r.convert(E.format,E.colorSpace),ce=r.convert(E.type),Ce=y(E.internalFormat,ye,ce,E.colorSpace),Pe=E.isVideoTexture!==!0,Qe=H.__version===void 0||N===!0,B=W.dataReady,pe=w(E,de);me(n.TEXTURE_CUBE_MAP,E);let $;if(fe){Pe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ce,de.width,de.height);for(let ne=0;ne<6;ne++){$=oe[ne].mipmaps;for(let xe=0;xe<$.length;xe++){let ge=$[xe];E.format!==an?ye!==null?Pe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,ge.width,ge.height,ye,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,ge.width,ge.height,ye,ce,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ce,ge.width,ge.height,0,ye,ce,ge.data)}}}else{if($=E.mipmaps,Pe&&Qe){$.length>0&&pe++;let ne=Ae(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ce,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(te){Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,oe[ne].width,oe[ne].height,ye,ce,oe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ce,oe[ne].width,oe[ne].height,0,ye,ce,oe[ne].data);for(let xe=0;xe<$.length;xe++){let Ge=$[xe].image[ne].image;Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ge.width,Ge.height,ye,ce,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ce,Ge.width,Ge.height,0,ye,ce,Ge.data)}}else{Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye,ce,oe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ce,ye,ce,oe[ne]);for(let xe=0;xe<$.length;xe++){let ge=$[xe];Pe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,ye,ce,ge.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ce,ye,ce,ge.image[ne])}}}p(E)&&d(n.TEXTURE_CUBE_MAP),H.__version=W.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function le(I,E,Y,N,W,H){let ee=r.convert(Y.format,Y.colorSpace),Q=r.convert(Y.type),ie=y(Y.internalFormat,ee,Q,Y.colorSpace),fe=i.get(E),te=i.get(Y);if(te.__renderTarget=E,!fe.__hasExternalTextures){let oe=Math.max(1,E.width>>H),de=Math.max(1,E.height>>H);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,H,ie,oe,de,E.depth,0,ee,Q,null):t.texImage2D(W,H,ie,oe,de,0,ee,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,N,W,te.__webglTexture,0,He(E)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,N,W,te.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(I,E,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let N=E.depthTexture,W=N&&N.isDepthTexture?N.type:null,H=x(E.stencilBuffer,W),ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=He(E);Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,H,E.width,E.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,H,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,H,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,I)}else{let N=E.textures;for(let W=0;W<N.length;W++){let H=N[W],ee=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),ie=y(H.internalFormat,ee,Q,H.colorSpace),fe=He(E);Y&&Ke(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,ie,E.width,E.height):Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,ie,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ie,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(I,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(E.depthTexture);N.__renderTarget=E,(!N.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);let W=N.__webglTexture,H=He(E);if(E.depthTexture.format===nr)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(E.depthTexture.format===lr)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Le(I){let E=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let N=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),N){let W=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,N.removeEventListener("dispose",W)};N.addEventListener("dispose",W),E.__depthDisposeCallback=W}E.__boundDepthTexture=N}if(I.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ie(E.__webglFramebuffer,I)}else if(Y){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]===void 0)E.__webglDepthbuffer[N]=n.createRenderbuffer(),he(E.__webglDepthbuffer[N],I,!1);else{let W=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=E.__webglDepthbuffer[N];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),he(E.__webglDepthbuffer,I,!1);else{let N=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,N,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(I,E,Y){let N=i.get(I);E!==void 0&&le(N.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Le(I)}function dt(I){let E=I.texture,Y=i.get(I),N=i.get(E);I.addEventListener("dispose",A);let W=I.textures,H=I.isWebGLCubeRenderTarget===!0,ee=W.length>1;if(ee||(N.__webglTexture===void 0&&(N.__webglTexture=n.createTexture()),N.__version=E.version,o.memory.textures++),H){Y.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Q]=[];for(let ie=0;ie<E.mipmaps.length;ie++)Y.__webglFramebuffer[Q][ie]=n.createFramebuffer()}else Y.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)Y.__webglFramebuffer[Q]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(ee)for(let Q=0,ie=W.length;Q<ie;Q++){let fe=i.get(W[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ke(I)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<W.length;Q++){let ie=W[Q];Y.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q]);let fe=r.convert(ie.format,ie.colorSpace),te=r.convert(ie.type),oe=y(ie.internalFormat,fe,te,ie.colorSpace,I.isXRRenderTarget===!0),de=He(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,de,oe,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture),me(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)le(Y.__webglFramebuffer[Q][ie],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else le(Y.__webglFramebuffer[Q],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){for(let Q=0,ie=W.length;Q<ie;Q++){let fe=W[Q],te=i.get(fe);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),me(n.TEXTURE_2D,fe),le(Y.__webglFramebuffer,I,fe,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),p(fe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,N.__webglTexture),me(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)le(Y.__webglFramebuffer[ie],I,E,n.COLOR_ATTACHMENT0,Q,ie);else le(Y.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Q,0);p(E)&&d(Q),t.unbindTexture()}I.depthBuffer&&Le(I)}function Je(I){let E=I.textures;for(let Y=0,N=E.length;Y<N;Y++){let W=E[Y];if(p(W)){let H=M(I),ee=i.get(W).__webglTexture;t.bindTexture(H,ee),d(H),t.unbindTexture()}}}let yt=[],X=[];function Nt(I){if(I.samples>0){if(Ke(I)===!1){let E=I.textures,Y=I.width,N=I.height,W=n.COLOR_BUFFER_BIT,H=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=i.get(I),Q=E.length>1;if(Q)for(let ie=0;ie<E.length;ie++)t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ee.__webglColorRenderbuffer[ie]);let fe=i.get(E[ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,Y,N,0,0,Y,N,W,n.NEAREST),c===!0&&(yt.length=0,X.length=0,yt.push(n.COLOR_ATTACHMENT0+ie),I.depthBuffer&&I.resolveDepthBuffer===!1&&(yt.push(H),X.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ie=0;ie<E.length;ie++){t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,ee.__webglColorRenderbuffer[ie]);let fe=i.get(E[ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function He(I){return Math.min(s.maxSamples,I.samples)}function Ke(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function it(I,E){let Y=I.colorSpace,N=I.format,W=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==kt&&Y!==mn&&(Ze.getTransfer(Y)===lt?(N!==an||W!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}function Ae(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=O,this.setTextureCube=D,this.rebindTextures=ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ke}function $v(n,e){function t(i,s=mn){let r,o=Ze.getTransfer(s);if(i===Bn)return n.UNSIGNED_BYTE;if(i===Ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===up)return n.BYTE;if(i===fp)return n.SHORT;if(i===eo)return n.UNSIGNED_SHORT;if(i===Ih)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===Fn)return n.FLOAT;if(i===uo)return n.HALF_FLOAT;if(i===pp)return n.ALPHA;if(i===mp)return n.RGB;if(i===an)return n.RGBA;if(i===gp)return n.LUMINANCE;if(i===_p)return n.LUMINANCE_ALPHA;if(i===nr)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===Dh)return n.RED;if(i===Nh)return n.RED_INTEGER;if(i===xp)return n.RG;if(i===Uh)return n.RG_INTEGER;if(i===Oh)return n.RGBA_INTEGER;if(i===xa||i===ya||i===va||i===Ma)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===Rl||i===Cl||i===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Ll||i===Dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Ll)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nl||i===Ul||i===Ol||i===Fl||i===kl||i===Bl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ol)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ba||i===Kl||i===Zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ba)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yp||i===jl||i===Jl||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var dh=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gn=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qv={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Gt({vertexShader:eM,fragmentShader:tM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends Vi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,g=null,_=new ph,p=t.getContextAttributes(),d=null,M=null,y=[],x=[],w=new De,S=null,A=new Et;A.viewport=new tt;let T=new Et;T.viewport=new tt;let v=[A,T],b=new dh,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=y[J];return se===void 0&&(se=new $r,y[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=y[J];return se===void 0&&(se=new $r,y[J]=se),se.getGripSpace()},this.getHand=function(J){let se=y[J];return se===void 0&&(se=new $r,y[J]=se),se.getHandSpace()};function P(J){let se=x.indexOf(J.inputSource);if(se===-1)return;let le=y[se];le!==void 0&&(le.update(J.inputSource,J.frame,l||o),le.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let J=0;J<y.length;J++){let se=x[J];se!==null&&(x[J]=null,y[J].disconnect(se))}C=null,L=null,_.reset(),e.setRenderTarget(d),m=null,f=null,u=null,s=null,M=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0){let se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new _i(m.framebufferWidth,m.framebufferHeight,{format:an,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,le=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?lr:nr,le=p.stencil?cr:ms);let Ie={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new _i(f.textureWidth,f.textureHeight,{format:an,type:Bn,depthTexture:new Da(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(J){for(let se=0;se<J.removed.length;se++){let le=J.removed[se],he=x.indexOf(le);he>=0&&(x[he]=null,y[he].disconnect(le))}for(let se=0;se<J.added.length;se++){let le=J.added[se],he=x.indexOf(le);if(he===-1){for(let Le=0;Le<y.length;Le++)if(Le>=x.length){x.push(le),he=Le;break}else if(x[Le]===null){x[Le]=le,he=Le;break}if(he===-1)break}let Ie=y[he];Ie&&Ie.connect(le)}}let F=new z,O=new z;function D(J,se,le){F.setFromMatrixPosition(se.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);let he=F.distanceTo(O),Ie=se.projectionMatrix.elements,Le=le.projectionMatrix.elements,ke=Ie[14]/(Ie[10]-1),dt=Ie[14]/(Ie[10]+1),Je=(Ie[9]+1)/Ie[5],yt=(Ie[9]-1)/Ie[5],X=(Ie[8]-1)/Ie[0],Nt=(Le[8]+1)/Le[0],He=ke*X,Ke=ke*Nt,we=he/(-X+Nt),it=we*-X;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(it),J.translateZ(we),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ae=ke+we,I=dt+we,E=He-it,Y=Ke+(he-it),N=Je*dt/I*Ae,W=yt*dt/I*Ae;J.projectionMatrix.makePerspective(E,Y,N,W,Ae,I),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function q(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let se=J.near,le=J.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(le=_.depthFar)),b.near=T.near=A.near=se,b.far=T.far=A.far=le,(C!==b.near||L!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,L=b.far),A.layers.mask=J.layers.mask|2,T.layers.mask=J.layers.mask|4,b.layers.mask=A.layers.mask|T.layers.mask;let he=J.parent,Ie=b.cameras;q(b,he);for(let Le=0;Le<Ie.length;Le++)q(Ie[Le],he);Ie.length===2?D(b,A,T):b.projectionMatrix.copy(A.projectionMatrix),Z(J,b,he)};function Z(J,se,le){le===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=dr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let re=null;function me(J,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let le=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let he=!1;le.length!==b.cameras.length&&(b.cameras.length=0,he=!0);for(let Le=0;Le<le.length;Le++){let ke=le[Le],dt=null;if(m!==null)dt=m.getViewport(ke);else{let yt=u.getViewSubImage(f,ke);dt=yt.viewport,Le===0&&(e.setRenderTargetTextures(M,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(M))}let Je=v[Le];Je===void 0&&(Je=new Et,Je.layers.enable(Le),Je.viewport=new tt,v[Le]=Je),Je.matrix.fromArray(ke.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ke.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(dt.x,dt.y,dt.width,dt.height),Le===0&&(b.matrix.copy(Je.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),he===!0&&b.cameras.push(Je)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Le=u.getDepthInformation(le[0]);Le&&Le.isValid&&Le.texture&&_.init(e,Le,s.renderState)}}for(let le=0;le<y.length;le++){let he=x[le],Ie=y[le];he!==null&&Ie!==void 0&&Ie.update(he,se,l||o)}re&&re(J,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let ve=new Ep;ve.setAnimationLoop(me),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}},hs=new Kn,nM=new Fe;function iM(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Tp(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,M,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Zt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Zt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let M=e.get(d),y=M.envMap,x=M.envMapRotation;y&&(p.envMap.value=y,hs.copy(x),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(hs)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){let M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function sM(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let x=y.program;i.uniformBlockBinding(M,x)}function l(M,y){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",p));let w=y.program;i.updateUBOMapping(M,w);let S=e.render.frame;r[M.id]!==S&&(f(M),r[M.id]=S)}function h(M){let y=u();M.__bindingPointIndex=y;let x=n.createBuffer(),w=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],x=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let S=0,A=x.length;S<A;S++){let T=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,b=T.length;v<b;v++){let C=T[v];if(m(C,S,v,w)===!0){let L=C.__offset,P=Array.isArray(C.value)?C.value:[C.value],U=0;for(let k=0;k<P.length;k++){let F=P[k],O=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,L+U,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,U),U+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,y,x,w){let S=M.value,A=y+"_"+x;if(w[A]===void 0)return typeof S=="number"||typeof S=="boolean"?w[A]=S:w[A]=S.clone(),!0;{let T=w[A];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return w[A]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(M){let y=M.uniforms,x=0,w=16;for(let A=0,T=y.length;A<T;A++){let v=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,C=v.length;b<C;b++){let L=v[b],P=Array.isArray(L.value)?L.value:[L.value];for(let U=0,k=P.length;U<k;U++){let F=P[U],O=_(F),D=x%w,q=D%O.boundary,Z=D+q;x+=q,Z!==0&&w-Z<O.storage&&(x+=w-Z),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=O.storage}}}let S=x%w;return S>0&&(x+=w-S),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){let y=M.target;y.removeEventListener("dispose",p);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Na=class{constructor(e={}){let{canvas:t=c_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,d=null,M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=Gi,this.toneMappingExposure=1;let x=this,w=!1,S=0,A=0,T=null,v=-1,b=null,C=new tt,L=new tt,P=null,U=new Ne(0),k=0,F=t.width,O=t.height,D=1,q=null,Z=null,re=new tt(0,0,F,O),me=new tt(0,0,F,O),ve=!1,J=new io,se=!1,le=!1,he=new Fe,Ie=new Fe,Le=new z,ke=new tt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function yt(){return T===null?D:1}let X=i;function Nt(R,G){return t.getContext(R,G)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rh}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),X===null){let G="webgl2";if(X=Nt(G,R),X===null)throw Nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let He,Ke,we,it,Ae,I,E,Y,N,W,H,ee,Q,ie,fe,te,oe,de,ye,ce,Ce,Pe,Qe,B;function pe(){He=new vy(X),He.init(),Pe=new $v(X,He),Ke=new py(X,He,e,Pe),we=new Zv(X,He),Ke.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),it=new Sy(X),Ae=new Ov,I=new Jv(X,He,we,Ae,Ke,Pe,it),E=new gy(x),Y=new yy(x),N=new I_(X),Qe=new fy(X,N),W=new My(X,N,it,Qe),H=new wy(X,W,N,it),ye=new Ay(X,Ke,I),te=new my(Ae),ee=new Uv(x,E,Y,He,Ke,Qe,te),Q=new iM(x,Ae),ie=new kv,fe=new Wv(He),de=new uy(x,E,Y,we,H,m,c),oe=new Yv(x,H,Ke),B=new sM(X,it,Ke,we),ce=new dy(X,He,it),Ce=new by(X,He,it),it.programs=ee.programs,x.capabilities=Ke,x.extensions=He,x.properties=Ae,x.renderLists=ie,x.shadowMap=oe,x.state=we,x.info=it}pe();let $=new mh(x,X);this.xr=$,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=He.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=He.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(F,O,!1))},this.getSize=function(R){return R.set(F,O)},this.setSize=function(R,G,K=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,O=G,t.width=Math.floor(R*D),t.height=Math.floor(G*D),K===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(F*D,O*D).floor()},this.setDrawingBufferSize=function(R,G,K){F=R,O=G,D=K,t.width=Math.floor(R*K),t.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,G,K,j){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,G,K,j),we.viewport(C.copy(re).multiplyScalar(D).round())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,G,K,j){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,G,K,j),we.scissor(L.copy(me).multiplyScalar(D).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(R){we.setScissorTest(ve=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(R=!0,G=!0,K=!0){let j=0;if(R){let V=!1;if(T!==null){let ae=T.texture.format;V=ae===Oh||ae===Uh||ae===Nh}if(V){let ae=T.texture.type,_e=ae===Bn||ae===ms||ae===eo||ae===cr||ae===Ph||ae===Lh,Me=de.getClearColor(),be=de.getClearAlpha(),Be=Me.r,Ve=Me.g,Se=Me.b;_e?(g[0]=Be,g[1]=Ve,g[2]=Se,g[3]=be,X.clearBufferuiv(X.COLOR,0,g)):(_[0]=Be,_[1]=Ve,_[2]=Se,_[3]=be,X.clearBufferiv(X.COLOR,0,_))}else j|=X.COLOR_BUFFER_BIT}G&&(j|=X.DEPTH_BUFFER_BIT),K&&(j|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),fe.dispose(),Ae.dispose(),E.dispose(),Y.dispose(),H.dispose(),Qe.dispose(),B.dispose(),ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",Nf),$.removeEventListener("sessionend",Uf),ss.stop()};function ne(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let R=it.autoReset,G=oe.enabled,K=oe.autoUpdate,j=oe.needsUpdate,V=oe.type;pe(),it.autoReset=R,oe.enabled=G,oe.autoUpdate=K,oe.needsUpdate=j,oe.type=V}function ge(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){let G=R.target;G.removeEventListener("dispose",Ge),St(G)}function St(R){Xt(R),Ae.remove(R)}function Xt(R){let G=Ae.get(R).programs;G!==void 0&&(G.forEach(function(K){ee.releaseProgram(K)}),R.isShaderMaterial&&ee.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,j,V,ae){G===null&&(G=dt);let _e=V.isMesh&&V.matrixWorld.determinant()<0,Me=Q0(R,G,K,j,V);we.setMaterial(j,_e);let be=K.index,Be=1;if(j.wireframe===!0){if(be=W.getWireframeAttribute(K),be===void 0)return;Be=2}let Ve=K.drawRange,Se=K.attributes.position,et=Ve.start*Be,pt=(Ve.start+Ve.count)*Be;ae!==null&&(et=Math.max(et,ae.start*Be),pt=Math.min(pt,(ae.start+ae.count)*Be)),be!==null?(et=Math.max(et,0),pt=Math.min(pt,be.count)):Se!=null&&(et=Math.max(et,0),pt=Math.min(pt,Se.count));let gt=pt-et;if(gt<0||gt===1/0)return;Qe.setup(V,j,Me,K,be);let rn,st=ce;if(be!==null&&(rn=N.get(be),st=Ce,st.setIndex(rn)),V.isMesh)j.wireframe===!0?(we.setLineWidth(j.wireframeLinewidth*yt()),st.setMode(X.LINES)):st.setMode(X.TRIANGLES);else if(V.isLine){let Te=j.linewidth;Te===void 0&&(Te=1),we.setLineWidth(Te*yt()),V.isLineSegments?st.setMode(X.LINES):V.isLineLoop?st.setMode(X.LINE_LOOP):st.setMode(X.LINE_STRIP)}else V.isPoints?st.setMode(X.POINTS):V.isSprite&&st.setMode(X.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)st.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))st.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Te=V._multiDrawStarts,ri=V._multiDrawCounts,rt=V._multiDrawCount,Ln=be?N.get(be).bytesPerElement:1,Ns=Ae.get(j).currentProgram.getUniforms();for(let fn=0;fn<rt;fn++)Ns.setValue(X,"_gl_DrawID",fn),st.render(Te[fn]/Ln,ri[fn])}else if(V.isInstancedMesh)st.renderInstances(et,gt,V.count);else if(K.isInstancedBufferGeometry){let Te=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ri=Math.min(K.instanceCount,Te);st.renderInstances(et,gt,ri)}else st.render(et,gt)};function at(R,G,K){R.transparent===!0&&R.side===on&&R.forceSinglePass===!1?(R.side=Zt,R.needsUpdate=!0,Ho(R,G,K),R.side=tn,R.needsUpdate=!0,Ho(R,G,K),R.side=on):Ho(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),d=fe.get(K),d.init(G),y.push(d),K.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),R!==K&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let j=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ae=V.material;if(ae)if(Array.isArray(ae))for(let _e=0;_e<ae.length;_e++){let Me=ae[_e];at(Me,K,V),j.add(Me)}else at(ae,K,V),j.add(ae)}),y.pop(),d=null,j},this.compileAsync=function(R,G,K=null){let j=this.compile(R,G,K);return new Promise(V=>{function ae(){if(j.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){V(R);return}setTimeout(ae,10)}He.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Pn=null;function si(R){Pn&&Pn(R)}function Nf(){ss.stop()}function Uf(){ss.start()}let ss=new Ep;ss.setAnimationLoop(si),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(R){Pn=R,$.setAnimationLoop(R),R===null?ss.stop():ss.start()},$.addEventListener("sessionstart",Nf),$.addEventListener("sessionend",Uf),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(G),G=$.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,G,T),d=fe.get(R,y.length),d.init(G),y.push(d),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(Ie),le=this.localClippingEnabled,se=te.init(this.clippingPlanes,le),p=ie.get(R,M.length),p.init(),M.push(p),$.enabled===!0&&$.isPresenting===!0){let ae=x.xr.getDepthSensingMesh();ae!==null&&Oc(ae,G,-1/0,x.sortObjects)}Oc(R,G,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(q,Z),Je=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Je&&de.addToRenderList(p,R),this.info.render.frame++,se===!0&&te.beginShadows();let K=d.state.shadowsArray;oe.render(K,R,G),se===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=p.opaque,V=p.transmissive;if(d.setupLights(),G.isArrayCamera){let ae=G.cameras;if(V.length>0)for(let _e=0,Me=ae.length;_e<Me;_e++){let be=ae[_e];Ff(j,V,R,be)}Je&&de.render(R);for(let _e=0,Me=ae.length;_e<Me;_e++){let be=ae[_e];Of(p,R,be,be.viewport)}}else V.length>0&&Ff(j,V,R,G),Je&&de.render(R),Of(p,R,G);T!==null&&(I.updateMultisampleRenderTarget(T),I.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,G),Qe.resetDefaultState(),v=-1,b=null,y.pop(),y.length>0?(d=y[y.length-1],se===!0&&te.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function Oc(R,G,K,j){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){j&&ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ie);let _e=H.update(R),Me=R.material;Me.visible&&p.push(R,_e,Me,K,ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){let _e=H.update(R),Me=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ke.copy(R.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ke.copy(_e.boundingSphere.center)),ke.applyMatrix4(R.matrixWorld).applyMatrix4(Ie)),Array.isArray(Me)){let be=_e.groups;for(let Be=0,Ve=be.length;Be<Ve;Be++){let Se=be[Be],et=Me[Se.materialIndex];et&&et.visible&&p.push(R,_e,et,K,ke.z,Se)}}else Me.visible&&p.push(R,_e,Me,K,ke.z,null)}}let ae=R.children;for(let _e=0,Me=ae.length;_e<Me;_e++)Oc(ae[_e],G,K,j)}function Of(R,G,K,j){let V=R.opaque,ae=R.transmissive,_e=R.transparent;d.setupLightsView(K),se===!0&&te.setGlobalState(x.clippingPlanes,K),j&&we.viewport(C.copy(j)),V.length>0&&zo(V,G,K),ae.length>0&&zo(ae,G,K),_e.length>0&&zo(_e,G,K),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ff(R,G,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new _i(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?uo:Bn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ae=d.state.transmissionRenderTarget[j.id],_e=j.viewport||C;ae.setSize(_e.z,_e.w);let Me=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(U),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Je&&de.render(K);let be=x.toneMapping;x.toneMapping=Gi;let Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),se===!0&&te.setGlobalState(x.clippingPlanes,j),zo(R,K,j),I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Se=0,et=G.length;Se<et;Se++){let pt=G[Se],gt=pt.object,rn=pt.geometry,st=pt.material,Te=pt.group;if(st.side===on&&gt.layers.test(j.layers)){let ri=st.side;st.side=Zt,st.needsUpdate=!0,kf(gt,K,j,rn,st,Te),st.side=ri,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(I.updateMultisampleRenderTarget(ae),I.updateRenderTargetMipmap(ae))}x.setRenderTarget(Me),x.setClearColor(U,k),Be!==void 0&&(j.viewport=Be),x.toneMapping=be}function zo(R,G,K){let j=G.isScene===!0?G.overrideMaterial:null;for(let V=0,ae=R.length;V<ae;V++){let _e=R[V],Me=_e.object,be=_e.geometry,Be=j===null?_e.material:j,Ve=_e.group;Me.layers.test(K.layers)&&kf(Me,G,K,be,Be,Ve)}}function kf(R,G,K,j,V,ae){R.onBeforeRender(x,G,K,j,V,ae),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,G,K,j,R,ae),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=Zt,V.needsUpdate=!0,x.renderBufferDirect(K,G,j,V,R,ae),V.side=tn,V.needsUpdate=!0,x.renderBufferDirect(K,G,j,V,R,ae),V.side=on):x.renderBufferDirect(K,G,j,V,R,ae),R.onAfterRender(x,G,K,j,V,ae)}function Ho(R,G,K){G.isScene!==!0&&(G=dt);let j=Ae.get(R),V=d.state.lights,ae=d.state.shadowsArray,_e=V.state.version,Me=ee.getParameters(R,V.state,ae,G,K),be=ee.getProgramCacheKey(Me),Be=j.programs;j.environment=R.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(R.isMeshStandardMaterial?Y:E).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",Ge),Be=new Map,j.programs=Be);let Ve=Be.get(be);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===_e)return zf(R,Me),Ve}else Me.uniforms=ee.getUniforms(R),R.onBeforeCompile(Me,x),Ve=ee.acquireProgram(Me,be),Be.set(be,Ve),j.uniforms=Me.uniforms;let Se=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Se.clippingPlanes=te.uniform),zf(R,Me),j.needsLights=tg(R),j.lightsStateVersion=_e,j.needsLights&&(Se.ambientLightColor.value=V.state.ambient,Se.lightProbe.value=V.state.probe,Se.directionalLights.value=V.state.directional,Se.directionalLightShadows.value=V.state.directionalShadow,Se.spotLights.value=V.state.spot,Se.spotLightShadows.value=V.state.spotShadow,Se.rectAreaLights.value=V.state.rectArea,Se.ltc_1.value=V.state.rectAreaLTC1,Se.ltc_2.value=V.state.rectAreaLTC2,Se.pointLights.value=V.state.point,Se.pointLightShadows.value=V.state.pointShadow,Se.hemisphereLights.value=V.state.hemi,Se.directionalShadowMap.value=V.state.directionalShadowMap,Se.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Se.spotShadowMap.value=V.state.spotShadowMap,Se.spotLightMatrix.value=V.state.spotLightMatrix,Se.spotLightMap.value=V.state.spotLightMap,Se.pointShadowMap.value=V.state.pointShadowMap,Se.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function Bf(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=sr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function zf(R,G){let K=Ae.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Q0(R,G,K,j,V){G.isScene!==!0&&(G=dt),I.resetTextureUnits();let ae=G.fog,_e=j.isMeshStandardMaterial?G.environment:null,Me=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:kt,be=(j.isMeshStandardMaterial?Y:E).get(j.envMap||_e),Be=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Se=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,pt=!!K.morphAttributes.color,gt=Gi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=x.toneMapping);let rn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=rn!==void 0?rn.length:0,Te=Ae.get(j),ri=d.state.lights;if(se===!0&&(le===!0||R!==b)){let bn=R===b&&j.id===v;te.setState(j,R,bn)}let rt=!1;j.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ri.state.version||Te.outputColorSpace!==Me||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==be||j.fog===!0&&Te.fog!==ae||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Be||Te.vertexTangents!==Ve||Te.morphTargets!==Se||Te.morphNormals!==et||Te.morphColors!==pt||Te.toneMapping!==gt||Te.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Te.__version=j.version);let Ln=Te.currentProgram;rt===!0&&(Ln=Ho(j,G,V));let Ns=!1,fn=!1,Nr=!1,_t=Ln.getUniforms(),Wn=Te.uniforms;if(we.useProgram(Ln.program)&&(Ns=!0,fn=!0,Nr=!0),j.id!==v&&(v=j.id,fn=!0),Ns||b!==R){we.buffers.depth.getReversed()?(he.copy(R.projectionMatrix),h_(he),u_(he),_t.setValue(X,"projectionMatrix",he)):_t.setValue(X,"projectionMatrix",R.projectionMatrix),_t.setValue(X,"viewMatrix",R.matrixWorldInverse);let Pi=_t.map.cameraPosition;Pi!==void 0&&Pi.setValue(X,Le.setFromMatrixPosition(R.matrixWorld)),Ke.logarithmicDepthBuffer&&_t.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_t.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,fn=!0,Nr=!0)}if(V.isSkinnedMesh){_t.setOptional(X,V,"bindMatrix"),_t.setOptional(X,V,"bindMatrixInverse");let bn=V.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),_t.setValue(X,"boneTexture",bn.boneTexture,I))}V.isBatchedMesh&&(_t.setOptional(X,V,"batchingTexture"),_t.setValue(X,"batchingTexture",V._matricesTexture,I),_t.setOptional(X,V,"batchingIdTexture"),_t.setValue(X,"batchingIdTexture",V._indirectTexture,I),_t.setOptional(X,V,"batchingColorTexture"),V._colorsTexture!==null&&_t.setValue(X,"batchingColorTexture",V._colorsTexture,I));let Ur=K.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&ye.update(V,K,Ln),(fn||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,_t.setValue(X,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=be,Wn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(Wn.envMapIntensity.value=G.environmentIntensity),fn&&(_t.setValue(X,"toneMappingExposure",x.toneMappingExposure),Te.needsLights&&eg(Wn,Nr),ae&&j.fog===!0&&Q.refreshFogUniforms(Wn,ae),Q.refreshMaterialUniforms(Wn,j,D,O,d.state.transmissionRenderTarget[R.id]),sr.upload(X,Bf(Te),Wn,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(sr.upload(X,Bf(Te),Wn,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_t.setValue(X,"center",V.center),_t.setValue(X,"modelViewMatrix",V.modelViewMatrix),_t.setValue(X,"normalMatrix",V.normalMatrix),_t.setValue(X,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let bn=j.uniformsGroups;for(let Pi=0,Li=bn.length;Pi<Li;Pi++){let Hf=bn[Pi];B.update(Hf,Ln),B.bind(Hf,Ln)}}return Ln}function eg(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function tg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,G,K){Ae.get(R.texture).__webglTexture=G,Ae.get(R.depthTexture).__webglTexture=K;let j=Ae.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){let K=Ae.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){T=R,S=G,A=K;let j=!0,V=null,ae=!1,_e=!1;if(R){let be=Ae.get(R);if(be.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(X.FRAMEBUFFER,null),j=!1;else if(be.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(be.__hasExternalTextures)I.rebindTextures(R,Ae.get(R.texture).__webglTexture,Ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Se=R.depthTexture;if(be.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(R.width!==Se.image.width||R.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);let Ve=Ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?V=Ve[G][K]:V=Ve[G],ae=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?V=Ae.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[K]:V=Ve,C.copy(R.viewport),L.copy(R.scissor),P=R.scissorTest}else C.copy(re).multiplyScalar(D).floor(),L.copy(me).multiplyScalar(D).floor(),P=ve;if(we.bindFramebuffer(X.FRAMEBUFFER,V)&&j&&we.drawBuffers(R,V),we.viewport(C),we.scissor(L),we.setScissorTest(P),ae){let be=Ae.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,be.__webglTexture,K)}else if(_e){let be=Ae.get(R.texture),Be=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,be.__webglTexture,K||0,Be)}v=-1},this.readRenderTargetPixels=function(R,G,K,j,V,ae,_e){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){we.bindFramebuffer(X.FRAMEBUFFER,Me);try{let be=R.texture,Be=be.format,Ve=be.type;if(!Ke.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-j&&K>=0&&K<=R.height-V&&X.readPixels(G,K,j,V,Pe.convert(Be),Pe.convert(Ve),ae)}finally{let be=T!==null?Ae.get(T).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,j,V,ae,_e){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){let be=R.texture,Be=be.format,Ve=be.type;if(!Ke.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-j&&K>=0&&K<=R.height-V){we.bindFramebuffer(X.FRAMEBUFFER,Me);let Se=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Se),X.bufferData(X.PIXEL_PACK_BUFFER,ae.byteLength,X.STREAM_READ),X.readPixels(G,K,j,V,Pe.convert(Be),Pe.convert(Ve),0);let et=T!==null?Ae.get(T).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,et);let pt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await l_(X,pt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Se),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ae),X.deleteBuffer(Se),X.deleteSync(pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,K=0){R.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);let j=Math.pow(2,-K),V=Math.floor(R.image.width*j),ae=Math.floor(R.image.height*j),_e=G!==null?G.x:0,Me=G!==null?G.y:0;I.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,_e,Me,V,ae),we.unbindTexture()},this.copyTextureToTexture=function(R,G,K=null,j=null,V=0){R.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,K=null);let ae,_e,Me,be,Be,Ve,Se,et,pt,gt=R.isCompressedTexture?R.mipmaps[V]:R.image;K!==null?(ae=K.max.x-K.min.x,_e=K.max.y-K.min.y,Me=K.isBox3?K.max.z-K.min.z:1,be=K.min.x,Be=K.min.y,Ve=K.isBox3?K.min.z:0):(ae=gt.width,_e=gt.height,Me=gt.depth||1,be=0,Be=0,Ve=0),j!==null?(Se=j.x,et=j.y,pt=j.z):(Se=0,et=0,pt=0);let rn=Pe.convert(G.format),st=Pe.convert(G.type),Te;G.isData3DTexture?(I.setTexture3D(G,0),Te=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(I.setTexture2DArray(G,0),Te=X.TEXTURE_2D_ARRAY):(I.setTexture2D(G,0),Te=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let ri=X.getParameter(X.UNPACK_ROW_LENGTH),rt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ln=X.getParameter(X.UNPACK_SKIP_PIXELS),Ns=X.getParameter(X.UNPACK_SKIP_ROWS),fn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,be),X.pixelStorei(X.UNPACK_SKIP_ROWS,Be),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ve);let Nr=R.isDataArrayTexture||R.isData3DTexture,_t=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Wn=Ae.get(R),Ur=Ae.get(G),bn=Ae.get(Wn.__renderTarget),Pi=Ae.get(Ur.__renderTarget);we.bindFramebuffer(X.READ_FRAMEBUFFER,bn.__webglFramebuffer),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Li=0;Li<Me;Li++)Nr&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ae.get(R).__webglTexture,V,Ve+Li),R.isDepthTexture?(_t&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ae.get(G).__webglTexture,V,pt+Li),X.blitFramebuffer(be,Be,ae,_e,Se,et,ae,_e,X.DEPTH_BUFFER_BIT,X.NEAREST)):_t?X.copyTexSubImage3D(Te,V,Se,et,pt+Li,be,Be,ae,_e):X.copyTexSubImage2D(Te,V,Se,et,pt+Li,be,Be,ae,_e);we.bindFramebuffer(X.READ_FRAMEBUFFER,null),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else _t?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Te,V,Se,et,pt,ae,_e,Me,rn,st,gt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Te,V,Se,et,pt,ae,_e,Me,rn,gt.data):X.texSubImage3D(Te,V,Se,et,pt,ae,_e,Me,rn,st,gt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,V,Se,et,ae,_e,rn,st,gt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,V,Se,et,gt.width,gt.height,rn,gt.data):X.texSubImage2D(X.TEXTURE_2D,V,Se,et,ae,_e,rn,st,gt);X.pixelStorei(X.UNPACK_ROW_LENGTH,ri),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,rt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ln),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ns),X.pixelStorei(X.UNPACK_SKIP_IMAGES,fn),V===0&&G.generateMipmaps&&X.generateMipmap(Te),we.unbindTexture()},this.copyTextureToTexture3D=function(R,G,K=null,j=null,V=0){return R.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,K,j,V)},this.initRenderTarget=function(R){Ae.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){S=0,A=0,T=null,we.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Ua=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ql,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new z,gs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=On(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),i=ct(i,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},so=class extends cn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ks,zr=new z,Zs=new z,js=new z,Js=new De,Hr=new De,Lp=new Fe,ca=new z,Gr=new z,la=new z,Gd=new De,hl=new De,Vd=new De,Oa=class extends bt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _r(t,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new gs(i,3,0,!1)),Ks.setAttribute("uv",new gs(i,2,3,!1))}this.geometry=Ks,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Lp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-js.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ha(ca.set(-.5,-.5,0),js,o,Zs,s,r),ha(Gr.set(.5,-.5,0),js,o,Zs,s,r),ha(la.set(.5,.5,0),js,o,Zs,s,r),Gd.set(0,0),hl.set(1,0),Vd.set(1,1);let a=e.ray.intersectTriangle(ca,Gr,la,!1,zr);if(a===null&&(ha(Gr.set(-.5,.5,0),js,o,Zs,s,r),hl.set(0,1),a=e.ray.intersectTriangle(ca,la,Gr,!1,zr),a===null))return;let c=e.ray.origin.distanceTo(zr);c<e.near||c>e.far||t.push({distance:c,point:zr.clone(),uv:Bi.getInterpolation(zr,ca,Gr,la,Gd,hl,Vd,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(n,e,t,i,s,r){Js.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Hr.x=r*Js.x-s*Js.y,Hr.y=s*Js.x+r*Js.y):Hr.copy(Js),n.copy(e),n.x+=Hr.x,n.y+=Hr.y,n.applyMatrix4(Lp)}var Wd=new z,Xd=new tt,qd=new tt,rM=new z,Yd=new Fe,ua=new z,ul=new _n,Kd=new Fe,fl=new pr,_s=class extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qf,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ua),this.boundingSphere.expandByPoint(ua)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(s),e.ray.intersectsSphere(ul)!==!1&&(Kd.copy(s).invert(),fl.copy(e.ray).applyMatrix4(Kd),!(this.boundingBox!==null&&fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Xd.fromBufferAttribute(s.attributes.skinIndex,e),qd.fromBufferAttribute(s.attributes.skinWeight,e),Wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=qd.getComponent(r);if(o!==0){let a=Xd.getComponent(r);Yd.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(rM.copy(Wd).applyMatrix4(Yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ro=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wi=class extends Ft{constructor(e=null,t=1,i=1,s,r,o,a,c,l=jt,h=jt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zd=new Fe,oM=new Fe,Fa=class n{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:oM;Zd.multiplyMatrices(a,t[r]),Zd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Wi(t,e,e,an,Fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ro),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},xs=class extends ht{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new Fe,jd=new Fe,fa=[],Jd=new An,aM=new Fe,Vr=new Mt,Wr=new _n,ka=class extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,aM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new An),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Jd.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,$s),Wr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(i),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),jd.multiplyMatrices(i,$s),Vr.matrixWorld=jd,Vr.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){let c=fa[o];c.instanceId=r,c.object=this,t.push(c)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(s*this.count),s,this.count,Dh,Fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oo=class extends cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new z,za=new z,$d=new Fe,Xr=new pr,da=new _n,dl=new z,Qd=new z,xr=class extends bt{constructor(e=new Ht,t=new oo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;$d.copy(s).invert(),Xr.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){let d=h.getX(_),M=h.getX(_+1),y=pa(this,e,Xr,c,d,M);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(m),d=pa(this,e,Xr,c,_,p);d&&t.push(d)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=l){let d=pa(this,e,Xr,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){let _=pa(this,e,Xr,c,g-1,m);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pa(n,e,t,i,s,r){let o=n.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),t.distanceSqToSegment(Ba,za,dl,Qd)>i)return;dl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(dl);if(!(c<e.near||c>e.far))return{distance:c,point:Qd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var ep=new z,tp=new z,Ha=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ep.fromBufferAttribute(t,s),tp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ep.distanceTo(tp);e.setAttribute("lineDistance",new en(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ga=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ao=class extends cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},np=new Fe,gh=new pr,ma=new _n,ga=new z,Va=class extends bt{constructor(e=new Ht,t=new ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,e.ray.intersectsSphere(ma)===!1)return;np.copy(s).invert(),gh.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){let p=l.getX(g);ga.fromBufferAttribute(u,p),ip(ga,p,c,s,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)ga.fromBufferAttribute(u,g),ip(ga,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ip(n,e,t,i,s,r,o){let a=gh.distanceSqToPoint(n);if(a<t){let c=new z;gh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wa=class extends Ft{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xa=class n extends Ht{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new z,f=new z,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){let M=[],y=d/i,x=0;d===0&&o===0?x=.5/t:d===i&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(S+x,1-y),M.push(l++)}h.push(M)}for(let d=0;d<i;d++)for(let M=0;M<t;M++){let y=h[d][M+1],x=h[d][M],w=h[d+1][M],S=h[d+1][M+1];(d!==0||o>0)&&m.push(y,x,S),(d!==i-1||c<Math.PI)&&m.push(x,w,S)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(_,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var yr=class extends cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends yr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function _a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function lM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function sp(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function Dp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_h=class extends Xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yf,endingEnd:Yf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kf:r=e,a=2*t-i;break;case Zf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kf:o=e,c=2*i-t;break;case Zf:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,M=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-m)*p+(1.5+m)*_+.5*g,x=m*p-m*_;for(let w=0;w!==a;++w)r[w]=d*o[h+w]+M*o[l+w]+y*o[c+w]+x*o[u+w];return r}},xh=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},yh=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new yh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _h(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case Fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return Fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&cM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,f=u-i,m=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ur;var qi=class extends wn{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=hr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends wn{};qa.prototype.ValueTypeName="color";var xi=class extends wn{};xi.prototype.ValueTypeName="number";var vh=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)zn.slerpFlat(r,0,o,l-a,o,l,c);return r}},yi=class extends wn{InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends wn{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=hr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends wn{};vi.prototype.ValueTypeName="vector";var Ya=class{constructor(e="",t=-1,i=[],s=Ug){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(uM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=lM(c);c=sp(c,1,h),l=sp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(u,f,m,g,_){if(m.length!==0){let p=[],d=[];Dp(m,p,d,g),p.length!==0&&_.push(new u(f,p,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let m={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)m[f[g].morphTargets[_]]=-1;for(let _ in m){let p=[],d=[];for(let M=0;M!==f[g].morphTargets.length;++M){let y=f[g];p.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new xi(".morphTargetInfluence["+_+"]",p,d))}c=m.length*o}else{let m=".bones["+t[u].name+"]";i(vi,m+".position",f,"pos",s),i(yi,m+".quaternion",f,"rot",s),i(vi,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function hM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return qa;case"quaternion":return yi;case"bool":case"boolean":return qi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function uM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=hM(n.type);if(n.times===void 0){let t=[],i=[];Dp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var zi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Mh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},fM=new Mh,Mi=class{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ui={},bh=class extends Error{constructor(e,t){super(e),this.response=t}},co=class extends Mi{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ui[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0,_=0,p=new ReadableStream({start(d){M();function M(){u.read().then(({done:y,value:x})=>{if(y)d.close();else{_+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let S=0,A=h.length;S<A;S++){let T=h[S];T.onProgress&&T.onProgress(w)}d.enqueue(x),M()}},y=>{d.error(y)})}}});return new Response(p)}else throw new bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{zi.add(e,l);let h=ui[e];delete ui[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{let h=ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete ui[e];for(let u=0,f=h.length;u<f;u++){let m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Sh=class extends Mi{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=to("img");function c(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var vr=class extends Mi{constructor(e){super(e)}load(e,t,i,s){let r=new Ft,o=new Sh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},lo=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var pl=new Fe,rp=new z,op=new z,ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(rp),op.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(op),t.updateMatrixWorld(),pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ah=class extends ho{constructor(){super(new Et(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=dr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ka=class extends lo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ah}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ap=new Fe,qr=new z,ml=new z,wh=class extends ho{constructor(){super(new Et(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(qr),ml.copy(i.position),ml.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ml),i.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),ap.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ap)}},Za=class extends lo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Th=class extends ho{constructor(){super(new gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ja=class extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Th}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ki=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ja=class extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=zi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}};var Bh="\\[\\]\\.:\\/",dM=new RegExp("["+Bh+"]","g"),zh="[^"+Bh+"]",pM="[^"+Bh.replace("\\.","")+"]",mM=/((?:WC+[\/:])*)/.source.replace("WC",zh),gM=/(WCOD+)?/.source.replace("WCOD",pM),_M=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),xM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),yM=new RegExp("^"+mM+gM+_M+xM+"$"),vM=["material","materials","bones","map"],Eh=class{constructor(e,t,i){let s=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dM,"")}static parseTrackName(e){let t=yM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);vM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Eh;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gA=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);if(typeof globalThis.Buffer>"u"){let n=e=>{let t=atob(e),i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i};globalThis.Buffer={from(e){return typeof e=="string"?n(e):ArrayBuffer.isView(e)?new Uint8Array(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)):new Uint8Array(e)},alloc(e){return new Uint8Array(e)}}}function Gh(n,e){if(e===vp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===fo||e===Qa){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===fo)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var ic=class extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new lu(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Ki.extractUrlBase(e);o=Ki.resolveURL(l,this.path)}else o=Ki.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new co(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kp){try{o[Ye.KHR_BINARY_GLTF]=new hu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new Yh;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new uu(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new fu;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new du;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function MM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ja(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Za(h),l.distance=u;break;case"spot":l=new Ka(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},Yh=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,i){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ot))}return Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ot)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],kt),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],kt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ot)),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},su=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:xn}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ou=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},au=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cu=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){let m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,f,s.mode,s.filter),m})})}else return null}},lu=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,m=[];for(let g of u){let _=new Fe,p=new z,d=new zn,M=new z(1,1,1),y=new ka(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(p,d,M));for(let x in c)if(x==="_COLOR_0"){let w=c[x];y.instanceColor=new xs(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);bt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}},kp="glTF",mo=12,Np={JSON:1313821514,BIN:5130562},hu=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,mo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-mo,r=new DataView(e,mo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Np.JSON){let l=new Uint8Array(e,mo+o,a);this.content=i.decode(l)}else if(c===Np.BIN){let l=mo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=mu[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=mu[h]||h.toLowerCase();if(o[h]!==void 0){let f=i.accessors[e.attributes[h]],m=br[f.componentType];l[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(m){for(let g in m.attributes){let _=m.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(m)},a,l,kt,f)})})}},fu=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},du=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},sc=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,f=u*u,m=f*u,g=e*l,_=g-l,p=-2*m+3*f,d=m-f,M=1-p,y=d-f+u;for(let x=0;x!==a;x++){let w=o[_+x+a],S=o[_+x+c]*h,A=o[g+x+a],T=o[g+x]*h;r[x]=M*w+y*S+p*A+d*T}return r}},bM=new zn,pu=class extends sc{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return bM.fromArray(r).normalize().toArray(r),r}},Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Up={9728:jt,9729:Rt,9984:Ch,9985:Zr,9986:Qs,9987:Yn},Op={33071:pi,33648:Qr,10497:ps},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SM={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AM(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new yr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tn})),n.DefaultMaterial}function ys(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function bi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function TM(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EM(n){let e,t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=n.indices+":"+Xh(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Xh(n.targets[i]);return e}function Xh(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function gu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RM(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var CM=new Fe,_u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new vr(this.options.manager):this.textureLoader=new Ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new co(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ys(r,a,s),bi(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(Ki.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vh[s.type],a=br[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new ht(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Vh[s.type],l=br[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(m&&m!==u){let d=Math.floor(f/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,y=t.cache.get(M);y||(_=new l(a,d*m,s.count*m/h),y=new _r(_,m/h),t.cache.add(M,y)),p=new gs(y,c,f%m/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),p=new ht(_,c,g);if(s.sparse!==void 0){let d=Vh.SCALAR,M=br[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new M(o[1],y,s.sparse.count*d),S=new l(o[2],x,s.sparse.count*c);a!==null&&(p=new ht(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,T=w.length;A<T;A++){let v=w[A];if(p.setX(v,S[A*c]),c>=2&&p.setY(v,S[A*c+1]),c>=3&&p.setZ(v,S[A*c+2]),c>=4&&p.setW(v,S[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Up[f.magFilter]||Rt,h.minFilter=Up[f.minFilter]||Yn,h.wrapS=Op[f.wrapS]||ps,h.wrapT=Op[f.wrapT]||ps,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let p=new Ft(_);p.needsUpdate=!0,f(p)}),t.load(Ki.resolveURL(u,r.path),g,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),bi(u,o),u.userData.mimeType=o.mimeType||RM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ao,cn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new oo,cn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return yr}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=s[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],kt),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=on);let h=r.alphaMode||Wh.OPAQUE;if(h===Wh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Zn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zn){let u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&o!==Zn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ot)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ys(s,u,r),u})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Fp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=EM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Fp(new Ht,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?AM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){let _=h[m],p=o[m],d,M=l[m];if(p.mode===Tn.TRIANGLES||p.mode===Tn.TRIANGLE_STRIP||p.mode===Tn.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new _s(_,M):new Mt(_,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===Tn.TRIANGLE_STRIP?d.geometry=Gh(d.geometry,Qa):p.mode===Tn.TRIANGLE_FAN&&(d.geometry=Gh(d.geometry,fo));else if(p.mode===Tn.LINES)d=new Ha(_,M);else if(p.mode===Tn.LINE_STRIP)d=new xr(_,M);else if(p.mode===Tn.LINE_LOOP)d=new Ga(_,M);else if(p.mode===Tn.POINTS)d=new Va(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&TM(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),bi(d,r),p.extensions&&ys(s,d,p),t.assignFinalMaterial(d),u.push(d)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return r.extensions&&ys(s,u[0],r),u[0];let f=new gn;r.extensions&&ys(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,g=u.length;m<g;m++)f.add(u[m]);return f})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Et(po.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),bi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Fe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fa(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let m=s.channels[u],g=s.samplers[m.sampler],_=m.target,p=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],m=u[1],g=u[2],_=u[3],p=u[4],d=[];for(let M=0,y=f.length;M<y;M++){let x=f[M],w=m[M],S=g[M],A=_[M],T=p[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let v=i._createAnimationTracks(x,w,S,A,T);if(v)for(let b=0;b<v.length;b++)d.push(v[b])}return new Ya(r,void 0,d)})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,CM)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ro:l.length>1?h=new gn:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),bi(h,r),r.extensions&&ys(i,h,r),r.matrix!==void 0){let u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new gn;i.name&&(r.name=s.createUniqueName(i.name)),bi(r,i),i.extensions&&ys(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[f,m]of s.associations)(f instanceof cn||f instanceof Ft)&&u.set(f,m);return h.traverse(f=>{let m=s.associations.get(f);m!=null&&u.set(f,m)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Zi[r.path]===Zi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Zi[r.path]){case Zi.weights:l=xi;break;case Zi.rotation:l=yi;break;case Zi.position:case Zi.scale:l=vi;break;default:switch(i.itemSize){case 1:l=xi;break;case 2:case 3:default:l=vi;break}break}let h=s.interpolation!==void 0?SM[s.interpolation]:ur,u=this._getArrayFromAccessor(i);for(let f=0,m=c.length;f<m;f++){let g=new l(c[f]+"."+Zi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=gu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof yi?pu:sc;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function IM(n,e,t){let i=e.attributes,s=new An;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new z(c[0],c[1],c[2]),new z(l[0],l[1],l[2])),a.normalized){let h=gu(br[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new z,c=new z;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){let _=gu(br[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new _n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Fp(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=mu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),bi(n,e),IM(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wM(n,e.targets,t):n})}var PM=["","2twists","afro","brother","buzz","cornrow","curves","dai","dreadfull","dreadlong","fall","hae","hightop","hue","jasmine","jeremy","kage","kai","kasa","longhair","mamii","mao","may","meku","mob","momhair","oody","ponytail","ps68","shrimpy","spiky","swirls","swirlyhair","teto","topfade","topknot","twisttie","van","veritas","wynd","yumee","butchwitch","chihiro","gwenn","hopefulwitch","ko","maka","marcy","megan","powder","ruri","sagaraen","hairf5","hairf6","hairf7","hairf8","hairf10","hairf11","hairf12","hairf13","hairf14","hairf15","hairf17","hairf18","hairf19","hairf20","hairtf16","hairm1","hairm6","hairm7","hairm8","hairm9","hairm10","hairm11","hairm12","hairm13","hairm14","hairm15","hairm16","hairm17","hairm18","hairm19","hairm20","halfdread","coilfro","messydreads"],LM=["","fullbeard","goatee","goatee_stache","stache","BigFullBeard","f06","lashstache"],DM=["circle","dashes","band","freckles","aublush","blushwhisk","swirl"],NM=[""],UM=["achromatic","adventurebackpack","adventurehat","antennae","aubade","backscythe","bandana","batwings","beanie","bow","bunnyears","bunnyheadband","cape","catears","crown","devilhorns","eyepatch","facemask","halo","headband","headphones","headscrew","horns","key","knight","mouseear","nose_bandage","punk_glasses","roundglasses","scarf","sleekvisor","spinny_hat","sprout","square_glasses","swirlglasses","visor","wings","witch_hat","tophat","partyhat","bunnybag","butterflywings","curltail","straighttail","froghat","fryingpothat","trafficconehat","jesterhat","snailhat","applebeanie","baseballcap","blockhat","buckethat","candyhat","catbaseballcap","chefhat","cloverhat","coldcap","cowboyhat","frogcap","jellohat","orangebeanie","rainbowtophat","royalcrown","strawhat","watermellon","duckbeak","mlgglasses","angryeffect","astronauthelmet","fishbowl","sunflowerhead"],OM=["head","head2","head3","face","face2","face3","extra","extra2","extra3"],FM=["px","py","pz","rx","ry","rz","sc","sx","sy","sz"],kM={hair:PM,fh:LM,blk:DM,ear:NM},Bp=["000000","ffffff","17171c","4d8cf2","618fd6","f58585","211a14","47301c","7a5226","b88c42","dec98c","8c170f","595961","e0e0e6","3d59a6","8c4099","d973a6","338c66","fffaf7","fcf2e6","faebd6","ffdeba","f5cca1","e6b585","cc996b","a87852","855c3d","66452e","473021","2e1f17","edebe3","d1d1d6","40424d","4d73cc","bf4742","528c61","e0bf59","8c61a6","33363d","5c6b85","9ec7e0","6b4d42","121217","f7f7ff"],BM="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-",zp=16,zM=64,HM=4096,Hn="BOOL",Bt="INT",xu="INTN",bu="UNIT",nn="COLOR",go="NAME",yu="COLORS",Hp="GRADS",Gp="KIT",Su="GEAR",Au="ACC",Re=(n,e,t,i=0,s=0)=>({k:n,t:e,d:t,w:i,r:s}),ze=n=>Re(n,bu,.5,0),rc=[Re("sl",Bt,0,3),Re("skl",Bt,0,2),Re("gso",Hn,!0),Re("sk",nn,"17171c"),Re("gkp",Hn,!0),Re("kps",Bt,0,2),Re("kpsl",Bt,0,2),Re("kpw",Bt,0,2),Re("kpm",Hn,!0),Re("kp",nn,"17171c"),Re("kpl",nn,"17171c"),Re("sh",nn,"17171c"),Re("shm",Hn,!0,0,1),Re("shl",nn,"17171c",0,1)],vu=[[Re("face",Bt,0,2),Re("skin",Bt,0,4),Re("skx",Hn,!1),Re("skc",nn,"ffdeba"),Re("hs",Bt,0,3),Re("ear",go,"",2),Re("lh",Hn,!1),[ze("h"),ze("w")]],[Re("hair",go,"2twists",6),Re("hc",Bt,0,4),Re("hcol",nn,"211a14"),Re("hfl",Hn,!1),Re("hcols",yu,[]),Re("hgrad",Hp,[])],[Re("es",Bt,0,3),Re("eyc",nn,"000000"),Re("elc",nn,"000000"),[ze("ez"),ze("ew"),ze("eyz"),ze("eh"),ze("ex"),ze("er"),ze("epx")]],[Re("bs",xu,0,3),Re("bwc",nn,"000000"),[ze("bh"),ze("br"),ze("bsp"),ze("bsz"),ze("bwid"),ze("bht"),ze("bpx")]],[Re("ms",Bt,0,3),[ze("mz"),ze("mw"),ze("my"),ze("mh"),ze("mr"),ze("mpx")]],[Re("ns",xu,0,3),Re("nfl",Hn,!1),[ze("nz"),ze("nw"),ze("ny"),ze("nh"),ze("nx")]],[Re("bl",Hn,!1),Re("blk",go,"circle",4),Re("blsh",Bt,0,3),Re("blc",nn,"f58585"),[ze("bz"),ze("bw"),ze("bhy"),ze("bx"),ze("bo"),Re("blr",bu,.5,0,3)]],[Re("fh",go,"",3),Re("fhcols",yu,[]),[ze("fpx"),ze("fpy"),ze("fpz"),ze("frx"),ze("fry"),ze("frz"),ze("fsc"),ze("fsx"),ze("fsy"),ze("fsz")]],[Re("vo",Bt,2,3),Re("vpk",Bt,1,2),[ze("vp"),ze("vs")]],[Re("num",Bt,1,7),Re("kh",Gp,["4d8cf2","17171c","ffffff","ffffff"]),Re("kst",Bt,0,3,2)],rc,[Re("gt",nn,"edebe3"),Re("gs",nn,"618fd6"),Re("gsh",Bt,0,3),Re("hdc",nn,"4d8cf2"),Re("hdx",Hn,!1),Re("gg",Su,null)],[Re("acc",Au,null)]],wu=n=>Array.isArray(n),Tu=n=>n.flatMap(e=>wu(e)?Tu(e):[e]);function Eu(n,e){let t=[];for(let i of n)if(wu(i)){let s=Eu(i,e);s.length&&t.push(s)}else i.r<=e&&t.push(i);return t}var GM=n=>Array.isArray(n)?n.slice():n,Vp=()=>{let n={};for(let e of rc)n[e.k]=e.d;return n};function VM(){let n={};for(let e of Tu(vu))n[e.k]=e.t===Su?Vp():e.t===Au?{}:GM(e.d);return n}var Mu=class{constructor(e){this.b=e,this.pos=0,this.bad=!1,this.seen=[],this.rev=0}take(e){if(this.pos+e>this.b.length*8)return this.bad=!0,this.pos=this.b.length*8,0;let t=0;for(let i=0;i<e;i++)t=t*2+(this.b[this.pos>>3]>>7-(this.pos&7)&1),this.pos++;return t}flag(){return this.take(1)===1}takeU(e){let t=this.take(e);if(t<(1<<e)-1)return t;let i=0;for(;!this.bad;){let s=this.flag();if(t+=this.take(4)*Math.pow(2,i),i+=4,!s)break;i>=32&&(this.bad=!0)}return t}},WM=n=>{let e=0;for(;1<<e<n;)e++;return e};function oc(n){if(!n.flag()){let t=n.take(24).toString(16).padStart(6,"0");return n.seen.push(t),t}if(!n.flag()){let t=n.seen.length,i=n.take(WM(t));return i>=t?(n.bad=!0,"000000"):n.seen[i]}let e=n.take(6);return e>=Bp.length?(n.bad=!0,"000000"):Bp[e]}function Wp(n){let e=n.takeU(4);if(e>zp)return n.bad=!0,[];let t=[];for(let i=0;i<e;i++)t.push(n.flag()?oc(n):"");return t}function Xp(n){let e=n.takeU(4);if(e>zp)return n.bad=!0,[];let t=[];for(let i=0;i<e;i++){let s={};if(n.flag()){n.flag()&&(s.on=n.flag()),n.flag()&&(s.b=oc(n));for(let r of["fs","fe"])n.flag()&&(s[r]=Math.min(n.take(7),100)*.01)}t.push(s)}return t}function XM(n,e){let t=[],i=n.flag()?4:3;for(let s=0;s<i;s++)t.push(n.flag()?e[s]:oc(n));return t}function qp(n){let e=n.flag(),t=n.takeU(e?6:5);if(t>zM)return n.bad=!0,"";let i="";for(let s=0;s<t;s++)if(e){let r=n.take(7);if(r<32)return n.bad=!0,"";i+=String.fromCharCode(r)}else i+=BM[n.take(6)];return i}function Yp(n,e,t){let i=n.takeU(t);return i===0?qp(n):i-1<e.length?e[i-1]:(n.bad=!0,"")}function Kp(n){let e=n.takeU(8);if(e>HM||n.bad)return n.bad=!0,null;let t="";for(let i=0;i<e;i++){let s=n.take(8);s>=128&&(n.bad=!0),t+=String.fromCharCode(s)}if(n.bad)return null;try{return JSON.parse(t)}catch{return null}}function qM(n){let e={},t=Yp(n,UM,6);if(t!==""&&(e.id=t),n.flag())for(let i of FM)n.flag()&&(e[i]=Math.min(n.take(6),50)*.02);if(n.flag()&&(e.fl=!0),n.flag()&&(e.cols=Wp(n)),n.flag()&&(e.grads=Xp(n)),n.flag()){let i=Kp(n);if(!i||typeof i!="object"||Array.isArray(i))return n.bad=!0,e;for(let s of Object.keys(i))s in e||(e[s]=i[s])}return e}function YM(n){let e=[];for(let i of OM)n.flag()&&e.push(i);if(n.flag()){let i=n.takeU(2);if(i>4)return n.bad=!0,{};for(let s=0;s<i;s++)e.push(qp(n))}let t={};for(let i of e){if(n.bad)return{};t[i]=qM(n)}return t}function KM(n,e){let t=Vp();if(n.flag())for(let i of rc)t[i.k]=i.k in e?e[i.k]:i.d;for(let i of Eu(rc,n.rev))n.flag()&&(t[i.k]=Zp(n,i,t[i.k],e));return t}function Zp(n,e,t,i){switch(e.t){case Hn:return!t;case Bt:return n.takeU(e.w);case xu:return n.takeU(e.w)-1;case bu:return Math.min(n.take(6),50)*.02;case nn:return oc(n);case go:return Yp(n,kM[e.k],e.w);case yu:return Wp(n);case Hp:return Xp(n);case Gp:return XM(n,e.d);case Su:return KM(n,i);case Au:return YM(n)}return t}function jp(n,e,t){if(!(!e.length||!n.flag()))for(let i of e)wu(i)?jp(n,i,t):(e.length===1||n.flag())&&(t[i.k]=Zp(n,i,i.d,t))}function ZM(n){let e=new Mu(n),t=e.takeU(2);if(e.bad||t>3)return null;e.rev=t;let i=VM();for(let s of vu)if(jp(e,Eu(s,t),i),e.bad)return null;for(let s of Tu(vu))s.r>t&&(delete i[s.k],i.gg&&typeof i.gg=="object"&&delete i.gg[s.k]);if(e.flag()){let s=Kp(e);if(!s||typeof s!="object"||Array.isArray(s))return null;for(let r of Object.keys(s))r==="gg"&&typeof s[r]=="object"&&typeof i.gg=="object"?Object.assign(i.gg,s[r]):r in i||(i[r]=s[r])}return e.bad?null:i}var jM=(()=>{let n=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t>>>0}return n})();function JM(n){let e=4294967295;for(let t=0;t<n.length;t++)e=jM[(e^n[t])&255]^e>>>8;return(e^4294967295)>>>0}var $M=/^[A-Za-z0-9_-]*/;function QM(n){if(n.length<4||n.length%4===1)return null;let e=n.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-n.length%4)%4);if(typeof Buffer<"u")return new Uint8Array(Buffer.from(e,"base64"));let t=atob(e),i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}function Jp(n){let e=n.toUpperCase().indexOf("JV2:");if(e===-1)return null;let t=$M.exec(n.slice(e+4,e+4+16385))[0];if(t.length>16384)return null;let i=QM(t);if(!i||i.length<3)return null;let s=i.subarray(2);return(i[0]<<8|i[1])!==(JM(s)&65535)?null:ZM(s)}var ji={bodymesh:{bsn:["heavy","slim"],slots:["skin"]},cleetmesh_l:{bsn:[],slots:["shoes"]},cleetmesh_r:{bsn:[],slots:["shoes"]},earsmesh:{bsn:["Pointy","None"],slots:["skin"]},headmesh:{bsn:["sharp","square","round"],slots:["skin"]},hoodmesh:{bsn:[],slots:["hoodie"]},jerseymesh:{bsn:["heavy","slim","tanktop","sports bra","shirt_lift","shirt_flare","shirt_billow_l","shirt_billow_r"],slots:["accent","jerseycollar","jerseyfront","jerseyback"]},jerseymesh_001:{bsn:["heavy","slim","shirt_lift","shirt_flare","shirt_billow_l","shirt_billow_r"],slots:["practice_jersey","practice_jersey_accent"]},kneepad_l:{bsn:[],slots:["kneepad"]},kneepad_r:{bsn:[],slots:["kneepad"]},kneepad_short_l:{bsn:[],slots:["kneepad"]},kneepad_short_r:{bsn:[],slots:["kneepad"]},numbermesh:{bsn:["heavy","slim","shirt_lift","shirt_flare","shirt_billow_l","shirt_billow_r","pinnyoffset"],slots:["jersey"]},numbermesh_f:{bsn:["heavy","slim","shirt_lift","shirt_flare","shirt_billow_l","shirt_billow_r","pinnyoffset"],slots:["jersey"]},shortsmesh:{bsn:["heavy","short","supershort","slim","long"],slots:["shorts","pants_accent","pantshem","pantswaist"]},sockmesh:{bsn:["Short"],slots:["socks"]}},vs={baseScale:.460608042497914,handScale:.801660239696503,handRadius:.112232429624666,handRest:[.398553818464279,.636316061019897,-123544708685586e-21],splits:[{src:"cleetmesh",l:"cleetmesh_l",r:"cleetmesh_r",rule:"triangulo vai para l se a media x dos 3 vertices > 0, senao r; src fica invisivel"},{src:"kneepad_short",l:"kneepad_short_l",r:"kneepad_short_r",rule:"idem"}]};var Ue=Math.fround,qe=(n,e,t,i=1)=>[Ue(n),Ue(e),Ue(t),Ue(i)],lc=qe(1,1,1),e2=qe(0,0,0),hc=qe(.07,.07,.09),cc=qe(.97,.97,1),Ms=qe(.09,.09,.11),lm=(n,e)=>n[0]===e[0]&&n[1]===e[1]&&n[2]===e[2]&&n[3]===e[3];function yn(n){if(typeof n!="string")return null;let e=n.startsWith("#")?n.slice(1):n;if(!/^[0-9a-fA-F]+$/.test(e)||![3,4,6,8].includes(e.length))return null;e.length<=4&&(e=e.split("").map(i=>i+i).join(""));let t=i=>parseInt(e.slice(i,i+2),16);return qe(t(0)/255,t(2)/255,t(4)/255,e.length===8?t(6)/255:1)}var Ru=n=>Math.min(255,Math.max(0,Math.round(Ue(n*255)))),jn=n=>qe(Ru(n[0])/255,Ru(n[1])/255,Ru(n[2])/255),Du=[qe(1,.98,.97),qe(.99,.95,.9),qe(.98,.92,.84),qe(1,.87,.73),qe(.96,.8,.63),qe(.9,.71,.52),qe(.8,.6,.42),qe(.66,.47,.32),qe(.52,.36,.24),qe(.4,.27,.18),qe(.28,.19,.13),qe(.18,.12,.09)],uc=[["accent","pants_accent"],["jerseyfront"],["jerseyback"],["jerseycollar","pantswaist"],["jerseycollar","pantshem","pantswaist"],["accent","jerseycollar","pants_accent","pantshem"],["jerseyfront","pantshem"],[]],$p=["accent","jerseyfront","jerseyback","jerseycollar"],t2=["pants_accent","pantshem","pantswaist"],n2=1.6,i2=30,s2=1.25,Cu=[qe(.96,.96,.95),qe(.1,.1,.12),qe(.98,.78,.18),qe(.18,.32,.85),qe(.85,.16,.18),qe(.12,.6,.34),qe(.95,.48,.1),qe(.52,.24,.72)],Qp=[[.152286,1.052583,-.204868],[.114503,.786281,.099216],[-.003882,-.048116,1.051998]],em=[[.367322,.860646,-.227968],[.280085,.672501,.047413],[-.01182,.04294,.968881]],Jn=(n,e,t)=>Math.min(t,Math.max(e,n)),xo=Jn,Nu=n=>uc[Jn(n,0,uc.length-1)],Si=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4),Iu=n=>(n=xo(n,0,1),n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055),tm=n=>.2126*Si(n[0])+.7152*Si(n[1])+.0722*Si(n[2]);function hm(n,e){let t=tm(n),i=tm(e);return(Math.max(t,i)+.05)/(Math.min(t,i)+.05)}var Pu=n=>n>.008856?Math.pow(n,1/3):7.787*n+16/116;function nm(n){let e=Si(n[0]),t=Si(n[1]),i=Si(n[2]),s=(.4124*e+.3576*t+.1805*i)/.95047,r=.2126*e+.7152*t+.0722*i,o=(.0193*e+.1192*t+.9505*i)/1.08883,a=Pu(s),c=Pu(r),l=Pu(o);return[Ue(116*c-16),Ue(500*(a-c)),Ue(200*(c-l))]}function Lu(n,e){let t=nm(n),i=nm(e),s=Ue(t[0]-i[0]),r=Ue(t[1]-i[1]),o=Ue(t[2]-i[2]);return Ue(Math.sqrt(Ue(Ue(Ue(s*s)+Ue(r*r))+Ue(o*o))))}function ac(n,e){let t=Si(n[0]),i=Si(n[1]),s=Si(n[2]);return qe(Iu(e[0][0]*t+e[0][1]*i+e[0][2]*s),Iu(e[1][0]*t+e[1][1]*i+e[1][2]*s),Iu(e[2][0]*t+e[2][1]*i+e[2][2]*s))}function r2(n,e){let t=Lu(n,e);return t=Math.min(t,Lu(ac(n,Qp),ac(e,Qp))),t=Math.min(t,Lu(ac(n,em),ac(e,em))),t}function bs(n){return n[0]*.299+n[1]*.587+n[2]*.114>.5?hc:cc}var um=(n,e)=>hm(n,e)>=n2,Fu=n=>n.length<5?-1:Jn(n[4][0]*255|0,0,uc.length-1);function o2(n,e){let t=Nu(e),i=[];for(let s of["jerseyfront","jerseyback"]){let r=n.length>=3&&t.includes(s)?n[2]:n[0];i.some(o=>lm(o,r))||i.push(r)}return i}function a2(n,e=-1){if(n.length<1)return cc;e<0&&(e=Math.max(Fu(n),0));let t=o2(n,e);if(n.length>=4&&t.every(s=>um(s,n[3])))return n[3];if(t.length===1)return bs(t[0]);let i=s=>Math.min(...t.map(r=>hm(r,s)));return i(hc)>=i(cc)?hc:cc}function yo(n){if(n.length<3)return[qe(.3,.55,.95),Ms,lc,lc];let e=[n[0],n[1],n[2]];return e.push(n.length>=4?n[3]:bs(n[0])),Fu(n)>=0&&e.push(n[4]),e}function c2(n){let e=n.slice();return e.length<4&&(e=yo(e)),um(e[0],e[3])||(e[3]=bs(e[0])),e}function l2(n){let[e,t,i]=n,s=Math.min(e,t,i),r=Math.max(e,t,i),o=Ue(r-s),a=0;return o!==0&&(e===r?a=Ue(Ue(t-i)/o):t===r?a=Ue(2+Ue(Ue(i-e)/o)):a=Ue(4+Ue(Ue(e-t)/o)),a=Ue(a/6),a<0&&(a=Ue(a+1))),[a,r===0?0:Ue(Ue(r-s)/r),r]}function h2(n,e,t){if(n=Ue(n),e=Ue(e),t=Ue(t),e===0)return qe(t,t,t);n=Ue(n*6),n=Ue(n%6);let i=Math.floor(n),s=Ue(n-i),r=Ue(t*Ue(1-e)),o=Ue(t*Ue(1-Ue(e*s))),a=Ue(t*Ue(1-Ue(e*Ue(1-s))));switch(i){case 0:return qe(t,a,r);case 1:return qe(o,t,r);case 2:return qe(r,t,a);case 3:return qe(r,o,t);case 4:return qe(a,r,t);default:return qe(t,r,o)}}var u2=(n,e)=>{let t=n%e;return t<0?t+e:t};function f2(n,e){let t=yo(n),i=[[t[1],t[0],t[2],t[3]],[t[2],t[1],t[0],t[3]],[t[3],t[1],t[2],t[0]]],[s,r,o]=l2(t[0]);for(let l of[.5,.33,.67])i.push([h2(u2(s+l,1),Math.max(r,.55),Math.max(o,.6)),t[1],t[2],t[3]]);i.push([lm(bs(e[0]),hc)?Cu[1]:Cu[0],t[1],t[2],t[3]]);for(let l of Cu)i.push([l,t[1],t[2],t[3]]);let a=[],c=-1;for(let l of i){let h=c2(l),u=r2(h[0],e[0]);if(u>=i2*s2){a=h;break}u>c&&(c=u,a=h)}return a}var fc=n=>typeof n=="number"&&Number.isFinite(n),im=(n,e,t)=>fc(n[e])?xo(n[e],0,1):t,Uu={skin:15,sl:3,skl:1,kps:1,kpw:2,kpsl:1,num:99,gsh:15,hs:3,kst:7},d2=["skx","gso","gkp","kpm","shm","hdx"],p2=["skc","sk","kp","kpl","sh","shl","gt","gs","hdc"],m2=["sl","skl","kps","kpw","kpsl"],g2=["gso","gkp","kpm","shm"],_2=["sk","kp","kpl","sh","shl"],x2=(n,e)=>typeof n=="string"&&n.length>0&&n.length<=e&&/^[0-9A-Za-z _.-]+$/.test(n);function y2(n){let e={};if(!n||typeof n!="object"||Array.isArray(n))return e;for(let t of m2)t in n&&fc(n[t])&&(e[t]=Jn(Math.trunc(n[t]),0,Uu[t]));for(let t of g2)typeof n[t]=="boolean"&&(e[t]=n[t]);for(let t of _2)yn(n[t])&&(e[t]=n[t]);return e}function v2(n){let e={};for(let t in Uu)t in n&&fc(n[t])&&(e[t]=Jn(Math.trunc(n[t]),0,Uu[t]));x2(n.ear,40)&&(e.ear=n.ear);for(let t of d2)typeof n[t]=="boolean"&&(e[t]=n[t]);for(let t of["h","w"])fc(n[t])&&(e[t]=xo(n[t],0,1));for(let t of p2)yn(n[t])&&(e[t]=n[t]);return Array.isArray(n.kh)&&(n.kh.length===3||n.kh.length===4)&&n.kh.every(t=>yn(t))&&(e.kh=n.kh.slice()),"gg"in n&&(e.gg=y2(n.gg)),e}var M2=()=>({shortsLen:0,socksLen:0,wearSocks:!0,socks:Ms,wearKneepads:!0,kneepadStyle:0,kneepadStyleL:0,kneepadSide:0,kneepadMatch:!0,kneepad:Ms,kneepadL:Ms,shoeColor:Ms,shoeMatch:!0,shoeL:Ms});function sm(n,e){let t=e?{...e}:M2();return"sl"in n&&(t.shortsLen=n.sl),"skl"in n&&(t.socksLen=n.skl),"gso"in n&&(t.wearSocks=n.gso),"sk"in n&&(t.socks=yn(n.sk)),"gkp"in n&&(t.wearKneepads=n.gkp),"kps"in n&&(t.kneepadStyle=n.kps),"kpw"in n&&(t.kneepadSide=Jn(n.kpw,0,2)),"kpm"in n&&(t.kneepadMatch=n.kpm),"kp"in n&&(t.kneepad=yn(n.kp)),"sh"in n&&(t.shoeColor=yn(n.sh)),"kpsl"in n?t.kneepadStyleL=n.kpsl:e||(t.kneepadStyleL=t.kneepadStyle),"kpl"in n?t.kneepadL=yn(n.kpl):e||(t.kneepadL=t.kneepad),"shm"in n&&(t.shoeMatch=n.shm),"shl"in n?t.shoeL=yn(n.shl):("sh"in n||!e)&&(t.shoeL=t.shoeColor),t}var rm=n=>({...n,socks:jn(n.socks),kneepad:jn(n.kneepad),kneepadL:jn(n.kneepadL),shoeColor:jn(n.shoeColor),shoeL:jn(n.shoeL)});function b2(n){let e=v2(n),t={skin:e.skin??0,skinCustom:e.skx===!0,skinCol:e.skc?yn(e.skc):Du[3],height:im(e,"h",.5),weight:im(e,"w",.5),headShape:e.hs??0,ear:e.ear??"",number:e.num??1,captainKit:[qe(.3,.55,.95),Ms,lc,lc],kitStyle:Jn(e.kst??0,0,uc.length-1),gymTee:yn(e.gt??"ecebe3"),gymShorts:yn(e.gs??"618fd6"),gymShirt:e.gsh??0,hoodieColor:yn(e.hdc??"4d8cf2"),hoodieCustom:e.hdx===!0,casual:!1,wearPinny:!1,pinnyColor:qe(.55,.85,.72)};return t.uniformGear=sm(e),t.gymGear=sm(e.gg??{},t.uniformGear),e.kh&&(t.captainKit=yo(e.kh.map(yn))),t}function Ou(n){return{...n,skinCol:jn(n.skinCol),captainKit:n.captainKit.slice(0,4).map(jn),gymTee:jn(n.gymTee),gymShorts:jn(n.gymShorts),hoodieColor:jn(n.hoodieColor),uniformGear:rm(n.uniformGear),gymGear:rm(n.gymGear),casual:!1,wearPinny:!1}}var om=n=>({...Ou(n),casual:!0}),am=n=>[n.gymTee,n.gymShorts,n.gymTee],cm=n=>n.skinCustom?n.skinCol:Du[Jn(n.skin,0,Du.length-1)],S2=n=>n.casual?n.gymGear:n.uniformGear;function A2(n,e){switch(e){case 1:{let t=Ou(n);return{cfg:t,kit:f2(t.captainKit,t.captainKit)}}case 2:{let t=om(n);return{cfg:t,kit:am(t)}}case 3:{let t=yo(n.captainKit),i=om(n);return i.wearPinny=!0,i.pinnyColor=t[0],{cfg:i,kit:am(i)}}default:{let t=Ou(n);return{cfg:t,kit:yo(t.captainKit)}}}}var w2={head:["","sharp","square","round"],shorts:["","short","long","supershort"],socks:["Short",""],shirt:["","tanktop","sports bra"]},T2=.06,E2=["shirt_lift","shirt_flare","shirt_drop","shirt_billow_l","shirt_billow_r"],R2=["heavy","slim","Hat_TopCovered","Hat_FullCovered","pinnyoffset",...E2];var _o=n=>n?[n[0],n[1],n[2]]:null;function C2(n,e,t){if(n)return Math.min(.6+.9*t+.3*e,1.6);let i=1-(1-e)*(1-e);return Math.min(1.2+.65*t+1.2*i,2.6)}function I2(n,e){let t=Object.keys(ji),i={};for(let O of t)for(let D of ji[O].slots)D in i||(i[D]={albedo:null,hidden:0});let s={},r=null,o=null,a=0,c=(O,D)=>{i[O]&&(i[O].albedo=D);let q=O==="jersey"?$p:O==="shorts"?t2:[],Z=Nu(a);for(let re of q)!Z.includes(re)&&i[re]&&(i[re].albedo=D)},l=(O,D)=>{i[O]&&(i[O].hidden=D?1:0),s[O]=!!D},h=S2(n);c("skin",cm(n)),c("kneepad",h.kneepad),c("socks",h.socks),c("shoes",h.shoeColor),l("kneepad",!h.wearKneepads),l("socks",!h.wearSocks);let u=!1;l("shoes",u),i.shoes&&ji.cleetmesh_l&&(o={albedo:h.shoeMatch?h.shoeColor:h.shoeL,hidden:u?1:0}),u&&l("socks",!0);let f=Fu(e);if(f<0&&(f=n.kitStyle),n.casual&&(f=0),e.length>=3){a=f,c("jersey",e[0]),c("shorts",e[1]);let O=n.casual?e[1]:e[2];for(let D of Nu(f))c(D,$p.includes(D)?e[2]:O)}let m=!n.casual||n.wearPinny,g;n.wearPinny?g=bs(n.pinnyColor):e.length>=3?g=a2(e,f):g=bs(e2);let _=m?n.number:-1,p={value:_,text:_<0?"":String(Jn(_,0,99)),ink:_o(g),flipU:!1,lift:.004};l("practice_jersey",!n.wearPinny),l("practice_jersey_accent",!n.wearPinny),n.wearPinny&&(c("practice_jersey",n.pinnyColor),c("practice_jersey_accent",bs(n.pinnyColor)));let d={};for(let O of t){d[O]={};for(let D of ji[O].bsn)d[O][D]=0}let M=xo((n.weight-.5)*2,0,1),y=xo((.5-n.weight)*2,0,1);for(let O of t)"pinnyoffset"in d[O]&&(d[O].pinnyoffset=n.wearPinny?1:0);if(n.wearPinny)for(let O of t){let D=O.toLowerCase();D.startsWith("numbermesh")&&"pinnyoffset"in d[O]&&(d[O].pinnyoffset=C2(D.endsWith("_f"),M,y))}let x=1+(n.height-.5)*2*T2;for(let O of t)"heavy"in d[O]&&(d[O].heavy=M),"slim"in d[O]&&(d[O].slim=y);let w=(O,D)=>{let q=w2[O],Z=Jn(D,0,q.length-1);for(let re of t)q.forEach((me,ve)=>{me!==""&&me in d[re]&&(d[re][me]=ve===Z?1:0)})},S=[];for(let O of t)if(/^ear/i.test(O))for(let D of ji[O].bsn)!R2.includes(D)&&!S.includes(D)&&S.push(D);for(let O of t)for(let D of S)D in d[O]&&(d[O][D]=D===n.ear?1:0);w("head",n.headShape),w("shorts",h.shortsLen),w("socks",h.socksLen);let A=n.casual&&n.gymShirt===3,T=n.casual?n.gymShirt:0;A&&(T=0),w("shirt",T);let v=n.casual&&e.length>=3?e[0]:n.gymTee;c("hoodie",n.hoodieCustom?n.hoodieColor:v);let b={};for(let O of t)b[O]=!0;let C={short:{},long:{}};for(let O of t){if(!ji[O].slots.includes("kneepad"))continue;let D=O.toLowerCase(),q=D.endsWith("_l")?"l":D.endsWith("_r")?"r":"",Z=D.includes("short")?"short":D.includes("long")||q!==""?"long":"short";C[Z][q||"both"]=O}let L=Object.keys(C.long).length>0,P=h.kneepadStyle===1&&L?"long":"short",U=h.kneepadStyleL===1&&L?"long":"short";for(let O of["short","long"])for(let D of Object.keys(C[O])){let q=h.kneepadSide===0||D==="both"||h.kneepadSide===1&&D==="r"||h.kneepadSide===2&&D==="l",Z=D==="l"?U:P;b[C[O][D]]=h.wearKneepads&&O===Z&&q}b.hoodmesh!==void 0&&(b.hoodmesh=A),i.kneepad&&(r={albedo:h.kneepadMatch?h.kneepad:h.kneepadL,hidden:h.wearKneepads?0:1},c("kneepad",h.kneepad));let k={};for(let O of t){let D=ji[O].slots.map(q=>{if(/^numbermesh/i.test(O)&&q==="jersey")return{slot:q,number:!0,outlineHidden:!1};let Z=i[q];return q==="kneepad"&&/_l$/i.test(O)&&r&&(Z=r),q==="shoes"&&O==="cleetmesh_l"&&o&&(Z=o),{slot:q,albedo:_o(Z.albedo),hidden:Z.hidden,outlineHidden:!!s[q]}});k[O]={visible:b[O],blend:d[O],surfaces:D}}let F=cm(n);return{heightMul:x,sceneScale:Ue(Ue(vs.baseScale)*x),baseScale:vs.baseScale,heavy:M,slim:y,kitStyle:f,meshes:k,number:p,skin:_o(F),hands:{albedo:_o(F),scale:vs.handScale,radius:vs.handRadius,rest:vs.handRest,sleeveCut:1e3,sleeveBand:0,sleeveColor:[1,1,1]},kit:e.slice(0,4).map(_o),splits:vs.splits}}function fm(n,e=0){let t=A2(b2(n),e);return I2(t.cfg,t.kit)}var ku={"2twists":{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["headmesh_001",0]]]},afro:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/head_001",0]]]},brother:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0]]]},butchwitch:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/NurbsPath_001",0]]]},buzz:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["headmesh_001",0]]]},coilfro:{defaults:[[1,1,1,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Circle",0]],[["headmesh_001",0]]]},cornrow:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube_001",0]],[["headmesh_001",0]]]},curves:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["HairRig/Skeleton3D/headmesh_001",0]]]},dai:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},dreadfull:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["headmesh_001",0]]]},dreadlong:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["headmesh_001",0]]]},fall:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/head_002",0],["HairRig/Skeleton3D/headmesh_001",0]]]},hae:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},hairf10:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 10",0]]]},hairf11:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 11",0]]]},hairf12:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 12",0]]]},hairf13:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 13",0]]]},hairf14:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 14",0]]]},hairf15:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 15",0]]]},hairf17:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 17",0]]]},hairf18:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 18",0]]]},hairf19:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 19",0]]]},hairf20:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 20",0]]]},hairf5:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 05",0]]]},hairf6:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 06",0]]]},hairf7:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 07",0]]]},hairf8:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/Female Hair 08",0]]]},hairm1:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 05",0]]]},hairm10:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 10",0]]]},hairm11:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 11",0]]]},hairm12:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 12",0]]]},hairm13:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 13",0]]]},hairm14:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 14",0]]]},hairm15:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 15",0]]]},hairm16:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 16",0]]]},hairm17:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 17",0]]]},hairm18:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 18",0]]]},hairm19:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 19",0]]]},hairm20:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 20",0]]]},hairm6:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 06",0]]]},hairm7:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Male Hair 07",0]],[["HairRig/Skeleton3D/Male Hair 07",1]]]},hairm8:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 08",0]]]},hairm9:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],targets:[[["HairRig/Skeleton3D/Male Hair 09",0]]]},hairtf16:{defaults:[[1,1,1,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Female Hair 16",0]],[["HairRig/Skeleton3D/Female Hair 16",1]]]},halfdread:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["headmesh_001",0]],[["HairRig/Skeleton3D/Cube_001",0]]]},hightop:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/head_001",0]]]},hopefulwitch:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/NurbsPath_003",0]]]},hue:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/head_001",0]]]},jasmine:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Powder_Body_Main_001",0]]]},jeremy:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube_002",0]]]},kage:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},kai:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},kasa:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/hairmesh",0]]]},ko:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Retopo_Cube_006",0]]]},longhair:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/head_001",0]]]},maka:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/makahair",0]]]},mamii:{defaults:[[0,0,0,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Retopo_Cube_006",0]],[["HairRig/Skeleton3D/Retopo_Cube_006",1]]]},mao:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Plane_001",0],["HairRig/Skeleton3D/Plane_002",0]]]},may:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/fall_scalp",0],["HairRig/Skeleton3D/fall_scalp_001",0]]]},meku:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["HairRig/Skeleton3D/headmesh_001",0]],[["HairRig/Skeleton3D/headmesh_003",0]],[["HairRig/Skeleton3D/headmesh_003",1]]]},messydreads:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["HairRig/Skeleton3D/Cube_001",0],["headmesh_001",0]]]},mob:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Sphere",0]]]},momhair:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/head_001",0]]]},oody:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0]],[["HairRig/Skeleton3D/Cube_002",0]]]},ponytail:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["Armature/Skeleton3D/Cube",0],["headmesh_001",0]]]},ps68:{defaults:[[.149999231100082,.149999231100082,.149999231100082,1],[.919999063014984,.919999063014984,.919999063014984,1]],targets:[[["HairRig/Skeleton3D/Circle",0],["HairRig/Skeleton3D/NurbsPath_001",1],["HairRig/Skeleton3D/NurbsPath_006",0]],[["HairRig/Skeleton3D/NurbsPath_001",0]]]},ruri:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/aoki_hair",0]]]},sagaraen:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/NurbsPath_026",0]],[["HairRig/Skeleton3D/NurbsPath_026",1]]]},shrimpy:{defaults:[[1,1,1,1]],targets:[[["HairRig/Skeleton3D/NurbsPath",0]]]},spiky:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},swirls:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Retopo_head_mesh_001",0]],[["HairRig/Skeleton3D/Retopo_head_mesh_001",1]]]},swirlyhair:{defaults:[[.866666734218597,.172549054026604,.454902023077011,1]],targets:[[["HairRig/Skeleton3D/Cube",0]]]},teto:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Circle_001",0],["HairRig/Skeleton3D/Cube",0],["HairRig/Skeleton3D/headmesh_001",0]]]},topfade:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]],[["HairRig/Skeleton3D/headmesh_001",1]]]},topknot:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0]]]},twisttie:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/Cube",0],["headmesh_001",0]],[["HairRig/Skeleton3D/Cube_001",0]]]},van:{defaults:[[.149999231100082,.149999231100082,.149999231100082,1]],targets:[[["HairRig/Skeleton3D/Hair",0]]]},veritas:{defaults:[[.149999231100082,.149999231100082,.149999231100082,1]],targets:[[["HairRig/Skeleton3D/NurbsPath_006",0]]]},wynd:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/main_001",0]]]},yumee:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1],[.906331777572632,.906331777572632,.906331777572632,1]],targets:[[["HairRig/Skeleton3D/headmesh_001",0],["HairRig/Skeleton3D/headmesh_002",0]],[["headmesh_003",0]]]}},dm={BigFullBeard:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],pivot:[0,2.86725258827209,.477552562952042],meshes:[{name:"Facial H 01",shapes:["sharp","sqaure","round"]}]},f06:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],pivot:[-.0011427104473114,2.71909809112549,.597559332847595],meshes:[{name:"Facial H 06",shapes:["sharp","square","round"]}]},fullbeard:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],pivot:[298023223876953e-22,2.72211933135986,.447556376457214],meshes:[{name:"fullbeard",shapes:["sharp","square","round"]}]},goatee:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],pivot:[0,2.57991552352905,.382959544658661],meshes:[{name:"goatee",shapes:["sharp","square","round"]}]},goatee_stache:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],pivot:[0,2.73893070220947,.508281469345093],meshes:[{name:"goatee",shapes:["sharp","square","round"]}]},lashstache:{defaults:[[.790589690208435,.790589690208435,.790589690208435,1]],pivot:[0,2.97054243087769,.675494611263275],meshes:[{name:"Facial H 05",shapes:[]}]},stache:{defaults:[[.906331777572632,.906331777572632,.906331777572632,1]],pivot:[0,2.97045588493347,.661337494850159],meshes:[{name:"goatee_001",shapes:["sharp","square","round"]}]}},Bu={rest_inv:[1,0,0,0,1,0,0,0,1,0,-2.49935340881348,0],radii:[.649393379688263,.701189041137695,.654168963432312]},pm={"2twists":[2.5425004959106445,4.000015735626221],"2twists|flip":[2.5425004959106445,4.000015735626221],afro:[2.666809320449829,4.355401992797852],"afro|flip":[2.6685709953308105,4.355401992797852],brother:[2.585893154144287,4.227138519287109],"brother|flip":[2.585893154144287,4.227138519287109],butchwitch:[2.4746181964874268,4.170858860015869],"butchwitch|flip":[2.4746181964874268,4.170858860015869],buzz:[2.7879520058631897,3.9420990347862244],"buzz|flip":[2.7879520058631897,3.9420990347862244],coilfro:[2.5158698558807373,4.147511959075928],"coilfro|flip":[2.5158698558807373,4.147511959075928],cornrow:[2.0549612045288086,4.114680767059326],"cornrow|flip":[2.0549612045288086,4.114680767059326],curves:[2.7709243297576904,4.2358598709106445],"curves|flip":[2.7709243297576904,4.2358598709106445],dai:[2.609692096710205,4.063551902770996],"dai|flip":[2.609692096710205,4.063551902770996],dreadfull:[2.494161367416382,4.013974487781525],"dreadfull|flip":[2.494161367416382,4.013974487781525],dreadlong:[2.284961462020874,4.0467071533203125],"dreadlong|flip":[2.284961462020874,4.0467071533203125],fall:[2.6097705364227295,3.9404773712158203],"fall|flip":[2.6097705364227295,3.9404773712158203],hae:[2.5385560989379883,3.968883514404297],"hae|flip":[2.5385560989379883,3.968883514404297],hairf10:[2.651015281677246,4.230020046234131],"hairf10|flip":[2.651068925857544,4.230020046234131],hairf11:[2.615056037902832,4.106692790985107],"hairf11|flip":[2.615056037902832,4.106692790985107],hairf12:[2.517094612121582,4.264276504516602],"hairf12|flip":[2.517094612121582,4.264276504516602],hairf13:[2.6112849712371826,4.162756443023682],"hairf13|flip":[2.6118242740631104,4.162756443023682],hairf14:[2.299783706665039,4.115814208984375],"hairf14|flip":[2.299783706665039,4.115814208984375],hairf15:[2.5095856189727783,4.169766426086426],"hairf15|flip":[2.5095856189727783,4.169766426086426],hairf17:[2.321018934249878,3.964427947998047],"hairf17|flip":[2.321018934249878,3.964427947998047],hairf18:[2.540346622467041,3.9779820442199707],"hairf18|flip":[2.540346622467041,3.9779820442199707],hairf19:[2.3585641384124756,3.9441442489624023],"hairf19|flip":[2.3585641384124756,3.9424421787261963],hairf20:[2.441971778869629,4.093915939331055],"hairf20|flip":[2.441971778869629,4.093915939331055],hairf5:[2.42242693901062,4.228299617767334],"hairf5|flip":[2.42242693901062,4.228299617767334],hairf6:[2.3741281032562256,4.1043195724487305],"hairf6|flip":[2.3741281032562256,4.1043195724487305],hairf7:[2.4620108604431152,4.2013678550720215],"hairf7|flip":[2.4620108604431152,4.2013678550720215],hairf8:[2.458645820617676,4.157283306121826],"hairf8|flip":[2.458645820617676,4.157283306121826],hairm1:[2.636500120162964,4.152745246887207],hairm10:[2.2337605953216553,3.638275146484375],"hairm10|flip":[2.2337605953216553,3.6412432193756104],hairm11:[2.512887716293335,4.039614677429199],"hairm11|flip":[2.512887716293335,4.039614677429199],hairm12:[2.6193881034851074,4.068942546844482],"hairm12|flip":[2.6193881034851074,4.068942546844482],hairm13:[2.434255361557007,4.107517242431641],"hairm13|flip":[2.434255361557007,4.107517242431641],hairm14:[2.5932769775390625,4.262022495269775],"hairm14|flip":[2.5932769775390625,4.262022495269775],hairm15:[2.2648322582244873,4.123746871948242],"hairm15|flip":[2.2648322582244873,4.123746871948242],hairm16:[2.6088571548461914,4.065554618835449],"hairm16|flip":[2.6088571548461914,4.065554618835449],hairm17:[2.5851094722747803,3.963412046432495],"hairm17|flip":[2.5845742225646973,3.963412046432495],hairm18:[2.42470383644104,3.9780561923980713],"hairm18|flip":[2.42470383644104,3.9780561923980713],hairm19:[2.6931521892547607,4.113175868988037],"hairm19|flip":[2.6931521892547607,4.113175868988037],"hairm1|flip":[2.636500120162964,4.152745246887207],hairm20:[2.3982691764831543,4.1423444747924805],"hairm20|flip":[2.3982691764831543,4.1423444747924805],hairm6:[2.5020768642425537,4.253750324249268],"hairm6|flip":[2.5020768642425537,4.253750324249268],hairm7:[2.6328091621398926,4.046298027038574],"hairm7|flip":[2.6328091621398926,4.046298027038574],hairm8:[2.405911445617676,4.031665325164795],"hairm8|flip":[2.405911445617676,4.031665325164795],hairm9:[2.570741653442383,3.756770133972168],"hairm9|flip":[2.5693931579589844,3.7590293884277344],hairtf16:[2.7121052742004395,4.114720821380615],"hairtf16|flip":[2.712282657623291,4.114720821380615],halfdread:[2.4930758476257324,4.136692523956299],"halfdread|flip":[2.4930758476257324,4.136692523956299],hightop:[2.7075915336608887,4.135749340057373],"hightop|flip":[2.7075915336608887,4.135749340057373],hopefulwitch:[2.3812777996063232,4.069820880889893],"hopefulwitch|flip":[2.3812777996063232,4.069820880889893],hue:[2.648451089859009,4.6301469802856445],"hue|flip":[2.6474788188934326,4.6301469802856445],jasmine:[2.3373475074768066,4.352127552032471],"jasmine|flip":[2.3373475074768066,4.352127552032471],jeremy:[2.742872953414917,4.594966888427734],"jeremy|flip":[2.742872953414917,4.594966888427734],kage:[2.6097705364227295,3.9404773712158203],"kage|flip":[2.6097705364227295,3.9404773712158203],kai:[2.6097705364227295,4.259854793548584],"kai|flip":[2.6097705364227295,4.259854793548584],kasa:[2.443765640258789,4.201666355133057],"kasa|flip":[2.443765640258789,4.201666355133057],ko:[2.3006269931793213,4.182285785675049],"ko|flip":[2.3006269931793213,4.182285785675049],longhair:[2.062861442565918,4.066684722900391],"longhair|flip":[2.062861442565918,4.066684722900391],maka:[1.8539600372314453,4.300225257873535],"maka|flip":[1.8539600372314453,4.300225257873535],mamii:[1.893587589263916,4.180911064147949],"mamii|flip":[1.893587589263916,4.180911064147949],mao:[2.602109670639038,3.9740853309631348],"mao|flip":[2.602109670639038,3.9740853309631348],may:[2.360654354095459,3.9564695358276367],"may|flip":[2.360654354095459,3.9564695358276367],meku:[.7102212905883789,4.0340447425842285],"meku|flip":[.7102212905883789,4.0340447425842285],messydreads:[2.725660562515259,4.317093372344971],"messydreads|flip":[2.725660562515259,4.317093372344971],mob:[2.8883607387542725,4.124072074890137],"mob|flip":[2.8883607387542725,4.124072074890137],momhair:[2.5376791954040527,4.00775671005249],"momhair|flip":[2.5376791954040527,4.00775671005249],oody:[2.0895864963531494,4.227138519287109],"oody|flip":[2.0895864963531494,4.227138519287109],ponytail:[2.3560426235198975,3.9983479976654053],"ponytail|flip":[2.3560426235198975,3.9983479976654053],ps68:[2.0315299034118652,4.3712053298950195],"ps68|flip":[2.0315299034118652,4.3712053298950195],ruri:[2.1550135612487793,4.103981971740723],"ruri|flip":[2.1550135612487793,4.103981971740723],sagaraen:[2.0434563159942627,4.153323650360107],"sagaraen|flip":[2.0434563159942627,4.153323650360107],shrimpy:[2.5277676582336426,4.553872585296631],"shrimpy|flip":[2.5277676582336426,4.553872585296631],spiky:[2.791475296020508,4.21048641204834],"spiky|flip":[2.791475296020508,4.21048641204834],swirls:[2.5185489654541016,4.253208160400391],"swirls|flip":[2.5185489654541016,4.253208160400391],swirlyhair:[2.2358763217926025,5.245450496673584],"swirlyhair|flip":[2.2358763217926025,5.245450496673584],teto:[2.344332456588745,4.253661155700684],"teto|flip":[2.344332456588745,4.253661155700684],topfade:[2.763274669647217,4.280947685241699],"topfade|flip":[2.763274669647217,4.280947685241699],topknot:[2.801285743713379,4.502139568328857],"topknot|flip":[2.801285743713379,4.502139568328857],twisttie:[2.5425004959106445,4.608786106109619],"twisttie|flip":[2.5425004959106445,4.608786106109619],van:[2.471827507019043,4.046099662780762],"van|flip":[2.471827507019043,4.046099662780762],veritas:[1.8054041862487793,4.156811714172363],"veritas|flip":[1.8054041862487793,4.156811714172363],wynd:[2.463162660598755,4.119156837463379],"wynd|flip":[2.463162660598755,4.119156837463379],yumee:[2.6666383743286133,4.244656562805176],"yumee|flip":[2.6666383743286133,4.244656562805176]};var sn=Math.fround,vm=["","2twists","afro","brother","butchwitch","buzz","coilfro","cornrow","curves","dai","dreadfull","dreadlong","fall","hae","hairf10","hairf11","hairf12","hairf13","hairf14","hairf15","hairf17","hairf18","hairf19","hairf20","hairf5","hairf6","hairf7","hairf8","hairm1","hairm10","hairm11","hairm12","hairm13","hairm14","hairm15","hairm16","hairm17","hairm18","hairm19","hairm20","hairm6","hairm7","hairm8","hairm9","hairtf16","halfdread","hightop","hopefulwitch","hue","jasmine","jeremy","kage","kai","kasa","ko","longhair","maka","mamii","mao","may","meku","messydreads","mob","momhair","oody","ponytail","ps68","ruri","sagaraen","shrimpy","spiky","swirls","swirlyhair","teto","topfade","topknot","twisttie","van","veritas","wynd","yumee"],Mm=["","BigFullBeard","f06","fullbeard","goatee","goatee_stache","lashstache","stache"],zu=["","sharp","square","round"],P2=[[.13,.1,.08],[.28,.19,.11],[.48,.32,.15],[.72,.55,.26],[.87,.79,.55],[.55,.09,.06],[.35,.35,.38],[.88,.88,.9],[.24,.35,.65],[.55,.25,.6],[.85,.45,.65],[.2,.55,.4]].map(n=>[sn(n[0]),sn(n[1]),sn(n[2]),1]),bm=8,Hu=[.25,.3,.25].map(sn),Gu=[25,25,25],Vu=[.6,1.6].map(sn),L2=.14;function Xu(n){if(typeof n!="string")return!1;let e=n[0]==="#"?n.slice(1):n;return[3,4,6,8].includes(e.length)&&/^[0-9a-fA-F]+$/.test(e)}function dc(n){let e=n[0]==="#"?n.slice(1):n;(e.length===3||e.length===4)&&(e=[...e].map(i=>i+i).join(""));let t=i=>parseInt(e.slice(i,i+2),16)/255;return[sn(t(0)),sn(t(2)),sn(t(4)),e.length===8?sn(t(6)):1]}var D2=(n,e)=>[sn(n[0]*sn(1-e)),sn(n[1]*sn(1-e)),sn(n[2]*sn(1-e)),n[3]],mm=n=>Math.max(n[0],n[1],n[2])<=L2,En=(n,e,t)=>Math.min(t,Math.max(e,n)),pc=n=>typeof n=="number"&&Number.isFinite(n);function gm(n,e,t,i=0){return pc(n[e])?En(Math.trunc(n[e]),0,t):i}function N2(n,e){return pc(n[e])?En(n[e],0,1):.5}function _m(n){return Array.isArray(n)?n.slice(0,bm).map(e=>typeof e=="string"&&(e===""||Xu(e))?e:""):[]}function U2(n){return Array.isArray(n)?n.slice(0,bm).map(e=>{let t={};if(e&&typeof e=="object"&&!Array.isArray(e)){typeof e.on=="boolean"&&(t.on=e.on),typeof e.b=="string"&&Xu(e.b)&&(t.b=e.b);for(let i of["fs","fe"])pc(e[i])&&(t[i]=En(e[i],0,1))}return t}):[]}function xm(n,e,t){if(typeof e=="string"){let i=n.indexOf(e);return i>=0?i:0}return pc(e)?En(Math.trunc(e),0,n.length-1):t}function Sm(n){let e={};e.hair=xm(vm,n.hair===void 0?1:n.hair,0),e.hairFlip=n.hfl===!0,e.hairColorIdx=gm(n,"hc",11),e.hairCol=typeof n.hcol=="string"&&Xu(n.hcol)?dc(n.hcol):P2[En(e.hairColorIdx,0,11)],e.hairCols=_m(n.hcols),e.hairGrads=U2(n.hgrad),e.headShape=gm(n,"hs",3),e.facialHair=xm(Mm,n.fh===void 0?"":n.fh,0),e.facialCols=_m(n.fhcols);for(let t of["fpx","fpy","fpz","frx","fry","frz","fsc","fsx","fsy","fsz"])e[t]=N2(n,t);return e}var Am=(n,e)=>e>=0&&e<n.hairCols.length&&n.hairCols[e]!==""?dc(n.hairCols[e]):n.hairCol,O2=n=>Am(n,0),F2=(n,e)=>e>=0&&e<n.facialCols.length&&n.facialCols[e]!==""?dc(n.facialCols[e]):O2(n);function wm(n,e={}){let t=n&&n.__cfg?n.__cfg:Sm(n),i=vm[t.hair],s=e.slots||ku[i]&&ku[i].defaults||[],r=t.hair>0&&s.length>0,o={style:t.hair,name:i,flip:t.hairFlip,mounted:r,slotCount:0,defaults:[],gradActive:!1,outlineOff:!1,yrange:null,slots:[]};if(!r)return o;let a=e.yrange||pm[i+(t.hairFlip?"|flip":"")]||[0,1];o.yrange=a,o.defaults=s.map(l=>l.slice?l.slice():l.albedo),o.slotCount=s.length;let c=s.length>0;for(let l=0;l<s.length;l++){let h=Am(t,l),u=l<t.hairGrads.length?t.hairGrads[l]:{},f=u.on===!0,m={albedo:h,gradOn:f?1:0};if(mm(h)||(c=!1),f){o.gradActive=!0;let g=[u.fs!==void 0?u.fs:0,u.fe!==void 0?u.fe:1],_=u.b!==void 0&&u.b!==""?dc(u.b):D2(h,.4);mm(_)||(c=!1),m.top=h,m.bottom=_,m.gradYMin=a[0],m.gradYMax=a[1],m.fadeStart=g[0],m.fadeEnd=g[1]}o.slots.push(m)}return o.outlineOff=c,o}function k2(n,e){return[n[0]*e[0]+n[3]*e[1]+n[6]*e[2]+n[9],n[1]*e[0]+n[4]*e[1]+n[7]*e[2]+n[10],n[2]*e[0]+n[5]*e[1]+n[8]*e[2]+n[11]]}function B2(n,e){let t=i=>{let s=e[i*3],r=e[i*3+1],o=e[i*3+2];return[n[0]*s+n[3]*r+n[6]*o,n[1]*s+n[4]*r+n[7]*o,n[2]*s+n[5]*r+n[8]*o]};return[...t(0),...t(1),...t(2),...k2(n,[e[9],e[10],e[11]])]}var z2=(n,e)=>[n[0][0],n[1][0],n[2][0],n[0][1],n[1][1],n[2][1],n[0][2],n[1][2],n[2][2],e[0],e[1],e[2]],ym=(n,e)=>n.map((t,i)=>[0,1,2].map(s=>n[i][0]*e[0][s]+n[i][1]*e[1][s]+n[i][2]*e[2][s]));function H2(n){let e=Math.cos(n[0]),t=Math.sin(n[0]),i=Math.cos(n[1]),s=Math.sin(n[1]),r=Math.cos(n[2]),o=Math.sin(n[2]),a=[[1,0,0],[0,e,-t],[0,t,e]],c=[[i,0,s],[0,1,0],[-s,0,i]],l=[[r,-o,0],[o,r,0],[0,0,1]];return ym(ym(c,a),l)}var Wu=n=>n<=.5?.6+(1-.6)*En(n*2,0,1):1+(1.6-1)*En((n-.5)*2,0,1);function G2(n,e,t=Bu){let i=t.radii[0],s=[(n.fpx-.5)*2*Hu[0]*i,(n.fpy-.5)*2*Hu[1]*i,(n.fpz-.5)*2*Hu[2]*i],r=[(n.frx-.5)*2*Gu[0],(n.fry-.5)*2*Gu[1],(n.frz-.5)*2*Gu[2]],o=n.fsc,a=o<=.5?Vu[0]+(1-Vu[0])*En(o*2,0,1):1+(Vu[1]-1)*En((o-.5)*2,0,1),c=[En(a*Wu(n.fsx),.35,2.2),En(a*Wu(n.fsy),.35,2.2),En(a*Wu(n.fsz),.35,2.2)],h=H2(r.map(m=>m*(Math.PI/180))).map(m=>m.map((g,_)=>g*c[_])),u=[0,1,2].map(m=>h[m][0]*e[0]+h[m][1]*e[1]+h[m][2]*e[2]),f=z2(h,[s[0]+e[0]-u[0],s[1]+e[1]-u[1],s[2]+e[2]-u[2]]);return B2(t.rest_inv,f)}function V2(n,e){let t=n>0&&n<zu.length?zu[n].toLowerCase():"",i={};for(let s of e){let r=s.toLowerCase();i[s]=zu.includes(r)&&r===t?1:0}return i}function Tm(n,e={}){let t=n&&n.__cfg?n.__cfg:Sm(n),i=Mm[t.facialHair],s=e.data||dm[i],r={style:t.facialHair,name:i,mounted:!1,slotCount:0,slots:[],xf:null,pivot:[0,0,0],meshes:[],headShape:t.headShape};if(t.facialHair<=0||!s)return r;r.mounted=!0,r.slotCount=s.defaults.length;for(let o=0;o<r.slotCount;o++)r.slots.push({albedo:F2(t,o)});return r.pivot=e.pivot||s.pivot,r.xf=G2(t,r.pivot,e.head||Bu),r.meshes=s.meshes.map(o=>({name:o.name,keys:V2(t.headShape,o.shapes)})),r}var mc=Math.PI*2,Ji=Math.PI,W2=.035,X2=.45;var vt=n=>Math.fround(n);function Ss(n){let e=Buffer.from(n,"base64");return new Float32Array(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength))}function $i(n){let e=Buffer.from(n,"base64");return new Int32Array(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength))}var q2=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)},qu=(n,e,t)=>n+(e-n)*t,ut=64,ln=32,Y2=.04,gc=class n{constructor(){this.r=new Float32Array(ut*ln),this.skin=new Uint8Array(ut*ln)}static build(e,t,i){let s=new n;for(let r of e){let o=r.i?$i(r.i):null,a=[Ss(r.v),...(r.shapes||[]).map(Ss)];for(let c of a){let l=o?o.length:c.length/3,h=u=>[vt(c[u*3]-t[0]),vt(c[u*3+1]-t[1]),vt(c[u*3+2]-t[2])];for(let u=0;u+2<l;u+=3){let f=o?o[u]:u,m=o?o[u+1]:u+1,g=o?o[u+2]:u+2;s._splat(h(f),h(m),h(g))}}}for(let r=0;r<ut*ln;r++)s.skin[r]=s.r[r]>0?1:0;return s._fill(i),s}_splat(e,t,i){let s=(l,h,u)=>vt(Math.sqrt(vt(vt(vt(l*l)+vt(h*h))+vt(u*u)))),r=(l,h)=>s(vt(l[0]-h[0]),vt(l[1]-h[1]),vt(l[2]-h[2])),o=Math.max(1,Math.ceil(Math.max(r(e,t),Math.max(r(t,i),r(i,e)))/Y2)),a=[0,1,2].map(l=>vt(t[l]-e[l])),c=[0,1,2].map(l=>vt(i[l]-e[l]));for(let l=0;l<=o;l++)for(let h=0;h<=o-l;h++){let u=vt(l/o),f=vt(h/o),m=[0,1,2].map(p=>vt(vt(e[p]+vt(a[p]*u))+vt(c[p]*f))),g=s(m[0],m[1],m[2]);if(g<1e-6)continue;let _=this._bin([vt(m[0]/g),vt(m[1]/g),vt(m[2]/g)]);g>this.r[_]&&(this.r[_]=g)}}_bin(e){let t=Math.trunc((Math.atan2(e[0],e[2])+Ji)/mc*ut)%ut;return Math.min(ln-1,Math.max(0,Math.trunc(Math.acos(Math.min(1,Math.max(-1,e[1])))/Ji*ln)))*ut+t}_fill(e){let t=this.r.slice();for(let i=0;i<ln;i++)for(let s=0;s<ut;s++){if(t[i*ut+s]>0)continue;let r=0;for(let o of[-1,0,1])for(let a of[-1,0,1]){let c=i+o;c>=0&&c<ln&&(r=Math.max(r,t[c*ut+(s+a+ut)%ut]))}this.r[i*ut+s]=r}for(let i=0;i<ln;i++)for(let s=0;s<ut;s++){if(this.r[i*ut+s]>0)continue;let r=(i+.5)/ln*Ji,o=(s+.5)/ut*mc-Ji,a=[Math.sin(r)*Math.sin(o),Math.cos(r),Math.sin(r)*Math.cos(o)];this.r[i*ut+s]=1/Math.hypot(a[0]/e[0],a[1]/e[1],a[2]/e[2])}}radius(e){return this.radiusAt(Math.atan2(e[0],e[2]),Math.acos(Math.min(1,Math.max(-1,e[1]))))}radiusAt(e,t){let i=(e+Ji)/mc*ut-.5,s=Math.min(ln-1,Math.max(0,t/Ji*ln-.5)),r=Math.floor(i),o=Math.min(Math.trunc(s),ln-2),a=i-r,c=s-o,l=(r%ut+ut)%ut,h=(l+1)%ut,u=qu(this.r[o*ut+l],this.r[o*ut+h],a),f=qu(this.r[(o+1)*ut+l],this.r[(o+1)*ut+h],a);return qu(u,f,Math.min(1,Math.max(0,c)))}hasSkin(e){return this.skin[this._bin(e)]===1}skinAt(e,t){let i=Math.trunc((e+Ji)/mc*ut)%ut,s=Math.min(ln-1,Math.max(0,Math.trunc(t/Ji*ln)));return this.skin[s*ut+i]===1}ratio(e){let t=Math.hypot(e[0],e[1],e[2]);return t<1e-6?0:t/this.radius([e[0]/t,e[1]/t,e[2]/t])}},K2=(n,e)=>[n[0]*e[0]+n[3]*e[1]+n[6]*e[2]+n[9],n[1]*e[0]+n[4]*e[1]+n[7]*e[2]+n[10],n[2]*e[0]+n[5]*e[1]+n[8]*e[2]+n[11]],Z2=n=>n[0]*(n[4]*n[8]-n[5]*n[7])-n[3]*(n[1]*n[8]-n[2]*n[7])+n[6]*(n[1]*n[5]-n[2]*n[4]);function j2(n,e){let[t,i,s,r,o,a,c,l,h]=[n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]],u=t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c),f=[o*h-a*l,-(i*h-s*l),i*a-s*o,-(r*h-a*c),t*h-s*c,-(t*a-s*r),r*l-o*c,-(t*l-i*c),t*o-i*r];return[(f[0]*e[0]+f[1]*e[1]+f[2]*e[2])/u,(f[3]*e[0]+f[4]*e[1]+f[5]*e[2])/u,(f[6]*e[0]+f[7]*e[1]+f[8]*e[2])/u]}function J2(n,e){let t=[],i=[];for(let s of n){let r=[],o=[],a=s.binds.length>0;for(let c of s.surfaces){let l=c.vf,h=l.length/3,u=a&&c.bones&&c.bones.length?c.bones.length/h:0,f=new Float64Array(h*3),m=[];for(let g=0;g<h;g++){let _=s.xf;if(u>0){let d=new Array(9).fill(0),M=[0,0,0],y=0;for(let x=0;x<u;x++){let w=c.w[g*u+x];if(w<=0)continue;let S=s.binds[c.bones[g*u+x]];for(let A=0;A<9;A++)d[A]+=S[A]*w;for(let A=0;A<3;A++)M[A]+=S[9+A]*w;y+=w}y>0&&(_=[...d,...M])}let p=K2(_,[l[g*3],l[g*3+1],l[g*3+2]]);f[g*3]=p[0]-e[0],f[g*3+1]=p[1]-e[1],f[g*3+2]=p[2]-e[2],m.push(_)}r.push(f),o.push(m)}t.push(r),i.push(o)}return[t,i]}function $2(n,e,t,i){let s=X2*Math.min(i[0],i[2]),[r,o]=J2(n,t),a=[],c=[];for(let u=0;u<n.length;u++){let f=n[u].deep;if(!(f<=0))for(let m=0;m<n[u].surfaces.length;m++){let g=r[u][m],_=n[u].surfaces[m],p=g.length/3,d=_.idx&&_.idx.length?_.idx:Int32Array.from({length:p},(M,y)=>y);for(let M=0;M+2<d.length;M+=3){let y=d[M]*3,x=d[M+1]*3,w=d[M+2]*3,S=[g[y],g[y+1],g[y+2]],A=[g[x],g[x+1],g[x+2]],T=[g[w],g[w+1],g[w+2]],v=[(S[0]+A[0]+T[0])/3,(S[1]+A[1]+T[1])/3,(S[2]+A[2]+T[2])/3],b=[T[0]-S[0],T[1]-S[1],T[2]-S[2]],C=[A[0]-S[0],A[1]-S[1],A[2]-S[2]],L=[b[1]*C[2]-b[2]*C[1],b[2]*C[0]-b[0]*C[2],b[0]*C[1]-b[1]*C[0]],P=L[0]**2+L[1]**2+L[2]**2,U=v[0]**2+v[1]**2+v[2]**2;if(P<1e-12||U<1e-12||(L[0]*v[0]+L[1]*v[1]+L[2]*v[2])/Math.sqrt(P)/Math.sqrt(U)<=.2||e.ratio(v)>1.5)continue;let F=0,O=null,D=3;for(let q=0;q<=D;q++)for(let Z=0;Z<=D-q;Z++){let re=[0,1,2].map(le=>S[le]+(A[le]-S[le])*(q/D)+(T[le]-S[le])*(Z/D)),me=Math.hypot(re[0],re[1],re[2]);if(me<1e-6)continue;let ve=[re[0]/me,re[1]/me,re[2]/me],J=e.radius(ve);if(J-me>f*J||!e.hasSkin(ve))continue;let se=J*(1+W2)-me;se>F&&(F=se,O=re)}F>0&&(a.push(O),c.push(F))}}}if(!a.length)return!1;let l=new Map,h=(u,f,m)=>u+","+f+","+m;for(let u=0;u<a.length;u++){let f=h(Math.floor(a[u][0]/s),Math.floor(a[u][1]/s),Math.floor(a[u][2]/s));l.has(f)||l.set(f,[]),l.get(f).push(u)}for(let u=0;u<n.length;u++)for(let f=0;f<n[u].surfaces.length;f++){let m=r[u][f],g=o[u][f],_=n[u].surfaces[f],p=m.length/3,d=new Float64Array(p*3),M=!1;for(let y=0;y<p;y++){let x=[m[y*3],m[y*3+1],m[y*3+2]],w=Math.hypot(x[0],x[1],x[2]);if(w<1e-6)continue;let S=Math.floor(x[0]/s),A=Math.floor(x[1]/s),T=Math.floor(x[2]/s),v=0;for(let L=0;L<3;L++)for(let P=0;P<3;P++)for(let U=0;U<3;U++){let k=l.get(h(S+L-1,A+P-1,T+U-1));if(k)for(let F of k){let O=Math.hypot(x[0]-a[F][0],x[1]-a[F][1],x[2]-a[F][2])/s;if(O>=1)continue;let D=O<.4?1:1-q2(.4,1,O);v=Math.max(v,c[F]*D)}}if(v<=0)continue;let b=g[y];if(Math.abs(Z2(b))<1e-9)continue;let C=j2(b,[x[0]/w*v,x[1]/w*v,x[2]/w*v]);d[y*3]=C[0],d[y*3+1]=C[1],d[y*3+2]=C[2],M=!0}if(M)for(let y=0;y<p*3;y++)_.vf[y]=vt(_.vf[y]+d[y])}return!0}function Em(n,e,t,i){for(let s=0;s<2;s++)$2(n,e,t,i)}var Ee=Math.fround,_c=Math.PI,Im=Math.PI*2,nt=64,zt=32,Ai=3,Q2=.18,eb=.05,Yu=.08,Ku=.03,tb=.15,nb=.02,ib=3,Ar=6,sb=4,rb=6,$n=(n,e)=>[Ee(n[0]+e[0]),Ee(n[1]+e[1]),Ee(n[2]+e[2])],As=(n,e)=>[Ee(n[0]-e[0]),Ee(n[1]-e[1]),Ee(n[2]-e[2])],Pt=(n,e)=>(e=Ee(e),[Ee(n[0]*e),Ee(n[1]*e),Ee(n[2]*e)]),wi=(n,e)=>(e=Ee(e),[Ee(n[0]/e),Ee(n[1]/e),Ee(n[2]/e)]),hn=(n,e)=>Ee(Ee(Ee(n[0]*e[0])+Ee(n[1]*e[1]))+Ee(n[2]*e[2])),Vt=n=>Ee(Math.sqrt(hn(n,n))),Rm=(n,e)=>[Ee(Ee(n[1]*e[2])-Ee(n[2]*e[1])),Ee(Ee(n[2]*e[0])-Ee(n[0]*e[2])),Ee(Ee(n[0]*e[1])-Ee(n[1]*e[0]))],ju=n=>{let e=Vt(n);return e===0?[0,0,0]:wi(n,e)},Pm=(n,e,t)=>[Ee(n),Ee(e),Ee(t)],Lm=(n,e)=>$n([hn([n[0],n[3],n[6]],e),hn([n[1],n[4],n[7]],e),hn([n[2],n[5],n[8]],e)],[n[9],n[10],n[11]]),ob=n=>n[0]*(n[4]*n[8]-n[5]*n[7])-n[3]*(n[1]*n[8]-n[2]*n[7])+n[6]*(n[1]*n[5]-n[2]*n[4]);function ab(n,e){let t=n[0],i=n[3],s=n[6],r=n[1],o=n[4],a=n[7],c=n[2],l=n[5],h=n[8],u=t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c),f=[(o*h-a*l)/u,-(i*h-s*l)/u,(i*a-s*o)/u,-(r*h-a*c)/u,(t*h-s*c)/u,-(t*a-s*r)/u,(r*l-o*c)/u,-(t*l-i*c)/u,(t*o-i*r)/u].map(Ee);return[hn([f[0],f[1],f[2]],e),hn([f[3],f[4],f[5]],e),hn([f[6],f[7],f[8]],e)]}var Zu=n=>Math.sign(n)*Math.floor(Math.abs(n)+.5),vo=n=>{let e=Pt(n,2e4);return Zu(e[0])+","+Zu(e[1])+","+Zu(e[2])},Ju=(n,e,t)=>Math.min(t,Math.max(e,n)),Dm=(n,e)=>{let t=Math.trunc((n+_c)/Im*nt)%nt;return Math.min(zt-1,Math.max(0,Math.trunc(e/_c*zt)))*nt+t},cb=n=>Dm(Math.atan2(n[0],n[2]),Math.acos(Ju(n[1],-1,1))),wr=class{constructor(e){let t=s=>Ee(Math.floor(Ee(Ee(s/Ee(1e-4))+.5))*Ee(1e-4));e=Float32Array.from(e,t),this.f=e,this.n=e.length/9;let i=Array.from({length:this.n},(s,r)=>r);this.nodes=[],this._build(i)}_bb(e){let t=this.f,i=e*9;return[Math.min(t[i],t[i+3],t[i+6]),Math.min(t[i+1],t[i+4],t[i+7]),Math.min(t[i+2],t[i+5],t[i+8]),Math.max(t[i],t[i+3],t[i+6]),Math.max(t[i+1],t[i+4],t[i+7]),Math.max(t[i+2],t[i+5],t[i+8])]}_build(e){let t={lo:[1/0,1/0,1/0],hi:[-1/0,-1/0,-1/0],l:-1,r:-1,tris:null},i=[];for(let c of e){let l=this._bb(c);for(let h=0;h<3;h++)t.lo[h]=Math.min(t.lo[h],l[h]),t.hi[h]=Math.max(t.hi[h],l[h+3]);i.push([c,(l[0]+l[3])/2,(l[1]+l[4])/2,(l[2]+l[5])/2])}let s=this.nodes.length;if(this.nodes.push(t),e.length<=4)return t.tris=e,s;let r=[0,1,2].map(c=>t.hi[c]-t.lo[c]),o=r[0]>r[1]?r[0]>r[2]?0:2:r[1]>r[2]?1:2;i.sort((c,l)=>c[o+1]-l[o+1]);let a=i.length>>1;return t.l=this._build(i.slice(0,a).map(c=>c[0])),t.r=this._build(i.slice(a).map(c=>c[0])),s}_tri(e){let t=this.f,i=e*9;return[[t[i],t[i+1],t[i+2]],[t[i+3],t[i+4],t[i+5]],[t[i+6],t[i+7],t[i+8]]]}_cast(e,t,i,s){let r=null,o=i,a=t.map(l=>1/l),c=[0];for(;c.length;){let l=this.nodes[c.pop()],h=0,u=o;for(let f=0;f<3;f++){let m=(l.lo[f]-1e-4-e[f])*a[f],g=(l.hi[f]+1e-4-e[f])*a[f],_=Math.min(m,g),p=Math.max(m,g);Number.isNaN(_)||Number.isNaN(p)||(h=Math.max(h,_),u=Math.min(u,p))}if(!(h>u))if(l.tris)for(let f of l.tris){let[m,g,_]=this._tri(f),p=As(g,m),d=As(_,m),M=Rm(t,d),y=hn(p,M);if(Math.abs(y)<1e-5)continue;let x=Ee(1/y),w=As(e,m),S=Ee(x*hn(w,M));if(S<0||S>1)continue;let A=Rm(w,p),T=Ee(x*hn(t,A));if(T<0||Ee(S+T)>1)continue;let v=Ee(x*hn(d,A));(s?v>1e-5&&v<=1:v>1e-5)&&(r===null||v<o)&&(o=v,r=v)}else c.push(l.l,l.r)}return r===null?null:$n(e,Pt(t,r))}intersectRay(e,t){return this._cast(e,t,1/0,!1)}intersectSegment(e,t){return this._cast(e,As(t,e),1,!0)}},Nm=[];for(let n=0;n<nt*zt;n++){let e=[],t=Math.floor(n/nt),i=n%nt;for(let s of[-1,0,1])for(let r of[-1,0,1]){let o=t+s;s===0&&r===0||o<0||o>=zt||e.push(o*nt+(i+r+nt)%nt)}Nm.push(e)}var Sr=n=>Nm[n],Cm=(n,e,t)=>{let i=(Math.floor(n/nt)+t)/zt*_c,s=(n%nt+e)/nt*Im-_c;return Pm(Math.sin(i)*Math.sin(s),Math.cos(i),Math.sin(i)*Math.cos(s))},Tr=class n{constructor(){this._in=new Float32Array(nt*zt),this._out=new Float32Array(nt*zt),this._lim=new Float32Array(nt*zt),this._edge=new Uint8Array(nt*zt),this._tm=null,this._s=1,this._far=0}static build(e,t){let i=new n,s=[],r=0;for(let a of e){let c=a.tails?Buffer.from(a.tails,"base64"):Buffer.alloc(0);for(let l of a.surfaces){let h=Ss(l.v),u=h.length/3,f=l.bones?$i(l.bones):null,m=l.w?Ss(l.w):null,g=0;c.includes(1)&&f&&f.length&&(g=f.length/u);let _=new Array(u);for(let M=0;M<u;M++){let y=As(Lm(a.xf,[h[M*3],h[M*3+1],h[M*3+2]]),t),x=0;for(let w=0;w<g;w++){let S=f[M*g+w];S<c.length&&c[S]===1&&(x+=m[M*g+w])}_[M]=Pt(y,1-Q2*x),r=Math.max(r,Vt(y))}let p=l.i?$i(l.i):null,d=p?p.length:u;for(let M=0;M<d;M++)s.push(..._[p?p[M]:M])}}if(!s.length)return i._measureEdge(),i._measureLimit(),i;let o=new wr(Float32Array.from(s));r=r*1.5+1,i._tm=o,i._far=r;for(let a=0;a<nt*zt;a++){let c=Cm(a,.5,.5),l=o.intersectRay([0,0,0],c);if(!l)continue;let h=Vt(l);(i._in[a]===0||h<i._in[a])&&(i._in[a]=h);let u=o.intersectSegment(Pt(c,r),[0,0,0]);u&&(i._out[a]=Math.max(i._out[a],Vt(u)))}return i._close(),i._close(),i._erodeInner(),i._measureEdge(),i._measureLimit(),i}_erodeInner(){let e=this._in.slice();for(let t=0;t<nt*zt;t++)if(!(e[t]<=0))for(let i of Sr(t))e[i]>0&&e[i]<this._in[t]&&(this._in[t]=e[i])}scaled(e){let t=new n;return t._in=this._in.map(i=>i*e),t._out=this._out.map(i=>i*e),t._lim=this._lim.map(i=>i*e),t._edge=this._edge,t._tm=this._tm,t._far=this._far,t._s=this._s*e,t}outsideGap(e){if(!this._tm)return 1/0;let t=wi(e,this._s),i=Vt(t);if(i<1e-6)return 1/0;let s=this._tm.intersectSegment(t,Pt(wi(t,i),this._far));if(s)return(Vt(s)-i)*this._s;let r=this._tm.intersectSegment(t,[0,0,0]);return r?(Vt(r)-i)*this._s:1/0}pastOutside(e){return Math.max(-this.outsideGap(e),0)}bin(e){return cb(e)}binAt(e,t){return Dm(e,t)}covers(e){return this._in[e]>0}near(e){if(this._in[e]>0)return!0;for(let t of Sr(e))if(this._in[t]>0)return!0;return!1}dir(e){return Cm(e,.5,.5)}inner(e){return this._in[e]}outer(e){return this._out[e]}limit(e){return this._lim[e]}depth(e){return this._edge[e]/Ai}_close(){let e=this._in.slice(),t=this._out.slice();for(let i=0;i<nt*zt;i++){if(e[i]>0)continue;let s=0,r=0,o=0;for(let a of Sr(i))e[a]>0&&(s++,r=r===0?e[a]:Math.min(r,e[a]),o=Math.max(o,t[a]));s>=5&&(this._in[i]=r,this._out[i]=o)}for(let i of[0,zt-1]){let s=0,r=0,o=0;for(let a=0;a<nt;a++){let c=i*nt+a;this._in[c]>0&&(s++,r=r===0?this._in[c]:Math.min(r,this._in[c]),o=Math.max(o,this._out[c]))}if(s*4>=nt*3)for(let a=0;a<nt;a++)this._in[i*nt+a]===0&&(this._in[i*nt+a]=r,this._out[i*nt+a]=o)}}_measureEdge(){this._edge.fill(Ai);for(let e=1;e<Ai;e++){let t=this._edge.slice();for(let i=0;i<nt*zt;i++)if(!(this._in[i]<=0||t[i]<Ai)){for(let s of Sr(i))if(e===1&&this._in[s]<=0||e>1&&t[s]===e-1){this._edge[i]=e;break}}}}_measureLimit(){this._lim.fill(0);let e=[];for(let t=0;t<nt*zt;t++)this._in[t]>0&&(this._lim[t]=this._out[t],e.push(t));for(;e.length;){let t=[];for(let i of e)for(let s of Sr(i))this._in[s]<=0&&this._lim[s]===0&&(this._lim[s]=this._lim[i],t.push(s));e=t}this._lidOpenings();for(let t=0;t<nt*zt;t++)this._in[t]>0&&(this._lim[t]=0)}_lidOpenings(){let e=new Uint8Array(nt*zt);for(let t=0;t<nt*zt;t++){if(this._in[t]>0||e[t]===1)continue;let i=[t];e[t]=1;let s=new Map,r=0;for(;r<i.length;){for(let u of Sr(i[r]))this._in[u]>0?s.set(u,!0):e[u]===0&&(e[u]=1,i.push(u));r++}let o=[],a=[0,0,0];for(let u of s.keys())if(this._out[u]>0){let f=Pt(this.dir(u),this._out[u]);o.push(f),a=$n(a,f)}if(o.length<3)continue;a=wi(a,o.length);let c=[0,0,0];for(let u of i)c=$n(c,this.dir(u));let l=lb(o,a,ju(c)),h=hn(l,a);if(!(h<=0))for(let u of i){let f=hn(l,this.dir(u));f>.1&&(this._lim[u]=Math.min(this._lim[u],h/f))}}}};function lb(n,e,t){let i=0,s=0,r=0,o=0,a=0,c=0;for(let u of n){let f=As(u,e);i+=f[0]*f[0],s+=f[0]*f[1],r+=f[0]*f[2],o+=f[1]*f[1],a+=f[1]*f[2],c+=f[2]*f[2]}let l=i+o+c,h=t[0]===0&&t[1]===0&&t[2]===0?[0,0,-1]:t;for(let u=0;u<40;u++){let f=(l-i)*h[0]-s*h[1]-r*h[2],m=-s*h[0]+(l-o)*h[1]-a*h[2],g=-r*h[0]-a*h[1]+(l-c)*h[2],_=Pm(f,m,g);if(Vt(_)<1e-9)break;h=ju(_)}return hn(h,t)<0?[-h[0],-h[1],-h[2]]:h}function Mo(n,e){let t=[],i=[];for(let s of n){let r=[],o=[],a=s.binds.length>0;for(let c of s.surfaces){let l=c.vf,h=l.length/3,u=a&&c.bones&&c.bones.length?c.bones.length/h:0,f=new Array(h),m=new Array(h);for(let g=0;g<h;g++){let _=s.xf;if(u>0){let p=new Array(9).fill(0),d=[0,0,0],M=0;for(let y=0;y<u;y++){let x=c.w[g*u+y];if(x<=0)continue;let w=s.binds[c.bones[g*u+y]];for(let S=0;S<9;S++)p[S]=Ee(p[S]+Ee(w[S]*Ee(x)));for(let S=0;S<3;S++)d[S]=Ee(d[S]+Ee(w[9+S]*Ee(x)));M+=x}M>0&&(_=[...p,...d])}f[g]=As(Lm(_,[l[g*3],l[g*3+1],l[g*3+2]]),e),m[g]=_}r.push(f),o.push(m)}t.push(r),i.push(o)}return[t,i]}function Um(n,e,t,i){let s=nb*Math.min(i[0],i[2]),r=0,[o]=Mo(n,t);for(let a of o)for(let c of a)for(let l of c)if(e.outsideGap(l)<-s&&(r++,r>=ib))return!0;return!1}function Om(n,e,t,i,s,r,o){let[a,c]=Mo(n,i),l=Math.min(s[0],s[2]),h=eb*l,u=!1,f=[],m=[],g=[];for(let p=0;p<n.length;p++){f.push([]),m.push([]),g.push([]);let d=n[p].tails;for(let M=0;M<a[p].length;M++){let y=a[p][M],x=n[p].surfaces[M],w=y.length,S=d.length?d.indexOf(0):-1,A=x.bones,T=x.w,v=0;d.length&&A&&A.length&&(v=A.length/w);let b=new Float32Array(w),C=new Float32Array(w),L=new Int32Array(w).fill(-1),P=!1;for(let U=0;U<w;U++){let k=Vt(y[U]);if(b[U]=k,C[U]=k,k<1e-6)continue;let F=wi(y[U],k),O=e.bin(F);L[U]=O;let D=k,q=k;if(e.covers(O)){if(v>0&&S>=0){let me=0,ve=-1,J=-1;for(let se=0;se<v;se++){let le=A[U*v+se];le===S?ve=se:le<d.length&&d[le]===1&&(me+=T[U*v+se],T[U*v+se]=0,J<0&&(J=se))}me>0&&(ve<0&&(ve=J,A[U*v+ve]=S),T[U*v+ve]+=me,P=!0)}let Z=e.depth(O)*Ai<1.5,re=Z?Math.min(e.outer(O),e.inner(O)+Yu*l):e.inner(O)-h*.2;if(q=Z?re-h*.2:re,Z&&r){let me=e.inner(O);t&&t.hasSkin(F)&&(me=Math.max(me,t.radius(F))),q=me+Yu*l}k>re&&(D=Z?re-h*.2:e.inner(O)-h*e.depth(O),t&&t.hasSkin(F)&&(D=Math.max(D,t.radius(F)+Ku*l)))}else if(r){let Z=e.limit(O);Z>0&&(Z+=F[1]>-.5?o*l:-h,F[1]>-.5&&t&&t.hasSkin(F)&&(Z=Math.max(Z,t.radius(F)+tb*l)),q=F[1]>-.5?Z+h:Z,k>Z&&(D=Z+h*(1-Math.exp(-(k-Z)/h))))}b[U]=Math.min(D,k),C[U]=Math.max(q,b[U])}P&&(u=!0),f[p].push(b),m[p].push(C),g[p].push(L)}}let _={qs:a,xfs:c,parts:n};t&&(hb(_,f,m,g,e,t,Ku*l,h*.25),r||ub(_,f,g,e,t,Ku*l,h*.4,Yu*l));for(let p=0;p<n.length;p++)for(let d=0;d<a[p].length;d++){let M=a[p][d],y=c[p][d],x=f[p][d],w=n[p].surfaces[d],S=M.length,A=new Array(S),T=!1;for(let v=0;v<S;v++){let b=Vt(M[v]);if(b<1e-6||x[v]===b)continue;let C=y[v];Math.abs(ob(C))<1e-9||(A[v]=ab(C,Pt(wi(M[v],b),x[v]-b)),T=!0)}if(T){u=!0;for(let v=0;v<S;v++)if(A[v])for(let b=0;b<3;b++)w.vf[v*3+b]=Ee(w.vf[v*3+b]+A[v][b])}}return u}function Fm(n){let e=new Map;return n.qs.forEach((t,i)=>t.forEach((s,r)=>s.forEach((o,a)=>{let c=vo(o);e.has(c)||e.set(c,[]),e.get(c).push([i,r,a])}))),e}var km=(n,e,t,i)=>{let s=n.parts[e].surfaces[t];return s.idx&&s.idx.length?s.idx:Int32Array.from({length:i},(r,o)=>o)};function hb(n,e,t,i,s,r,o,a){let c=[];if(n.qs.forEach((m,g)=>m.forEach((_,p)=>{let d=e[g][p],M=i[g][p],y=km(n,g,p,_.length);for(let x=0;x+2<y.length;x+=3){let w=!1,S=!1;for(let A=0;A<3;A++){let T=y[x+A],v=M[T];v<0||(w=w||d[T]!==Vt(_[T]),S=S||!s.covers(v)||s.depth(v)*Ai<1.5)}w&&S&&c.push([g,p,y[x],y[x+1],y[x+2]])}})),!c.length)return;let l=new Map,h=sb,u=new Map,f=0;for(;f<Ar;){let m=f>=Math.floor(Ar/2),g=new Map,_=[];for(let p of c){let d=n.qs[p[0]][p[1]],M=e[p[0]][p[1]],y=t[p[0]][p[1]],x=i[p[0]][p[1]],w=[],S=[],A=[],T=!1;for(let L=0;L<3;L++){let P=p[2+L],U=Vt(d[P]);S.push(d[P]),w.push(U>1e-6?Pt(wi(d[P],U),M[P]):d[P]);let k=y[P]>M[P]+1e-4;k&&x[P]>=0&&!s.covers(x[P])&&(T=T||!m,k=m&&(u.get(vo(d[P]))??0)<a-1e-4),A.push(k?1:0)}let v=!1,b=[0,0,0];for(let L=0;L<=h;L++)for(let P=0;P<=h-L;P++){let U=[Ee(1-(L+P)/h),Ee(L/h),Ee(P/h)],k=$n($n(Pt(w[0],U[0]),Pt(w[1],U[1])),Pt(w[2],U[2])),F=Vt(k);if(F<1e-6)continue;let O=Math.atan2(k[0],k[2]),D=Math.acos(Ju(k[1]/F,-1,1)),q=s.binAt(O,D);if(s.covers(q)&&s.depth(q)*Ai>=1.5||!r.skinAt(O,D))continue;let Z=$n($n(Pt(S[0],U[0]),Pt(S[1],U[1])),Pt(S[2],U[2])),re=Math.min(r.radiusAt(O,D)+o,Vt(Z))-F;if(re<=0)continue;v=!0;let me=U[0]*A[0]+U[1]*A[1]+U[2]*A[2];if(!(me<.05))for(let ve=0;ve<3;ve++)A[ve]>0&&(b[ve]=Math.max(b[ve],re/me))}let C=b[0]!==0||b[1]!==0||b[2]!==0;if(v&&(C||T)&&_.push(p),!!C){for(let L=0;L<3;L++)if(b[L]>0){let P=vo(d[p[2+L]]);g.set(P,Math.max(g.get(P)??0,b[L]))}}}if(c=_,!c.length)return;if(f++,!g.size){f=Math.max(f,Math.floor(Ar/2));continue}l.size||(l=Fm(n));for(let[p,d]of g){let M=d,y=l.get(p)[0],x=i[y[0]][y[1]][y[2]];x>=0&&!s.covers(x)&&(M=Math.min(M,a-(u.get(p)??0)),u.set(p,(u.get(p)??0)+M));for(let w of l.get(p)){let S=e[w[0]][w[1]],A=t[w[0]][w[1]];S[w[2]]=Math.min(S[w[2]]+M,A[w[2]])}}}}function ub(n,e,t,i,s,r,o,a){let c=[];n.qs.forEach((g,_)=>g.forEach((p,d)=>{let M=e[_][d],y=t[_][d],x=km(n,_,d,y.length);for(let w=0;w+2<x.length;w+=3){let S=!1,A=!1,T=0;for(let v=0;v<3;v++){let b=x[w+v],C=y[b];C<0||(i.covers(C)&&(S=!0,M[b]<i.inner(C)-o&&T++),(!i.covers(C)||i.depth(C)*Ai<2.5)&&(A=!0))}S&&A&&T<3&&c.push([_,d,x[w],x[w+1],x[w+2]])}}));let l=new Map,h=[];for(let g of c){let _=n.qs[g[0]][g[1]],p=e[g[0]][g[1]];for(let d=0;d<3;d++){let M=g[2+d],y=vo(_[M]);if(!l.has(y)){let w=Vt(_[M]);l.set(y,w>1e-6?i.outsideGap(Pt(wi(_[M],w),p[M])):1/0)}let x=l.get(y);if(x===1/0||x<a){h.push(g);break}}}if(c=h,!c.length)return;let u=new Map,f=rb,m=0;for(;m<Ar;){let g=m>=Math.floor(Ar/2),_=new Map,p=[];for(let d of c){let M=n.qs[d[0]][d[1]],y=e[d[0]][d[1]],x=t[d[0]][d[1]],w=[],S=[],A=!1;for(let C=0;C<3;C++){let L=d[2+C],P=Vt(M[L]),U=P>1e-6?wi(M[L],P):[0,1,0];w.push(Pt(U,y[L]));let k=s.hasSkin(U)?s.radius(U)+r:0,F=y[L]>k+1e-4;F&&!g&&x[L]>=0&&i.covers(x[L])&&(F=!1,A=!0),S.push(F?1:0)}let T=!1,v=[0,0,0];for(let C=0;C<=f;C++)for(let L=0;L<=f-C;L++){let P=[Ee(1-(C+L)/f),Ee(C/f),Ee(L/f)],U=$n($n(Pt(w[0],P[0]),Pt(w[1],P[1])),Pt(w[2],P[2])),k=Vt(U);if(k<1e-6)continue;let F=i.binAt(Math.atan2(U[0],U[2]),Math.acos(Ju(U[1]/k,-1,1)));if(i.covers(F)){let Z=i.inner(F);if(i.depth(F)*Ai>=2.5&&(Z=Math.max(Z,i.outer(F)-a)),k<Z)continue}if(!i.covers(F)&&!i.near(F))continue;let O=i.pastOutside(U);if(O<=0)continue;let D=O+o;T=!0;let q=P[0]*S[0]+P[1]*S[1]+P[2]*S[2];if(!(q<.05))for(let Z=0;Z<3;Z++)S[Z]>0&&(v[Z]=Math.max(v[Z],D/q))}let b=v[0]!==0||v[1]!==0||v[2]!==0;T&&(b||A)&&p.push(d);for(let C=0;C<3;C++)if(v[C]>0){let L=vo(M[d[2+C]]);_.set(L,Math.max(_.get(L)??0,v[C]))}}if(c=p,!c.length)return;if(m++,!_.size){m=Math.max(m,Math.floor(Ar/2));continue}u.size||(u=Fm(n));for(let[d,M]of _)for(let y of u.get(d)){let x=e[y[0]][y[1]],w=n.qs[y[0]][y[1]][y[2]],S=ju(w),A=s.hasSkin(S)?s.radius(S)+r:0;x[y[2]]=Math.max(x[y[2]]-M,Math.min(A,x[y[2]]))}}}var ot=Math.fround,xc=64,$u=32,Bm=Math.PI,fb=Math.PI*2,db=.8,pb=.9,mb=1.06,gb=.02,_b=.5,xb=.02,zm=48,yb=n=>ot(Math.sqrt(ot(ot(ot(n[0]*n[0])+ot(n[1]*n[1]))+ot(n[2]*n[2])))),vb=(n,e)=>{let t=(i,s)=>ot(ot(ot(i[0]*s[0])+ot(i[1]*s[1]))+ot(i[2]*s[2]));return[ot(t([n[0],n[3],n[6]],e)+ot(n[9])),ot(t([n[1],n[4],n[7]],e)+ot(n[10])),ot(t([n[2],n[5],n[8]],e)+ot(n[11]))]},Mb=n=>{let e=Math.trunc((Math.atan2(n[0],n[2])+Bm)/fb*xc)%xc;return Math.min($u-1,Math.max(0,Math.trunc(Math.acos(Math.min(1,Math.max(-1,n[1])))/Bm*$u)))*xc+e};function Hm(n,e){let t=new Float32Array(xc*$u),[i]=Mo(n,e);for(let s of i)for(let r of s)for(let o of r){let a=yb(o);if(a<1e-6)continue;let c=Mb([ot(o[0]/a),ot(o[1]/a),ot(o[2]/a)]);t[c]=Math.max(t[c],a)}return t}function Gm(n,e,t,i,s,r){let o=Tr.build(n,i),a=gb*Math.min(s[0],s[2]),c=[];for(let h=0;h<e.length;h++){if(e[h]<=0||!o.covers(h))continue;let u=t.radius(o.dir(h));if(o.inner(h)<u*pb||e[h]<u*mb){c.push(1);continue}c.push((e[h]+a)/o.inner(h))}if(!c.length)return 1;c.sort((h,u)=>h-u);let l=c[Math.trunc((c.length-1)*db)];return Math.min(r,Math.max(1,l))}function Vm(n,e,t){let i=zm,s=2.5*Math.max(t[0],t[2]),r=new Float32Array(i*i).fill(-1/0),[o]=Mo(n,e),a=[],c=-1/0;if(o.forEach((l,h)=>l.forEach((u,f)=>{for(let _ of u)c=Math.max(c,_[1]);let m=n[h].surfaces[f],g=m.idx&&m.idx.length?m.idx:Int32Array.from({length:u.length},(_,p)=>p);for(let _ of g)a.push(...u[_])})),a.length){let l=new wr(Float32Array.from(a)),h=2*s/i;for(let u=0;u<i;u++)for(let f=0;f<i;f++){let m=l.intersectRay([ot(-s+(f+.5)*h),ot(c+1),ot(-s+(u+.5)*h)],[0,-1,0]);m&&(r[u*i+f]=m[1])}}return{n:i,ext:s,h:r}}function Wm(n,e){let t=zm,i=2.5*Math.max(e[0],e[2]),s=2*i/t,r=new Float32Array(t*t).fill(-1/0),o=e[1]*2;for(let a=0;a<t;a++)for(let c=0;c<t;c++){let l=ot(-i+(c+.5)*s),h=ot(-i+(a+.5)*s);if(n.ratio([l,0,h])>=1)continue;let u=0,f=o;for(let m=0;m<14;m++){let g=.5*(u+f);n.ratio([l,ot(g),h])<1?u=g:f=g}r[a*t+c]=u}return{n:t,ext:i,h:r}}function Xm(n,e,t,i,s){if(!e||!e.n)return 0;let r=[],o=1/0,a=[1/0,1/0],c=[-1/0,-1/0];for(let M of n)for(let y of M.surfaces){let x=Ss(y.v),w=x.length/3,S=new Array(w);for(let T=0;T<w;T++){let v=vb(M.xf,[x[T*3],x[T*3+1],x[T*3+2]]).map((b,C)=>ot(b-i[C]));S[T]=v,o=Math.min(o,v[1]),a=[Math.min(a[0],v[0]),Math.min(a[1],v[2])],c=[Math.max(c[0],v[0]),Math.max(c[1],v[2])]}let A=y.i?$i(y.i):null;if(A)for(let T of A)r.push(...S[T]);else for(let T of S)r.push(...T)}if(!r.length)return 0;let l=new wr(Float32Array.from(r)),h=e.n,u=e.ext,f=2*u/h,m=e.h,g=t.h,_=xb*Math.min(s[0],s[2]),p=[];for(let M=Math.max(Math.trunc((a[1]+u)/f),0);M<Math.min(Math.trunc((c[1]+u)/f)+1,h);M++)for(let y=Math.max(Math.trunc((a[0]+u)/f),0);y<Math.min(Math.trunc((c[0]+u)/f)+1,h);y++){let x=M*h+y;if(m[x]===-1/0||x>=g.length||g[x]===-1/0)continue;let w=l.intersectRay([ot(-u+(y+.5)*f),ot(o-1),ot(-u+(M+.5)*f)],[0,1,0]);!w||w[1]>g[x]+_||p.push(Math.max(m[x]-g[x],0))}if(!p.length)return 0;p.sort((M,y)=>M-y);let d=p[Math.trunc((p.length-1)*_b)];return d>0?d:0}var qm=["head","head2","head3","face","face2","face3","extra","extra2","extra3"],Ym=["head","head2","head3"],bb=12,Sb=16,Km=8,Qu=["","sharp","square","round"],Ti=Math.fround,ef=[1,0,0,0,1,0,0,0,1,0,0,0],bo=(n,e)=>[n[0]*e[0]+n[3]*e[1]+n[6]*e[2],n[1]*e[0]+n[4]*e[1]+n[7]*e[2],n[2]*e[0]+n[5]*e[1]+n[8]*e[2]];function Gn(n,e){let t=[];for(let s=0;s<3;s++)t.push(...bo(n,[e[s*3],e[s*3+1],e[s*3+2]]));let i=bo(n,[e[9],e[10],e[11]]);return[...t,i[0]+n[9],i[1]+n[10],i[2]+n[11]]}function Ab(n){let[e,t,i,s,r,o,a,c,l]=n,u=1/(e*(r*l-c*o)-s*(t*l-c*i)+a*(t*o-r*i)),f=(r*l-c*o)*u,m=(a*o-s*l)*u,g=(s*c-a*r)*u,_=(c*i-t*l)*u,p=(e*l-a*i)*u,d=(a*t-e*c)*u,M=(t*o-r*i)*u,y=(s*i-e*o)*u,x=(e*r-s*t)*u,w=[f,_,M,m,p,y,g,d,x],S=bo(w,[n[9],n[10],n[11]]);return[...w,-S[0],-S[1],-S[2]]}var wb=n=>[n[0],0,0,0,n[1],0,0,0,n[2],0,0,0],nf=[-1,0,0,0,1,0,0,0,1,0,0,0],Jm=n=>Gn(Gn(nf,n),nf);function Tb(n,e,t){let i=Math.cos(n),s=Math.sin(n),r=Math.cos(e),o=Math.sin(e),a=Math.cos(t),c=Math.sin(t),l=[1,0,0,0,i,s,0,-s,i,0,0,0],h=[r,0,-o,0,1,0,o,0,r,0,0,0],u=[a,c,0,-c,a,0,0,0,1,0,0,0];return Gn(Gn(h,l),u)}var yc=(n,e,t)=>n+(e-n)*t,Er=(n,e,t)=>Math.min(t,Math.max(e,n));function Eb(n,e){return e<=.5?yc(n.scale_min,1,Er(e*2,0,1)):yc(1,n.scale_max,Er((e-.5)*2,0,1))}function Rb(n){return n<=.5?yc(.6,1,Er(n*2,0,1)):yc(1,1.6,Er((n-.5)*2,0,1))}function sf(n){if(typeof n!="string")return!1;let e=n.startsWith("#")?n.slice(1):n;return[3,4,6,8].includes(e.length)&&/^[0-9a-fA-F]+$/.test(e)}function $m(n){let e=String(n).startsWith("#")?String(n).slice(1):String(n);if(!sf(e))return null;(e.length===3||e.length===4)&&(e=[...e].map(i=>i+i).join(""));let t=i=>parseInt(e.slice(i,i+2),16)/255;return[Ti(t(0)),Ti(t(2)),Ti(t(4)),e.length===8?Ti(t(6)):1]}var Cb=(n,e)=>[Ti(n[0]*(1-e)),Ti(n[1]*(1-e)),Ti(n[2]*(1-e)),n[3]],Zm=n=>Math.max(n[0],n[1],n[2])<=Ti(.14);function Ib(n){if(n===null||typeof n!="object"||Array.isArray(n))return{};let e={};for(let t of Object.keys(n)){if(Object.keys(e).length>=bb)break;let i=n[t];if(i===null||typeof i!="object"||Array.isArray(i)||t.length>24)continue;let s={};for(let r of Object.keys(i)){if(Object.keys(s).length>=Sb)break;let o=i[r];if(!(r.length>24)){if(r==="cols"&&Array.isArray(o)){let a=[];for(let c of o){if(a.length>=Km)break;a.push(typeof c=="string"&&(c===""||sf(c))?c:"")}s.cols=a;continue}if(r==="grads"&&Array.isArray(o)){let a=[];for(let c of o){if(a.length>=Km)break;let l={};if(c!==null&&typeof c=="object"&&!Array.isArray(c)){typeof c.on=="boolean"&&(l.on=c.on),typeof c.b=="string"&&sf(c.b)&&(l.b=c.b);for(let h of["fs","fe"]){let u=c[h];typeof u=="number"&&Number.isFinite(u)&&(l[h]=Er(u,0,1))}}a.push(l)}s.grads=a;continue}typeof o=="string"?s[r]=o.slice(0,48):(typeof o=="number"&&Number.isFinite(o)||typeof o=="boolean")&&(s[r]=o)}}e[t]=s}return e}var Qm=n=>typeof n=="number"?n:typeof n=="boolean"?n?1:0:typeof n=="string"&&parseFloat(n)||0,Qi=(n,e,t=.5)=>e in n?Qm(n[e]):t,Pb=(n,e,t)=>{let i=Array.isArray(n.cols)?n.cols:[];return e>=0&&e<i.length&&String(i[e])!==""?$m(i[e]):t},Lb=(n,e)=>Array.isArray(n.grads)&&e>=0&&e<n.grads.length&&n.grads[e]&&typeof n.grads[e]=="object"?n.grads[e]:{};function rf(n){return n.byId||(n.byId=new Map(n.items.map(e=>[e.id,e]))),n}var tf=(n,e)=>{if(!e)return null;let t=n.byId.get(e);return t&&(t.in_game_catalog||n.supporter_enabled)?t:null},Db=(n,e)=>e<n.start_colors.length?n.start_colors[e]:n.groups&&e<n.groups.length?n.groups[e].albedo:[1,1,1,1];function Nb(n,e){return e[n.mount==="hips"?"hips":n.mount==="chest"?"chest":"head"]}function Ub(n,e,t,i,s,r,o,a,c){let l=o[0],h=[n.anchor_offset[0]*l,n.anchor_offset[1]*l,n.anchor_offset[2]*l];h[0]+=(Qi(e,"px")-.5)*2*n.pos_range[0]*l,h[1]+=(Qi(e,"py")-.5)*2*n.pos_range[1]*l,h[2]+=(Qi(e,"pz")-.5)*2*n.pos_range[2]*l;let u=[n.anchor_rotation[0]+(Qi(e,"rx")-.5)*2*n.rot_range[0],n.anchor_rotation[1]+(Qi(e,"ry")-.5)*2*n.rot_range[1],n.anchor_rotation[2]+(Qi(e,"rz")-.5)*2*n.rot_range[2]],f=n.anchor_scale*Eb(n,Qi(e,"sc")),m=["sx","sy","sz"].map(y=>Er(f*Rb(Qi(e,y)),.35,2.2)),g=Math.PI/180,_=Gn(Tb(u[0]*g,u[1]*g,u[2]*g),wb(m)),p=s,d=bo(_,p),M=[..._.slice(0,9),h[0]+p[0]-d[0],h[1]+p[1]-d[1],h[2]+p[2]-d[2]];if(n.turns_back&&i){let y=[r[0],0,r[2]],x=Ti(Math.PI),w=Math.cos(x),S=Math.sin(x),A=[w,0,-S,0,1,0,S,0,w,0,0,0],T=bo(A,y);M=Gn([...A.slice(0,9),y[0]-T[0],y[1]-T[1],y[2]-T[2]],M)}return a!==1&&(M=Gn([a,0,0,0,a,0,0,0,a,r[0]-r[0]*a,r[1]-r[1]*a,r[2]-r[2]*a],M)),c!==0&&(M=Gn([1,0,0,0,1,0,0,0,1,0,c,0],M)),t?Jm(M):M}var Ob=n=>n===!0;function e0(n,e,t={}){let i=rf(e),s=Ib(n&&n.acc),r=t.centre||i.head.centre,o=t.radii||i.head.radii,a=t.rests||i.rig&&i.rig.rests||{head:ef,chest:ef,hips:ef},c=n&&n.hs!==void 0?Math.trunc(Qm(n.hs)):0,l=c>0&&c<Qu.length?Qu[c].toLowerCase():"",h=y=>s[y]&&typeof s[y].id=="string"?s[y].id:"",u={};for(let y of qm){let x=h(y);if(x==="")continue;let w=s[y],S=tf(i,x),A={id:x,known:!!S,mounted:!1};if(u[y]=A,!S||S.no_mesh)continue;let T=w.fl===!0;A.mounted=!0,A.mount=S.mount,A.flip=T,A.visible=S.root_visible!==!1;let v=Nb(S,a),b=Ab(v),C=Ob(w.bk),L=(O,D)=>Ub(S,w,T,C,S.pivot,r,o,O,D),P=1,U=0;t.fit&&t.fit[y]!==void 0&&(P=t.fit[y]),t.lift&&t.lift[y]!==void 0&&(U=t.lift[y]);let k=e.hood_tuck_on!==!1&&Ym.includes(y)&&(S.fit_to_hair||S.sit_on_hair);if(A.needsFit=k,k&&typeof t.hat=="function"){let O=t.hat({slot:y,item:S,flip:T,placeFor:L});O&&(P=O.fit,U=O.lift)}A.fit=P,A.lift=U,A.place=L(P,U),A.xf=Gn(b,A.place),A.rest=v,A.pivot=S.pivot,A.hasTails=!!S.has_tails,A.colors=(S.groups||[]).map((O,D)=>{if(O.locked||(S.locked_colors||[]).includes(D)||S.slot_materials&&S.slot_materials[D])return{locked:!0,outlineOff:(S.no_outline||[]).includes(D),material:S.slot_materials?S.slot_materials[D]:null};let q=Pb(w,D,Db(S,D)),Z=Lb(w,D),re=Z.on===!0,me={locked:!1,albedo:q,gradient:null},ve=Zm(q);if(re){let J=typeof Z.b=="string"&&Z.b!==""?$m(Z.b):Cb(q,.4);me.gradient={top:q,bottom:J,y0:S.yrange[0],y1:S.yrange[1],fadeStart:"fs"in Z?Z.fs:0,fadeEnd:"fe"in Z?Z.fe:1},ve=ve&&Zm(J)}return me.outlineOff=ve||(S.no_outline||[]).includes(D),S.has_pattern&&D===S.pattern_slot&&(me.pattern={ink:S.pattern_ink,spot:S.pattern_spot}),me});let F=w.vr===!0?1:0;A.blend={};for(let O of S.meshes||[]){if(!O.blends.length)continue;let D={};for(let q of O.blends){let Z=q.toLowerCase();D[q]=Qu.includes(Z)&&Z===l?1:0}S.variant_shape&&O.blends.includes(S.variant_shape)&&(D[S.variant_shape]=F),A.blend[O.path]=D}}let f="",m="",g="normal",_="";for(let y of Ym){let x=tf(i,h(y));!x||s[y]&&s[y].kh===!0||(x.hair_mode==="full_covered"?(_||(_=y),g="full_covered"):x.hair_mode==="top_covered"&&g!=="full_covered"&&(g="top_covered"),!m&&x.fit_to_hair&&!x.sit_on_hair&&(m=y))}f=_||m;let d={mode:g,hatSlot:f,top:g==="top_covered"?1:0,full:g==="full_covered"?1:0,hidden:g==="top_covered"?["Hair_Top","Hair_Bangs"]:g==="full_covered"?["Hair_Top","Hair_Bangs","Hair_Sides","Hair_Back"]:[]},M=qm.some(y=>{let x=tf(i,h(y));return!!(x&&x.hides_mouth)});return{slots:u,hair:d,hidesMouth:M,headShape:c}}var Fb=n=>{let e="";for(let t=0;t<n.length;t+=32768)e+=String.fromCharCode.apply(null,n.subarray(t,t+32768));return typeof btoa=="function"?btoa(e):Buffer.from(e,"binary").toString("base64")};function kb(n){let e=n.i?Int32Array.from($i(n.i)):null;if(!e)return n;for(let t=0;t+2<e.length;t+=3){let i=e[t+1];e[t+1]=e[t+2],e[t+2]=i}return{...n,i:Fb(new Uint8Array(e.buffer))}}function jm(n,e,t){let i=t?Gn(nf,Bb(e)):e;return n.map(s=>({xf:Gn(i,s.xf),tails:s.tails,surfaces:t?s.surfaces.map(kb):s.surfaces}))}var Bb=n=>Jm(n);function t0(n,e,t,i,s,r,o){let a=1,c=0;if(n.fit_to_hair){let l=jm(i,t(1,0),e),h=Hm(s.parts,r),u=Gm(l,h,s.headField,r,o,n.fit_max);u!==1&&(a=u)}if(n.sit_on_hair){let l=jm(i,t(a,0),e),h=s.tops||Vm(s.parts,r,o),u=s.scalp||Wm(s.headField,o);c=Xm(l,h,u,r,o)}return{fit:a,lift:c}}var Ei=Object.freeze([1,0,0,0,1,0,0,0,1,0,0,0]);function At(n,e){let t=new Array(12);for(let o=0;o<3;o++){let a=e[o*3],c=e[o*3+1],l=e[o*3+2];t[o*3]=n[0]*a+n[3]*c+n[6]*l,t[o*3+1]=n[1]*a+n[4]*c+n[7]*l,t[o*3+2]=n[2]*a+n[5]*c+n[8]*l}let i=e[9],s=e[10],r=e[11];return t[9]=n[0]*i+n[3]*s+n[6]*r+n[9],t[10]=n[1]*i+n[4]*s+n[7]*r+n[10],t[11]=n[2]*i+n[5]*s+n[8]*r+n[11],t}function s0(n,e,t){let[i,s,r,o]=e,a=i*i,c=s*s,l=r*r,h=i*s,u=i*r,f=s*r,m=o*i,g=o*s,_=o*r,p=2/(a+c+l+o*o),d=1-p*(c+l),M=p*(h-_),y=p*(u+g),x=p*(h+_),w=1-p*(a+l),S=p*(f-m),A=p*(u-g),T=p*(f+m),v=1-p*(a+c);return[d*t[0],x*t[0],A*t[0],M*t[1],w*t[1],T*t[1],y*t[2],S*t[2],v*t[2],n[0],n[1],n[2]]}function r0(n){return[n[0],n[1],n[2],n[4],n[5],n[6],n[8],n[9],n[10],n[12],n[13],n[14]]}function zb(n){let e=n instanceof Uint8Array?n:new Uint8Array(n),t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(t.getUint32(0,!0)!==1179937895)throw new Error("nao e .glb");let i=12,s=null,r=null;for(;i+8<=e.byteLength;){let o=t.getUint32(i,!0),a=t.getUint32(i+4,!0),c=e.subarray(i+8,i+8+o);a===1313821514?s=JSON.parse(new TextDecoder().decode(c)):a===5130562&&!r&&(r=c),i+=8+o+(4-o%4)%4}if(!s)throw new Error("glb sem JSON");return{json:s,bin:r||new Uint8Array(0)}}var Hb={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},of={5120:1,5121:1,5122:2,5123:2,5125:4,5126:4};function af(n,e,t){switch(t){case 5120:return n.getInt8(e);case 5121:return n.getUint8(e);case 5122:return n.getInt16(e,!0);case 5123:return n.getUint16(e,!0);case 5125:return n.getUint32(e,!0);default:return n.getFloat32(e,!0)}}function Jt(n,e){let{json:t,bin:i}=n,s=t.accessors[e],r=Hb[s.type],o=s.count,a=s.componentType,l=a===5126||s.normalized?new Float32Array(o*r):new Int32Array(o*r),h=new DataView(i.buffer,i.byteOffset,i.byteLength);if(s.bufferView!==void 0){let u=t.bufferViews[s.bufferView],f=(u.byteOffset||0)+(s.byteOffset||0),m=of[a],g=u.byteStride||m*r;for(let _=0;_<o;_++)for(let p=0;p<r;p++)l[_*r+p]=af(h,f+_*g+p*m,a)}if(s.sparse){let u=s.sparse,f=t.bufferViews[u.indices.bufferView],m=t.bufferViews[u.values.bufferView],g=(f.byteOffset||0)+(u.indices.byteOffset||0),_=(m.byteOffset||0)+(u.values.byteOffset||0),p=of[u.indices.componentType],d=of[a];for(let M=0;M<u.count;M++){let y=af(h,g+M*p,u.indices.componentType);for(let x=0;x<r;x++)l[y*r+x]=af(h,_+(M*r+x)*d,a)}}if(s.normalized){let u=a===5120?127:a===5121?255:a===5122?32767:65535,f=a===5120||a===5122;for(let m=0;m<l.length;m++)l[m]=f?Math.max(l[m]/u,-1):l[m]/u}return{data:l,n:o,nc:r,ct:a}}function Gb(n){return n.matrix?r0(n.matrix):s0(n.translation||[0,0,0],n.rotation||[0,0,0,1],n.scale||[1,1,1])}function Vb(n){let e=n.json.nodes,t=new Array(e.length).fill(-1);return e.forEach((i,s)=>(i.children||[]).forEach(r=>{t[r]=s})),t}function Wb(n){return n.json.scenes[n.json.scene||0].nodes.slice()}function Xb(n,e){let t=String(n??"").replace(/[.:@/"%]/g,"_");return t===""&&(t="node"),t}function o0(n,e,t){let i=n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3],s=e;i<0&&(i=-i,s=[-e[0],-e[1],-e[2],-e[3]]);let r,o;if(1-i>1e-5){let a=Math.acos(i),c=Math.sin(a);r=Math.sin((1-t)*a)/c,o=Math.sin(t*a)/c}else r=1-t,o=t;return[r*n[0]+o*s[0],r*n[1]+o*s[1],r*n[2]+o*s[2],r*n[3]+o*s[3]]}function qb(n){let e={};for(let t of n.json.animations||[]){let i=[],s=0;for(let r of t.channels){let o=t.samplers[r.sampler],a=Jt(n,o.input).data,c=Jt(n,o.output),l=o.interpolation||"LINEAR";if(l==="CUBICSPLINE")throw new Error("CUBICSPLINE nao suportado");a.length&&(s=Math.max(s,a[a.length-1])),i.push({node:r.target.node,path:r.target.path,times:a,values:c.data,nc:c.nc,step:l==="STEP"})}e[t.name]={name:t.name,length:Math.max(s,.001),tracks:i}}return e}function Yb(n,e,t,i){let{times:s,values:r,nc:o,step:a}=n,c=s.length,l=g=>Array.from(r.subarray(g*o,g*o+o));if(c===0)return null;if(c===1)return l(0);let h=-1;{let g=0,_=c-1;for(;g<=_;){let p=g+_>>1;s[p]<=e?(h=p,g=p+1):_=p-1}}let u=o===4,f=(g,_,p)=>u?o0(g,_,p):g.map((d,M)=>d+(_[M]-d)*p);if(i){if(h>=0){if(h+1<c){if(a)return l(h);let y=(e-s[h])/(s[h+1]-s[h]);return f(l(h),l(h+1),y)}if(a)return l(h);let d=t-s[h]+s[0],M=d>0?(e-s[h])/d:0;return f(l(h),l(0),M)}let g=c-1;if(a)return l(g);let _=Math.max(t-s[g],0),p=(_+e)/(_+s[0]);return f(l(g),l(0),p)}if(h<0)return l(0);if(h+1>=c||a)return l(h);let m=(e-s[h])/(s[h+1]-s[h]);return f(l(h),l(h+1),m)}function a0(n){let e=zb(n),t=e.json,i=Vb(e),s=Wb(e);if(!(t.extensionsUsed||[]).includes("GODOT_single_root")||s.length!==1)throw new Error("so GODOT_single_root com 1 raiz e suportado");let o=s[0],a=new Set,c=(t.skins||[])[0];if((t.skins||[]).length>1)throw new Error("mais de uma skin nao suportado");c&&c.joints.forEach(f=>a.add(f));let l=t.nodes.map((f,m)=>({id:m,name:Xb(f.name),parent:i[m],xf:Gb(f),extras:f.extras||null,mesh:f.mesh===void 0?-1:f.mesh,skin:f.skin===void 0?-1:f.skin,isJoint:a.has(m),children:f.children||[]})),h={g:e,rootId:o,rootName:l[o].name,nodes:l,skeleton:null,skin:null,meshInstances:[],clips:null};if(c){let f=c.joints.filter(w=>!a.has(i[w]));if(f.length!==1)throw new Error("esqueleto com mais de uma raiz");let m=[],g=(w,S)=>{let A=m.length;m.push({node:w,parent:S});for(let T of l[w].children)a.has(T)&&g(T,A)};g(f[0],-1);let _=m.map(w=>({name:l[w.node].name,parent:w.parent,node:w.node,rest:l[w.node].xf,grest:null}));_.forEach((w,S)=>{w.grest=w.parent<0?w.rest:At(_[w.parent].grest,w.rest)});let p={};_.forEach((w,S)=>{p[w.name]=S});let d=i[f[0]];h.skeleton={parentNode:d,xf:Ei.slice(),bones:_,index:p,rootJoint:f[0]};let M=c.inverseBindMatrices!==void 0?Jt(e,c.inverseBindMatrices).data:null,y=c.joints.map((w,S)=>({name:l[w].name,bone:-1,pose:M?r0(Array.from(M.subarray(S*16,S*16+16))):Ei.slice()})),x=new Uint8Array(y.length);y.forEach((w,S)=>{x[S]=w.name.startsWith("tail")?1:0}),h.skin={binds:y,tail:x}}let u=f=>{let m=Ei.slice(),g=f;for(;g>=0&&g!==o;)m=At(l[g].xf,m),g=i[g];return m};for(let f of l){if(f.mesh<0)continue;let m=f.skin>=0&&!!h.skeleton,g,_;if(m){_=f.xf;let M=h.skeleton;g=At(At(M.parentNode>=0?u(M.parentNode):Ei.slice(),M.xf),f.xf)}else _=f.xf,g=u(f.id);let p=null,d=null;if(!m&&h.skeleton){let M=f.id,y=Ei.slice();for(;M>=0&&!l[M].isJoint;)y=At(l[M].xf,y),M=i[M];M>=0&&(p=l[M].name,d=y)}h.meshInstances.push({name:f.name,node:f.id,skinned:m,xf:_,xfRoot:g,extras:f.extras,meshIndex:f.mesh,attachBone:p,xfInBone:d})}return h}function c0(n,e){let t=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0],s=(c,l)=>{for(let h=0;h<c.length;h+=3)for(let u=0;u<3;u++){let f=l?Math.fround(l[h+u]+c[h+u]):c[h+u];f<t[u]&&(t[u]=f),f>i[u]&&(i[u]=f)}};for(let c of n.json.meshes[e].primitives){let l=Jt(n,c.attributes.POSITION).data;s(l,null);for(let h of c.targets||[])h.POSITION!==void 0&&s(Jt(n,h.POSITION).data,l)}let r=Math.fround,o=i.map((c,l)=>r(c-t[l])),a=o.map(c=>r(c*.5));return{min:t,max:i,size:o,half:a,centre:t.map((c,l)=>r(c+a[l]))}}var l0=[["idle","idle","idle",0],["ready","ready","idle_alt",0],["cool","cool","intro_cool",.5],["sass","sass","intro_sass",.5],["nice","nice","nice1",0],["igot","i got it","igot_r",.8],["dressup_1","dress up 1","dressup_1",.25],["dressup_2","dress up 2","dressup_2",.5],["dressup_3","dress up 3","dressup_3",.25],["dressup_4","dress up 4","dressup_4",.5],["sit","sit","sit",0],["run","run","jog",.5],["sprint","sprint","sprint",.5],["sprint_start","sprint start","sprint_start",0],["shuffle","shuffle","strafe_left",.5],["shuffle_right","shuffle right","strafe_right",.75],["shuffle_fwd","shuffle forward","strafe_fwd",.5],["backpedal","backpedal","run_back",.5],["skid","skid","stop",.25],["jump","jump","jump_rise",.5],["jump_2","jump 2","jump_rise2",.5],["fall","fall","jump_fall",.5],["land","land","land",.25],["approach","approach","approach",.5],["crouch","crouch","charge",.75],["spike","spike","spike",.05],["tip","tip","spike_light",.05],["toss","toss","toss",.25],["serve","serve","serve",.75],["set","set","set",.25],["jump_set","jump set","set_air",.25],["low_set","low set","set_low",.5],["dig","dig","recieve",.25],["dig_left","dig left","recieve_l",.25],["dig_right","dig right","recieve_r",.25],["dig_back","dig back","recieve_back",.25],["block","block","block",.5],["blocked","blocked","block_hit",.25],["blocked_over","blocked over the top","block_hit_ot",0],["kick","kick","kick_r",.5],["dive","dive","dive",.5],["dive_left","dive left","dive_l",.25],["dive_right","dive right","dive_r",.25],["tired","tired","dive_burnout",.5],["getup","get up","getup_front",.25],["getup_back","get up back","getup_back",0],["backset","back set","backset",.43],["backset_air","jump back set","backset_air",.5]],cf={spike:"spike_l",spike_light:"spike_light_l",jump_rise:"jump_rise_l",jump_rise2:"jump_rise2_L",igot_r:"igot_l",kick_r:"kick_l"};function Kb(n){let e=l0.find(t=>t[0]===n);return e?e[2]:"idle"}function Zb(n){let e=l0.find(t=>t[0]===n);return e?e[3]:0}var jb=1.8,Jb=.06,$b=.14;function Qb(n){return 1+(n-.5)*2*Jb}function h0(n){let e=a0(n),t=e.g,i=qb(t),s=e.skeleton;if(!s)throw new Error("sem esqueleto");let r={};s.bones.forEach((_,p)=>{r[_.node]=p});for(let _ of Object.values(i))for(let p of _.tracks)p.bone=r[p.node]??-1;let o=new Map;for(let _ of e.meshInstances)o.has(_.meshIndex)||o.set(_.meshIndex,c0(t,_.meshIndex)),_.aabb=o.get(_.meshIndex);let a=.01;for(let _ of e.meshInstances)a=Math.max(a,_.aabb.max[1]);let c=jb/a,l={model:e,g:t,bones:s.bones,boneIndex:s.index,clips:i,baseScale:c,top:a,binds:e.skin.binds},h=e.meshInstances.find(_=>_.name.toLowerCase().includes("hand"));if(h){let _=h.aabb;l.handRadius=_.size[2]*.5*c,l.handRest=[(_.max[0]-_.size[2]*.5)*c,_.centre[1]*c,_.centre[2]*c]}else l.handRadius=0,l.handRest=[0,0,0];let u=e.meshInstances.find(_=>_.name.toLowerCase().includes("head"));u&&(l.headMeshIndex=u.meshIndex,l.headCentre=u.aabb.centre.slice(),l.headRadii=u.aabb.half.slice());let f=_=>{let p=Ei.slice(),d=_;for(;d>=0&&d!==e.rootId;)p=At(e.nodes[d].xf,p),d=e.nodes[d].parent;return p};l.skelInScene=At(s.parentNode>=0?f(s.parentNode):Ei.slice(),s.xf),l.skelToRig=_=>At([_,0,0,0,_,0,0,0,_,0,0,0],l.skelInScene);let m={l:["hand.l","hand_l","hand.L"],r:["hand.r","hand_r","hand.R"]},g=[];for(let _ of["l","r"])for(let p of m[_])if(p in s.index){g.push(s.index[p]);break}if(l.handBone={l:-1,r:-1},l.handOffset={l:[0,0,0],r:[0,0,0]},g.length===2&&l.handRadius>0){let _=l.skelToRig(c),p=At(_,s.bones[g[0]].grest)[9],d=At(_,s.bones[g[1]].grest)[9],M=p>d;l.handBone.r=M?g[0]:g[1],l.handBone.l=M?g[1]:g[0];for(let y of["l","r"]){let x=At(_,s.bones[l.handBone[y]].grest),w=[l.handRest[0]*(y==="r"?1:-1),l.handRest[1],l.handRest[2]];l.handOffset[y]=[w[0]-x[9],w[1]-x[10],w[2]-x[11]]}}return l}function u0(n,e,t,i={}){let s=n.clips[e],r=n.bones.map(a=>{let c=n.g.json.nodes[a.node];return{t:(c.translation||[0,0,0]).slice(),q:(c.rotation||[0,0,0,1]).slice(),s:(c.scale||[1,1,1]).slice()}});if(!s)return r;let o=!!i.loop;for(let a of s.tracks){if(a.bone<0)continue;let c=Yb(a,t,s.length,o);if(!c)continue;let l=r[a.bone];a.path==="translation"?l.t=c:a.path==="rotation"?l.q=c:l.s=c}return r}function eS(n){return s0(n.t,n.q,n.s)}function tS(n,e){let t=new Array(e.length);for(let i=0;i<e.length;i++){let s=eS(e[i]),r=n.bones[i].parent;t[i]=r<0?s:At(t[r],s)}return t}function nS(n,e,t={}){let i=Kb(e);t.left&&cf[i]&&n.clips[cf[i]]&&(i=cf[i]),n.clips[i]||(i="idle");let s=n.clips[i],o=Math.min(Math.max(Zb(e),0),1)*Math.max(s.length,0),a=u0(n,i,o,{loop:i==="idle"||i==="jog"});return ff(n,a,t,i,o)}function f0(n,e={}){return nS(n,"idle",e)}function uf(n,e,t,i={}){let s=u0(n,e,t,i);return ff(n,s,i,e,t)}function d0(n,e,t,i,s={}){if(i<=0)return e;if(i>=1)return t;let r=(a,c)=>[a[0]+(c[0]-a[0])*i,a[1]+(c[1]-a[1])*i,a[2]+(c[2]-a[2])*i],o=e.local.map((a,c)=>({t:r(a.t,t.local[c].t),q:o0(a.q,t.local[c].q,i),s:r(a.s,t.local[c].s)}));return ff(n,o,s,t.clip,t.time)}function ff(n,e,t,i,s){let r=t.height===void 0?.5:t.height,o=n.baseScale*Qb(r),a=tS(n,e),c={clip:i,time:s,local:e,global:a,sceneScale:o,hands:null,handRadius:n.handRadius,handScale:n.handRadius>0?n.handRadius/$b:1};if(n.handBone.l>=0&&n.handBone.r>=0){let l=n.skelToRig(o),h=u=>{let f=At(l,a[n.handBone[u]]),m=n.handOffset[u];return[f[9]+m[0],f[10]+m[1],f[11]+m[2]]};c.hands={l:h("l"),r:h("r"),animated:!0}}else if(n.handRest[0]!==0||n.handRest[1]!==0||n.handRest[2]!==0){let l=n.handRest;c.hands={r:l.slice(),l:[-l[0],l[1],l[2]],animated:!1}}return c}function iS(n,e){let t=n.json;if(e===void 0||e<0)return null;let i=t.materials[e],s=i.pbrMetallicRoughness||{},r={name:rS(i.name),color:(s.baseColorFactor||[1,1,1,1]).slice(),colorSrgb:sS(s.baseColorFactor||[1,1,1,1]),metallic:s.metallicFactor===void 0?1:s.metallicFactor,roughness:s.roughnessFactor===void 0?1:s.roughnessFactor,emissive:(i.emissiveFactor||[0,0,0]).slice(),doubleSided:!!i.doubleSided,alphaMode:i.alphaMode||"OPAQUE",alphaCutoff:i.alphaCutoff===void 0?.5:i.alphaCutoff,unlit:!!(i.extensions&&i.extensions.KHR_materials_unlit),baseColorTexture:null};if(s.baseColorTexture){let o=t.textures[s.baseColorTexture.index],a=t.images[o.source];r.baseColorTexture={index:o.source,mimeType:a.mimeType,bytes:oS(n,a),texCoord:s.baseColorTexture.texCoord||0}}return r}function lf(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055}function sS(n){return[lf(n[0]),lf(n[1]),lf(n[2]),n[3]]}function rS(n){return n===void 0?"":String(n)}function oS(n,e){if(e.bufferView===void 0)return null;let t=n.json.bufferViews[e.bufferView],i=t.byteOffset||0;return n.bin.subarray(i,i+t.byteLength)}function p0(n,e,t={}){let i=n.json.meshes[e],s=t.winding!=="gltf",r=i.extras&&i.extras.targetNames||[],o=i.primitives.reduce((l,h)=>Math.max(l,(h.targets||[]).length),0),a=[];for(let l=0;l<o;l++)a.push(r[l]!==void 0?String(r[l]):"morph_"+l);let c=i.primitives.map(l=>{if(l.mode!==void 0&&l.mode!==4)throw new Error("so triangulos");let h=l.attributes,u=Jt(n,h.POSITION).data,f=u.length/3,m={v:u,n:h.NORMAL!==void 0?Jt(n,h.NORMAL).data:null,uv:h.TEXCOORD_0!==void 0?Jt(n,h.TEXCOORD_0).data:null,nv:f};if(h.TANGENT!==void 0&&(m.tangent=Jt(n,h.TANGENT).data),h.COLOR_0!==void 0&&(m.color=Jt(n,h.COLOR_0).data),h.JOINTS_0!==void 0){let g=Jt(n,h.JOINTS_0).data,_=Jt(n,h.WEIGHTS_0).data,p=h.JOINTS_1!==void 0,d=p?8:4,M=new Int32Array(f*d),y=new Float32Array(f*d),x=p?Jt(n,h.JOINTS_1).data:null,w=p?Jt(n,h.WEIGHTS_1).data:null,S=Math.fround;for(let A=0;A<f;A++){let T=0;for(let v=0;v<4;v++)M[A*d+v]=g[A*4+v],y[A*d+v]=_[A*4+v],T=S(T+_[A*4+v]);if(p)for(let v=0;v<4;v++)M[A*d+4+v]=x[A*4+v],y[A*d+4+v]=w[A*4+v],T=S(T+w[A*4+v]);if(T>0)for(let v=0;v<d;v++)y[A*d+v]=S(Math.trunc(S(S(y[A*d+v]/T)*65535))/65535)}m.bones=M,m.weights=y,m.nInfl=d}if(l.indices!==void 0){let g=Jt(n,l.indices).data,_=Int32Array.from(g);if(s)for(let p=0;p+2<_.length;p+=3){let d=_[p+1];_[p+1]=_[p+2],_[p+2]=d}m.idx=_}else m.idx=null;return m.shapes=(l.targets||[]).map(g=>{let _=Jt(n,g.POSITION).data,p=new Float32Array(_.length);for(let d=0;d<p.length;d++)p[d]=u[d]+_[d];return p}),m.material=iS(n,l.material),m});return{name:i.name,blendShapeNames:a,surfaces:c,aabb:c0(n,e)}}var n0=.25;var i0=[-1,0,0,0,1,0,0,0,1,0,0,0];function So(n){return At(i0,At(n,i0))}function aS(n){return n&&typeof n=="object"&&"hair_fit_deep"in n?Math.min(Math.max(Number(n.hair_fit_deep),0),n0):n0}function cS(n,e={}){let t=a0(n),i=t.g,s=!!e.flip,r=t.skeleton,o=Ei.slice();if(r){let h=r.xf,u=r.parentNode;for(;u>=0&&u!==t.rootId;)h=At(t.nodes[u].xf,h),u=t.nodes[u].parent;o=h}let c=lS(t).map(h=>{let u=h.xfRoot,f=[];h.skinned&&(f=t.skin.binds.map(_=>{let p=r.index[_.name];return At(At(o,p!==void 0?r.bones[p].grest:Ei),_.pose)}));let m=p0(i,h.meshIndex,{winding:e.winding}),g=m.surfaces.map(_=>({vf:_.v,n:_.n,uv:_.uv,bones:_.bones||null,w:_.weights||null,nInfl:_.nInfl||0,idx:_.idx,shapes:_.shapes,material:_.material,nv:_.nv,tangent:_.tangent||null}));return s&&(u=So(u),f=f.map(So),g=g.map(_=>{let p=y=>{if(!y)return y;let x=Float32Array.from(y);for(let w=0;w<x.length;w+=3)x[w]=-x[w];return x},d=_.idx?Int32Array.from(_.idx):Int32Array.from({length:_.nv},(y,x)=>x);for(let y=0;y+2<d.length;y+=3){let x=d[y+1];d[y+1]=d[y+2],d[y+2]=x}let M=_.tangent;if(M){M=Float32Array.from(M);for(let y=0;y<M.length;y+=4)M[y]=-M[y],M[y+3]=-M[y+3]}return{..._,vf:p(_.vf),n:p(_.n),shapes:_.shapes.map(p),idx:d,tangent:M}})),{name:h.name,node:h.node,skinned:h.skinned,xf:u,binds:f,deep:aS(h.extras),tails:h.skinned?t.skin.tail:new Uint8Array(0),extras:h.extras,shapeNames:m.blendShapeNames,surfaces:g,aabb:m.aabb}}),l=r?r.bones.map(h=>({name:h.name,parent:h.parent,rest:s?So(h.rest):h.rest,grest:s?So(h.grest):h.grest})):[];return{model:t,name:t.rootName,flip:s,parts:c,skeleton:r?{bones:l,toSkeleton:s?So(o):o,index:r.index}:null,nodes:t.nodes}}function lS(n){let e=[],t=new Map(n.meshInstances.map(o=>[o.node,o])),i=n.skeleton,s=n.meshInstances.filter(o=>o.skinned),r=o=>{let a=n.nodes[o];if(i&&o===i.rootJoint){for(let c of s)e.push(c);return}if(!a.isJoint){t.has(o)&&!t.get(o).skinned&&e.push(t.get(o));for(let c of a.children)r(c)}};return r(n.rootId),e}function Ao(n,e={}){return cS(n,e)}function df(n){let e=p0(n.g,n.headMeshIndex);return{centre:n.headCentre.slice(),radii:n.headRadii.slice(),blendShapeNames:e.blendShapeNames,meshIndex:n.headMeshIndex,surfaces:e.surfaces.map(t=>({v:t.v,i:t.idx,bones:t.bones||null,w:t.weights||null,shapes:t.shapes,n:t.n,uv:t.uv}))}}function hf(n){let e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i="";for(let s=0;s<e.length;s+=3){let r=e[s],o=s+1<e.length?e[s+1]:0,a=s+2<e.length?e[s+2]:0;i+=t[r>>2]+t[(r&3)<<4|o>>4]+(s+1<e.length?t[(o&15)<<2|a>>6]:"=")+(s+2<e.length?t[a&63]:"=")}return i}function m0(n){return n.surfaces.map(e=>({v:hf(e.v),i:e.i?hf(e.i):void 0,shapes:e.shapes.map(hf)}))}var xt={eyes:[{base:["eye_1.png",1024,1024],uc:[.5,.482421875],rc:[.560546875,.482421875],lc:[.439453125,.482421875],tint:["eye_1_iris.png",1024,1024],line:["eye_1_line.png",1024,1024],lash:["eye_1_lash.png",1024,1024]},{base:["eye_2.png",1024,1024],uc:[.498046875,.4970703125],rc:[.576171875,.4970703125],lc:[.416015625,.4970703125],tint:["eye_2_iris.png",1024,1024],line:["eye_2_line.png",1024,1024],lash:["eye_2_lash.png",1024,1024]},{base:["eye_3.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eye_3_iris.png",1024,1024],line:["eye_3_line.png",1024,1024],lash:null},{base:["eye_4.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eye_4_iris.png",1024,1024],line:["eye_4_line.png",1024,1024],lash:null},{base:["eye_5.png",1024,1024],uc:[.5,.4931640625],rc:[.5986328125,.4931640625],lc:[.4013671875,.4931640625],tint:["eye_5_iris.png",1024,1024],line:["eye_5_line.png",1024,1024],lash:["eye_5_lash.png",1024,1024]},{base:["eye_6.png",1024,1024],uc:[.5,.73291015625],rc:[.3671875,.73291015625],lc:[.6328125,.73291015625],tint:["eye_6_iris.png",1024,1024],line:["eye_6_line.png",1024,1024],lash:null},{base:["eye_7.png",1024,1024],uc:[.5,.68603515625],rc:[.3955078125,.68603515625],lc:[.6044921875,.68603515625],tint:["eye_7_iris.png",1024,1024],line:["eye_7_line.png",1024,1024],lash:["eye_7_lash.png",1024,1024]},{base:["eye_8.png",1024,1024],uc:[.5,.73046875],rc:[.447265625,.73046875],lc:[.552734375,.73046875],tint:["eye_8_iris.png",1024,1024],line:["eye_8_line.png",1024,1024],lash:null},{base:["eye_9.png",1024,1024],uc:[.5,.73046875],rc:[.447265625,.73046875],lc:[.552734375,.73046875],tint:["eye_9_iris.png",1024,1024],line:["eye_9_line.png",1024,1024],lash:["eye_9_lash.png",1024,1024]},{base:["eye_10.png",1024,1024],uc:[.5,.40576171875],rc:[.5341796875,.40576171875],lc:[.4658203125,.40576171875],tint:["eye_10_iris.png",1024,1024],line:["eye_10_line.png",1024,1024],lash:["eye_10_lash.png",1024,1024]},{base:["eye_11.png",1024,1024],uc:[.5,.49072265625],rc:[.5888671875,.49072265625],lc:[.4111328125,.4912109375],tint:["eye_11_iris.png",1024,1024],line:["eye_11_line.png",1024,1024],lash:null},{base:["eye_12.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eye_12_iris.png",1024,1024],line:["eye_12_line.png",1024,1024],lash:null},{base:["eye_13.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eye_13_iris.png",1024,1024],line:["eye_13_line.png",1024,1024],lash:null},{base:["eye_14.png",1024,1024],uc:[.50048828125,.5224609375],rc:[.59375,.5224609375],lc:[.4072265625,.5224609375],tint:["eye_14_iris.png",1024,1024],line:["eye_14_line.png",1024,1024],lash:null},{base:["eye_15.png",1024,1024],uc:[.5,.53759765625],rc:[.6083984375,.53759765625],lc:[.3916015625,.53759765625],tint:["eye_15_iris.png",1024,1024],line:["eye_15_line.png",1024,1024],lash:null},{base:["eye_16.png",1024,1024],uc:[.5,.505859375],rc:[.5986328125,.505859375],lc:[.4013671875,.505859375],tint:["eye_16_iris.png",1024,1024],line:["eye_16_line.png",1024,1024],lash:null},{base:["eye_17.png",1024,1024],uc:[.5,.529296875],rc:[.6025390625,.529296875],lc:[.3974609375,.529296875],tint:["eye_17_iris.png",1024,1024],line:["eye_17_line.png",1024,1024],lash:["eye_17_lash.png",1024,1024]},{base:["eye_18.png",1024,1024],uc:[.5,.56591796875],rc:[.689453125,.56591796875],lc:[.310546875,.56591796875],tint:["eye_18_iris.png",1024,1024],line:["eye_18_line.png",1024,1024],lash:["eye_18_lash.png",1024,1024]},{base:["eye_19.png",1024,1024],uc:[.5,.52490234375],rc:[.6015625,.52490234375],lc:[.3984375,.52490234375],tint:["eye_19_iris.png",1024,1024],line:["eye_19_line.png",1024,1024],lash:["eye_19_lash.png",1024,1024]},{base:["eye_20.png",1024,1024],uc:[.5,.52197265625],rc:[.619140625,.52197265625],lc:[.380859375,.52197265625],tint:["eye_20_iris.png",1024,1024],line:["eye_20_line.png",1024,1024],lash:["eye_20_lash.png",1024,1024]},{base:["eye_21.png",1024,1024],uc:[.5,.515625],rc:[.61328125,.515625],lc:[.38671875,.515625],tint:["eye_21_iris.png",1024,1024],line:["eye_21_line.png",1024,1024],lash:["eye_21_lash.png",1024,1024]},{base:["eye_22.png",512,512],uc:[.5,.533203125],rc:[.599609375,.533203125],lc:[.400390625,.533203125],tint:["eye_22_iris.png",512,512],line:["eye_22_line.png",512,512],lash:null},{base:["eye_23.png",1024,1024],uc:[.5,.50927734375],rc:[.5986328125,.50927734375],lc:[.4013671875,.50927734375],both:!0,tint:["eye_23_iris.png",1024,1024],line:["eye_23_line.png",1024,1024],lash:null},{base:["eyes_24.png",1024,1024],uc:[.5,.55712890625],rc:[.509765625,.55712890625],lc:[.4892578125,.55712890625],tint:["eyes_24_iris.png",1024,1024],line:["eyes_24_line.png",1024,1024],lash:null},{base:["eye_25.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eye_25_iris.png",1024,1024],line:["eye_25_line.png",1024,1024],lash:null},{base:["eyes_25.png",1024,1024],uc:[.5,.57421875],rc:[.4521484375,.57421875],lc:[.5478515625,.57421875],tint:["eyes_25_iris.png",1024,1024],line:["eyes_25_line.png",1024,1024],lash:null},{base:["eyes_26.png",1024,1024],uc:[.5,.47119140625],rc:[.521484375,.47119140625],lc:[.478515625,.47119140625],tint:["eyes_26_iris.png",1024,1024],line:["eyes_26_line.png",1024,1024],lash:null},{base:["eyes_27.png",1024,1024],uc:[.5,.46728515625],rc:[.546875,.46728515625],lc:[.453125,.46728515625],tint:["eyes_27_iris.png",1024,1024],line:["eyes_27_line.png",1024,1024],lash:["eyes_27_lash.png",1024,1024]},{base:["eyes_28.png",1024,1024],uc:[.5,.49462890625],rc:[.546875,.49462890625],lc:[.453125,.49462890625],tint:["eyes_28_iris.png",1024,1024],line:["eyes_28_line.png",1024,1024],lash:["eyes_28_lash.png",1024,1024]},{base:["eyes_29.png",1024,1024],uc:[.5,.533203125],rc:[.6015625,.533203125],lc:[.3984375,.533203125],tint:null,line:null,lash:null},{base:["eyes_30.png",1024,1024],uc:[.5,.53369140625],rc:[.5986328125,.53369140625],lc:[.4013671875,.53369140625],tint:["eyes_30_iris.png",1024,1024],line:["eyes_30_line.png",1024,1024],lash:["eyes_30_lash.png",1024,1024]},{base:["eyes_31.png",1024,1024],uc:[.5,.5693359375],rc:[.5986328125,.5693359375],lc:[.4013671875,.5693359375],tint:["eyes_31_iris.png",1024,1024],line:["eyes_31_line.png",1024,1024],lash:["eyes_31_lash.png",1024,1024]}],brows:[{base:["brow_1.png",1024,1024],uc:[.5,.27197265625],rc:[.5693359375,.27197265625],lc:[.431640625,.27197265625],tint:null,line:null,lash:null},{base:["brow_2.png",1024,1024],uc:[.5,.2431640625],rc:[.5712890625,.2431640625],lc:[.4287109375,.2431640625],tint:null,line:null,lash:null},{base:["brow_3.png",1024,1024],uc:[.5,.24658203125],rc:[.5712890625,.24658203125],lc:[.4287109375,.24755859375],tint:null,line:null,lash:null},{base:["brow_4.png",1024,1024],uc:[.49951171875,.23583984375],rc:[.611328125,.23583984375],lc:[.3876953125,.23583984375],tint:null,line:null,lash:null},{base:["brow_5.png",1024,1024],uc:[.5,.2265625],rc:[.56640625,.2265625],lc:[.43359375,.2265625],tint:null,line:null,lash:null},{base:["brow_6.png",1024,1024],uc:[.5,.248046875],rc:[.6025390625,.248046875],lc:[.3974609375,.248046875],tint:null,line:null,lash:null},{base:["brow_7.png",1024,1024],uc:[.5,.2412109375],rc:[.5517578125,.2412109375],lc:[.4482421875,.2412109375],tint:null,line:null,lash:null}],nose:[{base:["nose_1.png",1024,1024],uc:[.466796875,.67041015625],rc:[.0029296875,.669921875],lc:[.9306640625,.67041015625],tint:null,line:null,lash:null},{base:["nose_2.png",1024,1024],uc:[.5,.6728515625],rc:[.1806640625,.67236328125],lc:[.8193359375,.6728515625],tint:null,line:null,lash:null},{base:["nose_3.png",1024,1024],uc:[.4990234375,.63330078125],rc:[.01953125,.63330078125],lc:[.978515625,.63330078125],tint:null,line:null,lash:null},{base:["nose_4.png",1024,1024],uc:[.45556640625,.62744140625],rc:[.5,.449999988079071],lc:[.9111328125,.62744140625],tint:null,line:null,lash:null},{base:["nose_5.png",1024,1024],uc:[.5,.62548828125],rc:[.0517578125,.62548828125],lc:[.9482421875,.62548828125],tint:null,line:null,lash:null}],mouth:[{base:["mouth_1.png",1024,1024],uc:[.5,.84716796875],rc:[.1083984375,.84716796875],lc:[.8916015625,.84716796875],tint:null,line:null,lash:null},{base:["mouth_2.png",1024,1024],uc:[.5,.841796875],rc:[.0830078125,.841796875],lc:[.9169921875,.841796875],tint:null,line:null,lash:null},{base:["mouth_3.png",1024,1024],uc:[.5,.8603515625],rc:[.111328125,.8603515625],lc:[.888671875,.8603515625],tint:null,line:null,lash:null},{base:["mouth_4.png",1024,1024],uc:[.5,.89697265625],rc:[.173828125,.89697265625],lc:[.826171875,.89697265625],tint:null,line:null,lash:null},{base:["mouth_5.png",1024,1024],uc:[.48095703125,.85205078125],rc:[.1162109375,.87060546875],lc:[.845703125,.85205078125],tint:null,line:null,lash:null},{base:["mouth_6.png",1024,1024],uc:[.50537109375,.8681640625],rc:[.0927734375,.8681640625],lc:[.91796875,.869140625],tint:null,line:null,lash:null},{base:["mouth_7.png",1024,1024],uc:[.5,.853515625],rc:[.09375,.853515625],lc:[.90625,.853515625],tint:null,line:null,lash:null},{base:["mouth_8.png",1024,1024],uc:[.5,.810546875],rc:[.3251953125,.810546875],lc:[.6748046875,.810546875],tint:null,line:null,lash:null},{base:["mouth_9.png",1024,1024],uc:[.5,.8515625],rc:[.1328125,.8515625],lc:[.8671875,.8515625],tint:null,line:null,lash:null},{base:["mouth_10.png",1024,1024],uc:[.5,.84765625],rc:[.216796875,.84765625],lc:[.783203125,.84765625],tint:null,line:null,lash:null},{base:["mouth_11.png",1024,1024],uc:[.4931640625,.84814453125],rc:[.08203125,.8486328125],lc:[.904296875,.84814453125],tint:null,line:null,lash:null},{base:["mouth_12.png",1024,1024],uc:[.50048828125,.8642578125],rc:[.083984375,.8642578125],lc:[.9169921875,.841796875],tint:null,line:null,lash:null},{base:["mouth_13.png",1024,1024],uc:[.5,.8642578125],rc:[.083984375,.8642578125],lc:[.916015625,.8642578125],tint:null,line:null,lash:null},{base:["mouth_14.png",1024,1024],uc:[.5,.85205078125],rc:[.154296875,.85205078125],lc:[.845703125,.85205078125],tint:null,line:null,lash:null},{base:["mouth_15.png",1024,1024],uc:[.4912109375,.78125],rc:[.1337890625,.78125],lc:[.8486328125,.78125],tint:null,line:null,lash:null},{base:["mouth_16.png",1024,1024],uc:[.49951171875,.8369140625],rc:[.095703125,.8369140625],lc:[.9033203125,.8369140625],tint:null,line:null,lash:null},{base:["mouth_17.png",1024,1024],uc:[.5,.8330078125],rc:[.0830078125,.8330078125],lc:[.9169921875,.8330078125],tint:null,line:null,lash:null}],blush:[{key:"circle",tex:["circle.png",512,512],cl:[.34375,.7646484375],cr:[.65625,.7646484375]},{key:"dashes",tex:["dashes.png",512,512],cl:[.552734375,.8603515625],cr:[.423828125,.8603515625]},{key:"band",tex:["band.png",512,512],cl:[.6796875,.5810546875],cr:[.3203125,.5810546875]},{key:"freckles",tex:["freckles.png",512,512],cl:[.31640625,.7958984375],cr:[.685546875,.7958984375]},{key:"aublush",tex:["aublush.png",1024,1024],cl:[.232421875,.81591796875],cr:[.767578125,.81591796875]},{key:"blushwhisk",tex:["blushwhisk.png",512,512],cl:[.267578125,.7666015625],cr:[.734375,.7666015625]},{key:"swirl",tex:["swirl.png",512,512],cl:[.314453125,.791015625],cr:[.685546875,.791015625]}]};var ft=512,wo=64,ws=ft+wo*2,hS=.66*ws/ft,uS=15,fS=.055;var Oe=Math.fround,Wt=(n,e,t)=>n+(e-n)*t,vn=(n,e,t)=>Math.min(Math.max(n,e),t),dS=new Set(["duckbeak","facemask"]),pS=["head","head2","head3","face","face2","face3","extra","extra2","extra3"];function vc(n,e=[0,0,0,1]){if(typeof n!="string")return e;let t=n.startsWith("#")?n.slice(1):n;if((t.length===3||t.length===4)&&(t=[...t].map(s=>s+s).join("")),!/^[0-9a-fA-F]+$/.test(t)||t.length!==6&&t.length!==8)return e;let i=s=>parseInt(t.slice(s,s+2),16)/255;return[i(0),i(2),i(4),t.length===8?i(6):1]}function g0(n){let e=(f,m)=>{let g=n[f];return typeof g=="number"&&Number.isFinite(g)?vn(g,0,1):m},t=(f,m,g,_)=>{let p=n[f];return typeof p=="number"&&Number.isFinite(p)?vn(Math.trunc(p),g,_):m},i=xt.eyes.length,s=xt.brows.length,r=xt.mouth.length,o=xt.nose.length,a={};a.eyeShape=t("es",0,0,Math.max(3,i-1)),a.eyeColor=vc(n.eyc),a.lashColor=vc(n.elc),a.browColor=vc(n.bwc),a.eyeSize=e("ez",.5),a.eyeWidth=e("ew",a.eyeSize),a.eyeSizeY=e("eyz",a.eyeSize),a.eyeHeight=e("eh",.5),a.eyeSpacing=e("ex",.5),a.eyeRot=e("er",.5),a.eyeX=e("epx",.5),a.browShape=t("bs",0,-1,Math.max(2,s-1)),a.browHeight=e("bh",.5),a.browRot=e("br",.5),a.browSpacing=e("bsp",.5),a.browSize=e("bsz",.5),a.browWidth=e("bwid",a.browSize),a.browSizeY=e("bht",a.browSize),a.browX=e("bpx",.5),a.mouthShape=t("ms",0,0,Math.max(4,r-1)),a.mouthSize=e("mz",.5),a.mouthWidth=e("mw",a.mouthSize),a.mouthSizeY=e("my",a.mouthSize),a.mouthHeight=e("mh",.5),a.mouthRot=e("mr",.5),a.mouthX=e("mpx",.5),a.noseShape=t("ns",0,-1,Math.max(2,o-1)),a.noseSize=e("nz",.5),a.noseWidth=e("nw",a.noseSize),a.noseSizeY=e("ny",a.noseSize),a.noseHeight=e("nh",.5),a.noseX=e("nx",.5),a.noseFlip=n.nfl===!0,a.blushSize=e("bz",.5),a.blushWidth=e("bw",.5),a.blushHeight=e("bhy",.5),a.blushSpacing=e("bx",.5),a.blushOpacity=e("bo",.5),a.blushRot=e("blr",.5),a.blush=n.bl===!0;let c=xt.blush.map(f=>f.key),l=t("blsh",0,0,Math.max(3,c.length-1)),h=typeof n.blk=="string"?c.indexOf(n.blk):-1;h>=0&&(l=h),a.blushShape=vn(l,0,c.length-1),a.blushColor=vc(n.blc,[245/255,133/255,133/255,1]),a.hidesMouth=!1;let u=n.acc;if(u&&typeof u=="object")for(let f of pS){let m=u[f];m&&dS.has(String(m.id||""))&&(a.hidesMouth=!0)}return a}function _0(n){let e=g0(n),t=[],i=(r,o)=>{o&&t.push(r+"/"+o[0])};e.blush&&xt.blush[e.blushShape].key!=="circle"&&i("blush",xt.blush[e.blushShape].tex),e.browShape>=0&&i("brows",xt.brows[vn(e.browShape,0,xt.brows.length-1)].base);let s=xt.eyes[vn(e.eyeShape,0,xt.eyes.length-1)];if(s.line?(i("eyes",s.line),i("eyes",s.tint),i("eyes",s.lash)):(i("eyes",s.tint),i("eyes",s.base)),e.noseShape>=0){let r=xt.nose[vn(e.noseShape,0,xt.nose.length-1)];i("nose",r.tint),i("nose",r.base)}if(!e.hidesMouth){let r=xt.mouth[vn(e.mouthShape,0,xt.mouth.length-1)];i("mouth",r.tint),i("mouth",r.base)}return t}var Rr=(n,e,t)=>[(n[0]-e[0])*(1-t),(n[1]-e[1])*(1-t)];function mS(n,e,t){let i=g0(n),s=typeof t=="function"?t:_=>t?t[_]:null,r=e(ws,ws),o=r.getContext("2d");o.imageSmoothingEnabled=!0,o.imageSmoothingQuality="high";let a=new Map;function c(_,p,d,M){let y=_+"|"+p.join(",")+"|"+d+"|"+(M?M.join(","):"");if(a.has(y))return a.get(y);let x=s(_),w=null;if(x){let[S,A,T,v]=p,b=e(T,v),C=b.getContext("2d");if(C.drawImage(x,S,A,T,v,0,0,T,v),d){let L=C.getImageData(0,0,T,v),P=L.data,U=M[0],k=M[1],F=M[2],O=M[3];for(let D=0;D<P.length;D+=4)d==="fill"?(P[D]=Math.round(U*255),P[D+1]=Math.round(k*255),P[D+2]=Math.round(F*255)):(P[D]=Math.round(P[D]*U),P[D+1]=Math.round(P[D+1]*k),P[D+2]=Math.round(P[D+2]*F)),P[D+3]=Math.round(P[D+3]*O);C.putImageData(L,0,0)}w=b}return a.set(y,w),w}function l(_,p,d,M,y,x){_&&(o.save(),o.translate(wo,wo),o.translate(p[0]+d[0],p[1]+d[1]),o.rotate(M),o.scale(y[0],y[1]),o.translate(-d[0],-d[1]),x&&(o.translate(p[2],0),o.scale(-1,1)),o.drawImage(_,0,0,_.width,_.height,0,0,p[2],p[3]),o.restore())}let h=ft/2;function u(_,p,d,M,y,x,w,S,A,T){l(c(_,p,d,M),[T*ft+w[0],w[1],h,ft],x,A,S,y)}let f=_=>[_[1]>>1,0,_[1]-(_[1]>>1),_[2]],m=_=>[0,0,_[1]>>1,_[2]];if(i.blush){let _=xt.blush[i.blushShape],p=i.blushColor;if(_.key!=="circle"&&_.tex){let d=_.tex,M="blush/"+d[0],y=[p[0],p[1],p[2],Wt(.12,.98,i.blushOpacity)],x=[1+(i.blushWidth-.5)*.9,1+(i.blushSize-.5)*.9],w=(i.blushSpacing-.5)*220,S=(i.blushHeight-.5)*260,A=(i.blushRot-.5)*Math.PI*.5;u(M,f(d),"mul",y,!1,[_.cr[0]*h,_.cr[1]*ft],[w,S],x,A,.5),u(M,m(d),"mul",y,!1,[_.cl[0]*h,_.cl[1]*ft],[-w,S],x,-A,0)}else{let d=.2926829268292683,M=105/61.5,y=52*Wt(d,M,i.blushSize),x=52*1.6*Wt(d,M,i.blushWidth),w=Wt(-40,115,i.blushSpacing),S=ft*.24+w,A=ft*.7+(i.blushHeight-.5)*260,T=(i.blushRot-.5)*Math.PI*.5,v=[p[0],p[1],p[2],Wt(.12,.92,i.blushOpacity)],b=gS(e,v);for(let[C,L]of[[h+S,T],[h-S,-T]])o.save(),o.translate(wo+C,wo+A),o.rotate(L),o.drawImage(b,0,0,b.width,b.height,-x,-y,x*2,y*2),o.restore()}}if(i.browShape>=0){let _=vn(i.browShape,0,xt.brows.length-1),p=xt.brows[_],d=p.base,M="brows/"+d[0],y=[Wt(.65,1.35,i.browWidth),Wt(.65,1.35,i.browSizeY)],x=Wt(-55,105,i.browSpacing),w=(i.browHeight-.5)*-360,S=(i.browX-.5)*270,A=(i.browRot-.5)*Math.PI,T=[p.rc[0]*h,p.rc[1]*ft],v=[(1-p.rc[0])*h,p.rc[1]*ft],b=[ft*.13,ft*.27],C=[h-ft*.13,ft*.27],L=i.browColor,P=!(L[0]===0&&L[1]===0&&L[2]===0&&L[3]===1),U=P?"fill":null,k=P?L:null,F=Rr(b,T,1),O=Rr(C,v,1);u(M,f(d),U,k,!1,T,[x+S+F[0],w+F[1]],y,A,.5),u(M,f(d),U,k,!0,v,[-x+S+O[0],w+O[1]],y,-A,0)}{let _=vn(i.eyeShape,0,xt.eyes.length-1),p=xt.eyes[_],d=[Wt(.6,1.6,i.eyeWidth),Wt(.6,1.6,i.eyeSizeY)],M=Wt(-70,120,i.eyeSpacing),y=(i.eyeHeight-.5)*-390,x=(i.eyeX-.5)*270,w=(i.eyeRot-.5)*Math.PI,S=[p.rc[0]*h,p.rc[1]*ft],A=[(1-p.rc[0])*h,p.rc[1]*ft],T=!!p.both;T&&(A=[p.lc[0]*h,p.lc[1]*ft]);let v=[ft*.115,ft*.45],b=[h-ft*.115,ft*.45],C=Rr(v,S,1.1),L=Rr(b,A,1.1),P=[M+x+C[0],y+C[1]],U=[-M+x+L[0],y+L[1]],k=(F,O,D)=>{let q="eyes/"+F[0];u(q,f(F),O,D,!1,S,P,d,w,.5),u(q,T?m(F):f(F),O,D,!T,A,U,d,-w,0)};p.line?(k(p.line,null,null),p.tint&&k(p.tint,"mul",i.eyeColor),p.lash&&k(p.lash,"mul",i.lashColor)):(p.tint&&k(p.tint,"mul",i.eyeColor),k(p.base,null,null))}let g=(_,p,d,M,y,x)=>{let w=[d[0],d[1],ft,ft];for(let S of[p.tint,p.base])S&&l(c(_+"/"+S[0],[0,0,S[1],S[2]],null,null),w,M,x,y,!1)};if(i.noseShape>=0){let _=xt.nose[vn(i.noseShape,0,xt.nose.length-1)],p=[Wt(.55,1.55,i.noseWidth)*(i.noseFlip?-1:1),Wt(.55,1.55,i.noseSizeY)],d=[_.uc[0]*ft,_.uc[1]*ft],M=Rr([256,290],d,1.05);g("nose",_,[(i.noseX-.5)*240+M[0],(i.noseHeight-.5)*-345+M[1]],d,p,0)}if(!i.hidesMouth){let _=xt.mouth[vn(i.mouthShape,0,xt.mouth.length-1)],p=[Wt(.6,1.6,i.mouthWidth),Wt(.6,1.6,i.mouthSizeY)],d=[_.uc[0]*ft,_.uc[1]*ft],M=Rr([256,345],d,1.1);g("mouth",_,[(i.mouthX-.5)*270+M[0],(i.mouthHeight-.5)*-300+M[1]],d,p,(i.mouthRot-.5)*Math.PI)}return{canvas:r,ctx:o}}function x0(n,e,t){let{ctx:i}=mS(n,e,t),s=i.getImageData(0,0,ws,ws),r=s.data;for(let o=0;o<r.length;o+=4){let a=r[o+3];a!==255&&(r[o]=Math.round(r[o]*a/255),r[o+1]=Math.round(r[o+1]*a/255),r[o+2]=Math.round(r[o+2]*a/255))}return{width:ws,height:ws,data:r}}function gS(n,e){let i=n(256,256),s=i.getContext("2d"),r=s.createImageData(256,256),o=r.data,a=255*.5,c=Math.round(e[0]*255),l=Math.round(e[1]*255),h=Math.round(e[2]*255);for(let u=0;u<256;u++)for(let f=0;f<256;f++){let m=Math.hypot((f-a)/a,(u-a)/a),g=vn((m-.93)/(1-.93),0,1),_=1-g*g*(3-2*g),p=(u*256+f)*4;o[p]=c,o[p+1]=l,o[p+2]=h,o[p+3]=Math.round(Math.round(_*255)*e[3])}return s.putImageData(r,0,0),i}function _S(n){if(n&&n.aabb)return n.aabb.map(Oe);let e=Array.isArray(n)?n:[n],t=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0],s=r=>{for(let o=0;o<r.length;o+=3)for(let a=0;a<3;a++){let c=r[o+a];c<t[a]&&(t[a]=c),c>i[a]&&(i[a]=c)}};for(let r of e){if(ArrayBuffer.isView(r)){s(r);continue}s(r.positions);for(let o of r.blendShapes||[])s(o)}return[Oe(t[0]),Oe(t[1]),Oe(t[2]),Oe(Oe(i[0])-Oe(t[0])),Oe(Oe(i[1])-Oe(t[1])),Oe(Oe(i[2])-Oe(t[2]))]}function y0(n){let e=_S(n),t=[Oe(e[3]*.5),Oe(e[4]*.5),Oe(e[5]*.5)],i=[Oe(e[0]+Oe(e[3]*.5)),Oe(e[1]+Oe(e[4]*.5)),Oe(e[2]+Oe(e[5]*.5))],s=t[0],r=s*hS,o=s*fS,a=uS,c=a+1,l=new Float32Array(c*c*3),h=new Float32Array(c*c*2),u=new Uint32Array(a*a*6),f=Math.max(t[0],.001),m=Math.max(t[1],.001),g=Math.max(Oe(t[0]*t[0]),1e-4),_=Math.max(Oe(t[1]*t[1]),1e-4),p=Math.max(Oe(t[2]*t[2]),1e-4),d=0,M=0;for(let x=0;x<c;x++)for(let w=0;w<c;w++){let S=w/a,A=x/a;h[M++]=S,h[M++]=A;let T=Wt(-r,r,S),v=Wt(r,-r,A),b=T/f,C=v/m,L=vn(1-b*b-C*C,0,1),P=Oe(T),U=Oe(v),k=Oe(t[2]*Math.sqrt(L)*1.01),F=Oe(P/g),O=Oe(U/_),D=Oe(k/p),q=Oe(Oe(F*F)+Oe(O*O)+Oe(D*D));if(q<1e-6){l[d++]=P,l[d++]=U,l[d++]=Oe(k+o);continue}let Z=Oe(Math.sqrt(q));l[d++]=Oe(P+Oe(Oe(F/Z)*o)),l[d++]=Oe(U+Oe(Oe(O/Z)*o)),l[d++]=Oe(k+Oe(Oe(D/Z)*o))}let y=0;for(let x=0;x<a;x++)for(let w=0;w<a;w++){let S=x*c+w,A=S+1,T=S+c,v=T+1;u[y++]=S,u[y++]=T,u[y++]=A,u[y++]=A,u[y++]=T,u[y++]=v}return{positions:l,uvs:h,indices:u,radii:t,centre:i}}var Qn={};ig(Qn,{IDENT:()=>Ri,add:()=>bc,angleTo:()=>pf,bAxisAngle:()=>ns,bDet:()=>_f,bFromQuat:()=>xf,bInverse:()=>Eo,bMul:()=>Mn,bMulV:()=>Rn,bOrthonormalized:()=>Rs,bRotQuat:()=>Vn,bScale:()=>Ro,bToQuat:()=>v0,bTranspose:()=>gf,cross:()=>Es,dist:()=>xS,dot:()=>To,isZeroApprox:()=>mf,len:()=>es,len2:()=>ts,mul:()=>Ts,norm:()=>Mc,qAngle:()=>Ac,qAxisAngle:()=>yf,qDot:()=>M0,qInv:()=>Co,qMul:()=>Cs,qNorm:()=>Sc,qSlerp:()=>vf,qXform:()=>Ir,sub:()=>Cr,xApply:()=>je,xBasis:()=>yS,xFrom:()=>Io,xInv:()=>Lt,xMul:()=>wt,xOrigin:()=>vS});var bc=(n,e)=>[n[0]+e[0],n[1]+e[1],n[2]+e[2]],Cr=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],Ts=(n,e)=>[n[0]*e,n[1]*e,n[2]*e],To=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],Es=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],es=n=>Math.hypot(n[0],n[1],n[2]),ts=n=>n[0]*n[0]+n[1]*n[1]+n[2]*n[2],xS=(n,e)=>es(Cr(n,e));function Mc(n){let e=ts(n);if(e===0)return[0,0,0];let t=Math.sqrt(e);return[n[0]/t,n[1]/t,n[2]/t]}var pf=(n,e)=>Math.atan2(es(Es(n,e)),To(n,e)),mf=n=>Math.abs(n[0])<1e-5&&Math.abs(n[1])<1e-5&&Math.abs(n[2])<1e-5,Ri=Object.freeze([1,0,0,0,1,0,0,0,1,0,0,0]),Rn=(n,e)=>[n[0]*e[0]+n[3]*e[1]+n[6]*e[2],n[1]*e[0]+n[4]*e[1]+n[7]*e[2],n[2]*e[0]+n[5]*e[1]+n[8]*e[2]];function Mn(n,e){let t=new Array(9);for(let i=0;i<3;i++){let s=Rn(n,[e[i*3],e[i*3+1],e[i*3+2]]);t[i*3]=s[0],t[i*3+1]=s[1],t[i*3+2]=s[2]}return t}var gf=n=>[n[0],n[3],n[6],n[1],n[4],n[7],n[2],n[5],n[8]],_f=n=>n[0]*(n[4]*n[8]-n[7]*n[5])-n[3]*(n[1]*n[8]-n[7]*n[2])+n[6]*(n[1]*n[5]-n[4]*n[2]);function Eo(n){let e=n[0],t=n[3],i=n[6],s=n[1],r=n[4],o=n[7],a=n[2],c=n[5],l=n[8],h=r*l-o*c,u=i*c-t*l,f=t*o-i*r,m=o*a-s*l,g=e*l-i*a,_=i*s-e*o,p=s*c-r*a,d=t*a-e*c,M=e*r-t*s,y=e*h+t*m+i*p,x=1/y;return[h*x,m*x,p*x,u*x,g*x,d*x,f*x,_*x,M*x]}function Rs(n){let e=[n[0],n[1],n[2]],t=[n[3],n[4],n[5]],i=[n[6],n[7],n[8]];return e=Mc(e),t=Mc(Cr(t,Ts(e,To(e,t)))),i=Mc(Cr(Cr(i,Ts(e,To(e,i))),Ts(t,To(t,i)))),[...e,...t,...i]}function Ro(n){let e=_f(n)<0?-1:1;return[es([n[0],n[1],n[2]])*e,es([n[3],n[4],n[5]])*e,es([n[6],n[7],n[8]])*e]}function v0(n){let e=(a,c)=>n[c*3+a],t=e(0,0)+e(1,1)+e(2,2),i,s,r,o;if(t>0){let a=Math.sqrt(t+1)*2,c=1/a;i=(e(2,1)-e(1,2))*c,s=(e(0,2)-e(2,0))*c,r=(e(1,0)-e(0,1))*c,o=a*.25}else if(e(0,0)>e(1,1)&&e(0,0)>e(2,2)){let a=Math.sqrt(e(0,0)-e(1,1)-e(2,2)+1)*2,c=1/a;i=a*.25,s=(e(0,1)+e(1,0))*c,r=(e(0,2)+e(2,0))*c,o=(e(2,1)-e(1,2))*c}else if(e(1,1)>e(2,2)){let a=Math.sqrt(e(1,1)-e(0,0)-e(2,2)+1)*2,c=1/a;s=a*.25,i=(e(0,1)+e(1,0))*c,r=(e(1,2)+e(2,1))*c,o=(e(0,2)-e(2,0))*c}else{let a=Math.sqrt(e(2,2)-e(0,0)-e(1,1)+1)*2,c=1/a;r=a*.25,i=(e(0,2)+e(2,0))*c,s=(e(1,2)+e(2,1))*c,o=(e(1,0)-e(0,1))*c}return Sc([i,s,r,o])}function Vn(n){let e=Rs(n);return _f(e)<0&&(e=e.map(t=>-t)),v0(e)}function xf(n){let[e,t,i,s]=n,r=e*e+t*t+i*i+s*s,o=2/r,a=e*o,c=t*o,l=i*o,h=s*a,u=s*c,f=s*l,m=e*a,g=e*c,_=e*l,p=t*c,d=t*l,M=i*l;return[1-(p+M),g+f,_-u,g-f,1-(m+M),d+h,_+u,d-h,1-(m+p)]}function ns(n,e){let[t,i,s]=n,r=Math.cos(e),o=Math.sin(e),a=1-r;return[r+t*t*a,i*t*a+s*o,s*t*a-i*o,t*i*a-s*o,r+i*i*a,s*i*a+t*o,t*s*a+i*o,i*s*a-t*o,r+s*s*a]}var Sc=n=>{let e=Math.hypot(n[0],n[1],n[2],n[3]);return e===0?[0,0,0,0]:[n[0]/e,n[1]/e,n[2]/e,n[3]/e]},Co=n=>[-n[0],-n[1],-n[2],n[3]];function Cs(n,e){return[n[3]*e[0]+n[0]*e[3]+n[1]*e[2]-n[2]*e[1],n[3]*e[1]+n[1]*e[3]+n[2]*e[0]-n[0]*e[2],n[3]*e[2]+n[2]*e[3]+n[0]*e[1]-n[1]*e[0],n[3]*e[3]-n[0]*e[0]-n[1]*e[1]-n[2]*e[2]]}function Ir(n,e){let t=[n[0],n[1],n[2]],i=Es(t,e);return bc(e,Ts(bc(Ts(i,n[3]),Es(t,i)),2))}function yf(n,e){let t=es(n);if(t===0)return[0,0,0,0];let i=Math.sin(e*.5)/t;return[n[0]*i,n[1]*i,n[2]*i,Math.cos(e*.5)]}var M0=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3];function Ac(n){return 2*Math.acos(Math.min(1,Math.max(-1,n[3])))}function vf(n,e,t){let i=M0(n,e),s;i<0?(i=-i,s=[-e[0],-e[1],-e[2],-e[3]]):s=e;let r,o;if(1-i>1e-5){let a=Math.acos(i),c=Math.sin(a);r=Math.sin((1-t)*a)/c,o=Math.sin(t*a)/c}else r=1-t,o=t;return[r*n[0]+o*s[0],r*n[1]+o*s[1],r*n[2]+o*s[2],r*n[3]+o*s[3]]}var je=(n,e)=>[n[0]*e[0]+n[3]*e[1]+n[6]*e[2]+n[9],n[1]*e[0]+n[4]*e[1]+n[7]*e[2]+n[10],n[2]*e[0]+n[5]*e[1]+n[8]*e[2]+n[11]],yS=n=>n.slice(0,9),vS=n=>[n[9],n[10],n[11]];function wt(n,e){let t=Mn(n,e.slice(0,9)),i=je(n,[e[9],e[10],e[11]]);return[...t,...i]}function Lt(n){let e=Eo(n.slice(0,9)),t=Rn(e,[-n[9],-n[10],-n[11]]);return[...e,...t]}var Io=(n,e)=>[...n,...e];var{add:Cn,sub:MS,mul:un,len:Pr}=Qn,b0=Math.PI,bS=Math.PI*2,SS=1.3,AS=.06,wS=.05,TS=8,ES=96,RS=.1,CS=.7,S0=[[1/3,1/3,1/3],[.5,.5,0],[0,.5,.5],[.5,0,.5]],Mf=class{constructor(){this.NU=128,this.NV=64,this.r=new Float32Array(this.NU*this.NV)}bin(e){let t=Math.trunc((Math.atan2(e[0],e[2])+b0)/bS*this.NU)%this.NU;return Math.min(this.NV-1,Math.max(0,Math.trunc(Math.acos(Math.min(1,Math.max(-1,e[1])))/b0*this.NV)))*this.NU+t}add(e){let t=Pr(e);if(t<1e-6)return;let i=this.bin([e[0]/t,e[1]/t,e[2]/t]);t>this.r[i]&&(this.r[i]=t)}outer(e,t){let i=Pr(e);if(i<1e-6)return!1;let s=[e[0]/i,e[1]/i,e[2]/i];return i>=this.r[this.bin(s)]-AS*(t?t.radius(s):i)}};function A0(n,e,t,i,s,r){let o=Lt(e),a=g=>r.ratio(je(s,g)),c=new Map,l=new Mf,h=[];for(let g of n){if(!g.binds||!g.binds.length)continue;let _=g.binds.map(p=>wt(o,p));for(let p of g.surfaces){if(!p.bones||!p.bones.length||!p.vf.length)continue;let d=p.vf.length/3,M=p.bones.length/d,y=new Array(d),x=new Array(d);for(let S=0;S<d;S++){let A=[0,0,0],T=new Map;for(let v=0;v<M;v++){let b=p.w[S*M+v];if(b<=0)continue;let C=p.bones[S*M+v];A=Cn(A,un(je(_[C],[p.vf[S*3],p.vf[S*3+1],p.vf[S*3+2]]),b));let L=t(g,C);i.has(L)&&T.set(L,(T.get(L)||0)+b)}y[S]=A,x[S]=T}let w=p.idx&&p.idx.length?p.idx:null;h.push([y,x,w]);for(let S=0;S<d;S++)l.add(je(s,y[S]));if(w)for(let S=0;S+2<w.length;S+=3)for(let A of S0)l.add(je(s,Cn(Cn(un(y[w[S]],A[0]),un(y[w[S+1]],A[1])),un(y[w[S+2]],A[2]))))}}let u=(g,_,p)=>{let d=[0,0,0],M=[0,0,0],y=new Map,x=new Map;for(let C=0;C<g.length;C++){if(p[C]<=0)continue;let L=g[C];d=Cn(d,un(L,p[C]));let P=0;for(let[U,k]of _[C]){let F=k*p[C];P+=k,y.set(U,(y.get(U)||0)+F),x.set(U,Cn(x.get(U)||[0,0,0],un(L,F)))}M=Cn(M,un(L,Math.max(1-P,0)*p[C]))}let w=-1,S=0;for(let[C,L]of y)L>S&&(S=L,w=C);if(w<0||S<.2)return;let A=a(d);if(A<1)return;let T=[],v=[],b=[];for(let[C,L]of y)T.push(C),v.push(L),b.push(un(x.get(C),1/L));c.has(w)||c.set(w,[]),c.get(w).push([A,d,[T,v,b,M],A])};for(let[g,_,p]of h){let d=g.length,M=new Uint8Array(d);for(let y=0;y<d;y++)M[y]=a(g[y])<SS?1:0,u([g[y]],[_[y]],[1]);if(p)for(let y=0;y+2<p.length;y+=3){let x=[p[y],p[y+1],p[y+2]];if(M[x[0]]+M[x[1]]+M[x[2]]===0||!_[x[0]].size&&!_[x[1]].size&&!_[x[2]].size)continue;let w=[_[x[0]],_[x[1]],_[x[2]]],S=[g[x[0]],g[x[1]],g[x[2]]];for(let A of S0){let T=Cn(Cn(un(S[0],A[0]),un(S[1],A[1])),un(S[2],A[2]));l.outer(je(s,T),r)&&u(S,w,A)}}}let f=Math.min(TS,Math.max(1,Math.trunc(ES/Math.max(i.size,1)))),m=new Map;for(let[g,_]of c){_.sort((y,x)=>y[0]-x[0]);let p=[],d=[],M=[];for(let y of _){if(p.length>=f)break;let x=!1;for(let w of p)if(Pr(MS(w,y[1]))<RS){x=!0;break}x||(p.push(y[1]),d.push(Math.min(1+wS*.5,y[3]-.003)),M.push(y[2]))}m.set(g,[p,d,M])}return m}function w0(n,e,t,i,s,r,o,a,c){let l=n.indexOf(i),h=(M,y)=>{let x=e[M];for(;x>=0;){if(x===y)return!0;x=e[x]}return!1},u=[],f=[],m=[],g=[],_={},p=r;s.forEach((M,y)=>{let[x,w,S,A]=o[y],T=0,v=0,b=M,C=[0,0,0],L=[],P=[],U=[],k=[],F=[];for(let q=0;q<x.length;q++){v+=w[q];let Z=S[q];if(x[q]===i)T+=w[q],b=Z;else{let re=n.indexOf(x[q]);if(re<0){C=Cn(C,un(Z,w[q]));continue}L.push(re),P.push(w[q]),U.push(Pr(je(t[re],Z))),k.push(Z),F.push(h(re,l)?1:0)}}L.length&&(_[y]=[L,P,U,k,F]);let O=je(t[l],b);u.push(O),f.push(T),m.push(Cn(A,C)),g.push(Pr(O));let D=Cn(m[y],un(je(Lt(t[l]),O),T));for(let q=0;q<L.length;q++)D=Cn(D,un(k[q],P[q]));p[y]=Math.min(p[y],c.ratio(je(a,D))-.003)});let d=s.map((M,y)=>{let x=je(a,M),w=c.ratio(x);return Math.max(w-p[y],0)/Math.max(w,.001)*Pr(x)*CS});return{pts:s,ploc:u,pown:f,pstill:m,pf:p,pd:g,pfor:_,proom:d}}var{add:Po,sub:ei,mul:Lo,dot:IS,len:Lr,norm:wc}=Qn,$e={STIFF:3,DRAG:.25,GRAVITY:2,MAX_ANGLE:1.2,TIP_STIFF:.45,LOCKS_MIN:6,LOCK_ROOT_STIFF:4,LOCK_ROOT_ANGLE:.45,SPRUNG_MIN_GRAV:.15,SPRUNG_STIFF:2.2,SPIKE_STIFF:1.1,SPIKE_DRAG:.12,SPIKE_GRAVITY:.25,MASS_STIFF:5,MASS_DRAG:.15,MASS_GRAVITY:.1,MASS_MAX_ANGLE:.1,SPIKE_MAX_ANGLE:.9,HEAD_MARGIN:.05,JOINT_R:.2,HEAD_SHRINK:.97,TORSO_R:.38,TORSO_H:.9,TORSO_AT:.24,BODY_R:.41,BODY_LO:-.6,BODY_HI:.29,SHOULDER_R:.17,SHOULDER_W:.95,SHOULDER_AT:.62},Tc=(n,e,t)=>Math.min(t,Math.max(e,n)),T0=(n,e,t)=>n+(e-n)*t,bf=n=>n.toLowerCase().startsWith("tail"),Ec=n=>n.toLowerCase().startsWith("tail_spike"),E0=n=>n.toLowerCase().startsWith("tail_mass");function R0(n){let e=n.toLowerCase(),t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i),e=e.slice(0,i)),e.replace(/[0-9]+$/,"")+t}function PS(n){let e=n.map(()=>[]);n.forEach((r,o)=>{r.p>=0&&e[r.p].push(o)});let t=[],i=new Set,s=(r,o)=>{if(i.has(r))return;i.add(r),o.push(r);let a=e[r].filter(l=>bf(n[l].n));if(!a.length){t.push(o);return}let c=a.length===1?a[0]:-1;if(c<0){let l=R0(n[r].n);for(let h of a)if(R0(n[h].n)===l){c=h;break}}c>=0?s(c,o):t.push(o);for(let l of a)l!==c&&s(l,[])};return n.forEach((r,o)=>{bf(r.n)&&(r.p>=0&&bf(n[r.p].n)||s(o,[]))}),t}function C0(n){let e=n.bones,t=n.sk,i=n.skScale,s=PS(e);s=s.map(T=>T.length>=2&&Ec(e[T[0]].n)?T.slice(1):T);let r=n.mul||{stiff:1,drag:1,grav:1,swing:1},o=[],a=[],c=[],l=[],h=0;for(let T of s)T.length>=2&&!Ec(e[T[0]].n)&&!E0(e[T[0]].n)&&h++;let u=h>=$e.LOCKS_MIN,f=T=>[e[T].grest[9],e[T].grest[10],e[T].grest[11]];for(let T of s){let v=T[0],b=T[T.length-1],C=Lr(ei(f(b),f(e[b].p))),L=ei(f(b),f(v)),P=Lr(L)>1e-4?Tc(-wc(L)[1],0,1):1,U=T0($e.SPRUNG_STIFF,1,Tc(P/.5,0,1)),k=Ec(e[v].n),F=E0(e[v].n),O=u&&!k&&!F&&T.length>=2;for(let ve of T)a.push(ve),o.push(F?$e.MASS_MAX_ANGLE:k?$e.SPIKE_MAX_ANGLE:O&&ve===v?$e.LOCK_ROOT_ANGLE:$e.MAX_ANGLE);let D=F?$e.MASS_STIFF:k?$e.SPIKE_STIFF:$e.STIFF*U,q=F?$e.MASS_DRAG:k?$e.SPIKE_DRAG:$e.DRAG,Z=$e.GRAVITY*Math.max($e.SPRUNG_MIN_GRAV,P),re=F?$e.MASS_GRAVITY:k?$e.SPIKE_GRAVITY:Z,me=D*r.stiff/Math.max(r.swing,.2);c.push([me,Tc(q*r.drag,0,1),re*r.grav,O?$e.LOCK_ROOT_STIFF:1]),l.push({idx:T,seg:C})}let m=[n.face[9],n.face[10],n.face[11]],g=Math.min(n.radii[0],n.radii[2])*n.faceScale*$e.HEAD_SHRINK,_=[{kind:"sphere",xf:[1,0,0,0,1,0,0,0,1,...m],radius:Math.max(g,0)}],p={a:[0,0,0],b:[0,0,0],r:0};if(n.chest){let T=n.chest,v=Rs(T.slice(0,9)),b=n.skScale,C;n.body?C={kind:"capsule",xf:Io(v,je(T,[0,($e.BODY_LO+$e.BODY_HI)*.5,0])),radius:$e.BODY_R*n.rigScale,height:($e.BODY_HI-$e.BODY_LO+2*$e.BODY_R)*n.rigScale}:C={kind:"capsule",xf:Io(v,je(T,[0,$e.TORSO_AT,0])),radius:$e.TORSO_R*n.rigScale,height:$e.TORSO_H*n.rigScale};let L={kind:"capsule",xf:Io(Mn(v,ns([0,0,-1],Math.PI*.5)),je(T,[0,$e.SHOULDER_AT,0])),radius:$e.SHOULDER_R*n.rigScale,height:$e.SHOULDER_W*n.rigScale};_.push(C,L);let P=Lt(t),U=Lo(wc([C.xf[3],C.xf[4],C.xf[5]]),Math.max(C.height*.5-C.radius,0)),k=[C.xf[9],C.xf[10],C.xf[11]];p={a:je(P,ei(k,U)),b:je(P,Po(k,U)),r:C.radius/i}}else _.push({kind:"capsule",xf:Ri.slice(),radius:0,height:1},{kind:"capsule",xf:Ri.slice(),radius:0,height:1});let d=Math.min(n.radii[0],n.radii[2])*$e.JOINT_R*i,M=T=>{let v=e[T].grest;return Po([v[9],v[10],v[11]],Lo(wc([v[3],v[4],v[5]]),Lr(ei([v[9],v[10],v[11]],f(e[T].p)))))},y=l.map(({idx:T,seg:v},b)=>{let C=c[b],L=T.length;return{joints:T.map((U,k)=>{let F=je(t,k+1<L?f(T[k+1]):M(U)),O=Lr(ei(F,m))-g-.005;for(let q of[_[1],_[2]]){if(q.radius<=0)continue;let Z=Lo(wc([q.xf[3],q.xf[4],q.xf[5]]),Math.max(q.height*.5-q.radius,0)),re=[q.xf[9],q.xf[10],q.xf[11]],me=LS(F,ei(re,Z),Po(re,Z));O=Math.min(O,Lr(ei(F,me))-q.radius-.005)}let D=L<2?0:k/(L-1);return{b:U,radius:Tc(O,-g,d),stiff:C[0]*T0(1,$e.TIP_STIFF,D)*(k===0?C[3]:1),drag:C[1],grav:C[2],gdir:[0,-1,0]}}),extend:!0,elen:v}}),x=Lt(n.face),w=n.hf,S=T=>Math.min(1+$e.HEAD_MARGIN,w.ratio(je(x,T))-.003),A={bones:a,max:o.slice(),len:a.map(()=>0),floor:a.map(()=>0),floor_mid:a.map(()=>0)};return s.forEach(T=>{let v=T.length,b=T.map((L,P)=>je(t,P+1<v?f(T[P+1]):M(L))),C=T.map(L=>je(t,f(L)));T.forEach((L,P)=>{let U=$e.MAX_ANGLE;Ec(e[T[0]].n)&&(U=Math.min(U,$e.SPIKE_MAX_ANGLE));let k=a.indexOf(L);A.max[k]=Math.min(A.max[k],U),A.len[k]=Lr(ei(C[P],b[P]))/i,A.floor[k]=S(b[P]),A.floor_mid[k]=S(Lo(Po(C[P],b[P]),.5))})}),{chains:s,params:c,settings:y,cols:_,torso:p,head:wt(Lt(t),n.face),limit:A,headR:g,fat:d}}function LS(n,e,t){let i=ei(n,e),s=ei(t,e),r=ts(s);if(r<1e-20)return e;let o=IS(s,i)/r;return o<=0?e:o>=1?t:Po(e,Lo(s,o))}var{add:ti,sub:Dr,mul:is,dot:P0,cross:DS,len:L0,norm:Is}=Qn,Cc=class{constructor(e){this.n=e.length,this.parent=e.map(t=>t.p),this.rest=e.map(t=>t.rest.slice()),this.kids=e.map(()=>[]),e.forEach((t,i)=>{t.p>=0&&this.kids[t.p].push(i)}),this.grest=[];for(let t=0;t<this.n;t++)this.grest.push(this.parent[t]<0?this.rest[t].slice():wt(this.grest[this.parent[t]],this.rest[t]));this.pos=[],this.rot=[],this.scl=[],this.resetPoses()}resetPoses(){this.pos=this.rest.map(e=>[e[9],e[10],e[11]]),this.rot=this.rest.map(e=>Vn(e.slice(0,9))),this.scl=this.rest.map(e=>Ro(e.slice(0,9))),this.gl=new Array(this.n).fill(null)}local(e){return[...Mn(xf(this.rot[e]),[this.scl[e][0],0,0,0,this.scl[e][1],0,0,0,this.scl[e][2]]),...this.pos[e]]}global(e){if(this.gl[e])return this.gl[e];let t=this.local(e);return this.gl[e]=this.parent[e]<0?t:wt(this.global(this.parent[e]),t)}invalidate(e){this.gl[e]=null;for(let t of this.kids[e])this.invalidate(t)}setRot(e,t){this.rot[e]=t,this.invalidate(e)}snapshot(){return{pos:this.pos.map(e=>e.slice()),rot:this.rot.map(e=>e.slice()),scl:this.scl.map(e=>e.slice())}}restore(e){this.pos=e.pos.map(t=>t.slice()),this.rot=e.rot.map(t=>t.slice()),this.scl=e.scl.map(t=>t.slice()),this.gl=new Array(this.n).fill(null)}},I0=(n,e,t)=>ti(n,is(Is(Dr(e,n)),t));function NS(n,e,t){if(Math.abs(P0(n,e)+1)<1e-5)return t;let i=DS(n,e);if(Math.abs(i[0])<1e-5&&Math.abs(i[1])<1e-5&&Math.abs(i[2])<1e-5)return t;let s=pf(n,e);return Math.abs(s)<1e-5&&(s=0),yf(Is(i),s)}function Rc(n,e,t,i){let s=Dr(i,n),r=L0(s),o=t+e;return r-o>0?i:ti(n,is(Is(s),o))}function US(n,e,t){if(n.kind==="sphere")return Rc([n.xf[9],n.xf[10],n.xf[11]],n.radius,e,t);let i=n.xf.slice(0,9),s=[n.xf[9],n.xf[10],n.xf[11]],r=n.height*.5-n.radius,o=ti(s,Rn(i,[0,r,0])),a=ti(s,Rn(i,[0,-r,0])),c=Dr(a,o),l=Dr(t,o),h=P0(c,l);if(h<=0)return Rc(o,n.radius,e,t);let u=ts(c);return Math.abs(u)<1e-5?t:u<=h?Rc(ti(o,c),n.radius,e,t):Rc(ti(o,is(c,h/u)),n.radius,e,t)}var Ic=class{constructor(e,t){this.sk=e,this.cfg=t,this.ext=t.ext||[0,0,0],this.center=t.center,this.icenter=Lt(t.center),this.icRot=Vn(this.icenter.slice(0,9)),this.cRot=Vn(this.center.slice(0,9)),this.verlet=null}reset(){let e=this.sk,t=this.center;this.verlet=this.cfg.settings.map(i=>i.joints.map((s,r)=>{if(r<i.joints.length-1){let o=[e.rest[i.joints[r+1].b][9],e.rest[i.joints[r+1].b][10],e.rest[i.joints[r+1].b][11]];if(mf(o))return null;let a=je(t,je(e.global(s.b),o));return{cur:a,prev:a.slice(),fwd:Is(o),length:L0(o),rot:[0,0,0,1]}}else if(i.extend&&i.elen>0){let o=[0,1,0],a=je(t,je(e.global(s.b),is(o,i.elen)));return{cur:a,prev:a.slice(),fwd:Is(o),length:i.elen,rot:[0,0,0,1]}}return null}))}process(e){let t=this.sk,i=this.center;this.cfg.settings.forEach((s,r)=>{s.joints.forEach((o,a)=>{let c=this.verlet[r][a];if(!c)return;let l=t.global(o.b),h=Vn(l.slice(0,9)),u=je(i,[l[9],l[10],l[11]]),f=Ir(this.icRot,is(ti(this.ext,is(o.gdir,o.grav)),e)),m=ti(ti(c.cur,is(Dr(c.cur,c.prev),1-o.drag)),Ir(this.cRot,ti(Ir(h,is(c.fwd,o.stiff*e)),f)));m=I0(u,m,c.length);for(let M of this.cfg.cols)m=US(M,o.radius,m),m=I0(u,m,c.length);c.prev=c.cur,c.cur=m;let g=Is(Ir(h,c.fwd)),_=Is(Rn(this.icenter.slice(0,9),Dr(m,u))),p=NS(g,_,c.rot);c.rot=p,p=Cs(p,h);let d=t.parent[o.b];d>=0&&(p=Sc(Cs(Co(Vn(t.global(d).slice(0,9))),p))),t.setRot(o.b,p)})})}};var{add:In,sub:Ii,mul:ni,dot:OS,len:Ci,norm:Do}=Qn,D0=Math.PI,FS=Math.PI*2,No=64,Tf=32,kS=No/FS,BS=Tf/D0,Sf=1.2,Ps=.05,zS=.7,HS=(n,e)=>Math.floor(n/e+.5)*e,GS=(n,e)=>(n%e+e)%e,Af=(n,e,t)=>Math.min(t,Math.max(e,n));function wf(n,e,t){let i=Ii(n,e),s=Ii(t,e),r=ts(s);if(r<1e-20)return e;let o=OS(s,i)/r;return o<=0?e:o>=1?t:In(e,ni(s,o))}var VS=(n,e,t)=>Rn(ns(e,t),n),Pc=class{constructor(e,t){this.sk=e;let i=(this.bones=t.bones).length;this.parent=t.bones.map(s=>t.bones.indexOf(e.parent[s])),this.rest=t.bones.map(s=>e.rot[s].slice()),this.max=t.max.slice(),this.len=t.len.slice(),this.floor=t.floor.slice(),this.floorMid=t.floor_mid.slice(),this.head=t.head,this.headInv=Lt(t.head),this.fr=t.fr,this.hasHead=!!t.fr,this.torsoA=t.torso.a,this.torsoB=t.torso.b,this.torsoR=t.torso.r,this.pts=t.pts,this.ploc=t.ploc,this.pown=t.pown,this.pstill=t.pstill,this.pf=t.pf,this.pd=t.pd,this.pfor=t.pfor,this.proom=t.proom,this.restInv=t.bones.map(s=>Lt(e.grest[s])),this.prev=t.bones.map(s=>e.grest[s].slice()),this.now=t.bones.map(s=>e.grest[s].slice()),this.dshift=new Array(i).fill(0),this.dturn=new Array(i).fill(0),this.lastpush=new Array(i).fill(0),this.torsoAllow=null,this.push=!0,this.pushHead=!0,this.bases=new Map}ratio(e){let t=Ci(e);if(t<1e-6)return 0;let i=(Math.atan2(e[0],e[2])+D0)*kS-.5,s=Af(Math.acos(Af(e[1]/t,-1,1))*BS-.5,0,Tf-1),r=Math.floor(i),o=Math.min(Math.trunc(s),Tf-2),a=i-r,c=Math.min(s-o,1),l=GS(r,No),h=(l+1)%No,u=o*No,f=u+No,m=this.fr,g=m[u+l]+(m[u+h]-m[u+l])*a,_=m[f+l]+(m[f+h]-m[f+l])*a;return t/(g+(_-g)*c)}e(e){return this.ratio(je(this.headInv,e))}track(e,t){this.now[e]=t;let i=this.prev[e];this.dshift[e]=Ci(Ii([t[9],t[10],t[11]],[i[9],i[10],i[11]]));let s=Rs(t.slice(0,9)),r=Rs(i.slice(0,9)),o=Vn(Mn(s,gf(r)));o[3]<0&&(o=o.map(a=>-a)),this.dturn[e]=Ac(o)}below(e,t){let i=this.parent[e];for(;i>=0;){if(i===t)return!0;i=this.parent[i]}return!1}base(e,t){let i=this.pstill[e][t],s=[0,0,0],r=0,o=this.pfor[e];if(o&&o[t]){let[a,c,,l,h]=o[t];for(let u=0;u<a.length;u++){let f=je(this.now[a[u]],je(this.restInv[a[u]],l[u]));h[u]===1?(s=In(s,ni(f,c[u])),r+=c[u]):i=In(i,ni(f,c[u]))}}return r>0&&(s=je(Lt(this.now[e]),ni(s,1/r))),[i,s,r]}slack(e,t,i,s,r){let o=Math.min(this.e(In(t,s))-this.floor[e],this.e(In(t,ni(s,.5)))-this.floorMid[e]),a=this.ploc[e],c=this.pown[e],l=this.pf[e],h=this.pd[e],u=this.proom[e].slice();for(let f=0;f<a.length;f++){if(c[f]*r*h[f]<u[f])continue;this.bases.has(f)||this.bases.set(f,this.base(e,f));let m=this.bases.get(f),g=In(m[0],ni(In(t,Rn(i,a[f])),c[f]));m[2]>0&&(g=In(g,ni(In(t,Rn(i,m[1])),m[2])));let _=je(this.headInv,g),p=this.ratio(_),d=p-l[f];o=Math.min(o,d),r===0&&(u[f]=Math.max(d,0)/Math.max(p,.001)*Ci(_)*zS)}return r===0&&(this.proom[e]=u),o}slackAt(e,t,i,s,r){let o=ns(s,-r);return this.slack(e,[t[9],t[10],t[11]],Mn(o,t.slice(0,9)),Rn(o,i),r)}process(){let e=this.sk;for(let t=0;t<this.bones.length;t++){let i=this.bones[t],s=this.rest[t],r=Cs(Co(s),e.rot[i]);r[3]<0&&(r=r.map(a=>-a));let o=Ac(r);o>this.max[t]&&o>1e-4&&e.setRot(i,Cs(s,vf([0,0,0,1],r,this.max[t]/o)))}if(this.push&&(this.pushHead&&this.hasHead&&this.pushOutOfHead(),this.torsoR>0&&this.pushOutOfTorso(),this.pushHead))for(let t=0;t<this.bones.length;t++)this.prev[t]=e.global(this.bones[t]).slice()}pushOutOfTorso(){let e=this.sk,t=this.bones.length;if(!this.torsoAllow){this.torsoAllow=new Array(t);for(let i=0;i<t;i++){let s=e.grest[this.bones[i]],r=In([s[9],s[10],s[11]],ni(Do([s[3],s[4],s[5]]),this.len[i])),o=Ci(Ii(r,wf(r,this.torsoA,this.torsoB)));this.torsoAllow[i]=Math.max(this.torsoR-o,0)+(o<this.torsoR?.003:0)}}for(let i=0;i<t;i++){if(this.len[i]<=0)continue;let s=this.bones[i],r=e.global(s),o=[r[9],r[10],r[11]],a=ni(Do([r[3],r[4],r[5]]),this.len[i]),c=In(o,a),l=wf(c,this.torsoA,this.torsoB),h=this.torsoR-this.torsoAllow[i];if(Ci(Ii(c,l))>=h)continue;let u=Es(a,Ii(l,o));if(Ci(u)<1e-6)continue;u=Do(u);let f=h-Ci(Ii(c,l)),m=0,g=0,_=f;for(;m<Sf;){m+=Ps;let y=In(o,VS(a,u,-m)),x=h-Ci(Ii(y,wf(y,this.torsoA,this.torsoB)));if(x<_&&(_=x,g=m),x<=0)break}if(_>0&&f-_<f*.5||g<=0)continue;let p=Mn(ns(u,-g),r.slice(0,9)),d=e.parent[s],M=d>=0?e.global(d):Ri;e.setRot(s,Vn(Mn(Eo(M.slice(0,9)),p)))}}pushOutOfHead(){let e=this.sk,t=this.bones.length,i=[this.head[9],this.head[10],this.head[11]];for(let r=0;r<t;r++)this.track(r,e.global(this.bones[r]).slice());let s=!1;for(let r=0;r<t;r++){if(this.floor[r]<=0||this.len[r]<=0)continue;let o=this.bones[r];s&&this.track(r,e.global(o).slice());let a=this.now[r],c=[a[9],a[10],a[11]],l=ni(Do([a[3],a[4],a[5]]),this.len[r]),h=this.proom[r].slice(),u=this.pown[r],f=this.pd[r],m=this.pfor[r];for(let T=0;T<h.length;T++){let v=u[T]*(this.dshift[r]+this.dturn[r]*f[T]);if(m&&m[T]){let[b,C,L]=m[T];for(let P=0;P<b.length;P++)v+=C[P]*(this.dshift[b[P]]+this.dturn[b[P]]*L[P])}h[T]-=v}this.proom[r]=h,this.bases=new Map;let g=this.slack(r,c,a.slice(0,9),l,0);if(g>=0){this.lastpush[r]=0;continue}let _=Es(l,Ii(i,c));if(Ci(_)<1e-6)continue;_=Do(_);let p=Af(HS(this.lastpush[r],Ps),Ps,Sf),d=0,M=g,y=this.slackAt(r,a,l,_,p);if(y>=0)for(d=p;p-Ps>.001&&!(this.slackAt(r,a,l,_,p-Ps)<0);)p-=Ps,d=p;else{for(y>M&&(M=y,d=p);p<Sf&&(p+=Ps,y=this.slackAt(r,a,l,_,p),y>M&&(M=y,d=p),!(y>=0)););M<0&&M-g<-g*.5&&(d=0)}if(this.lastpush[r]=d,d<=0)continue;let x=Mn(ns(_,-d),a.slice(0,9)),w=e.parent[o],S=w>=0?e.global(w):Ri;e.setRot(o,Vn(Mn(Eo(S.slice(0,9)),x)));let A=this.proom[r].slice();for(let T=0;T<A.length;T++)A[T]-=u[T]*d*f[T];this.proom[r]=A,this.now[r]=[...x,...c],s=!0}}};function U0(n){let e=new Cc(n.bones),t=new Ic(e,{settings:n.settings,cols:n.cols,center:n.center,ext:[0,0,0]}),i=new Pc(e,n.limit);return{skel:e,sim:t,lim:i}}function N0(n,e,t){let{skel:i,sim:s,lim:r}=n,o=i.snapshot();s.process(e),r.push=t,r.pushHead=!0,r.process();let a={local:i.rot.map((c,l)=>[...i.pos[l],...c,...i.scl[l]]),global:i.rest.map((c,l)=>i.global(l).slice())};return i.restore(o),a}function O0(n,{n1:e=60,n2:t=36,passes:i=1}={}){let s=null;for(let r=0;r<i;r++){n.skel.resetPoses(),n.sim.reset();for(let o=0;o<e;o++)s=N0(n,1/60,o===e-1);for(let o=0;o<t;o++)s=N0(n,1/60,o===t-1)}return s}function F0(n,e,t,i,s={}){let r=e.skeleton;if(!r)return null;let o=t.sceneScale,a=[o,0,0,0,o,0,0,0,o,0,0,0],c=n.mount.head,l=n.rig.bones[c].grest,h=wt(a,wt(i,r.toSkeleton)),u=wt(t.global[c],Lt(l)),f=wt(a,wt(u,[1,0,0,0,1,0,0,0,1,...n.centre])),m=n.rig.boneIndex?n.rig.boneIndex.spine1:n.rig.bones.findIndex(U=>U.name==="spine1"),g=m>=0?wt(a,t.global[m]):null,_=r.bones.map(U=>({n:U.name,p:U.parent,rest:U.rest,grest:U.grest})),p=Ro(h.slice(0,9))[0],d={bones:_,sk:h,face:f,chest:g,skScale:p,faceScale:o,rigScale:o,radii:n.radii,hf:n.hf,body:!!s.body,mul:s.mul},M=C0(d);if(!M.chains.length)return null;let y=Lt(M.head),x=new Set(M.chains.flat()),w=M.limit.bones,S=U=>e.model.skin.binds[U].name,A=s.pickKey,T=s.pickCache,v=A&&T?T.get(A):null;v||(v=A0(e.parts,r.toSkeleton,(U,k)=>r.index[S(k)],x,y,n.hf),A&&T&&T.set(A,v));let b=w.map(U=>w.indexOf(_[U].p)),C=w.map(U=>Lt(_[U].grest)),L=w.length,P={pts:new Array(L),ploc:new Array(L),pown:new Array(L),pstill:new Array(L),pf:new Array(L),pd:new Array(L),pfor:new Array(L),proom:new Array(L)};for(let U=0;U<L;U++)for(let k of Object.keys(P))P[k][U]=k==="pfor"?{}:[];for(let[U,[k,F,O]]of v){let D=w.indexOf(U);if(D<0)continue;let q=w0(w,b,C,U,k,F,O,y,n.hf);for(let Z of Object.keys(P))P[Z][D]=q[Z]}return{S:M,cand:v,D:{bones:_.map(U=>({p:U.p,rest:U.rest})),center:h,cols:M.cols,settings:M.settings,limit:{bones:w,max:M.limit.max,len:M.limit.len,floor:M.limit.floor,floor_mid:M.limit.floor_mid,head:M.head,fr:n.hf.r,torso:M.torso,...P}}}}function WS(n,e){return n?O0(U0(n.D),e):null}function XS(n,e,t){let i=n.skeleton,s=[-1,0,0,0,1,0,0,0,1,0,0,0],r=o=>wt(s,wt(o,s));return n.parts.map(o=>!o.binds||!o.binds.length?o.binds:n.model.skin.binds.map(a=>{let c=i.index[a.name],l=t?r(a.pose):a.pose;return wt(i.toSkeleton,wt(c!==void 0?e[c]:Ri,l))}))}function qS(n,e){return wt(e.global[n.mount.head],Lt(n.rig.bones[n.mount.head].grest))}function YS(n){let e=n.jiggle;return{mul:{stiff:Math.max(e[0],.05),drag:Math.max(e[1],.05),grav:e[3],swing:e[2]},body:n.mount!=="head"}}function k0(n,e,t,i={}){let s=new Map,r=t.map(o=>{if(o.held)return null;if(o.kind==="hair")return F0(n,o.hp,e,qS(n,e),{...i,pickCache:s,pickKey:`hair:${o.hp.name}:${!!o.hp.flip}`});let a=wt(e.global[n.mount[o.slot.mount]],o.slot.xf);return F0(n,o.hp,e,a,{...YS(o.item),...i,pickCache:s,pickKey:`acc:${o.slot.id}:${!!o.slot.flip}`})});return t.map((o,a)=>{if(o.held)return{...KS(o.hp),inputs:null};if(!r[a])return null;let c=WS(r[a],i.steps);return{...c,inputs:r[a],binds:XS(o.hp,c.global,o.kind==="hair"?!!o.hp.flip:!!o.slot.flip)}})}function B0(n,e,t){let i=n&&n.hair&&n.hair.hatSlot;if(!i||!n.slots[i]||!n.slots[i].mounted)return!1;let s=e.byId.get(n.slots[i].id);return!!s&&s.hair_mode==="full_covered"&&t.hood_tuck_on!==!1}function KS(n){return{global:n.skeleton.bones.map(t=>t.grest.slice()),local:null,held:!0,binds:n.parts.map(t=>t.binds)}}var Uo=`
vec3 s2l(vec3 c){return mix(pow((c+vec3(0.055))/1.055,vec3(2.4)), c/12.92, vec3(lessThan(c,vec3(0.04045))));}
vec3 l2s(vec3 c){c=max(c,vec3(0.0));return mix(1.055*pow(c,vec3(1.0/2.4))-vec3(0.055), c*12.92, vec3(lessThan(c,vec3(0.0031308))));}
`,Ef=`
#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
`,Rf=`
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
`,ZS=`${Ef}
varying vec3 vN; varying vec2 vUv; varying float vY;
void main(){
  vUv = uv;
  ${Rf}
  vN = normalize(normalMatrix * objectNormal);
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  vY = transformed.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.0);
}`,jS=`
precision highp float;
varying vec3 vN; varying vec2 vUv; varying float vY;
uniform float hidden; uniform float noflip; uniform vec3 albedo; uniform vec3 key_dir; uniform float band_edge, band_softness, shade, level;
uniform float grad_on, grad_y_min, grad_y_max, grad_fade_start, grad_fade_end, pattern_on, pattern_shade; uniform vec3 top_color, bottom_color, pattern_ink, pattern_spot; uniform sampler2D pattern_tex;
${Uo}
void main(){
  if (hidden > 0.5) discard;
  vec3 n = normalize((gl_FrontFacing || noflip > 0.5) ? vN : -vN);
  float ndl = dot(n, normalize(key_dir));
  float aa = clamp(fwidth(ndl)*0.75, 0.0005, band_softness);
  float lit = smoothstep(band_edge-aa, band_edge+aa, ndl);
  vec3 base = s2l(albedo);
  if (grad_on > 0.5) {
    float ny = (vY - grad_y_min) / max(grad_y_max - grad_y_min, 0.0001);
    float t = clamp((ny - grad_fade_start) / max(grad_fade_end - grad_fade_start, 0.0001), 0.0, 1.0);
    base = mix(s2l(bottom_color), s2l(top_color), t);
  }
  if (pattern_on > 0.5) {
    vec3 m = texture2D(pattern_tex, vUv).rgb;
    base *= 1.0 - pattern_shade * m.b;
    base = mix(base, s2l(pattern_ink), m.r);
    base = mix(base, s2l(pattern_spot), m.g);
  }
  vec3 c = base * level * mix(1.0-shade, 1.0, lit);
  gl_FragColor = vec4(l2s(c), 1.0);
}`,z0=new Wi(new Uint8Array([0,0,0,255]),1,1);z0.needsUpdate=!0;var ii=n=>new z(n[0],n[1],n[2]);function Oo(n){let e=n.grad,t=n.pattern,i=new Gt({vertexShader:ZS,fragmentShader:jS,uniforms:{hidden:{value:n.hidden?1:0},noflip:{value:n.noflip?1:0},albedo:{value:ii(n.albedo)},key_dir:{value:new z(-.45,.62,.65)},band_edge:{value:.12},band_softness:{value:.02},shade:{value:.42},level:{value:.8},grad_on:{value:e?1:0},grad_y_min:{value:e?e.y0:0},grad_y_max:{value:e?e.y1:1},grad_fade_start:{value:e?e.fadeStart:0},grad_fade_end:{value:e?e.fadeEnd:1},top_color:{value:ii(e?e.top:[1,1,1])},bottom_color:{value:ii(e?e.bottom:[1,1,1])},pattern_on:{value:t?1:0},pattern_shade:{value:.35},pattern_tex:{value:t?t.tex:z0},pattern_ink:{value:ii(t?t.ink:[.08,.05,.04])},pattern_spot:{value:ii(t?t.spot:[1,.98,.94])}},side:n.doubleSided?on:tn});return i.stencilWrite=!0,i.stencilFunc=fr,i.stencilRef=n.stencil??1,i.stencilZPass=tc,i.stencilFail=Xn,i.stencilZFail=Xn,i}var JS=`${Ef}
uniform float contour_pull, near_px, far_px, near_ppm, far_ppm, contour_px_scale; uniform vec2 vp;
void main(){
  ${Rf}
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  vec4 view = modelViewMatrix * vec4(transformed,1.0);
  view.xyz += normalize(-view.xyz) * contour_pull;
  vec4 clip = projectionMatrix * view;
  vec3 vn = normalize(normalMatrix * objectNormal);
  vec2 dir = (projectionMatrix * vec4(vn,0.0)).xy * vp;
  float len = length(dir);
  dir = len > 1e-5 ? dir/len : vec2(0.0);
  float ppm = abs(projectionMatrix[1][1]) * 540.0 / max(clip.w, 1e-4);
  float px = mix(far_px, near_px, clamp((ppm-far_ppm)/(near_ppm-far_ppm),0.0,1.0)) * max(vp.y, 1080.0)/1080.0 * contour_px_scale;
  px *= smoothstep(0.15,0.45,length(vn.xy));
  clip.xy += dir * px * 2.0 / vp * clip.w;
  gl_Position = clip;
}`,$S=`precision highp float; uniform float hidden; uniform vec3 line_color;
${Uo}
void main(){ if (hidden > 0.5) discard; gl_FragColor = vec4(l2s(s2l(line_color)),1.0); }`;function Ls(n,e,t,i){let s=new Gt({vertexShader:JS,fragmentShader:$S,side:Zt,uniforms:{hidden:{value:t?1:0},contour_pull:{value:e},near_px:{value:7},far_px:{value:1.75},near_ppm:{value:350},far_ppm:{value:40},contour_px_scale:{value:1},vp:{value:i},line_color:{value:new z(.05,.05,.08)}}});return s.stencilWrite=!0,s.stencilFunc=bp,s.stencilRef=n,s.stencilZPass=s.stencilFail=s.stencilZFail=Xn,s}var QS=`${Ef}
varying vec2 vUv; uniform float lift;
void main(){
  vUv = uv;
  ${Rf}
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  transformed += normalize(objectNormal) * lift;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.0);
}`,eA=`precision highp float; varying vec2 vUv; uniform sampler2D atlas; uniform vec2 cell; uniform vec3 ink; uniform float level; uniform float flip_u;
${Uo}
void main(){ vec2 uv = vUv; if (flip_u > 0.5) uv.x = 1.0 - uv.x;
  vec2 a = (uv + cell) / 10.0;
  if (texture2D(atlas, a).a < 0.5) discard;
  gl_FragColor = vec4(l2s(s2l(ink) * level), 1.0); }`;function H0(n,e,t,i,s){let r=new Gt({vertexShader:QS,fragmentShader:eA,side:tn,uniforms:{atlas:{value:n},cell:{value:new De(e%10,Math.floor(e/10))},ink:{value:ii(t)},level:{value:.8},flip_u:{value:s?1:0},lift:{value:i}}});return r.stencilWrite=!0,r.stencilFunc=fr,r.stencilRef=1,r.stencilZPass=tc,r}function G0(n){return new Gt({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"precision highp float; varying vec2 vUv; uniform sampler2D tex; void main(){ vec4 c = texture2D(tex, vUv); gl_FragColor = vec4(c.rgb, c.a); }",uniforms:{tex:{value:n}},transparent:!0,side:on,depthWrite:!1})}var V0=`
attribute vec3 aLocal; uniform float uTime, slosh, ripple, speed; varying vec3 vN; varying vec3 vV; varying vec3 vAt; varying float vTop; uniform float isWater;
void main(){
  vec3 p = position; vAt = aLocal; vTop = 0.0;
  if (isWater > 0.5) {
    vTop = smoothstep(0.2, 0.75, normal.y);
    float t = uTime * speed; vec3 v = aLocal;
    float tip = v.x * sin(t * 1.9) + v.z * cos(t * 1.45);
    float wave = sin(v.x * 9.0 + t * 3.1) * cos(v.z * 8.0 - t * 2.6);
    float dy = (tip * slosh + wave * ripple) * vTop;
    p.y += dy; vAt = v + vec3(0.0, dy, 0.0);
  }
  vN = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(p, 1.0); vV = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`,tA=`precision highp float; varying vec3 vN; varying vec3 vV;
uniform vec3 tint, glint_dir; uniform float body_alpha, rim_alpha, rim_power, glint_size;
${Uo}
void main(){
  vec3 n = normalize(vN);
  float rim = pow(1.0 - clamp(dot(n, normalize(vV)), 0.0, 1.0), rim_power);
  float d = dot(n, normalize(glint_dir));
  float glint = smoothstep(1.0 - glint_size, 1.0 - glint_size * 0.5, d);
  vec3 c = l2s(mix(s2l(tint), vec3(1.0), glint));
  gl_FragColor = vec4(c, clamp(mix(body_alpha, rim_alpha, rim) + glint * 0.6, 0.0, 1.0));
}`,nA=`precision highp float; varying vec3 vAt; varying float vTop;
uniform vec3 color, light; uniform float alpha, uTime, speed;
${Uo}
void main(){
  float t = uTime * speed;
  float band = sin(vAt.x * 11.0 + t * 2.2) * sin(vAt.z * 10.0 - t * 1.7);
  float shine = smoothstep(0.55, 0.9, band) * vTop;
  vec3 c = l2s(mix(s2l(color), s2l(light), shine * 0.7 + vTop * 0.15));
  gl_FragColor = vec4(c, clamp(alpha + shine * 0.25, 0.0, 1.0));
}`;function W0(n){let e=new Gt({vertexShader:V0,fragmentShader:tA,transparent:!0,depthWrite:!1,side:tn,uniforms:{isWater:{value:0},uTime:{value:0},slosh:{value:0},ripple:{value:0},speed:{value:1},tint:{value:ii(n.tint)},body_alpha:{value:n.body_alpha},rim_alpha:{value:n.rim_alpha},rim_power:{value:n.rim_power},glint_dir:{value:ii(n.glint_dir)},glint_size:{value:n.glint_size}}});return e.stencilWrite=!0,e.stencilFunc=fr,e.stencilRef=9,e.stencilZPass=tc,e}function X0(n){let e=new Gt({vertexShader:V0,fragmentShader:nA,transparent:!0,depthWrite:!1,side:tn,uniforms:{isWater:{value:1},uTime:{value:0},slosh:{value:n.slosh},ripple:{value:n.ripple},speed:{value:n.speed},color:{value:ii(n.color)},light:{value:ii(n.light)},alpha:{value:n.alpha}}});return e.stencilWrite=!1,e}var If=12,Y0=3.2,Pf=1.2,q0={spinny_hat:"SPINNY HAT",witch_hat:"witch hat"},Fo=n=>new Fe().set(n[0],n[3],n[6],n[9],n[1],n[4],n[7],n[10],n[2],n[5],n[8],n[11],0,0,0,1),iA=[1,0,0,0,1,0,0,0,1,0,0,0];async function K0(n){let e=await n.bytes("models/player_char.glb"),t=h0(e),i=await n.json("acc.catalog"),s=await n.json("acc.hatgeo"),r=df(t),o=r.centre,a=r.radii,c=gc.build(m0(r),o,a),l=await n.texture("num_atlas.png",{flipY:!1}),h=t.bones,u=_=>h.findIndex(p=>p.name===_),f=_=>{let p=0,d=1/0;return h.forEach((M,y)=>{let x=Math.hypot(M.grest[9]-_[9],M.grest[10]-_[10],M.grest[11]-_[11]);x<d&&(d=x,p=y)}),p},m=i.rig.rests,g={head:u("head"),chest:f(m.chest),hips:f(m.hips)};return{io:n,rig:t,bodyBytes:e,cat:rf(i),catalog:i,hatgeo:s,headField:c,centre:o,radii:a,atlas:l,mount:g,loader:new ic,cache:new Map}}var ko=(n,e,t)=>(n.cache.has(e)||n.cache.set(e,t()),n.cache.get(e)),sA=n=>n.map(e=>({...e,surfaces:e.surfaces.map(t=>({...t,vf:Float32Array.from(t.vf),bones:t.bones?Int32Array.from(t.bones):null,w:t.w?Float32Array.from(t.w):null}))})),Dc=n=>n?n.name+"|"+n.colorSrgb.join(","):"null";function Cf(n){let e=[];for(let t of n)for(let i of t.surfaces){let s=Dc(i.material);e.includes(s)||e.push(s)}return e}var rA=(n,e,t)=>{if(!t||!n.shapes||!n.shapes.length||!e.shapeNames)return n.vf;let i=Float32Array.from(n.vf);return e.shapeNames.forEach((s,r)=>{let o=t[s];if(!o||!n.shapes[r])return;let a=n.shapes[r];for(let c=0;c<i.length;c++)i[c]+=o*(a[c]-n.vf[c])}),i};function oA(n,e,t){let i=rA(e,n,t),s=i.length/3,r=n.binds&&n.binds.length&&e.bones&&e.bones.length?e.bones.length/s:0,o=new Float32Array(s*3),a=new Float32Array(s*3),c=e.n;for(let l=0;l<s;l++){let h=i[l*3],u=i[l*3+1],f=i[l*3+2],m=c?c[l*3]:0,g=c?c[l*3+1]:1,_=c?c[l*3+2]:0,p=0,d=0,M=0,y=0,x=0,w=0,S=0,A=(v,b)=>{p+=b*(v[0]*h+v[3]*u+v[6]*f+v[9]),d+=b*(v[1]*h+v[4]*u+v[7]*f+v[10]),M+=b*(v[2]*h+v[5]*u+v[8]*f+v[11]),y+=b*(v[0]*m+v[3]*g+v[6]*_),x+=b*(v[1]*m+v[4]*g+v[7]*_),w+=b*(v[2]*m+v[5]*g+v[8]*_)};if(r>0)for(let v=0;v<r;v++){let b=e.w[l*r+v];b<=0||(A(n.binds[e.bones[l*r+v]],b),S+=b)}S<=0&&A(n.xf,1);let T=Math.hypot(y,x,w)||1;o[l*3]=p,o[l*3+1]=d,o[l*3+2]=M,a[l*3]=y/T,a[l*3+1]=x/T,a[l*3+2]=w/T}return{pos:o,nor:a}}function aA(n,e){let t=n.idx&&n.idx.length?Uint32Array.from(n.idx):Uint32Array.from({length:e},(i,s)=>s);for(let i=0;i+2<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}return t}function Lc(n,e,t){let{pos:i,nor:s}=oA(n,e,t),r=new Ht;return r.setAttribute("position",new ht(i,3)),r.setAttribute("normal",new ht(s,3)),e.uv&&r.setAttribute("uv",new ht(Float32Array.from(e.uv),2)),r.setAttribute("aLocal",new ht(Float32Array.from(e.vf),3)),r.setIndex(new ht(aA(e,i.length/3),1)),r}async function Z0(n,e,t={}){let{rig:i,io:s,cat:r}=n,o=Jp(e);if(!o)throw new Error("codigo invalido");let a=t.outfit??0,c=t.vp||new De(540,960),l=fm(o,a),h=!!o.lh,u=o.h??.5,f=f0(i,{left:h,height:u}),m=n.centre,g=n.radii,_=n.mount.head,p=new gn,d=new gn;d.scale.setScalar(f.sceneScale),p.add(d);let M=(N,W,H,ee,Q,ie,fe)=>{let te=fe?fe(N,Ls(H,ee,Q,c)):new Mt(N,Ls(H,ee,Q,c));return te.frustumCulled=!1,te.renderOrder=5,ie&&(te.matrixAutoUpdate=!1,te.matrix.copy(ie)),W.add(te),te},x=(await n.loader.parseAsync(n.bodyBytes.slice().buffer,"")).scene;d.add(x);let w=null;x.traverse(N=>{N.isSkinnedMesh&&(w=N.skeleton)});let S={};for(let N of w.bones)S[N.name]=N;i.bones.forEach((N,W)=>{let H=S[N.name];if(!H)return;let ee=f.local[W];H.position.set(...ee.t),H.quaternion.set(...ee.q),H.scale.set(...ee.s)}),x.updateMatrixWorld(!0);let A=[];x.traverse(N=>{N.isSkinnedMesh&&A.push(N)});let T=(N,W,H)=>{let ee=N.geometry,Q=ee.attributes.position,ie=ee.index?ee.index.array:Uint32Array.from({length:Q.count},(de,ye)=>ye),fe=[],te=[];for(let de=0;de+2<ie.length;de+=3)((Q.getX(ie[de])+Q.getX(ie[de+1])+Q.getX(ie[de+2]))/3>0?fe:te).push(ie[de],ie[de+1],ie[de+2]);let oe=(de,ye)=>{let ce=ee.clone();ce.setIndex(de);let Ce=new _s(ce,N.material);return Ce.name=ye,Ce.bind(N.skeleton,N.bindMatrix),N.parent.add(Ce),Ce};return[oe(fe,W),oe(te,H)]},v=[];for(let N of l.splits){let W=A.find(H=>H.name===N.src);W&&(v.push(...T(W,N.l,N.r)),W.visible=!1)}A.push(...v);let b=[];for(let N of A){let W=N.name,H=-1;!l.meshes[W]&&N.parent&&l.meshes[N.parent.name]&&N.parent.type==="Group"&&(W=N.parent.name,H=N.parent.children.indexOf(N));let ee=l.meshes[W];if(!ee){N.visible=!1;continue}if(N.visible===!1&&!v.includes(N))continue;if(!ee.visible){N.visible=!1;continue}if(N.morphTargetDictionary)for(let[Ce,Pe]of Object.entries(ee.blend||{})){let Qe=N.morphTargetDictionary[Ce];Qe!==void 0&&(N.morphTargetInfluences[Qe]=Pe)}let Q=H>=0?[ee.surfaces[H]]:ee.surfaces;if(Q.some(Ce=>!Ce)){N.visible=!1;continue}let ie=/^(head|ears)mesh/.test(W),fe=W.startsWith("jersey"),te=W.startsWith("numbermesh"),oe=Q.map(Ce=>Ce.number?H0(n.atlas,l.number.value,l.number.ink,l.number.lift,l.number.flipU):Oo({albedo:Ce.albedo?Ce.albedo.slice(0,3):[1,1,1],stencil:ie?9:1,doubleSided:fe,hidden:Ce.hidden}));N.material=oe.length===1?oe[0]:oe;let de=Q.length===1&&/accent|collar|hem|waist/.test(Q[0].slot||"");if(N.renderOrder=te?3:de?2:1,N.frustumCulled=!1,te)continue;let ye=Ce=>Ls(ie?9:1,ie?.04:0,Ce.outlineHidden||Ce.hidden,c),ce=new _s(N.geometry,Q.length===1?ye(Q[0]):Q.map(ye));ce.bind(N.skeleton,N.bindMatrix),ce.morphTargetInfluences=N.morphTargetInfluences,ce.morphTargetDictionary=N.morphTargetDictionary,ce.renderOrder=5,ce.frustumCulled=!1,b.push([N.parent,ce])}for(let[N,W]of b)N.add(W);let C=[];x.traverse(N=>{N.isMesh&&!N.isSkinnedMesh&&C.push(N)});for(let N of C){let W=l.meshes[N.name];if(!W||!W.visible){N.visible=!1;continue}let H=W.surfaces.map(Q=>Oo({albedo:Q.albedo?Q.albedo.slice(0,3):[1,1,1],stencil:1,hidden:Q.hidden}));N.material=H.length===1?H[0]:H,N.renderOrder=1,N.frustumCulled=!1;let ee=new Mt(N.geometry,W.surfaces.length===1?Ls(1,0,W.surfaces[0].outlineHidden||W.surfaces[0].hidden,c):W.surfaces.map(Q=>Ls(1,0,Q.outlineHidden||Q.hidden,c)));ee.renderOrder=5,ee.frustumCulled=!1,N.add(ee)}let L={},P=new Xa(.14,48,32);for(let N of["l","r"]){let W=f.hands[N],H=new Mt(P,Oo({albedo:l.hands.albedo.slice(0,3),stencil:1}));H.position.set(...W),H.scale.setScalar(f.handScale),H.renderOrder=1,p.add(H);let ee=new Mt(P,Ls(1,0,0,c));ee.position.copy(H.position),ee.scale.copy(H.scale),ee.renderOrder=5,p.add(ee),L[N]=[H,ee]}let U=Fo(i.bones[_].grest).clone().invert(),k=N=>({rest:Fo(N.global[_]).multiply(U),mount:W=>Fo(N.global[n.mount[W]])}),F=k(f),O=[],D=[],q=(N,W,H,ee,Q=2,ie=.04,fe=!1)=>{let te=H(F),oe=new Mt(N,W);oe.matrixAutoUpdate=!1,oe.matrix.copy(te),oe.renderOrder=Q,oe.frustumCulled=!1,d.add(oe);let de=M(N,d,ee,ie,fe,te);return D.push({objs:[oe,de],placer:H}),oe},Z=(N,W,H)=>Oo({albedo:N.slice(0,3),stencil:9,doubleSided:!0,grad:W,pattern:H}),re=wm(o),me=N=>ko(n,"hair:"+N,()=>s.bytes(`hair/${N}.glb`)),ve=null,J=null;re.mounted&&(J=Ao(await me(re.name),{flip:re.flip}),Em(J.parts,n.headField,m,g),ve=J.parts);let se=({item:N,flip:W,placeFor:H})=>t0(N,W,H,n.hatgeo[N.id],{parts:ve||[],headField:n.headField},m,g),le=e0(o,n.catalog,{centre:m,radii:g,hat:ve?se:void 0}),he=ve,Ie=le.hair&&le.hair.hatSlot;if(ve&&Ie&&le.slots[Ie]&&le.slots[Ie].mounted){let N=le.slots[Ie],W=r.byId.get(N.id),H=W.hair_mode==="full_covered",ee=N.fit,Q=ee===1?iA:[1/ee,0,0,0,1/ee,0,0,0,1/ee,m[0]-m[0]/ee,m[1]-m[1]/ee,m[2]-m[2]/ee],ie=At(Q,N.place),fe=await ko(n,"acc:"+N.id,()=>s.bytes(`accessories/${q0[N.id]||N.id}.glb`)),oe=Ao(fe,{flip:N.flip}).parts.map(ye=>({xf:At(ie,ye.xf),tails:ye.tails,surfaces:ye.surfaces.map(ce=>({v:ce.vf,i:ce.idx,bones:ce.bones,w:ce.w}))})),de=Tr.build(oe,m);ee!==1&&(de=de.scaled(ee)),(H||Um(ve,de,m,g))&&(he=sA(ve),Om(he,de,n.headField,m,g,H,W.open_slack))}let Le={};for(let[N,W]of Object.entries(le.slots)){if(!W.mounted||!W.visible||!W.id)continue;let H=await ko(n,"acc:"+W.id,()=>s.bytes(`accessories/${q0[W.id]||W.id}.glb`));Le[N]=Ao(H,{flip:W.flip})}{let N=[],W=[],H=J?{...J,parts:he}:null;H&&(N.push({kind:"hair",hp:H,held:B0(le,r,n.catalog)}),W.push(H));for(let[ee,Q]of Object.entries(le.slots))!Le[ee]||!Q.hasTails||Q.id==="spinny_hat"||(N.push({kind:"acc",hp:Le[ee],slot:Q,item:r.byId.get(Q.id)}),W.push(Le[ee]));N.length&&t.physics!==!1&&k0({rig:i,hf:n.headField,centre:m,radii:g,mount:n.mount},f,N).forEach((Q,ie)=>{Q&&Q.binds&&W[ie].parts.forEach((fe,te)=>{fe.binds&&fe.binds.length&&Q.binds[te]&&(fe.binds=Q.binds[te])})})}if(he){let N=Cf(he),W=new Set(le.hair?le.hair.hidden:[]);for(let H of he)if(!W.has(H.name))for(let ee of H.surfaces){let Q=re.slots[N.indexOf(Dc(ee.material))]||{albedo:[1,1,1],gradOn:0},ie=Q.gradOn?{top:Q.top,bottom:Q.bottom,y0:Q.gradYMin,y1:Q.gradYMax,fadeStart:Q.fadeStart,fadeEnd:Q.fadeEnd}:null;q(Lc(H,ee,null),Z(Q.albedo,ie),fe=>fe.rest,9)}}let ke=Tm(o);if(ke.mounted){let{parts:N}=Ao(await ko(n,"beard:"+ke.name,()=>s.bytes(`facial_hair/${ke.name}.glb`)),{flip:!1}),W=Cf(N),H=ee=>ee.mount("head").multiply(Fo(ke.xf));for(let ee of N){let Q=(ke.meshes.find(ie=>ie.name===ee.name)||{}).keys||null;for(let ie of ee.surfaces){let fe=ke.slots[W.indexOf(Dc(ie.material))]||{albedo:[0,0,0,1]};q(Lc(ee,ie,Q),Z(fe.albedo,null,null),H,9)}}}let dt={};for(let[N,W]of Object.entries(le.slots)){if(!W.mounted||!W.visible||!W.id)continue;let H=r.byId.get(W.id),{parts:ee}=Le[N],Q=Cf(ee),ie=fe=>fe.mount(W.mount).multiply(Fo(W.xf));for(let fe of ee){W.id==="spinny_hat"&&fe.name==="fan"&&(fe={...fe,xf:[1,0,0,0,1,0,0,0,1,fe.xf[9],fe.xf[10],fe.xf[11]]});let te=W.blend&&(W.blend[fe.name]||Object.entries(W.blend).find(([oe])=>oe.split("/").pop()===fe.name)?.[1])||null;for(let oe of fe.surfaces){let de=Q.indexOf(Dc(oe.material)),ye=W.colors[de]||{albedo:[1,1,1,1],gradient:null},ce=null;ye.pattern&&H.has_pattern&&(dt[W.id]||(dt[W.id]=await n.io.texture(`accessories/${W.id}_pattern.png`,{flipY:!1,mipmaps:!0})),ce={tex:dt[W.id],ink:ye.pattern.ink,spot:ye.pattern.spot});let Ce=ye.albedo||[1,1,1,1],Pe=H.slot_materials&&H.slot_materials[de];if(Pe&&Pe.shader&&/glass|water/.test(Pe.shader)){let Qe=/water/.test(Pe.shader),B=Qe?X0(Pe.params):W0(Pe.params);Qe&&O.push(B),q(Lc(fe,oe,te),B,ie,9,Qe?6:7)}else q(Lc(fe,oe,te),Z(Ce,ye.gradient,ce),ie,9)}}}let Je=_0(o),yt={};await Promise.all(Je.map(async N=>{yt[N]=await ko(n,"face:"+N,()=>s.image("faces/"+N))}));let Nt=x0(o,(N,W)=>{let H=document.createElement("canvas");return H.width=N,H.height=W,H},yt),He=new Wi(new Uint8Array(Nt.data.buffer,Nt.data.byteOffset,Nt.data.byteLength),Nt.width,Nt.height,an,Bn);He.colorSpace=mn,He.minFilter=Rt,He.magFilter=Rt,He.generateMipmaps=!1,He.needsUpdate=!0;let Ke=df(i),we=y0(Ke.surfaces.map(N=>({positions:N.v,blendShapes:N.shapes}))),it=new Ht;it.setAttribute("position",new ht(we.positions,3)),it.setAttribute("uv",new ht(we.uvs,2)),it.setIndex(new ht(we.indices,1));let Ae=new Mt(it,G0(He)),I=N=>N.rest.clone().multiply(new Fe().makeTranslation(we.centre[0],we.centre[1],we.centre[2]));Ae.matrixAutoUpdate=!1,Ae.matrix.copy(I(F)),Ae.renderOrder=4,Ae.frustumCulled=!1,d.add(Ae),D.push({objs:[Ae],placer:I}),p.updateMatrixWorld(!0);let E=i.clips&&i.clips.idle&&i.clips.idle.length||.5;return{group:p,raw:o,body:l,pose:f,acc:le,update:(N,W=N,H=null)=>{for(let ie of O)ie.uniforms.uTime.value=W;let ee=uf(i,"idle",N,{loop:!0,height:u});H&&H.w>0&&(ee=d0(i,ee,uf(i,H.clip,Math.min(H.t,i.clips[H.clip].length),{height:u}),H.w,{height:u})),i.bones.forEach((ie,fe)=>{let te=S[ie.name];if(!te)return;let oe=ee.local[fe];te.position.set(...oe.t),te.quaternion.set(...oe.q),te.scale.set(...oe.s)});let Q=k(ee);for(let ie of D){let fe=ie.placer(Q);for(let te of ie.objs)te.matrix.copy(fe)}for(let ie of["l","r"])for(let fe of L[ie])fe.position.set(...ee.hands[ie]),fe.scale.setScalar(ee.handScale);p.updateMatrixWorld(!0)},clipLen:E,left:h,clipLength:N=>i.clips[N]&&i.clips[N].length||0,hasClip:N=>!!i.clips[N],dispose(){p.traverse(N=>{N.geometry&&N.geometry.dispose()})}}}var Bo=n=>document.querySelector(n),$0=new URLSearchParams(location.search),cA=$0.get("code")||"",Lf=$0.get("still")==="1",Df="./assets/",lA={"acc.catalog":"./data/catalog.json","acc.hatgeo":"./data/hatgeo.json"},hA=new vr,uA={bytes:async n=>{let e=await fetch(Df+n);if(!e.ok)throw new Error("falha ao baixar "+n);return new Uint8Array(await e.arrayBuffer())},json:async n=>{let e=await fetch(lA[n]);if(!e.ok)throw new Error("falha ao baixar "+n);return e.json()},image:n=>new Promise((e,t)=>{let i=new Image;i.onload=()=>e(i),i.onerror=()=>t(new Error("imagem "+n)),i.src=Df+n}),texture:async(n,e={})=>{let t=await hA.loadAsync(Df+n);return t.flipY=e.flipY??!0,t.colorSpace=mn,e.mipmaps||(t.generateMipmaps=!1,t.minFilter=Rt),t}},fA=n=>{console.error(n);let e=Bo("#msg");e&&(e.textContent="N\xE3o foi poss\xEDvel abrir o 3D neste navegador.");try{parent.postMessage({type:"jv-error",msg:String(n&&n.message||n)},"*")}catch{}},Ds=.1,dA=[["I got it!","igot"],["Nice!","nice1"]],pA=0,Nc=1,Uc=0,Dt=null,j0=!1,J0=0;try{let g=function(A){let v=document.createElement("canvas"),b=v.getContext("2d"),C=`600 ${f*2}px Nunito, sans-serif`;b.font=C;let L=Math.ceil(b.measureText(A).width+m*2*2),P=Math.ceil(f*2*1.4+m*2);v.width=L,v.height=P,b.font=C,b.textAlign="center",b.textBaseline="middle",b.lineJoin="round",b.strokeStyle="#000",b.lineWidth=m*2*.5,b.strokeText(A,L/2,P/2),b.fillStyle="#fff",b.fillText(A,L/2,P/2);let U=new Wa(v);U.colorSpace=mn;let k=new Oa(new so({map:U,transparent:!0,depthTest:!1,depthWrite:!1}));return k.renderOrder=50,k.userData.size=[L/2*u,P/2*u],k.position.set(0,2.41,0),k},n=Bo("#canvas"),e=new Na({canvas:n,antialias:!0,alpha:!0,stencil:!0,powerPreference:"high-performance"});e.setClearColor(0,0),e.outputColorSpace=kt;let t=new Ua,i=new Et(If,1,.1,60),s=new De(1,1),r=Y0*.5/Math.tan(po.degToRad(If*.5)),o=()=>{i.position.set(0,Pf,r*Nc),i.lookAt(0,Pf,0),i.far=r*Nc+20,i.updateProjectionMatrix()},a=()=>{let A=Math.min(window.devicePixelRatio||1,2),T=Math.max(1,Math.round(innerWidth*A)),v=Math.max(1,Math.round(innerHeight*A));e.setPixelRatio(1),e.setSize(T,v,!1),s.set(T,v),i.aspect=T/v,o()};a(),addEventListener("resize",a);let c=await K0(uA);async function l(){let A=++J0,T=await Z0(c,cA,{vp:s,outfit:pA});if(A!==J0){T.dispose();return}if(Dt&&(t.remove(Dt.group),Dt.dispose()),Dt=T,t.add(Dt.group),Dt.group.rotation.y=Uc,!j0){j0=!0,Bo("#load").classList.add("hide"),Bo("#ctl").classList.add("ready"),document.body.classList.add("ready");try{parent.postMessage("jv-shown","*")}catch{}}}let h=null;n.addEventListener("pointerdown",A=>{h=[A.clientX,Uc],n.setPointerCapture(A.pointerId)}),n.addEventListener("pointermove",A=>{h&&(Uc=h[1]+(A.clientX-h[0])*.012)}),n.addEventListener("pointerup",()=>{h=null}),n.addEventListener("pointercancel",()=>{h=null}),n.addEventListener("wheel",A=>{A.preventDefault(),Nc=Math.min(2,Math.max(.4,Nc*Math.exp(A.deltaY*.0012))),o()},{passive:!1});let u=.0062,f=56,m=34,_=A=>{let b=A-1;return 1+2.70158*b*b*b+1.70158*b*b},p=null,d=null,M=0,y=Bo("#ctl");dA.forEach(([A,T])=>{let v=document.createElement("button");v.className="pill",v.textContent=A,v.onclick=()=>{if(p||!Dt||!Dt.hasClip)return;let b=T==="igot"?Dt.left?"igot_l":"igot_r":T;Dt.hasClip(b)&&(x=performance.now(),w=!1,p={clip:b,start:performance.now(),len:Dt.clipLength(b),text:A},y.classList.add("busy"),d&&t.remove(d),d=g(A),M=performance.now(),t.add(d))},y.appendChild(v)}),window.__emoteAt=(A,T,v,b)=>{let C=T/1e3,L=Dt.clipLength(A),P=b!==void 0?b:C<Ds?C/Ds:C<L?1:Math.max(0,1-(C-L)/Ds),U=(C>=L?C-L:C)%Dt.clipLen;if(d&&(t.remove(d),d=null),v){d=g(v);let k=C<.14?.6+.4*_(C/.14):1;d.scale.set(d.userData.size[0]*k,d.userData.size[1]*k,1),t.add(d)}return Dt.update(U,C,{clip:A,t:C,w:P}),Dt.group.rotation.y=0,e.render(t,i),n.toDataURL("image/png")},await l();let x=performance.now(),w=!1,S=A=>{if(Dt){let T=null;if(p){let v=(A-p.start)/1e3;v>=p.len&&!w&&(w=!0,x=A);let b=v<Ds?v/Ds:v<p.len?1:Math.max(0,1-(v-p.len)/Ds);v>=p.len+Ds?(p=null,y.classList.remove("busy")):T={clip:p.clip,t:v,w:b}}if(d){let v=(A-M)/1e3,b=v<.14?.6+.4*_(v/.14):1,C=v<1.64?1:Math.max(0,1-(v-1.64)/.35);C<=0?(t.remove(d),d=null):(d.material.opacity=C,d.scale.set(d.userData.size[0]*b,d.userData.size[1]*b,1))}Dt.update(Lf?0:(A-x)/1e3%Dt.clipLen,Lf?0:A/1e3,T),Dt.group.rotation.y=Uc,e.render(t,i),Lf&&!document.body.dataset.shot&&(document.body.dataset.shot="1")}requestAnimationFrame(S)};requestAnimationFrame(S)}catch(n){fA(n)}
