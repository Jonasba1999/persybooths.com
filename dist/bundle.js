(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from2, except, desc) => {
    if (from2 && typeof from2 === "object" || typeof from2 === "function") {
      for (let key of __getOwnPropNames(from2))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/fast-deep-equal/index.js
  var require_fast_deep_equal = __commonJS({
    "node_modules/fast-deep-equal/index.js"(exports, module) {
      "use strict";
      module.exports = function equal3(a2, b2) {
        if (a2 === b2) return true;
        if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
          if (a2.constructor !== b2.constructor) return false;
          var length, i2, keys2;
          if (Array.isArray(a2)) {
            length = a2.length;
            if (length != b2.length) return false;
            for (i2 = length; i2-- !== 0; )
              if (!equal3(a2[i2], b2[i2])) return false;
            return true;
          }
          if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
          if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
          if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
          keys2 = Object.keys(a2);
          length = keys2.length;
          if (length !== Object.keys(b2).length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2])) return false;
          for (i2 = length; i2-- !== 0; ) {
            var key = keys2[i2];
            if (!equal3(a2[key], b2[key])) return false;
          }
          return true;
        }
        return a2 !== a2 && b2 !== b2;
      };
    }
  });

  // node_modules/gsap/gsap-core.js
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i2;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i2 = _harnessPlugins.length;
      while (i2-- && !_harnessPlugins[i2].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i2];
    }
    i2 = targets.length;
    while (i2--) {
      targets[i2] && (targets[i2]._gsap || (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin))) || targets.splice(i2, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v2) {
    return (v2 = target[property]) && _isFunction(v2) ? target[property]() : _isUndefined(v2) && target.getAttribute && target.getAttribute(property) || v2;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l2 = toFind.length, i2 = 0;
    for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2; ) {
    }
    return i2 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a2 = _lazyTweens.slice(0), i2, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i2 = 0; i2 < l2; i2++) {
      tween = a2[i2];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n2 = parseFloat(value);
    return (n2 || n2 === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n2 : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p2) {
    return p2;
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p2 in defaults3) {
      p2 in obj || (obj[p2] = defaults3[p2]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p2 in defaults3) {
        p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults3[p2]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p2 in toMerge) {
      base[p2] = toMerge[p2];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p2 in toMerge) {
      p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p2;
    for (p2 in obj) {
      p2 in excluding || (copy[p2] = obj[p2]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent2 = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent2) {
        func(vars, parent2.vars.defaults);
        parent2 = parent2.parent || parent2._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i2 = a1.length, match = i2 === a2.length;
    while (match && i2-- && a1[i2] === a2[i2]) {
    }
    return i2 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent2, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent2[lastProp], t2;
    if (sortBy) {
      t2 = child[sortBy];
      while (prev && prev[sortBy] > t2) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent2[firstProp];
      parent2[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent2[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent2;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent2, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent2[firstProp] === child) {
      parent2[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent2[lastProp] === child) {
      parent2[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a2 = animation;
      while (a2) {
        a2._dirty = 1;
        a2 = a2.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent2 = animation.parent;
    while (parent2 && parent2.parent) {
      parent2._dirty = 1;
      parent2.totalDuration();
      parent2 = parent2.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent2 = animation._dp;
    if (parent2 && parent2.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent2._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent2._dirty || _uncache(parent2, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t2;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
        child.render(t2, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t2 = timeline2;
        while (t2._dp) {
          t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
          t2 = t2._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent2 = _ref.parent;
    return parent2 && parent2._ts && parent2._initted && !parent2._lock && (parent2.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent2));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt2, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt2 = tween._pt;
      while (pt2) {
        pt2.r(ratio, pt2.d);
        pt2 = pt2._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i2, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i2 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i2 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i2 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i2 - 1) + position.substr(i2 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i2 > 1 ? _parsePosition2(animation, position.substr(0, i2 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent2;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent2 = timeline2;
      while (parent2 && !("immediateRender" in irVars)) {
        irVars = parent2.vars.defaults || {};
        parent2 = _isNotFalse(parent2.vars.inherit) && parent2.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v2) {
    return !_isString(value) || !(v2 = _unitExp.exec(value)) ? "" : v2[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v2) {
      return _clamp(min, max, v2);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v2) {
      var el = value.current || value.nativeElement || value;
      return toArray(v2, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a2) {
    return a2.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v2) {
    if (_isFunction(v2)) {
      return v2;
    }
    var vars = _isObject(v2) ? v2 : {
      each: v2
    }, ease = _parseEase(vars.ease), from2 = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from2 > 0 && from2 < 1, ratios = isNaN(from2) || isDecimal, axis = vars.axis, ratioX = from2, ratioY = from2;
    if (_isString(from2)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from2] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from2[0];
      ratioY = from2[1];
    }
    return function(i2, target, a2) {
      var l2 = (a2 || vars).length, distances = cache[l2], originX, originY, x2, y2, d2, j2, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a2[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt < l2 && wrapAt--;
        }
        distances = cache[l2] = [];
        originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from2 % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from2 / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j2 = 0; j2 < l2; j2++) {
          x2 = j2 % wrapAt - originX;
          y2 = originY - (j2 / wrapAt | 0);
          distances[j2] = d2 = !axis ? _sqrt(x2 * x2 + y2 * y2) : Math.abs(axis === "y" ? y2 : x2);
          d2 > max && (max = d2);
          d2 < min && (min = d2);
        }
        from2 === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from2 === "edges" ? -1 : 1);
        distances.b = l2 < 0 ? base - l2 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l2 < 0 ? _invertEase(ease) : ease;
      }
      l2 = (distances[i2] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v2) {
    var p2 = Math.pow(10, ((v2 + "").split(".")[1] || "").length);
    return function(raw) {
      var n2 = _roundPrecise(Math.round(parseFloat(raw) / v2) * v2 * p2);
      return (n2 - n2 % 1) / p2 + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray2 = _isArray(snapTo), radius, is2D;
    if (!isArray2 && _isObject(snapTo)) {
      radius = isArray2 = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray2 ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x2 = parseFloat(is2D ? raw.x : raw), y2 = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest2 = 0, i2 = snapTo.length, dx, dy;
      while (i2--) {
        if (is2D) {
          dx = snapTo[i2].x - x2;
          dy = snapTo[i2].y - y2;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i2] - x2);
        }
        if (dx < min) {
          min = dx;
          closest2 = i2;
        }
      }
      closest2 = !radius || min <= radius ? snapTo[closest2] : raw;
      return is2D || closest2 === raw || _isNumber(raw) ? closest2 : closest2 + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v2, f2) {
        return f2(v2);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a2, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a2[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s2 = "", i2, nums, end, isArray2;
    while (~(i2 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i2);
      isArray2 = value.charAt(i2 + 7) === "[";
      nums = value.substr(i2 + 7, end - i2 - 7).match(isArray2 ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i2 - prev) + random(isArray2 ? nums : +nums[0], isArray2 ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p3) {
      return (1 - p3) * start + p3 * end;
    };
    if (!func) {
      var isString2 = _isString(start), master = {}, p2, i2, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString2) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l2 = start.length;
        il = l2 - 2;
        for (i2 = 1; i2 < l2; i2++) {
          interpolators.push(interpolate2(start[i2 - 1], start[i2]));
        }
        l2--;
        func = function func2(p3) {
          p3 *= l2;
          var i3 = Math.min(il, ~~p3);
          return interpolators[i3](p3 - i3);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p2 in end) {
          _addPropTween.call(master, start, p2, "get", end[p2]);
        }
        func = function func2(p3) {
          return _renderPropTweens(p3, master) || (isString2 ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p2, distance, label;
    for (p2 in labels) {
      distance = labels[p2] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p2;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v2 = animation.vars, callback = v2[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v2[type + "Params"];
    scope = v2.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3) return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name = config3.name, isFunc = _isFunction(config3), Plugin = name && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }
      _addGlobal(name, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h2, m1, m2) {
    h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
    return (h2 * 6 < 1 ? m1 + (m2 - m1) * h2 * 6 : h2 < 0.5 ? m2 : h2 * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h2) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v2, toHSL, forceAlpha) {
    var a2 = !v2 ? _colorLookup.black : _isNumber(v2) ? [v2 >> 16, v2 >> 8 & _255, v2 & _255] : 0, r2, g2, b2, h2, s2, l2, max, min, d2, wasHSL;
    if (!a2) {
      if (v2.substr(-1) === ",") {
        v2 = v2.substr(0, v2.length - 1);
      }
      if (_colorLookup[v2]) {
        a2 = _colorLookup[v2];
      } else if (v2.charAt(0) === "#") {
        if (v2.length < 6) {
          r2 = v2.charAt(1);
          g2 = v2.charAt(2);
          b2 = v2.charAt(3);
          v2 = "#" + r2 + r2 + g2 + g2 + b2 + b2 + (v2.length === 5 ? v2.charAt(4) + v2.charAt(4) : "");
        }
        if (v2.length === 9) {
          a2 = parseInt(v2.substr(1, 6), 16);
          return [a2 >> 16, a2 >> 8 & _255, a2 & _255, parseInt(v2.substr(7), 16) / 255];
        }
        v2 = parseInt(v2.substr(1), 16);
        a2 = [v2 >> 16, v2 >> 8 & _255, v2 & _255];
      } else if (v2.substr(0, 3) === "hsl") {
        a2 = wasHSL = v2.match(_strictNumExp);
        if (!toHSL) {
          h2 = +a2[0] % 360 / 360;
          s2 = +a2[1] / 100;
          l2 = +a2[2] / 100;
          g2 = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
          r2 = l2 * 2 - g2;
          a2.length > 3 && (a2[3] *= 1);
          a2[0] = _hue(h2 + 1 / 3, r2, g2);
          a2[1] = _hue(h2, r2, g2);
          a2[2] = _hue(h2 - 1 / 3, r2, g2);
        } else if (~v2.indexOf("=")) {
          a2 = v2.match(_numExp);
          forceAlpha && a2.length < 4 && (a2[3] = 1);
          return a2;
        }
      } else {
        a2 = v2.match(_strictNumExp) || _colorLookup.transparent;
      }
      a2 = a2.map(Number);
    }
    if (toHSL && !wasHSL) {
      r2 = a2[0] / _255;
      g2 = a2[1] / _255;
      b2 = a2[2] / _255;
      max = Math.max(r2, g2, b2);
      min = Math.min(r2, g2, b2);
      l2 = (max + min) / 2;
      if (max === min) {
        h2 = s2 = 0;
      } else {
        d2 = max - min;
        s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
        h2 = max === r2 ? (g2 - b2) / d2 + (g2 < b2 ? 6 : 0) : max === g2 ? (b2 - r2) / d2 + 2 : (r2 - g2) / d2 + 4;
        h2 *= 60;
      }
      a2[0] = ~~(h2 + 0.5);
      a2[1] = ~~(s2 * 100 + 0.5);
      a2[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a2.length < 4 && (a2[3] = 1);
    return a2;
  };
  var _colorOrderData = function _colorOrderData2(v2) {
    var values = [], c2 = [], i2 = -1;
    v2.split(_colorExp).forEach(function(v3) {
      var a2 = v3.match(_numWithUnitExp) || [];
      values.push.apply(values, a2);
      c2.push(i2 += a2.length + 1);
    });
    values.c = c2;
    return values;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i2 = 0, c2, shell, d2, l2;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d2 = _colorOrderData(s2);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d2.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i2 < l2; i2++) {
          result += shell[i2] + (~c2.indexOf(i2) ? colors.shift() || type + "0,0,0,0)" : (d2.length ? d2 : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l2 = shell.length - 1;
      for (; i2 < l2; i2++) {
        result += shell[i2] + colors[i2];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
    for (p2 in _colorLookup) {
      s2 += "|" + p2 + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a2) {
    var combined = a2.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a2[1] = _formatColors(a2[1], toHSL);
      a2[0] = _formatColors(a2[0], toHSL, _colorOrderData(a2[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime4 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime4(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v2) {
      var elapsed = _getTime4() - _lastUpdate, manual = v2 === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v2);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id && _self.sleep();
          _req = _raf || function(f2) {
            return setTimeout(f2, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t2, d2, f2, v2) {
          callback(t2, d2, f2, v2);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i2) {
        ~(i2 = _listeners3.indexOf(callback)) && _listeners3.splice(i2, 1) && _i2 >= i2 && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i2 = 1, l2 = split.length, index, val, parsedVal;
    for (; i2 < l2; i2++) {
      val = split[i2];
      index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p2) {
      return 1 - ease(1 - p2);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p2) {
        return 1 - easeIn(1 - p2);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p2) {
        return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p2 in ease) {
        _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p2] = ease[p2];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p2) {
      return p2 < 0.5 ? (1 - easeOut(1 - p2 * 2)) / 2 : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p4) {
      return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p4) {
      return 1 - easeOut(1 - p4);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p2) {
      return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p2) {
      return 1 - easeOut(1 - p2);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i2) {
    var power = i2 < 5 ? i2 + 1 : i2;
    _insertEase(name + ",Power" + (power - 1), i2 ? function(p2) {
      return Math.pow(p2, power);
    } : function(p2) {
      return p2;
    }, function(p2) {
      return 1 - Math.pow(1 - p2, power);
    }, function(p2) {
      return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n2, c2) {
    var n1 = 1 / c2, n22 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p2) {
      return p2 < n1 ? n2 * p2 * p2 : p2 < n22 ? n2 * Math.pow(p2 - 1.5 / c2, 2) + 0.75 : p2 < n3 ? n2 * (p2 -= 2.25 / c2) * p2 + 0.9375 : n2 * Math.pow(p2 - 2.625 / c2, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p2) {
      return 1 - easeOut(1 - p2);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p2) {
    return p2 ? Math.pow(2, 10 * (p2 - 1)) : 0;
  });
  _insertEase("Circ", function(p2) {
    return -(_sqrt(1 - p2 * p2) - 1);
  });
  _insertEase("Sine", function(p2) {
    return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p4) {
        return ((p2 * _clamp(0, max, p4) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent2 = this._dp;
      if (parent2 && parent2.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent2._dp || parent2.parent || _postAddChecks(parent2, this);
        while (parent2 && parent2.parent) {
          if (parent2.parent._time !== parent2._start + (parent2._ts >= 0 ? parent2._tTime / parent2._ts : (parent2.totalDuration() - parent2._tTime) / -parent2._ts)) {
            parent2.totalTime(parent2._tTime, true);
          }
          parent2 = parent2.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent2 = this.parent || this._dp;
        parent2 && (parent2._sort || !this.parent) && _addToTimeline(parent2, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent2 = this.parent || this._dp;
      return !parent2 ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent2.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from2, suppressEvents) {
      from2 != null && this.seek(from2, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from2, suppressEvents) {
      from2 != null && this.seek(from2 || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent2 = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent2 || this._ts && this._initted && parent2.isActive() && (rawTime = parent2.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function(resolve) {
        var f2 = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self.then;
          self.then = null;
          _isFunction(f2) && (f2 = f2(self)) && (f2.then || f2 === self) && (self.then = _then);
          resolve(f2);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from2(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a2 = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a2.push(child);
          } else {
            timelines && a2.push(child);
            nested && a2.push.apply(a2, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i2 = animations.length;
      while (i2--) {
        if (animations[i2].vars.id === id) {
          return animations[i2];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t2.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t2, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i2 = tweens.length;
      while (i2--) {
        _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a2 = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a2.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a2.push.apply(a2, children);
        }
        child = child._next;
      }
      return a2;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p2;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p2 in labels) {
          if (labels[p2] >= ignoreBeforeTime) {
            labels[p2] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent2;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent2 = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent2 && !self._dp || parent2 && parent2.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt2 = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a2;
    pt2.b = start;
    pt2.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a2 = [start, end];
      stringFilter(a2, target, prop);
      start = a2[0];
      end = a2[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt2._pt = {
          _next: pt2._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt2.c = index < end.length ? end.substring(index, end.length) : "";
    pt2.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt2.e = 0;
    }
    this._pt = pt2;
    return pt2;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt2;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt2 = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt2 || pt2 === 0) {
          end = pt2;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt2 = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt2.fp = funcParam);
        modifier && pt2.modifier(modifier, this, target);
        return this._pt = pt2;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p2;
    for (p2 in vars) {
      copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt2, ptLookup, i2;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt2 = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i2 = plugin._props.length;
        while (i2--) {
          ptLookup[plugin._props[i2]] = pt2;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent2 = tween.parent, fullTargets = parent2 && parent2.data === "nested" ? parent2.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i2, p2, pt2, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent2,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p2 = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent: parent2
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p2[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p2));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i2 = 0; i2 < targets.length; i2++) {
        target = targets[i2];
        gsData = target._gsap || _harness(targets)[i2]._gsap;
        tween._ptLookup[i2] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt2 = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name) {
            ptLookup[name] = pt2;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p2 in cleanVars) {
            if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p2] = pt2 = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt2, rootPT, lookup, i2;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i2 = tween._targets.length;
      while (i2--) {
        pt2 = lookup[i2][property];
        if (pt2 && pt2.d && pt2.d._pt) {
          pt2 = pt2.d._pt;
          while (pt2 && pt2.p !== property && pt2.fp !== property) {
            pt2 = pt2._next;
          }
        }
        if (!pt2) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt2);
      }
    }
    i2 = ptCache.length;
    while (i2--) {
      rootPT = ptCache[i2];
      pt2 = rootPT._pt || rootPT;
      pt2.s = (start || start === 0) && !startIsRelative ? start : pt2.s + (start || 0) + ratio * pt2.c;
      pt2.c = value - pt2.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt2.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i2, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p2 in propertyAliases) {
      if (p2 in copy) {
        aliases = propertyAliases[p2].split(",");
        i2 = aliases.length;
        while (i2--) {
          copy[aliases[i2]] = copy[p2];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p2, a2;
    if (_isArray(obj)) {
      a2 = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i2) {
        return a2.push({
          t: i2 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p2 in obj) {
        a2 = allProps[p2] || (allProps[p2] = []);
        p2 === "ease" || a2.push({
          t: parseFloat(prop),
          v: obj[p2],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i2, target, targets) {
    return _isFunction(value) ? value.call(tween, i2, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent2 = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i2, copy, l2, p2, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
          targets: parent2 && parent2.data === "nested" ? parent2.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l2 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p2 in stagger) {
              if (~_staggerTweenProps.indexOf(p2)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p2] = stagger[p2];
              }
            }
          }
          for (i2 = 0; i2 < l2; i2++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i2];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i2, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i2, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a2, kf, v2;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p2 in keyframes) {
              p2 === "ease" || p2 === "easeEach" || _parseKeyframe(p2, keyframes[p2], copy, keyframes.easeEach);
            }
            for (p2 in copy) {
              a2 = copy[p2].sort(function(a3, b2) {
                return a3.t - b2.t;
              });
              time = 0;
              for (i2 = 0; i2 < a2.length; i2++) {
                kf = a2[i2];
                v2 = {
                  ease: kf.e,
                  duration: (kf.t - (i2 ? a2[i2 - 1].t : 0)) / 100 * duration
                };
                v2[p2] = kf.v;
                tl.to(parsedTargets, v2, time);
                time += v2.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent2, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent2._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent2.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt2, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt2 = this._pt;
        while (pt2) {
          pt2.r(ratio, pt2.d);
          pt2 = pt2._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt2, i2;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p2 = {};
          _forEachName(vars, function(name) {
            return p2[name] = 1;
          });
          vars = p2;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i2 = parsedTargets.length;
      while (i2--) {
        if (~killingTargets.indexOf(parsedTargets[i2])) {
          curLookup = propTweenLookup[i2];
          if (vars === "all") {
            overwrittenProps[i2] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i2] = overwrittenProps[i2] || {};
            props = vars;
          }
          for (p2 in props) {
            pt2 = curLookup && curLookup[p2];
            if (pt2) {
              if (!("kill" in pt2.d) || pt2.d.kill(p2) === true) {
                _removeLinkedListItem(this, pt2, "_pt");
              }
              delete curLookup[p2];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p2] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from2(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt2 = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt2) {
        s2 = pt2.p + (pt2.m ? pt2.m(pt2.s + pt2.c * ratio) : Math.round((pt2.s + pt2.c * ratio) * 1e4) / 1e4) + s2;
        pt2 = pt2._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt2 = data._pt;
    while (pt2) {
      pt2.r(ratio, pt2.d);
      pt2 = pt2._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt2 = this._pt, next;
    while (pt2) {
      next = pt2._next;
      pt2.p === property && pt2.modifier(modifier, tween, target);
      pt2 = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt2 = this._pt, hasNonDependentRemaining, next;
    while (pt2) {
      next = pt2._next;
      if (pt2.p === property && !pt2.op || pt2.op === property) {
        _removeLinkedListItem(this, pt2, "_pt");
      } else if (!pt2.dep) {
        hasNonDependentRemaining = 1;
      }
      pt2 = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent2) {
    var pt2 = parent2._pt, next, pt22, first, last;
    while (pt2) {
      next = pt2._next;
      pt22 = first;
      while (pt22 && pt22.pr > pt2.pr) {
        pt22 = pt22._next;
      }
      if (pt2._prev = pt22 ? pt22._prev : last) {
        pt2._prev._next = pt2;
      } else {
        first = pt2;
      }
      if (pt2._next = pt22) {
        pt22._prev = pt2;
      } else {
        last = pt2;
      }
      pt2 = next;
    }
    parent2._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f2) {
      return f2();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c2) {
        var queries = c2.queries, conditions = c2.conditions, match, p2, anyMatch, toggled;
        for (p2 in queries) {
          match = _win.matchMedia(queries[p2]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p2]) {
            conditions[p2] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c2.revert();
          anyMatch && matches.push(c2);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c2) {
        return c2.onMatch(c2, function(func) {
          return c2.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }
      var self = this, f2 = function f3() {
        var prev = _context, prevSelector = self.selector, result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };
      self.last = f2;
      return name === _isFunction ? f2(self, function(func2) {
        return self.add(null, func2);
      }) : name ? self[name] = f2 : f2;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a2 = [];
      this.data.forEach(function(e2) {
        return e2 instanceof Context2 ? a2.push.apply(a2, e2.getTweens()) : e2 instanceof Tween && !(e2.parent && e2.parent.data === "nested") && a2.push(e2);
      });
      return a2;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i3 = _this4.data.length, t2;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2.data === "isFlip") {
              t2.revert();
              t2.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t3) {
            return {
              g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
              t: t3
            };
          }).sort(function(a2, b2) {
            return b2.g - a2.g || -Infinity;
          }).forEach(function(o2) {
            return o2.t.revert(revert);
          });
          i3 = _this4.data.length;
          while (i3--) {
            t2 = _this4.data[i3];
            if (t2 instanceof Timeline) {
              if (t2.data !== "nested") {
                t2.scrollTrigger && t2.scrollTrigger.revert();
                t2.kill();
              }
            } else {
              !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
            }
          }
          _this4._r.forEach(function(f2) {
            return f2(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e2) {
          return e2.kill && e2.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i2 = _media.length;
        while (i2--) {
          _media[i2].id === this.id && _media.splice(i2, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p2, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p2 in conditions) {
        if (p2 === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p2]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p2] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f2) {
        return context3.add(null, f2);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c2) {
        return c2.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t2) {
          return gsap.quickSetter(t2, property, unit);
        }), l2 = setters.length;
        return function(value) {
          var i2 = l2;
          while (i2--) {
            setters[i2](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p3 = new Plugin();
        _quickTween._pt = 0;
        p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p3.render(1, p3);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p2);
      return Plugin ? setter : function(value) {
        return setter(target, p2, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults3), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function(targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c2) {
        var cond = c2.conditions, found, p2;
        for (p2 in cond) {
          if (cond[p2]) {
            cond[p2] = false;
            found = 1;
          }
        }
        found && c2.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a2 = _listeners[type] || (_listeners[type] = []);
      ~a2.indexOf(callback) || a2.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a2 = _listeners[type], i2 = a2 && a2.indexOf(callback);
      i2 >= 0 && a2.splice(i2, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt2 = plugin._pt;
    while (pt2 && pt2.p !== prop && pt2.op !== prop && pt2.fp !== prop) {
      pt2 = pt2._next;
    }
    return pt2;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p2, i2, pt2;
    for (p2 in modifiers) {
      i2 = targets.length;
      while (i2--) {
        pt2 = tween._ptLookup[i2][p2];
        if (pt2 && (pt2 = pt2.d)) {
          if (pt2._pt) {
            pt2 = _getPluginPropTween(pt2, p2);
          }
          pt2 && pt2.modifier && pt2.modifier(modifiers[p2], tween, targets[i2], p2);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
    return {
      name,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p2;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name2) {
              return temp[name2] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p2 in vars) {
              temp[p2] = modifier(vars[p2]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p2, pt2, v2;
      this.tween = tween;
      for (p2 in vars) {
        v2 = target.getAttribute(p2) || "";
        pt2 = this.add(target, "setAttribute", (v2 || 0) + "", vars[p2], index, targets, 0, 0, p2);
        pt2.op = p2;
        pt2.b = v2;
        this._props.push(p2);
      }
    },
    render: function render(ratio, data) {
      var pt2 = data._pt;
      while (pt2) {
        _reverting ? pt2.set(pt2.t, pt2.p, pt2.b, pt2) : pt2.r(ratio, pt2.d);
        pt2 = pt2._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i2 = value.length;
      while (i2--) {
        this.add(target, i2, target[i2] || 0, value[i2], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/gsap/CSSPlugin.js
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a2) {
          return _this.tfm[a2] = _get(target, a2);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p2) {
          return _saveStyle2.call(_this, p2, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i2, p2;
    for (i2 = 0; i2 < props.length; i2 += 3) {
      props[i2 + 1] ? target[props[i2]] = props[i2 + 2] : props[i2 + 2] ? style[props[i2]] = props[i2 + 2] : style.removeProperty(props[i2].substr(0, 2) === "--" ? props[i2] : props[i2].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p2 in this.tfm) {
        cache[p2] = this.tfm[p2];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i2 = _reverting2();
      if ((!i2 || !i2.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p2) {
      return saver.save(p2);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e2 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e2 && e2.style ? e2 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e2 = element || _tempDiv, s2 = e2.style, i2 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i2-- && !(_prefixes[i2] + property in s2)) {
    }
    return i2 < 0 ? null : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e2) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i2 = attributesArray.length;
    while (i2--) {
      if (target.hasAttribute(attributesArray[i2])) {
        return target.getAttribute(attributesArray[i2]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e2) {
    return !!(e2.getCTM && (!e2.parentNode || e2.ownerSVGElement) && _getBBox(e2));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt2 = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt2;
    pt2.b = beginning;
    pt2.e = end;
    plugin._props.push(property);
    return pt2;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent2, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent2 = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent2 = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent2 || parent2 === _doc2 || !parent2.appendChild) {
      parent2 = _doc2.body;
    }
    cache = parent2._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v2 = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v2 ? target.style[property] = v2 : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent2, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent2 === target && (style.position = "static");
        parent2.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent2.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent2);
        cache.time = _ticker.time;
        cache.width = parent2[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p2 = _checkPropPrefix(prop, target, 1), s2 = p2 && _getComputedProperty(target, p2, 1);
      if (s2 && s2 !== start) {
        prop = p2;
        start = s2;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt2 = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a2, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt2.b = start;
    pt2.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a2 = [start, end];
    _colorStringFilter(a2);
    start = a2[0];
    end = a2[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt2.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt2._pt = {
            _next: pt2._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt2.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt2.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt2.e = 0);
    this._pt = pt2;
    return pt2;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x2 = split[0], y2 = split[1] || "50%";
    if (x2 === "top" || x2 === "bottom" || y2 === "left" || y2 === "right") {
      value = x2;
      x2 = y2;
      y2 = value;
    }
    split[0] = _keywordToPercent[x2] || x2;
    split[1] = _keywordToPercent[y2] || y2;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i2;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i2 = props.length;
        while (--i2 > -1) {
          prop = props[i2];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt2 = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt2.u = endValue;
        pt2.pr = -10;
        pt2.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent2, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent2 = target.parentNode;
      if (!parent2 || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent2.insertBefore(target, nextSibling) : parent2 ? parent2.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a2 = matrix[0], b2 = matrix[1], c2 = matrix[2], d2 = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x2, y2;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a2 * d2 - b2 * c2)) {
      x2 = xOrigin * (d2 / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d2 * tx) / determinant;
      y2 = xOrigin * (-b2 / determinant) + yOrigin * (a2 / determinant) - (a2 * ty - b2 * tx) / determinant;
      xOrigin = x2;
      yOrigin = y2;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
      cache.yOffset = yOffsetOld + (tx * b2 + ty * d2) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x2, y2, z2, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a2, b2, c2, d2, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x2 = y2 = z2 = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a2 = matrix[0];
      b2 = matrix[1];
      c2 = matrix[2];
      d2 = matrix[3];
      x2 = a12 = matrix[4];
      y2 = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a2 * a2 + b2 * b2);
        scaleY = Math.sqrt(d2 * d2 + c2 * c2);
        rotation = a2 || b2 ? _atan2(b2, a2) * _RAD2DEG : 0;
        skewX = c2 || d2 ? _atan2(c2, d2) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x2 -= xOrigin - (xOrigin * a2 + yOrigin * c2);
          y2 -= yOrigin - (xOrigin * b2 + yOrigin * d2);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x2 = matrix[12];
        y2 = matrix[13];
        z2 = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a2 * cos - a13 * sin;
          t2 = b2 * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d2 * sin + a43 * cos;
          a2 = t1;
          b2 = t2;
          c2 = t3;
        }
        angle = _atan2(b2, a2);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a2 * cos + b2 * sin;
          t2 = a12 * cos + a22 * sin;
          b2 = b2 * cos - a2 * sin;
          a22 = a22 * cos - a12 * sin;
          a2 = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a2 * a2 + b2 * b2 + c2 * c2));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x2 - ((cache.xPercent = x2 && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x2) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y2 - ((cache.yPercent = y2 && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y2) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z2 + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x2 = _ref.x, y2 = _ref.y, z2 = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x2 = _addPxTranslate(target, x2, a13 * cos * -zOrigin);
      y2 = _addPxTranslate(target, y2, -Math.sin(angle) * -zOrigin);
      z2 = _addPxTranslate(target, z2, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x2 !== _zeroPx || y2 !== _zeroPx || z2 !== _zeroPx) {
      transforms += z2 !== _zeroPx || use3D ? "translate3d(" + x2 + ", " + y2 + ", " + z2 + ") " : "translate(" + x2 + ", " + y2 + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x2 = _ref2.x, y2 = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x2), ty = parseFloat(y2), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x2 + "").indexOf("px") || ty && !~(y2 + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x2, "px");
      ty = _convertToUnit(target, "y", y2, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString2 = _isString(endValue), endNum = parseFloat(endValue) * (isString2 && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt2;
    if (isString2) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt2 = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt2.e = finalValue;
    pt2.u = "deg";
    plugin._props.push(property);
    return pt2;
  };
  var _assign = function _assign2(target, source) {
    for (var p2 in source) {
      target[p2] = source[p2];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p2 in _transformProps) {
      startValue = startCache[p2];
      endValue = endCache[p2];
      if (startValue !== endValue && exclude.indexOf(p2) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p2);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name, index) {
    var t2 = "Top", r2 = "Right", b2 = "Bottom", l2 = "Left", props = (index < 3 ? [t2, r2, b2, l2] : [t2 + l2, t2 + r2, b2 + r2, b2 + l2]).map(function(side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
      var a2, vars;
      if (arguments.length < 4) {
        a2 = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a2.join(" ");
        return vars.split(a2[0]).length === 5 ? a2[0] : vars;
      }
      a2 = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i2) {
        return vars[prop] = a2[i2] = a2[i2] || a2[(i2 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p2 in vars) {
        if (p2 === "autoRound") {
          continue;
        }
        endValue = vars[p2];
        if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p2];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
        } else if (p2.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
          props.push(p2);
          inlineProps.push(p2, 0, style[p2]);
        } else if (type !== "undefined") {
          if (startAt && p2 in startAt) {
            startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p2] || getUnit(_get(target, p2)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
          } else {
            startValue = _get(target, p2);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p2 in _propertyAliases) {
            if (p2 === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p2 !== "scale" && p2 !== "transform") {
              p2 = _propertyAliases[p2];
              ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
            }
          }
          isTransformRelated = p2 in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p2);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p2 === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p2);
              p2 += "X";
            } else if (p2 === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p2 === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p2 in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p2, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p2 === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p2 === "force3D") {
              cache[p2] = endValue;
              continue;
            } else if (p2 === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p2 in style)) {
            p2 = _checkPropPrefix(p2) || p2;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p2, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p2 in style)) {
            if (p2 in target) {
              this.add(target, p2, startValue || target[p2], relative ? relative + endValue : endValue, index, targets);
            } else if (p2 !== "parseTransform") {
              _missingPlugin(p2, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p2, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p2 in style ? inlineProps.push(p2, 0, style[p2]) : inlineProps.push(p2, 1, startValue || target[p2]));
          props.push(p2);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt2 = data._pt;
        while (pt2) {
          pt2.r(ratio, pt2.d);
          pt2 = pt2._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p2 = _propertyAliases[property];
      p2 && p2.indexOf(",") < 0 && (property = p2);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function(name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/gsap/utils/matrix.js
  var _doc3;
  var _win3;
  var _docElement2;
  var _body;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp2 = "transform";
  var _transformOriginProp2 = _transformProp2 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp2 in element.style) && "msTransform" in element.style) {
      _transformProp2 = "msTransform";
      _transformOriginProp2 = _transformProp2 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win3 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc3 = doc;
      _docElement2 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc3.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
      if (root && root.appendChild) {
        root.appendChild(d1);
        d1.appendChild(d2);
        d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
        _hasOffsetBug = d2.offsetParent !== d1;
        root.removeChild(d1);
      }
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e2) {
    var a2, cache;
    while (e2 && e2 !== _body) {
      cache = e2._gsap;
      cache && cache.uncache && cache.get(e2, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a2 ? a2.push(cache) : a2 = [cache];
      }
      e2 = e2.parentNode;
    }
    return a2;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win3.pageYOffset || _doc3.scrollTop || _docElement2.scrollTop || _body.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win3.pageXOffset || _doc3.scrollLeft || _docElement2.scrollLeft || _body.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win3.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i2) {
    if (element.parentNode && (_doc3 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i2 ? "rect" : "g" : "div", x2 = i2 !== 2 ? 0 : 100, y2 = i2 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e2 = _doc3.createElementNS ? _doc3.createElementNS(ns.replace(/^https/, "http"), type) : _doc3.createElement(type);
      if (i2) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e2.style.cssText = css + "width:0.1px;height:0.1px;top:" + y2 + "px;left:" + x2 + "px";
          _divContainer.appendChild(e2);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e2.setAttribute("width", 0.01);
          e2.setAttribute("height", 0.01);
          e2.setAttribute("transform", "translate(" + x2 + "," + y2 + ")");
          _svgContainer.appendChild(e2);
        }
      }
      return e2;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m2) {
    var c2 = new Matrix2D(), i2 = 0;
    for (; i2 < m2.numberOfItems; i2++) {
      c2.multiply(m2.getItem(i2).matrix);
    }
    return c2;
  };
  var _getCTM = function _getCTM2(svg) {
    var m2 = svg.getCTM(), transform;
    if (!m2) {
      transform = svg.style[_transformProp2];
      svg.style[_transformProp2] = "none";
      svg.appendChild(_gEl);
      m2 = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp2] = transform : svg.style.removeProperty(_transformProp2.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m2 || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent2 = element.parentNode, container, m2, b2, x2, y2, cs;
    if (element === _win3) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b2 = _getCTM(element);
        x2 = -b2.e / b2.a;
        y2 = -b2.f / b2.d;
        m2 = _identityMatrix;
      } else if (element.getBBox) {
        b2 = element.getBBox();
        m2 = element.transform ? element.transform.baseVal : {};
        m2 = !m2.numberOfItems ? _identityMatrix : m2.numberOfItems > 1 ? _consolidate(m2) : m2.getItem(0).matrix;
        x2 = m2.a * b2.x + m2.c * b2.y;
        y2 = m2.b * b2.x + m2.d * b2.y;
      } else {
        m2 = new Matrix2D();
        x2 = y2 = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x2 = y2 = 0;
      }
      (isRootSVG ? svg : parent2).appendChild(container);
      container.setAttribute("transform", "matrix(" + m2.a + "," + m2.b + "," + m2.c + "," + m2.d + "," + (m2.e + x2) + "," + (m2.f + y2) + ")");
    } else {
      x2 = y2 = 0;
      if (_hasOffsetBug) {
        m2 = element.offsetParent;
        b2 = element;
        while (b2 && (b2 = b2.parentNode) && b2 !== m2 && b2.parentNode) {
          if ((_win3.getComputedStyle(b2)[_transformProp2] + "").length > 4) {
            x2 = b2.offsetLeft;
            y2 = b2.offsetTop;
            b2 = 0;
          }
        }
      }
      cs = _win3.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m2 = element.offsetParent;
        while (parent2 && parent2 !== m2) {
          x2 += parent2.scrollLeft || 0;
          y2 += parent2.scrollTop || 0;
          parent2 = parent2.parentNode;
        }
      }
      b2 = container.style;
      b2.top = element.offsetTop - y2 + "px";
      b2.left = element.offsetLeft - x2 + "px";
      b2[_transformProp2] = cs[_transformProp2];
      b2[_transformOriginProp2] = cs[_transformOriginProp2];
      b2.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m2, a2, b2, c2, d2, e2, f2) {
    m2.a = a2;
    m2.b = b2;
    m2.c = c2;
    m2.d = d2;
    m2.e = e2;
    m2.f = f2;
    return m2;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a2, b2, c2, d2, e2, f2) {
      if (a2 === void 0) {
        a2 = 1;
      }
      if (b2 === void 0) {
        b2 = 0;
      }
      if (c2 === void 0) {
        c2 = 0;
      }
      if (d2 === void 0) {
        d2 = 1;
      }
      if (e2 === void 0) {
        e2 = 0;
      }
      if (f2 === void 0) {
        f2 = 0;
      }
      _setMatrix(this, a2, b2, c2, d2, e2, f2);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a2 = this.a, b2 = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f, determinant = a2 * d2 - b2 * c2 || 1e-10;
      return _setMatrix(this, d2 / determinant, -b2 / determinant, -c2 / determinant, a2 / determinant, (c2 * f2 - d2 * e2) / determinant, -(a2 * f2 - b2 * e2) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a2 = this.a, b2 = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f, a22 = matrix.a, b22 = matrix.c, c22 = matrix.b, d22 = matrix.d, e22 = matrix.e, f22 = matrix.f;
      return _setMatrix(this, a22 * a2 + c22 * c2, a22 * b2 + c22 * d2, b22 * a2 + d22 * c2, b22 * b2 + d22 * d2, e2 + e22 * a2 + f22 * c2, f2 + e22 * b2 + f22 * d2);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a2 = this.a, b2 = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f;
      return a2 === matrix.a && b2 === matrix.b && c2 === matrix.c && d2 === matrix.d && e2 === matrix.e && f2 === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x2 = point.x, y2 = point.y, a2 = this.a, b2 = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f;
      decoratee.x = x2 * a2 + y2 * c2 + e2 || 0;
      decoratee.y = x2 * b2 + y2 * d2 + f2 || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc3 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent2 = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m2 = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent2.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m2.inverse() : m2;
  }

  // node_modules/gsap/Draggable.js
  function _assertThisInitialized2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _inheritsLoose2(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var gsap2;
  var _win4;
  var _doc4;
  var _docElement3;
  var _body2;
  var _tempDiv2;
  var _placeholderDiv;
  var _coreInitted2;
  var _checkPrefix;
  var _toArray;
  var _supportsPassive;
  var _isTouchDevice;
  var _touchEventLookup;
  var _isMultiTouching;
  var _isAndroid;
  var InertiaPlugin;
  var _defaultCursor;
  var _supportsPointer;
  var _context2;
  var _getStyleSaver3;
  var _dragCount = 0;
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP = function _getGSAP2() {
    return gsap2 || _windowExists5() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _isUndefined3 = function _isUndefined4(value) {
    return typeof value === "undefined";
  };
  var _emptyFunc3 = function _emptyFunc4() {
    return false;
  };
  var _transformProp3 = "transform";
  var _transformOriginProp3 = "transformOrigin";
  var _round3 = function _round4(value) {
    return Math.round(value * 1e4) / 1e4;
  };
  var _isArray2 = Array.isArray;
  var _createElement3 = function _createElement4(type, ns) {
    var e2 = _doc4.createElementNS ? _doc4.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc4.createElement(type);
    return e2.style ? e2 : _doc4.createElement(type);
  };
  var _RAD2DEG2 = 180 / Math.PI;
  var _bigNum3 = 1e20;
  var _identityMatrix2 = new Matrix2D();
  var _getTime = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  var _renderQueue = [];
  var _lookup = {};
  var _lookupCount = 0;
  var _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
  var _lastDragTime = 0;
  var _temp1 = {};
  var _windowProxy = {};
  var _copy = function _copy2(obj, factor) {
    var copy = {}, p2;
    for (p2 in obj) {
      copy[p2] = factor ? obj[p2] * factor : obj[p2];
    }
    return copy;
  };
  var _extend = function _extend2(obj, defaults3) {
    for (var p2 in defaults3) {
      if (!(p2 in obj)) {
        obj[p2] = defaults3[p2];
      }
    }
    return obj;
  };
  var _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
    var i2 = elements.length, children;
    while (i2--) {
      value ? elements[i2].style.touchAction = value : elements[i2].style.removeProperty("touch-action");
      children = elements[i2].children;
      children && children.length && _setTouchActionForAllDescendants2(children, value);
    }
  };
  var _renderQueueTick = function _renderQueueTick2() {
    return _renderQueue.forEach(function(func) {
      return func();
    });
  };
  var _addToRenderQueue = function _addToRenderQueue2(func) {
    _renderQueue.push(func);
    if (_renderQueue.length === 1) {
      gsap2.ticker.add(_renderQueueTick);
    }
  };
  var _renderQueueTimeout = function _renderQueueTimeout2() {
    return !_renderQueue.length && gsap2.ticker.remove(_renderQueueTick);
  };
  var _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
    var i2 = _renderQueue.length;
    while (i2--) {
      if (_renderQueue[i2] === func) {
        _renderQueue.splice(i2, 1);
      }
    }
    gsap2.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults3) {
    for (var p2 in defaults3) {
      if (!(p2 in obj)) {
        obj[p2] = defaults3[p2];
      }
    }
    return obj;
  };
  var _addListener = function _addListener2(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.removeEventListener(type, func, capture);
    }
  };
  var _preventDefault = function _preventDefault2(event2) {
    event2.preventDefault && event2.preventDefault();
    event2.preventManipulation && event2.preventManipulation();
  };
  var _hasTouchID = function _hasTouchID2(list, ID) {
    var i2 = list.length;
    while (i2--) {
      if (list[i2].identifier === ID) {
        return true;
      }
    }
  };
  var _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event2) {
    _isMultiTouching = event2.touches && _dragCount < event2.touches.length;
    _removeListener(event2.target, "touchend", _onMultiTouchDocumentEnd2);
  };
  var _onMultiTouchDocument = function _onMultiTouchDocument2(event2) {
    _isMultiTouching = event2.touches && _dragCount < event2.touches.length;
    _addListener(event2.target, "touchend", _onMultiTouchDocumentEnd);
  };
  var _getDocScrollTop3 = function _getDocScrollTop4(doc) {
    return _win4.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  };
  var _getDocScrollLeft3 = function _getDocScrollLeft4(doc) {
    return _win4.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  };
  var _addScrollListener = function _addScrollListener2(e2, callback) {
    _addListener(e2, "scroll", callback);
    if (!_isRoot(e2.parentNode)) {
      _addScrollListener2(e2.parentNode, callback);
    }
  };
  var _removeScrollListener = function _removeScrollListener2(e2, callback) {
    _removeListener(e2, "scroll", callback);
    if (!_isRoot(e2.parentNode)) {
      _removeScrollListener2(e2.parentNode, callback);
    }
  };
  var _isRoot = function _isRoot2(e2) {
    return !!(!e2 || e2 === _docElement3 || e2.nodeType === 9 || e2 === _doc4.body || e2 === _win4 || !e2.nodeType || !e2.parentNode);
  };
  var _getMaxScroll = function _getMaxScroll2(element, axis) {
    var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body2[scroll]) - (_win4["inner" + dim] || _docElement3[client] || _body2[client]) : element[scroll] - element[client]);
  };
  var _recordMaxScrolls = function _recordMaxScrolls2(e2, skipCurrent) {
    var x2 = _getMaxScroll(e2, "x"), y2 = _getMaxScroll(e2, "y");
    if (_isRoot(e2)) {
      e2 = _windowProxy;
    } else {
      _recordMaxScrolls2(e2.parentNode, skipCurrent);
    }
    e2._gsMaxScrollX = x2;
    e2._gsMaxScrollY = y2;
    if (!skipCurrent) {
      e2._gsScrollX = e2.scrollLeft || 0;
      e2._gsScrollY = e2.scrollTop || 0;
    }
  };
  var _setStyle = function _setStyle2(element, property, value) {
    var style = element.style;
    if (!style) {
      return;
    }
    if (_isUndefined3(style[property])) {
      property = _checkPrefix(property, element) || property;
    }
    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  };
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win4.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  };
  var _tempRect = {};
  var _parseRect = function _parseRect2(e2) {
    if (e2 === _win4) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement3.clientWidth || e2.innerWidth || _body2.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e2.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e2.innerHeight || _body2.clientHeight || 0;
      return _tempRect;
    }
    var doc = e2.ownerDocument || _doc4, r2 = !_isUndefined3(e2.pageX) ? {
      left: e2.pageX - _getDocScrollLeft3(doc),
      top: e2.pageY - _getDocScrollTop3(doc),
      right: e2.pageX - _getDocScrollLeft3(doc) + 1,
      bottom: e2.pageY - _getDocScrollTop3(doc) + 1
    } : !e2.nodeType && !_isUndefined3(e2.left) && !_isUndefined3(e2.top) ? e2 : _toArray(e2)[0].getBoundingClientRect();
    if (_isUndefined3(r2.right) && !_isUndefined3(r2.width)) {
      r2.right = r2.left + r2.width;
      r2.bottom = r2.top + r2.height;
    } else if (_isUndefined3(r2.width)) {
      r2 = {
        width: r2.right - r2.left,
        height: r2.bottom - r2.top,
        right: r2.right,
        left: r2.left,
        bottom: r2.bottom,
        top: r2.top
      };
    }
    return r2;
  };
  var _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
    var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
    if (_isFunction3(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }
    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }
    return result;
  };
  var _getBounds = function _getBounds2(target, context3) {
    var e2 = _toArray(target)[0], top, left, offset;
    if (!e2.nodeType && e2 !== _win4) {
      if (!_isUndefined3(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }
      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left,
        top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }
    return _getElementBounds(e2, context3);
  };
  var _point1 = {};
  var _getElementBounds = function _getElementBounds2(element, context3) {
    context3 = _toArray(context3)[0];
    var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc4, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
    if (element === _win4) {
      top = _getDocScrollTop3(doc);
      left = _getDocScrollLeft3(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context3 === _win4 || _isUndefined3(context3)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;
      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }
        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }
      right = width;
      bottom = height;
    }
    if (element === context3) {
      return {
        left,
        top,
        width: right - left,
        height: bottom - top
      };
    }
    matrix = getGlobalMatrix(context3, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    return {
      left,
      top,
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  };
  var _parseInertia = function _parseInertia2(draggable, snap3, max, min, factor, forceZeroVelocity) {
    var vars = {}, a2, i2, l2;
    if (snap3) {
      if (factor !== 1 && snap3 instanceof Array) {
        vars.end = a2 = [];
        l2 = snap3.length;
        if (_isObject3(snap3[0])) {
          for (i2 = 0; i2 < l2; i2++) {
            a2[i2] = _copy(snap3[i2], factor);
          }
        } else {
          for (i2 = 0; i2 < l2; i2++) {
            a2[i2] = snap3[i2] * factor;
          }
        }
        max += 1.1;
        min -= 1.1;
      } else if (_isFunction3(snap3)) {
        vars.end = function(value) {
          var result = snap3.call(draggable, value), copy, p2;
          if (factor !== 1) {
            if (_isObject3(result)) {
              copy = {};
              for (p2 in result) {
                copy[p2] = result[p2] * factor;
              }
              result = copy;
            } else {
              result *= factor;
            }
          }
          return result;
        };
      } else {
        vars.end = snap3;
      }
    }
    if (max || max === 0) {
      vars.max = max;
    }
    if (min || min === 0) {
      vars.min = min;
    }
    if (forceZeroVelocity) {
      vars.velocity = 0;
    }
    return vars;
  };
  var _isClickable = function _isClickable2(element) {
    var data;
    return !element || !element.getAttribute || element === _body2 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (_clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
  };
  var _setSelectable = function _setSelectable2(elements, selectable) {
    var i2 = elements.length, e2;
    while (i2--) {
      e2 = elements[i2];
      e2.ondragstart = e2.onselectstart = selectable ? null : _emptyFunc3;
      gsap2.set(e2, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  };
  var _isFixed3 = function _isFixed4(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed4(element);
    }
  };
  var _supports3D2;
  var _addPaddingBR;
  var ScrollProxy = function ScrollProxy2(element, vars) {
    element = gsap2.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
    if (_supports3D2 && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp3) {
      transformStart = "translate(";
      transformEnd = "px)";
    }
    this.scrollTop = function(value, force) {
      if (!arguments.length) {
        return -this.top();
      }
      this.top(-value, force);
    };
    this.scrollLeft = function(value, force) {
      if (!arguments.length) {
        return -this.left();
      }
      this.left(-value, force);
    };
    this.left = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }
      var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap2.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }
      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }
      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };
    this.top = function(value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }
      var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap2.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);
        if (vars.onKill) {
          vars.onKill();
        }
        return;
      }
      value = -value;
      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }
      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp3] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }
      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };
    this.maxScrollTop = function() {
      return maxTop;
    };
    this.maxScrollLeft = function() {
      return maxLeft;
    };
    this.disable = function() {
      node = content.firstChild;
      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }
      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };
    this.enable = function() {
      node = element.firstChild;
      if (node === content) {
        return;
      }
      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }
      element.appendChild(content);
      this.calibrate();
    };
    this.calibrate = function(force) {
      var widthMatches = element.clientWidth === elementWidth, cs, x2, y2;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;
      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }
      if (offsetTop || offsetLeft) {
        x2 = this.left();
        y2 = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }
      cs = _getComputedStyle(element);
      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }
      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";
      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }
      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";
      if (x2 || y2) {
        this.left(x2);
        this.top(y2);
      }
    };
    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  };
  var _initCore3 = function _initCore4(required) {
    if (_windowExists5() && document.body) {
      var nav = window && window.navigator;
      _win4 = window;
      _doc4 = document;
      _docElement3 = _doc4.documentElement;
      _body2 = _doc4.body;
      _tempDiv2 = _createElement3("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement3("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win4 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
      _addPaddingBR = function() {
        var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent2 = _body2, val;
        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent2.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent2.removeChild(div);
        return val;
      }();
      _touchEventLookup = function(types) {
        var standard = types.split(","), converted = ("onpointerdown" in _tempDiv2 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv2 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i2 = 4;
        while (--i2 > -1) {
          obj[standard[i2]] = converted[i2];
          obj[converted[i2]] = standard[i2];
        }
        try {
          _docElement3.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e2) {
        }
        return obj;
      }("touchstart,touchmove,touchend,touchcancel");
      _addListener(_doc4, "touchcancel", _emptyFunc3);
      _addListener(_win4, "touchmove", _emptyFunc3);
      _body2 && _body2.addEventListener("touchstart", _emptyFunc3);
      _addListener(_doc4, "contextmenu", function() {
        for (var p2 in _lookup) {
          if (_lookup[p2].isPressed) {
            _lookup[p2].endDrag();
          }
        }
      });
      gsap2 = _coreInitted2 = _getGSAP();
    }
    if (gsap2) {
      InertiaPlugin = gsap2.plugins.inertia;
      _context2 = gsap2.core.context || function() {
      };
      _checkPrefix = gsap2.utils.checkPrefix;
      _transformProp3 = _checkPrefix(_transformProp3);
      _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
      _toArray = gsap2.utils.toArray;
      _getStyleSaver3 = gsap2.core.getStyleSaver;
      _supports3D2 = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };
  var EventDispatcher = /* @__PURE__ */ function() {
    function EventDispatcher2(target) {
      this._listeners = {};
      this.target = target || this;
    }
    var _proto = EventDispatcher2.prototype;
    _proto.addEventListener = function addEventListener3(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);
      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };
    _proto.removeEventListener = function removeEventListener3(type, callback) {
      var list = this._listeners[type], i2 = list && list.indexOf(callback);
      i2 >= 0 && list.splice(i2, 1);
    };
    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;
      var result;
      (this._listeners[type] || []).forEach(function(callback) {
        return callback.call(_this, {
          type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };
    return EventDispatcher2;
  }();
  var Draggable = /* @__PURE__ */ function(_EventDispatcher) {
    _inheritsLoose2(Draggable2, _EventDispatcher);
    function Draggable2(target, vars) {
      var _this2;
      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted2 || _initCore3(1);
      target = _toArray(target)[0];
      _this2.styles = _getStyleSaver3 && _getStyleSaver3(target, "transform,left,top");
      if (!InertiaPlugin) {
        InertiaPlugin = gsap2.plugins.inertia;
      }
      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap2.getProperty(target, "x");
      var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized2(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap2.core.getCache(target), isFixed = _isFixed3(target), getPropAsNum = function getPropAsNum2(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      }, ownerDoc = target.ownerDocument || _doc4, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e2) {
        _preventDefault(e2);
        e2.stopImmediatePropagation && e2.stopImmediatePropagation();
        return false;
      }, render3 = function render4(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e2 = target, autoScrollFactor = self.autoScroll * 15, parent2, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win4.pageYOffset != null ? _win4.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win4.pageXOffset != null ? _win4.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;
          while (e2 && !isRoot) {
            isRoot = _isRoot(e2.parentNode);
            parent2 = isRoot ? _windowProxy : e2.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement3.clientHeight, _win4.innerHeight || 0),
              right: Math.max(_docElement3.clientWidth, _win4.innerWidth || 0),
              left: 0,
              top: 0
            } : parent2.getBoundingClientRect();
            changeX = changeY = 0;
            if (allowY) {
              gap = parent2._gsMaxScrollY - parent2.scrollTop;
              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent2.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent2.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }
              if (changeY) {
                parent2.scrollTop += changeY;
              }
            }
            if (allowX) {
              gap = parent2._gsMaxScrollX - parent2.scrollLeft;
              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent2.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent2.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }
              if (changeX) {
                parent2.scrollLeft += changeX;
              }
            }
            if (isRoot && (changeX || changeY)) {
              _win4.scrollTo(parent2.scrollLeft, parent2.scrollTop);
              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }
            e2 = parent2;
          }
        }
        if (dirty) {
          var x2 = self.x, y2 = self.y;
          if (rotationMode) {
            self.deltaX = x2 - parseFloat(gsCache.rotation);
            self.rotation = x2;
            gsCache.rotation = x2 + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y2 - scrollProxy.top();
                scrollProxy.top(y2);
              }
              if (allowX) {
                self.deltaX = x2 - scrollProxy.left();
                scrollProxy.left(x2);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y2 - parseFloat(gsCache.y);
                gsCache.y = y2 + "px";
              }
              if (allowX) {
                self.deltaX = x2 - parseFloat(gsCache.x);
                gsCache.x = x2 + "px";
              }
              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y2 - parseFloat(target.style.top || 0);
                target.style.top = y2 + "px";
              }
              if (allowX) {
                self.deltaX = x2 - parseFloat(target.style.left || 0);
                target.style.left = x2 + "px";
              }
            }
          }
          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;
            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }
              if (allowY) {
                self.y -= self.deltaY;
              }
              render4(true);
            }
            isDispatching = false;
          }
        }
        dirty = false;
      }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
        var x2 = self.x, y2 = self.y, snappedValue, cs;
        if (!target._gsap) {
          gsCache = gsap2.core.getCache(target);
        }
        gsCache.uncache && gsap2.getProperty(target, "x");
        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }
        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);
            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }
            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }
          if (snapX) {
            snappedValue = snapX(self.x);
            if (snappedValue !== self.x) {
              self.x = snappedValue;
              if (rotationMode) {
                self.rotation = snappedValue;
              }
              dirty = true;
            }
          }
          if (snapY) {
            snappedValue = snapY(self.y);
            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }
            dirty = true;
          }
        }
        dirty && render3(true);
        if (!skipOnUpdate) {
          self.deltaX = self.x - x2;
          self.deltaY = self.y - y2;
          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
        if (min == null) {
          min = -_bigNum3;
        }
        if (max == null) {
          max = _bigNum3;
        }
        if (_isFunction3(snap3)) {
          return function(n2) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap3.call(self, (n2 > max ? max + (n2 - max) * edgeTolerance : n2 < min ? min + (n2 - min) * edgeTolerance : n2) * factor) * factor;
          };
        }
        if (_isArray2(snap3)) {
          return function(n2) {
            var i2 = snap3.length, closest2 = 0, absDif = _bigNum3, val, dif;
            while (--i2 > -1) {
              val = snap3[i2];
              dif = val - n2;
              if (dif < 0) {
                dif = -dif;
              }
              if (dif < absDif && val >= min && val <= max) {
                closest2 = i2;
                absDif = dif;
              }
            }
            return snap3[closest2];
          };
        }
        return isNaN(snap3) ? function(n2) {
          return n2;
        } : function() {
          return snap3 * factor;
        };
      }, buildPointSnapFunc = function buildPointSnapFunc2(snap3, minX2, maxX2, minY2, maxY2, radius, factor) {
        radius = radius && radius < _bigNum3 ? radius * radius : _bigNum3;
        if (_isFunction3(snap3)) {
          return function(point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x2 = point.x, y2 = point.y, result, dx, dy;
            point.x = x2 = x2 > maxX2 ? maxX2 + (x2 - maxX2) * edgeTolerance : x2 < minX2 ? minX2 + (x2 - minX2) * edgeTolerance : x2;
            point.y = y2 = y2 > maxY2 ? maxY2 + (y2 - maxY2) * edgeTolerance : y2 < minY2 ? minY2 + (y2 - minY2) * edgeTolerance : y2;
            result = snap3.call(self, point);
            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }
            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }
            if (radius < _bigNum3) {
              dx = point.x - x2;
              dy = point.y - y2;
              if (dx * dx + dy * dy > radius) {
                point.x = x2;
                point.y = y2;
              }
            }
            return point;
          };
        }
        if (_isArray2(snap3)) {
          return function(p2) {
            var i2 = snap3.length, closest2 = 0, minDist = _bigNum3, x2, y2, point, dist;
            while (--i2 > -1) {
              point = snap3[i2];
              x2 = point.x - p2.x;
              y2 = point.y - p2.y;
              dist = x2 * x2 + y2 * y2;
              if (dist < minDist) {
                closest2 = i2;
                minDist = dist;
              }
            }
            return minDist <= radius ? snap3[closest2] : p2;
          };
        }
        return function(n2) {
          return n2;
        };
      }, calculateBounds = function calculateBounds2() {
        var bounds, targetBounds, snap3, snapIsRaw;
        hasBounds = false;
        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);
          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }
          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }
          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }
          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }
          hasBounds = true;
        }
        if (vars.liveSnap) {
          snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap3.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap3 : snap3.points, minX, maxX, minY, maxY, snap3.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.x || snap3.left || snap3.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }
              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap3 : snap3.y || snap3.top || snap3.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      }, onThrowComplete = function onThrowComplete2() {
        self.isThrowing = false;
        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      }, onThrowInterrupt = function onThrowInterrupt2() {
        self.isThrowing = false;
      }, animate = function animate2(inertia, forceZeroVelocity) {
        var snap3, snapIsRaw, tween, overshootTolerance;
        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap3 = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray2(snap3) || _isFunction3(snap3);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
            };
            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }
              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }
              if (snap3.points || _isArray2(snap3) && _isObject3(snap3[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap3.radius;
              }
            }
          }
          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject3(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }
          self.tween = tween = gsap2.to(scrollProxy || target, {
            inertia,
            data: "_draggable",
            inherit: false,
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
          });
          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }
            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;
            if (rotationMode) {
              self.endRotation = self.x;
            }
            tween.play(0);
            syncXY(true, true);
            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      }, updateMatrix = function updateMatrix2(shiftStart) {
        var start = matrix, p2;
        matrix = getGlobalMatrix(target.parentNode, true);
        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p2 = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p2, p2);
          startPointerX = p2.x;
          startPointerY = p2.y;
        }
        if (matrix.equals(_identityMatrix2)) {
          matrix = null;
        }
      }, recordStartPositions = function recordStartPositions2() {
        var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x2, y2;
        if (xyMode) {
          gsCache.x = getPropAsNum(xProp, "px") + "px";
          gsCache.y = getPropAsNum(yProp, "px") + "px";
          gsCache.renderTransform();
        }
        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;
        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render3(true);
        }
        innerMatrix = getGlobalMatrix(target);
        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening2()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }
          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp3] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x2 = self.pointerX - rotationOrigin.x - offsetX;
            y2 = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y2, x2) * _RAD2DEG2;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }
        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }
          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }
        self.startX = startElementX = _round3(startElementX);
        self.startY = startElementY = _round3(startElementY);
      }, isTweening2 = function isTweening3() {
        return self.tween && self.tween.isActive();
      }, removePlaceholder = function removePlaceholder2() {
        if (_placeholderDiv.parentNode && !isTweening2() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      }, onPress = function onPress2(e2, force) {
        var i2;
        if (!enabled || self.isPressed || !e2 || (e2.type === "mousedown" || e2.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        interrupted = isTweening2();
        dragged = false;
        self.pointerEvent = e2;
        if (_touchEventLookup[e2.type]) {
          touchEventTarget = ~e2.type.indexOf("touch") ? e2.currentTarget || e2.target : ownerDoc;
          _addListener(touchEventTarget, "touchend", onRelease);
          _addListener(touchEventTarget, "touchmove", onMove);
          _addListener(touchEventTarget, "touchcancel", onRelease);
          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;
          _addListener(ownerDoc, "mousemove", onMove);
        }
        touchDragAxis = null;
        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);
          e2 && e2.target && _addListener(e2.target, "mouseup", onRelease);
        }
        isClicking = isClickable.call(self, e2.target) && vars.dragClickables === false && !force;
        if (isClicking) {
          _addListener(e2.target, "change", onRelease);
          _dispatchEvent(self, "pressInit", "onPressInit");
          _dispatchEvent(self, "press", "onPress");
          _setSelectable(triggers, true);
          isPreventingDefault = false;
          return;
        }
        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e2 && (e2.ctrlKey || e2.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
        if (isPreventingDefault) {
          _preventDefault(e2);
          _addListener(_win4, "touchforcechange", _preventDefault);
        }
        if (e2.changedTouches) {
          e2 = touch = e2.changedTouches[0];
          touchID = e2.identifier;
        } else if (e2.pointerId) {
          touchID = e2.pointerId;
        } else {
          touch = touchID = null;
        }
        _dragCount++;
        _addToRenderQueue(render3);
        startPointerY = self.pointerY = e2.pageY;
        startPointerX = self.pointerX = e2.pageX;
        _dispatchEvent(self, "pressInit", "onPressInit");
        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }
        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }
        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap2.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap2.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;
        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable2.zIndex++;
        }
        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);
        if (vars.cursor !== false || vars.activeCursor) {
          i2 = triggers.length;
          while (--i2 > -1) {
            gsap2.set(triggers[i2], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }
        _dispatchEvent(self, "press", "onPress");
      }, onMove = function onMove2(e2) {
        var originalEvent = e2, touches, pointerX, pointerY, i2, dx, dy;
        if (!enabled || _isMultiTouching || !self.isPressed || !e2) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        self.pointerEvent = e2;
        touches = e2.changedTouches;
        if (touches) {
          e2 = touches[0];
          if (e2 !== touch && e2.identifier !== touchID) {
            i2 = touches.length;
            while (--i2 > -1 && (e2 = touches[i2]).identifier !== touchID && e2.target !== target) {
            }
            if (i2 < 0) {
              return;
            }
          }
        } else if (e2.pointerId && touchID && e2.pointerId !== touchID) {
          return;
        }
        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e2.pageX - (isFixed ? _getDocScrollLeft3(ownerDoc) : 0);
          _point1.y = e2.pageY - (isFixed ? _getDocScrollTop3(ownerDoc) : 0);
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);
          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";
            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win4, "touchforcechange", _preventDefault);
            }
            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction3(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }
            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }
        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }
        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }
        setPointerPosition(e2.pageX, e2.pageY, hasMoveCallback);
      }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x2, y2, dif, temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;
        if (isFixed) {
          pointerX -= _getDocScrollLeft3(ownerDoc);
          pointerY -= _getDocScrollTop3(ownerDoc);
        }
        if (rotationMode) {
          y2 = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG2;
          dif = self.y - y2;
          if (dif > 180) {
            startElementY -= 360;
            self.y = y2;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y2;
          }
          if (self.x !== startElementX || Math.abs(startElementY - y2) > minimumMovement) {
            self.y = y2;
            x2 = startElementX + (startElementY - y2) * dragTolerance;
          } else {
            x2 = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }
          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;
          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }
          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }
          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;
            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
              if (temp && _isFunction3(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }
            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }
          x2 = _round3(startElementX + xChange * dragTolerance);
          y2 = _round3(startElementY + yChange * dragTolerance);
        }
        if ((snapX || snapY || snapXY) && (self.x !== x2 || self.y !== y2 && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x2;
            _temp1.y = y2;
            temp = snapXY(_temp1);
            x2 = _round3(temp.x);
            y2 = _round3(temp.y);
          }
          if (snapX) {
            x2 = _round3(snapX(x2));
          }
          if (snapY) {
            y2 = _round3(snapY(y2));
          }
        }
        if (hasBounds) {
          if (x2 > maxX) {
            x2 = maxX + Math.round((x2 - maxX) * edgeTolerance);
          } else if (x2 < minX) {
            x2 = minX + Math.round((x2 - minX) * edgeTolerance);
          }
          if (!rotationMode) {
            if (y2 > maxY) {
              y2 = Math.round(maxY + (y2 - maxY) * edgeTolerance);
            } else if (y2 < minY) {
              y2 = Math.round(minY + (y2 - minY) * edgeTolerance);
            }
          }
        }
        if (self.x !== x2 || self.y !== y2 && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x2;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y2;
              dirty = true;
            }
            if (allowX) {
              self.x = self.endX = x2;
              dirty = true;
            }
          }
          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = dragged = true;
              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      }, onRelease = function onRelease2(e2, force) {
        if (!enabled || !self.isPressed || e2 && touchID != null && !force && (e2.pointerId && e2.pointerId !== touchID && e2.target !== target || e2.changedTouches && !_hasTouchID(e2.changedTouches, touchID))) {
          isPreventingDefault && e2 && enabled && _preventDefault(e2);
          return;
        }
        self.isPressed = false;
        var originalEvent = e2, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e2 && (e2.ctrlKey || e2.which > 2), placeholderDelayedCall = gsap2.delayedCall(1e-3, removePlaceholder), touches, i2, syntheticEvent, eventTarget, syntheticClick;
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease2);
          _removeListener(touchEventTarget, "touchmove", onMove);
          _removeListener(touchEventTarget, "touchcancel", onRelease2);
          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeListener(_win4, "touchforcechange", _preventDefault);
        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease2);
          e2 && e2.target && _removeListener(e2.target, "mouseup", onRelease2);
        }
        dirty = false;
        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }
        _removeFromRenderQueue(render3);
        if (isClicking && !isContextMenuRelease) {
          if (e2) {
            _removeListener(e2.target, "change", onRelease2);
            self.pointerEvent = originalEvent;
          }
          _setSelectable(triggers, false);
          _dispatchEvent(self, "release", "onRelease");
          _dispatchEvent(self, "click", "onClick");
          isClicking = false;
          return;
        }
        i2 = triggers.length;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
        }
        _dragCount--;
        if (e2) {
          touches = e2.changedTouches;
          if (touches) {
            e2 = touches[0];
            if (e2 !== touch && e2.identifier !== touchID) {
              i2 = touches.length;
              while (--i2 > -1 && (e2 = touches[i2]).identifier !== touchID && e2.target !== target) {
              }
              if (i2 < 0 && !force) {
                return;
              }
            }
          }
          self.pointerEvent = originalEvent;
          self.pointerX = e2.pageX;
          self.pointerY = e2.pageY;
        }
        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);
          isPreventingDefault = true;
          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;
          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }
          _dispatchEvent(self, "release", "onRelease");
          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");
            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }
            eventTarget = originalEvent.target || target;
            clickTime = _getTime();
            syntheticClick = function syntheticClick2() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win4, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };
            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap2.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);
          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;
            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }
          _dispatchEvent(self, "release", "onRelease");
        }
        isTweening2() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      }, updateScroll = function updateScroll2(e2) {
        if (e2 && self.isDragging && !scrollProxy) {
          var parent2 = e2.target || target.parentNode, deltaX = parent2.scrollLeft - parent2._gsScrollX, deltaY = parent2.scrollTop - parent2._gsScrollY;
          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }
            parent2._gsScrollX += deltaX;
            parent2._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      }, onClick2 = function onClick3(e2) {
        var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e2.isTrusted || e2.isTrusted == null && recentlyClicked && alreadyDispatched;
        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e2.stopImmediatePropagation) {
          e2.stopImmediatePropagation();
        }
        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }
          clickDispatch = clickTime;
          return;
        }
        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e2.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e2);
          }
        }
        if (!recentlyClicked && !recentlyDragged && !dragged) {
          e2 && e2.target && (self.pointerEvent = e2);
          _dispatchEvent(self, "click", "onClick");
        }
      }, localizePoint = function localizePoint2(p2) {
        return matrix ? {
          x: p2.x * matrix.a + p2.y * matrix.c + matrix.e,
          y: p2.x * matrix.b + p2.y * matrix.d + matrix.f
        } : {
          x: p2.x,
          y: p2.y
        };
      };
      old = Draggable2.get(target);
      old && old.kill();
      _this2.startDrag = function(event2, align) {
        var r1, r2, p1, p2;
        onPress(event2 || self.pointerEvent, true);
        if (align && !self.hitTest(event2 || self.pointerEvent)) {
          r1 = _parseRect(event2 || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }
        if (!self.isDragging) {
          self.isDragging = dragged = true;
          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };
      _this2.drag = onMove;
      _this2.endDrag = function(e2) {
        return onRelease(e2 || self.pointerEvent, true);
      };
      _this2.timeSinceDrag = function() {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
      };
      _this2.timeSinceClick = function() {
        return (_getTime() - clickTime) / 1e3;
      };
      _this2.hitTest = function(target2, threshold) {
        return Draggable2.hitTest(self.target, target2, threshold);
      };
      _this2.getDirection = function(from2, diagonalThreshold) {
        var mode = from2 === "velocity" && InertiaPlugin ? from2 : _isObject3(from2) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from2);
        }
        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }
            direction += yChange < 0 ? "up" : "down";
          }
        }
        return direction;
      };
      _this2.applyBounds = function(newBounds, sticky) {
        var x2, y2, forceZeroVelocity, e2, parent2, isRoot;
        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }
        syncXY(true);
        calculateBounds();
        if (hasBounds && !isTweening2()) {
          x2 = self.x;
          y2 = self.y;
          if (x2 > maxX) {
            x2 = maxX;
          } else if (x2 < minX) {
            x2 = minX;
          }
          if (y2 > maxY) {
            y2 = maxY;
          } else if (y2 < minY) {
            y2 = minY;
          }
          if (self.x !== x2 || self.y !== y2) {
            forceZeroVelocity = true;
            self.x = self.endX = x2;
            if (rotationMode) {
              self.endRotation = x2;
            } else {
              self.y = self.endY = y2;
            }
            dirty = true;
            render3(true);
            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);
              e2 = target;
              _windowProxy.scrollTop = _win4.pageYOffset != null ? _win4.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win4.pageXOffset != null ? _win4.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
              while (e2 && !isRoot) {
                isRoot = _isRoot(e2.parentNode);
                parent2 = isRoot ? _windowProxy : e2.parentNode;
                if (allowY && parent2.scrollTop > parent2._gsMaxScrollY) {
                  parent2.scrollTop = parent2._gsMaxScrollY;
                }
                if (allowX && parent2.scrollLeft > parent2._gsMaxScrollX) {
                  parent2.scrollLeft = parent2._gsMaxScrollX;
                }
                e2 = parent2;
              }
            }
          }
          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }
        return self;
      };
      _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
        if (sticky && self.isPressed) {
          var m2 = getGlobalMatrix(target), p2 = innerMatrix.apply({
            x: self.x - startElementX,
            y: self.y - startElementY
          }), m22 = getGlobalMatrix(target.parentNode, true);
          m22.apply({
            x: m2.e - p2.x,
            y: m2.f - p2.y
          }, p2);
          self.x -= p2.x - m22.e;
          self.y -= p2.y - m22.f;
          render3(true);
          recordStartPositions();
        }
        var x2 = self.x, y2 = self.y;
        updateMatrix(!sticky);
        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render3(true);
          syncXY(true);
        }
        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render3(true);
        }
        if (self.isPressed && !sticky && (allowX && Math.abs(x2 - self.x) > 0.01 || allowY && Math.abs(y2 - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }
        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);
          checkAutoScrollBounds = self.isDragging;
          render3(true);
          _removeScrollListener(target, updateScroll);
          _addScrollListener(target, updateScroll);
        }
        return self;
      };
      _this2.enable = function(type2) {
        var setVars = {
          lazy: true
        }, id, i2, trigger;
        if (vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }
        if (gsap2.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
          i2 = triggers.length;
          while (--i2 > -1) {
            trigger = triggers[i2];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);
            _addListener(trigger, "touchstart", onPress);
            _addListener(trigger, "click", onClick2, true);
            gsap2.set(trigger, setVars);
            if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
              gsap2.set(trigger.ownerSVGElement, {
                touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }
            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, false);
        }
        _addScrollListener(target, updateScroll);
        enabled = true;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }
        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;
        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }
        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };
      _this2.disable = function(type2) {
        var dragging = self.isDragging, i2 = triggers.length, trigger;
        while (--i2 > -1) {
          _setStyle(triggers[i2], "cursor", null);
        }
        if (type2 !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);
          i2 = triggers.length;
          while (--i2 > -1) {
            trigger = triggers[i2];
            _setStyle(trigger, "touchCallout", null);
            _removeListener(trigger, "mousedown", onPress);
            _removeListener(trigger, "touchstart", onPress);
            _removeListener(trigger, "click", onClick2, true);
            _removeListener(trigger, "contextmenu", onContextMenu);
          }
          _setSelectable(triggers, true);
          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);
            _removeListener(touchEventTarget, "touchend", onRelease);
            _removeListener(touchEventTarget, "touchmove", onMove);
          }
          _removeListener(ownerDoc, "mouseup", onRelease);
          _removeListener(ownerDoc, "mousemove", onMove);
        }
        _removeScrollListener(target, updateScroll);
        enabled = false;
        if (InertiaPlugin && type2 !== "soft") {
          InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
          self.tween && self.tween.kill();
        }
        scrollProxy && scrollProxy.disable();
        _removeFromRenderQueue(render3);
        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };
      _this2.enabled = function(value, type2) {
        return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
      };
      _this2.kill = function() {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap2.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };
      _this2.revert = function() {
        this.kill();
        this.styles && this.styles.revert();
      };
      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }
      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }
        if (allowY) {
          killProps[yProp] = 1;
        }
      }
      gsCache.force3D = "force3D" in vars ? vars.force3D : true;
      _context2(_assertThisInitialized2(_this2));
      _this2.enable();
      return _this2;
    }
    Draggable2.register = function register(core) {
      gsap2 = core;
      _initCore3();
    };
    Draggable2.create = function create(targets, vars) {
      _coreInitted2 || _initCore3(true);
      return _toArray(targets).map(function(target) {
        return new Draggable2(target, vars);
      });
    };
    Draggable2.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };
    Draggable2.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1e3;
    };
    Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }
      var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
      if (isOutside || !threshold) {
        return !isOutside;
      }
      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }
      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }
      return overlap.width > threshold && overlap.height > threshold;
    };
    return Draggable2;
  }(EventDispatcher);
  _setDefaults3(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });
  Draggable.zIndex = 1e3;
  Draggable.version = "3.12.5";
  _getGSAP() && gsap2.registerPlugin(Draggable);

  // node_modules/gsap/Observer.js
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap3;
  var _coreInitted3;
  var _clamp3;
  var _win5;
  var _doc5;
  var _docEl;
  var _body3;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context3;
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || typeof window !== "undefined" && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime2 = Date.now;
  var _bridge = function _bridge2(name, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name, value) {
      return data[name](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener3 = function _addListener4(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f2, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win5.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f2(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f2();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f2 && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win5.scrollTo(value, _vertical.sc()) : _win5.pageXOffset || _doc5[_scrollLeft] || _docEl[_scrollLeft] || _body3[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win5.scrollTo(_horizontal.sc(), value) : _win5.pageYOffset || _doc5[_scrollTop] || _docEl[_scrollTop] || _body3[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t2, self) {
    return (self && self._ctx && self._ctx.selector || gsap3.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap3.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc5.scrollingElement || _docEl);
    var i2 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i2 && (i2 = _scrollers.push(element) - 1);
    _scrollers[i2 + offset] || _addListener3(element, "scroll", _onScroll);
    var prev = _scrollers[i2 + offset], func = prev || (_scrollers[i2 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap3.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime2(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update2 = function update3(value2, force) {
      var t3 = _getTime2();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime2();
      (latestValue || latestValue === 0) && latestValue !== v1 && update2(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update: update2,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e2, preventDefault2) {
    preventDefault2 && !e2._gsapAllow && e2.preventDefault();
    return e2.changedTouches ? e2.changedTouches[0] : e2;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a2) {
    var max = Math.max.apply(Math, a2), min = Math.min.apply(Math, a2);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap3.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore5 = function _initCore6(core) {
    gsap3 = core || _getGSAP3();
    if (!_coreInitted3 && gsap3 && typeof document !== "undefined" && document.body) {
      _win5 = window;
      _doc5 = document;
      _docEl = _doc5.documentElement;
      _body3 = _doc5.body;
      _root = [_win5, _doc5, _docEl, _body3];
      _clamp3 = gsap3.utils.clamp;
      _context3 = gsap3.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win5.matchMedia && _win5.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win5 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted3 = 1;
    }
    return _coreInitted3;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer3(vars) {
      this.init(vars);
    }
    var _proto = Observer3.prototype;
    _proto.init = function init4(vars) {
      _coreInitted3 || _initCore5(gsap3) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce3 = vars.debounce, preventDefault2 = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event2 = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick2 = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap3.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce3 = debounce3 !== false;
      lineHeight || (lineHeight = parseFloat(_win5.getComputedStyle(_body3).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault2, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc5, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime2();
      }, _ignoreCheck = function _ignoreCheck2(e2, isPointerOrTouch) {
        return (self.event = e2) && ignore && ~ignore.indexOf(e2.target) || isPointerOrTouch && limitToTouch && e2.pointerType !== "touch" || ignoreCheck && ignoreCheck(e2, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self._vx.reset();
        self._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self);
      }, update2 = function update3() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self);
          if (dragged) {
            onDrag(self);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self);
        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x2, y2, index) {
        deltaX[index] += x2;
        deltaY[index] += y2;
        self._vx.update(x2);
        self._vy.update(y2);
        debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x2, y2) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x2) > Math.abs(y2) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x2;
          self._vx.update(x2, true);
        }
        if (axis !== "x") {
          deltaY[2] += y2;
          self._vy.update(y2, true);
        }
        debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
      }, _onDrag = function _onDrag2(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault2);
        var x2 = e2.clientX, y2 = e2.clientY, dx = x2 - self.x, dy = y2 - self.y, isDragging = self.isDragging;
        self.x = x2;
        self.y = y2;
        if (isDragging || Math.abs(self.startX - x2) >= dragMinimum || Math.abs(self.startY - y2) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      }, _onPress = self.onPress = function(e2) {
        if (_ignoreCheck(e2, 1) || e2 && e2.button) {
          return;
        }
        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e2 = _getEvent(e2);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e2.clientX;
        self.startY = self.y = e2.clientY;
        self._vx.reset();
        self._vy.reset();
        _addListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      }, _onRelease = self.onRelease = function(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        _removeListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e2);
        if (!isDragNotClick && isTrackingDrag) {
          self._vx.reset();
          self._vy.reset();
          if (preventDefault2 && allowClicks) {
            gsap3.delayedCall(0.08, function() {
              if (_getTime2() - onClickTime > 300 && !e2.defaultPrevented) {
                if (e2.target.click) {
                  e2.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win5, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e2.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e2) {
        return e2.touches && e2.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e2, self.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self.isGesturing = false) || onGestureEnd(self);
      }, onScroll2 = function onScroll3(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x2 = scrollFuncX(), y2 = scrollFuncY();
        onDelta((x2 - scrollX) * scrollSpeed, (y2 - scrollY) * scrollSpeed, 1);
        scrollX = x2;
        scrollY = y2;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault2);
        onWheel && (wheeled = true);
        var multiplier = (e2.deltaMode === 1 ? lineHeight : e2.deltaMode === 2 ? _win5.innerHeight : 1) * wheelSpeed;
        onDelta(e2.deltaX * multiplier, e2.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x2 = e2.clientX, y2 = e2.clientY, dx = x2 - self.x, dy = y2 - self.y;
        self.x = x2;
        self.y = y2;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e2) {
        self.event = e2;
        onHover(self);
      }, _onHoverEnd = function _onHoverEnd2(e2) {
        self.event = e2;
        onHoverEnd(self);
      }, _onClick = function _onClick2(e2) {
        return _ignoreCheck(e2) || _getEvent(e2, preventDefault2) && onClick2(self);
      };
      onStopDelayedCall = self._dc = gsap3.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;
      _context3(this);
      self.enable = function(e2) {
        if (!self.isEnabled) {
          _addListener3(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener3(isViewport ? ownerDoc : target, "scroll", onScroll2, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener3(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener3(target, _eventTypes[0], _onPress, passive, capture);
            _addListener3(ownerDoc, _eventTypes[2], _onRelease);
            _addListener3(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener3(target, "click", clickCapture, true, true);
            onClick2 && _addListener3(target, "click", _onClick);
            onGestureStart && _addListener3(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener3(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener3(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener3(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener3(target, _pointerType + "move", _onMove);
          }
          self.isEnabled = true;
          e2 && e2.type && _onPress(e2);
          onEnable && onEnable(self);
        }
        return self;
      };
      self.disable = function() {
        if (self.isEnabled) {
          _observers.filter(function(o2) {
            return o2 !== self && _isViewport(o2.target);
          }).length || _removeListener3(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self.isPressed) {
            self._vx.reset();
            self._vy.reset();
            _removeListener3(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener3(isViewport ? ownerDoc : target, "scroll", onScroll2, capture);
          _removeListener3(target, "wheel", _onWheel, capture);
          _removeListener3(target, _eventTypes[0], _onPress, capture);
          _removeListener3(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener3(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener3(target, "click", clickCapture, true);
          _removeListener3(target, "click", _onClick);
          _removeListener3(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener3(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener3(target, _pointerType + "enter", _onHover);
          _removeListener3(target, _pointerType + "leave", _onHoverEnd);
          _removeListener3(target, _pointerType + "move", _onMove);
          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };
      self.kill = self.revert = function() {
        self.disable();
        var i2 = _observers.indexOf(self);
        i2 >= 0 && _observers.splice(i2, 1);
        _normalizer === self && (_normalizer = 0);
      };
      _observers.push(self);
      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event2);
    };
    _createClass(Observer3, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer3;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore5;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o2) {
      return o2.vars.id === id;
    })[0];
  };
  _getGSAP3() && gsap3.registerPlugin(Observer);

  // node_modules/gsap/ScrollTrigger.js
  var gsap4;
  var _coreInitted4;
  var _win6;
  var _doc6;
  var _docEl2;
  var _body4;
  var _root2;
  var _resizeDelay;
  var _toArray2;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp4;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context4;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime3 = Date.now;
  var _time1 = _getTime3();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self) {
    var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp4) {
    return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v2) {
    return v2;
  };
  var _round5 = function _round6(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists7 = function _windowExists8() {
    return typeof window !== "undefined";
  };
  var _getGSAP5 = function _getGSAP6() {
    return gsap4 || _windowExists7() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
  };
  var _isViewport3 = function _isViewport4(e2) {
    return !!~_root2.indexOf(e2);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win6["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body4["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win6.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds3(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d2 = _ref.d, d22 = _ref.d2, a2 = _ref.a;
    return (a2 = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a2()[d2];
    } : function() {
      return (isViewport ? _getViewportDimension(d22) : scroller["client" + d22]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s2 = _ref2.s, d2 = _ref2.d2, d3 = _ref2.d, a2 = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a2 = _getProxyProp(element, s2)) ? a2() - _getBoundsFunc(element)()[d3] : _isViewport3(element) ? (_docEl2[s2] || _body4[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events2) {
    for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
      (!events2 || ~events2.indexOf(_autoRefresh[i2 + 1])) && func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction5 = function _isFunction6(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject5 = function _isObject6(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self, func) {
    if (self.enabled) {
      var result = self._ctx ? self._ctx.add(function() {
        return func(self);
      }) : func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle3 = function _getComputedStyle4(element) {
    return _win6.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle3(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults5 = function _setDefaults6(obj, defaults3) {
    for (var p2 in defaults3) {
      p2 in obj || (obj[p2] = defaults3[p2]);
    }
    return obj;
  };
  var _getBounds3 = function _getBounds4(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle3(element)[_transformProp4] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap4.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a2 = [], labels = timeline2.labels, duration = timeline2.duration(), p2;
    for (p2 in labels) {
      a2.push(labels[p2] / duration);
    }
    return a2;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap4.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap4.utils.snap(snapIncrementOrArray), a2 = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a3, b2) {
      return a3 - b2;
    });
    return a2 ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i2;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i2 = 0; i2 < a2.length; i2++) {
          if (a2[i2] >= value) {
            return a2[i2];
          }
        }
        return a2[i2 - 1];
      } else {
        i2 = a2.length;
        value += threshold;
        while (i2--) {
          if (a2[i2] <= value) {
            return a2[i2];
          }
        }
      }
      return a2[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st2) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st2.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener5 = function _addListener6(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener5 = function _removeListener6(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e2 = _doc6.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent2 = useFixedPosition ? _body4 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e2._isStart = isStart;
    e2.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e2.style.cssText = css;
    e2.innerText = name || name === 0 ? type + "-" + name : type;
    parent2.children[0] ? parent2.insertBefore(e2, parent2.children[0]) : parent2.appendChild(e2);
    e2._offset = e2["offset" + direction.op.d2];
    _positionMarker(e2, 0, direction, isStart);
    return e2;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap4.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime3() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body4.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime3();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win6.innerWidth;
    _baseScreenHeight = _win6.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc6.fullscreenElement && !_doc6.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win6.innerWidth || Math.abs(_win6.innerHeight - _baseScreenHeight) > _win6.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener5(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f2) {
      return f2();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
      if (!media || _savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media) {
        _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
        _savedStyles[i2].getBBox && _savedStyles[i2].setAttribute("transform", _savedStyles[i2 + 2] || "");
        _savedStyles[i2 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction5(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win6.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body4.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win6.innerHeight;
    _body4.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray2(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener5(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction5(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction5(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t2) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t2) {
      var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
      (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction5(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t2) {
      return _isFunction5(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime3(), recordVelocity = time - _time1 >= 50, scroll = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent2 = spacer.parentNode;
      if (parent2) {
        parent2.insertBefore(pin, spacer);
        parent2.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i2 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
      while (i2--) {
        p2 = _propNamesToCopy[i2];
        spacerStyle[p2] = cs[p2];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l2 = state.length, i2 = 0, p2, value;
      (state.t._gsap || gsap4.core.getCache(state.t)).uncache = 1;
      for (; i2 < l2; i2 += 2) {
        value = state[i2 + 1];
        p2 = state[i2];
        if (value) {
          style[p2] = value;
        } else if (style[p2]) {
          style.removeProperty(p2.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i2 = 0;
    for (; i2 < l2; i2++) {
      state.push(_stateProps[i2], style[_stateProps[i2]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i2 = omitOffsets ? 8 : 0, p2;
    for (; i2 < l2; i2 += 2) {
      p2 = state[i2];
      result.push(p2, p2 in override ? override[p2] : state[i2 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction5(value) && (value = value(self));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber3(value)) {
      _isFunction5(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self) || _body4;
      bounds = _getBounds3(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle3(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds3(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap4.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body4[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds3(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds3(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds3(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent2, top, left) {
    if (element.parentNode !== parent2) {
      var style = element.style, p2, cs;
      if (parent2 === _body4) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle3(element);
        for (p2 in cs) {
          if (!+p2 && !_prefixExp.test(p2) && cs[p2] && typeof style[p2] === "string" && p2 !== "0") {
            style[p2] = cs[p2];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap4.core.getCache(element).uncache = 1;
      parent2.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap4.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap4.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener5(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener5(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted4 || ScrollTrigger3.register(gsap4) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context4(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults5(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win6), scrollerCache = gsap4.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle3(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self.scrubDuration = function(value) {
        scrubSmooth = _isNumber3(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap4.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject5(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body4.style && gsap4.set(isViewport ? [_body4, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o2) {
          return _isFunction5(o2) && o2.target === (isViewport ? _doc6.scrollingElement || _docEl2 : scroller) && (o2.smooth = false);
        });
        snapFunc = _isFunction5(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st2) {
          return _snapDirectional(snap3.snapTo)(value, _getTime3() - lastRefresh < 500 ? 0 : st2.direction);
        } : gsap4.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject5(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap4.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime3() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime3() - _time2) * 1e3 || 0, change1 = gsap4.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self);
            _isNumber3(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle3(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap4.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc6.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap4.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle3(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap4.getProperty(pin);
        pinSetter = gsap4.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject5(markers) ? _setDefaults5(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap4.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body4 : scroller);
          gsap4.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap4.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap4.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self.previous = function() {
        return _triggers[_triggers.indexOf(self) - 1];
      };
      self.next = function() {
        return _triggers[_triggers.indexOf(self) + 1];
      };
      self.revert = function(revert, temp) {
        if (!temp) {
          return self.kill(true);
        }
        var r2 = revert !== false || !self.enabled, prevRefreshing = _refreshing;
        if (r2 !== self.isReverted) {
          if (r2) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
            return m2.style.display = r2 ? "none" : "block";
          });
          if (r2) {
            _refreshing = self;
            self.update(r2);
          }
          if (pin && (!pinReparent || !self.isActive)) {
            if (r2) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle3(pin), spacerState);
            }
          }
          r2 || self.update(r2);
          _refreshing = prevRefreshing;
          self.isReverted = r2;
        }
      };
      self.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener5(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject5(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject5(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i2 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject5(position)) {
          markerStartOffset = gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap4.getProperty(markerEndTrigger, direction.p);
        }
        while (i2--) {
          curTrigger = _triggers[i2];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i2]) {
            triggerIndex--;
            i2--;
          }
        }
        _isFunction5(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction5(parsedEnd) && (parsedEnd = parsedEnd(self));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap4.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i2 = triggerIndex;
        while (i2--) {
          curTrigger = _triggers[i2];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self._startClamp && (self._startClamp += offset2);
        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap4.utils.clamp(0, 1, gsap4.utils.normalize(start, end, prevScroll));
        }
        self._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap4.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle3(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc6.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle3(_body4)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds3(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i2 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i2) {
              spacerState.push(direction.d, i2 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i2 = _getSize(pin, direction);
            i2 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i2 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body4) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }
        self.revert(false, true);
        lastRefresh = _getTime3();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap4.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap4.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap4.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };
      self.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime3() - _time2) * 1e3 || 0;
      };
      self.endAnimation = function() {
        _endAnimation(self.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };
      self.labelToScroll = function(label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self.getTrailing = function(name) {
        var i2 = _triggers.indexOf(self), a2 = self.direction > 0 ? _triggers.slice(0, i2).reverse() : _triggers.slice(i2 + 1);
        return (_isString3(name) ? a2.filter(function(t2) {
          return t2.vars.preventOverlaps === name;
        }) : a2).filter(function(t2) {
          return self.direction > 0 ? t2.end <= start : t2.start >= end;
        });
      };
      self.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p2 = reset ? 0 : (scroll - start) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime3() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime3() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self.direction = clipped > prevProgress2 ? 1 : -1;
          self.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction5(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round5(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds3(pin, true), _offset = scroll - start;
                  _reparent(pin, _body4, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray2(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self, onToggle);
              callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }
        if (markerEndSetter) {
          var n2 = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n2);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self.enable = function(reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;
          _addListener5(scroller, "resize", _onResize);
          isViewport || _addListener5(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener5(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self.refresh();
        }
      };
      self.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st2 = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st2.end - st2.start;
          newStart = st2.start + _change * newStart / duration;
          newEnd = st2.start + _change * newEnd / duration;
        }
        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };
      self.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i2 = spacerState.indexOf(direction.d) + 1;
          spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self.disable = function(reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener5(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i2 = _triggers.length;
            while (i2--) {
              if (_triggers[i2].scroller === scroller && _triggers[i2] !== self) {
                return;
              }
            }
            _removeListener5(scroller, "resize", _onResize);
            isViewport || _removeListener5(scroller, "scroll", _onScroll3);
          }
        }
      };
      self.kill = function(revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i2 = _triggers.indexOf(self);
        i2 >= 0 && _triggers.splice(i2, 1);
        i2 === _i && _direction > 0 && _i--;
        i2 = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self.scroller && (i2 = 1);
        });
        i2 || _refreshingAll || (self.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
          return m2.parentNode && m2.parentNode.removeChild(m2);
        });
        _primary === self && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i2 = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i2++;
          });
          i2 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self);
      };
      _triggers.push(self);
      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      if (animation && animation.add && !change) {
        var updateFunc = self.update;
        self.update = function() {
          self.update = updateFunc;
          start || end || self.refresh();
        };
        gsap4.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted4) {
        gsap4 = core || _getGSAP5();
        _windowExists7() && window.document && ScrollTrigger3.enable();
        _coreInitted4 = _enabled;
      }
      return _coreInitted4;
    };
    ScrollTrigger3.defaults = function defaults3(config3) {
      if (config3) {
        for (var p2 in config3) {
          _defaults2[p2] = config3[p2];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener5(_win6, "wheel", _onScroll3);
      _removeListener5(_doc6, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener5(_doc6, "touchcancel", _passThrough3);
      _removeListener5(_body4, "touchstart", _passThrough3);
      _multiListener(_removeListener5, _doc6, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener5, _doc6, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener5);
      for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
        _wheelListener(_removeListener5, _scrollers[i2], _scrollers[i2 + 1]);
        _wheelListener(_removeListener5, _scrollers[i2], _scrollers[i2 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win6 = window;
      _doc6 = document;
      _docEl2 = _doc6.documentElement;
      _body4 = _doc6.body;
      if (gsap4) {
        _toArray2 = gsap4.utils.toArray;
        _clamp4 = gsap4.utils.clamp;
        _context4 = gsap4.core.context || _passThrough3;
        _suppressOverwrites2 = gsap4.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win6.history.scrollRestoration || "auto";
        _lastScroll = _win6.pageYOffset;
        gsap4.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body4) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap4);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener5(_win6, "wheel", _onScroll3);
          _root2 = [_win6, _doc6, _docEl2, _body4];
          if (gsap4.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap4.matchMedia(), p2;
              for (p2 in vars) {
                mm.add(p2, vars[p2]);
              }
              return mm;
            };
            gsap4.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap4.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap4.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap4.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener5(_doc6, "scroll", _onScroll3);
          var bodyStyle = _body4.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap4.core.Animation.prototype, bounds, i2;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds3(_body4);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap4.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener5(_doc6, "touchcancel", _passThrough3);
          _addListener5(_body4, "touchstart", _passThrough3);
          _multiListener(_addListener5, _doc6, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener5, _doc6, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp4 = gsap4.utils.checkPrefix("transform");
          _stateProps.push(_transformProp4);
          _coreInitted4 = _getTime3();
          _resizeDelay = gsap4.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc6, "visibilitychange", function() {
            var w2 = _win6.innerWidth, h2 = _win6.innerHeight;
            if (_doc6.hidden) {
              _prevWidth = w2;
              _prevHeight = h2;
            } else if (_prevWidth !== w2 || _prevHeight !== h2) {
              _onResize();
            }
          }, _doc6, "DOMContentLoaded", _refreshAll, _win6, "load", _refreshAll, _win6, "resize", _onResize];
          _iterateAutoRefresh(_addListener5);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
            _wheelListener(_removeListener5, _scrollers[i2], _scrollers[i2 + 1]);
            _wheelListener(_removeListener5, _scrollers[i2], _scrollers[i2 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener5) || _iterateAutoRefresh(_addListener5, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t2 = _getTarget(target), i2 = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i2) {
        _scrollers.splice(i2, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win6, vars, _body4, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win6.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win6.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win6.innerWidth : (bounds.top + offset) / _win6.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f2) {
          return f2();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray2(targets).forEach(function(target) {
      if (target && target.style) {
        var i2 = _savedStyles.indexOf(target);
        i2 >= 0 && _savedStyles.splice(i2, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap4.core.getCache(target), _context4());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted4 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a2 = _listeners2[type] || (_listeners2[type] = []);
    ~a2.indexOf(callback) || a2.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a2 = _listeners2[type], i2 = a2 && a2.indexOf(callback);
    i2 >= 0 && a2.splice(i2, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap4.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p2;
    for (p2 in vars) {
      varsCopy[p2] = p2.substr(0, 2) === "on" && _isFunction5(vars[p2]) && p2 !== "onRefreshInit" ? proxyCallback(p2, vars[p2]) : vars[p2];
    }
    if (_isFunction5(batchMax)) {
      batchMax = batchMax();
      _addListener5(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray2(targets).forEach(function(target) {
      var config3 = {};
      for (p2 in varsCopy) {
        config3[p2] = varsCopy[p2];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body4, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event2 = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event2.changedTouches ? event2.changedTouches[0] : event2).target, cache = node._gsap || gsap4.core.getCache(node), time = _getTime3(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body4 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle3(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle3(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event2.stopPropagation();
      event2._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener5(_doc6, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener5(_doc6, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e2) {
    var isInput = _inputExp.test(e2.target.tagName);
    if (isInput || _inputIsFocused) {
      e2._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject5(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap4.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win6.visualViewport ? _win6.visualViewport.scale * _win6.visualViewport.width : _win6.outerWidth) / _win6.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction5(momentum) ? function() {
      return momentum(self);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round5(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round5(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y2 = _round5((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y2 + ", 0, 1)";
          content._gsap.y = y2 + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize2 = function onResize3() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap4.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e2) {
      return _fixIOSBug && e2.type === "touchmove" && ignoreDrag(e2) || scale > 1.05 && e2.type !== "touchstart" || self.isGesturing || e2.touches && e2.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round5((_win6.visualViewport && _win6.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap4.to({}, {
            onUpdate: onResize2,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self2);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime3() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime3();
      }
    };
    vars.onChange = function(self2, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y2 = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y2);
        isTouch && y2 !== yClamped && (startScrollY += yClamped - y2);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize2);
      _addListener5(_win6, "resize", onResize2);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener5(_win6, "resize", onResize2);
      ScrollTrigger2.removeEventListener("refresh", onResize2);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap4.ticker.add(_passThrough3);
    onStopDelayedCall = self._dc;
    tween = gsap4.to(self, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a2, b2) {
      return (a2.vars.refreshPriority || 0) * -1e6 + a2.start - (b2.start + (b2.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime3();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP5() && gsap4.registerPlugin(ScrollTrigger2);

  // node_modules/@googlemaps/markerclusterer/dist/index.esm.js
  var import_fast_deep_equal = __toESM(require_fast_deep_equal());

  // node_modules/kdbush/index.js
  var ARRAY_TYPES = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ];
  var VERSION = 1;
  var HEADER_SIZE = 8;
  var KDBush = class _KDBush {
    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */
    static from(data) {
      if (!(data instanceof ArrayBuffer)) {
        throw new Error("Data must be an instance of ArrayBuffer.");
      }
      const [magic, versionAndType] = new Uint8Array(data, 0, 2);
      if (magic !== 219) {
        throw new Error("Data does not appear to be in a KDBush format.");
      }
      const version2 = versionAndType >> 4;
      if (version2 !== VERSION) {
        throw new Error(`Got v${version2} data when expected v${VERSION}.`);
      }
      const ArrayType = ARRAY_TYPES[versionAndType & 15];
      if (!ArrayType) {
        throw new Error("Unrecognized array type.");
      }
      const [nodeSize] = new Uint16Array(data, 2, 1);
      const [numItems] = new Uint32Array(data, 4, 1);
      return new _KDBush(numItems, nodeSize, ArrayType, data);
    }
    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */
    constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data) {
      if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);
      this.numItems = +numItems;
      this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
      this.ArrayType = ArrayType;
      this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
      const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
      const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
      const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
      const padCoords = (8 - idsByteSize % 8) % 8;
      if (arrayTypeIndex < 0) {
        throw new Error(`Unexpected typed array class: ${ArrayType}.`);
      }
      if (data && data instanceof ArrayBuffer) {
        this.data = data;
        this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
        this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
        this._pos = numItems * 2;
        this._finished = true;
      } else {
        this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
        this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
        this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
        this._pos = 0;
        this._finished = false;
        new Uint8Array(this.data, 0, 2).set([219, (VERSION << 4) + arrayTypeIndex]);
        new Uint16Array(this.data, 2, 1)[0] = nodeSize;
        new Uint32Array(this.data, 4, 1)[0] = numItems;
      }
    }
    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */
    add(x2, y2) {
      const index = this._pos >> 1;
      this.ids[index] = index;
      this.coords[this._pos++] = x2;
      this.coords[this._pos++] = y2;
      return index;
    }
    /**
     * Perform indexing of the added points.
     */
    finish() {
      const numAdded = this._pos >> 1;
      if (numAdded !== this.numItems) {
        throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
      }
      sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
      this._finished = true;
      return this;
    }
    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */
    range(minX, minY, maxX, maxY) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids, coords, nodeSize } = this;
      const stack = [0, ids.length - 1, 0];
      const result = [];
      while (stack.length) {
        const axis = stack.pop() || 0;
        const right = stack.pop() || 0;
        const left = stack.pop() || 0;
        if (right - left <= nodeSize) {
          for (let i2 = left; i2 <= right; i2++) {
            const x3 = coords[2 * i2];
            const y3 = coords[2 * i2 + 1];
            if (x3 >= minX && x3 <= maxX && y3 >= minY && y3 <= maxY) result.push(ids[i2]);
          }
          continue;
        }
        const m2 = left + right >> 1;
        const x2 = coords[2 * m2];
        const y2 = coords[2 * m2 + 1];
        if (x2 >= minX && x2 <= maxX && y2 >= minY && y2 <= maxY) result.push(ids[m2]);
        if (axis === 0 ? minX <= x2 : minY <= y2) {
          stack.push(left);
          stack.push(m2 - 1);
          stack.push(1 - axis);
        }
        if (axis === 0 ? maxX >= x2 : maxY >= y2) {
          stack.push(m2 + 1);
          stack.push(right);
          stack.push(1 - axis);
        }
      }
      return result;
    }
    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */
    within(qx, qy, r2) {
      if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
      const { ids, coords, nodeSize } = this;
      const stack = [0, ids.length - 1, 0];
      const result = [];
      const r22 = r2 * r2;
      while (stack.length) {
        const axis = stack.pop() || 0;
        const right = stack.pop() || 0;
        const left = stack.pop() || 0;
        if (right - left <= nodeSize) {
          for (let i2 = left; i2 <= right; i2++) {
            if (sqDist(coords[2 * i2], coords[2 * i2 + 1], qx, qy) <= r22) result.push(ids[i2]);
          }
          continue;
        }
        const m2 = left + right >> 1;
        const x2 = coords[2 * m2];
        const y2 = coords[2 * m2 + 1];
        if (sqDist(x2, y2, qx, qy) <= r22) result.push(ids[m2]);
        if (axis === 0 ? qx - r2 <= x2 : qy - r2 <= y2) {
          stack.push(left);
          stack.push(m2 - 1);
          stack.push(1 - axis);
        }
        if (axis === 0 ? qx + r2 >= x2 : qy + r2 >= y2) {
          stack.push(m2 + 1);
          stack.push(right);
          stack.push(1 - axis);
        }
      }
      return result;
    }
  };
  function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;
    const m2 = left + right >> 1;
    select(ids, coords, m2, left, right, axis);
    sort(ids, coords, nodeSize, left, m2 - 1, 1 - axis);
    sort(ids, coords, nodeSize, m2 + 1, right, 1 - axis);
  }
  function select(ids, coords, k2, left, right, axis) {
    while (right > left) {
      if (right - left > 600) {
        const n2 = right - left + 1;
        const m2 = k2 - left + 1;
        const z2 = Math.log(n2);
        const s2 = 0.5 * Math.exp(2 * z2 / 3);
        const sd = 0.5 * Math.sqrt(z2 * s2 * (n2 - s2) / n2) * (m2 - n2 / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k2 - m2 * s2 / n2 + sd));
        const newRight = Math.min(right, Math.floor(k2 + (n2 - m2) * s2 / n2 + sd));
        select(ids, coords, k2, newLeft, newRight, axis);
      }
      const t2 = coords[2 * k2 + axis];
      let i2 = left;
      let j2 = right;
      swapItem(ids, coords, left, k2);
      if (coords[2 * right + axis] > t2) swapItem(ids, coords, left, right);
      while (i2 < j2) {
        swapItem(ids, coords, i2, j2);
        i2++;
        j2--;
        while (coords[2 * i2 + axis] < t2) i2++;
        while (coords[2 * j2 + axis] > t2) j2--;
      }
      if (coords[2 * left + axis] === t2) swapItem(ids, coords, left, j2);
      else {
        j2++;
        swapItem(ids, coords, j2, right);
      }
      if (j2 <= k2) left = j2 + 1;
      if (k2 <= j2) right = j2 - 1;
    }
  }
  function swapItem(ids, coords, i2, j2) {
    swap(ids, i2, j2);
    swap(coords, 2 * i2, 2 * j2);
    swap(coords, 2 * i2 + 1, 2 * j2 + 1);
  }
  function swap(arr, i2, j2) {
    const tmp = arr[i2];
    arr[i2] = arr[j2];
    arr[j2] = tmp;
  }
  function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
  }

  // node_modules/supercluster/index.js
  var defaultOptions = {
    minZoom: 0,
    // min zoom to generate clusters on
    maxZoom: 16,
    // max zoom level to cluster the points on
    minPoints: 2,
    // minimum points to form a cluster
    radius: 40,
    // cluster radius in pixels
    extent: 512,
    // tile extent (radius is calculated relative to it)
    nodeSize: 64,
    // size of the KD-tree leaf node, affects performance
    log: false,
    // whether to log timing info
    // whether to generate numeric ids for input features (in vector tiles)
    generateId: false,
    // a reduce function for calculating custom cluster properties
    reduce: null,
    // (accumulated, props) => { accumulated.sum += props.sum; }
    // properties to use for individual points when running the reducer
    map: (props) => props
    // props => ({sum: props.my_value})
  };
  var fround = Math.fround || /* @__PURE__ */ ((tmp) => (x2) => {
    tmp[0] = +x2;
    return tmp[0];
  })(new Float32Array(1));
  var OFFSET_ZOOM = 2;
  var OFFSET_ID = 3;
  var OFFSET_PARENT = 4;
  var OFFSET_NUM = 5;
  var OFFSET_PROP = 6;
  var Supercluster = class {
    constructor(options) {
      this.options = Object.assign(Object.create(defaultOptions), options);
      this.trees = new Array(this.options.maxZoom + 1);
      this.stride = this.options.reduce ? 7 : 6;
      this.clusterProps = [];
    }
    load(points) {
      const { log, minZoom, maxZoom } = this.options;
      if (log) console.time("total time");
      const timerId = `prepare ${points.length} points`;
      if (log) console.time(timerId);
      this.points = points;
      const data = [];
      for (let i2 = 0; i2 < points.length; i2++) {
        const p2 = points[i2];
        if (!p2.geometry) continue;
        const [lng, lat] = p2.geometry.coordinates;
        const x2 = fround(lngX(lng));
        const y2 = fround(latY(lat));
        data.push(
          x2,
          y2,
          // projected point coordinates
          Infinity,
          // the last zoom the point was processed at
          i2,
          // index of the source feature in the original input array
          -1,
          // parent cluster id
          1
          // number of points in a cluster
        );
        if (this.options.reduce) data.push(0);
      }
      let tree = this.trees[maxZoom + 1] = this._createTree(data);
      if (log) console.timeEnd(timerId);
      for (let z2 = maxZoom; z2 >= minZoom; z2--) {
        const now2 = +Date.now();
        tree = this.trees[z2] = this._createTree(this._cluster(tree, z2));
        if (log) console.log("z%d: %d clusters in %dms", z2, tree.numItems, +Date.now() - now2);
      }
      if (log) console.timeEnd("total time");
      return this;
    }
    getClusters(bbox, zoom) {
      let minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
      const minLat = Math.max(-90, Math.min(90, bbox[1]));
      let maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
      const maxLat = Math.max(-90, Math.min(90, bbox[3]));
      if (bbox[2] - bbox[0] >= 360) {
        minLng = -180;
        maxLng = 180;
      } else if (minLng > maxLng) {
        const easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
        const westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
        return easternHem.concat(westernHem);
      }
      const tree = this.trees[this._limitZoom(zoom)];
      const ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
      const data = tree.data;
      const clusters = [];
      for (const id of ids) {
        const k2 = this.stride * id;
        clusters.push(data[k2 + OFFSET_NUM] > 1 ? getClusterJSON(data, k2, this.clusterProps) : this.points[data[k2 + OFFSET_ID]]);
      }
      return clusters;
    }
    getChildren(clusterId) {
      const originId = this._getOriginId(clusterId);
      const originZoom = this._getOriginZoom(clusterId);
      const errorMsg = "No cluster with the specified id.";
      const tree = this.trees[originZoom];
      if (!tree) throw new Error(errorMsg);
      const data = tree.data;
      if (originId * this.stride >= data.length) throw new Error(errorMsg);
      const r2 = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
      const x2 = data[originId * this.stride];
      const y2 = data[originId * this.stride + 1];
      const ids = tree.within(x2, y2, r2);
      const children = [];
      for (const id of ids) {
        const k2 = id * this.stride;
        if (data[k2 + OFFSET_PARENT] === clusterId) {
          children.push(data[k2 + OFFSET_NUM] > 1 ? getClusterJSON(data, k2, this.clusterProps) : this.points[data[k2 + OFFSET_ID]]);
        }
      }
      if (children.length === 0) throw new Error(errorMsg);
      return children;
    }
    getLeaves(clusterId, limit, offset) {
      limit = limit || 10;
      offset = offset || 0;
      const leaves = [];
      this._appendLeaves(leaves, clusterId, limit, offset, 0);
      return leaves;
    }
    getTile(z2, x2, y2) {
      const tree = this.trees[this._limitZoom(z2)];
      const z22 = Math.pow(2, z2);
      const { extent, radius } = this.options;
      const p2 = radius / extent;
      const top = (y2 - p2) / z22;
      const bottom = (y2 + 1 + p2) / z22;
      const tile = {
        features: []
      };
      this._addTileFeatures(
        tree.range((x2 - p2) / z22, top, (x2 + 1 + p2) / z22, bottom),
        tree.data,
        x2,
        y2,
        z22,
        tile
      );
      if (x2 === 0) {
        this._addTileFeatures(
          tree.range(1 - p2 / z22, top, 1, bottom),
          tree.data,
          z22,
          y2,
          z22,
          tile
        );
      }
      if (x2 === z22 - 1) {
        this._addTileFeatures(
          tree.range(0, top, p2 / z22, bottom),
          tree.data,
          -1,
          y2,
          z22,
          tile
        );
      }
      return tile.features.length ? tile : null;
    }
    getClusterExpansionZoom(clusterId) {
      let expansionZoom = this._getOriginZoom(clusterId) - 1;
      while (expansionZoom <= this.options.maxZoom) {
        const children = this.getChildren(clusterId);
        expansionZoom++;
        if (children.length !== 1) break;
        clusterId = children[0].properties.cluster_id;
      }
      return expansionZoom;
    }
    _appendLeaves(result, clusterId, limit, offset, skipped) {
      const children = this.getChildren(clusterId);
      for (const child of children) {
        const props = child.properties;
        if (props && props.cluster) {
          if (skipped + props.point_count <= offset) {
            skipped += props.point_count;
          } else {
            skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
          }
        } else if (skipped < offset) {
          skipped++;
        } else {
          result.push(child);
        }
        if (result.length === limit) break;
      }
      return skipped;
    }
    _createTree(data) {
      const tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
      for (let i2 = 0; i2 < data.length; i2 += this.stride) tree.add(data[i2], data[i2 + 1]);
      tree.finish();
      tree.data = data;
      return tree;
    }
    _addTileFeatures(ids, data, x2, y2, z2, tile) {
      for (const i2 of ids) {
        const k2 = i2 * this.stride;
        const isCluster = data[k2 + OFFSET_NUM] > 1;
        let tags, px, py;
        if (isCluster) {
          tags = getClusterProperties(data, k2, this.clusterProps);
          px = data[k2];
          py = data[k2 + 1];
        } else {
          const p2 = this.points[data[k2 + OFFSET_ID]];
          tags = p2.properties;
          const [lng, lat] = p2.geometry.coordinates;
          px = lngX(lng);
          py = latY(lat);
        }
        const f2 = {
          type: 1,
          geometry: [[
            Math.round(this.options.extent * (px * z2 - x2)),
            Math.round(this.options.extent * (py * z2 - y2))
          ]],
          tags
        };
        let id;
        if (isCluster || this.options.generateId) {
          id = data[k2 + OFFSET_ID];
        } else {
          id = this.points[data[k2 + OFFSET_ID]].id;
        }
        if (id !== void 0) f2.id = id;
        tile.features.push(f2);
      }
    }
    _limitZoom(z2) {
      return Math.max(this.options.minZoom, Math.min(Math.floor(+z2), this.options.maxZoom + 1));
    }
    _cluster(tree, zoom) {
      const { radius, extent, reduce, minPoints } = this.options;
      const r2 = radius / (extent * Math.pow(2, zoom));
      const data = tree.data;
      const nextData = [];
      const stride = this.stride;
      for (let i2 = 0; i2 < data.length; i2 += stride) {
        if (data[i2 + OFFSET_ZOOM] <= zoom) continue;
        data[i2 + OFFSET_ZOOM] = zoom;
        const x2 = data[i2];
        const y2 = data[i2 + 1];
        const neighborIds = tree.within(data[i2], data[i2 + 1], r2);
        const numPointsOrigin = data[i2 + OFFSET_NUM];
        let numPoints = numPointsOrigin;
        for (const neighborId of neighborIds) {
          const k2 = neighborId * stride;
          if (data[k2 + OFFSET_ZOOM] > zoom) numPoints += data[k2 + OFFSET_NUM];
        }
        if (numPoints > numPointsOrigin && numPoints >= minPoints) {
          let wx = x2 * numPointsOrigin;
          let wy = y2 * numPointsOrigin;
          let clusterProperties;
          let clusterPropIndex = -1;
          const id = ((i2 / stride | 0) << 5) + (zoom + 1) + this.points.length;
          for (const neighborId of neighborIds) {
            const k2 = neighborId * stride;
            if (data[k2 + OFFSET_ZOOM] <= zoom) continue;
            data[k2 + OFFSET_ZOOM] = zoom;
            const numPoints2 = data[k2 + OFFSET_NUM];
            wx += data[k2] * numPoints2;
            wy += data[k2 + 1] * numPoints2;
            data[k2 + OFFSET_PARENT] = id;
            if (reduce) {
              if (!clusterProperties) {
                clusterProperties = this._map(data, i2, true);
                clusterPropIndex = this.clusterProps.length;
                this.clusterProps.push(clusterProperties);
              }
              reduce(clusterProperties, this._map(data, k2));
            }
          }
          data[i2 + OFFSET_PARENT] = id;
          nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
          if (reduce) nextData.push(clusterPropIndex);
        } else {
          for (let j2 = 0; j2 < stride; j2++) nextData.push(data[i2 + j2]);
          if (numPoints > 1) {
            for (const neighborId of neighborIds) {
              const k2 = neighborId * stride;
              if (data[k2 + OFFSET_ZOOM] <= zoom) continue;
              data[k2 + OFFSET_ZOOM] = zoom;
              for (let j2 = 0; j2 < stride; j2++) nextData.push(data[k2 + j2]);
            }
          }
        }
      }
      return nextData;
    }
    // get index of the point from which the cluster originated
    _getOriginId(clusterId) {
      return clusterId - this.points.length >> 5;
    }
    // get zoom of the point from which the cluster originated
    _getOriginZoom(clusterId) {
      return (clusterId - this.points.length) % 32;
    }
    _map(data, i2, clone) {
      if (data[i2 + OFFSET_NUM] > 1) {
        const props = this.clusterProps[data[i2 + OFFSET_PROP]];
        return clone ? Object.assign({}, props) : props;
      }
      const original = this.points[data[i2 + OFFSET_ID]].properties;
      const result = this.options.map(original);
      return clone && result === original ? Object.assign({}, result) : result;
    }
  };
  function getClusterJSON(data, i2, clusterProps) {
    return {
      type: "Feature",
      id: data[i2 + OFFSET_ID],
      properties: getClusterProperties(data, i2, clusterProps),
      geometry: {
        type: "Point",
        coordinates: [xLng(data[i2]), yLat(data[i2 + 1])]
      }
    };
  }
  function getClusterProperties(data, i2, clusterProps) {
    const count = data[i2 + OFFSET_NUM];
    const abbrev = count >= 1e4 ? `${Math.round(count / 1e3)}k` : count >= 1e3 ? `${Math.round(count / 100) / 10}k` : count;
    const propIndex = data[i2 + OFFSET_PROP];
    const properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
    return Object.assign(properties, {
      cluster: true,
      cluster_id: data[i2 + OFFSET_ID],
      point_count: count,
      point_count_abbreviated: abbrev
    });
  }
  function lngX(lng) {
    return lng / 360 + 0.5;
  }
  function latY(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const y2 = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
    return y2 < 0 ? 0 : y2 > 1 ? 1 : y2;
  }
  function xLng(x2) {
    return (x2 - 0.5) * 360;
  }
  function yLat(y2) {
    const y22 = (180 - y2 * 360) * Math.PI / 180;
    return 360 * Math.atan(Math.exp(y22)) / Math.PI - 90;
  }

  // node_modules/@googlemaps/markerclusterer/dist/index.esm.js
  function __rest(s2, e2) {
    var t2 = {};
    for (var p2 in s2) if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
    if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
        if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
          t2[p2[i2]] = s2[p2[i2]];
      }
    return t2;
  }
  var MarkerUtils = class {
    static isAdvancedMarkerAvailable(map) {
      return google.maps.marker && map.getMapCapabilities().isAdvancedMarkersAvailable === true;
    }
    static isAdvancedMarker(marker) {
      return google.maps.marker && marker instanceof google.maps.marker.AdvancedMarkerElement;
    }
    static setMap(marker, map) {
      if (this.isAdvancedMarker(marker)) {
        marker.map = map;
      } else {
        marker.setMap(map);
      }
    }
    static getPosition(marker) {
      if (this.isAdvancedMarker(marker)) {
        if (marker.position) {
          if (marker.position instanceof google.maps.LatLng) {
            return marker.position;
          }
          if (marker.position.lat && marker.position.lng) {
            return new google.maps.LatLng(marker.position.lat, marker.position.lng);
          }
        }
        return new google.maps.LatLng(null);
      }
      return marker.getPosition();
    }
    static getVisible(marker) {
      if (this.isAdvancedMarker(marker)) {
        return true;
      }
      return marker.getVisible();
    }
  };
  var Cluster = class {
    constructor({ markers, position }) {
      this.markers = markers;
      if (position) {
        if (position instanceof google.maps.LatLng) {
          this._position = position;
        } else {
          this._position = new google.maps.LatLng(position);
        }
      }
    }
    get bounds() {
      if (this.markers.length === 0 && !this._position) {
        return;
      }
      const bounds = new google.maps.LatLngBounds(this._position, this._position);
      for (const marker of this.markers) {
        bounds.extend(MarkerUtils.getPosition(marker));
      }
      return bounds;
    }
    get position() {
      return this._position || this.bounds.getCenter();
    }
    /**
     * Get the count of **visible** markers.
     */
    get count() {
      return this.markers.filter((m2) => MarkerUtils.getVisible(m2)).length;
    }
    /**
     * Add a marker to the cluster.
     */
    push(marker) {
      this.markers.push(marker);
    }
    /**
     * Cleanup references and remove marker from map.
     */
    delete() {
      if (this.marker) {
        MarkerUtils.setMap(this.marker, null);
        this.marker = void 0;
      }
      this.markers.length = 0;
    }
  };
  var AbstractAlgorithm = class {
    constructor({ maxZoom = 16 }) {
      this.maxZoom = maxZoom;
    }
    /**
     * Helper function to bypass clustering based upon some map state such as
     * zoom, number of markers, etc.
     *
     * ```typescript
     *  cluster({markers, map}: AlgorithmInput): Cluster[] {
     *    if (shouldBypassClustering(map)) {
     *      return this.noop({markers})
     *    }
     * }
     * ```
     */
    noop({ markers }) {
      return noop(markers);
    }
  };
  var noop = (markers) => {
    const clusters = markers.map((marker) => new Cluster({
      position: MarkerUtils.getPosition(marker),
      markers: [marker]
    }));
    return clusters;
  };
  var SuperClusterAlgorithm = class extends AbstractAlgorithm {
    constructor(_a) {
      var { maxZoom, radius = 60 } = _a, options = __rest(_a, ["maxZoom", "radius"]);
      super({ maxZoom });
      this.state = { zoom: -1 };
      this.superCluster = new Supercluster(Object.assign({ maxZoom: this.maxZoom, radius }, options));
    }
    calculate(input) {
      let changed = false;
      const state = { zoom: input.map.getZoom() };
      if (!(0, import_fast_deep_equal.default)(input.markers, this.markers)) {
        changed = true;
        this.markers = [...input.markers];
        const points = this.markers.map((marker) => {
          const position = MarkerUtils.getPosition(marker);
          const coordinates = [position.lng(), position.lat()];
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates
            },
            properties: { marker }
          };
        });
        this.superCluster.load(points);
      }
      if (!changed) {
        if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
          changed = !(0, import_fast_deep_equal.default)(this.state, state);
        }
      }
      this.state = state;
      if (changed) {
        this.clusters = this.cluster(input);
      }
      return { clusters: this.clusters, changed };
    }
    cluster({ map }) {
      return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map((feature) => this.transformCluster(feature));
    }
    transformCluster({ geometry: { coordinates: [lng, lat] }, properties }) {
      if (properties.cluster) {
        return new Cluster({
          markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map((leaf) => leaf.properties.marker),
          position: { lat, lng }
        });
      }
      const marker = properties.marker;
      return new Cluster({
        markers: [marker],
        position: MarkerUtils.getPosition(marker)
      });
    }
  };
  var ClusterStats = class {
    constructor(markers, clusters) {
      this.markers = { sum: markers.length };
      const clusterMarkerCounts = clusters.map((a2) => a2.count);
      const clusterMarkerSum = clusterMarkerCounts.reduce((a2, b2) => a2 + b2, 0);
      this.clusters = {
        count: clusters.length,
        markers: {
          mean: clusterMarkerSum / clusters.length,
          sum: clusterMarkerSum,
          min: Math.min(...clusterMarkerCounts),
          max: Math.max(...clusterMarkerCounts)
        }
      };
    }
  };
  var DefaultRenderer = class {
    /**
     * The default render function for the library used by {@link MarkerClusterer}.
     *
     * Currently set to use the following:
     *
     * ```typescript
     * // change color if this cluster has more markers than the mean cluster
     * const color =
     *   count > Math.max(10, stats.clusters.markers.mean)
     *     ? "#ff0000"
     *     : "#0000ff";
     *
     * // create svg url with fill color
     * const svg = window.btoa(`
     * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
     *   <circle cx="120" cy="120" opacity=".6" r="70" />
     *   <circle cx="120" cy="120" opacity=".3" r="90" />
     *   <circle cx="120" cy="120" opacity=".2" r="110" />
     *   <circle cx="120" cy="120" opacity=".1" r="130" />
     * </svg>`);
     *
     * // create marker using svg icon
     * return new google.maps.Marker({
     *   position,
     *   icon: {
     *     url: `data:image/svg+xml;base64,${svg}`,
     *     scaledSize: new google.maps.Size(45, 45),
     *   },
     *   label: {
     *     text: String(count),
     *     color: "rgba(255,255,255,0.9)",
     *     fontSize: "12px",
     *   },
     *   // adjust zIndex to be above other markers
     *   zIndex: 1000 + count,
     * });
     * ```
     */
    render({ count, position }, stats, map) {
      const color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
      const svg = `<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${count}</text>
</svg>`;
      const title = `Cluster of ${count} markers`, zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
      if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
        const parser = new DOMParser();
        const svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
        svgEl.setAttribute("transform", "translate(0 25)");
        const clusterOptions2 = {
          map,
          position,
          zIndex,
          title,
          content: svgEl
        };
        return new google.maps.marker.AdvancedMarkerElement(clusterOptions2);
      }
      const clusterOptions = {
        position,
        zIndex,
        title,
        icon: {
          url: `data:image/svg+xml;base64,${btoa(svg)}`,
          anchor: new google.maps.Point(25, 25)
        }
      };
      return new google.maps.Marker(clusterOptions);
    }
  };
  function extend(type1, type2) {
    for (let property in type2.prototype) {
      type1.prototype[property] = type2.prototype[property];
    }
  }
  var OverlayViewSafe = class _OverlayViewSafe {
    constructor() {
      extend(_OverlayViewSafe, google.maps.OverlayView);
    }
  };
  var MarkerClustererEvents;
  (function(MarkerClustererEvents2) {
    MarkerClustererEvents2["CLUSTERING_BEGIN"] = "clusteringbegin";
    MarkerClustererEvents2["CLUSTERING_END"] = "clusteringend";
    MarkerClustererEvents2["CLUSTER_CLICK"] = "click";
  })(MarkerClustererEvents || (MarkerClustererEvents = {}));
  var defaultOnClusterClickHandler = (_2, cluster, map) => {
    map.fitBounds(cluster.bounds);
  };
  var MarkerClusterer = class extends OverlayViewSafe {
    constructor({ map, markers = [], algorithmOptions = {}, algorithm = new SuperClusterAlgorithm(algorithmOptions), renderer = new DefaultRenderer(), onClusterClick = defaultOnClusterClickHandler }) {
      super();
      this.markers = [...markers];
      this.clusters = [];
      this.algorithm = algorithm;
      this.renderer = renderer;
      this.onClusterClick = onClusterClick;
      if (map) {
        this.setMap(map);
      }
    }
    addMarker(marker, noDraw) {
      if (this.markers.includes(marker)) {
        return;
      }
      this.markers.push(marker);
      if (!noDraw) {
        this.render();
      }
    }
    addMarkers(markers, noDraw) {
      markers.forEach((marker) => {
        this.addMarker(marker, true);
      });
      if (!noDraw) {
        this.render();
      }
    }
    removeMarker(marker, noDraw) {
      const index = this.markers.indexOf(marker);
      if (index === -1) {
        return false;
      }
      MarkerUtils.setMap(marker, null);
      this.markers.splice(index, 1);
      if (!noDraw) {
        this.render();
      }
      return true;
    }
    removeMarkers(markers, noDraw) {
      let removed = false;
      markers.forEach((marker) => {
        removed = this.removeMarker(marker, true) || removed;
      });
      if (removed && !noDraw) {
        this.render();
      }
      return removed;
    }
    clearMarkers(noDraw) {
      this.markers.length = 0;
      if (!noDraw) {
        this.render();
      }
    }
    /**
     * Recalculates and draws all the marker clusters.
     */
    render() {
      const map = this.getMap();
      if (map instanceof google.maps.Map && map.getProjection()) {
        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
        const { clusters, changed } = this.algorithm.calculate({
          markers: this.markers,
          map,
          mapCanvasProjection: this.getProjection()
        });
        if (changed || changed == void 0) {
          const singleMarker = /* @__PURE__ */ new Set();
          for (const cluster of clusters) {
            if (cluster.markers.length == 1) {
              singleMarker.add(cluster.markers[0]);
            }
          }
          const groupMarkers = [];
          for (const cluster of this.clusters) {
            if (cluster.marker == null) {
              continue;
            }
            if (cluster.markers.length == 1) {
              if (!singleMarker.has(cluster.marker)) {
                MarkerUtils.setMap(cluster.marker, null);
              }
            } else {
              groupMarkers.push(cluster.marker);
            }
          }
          this.clusters = clusters;
          this.renderClusters();
          requestAnimationFrame(() => groupMarkers.forEach((marker) => MarkerUtils.setMap(marker, null)));
        }
        google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
      }
    }
    onAdd() {
      this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
      this.render();
    }
    onRemove() {
      google.maps.event.removeListener(this.idleListener);
      this.reset();
    }
    reset() {
      this.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
      this.clusters.forEach((cluster) => cluster.delete());
      this.clusters = [];
    }
    renderClusters() {
      const stats = new ClusterStats(this.markers, this.clusters);
      const map = this.getMap();
      this.clusters.forEach((cluster) => {
        if (cluster.markers.length === 1) {
          cluster.marker = cluster.markers[0];
        } else {
          cluster.marker = this.renderer.render(cluster, stats, map);
          cluster.markers.forEach((marker) => MarkerUtils.setMap(marker, null));
          if (this.onClusterClick) {
            cluster.marker.addListener(
              "click",
              /* istanbul ignore next */
              (event2) => {
                google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
                this.onClusterClick(event2, cluster, map);
              }
            );
          }
        }
        MarkerUtils.setMap(cluster.marker, map);
      });
    }
  };

  // src/modules/showroomMap.js
  async function showroomMap() {
    const mapContainer = document.querySelector('[data-showroom-map="container"]');
    if (!mapContainer) return;
    const showroomListItems = document.querySelectorAll("[data-showroom-list-item]");
    let markers = [];
    const { Map: Map2 } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const zoomInButton = document.querySelector('[data-showroom-zoom-btn="zoom-in"]');
    const zoomOutButton = document.querySelector('[data-showroom-zoom-btn="zoom-out"]');
    const listWrap = document.querySelector('[data-showroom-list="wrap"]');
    const infoWrap = document.querySelector('[data-showroom-info="wrap"]');
    let activeMarker = null;
    const showroomClose = document.querySelector('[data-showroom-info="close"]');
    const showroomInfoName = document.querySelector('[data-showroom-info="name"]');
    const showroomInfoDescription = document.querySelector('[data-showroom-info="description"]');
    const showroomInfoAddress = document.querySelector('[data-showroom-info="address"]');
    const showroomInfoHours = document.querySelector('[data-showroom-info="hours"]');
    const showroomInfoHoursBlock = document.querySelector('[data-showroom-info="hours-block"]');
    const showroomInfoBooking = document.querySelector('[data-showroom-info="booking"]');
    function findClusterContainingMarker(marker) {
      for (const [clusterElement, markersInCluster] of clusterToMarkersMap.entries()) {
        if (markersInCluster.includes(marker)) {
          return clusterElement;
        }
      }
      return null;
    }
    function displayMarkerTooltip(name, address, marker) {
      infoWindow.setContent(`<div class="showroom_map_tooltip-wrap">
			<h3 class="button-style-s">${name}</h3>
			<span class="button-style-s text-color-dark-grey">${address}</span>
			</div>`);
      infoWindow.open(marker.map, marker);
    }
    function hideMarkerTooltip() {
      infoWindow.close();
    }
    function zoomInToLocation(marker) {
      let bounds = new google.maps.LatLngBounds();
      bounds.extend(marker.position);
      map.fitBounds(bounds);
      setTimeout(() => {
        if (map.getZoom() > 13) {
          map.setZoom(13);
        }
      }, 300);
    }
    function displayFullInfo(itemData, marker) {
      showroomInfoName.textContent = itemData.name;
      showroomInfoDescription.textContent = itemData.description;
      showroomInfoAddress.textContent = itemData.address;
      showroomInfoBooking.href = itemData.booking;
      const splitHours = itemData.hours.split(";");
      showroomInfoHours.innerHTML = splitHours.join("<br>");
      if (!showroomInfoHours.textContent) {
        gsapWithCSS.set(showroomInfoHoursBlock, {
          autoAlpha: 0
        });
      } else {
        gsapWithCSS.set(showroomInfoHoursBlock, {
          autoAlpha: 1
        });
      }
      if (activeMarker) {
        activeMarker.content.classList.remove("is-open");
      }
      marker.content.classList.add("is-open");
      activeMarker = marker;
      let tl = gsapWithCSS.timeline();
      tl.set(listWrap, {
        position: "absolute"
      }).set(infoWrap, {
        position: "static"
      }).to(infoWrap, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "linear"
      }).to(
        listWrap,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "linear"
        },
        "<"
      );
    }
    function hideFullInfo() {
      if (activeMarker) {
        activeMarker.content.classList.remove("is-open");
      }
      map.setZoom(5);
      let tl = gsapWithCSS.timeline();
      tl.set(infoWrap, {
        position: "absolute"
      }).set(listWrap, {
        position: "static"
      }).to(listWrap, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "linear"
      }).to(
        infoWrap,
        {
          autoAlpha: 0,
          duration: 0.2,
          ease: "linear"
        },
        "<"
      );
    }
    const map = new Map2(mapContainer, {
      center: { lat: 51.0569311, lng: 5.177956 },
      zoom: 5,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      mapId: "85116a18845892ec",
      // Replace with your valid Map ID
      gestureHandling: "cooperative"
    });
    mapContainer.addEventListener("wheel", (event2) => {
      if (event2.ctrlKey || event2.metaKey) {
        lenis.stop();
        clearTimeout(window.zoomTimeout);
        window.zoomTimeout = setTimeout(() => {
          lenis.start();
        }, 300);
      }
    });
    const infoWindow = new google.maps.InfoWindow();
    showroomListItems.forEach((listItem) => {
      let itemData = {};
      itemData.name = listItem.getAttribute("data-showroom-list-name");
      itemData.address = listItem.getAttribute("data-showroom-list-address");
      itemData.description = listItem.getAttribute("data-showroom-list-description");
      itemData.slug = listItem.getAttribute("data-showroom-list-item");
      itemData.lat = Number(listItem.getAttribute("data-showroom-list-lat"));
      itemData.lng = Number(listItem.getAttribute("data-showroom-list-lng"));
      itemData.hours = listItem.getAttribute("data-showroom-list-hours");
      itemData.booking = listItem.getAttribute("data-showroom-list-booking");
      const customMarker = document.createElement("div");
      customMarker.className = "showroom_map_marker-wrap";
      customMarker.setAttribute("data-showroom-marker-item", itemData.slug);
      customMarker.innerHTML = `
		<div class="showroom_map_marker-icon">
            <svg width="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M8.00078 1.3999C10.5968 1.3999 12.7008 3.5039 12.7008 6.0999C12.7008 10.9649 8.00078 14.6249 8.00078 14.6249C8.00078 14.6249 3.30078 10.9649 3.30078 6.0999C3.30078 3.5039 5.40478 1.3999 8.00078 1.3999Z" stroke="currentColor" stroke-miterlimit="10"/>
	<path d="M8.00116 7.79284C8.87984 7.79284 9.59216 7.08052 9.59216 6.20184C9.59216 5.32315 8.87984 4.61084 8.00116 4.61084C7.12247 4.61084 6.41016 5.32315 6.41016 6.20184C6.41016 7.08052 7.12247 7.79284 8.00116 7.79284Z" stroke="currentColor" stroke-miterlimit="10"/>
	</svg>
	</div>
	
        `;
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: itemData.lat, lng: itemData.lng },
        content: customMarker,
        gmpClickable: true,
        title: itemData.name
      });
      markers.push(marker);
      marker.addListener("click", () => {
        displayMarkerTooltip(itemData.name, itemData.address, marker);
        displayFullInfo(itemData, marker);
        zoomInToLocation(marker);
      });
      marker.content.addEventListener("mouseenter", () => {
        const relatedListItem = document.querySelector(`[data-showroom-list-item=${itemData.slug}]`);
        if (relatedListItem) {
          relatedListItem.classList.add("is-hovered");
        }
      });
      marker.content.addEventListener("mouseleave", () => {
        const relatedListItem = document.querySelector(`[data-showroom-list-item=${itemData.slug}]`);
        if (relatedListItem) {
          relatedListItem.classList.remove("is-hovered");
        }
      });
      listItem.addEventListener("mouseenter", () => {
        const relatedMarker = document.querySelector(`[data-showroom-marker-item="${itemData.slug}"]`);
        if (relatedMarker) {
          relatedMarker.classList.add("is-hovered");
        }
        const marker2 = markers.find((m2) => m2.position.lat === itemData.lat && m2.position.lng === itemData.lng);
        if (marker2) {
          const cluster = findClusterContainingMarker(marker2);
          if (cluster) {
            cluster.classList.add("is-hovered");
          }
        }
      });
      listItem.addEventListener("click", () => {
        displayMarkerTooltip(itemData.name, itemData.address, marker);
        displayFullInfo(itemData, marker);
        zoomInToLocation(marker);
      });
      listItem.addEventListener("mouseleave", () => {
        const relatedMarker = document.querySelector(`[data-showroom-marker-item="${itemData.slug}"]`);
        if (relatedMarker) {
          relatedMarker.classList.remove("is-hovered");
        }
        const marker2 = markers.find((m2) => m2.position.lat === itemData.lat && m2.position.lng === itemData.lng);
        if (marker2) {
          const cluster = findClusterContainingMarker(marker2);
          if (cluster) {
            cluster.classList.remove("is-hovered");
          }
        }
      });
    });
    zoomInButton.addEventListener("click", () => map.setZoom(map.getZoom() + 1));
    zoomOutButton.addEventListener("click", () => map.setZoom(map.getZoom() - 1));
    showroomClose.addEventListener("click", () => {
      hideFullInfo();
      hideMarkerTooltip();
    });
    let clusterToMarkersMap = new window.Map();
    const markerCluster = new MarkerClusterer({
      markers,
      map,
      renderer: {
        render: ({ count, position, markers: markers2 }) => {
          const clusterElement = document.createElement("div");
          clusterElement.className = "showroom_map_cluster-marker caption-style-m";
          clusterElement.textContent = count;
          clusterToMarkersMap.set(clusterElement, markers2);
          return new google.maps.marker.AdvancedMarkerElement({
            position,
            content: clusterElement,
            gmpClickable: true
          });
        }
      }
    });
    google.maps.event.addListener(map, "zoom_changed", () => {
      clusterToMarkersMap.clear();
    });
  }
  function showroomSearch() {
    const searchInput = document.querySelector('[data-showroom-search="input"]');
    const listItems = document.querySelectorAll('[data-showroom-search="item"]');
    if (!searchInput || !listItems.length) return;
    let listArray = [];
    const listContainer = document.querySelector('[data-showroom-search="container"]');
    const listWrap = document.querySelector('[data-showroom-search="list"]');
    const clearBtn = document.querySelector('[data-showroom-search="clear"]');
    const form = document.querySelector('[data-showroom-search="form"]');
    const emptyBlock = document.querySelector('[data-showroom-search="empty-state"]');
    const loadMoreButton = document.querySelector('[data-showroom-load-more="btn"]');
    let loadMoreClicked = false;
    let loadMorePosts = [];
    let isEmptyState = false;
    listItems.forEach((post, index) => {
      let postData = {};
      postData.element = post;
      postData.cityName = post.getAttribute("data-showroom-list-name").toLowerCase();
      postData.cityAddress = post.getAttribute("data-showroom-list-address").toLowerCase();
      listArray.push(postData);
    });
    function showEmptyState() {
      let tl = gsapWithCSS.timeline();
      tl.set(emptyBlock, {
        display: "flex"
      }).set(listContainer, {
        display: "none"
      }).to(emptyBlock, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "linear"
      });
      isEmptyState = true;
    }
    function hideEmptyState() {
      let tl = gsapWithCSS.timeline();
      tl.set(emptyBlock, {
        display: "none",
        autoAlpha: 0
      }).set(listContainer, {
        display: "block"
      });
      isEmptyState = false;
    }
    function filterItems(filterValue = "") {
      let filteredElements = [];
      listArray.forEach((post) => {
        if (post.cityName.includes(filterValue) || post.cityAddress.includes(filterValue)) {
          filteredElements.push(post.element);
        }
      });
      return filteredElements;
    }
    function updateList(filteredElements) {
      loadMorePosts = [];
      filteredElements.forEach((element, index) => {
        element.classList.remove("load-more-hide");
        if (index > 4 && !loadMoreClicked) {
          element.classList.add("load-more-hide");
          loadMorePosts.push(element);
        }
        listWrap.append(element);
      });
    }
    function showLoadMorePosts() {
      loadMorePosts.forEach((post) => {
        post.classList.remove("load-more-hide");
      });
      loadMoreButton.style.display = "none";
      loadMoreClicked = true;
    }
    function filterController(filterValue) {
      let filteredElements = filterItems(filterValue);
      if (!isEmptyState && !filteredElements.length) {
        showEmptyState();
      } else if (isEmptyState && filteredElements.length) {
        hideEmptyState();
      }
      listWrap.innerHTML = "";
      updateList(filteredElements);
      if (!loadMoreClicked && filteredElements.length > 5) {
        loadMoreButton.style.display = "block";
      } else if (!loadMoreClicked && filteredElements.length <= 5) {
        loadMoreButton.style.display = "none";
      }
    }
    filterController("");
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterController();
    });
    searchInput.addEventListener("keyup", () => {
      const filterValue = searchInput.value.toLowerCase();
      filterController(filterValue);
    });
    loadMoreButton.addEventListener("click", showLoadMorePosts);
    form.addEventListener("submit", (event2) => {
      event2.preventDefault();
      event2.stopPropagation();
    });
  }

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend2(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend2(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend2(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend2(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c2) => !!c2.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e2) {
      }
      try {
        delete object[key];
      } catch (e2) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a2) => a2.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o2) {
    return typeof o2 === "object" && o2 !== null && o2.constructor && Object.prototype.toString.call(o2).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend3() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i2 = 1; i2 < arguments.length; i2 += 1) {
      const nextSource = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend3(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend3(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function elementChildren(element, selector3) {
    if (selector3 === void 0) {
      selector3 = "";
    }
    const children = [...element.children];
    if (element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector3) {
      return children;
    }
    return children.filter((el) => el.matches(selector3));
  }
  function elementIsChildOf(el, parent2) {
    const isChild = parent2.contains(el);
    if (!isChild && parent2 instanceof HTMLSlotElement) {
      const children = [...parent2.assignedElements()];
      return children.includes(el);
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector3) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector3) {
        if (prev.matches(selector3)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector3) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector3) {
        if (next.matches(selector3)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i2;
    if (child) {
      i2 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i2 += 1;
      }
      return i2;
    }
    return void 0;
  }
  function elementParents(el, selector3) {
    const parents = [];
    let parent2 = el.parentElement;
    while (parent2) {
      if (selector3) {
        if (parent2.matches(selector3)) parents.push(parent2);
      } else {
        parents.push(parent2);
      }
      parent2 = parent2.parentElement;
    }
    return parents;
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e2) => !!e2);
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer2(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init4 = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i2 = 0; i2 < containerParents.length; i2 += 1) {
          attach(containerParents[i2]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init4);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self.eventsListeners[event2]) self.eventsListeners[event2] = [];
        self.eventsListeners[event2][method](handler);
      });
      return self;
    },
    once(events2, handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      function onceHandler() {
        self.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self, args);
      }
      onceHandler.__emitterProxy = handler;
      return self.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (typeof handler !== "function") return self;
      const method = priority ? "unshift" : "push";
      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }
      return self;
    },
    offAny(handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsAnyListeners) return self;
      const index = self.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }
      return self;
    },
    off(events2, handler) {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self.eventsListeners[event2] = [];
        } else if (self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit() {
      const self = this;
      if (!self.eventsListeners || self.destroyed) return self;
      if (!self.eventsListeners) return self;
      let events2;
      let data;
      let context3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context3 = self;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context3 = args[0].context || self;
      }
      data.unshift(context3);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context3, [event2, ...data]);
          });
        }
        if (self.eventsListeners && self.eventsListeners[event2]) {
          self.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context3, data);
          });
        }
      });
      return self;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i2 = 0; i2 < slidesLength; i2 += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i2]) slide2 = slides[i2];
      if (gridEnabled) {
        swiper.grid.updateSlide(i2, slide2, slides);
      }
      if (slides[i2] && elementStyle(slide2, "display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i2].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i2]) {
          slides[i2].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i2]) {
        slides[i2].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i2 !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i2 === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i2 = 0; i2 < snapGrid.length; i2 += 1) {
        let slidesGridItem = snapGrid[i2];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i2 = 0; i2 < groups; i2 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i2 = 0; i2 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i2 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_2, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap3) => {
        if (snap3 <= 0) return -offsetBefore;
        if (snap3 > maxSnap) return maxSnap + offsetAfter;
        return snap3;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap3, snapIndex) => {
          snapGrid[snapIndex] = snap3 - allSlidesOffset;
        });
        slidesGrid.forEach((snap3, snapIndex) => {
          slidesGrid[snapIndex] = snap3 + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v2) => v2 + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v2) => v2 + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i2;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i2 = 0; i2 < Math.ceil(swiper.params.slidesPerView); i2 += 1) {
          const index = swiper.activeIndex + i2;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i2 = 0; i2 < activeSlides.length; i2 += 1) {
      if (typeof activeSlides[i2] !== "undefined") {
        const height = activeSlides[i2].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      slides[i2].swiperSlideOffset = (swiper.isHorizontal() ? slides[i2].offsetLeft : slides[i2].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i2 = 0; i2 < slides.length; i2 += 1) {
      const slide2 = slides[i2];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i2];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i2];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i2);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector3) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector3}, swiper-slide${selector3}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_2, i2) => {
        return activeColumn + slidesPerView + i2;
      }));
      swiper.slides.forEach((slideEl, i2) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i2);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i2 = activeIndex - amount; i2 <= slideIndexLastInView + amount; i2 += 1) {
        const realIndex = (i2 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i2 = Math.max(activeIndex - amount, 0); i2 <= Math.min(slideIndexLastInView + amount, len - 1); i2 += 1) {
        if (i2 !== activeIndex && (i2 > slideIndexLastInView || i2 < activeIndex)) {
          unlazy(swiper, i2);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
      if (typeof slidesGrid[i2 + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1] - (slidesGrid[i2 + 1] - slidesGrid[i2]) / 2) {
          activeIndex = i2;
        } else if (translate2 >= slidesGrid[i2] && translate2 < slidesGrid[i2 + 1]) {
          activeIndex = i2 + 1;
        }
      } else if (translate2 >= slidesGrid[i2]) {
        activeIndex = i2;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i2 = 0; i2 < swiper.slides.length; i2 += 1) {
        if (swiper.slides[i2] === slide2) {
          slideFound = true;
          slideIndex = i2;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x2 = 0;
    let y2 = 0;
    const z2 = 0;
    if (swiper.isHorizontal()) {
      x2 = rtl ? -translate2 : translate2;
    } else {
      y2 = translate2;
    }
    if (params.roundLengths) {
      x2 = Math.floor(x2);
      y2 = Math.floor(y2);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x2 : y2;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x2 : -y2;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x2 -= swiper.cssOverflowAdjustment();
      } else {
        y2 -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x2}px, ${y2}px, ${z2}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e2) {
            if (!swiper || swiper.destroyed) return;
            if (e2.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i2 = 0; i2 < slidesGrid.length; i2 += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i2] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i2 + 1] * 100);
        if (typeof slidesGrid[i2 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i2;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i2 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i2;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t2 = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t2,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t2,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e2) {
          if (!swiper || swiper.destroyed) return;
          if (e2.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize3(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize3(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize3(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap3, snapIndex) => {
        if (normalizedTranslate >= snap3) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i2 = 0; i2 < amountOfSlides; i2 += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i2 = 0; i2 < loopedSlides - activeColIndexWithShift; i2 += 1) {
        const index = i2 - Math.floor(i2 / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i3 = slides.length - 1; i3 >= 0; i3 -= 1) {
            if (slides[i3].column === colIndexToPrepend) prependSlidesIndexes.push(i3);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i2 = 0; i2 < slidesAppended; i2 += 1) {
        const index = i2 - Math.floor(i2 / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c2) => {
          if (!c2.destroyed && c2.params.loop) c2.loopFix({
            ...loopParams,
            slideTo: c2.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector3, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector3);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    const data = swiper.touchEventsData;
    if (e2.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e2.pointerId) {
        return;
      }
      data.pointerId = e2.pointerId;
    } else if (e2.type === "touchstart" && e2.targetTouches.length === 1) {
      data.touchId = e2.targetTouches[0].identifier;
    }
    if (e2.type === "touchstart") {
      preventEdgeSwipe(swiper, e2, e2.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e2.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e2.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ("which" in e2 && e2.which === 3) return;
    if ("button" in e2 && e2.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e2.composedPath ? e2.composedPath() : e2.path;
    if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e2.pageX;
    touches.currentY = e2.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e2, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault2 = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault2 = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e2.pointerType === "mouse" || e2.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault2 && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e2.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e2);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    if (e2.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e2.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e2.type === "touchmove") {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e2;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e2);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e2.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e2.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e2.target && e2.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e2.target === document2.activeElement && e2.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e2);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e2);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e2.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e2.cancelable) {
      e2.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e2.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e2);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e2);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e2.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e2 = event2;
    if (e2.originalEvent) e2 = e2.originalEvent;
    let targetTouch;
    const isTouchEvent = e2.type === "touchend" || e2.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e2.pointerId !== data.pointerId) return;
      targetTouch = e2;
    } else {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e2.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e2.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e2.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e2);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e2.path || e2.composedPath && e2.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e2.target, pathTree);
      swiper.emit("tap click", e2);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e2);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i2 = 0; i2 < slidesGrid.length; i2 += i2 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i2 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i2 + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i2] && currentPos < slidesGrid[i2 + increment2]) {
          stopIndex = i2;
          groupSize = slidesGrid[i2 + increment2] - slidesGrid[i2];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i2]) {
        stopIndex = i2;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e2.target === swiper.navigation.nextEl || e2.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e2.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e2) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e2.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e2.stopPropagation();
        e2.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e2) {
    const swiper = this;
    processLazyPreloader(swiper, e2.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend3(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a2, b2) => parseInt(a2.value, 10) - parseInt(b2.value, 10));
    for (let i2 = 0; i2 < points.length; i2 += 1) {
      const {
        point,
        value
      } = points[i2];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults2 = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend3(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend3(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend3(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend3({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend3({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend3({}, defaults2, allModulesParams);
      swiper.params = extend3({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend3({}, swiper.params);
      swiper.passedParams = extend3({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += Math.ceil(slides[i2].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
          if (slides[i2] && !breakLoop) {
            slideSize += slides[i2].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i2 = activeIndex + 1; i2 < slides.length; i2 += 1) {
            const slideInView = exact ? slidesGrid[i2] + slidesSizesGrid[i2] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i2] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i2 = activeIndex - 1; i2 >= 0; i2 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e2) => {
            processLazyPreloader(swiper, e2.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend3(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults2;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m2) => _Swiper.installModule(m2));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer2]);

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e2) {
      e2.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e2) {
      e2.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init4() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init4();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e2) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e2.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        const path = e2.path || e2.composedPath && e2.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init4();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init: init4,
      destroy
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return `.${classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: `${pfx}-bullet`,
        bulletActiveClass: `${pfx}-bullet-active`,
        modifierClass: `${pfx}-`,
        currentClass: `${pfx}-current`,
        totalClass: `${pfx}-total`,
        hiddenClass: `${pfx}-hidden`,
        progressbarFillClass: `${pfx}-progressbar-fill`,
        progressbarOppositeClass: `${pfx}-progressbar-opposite`,
        clickableClass: `${pfx}-clickable`,
        lockClass: `${pfx}-lock`,
        horizontalClass: `${pfx}-horizontal`,
        verticalClass: `${pfx}-vertical`,
        paginationDisabledClass: `${pfx}-disabled`
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}`);
        bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e2) {
      const bulletEl = e2.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e2.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === "next") {
          swiper.slideNext();
        } else if (moveDirection === "previous") {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`)].map((s2) => typeof s2 === "string" && s2.includes(" ") ? s2.split(" ") : s2).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
              if (bullets[i2]) {
                bullets[i2].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render3() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i2, params.bulletClass);
          } else {
            paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""} class="${params.bulletClass}"></${params.bulletElement}>`;
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init4() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.filter((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          })[0];
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init4();
        render3();
        update2();
      }
    });
    on("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on("snapIndexChange", () => {
      update2();
    });
    on("snapGridLengthChange", () => {
      render3();
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on("lock unlock", () => {
      update2();
    });
    on("click", (_s, e2) => {
      const targetEl = e2.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init4();
      render3();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render: render3,
      update: update2,
      init: init4,
      destroy
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e2) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e2.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e2.detail && e2.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.filter((slideEl) => slideEl.classList.contains("swiper-slide-active"))[0];
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document2 = getDocument();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e2) => {
      if (e2.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e2) => {
      if (e2.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // src/modules/sliders.js
  function testimonialsSlider() {
    const swiperTarget = document.querySelector(".testimonials-slider_swiper");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Autoplay, Pagination, Navigation],
      loop: true,
      speed: 800,
      autoplay: {
        delay: 6e3
      },
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: ".testimonials-slider_pagination",
        bulletClass: "swiper-bullet",
        bulletActiveClass: "is-active",
        clickable: true
      },
      navigation: {
        prevEl: ".testimonials-slider_swiper-btn.is-prev",
        nextEl: ".testimonials-slider_swiper-btn.is-next"
      }
    });
  }
  function reasonsSlider() {
    const swiperTarget = document.querySelector(".reasons-slider_swiper");
    if (!swiperTarget) return;
    const slides = document.querySelectorAll('[data-reasons-slider="slide"]');
    slides.forEach((slide2, index) => {
      const slideCount = slide2.querySelector('[data-reasons-slider="count"]');
      if (index < 10) {
        slideCount.textContent = "0" + (index + 1);
      } else {
        slideCount.textContent = index + 1;
      }
    });
    const swiper = new Swiper(swiperTarget, {
      modules: [Navigation],
      slidesPerView: 1.3,
      speed: 600,
      spaceBetween: 16,
      breakpoints: {
        992: {
          slidesPerView: 4.5,
          spaceBetween: 8
        },
        768: {
          slidesPerView: 2.7,
          spaceBetween: 20
        }
      },
      // Navigation arrows
      navigation: {
        disabledClass: "is-disabled",
        nextEl: ".reasons-slider_btn-next",
        prevEl: ".reasons-slider_btn-prev"
      }
    });
  }
  function productImagesSlider() {
    const swiperTargets = document.querySelectorAll(".product-hero_swiper");
    if (!swiperTargets.length) return;
    swiperTargets.forEach((swiperTarget) => {
      const swiper = new Swiper(swiperTarget, {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        loop: true,
        speed: 600,
        spaceBetween: 0,
        pagination: {
          el: ".product-hero_swiper-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "is-active",
          clickable: true
        },
        navigation: {
          nextEl: ".product-hero_swiper-btn.is-next",
          prevEl: ".product-hero_swiper-btn.is-prev"
        }
      });
    });
  }
  function productFeaturesSlider() {
    const swiperTarget = document.querySelector(".product-features_swiper");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Navigation],
      slidesPerView: 1.4,
      speed: 600,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2.6,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        disabledClass: "is-disabled",
        nextEl: ".product-features_btn-next",
        prevEl: ".product-features_btn-prev"
      }
    });
  }
  function productMobilitySlider() {
    const swiperTarget = document.querySelector(".product-mobility_swiper");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 16,
      breakpoints: {
        992: {
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".product-mobility_swiper-btn.is-next",
        prevEl: ".product-mobility_swiper-btn.is-prev"
      }
    });
  }
  function mobileUsageSwiper() {
    const swiperTarget = document.querySelector('[data-usage-swiper="target"]');
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      slidesPerView: 1.3,
      speed: 600,
      spaceBetween: 16,
      breakpoints: {
        768: {
          slidesPerView: 2.7,
          spaceBetween: 20
        }
      }
    });
  }
  function mobileProductCustomizeSwiper() {
    const swiperTarget = document.querySelector('[data-mobile-customize-slides="target"]');
    if (!swiperTarget) return;
    const breakpoint = window.matchMedia("(max-width: 991px)");
    let swiper = null;
    const wrapper = swiperTarget.querySelector('[data-mobile-customize-slides="wrap"]');
    const slides = swiperTarget.querySelectorAll('[data-mobile-customize-slides="slide"]');
    function addSwiperClasses() {
      wrapper.classList.add("swiper-wrapper");
      slides.forEach((slide2) => {
        slide2.classList.add("swiper-slide");
      });
    }
    function removeSwiperClasses() {
      wrapper.classList.remove("swiper-wrapper");
      slides.forEach((slide2) => {
        slide2.classList.remove("swiper-slide");
      });
    }
    function initSwiper() {
      addSwiperClasses();
      swiper = new Swiper(swiperTarget, {
        slidesPerView: 1.1,
        speed: 600,
        spaceBetween: 16,
        breakpoints: {
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          }
        }
      });
    }
    function destroySwiper() {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
      removeSwiperClasses();
    }
    breakpoint.addEventListener("change", (event2) => {
      if (event2.matches) {
        initSwiper();
      } else {
        destroySwiper();
      }
    });
    if (breakpoint.matches) {
      initSwiper();
    } else {
      destroySwiper();
    }
  }
  function homeHeroSlides() {
    const swiperTarget = document.querySelector('[data-home-swiper="target"]');
    if (!swiperTarget) return;
    const slides = swiperTarget.querySelectorAll(".swiper-slide");
    if (slides.length > 1) {
      const swiper = new Swiper(swiperTarget, {
        modules: [Pagination, Autoplay],
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false
        },
        allowTouchMove: true,
        breakpoints: {
          992: {
            allowTouchMove: false
          }
        },
        speed: 1e3,
        loop: true,
        pagination: {
          el: ".home-hero_swiper-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "is-active",
          clickable: true
        }
      });
      const rotatingTextWrap = document.querySelector('[data-swiper-text="wrap"]');
      const words = gsapWithCSS.utils.toArray(".product-hero_rotating-text", rotatingTextWrap);
      gsapWithCSS.set(words, {
        yPercent: (i2) => i2 ? 100 : 0,
        opacity: 1
      });
      let previousSlideIndex = 0;
      swiper.on("slideChangeTransitionStart", function() {
        const currentSlideIndex = swiper.realIndex;
        gsapWithCSS.to(words[previousSlideIndex], {
          yPercent: -100,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsapWithCSS.set(words[previousSlideIndex], { yPercent: 100 });
          }
        });
        gsapWithCSS.fromTo(
          words[currentSlideIndex],
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 0.8,
            ease: "power2.out"
          }
        );
        previousSlideIndex = currentSlideIndex;
      });
    }
  }
  function aboutGallerySlider() {
    const swiperTarget = document.querySelector(".about-gallery_swiper");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Autoplay],
      loop: true,
      speed: 800,
      autoplay: {
        delay: 1e3
      },
      centeredSlides: true,
      spaceBetween: 20,
      slidesPerView: 1.8,
      breakpoints: {
        992: {
          slidesPerView: 5,
          spaceBetween: 32
        },
        768: {
          slidesPerView: 4
        }
      }
    });
  }
  function aboutValuesSlider() {
    const swiperTarget = document.querySelector(".about-values_swiper");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Navigation],
      slidesPerView: 1.3,
      speed: 600,
      spaceBetween: 16,
      breakpoints: {
        992: {
          slidesPerView: 2.7,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2.7
        }
      },
      // Navigation arrows
      navigation: {
        disabledClass: "is-disabled",
        nextEl: ".about-values_slider_nav-btn.is-next",
        prevEl: ".about-values_slider_nav-btn.is-prev"
      }
    });
  }
  function mobileKnowledgeBlogSlider() {
    const swiperTarget = document.querySelector("[data-knowledge-blog-swiper]");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      slidesPerView: 1.3,
      speed: 600,
      spaceBetween: 16,
      breakpoints: {
        767: {
          slidesPerView: 2.3
        }
      }
    });
  }
  function knowledgePostGallerySlider() {
    const swiperTarget = document.querySelector("[data-knowledge-gallery-swiper]");
    if (!swiperTarget) return;
    const swiper = new Swiper(swiperTarget, {
      modules: [Navigation],
      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 16,
      breakpoints: {
        992: {
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".knowledge-block_gallery_swiper-btn.is-next",
        prevEl: ".knowledge-block_gallery_swiper-btn.is-prev"
      }
    });
  }
  function thingsToWatchLandingSlider() {
    const sliderOneElement = document.querySelector(".things-to-watch-out-for-mobile_swiper");
    if (sliderOneElement) {
      new Swiper(sliderOneElement, {
        modules: [Navigation],
        slidesPerView: 1.3,
        speed: 600,
        spaceBetween: 16,
        breakpoints: {
          992: {
            slidesPerView: 4.5,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 20
          }
        },
        navigation: {
          disabledClass: "is-disabled",
          nextEl: ".things-to-watch-out-for-mobile_slider-btn-next",
          prevEl: ".things-to-watch-out-for-mobile_slider-btn-prev"
        }
      });
    }
    const sliderTwoElement = document.querySelector(".things-to-watch-out-for-mobile_swiper-2");
    if (sliderTwoElement) {
      new Swiper(sliderTwoElement, {
        modules: [Navigation],
        slidesPerView: 1.3,
        speed: 600,
        spaceBetween: 16,
        breakpoints: {
          992: {
            slidesPerView: 4.5,
            spaceBetween: 8
          },
          768: {
            slidesPerView: 2.7,
            spaceBetween: 20
          }
        },
        navigation: {
          disabledClass: "is-disabled",
          nextEl: ".things-to-watch-out-for-mobile_slider-btn-next-2",
          prevEl: ".things-to-watch-out-for-mobile_slider-btn-prev-2"
        }
      });
    }
  }

  // src/modules/cursor.js
  function customCursorAnimation() {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;
    const cursorTriggers = document.querySelectorAll('[data-cursor-animation="trigger"]');
    const cursorIcon = document.querySelector('[data-cursor-animation="icon"]');
    gsapWithCSS.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    let xTo = gsapWithCSS.quickTo(cursor, "x", { duration: 0.3, ease: "power3" }), yTo = gsapWithCSS.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });
    window.addEventListener("pointermove", (e2) => {
      xTo(e2.clientX);
      yTo(e2.clientY);
    });
    let showTl = gsapWithCSS.timeline({ paused: true });
    showTl.set(cursor, { autoAlpha: 1 }).to(cursor, { scale: 1, duration: 0.4, ease: "power4.inOut" });
    const cursorClick = () => {
      if (gsapWithCSS.getProperty(cursor, "autoAlpha") === 1) {
        gsapWithCSS.to(cursor, { scale: 0.9, duration: 0.15, ease: "power2.inOut" });
      }
    };
    const cursorRelease = () => {
      if (gsapWithCSS.getProperty(cursor, "autoAlpha") === 1) {
        gsapWithCSS.to(cursor, { scale: 1, duration: 0.15, ease: "power2.inOut" });
      }
    };
    document.addEventListener("mousedown", cursorClick);
    document.addEventListener("mouseup", cursorRelease);
    cursorTriggers.forEach((trigger) => {
      const cursorSize = trigger.getAttribute("data-cursor-size");
      const cursorType = trigger.getAttribute("data-cursor-type");
      trigger.addEventListener("mouseover", () => {
        if (cursorType === "slide-prev") {
          gsapWithCSS.set(cursorIcon, { rotation: -135 });
        } else if (cursorType === "slide-next") {
          gsapWithCSS.set(cursorIcon, { rotation: 45 });
        } else {
          gsapWithCSS.set(cursorIcon, { rotation: 0 });
        }
        if (cursorSize === "small") {
          gsapWithCSS.set(cursor, { width: "2.5rem", height: "2.5rem" });
        } else if (cursorSize === "medium") {
          gsapWithCSS.set(cursor, { width: "3.5rem", height: "3.5rem" });
        } else if (cursorSize === "large") {
          gsapWithCSS.set(cursor, { width: "5rem", height: "5rem" });
        }
        showTl.play();
      });
      trigger.addEventListener("mouseout", () => {
        showTl.reverse();
      });
    });
  }

  // src/modules/forms.js
  function customFormValidation() {
    const svgIcon = `
    <svg class="error-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" stroke="#A5565A" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 5.4502L8 8.4502" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
        <path d="M8 10.45L8 10.5" stroke="#A5565A" stroke-linecap="square" stroke-linejoin="round"/>
    </svg>`;
    $.validator.addMethod(
      "inArray",
      function(value, element, array) {
        return array.includes(value);
      },
      svgIcon + "Please select a valid option."
    );
    $.validator.addMethod(
      "phone",
      function(value, element) {
        return this.optional(element) || /^[\+]?[\d\s\-\(\)]+$/.test(value);
      },
      "Please enter a valid phone number"
    );
    $("form").each(function() {
      const validCountries = [];
      const deliveryOptions = this.querySelectorAll('[data-custom-select="link"]');
      if (deliveryOptions.length) {
        deliveryOptions.forEach((option) => {
          validCountries.push(option.textContent);
        });
      }
      $(this).validate({
        rules: {
          Name: {
            required: true,
            minlength: 2
          },
          Email: {
            required: true,
            email: true
          },
          Message: {
            required: true,
            minlength: 5
          },
          PrivacyPolicy: {
            required: true
            // This is the checkbox field
          },
          Phone: {
            required: false,
            // Optional field
            phone: true
            // Ensure it's only digits if filled
          },
          "Quote-Delivery": {
            required: true,
            // Required custom select dropdown field
            inArray: validCountries
          },
          "Company-name": {
            required: true
          }
        },
        messages: {
          Name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters"
          },
          Email: {
            required: "Please enter your email",
            email: "Please enter a valid email address"
          },
          Message: {
            required: "Please enter a message",
            minlength: "Your message must be at least 5 characters long"
          },
          Phone: {
            digits: "Please enter a valid phone number"
          },
          "Quote-Delivery": {
            required: "Please select an option from the list"
            // Custom message for the select field
          },
          "Company-name": {
            required: "Please enter your company"
          }
        },
        errorPlacement: function(error, element) {
          if (element.attr("name") === "Quote-Delivery") {
            element.closest(".form_select").append(error);
          } else if (element.attr("name") === "Privacy-Policy") {
            element.closest(".form_checkbox-wrap").find(".form_checkbox").addClass("checkbox-error");
          } else {
            error.insertAfter(element);
          }
        },
        errorElement: "span",
        // Handle the success event (when the field becomes valid)
        success: function(label, element) {
          if ($(element).attr("name") === "Quote-Delivery") {
            $(element).closest(".form_select").find(".form_select-toggle").removeClass("error");
            $(element).closest(".form_select").find("span.error").remove();
          } else if ($(element).attr("name") === "Privacy-Policy") {
            $(element).closest(".form_checkbox-wrap").find(".form_checkbox").removeClass("checkbox-error");
          } else {
            $(label).remove();
          }
        },
        // Overriding showErrors to consistently apply the icon whenever error is updated
        showErrors: function(errorMap, errorList) {
          this.defaultShowErrors();
          errorList.forEach((errorItem) => {
            const element = $(errorItem.element);
            const describedById = element.attr("aria-describedby");
            const errorLabel = $("#" + describedById);
            if (errorLabel.length && !errorLabel.html().includes("error-icon")) {
              errorLabel.html(svgIcon + " " + errorItem.message);
            }
          });
        }
      });
    });
  }
  function quoteFormQtyInput() {
    const quoteProducts = document.querySelectorAll('[data-product-quote="product"]');
    if (!quoteProducts.length) return;
    quoteProducts.forEach((product) => {
      const inputField = product.querySelector('[data-product-quote="input"]');
      const minusBtn = product.querySelector('[data-product-quote="minus"]');
      const plusBtn = product.querySelector('[data-product-quote="plus"]');
      inputField.value = 0;
      minusBtn.addEventListener("click", () => qtyDecrease(inputField));
      plusBtn.addEventListener("click", () => qtyIncrease(inputField));
    });
    const productQuoteBtns = document.querySelectorAll("[data-product-quote-btn]");
    if (productQuoteBtns) {
      productQuoteBtns.forEach((btn) => {
        const productName = btn.getAttribute("data-product-quote-btn");
        const inputField = document.querySelector(`#${productName}`);
        btn.addEventListener("click", () => {
          if (parseInt(inputField.value) === 0) {
            qtyIncrease(inputField);
          }
        });
      });
    }
    function qtyDecrease(inputField) {
      if (inputField.value > 0) {
        inputField.value = parseInt(inputField.value) - 1;
        if (inputField.value < 1) {
          inputField.closest(".quote-modal_product").classList.remove("has-qty");
        }
      }
    }
    function qtyIncrease(inputField) {
      inputField.value = parseInt(inputField.value) + 1;
      if (inputField.value > 0) {
        inputField.closest(".quote-modal_product").classList.add("has-qty");
      }
    }
  }
  function formUTMparameters() {
    function storeURLparameters() {
      const params = new URLSearchParams(window.location.search);
      const utmParameters = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      utmParameters.forEach((param) => {
        if (params.has(param) && !localStorage.getItem(param)) {
          localStorage.setItem(param, params.get(param));
        }
      });
    }
    storeURLparameters();
    function populateFormsFields() {
      const forms = document.querySelectorAll("form");
      if (!forms.length) return;
      forms.forEach((form) => {
        const utmFields = form.querySelectorAll('input[name^="utm_"]');
        utmFields.forEach((field) => {
          const fieldName = field.name;
          const localStorageValue = localStorage.getItem(fieldName);
          if (localStorageValue) {
            field.value = localStorageValue;
          }
        });
      });
    }
    populateFormsFields();
  }
  function formPageField() {
    const forms = document.querySelectorAll("form");
    if (!forms.length) return;
    const pageURL = window.location.origin + window.location.pathname;
    forms.forEach((form) => {
      const urlField = form.querySelector('input[name="Page-URL"]');
      if (!urlField) return;
      urlField.value = pageURL;
    });
  }
  function customFormSelect() {
    const selectWraps = document.querySelectorAll('[data-custom-select="select-wrap"]');
    if (!selectWraps.length) return;
    selectWraps.forEach((wrap3) => {
      const selectField = wrap3.querySelector('[data-custom-select="select-field"]');
      const inputField = wrap3.querySelector('[data-custom-select="text-input"]');
      const optionLinks = wrap3.querySelectorAll('[data-custom-select="link"]');
      const dropdownWrap = wrap3.querySelector('[data-custom-select="dropdown-wrap"]');
      optionLinks.forEach((link) => {
        link.addEventListener("click", linkClick);
      });
      function linkClick() {
        $(".w-dropdown").trigger("w-close");
        inputField.value = this.textContent;
        $(inputField).valid();
      }
      function filterOptions(e2) {
        const filterValue = e2.target.value.toLowerCase();
        const dropdownLinks = wrap3.querySelectorAll("a");
        dropdownLinks.forEach((link) => {
          if (link.textContent.toLowerCase().startsWith(filterValue)) {
            link.style.display = "block";
          } else {
            link.style.display = "none";
          }
        });
      }
      function clearInput(e2) {
        e2.target.value = "";
        filterOptions(e2);
      }
      inputField.addEventListener("keyup", filterOptions);
      inputField.addEventListener("focus", clearInput);
    });
  }

  // src/modules/cookies.js
  function cookiesPopup() {
    function applyCustomCode() {
      const preferenceCenter = document.querySelector(".cky-preference-center");
      if (!preferenceCenter) return;
      preferenceCenter.setAttribute("data-lenis-prevent", "");
      const primaryBtns = document.querySelectorAll(".cky-btn-accept");
      const primaryBtnHTML = '<div class="button_text-wrap"><div class="button_visible-text">Accept all</div><div class="button_hidden-text">Accept all</div></div>';
      primaryBtns.forEach((btn) => {
        btn.innerHTML = primaryBtnHTML;
        btn.classList.add("button");
      });
      const secondaryBtns = document.querySelectorAll(".cky-btn-customize, .cky-btn-preferences");
      secondaryBtns.forEach((btn) => {
        btn.classList.add("button", "is-ghost");
      });
      const closeImg = preferenceCenter.querySelector(".cky-btn-close img");
      const newCloseImage = "https://cdn.prod.website-files.com/66f058a100becd0dab3c7c70/671794f17dca0eee2831d22a_close.svg";
      closeImg.src = newCloseImage;
    }
    const observer = new MutationObserver((mutationsList, observer2) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          if (document.querySelector(".cky-consent-container")) {
            applyCustomCode();
            observer2.disconnect();
            break;
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // src/modules/animations.js
  function dottedBoothPin() {
    const dots = document.querySelector('[data-dots-pin="image"]');
    if (!dots) return;
    let mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 992px)", () => {
      let dotsPin = ScrollTrigger2.create({
        trigger: dots,
        pin: dots,
        pinSpacing: false,
        start: "center center",
        endTrigger: '[data-features-scroll="content-layer"]',
        end: "top top",
        onLeave: () => {
          gsapWithCSS.set(dots, { opacity: 0 });
        },
        onEnterBack: () => {
          gsapWithCSS.set(dots, { opacity: 1 });
        }
      });
    });
  }
  function boothScrollAnimation() {
    const contentLayer = document.querySelector('[data-features-scroll="content-layer"]');
    if (!contentLayer) return;
    const imageLayer = document.querySelector('[data-features-scroll="image-layer"]');
    const leftItems = document.querySelectorAll('[data-features-scroll="left-item"]');
    const rightItems = document.querySelectorAll('[data-features-scroll="right-item"]');
    const modalBtns = document.querySelectorAll('[data-features-scroll="modal-trigger"]');
    const boothImgWrap = document.querySelector('[data-features-scroll="booth-img-wrap"]');
    const boothImg = document.querySelector('[data-features-scroll="booth-img"]');
    const animationBuffer = 800;
    if (boothImg.complete) {
      initScrollAnimation();
    } else {
      boothImg.addEventListener("load", initScrollAnimation);
    }
    function initScrollAnimation() {
      const windowHeight = window.innerHeight;
      const imgHeight = boothImg.offsetHeight;
      const bottomSpace = (windowHeight - imgHeight) / 2;
      let boothScaleTimeline = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: imageLayer,
          start: "top top",
          end: () => {
            return "+=" + animationBuffer * leftItems.length;
          },
          scrub: true
        }
      });
      boothScaleTimeline.to(boothImgWrap, {
        scale: 0.9,
        // Target scale, adjust as needed
        ease: "none"
      });
      let contentLayerPin = ScrollTrigger2.create({
        trigger: contentLayer,
        start: "top top",
        pin: true,
        end: () => {
          return "+=" + animationBuffer * leftItems.length;
        },
        pinspacing: true
      });
      let imageLayerPin = ScrollTrigger2.create({
        trigger: imageLayer,
        pin: true,
        start: "top top",
        end: () => {
          return "+=" + (animationBuffer * leftItems.length + 700 + bottomSpace);
        },
        pinSpacing: false
      });
      leftItems.forEach((leftItem, index) => {
        const rightItem = rightItems[index];
        const modalBtn = modalBtns[index];
        let featuresChangeTl = gsapWithCSS.timeline({
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: ".features-scroll_wrap",
            start: () => {
              return index * animationBuffer + "px";
            },
            end: "+=200px",
            scrub: false,
            preventOverlaps: true
          }
        });
        if (index !== 0) {
          featuresChangeTl.to([leftItems[index - 1], rightItems[index - 1], modalBtns[index - 1]], {
            opacity: 0
          }).fromTo(
            [leftItem, rightItem, modalBtn],
            {
              opacity: 0
            },
            {
              opacity: 1
            }
          );
        }
      });
    }
    ScrollTrigger2.refresh();
  }
  function usageHoverAnimation() {
    const headings = document.querySelectorAll('[data-usage-hover="heading"]');
    const images = document.querySelectorAll('[data-usage-hover="image"]');
    if (!headings.length || !images.length) return;
    headings.forEach((heading, index) => {
      const image = images[index];
      heading.addEventListener("mouseenter", () => {
        gsapWithCSS.to(image, { autoAlpha: 1, duration: 0.2 });
        gsapWithCSS.to(heading, {
          opacity: 1,
          duration: 0.2
        });
        headings.forEach((sibling) => {
          if (sibling !== heading) {
            sibling.classList.add("no-hover");
            gsapWithCSS.to(sibling, {
              opacity: 0.25,
              duration: 0.2
            });
          }
        });
        images.forEach((sibling) => {
          if (sibling !== image) {
            gsapWithCSS.to(sibling, { autoAlpha: 0, duration: 0.2 });
          }
        });
      });
      heading.addEventListener("mouseleave", () => {
        headings.forEach((sibling) => {
          sibling.classList.remove("no-hover");
        });
      });
    });
  }
  function reasonsSliderHover() {
    const slides = document.querySelectorAll('[data-reasons-slider="slide"]');
    if (!slides.length) return;
    const swiperWrapper = document.querySelector('[data-reasons-slider="wrap"]');
    let descriptionMaxHeight = 0;
    let mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 992px)", () => {
      slides.forEach((slide2, index) => {
        const slideContent = slide2.querySelector('[data-reasons-slider="content"]');
        const slideDescription = slide2.querySelector('[data-reasons-slider="description"]');
        const descriptionHeight = slideDescription.offsetHeight;
        if (descriptionHeight > descriptionMaxHeight) {
          descriptionMaxHeight = descriptionHeight;
        }
        let hoverTl = gsapWithCSS.timeline({ paused: true });
        hoverTl.to(slideContent, {
          backgroundColor: "#E8EFBD",
          duration: 0.2,
          y: "-0.5rem"
        }).to(
          slideDescription,
          {
            y: "-100%",
            duration: 0.2
          },
          "<"
        );
        slide2.addEventListener("mouseover", () => {
          hoverTl.play();
        });
        slide2.addEventListener("mouseout", () => {
          hoverTl.reverse();
        });
      });
      gsapWithCSS.set(swiperWrapper, {
        paddingTop: descriptionMaxHeight + "px"
      });
    });
  }
  function rotatingText() {
    const wordWraps = document.querySelectorAll('[data-rotating-text="wrap"]');
    if (!wordWraps.length) return;
    wordWraps.forEach((wrap3) => {
      const words = gsapWithCSS.utils.toArray(".product-hero_rotating-text", wrap3);
      if (!words.length) return;
      const tl = gsapWithCSS.timeline({
        repeat: -1
      });
      gsapWithCSS.set(words, {
        yPercent: (i2) => i2 ? 100 : 0,
        opacity: 1
      });
      words.forEach((word, i2) => {
        const next = words[i2 + 1];
        if (next) {
          tl.to(word, { yPercent: -100, duration: 0.8, ease: "power2.out" }, "+=1.5").to(next, { yPercent: 0, duration: 0.8, ease: "power2.out" }, "<");
        } else {
          tl.to(word, { yPercent: -100, duration: 0.8, ease: "power2.out" }, "+=1.5").fromTo(
            words[0],
            { yPercent: 100 },
            { yPercent: 0, immediateRender: false, duration: 0.8, ease: "power2.out" },
            "<"
          );
        }
      });
    });
  }
  function indexMobilityPinAnimation() {
    const pinSection = document.querySelector('[data-index-mobility-animation="section"]');
    if (!pinSection) return;
    const nextSection = pinSection.nextElementSibling;
    const videoBlock = pinSection.querySelector('[data-index-mobility-animation="video-block"]');
    let mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 992px)", () => {
      let pinAnimation = gsapWithCSS.timeline({
        scrollTrigger: {
          refreshPriority: -1,
          trigger: videoBlock,
          pin: videoBlock,
          pinSpacing: false,
          start: "center center",
          endTrigger: nextSection,
          end: "top top",
          scrub: 0.1
        }
      });
      pinAnimation.to(videoBlock, {
        scale: 0.85,
        ease: "linear"
      });
      ScrollTrigger2.refresh();
    });
  }
  function indexHeroScroll() {
    const heroSection = document.querySelector('[data-index-hero-scroll="section"]');
    if (!heroSection) return;
    const heroSwiper = document.querySelector('[data-index-hero-scroll="swiper"]');
    let mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 992px)", () => {
      let tl = gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: 0.01
        }
      });
      tl.to(heroSection, {
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        duration: 0.1
      }).to(
        heroSwiper,
        {
          y: "15%",
          ease: "linear"
        },
        "<"
      );
    });
  }
  function draggableCardsAnimation() {
    const cards = document.querySelectorAll('[data-draggable-cards="card"]');
    if (!cards.length) return;
    const cardsContainer = document.querySelector('[data-draggable-cards="container"]');
    let mm = gsapWithCSS.matchMedia();
    mm.add("(min-width: 769px)", () => {
      cards.forEach((card) => {
        Draggable.create(card, {
          bounds: cardsContainer
        });
      });
    });
  }
  function aboutValuesListHover() {
    const valueItems = document.querySelectorAll('[data-values-hover="item"]');
    if (!valueItems.length) return;
    function setActiveItem(hoveredItem) {
      valueItems.forEach((item) => {
        item.classList.toggle("is-active", item === hoveredItem);
      });
    }
    function debounceHover(hoveredItem) {
      valueItems.forEach((item) => {
        item.classList.toggle("no-hover", item !== hoveredItem);
      });
    }
    function resetHoverState() {
      valueItems.forEach((item) => {
        item.classList.remove("no-hover");
      });
    }
    valueItems.forEach((item, index) => {
      if (index === 0) {
        setActiveItem(item);
      }
      item.addEventListener("mouseenter", () => {
        debounceHover(item);
        setActiveItem(item);
      });
      item.addEventListener("mouseleave", resetHoverState);
    });
  }
  function aboutCardsExpand() {
    const button = document.querySelector('[data-about-expand="button"]');
    if (!button) return;
    const container = document.querySelector('[data-about-expand="container"]');
    const cardsWrap = container.querySelector('[data-about-expand="cards-wrap"]');
    const overlay = container.querySelector('[data-about-expand="overlay"]');
    const cardsHeight = cardsWrap.offsetHeight;
    button.addEventListener("click", () => {
      gsapWithCSS.to(container, {
        height: cardsHeight,
        duration: 0.5,
        ease: "power2.inOut"
      });
      gsapWithCSS.set(overlay, {
        autoAlpha: 0
      });
    });
  }
  function productFeaturesVideo() {
    const featureItems = document.querySelectorAll(".product-features_wrap");
    if (!featureItems.length) return;
    featureItems.forEach((item) => {
      const featureVideo = item.querySelector("video");
      const featureImage = item.querySelector(".product-features_image");
      item.addEventListener("mouseenter", () => {
        if (featureVideo) {
          featureVideo.play();
        }
        if (featureImage && featureVideo) {
          gsapWithCSS.to(featureImage, {
            opacity: 0,
            duration: 0.3
          });
        }
      });
      item.addEventListener("mouseleave", () => {
        if (featureVideo) {
          featureVideo.currentTime = 0;
          featureVideo.pause();
        }
        if (featureImage && featureVideo) {
          gsapWithCSS.to(featureImage, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
    });
  }
  function initStackingNav() {
    const cards = document.querySelectorAll(".comparison-features_card");
    if (!cards.length) return;
    cards.forEach((card, index) => {
      const previousCards = Array.from(cards).slice(0, index);
      gsapWithCSS.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 100%",
          // Start at 35% for smoother transitions
          end: "top top",
          scrub: 1
        }
      }).to(previousCards, {
        scale: (i2) => 1 - 0.064 * (index - i2),
        // Reduce size by 64px per card
        ease: "power1.out"
        // Smooth easing
      });
      const overlay = card.querySelector(".comaprison-features_card-overlay");
      if (overlay) {
        gsapWithCSS.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            // Start opacity change when overlap begins
            end: "bottom top",
            // Gradual fade as card moves
            scrub: 1
          }
        }).to(overlay, {
          opacity: 1,
          // Animate overlay to full opacity
          duration: 20,
          // Extend duration for slower transition
          ease: "power1.inOut"
        });
      }
    });
  }

  // src/modules/accordion.js
  function accordionAnimation() {
    const accordionInstances = document.querySelectorAll('[data-accordion="instance"]');
    if (!accordionInstances.length) return;
    accordionInstances.forEach((instance) => {
      const accordionItems = instance.querySelectorAll('[data-accordion="accordion-item"]');
      if (!accordionItems.length) return;
      let activeTl = null;
      let activeAccordion = null;
      const animationDuration = parseInt(instance.getAttribute("data-accordion-duration"));
      function openAccordion(accordion, accordionTl) {
        if (activeTl && activeAccordion) {
          activeAccordion.classList.remove("is-open");
          activeTl.reverse();
        }
        accordionTl.play();
        activeTl = accordionTl;
        activeAccordion = accordion;
      }
      function closeAccordion(accordionTl) {
        accordionTl.reverse();
        activeTl = null;
        activeAccordion = null;
      }
      accordionItems.forEach((accordion) => {
        const accordionTrigger = accordion.querySelector('[data-accordion="trigger"]');
        const accordionExpandWrap = accordion.querySelector('[data-accordion="expand-wrap"]');
        const accordionTl = gsapWithCSS.timeline({
          paused: true
        });
        accordionTl.fromTo(
          accordionExpandWrap,
          {
            height: 0
          },
          {
            height: "auto",
            duration: animationDuration / 1e3,
            ease: "power3.inOut"
          }
        );
        accordionTrigger.addEventListener("click", (e2) => {
          e2.preventDefault();
          accordion.classList.toggle("is-open");
          if (accordion.classList.contains("is-open")) {
            openAccordion(accordion, accordionTl);
          } else {
            closeAccordion(accordionTl);
          }
        });
        if (accordion.getAttribute("data-accordion-open")) {
          accordion.classList.toggle("is-open");
          openAccordion(accordion, accordionTl);
        }
      });
    });
  }

  // node_modules/lenis/dist/lenis.mjs
  var version = "1.1.14";
  function clamp3(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }
  function lerp(x2, y2, t2) {
    return (1 - t2) * x2 + t2 * y2;
  }
  function damp(x2, y2, lambda, deltaTime) {
    return lerp(x2, y2, 1 - Math.exp(-lambda * deltaTime));
  }
  function modulo(n2, d2) {
    return (n2 % d2 + d2) % d2;
  }
  var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
     * Advance the animation by the given delta time
     *
     * @param deltaTime - The time in seconds to advance the animation
     */
    advance(deltaTime) {
      if (!this.isRunning) return;
      let completed = false;
      if (this.duration && this.easing) {
        this.currentTime += deltaTime;
        const linearProgress = clamp3(0, this.currentTime / this.duration, 1);
        completed = linearProgress >= 1;
        const easedProgress = completed ? 1 : this.easing(linearProgress);
        this.value = this.from + (this.to - this.from) * easedProgress;
      } else if (this.lerp) {
        this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
        if (Math.round(this.value) === this.to) {
          this.value = this.to;
          completed = true;
        }
      } else {
        this.value = this.to;
        completed = true;
      }
      if (completed) {
        this.stop();
      }
      this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */
    stop() {
      this.isRunning = false;
    }
    /**
     * Set up the animation from a starting value to an ending value
     * with optional parameters for lerping, duration, easing, and onUpdate callback
     *
     * @param from - The starting value
     * @param to - The ending value
     * @param options - Options for the animation
     */
    fromTo(from2, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
      this.from = this.value = from2;
      this.to = to;
      this.lerp = lerp2;
      this.duration = duration;
      this.easing = easing;
      this.currentTime = 0;
      this.isRunning = true;
      onStart?.();
      this.onUpdate = onUpdate;
    }
  };
  function debounce(callback, delay) {
    let timer;
    return function(...args) {
      let context3 = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = void 0;
        callback.apply(context3, args);
      }, delay);
    };
  }
  var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
      this.wrapper = wrapper;
      this.content = content;
      if (autoResize) {
        this.debouncedResize = debounce(this.resize, debounceValue);
        if (this.wrapper instanceof Window) {
          window.addEventListener("resize", this.debouncedResize, false);
        } else {
          this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
          this.wrapperResizeObserver.observe(this.wrapper);
        }
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
        this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect();
      this.contentResizeObserver?.disconnect();
      if (this.wrapper === window && this.debouncedResize) {
        window.removeEventListener("resize", this.debouncedResize, false);
      }
    }
    resize = () => {
      this.onWrapperResize();
      this.onContentResize();
    };
    onWrapperResize = () => {
      if (this.wrapper instanceof Window) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } else {
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
      }
    };
    onContentResize = () => {
      if (this.wrapper instanceof Window) {
        this.scrollHeight = this.content.scrollHeight;
        this.scrollWidth = this.content.scrollWidth;
      } else {
        this.scrollHeight = this.wrapper.scrollHeight;
        this.scrollWidth = this.wrapper.scrollWidth;
      }
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  };
  var Emitter = class {
    events = {};
    /**
     * Emit an event with the given data
     * @param event Event name
     * @param args Data to pass to the event handlers
     */
    emit(event2, ...args) {
      let callbacks = this.events[event2] || [];
      for (let i2 = 0, length = callbacks.length; i2 < length; i2++) {
        callbacks[i2]?.(...args);
      }
    }
    /**
     * Add a callback to the event
     * @param event Event name
     * @param cb Callback function
     * @returns Unsubscribe function
     */
    on(event2, cb) {
      this.events[event2]?.push(cb) || (this.events[event2] = [cb]);
      return () => {
        this.events[event2] = this.events[event2]?.filter((i2) => cb !== i2);
      };
    }
    /**
     * Remove a callback from the event
     * @param event Event name
     * @param callback Callback function
     */
    off(event2, callback) {
      this.events[event2] = this.events[event2]?.filter((i2) => callback !== i2);
    }
    /**
     * Remove all event listeners and clean up
     */
    destroy() {
      this.events = {};
    }
  };
  var LINE_HEIGHT = 100 / 6;
  var listenerOptions = { passive: false };
  var VirtualScroll = class {
    constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      this.element = element;
      this.options = options;
      window.addEventListener("resize", this.onWindowResize, false);
      this.onWindowResize();
      this.element.addEventListener("wheel", this.onWheel, listenerOptions);
      this.element.addEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.addEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
      x: 0,
      y: 0
    };
    lastDelta = {
      x: 0,
      y: 0
    };
    window = {
      width: 0,
      height: 0
    };
    emitter = new Emitter();
    /**
     * Add an event listener for the given event and callback
     *
     * @param event Event name
     * @param callback Callback function
     */
    on(event2, callback) {
      return this.emitter.on(event2, callback);
    }
    /** Remove all event listeners and clean up */
    destroy() {
      this.emitter.destroy();
      window.removeEventListener("resize", this.onWindowResize, false);
      this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
      this.element.removeEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchend",
        this.onTouchEnd,
        listenerOptions
      );
    }
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    onTouchStart = (event2) => {
      const { clientX, clientY } = event2.targetTouches ? event2.targetTouches[0] : event2;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: 0,
        y: 0
      };
      this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: event2
      });
    };
    /** Event handler for 'touchmove' event */
    onTouchMove = (event2) => {
      const { clientX, clientY } = event2.targetTouches ? event2.targetTouches[0] : event2;
      const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
      const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: deltaX,
        y: deltaY
      };
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event: event2
      });
    };
    onTouchEnd = (event2) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: event2
      });
    };
    /** Event handler for 'wheel' event */
    onWheel = (event2) => {
      let { deltaX, deltaY, deltaMode } = event2;
      const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
      const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
      deltaX *= multiplierX;
      deltaY *= multiplierY;
      deltaX *= this.options.wheelMultiplier;
      deltaY *= this.options.wheelMultiplier;
      this.emitter.emit("scroll", { deltaX, deltaY, event: event2 });
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  };
  var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    /**
     * Whether or not the user is touching the screen
     */
    isTouching;
    /**
     * The time in ms since the lenis instance was created
     */
    time = 0;
    /**
     * User data that will be forwarded through the scroll event
     *
     * @example
     * lenis.scrollTo(100, {
     *   userData: {
     *     foo: 'bar'
     *   }
     * })
     */
    userData = {};
    /**
     * The last velocity of the scroll
     */
    lastVelocity = 0;
    /**
     * The current velocity of the scroll
     */
    velocity = 0;
    /**
     * The direction of the scroll
     */
    direction = 0;
    /**
     * The options passed to the lenis instance
     */
    options;
    /**
     * The target scroll value
     */
    targetScroll;
    /**
     * The animated scroll value
     */
    animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({
      wrapper = window,
      content = document.documentElement,
      eventsTarget = wrapper,
      smoothWheel = true,
      syncTouch = false,
      syncTouchLerp = 0.075,
      touchInertiaMultiplier = 35,
      duration,
      // in seconds
      easing = (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)),
      lerp: lerp2 = 0.1,
      infinite = false,
      orientation = "vertical",
      // vertical, horizontal
      gestureOrientation = "vertical",
      // vertical, horizontal, both
      touchMultiplier = 1,
      wheelMultiplier = 1,
      autoResize = true,
      prevent,
      virtualScroll,
      overscroll = true,
      __experimental__naiveDimensions = false
    } = {}) {
      window.lenisVersion = version;
      if (!wrapper || wrapper === document.documentElement || wrapper === document.body) {
        wrapper = window;
      }
      this.options = {
        wrapper,
        content,
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaMultiplier,
        duration,
        easing,
        lerp: lerp2,
        infinite,
        gestureOrientation,
        orientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        __experimental__naiveDimensions
      };
      this.dimensions = new Dimensions(wrapper, content, { autoResize });
      this.updateClassName();
      this.targetScroll = this.animatedScroll = this.actualScroll;
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll = new VirtualScroll(eventsTarget, {
        touchMultiplier,
        wheelMultiplier
      });
      this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    /**
     * Destroy the lenis instance, remove all event listeners and clean up the class name
     */
    destroy() {
      this.emitter.destroy();
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        false
      );
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll.destroy();
      this.dimensions.destroy();
      this.cleanUpClassName();
    }
    on(event2, callback) {
      return this.emitter.on(event2, callback);
    }
    off(event2, callback) {
      return this.emitter.off(event2, callback);
    }
    setScroll(scroll) {
      if (this.isHorizontal) {
        this.rootElement.scrollLeft = scroll;
      } else {
        this.rootElement.scrollTop = scroll;
      }
    }
    onPointerDown = (event2) => {
      if (event2.button === 1) {
        this.reset();
      }
    };
    onVirtualScroll = (data) => {
      if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
        return;
      const { deltaX, deltaY, event: event2 } = data;
      this.emitter.emit("virtual-scroll", { deltaX, deltaY, event: event2 });
      if (event2.ctrlKey) return;
      if (event2.lenisStopPropagation) return;
      const isTouch = event2.type.includes("touch");
      const isWheel = event2.type.includes("wheel");
      this.isTouching = event2.type === "touchstart" || event2.type === "touchmove";
      const isTapToStop = this.options.syncTouch && isTouch && event2.type === "touchstart" && !this.isStopped && !this.isLocked;
      if (isTapToStop) {
        this.reset();
        return;
      }
      const isClick = deltaX === 0 && deltaY === 0;
      const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
      if (isClick || isUnknownGesture) {
        return;
      }
      let composedPath = event2.composedPath();
      composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
      const prevent = this.options.prevent;
      if (!!composedPath.find(
        (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel"))
      ))
        return;
      if (this.isStopped || this.isLocked) {
        event2.preventDefault();
        return;
      }
      const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
      if (!isSmooth) {
        this.isScrolling = "native";
        this.animate.stop();
        event2.lenisStopPropagation = true;
        return;
      }
      let delta = deltaY;
      if (this.options.gestureOrientation === "both") {
        delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      } else if (this.options.gestureOrientation === "horizontal") {
        delta = deltaX;
      }
      if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
        event2.lenisStopPropagation = true;
      }
      event2.preventDefault();
      const syncTouch = isTouch && this.options.syncTouch;
      const isTouchEnd = isTouch && event2.type === "touchend";
      const hasTouchInertia = isTouchEnd && Math.abs(delta) > 5;
      if (hasTouchInertia) {
        delta = this.velocity * this.options.touchInertiaMultiplier;
      }
      this.scrollTo(this.targetScroll + delta, {
        programmatic: false,
        ...syncTouch ? {
          lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    };
    /**
     * Force lenis to recalculate the dimensions
     */
    resize() {
      this.dimensions.resize();
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (this._resetVelocityTimeout !== null) {
        clearTimeout(this._resetVelocityTimeout);
        this._resetVelocityTimeout = null;
      }
      if (this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        const lastScroll = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity;
        this.velocity = this.animatedScroll - lastScroll;
        this.direction = Math.sign(
          this.animatedScroll - lastScroll
        );
        this.isScrolling = "native";
        this.emit();
        if (this.velocity !== 0) {
          this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity;
            this.velocity = 0;
            this.isScrolling = false;
            this.emit();
          }, 400);
        }
      }
    };
    reset() {
      this.isLocked = false;
      this.isScrolling = false;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity = 0;
      this.animate.stop();
    }
    /**
     * Start lenis scroll after it has been stopped
     */
    start() {
      if (!this.isStopped) return;
      this.isStopped = false;
      this.reset();
    }
    /**
     * Stop lenis scroll
     */
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      this.animate.stop();
      this.reset();
    }
    /**
     * RequestAnimationFrame for lenis
     *
     * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
     */
    raf(time) {
      const deltaTime = time - (this.time || time);
      this.time = time;
      this.animate.advance(deltaTime * 1e-3);
    }
    /**
     * Scroll to a target value
     *
     * @param target The target value to scroll to
     * @param options The options for the scroll
     *
     * @example
     * lenis.scrollTo(100, {
     *   offset: 100,
     *   duration: 1,
     *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
     *   lerp: 0.1,
     *   onStart: () => {
     *     console.log('onStart')
     *   },
     *   onComplete: () => {
     *     console.log('onComplete')
     *   },
     * })
     */
    scrollTo(target, {
      offset = 0,
      immediate = false,
      lock = false,
      duration = this.options.duration,
      easing = this.options.easing,
      lerp: lerp2 = this.options.lerp,
      onStart,
      onComplete,
      force = false,
      // scroll even if stopped
      programmatic = true,
      // called from outside of the class
      userData
    } = {}) {
      if ((this.isStopped || this.isLocked) && !force) return;
      if (typeof target === "string" && ["top", "left", "start"].includes(target)) {
        target = 0;
      } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
        target = this.limit;
      } else {
        let node;
        if (typeof target === "string") {
          node = document.querySelector(target);
        } else if (target instanceof HTMLElement && target?.nodeType) {
          node = target;
        }
        if (node) {
          if (this.options.wrapper !== window) {
            const wrapperRect = this.rootElement.getBoundingClientRect();
            offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
          }
          const rect = node.getBoundingClientRect();
          target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
        }
      }
      if (typeof target !== "number") return;
      target += offset;
      target = Math.round(target);
      if (this.options.infinite) {
        if (programmatic) {
          this.targetScroll = this.animatedScroll = this.scroll;
        }
      } else {
        target = clamp3(0, target, this.limit);
      }
      if (target === this.targetScroll) {
        onStart?.(this);
        onComplete?.(this);
        return;
      }
      this.userData = userData ?? {};
      if (immediate) {
        this.animatedScroll = this.targetScroll = target;
        this.setScroll(this.scroll);
        this.reset();
        this.preventNextNativeScrollEvent();
        this.emit();
        onComplete?.(this);
        this.userData = {};
        return;
      }
      if (!programmatic) {
        this.targetScroll = target;
      }
      this.animate.fromTo(this.animatedScroll, target, {
        duration,
        easing,
        lerp: lerp2,
        onStart: () => {
          if (lock) this.isLocked = true;
          this.isScrolling = "smooth";
          onStart?.(this);
        },
        onUpdate: (value, completed) => {
          this.isScrolling = "smooth";
          this.lastVelocity = this.velocity;
          this.velocity = value - this.animatedScroll;
          this.direction = Math.sign(this.velocity);
          this.animatedScroll = value;
          this.setScroll(this.scroll);
          if (programmatic) {
            this.targetScroll = value;
          }
          if (!completed) this.emit();
          if (completed) {
            this.reset();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            this.preventNextNativeScrollEvent();
          }
        }
      });
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true;
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    /**
     * The root element on which lenis is instanced
     */
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
     * The limit which is the maximum scroll value
     */
    get limit() {
      if (this.options.__experimental__naiveDimensions) {
        if (this.isHorizontal) {
          return this.rootElement.scrollWidth - this.rootElement.clientWidth;
        } else {
          return this.rootElement.scrollHeight - this.rootElement.clientHeight;
        }
      } else {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
    }
    /**
     * Whether or not the scroll is horizontal
     */
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    /**
     * The actual scroll value
     */
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    /**
     * The current scroll value
     */
    get scroll() {
      return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
     * The progress of the scroll relative to the limit
     */
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
     * Current scroll state
     */
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(value) {
      if (this._isScrolling !== value) {
        this._isScrolling = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is stopped
     */
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(value) {
      if (this._isStopped !== value) {
        this._isStopped = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is locked
     */
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(value) {
      if (this._isLocked !== value) {
        this._isLocked = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is smooth scrolling
     */
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    /**
     * The class name applied to the wrapper element
     */
    get className() {
      let className = "lenis";
      if (this.isStopped) className += " lenis-stopped";
      if (this.isLocked) className += " lenis-locked";
      if (this.isScrolling) className += " lenis-scrolling";
      if (this.isScrolling === "smooth") className += " lenis-smooth";
      return className;
    }
    updateClassName() {
      this.cleanUpClassName();
      this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
  };

  // src/modules/smoothScroll.js
  function smoothScroll() {
    window.lenis = new Lenis({
      lerp: 0.1
    });
    window.lenis.on("scroll", ScrollTrigger2.update);
    gsapWithCSS.ticker.add((time) => {
      window.lenis.raf(time * 1e3);
    });
    gsapWithCSS.ticker.lagSmoothing(0);
  }
  function nestedLenisScroll() {
    const nestedTargets = document.querySelectorAll('[data-nested-lenis="wrapper"]');
    if (!nestedTargets.length) return;
    nestedTargets.forEach((wrapper) => {
      const content = wrapper.querySelector('[data-nested-lenis="content"]');
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile && wrapper.getAttribute("data-disable-lenis") === "mobile") {
        return;
      }
      const nestedLenis = new Lenis({
        wrapper,
        content,
        lerp: 0.1,
        overscroll: false
      });
      gsapWithCSS.ticker.add((time) => {
        if (nestedLenis) {
          nestedLenis.raf(time * 1e3);
        }
      });
    });
  }
  function toggleScroll(disable = false) {
    if (disable) {
      window.lenis.stop();
      osInstance.options({
        overflow: {
          x: "hidden",
          // Disable horizontal scrolling
          y: "hidden"
          // Disable vertical scrolling
        },
        scrollbars: {
          visibility: "hidden"
          // Hide the scrollbars
        }
      });
    } else {
      window.lenis.start();
      osInstance.options({
        overflow: {
          x: "scroll",
          // Re-enable horizontal scrolling (if applicable)
          y: "scroll"
          // Re-enable vertical scrolling
        },
        scrollbars: {
          visibility: "auto"
          // Make the scrollbars visible again
        }
      });
    }
  }

  // node_modules/overlayscrollbars/overlayscrollbars.mjs
  var createCache = (t2, n2) => {
    const { o: o2, i: s2, u: e2 } = t2;
    let c2 = o2;
    let r2;
    const cacheUpdateContextual = (t3, n3) => {
      const o3 = c2;
      const l2 = t3;
      const i2 = n3 || (s2 ? !s2(o3, l2) : o3 !== l2);
      if (i2 || e2) {
        c2 = l2;
        r2 = o3;
      }
      return [c2, i2, r2];
    };
    const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
    const getCurrentCache = (t3) => [c2, !!t3, r2];
    return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
  };
  var t = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document;
  var n = t ? window : {};
  var o = Math.max;
  var s = Math.min;
  var e = Math.round;
  var c = Math.abs;
  var r = Math.sign;
  var l = n.cancelAnimationFrame;
  var i = n.requestAnimationFrame;
  var a = n.setTimeout;
  var u = n.clearTimeout;
  var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
  var _ = getApi("MutationObserver");
  var d = getApi("IntersectionObserver");
  var f = getApi("ResizeObserver");
  var v = getApi("ScrollTimeline");
  var isUndefined = (t2) => t2 === void 0;
  var isNull = (t2) => t2 === null;
  var isNumber = (t2) => typeof t2 === "number";
  var isString = (t2) => typeof t2 === "string";
  var isBoolean = (t2) => typeof t2 === "boolean";
  var isFunction = (t2) => typeof t2 === "function";
  var isArray = (t2) => Array.isArray(t2);
  var isObject3 = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
  var isArrayLike = (t2) => {
    const n2 = !!t2 && t2.length;
    const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
    return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject3(t2) ? n2 - 1 in t2 : true : false;
  };
  var isPlainObject = (t2) => !!t2 && t2.constructor === Object;
  var isHTMLElement = (t2) => t2 instanceof HTMLElement;
  var isElement = (t2) => t2 instanceof Element;
  function each(t2, n2) {
    if (isArrayLike(t2)) {
      for (let o2 = 0; o2 < t2.length; o2++) {
        if (n2(t2[o2], o2, t2) === false) {
          break;
        }
      }
    } else if (t2) {
      each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
    }
    return t2;
  }
  var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
  var concat = (t2, n2) => t2.concat(n2);
  var push = (t2, n2, o2) => {
    !o2 && !isString(n2) && isArrayLike(n2) ? Array.prototype.push.apply(t2, n2) : t2.push(n2);
    return t2;
  };
  var from = (t2) => Array.from(t2 || []);
  var createOrKeepArray = (t2) => {
    if (isArray(t2)) {
      return t2;
    }
    return !isString(t2) && isArrayLike(t2) ? from(t2) : [t2];
  };
  var isEmptyArray = (t2) => !!t2 && !t2.length;
  var deduplicateArray = (t2) => from(new Set(t2));
  var runEachAndClear = (t2, n2, o2) => {
    const runFn = (t3) => t3 ? t3.apply(void 0, n2 || []) : true;
    each(t2, runFn);
    !o2 && (t2.length = 0);
  };
  var p = "paddingTop";
  var h = "paddingRight";
  var g = "paddingLeft";
  var b = "paddingBottom";
  var w = "marginLeft";
  var y = "marginRight";
  var S = "marginBottom";
  var m = "overflowX";
  var O = "overflowY";
  var $2 = "width";
  var C = "height";
  var x = "visible";
  var H = "hidden";
  var E = "scroll";
  var capitalizeFirstLetter = (t2) => {
    const n2 = String(t2 || "");
    return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
  };
  var equal2 = (t2, n2, o2, s2) => {
    if (t2 && n2) {
      let e2 = true;
      each(o2, (o3) => {
        const c2 = s2 ? s2(t2[o3]) : t2[o3];
        const r2 = s2 ? s2(n2[o3]) : n2[o3];
        if (c2 !== r2) {
          e2 = false;
        }
      });
      return e2;
    }
    return false;
  };
  var equalWH = (t2, n2) => equal2(t2, n2, ["w", "h"]);
  var equalXY = (t2, n2) => equal2(t2, n2, ["x", "y"]);
  var equalTRBL = (t2, n2) => equal2(t2, n2, ["t", "r", "b", "l"]);
  var noop2 = () => {
  };
  var bind = (t2, ...n2) => t2.bind(0, ...n2);
  var selfClearTimeout = (t2) => {
    let n2;
    const o2 = t2 ? a : i;
    const s2 = t2 ? u : l;
    return [(e2) => {
      s2(n2);
      n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
    }, () => s2(n2)];
  };
  var debounce2 = (t2, n2) => {
    const { _: o2, v: s2, p: e2, S: c2 } = n2 || {};
    let r2;
    let _2;
    let d2;
    let f2;
    let v2 = noop2;
    const p2 = function invokeFunctionToDebounce(n3) {
      v2();
      u(r2);
      f2 = r2 = _2 = void 0;
      v2 = noop2;
      t2.apply(this, n3);
    };
    const mergeParms = (t3) => c2 && _2 ? c2(_2, t3) : t3;
    const flush = () => {
      if (v2 !== noop2) {
        p2(mergeParms(d2) || d2);
      }
    };
    const h2 = function debouncedFn() {
      const t3 = from(arguments);
      const n3 = isFunction(o2) ? o2() : o2;
      const c3 = isNumber(n3) && n3 >= 0;
      if (c3) {
        const o3 = isFunction(s2) ? s2() : s2;
        const c4 = isNumber(o3) && o3 >= 0;
        const h3 = n3 > 0 ? a : i;
        const g2 = n3 > 0 ? u : l;
        const b2 = mergeParms(t3);
        const w2 = b2 || t3;
        const y2 = p2.bind(0, w2);
        let S2;
        v2();
        if (e2 && !f2) {
          y2();
          f2 = true;
          S2 = h3(() => f2 = void 0, n3);
        } else {
          S2 = h3(y2, n3);
          if (c4 && !r2) {
            r2 = a(flush, o3);
          }
        }
        v2 = () => g2(S2);
        _2 = d2 = w2;
      } else {
        p2(t3);
      }
    };
    h2.m = flush;
    return h2;
  };
  var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
  var keys = (t2) => t2 ? Object.keys(t2) : [];
  var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
    const l2 = [n2, o2, s2, e2, c2, r2];
    if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
      t2 = {};
    }
    each(l2, (n3) => {
      each(n3, (o3, s3) => {
        const e3 = n3[s3];
        if (t2 === e3) {
          return true;
        }
        const c3 = isArray(e3);
        if (e3 && isPlainObject(e3)) {
          const n4 = t2[s3];
          let o4 = n4;
          if (c3 && !isArray(n4)) {
            o4 = [];
          } else if (!c3 && !isPlainObject(n4)) {
            o4 = {};
          }
          t2[s3] = assignDeep(o4, e3);
        } else {
          t2[s3] = c3 ? e3.slice() : e3;
        }
      });
    });
    return t2;
  };
  var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, o2, s2) => {
    if (t3 === void 0) {
      delete s2[o2];
    } else if (n2 && t3 && isPlainObject(t3)) {
      s2[o2] = removeUndefinedProperties(t3, n2);
    }
  });
  var isEmptyObject = (t2) => !keys(t2).length;
  var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
  var getDomTokensArray = (t2) => deduplicateArray((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3));
  var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
  var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
  var setAttrs = (t2, n2, o2) => {
    each(getDomTokensArray(n2), (n3) => {
      t2 && t2.setAttribute(n3, String(o2 || ""));
    });
  };
  var removeAttrs = (t2, n2) => {
    each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
  };
  var domTokenListAttr = (t2, n2) => {
    const o2 = getDomTokensArray(getAttr(t2, n2));
    const s2 = bind(setAttrs, t2, n2);
    const domTokenListOperation = (t3, n3) => {
      const s3 = new Set(o2);
      each(getDomTokensArray(t3), (t4) => {
        s3[n3](t4);
      });
      return from(s3).join(" ");
    };
    return {
      O: (t3) => s2(domTokenListOperation(t3, "delete")),
      $: (t3) => s2(domTokenListOperation(t3, "add")),
      C: (t3) => {
        const n3 = getDomTokensArray(t3);
        return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
      }
    };
  };
  var removeAttrClass = (t2, n2, o2) => {
    domTokenListAttr(t2, n2).O(o2);
    return bind(addAttrClass, t2, n2, o2);
  };
  var addAttrClass = (t2, n2, o2) => {
    domTokenListAttr(t2, n2).$(o2);
    return bind(removeAttrClass, t2, n2, o2);
  };
  var addRemoveAttrClass = (t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
  var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).C(o2);
  var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
  var removeClass = (t2, n2) => {
    createDomTokenListClass(t2).O(n2);
  };
  var addClass = (t2, n2) => {
    createDomTokenListClass(t2).$(n2);
    return bind(removeClass, t2, n2);
  };
  var find = (t2, n2) => {
    const o2 = n2 ? isElement(n2) && n2 : document;
    return o2 ? from(o2.querySelectorAll(t2)) : [];
  };
  var findFirst = (t2, n2) => {
    const o2 = n2 ? isElement(n2) && n2 : document;
    return o2 && o2.querySelector(t2);
  };
  var is = (t2, n2) => isElement(t2) && t2.matches(n2);
  var isBodyElement = (t2) => is(t2, "body");
  var contents = (t2) => t2 ? from(t2.childNodes) : [];
  var parent = (t2) => t2 && t2.parentElement;
  var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
  var getFocusedElement = (t2) => (t2 || document).activeElement;
  var liesBetween = (t2, n2, o2) => {
    const s2 = closest(t2, n2);
    const e2 = t2 && findFirst(o2, s2);
    const c2 = closest(e2, n2) === s2;
    return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
  };
  var removeElements = (t2) => {
    each(createOrKeepArray(t2), (t3) => {
      const n2 = parent(t3);
      t3 && n2 && n2.removeChild(t3);
    });
  };
  var appendChildren = (t2, n2) => bind(removeElements, t2 && n2 && each(createOrKeepArray(n2), (n3) => {
    n3 && t2.appendChild(n3);
  }));
  var createDiv = (t2) => {
    const n2 = document.createElement("div");
    setAttrs(n2, "class", t2);
    return n2;
  };
  var createDOM = (t2) => {
    const n2 = createDiv();
    n2.innerHTML = t2.trim();
    return each(contents(n2), (t3) => removeElements(t3));
  };
  var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
  var validFiniteNumber = (t2) => {
    const n2 = t2 || 0;
    return isFinite(n2) ? n2 : 0;
  };
  var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
  var roundCssNumber = (t2) => Math.round(t2 * 1e4) / 1e4;
  var numberToCssPx = (t2) => `${roundCssNumber(validFiniteNumber(t2))}px`;
  function setStyles(t2, n2) {
    t2 && n2 && each(n2, (n3, o2) => {
      try {
        const s2 = t2.style;
        const e2 = isNull(n3) || isBoolean(n3) ? "" : isNumber(n3) ? numberToCssPx(n3) : n3;
        if (o2.indexOf("--") === 0) {
          s2.setProperty(o2, e2);
        } else {
          s2[o2] = e2;
        }
      } catch (s2) {
      }
    });
  }
  function getStyles(t2, o2, s2) {
    const e2 = isString(o2);
    let c2 = e2 ? "" : {};
    if (t2) {
      const r2 = n.getComputedStyle(t2, s2) || t2.style;
      c2 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => {
        t3[n2] = getCSSVal(r2, n2);
        return t3;
      }, c2);
    }
    return c2;
  }
  var topRightBottomLeft = (t2, n2, o2) => {
    const s2 = n2 ? `${n2}-` : "";
    const e2 = o2 ? `-${o2}` : "";
    const c2 = `${s2}top${e2}`;
    const r2 = `${s2}right${e2}`;
    const l2 = `${s2}bottom${e2}`;
    const i2 = `${s2}left${e2}`;
    const a2 = getStyles(t2, [c2, r2, l2, i2]);
    return {
      t: parseToZeroOrNumber(a2[c2]),
      r: parseToZeroOrNumber(a2[r2]),
      b: parseToZeroOrNumber(a2[l2]),
      l: parseToZeroOrNumber(a2[i2])
    };
  };
  var getTrasformTranslateValue = (t2, n2) => `translate${isObject3(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
  var elementHasDimensions = (t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length);
  var z = {
    w: 0,
    h: 0
  };
  var getElmWidthHeightProperty = (t2, n2) => n2 ? {
    w: n2[`${t2}Width`],
    h: n2[`${t2}Height`]
  } : z;
  var getWindowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
  var I = bind(getElmWidthHeightProperty, "offset");
  var A = bind(getElmWidthHeightProperty, "client");
  var D = bind(getElmWidthHeightProperty, "scroll");
  var getFractionalSize = (t2) => {
    const n2 = parseFloat(getStyles(t2, $2)) || 0;
    const o2 = parseFloat(getStyles(t2, C)) || 0;
    return {
      w: n2 - e(n2),
      h: o2 - e(o2)
    };
  };
  var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
  var hasDimensions = (t2) => !!t2 && elementHasDimensions(t2);
  var domRectHasDimensions = (t2) => !!(t2 && (t2[C] || t2[$2]));
  var domRectAppeared = (t2, n2) => {
    const o2 = domRectHasDimensions(t2);
    const s2 = domRectHasDimensions(n2);
    return !s2 && o2;
  };
  var removeEventListener2 = (t2, n2, o2, s2) => {
    each(getDomTokensArray(n2), (n3) => {
      t2 && t2.removeEventListener(n3, o2, s2);
    });
  };
  var addEventListener2 = (t2, n2, o2, s2) => {
    var e2;
    const c2 = (e2 = s2 && s2.H) != null ? e2 : true;
    const r2 = s2 && s2.I || false;
    const l2 = s2 && s2.A || false;
    const i2 = {
      passive: c2,
      capture: r2
    };
    return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
      const s3 = l2 ? (e3) => {
        removeEventListener2(t2, n3, s3, r2);
        o2 && o2(e3);
      } : o2;
      t2 && t2.addEventListener(n3, s3, i2);
      return bind(removeEventListener2, t2, n3, s3, r2);
    }));
  };
  var stopPropagation = (t2) => t2.stopPropagation();
  var preventDefault = (t2) => t2.preventDefault();
  var stopAndPrevent = (t2) => stopPropagation(t2) || preventDefault(t2);
  var scrollElementTo = (t2, n2) => {
    const { x: o2, y: s2 } = isNumber(n2) ? {
      x: n2,
      y: n2
    } : n2 || {};
    isNumber(o2) && (t2.scrollLeft = o2);
    isNumber(s2) && (t2.scrollTop = s2);
  };
  var getElementScroll = (t2) => ({
    x: t2.scrollLeft,
    y: t2.scrollTop
  });
  var getZeroScrollCoordinates = () => ({
    D: {
      x: 0,
      y: 0
    },
    M: {
      x: 0,
      y: 0
    }
  });
  var sanitizeScrollCoordinates = (t2, n2) => {
    const { D: o2, M: s2 } = t2;
    const { w: e2, h: l2 } = n2;
    const sanitizeAxis = (t3, n3, o3) => {
      let s3 = r(t3) * o3;
      let e3 = r(n3) * o3;
      if (s3 === e3) {
        const o4 = c(t3);
        const r2 = c(n3);
        e3 = o4 > r2 ? 0 : e3;
        s3 = o4 < r2 ? 0 : s3;
      }
      s3 = s3 === e3 ? 0 : s3;
      return [s3 + 0, e3 + 0];
    };
    const [i2, a2] = sanitizeAxis(o2.x, s2.x, e2);
    const [u2, _2] = sanitizeAxis(o2.y, s2.y, l2);
    return {
      D: {
        x: i2,
        y: u2
      },
      M: {
        x: a2,
        y: _2
      }
    };
  };
  var isDefaultDirectionScrollCoordinates = ({ D: t2, M: n2 }) => {
    const getAxis = (t3, n3) => t3 === 0 && t3 <= n3;
    return {
      x: getAxis(t2.x, n2.x),
      y: getAxis(t2.y, n2.y)
    };
  };
  var getScrollCoordinatesPercent = ({ D: t2, M: n2 }, o2) => {
    const getAxis = (t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0);
    return {
      x: getAxis(t2.x, n2.x, o2.x),
      y: getAxis(t2.y, n2.y, o2.y)
    };
  };
  var focusElement = (t2) => {
    if (t2 && t2.focus) {
      t2.focus({
        preventScroll: true
      });
    }
  };
  var manageListener = (t2, n2) => {
    each(createOrKeepArray(n2), t2);
  };
  var createEventListenerHub = (t2) => {
    const n2 = /* @__PURE__ */ new Map();
    const removeEvent = (t3, o2) => {
      if (t3) {
        const s2 = n2.get(t3);
        manageListener((t4) => {
          if (s2) {
            s2[t4 ? "delete" : "clear"](t4);
          }
        }, o2);
      } else {
        n2.forEach((t4) => {
          t4.clear();
        });
        n2.clear();
      }
    };
    const addEvent = (t3, o2) => {
      if (isString(t3)) {
        const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
        n2.set(t3, s3);
        manageListener((t4) => {
          isFunction(t4) && s3.add(t4);
        }, o2);
        return bind(removeEvent, t3, o2);
      }
      if (isBoolean(o2) && o2) {
        removeEvent();
      }
      const s2 = keys(t3);
      const e2 = [];
      each(s2, (n3) => {
        const o3 = t3[n3];
        o3 && push(e2, addEvent(n3, o3));
      });
      return bind(runEachAndClear, e2);
    };
    const triggerEvent = (t3, o2) => {
      each(from(n2.get(t3)), (t4) => {
        if (o2 && !isEmptyArray(o2)) {
          t4.apply(0, o2);
        } else {
          t4();
        }
      });
    };
    addEvent(t2 || {});
    return [addEvent, removeEvent, triggerEvent];
  };
  var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
    if (isFunction(n2)) {
      throw 0;
    }
    return n2;
  });
  var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
  var M = {
    paddingAbsolute: false,
    showNativeOverlaidScrollbars: false,
    update: {
      elementEvents: [["img", "load"]],
      debounce: [0, 33],
      attributes: null,
      ignoreMutation: null
    },
    overflow: {
      x: "scroll",
      y: "scroll"
    },
    scrollbars: {
      theme: "os-theme-dark",
      visibility: "auto",
      autoHide: "never",
      autoHideDelay: 1300,
      autoHideSuspend: false,
      dragScroll: true,
      clickScroll: false,
      pointers: ["mouse", "touch", "pen"]
    }
  };
  var getOptionsDiff = (t2, n2) => {
    const o2 = {};
    const s2 = concat(keys(n2), keys(t2));
    each(s2, (s3) => {
      const e2 = t2[s3];
      const c2 = n2[s3];
      if (isObject3(e2) && isObject3(c2)) {
        assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
        if (isEmptyObject(o2[s3])) {
          delete o2[s3];
        }
      } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
        let t3 = true;
        if (isArray(e2) || isArray(c2)) {
          try {
            if (opsStringify(e2) === opsStringify(c2)) {
              t3 = false;
            }
          } catch (r2) {
          }
        }
        if (t3) {
          o2[s3] = c2;
        }
      }
    });
    return o2;
  };
  var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
  var T = `data-overlayscrollbars`;
  var k = "os-environment";
  var R = `${k}-scrollbar-hidden`;
  var V = `${T}-initialize`;
  var L = "noClipping";
  var U = `${T}-body`;
  var P = T;
  var N = "host";
  var q = `${T}-viewport`;
  var B = m;
  var F = O;
  var j = "arrange";
  var X = "measuring";
  var Y = "scrolling";
  var W = "scrollbarHidden";
  var J = "noContent";
  var G = `${T}-padding`;
  var K = `${T}-content`;
  var Q = "os-size-observer";
  var Z = `${Q}-appear`;
  var tt = `${Q}-listener`;
  var nt = `${tt}-scroll`;
  var ot = `${tt}-item`;
  var st = `${ot}-final`;
  var et = "os-trinsic-observer";
  var ct = "os-theme-none";
  var rt = "os-scrollbar";
  var lt = `${rt}-rtl`;
  var it = `${rt}-horizontal`;
  var at = `${rt}-vertical`;
  var ut = `${rt}-track`;
  var _t = `${rt}-handle`;
  var dt = `${rt}-visible`;
  var ft = `${rt}-cornerless`;
  var vt = `${rt}-interaction`;
  var pt = `${rt}-unusable`;
  var ht = `${rt}-auto-hide`;
  var gt = `${ht}-hidden`;
  var bt = `${rt}-wheel`;
  var wt = `${ut}-interactive`;
  var yt = `${_t}-interactive`;
  var St;
  var getNonce = () => St;
  var setNonce = (t2) => {
    St = t2;
  };
  var mt;
  var createEnvironment = () => {
    const getNativeScrollbarSize = (t3, n2, o3) => {
      appendChildren(document.body, t3);
      appendChildren(document.body, t3);
      const s3 = A(t3);
      const e3 = I(t3);
      const c3 = getFractionalSize(n2);
      o3 && removeElements(t3);
      return {
        x: e3.h - s3.h + c3.h,
        y: e3.w - s3.w + c3.w
      };
    };
    const getNativeScrollbarsHiding = (t3) => {
      let n2 = false;
      const o3 = addClass(t3, R);
      try {
        n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
      } catch (s3) {
      }
      o3();
      return n2;
    };
    const t2 = `.${k}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${k} div{width:200%;height:200%;margin:10px 0}.${R}{scrollbar-width:none!important}.${R}::-webkit-scrollbar,.${R}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
    const o2 = createDOM(`<div class="${k}"><div></div><style>${t2}</style></div>`);
    const s2 = o2[0];
    const e2 = s2.firstChild;
    const c2 = s2.lastChild;
    const r2 = getNonce();
    if (r2) {
      c2.nonce = r2;
    }
    const [l2, , i2] = createEventListenerHub();
    const [a2, u2] = createCache({
      o: getNativeScrollbarSize(s2, e2),
      i: equalXY
    }, bind(getNativeScrollbarSize, s2, e2, true));
    const [_2] = u2();
    const d2 = getNativeScrollbarsHiding(s2);
    const f2 = {
      x: _2.x === 0,
      y: _2.y === 0
    };
    const p2 = {
      elements: {
        host: null,
        padding: !d2,
        viewport: (t3) => d2 && isBodyElement(t3) && t3,
        content: false
      },
      scrollbars: {
        slot: true
      },
      cancel: {
        nativeScrollbarsOverlaid: false,
        body: null
      }
    };
    const h2 = assignDeep({}, M);
    const g2 = bind(assignDeep, {}, h2);
    const b2 = bind(assignDeep, {}, p2);
    const w2 = {
      T: _2,
      k: f2,
      R: d2,
      V: !!v,
      L: bind(l2, "r"),
      U: b2,
      P: (t3) => assignDeep(p2, t3) && b2(),
      N: g2,
      q: (t3) => assignDeep(h2, t3) && g2(),
      B: assignDeep({}, p2),
      F: assignDeep({}, h2)
    };
    removeAttrs(s2, "style");
    removeElements(s2);
    addEventListener2(n, "resize", () => {
      i2("r", []);
    });
    if (isFunction(n.matchMedia) && !d2 && (!f2.x || !f2.y)) {
      const addZoomListener = (t3) => {
        const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
        addEventListener2(o3, "change", () => {
          t3();
          addZoomListener(t3);
        }, {
          A: true
        });
      };
      addZoomListener(() => {
        const [t3, n2] = a2();
        assignDeep(w2.T, t3);
        i2("r", [n2]);
      });
    }
    return w2;
  };
  var getEnvironment = () => {
    if (!mt) {
      mt = createEnvironment();
    }
    return mt;
  };
  var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
  var staticInitializationElement = (t2, n2, o2, s2) => {
    const e2 = isUndefined(s2) ? o2 : s2;
    const c2 = resolveInitialization(t2, e2);
    return c2 || n2.apply(0, t2);
  };
  var dynamicInitializationElement = (t2, n2, o2, s2) => {
    const e2 = isUndefined(s2) ? o2 : s2;
    const c2 = resolveInitialization(t2, e2);
    return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
  };
  var cancelInitialization = (t2, n2) => {
    const { nativeScrollbarsOverlaid: o2, body: s2 } = n2 || {};
    const { k: e2, R: c2, U: r2 } = getEnvironment();
    const { nativeScrollbarsOverlaid: l2, body: i2 } = r2().cancel;
    const a2 = o2 != null ? o2 : l2;
    const u2 = isUndefined(s2) ? i2 : s2;
    const _2 = (e2.x || e2.y) && a2;
    const d2 = t2 && (isNull(u2) ? !c2 : u2);
    return !!_2 || !!d2;
  };
  var Ot = /* @__PURE__ */ new WeakMap();
  var addInstance = (t2, n2) => {
    Ot.set(t2, n2);
  };
  var removeInstance = (t2) => {
    Ot.delete(t2);
  };
  var getInstance = (t2) => Ot.get(t2);
  var createEventContentChange = (t2, n2, o2) => {
    let s2 = false;
    const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
    const destroy = () => {
      s2 = true;
    };
    const updateElements = (c2) => {
      if (e2 && o2) {
        const r2 = o2.map((n3) => {
          const [o3, s3] = n3 || [];
          const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
          return [e3, s3];
        });
        each(r2, (o3) => each(o3[0], (c3) => {
          const r3 = o3[1];
          const l2 = e2.get(c3) || [];
          const i2 = t2.contains(c3);
          if (i2 && r3) {
            const t3 = addEventListener2(c3, r3, (o4) => {
              if (s2) {
                t3();
                e2.delete(c3);
              } else {
                n2(o4);
              }
            });
            e2.set(c3, push(l2, t3));
          } else {
            runEachAndClear(l2);
            e2.delete(c3);
          }
        }));
      }
    };
    updateElements();
    return [destroy, updateElements];
  };
  var createDOMObserver = (t2, n2, o2, s2) => {
    let e2 = false;
    const { j: c2, X: r2, Y: l2, W: i2, J: a2, G: u2 } = s2 || {};
    const d2 = debounce2(() => e2 && o2(true), {
      _: 33,
      v: 99
    });
    const [f2, v2] = createEventContentChange(t2, d2, l2);
    const p2 = c2 || [];
    const h2 = r2 || [];
    const g2 = concat(p2, h2);
    const observerCallback = (e3, c3) => {
      if (!isEmptyArray(c3)) {
        const r3 = a2 || noop2;
        const l3 = u2 || noop2;
        const _2 = [];
        const d3 = [];
        let f3 = false;
        let p3 = false;
        each(c3, (o3) => {
          const { attributeName: e4, target: c4, type: a3, oldValue: u3, addedNodes: v3, removedNodes: g3 } = o3;
          const b3 = a3 === "attributes";
          const w2 = a3 === "childList";
          const y2 = t2 === c4;
          const S2 = b3 && e4;
          const m2 = S2 && getAttr(c4, e4 || "");
          const O2 = isString(m2) ? m2 : null;
          const $3 = S2 && u3 !== O2;
          const C2 = inArray(h2, e4) && $3;
          if (n2 && (w2 || !y2)) {
            const n3 = b3 && $3;
            const a4 = n3 && i2 && is(c4, i2);
            const d4 = a4 ? !r3(c4, e4, u3, O2) : !b3 || n3;
            const f4 = d4 && !l3(o3, !!a4, t2, s2);
            each(v3, (t3) => push(_2, t3));
            each(g3, (t3) => push(_2, t3));
            p3 = p3 || f4;
          }
          if (!n2 && y2 && $3 && !r3(c4, e4, u3, O2)) {
            push(d3, e4);
            f3 = f3 || C2;
          }
        });
        v2((t3) => deduplicateArray(_2).reduce((n3, o3) => {
          push(n3, find(t3, o3));
          return is(o3, t3) ? push(n3, o3) : n3;
        }, []));
        if (n2) {
          !e3 && p3 && o2(false);
          return [false];
        }
        if (!isEmptyArray(d3) || f3) {
          const t3 = [deduplicateArray(d3), f3];
          !e3 && o2.apply(0, t3);
          return t3;
        }
      }
    };
    const b2 = new _(bind(observerCallback, false));
    return [() => {
      b2.observe(t2, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: g2,
        subtree: n2,
        childList: n2,
        characterData: n2
      });
      e2 = true;
      return () => {
        if (e2) {
          f2();
          b2.disconnect();
          e2 = false;
        }
      };
    }, () => {
      if (e2) {
        d2.m();
        return observerCallback(true, b2.takeRecords());
      }
    }];
  };
  var $t = {};
  var Ct = {};
  var addPlugins = (t2) => {
    each(t2, (t3) => each(t3, (n2, o2) => {
      $t[o2] = t3[o2];
    }));
  };
  var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
    const { static: e2, instance: c2 } = t2[s2];
    const [r2, l2, i2] = o2 || [];
    const a2 = o2 ? c2 : e2;
    if (a2) {
      const t3 = o2 ? a2(r2, l2, n2) : a2(n2);
      return (i2 || Ct)[s2] = t3;
    }
  });
  var getStaticPluginModuleInstance = (t2) => Ct[t2];
  var xt = "__osOptionsValidationPlugin";
  var Ht = "__osSizeObserverPlugin";
  var getShowNativeOverlaidScrollbars = (t2, n2) => {
    const { k: o2 } = n2;
    const [s2, e2] = t2("showNativeOverlaidScrollbars");
    return [s2 && o2.x && o2.y, e2];
  };
  var overflowIsVisible = (t2) => t2.indexOf(x) === 0;
  var createViewportOverflowState = (t2, n2) => {
    const getAxisOverflowStyle = (t3, n3, o3, s2) => {
      const e2 = t3 === x ? H : t3.replace(`${x}-`, "");
      const c2 = overflowIsVisible(t3);
      const r2 = overflowIsVisible(o3);
      if (!n3 && !s2) {
        return H;
      }
      if (c2 && r2) {
        return x;
      }
      if (c2) {
        const t4 = n3 ? x : H;
        return n3 && s2 ? e2 : t4;
      }
      const l2 = r2 && s2 ? x : H;
      return n3 ? e2 : l2;
    };
    const o2 = {
      x: getAxisOverflowStyle(n2.x, t2.x, n2.y, t2.y),
      y: getAxisOverflowStyle(n2.y, t2.y, n2.x, t2.x)
    };
    return {
      K: o2,
      Z: {
        x: o2.x === E,
        y: o2.y === E
      }
    };
  };
  var zt = "__osScrollbarsHidingPlugin";
  var At = "__osClickScrollPlugin";
  var createSizeObserver = (t2, n2, o2) => {
    const { dt: s2 } = o2 || {};
    const e2 = getStaticPluginModuleInstance(Ht);
    const [c2] = createCache({
      o: false,
      u: true
    });
    return () => {
      const o3 = [];
      const r2 = createDOM(`<div class="${Q}"><div class="${tt}"></div></div>`);
      const l2 = r2[0];
      const i2 = l2.firstChild;
      const onSizeChangedCallbackProxy = (t3) => {
        const o4 = t3 instanceof ResizeObserverEntry;
        let s3 = false;
        let e3 = false;
        if (o4) {
          const [n3, , o5] = c2(t3.contentRect);
          const r3 = domRectHasDimensions(n3);
          e3 = domRectAppeared(n3, o5);
          s3 = !e3 && !r3;
        } else {
          e3 = t3 === true;
        }
        if (!s3) {
          n2({
            ft: true,
            dt: e3
          });
        }
      };
      if (f) {
        const t3 = new f((t4) => onSizeChangedCallbackProxy(t4.pop()));
        t3.observe(i2);
        push(o3, () => {
          t3.disconnect();
        });
      } else if (e2) {
        const [t3, n3] = e2(i2, onSizeChangedCallbackProxy, s2);
        push(o3, concat([addClass(l2, Z), addEventListener2(l2, "animationstart", t3)], n3));
      } else {
        return noop2;
      }
      return bind(runEachAndClear, push(o3, appendChildren(t2, l2)));
    };
  };
  var createTrinsicObserver = (t2, n2) => {
    let o2;
    const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
    const s2 = createDiv(et);
    const [e2] = createCache({
      o: false
    });
    const triggerOnTrinsicChangedCallback = (t3, o3) => {
      if (t3) {
        const s3 = e2(isHeightIntrinsic(t3));
        const [, c2] = s3;
        return c2 && !o3 && n2(s3) && [s3];
      }
    };
    const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
    return [() => {
      const n3 = [];
      if (d) {
        o2 = new d(bind(intersectionObserverCallback, false), {
          root: t2
        });
        o2.observe(s2);
        push(n3, () => {
          o2.disconnect();
        });
      } else {
        const onSizeChanged = () => {
          const t3 = I(s2);
          triggerOnTrinsicChangedCallback(t3);
        };
        push(n3, createSizeObserver(s2, onSizeChanged)());
        onSizeChanged();
      }
      return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
    }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
  };
  var createObserversSetup = (t2, n2, o2, s2) => {
    let e2;
    let c2;
    let r2;
    let l2;
    let i2;
    let a2;
    const u2 = `[${P}]`;
    const _2 = `[${q}]`;
    const d2 = ["id", "class", "style", "open", "wrap", "cols", "rows"];
    const { vt: v2, ht: p2, ot: h2, gt: g2, bt: b2, nt: w2, wt: y2, yt: S2, St: m2, Ot: O2 } = t2;
    const getDirectionIsRTL = (t3) => getStyles(t3, "direction") === "rtl";
    const $3 = {
      $t: false,
      ct: getDirectionIsRTL(v2)
    };
    const C2 = getEnvironment();
    const x2 = getStaticPluginModuleInstance(zt);
    const [H2] = createCache({
      i: equalWH,
      o: {
        w: 0,
        h: 0
      }
    }, () => {
      const s3 = x2 && x2.tt(t2, n2, $3, C2, o2).ut;
      const e3 = y2 && w2;
      const c3 = !e3 && hasAttrClass(p2, P, L);
      const r3 = !w2 && S2(j);
      const l3 = r3 && getElementScroll(g2);
      const i3 = l3 && O2();
      const a3 = m2(X, c3);
      const u3 = r3 && s3 && s3()[0];
      const _3 = D(h2);
      const d3 = getFractionalSize(h2);
      u3 && u3();
      scrollElementTo(g2, l3);
      i3 && i3();
      c3 && a3();
      return {
        w: _3.w + d3.w,
        h: _3.h + d3.h
      };
    });
    const E2 = debounce2(s2, {
      _: () => e2,
      v: () => c2,
      S(t3, n3) {
        const [o3] = t3;
        const [s3] = n3;
        return [concat(keys(o3), keys(s3)).reduce((t4, n4) => {
          t4[n4] = o3[n4] || s3[n4];
          return t4;
        }, {})];
      }
    });
    const setDirection = (t3) => {
      const n3 = getDirectionIsRTL(v2);
      assignDeep(t3, {
        Ct: a2 !== n3
      });
      assignDeep($3, {
        ct: n3
      });
      a2 = n3;
    };
    const onTrinsicChanged = (t3, n3) => {
      const [o3, e3] = t3;
      const c3 = {
        xt: e3
      };
      assignDeep($3, {
        $t: o3
      });
      !n3 && s2(c3);
      return c3;
    };
    const onSizeChanged = ({ ft: t3, dt: n3 }) => {
      const o3 = t3 && !n3;
      const e3 = !o3 && C2.R ? E2 : s2;
      const c3 = {
        ft: t3 || n3,
        dt: n3
      };
      setDirection(c3);
      e3(c3);
    };
    const onContentMutation = (t3, n3) => {
      const [, o3] = H2();
      const e3 = {
        Ht: o3
      };
      setDirection(e3);
      const c3 = t3 ? s2 : E2;
      o3 && !n3 && c3(e3);
      return e3;
    };
    const onHostMutation = (t3, n3, o3) => {
      const s3 = {
        Et: n3
      };
      setDirection(s3);
      if (n3 && !o3) {
        E2(s3);
      }
      return s3;
    };
    const [z2, I2] = b2 ? createTrinsicObserver(p2, onTrinsicChanged) : [];
    const A2 = !w2 && createSizeObserver(p2, onSizeChanged, {
      dt: true
    });
    const [M2, T2] = createDOMObserver(p2, false, onHostMutation, {
      X: d2,
      j: d2
    });
    const k2 = w2 && f && new f((t3) => {
      const n3 = t3[t3.length - 1].contentRect;
      onSizeChanged({
        ft: true,
        dt: domRectAppeared(n3, i2)
      });
      i2 = n3;
    });
    const R2 = debounce2(() => {
      const [, t3] = H2();
      s2({
        Ht: t3
      });
    }, {
      _: 222,
      p: true
    });
    return [() => {
      k2 && k2.observe(p2);
      const t3 = A2 && A2();
      const n3 = z2 && z2();
      const o3 = M2();
      const s3 = C2.L((t4) => {
        if (t4) {
          E2({
            zt: t4
          });
        } else {
          R2();
        }
      });
      return () => {
        k2 && k2.disconnect();
        t3 && t3();
        n3 && n3();
        l2 && l2();
        o3();
        s3();
      };
    }, ({ It: t3, At: n3, Dt: o3 }) => {
      const s3 = {};
      const [i3] = t3("update.ignoreMutation");
      const [a3, f2] = t3("update.attributes");
      const [v3, p3] = t3("update.elementEvents");
      const [g3, y3] = t3("update.debounce");
      const S3 = p3 || f2;
      const m3 = n3 || o3;
      const ignoreMutationFromOptions = (t4) => isFunction(i3) && i3(t4);
      if (S3) {
        r2 && r2();
        l2 && l2();
        const [t4, n4] = createDOMObserver(b2 || h2, true, onContentMutation, {
          j: concat(d2, a3 || []),
          Y: v3,
          W: u2,
          G: (t5, n5) => {
            const { target: o4, attributeName: s4 } = t5;
            const e3 = !n5 && s4 && !w2 ? liesBetween(o4, u2, _2) : false;
            return e3 || !!closest(o4, `.${rt}`) || !!ignoreMutationFromOptions(t5);
          }
        });
        l2 = t4();
        r2 = n4;
      }
      if (y3) {
        E2.m();
        if (isArray(g3)) {
          const t4 = g3[0];
          const n4 = g3[1];
          e2 = isNumber(t4) && t4;
          c2 = isNumber(n4) && n4;
        } else if (isNumber(g3)) {
          e2 = g3;
          c2 = false;
        } else {
          e2 = false;
          c2 = false;
        }
      }
      if (m3) {
        const t4 = T2();
        const n4 = I2 && I2();
        const o4 = r2 && r2();
        t4 && assignDeep(s3, onHostMutation(t4[0], t4[1], m3));
        n4 && assignDeep(s3, onTrinsicChanged(n4[0], m3));
        o4 && assignDeep(s3, onContentMutation(o4[0], m3));
      }
      setDirection(s3);
      return s3;
    }, $3];
  };
  var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
    const e2 = "--os-viewport-percent";
    const c2 = "--os-scroll-percent";
    const r2 = "--os-scroll-direction";
    const { U: l2 } = getEnvironment();
    const { scrollbars: i2 } = l2();
    const { slot: a2 } = i2;
    const { vt: u2, ht: _2, ot: d2, Mt: f2, gt: p2, wt: h2, nt: g2 } = n2;
    const { scrollbars: b2 } = f2 ? {} : t2;
    const { slot: w2 } = b2 || {};
    const y2 = [];
    const S2 = [];
    const m2 = [];
    const O2 = dynamicInitializationElement([u2, _2, d2], () => g2 && h2 ? u2 : _2, a2, w2);
    const initScrollTimeline = (t3) => {
      if (v) {
        const n3 = new v({
          source: p2,
          axis: t3
        });
        const _addScrollPercentAnimation = (t4) => {
          const o3 = t4.Tt.animate({
            clear: ["left"],
            [c2]: [0, 1]
          }, {
            timeline: n3
          });
          return () => o3.cancel();
        };
        return {
          kt: _addScrollPercentAnimation
        };
      }
    };
    const $3 = {
      x: initScrollTimeline("x"),
      y: initScrollTimeline("y")
    };
    const getViewportPercent = () => {
      const { Rt: t3, Vt: n3 } = o2;
      const getAxisValue = (t4, n4) => capNumber(0, 1, t4 / (t4 + n4) || 0);
      return {
        x: getAxisValue(n3.x, t3.x),
        y: getAxisValue(n3.y, t3.y)
      };
    };
    const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
      const s3 = o3 ? addClass : removeClass;
      each(t3, (t4) => {
        s3(t4.Tt, n3);
      });
    };
    const scrollbarStyle = (t3, n3) => {
      each(t3, (t4) => {
        const [o3, s3] = n3(t4);
        setStyles(o3, s3);
      });
    };
    const scrollbarsAddRemoveClass = (t3, n3, o3) => {
      const s3 = isBoolean(o3);
      const e3 = s3 ? o3 : true;
      const c3 = s3 ? !o3 : true;
      e3 && scrollbarStructureAddRemoveClass(S2, t3, n3);
      c3 && scrollbarStructureAddRemoveClass(m2, t3, n3);
    };
    const refreshScrollbarsHandleLength = () => {
      const t3 = getViewportPercent();
      const createScrollbarStyleFn = (t4) => (n3) => [n3.Tt, {
        [e2]: roundCssNumber(t4) + ""
      }];
      scrollbarStyle(S2, createScrollbarStyleFn(t3.x));
      scrollbarStyle(m2, createScrollbarStyleFn(t3.y));
    };
    const refreshScrollbarsHandleOffset = () => {
      if (!v) {
        const { Lt: t3 } = o2;
        const n3 = getScrollCoordinatesPercent(t3, getElementScroll(p2));
        const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
          [c2]: roundCssNumber(t4) + ""
        }];
        scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
        scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
      }
    };
    const refreshScrollbarsScrollCoordinates = () => {
      const { Lt: t3 } = o2;
      const n3 = isDefaultDirectionScrollCoordinates(t3);
      const createScrollbarStyleFn = (t4) => (n4) => [n4.Tt, {
        [r2]: t4 ? "0" : "1"
      }];
      scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
      scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    };
    const refreshScrollbarsScrollbarOffset = () => {
      if (g2 && !h2) {
        const { Rt: t3, Lt: n3 } = o2;
        const s3 = isDefaultDirectionScrollCoordinates(n3);
        const e3 = getScrollCoordinatesPercent(n3, getElementScroll(p2));
        const styleScrollbarPosition = (n4) => {
          const { Tt: o3 } = n4;
          const c3 = parent(o3) === d2 && o3;
          const getTranslateValue = (t4, n5, o4) => {
            const s4 = n5 * t4;
            return numberToCssPx(o4 ? s4 : -s4);
          };
          return [c3, c3 && {
            transform: getTrasformTranslateValue({
              x: getTranslateValue(e3.x, t3.x, s3.x),
              y: getTranslateValue(e3.y, t3.y, s3.y)
            })
          }];
        };
        scrollbarStyle(S2, styleScrollbarPosition);
        scrollbarStyle(m2, styleScrollbarPosition);
      }
    };
    const generateScrollbarDOM = (t3) => {
      const n3 = t3 ? "x" : "y";
      const o3 = t3 ? it : at;
      const e3 = createDiv(`${rt} ${o3}`);
      const c3 = createDiv(ut);
      const r3 = createDiv(_t);
      const l3 = {
        Tt: e3,
        Ut: c3,
        Pt: r3
      };
      const i3 = $3[n3];
      push(t3 ? S2 : m2, l3);
      push(y2, [appendChildren(e3, c3), appendChildren(c3, r3), bind(removeElements, e3), i3 && i3.kt(l3), s2(l3, scrollbarsAddRemoveClass, t3)]);
      return l3;
    };
    const C2 = bind(generateScrollbarDOM, true);
    const x2 = bind(generateScrollbarDOM, false);
    const appendElements = () => {
      appendChildren(O2, S2[0].Tt);
      appendChildren(O2, m2[0].Tt);
      return bind(runEachAndClear, y2);
    };
    C2();
    x2();
    return [{
      Nt: refreshScrollbarsHandleLength,
      qt: refreshScrollbarsHandleOffset,
      Bt: refreshScrollbarsScrollCoordinates,
      Ft: refreshScrollbarsScrollbarOffset,
      jt: scrollbarsAddRemoveClass,
      Xt: {
        Yt: S2,
        Wt: C2,
        Jt: bind(scrollbarStyle, S2)
      },
      Gt: {
        Yt: m2,
        Wt: x2,
        Jt: bind(scrollbarStyle, m2)
      }
    }, appendElements];
  };
  var createScrollbarsSetupEvents = (t2, n2, o2, s2) => (r2, l2, i2) => {
    const { ht: u2, ot: _2, nt: d2, gt: f2, Kt: v2, Ot: p2 } = n2;
    const { Tt: h2, Ut: g2, Pt: b2 } = r2;
    const [w2, y2] = selfClearTimeout(333);
    const [S2, m2] = selfClearTimeout(444);
    const scrollOffsetElementScrollBy = (t3) => {
      isFunction(f2.scrollBy) && f2.scrollBy({
        behavior: "smooth",
        left: t3.x,
        top: t3.y
      });
    };
    const createInteractiveScrollEvents = () => {
      const n3 = "pointerup pointercancel lostpointercapture";
      const s3 = `client${i2 ? "X" : "Y"}`;
      const r3 = i2 ? $2 : C;
      const l3 = i2 ? "left" : "top";
      const a2 = i2 ? "w" : "h";
      const u3 = i2 ? "x" : "y";
      const createRelativeHandleMove = (t3, n4) => (s4) => {
        const { Rt: e2 } = o2;
        const c2 = I(g2)[a2] - I(b2)[a2];
        const r4 = n4 * s4 / c2;
        const l4 = r4 * e2[u3];
        scrollElementTo(f2, {
          [u3]: t3 + l4
        });
      };
      const _3 = [];
      return addEventListener2(g2, "pointerdown", (o3) => {
        const i3 = closest(o3.target, `.${_t}`) === b2;
        const d3 = i3 ? b2 : g2;
        const h3 = t2.scrollbars;
        const w3 = h3[i3 ? "dragScroll" : "clickScroll"];
        const { button: y3, isPrimary: O3, pointerType: $3 } = o3;
        const { pointers: C2 } = h3;
        const x2 = y3 === 0 && O3 && w3 && (C2 || []).includes($3);
        if (x2) {
          runEachAndClear(_3);
          m2();
          const t3 = !i3 && (o3.shiftKey || w3 === "instant");
          const h4 = bind(getBoundingClientRect, b2);
          const y4 = bind(getBoundingClientRect, g2);
          const getHandleOffset = (t4, n4) => (t4 || h4())[l3] - (n4 || y4())[l3];
          const O4 = e(getBoundingClientRect(f2)[r3]) / I(f2)[a2] || 1;
          const $4 = createRelativeHandleMove(getElementScroll(f2)[u3], 1 / O4);
          const C3 = o3[s3];
          const x3 = h4();
          const H2 = y4();
          const E2 = x3[r3];
          const z2 = getHandleOffset(x3, H2) + E2 / 2;
          const A2 = C3 - H2[l3];
          const D2 = i3 ? 0 : A2 - z2;
          const releasePointerCapture = (t4) => {
            runEachAndClear(k2);
            d3.releasePointerCapture(t4.pointerId);
          };
          const M2 = i3 || t3;
          const T2 = p2();
          const k2 = [addEventListener2(v2, n3, releasePointerCapture), addEventListener2(v2, "selectstart", (t4) => preventDefault(t4), {
            H: false
          }), addEventListener2(g2, n3, releasePointerCapture), M2 && addEventListener2(g2, "pointermove", (t4) => $4(D2 + (t4[s3] - C3))), M2 && (() => {
            const t4 = getElementScroll(f2);
            T2();
            const n4 = getElementScroll(f2);
            const o4 = {
              x: n4.x - t4.x,
              y: n4.y - t4.y
            };
            if (c(o4.x) > 3 || c(o4.y) > 3) {
              p2();
              scrollElementTo(f2, t4);
              scrollOffsetElementScrollBy(o4);
              S2(T2);
            }
          })];
          d3.setPointerCapture(o3.pointerId);
          if (t3) {
            $4(D2);
          } else if (!i3) {
            const t4 = getStaticPluginModuleInstance(At);
            if (t4) {
              const n4 = t4($4, D2, E2, (t5) => {
                if (t5) {
                  T2();
                } else {
                  push(k2, T2);
                }
              });
              push(k2, n4);
              push(_3, bind(n4, true));
            }
          }
        }
      });
    };
    let O2 = true;
    return bind(runEachAndClear, [addEventListener2(b2, "pointermove pointerleave", s2), addEventListener2(h2, "pointerenter", () => {
      l2(vt, true);
    }), addEventListener2(h2, "pointerleave pointercancel", () => {
      l2(vt, false);
    }), !d2 && addEventListener2(h2, "mousedown", () => {
      const t3 = getFocusedElement();
      if (hasAttr(t3, q) || hasAttr(t3, P) || t3 === document.body) {
        a(bind(focusElement, _2), 25);
      }
    }), addEventListener2(h2, "wheel", (t3) => {
      const { deltaX: n3, deltaY: o3, deltaMode: s3 } = t3;
      if (O2 && s3 === 0 && parent(h2) === u2) {
        scrollOffsetElementScrollBy({
          x: n3,
          y: o3
        });
      }
      O2 = false;
      l2(bt, true);
      w2(() => {
        O2 = true;
        l2(bt);
      });
      preventDefault(t3);
    }, {
      H: false,
      I: true
    }), addEventListener2(h2, "pointerdown", bind(addEventListener2, v2, "click", stopAndPrevent, {
      A: true,
      I: true,
      H: false
    }), {
      I: true
    }), createInteractiveScrollEvents(), y2, m2]);
  };
  var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
    let r2;
    let l2;
    let i2;
    let a2;
    let u2;
    let _2 = noop2;
    let d2 = 0;
    const isHoverablePointerType = (t3) => t3.pointerType === "mouse";
    const [f2, v2] = selfClearTimeout();
    const [p2, h2] = selfClearTimeout(100);
    const [g2, b2] = selfClearTimeout(100);
    const [w2, y2] = selfClearTimeout(() => d2);
    const [S2, m2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
    const { ht: O2, Qt: $3, wt: C2 } = e2;
    const { jt: H2, Nt: z2, qt: I2, Bt: A2, Ft: D2 } = S2;
    const manageScrollbarsAutoHide = (t3, n3) => {
      y2();
      if (t3) {
        H2(gt);
      } else {
        const t4 = bind(H2, gt, true);
        if (d2 > 0 && !n3) {
          w2(t4);
        } else {
          t4();
        }
      }
    };
    const manageScrollbarsAutoHideInstantInteraction = () => {
      if (i2 ? !r2 : !a2) {
        manageScrollbarsAutoHide(true);
        p2(() => {
          manageScrollbarsAutoHide(false);
        });
      }
    };
    const manageAutoHideSuspension = (t3) => {
      H2(ht, t3, true);
      H2(ht, t3, false);
    };
    const onHostMouseEnter = (t3) => {
      if (isHoverablePointerType(t3)) {
        r2 = i2;
        i2 && manageScrollbarsAutoHide(true);
      }
    };
    const M2 = [y2, h2, b2, v2, () => _2(), addEventListener2(O2, "pointerover", onHostMouseEnter, {
      A: true
    }), addEventListener2(O2, "pointerenter", onHostMouseEnter), addEventListener2(O2, "pointerleave", (t3) => {
      if (isHoverablePointerType(t3)) {
        r2 = false;
        i2 && manageScrollbarsAutoHide(false);
      }
    }), addEventListener2(O2, "pointermove", (t3) => {
      isHoverablePointerType(t3) && l2 && manageScrollbarsAutoHideInstantInteraction();
    }), addEventListener2($3, "scroll", (t3) => {
      f2(() => {
        I2();
        manageScrollbarsAutoHideInstantInteraction();
      });
      c2(t3);
      D2();
    })];
    return [() => bind(runEachAndClear, push(M2, m2())), ({ It: t3, Dt: n3, Zt: e3, tn: c3 }) => {
      const { nn: r3, sn: f3, en: v3, cn: p3 } = c3 || {};
      const { Ct: h3, dt: b3 } = e3 || {};
      const { ct: w3 } = o2;
      const { k: y3 } = getEnvironment();
      const { K: S3, rn: m3 } = s2;
      const [O3, M3] = t3("showNativeOverlaidScrollbars");
      const [T2, k2] = t3("scrollbars.theme");
      const [R2, V2] = t3("scrollbars.visibility");
      const [L2, U2] = t3("scrollbars.autoHide");
      const [P2, N2] = t3("scrollbars.autoHideSuspend");
      const [q2] = t3("scrollbars.autoHideDelay");
      const [B2, F2] = t3("scrollbars.dragScroll");
      const [j2, X2] = t3("scrollbars.clickScroll");
      const [Y2, W2] = t3("overflow");
      const J2 = b3 && !n3;
      const G2 = m3.x || m3.y;
      const K2 = r3 || f3 || p3 || h3 || n3;
      const Q2 = v3 || V2 || W2;
      const Z2 = O3 && y3.x && y3.y;
      const setScrollbarVisibility = (t4, n4, o3) => {
        const s3 = t4.includes(E) && (R2 === x || R2 === "auto" && n4 === E);
        H2(dt, s3, o3);
        return s3;
      };
      d2 = q2;
      if (J2) {
        if (P2 && G2) {
          manageAutoHideSuspension(false);
          _2();
          g2(() => {
            _2 = addEventListener2($3, "scroll", bind(manageAutoHideSuspension, true), {
              A: true
            });
          });
        } else {
          manageAutoHideSuspension(true);
        }
      }
      if (M3) {
        H2(ct, Z2);
      }
      if (k2) {
        H2(u2);
        H2(T2, true);
        u2 = T2;
      }
      if (N2 && !P2) {
        manageAutoHideSuspension(true);
      }
      if (U2) {
        l2 = L2 === "move";
        i2 = L2 === "leave";
        a2 = L2 === "never";
        manageScrollbarsAutoHide(a2, true);
      }
      if (F2) {
        H2(yt, B2);
      }
      if (X2) {
        H2(wt, !!j2);
      }
      if (Q2) {
        const t4 = setScrollbarVisibility(Y2.x, S3.x, true);
        const n4 = setScrollbarVisibility(Y2.y, S3.y, false);
        const o3 = t4 && n4;
        H2(ft, !o3);
      }
      if (K2) {
        I2();
        z2();
        D2();
        p3 && A2();
        H2(pt, !m3.x, true);
        H2(pt, !m3.y, false);
        H2(lt, w3 && !C2);
      }
    }, {}, S2];
  };
  var createStructureSetupElements = (t2) => {
    const o2 = getEnvironment();
    const { U: s2, R: e2 } = o2;
    const { elements: c2 } = s2();
    const { padding: r2, viewport: l2, content: i2 } = c2;
    const a2 = isHTMLElement(t2);
    const u2 = a2 ? {} : t2;
    const { elements: _2 } = u2;
    const { padding: d2, viewport: f2, content: v2 } = _2 || {};
    const p2 = a2 ? t2 : u2.target;
    const h2 = isBodyElement(p2);
    const g2 = p2.ownerDocument;
    const b2 = g2.documentElement;
    const getDocumentWindow = () => g2.defaultView || n;
    const w2 = bind(staticInitializationElement, [p2]);
    const y2 = bind(dynamicInitializationElement, [p2]);
    const S2 = bind(createDiv, "");
    const $3 = bind(w2, S2, l2);
    const C2 = bind(y2, S2, i2);
    const elementHasOverflow = (t3) => {
      const n2 = I(t3);
      const o3 = D(t3);
      const s3 = getStyles(t3, m);
      const e3 = getStyles(t3, O);
      return o3.w - n2.w > 0 && !overflowIsVisible(s3) || o3.h - n2.h > 0 && !overflowIsVisible(e3);
    };
    const x2 = $3(f2);
    const H2 = x2 === p2;
    const E2 = H2 && h2;
    const z2 = !H2 && C2(v2);
    const A2 = !H2 && x2 === z2;
    const M2 = E2 ? b2 : x2;
    const T2 = E2 ? M2 : p2;
    const k2 = !H2 && y2(S2, r2, d2);
    const R2 = !A2 && z2;
    const L2 = [R2, M2, k2, T2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
    const elementIsGenerated = (t3) => t3 && inArray(L2, t3);
    const B2 = !elementIsGenerated(M2) && elementHasOverflow(M2) ? M2 : p2;
    const F2 = E2 ? b2 : M2;
    const j2 = E2 ? g2 : M2;
    const X2 = {
      vt: p2,
      ht: T2,
      ot: M2,
      ln: k2,
      bt: R2,
      gt: F2,
      Qt: j2,
      an: h2 ? b2 : B2,
      Kt: g2,
      wt: h2,
      Mt: a2,
      nt: H2,
      un: getDocumentWindow,
      yt: (t3) => hasAttrClass(M2, q, t3),
      St: (t3, n2) => addRemoveAttrClass(M2, q, t3, n2),
      Ot: () => addRemoveAttrClass(F2, q, Y, true)
    };
    const { vt: J2, ht: Q2, ln: Z2, ot: tt2, bt: nt2 } = X2;
    const ot2 = [() => {
      removeAttrs(Q2, [P, V]);
      removeAttrs(J2, V);
      if (h2) {
        removeAttrs(b2, [V, P]);
      }
    }];
    let st2 = contents([nt2, tt2, Z2, Q2, J2].find((t3) => t3 && !elementIsGenerated(t3)));
    const et2 = E2 ? J2 : nt2 || tt2;
    const ct2 = bind(runEachAndClear, ot2);
    const appendElements = () => {
      const t3 = getDocumentWindow();
      const n2 = getFocusedElement();
      const unwrap = (t4) => {
        appendChildren(parent(t4), contents(t4));
        removeElements(t4);
      };
      const prepareWrapUnwrapFocus = (t4) => addEventListener2(t4, "focusin focusout focus blur", stopAndPrevent, {
        I: true,
        H: false
      });
      const o3 = "tabindex";
      const s3 = getAttr(tt2, o3);
      const c3 = prepareWrapUnwrapFocus(n2);
      setAttrs(Q2, P, H2 ? "" : N);
      setAttrs(Z2, G, "");
      setAttrs(tt2, q, "");
      setAttrs(nt2, K, "");
      if (!H2) {
        setAttrs(tt2, o3, s3 || "-1");
        h2 && setAttrs(b2, U, "");
      }
      appendChildren(et2, st2);
      appendChildren(Q2, Z2);
      appendChildren(Z2 || Q2, !H2 && tt2);
      appendChildren(tt2, nt2);
      push(ot2, [c3, () => {
        const t4 = getFocusedElement();
        const n3 = elementIsGenerated(tt2);
        const e3 = n3 && t4 === tt2 ? J2 : t4;
        const c4 = prepareWrapUnwrapFocus(e3);
        removeAttrs(Z2, G);
        removeAttrs(nt2, K);
        removeAttrs(tt2, q);
        h2 && removeAttrs(b2, U);
        s3 ? setAttrs(tt2, o3, s3) : removeAttrs(tt2, o3);
        elementIsGenerated(nt2) && unwrap(nt2);
        n3 && unwrap(tt2);
        elementIsGenerated(Z2) && unwrap(Z2);
        focusElement(e3);
        c4();
      }]);
      if (e2 && !H2) {
        addAttrClass(tt2, q, W);
        push(ot2, bind(removeAttrs, tt2, q));
      }
      focusElement(!H2 && h2 && n2 === J2 && t3.top === t3 ? tt2 : n2);
      c3();
      st2 = 0;
      return ct2;
    };
    return [X2, appendElements, ct2];
  };
  var createTrinsicUpdateSegment = ({ bt: t2 }) => ({ Zt: n2, _n: o2, Dt: s2 }) => {
    const { xt: e2 } = n2 || {};
    const { $t: c2 } = o2;
    const r2 = t2 && (e2 || s2);
    if (r2) {
      setStyles(t2, {
        [C]: c2 && "100%"
      });
    }
  };
  var createPaddingUpdateSegment = ({ ht: t2, ln: n2, ot: o2, nt: s2 }, e2) => {
    const [c2, r2] = createCache({
      i: equalTRBL,
      o: topRightBottomLeft()
    }, bind(topRightBottomLeft, t2, "padding", ""));
    return ({ It: t3, Zt: l2, _n: i2, Dt: a2 }) => {
      let [u2, _2] = r2(a2);
      const { R: d2 } = getEnvironment();
      const { ft: f2, Ht: v2, Ct: m2 } = l2 || {};
      const { ct: O2 } = i2;
      const [C2, x2] = t3("paddingAbsolute");
      const H2 = a2 || v2;
      if (f2 || _2 || H2) {
        [u2, _2] = c2(a2);
      }
      const E2 = !s2 && (x2 || m2 || _2);
      if (E2) {
        const t4 = !C2 || !n2 && !d2;
        const s3 = u2.r + u2.l;
        const c3 = u2.t + u2.b;
        const r3 = {
          [y]: t4 && !O2 ? -s3 : 0,
          [S]: t4 ? -c3 : 0,
          [w]: t4 && O2 ? -s3 : 0,
          top: t4 ? -u2.t : 0,
          right: t4 ? O2 ? -u2.r : "auto" : 0,
          left: t4 ? O2 ? "auto" : -u2.l : 0,
          [$2]: t4 && `calc(100% + ${s3}px)`
        };
        const l3 = {
          [p]: t4 ? u2.t : 0,
          [h]: t4 ? u2.r : 0,
          [b]: t4 ? u2.b : 0,
          [g]: t4 ? u2.l : 0
        };
        setStyles(n2 || o2, r3);
        setStyles(o2, l3);
        assignDeep(e2, {
          ln: u2,
          dn: !t4,
          rt: n2 ? l3 : assignDeep({}, r3, l3)
        });
      }
      return {
        fn: E2
      };
    };
  };
  var createOverflowUpdateSegment = (t2, s2) => {
    const e2 = getEnvironment();
    const { ht: c2, ln: r2, ot: l2, nt: a2, Qt: u2, gt: _2, wt: d2, St: f2, un: v2 } = t2;
    const { R: p2 } = e2;
    const h2 = d2 && a2;
    const g2 = bind(o, 0);
    const b2 = {
      display: () => false,
      direction: (t3) => t3 !== "ltr",
      flexDirection: (t3) => t3.endsWith("-reverse"),
      writingMode: (t3) => t3 !== "horizontal-tb"
    };
    const w2 = keys(b2);
    const y2 = {
      i: equalWH,
      o: {
        w: 0,
        h: 0
      }
    };
    const S2 = {
      i: equalXY,
      o: {}
    };
    const setMeasuringMode = (t3) => {
      f2(X, !h2 && t3);
    };
    const getMeasuredScrollCoordinates = (t3) => {
      const n2 = w2.some((n3) => {
        const o3 = t3[n3];
        return o3 && b2[n3](o3);
      });
      if (!n2) {
        return {
          D: {
            x: 0,
            y: 0
          },
          M: {
            x: 1,
            y: 1
          }
        };
      }
      setMeasuringMode(true);
      const o2 = getElementScroll(_2);
      const s3 = f2(J, true);
      const e3 = addEventListener2(u2, E, (t4) => {
        const n3 = getElementScroll(_2);
        if (t4.isTrusted && n3.x === o2.x && n3.y === o2.y) {
          stopPropagation(t4);
        }
      }, {
        I: true,
        A: true
      });
      scrollElementTo(_2, {
        x: 0,
        y: 0
      });
      s3();
      const c3 = getElementScroll(_2);
      const r3 = D(_2);
      scrollElementTo(_2, {
        x: r3.w,
        y: r3.h
      });
      const l3 = getElementScroll(_2);
      scrollElementTo(_2, {
        x: l3.x - c3.x < 1 && -r3.w,
        y: l3.y - c3.y < 1 && -r3.h
      });
      const a3 = getElementScroll(_2);
      scrollElementTo(_2, o2);
      i(() => e3());
      return {
        D: c3,
        M: a3
      };
    };
    const getOverflowAmount = (t3, o2) => {
      const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
      const e3 = {
        w: g2(t3.w - o2.w),
        h: g2(t3.h - o2.h)
      };
      return {
        w: e3.w > s3 ? e3.w : 0,
        h: e3.h > s3 ? e3.h : 0
      };
    };
    const [m2, O2] = createCache(y2, bind(getFractionalSize, l2));
    const [$3, C2] = createCache(y2, bind(D, l2));
    const [z2, I2] = createCache(y2);
    const [M2] = createCache(S2);
    const [T2, k2] = createCache(y2);
    const [R2] = createCache(S2);
    const [V2] = createCache({
      i: (t3, n2) => equal2(t3, n2, w2),
      o: {}
    }, () => hasDimensions(l2) ? getStyles(l2, w2) : {});
    const [U2, N2] = createCache({
      i: (t3, n2) => equalXY(t3.D, n2.D) && equalXY(t3.M, n2.M),
      o: getZeroScrollCoordinates()
    });
    const q2 = getStaticPluginModuleInstance(zt);
    const createViewportOverflowStyleClassName = (t3, n2) => {
      const o2 = n2 ? B : F;
      return `${o2}${capitalizeFirstLetter(t3)}`;
    };
    const setViewportOverflowStyle = (t3) => {
      const createAllOverflowStyleClassNames = (t4) => [x, H, E].map((n3) => createViewportOverflowStyleClassName(n3, t4));
      const n2 = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
      f2(n2);
      f2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), true);
    };
    return ({ It: n2, Zt: o2, _n: i2, Dt: a3 }, { fn: u3 }) => {
      const { ft: _3, Ht: d3, Ct: b3, dt: w3, zt: y3 } = o2 || {};
      const S3 = q2 && q2.tt(t2, s2, i2, e2, n2);
      const { it: x2, ut: H2, _t: E2 } = S3 || {};
      const [D2, B2] = getShowNativeOverlaidScrollbars(n2, e2);
      const [F2, j2] = n2("overflow");
      const X2 = overflowIsVisible(F2.x);
      const Y2 = overflowIsVisible(F2.y);
      const J2 = true;
      let K2 = O2(a3);
      let Q2 = C2(a3);
      let Z2 = I2(a3);
      let tt2 = k2(a3);
      if (B2 && p2) {
        f2(W, !D2);
      }
      {
        if (hasAttrClass(c2, P, L)) {
          setMeasuringMode(true);
        }
        const [t3] = H2 ? H2() : [];
        const [n3] = K2 = m2(a3);
        const [o3] = Q2 = $3(a3);
        const s3 = A(l2);
        const e3 = h2 && getWindowSize(v2());
        const r3 = {
          w: g2(o3.w + n3.w),
          h: g2(o3.h + n3.h)
        };
        const i3 = {
          w: g2((e3 ? e3.w : s3.w + g2(s3.w - o3.w)) + n3.w),
          h: g2((e3 ? e3.h : s3.h + g2(s3.h - o3.h)) + n3.h)
        };
        t3 && t3();
        tt2 = T2(i3);
        Z2 = z2(getOverflowAmount(r3, i3), a3);
      }
      const [nt2, ot2] = tt2;
      const [st2, et2] = Z2;
      const [ct2, rt2] = Q2;
      const [lt2, it2] = K2;
      const [at2, ut2] = M2({
        x: st2.w > 0,
        y: st2.h > 0
      });
      const _t2 = X2 && Y2 && (at2.x || at2.y) || X2 && at2.x && !at2.y || Y2 && at2.y && !at2.x;
      const dt2 = u3 || b3 || y3 || it2 || rt2 || ot2 || et2 || j2 || B2 || J2;
      const ft2 = createViewportOverflowState(at2, F2);
      const [vt2, pt2] = R2(ft2.K);
      const [ht2, gt2] = V2(a3);
      const bt2 = b3 || w3 || gt2 || ut2 || a3;
      const [wt2, yt2] = bt2 ? U2(getMeasuredScrollCoordinates(ht2), a3) : N2();
      if (dt2) {
        pt2 && setViewportOverflowStyle(ft2.K);
        if (E2 && x2) {
          setStyles(l2, E2(ft2, i2, x2(ft2, ct2, lt2)));
        }
      }
      setMeasuringMode(false);
      addRemoveAttrClass(c2, P, L, _t2);
      addRemoveAttrClass(r2, G, L, _t2);
      assignDeep(s2, {
        K: vt2,
        Vt: {
          x: nt2.w,
          y: nt2.h
        },
        Rt: {
          x: st2.w,
          y: st2.h
        },
        rn: at2,
        Lt: sanitizeScrollCoordinates(wt2, st2)
      });
      return {
        en: pt2,
        nn: ot2,
        sn: et2,
        cn: yt2 || et2,
        vn: bt2
      };
    };
  };
  var createStructureSetup = (t2) => {
    const [n2, o2, s2] = createStructureSetupElements(t2);
    const e2 = {
      ln: {
        t: 0,
        r: 0,
        b: 0,
        l: 0
      },
      dn: false,
      rt: {
        [y]: 0,
        [S]: 0,
        [w]: 0,
        [p]: 0,
        [h]: 0,
        [b]: 0,
        [g]: 0
      },
      Vt: {
        x: 0,
        y: 0
      },
      Rt: {
        x: 0,
        y: 0
      },
      K: {
        x: H,
        y: H
      },
      rn: {
        x: false,
        y: false
      },
      Lt: getZeroScrollCoordinates()
    };
    const { vt: c2, gt: r2, nt: l2, Ot: i2 } = n2;
    const { R: a2, k: u2 } = getEnvironment();
    const _2 = !a2 && (u2.x || u2.y);
    const d2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
    return [o2, (t3) => {
      const n3 = {};
      const o3 = _2;
      const s3 = o3 && getElementScroll(r2);
      const e3 = s3 && i2();
      each(d2, (o4) => {
        assignDeep(n3, o4(t3, n3) || {});
      });
      scrollElementTo(r2, s3);
      e3 && e3();
      !l2 && scrollElementTo(c2, 0);
      return n3;
    }, e2, n2, s2];
  };
  var createSetups = (t2, n2, o2, s2, e2) => {
    let c2 = false;
    const r2 = createOptionCheck(n2, {});
    const [l2, i2, a2, u2, _2] = createStructureSetup(t2);
    const [d2, f2, v2] = createObserversSetup(u2, a2, r2, (t3) => {
      update2({}, t3);
    });
    const [p2, h2, , g2] = createScrollbarsSetup(t2, n2, v2, a2, u2, e2);
    const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
    const update2 = (t3, e3) => {
      if (o2()) {
        return false;
      }
      const { pn: r3, Dt: l3, At: a3, hn: u3 } = t3;
      const _3 = r3 || {};
      const d3 = !!l3 || !c2;
      const p3 = {
        It: createOptionCheck(n2, _3, d3),
        pn: _3,
        Dt: d3
      };
      if (u3) {
        h2(p3);
        return false;
      }
      const g3 = e3 || f2(assignDeep({}, p3, {
        At: a3
      }));
      const b2 = i2(assignDeep({}, p3, {
        _n: v2,
        Zt: g3
      }));
      h2(assignDeep({}, p3, {
        Zt: g3,
        tn: b2
      }));
      const w2 = updateHintsAreTruthy(g3);
      const y2 = updateHintsAreTruthy(b2);
      const S2 = w2 || y2 || !isEmptyObject(_3) || d3;
      c2 = true;
      S2 && s2(t3, {
        Zt: g3,
        tn: b2
      });
      return S2;
    };
    return [() => {
      const { an: t3, gt: n3, Ot: o3 } = u2;
      const s3 = getElementScroll(t3);
      const e3 = [d2(), l2(), p2()];
      const c3 = o3();
      scrollElementTo(n3, s3);
      c3();
      return bind(runEachAndClear, e3);
    }, update2, () => ({
      gn: v2,
      bn: a2
    }), {
      wn: u2,
      yn: g2
    }, _2];
  };
  var OverlayScrollbars = (t2, n2, o2) => {
    const { N: s2 } = getEnvironment();
    const e2 = isHTMLElement(t2);
    const c2 = e2 ? t2 : t2.target;
    const r2 = getInstance(c2);
    if (n2 && !r2) {
      let r3 = false;
      const l2 = [];
      const i2 = {};
      const validateOptions = (t3) => {
        const n3 = removeUndefinedProperties(t3, true);
        const o3 = getStaticPluginModuleInstance(xt);
        return o3 ? o3(n3, true) : n3;
      };
      const a2 = assignDeep({}, s2(), validateOptions(n2));
      const [u2, _2, d2] = createEventListenerHub();
      const [f2, v2, p2] = createEventListenerHub(o2);
      const triggerEvent = (t3, n3) => {
        p2(t3, n3);
        d2(t3, n3);
      };
      const [h2, g2, b2, w2, y2] = createSetups(t2, a2, () => r3, ({ pn: t3, Dt: n3 }, { Zt: o3, tn: s3 }) => {
        const { ft: e3, Ct: c3, xt: r4, Ht: l3, Et: i3, dt: a3 } = o3;
        const { nn: u3, sn: _3, en: d3, cn: f3 } = s3;
        triggerEvent("updated", [S2, {
          updateHints: {
            sizeChanged: !!e3,
            directionChanged: !!c3,
            heightIntrinsicChanged: !!r4,
            overflowEdgeChanged: !!u3,
            overflowAmountChanged: !!_3,
            overflowStyleChanged: !!d3,
            scrollCoordinatesChanged: !!f3,
            contentMutation: !!l3,
            hostMutation: !!i3,
            appear: !!a3
          },
          changedOptions: t3 || {},
          force: !!n3
        }]);
      }, (t3) => triggerEvent("scroll", [S2, t3]));
      const destroy = (t3) => {
        removeInstance(c2);
        runEachAndClear(l2);
        r3 = true;
        triggerEvent("destroyed", [S2, t3]);
        _2();
        v2();
      };
      const S2 = {
        options(t3, n3) {
          if (t3) {
            const o3 = n3 ? s2() : {};
            const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
            if (!isEmptyObject(e3)) {
              assignDeep(a2, e3);
              g2({
                pn: e3
              });
            }
          }
          return assignDeep({}, a2);
        },
        on: f2,
        off: (t3, n3) => {
          t3 && n3 && v2(t3, n3);
        },
        state() {
          const { gn: t3, bn: n3 } = b2();
          const { ct: o3 } = t3;
          const { Vt: s3, Rt: e3, K: c3, rn: l3, ln: i3, dn: a3, Lt: u3 } = n3;
          return assignDeep({}, {
            overflowEdge: s3,
            overflowAmount: e3,
            overflowStyle: c3,
            hasOverflow: l3,
            scrollCoordinates: {
              start: u3.D,
              end: u3.M
            },
            padding: i3,
            paddingAbsolute: a3,
            directionRTL: o3,
            destroyed: r3
          });
        },
        elements() {
          const { vt: t3, ht: n3, ln: o3, ot: s3, bt: e3, gt: c3, Qt: r4 } = w2.wn;
          const { Xt: l3, Gt: i3 } = w2.yn;
          const translateScrollbarStructure = (t4) => {
            const { Pt: n4, Ut: o4, Tt: s4 } = t4;
            return {
              scrollbar: s4,
              track: o4,
              handle: n4
            };
          };
          const translateScrollbarsSetupElement = (t4) => {
            const { Yt: n4, Wt: o4 } = t4;
            const s4 = translateScrollbarStructure(n4[0]);
            return assignDeep({}, s4, {
              clone: () => {
                const t5 = translateScrollbarStructure(o4());
                g2({
                  hn: true
                });
                return t5;
              }
            });
          };
          return assignDeep({}, {
            target: t3,
            host: n3,
            padding: o3 || s3,
            viewport: s3,
            content: e3 || s3,
            scrollOffsetElement: c3,
            scrollEventElement: r4,
            scrollbarHorizontal: translateScrollbarsSetupElement(l3),
            scrollbarVertical: translateScrollbarsSetupElement(i3)
          });
        },
        update: (t3) => g2({
          Dt: t3,
          At: true
        }),
        destroy: bind(destroy, false),
        plugin: (t3) => i2[keys(t3)[0]]
      };
      push(l2, [y2]);
      addInstance(c2, S2);
      registerPluginModuleInstances($t, OverlayScrollbars, [S2, u2, i2]);
      if (cancelInitialization(w2.wn.wt, !e2 && t2.cancel)) {
        destroy(true);
        return S2;
      }
      push(l2, h2());
      triggerEvent("initialized", [S2]);
      S2.update();
      return S2;
    }
    return r2;
  };
  OverlayScrollbars.plugin = (t2) => {
    const n2 = isArray(t2);
    const o2 = n2 ? t2 : [t2];
    const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
    addPlugins(o2);
    return n2 ? s2 : s2[0];
  };
  OverlayScrollbars.valid = (t2) => {
    const n2 = t2 && t2.elements;
    const o2 = isFunction(n2) && n2();
    return isPlainObject(o2) && !!getInstance(o2.target);
  };
  OverlayScrollbars.env = () => {
    const { T: t2, k: n2, R: o2, V: s2, B: e2, F: c2, U: r2, P: l2, N: i2, q: a2 } = getEnvironment();
    return assignDeep({}, {
      scrollbarsSize: t2,
      scrollbarsOverlaid: n2,
      scrollbarsHiding: o2,
      scrollTimeline: s2,
      staticDefaultInitialization: e2,
      staticDefaultOptions: c2,
      getDefaultInitialization: r2,
      setDefaultInitialization: l2,
      getDefaultOptions: i2,
      setDefaultOptions: a2
    });
  };
  OverlayScrollbars.nonce = setNonce;

  // src/modules/scrollbar.js
  function overlayScrollbar() {
    window.osInstance = OverlayScrollbars(document.body, {});
  }

  // src/modules/utils.js
  function displayCurrentYear() {
    const targetTexts = document.querySelectorAll('[data-display-year="text"]');
    if (!targetTexts.length) return;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    targetTexts.forEach((text) => {
      text.textContent = currentYear;
    });
  }
  function getCartCount() {
    function updateCartCount() {
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return "0";
      }
      const count = parseInt(getCookie("persy_cart_count")) || 0;
      const cartCountElement = document.querySelectorAll('[data-cart-count="counter"]');
      if (cartCountElement.length) {
        cartCountElement.forEach((counterEl) => {
          counterEl.textContent = count;
        });
      }
    }
    updateCartCount();
    setInterval(updateCartCount, 3e3);
  }

  // src/index.js
  function sideModalAnimation() {
    const modals = document.querySelectorAll("[data-modal]");
    if (!modals.length) return;
    let activeTl = null;
    const modalTimelines = {};
    function openModal(modalTl, modal) {
      modalTl.play();
      toggleScroll(true);
      activeTl = modalTl;
      window.location.hash = modal.getAttribute("data-modal");
    }
    function closeModal() {
      activeTl.reverse();
      toggleScroll();
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    modals.forEach((modal) => {
      const modalName = modal.getAttribute("data-modal");
      const triggers = document.querySelectorAll(`[data-modal-trigger="${modalName}"]`);
      const modalWrap = modal.querySelector('[data-modal-el="wrap"]');
      const modalOverlay = modal.querySelector('[data-modal-el="overlay"]');
      const closeBtns = modal.querySelectorAll('[data-modal-el="close-btn"]');
      let modalTl = gsapWithCSS.timeline({ paused: true });
      modalTl.set(modal, {
        display: "flex"
      }).fromTo(
        modalWrap,
        {
          x: "100%"
        },
        {
          x: "0%",
          duration: 0.8,
          ease: "power3.inOut"
        }
      ).fromTo(
        modalOverlay,
        {
          opacity: 0
        },
        {
          opacity: 0.1,
          duration: 0.3,
          ease: "linear"
        },
        "<"
      );
      modalTimelines[modalName] = { timeline: modalTl, modal };
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          openModal(modalTl, modal);
        });
      });
      closeBtns.forEach((btn) => {
        btn.addEventListener("click", (event2) => {
          closeModal();
        });
      });
      modalOverlay.addEventListener("click", () => {
        closeModal();
      });
    });
    window.addEventListener("load", () => {
      const hash = window.location.hash.substring(1);
      if (hash && modalTimelines[hash]) {
        const { timeline: timeline2, modal } = modalTimelines[hash];
        openModal(timeline2, modal);
      }
    });
  }
  function productStickyNav() {
    const productBar = document.querySelector('[data-product-bar="sticky-bar"]');
    if (!productBar) return;
    const heroSection = document.querySelector('[data-product-bar="hero"]');
    const footer = document.querySelector("footer");
    let showTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: heroSection,
        start: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
    showTl.set(productBar, {
      display: "flex"
    }).fromTo(
      productBar,
      {
        y: "1rem",
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out"
      }
    );
    let hideTl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top bottom",
        end: "top top",
        toggleActions: "play none none reverse"
      }
    });
    hideTl.to(productBar, {
      y: "1rem",
      opacity: 0,
      duration: 0.3,
      ease: "power3.out"
    }).set(productBar, {
      display: "none"
    });
  }
  function popupAnimation() {
    const popups = document.querySelectorAll("[data-popup]");
    if (!popups.length) return;
    const popupTimelines = {};
    function openPopup(popupTl, popup) {
      toggleScroll(true);
      popupTl.play();
      window.location.hash = popup.getAttribute("data-popup");
    }
    function closePopup(popupTl) {
      toggleScroll();
      popupTl.reverse();
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
    popups.forEach((popup) => {
      const popupName = popup.getAttribute("data-popup");
      const triggers = document.querySelectorAll(`[data-popup-trigger="${popupName}"]`);
      const popupWrap = popup.querySelector('[data-popup-el="wrap"]');
      const popupOverlay = popup.querySelector('[data-popup-el="overlay"]');
      const closeBtn = popup.querySelector('[data-popup-el="close-btn"]');
      let popupTl = gsapWithCSS.timeline({ paused: true });
      popupTl.set(popup, {
        display: "flex"
      }).fromTo(
        popupWrap,
        {
          y: "2rem",
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut"
        }
      ).fromTo(
        popupOverlay,
        {
          opacity: 0
        },
        {
          opacity: 0.1,
          duration: 0.3,
          ease: "linear"
        },
        "<"
      );
      popupTimelines[popupName] = { timeline: popupTl, popup };
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", (e2) => {
          e2.preventDefault();
          e2.stopPropagation();
          openPopup(popupTl, popup);
        });
      });
      closeBtn.addEventListener("click", () => {
        closePopup(popupTl);
      });
      popupOverlay.addEventListener("click", () => {
        closePopup(popupTl);
      });
    });
    window.addEventListener("load", () => {
      const hash = window.location.hash.substring(1);
      if (hash && popupTimelines[hash]) {
        const { timeline: timeline2, popup } = popupTimelines[hash];
        openPopup(timeline2, popup);
      }
    });
  }
  function mobileMenuAnimation() {
    const mobileMenu = document.querySelector('[data-mobile-menu="menu"]');
    if (!mobileMenu) return;
    const menuTrigger = document.querySelector('[data-mobile-menu="trigger"]');
    const menuWrap = mobileMenu.querySelector('[data-mobile-menu="wrap"]');
    const menuOverlay = mobileMenu.querySelector('[data-mobile-menu="overlay"]');
    const accordionButtons = document.querySelectorAll('[data-accordion="accordion-item"]');
    let menuOpen = false;
    let mm = gsapWithCSS.matchMedia();
    mm.add("(max-width: 991px)", () => {
      accordionButtons.forEach((button) => {
        button.addEventListener("click", () => {
          setTimeout(() => {
            menuTl.invalidate();
          }, 500);
        });
      });
      menuTl = gsapWithCSS.timeline({
        paused: true,
        onStart: () => {
          gsapWithCSS.set(mobileMenu, { display: "block" });
        },
        onReverseComplete: () => {
          gsapWithCSS.set(mobileMenu, { display: "none" });
        }
      });
      menuTl.fromTo(
        mobileMenu,
        {
          height: 0
        },
        {
          height: "auto",
          duration: 0.7,
          ease: "power3.inOut"
        }
      ).fromTo(
        menuOverlay,
        {
          opacity: 0
        },
        {
          opacity: 0.1,
          duration: 0.3,
          ease: "linear"
        },
        "<"
      );
      menuTrigger.addEventListener("click", () => {
        if (!menuOpen) {
          menuTrigger.textContent = "Close";
          menuTl.play();
          menuOpen = true;
        } else {
          menuTrigger.textContent = "Menu";
          menuTl.reverse();
          menuOpen = false;
        }
      });
      menuOverlay.addEventListener("click", () => {
        menuTrigger.textContent = "Menu";
        menuTl.reverse();
        menuOpen = false;
      });
    });
  }
  function indexStoryImagesParallax() {
    const imagesWrap = document.querySelector('[data-index-story-parallax="images-wrap"]');
    if (!imagesWrap) return;
    const bigImage = imagesWrap.querySelector('[data-index-story-parallax="big-img"]');
    const smallImages = imagesWrap.querySelectorAll('[data-index-story-parallax="small-img"]');
    let tl = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: imagesWrap,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        ease: "linear"
      }
    });
    tl.fromTo(
      bigImage,
      {
        y: "3%"
      },
      {
        y: "-1%"
      }
    ).fromTo(
      smallImages,
      {
        y: "-5%"
      },
      {
        y: "5%",
        ease: "linear"
      },
      "<"
    );
  }
  function navBgAnimation() {
    const navLinks = document.querySelectorAll('.header_nav [data-nav-bg-animation="link"]');
    if (!navLinks.length) return;
    const navBlob = document.querySelector('[data-nav-bg-animation="blob"]');
    const navWrap = document.querySelector('[data-nav-bg-animation="nav-wrap"]');
    const navContainer = navBlob.parentElement;
    let blobHidden = true;
    let currentLink;
    const currentUrl = window.location.href;
    function isActiveNav(link) {
      return link.classList.contains("w--current") || link.querySelector(".w--current");
    }
    function getLinkInfo(link) {
      const linkCoords = link.getBoundingClientRect();
      const navCoords = navContainer.getBoundingClientRect();
      const leftPosition = linkCoords.left - navCoords.left;
      const data = {
        width: linkCoords.width,
        leftPosition
      };
      return data;
    }
    function moveBlob(target, instant = false) {
      const { width, leftPosition } = getLinkInfo(target);
      const duration = !instant ? 0.3 : 0;
      gsapWithCSS.to(navBlob, {
        width,
        left: leftPosition,
        duration,
        ease: "power2.out"
      });
    }
    function showBlob() {
      blobHidden = false;
      gsapWithCSS.to(navBlob, {
        opacity: 1,
        duration: 0.2
      });
    }
    function hideBlob() {
      blobHidden = true;
      gsapWithCSS.to(navBlob, {
        opacity: 0,
        duration: 0.3
      });
    }
    navLinks.forEach((link) => {
      if (isActiveNav(link)) {
        currentLink = link;
        moveBlob(link, true);
        showBlob();
      }
      link.addEventListener("mouseenter", () => {
        if (blobHidden) {
          moveBlob(link, true);
          showBlob();
        } else {
          moveBlob(link);
        }
      });
      link.addEventListener("mouseleave", () => {
        if (currentLink && currentLink !== link) {
          moveBlob(currentLink);
        } else if (currentLink === link) {
          return;
        }
      });
    });
    navWrap.addEventListener("mouseleave", () => {
      if (!currentLink) {
        hideBlob();
      }
    });
  }
  function menuDropdownAnimation() {
    const menuTriggers = document.querySelectorAll('[data-dropdown-menu="trigger"]');
    if (!menuTriggers.length) return;
    menuTriggers.forEach((menuTrigger) => {
      const menuWrap = menuTrigger.querySelector('[data-dropdown-menu="wrap"]');
      const contentWrap = menuTrigger.querySelector('[data-dropdown-menu="content"]');
      const menuHeight = contentWrap.scrollHeight;
      let menuTl2 = gsapWithCSS.timeline({ paused: true });
      menuTl2.set(menuWrap, {
        display: "flex"
      });
      menuTl2.to(menuWrap, {
        height: "auto",
        duration: 0.6,
        ease: "power3.inOut"
      });
      menuTrigger.addEventListener("mouseenter", () => {
        menuTl2.play();
      });
      menuTrigger.addEventListener("mouseleave", () => {
        menuTl2.reverse();
      });
    });
  }
  function faqAnchorScroll() {
    const anchorLinks = document.querySelectorAll("[data-faq-anchor]");
    if (!anchorLinks.length) return;
    const anchorSections = Array.from(anchorLinks).map((anchor) => {
      const sectionId = "faq-" + anchor.getAttribute("data-faq-anchor");
      return document.getElementById(sectionId);
    });
    anchorSections.forEach((section, index) => {
      if (!section) return;
      ScrollTrigger2.create({
        trigger: section,
        start: "top 40%",
        end: "bottom 40%",
        toggleClass: {
          targets: anchorLinks[index],
          // Add class to the corresponding link
          className: "is-current"
        }
      });
    });
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e2) => {
        const targetId = link.getAttribute("data-faq-anchor");
        const targetElement = document.getElementById("faq-" + targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, {
            duration: 1,
            offset: -window.innerHeight * 0.2,
            // Offset by 40% of viewport height
            easing: (x2) => x2 < 0.5 ? 4 * x2 * x2 * x2 : 1 - Math.pow(-2 * x2 + 2, 3) / 2
            // Ease-in-out easing
          });
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    overlayScrollbar();
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    gsapWithCSS.registerPlugin(Draggable);
    smoothScroll();
    nestedLenisScroll();
    $.validator.setDefaults({
      ignore: []
      // Do not ignore any hidden elements
    });
    indexHeroScroll();
    homeHeroSlides();
    dottedBoothPin();
    boothScrollAnimation();
    sideModalAnimation();
    customCursorAnimation();
    usageHoverAnimation();
    reasonsSlider();
    reasonsSliderHover();
    testimonialsSlider();
    displayCurrentYear();
    getCartCount();
    quoteFormQtyInput();
    productImagesSlider();
    rotatingText();
    productFeaturesSlider();
    accordionAnimation();
    productMobilitySlider();
    productStickyNav();
    popupAnimation();
    mobileMenuAnimation();
    productFeaturesVideo();
    mobileUsageSwiper();
    mobileProductCustomizeSwiper();
    customFormValidation();
    indexMobilityPinAnimation();
    indexStoryImagesParallax();
    cookiesPopup();
    navBgAnimation();
    menuDropdownAnimation();
    formUTMparameters();
    formPageField();
    customFormSelect();
    faqAnchorScroll();
    draggableCardsAnimation();
    aboutValuesListHover();
    aboutGallerySlider();
    aboutValuesSlider();
    aboutCardsExpand();
    showroomMap();
    showroomSearch();
    mobileKnowledgeBlogSlider();
    knowledgePostGallerySlider();
    thingsToWatchLandingSlider();
    initStackingNav();
    setTimeout(() => {
      ScrollTrigger2.sort();
      ScrollTrigger2.refresh();
    }, 1e3);
  });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Draggable.js:
  (*!
   * Draggable 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

@googlemaps/markerclusterer/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.10.0
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=bundle.js.map
