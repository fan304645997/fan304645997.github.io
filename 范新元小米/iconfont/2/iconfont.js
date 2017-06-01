;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-sousuo_sousuo" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M975.896052 1024c-5.629185 0-11.258371-1.023488-16.375812-2.558721s-9.723138-4.093953-13.817092-7.676162l-5.629185-4.605697-297.835082-291.694153-4.605698 3.070465c-69.085457 47.592204-147.382309 71.644178-232.843578 71.644178-8.69965 0-17.3993-0.511744-26.09895-1.023488-8.69965-0.511744-17.3993-2.046977-26.098951-3.582209-59.362319-6.652674-117.189405-27.122439-166.316841-59.362319-54.244878-33.775112-98.766617-79.32034-131.006497-135.612194-15.864068-26.098951-28.145927-54.244878-36.845577-82.902549-8.69965-29.169415-14.328836-59.362319-16.375812-90.066966-2.046977-30.192904 0-60.897551 5.117441-91.090455 7.676162-49.127436 25.075462-95.184408 51.686157-137.147426 26.098951-42.474763 59.874063-78.808596 100.813593-108.489755 34.286857-26.610695 73.17941-47.08046 115.654173-61.409296 41.963018-14.328836 85.973013-21.493253 130.494752-21.493253 18.934533 0 36.845577 1.023488 53.733134 3.582209 46.056972 6.14093 90.066967 19.958021 132.029985 40.93953 41.451274 20.981509 78.808596 48.103948 110.024987 81.879061 36.333833 37.357321 64.47976 81.367316 83.926037 132.029985 18.934533 50.662669 27.634183 102.86057 25.075463 154.546726-3.070465 86.996502-34.286857 166.316842-92.625688 235.402299l-4.093953 4.605697 296.299851 289.135433v5.117441h3.582208c7.164418 9.211394 10.746627 18.422789 10.746627 29.169415 0 12.793603-4.605697 23.54023-13.817091 32.751624-8.69965 8.69965-20.469765 13.817091-33.263369 13.817092l-1.535232 1.023488z m-610.510745-973.337331c-4.093953 0-7.676162 0.511744-11.770115 1.535232l-6.652673 1.023488c-51.174413 7.676162-101.325337 27.122439-143.8001 56.291854-42.986507 28.145927-79.32034 66.526737-104.907546 110.536732-29.681159 47.592204-46.056972 101.837081-49.127437 160.175912-3.070465 58.850575 8.187906 114.118941 33.263369 164.269865 20.981509 45.033483 52.709645 85.973013 91.602198 118.212894 38.892554 32.23988 84.949525 56.291854 134.076962 69.597201 32.23988 8.69965 64.47976 13.305347 96.71964 13.305347 19.958021 0 39.916042-1.535232 59.874063-5.117441 27.634183-4.605697 54.756622-12.793603 80.343828-23.54023 25.587206-10.746627 49.63918-24.563718 72.155922-40.93953s42.474763-34.798601 60.897552-55.268366c17.911044-20.981509 33.263368-43.498251 45.545227-68.061969 23.028486-43.498251 35.310345-90.578711 37.869065-139.194403 2.558721-48.103948-5.629185-97.231384-24.563718-141.753123-10.746627-27.634183-24.563718-53.733133-42.474762-77.785108-17.911044-24.051974-38.892554-46.056972-62.432784-65.503248-23.54023-18.934533-49.63918-35.310345-77.273363-47.592204-46.056972-20.981509-97.743128-31.728136-148.405797-31.728136-13.817091-0.511744-27.122439 0-40.939531 1.535233z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)