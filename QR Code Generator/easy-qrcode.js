/**
 * EasyQRCodeJS
 *
 * Cross-browser QRCode generator for pure javascript. Support Canvas, SVG and Table drawing methods. Support Dot style, Logo, Background image, Colorful, Title etc. settings. Support Angular, Vue.js, React, Next.js, Svelte framework. Support binary(hex) data mode.(Running with DOM on client side)
 *
 * Version 4.6.1
 *
 * @author [ inthinkcolor@gmail.com ]
 *
 * @see https://github.com/ushelp/EasyQRCodeJS
 * @see http://www.easyproject.cn/easyqrcodejs/tryit.html
 * @see https://github.com/ushelp/EasyQRCodeJS-NodeJS
 *
 * Copyright 2017 Ray, EasyProject
 * Released under the MIT license
 *
 * [Support AMD, CMD, CommonJS/Node.js]
 *
 */
!(function () {
  "use strict";
  function a(a, b) {
    var c,
      d = Object.keys(b);
    for (c = 0; c < d.length; c++)
      a = a.replace(new RegExp("\\{" + d[c] + "\\}", "gi"), b[d[c]]);
    return a;
  }
  function b(a) {
    var b, c, d;
    if (!a)
      throw new Error(
        "cannot create a random attribute name for an undefined object"
      );
    (b = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"), (c = "");
    do {
      for (c = "", d = 0; d < 12; d++)
        c += b[Math.floor(Math.random() * b.length)];
    } while (a[c]);
    return c;
  }
  function c(a) {
    var b = {
      left: "start",
      right: "end",
      center: "middle",
      start: "start",
      end: "end",
    };
    return b[a] || b.start;
  }
  function d(a) {
    var b = {
      alphabetic: "alphabetic",
      hanging: "hanging",
      top: "text-before-edge",
      bottom: "text-after-edge",
      middle: "central",
    };
    return b[a] || b.alphabetic;
  }
  var e, f, g, h, i;
  (i = (function (a, b) {
    var c,
      d,
      e,
      f = {};
    for (a = a.split(","), b = b || 10, c = 0; c < a.length; c += 2)
      (d = "&" + a[c + 1] + ";"),
        (e = parseInt(a[c], b)),
        (f[d] = "&#" + e + ";");
    return (f["\\xa0"] = "&#160;"), f;
  })(
    "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
    32
  )),
    (e = {
      strokeStyle: {
        svgAttr: "stroke",
        canvas: "#000000",
        svg: "none",
        apply: "stroke",
      },
      fillStyle: {
        svgAttr: "fill",
        canvas: "#000000",
        svg: null,
        apply: "fill",
      },
      lineCap: {
        svgAttr: "stroke-linecap",
        canvas: "butt",
        svg: "butt",
        apply: "stroke",
      },
      lineJoin: {
        svgAttr: "stroke-linejoin",
        canvas: "miter",
        svg: "miter",
        apply: "stroke",
      },
      miterLimit: {
        svgAttr: "stroke-miterlimit",
        canvas: 10,
        svg: 4,
        apply: "stroke",
      },
      lineWidth: {
        svgAttr: "stroke-width",
        canvas: 1,
        svg: 1,
        apply: "stroke",
      },
      globalAlpha: {
        svgAttr: "opacity",
        canvas: 1,
        svg: 1,
        apply: "fill stroke",
      },
      font: { canvas: "10px sans-serif" },
      shadowColor: { canvas: "#000000" },
      shadowOffsetX: { canvas: 0 },
      shadowOffsetY: { canvas: 0 },
      shadowBlur: { canvas: 0 },
      textAlign: { canvas: "start" },
      textBaseline: { canvas: "alphabetic" },
      lineDash: {
        svgAttr: "stroke-dasharray",
        canvas: [],
        svg: null,
        apply: "stroke",
      },
    }),
    (g = function (a, b) {
      (this.__root = a), (this.__ctx = b);
    }),
    (g.prototype.addColorStop = function (b, c) {
      var d,
        e,
        f = this.__ctx.__createElement("stop");
      f.setAttribute("offset", b),
        -1 !== c.indexOf("rgba")
          ? ((d =
              /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi),
            (e = d.exec(c)),
            f.setAttribute(
              "stop-color",
              a("rgb({r},{g},{b})", { r: e[1], g: e[2], b: e[3] })
            ),
            f.setAttribute("stop-opacity", e[4]))
          : f.setAttribute("stop-color", c),
        this.__root.appendChild(f);
    }),
    (h = function (a, b) {
      (this.__root = a), (this.__ctx = b);
    }),
    (f = function (a) {
      var b,
        c = { width: 500, height: 500, enableMirroring: !1 };
      if (
        (arguments.length > 1
          ? ((b = c), (b.width = arguments[0]), (b.height = arguments[1]))
          : (b = a || c),
        !(this instanceof f))
      )
        return new f(b);
      (this.width = b.width || c.width),
        (this.height = b.height || c.height),
        (this.enableMirroring =
          void 0 !== b.enableMirroring ? b.enableMirroring : c.enableMirroring),
        (this.canvas = this),
        (this.__document = b.document || document),
        b.ctx
          ? (this.__ctx = b.ctx)
          : ((this.__canvas = this.__document.createElement("canvas")),
            (this.__ctx = this.__canvas.getContext("2d"))),
        this.__setDefaultStyles(),
        (this.__stack = [this.__getStyleState()]),
        (this.__groupStack = []),
        (this.__root = this.__document.createElementNS(
          "http://www.w3.org/2000/svg",
          "svg"
        )),
        this.__root.setAttribute("version", 1.1),
        this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
        this.__root.setAttributeNS(
          "http://www.w3.org/2000/xmlns/",
          "xmlns:xlink",
          "http://www.w3.org/1999/xlink"
        ),
        this.__root.setAttribute("width", this.width),
        this.__root.setAttribute("height", this.height),
        (this.__ids = {}),
        (this.__defs = this.__document.createElementNS(
          "http://www.w3.org/2000/svg",
          "defs"
        )),
        this.__root.appendChild(this.__defs),
        (this.__currentElement = this.__document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        )),
        this.__root.appendChild(this.__currentElement);
    }),
    (f.prototype.__createElement = function (a, b, c) {
      void 0 === b && (b = {});
      var d,
        e,
        f = this.__document.createElementNS("http://www.w3.org/2000/svg", a),
        g = Object.keys(b);
      for (
        c && (f.setAttribute("fill", "none"), f.setAttribute("stroke", "none")),
          d = 0;
        d < g.length;
        d++
      )
        (e = g[d]), f.setAttribute(e, b[e]);
      return f;
    }),
    (f.prototype.__setDefaultStyles = function () {
      var a,
        b,
        c = Object.keys(e);
      for (a = 0; a < c.length; a++) (b = c[a]), (this[b] = e[b].canvas);
    }),
    (f.prototype.__applyStyleState = function (a) {
      var b,
        c,
        d = Object.keys(a);
      for (b = 0; b < d.length; b++) (c = d[b]), (this[c] = a[c]);
    }),
    (f.prototype.__getStyleState = function () {
      var a,
        b,
        c = {},
        d = Object.keys(e);
      for (a = 0; a < d.length; a++) (b = d[a]), (c[b] = this[b]);
      return c;
    }),
    (f.prototype.__applyStyleToCurrentElement = function (b) {
      var c = this.__currentElement,
        d = this.__currentElementsToStyle;
      d &&
        (c.setAttribute(b, ""),
        (c = d.element),
        d.children.forEach(function (a) {
          a.setAttribute(b, "");
        }));
      var f,
        i,
        j,
        k,
        l,
        m,
        n = Object.keys(e);
      for (f = 0; f < n.length; f++)
        if (((i = e[n[f]]), (j = this[n[f]]), i.apply))
          if (j instanceof h) {
            if (j.__ctx)
              for (; j.__ctx.__defs.childNodes.length; )
                (k = j.__ctx.__defs.childNodes[0].getAttribute("id")),
                  (this.__ids[k] = k),
                  this.__defs.appendChild(j.__ctx.__defs.childNodes[0]);
            c.setAttribute(
              i.apply,
              a("url(#{id})", { id: j.__root.getAttribute("id") })
            );
          } else if (j instanceof g)
            c.setAttribute(
              i.apply,
              a("url(#{id})", { id: j.__root.getAttribute("id") })
            );
          else if (-1 !== i.apply.indexOf(b) && i.svg !== j)
            if (
              ("stroke" !== i.svgAttr && "fill" !== i.svgAttr) ||
              -1 === j.indexOf("rgba")
            ) {
              var o = i.svgAttr;
              if (
                "globalAlpha" === n[f] &&
                ((o = b + "-" + i.svgAttr), c.getAttribute(o))
              )
                continue;
              c.setAttribute(o, j);
            } else {
              (l =
                /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi),
                (m = l.exec(j)),
                c.setAttribute(
                  i.svgAttr,
                  a("rgb({r},{g},{b})", { r: m[1], g: m[2], b: m[3] })
                );
              var p = m[4],
                q = this.globalAlpha;
              null != q && (p *= q), c.setAttribute(i.svgAttr + "-opacity", p);
            }
    }),
    (f.prototype.__closestGroupOrSvg = function (a) {
      return (
        (a = a || this.__currentElement),
        "g" === a.nodeName || "svg" === a.nodeName
          ? a
          : this.__closestGroupOrSvg(a.parentNode)
      );
    }),
    (f.prototype.getSerializedSvg = function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = new XMLSerializer().serializeToString(this.__root);
      if (
        ((g =
          /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi),
        g.test(h) &&
          (h = h.replace(
            'xmlns="http://www.w3.org/2000/svg',
            'xmlns:xlink="http://www.w3.org/1999/xlink'
          )),
        a)
      )
        for (b = Object.keys(i), c = 0; c < b.length; c++)
          (d = b[c]),
            (e = i[d]),
            (f = new RegExp(d, "gi")),
            f.test(h) && (h = h.replace(f, e));
      return h;
    }),
    (f.prototype.getSvg = function () {
      return this.__root;
    }),
    (f.prototype.save = function () {
      var a = this.__createElement("g"),
        b = this.__closestGroupOrSvg();
      this.__groupStack.push(b),
        b.appendChild(a),
        (this.__currentElement = a),
        this.__stack.push(this.__getStyleState());
    }),
    (f.prototype.restore = function () {
      (this.__currentElement = this.__groupStack.pop()),
        (this.__currentElementsToStyle = null),
        this.__currentElement ||
          (this.__currentElement = this.__root.childNodes[1]);
      var a = this.__stack.pop();
      this.__applyStyleState(a);
    }),
    (f.prototype.__addTransform = function (a) {
      var b = this.__closestGroupOrSvg();
      if (b.childNodes.length > 0) {
        "path" === this.__currentElement.nodeName &&
          (this.__currentElementsToStyle ||
            (this.__currentElementsToStyle = { element: b, children: [] }),
          this.__currentElementsToStyle.children.push(this.__currentElement),
          this.__applyCurrentDefaultPath());
        var c = this.__createElement("g");
        b.appendChild(c), (this.__currentElement = c);
      }
      var d = this.__currentElement.getAttribute("transform");
      d ? (d += " ") : (d = ""),
        (d += a),
        this.__currentElement.setAttribute("transform", d);
    }),
    (f.prototype.scale = function (b, c) {
      void 0 === c && (c = b),
        this.__addTransform(a("scale({x},{y})", { x: b, y: c }));
    }),
    (f.prototype.rotate = function (b) {
      var c = (180 * b) / Math.PI;
      this.__addTransform(
        a("rotate({angle},{cx},{cy})", { angle: c, cx: 0, cy: 0 })
      );
    }),
    (f.prototype.translate = function (b, c) {
      this.__addTransform(a("translate({x},{y})", { x: b, y: c }));
    }),
    (f.prototype.transform = function (b, c, d, e, f, g) {
      this.__addTransform(
        a("matrix({a},{b},{c},{d},{e},{f})", {
          a: b,
          b: c,
          c: d,
          d: e,
          e: f,
          f: g,
        })
      );
    }),
    (f.prototype.beginPath = function () {
      var a, b;
      (this.__currentDefaultPath = ""),
        (this.__currentPosition = {}),
        (a = this.__createElement("path", {}, !0)),
        (b = this.__closestGroupOrSvg()),
        b.appendChild(a),
        (this.__currentElement = a);
    }),
    (f.prototype.__applyCurrentDefaultPath = function () {
      var a = this.__currentElement;
      "path" === a.nodeName
        ? a.setAttribute("d", this.__currentDefaultPath)
        : console.error("Attempted to apply path command to node", a.nodeName);
    }),
    (f.prototype.__addPathCommand = function (a) {
      (this.__currentDefaultPath += " "), (this.__currentDefaultPath += a);
    }),
    (f.prototype.moveTo = function (b, c) {
      "path" !== this.__currentElement.nodeName && this.beginPath(),
        (this.__currentPosition = { x: b, y: c }),
        this.__addPathCommand(a("M {x} {y}", { x: b, y: c }));
    }),
    (f.prototype.closePath = function () {
      this.__currentDefaultPath && this.__addPathCommand("Z");
    }),
    (f.prototype.lineTo = function (b, c) {
      (this.__currentPosition = { x: b, y: c }),
        this.__currentDefaultPath.indexOf("M") > -1
          ? this.__addPathCommand(a("L {x} {y}", { x: b, y: c }))
          : this.__addPathCommand(a("M {x} {y}", { x: b, y: c }));
    }),
    (f.prototype.bezierCurveTo = function (b, c, d, e, f, g) {
      (this.__currentPosition = { x: f, y: g }),
        this.__addPathCommand(
          a("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}", {
            cp1x: b,
            cp1y: c,
            cp2x: d,
            cp2y: e,
            x: f,
            y: g,
          })
        );
    }),
    (f.prototype.quadraticCurveTo = function (b, c, d, e) {
      (this.__currentPosition = { x: d, y: e }),
        this.__addPathCommand(
          a("Q {cpx} {cpy} {x} {y}", { cpx: b, cpy: c, x: d, y: e })
        );
    });
  var j = function (a) {
    var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
    return [a[0] / b, a[1] / b];
  };
  (f.prototype.arcTo = function (a, b, c, d, e) {
    var f = this.__currentPosition && this.__currentPosition.x,
      g = this.__currentPosition && this.__currentPosition.y;
    if (void 0 !== f && void 0 !== g) {
      if (e < 0)
        throw new Error(
          "IndexSizeError: The radius provided (" + e + ") is negative."
        );
      if ((f === a && g === b) || (a === c && b === d) || 0 === e)
        return void this.lineTo(a, b);
      var h = j([f - a, g - b]),
        i = j([c - a, d - b]);
      if (h[0] * i[1] == h[1] * i[0]) return void this.lineTo(a, b);
      var k = h[0] * i[0] + h[1] * i[1],
        l = Math.acos(Math.abs(k)),
        m = j([h[0] + i[0], h[1] + i[1]]),
        n = e / Math.sin(l / 2),
        o = a + n * m[0],
        p = b + n * m[1],
        q = [-h[1], h[0]],
        r = [i[1], -i[0]],
        s = function (a) {
          var b = a[0];
          return a[1] >= 0 ? Math.acos(b) : -Math.acos(b);
        },
        t = s(q),
        u = s(r);
      this.lineTo(o + q[0] * e, p + q[1] * e), this.arc(o, p, e, t, u);
    }
  }),
    (f.prototype.stroke = function () {
      "path" === this.__currentElement.nodeName &&
        this.__currentElement.setAttribute(
          "paint-order",
          "fill stroke markers"
        ),
        this.__applyCurrentDefaultPath(),
        this.__applyStyleToCurrentElement("stroke");
    }),
    (f.prototype.fill = function () {
      "path" === this.__currentElement.nodeName &&
        this.__currentElement.setAttribute(
          "paint-order",
          "stroke fill markers"
        ),
        this.__applyCurrentDefaultPath(),
        this.__applyStyleToCurrentElement("fill");
    }),
    (f.prototype.rect = function (a, b, c, d) {
      "path" !== this.__currentElement.nodeName && this.beginPath(),
        this.moveTo(a, b),
        this.lineTo(a + c, b),
        this.lineTo(a + c, b + d),
        this.lineTo(a, b + d),
        this.lineTo(a, b),
        this.closePath();
    }),
    (f.prototype.fillRect = function (a, b, c, d) {
      var e, f;
      (e = this.__createElement(
        "rect",
        { x: a, y: b, width: c, height: d, "shape-rendering": "crispEdges" },
        !0
      )),
        (f = this.__closestGroupOrSvg()),
        f.appendChild(e),
        (this.__currentElement = e),
        this.__applyStyleToCurrentElement("fill");
    }),
    (f.prototype.strokeRect = function (a, b, c, d) {
      var e, f;
      (e = this.__createElement(
        "rect",
        { x: a, y: b, width: c, height: d },
        !0
      )),
        (f = this.__closestGroupOrSvg()),
        f.appendChild(e),
        (this.__currentElement = e),
        this.__applyStyleToCurrentElement("stroke");
    }),
    (f.prototype.__clearCanvas = function () {
      for (
        var a = this.__closestGroupOrSvg(),
          b = a.getAttribute("transform"),
          c = this.__root.childNodes[1],
          d = c.childNodes,
          e = d.length - 1;
        e >= 0;
        e--
      )
        d[e] && c.removeChild(d[e]);
      (this.__currentElement = c),
        (this.__groupStack = []),
        b && this.__addTransform(b);
    }),
    (f.prototype.clearRect = function (a, b, c, d) {
      if (0 === a && 0 === b && c === this.width && d === this.height)
        return void this.__clearCanvas();
      var e,
        f = this.__closestGroupOrSvg();
      (e = this.__createElement(
        "rect",
        { x: a, y: b, width: c, height: d, fill: "#FFFFFF" },
        !0
      )),
        f.appendChild(e);
    }),
    (f.prototype.createLinearGradient = function (a, c, d, e) {
      var f = this.__createElement(
        "linearGradient",
        {
          id: b(this.__ids),
          x1: a + "px",
          x2: d + "px",
          y1: c + "px",
          y2: e + "px",
          gradientUnits: "userSpaceOnUse",
        },
        !1
      );
      return this.__defs.appendChild(f), new g(f, this);
    }),
    (f.prototype.createRadialGradient = function (a, c, d, e, f, h) {
      var i = this.__createElement(
        "radialGradient",
        {
          id: b(this.__ids),
          cx: e + "px",
          cy: f + "px",
          r: h + "px",
          fx: a + "px",
          fy: c + "px",
          gradientUnits: "userSpaceOnUse",
        },
        !1
      );
      return this.__defs.appendChild(i), new g(i, this);
    }),
    (f.prototype.__parseFont = function () {
      var a =
          /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-,\'\"\sa-z0-9]+?)\s*$/i,
        b = a.exec(this.font),
        c = {
          style: b[1] || "normal",
          size: b[4] || "10px",
          family: b[6] || "sans-serif",
          weight: b[3] || "normal",
          decoration: b[2] || "normal",
          href: null,
        };
      return (
        "underline" === this.__fontUnderline && (c.decoration = "underline"),
        this.__fontHref && (c.href = this.__fontHref),
        c
      );
    }),
    (f.prototype.__wrapTextLink = function (a, b) {
      if (a.href) {
        var c = this.__createElement("a");
        return (
          c.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            a.href
          ),
          c.appendChild(b),
          c
        );
      }
      return b;
    }),
    (f.prototype.__applyText = function (a, b, e, f) {
      var g = this.__parseFont(),
        h = this.__closestGroupOrSvg(),
        i = this.__createElement(
          "text",
          {
            "font-family": g.family,
            "font-size": g.size,
            "font-style": g.style,
            "font-weight": g.weight,
            "text-decoration": g.decoration,
            x: b,
            y: e,
            "text-anchor": c(this.textAlign),
            "dominant-baseline": d(this.textBaseline),
          },
          !0
        );
      i.appendChild(this.__document.createTextNode(a)),
        (this.__currentElement = i),
        this.__applyStyleToCurrentElement(f),
        h.appendChild(this.__wrapTextLink(g, i));
    }),
    (f.prototype.fillText = function (a, b, c) {
      this.__applyText(a, b, c, "fill");
    }),
    (f.prototype.strokeText = function (a, b, c) {
      this.__applyText(a, b, c, "stroke");
    }),
    (f.prototype.measureText = function (a) {
      return (this.__ctx.font = this.font), this.__ctx.measureText(a);
    }),
    (f.prototype.arc = function (b, c, d, e, f, g) {
      if (e !== f) {
        (e %= 2 * Math.PI),
          (f %= 2 * Math.PI),
          e === f &&
            (f = (f + 2 * Math.PI - 0.001 * (g ? -1 : 1)) % (2 * Math.PI));
        var h = b + d * Math.cos(f),
          i = c + d * Math.sin(f),
          j = b + d * Math.cos(e),
          k = c + d * Math.sin(e),
          l = g ? 0 : 1,
          m = 0,
          n = f - e;
        n < 0 && (n += 2 * Math.PI),
          (m = g ? (n > Math.PI ? 0 : 1) : n > Math.PI ? 1 : 0),
          this.lineTo(j, k),
          this.__addPathCommand(
            a(
              "A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",
              {
                rx: d,
                ry: d,
                xAxisRotation: 0,
                largeArcFlag: m,
                sweepFlag: l,
                endX: h,
                endY: i,
              }
            )
          ),
          (this.__currentPosition = { x: h, y: i });
      }
    }),
    (f.prototype.clip = function () {
      var c = this.__closestGroupOrSvg(),
        d = this.__createElement("clipPath"),
        e = b(this.__ids),
        f = this.__createElement("g");
      this.__applyCurrentDefaultPath(),
        c.removeChild(this.__currentElement),
        d.setAttribute("id", e),
        d.appendChild(this.__currentElement),
        this.__defs.appendChild(d),
        c.setAttribute("clip-path", a("url(#{id})", { id: e })),
        c.appendChild(f),
        (this.__currentElement = f);
    }),
    (f.prototype.drawImage = function () {
      var a,
        b,
        c,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = Array.prototype.slice.call(arguments),
        q = p[0],
        r = 0,
        s = 0;
      if (3 === p.length)
        (a = p[1]), (b = p[2]), (e = q.width), (g = q.height), (c = e), (d = g);
      else if (5 === p.length)
        (a = p[1]),
          (b = p[2]),
          (c = p[3]),
          (d = p[4]),
          (e = q.width),
          (g = q.height);
      else {
        if (9 !== p.length)
          throw new Error(
            "Invalid number of arguments passed to drawImage: " +
              arguments.length
          );
        (r = p[1]),
          (s = p[2]),
          (e = p[3]),
          (g = p[4]),
          (a = p[5]),
          (b = p[6]),
          (c = p[7]),
          (d = p[8]);
      }
      (h = this.__closestGroupOrSvg()), this.__currentElement;
      var t = "translate(" + a + ", " + b + ")";
      if (q instanceof f) {
        if (
          ((i = q.getSvg().cloneNode(!0)),
          i.childNodes && i.childNodes.length > 1)
        ) {
          for (j = i.childNodes[0]; j.childNodes.length; )
            (o = j.childNodes[0].getAttribute("id")),
              (this.__ids[o] = o),
              this.__defs.appendChild(j.childNodes[0]);
          if ((k = i.childNodes[1])) {
            var u,
              v = k.getAttribute("transform");
            (u = v ? v + " " + t : t),
              k.setAttribute("transform", u),
              h.appendChild(k);
          }
        }
      } else
        ("CANVAS" !== q.nodeName && "IMG" !== q.nodeName) ||
          ((l = this.__createElement("image")),
          l.setAttribute("width", c),
          l.setAttribute("height", d),
          l.setAttribute("preserveAspectRatio", "none"),
          l.setAttribute("opacity", this.globalAlpha),
          (r || s || e !== q.width || g !== q.height) &&
            ((m = this.__document.createElement("canvas")),
            (m.width = c),
            (m.height = d),
            (n = m.getContext("2d")),
            n.drawImage(q, r, s, e, g, 0, 0, c, d),
            (q = m)),
          l.setAttribute("transform", t),
          l.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            "CANVAS" === q.nodeName ? q.toDataURL() : q.originalSrc
          ),
          h.appendChild(l));
    }),
    (f.prototype.createPattern = function (a, c) {
      var d,
        e = this.__document.createElementNS(
          "http://www.w3.org/2000/svg",
          "pattern"
        ),
        g = b(this.__ids);
      return (
        e.setAttribute("id", g),
        e.setAttribute("width", a.width),
        e.setAttribute("height", a.height),
        "CANVAS" === a.nodeName || "IMG" === a.nodeName
          ? ((d = this.__document.createElementNS(
              "http://www.w3.org/2000/svg",
              "image"
            )),
            d.setAttribute("width", a.width),
            d.setAttribute("height", a.height),
            d.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "xlink:href",
              "CANVAS" === a.nodeName ? a.toDataURL() : a.getAttribute("src")
            ),
            e.appendChild(d),
            this.__defs.appendChild(e))
          : a instanceof f &&
            (e.appendChild(a.__root.childNodes[1]), this.__defs.appendChild(e)),
        new h(e, this)
      );
    }),
    (f.prototype.setLineDash = function (a) {
      a && a.length > 0
        ? (this.lineDash = a.join(","))
        : (this.lineDash = null);
    }),
    (f.prototype.drawFocusRing = function () {}),
    (f.prototype.createImageData = function () {}),
    (f.prototype.getImageData = function () {}),
    (f.prototype.putImageData = function () {}),
    (f.prototype.globalCompositeOperation = function () {}),
    (f.prototype.setTransform = function () {}),
    "object" == typeof window && (window.C2S = f),
    "object" == typeof module &&
      "object" == typeof module.exports &&
      (module.exports = f);
})(),
  function () {
    "use strict";
    function a(a, b, c) {
      if (
        ((this.mode = q.MODE_8BIT_BYTE),
        (this.data = a),
        (this.parsedData = []),
        b)
      ) {
        for (var d = 0, e = this.data.length; d < e; d++) {
          var f = [],
            g = this.data.charCodeAt(d);
          (f[0] = g), this.parsedData.push(f);
        }
        this.parsedData = Array.prototype.concat.apply([], this.parsedData);
      } else
        this.parsedData = (function (a) {
          for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d < 128
              ? b.push(d)
              : d < 2048
              ? b.push(192 | (d >> 6), 128 | (63 & d))
              : d < 55296 || d >= 57344
              ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (63 & d))
              : (c++,
                (d = 65536 + (((1023 & d) << 10) | (1023 & a.charCodeAt(c)))),
                b.push(
                  240 | (d >> 18),
                  128 | ((d >> 12) & 63),
                  128 | ((d >> 6) & 63),
                  128 | (63 & d)
                ));
          }
          return b;
        })(a);
      (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
        c ||
          this.parsedData.length == this.data.length ||
          (this.parsedData.unshift(191),
          this.parsedData.unshift(187),
          this.parsedData.unshift(239));
    }
    function b(a, b) {
      (this.typeNumber = a),
        (this.errorCorrectLevel = b),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []);
    }
    function c(a, b) {
      if (a.length == i) throw new Error(a.length + "/" + b);
      for (var c = 0; c < a.length && 0 == a[c]; ) c++;
      this.num = new Array(a.length - c + b);
      for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c];
    }
    function d(a, b) {
      (this.totalCount = a), (this.dataCount = b);
    }
    function e() {
      (this.buffer = []), (this.length = 0);
    }
    function f() {
      var a = !1,
        b = navigator.userAgent;
      if (/android/i.test(b)) {
        a = !0;
        var c = b.toString().match(/android ([0-9]\.[0-9])/i);
        c && c[1] && (a = parseFloat(c[1]));
      }
      return a;
    }
    function g(a, b) {
      for (
        var c = b.correctLevel, d = 1, e = h(a), f = 0, g = w.length;
        f < g;
        f++
      ) {
        var i = 0;
        switch (c) {
          case r.L:
            i = w[f][0];
            break;
          case r.M:
            i = w[f][1];
            break;
          case r.Q:
            i = w[f][2];
            break;
          case r.H:
            i = w[f][3];
        }
        if (e <= i) break;
        d++;
      }
      if (d > w.length)
        throw new Error(
          "Too long data. the CorrectLevel." +
            ["M", "L", "H", "Q"][c] +
            " limit length is " +
            i
        );
      return (
        0 != b.version &&
          (d <= b.version
            ? ((d = b.version), (b.runVersion = d))
            : (console.warn(
                "QR Code version " +
                  b.version +
                  " too small, run version use " +
                  d
              ),
              (b.runVersion = d))),
        d
      );
    }
    function h(a) {
      return encodeURI(a)
        .toString()
        .replace(/\%[0-9a-fA-F]{2}/g, "a").length;
    }
    var i,
      j,
      k =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global,
      l = "object" == typeof self && self && self.Object === Object && self,
      m = k || l || Function("return this")(),
      n = "object" == typeof exports && exports && !exports.nodeType && exports,
      o =
        n && "object" == typeof module && module && !module.nodeType && module,
      p = m.QRCode;
    (a.prototype = {
      getLength: function (a) {
        return this.parsedData.length;
      },
      write: function (a) {
        for (var b = 0, c = this.parsedData.length; b < c; b++)
          a.put(this.parsedData[b], 8);
      },
    }),
      (b.prototype = {
        addData: function (b, c, d) {
          var e = new a(b, c, d);
          this.dataList.push(e), (this.dataCache = null);
        },
        isDark: function (a, b) {
          if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b)
            throw new Error(a + "," + b);
          return this.modules[a][b][0];
        },
        getEye: function (a, b) {
          if (a < 0 || this.moduleCount <= a || b < 0 || this.moduleCount <= b)
            throw new Error(a + "," + b);
          var c = this.modules[a][b];
          if (c[1]) {
            var d = "P" + c[1] + "_" + c[2];
            return "A" == c[2] && (d = "A" + c[1]), { isDark: c[0], type: d };
          }
          return null;
        },
        getModuleCount: function () {
          return this.moduleCount;
        },
        make: function () {
          this.makeImpl(!1, this.getBestMaskPattern());
        },
        makeImpl: function (a, c) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var d = 0; d < this.moduleCount; d++) {
            this.modules[d] = new Array(this.moduleCount);
            for (var e = 0; e < this.moduleCount; e++) this.modules[d][e] = [];
          }
          this.setupPositionProbePattern(0, 0, "TL"),
            this.setupPositionProbePattern(this.moduleCount - 7, 0, "BL"),
            this.setupPositionProbePattern(0, this.moduleCount - 7, "TR"),
            this.setupPositionAdjustPattern("A"),
            this.setupTimingPattern(),
            this.setupTypeInfo(a, c),
            this.typeNumber >= 7 && this.setupTypeNumber(a),
            null == this.dataCache &&
              (this.dataCache = b.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList
              )),
            this.mapData(this.dataCache, c);
        },
        setupPositionProbePattern: function (a, b, c) {
          for (var d = -1; d <= 7; d++)
            if (!(a + d <= -1 || this.moduleCount <= a + d))
              for (var e = -1; e <= 7; e++)
                b + e <= -1 ||
                  this.moduleCount <= b + e ||
                  ((0 <= d && d <= 6 && (0 == e || 6 == e)) ||
                  (0 <= e && e <= 6 && (0 == d || 6 == d)) ||
                  (2 <= d && d <= 4 && 2 <= e && e <= 4)
                    ? ((this.modules[a + d][b + e][0] = !0),
                      (this.modules[a + d][b + e][2] = c),
                      (this.modules[a + d][b + e][1] =
                        -0 == d || -0 == e || 6 == d || 6 == e ? "O" : "I"))
                    : (this.modules[a + d][b + e][0] = !1));
        },
        getBestMaskPattern: function () {
          for (var a = 0, b = 0, c = 0; c < 8; c++) {
            this.makeImpl(!0, c);
            var d = t.getLostPoint(this);
            (0 == c || a > d) && ((a = d), (b = c));
          }
          return b;
        },
        createMovieClip: function (a, b, c) {
          var d = a.createEmptyMovieClip(b, c);
          this.make();
          for (var e = 0; e < this.modules.length; e++)
            for (var f = 1 * e, g = 0; g < this.modules[e].length; g++) {
              var h = 1 * g,
                i = this.modules[e][g][0];
              i &&
                (d.beginFill(0, 100),
                d.moveTo(h, f),
                d.lineTo(h + 1, f),
                d.lineTo(h + 1, f + 1),
                d.lineTo(h, f + 1),
                d.endFill());
            }
          return d;
        },
        setupTimingPattern: function () {
          for (var a = 8; a < this.moduleCount - 8; a++)
            null == this.modules[a][6][0] &&
              (this.modules[a][6][0] = a % 2 == 0);
          for (var b = 8; b < this.moduleCount - 8; b++)
            null == this.modules[6][b][0] &&
              (this.modules[6][b][0] = b % 2 == 0);
        },
        setupPositionAdjustPattern: function (a) {
          for (
            var b = t.getPatternPosition(this.typeNumber), c = 0;
            c < b.length;
            c++
          )
            for (var d = 0; d < b.length; d++) {
              var e = b[c],
                f = b[d];
              if (null == this.modules[e][f][0])
                for (var g = -2; g <= 2; g++)
                  for (var h = -2; h <= 2; h++)
                    -2 == g || 2 == g || -2 == h || 2 == h || (0 == g && 0 == h)
                      ? ((this.modules[e + g][f + h][0] = !0),
                        (this.modules[e + g][f + h][2] = a),
                        (this.modules[e + g][f + h][1] =
                          -2 == g || -2 == h || 2 == g || 2 == h ? "O" : "I"))
                      : (this.modules[e + g][f + h][0] = !1);
            }
        },
        setupTypeNumber: function (a) {
          for (
            var b = t.getBCHTypeNumber(this.typeNumber), c = 0;
            c < 18;
            c++
          ) {
            var d = !a && 1 == ((b >> c) & 1);
            this.modules[Math.floor(c / 3)][
              (c % 3) + this.moduleCount - 8 - 3
            ][0] = d;
          }
          for (var c = 0; c < 18; c++) {
            var d = !a && 1 == ((b >> c) & 1);
            this.modules[(c % 3) + this.moduleCount - 8 - 3][
              Math.floor(c / 3)
            ][0] = d;
          }
        },
        setupTypeInfo: function (a, b) {
          for (
            var c = (this.errorCorrectLevel << 3) | b,
              d = t.getBCHTypeInfo(c),
              e = 0;
            e < 15;
            e++
          ) {
            var f = !a && 1 == ((d >> e) & 1);
            e < 6
              ? (this.modules[e][8][0] = f)
              : e < 8
              ? (this.modules[e + 1][8][0] = f)
              : (this.modules[this.moduleCount - 15 + e][8][0] = f);
          }
          for (var e = 0; e < 15; e++) {
            var f = !a && 1 == ((d >> e) & 1);
            e < 8
              ? (this.modules[8][this.moduleCount - e - 1][0] = f)
              : e < 9
              ? (this.modules[8][15 - e - 1 + 1][0] = f)
              : (this.modules[8][15 - e - 1][0] = f);
          }
          this.modules[this.moduleCount - 8][8][0] = !a;
        },
        mapData: function (a, b) {
          for (
            var c = -1,
              d = this.moduleCount - 1,
              e = 7,
              f = 0,
              g = this.moduleCount - 1;
            g > 0;
            g -= 2
          )
            for (6 == g && g--; ; ) {
              for (var h = 0; h < 2; h++)
                if (null == this.modules[d][g - h][0]) {
                  var i = !1;
                  f < a.length && (i = 1 == ((a[f] >>> e) & 1));
                  var j = t.getMask(b, d, g - h);
                  j && (i = !i),
                    (this.modules[d][g - h][0] = i),
                    e--,
                    -1 == e && (f++, (e = 7));
                }
              if ((d += c) < 0 || this.moduleCount <= d) {
                (d -= c), (c = -c);
                break;
              }
            }
        },
      }),
      (b.PAD0 = 236),
      (b.PAD1 = 17),
      (b.createData = function (a, c, f) {
        for (
          var g = d.getRSBlocks(a, c), h = new e(), i = 0;
          i < f.length;
          i++
        ) {
          var j = f[i];
          h.put(j.mode, 4),
            h.put(j.getLength(), t.getLengthInBits(j.mode, a)),
            j.write(h);
        }
        for (var k = 0, i = 0; i < g.length; i++) k += g[i].dataCount;
        if (h.getLengthInBits() > 8 * k)
          throw new Error(
            "code length overflow. (" + h.getLengthInBits() + ">" + 8 * k + ")"
          );
        for (
          h.getLengthInBits() + 4 <= 8 * k && h.put(0, 4);
          h.getLengthInBits() % 8 != 0;

        )
          h.putBit(!1);
        for (;;) {
          if (h.getLengthInBits() >= 8 * k) break;
          if ((h.put(b.PAD0, 8), h.getLengthInBits() >= 8 * k)) break;
          h.put(b.PAD1, 8);
        }
        return b.createBytes(h, g);
      }),
      (b.createBytes = function (a, b) {
        for (
          var d = 0,
            e = 0,
            f = 0,
            g = new Array(b.length),
            h = new Array(b.length),
            i = 0;
          i < b.length;
          i++
        ) {
          var j = b[i].dataCount,
            k = b[i].totalCount - j;
          (e = Math.max(e, j)), (f = Math.max(f, k)), (g[i] = new Array(j));
          for (var l = 0; l < g[i].length; l++) g[i][l] = 255 & a.buffer[l + d];
          d += j;
          var m = t.getErrorCorrectPolynomial(k),
            n = new c(g[i], m.getLength() - 1),
            o = n.mod(m);
          h[i] = new Array(m.getLength() - 1);
          for (var l = 0; l < h[i].length; l++) {
            var p = l + o.getLength() - h[i].length;
            h[i][l] = p >= 0 ? o.get(p) : 0;
          }
        }
        for (var q = 0, l = 0; l < b.length; l++) q += b[l].totalCount;
        for (var r = new Array(q), s = 0, l = 0; l < e; l++)
          for (var i = 0; i < b.length; i++)
            l < g[i].length && (r[s++] = g[i][l]);
        for (var l = 0; l < f; l++)
          for (var i = 0; i < b.length; i++)
            l < h[i].length && (r[s++] = h[i][l]);
        return r;
      });
    for (
      var q = {
          MODE_NUMBER: 1,
          MODE_ALPHA_NUM: 2,
          MODE_8BIT_BYTE: 4,
          MODE_KANJI: 8,
        },
        r = { L: 1, M: 0, Q: 3, H: 2 },
        s = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        },
        t = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (a) {
            for (
              var b = a << 10;
              t.getBCHDigit(b) - t.getBCHDigit(t.G15) >= 0;

            )
              b ^= t.G15 << (t.getBCHDigit(b) - t.getBCHDigit(t.G15));
            return ((a << 10) | b) ^ t.G15_MASK;
          },
          getBCHTypeNumber: function (a) {
            for (
              var b = a << 12;
              t.getBCHDigit(b) - t.getBCHDigit(t.G18) >= 0;

            )
              b ^= t.G18 << (t.getBCHDigit(b) - t.getBCHDigit(t.G18));
            return (a << 12) | b;
          },
          getBCHDigit: function (a) {
            for (var b = 0; 0 != a; ) b++, (a >>>= 1);
            return b;
          },
          getPatternPosition: function (a) {
            return t.PATTERN_POSITION_TABLE[a - 1];
          },
          getMask: function (a, b, c) {
            switch (a) {
              case s.PATTERN000:
                return (b + c) % 2 == 0;
              case s.PATTERN001:
                return b % 2 == 0;
              case s.PATTERN010:
                return c % 3 == 0;
              case s.PATTERN011:
                return (b + c) % 3 == 0;
              case s.PATTERN100:
                return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
              case s.PATTERN101:
                return ((b * c) % 2) + ((b * c) % 3) == 0;
              case s.PATTERN110:
                return (((b * c) % 2) + ((b * c) % 3)) % 2 == 0;
              case s.PATTERN111:
                return (((b * c) % 3) + ((b + c) % 2)) % 2 == 0;
              default:
                throw new Error("bad maskPattern:" + a);
            }
          },
          getErrorCorrectPolynomial: function (a) {
            for (var b = new c([1], 0), d = 0; d < a; d++)
              b = b.multiply(new c([1, u.gexp(d)], 0));
            return b;
          },
          getLengthInBits: function (a, b) {
            if (1 <= b && b < 10)
              switch (a) {
                case q.MODE_NUMBER:
                  return 10;
                case q.MODE_ALPHA_NUM:
                  return 9;
                case q.MODE_8BIT_BYTE:
                case q.MODE_KANJI:
                  return 8;
                default:
                  throw new Error("mode:" + a);
              }
            else if (b < 27)
              switch (a) {
                case q.MODE_NUMBER:
                  return 12;
                case q.MODE_ALPHA_NUM:
                  return 11;
                case q.MODE_8BIT_BYTE:
                  return 16;
                case q.MODE_KANJI:
                  return 10;
                default:
                  throw new Error("mode:" + a);
              }
            else {
              if (!(b < 41)) throw new Error("type:" + b);
              switch (a) {
                case q.MODE_NUMBER:
                  return 14;
                case q.MODE_ALPHA_NUM:
                  return 13;
                case q.MODE_8BIT_BYTE:
                  return 16;
                case q.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:" + a);
              }
            }
          },
          getLostPoint: function (a) {
            for (var b = a.getModuleCount(), c = 0, d = 0; d < b; d++)
              for (var e = 0; e < b; e++) {
                for (var f = 0, g = a.isDark(d, e), h = -1; h <= 1; h++)
                  if (!(d + h < 0 || b <= d + h))
                    for (var i = -1; i <= 1; i++)
                      e + i < 0 ||
                        b <= e + i ||
                        (0 == h && 0 == i) ||
                        (g == a.isDark(d + h, e + i) && f++);
                f > 5 && (c += 3 + f - 5);
              }
            for (var d = 0; d < b - 1; d++)
              for (var e = 0; e < b - 1; e++) {
                var j = 0;
                a.isDark(d, e) && j++,
                  a.isDark(d + 1, e) && j++,
                  a.isDark(d, e + 1) && j++,
                  a.isDark(d + 1, e + 1) && j++,
                  (0 != j && 4 != j) || (c += 3);
              }
            for (var d = 0; d < b; d++)
              for (var e = 0; e < b - 6; e++)
                a.isDark(d, e) &&
                  !a.isDark(d, e + 1) &&
                  a.isDark(d, e + 2) &&
                  a.isDark(d, e + 3) &&
                  a.isDark(d, e + 4) &&
                  !a.isDark(d, e + 5) &&
                  a.isDark(d, e + 6) &&
                  (c += 40);
            for (var e = 0; e < b; e++)
              for (var d = 0; d < b - 6; d++)
                a.isDark(d, e) &&
                  !a.isDark(d + 1, e) &&
                  a.isDark(d + 2, e) &&
                  a.isDark(d + 3, e) &&
                  a.isDark(d + 4, e) &&
                  !a.isDark(d + 5, e) &&
                  a.isDark(d + 6, e) &&
                  (c += 40);
            for (var k = 0, e = 0; e < b; e++)
              for (var d = 0; d < b; d++) a.isDark(d, e) && k++;
            return (c += (Math.abs((100 * k) / b / b - 50) / 5) * 10);
          },
        },
        u = {
          glog: function (a) {
            if (a < 1) throw new Error("glog(" + a + ")");
            return u.LOG_TABLE[a];
          },
          gexp: function (a) {
            for (; a < 0; ) a += 255;
            for (; a >= 256; ) a -= 255;
            return u.EXP_TABLE[a];
          },
          EXP_TABLE: new Array(256),
          LOG_TABLE: new Array(256),
        },
        v = 0;
      v < 8;
      v++
    )
      u.EXP_TABLE[v] = 1 << v;
    for (var v = 8; v < 256; v++)
      u.EXP_TABLE[v] =
        u.EXP_TABLE[v - 4] ^
        u.EXP_TABLE[v - 5] ^
        u.EXP_TABLE[v - 6] ^
        u.EXP_TABLE[v - 8];
    for (var v = 0; v < 255; v++) u.LOG_TABLE[u.EXP_TABLE[v]] = v;
    (c.prototype = {
      get: function (a) {
        return this.num[a];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (a) {
        for (
          var b = new Array(this.getLength() + a.getLength() - 1), d = 0;
          d < this.getLength();
          d++
        )
          for (var e = 0; e < a.getLength(); e++)
            b[d + e] ^= u.gexp(u.glog(this.get(d)) + u.glog(a.get(e)));
        return new c(b, 0);
      },
      mod: function (a) {
        if (this.getLength() - a.getLength() < 0) return this;
        for (
          var b = u.glog(this.get(0)) - u.glog(a.get(0)),
            d = new Array(this.getLength()),
            e = 0;
          e < this.getLength();
          e++
        )
          d[e] = this.get(e);
        for (var e = 0; e < a.getLength(); e++)
          d[e] ^= u.gexp(u.glog(a.get(e)) + b);
        return new c(d, 0).mod(a);
      },
    }),
      (d.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12, 7, 37, 13],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ]),
      (d.getRSBlocks = function (a, b) {
        var c = d.getRsBlockTable(a, b);
        if (c == i)
          throw new Error(
            "bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b
          );
        for (var e = c.length / 3, f = [], g = 0; g < e; g++)
          for (
            var h = c[3 * g + 0], j = c[3 * g + 1], k = c[3 * g + 2], l = 0;
            l < h;
            l++
          )
            f.push(new d(j, k));
        return f;
      }),
      (d.getRsBlockTable = function (a, b) {
        switch (b) {
          case r.L:
            return d.RS_BLOCK_TABLE[4 * (a - 1) + 0];
          case r.M:
            return d.RS_BLOCK_TABLE[4 * (a - 1) + 1];
          case r.Q:
            return d.RS_BLOCK_TABLE[4 * (a - 1) + 2];
          case r.H:
            return d.RS_BLOCK_TABLE[4 * (a - 1) + 3];
          default:
            return i;
        }
      }),
      (e.prototype = {
        get: function (a) {
          var b = Math.floor(a / 8);
          return 1 == ((this.buffer[b] >>> (7 - (a % 8))) & 1);
        },
        put: function (a, b) {
          for (var c = 0; c < b; c++)
            this.putBit(1 == ((a >>> (b - c - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (a) {
          var b = Math.floor(this.length / 8);
          this.buffer.length <= b && this.buffer.push(0),
            a && (this.buffer[b] |= 128 >>> this.length % 8),
            this.length++;
        },
      });
    var w = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ],
      x = (function () {
        return "undefined" != typeof CanvasRenderingContext2D;
      })()
        ? (function () {
            function a() {
              if ("svg" == this._htOption.drawer) {
                var a = this._oContext.getSerializedSvg(!0);
                (this.dataURL = a), (this._el.innerHTML = a);
              } else
                try {
                  var b = this._elCanvas.toDataURL("image/png");
                  this.dataURL = b;
                } catch (a) {
                  console.error(a);
                }
              this._htOption.onRenderingEnd &&
                (this.dataURL ||
                  console.error(
                    "Can not get base64 data, please check: 1. Published the page and image to the server 2. The image request support CORS 3. Configured `crossOrigin:'anonymous'` option"
                  ),
                this._htOption.onRenderingEnd(this._htOption, this.dataURL));
            }
            function b(a, b) {
              var c = this;
              if (
                ((c._fFail = b), (c._fSuccess = a), null === c._bSupportDataURI)
              ) {
                var d = document.createElement("img"),
                  e = function () {
                    (c._bSupportDataURI = !1), c._fFail && c._fFail.call(c);
                  },
                  f = function () {
                    (c._bSupportDataURI = !0),
                      c._fSuccess && c._fSuccess.call(c);
                  };
                (d.onabort = e),
                  (d.onerror = e),
                  (d.onload = f),
                  (d.src =
                    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==");
              } else
                !0 === c._bSupportDataURI && c._fSuccess
                  ? c._fSuccess.call(c)
                  : !1 === c._bSupportDataURI && c._fFail && c._fFail.call(c);
            }
            if (m._android && m._android <= 2.1) {
              var c = 1 / window.devicePixelRatio,
                d = CanvasRenderingContext2D.prototype.drawImage;
              CanvasRenderingContext2D.prototype.drawImage = function (
                a,
                b,
                e,
                f,
                g,
                h,
                i,
                j,
                k
              ) {
                if ("nodeName" in a && /img/i.test(a.nodeName))
                  for (var l = arguments.length - 1; l >= 1; l--)
                    arguments[l] = arguments[l] * c;
                else
                  void 0 === j &&
                    ((arguments[1] *= c),
                    (arguments[2] *= c),
                    (arguments[3] *= c),
                    (arguments[4] *= c));
                d.apply(this, arguments);
              };
            }
            var e = function (a, b) {
              (this._bIsPainted = !1),
                (this._android = f()),
                (this._el = a),
                (this._htOption = b),
                "svg" == this._htOption.drawer
                  ? ((this._oContext = {}), (this._elCanvas = {}))
                  : ((this._elCanvas = document.createElement("canvas")),
                    this._el.appendChild(this._elCanvas),
                    (this._oContext = this._elCanvas.getContext("2d"))),
                (this._bSupportDataURI = null),
                (this.dataURL = null);
            };
            return (
              (e.prototype.draw = function (a) {
                function b() {
                  d.quietZone > 0 &&
                    d.quietZoneColor &&
                    ((j.lineWidth = 0),
                    (j.fillStyle = d.quietZoneColor),
                    j.fillRect(0, 0, k._elCanvas.width, d.quietZone),
                    j.fillRect(
                      0,
                      d.quietZone,
                      d.quietZone,
                      k._elCanvas.height - 2 * d.quietZone
                    ),
                    j.fillRect(
                      k._elCanvas.width - d.quietZone,
                      d.quietZone,
                      d.quietZone,
                      k._elCanvas.height - 2 * d.quietZone
                    ),
                    j.fillRect(
                      0,
                      k._elCanvas.height - d.quietZone,
                      k._elCanvas.width,
                      d.quietZone
                    ));
                }
                function c(a) {
                  function c(a) {
                    var c = Math.round(d.width / 3.5),
                      e = Math.round(d.height / 3.5);
                    c !== e && (c = e),
                      d.logoMaxWidth
                        ? (c = Math.round(d.logoMaxWidth))
                        : d.logoWidth && (c = Math.round(d.logoWidth)),
                      d.logoMaxHeight
                        ? (e = Math.round(d.logoMaxHeight))
                        : d.logoHeight && (e = Math.round(d.logoHeight));
                    var f, g;
                    void 0 === a.naturalWidth
                      ? ((f = a.width), (g = a.height))
                      : ((f = a.naturalWidth), (g = a.naturalHeight)),
                      (d.logoMaxWidth || d.logoMaxHeight) &&
                        (d.logoMaxWidth && f <= c && (c = f),
                        d.logoMaxHeight && g <= e && (e = g),
                        f <= c && g <= e && ((c = f), (e = g)));
                    var h = (d.realWidth - c) / 2,
                      i = (d.realHeight - e) / 2,
                      k = Math.min(c / f, e / g),
                      l = f * k,
                      m = g * k;
                    (d.logoMaxWidth || d.logoMaxHeight) &&
                      ((c = l),
                      (e = m),
                      (h = (d.realWidth - c) / 2),
                      (i = (d.realHeight - e) / 2)),
                      d.logoBackgroundTransparent ||
                        ((j.fillStyle = d.logoBackgroundColor),
                        j.fillRect(h, i, c, e));
                    var n = j.imageSmoothingQuality,
                      o = j.imageSmoothingEnabled;
                    (j.imageSmoothingEnabled = !0),
                      (j.imageSmoothingQuality = "high"),
                      j.drawImage(a, h + (c - l) / 2, i + (e - m) / 2, l, m),
                      (j.imageSmoothingEnabled = o),
                      (j.imageSmoothingQuality = n),
                      b(),
                      (s._bIsPainted = !0),
                      s.makeImage();
                  }
                  d.onRenderingStart && d.onRenderingStart(d);
                  for (var h = 0; h < e; h++)
                    for (var i = 0; i < e; i++) {
                      var k = i * f + d.quietZone,
                        l = h * g + d.quietZone,
                        m = a.isDark(h, i),
                        n = a.getEye(h, i),
                        o = d.dotScale;
                      j.lineWidth = 0;
                      var p, q;
                      n
                        ? ((p =
                            d[n.type] ||
                            d[n.type.substring(0, 2)] ||
                            d.colorDark),
                          (q = d.colorLight))
                        : d.backgroundImage
                        ? ((q = "rgba(0,0,0,0)"),
                          6 == h
                            ? d.autoColor
                              ? ((p =
                                  d.timing_H || d.timing || d.autoColorDark),
                                (q = d.autoColorLight))
                              : (p = d.timing_H || d.timing || d.colorDark)
                            : 6 == i
                            ? d.autoColor
                              ? ((p =
                                  d.timing_V || d.timing || d.autoColorDark),
                                (q = d.autoColorLight))
                              : (p = d.timing_V || d.timing || d.colorDark)
                            : d.autoColor
                            ? ((p = d.autoColorDark), (q = d.autoColorLight))
                            : (p = d.colorDark))
                        : ((p =
                            6 == h
                              ? d.timing_H || d.timing || d.colorDark
                              : 6 == i
                              ? d.timing_V || d.timing || d.colorDark
                              : d.colorDark),
                          (q = d.colorLight)),
                        (j.strokeStyle = m ? p : q),
                        (j.fillStyle = m ? p : q),
                        n
                          ? ((o =
                              "AO" == n.type
                                ? d.dotScaleAO
                                : "AI" == n.type
                                ? d.dotScaleAI
                                : 1),
                            d.backgroundImage && d.autoColor
                              ? ((p =
                                  ("AO" == n.type ? d.AI : d.AO) ||
                                  d.autoColorDark),
                                (q = d.autoColorLight))
                              : (p = ("AO" == n.type ? d.AI : d.AO) || p),
                            (m = n.isDark),
                            j.fillRect(
                              Math.ceil(k + (f * (1 - o)) / 2),
                              Math.ceil(d.titleHeight + l + (g * (1 - o)) / 2),
                              Math.ceil(f * o),
                              Math.ceil(g * o)
                            ))
                          : 6 == h
                          ? ((o = d.dotScaleTiming_H),
                            j.fillRect(
                              Math.ceil(k + (f * (1 - o)) / 2),
                              Math.ceil(d.titleHeight + l + (g * (1 - o)) / 2),
                              Math.ceil(f * o),
                              Math.ceil(g * o)
                            ))
                          : 6 == i
                          ? ((o = d.dotScaleTiming_V),
                            j.fillRect(
                              Math.ceil(k + (f * (1 - o)) / 2),
                              Math.ceil(d.titleHeight + l + (g * (1 - o)) / 2),
                              Math.ceil(f * o),
                              Math.ceil(g * o)
                            ))
                          : (d.backgroundImage,
                            j.fillRect(
                              Math.ceil(k + (f * (1 - o)) / 2),
                              Math.ceil(d.titleHeight + l + (g * (1 - o)) / 2),
                              Math.ceil(f * o),
                              Math.ceil(g * o)
                            )),
                        1 == d.dotScale || n || (j.strokeStyle = d.colorLight);
                    }
                  if (
                    (d.title &&
                      ((j.fillStyle = d.titleBackgroundColor),
                      j.fillRect(
                        d.quietZone,
                        d.quietZone,
                        d.width,
                        d.titleHeight
                      ),
                      (j.font = d.titleFont),
                      (j.fillStyle = d.titleColor),
                      (j.textAlign = "center"),
                      j.fillText(
                        d.title,
                        this._elCanvas.width / 2,
                        +d.quietZone + d.titleTop
                      )),
                    d.subTitle &&
                      ((j.font = d.subTitleFont),
                      (j.fillStyle = d.subTitleColor),
                      j.fillText(
                        d.subTitle,
                        this._elCanvas.width / 2,
                        +d.quietZone + d.subTitleTop
                      )),
                    d.logo)
                  ) {
                    var r = new Image(),
                      s = this;
                    (r.onload = function () {
                      c(r);
                    }),
                      (r.onerror = function (a) {
                        console.error(a);
                      }),
                      null != d.crossOrigin && (r.crossOrigin = d.crossOrigin),
                      (r.originalSrc = d.logo),
                      (r.src = d.logo);
                  } else b(), (this._bIsPainted = !0), this.makeImage();
                }
                var d = this._htOption,
                  e = a.getModuleCount(),
                  f = d.width / e,
                  g = d.height / e;
                f <= 1 && (f = 1), g <= 1 && (g = 1);
                var h = f * e,
                  i = g * e;
                (d.heightWithTitle = i + d.titleHeight),
                  (d.realHeight = d.heightWithTitle + 2 * d.quietZone),
                  (d.realWidth = h + 2 * d.quietZone),
                  (this._elCanvas.width = d.realWidth),
                  (this._elCanvas.height = d.realHeight),
                  "canvas" != d.drawer &&
                    (this._oContext = new C2S(
                      this._elCanvas.width,
                      this._elCanvas.height
                    )),
                  this.clear();
                var j = this._oContext;
                (j.lineWidth = 0),
                  (j.fillStyle = d.colorLight),
                  j.fillRect(0, 0, this._elCanvas.width, this._elCanvas.height),
                  j.clearRect(d.quietZone, d.quietZone, d.width, d.titleHeight);
                var k = this;
                if (d.backgroundImage) {
                  var l = new Image();
                  (l.onload = function () {
                    (j.globalAlpha = 1),
                      (j.globalAlpha = d.backgroundImageAlpha);
                    var b = j.imageSmoothingQuality,
                      e = j.imageSmoothingEnabled;
                    (j.imageSmoothingEnabled = !0),
                      (j.imageSmoothingQuality = "high"),
                      (d.title || d.subTitle) && d.titleHeight
                        ? j.drawImage(
                            l,
                            d.quietZone,
                            d.quietZone + d.titleHeight,
                            d.width,
                            d.height
                          )
                        : j.drawImage(l, 0, 0, d.realWidth, d.realHeight),
                      (j.imageSmoothingEnabled = e),
                      (j.imageSmoothingQuality = b),
                      (j.globalAlpha = 1),
                      c.call(k, a);
                  }),
                    null != d.crossOrigin && (l.crossOrigin = d.crossOrigin),
                    (l.originalSrc = d.backgroundImage),
                    (l.src = d.backgroundImage);
                } else c.call(k, a);
              }),
              (e.prototype.makeImage = function () {
                this._bIsPainted && b.call(this, a);
              }),
              (e.prototype.isPainted = function () {
                return this._bIsPainted;
              }),
              (e.prototype.clear = function () {
                this._oContext.clearRect(
                  0,
                  0,
                  this._elCanvas.width,
                  this._elCanvas.height
                ),
                  (this._bIsPainted = !1);
              }),
              (e.prototype.remove = function () {
                this._oContext.clearRect(
                  0,
                  0,
                  this._elCanvas.width,
                  this._elCanvas.height
                ),
                  (this._bIsPainted = !1),
                  (this._el.innerHTML = "");
              }),
              (e.prototype.round = function (a) {
                return a ? Math.floor(1e3 * a) / 1e3 : a;
              }),
              e
            );
          })()
        : (function () {
            var a = function (a, b) {
              (this._el = a), (this._htOption = b);
            };
            return (
              (a.prototype.draw = function (a) {
                var b = this._htOption,
                  c = this._el,
                  d = a.getModuleCount(),
                  e = b.width / d,
                  f = b.height / d;
                e <= 1 && (e = 1), f <= 1 && (f = 1);
                var g = e * d,
                  h = f * d;
                (b.heightWithTitle = h + b.titleHeight),
                  (b.realHeight = b.heightWithTitle + 2 * b.quietZone),
                  (b.realWidth = g + 2 * b.quietZone);
                var i = [],
                  j = "",
                  k = Math.round(e * b.dotScale),
                  l = Math.round(f * b.dotScale);
                k < 4 && ((k = 4), (l = 4));
                var m = b.colorDark,
                  n = b.colorLight;
                if (b.backgroundImage) {
                  b.autoColor
                    ? ((b.colorDark =
                        "rgba(0, 0, 0, .6);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#99000000', EndColorStr='#99000000');"),
                      (b.colorLight =
                        "rgba(255, 255, 255, .7);filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#B2FFFFFF', EndColorStr='#B2FFFFFF');"))
                    : (b.colorLight = "rgba(0,0,0,0)");
                  var o =
                    '<div style="display:inline-block; z-index:-10;position:absolute;"><img src="' +
                    b.backgroundImage +
                    '" width="' +
                    (b.width + 2 * b.quietZone) +
                    '" height="' +
                    b.realHeight +
                    '" style="opacity:' +
                    b.backgroundImageAlpha +
                    ";filter:alpha(opacity=" +
                    100 * b.backgroundImageAlpha +
                    '); "/></div>';
                  i.push(o);
                }
                if (
                  (b.quietZone &&
                    (j =
                      "display:inline-block; width:" +
                      (b.width + 2 * b.quietZone) +
                      "px; height:" +
                      (b.width + 2 * b.quietZone) +
                      "px;background:" +
                      b.quietZoneColor +
                      "; text-align:center;"),
                  i.push('<div style="font-size:0;' + j + '">'),
                  i.push(
                    '<table  style="font-size:0;border:0;border-collapse:collapse; margin-top:' +
                      b.quietZone +
                      'px;" border="0" cellspacing="0" cellspadding="0" align="center" valign="middle">'
                  ),
                  i.push(
                    '<tr height="' +
                      b.titleHeight +
                      '" align="center"><td style="border:0;border-collapse:collapse;margin:0;padding:0" colspan="' +
                      d +
                      '">'
                  ),
                  b.title)
                ) {
                  var p = b.titleColor,
                    q = b.titleFont;
                  i.push(
                    '<div style="width:100%;margin-top:' +
                      b.titleTop +
                      "px;color:" +
                      p +
                      ";font:" +
                      q +
                      ";background:" +
                      b.titleBackgroundColor +
                      '">' +
                      b.title +
                      "</div>"
                  );
                }
                b.subTitle &&
                  i.push(
                    '<div style="width:100%;margin-top:' +
                      (b.subTitleTop - b.titleTop) +
                      "px;color:" +
                      b.subTitleColor +
                      "; font:" +
                      b.subTitleFont +
                      '">' +
                      b.subTitle +
                      "</div>"
                  ),
                  i.push("</td></tr>");
                for (var r = 0; r < d; r++) {
                  i.push(
                    '<tr style="border:0; padding:0; margin:0;" height="7">'
                  );
                  for (var s = 0; s < d; s++) {
                    var t = a.isDark(r, s),
                      u = a.getEye(r, s);
                    if (u) {
                      t = u.isDark;
                      var v = u.type,
                        w = b[v] || b[v.substring(0, 2)] || m;
                      i.push(
                        '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                          e +
                          "px;height:" +
                          f +
                          'px;"><span style="width:' +
                          e +
                          "px;height:" +
                          f +
                          "px;background-color:" +
                          (t ? w : n) +
                          ';display:inline-block"></span></td>'
                      );
                    } else {
                      var x = b.colorDark;
                      6 == r
                        ? ((x = b.timing_H || b.timing || m),
                          i.push(
                            '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                              e +
                              "px;height:" +
                              f +
                              "px;background-color:" +
                              (t ? x : n) +
                              ';"></td>'
                          ))
                        : 6 == s
                        ? ((x = b.timing_V || b.timing || m),
                          i.push(
                            '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                              e +
                              "px;height:" +
                              f +
                              "px;background-color:" +
                              (t ? x : n) +
                              ';"></td>'
                          ))
                        : i.push(
                            '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                              e +
                              "px;height:" +
                              f +
                              'px;"><div style="display:inline-block;width:' +
                              k +
                              "px;height:" +
                              l +
                              "px;background-color:" +
                              (t ? x : b.colorLight) +
                              ';"></div></td>'
                          );
                    }
                  }
                  i.push("</tr>");
                }
                if ((i.push("</table>"), i.push("</div>"), b.logo)) {
                  var y = new Image();
                  null != b.crossOrigin && (y.crossOrigin = b.crossOrigin),
                    (y.src = b.logo);
                  var z = b.width / 3.5,
                    A = b.height / 3.5;
                  z != A && (z = A),
                    b.logoWidth && (z = b.logoWidth),
                    b.logoHeight && (A = b.logoHeight);
                  var B =
                    "position:relative; z-index:1;display:table-cell;top:-" +
                    (b.height / 2 + A / 2 + b.quietZone) +
                    "px;text-align:center; width:" +
                    z +
                    "px; height:" +
                    A +
                    "px;line-height:" +
                    z +
                    "px; vertical-align: middle;";
                  b.logoBackgroundTransparent ||
                    (B += "background:" + b.logoBackgroundColor),
                    i.push(
                      '<div style="' +
                        B +
                        '"><img  src="' +
                        b.logo +
                        '"  style="max-width: ' +
                        z +
                        "px; max-height: " +
                        A +
                        'px;" /> <div style=" display: none; width:1px;margin-left: -1px;"></div></div>'
                    );
                }
                b.onRenderingStart && b.onRenderingStart(b),
                  (c.innerHTML = i.join(""));
                var C = c.childNodes[0],
                  D = (b.width - C.offsetWidth) / 2,
                  E = (b.heightWithTitle - C.offsetHeight) / 2;
                D > 0 && E > 0 && (C.style.margin = E + "px " + D + "px"),
                  this._htOption.onRenderingEnd &&
                    this._htOption.onRenderingEnd(this._htOption, null);
              }),
              (a.prototype.clear = function () {
                this._el.innerHTML = "";
              }),
              a
            );
          })();
    (j = function (a, b) {
      if (
        ((this._htOption = {
          width: 256,
          height: 256,
          typeNumber: 4,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: r.H,
          dotScale: 1,
          dotScaleTiming: 1,
          dotScaleTiming_H: i,
          dotScaleTiming_V: i,
          dotScaleA: 1,
          dotScaleAO: i,
          dotScaleAI: i,
          quietZone: 0,
          quietZoneColor: "rgba(0,0,0,0)",
          title: "",
          titleFont: "normal normal bold 16px Arial",
          titleColor: "#000000",
          titleBackgroundColor: "#ffffff",
          titleHeight: 0,
          titleTop: 30,
          subTitle: "",
          subTitleFont: "normal normal normal 14px Arial",
          subTitleColor: "#4F4F4F",
          subTitleTop: 60,
          logo: i,
          logoWidth: i,
          logoHeight: i,
          logoMaxWidth: i,
          logoMaxHeight: i,
          logoBackgroundColor: "#ffffff",
          logoBackgroundTransparent: !1,
          PO: i,
          PI: i,
          PO_TL: i,
          PI_TL: i,
          PO_TR: i,
          PI_TR: i,
          PO_BL: i,
          PI_BL: i,
          AO: i,
          AI: i,
          timing: i,
          timing_H: i,
          timing_V: i,
          backgroundImage: i,
          backgroundImageAlpha: 1,
          autoColor: !1,
          autoColorDark: "rgba(0, 0, 0, .6)",
          autoColorLight: "rgba(255, 255, 255, .7)",
          onRenderingStart: i,
          onRenderingEnd: i,
          version: 0,
          tooltip: !1,
          binary: !1,
          drawer: "canvas",
          crossOrigin: null,
          utf8WithoutBOM: !0,
        }),
        "string" == typeof b && (b = { text: b }),
        b)
      )
        for (var c in b) this._htOption[c] = b[c];
      this._htOption.title ||
        this._htOption.subTitle ||
        (this._htOption.titleHeight = 0),
        (this._htOption.version < 0 || this._htOption.version > 40) &&
          (console.warn(
            "QR Code version '" +
              this._htOption.version +
              "' is invalidate, reset to 0"
          ),
          (this._htOption.version = 0)),
        (this._htOption.dotScale < 0 || this._htOption.dotScale > 1) &&
          (console.warn(
            this._htOption.dotScale +
              " , is invalidate, dotScale must greater than 0, less than or equal to 1, now reset to 1. "
          ),
          (this._htOption.dotScale = 1)),
        (this._htOption.dotScaleTiming < 0 ||
          this._htOption.dotScaleTiming > 1) &&
          (console.warn(
            this._htOption.dotScaleTiming +
              " , is invalidate, dotScaleTiming must greater than 0, less than or equal to 1, now reset to 1. "
          ),
          (this._htOption.dotScaleTiming = 1)),
        this._htOption.dotScaleTiming_H
          ? (this._htOption.dotScaleTiming_H < 0 ||
              this._htOption.dotScaleTiming_H > 1) &&
            (console.warn(
              this._htOption.dotScaleTiming_H +
                " , is invalidate, dotScaleTiming_H must greater than 0, less than or equal to 1, now reset to 1. "
            ),
            (this._htOption.dotScaleTiming_H = 1))
          : (this._htOption.dotScaleTiming_H = this._htOption.dotScaleTiming),
        this._htOption.dotScaleTiming_V
          ? (this._htOption.dotScaleTiming_V < 0 ||
              this._htOption.dotScaleTiming_V > 1) &&
            (console.warn(
              this._htOption.dotScaleTiming_V +
                " , is invalidate, dotScaleTiming_V must greater than 0, less than or equal to 1, now reset to 1. "
            ),
            (this._htOption.dotScaleTiming_V = 1))
          : (this._htOption.dotScaleTiming_V = this._htOption.dotScaleTiming),
        (this._htOption.dotScaleA < 0 || this._htOption.dotScaleA > 1) &&
          (console.warn(
            this._htOption.dotScaleA +
              " , is invalidate, dotScaleA must greater than 0, less than or equal to 1, now reset to 1. "
          ),
          (this._htOption.dotScaleA = 1)),
        this._htOption.dotScaleAO
          ? (this._htOption.dotScaleAO < 0 || this._htOption.dotScaleAO > 1) &&
            (console.warn(
              this._htOption.dotScaleAO +
                " , is invalidate, dotScaleAO must greater than 0, less than or equal to 1, now reset to 1. "
            ),
            (this._htOption.dotScaleAO = 1))
          : (this._htOption.dotScaleAO = this._htOption.dotScaleA),
        this._htOption.dotScaleAI
          ? (this._htOption.dotScaleAI < 0 || this._htOption.dotScaleAI > 1) &&
            (console.warn(
              this._htOption.dotScaleAI +
                " , is invalidate, dotScaleAI must greater than 0, less than or equal to 1, now reset to 1. "
            ),
            (this._htOption.dotScaleAI = 1))
          : (this._htOption.dotScaleAI = this._htOption.dotScaleA),
        (this._htOption.backgroundImageAlpha < 0 ||
          this._htOption.backgroundImageAlpha > 1) &&
          (console.warn(
            this._htOption.backgroundImageAlpha +
              " , is invalidate, backgroundImageAlpha must between 0 and 1, now reset to 1. "
          ),
          (this._htOption.backgroundImageAlpha = 1)),
        this._htOption.quietZone || (this._htOption.quietZone = 0),
        this._htOption.titleHeight || (this._htOption.titleHeight = 0),
        (this._htOption.width = Math.round(this._htOption.width)),
        (this._htOption.height = Math.round(this._htOption.height)),
        (this._htOption.quietZone = Math.round(this._htOption.quietZone)),
        (this._htOption.titleHeight = Math.round(this._htOption.titleHeight)),
        "string" == typeof a && (a = document.getElementById(a)),
        (!this._htOption.drawer ||
          ("svg" != this._htOption.drawer &&
            "canvas" != this._htOption.drawer)) &&
          (this._htOption.drawer = "canvas"),
        (this._android = f()),
        (this._el = a),
        (this._oQRCode = null),
        (this._htOption._element = a);
      var d = {};
      for (var c in this._htOption) d[c] = this._htOption[c];
      (this._oDrawing = new x(this._el, d)),
        this._htOption.text && this.makeCode(this._htOption.text);
    }),
      (j.prototype.makeCode = function (a) {
        (this._oQRCode = new b(
          g(a, this._htOption),
          this._htOption.correctLevel
        )),
          this._oQRCode.addData(
            a,
            this._htOption.binary,
            this._htOption.utf8WithoutBOM
          ),
          this._oQRCode.make(),
          this._htOption.tooltip && (this._el.title = a),
          this._oDrawing.draw(this._oQRCode);
      }),
      (j.prototype.makeImage = function () {
        "function" == typeof this._oDrawing.makeImage &&
          (!this._android || this._android >= 3) &&
          this._oDrawing.makeImage();
      }),
      (j.prototype.clear = function () {
        this._oDrawing.remove();
      }),
      (j.prototype.resize = function (a, b) {
        (this._oDrawing._htOption.width = a),
          (this._oDrawing._htOption.height = b),
          this._oDrawing.draw(this._oQRCode);
      }),
      (j.prototype.download = function (a) {
        var b = this._oDrawing.dataURL,
          c = document.createElement("a");
        if ("svg" == this._htOption.drawer) {
          a += ".svg";
          var d = new Blob([b], { type: "text/plain" });
          if (navigator.msSaveBlob) navigator.msSaveBlob(d, a);
          else {
            c.download = a;
            var e = new FileReader();
            (e.onload = function () {
              (c.href = e.result), c.click();
            }),
              e.readAsDataURL(d);
          }
        } else if (((a += ".png"), navigator.msSaveBlob)) {
          var f = (function (a) {
            var b = atob(a.split(",")[1]),
              c = a.split(",")[0].split(":")[1].split(";")[0],
              d = new ArrayBuffer(b.length),
              e = new Uint8Array(d);
            for (v = 0; v < b.length; v++) e[v] = b.charCodeAt(v);
            return new Blob([d], { type: c });
          })(b);
          navigator.msSaveBlob(f, a);
        } else (c.download = a), (c.href = b), c.click();
      }),
      (j.prototype.noConflict = function () {
        return m.QRCode === this && (m.QRCode = p), j;
      }),
      (j.CorrectLevel = r),
      "function" == typeof define && (define.amd || define.cmd)
        ? define([], function () {
            return j;
          })
        : o
        ? (((o.exports = j).QRCode = j), (n.QRCode = j))
        : (m.QRCode = j);
  }.call(this);
