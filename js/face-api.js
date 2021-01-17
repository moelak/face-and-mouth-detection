!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], e)
		: e(((t = t || self).faceapi = t.faceapi || {}));
})(this, function (c) {
	'use strict';
	var r = function (t, e) {
		return (r =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (t, e) {
					t.__proto__ = e;
				}) ||
			function (t, e) {
				for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
			})(t, e);
	};
	function t(t, e) {
		function n() {
			this.constructor = t;
		}
		r(t, e),
			(t.prototype =
				null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
	}
	function y(i, a, s, u) {
		return new (s = s || Promise)(function (t, e) {
			function n(t) {
				try {
					o(u.next(t));
				} catch (t) {
					e(t);
				}
			}
			function r(t) {
				try {
					o(u.throw(t));
				} catch (t) {
					e(t);
				}
			}
			function o(e) {
				e.done
					? t(e.value)
					: new s(function (t) {
							t(e.value);
					  }).then(n, r);
			}
			o((u = u.apply(i, a || [])).next());
		});
	}
	function R(n, r) {
		var o,
			i,
			a,
			t,
			s = {
				label: 0,
				sent: function () {
					if (1 & a[0]) throw a[1];
					return a[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(t = { next: e(0), throw: e(1), return: e(2) }),
			'function' == typeof Symbol &&
				(t[Symbol.iterator] = function () {
					return this;
				}),
			t
		);
		function e(e) {
			return function (t) {
				return (function (e) {
					if (o) throw new TypeError('Generator is already executing.');
					for (; s; )
						try {
							if (
								((o = 1),
								i &&
									(a =
										2 & e[0]
											? i.return
											: e[0]
											? i.throw || ((a = i.return) && a.call(i), 0)
											: i.next) &&
									!(a = a.call(i, e[1])).done)
							)
								return a;
							switch (((i = 0), a && (e = [2 & e[0], a.value]), e[0])) {
								case 0:
								case 1:
									a = e;
									break;
								case 4:
									return s.label++, { value: e[1], done: !1 };
								case 5:
									s.label++, (i = e[1]), (e = [0]);
									continue;
								case 7:
									(e = s.ops.pop()), s.trys.pop();
									continue;
								default:
									if (
										!(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
										(6 === e[0] || 2 === e[0])
									) {
										s = 0;
										continue;
									}
									if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
										s.label = e[1];
										break;
									}
									if (6 === e[0] && s.label < a[1]) {
										(s.label = a[1]), (a = e);
										break;
									}
									if (a && s.label < a[2]) {
										(s.label = a[2]), s.ops.push(e);
										break;
									}
									a[2] && s.ops.pop(), s.trys.pop();
									continue;
							}
							e = r.call(n, s);
						} catch (t) {
							(e = [6, t]), (i = 0);
						} finally {
							o = a = 0;
						}
					if (5 & e[0]) throw e[1];
					return { value: e[0] ? e[1] : void 0, done: !0 };
				})([e, t]);
			};
		}
	}
	var o =
		((e.prototype.setPlatform = function (t, e) {
			null != this.platform &&
				console.warn(
					'Platform ' +
						this.platformName +
						' has already been set. Overwriting the platform with ' +
						e +
						'.'
				),
				(this.platformName = t),
				(this.platform = e);
		}),
		(e.prototype.registerFlag = function (t, e, n) {
			if (
				((this.flagRegistry[t] = { evaluationFn: e, setHook: n }),
				null != this.urlFlags[t])
			) {
				var r = this.urlFlags[t];
				console.warn('Setting feature override from URL ' + t + ': ' + r + '.'),
					this.set(t, r);
			}
		}),
		(e.prototype.get = function (t) {
			return (
				t in this.flags || (this.flags[t] = this.evaluateFlag(t)), this.flags[t]
			);
		}),
		(e.prototype.getNumber = function (t) {
			return this.get(t);
		}),
		(e.prototype.getBool = function (t) {
			return this.get(t);
		}),
		(e.prototype.getFlags = function () {
			return this.flags;
		}),
		Object.defineProperty(e.prototype, 'features', {
			get: function () {
				return this.flags;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(e.prototype.set = function (t, e) {
			if (null == this.flagRegistry[t])
				throw new Error(
					'Cannot set flag ' + t + ' as it has not been registered.'
				);
			(this.flags[t] = e),
				null != this.flagRegistry[t].setHook && this.flagRegistry[t].setHook(e);
		}),
		(e.prototype.evaluateFlag = function (t) {
			if (null == this.flagRegistry[t])
				throw new Error(
					"Cannot evaluate flag '" + t + "': no evaluation function found."
				);
			return this.flagRegistry[t].evaluationFn();
		}),
		(e.prototype.setFlags = function (t) {
			this.flags = Object.assign({}, t);
		}),
		(e.prototype.reset = function () {
			(this.flags = {}), (this.urlFlags = {}), this.populateURLFlags();
		}),
		(e.prototype.populateURLFlags = function () {
			var o = this;
			if (
				void 0 !== this.global &&
				void 0 !== this.global.location &&
				void 0 !== this.global.location.search
			) {
				var t,
					r,
					e =
						((t = this.global.location.search),
						(r = {}),
						t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (t) {
							for (var e = [], n = 1; n < arguments.length; n++)
								e[n - 1] = arguments[n];
							return (
								(function (t, e, n) {
									t[decodeURIComponent(e)] = decodeURIComponent(n || '');
								})(r, e[0], e[1]),
								e.join('=')
							);
						}),
						r);
				'tfjsflags' in e &&
					e.tfjsflags.split(',').forEach(function (t) {
						var e = t.split(':'),
							n = e[0],
							r = e[1];
						o.urlFlags[n] = (function (t, e) {
							if ('true' === (e = e.toLowerCase()) || 'false' === e)
								return 'true' === e;
							if ('' + +e === e) return +e;
							throw new Error(
								'Could not parse value flag value ' + e + ' for flag ' + t + '.'
							);
						})(n, r);
					});
			}
		}),
		e);
	function e(t) {
		(this.global = t),
			(this.flags = {}),
			(this.flagRegistry = {}),
			(this.urlFlags = {}),
			this.populateURLFlags();
	}
	function _() {
		return i;
	}
	var i = null,
		u = new Map(),
		n = new Map();
	function g(t, e) {
		var n = p(t, e);
		return u.get(n);
	}
	function l(t) {
		return n.get(t);
	}
	function a(t) {
		for (var e = u.entries(), n = []; ; ) {
			var r = e.next(),
				o = r.done,
				i = r.value;
			if (o) break;
			var a = i[0],
				s = i[1];
			a.split('_')[0] === t && n.push(s);
		}
		return n;
	}
	function s(t) {
		var e = t.kernelName,
			n = t.backendName,
			r = p(e, n);
		if (u.has(r))
			throw new Error(
				"The kernel '" + e + "' for backend '" + n + "' is already registered"
			);
		u.set(r, t);
	}
	function h(t) {
		var e = t.kernelName;
		n.has(e) && console.warn("Overriding the gradient for '" + e + "'"),
			n.set(e, t);
	}
	function p(t, e) {
		return e + '_' + t;
	}
	function f(t) {
		for (var e = t.length, n = 0, r = 0; 0 < e; )
			(r = (Math.random() * e) | 0), (n = t[--e]), (t[e] = t[r]), (t[r] = n);
	}
	function d(t, e, n) {
		return Math.max(t, Math.min(e, n));
	}
	function E(t) {
		return t % 2 == 0 ? t : t + 1;
	}
	function v(t) {
		for (var e = 0, n = 0; n < t.length; n++) e += t[n];
		return e;
	}
	function P(t, e) {
		if (!t) throw new Error('string' == typeof e ? e : e());
	}
	function x(t, e, n) {
		void 0 === n && (n = ''),
			P(D(t, e), function () {
				return n + ' Shapes ' + t + ' and ' + e + ' must match';
			});
	}
	function m(t) {
		P(null != t, function () {
			return 'The input to the tensor constructor must be a non-null value.';
		});
	}
	function b(t, e, n) {
		if (
			(void 0 === e && (e = []),
			void 0 === n && (n = !1),
			null == e && (e = []),
			Array.isArray(t) || (z(t) && !n))
		)
			for (var r = 0; r < t.length; ++r) b(t[r], e, n);
		else e.push(t);
		return e;
	}
	function L(t) {
		if (0 === t.length) return 1;
		for (var e = t[0], n = 1; n < t.length; n++) e *= t[n];
		return e;
	}
	function D(t, e) {
		if (t === e) return !0;
		if (null == t || null == e) return !1;
		if (t.length !== e.length) return !1;
		for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !1;
		return !0;
	}
	function B(t) {
		return t % 1 == 0;
	}
	function w(t) {
		if (null != Math.tanh) return Math.tanh(t);
		if (t === 1 / 0) return 1;
		if (t === -1 / 0) return -1;
		var e = Math.exp(2 * t);
		return (e - 1) / (e + 1);
	}
	function C(t) {
		var e = Math.ceil(Math.sqrt(t));
		return [e, Math.ceil(t / e)];
	}
	function I(t, e) {
		return e <= t.length ? t : t + ' '.repeat(e - t.length);
	}
	function k(i, a, s) {
		return (
			void 0 === a &&
				(a = function (t) {
					return 0;
				}),
			new Promise(function (e, n) {
				var r = 0,
					o = function () {
						if (i()) e();
						else {
							var t = a(++r);
							null != s && s <= r ? n() : setTimeout(o, t);
						}
					};
				o();
			})
		);
	}
	function S(t, e) {
		for (var n = 1, r = -1, o = 0; o < t.length; ++o)
			if (0 <= t[o]) n *= t[o];
			else if (-1 === t[o]) {
				if (-1 !== r)
					throw Error(
						'Shapes can only have 1 implicit size. Found -1 at dim ' +
							r +
							' and dim ' +
							o
					);
				r = o;
			} else if (t[o] < 0)
				throw Error('Shapes can not be < 0. Found ' + t[o] + ' at dim ' + o);
		if (-1 === r) {
			if (0 < e && e !== n)
				throw Error('Size(' + e + ') must match the product of shape ' + t);
			return t;
		}
		if (0 === n)
			throw Error(
				'Cannot infer the missing size in [' + t + '] when there are 0 elements'
			);
		if (e % n != 0)
			throw Error(
				"The implicit shape can't be a fractional number. Got " + e + ' / ' + n
			);
		var i = t.slice();
		return (i[r] = e / n), i;
	}
	function A(t, e) {
		var n = e.length;
		return (
			P(
				(t =
					null == t
						? e.map(function (t, e) {
								return e;
						  })
						: [].concat(t)).every(function (t) {
					return -n <= t && t < n;
				}),
				function () {
					return (
						'All values in axis param must be in range [-' +
						n +
						', ' +
						n +
						') but got axis ' +
						t
					);
				}
			),
			P(
				t.every(function (t) {
					return B(t);
				}),
				function () {
					return 'All values in axis param must be integers but got axis ' + t;
				}
			),
			t.map(function (t) {
				return t < 0 ? n + t : t;
			})
		);
	}
	function T(t, e) {
		for (
			var n = [],
				r = [],
				o = null != e && Array.isArray(e) && 0 === e.length,
				i = null == e || o ? null : A(e, t).sort(),
				a = 0,
				s = 0;
			s < t.length;
			++s
		) {
			if (null != i) {
				if (i[a] === s && 1 !== t[s])
					throw new Error(
						"Can't squeeze axis " + s + " since its dim '" + t[s] + "' is not 1"
					);
				(null == i[a] || i[a] > s) && 1 === t[s] && (n.push(t[s]), r.push(s)),
					i[a] <= s && a++;
			}
			1 !== t[s] && (n.push(t[s]), r.push(s));
		}
		return { newShape: n, keptDims: r };
	}
	function N(t, e) {
		var n = null;
		if (null == t || 'float32' === t) n = new Float32Array(e);
		else if ('int32' === t) n = new Int32Array(e);
		else {
			if ('bool' !== t) throw new Error('Unknown data type ' + t);
			n = new Uint8Array(e);
		}
		return n;
	}
	function F(t, e) {
		var n = null;
		if (null == t || 'float32' === t) n = new Float32Array(e);
		else if ('int32' === t) n = new Int32Array(e);
		else if ('bool' === t) n = new Uint8Array(e);
		else {
			if ('string' !== t) throw new Error('Unknown data type ' + t);
			n = new Array(e);
		}
		return n;
	}
	function M(t, e) {
		for (var n = 0; n < t.length; n++) {
			var r = t[n];
			if (isNaN(r) || !isFinite(r))
				throw Error(
					'A tensor of type ' + e + ' being uploaded contains ' + r + '.'
				);
		}
	}
	function O(t) {
		return (
			'bool' === t ||
			'complex64' === t ||
			'float32' === t ||
			'int32' === t ||
			'string' === t
		);
	}
	function W(t, e) {
		return !(
			'complex64' === e ||
			('float32' === e && 'complex64' !== t) ||
			('int32' === e && 'float32' !== t && 'complex64' !== t) ||
			('bool' === e && 'bool' === t)
		);
	}
	function z(t) {
		return (
			t instanceof Float32Array ||
			t instanceof Int32Array ||
			t instanceof Uint8Array
		);
	}
	function U(t) {
		if ('float32' === t || 'int32' === t) return 4;
		if ('complex64' === t) return 8;
		if ('bool' === t) return 1;
		throw new Error('Unknown dtype ' + t);
	}
	function V(t) {
		if (null == t) return 0;
		var e = 0;
		return (
			t.forEach(function (t) {
				return (e += t.length);
			}),
			e
		);
	}
	function G(t) {
		return 'string' == typeof t || t instanceof String;
	}
	function H(t) {
		return 'boolean' == typeof t;
	}
	function q(t) {
		return 'number' == typeof t;
	}
	function j(t) {
		return Array.isArray(t)
			? j(t[0])
			: t instanceof Float32Array
			? 'float32'
			: t instanceof Int32Array || t instanceof Uint8Array
			? 'int32'
			: q(t)
			? 'float32'
			: G(t)
			? 'string'
			: H(t)
			? 'bool'
			: 'float32';
	}
	function K(t) {
		return !!(t && t.constructor && t.call && t.apply);
	}
	function X(t, e) {
		for (var n = e; n < t; ++n) if (t % n == 0) return n;
		return t;
	}
	function Y(t) {
		var e = t.length;
		if (e < 2) return [];
		var n = new Array(e - 1);
		n[e - 2] = t[e - 1];
		for (var r = e - 3; 0 <= r; --r) n[r] = n[r + 1] * t[r + 1];
		return n;
	}
	function $(t, e, n) {
		if ('string' === e)
			throw new Error('Cannot convert a string[] to a TypedArray');
		if (
			(Array.isArray(t) && (t = b(t)),
			n && M(t, e),
			(t instanceof Float32Array && 'float32' === e) ||
				(t instanceof Int32Array && 'int32' === e) ||
				(t instanceof Uint8Array && 'bool' === e))
		)
			return t;
		if (null == e || 'float32' === e || 'complex64' === e)
			return new Float32Array(t);
		if ('int32' === e) return new Int32Array(t);
		if ('bool' !== e) throw new Error('Unknown data type ' + e);
		for (var r = new Uint8Array(t.length), o = 0; o < r.length; ++o)
			0 !== Math.round(t[o]) && (r[o] = 1);
		return r;
	}
	function J(t, e) {
		if (0 === t.length) return e[0];
		var n = t.reduce(function (t, e) {
			return t * e;
		});
		if (0 === n) return [];
		if (n !== e.length)
			throw new Error('[' + t + '] does not match the input size.');
		return (function t(e, n, r) {
			var o = new Array();
			if (1 === n.length) for (var i = n[0], a = 0; a < i; a++) o[a] = r[e + a];
			else {
				i = n[0];
				var s = n.slice(1),
					u = s.reduce(function (t, e) {
						return t * e;
					});
				for (a = 0; a < i; a++) o[a] = t(e + a * u, s, r);
			}
			return o;
		})(0, t, e);
	}
	function Q(t, e) {
		for (var n = Z(t, e), r = 0; r < n.length; r++) n[r] = 1;
		return n;
	}
	function Z(t, e) {
		if (null == e || 'float32' === e || 'complex64' === e)
			return new Float32Array(t);
		if ('int32' === e) return new Int32Array(t);
		if ('bool' === e) return new Uint8Array(t);
		throw new Error('Unknown data type ' + e);
	}
	function tt() {
		return _().platform.now();
	}
	function et(e) {
		e.forEach(function (t) {
			P(Number.isInteger(t) && 0 <= t, function () {
				return (
					'Tensor must have a shape comprised of positive integers but got shape [' +
					e +
					'].'
				);
			});
		});
	}
	function nt(t, e) {
		return (
			void 0 === e && (e = 'utf-8'),
			(e = e || 'utf-8'),
			_().platform.encode(t, e)
		);
	}
	function rt(t, e) {
		return (
			void 0 === e && (e = 'utf-8'),
			(e = e || 'utf-8'),
			_().platform.decode(t, e)
		);
	}
	var ot = Object.freeze({
			shuffle: f,
			clamp: d,
			nearestLargerEven: E,
			sum: v,
			randUniform: function (t, e) {
				var n = Math.random();
				return e * n + (1 - n) * t;
			},
			distSquared: function (t, e) {
				for (var n = 0, r = 0; r < t.length; r++) {
					var o = Number(t[r]) - Number(e[r]);
					n += o * o;
				}
				return n;
			},
			assert: P,
			assertShapesMatch: x,
			assertNonNull: m,
			flatten: b,
			sizeFromShape: L,
			isScalarShape: function (t) {
				return 0 === t.length;
			},
			arraysEqual: D,
			isInt: B,
			tanh: w,
			sizeToSquarishShape: C,
			createShuffledIndices: function (t) {
				for (var e = new Uint32Array(t), n = 0; n < t; ++n) e[n] = n;
				return f(e), e;
			},
			rightPad: I,
			repeatedTry: k,
			inferFromImplicitShape: S,
			parseAxisParam: A,
			squeezeShape: T,
			getTypedArrayFromDType: N,
			getArrayFromDType: F,
			checkConversionForErrors: M,
			isValidDtype: O,
			hasEncodingLoss: W,
			isTypedArray: z,
			bytesPerElement: U,
			bytesFromStringArray: V,
			isString: G,
			isBoolean: H,
			isNumber: q,
			inferDtype: j,
			isFunction: K,
			nearestDivisor: X,
			computeStrides: Y,
			toTypedArray: $,
			toNestedArray: J,
			makeOnesTypedArray: Q,
			makeZerosTypedArray: Z,
			now: tt,
			assertNonNegativeIntegerDimensions: et,
			fetch: function (t, e) {
				return _().platform.fetch(t, e);
			},
			encodeString: nt,
			decodeString: rt,
		}),
		it =
			((at.prototype.profileKernel = function (o, i, t) {
				var e,
					a = this,
					s = this.backendTimer.time(function () {
						e = t();
					});
				return (
					e.forEach(function (r) {
						r.data().then(function (n) {
							!(function (t, e, n) {
								if ('float32' === e)
									for (var r = 0; r < t.length; r++) {
										var o = t[r];
										if (isNaN(o) || !isFinite(o))
											return console.warn(
												'Found ' + o + " in the result of '" + n + "'"
											);
									}
							})(n, r.dtype, o),
								s.then(function (t) {
									var e = '';
									null != t.getExtraProfileInfo &&
										(e = t.getExtraProfileInfo()),
										a.logger.logKernelProfile(o, r, n, t.kernelMs, i, e);
								});
						});
					}),
					e
				);
			}),
			at);
	function at(t, e) {
		(this.backendTimer = t),
			null == (this.logger = e) && (this.logger = new st());
	}
	var st =
		((ut.prototype.logKernelProfile = function (t, e, n, r, o, i) {
			var a = I(r + 'ms', 9),
				s = I(t, 25),
				u = e.rank,
				c = e.size,
				l = I(e.shape.toString(), 14),
				h = '';
			for (var p in o) {
				var f = o[p].shape || e.shape,
					d = f.length;
				h += p + ': ' + d + 'D ' + (0 < d ? f : '') + ' ';
			}
			console.log(
				'%c' +
					s +
					'\t%c' +
					a +
					'\t%c' +
					u +
					'D ' +
					l +
					'\t%c' +
					c +
					'\t%c' +
					h +
					'\t%c' +
					i,
				'font-weight:bold',
				'color:red',
				'color:blue',
				'color: orange',
				'color: green',
				'color: steelblue'
			);
		}),
		ut);
	function ut() {}
	var ct = 7;
	function lt(t, e, n) {
		return I(
			Array.isArray(t)
				? parseFloat(t[0].toFixed(ct)) +
						' + ' +
						parseFloat(t[1].toFixed(ct)) +
						'j'
				: G(t)
				? "'" + t + "'"
				: 'bool' === n
				? ht(t)
				: parseFloat(t.toFixed(ct)).toString(),
			e
		);
	}
	function ht(t) {
		return 0 === t ? 'false' : 'true';
	}
	function pt(t) {
		for (var e = [], n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
		return e;
	}
	var ft =
			((gt.prototype.set = function (t) {
				for (var e = this, n = [], r = 1; r < arguments.length; r++)
					n[r - 1] = arguments[r];
				0 === n.length && (n = [0]),
					P(n.length === this.rank, function () {
						return (
							'The number of provided coordinates (' +
							n.length +
							') must match the rank (' +
							e.rank +
							')'
						);
					});
				var o = this.locToIndex(n);
				this.values[o] = t;
			}),
			(gt.prototype.get = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				0 === t.length && (t = [0]);
				for (var n = 0, r = 0, o = t; r < o.length; r++) {
					var i = o[r];
					if (i < 0 || i >= this.shape[n]) {
						var a =
							'Requested out of range element at ' +
							t +
							'.   Buffer shape=' +
							this.shape;
						throw new Error(a);
					}
					n++;
				}
				for (var s = t[t.length - 1], u = 0; u < t.length - 1; ++u)
					s += this.strides[u] * t[u];
				return this.values[s];
			}),
			(gt.prototype.locToIndex = function (t) {
				if (0 === this.rank) return 0;
				if (1 === this.rank) return t[0];
				for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n)
					e += this.strides[n] * t[n];
				return e;
			}),
			(gt.prototype.indexToLoc = function (t) {
				if (0 === this.rank) return [];
				if (1 === this.rank) return [t];
				for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n)
					(e[n] = Math.floor(t / this.strides[n])),
						(t -= e[n] * this.strides[n]);
				return (e[e.length - 1] = t), e;
			}),
			Object.defineProperty(gt.prototype, 'rank', {
				get: function () {
					return this.shape.length;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(gt.prototype.toTensor = function () {
				return dt().makeTensor(this.values, this.shape, this.dtype);
			}),
			gt),
		dt = null,
		vt = null,
		mt = null;
	function gt(t, e, n) {
		var r = this;
		if (
			((this.dtype = e),
			(this.shape = t.slice()),
			(this.size = L(t)),
			null != n)
		) {
			var o = n.length;
			P(o === this.size, function () {
				return (
					"Length of values '" +
					o +
					"' does not match the size inferred by the shape '" +
					r.size +
					"'."
				);
			});
		}
		if ('complex64' === e)
			throw new Error(
				'complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).'
			);
		(this.values = n || F(e, this.size)), (this.strides = Y(t));
	}
	var yt =
		((xt.prototype.flatten = function () {
			return this.throwIfDisposed(), this.as1D();
		}),
		(xt.prototype.asScalar = function () {
			return (
				this.throwIfDisposed(),
				P(1 === this.size, function () {
					return 'The array must have only 1 element.';
				}),
				this.reshape([])
			);
		}),
		(xt.prototype.as1D = function () {
			return this.throwIfDisposed(), this.reshape([this.size]);
		}),
		(xt.prototype.as2D = function (t, e) {
			return this.throwIfDisposed(), this.reshape([t, e]);
		}),
		(xt.prototype.as3D = function (t, e, n) {
			return this.throwIfDisposed(), this.reshape([t, e, n]);
		}),
		(xt.prototype.as4D = function (t, e, n, r) {
			return this.throwIfDisposed(), this.reshape([t, e, n, r]);
		}),
		(xt.prototype.as5D = function (t, e, n, r, o) {
			return this.throwIfDisposed(), this.reshape([t, e, n, r, o]);
		}),
		(xt.prototype.asType = function (t) {
			return this.throwIfDisposed(), vt.cast(this, t);
		}),
		Object.defineProperty(xt.prototype, 'rank', {
			get: function () {
				return this.shape.length;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(xt.prototype.buffer = function () {
			return y(this, void 0, void 0, function () {
				var e;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, this.data()];
						case 1:
							return (e = t.sent()), [2, vt.buffer(this.shape, this.dtype, e)];
					}
				});
			});
		}),
		(xt.prototype.bufferSync = function () {
			return vt.buffer(this.shape, this.dtype, this.dataSync());
		}),
		(xt.prototype.array = function () {
			return y(this, void 0, void 0, function () {
				var e;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, this.data()];
						case 1:
							return (e = t.sent()), [2, J(this.shape, e)];
					}
				});
			});
		}),
		(xt.prototype.arraySync = function () {
			return J(this.shape, this.dataSync());
		}),
		(xt.prototype.data = function () {
			return y(this, void 0, void 0, function () {
				var e, n;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return (
								this.throwIfDisposed(),
								(e = dt().read(this.dataId)),
								'string' !== this.dtype ? [3, 2] : [4, e]
							);
						case 1:
							n = t.sent();
							try {
								return [
									2,
									n.map(function (t) {
										return rt(t);
									}),
								];
							} catch (t) {
								throw new Error(
									'Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().'
								);
							}
							t.label = 2;
						case 2:
							return [2, e];
					}
				});
			});
		}),
		(xt.prototype.dataSync = function () {
			this.throwIfDisposed();
			var t = dt().readSync(this.dataId);
			if ('string' === this.dtype)
				try {
					return t.map(function (t) {
						return rt(t);
					});
				} catch (t) {
					throw new Error(
						'Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().'
					);
				}
			return t;
		}),
		(xt.prototype.bytes = function () {
			return y(this, void 0, void 0, function () {
				var e;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return this.throwIfDisposed(), [4, dt().read(this.dataId)];
						case 1:
							return (
								(e = t.sent()),
								'string' === this.dtype ? [2, e] : [2, new Uint8Array(e.buffer)]
							);
					}
				});
			});
		}),
		(xt.prototype.dispose = function () {
			this.isDisposed ||
				(dt().disposeTensor(this), (this.isDisposedInternal = !0));
		}),
		Object.defineProperty(xt.prototype, 'isDisposed', {
			get: function () {
				return this.isDisposedInternal;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(xt.prototype.throwIfDisposed = function () {
			if (this.isDisposed) throw new Error('Tensor is disposed.');
		}),
		(xt.prototype.toFloat = function () {
			return this.asType('float32');
		}),
		(xt.prototype.toInt = function () {
			return this.asType('int32');
		}),
		(xt.prototype.toBool = function () {
			return this.asType('bool');
		}),
		(xt.prototype.print = function (t) {
			return void 0 === t && (t = !1), vt.print(this, t);
		}),
		(xt.prototype.reshape = function (t) {
			return this.throwIfDisposed(), vt.reshape(this, t);
		}),
		(xt.prototype.reshapeAs = function (t) {
			return this.throwIfDisposed(), this.reshape(t.shape);
		}),
		(xt.prototype.expandDims = function (t) {
			return void 0 === t && (t = 0), vt.expandDims(this, t);
		}),
		(xt.prototype.cumsum = function (t, e, n) {
			return (
				void 0 === t && (t = 0),
				void 0 === e && (e = !1),
				void 0 === n && (n = !1),
				vt.cumsum(this, t, e, n)
			);
		}),
		(xt.prototype.squeeze = function (t) {
			return this.throwIfDisposed(), vt.squeeze(this, t);
		}),
		(xt.prototype.clone = function () {
			return this.throwIfDisposed(), vt.clone(this);
		}),
		(xt.prototype.oneHot = function (t, e, n) {
			return this.throwIfDisposed(), vt.oneHot(this, t, e, n);
		}),
		(xt.prototype.toString = function (t) {
			return (
				void 0 === t && (t = !1),
				(function (t, e, n, r) {
					var o = Y(e),
						i = (function (t, e, n, r) {
							var o = L(e),
								i = r[r.length - 1],
								a = new Array(i).fill(0),
								s = e.length,
								u = 'complex64' === n ? pt(t) : t;
							if (1 < s)
								for (var c = 0; c < o / i; c++)
									for (var l = c * i, h = 0; h < i; h++)
										a[h] = Math.max(a[h], lt(u[l + h], 0, n).length);
							return a;
						})(t, e, n, o),
						a = e.length,
						s = (function t(e, n, r, o, i, a) {
							void 0 === a && (a = !0);
							var s = 'complex64' === r ? 2 : 1,
								u = n[0],
								c = n.length;
							if (0 === c)
								return 'complex64' === r
									? [lt(pt(e)[0], 0, r)]
									: 'bool' === r
									? [ht(e[0])]
									: [e[0].toString()];
							if (1 === c) {
								if (20 < u) {
									var l = 3 * s,
										h = Array.from(e.slice(0, l)),
										p = Array.from(e.slice((u - 3) * s, u * s));
									return (
										'complex64' === r && ((h = pt(h)), (p = pt(p))),
										[
											'[' +
												h
													.map(function (t, e) {
														return lt(t, i[e], r);
													})
													.join(', ') +
												', ..., ' +
												p
													.map(function (t, e) {
														return lt(t, i[u - 3 + e], r);
													})
													.join(', ') +
												']',
										]
									);
								}
								return [
									'[' +
										('complex64' === r ? pt(e) : Array.from(e))
											.map(function (t, e) {
												return lt(t, i[e], r);
											})
											.join(', ') +
										']',
								];
							}
							var f = n.slice(1),
								d = o.slice(1),
								v = o[0] * s,
								m = [];
							if (20 < u) {
								for (var g = 0; g < 3; g++) {
									var y = (x = g * v) + v;
									m.push.apply(m, t(e.slice(x, y), f, r, d, i, !1));
								}
								for (m.push('...'), g = u - 3; g < u; g++)
									(y = (x = g * v) + v),
										m.push.apply(m, t(e.slice(x, y), f, r, d, i, g === u - 1));
							} else
								for (g = 0; g < u; g++) {
									var x;
									(y = (x = g * v) + v),
										m.push.apply(m, t(e.slice(x, y), f, r, d, i, g === u - 1));
								}
							var b = 2 === c ? ',' : '';
							for (m[0] = '[' + m[0] + b, g = 1; g < m.length - 1; g++)
								m[g] = ' ' + m[g] + b;
							var w = ',\n';
							for (g = 2; g < c; g++) w += '\n';
							return (
								(m[m.length - 1] = ' ' + m[m.length - 1] + ']' + (a ? '' : w)),
								m
							);
						})(t, e, n, o, i),
						u = ['Tensor'];
					return (
						r &&
							(u.push('  dtype: ' + n),
							u.push('  rank: ' + a),
							u.push('  shape: [' + e + ']'),
							u.push('  values:')),
						u.push(
							s
								.map(function (t) {
									return '    ' + t;
								})
								.join('\n')
						),
						u.join('\n')
					);
				})(this.dataSync(), this.shape, this.dtype, t)
			);
		}),
		(xt.prototype.tile = function (t) {
			return this.throwIfDisposed(), vt.tile(this, t);
		}),
		(xt.prototype.gather = function (t, e) {
			return (
				void 0 === e && (e = 0), this.throwIfDisposed(), vt.gather(this, t, e)
			);
		}),
		(xt.prototype.matMul = function (t, e, n) {
			return (
				void 0 === e && (e = !1),
				void 0 === n && (n = !1),
				this.throwIfDisposed(),
				vt.matMul(this, t, e, n)
			);
		}),
		(xt.prototype.dot = function (t) {
			return this.throwIfDisposed(), vt.dot(this, t);
		}),
		(xt.prototype.norm = function (t, e, n) {
			return (
				void 0 === t && (t = 'euclidean'),
				void 0 === e && (e = null),
				void 0 === n && (n = !1),
				this.throwIfDisposed(),
				vt.norm(this, t, e, n)
			);
		}),
		(xt.prototype.slice = function (t, e) {
			return this.throwIfDisposed(), vt.slice(this, t, e);
		}),
		(xt.prototype.reverse = function (t) {
			return this.throwIfDisposed(), vt.reverse(this, t);
		}),
		(xt.prototype.concat = function (t, e) {
			return (
				void 0 === e && (e = 0),
				this.throwIfDisposed(),
				t instanceof xt && (t = [t]),
				vt.concat([this].concat(t), e)
			);
		}),
		(xt.prototype.split = function (t, e) {
			return (
				void 0 === e && (e = 0), this.throwIfDisposed(), vt.split(this, t, e)
			);
		}),
		(xt.prototype.stack = function (t, e) {
			return void 0 === e && (e = 0), vt.stack([this, t], e);
		}),
		(xt.prototype.unstack = function (t) {
			return void 0 === t && (t = 0), vt.unstack(this, t);
		}),
		(xt.prototype.pad = function (t, e) {
			return void 0 === e && (e = 0), vt.pad(this, t, e);
		}),
		(xt.prototype.batchNormalization = function (t, e, n, r, o) {
			return (
				void 0 === n && (n = 0.001),
				mt(
					'tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon'
				),
				this.batchNorm(t, e, o, r, n)
			);
		}),
		(xt.prototype.batchNorm = function (t, e, n, r, o) {
			return (
				void 0 === o && (o = 0.001),
				this.throwIfDisposed(),
				vt.batchNorm(this, t, e, n, r, o)
			);
		}),
		(xt.prototype.all = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.all(this, t, e)
			);
		}),
		(xt.prototype.any = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.any(this, t, e)
			);
		}),
		(xt.prototype.logSumExp = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.logSumExp(this, t, e)
			);
		}),
		(xt.prototype.sum = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.sum(this, t, e)
			);
		}),
		(xt.prototype.prod = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.prod(this, t, e)
			);
		}),
		(xt.prototype.mean = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.mean(this, t, e)
			);
		}),
		(xt.prototype.min = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.min(this, t, e)
			);
		}),
		(xt.prototype.max = function (t, e) {
			return (
				void 0 === t && (t = null),
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.max(this, t, e)
			);
		}),
		(xt.prototype.argMin = function (t) {
			return (
				void 0 === t && (t = null), this.throwIfDisposed(), vt.argMin(this, t)
			);
		}),
		(xt.prototype.argMax = function (t) {
			return (
				void 0 === t && (t = null), this.throwIfDisposed(), vt.argMax(this, t)
			);
		}),
		(xt.prototype.cast = function (t) {
			return this.throwIfDisposed(), vt.cast(this, t);
		}),
		(xt.prototype.add = function (t) {
			return this.throwIfDisposed(), vt.add(this, t);
		}),
		(xt.prototype.addStrict = function (t) {
			return this.throwIfDisposed(), vt.addStrict(this, t);
		}),
		(xt.prototype.atan2 = function (t) {
			return this.throwIfDisposed(), vt.atan2(this, t);
		}),
		(xt.prototype.sub = function (t) {
			return this.throwIfDisposed(), vt.sub(this, t);
		}),
		(xt.prototype.subStrict = function (t) {
			return this.throwIfDisposed(), vt.subStrict(this, t);
		}),
		(xt.prototype.pow = function (t) {
			return this.throwIfDisposed(), vt.pow(this, t);
		}),
		(xt.prototype.powStrict = function (t) {
			return this.throwIfDisposed(), vt.powStrict(this, t);
		}),
		(xt.prototype.mul = function (t) {
			return this.throwIfDisposed(), vt.mul(this, t);
		}),
		(xt.prototype.mulStrict = function (t) {
			return this.throwIfDisposed(), vt.mulStrict(this, t);
		}),
		(xt.prototype.div = function (t) {
			return this.throwIfDisposed(), vt.div(this, t);
		}),
		(xt.prototype.divNoNan = function (t) {
			return this.throwIfDisposed(), vt.divNoNan(this, t);
		}),
		(xt.prototype.floorDiv = function (t) {
			return this.throwIfDisposed(), vt.floorDiv(this, t);
		}),
		(xt.prototype.divStrict = function (t) {
			return this.throwIfDisposed(), vt.divStrict(this, t);
		}),
		(xt.prototype.minimum = function (t) {
			return this.throwIfDisposed(), vt.minimum(this, t);
		}),
		(xt.prototype.minimumStrict = function (t) {
			return this.throwIfDisposed(), vt.minimumStrict(this, t);
		}),
		(xt.prototype.maximum = function (t) {
			return this.throwIfDisposed(), vt.maximum(this, t);
		}),
		(xt.prototype.maximumStrict = function (t) {
			return this.throwIfDisposed(), vt.maximumStrict(this, t);
		}),
		(xt.prototype.mod = function (t) {
			return this.throwIfDisposed(), vt.mod(this, t);
		}),
		(xt.prototype.modStrict = function (t) {
			return this.throwIfDisposed(), vt.modStrict(this, t);
		}),
		(xt.prototype.squaredDifference = function (t) {
			return this.throwIfDisposed(), vt.squaredDifference(this, t);
		}),
		(xt.prototype.squaredDifferenceStrict = function (t) {
			return this.throwIfDisposed(), vt.squaredDifferenceStrict(this, t);
		}),
		(xt.prototype.transpose = function (t) {
			return this.throwIfDisposed(), vt.transpose(this, t);
		}),
		(xt.prototype.notEqual = function (t) {
			return this.throwIfDisposed(), vt.notEqual(this, t);
		}),
		(xt.prototype.notEqualStrict = function (t) {
			return this.throwIfDisposed(), vt.notEqualStrict(this, t);
		}),
		(xt.prototype.less = function (t) {
			return this.throwIfDisposed(), vt.less(this, t);
		}),
		(xt.prototype.lessStrict = function (t) {
			return this.throwIfDisposed(), vt.lessStrict(this, t);
		}),
		(xt.prototype.equal = function (t) {
			return this.throwIfDisposed(), vt.equal(this, t);
		}),
		(xt.prototype.equalStrict = function (t) {
			return this.throwIfDisposed(), vt.equalStrict(this, t);
		}),
		(xt.prototype.lessEqual = function (t) {
			return this.throwIfDisposed(), vt.lessEqual(this, t);
		}),
		(xt.prototype.lessEqualStrict = function (t) {
			return this.throwIfDisposed(), vt.lessEqualStrict(this, t);
		}),
		(xt.prototype.greater = function (t) {
			return this.throwIfDisposed(), vt.greater(this, t);
		}),
		(xt.prototype.greaterStrict = function (t) {
			return this.throwIfDisposed(), vt.greaterStrict(this, t);
		}),
		(xt.prototype.greaterEqual = function (t) {
			return this.throwIfDisposed(), vt.greaterEqual(this, t);
		}),
		(xt.prototype.greaterEqualStrict = function (t) {
			return this.throwIfDisposed(), vt.greaterEqualStrict(this, t);
		}),
		(xt.prototype.logicalAnd = function (t) {
			return this.throwIfDisposed(), vt.logicalAnd(this, t);
		}),
		(xt.prototype.logicalOr = function (t) {
			return this.throwIfDisposed(), vt.logicalOr(this, t);
		}),
		(xt.prototype.logicalNot = function () {
			return this.throwIfDisposed(), vt.logicalNot(this);
		}),
		(xt.prototype.logicalXor = function (t) {
			return this.throwIfDisposed(), vt.logicalXor(this, t);
		}),
		(xt.prototype.where = function (t, e) {
			return this.throwIfDisposed(), vt.where(t, this, e);
		}),
		(xt.prototype.neg = function () {
			return this.throwIfDisposed(), vt.neg(this);
		}),
		(xt.prototype.ceil = function () {
			return this.throwIfDisposed(), vt.ceil(this);
		}),
		(xt.prototype.floor = function () {
			return this.throwIfDisposed(), vt.floor(this);
		}),
		(xt.prototype.sign = function () {
			return this.throwIfDisposed(), vt.sign(this);
		}),
		(xt.prototype.isNaN = function () {
			return this.throwIfDisposed(), vt.isNaN(this);
		}),
		(xt.prototype.isInf = function () {
			return this.throwIfDisposed(), vt.isInf(this);
		}),
		(xt.prototype.isFinite = function () {
			return this.throwIfDisposed(), vt.isFinite(this);
		}),
		(xt.prototype.exp = function () {
			return this.throwIfDisposed(), vt.exp(this);
		}),
		(xt.prototype.expm1 = function () {
			return this.throwIfDisposed(), vt.expm1(this);
		}),
		(xt.prototype.log = function () {
			return this.throwIfDisposed(), vt.log(this);
		}),
		(xt.prototype.log1p = function () {
			return this.throwIfDisposed(), vt.log1p(this);
		}),
		(xt.prototype.sqrt = function () {
			return this.throwIfDisposed(), vt.sqrt(this);
		}),
		(xt.prototype.rsqrt = function () {
			return this.throwIfDisposed(), vt.rsqrt(this);
		}),
		(xt.prototype.square = function () {
			return this.throwIfDisposed(), vt.square(this);
		}),
		(xt.prototype.reciprocal = function () {
			return this.throwIfDisposed(), vt.reciprocal(this);
		}),
		(xt.prototype.abs = function () {
			return this.throwIfDisposed(), vt.abs(this);
		}),
		(xt.prototype.clipByValue = function (t, e) {
			return this.throwIfDisposed(), vt.clipByValue(this, t, e);
		}),
		(xt.prototype.relu = function () {
			return this.throwIfDisposed(), vt.relu(this);
		}),
		(xt.prototype.relu6 = function () {
			return this.throwIfDisposed(), vt.relu6(this);
		}),
		(xt.prototype.elu = function () {
			return this.throwIfDisposed(), vt.elu(this);
		}),
		(xt.prototype.selu = function () {
			return this.throwIfDisposed(), vt.selu(this);
		}),
		(xt.prototype.leakyRelu = function (t) {
			return (
				void 0 === t && (t = 0.2), this.throwIfDisposed(), vt.leakyRelu(this, t)
			);
		}),
		(xt.prototype.prelu = function (t) {
			return this.throwIfDisposed(), vt.prelu(this, t);
		}),
		(xt.prototype.sigmoid = function () {
			return this.throwIfDisposed(), vt.sigmoid(this);
		}),
		(xt.prototype.logSigmoid = function () {
			return this.throwIfDisposed(), vt.logSigmoid(this);
		}),
		(xt.prototype.softplus = function () {
			return this.throwIfDisposed(), vt.softplus(this);
		}),
		(xt.prototype.zerosLike = function () {
			return this.throwIfDisposed(), vt.zerosLike(this);
		}),
		(xt.prototype.onesLike = function () {
			return this.throwIfDisposed(), vt.onesLike(this);
		}),
		(xt.prototype.sin = function () {
			return this.throwIfDisposed(), vt.sin(this);
		}),
		(xt.prototype.cos = function () {
			return this.throwIfDisposed(), vt.cos(this);
		}),
		(xt.prototype.tan = function () {
			return this.throwIfDisposed(), vt.tan(this);
		}),
		(xt.prototype.asin = function () {
			return this.throwIfDisposed(), vt.asin(this);
		}),
		(xt.prototype.acos = function () {
			return this.throwIfDisposed(), vt.acos(this);
		}),
		(xt.prototype.atan = function () {
			return this.throwIfDisposed(), vt.atan(this);
		}),
		(xt.prototype.sinh = function () {
			return this.throwIfDisposed(), vt.sinh(this);
		}),
		(xt.prototype.cosh = function () {
			return this.throwIfDisposed(), vt.cosh(this);
		}),
		(xt.prototype.tanh = function () {
			return this.throwIfDisposed(), vt.tanh(this);
		}),
		(xt.prototype.asinh = function () {
			return this.throwIfDisposed(), vt.asinh(this);
		}),
		(xt.prototype.acosh = function () {
			return this.throwIfDisposed(), vt.acosh(this);
		}),
		(xt.prototype.atanh = function () {
			return this.throwIfDisposed(), vt.atanh(this);
		}),
		(xt.prototype.erf = function () {
			return this.throwIfDisposed(), vt.erf(this);
		}),
		(xt.prototype.round = function () {
			return this.throwIfDisposed(), vt.round(this);
		}),
		(xt.prototype.step = function (t) {
			return void 0 === t && (t = 0), this.throwIfDisposed(), vt.step(this, t);
		}),
		(xt.prototype.softmax = function (t) {
			return (
				void 0 === t && (t = -1), this.throwIfDisposed(), vt.softmax(this, t)
			);
		}),
		(xt.prototype.logSoftmax = function (t) {
			return (
				void 0 === t && (t = -1), this.throwIfDisposed(), vt.logSoftmax(this, t)
			);
		}),
		(xt.prototype.resizeBilinear = function (t, e) {
			return (
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.image.resizeBilinear(this, t, e)
			);
		}),
		(xt.prototype.resizeNearestNeighbor = function (t, e) {
			return (
				void 0 === e && (e = !1),
				this.throwIfDisposed(),
				vt.image.resizeNearestNeighbor(this, t, e)
			);
		}),
		(xt.prototype.conv1d = function (t, e, n, r, o, i) {
			return (
				void 0 === r && (r = 'NWC'),
				void 0 === o && (o = 1),
				this.throwIfDisposed(),
				vt.conv1d(this, t, e, n, r, o, i)
			);
		}),
		(xt.prototype.conv2d = function (t, e, n, r, o, i) {
			return (
				void 0 === r && (r = 'NHWC'),
				void 0 === o && (o = [1, 1]),
				this.throwIfDisposed(),
				vt.conv2d(this, t, e, n, r, o, i)
			);
		}),
		(xt.prototype.conv2dTranspose = function (t, e, n, r, o) {
			return this.throwIfDisposed(), vt.conv2dTranspose(this, t, e, n, r, o);
		}),
		(xt.prototype.depthwiseConv2D = function (t, e, n, r, o, i) {
			return (
				void 0 === r && (r = 'NHWC'),
				void 0 === o && (o = [1, 1]),
				this.throwIfDisposed(),
				vt.depthwiseConv2d(this, t, e, n, r, o, i)
			);
		}),
		(xt.prototype.separableConv2d = function (t, e, n, r, o, i) {
			return (
				void 0 === o && (o = [1, 1]),
				void 0 === i && (i = 'NHWC'),
				this.throwIfDisposed(),
				vt.separableConv2d(this, t, e, n, r, o, i)
			);
		}),
		(xt.prototype.avgPool = function (t, e, n, r) {
			return this.throwIfDisposed(), vt.avgPool(this, t, e, n, r);
		}),
		(xt.prototype.maxPool = function (t, e, n, r) {
			return this.throwIfDisposed(), vt.maxPool(this, t, e, n, r);
		}),
		(xt.prototype.localResponseNormalization = function (t, e, n, r) {
			return (
				void 0 === t && (t = 5),
				void 0 === e && (e = 1),
				void 0 === n && (n = 1),
				void 0 === r && (r = 0.5),
				vt.localResponseNormalization(this, t, e, n, r)
			);
		}),
		(xt.prototype.pool = function (t, e, n, r, o) {
			return this.throwIfDisposed(), vt.pool(this, t, e, n, r, o);
		}),
		(xt.prototype.variable = function (t, e, n) {
			return (
				void 0 === t && (t = !0),
				this.throwIfDisposed(),
				dt().makeVariable(this, t, e, n)
			);
		}),
		(xt.prototype.unsortedSegmentSum = function (t, e) {
			return this.throwIfDisposed(), vt.unsortedSegmentSum(this, t, e);
		}),
		(xt.prototype.batchToSpaceND = function (t, e) {
			return this.throwIfDisposed(), vt.batchToSpaceND(this, t, e);
		}),
		(xt.prototype.spaceToBatchND = function (t, e) {
			return this.throwIfDisposed(), vt.spaceToBatchND(this, t, e);
		}),
		(xt.prototype.topk = function (t, e) {
			return (
				void 0 === t && (t = 1),
				void 0 === e && (e = !0),
				this.throwIfDisposed(),
				vt.topk(this, t, e)
			);
		}),
		(xt.prototype.stridedSlice = function (t, e, n, r, o, i, a, s) {
			return (
				void 0 === r && (r = 0),
				void 0 === o && (o = 0),
				void 0 === i && (i = 0),
				void 0 === a && (a = 0),
				void 0 === s && (s = 0),
				this.throwIfDisposed(),
				vt.stridedSlice(this, t, e, n, r, o, i, a, s)
			);
		}),
		(xt.prototype.depthToSpace = function (t, e) {
			return this.throwIfDisposed(), vt.depthToSpace(this, t, e);
		}),
		(xt.prototype.fft = function () {
			return this.throwIfDisposed(), vt.spectral.fft(this);
		}),
		(xt.prototype.ifft = function () {
			return this.throwIfDisposed(), vt.spectral.ifft(this);
		}),
		(xt.prototype.rfft = function () {
			return this.throwIfDisposed(), vt.spectral.rfft(this);
		}),
		(xt.prototype.irfft = function () {
			return this.throwIfDisposed(), vt.spectral.irfft(this);
		}),
		xt);
	function xt(t, e, n, r) {
		(this.kept = !1),
			(this.isDisposedInternal = !1),
			(this.shape = t.slice()),
			(this.dtype = e || 'float32'),
			(this.size = L(t)),
			(this.strides = Y(t)),
			(this.dataId = n),
			(this.id = r),
			(this.rankType = this.rank < 5 ? this.rank.toString() : 'higher');
	}
	Object.defineProperty(yt, Symbol.hasInstance, {
		value: function (t) {
			return !!t && null != t.dataId && null != t.shape && null != t.dtype;
		},
	});
	var bt,
		wt,
		Ct,
		Et,
		_t,
		It,
		Rt,
		kt,
		St,
		Dt,
		At,
		Tt =
			(t(Nt, (It = yt)),
			(Nt.prototype.assign = function (t) {
				if (t.dtype !== this.dtype)
					throw new Error(
						'dtype of the new value (' +
							t.dtype +
							') and previous value (' +
							this.dtype +
							') must match'
					);
				if (!D(t.shape, this.shape))
					throw new Error(
						'shape of the new value (' +
							t.shape +
							') and previous value (' +
							this.shape +
							') must match'
					);
				dt().disposeTensor(this),
					(this.dataId = t.dataId),
					dt().incRef(this, null);
			}),
			(Nt.prototype.dispose = function () {
				dt().disposeVariable(this), (this.isDisposedInternal = !0);
			}),
			Nt);
	function Nt(t, e, n, r) {
		var o = It.call(this, t.shape, t.dtype, t.dataId, r) || this;
		return (o.trainable = e), (o.name = n), o;
	}
	Object.defineProperty(Tt, Symbol.hasInstance, {
		value: function (t) {
			return (
				t instanceof yt && null != t.assign && t.assign instanceof Function
			);
		},
	}),
		((At = bt = bt || {}).R0 = 'R0'),
		(At.R1 = 'R1'),
		(At.R2 = 'R2'),
		(At.R3 = 'R3'),
		(At.R4 = 'R4'),
		(At.R5 = 'R5'),
		(At.R6 = 'R6'),
		((Dt = wt = wt || {}).float32 = 'float32'),
		(Dt.int32 = 'int32'),
		(Dt.bool = 'int32'),
		(Dt.complex64 = 'complex64'),
		((St = Ct = Ct || {}).float32 = 'float32'),
		(St.int32 = 'int32'),
		(St.bool = 'bool'),
		(St.complex64 = 'complex64'),
		((kt = Et = Et || {}).float32 = 'float32'),
		(kt.int32 = 'float32'),
		(kt.bool = 'float32'),
		(kt.complex64 = 'complex64'),
		((Rt = _t = _t || {}).float32 = 'complex64'),
		(Rt.int32 = 'complex64'),
		(Rt.bool = 'complex64'),
		(Rt.complex64 = 'complex64');
	var Ft = { float32: Et, int32: wt, bool: Ct, complex64: _t };
	function Mt(t, e) {
		if ('string' !== t && 'string' !== e) return Ft[t][e];
		if ('string' === t && 'string' === e) return 'string';
		throw new Error('Can not upcast ' + t + ' with ' + e);
	}
	function Ot(t) {
		return Mt(t, 'int32');
	}
	function Pt(t, e) {
		if (t.dtype === e.dtype) return [t, e];
		var n = Mt(t.dtype, e.dtype);
		return [t.cast(n), e.cast(n)];
	}
	function Bt(t, e) {
		P(t.dtype === e.dtype, function () {
			return (
				'The dtypes of the first(' +
				t.dtype +
				') and second(' +
				e.dtype +
				') input must match'
			);
		});
	}
	function Lt(t) {
		var e = [];
		return (
			(function t(e, n, r) {
				if (null != e)
					if (e instanceof yt) n.push(e);
					else if (((o = e), Array.isArray(o) || 'object' == typeof o)) {
						var o,
							i = e;
						for (var a in i) {
							var s = i[a];
							r.has(s) || (r.add(s), t(s, n, r));
						}
					}
			})(t, e, new Set()),
			e
		);
	}
	var Wt,
		zt = Object.freeze({
			makeTypesMatch: Pt,
			assertTypesMatch: Bt,
			isTensorInList: function (t, e) {
				for (var n = 0; n < e.length; n++) if (e[n].id === t.id) return !0;
				return !1;
			},
			getTensorsInContainer: Lt,
		}),
		Ut =
			((Ht.prototype.dispose = function () {
				for (var t in this.registeredVariables)
					this.registeredVariables[t].dispose();
			}),
			Ht),
		Vt =
			((Gt.prototype.ready = function () {
				return y(this, void 0, void 0, function () {
					var e, n, r;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if (null != this.pendingBackendInit)
									return [2, this.pendingBackendInit.then(function () {})];
								if (null != this.backendInstance) return [2];
								(e = this.getSortedBackends()), (n = 0), (t.label = 1);
							case 1:
								return n < e.length
									? ((r = e[n]), [4, this.initializeBackend(r).success])
									: [3, 5];
							case 2:
								return t.sent() ? [4, this.setBackend(r)] : [3, 4];
							case 3:
								return t.sent(), [2];
							case 4:
								return n++, [3, 1];
							case 5:
								throw new Error(
									'Could not initialize any backends, all backend initializations failed.'
								);
						}
					});
				});
			}),
			Object.defineProperty(Gt.prototype, 'backend', {
				get: function () {
					if (null != this.pendingBackendInit)
						throw new Error(
							"Backend '" +
								this.backendName +
								"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods"
						);
					if (null == this.backendInstance) {
						var t = this.initializeBackendsAndReturnBest(),
							e = t.name;
						if (t.asyncInit)
							throw new Error(
								"The highest priority backend '" +
									e +
									"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods"
							);
						this.setBackend(e);
					}
					return this.backendInstance;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Gt.prototype.backendNames = function () {
				return Object.keys(this.registryFactory);
			}),
			(Gt.prototype.findBackend = function (t) {
				if (!(t in this.registry)) {
					if (!(t in this.registryFactory)) return null;
					if (this.initializeBackend(t).asyncInit) return null;
				}
				return this.registry[t];
			}),
			(Gt.prototype.findBackendFactory = function (t) {
				return t in this.registryFactory
					? this.registryFactory[t].factory
					: null;
			}),
			(Gt.prototype.registerBackend = function (t, e, n) {
				return (
					void 0 === n && (n = 1),
					t in this.registryFactory
						? (console.warn(
								t +
									' backend was already registered. Reusing existing backend factory.'
						  ),
						  !1)
						: ((this.registryFactory[t] = { factory: e, priority: n }), !0)
				);
			}),
			(Gt.prototype.setBackend = function (o) {
				return y(this, void 0, void 0, function () {
					var e, n, r;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if (null == this.registryFactory[o])
									throw new Error(
										"Backend name '" + o + "' not found in registry"
									);
								return (
									(this.backendName = o),
									null != this.registry[o]
										? [3, 4]
										: ((this.backendInstance = null),
										  (e = this.initializeBackend(o)),
										  (n = e.success),
										  e.asyncInit ? [4, n] : [3, 2])
								);
							case 1:
								return (r = t.sent()), [3, 3];
							case 2:
								(r = n), (t.label = 3);
							case 3:
								if (!r) return [2, !1];
								t.label = 4;
							case 4:
								return (
									(this.backendInstance = this.registry[o]),
									this.setupRegisteredKernels(),
									(this.profiler = new it(this.backendInstance)),
									[2, !0]
								);
						}
					});
				});
			}),
			(Gt.prototype.setupRegisteredKernels = function () {
				var e = this;
				a(this.backendName).forEach(function (t) {
					null != t.setupFunc && t.setupFunc(e.backendInstance);
				});
			}),
			(Gt.prototype.disposeRegisteredKernels = function (e) {
				var n = this;
				a(e).forEach(function (t) {
					null != t.disposeFunc && t.disposeFunc(n.registry[e]);
				});
			}),
			(Gt.prototype.initializeBackend = function (e) {
				var n = this,
					t = this.registryFactory[e];
				if (null == t)
					throw new Error(
						'Cannot initialize backend ' + e + ', no registration found.'
					);
				try {
					var r = t.factory();
					if (Promise.resolve(r) !== r)
						return (this.registry[e] = r), { success: !0, asyncInit: !1 };
					var o = ++this.pendingBackendInitId,
						i = r
							.then(function (t) {
								return !(
									o < n.pendingBackendInitId ||
									((n.registry[e] = t), (n.pendingBackendInit = null))
								);
							})
							.catch(function (t) {
								return !(
									o < n.pendingBackendInitId ||
									((n.pendingBackendInit = null),
									console.warn('Initialization of backend ' + e + ' failed'),
									console.warn(t.stack || t.message),
									1)
								);
							});
					return { success: (this.pendingBackendInit = i), asyncInit: !0 };
				} catch (n) {
					return (
						console.warn('Initialization of backend ' + e + ' failed'),
						console.warn(n.stack || n.message),
						{ success: !1, asyncInit: !1 }
					);
				}
			}),
			(Gt.prototype.removeBackend = function (t) {
				if (!(t in this.registryFactory))
					throw new Error(t + ' backend not found in registry');
				this.backendName === t &&
					null != this.pendingBackendInit &&
					this.pendingBackendInitId++,
					t in this.registry &&
						(this.disposeRegisteredKernels(t),
						this.registry[t].dispose(),
						delete this.registry[t]),
					delete this.registryFactory[t],
					this.backendName === t &&
						((this.pendingBackendInit = null),
						(this.backendName = null),
						(this.backendInstance = null));
			}),
			(Gt.prototype.getSortedBackends = function () {
				var n = this;
				if (0 === Object.keys(this.registryFactory).length)
					throw new Error('No backend found in registry.');
				return Object.keys(this.registryFactory).sort(function (t, e) {
					return n.registryFactory[e].priority - n.registryFactory[t].priority;
				});
			}),
			(Gt.prototype.initializeBackendsAndReturnBest = function () {
				for (var t = this.getSortedBackends(), e = 0; e < t.length; e++) {
					var n = t[e],
						r = this.initializeBackend(n),
						o = r.success,
						i = r.asyncInit;
					if (i || o) return { name: n, asyncInit: i };
				}
				throw new Error(
					'Could not initialize any backends, all backend initializations failed.'
				);
			}),
			(Gt.prototype.moveData = function (t, e) {
				var n = this.state.tensorInfo.get(e),
					r = n.backend,
					o = this.readSync(e);
				r.disposeData(e),
					(n.backend = t).move(e, o, n.shape, n.dtype),
					this.shouldCheckForMemLeaks() &&
						this.state.numDataMovesStack[
							this.state.numDataMovesStack.length - 1
						]++;
			}),
			(Gt.prototype.tidy = function (t, e) {
				var n,
					r = this,
					o = null;
				if (null == e) {
					if ('function' != typeof t)
						throw new Error('Please provide a function to tidy()');
					e = t;
				} else {
					if ('string' != typeof t && !(t instanceof String))
						throw new Error(
							'When calling with two arguments, the first argument to tidy() must be a string'
						);
					if ('function' != typeof e)
						throw new Error(
							'When calling with two arguments, the 2nd argument to tidy() must be a function'
						);
					o = t;
				}
				return this.scopedRun(
					function () {
						return r.startScope(o);
					},
					function () {
						return r.endScope(n);
					},
					function () {
						return (
							(n = e()) instanceof Promise &&
								console.error('Cannot return a Promise inside of tidy.'),
							n
						);
					}
				);
			}),
			(Gt.prototype.scopedRun = function (t, e, n) {
				t();
				try {
					var r = n();
					return e(), r;
				} catch (t) {
					throw (e(), t);
				}
			}),
			(Gt.prototype.nextTensorId = function () {
				return Gt.nextTensorId++;
			}),
			(Gt.prototype.nextVariableId = function () {
				return Gt.nextVariableId++;
			}),
			(Gt.prototype.clone = function (t) {
				var e = this.makeTensorFromDataId(t.dataId, t.shape, t.dtype),
					n = { x: t };
				return (
					this.addTapeNode(
						this.state.activeScope.name,
						n,
						[e],
						function (t) {
							return {
								x: function () {
									return t.toFloat();
								},
							};
						},
						[]
					),
					e
				);
			}),
			(Gt.prototype.runKernel = function (t, e, n, r, o) {
				return this.runKernelFunc(null, e, null, t, n, r, o);
			}),
			(Gt.prototype.shouldCheckForMemLeaks = function () {
				return this.ENV.getBool('IS_TEST');
			}),
			(Gt.prototype.checkKernelForMemLeak = function (t, e, n) {
				var r = this.backend.numDataIds(),
					o = 0;
				n.forEach(function (t) {
					o += 'complex64' === t.dtype ? 3 : 1;
				});
				var i = this.state.numDataMovesStack[
						this.state.numDataMovesStack.length - 1
					],
					a = r - e - o - i;
				if (0 < a)
					throw new Error(
						"Backend '" +
							this.backendName +
							"' has an internal memory leak (" +
							a +
							" data ids) after running '" +
							t +
							"'"
					);
			}),
			(Gt.prototype.runKernelFunc = function (n, o, t, i, a, s, u) {
				var e,
					c = this;
				void 0 === s && (s = []), void 0 === u && (u = []);
				var r = [],
					l = this.isTapeOn();
				function h(t) {
					l &&
						(r = t.map(function (t) {
							return c.keep(c.clone(t));
						}));
				}
				null == i &&
					(i =
						null != this.state.activeScope ? this.state.activeScope.name : '');
				var p,
					f = this.state.numBytes,
					d = this.state.numTensors;
				this.shouldCheckForMemLeaks() && this.state.numDataMovesStack.push(0);
				var v,
					m = g(i, this.backendName);
				return (
					(p =
						null != m
							? function () {
									var t = c.backend.numDataIds();
									v = m.kernelFunc({ inputs: o, attrs: a, backend: c.backend });
									var e = Array.isArray(v) ? v : [v];
									c.shouldCheckForMemLeaks() &&
										c.checkKernelForMemLeak(i, t, e);
									var n = e.map(function (t) {
											var e = t.dataId,
												n = t.shape,
												r = t.dtype;
											return c.makeTensorFromDataId(e, n, r);
										}),
										r = n.filter(function (t, e) {
											return u[e];
										});
									return h((s || []).slice().concat(r)), n;
							  }
							: function () {
									var t = c.backend.numDataIds();
									v = c.tidy(function () {
										return n(c.backend, h);
									});
									var e = Array.isArray(v) ? v : [v];
									return (
										c.shouldCheckForMemLeaks() &&
											c.checkKernelForMemLeak(i, t, e),
										e
									);
							  }),
					this.scopedRun(
						function () {
							return c.state.kernelDepth++;
						},
						function () {
							return c.state.kernelDepth--;
						},
						function () {
							e = c.ENV.getBool('DEBUG')
								? c.profiler.profileKernel(i, o, function () {
										return p();
								  })
								: p();
						}
					),
					l && this.addTapeNode(i, o, e, t, r),
					this.state.profiling &&
						this.state.activeProfile.kernels.push({
							name: i,
							bytesAdded: this.state.numBytes - f,
							totalBytesSnapshot: this.state.numBytes,
							tensorsAdded: this.state.numTensors - d,
							totalTensorsSnapshot: this.state.numTensors,
							inputShapes: Object.keys(o).map(function (t) {
								return o[t].shape;
							}),
							outputShapes: e.map(function (t) {
								return t.shape;
							}),
						}),
					Array.isArray(v) ? e : e[0]
				);
			}),
			(Gt.prototype.makeTensor = function (t, e, n, r) {
				if (null == t)
					throw new Error('Values passed to engine.makeTensor() are null');
				(n = n || 'float32'), (r = r || this.backend);
				var o = t;
				'string' === n &&
					G(t[0]) &&
					(o = t.map(function (t) {
						return nt(t);
					}));
				var i = r.write(o, e, n),
					a = new yt(e, n, i, this.nextTensorId());
				if ((this.incRef(a, r), 'string' === n)) {
					var s = this.state.tensorInfo.get(i),
						u = V(o);
					(this.state.numBytes += u - s.bytes), (s.bytes = u);
				}
				return a;
			}),
			(Gt.prototype.makeTensorFromDataId = function (t, e, n, r) {
				var o = new yt(e, (n = n || 'float32'), t, this.nextTensorId());
				return this.incRef(o, r), o;
			}),
			(Gt.prototype.makeVariable = function (t, e, n, r) {
				void 0 === e && (e = !0),
					(n = n || this.nextVariableId().toString()),
					null != r && r !== t.dtype && (t = t.asType(r));
				var o = new Tt(t, e, n, this.nextTensorId());
				if (null != this.state.registeredVariables[o.name])
					throw new Error(
						'Variable with name ' + o.name + ' was already registered'
					);
				return (
					(this.state.registeredVariables[o.name] = o),
					this.incRef(o, this.backend),
					o
				);
			}),
			(Gt.prototype.incRef = function (t, e) {
				var n = this.state.tensorInfo.has(t.dataId)
					? this.state.tensorInfo.get(t.dataId).refCount
					: 0;
				if (
					(this.state.numTensors++,
					'string' === t.dtype && this.state.numStringTensors++,
					0 === n)
				) {
					this.state.numDataBuffers++;
					var r = 0;
					'complex64' !== t.dtype &&
						'string' !== t.dtype &&
						(r = t.size * U(t.dtype)),
						this.state.tensorInfo.set(t.dataId, {
							backend: e || this.backend,
							dtype: t.dtype,
							shape: t.shape,
							bytes: r,
							refCount: 0,
						}),
						(this.state.numBytes += r);
				}
				this.state.tensorInfo.get(t.dataId).refCount++,
					t instanceof Tt || this.track(t);
			}),
			(Gt.prototype.disposeTensor = function (t) {
				if (this.state.tensorInfo.has(t.dataId)) {
					this.state.numTensors--,
						'string' === t.dtype && this.state.numStringTensors--;
					var e = this.state.tensorInfo.get(t.dataId);
					e.refCount <= 1
						? ('complex64' !== t.dtype && (this.state.numBytes -= e.bytes),
						  this.state.numDataBuffers--,
						  e.backend.disposeData(t.dataId),
						  this.state.tensorInfo.delete(t.dataId))
						: this.state.tensorInfo.get(t.dataId).refCount--;
				}
			}),
			(Gt.prototype.disposeVariables = function () {
				for (var t in this.state.registeredVariables) {
					var e = this.state.registeredVariables[t];
					this.disposeVariable(e);
				}
			}),
			(Gt.prototype.disposeVariable = function (t) {
				this.disposeTensor(t),
					null != this.state.registeredVariables[t.name] &&
						delete this.state.registeredVariables[t.name];
			}),
			(Gt.prototype.memory = function () {
				var t = this.backend.memory();
				return (
					(t.numTensors = this.state.numTensors),
					(t.numDataBuffers = this.state.numDataBuffers),
					(t.numBytes = this.state.numBytes),
					0 < this.state.numStringTensors &&
						((t.unreliable = !0),
						null == t.reasons && (t.reasons = []),
						t.reasons.push(
							'Memory usage by string tensors is approximate (2 bytes per character)'
						)),
					t
				);
			}),
			(Gt.prototype.profile = function (r) {
				return y(this, void 0, void 0, function () {
					var e, n;
					return R(this, function (t) {
						return (
							(this.state.profiling = !0),
							(e = this.state.numBytes),
							(n = this.state.numTensors),
							(this.state.activeProfile.kernels = []),
							(this.state.activeProfile.result = r()),
							(this.state.profiling = !1),
							(this.state.activeProfile.peakBytes = Math.max.apply(
								Math,
								this.state.activeProfile.kernels.map(function (t) {
									return t.totalBytesSnapshot;
								})
							)),
							(this.state.activeProfile.newBytes = this.state.numBytes - e),
							(this.state.activeProfile.newTensors = this.state.numTensors - n),
							[2, this.state.activeProfile]
						);
					});
				});
			}),
			(Gt.prototype.isTapeOn = function () {
				return 0 < this.state.gradientDepth && 0 === this.state.kernelDepth;
			}),
			(Gt.prototype.addTapeNode = function (t, e, o, n, r) {
				var i = this,
					a = {
						id: this.state.nextTapeNodeId++,
						kernelName: t,
						inputs: e,
						outputs: o,
						saved: r,
					},
					s = l(t);
				null != s && (n = s.gradFunc),
					null != n &&
						(a.gradient = function (t) {
							return (
								(t = t.map(function (t, e) {
									if (null != t) return t;
									var n = o[e],
										r = Z(n.size, n.dtype);
									return i.makeTensor(r, n.shape, n.dtype);
								})),
								n(1 < t.length ? t : t[0], r)
							);
						}),
					this.state.activeTape.push(a);
			}),
			(Gt.prototype.keep = function (t) {
				return (t.kept = !0), t;
			}),
			(Gt.prototype.startTape = function () {
				0 === this.state.gradientDepth && (this.state.activeTape = []),
					this.state.gradientDepth++;
			}),
			(Gt.prototype.endTape = function () {
				this.state.gradientDepth--;
			}),
			(Gt.prototype.startScope = function (t) {
				var e = {
					track: [],
					name: 'unnamed scope',
					id: this.state.nextScopeId++,
				};
				t && (e.name = t),
					this.state.scopeStack.push(e),
					(this.state.activeScope = e);
			}),
			(Gt.prototype.endScope = function (t) {
				for (
					var e = this,
						n = Lt(t),
						r = new Set(
							n.map(function (t) {
								return t.id;
							})
						),
						o = 0;
					o < this.state.activeScope.track.length;
					o++
				) {
					var i = this.state.activeScope.track[o];
					i.kept || r.has(i.id) || i.dispose();
				}
				var a = this.state.scopeStack.pop();
				(this.state.activeScope =
					0 === this.state.scopeStack.length
						? null
						: this.state.scopeStack[this.state.scopeStack.length - 1]),
					n.forEach(function (t) {
						t.kept || t.scopeId !== a.id || e.track(t);
					});
			}),
			(Gt.prototype.gradients = function (t, o, i, e) {
				var u = this;
				if (
					(void 0 === e && (e = !1),
					P(0 < o.length, function () {
						return 'gradients() received an empty list of xs.';
					}),
					null != i && 'float32' !== i.dtype)
				)
					throw new Error(
						"dy must have 'float32' dtype, but has '" + i.dtype + "'"
					);
				var a = this.scopedRun(
					function () {
						return u.startTape();
					},
					function () {
						return u.endTape();
					},
					function () {
						return u.tidy('forward', t);
					}
				);
				P(a instanceof yt, function () {
					return 'The result y returned by f() must be a tensor.';
				});
				var s = (function (t, e, n) {
					for (var r = {}, o = {}, i = 0; i < e.length; i++) r[e[i].id] = !0;
					for (i = 0; i < t.length; i++) {
						var a = (d = t[i]).inputs;
						for (var s in a) {
							for (var u = a[s], c = !1, l = 0; l < e.length; l++)
								if (r[u.id]) {
									d.outputs.forEach(function (t) {
										return (r[t.id] = !0);
									}),
										(c = !0),
										(o[d.id] = !0);
									break;
								}
							if (c) break;
						}
					}
					var h = {};
					h[n.id] = !0;
					var p = {};
					for (i = t.length - 1; 0 <= i; i--)
						for (a = (d = t[i]).inputs, l = 0; l < d.outputs.length; l++)
							if (h[d.outputs[l].id]) {
								for (var s in a) (h[a[s].id] = !0), (p[d.id] = !0);
								break;
							}
					var f = [];
					for (i = 0; i < t.length; i++) {
						var d;
						if (o[(d = t[i]).id] && p[d.id]) {
							var v = {};
							for (var s in d.inputs) {
								var m = d.inputs[s];
								r[m.id] && (v[s] = m);
							}
							var g = Object.assign({}, d);
							(g.inputs = v), (g.outputs = d.outputs), f.push(g);
						}
					}
					return f;
				})(this.state.activeTape, o, a);
				if (!e && 0 === s.length && 0 < o.length)
					throw new Error(
						'Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.'
					);
				return this.tidy('backward', function () {
					var t,
						e,
						n = {};
					(n[a.id] =
						null == i
							? ((e = Q(L((t = a.shape)), 'float32')),
							  qt.makeTensor(e, t, 'float32'))
							: i),
						(function (a, s) {
							for (
								var t = function (t) {
										var o = s[t],
											n = [];
										if (
											(o.outputs.forEach(function (t) {
												var e = a[t.id];
												null != e ? n.push(e) : n.push(null);
											}),
											null == o.gradient)
										)
											throw new Error(
												'Cannot compute gradient: gradient function not found for ' +
													o.kernelName +
													'.'
											);
										function e(t) {
											if (!(t in i))
												throw new Error(
													'Cannot backprop through input ' +
														t +
														'. Available gradients found: ' +
														Object.keys(i) +
														'.'
												);
											var e = (function (t) {
												return u.tidy(t);
											})(function () {
												return i[t]();
											});
											if ('float32' !== e.dtype)
												throw new Error(
													'Error in gradient for op ' +
														o.kernelName +
														'. The gradient of input ' +
														t +
														" must have 'float32' dtype, but has '" +
														e.dtype +
														"'"
												);
											var n = o.inputs[t];
											if (!D(e.shape, n.shape))
												throw new Error(
													'Error in gradient for op ' +
														o.kernelName +
														". The gradient of input '" +
														t +
														"' has shape '" +
														e.shape +
														"', which does not match the shape of the input '" +
														n.shape +
														"'"
												);
											if (null == a[n.id]) a[n.id] = e;
											else {
												var r = a[n.id];
												(a[n.id] = r.add(e)), r.dispose();
											}
										}
										var i = o.gradient(n);
										for (var r in o.inputs) e(r);
									},
									e = s.length - 1;
								0 <= e;
								e--
							)
								t(e);
						})(n, s);
					var r = o.map(function (t) {
						return n[t.id];
					});
					return (
						0 === u.state.gradientDepth &&
							(u.state.activeTape.forEach(function (t) {
								for (var e = 0, n = t.saved; e < n.length; e++) n[e].dispose();
							}),
							(u.state.activeTape = null)),
						{ value: a, grads: r }
					);
				});
			}),
			(Gt.prototype.customGrad = function (r) {
				var e = this;
				return (
					P(K(r), function () {
						return 'The f passed in customGrad(f) must be a function.';
					}),
					function () {
						for (var i, a = [], t = 0; t < arguments.length; t++)
							a[t] = arguments[t];
						P(
							a.every(function (t) {
								return t instanceof yt;
							}),
							function () {
								return 'The args passed in customGrad(f)(x1, x2,...) must all be tensors';
							}
						);
						var n = {};
						return (
							a.forEach(function (t, e) {
								n[e] = t;
							}),
							e.runKernelFunc(
								function (t, e) {
									return (
										P(
											(i = r.apply(void 0, a.concat([e]))).value instanceof yt,
											function () {
												return 'The function f passed in customGrad(f) must return an object where `obj.value` is a tensor';
											}
										),
										P(K(i.gradFunc), function () {
											return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.';
										}),
										i.value
									);
								},
								n,
								function (t, e) {
									var n = i.gradFunc(t, e),
										r = Array.isArray(n) ? n : [n];
									P(r.length === a.length, function () {
										return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).';
									}),
										P(
											r.every(function (t) {
												return t instanceof yt;
											}),
											function () {
												return 'The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.';
											}
										);
									var o = {};
									return (
										r.forEach(function (t, e) {
											o[e] = function () {
												return t;
											};
										}),
										o
									);
								}
							)
						);
					}
				);
			}),
			(Gt.prototype.readSync = function (t) {
				return this.state.tensorInfo.get(t).backend.readSync(t);
			}),
			(Gt.prototype.read = function (t) {
				return this.state.tensorInfo.get(t).backend.read(t);
			}),
			(Gt.prototype.time = function (r) {
				return y(this, void 0, void 0, function () {
					var e, n;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = tt()), [4, this.backend.time(r)];
							case 1:
								return ((n = t.sent()).wallMs = tt() - e), [2, n];
						}
					});
				});
			}),
			(Gt.prototype.track = function (t) {
				return (
					null != this.state.activeScope &&
						((t.scopeId = this.state.activeScope.id),
						this.state.activeScope.track.push(t)),
					t
				);
			}),
			Object.defineProperty(Gt.prototype, 'registeredVariables', {
				get: function () {
					return this.state.registeredVariables;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Gt.prototype.reset = function () {
				for (var t in (this.pendingBackendInitId++,
				this.state.dispose(),
				this.ENV.reset(),
				(this.state = new Ut()),
				this.registry))
					this.disposeRegisteredKernels(t),
						this.registry[t].dispose(),
						delete this.registry[t];
				(this.backendName = null),
					(this.backendInstance = null),
					(this.pendingBackendInit = null);
			}),
			(Gt.nextTensorId = 0),
			(Gt.nextVariableId = 0),
			Gt);
	function Gt(t) {
		(this.ENV = t),
			(this.registry = {}),
			(this.registryFactory = {}),
			(this.pendingBackendInitId = 0),
			(this.state = new Ut());
	}
	function Ht() {
		(this.registeredVariables = {}),
			(this.nextTapeNodeId = 0),
			(this.numBytes = 0),
			(this.numTensors = 0),
			(this.numStringTensors = 0),
			(this.numDataBuffers = 0),
			(this.gradientDepth = 0),
			(this.kernelDepth = 0),
			(this.scopeStack = []),
			(this.numDataMovesStack = []),
			(this.nextScopeId = 0),
			(this.tensorInfo = new WeakMap()),
			(this.profiling = !1),
			(this.activeProfile = {
				newBytes: 0,
				newTensors: 0,
				peakBytes: 0,
				kernels: [],
				result: null,
			});
	}
	var qt = (function () {
		var t,
			e = (function () {
				if (null == Wt) {
					var t = void 0;
					if ('undefined' != typeof window) t = window;
					else if ('undefined' != typeof global) t = global;
					else if ('undefined' != typeof process) t = process;
					else {
						if ('undefined' == typeof self)
							throw new Error('Could not find a global object');
						t = self;
					}
					Wt = t;
				}
				return Wt;
			})();
		if (null == e._tfengine) {
			var n = new o(e);
			e._tfengine = new Vt(n);
		}
		return (
			(t = e._tfengine.ENV),
			(i = t),
			(dt = function () {
				return e._tfengine;
			}),
			e._tfengine
		);
	})();
	function jt() {
		return (
			('undefined' != typeof window && null != window.document) ||
			'undefined' != typeof WorkerGlobalScope
		);
	}
	var Kt = _();
	Kt.registerFlag(
		'DEBUG',
		function () {
			return !1;
		},
		function (t) {
			t &&
				console.warn(
					'Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.'
				);
		}
	),
		Kt.registerFlag('IS_BROWSER', function () {
			return jt();
		}),
		Kt.registerFlag('IS_NODE', function () {
			return (
				'undefined' != typeof process &&
				void 0 !== process.versions &&
				void 0 !== process.versions.node
			);
		}),
		Kt.registerFlag('IS_CHROME', function () {
			return (
				'undefined' != typeof navigator &&
				null != navigator &&
				null != navigator.userAgent &&
				/Chrome/.test(navigator.userAgent) &&
				/Google Inc/.test(navigator.vendor)
			);
		}),
		Kt.registerFlag('PROD', function () {
			return !1;
		}),
		Kt.registerFlag('TENSORLIKE_CHECK_SHAPE_CONSISTENCY', function () {
			return Kt.getBool('DEBUG');
		}),
		Kt.registerFlag('DEPRECATION_WARNINGS_ENABLED', function () {
			return !0;
		}),
		Kt.registerFlag('IS_TEST', function () {
			return !1;
		});
	var Xt,
		Yt,
		$t,
		Jt,
		Qt,
		Zt,
		te = {},
		ee = {
			alpha: !1,
			antialias: !1,
			premultipliedAlpha: !1,
			preserveDrawingBuffer: !1,
			depth: !1,
			stencil: !1,
			failIfMajorPerformanceCaveat: !0,
		};
	function ne(t, e) {
		te[t] = e;
	}
	function re(t) {
		t in te ||
			(te[t] = (function (e) {
				if (1 !== e && 2 !== e)
					throw new Error(
						'Cannot get WebGL rendering context, WebGL is disabled.'
					);
				var t = (function () {
					if ('undefined' != typeof OffscreenCanvas && 2 === e)
						return new OffscreenCanvas(300, 150);
					if ('undefined' != typeof document)
						return document.createElement('canvas');
					throw new Error('Cannot create a canvas in this context');
				})();
				return (
					t.addEventListener(
						'webglcontextlost',
						function (t) {
							t.preventDefault(), delete te[e];
						},
						!1
					),
					1 === e
						? t.getContext('webgl', ee) ||
						  t.getContext('experimental-webgl', ee)
						: t.getContext('webgl2', ee)
				);
			})(t));
		var e = te[t];
		return e.isContextLost()
			? (delete te[t], re(t))
			: (e.disable(e.DEPTH_TEST),
			  e.disable(e.STENCIL_TEST),
			  e.disable(e.BLEND),
			  e.disable(e.DITHER),
			  e.disable(e.POLYGON_OFFSET_FILL),
			  e.disable(e.SAMPLE_COVERAGE),
			  e.enable(e.SCISSOR_TEST),
			  e.enable(e.CULL_FACE),
			  e.cullFace(e.BACK),
			  te[t]);
	}
	function oe(t, e) {
		return [e, t];
	}
	function ie(t) {
		var e = L(t);
		return C(Math.ceil(e / 4));
	}
	function ae(t, e) {
		return [Math.max(1, Math.ceil(e / 2)), Math.max(1, Math.ceil(t / 2))];
	}
	function se(t, e) {
		var n,
			r,
			o,
			i,
			a,
			s,
			u,
			c,
			l,
			h = t;
		return (
			(l =
				2 === _().getNumber('WEBGL_VERSION')
					? ((n = h.R32F),
					  (r = h.R16F),
					  (o = h.RGBA16F),
					  (i = h.RGBA32F),
					  (a = h.RED),
					  (s = 4),
					  (u = 1),
					  (c = h.HALF_FLOAT),
					  h.FLOAT)
					: ((n = t.RGBA),
					  (r = t.RGBA),
					  (o = t.RGBA),
					  (i = h.RGBA),
					  (a = t.RGBA),
					  (u = s = 4),
					  (c = null != e ? e.HALF_FLOAT_OES : null),
					  t.FLOAT)),
			{
				internalFormatFloat: n,
				internalFormatHalfFloat: r,
				internalFormatPackedHalfFloat: o,
				internalFormatPackedFloat: i,
				textureFormatFloat: a,
				downloadTextureFormat: t.RGBA,
				downloadUnpackNumChannels: s,
				defaultNumChannels: u,
				textureTypeHalfFloat: c,
				textureTypeFloat: l,
			}
		);
	}
	function ue(t, e, n) {
		var r = n();
		return (
			e &&
				(function (t) {
					var e = t.getError();
					if (e !== t.NO_ERROR) throw new Error('WebGL Error: ' + le(t, e));
				})(t),
			r
		);
	}
	((Zt = Xt = Xt || {})[(Zt.DENSE = 0)] = 'DENSE'),
		(Zt[(Zt.SHARED_BATCH = 1)] = 'SHARED_BATCH'),
		((Qt = Yt = Yt || {})[(Qt.RENDER = 0)] = 'RENDER'),
		(Qt[(Qt.UPLOAD = 1)] = 'UPLOAD'),
		(Qt[(Qt.PIXELS = 2)] = 'PIXELS'),
		(Qt[(Qt.DOWNLOAD = 3)] = 'DOWNLOAD'),
		((Jt = $t = $t || {})[(Jt.UNPACKED_FLOAT16 = 0)] = 'UNPACKED_FLOAT16'),
		(Jt[(Jt.UNPACKED_FLOAT32 = 1)] = 'UNPACKED_FLOAT32'),
		(Jt[(Jt.PACKED_4X1_UNSIGNED_BYTE = 2)] = 'PACKED_4X1_UNSIGNED_BYTE'),
		(Jt[(Jt.PACKED_2X2_FLOAT32 = 3)] = 'PACKED_2X2_FLOAT32'),
		(Jt[(Jt.PACKED_2X2_FLOAT16 = 4)] = 'PACKED_2X2_FLOAT16');
	function ce(t) {
		return !!(
			_().getBool('WEBGL_RENDER_FLOAT32_ENABLED') ||
			0 === t ||
			(5.96e-8 < Math.abs(t) && Math.abs(t) < 65504)
		);
	}
	function le(t, e) {
		switch (e) {
			case t.NO_ERROR:
				return 'NO_ERROR';
			case t.INVALID_ENUM:
				return 'INVALID_ENUM';
			case t.INVALID_VALUE:
				return 'INVALID_VALUE';
			case t.INVALID_OPERATION:
				return 'INVALID_OPERATION';
			case t.INVALID_FRAMEBUFFER_OPERATION:
				return 'INVALID_FRAMEBUFFER_OPERATION';
			case t.OUT_OF_MEMORY:
				return 'OUT_OF_MEMORY';
			case t.CONTEXT_LOST_WEBGL:
				return 'CONTEXT_LOST_WEBGL';
			default:
				return 'Unknown error code ' + e;
		}
	}
	function he(t, e, n) {
		return Me(
			t,
			e,
			function () {
				return t.getExtension(n);
			},
			'Extension "' + n + '" not supported on this browser.'
		);
	}
	function pe(t, e, n) {
		var r = Me(
			t,
			e,
			function () {
				return t.createShader(t.VERTEX_SHADER);
			},
			'Unable to create vertex WebGLShader.'
		);
		if (
			(ue(t, e, function () {
				return t.shaderSource(r, n);
			}),
			ue(t, e, function () {
				return t.compileShader(r);
			}),
			!1 === t.getShaderParameter(r, t.COMPILE_STATUS))
		)
			throw (
				(console.log(t.getShaderInfoLog(r)),
				new Error('Failed to compile vertex shader.'))
			);
		return r;
	}
	function fe(t, e, n) {
		var r = Me(
			t,
			e,
			function () {
				return t.createShader(t.FRAGMENT_SHADER);
			},
			'Unable to create fragment WebGLShader.'
		);
		if (
			(ue(t, e, function () {
				return t.shaderSource(r, n);
			}),
			ue(t, e, function () {
				return t.compileShader(r);
			}),
			!1 === t.getShaderParameter(r, t.COMPILE_STATUS))
		)
			throw (
				((function (t, e) {
					var n = me.exec(e);
					if (null == n)
						return (
							console.log("Couldn't parse line number in error: " + e),
							console.log(t)
						);
					for (
						var r = +n[1],
							o = t.split('\n'),
							i = o.length.toString().length + 2,
							a = o.map(function (t, e) {
								return I((e + 1).toString(), i) + t;
							}),
							s = 0,
							u = 0;
						u < a.length;
						u++
					)
						s = Math.max(a[u].length, s);
					var c = a.slice(0, r - 1),
						l = a.slice(r - 1, r),
						h = a.slice(r);
					console.log(c.join('\n')),
						console.log(e.split('\n')[0]),
						console.log(
							'%c ' + I(l[0], s),
							'border:1px solid red; background-color:#e3d2d2; color:#a61717'
						),
						console.log(h.join('\n'));
				})(n, t.getShaderInfoLog(r)),
				new Error('Failed to compile fragment shader.'))
			);
		return r;
	}
	var de,
		ve,
		me = /ERROR: [0-9]+:([0-9]+):/g;
	function ge(t, e) {
		return Me(
			t,
			e,
			function () {
				return t.createProgram();
			},
			'Unable to create WebGLProgram.'
		);
	}
	function ye(t, e, n) {
		if (
			(ue(t, e, function () {
				return t.linkProgram(n);
			}),
			!1 === t.getProgramParameter(n, t.LINK_STATUS))
		)
			throw (
				(console.log(t.getProgramInfoLog(n)),
				new Error('Failed to link vertex and fragment shaders.'))
			);
	}
	function xe(t, e, n) {
		if (
			(ue(t, e, function () {
				return t.validateProgram(n);
			}),
			!1 === t.getProgramParameter(n, t.VALIDATE_STATUS))
		)
			throw (
				(console.log(t.getProgramInfoLog(n)),
				new Error('Shader program validation failed.'))
			);
	}
	function be(t, e, n) {
		var r = Me(
			t,
			e,
			function () {
				return t.createBuffer();
			},
			'Unable to create WebGLBuffer'
		);
		return (
			ue(t, e, function () {
				return t.bindBuffer(t.ARRAY_BUFFER, r);
			}),
			ue(t, e, function () {
				return t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW);
			}),
			r
		);
	}
	function we(t, e, n) {
		var r = Me(
			t,
			e,
			function () {
				return t.createBuffer();
			},
			'Unable to create WebGLBuffer'
		);
		return (
			ue(t, e, function () {
				return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r);
			}),
			ue(t, e, function () {
				return t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW);
			}),
			r
		);
	}
	function Ce(t, e) {
		return Me(
			t,
			e,
			function () {
				return t.createTexture();
			},
			'Unable to create WebGLTexture.'
		);
	}
	function Ee(t, e) {
		var n = _().getNumber('WEBGL_MAX_TEXTURE_SIZE');
		if (t <= 0 || e <= 0) {
			var r = '[' + t + 'x' + e + ']';
			throw new Error('Requested texture size ' + r + ' is invalid.');
		}
		if (n < t || n < e)
			throw (
				((r = '[' + t + 'x' + e + ']'),
				new Error(
					'Requested texture size ' +
						r +
						' greater than WebGL maximum on this browser / GPU [' +
						n +
						'x' +
						n +
						'].'
				))
			);
	}
	function _e(t, e) {
		return Me(
			t,
			e,
			function () {
				return t.createFramebuffer();
			},
			'Unable to create WebGLFramebuffer.'
		);
	}
	function Ie(t, e, n, r, o, i, a, s) {
		var u = t.getAttribLocation(n, r);
		return (
			-1 !== u &&
			(ue(t, e, function () {
				return t.bindBuffer(t.ARRAY_BUFFER, o);
			}),
			ue(t, e, function () {
				return t.vertexAttribPointer(u, i, t.FLOAT, !1, a, s);
			}),
			ue(t, e, function () {
				return t.enableVertexAttribArray(u);
			}),
			!0)
		);
	}
	function Re(t, e, n, r) {
		Oe(t, r),
			ue(t, e, function () {
				return t.activeTexture(t.TEXTURE0 + r);
			}),
			ue(t, e, function () {
				return t.bindTexture(t.TEXTURE_2D, n);
			});
	}
	function ke(t, e, n, r) {
		return Me(
			t,
			e,
			function () {
				return t.getUniformLocation(n, r);
			},
			'uniform "' + r + '" not present in program.'
		);
	}
	function Se(t, e, n) {
		return t.getUniformLocation(e, n);
	}
	function De(t, e, n, r, o, i) {
		ue(t, e, function () {
			return Re(t, e, r, i);
		}),
			ue(t, e, function () {
				return t.uniform1i(o, i);
			});
	}
	function Ae(t, e, n, r) {
		ue(t, e, function () {
			return t.bindFramebuffer(t.FRAMEBUFFER, r);
		}),
			ue(t, e, function () {
				return t.framebufferTexture2D(
					t.FRAMEBUFFER,
					t.COLOR_ATTACHMENT0,
					t.TEXTURE_2D,
					n,
					0
				);
			});
	}
	function Te(t, e, n) {
		ue(t, e, function () {
			return t.bindFramebuffer(t.FRAMEBUFFER, n);
		}),
			ue(t, e, function () {
				return t.framebufferTexture2D(
					t.FRAMEBUFFER,
					t.COLOR_ATTACHMENT0,
					t.TEXTURE_2D,
					null,
					0
				);
			});
	}
	function Ne(t) {
		var e = t.checkFramebufferStatus(t.FRAMEBUFFER);
		if (e !== t.FRAMEBUFFER_COMPLETE)
			throw new Error('Error binding framebuffer: ' + Fe(t, e));
	}
	function Fe(t, e) {
		switch (e) {
			case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
				return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
			case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
				return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
			case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
				return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
			case t.FRAMEBUFFER_UNSUPPORTED:
				return 'FRAMEBUFFER_UNSUPPORTED';
			default:
				return 'unknown error ' + e;
		}
	}
	function Me(t, e, n, r) {
		var o = ue(t, e, function () {
			return n();
		});
		if (null == o) throw new Error(r);
		return o;
	}
	function Oe(t, e) {
		var n = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1,
			r = e + t.TEXTURE0;
		if (r < t.TEXTURE0 || n < r)
			throw new Error(
				'textureUnit must be in [gl.TEXTURE0, gl.TEXTURE' + n + '].'
			);
	}
	function Pe(t, e) {
		return void 0 === e && (e = 2), L(t.slice(0, t.length - e));
	}
	function Be(t) {
		if (0 === t.length)
			throw Error('Cannot get rows and columns of an empty shape array.');
		return [1 < t.length ? t[t.length - 2] : 1, t[t.length - 1]];
	}
	function Le(t) {
		var e = [1, 1, 1];
		return (
			0 === t.length ||
				(1 === t.length && 1 === t[0]) ||
				(e = [Pe(t)].concat(Be(t))),
			e
		);
	}
	function We(n, t) {
		var e;
		void 0 === t && (t = !1);
		var r = _().getNumber('WEBGL_MAX_TEXTURE_SIZE');
		if (
			(t &&
				((r *= 2),
				1 ===
					(n = n.map(function (t, e) {
						return e >= n.length - 2 ? E(n[e]) : n[e];
					})).length && (n = [2, n[0]])),
			2 !== n.length)
		) {
			var o = T(n);
			n = o.newShape;
		}
		var i = L(n);
		if (n.length <= 1 && i <= r) return [1, i];
		if (2 === n.length && n[0] <= r && n[1] <= r) return n;
		if (3 === n.length && n[0] * n[1] <= r && n[2] <= r)
			return [n[0] * n[1], n[2]];
		if (3 === n.length && n[0] <= r && n[1] * n[2] <= r)
			return [n[0], n[1] * n[2]];
		if (4 === n.length && n[0] * n[1] * n[2] <= r && n[3] <= r)
			return [n[0] * n[1] * n[2], n[3]];
		if (4 === n.length && n[0] <= r && n[1] * n[2] * n[3] <= r)
			return [n[0], n[1] * n[2] * n[3]];
		if (t) {
			var a = Pe(n),
				s = 2,
				u = 2;
			return (
				n.length && ((s = (e = Be(n))[0]), (u = e[1])),
				C((i = a * (s / 2) * (u / 2))).map(function (t) {
					return 2 * t;
				})
			);
		}
		return C(i);
	}
	function ze(t) {
		return t % 2 == 0;
	}
	function Ue(t, e) {
		if (D((t = t.slice(-2)), (e = e.slice(-2)))) return !0;
		if (!t.length || !e.length) return !0;
		if (0 === t[0] || 0 === t[1] || 0 === e[0] || 0 === e[1]) return !0;
		if (t.length !== e.length) {
			var n = t.slice(-1)[0],
				r = e.slice(-1)[0];
			if (n === r) return !0;
			if (ze(n) && ze(r) && (1 === t[0] || 1 === e[0])) return !0;
		}
		return t[1] === e[1] && ze(t[0]) && ze(e[0]);
	}
	function Ve(t) {
		if (null == de) {
			var e = re(t);
			de = e.getParameter(e.MAX_TEXTURE_SIZE);
		}
		return de;
	}
	function Ge(t) {
		if (null == ve) {
			var e = re(t);
			ve = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
		}
		return Math.min(16, ve);
	}
	function He(t) {
		if (0 === t) return 0;
		var e = re(t);
		return qe(e, 'EXT_disjoint_timer_query_webgl2') && 2 === t
			? 2
			: qe(e, 'EXT_disjoint_timer_query')
			? 1
			: 0;
	}
	function qe(t, e) {
		return null != t.getExtension(e);
	}
	function je(t) {
		try {
			if (null != re(t)) return !0;
		} catch (t) {
			return !1;
		}
		return !1;
	}
	function Ke(t) {
		if (0 === t) return !1;
		var e = re(t);
		if (1 === t) {
			if (!qe(e, 'OES_texture_float')) return !1;
		} else if (!qe(e, 'EXT_color_buffer_float')) return !1;
		return Ye(e);
	}
	function Xe(t) {
		if (0 === t) return !1;
		var e = re(t);
		if (1 === t)
			return (
				!!qe(e, 'OES_texture_float') &&
				!!qe(e, 'WEBGL_color_buffer_float') &&
				Ye(e)
			);
		if (qe(e, 'EXT_color_buffer_float')) return Ye(e);
		if (qe(e, 'EXT_color_buffer_half_float')) {
			var i = e.getExtension('EXT_color_buffer_half_float');
			return (function (t) {
				var e = se(t, i),
					n = t.createTexture();
				t.bindTexture(t.TEXTURE_2D, n),
					t.texImage2D(
						t.TEXTURE_2D,
						0,
						e.internalFormatHalfFloat,
						1,
						1,
						0,
						e.textureFormatFloat,
						e.textureTypeHalfFloat,
						null
					);
				var r = t.createFramebuffer();
				t.bindFramebuffer(t.FRAMEBUFFER, r),
					t.framebufferTexture2D(
						t.FRAMEBUFFER,
						t.COLOR_ATTACHMENT0,
						t.TEXTURE_2D,
						n,
						0
					);
				var o =
					t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
				return (
					t.bindTexture(t.TEXTURE_2D, null),
					t.bindFramebuffer(t.FRAMEBUFFER, null),
					t.deleteTexture(n),
					t.deleteFramebuffer(r),
					o
				);
			})(e);
		}
		return !1;
	}
	function Ye(t) {
		var e = se(t),
			n = t.createTexture();
		t.bindTexture(t.TEXTURE_2D, n),
			t.texImage2D(
				t.TEXTURE_2D,
				0,
				e.internalFormatFloat,
				1,
				1,
				0,
				e.textureFormatFloat,
				e.textureTypeFloat,
				null
			);
		var r = t.createFramebuffer();
		t.bindFramebuffer(t.FRAMEBUFFER, r),
			t.framebufferTexture2D(
				t.FRAMEBUFFER,
				t.COLOR_ATTACHMENT0,
				t.TEXTURE_2D,
				n,
				0
			);
		var o = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
		return (
			t.bindTexture(t.TEXTURE_2D, null),
			t.bindFramebuffer(t.FRAMEBUFFER, null),
			t.deleteTexture(n),
			t.deleteFramebuffer(r),
			o
		);
	}
	function $e(t) {
		return 2 === t && null != re(t).fenceSync;
	}
	var Je = Object.freeze({
			callAndCheck: ue,
			canBeRepresented: ce,
			getWebGLErrorMessage: le,
			getExtensionOrThrow: he,
			createVertexShader: pe,
			createFragmentShader: fe,
			createProgram: ge,
			linkProgram: ye,
			validateProgram: xe,
			createStaticVertexBuffer: be,
			createStaticIndexBuffer: we,
			getNumChannels: function () {
				return 2 === _().getNumber('WEBGL_VERSION') ? 1 : 4;
			},
			createTexture: Ce,
			validateTextureSize: Ee,
			createFramebuffer: _e,
			bindVertexBufferToProgramAttribute: Ie,
			bindTextureUnit: Re,
			unbindTextureUnit: function (t, e, n) {
				Oe(t, n),
					ue(t, e, function () {
						return t.activeTexture(t.TEXTURE0 + n);
					}),
					ue(t, e, function () {
						return t.bindTexture(t.TEXTURE_2D, null);
					});
			},
			getProgramUniformLocationOrThrow: ke,
			getProgramUniformLocation: Se,
			bindTextureToProgramUniformSampler: De,
			bindCanvasToFramebuffer: function (t, e) {
				ue(t, e, function () {
					return t.bindFramebuffer(t.FRAMEBUFFER, null);
				}),
					ue(t, e, function () {
						return t.viewport(0, 0, t.canvas.width, t.canvas.height);
					}),
					ue(t, e, function () {
						return t.scissor(0, 0, t.canvas.width, t.canvas.height);
					});
			},
			bindColorTextureToFramebuffer: Ae,
			unbindColorTextureFromFramebuffer: Te,
			validateFramebuffer: Ne,
			getFramebufferErrorMessage: Fe,
			getBatchDim: Pe,
			getRowsCols: Be,
			getShapeAs3D: Le,
			getTextureShapeFromLogicalShape: We,
			isReshapeFree: Ue,
			getWebGLMaxTextureSize: Ve,
			resetMaxTextureSize: function () {
				de = null;
			},
			resetMaxTexturesInShader: function () {
				ve = null;
			},
			getMaxTexturesInShader: Ge,
			getWebGLDisjointQueryTimerVersion: He,
			hasExtension: qe,
			isWebGLVersionEnabled: je,
			isCapableOfRenderingToFloatTexture: Ke,
			isDownloadFloatTextureEnabled: Xe,
			isWebGLFenceEnabled: $e,
		}),
		Qe = _();
	function Ze(t) {
		_().getBool('DEPRECATION_WARNINGS_ENABLED') &&
			console.warn(
				t +
					' You can disable deprecation warnings with tf.disableDeprecationWarnings().'
			);
	}
	function tn(t, e) {
		return qt.tidy(t, e);
	}
	function en(t) {
		Lt(t).forEach(function (t) {
			return t.dispose();
		});
	}
	function nn(t) {
		return qt.keep(t);
	}
	function rn() {
		for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
		_().getBool('IS_TEST') || console.warn.apply(console, t);
	}
	function on(t, e) {
		var n = t;
		if (z(t)) return 'string' === e ? [] : [t.length];
		if (!Array.isArray(t)) return [];
		for (var r = []; Array.isArray(n) || (z(n) && 'string' !== e); )
			r.push(n.length), (n = n[0]);
		return (
			Array.isArray(t) &&
				_().getBool('TENSORLIKE_CHECK_SHAPE_CONSISTENCY') &&
				(function t(e, n, r) {
					if (((r = r || []), Array.isArray(e) || z(e))) {
						P(0 < n.length, function () {
							return (
								'Element arr[' +
								r.join('][') +
								'] should be a primitive, but is an array of ' +
								e.length +
								' elements'
							);
						}),
							P(e.length === n[0], function () {
								return (
									'Element arr[' +
									r.join('][') +
									'] should have ' +
									n[0] +
									' elements, but has ' +
									e.length +
									' elements'
								);
							});
						for (var o = n.slice(1), i = 0; i < e.length; ++i)
							t(e[i], o, r.concat(i));
					} else
						P(0 === n.length, function () {
							return (
								'Element arr[' +
								r.join('][') +
								'] is a primitive, but should be an array/TypedArray of ' +
								n[0] +
								' elements'
							);
						});
				})(t, r, []),
			r
		);
	}
	function an(t, e, n, r) {
		if (
			null != t &&
			(('numeric' !== t && t !== e) || ('numeric' === t && 'string' === e))
		)
			throw new Error(
				"Argument '" +
					n +
					"' passed to '" +
					r +
					"' must be " +
					t +
					' tensor, but got ' +
					e +
					' tensor'
			);
	}
	function sn(t, e, n, r) {
		if ((void 0 === r && (r = 'numeric'), t instanceof yt))
			return an(r, t.dtype, e, n), t;
		var o = j(t);
		if (
			('string' !== o &&
				0 <= ['bool', 'int32', 'float32'].indexOf(r) &&
				(o = r),
			an(r, o, e, n),
			null == t ||
				(!z(t) &&
					!Array.isArray(t) &&
					'number' != typeof t &&
					'boolean' != typeof t &&
					'string' != typeof t))
		) {
			var i = null == t ? 'null' : t.constructor.name;
			throw new Error(
				"Argument '" +
					e +
					"' passed to '" +
					n +
					"' must be a Tensor or TensorLike, but got '" +
					i +
					"'"
			);
		}
		var a = on(t, o);
		z(t) || Array.isArray(t) || (t = [t]);
		var s = 'string' !== o ? $(t, o, _().getBool('DEBUG')) : b(t, [], !0);
		return qt.makeTensor(s, a, o);
	}
	function un(t, n, r, e) {
		if ((void 0 === e && (e = 'numeric'), !Array.isArray(t)))
			throw new Error(
				'Argument ' +
					n +
					' passed to ' +
					r +
					' must be a `Tensor[]` or `TensorLike[]`'
			);
		return t.map(function (t, e) {
			return sn(t, n + '[' + e + ']', r);
		}, e);
	}
	function cn(t, e) {
		for (var n = 0; n < t.length; ++n)
			if (t[t.length - n - 1] !== e - 1 - n) return !1;
		return !0;
	}
	function ln(t, e, n) {
		for (var r = t.length + e.length, o = [], i = 0, a = 0, s = 0; s < r; s++)
			-1 === n.indexOf(s) ? o.push(t[i++]) : o.push(e[a++]);
		return o;
	}
	function hn(e, t) {
		for (var n = [], r = e.length, o = 0; o < r; o++)
			-1 === t.indexOf(o) && n.push(e[o]);
		return [
			n,
			t.map(function (t) {
				return e[t];
			}),
		];
	}
	function pn(t, e) {
		return ln(
			t,
			e.map(function (t) {
				return 1;
			}),
			e
		);
	}
	function fn(t, e, n) {
		P(cn(e, n), function () {
			return (
				t +
				' supports only inner-most axes for now. Got axes ' +
				e +
				' and rank-' +
				n +
				' input.'
			);
		});
	}
	function dn(t, e) {
		if (cn(t, e)) return null;
		for (var n = [], r = 0; r < e; ++r) -1 === t.indexOf(r) && n.push(r);
		return (
			t.forEach(function (t) {
				return n.push(t);
			}),
			n
		);
	}
	function vn(t) {
		return t
			.map(function (t, e) {
				return [e, t];
			})
			.sort(function (t, e) {
				return t[1] - e[1];
			})
			.map(function (t) {
				return t[0];
			});
	}
	function mn(t, e) {
		for (var n = [], r = e - t; r < e; ++r) n.push(r);
		return n;
	}
	function gn(t, r) {
		var o = t[0].length;
		t.forEach(function (t, e) {
			P(t.length === o, function () {
				return (
					'Error in concat' +
					o +
					'D: rank of tensors[' +
					e +
					'] must be the same as the rank of the rest (' +
					o +
					')'
				);
			});
		}),
			P(0 <= r && r < o, function () {
				return (
					'Error in concat' +
					o +
					'D: axis must be between 0 and ' +
					(o - 1) +
					'.'
				);
			});
		var i = t[0];
		t.forEach(function (t, e) {
			for (var n = 0; n < o; n++)
				P(n === r || t[n] === i[n], function () {
					return (
						'Error in concat' +
						o +
						'D: Shape of tensors[' +
						e +
						'] (' +
						t +
						') does not match the shape of the rest (' +
						i +
						') along the non-concatenated axis ' +
						e +
						'.'
					);
				});
		});
	}
	function yn(t, e) {
		for (var n = t[0].slice(), r = 1; r < t.length; r++) n[e] += t[r][e];
		return n;
	}
	function xn(t) {
		var e = Object.keys(t);
		if (1 !== e.length)
			throw new Error(
				'Please provide an object with a single key (operation name) mapping to a function. Got an object with ' +
					e.length +
					' keys.'
			);
		var r = e[0],
			o = t[r];
		r.endsWith('_') && (r = r.substring(0, r.length - 1));
		function n() {
			for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
			qt.startScope(r);
			try {
				var n = o.apply(void 0, t);
				return (
					n instanceof Promise &&
						console.error('Cannot return a Promise inside of tidy.'),
					qt.endScope(n),
					n
				);
			} catch (t) {
				throw (qt.endScope(null), t);
			}
		}
		return Object.defineProperty(n, 'name', { value: r, configurable: !0 }), n;
	}
	Qe.registerFlag('HAS_WEBGL', function () {
		return 0 < Qe.getNumber('WEBGL_VERSION');
	}),
		Qe.registerFlag('WEBGL_VERSION', function () {
			return je(2) ? 2 : je(1) ? 1 : 0;
		}),
		Qe.registerFlag('WEBGL_BUFFER_SUPPORTED', function () {
			return 2 === Qe.get('WEBGL_VERSION');
		}),
		Qe.registerFlag('WEBGL_CPU_FORWARD', function () {
			return !0;
		}),
		Qe.registerFlag('WEBGL_FORCE_F16_TEXTURES', function () {
			return !1;
		}),
		Qe.registerFlag('WEBGL_PACK', function () {
			return Qe.getBool('HAS_WEBGL');
		}),
		Qe.registerFlag('WEBGL_PACK_NORMALIZATION', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_CLIP', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_DEPTHWISECONV', function () {
			return !1;
		}),
		Qe.registerFlag('WEBGL_PACK_BINARY_OPERATIONS', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_UNARY_OPERATIONS', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_ARRAY_OPERATIONS', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_IMAGE_OPERATIONS', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_PACK_REDUCE', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_LAZILY_UNPACK', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_CONV_IM2COL', function () {
			return Qe.getBool('WEBGL_PACK');
		}),
		Qe.registerFlag('WEBGL_MAX_TEXTURE_SIZE', function () {
			return Ve(Qe.getNumber('WEBGL_VERSION'));
		}),
		Qe.registerFlag('WEBGL_MAX_TEXTURES_IN_SHADER', function () {
			return Ge(Qe.getNumber('WEBGL_VERSION'));
		}),
		Qe.registerFlag(
			'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION',
			function () {
				var t = Qe.getNumber('WEBGL_VERSION');
				return 0 === t ? 0 : He(t);
			}
		),
		Qe.registerFlag(
			'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE',
			function () {
				return (
					0 < Qe.getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') &&
					((t = navigator.userAgent || navigator.vendor || window.opera),
					!(
						/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
							t
						) ||
						/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
							t.substr(0, 4)
						)
					))
				);
				var t;
			}
		),
		Qe.registerFlag('WEBGL_RENDER_FLOAT32_CAPABLE', function () {
			return Ke(Qe.getNumber('WEBGL_VERSION'));
		}),
		Qe.registerFlag('WEBGL_RENDER_FLOAT32_ENABLED', function () {
			return (
				!Qe.getBool('WEBGL_FORCE_F16_TEXTURES') &&
				Qe.getBool('WEBGL_RENDER_FLOAT32_CAPABLE')
			);
		}),
		Qe.registerFlag('WEBGL_DOWNLOAD_FLOAT_ENABLED', function () {
			return Xe(Qe.getNumber('WEBGL_VERSION'));
		}),
		Qe.registerFlag('WEBGL_FENCE_API_ENABLED', function () {
			return $e(Qe.getNumber('WEBGL_VERSION'));
		}),
		Qe.registerFlag('WEBGL_SIZE_UPLOAD_UNIFORM', function () {
			return Qe.getBool('WEBGL_RENDER_FLOAT32_ENABLED') ? 4 : 0;
		}),
		(mt = Ze);
	var bn = xn({
			complex_: function (t, e) {
				var n = sn(t, 'real', 'complex'),
					r = sn(e, 'imag', 'complex');
				return (
					x(
						n.shape,
						r.shape,
						'real and imag shapes, ' +
							n.shape +
							' and ' +
							r.shape +
							', must match in call to tf.complex().'
					),
					qt.runKernelFunc(
						function (t) {
							return t.complex(n, r);
						},
						{ $real: n, $imag: r }
					)
				);
			},
		}),
		wn = xn({
			real_: function (t) {
				var e = sn(t, 'input', 'real');
				return qt.runKernelFunc(
					function (t) {
						return t.real(e);
					},
					{ $input: e }
				);
			},
		}),
		Cn = xn({
			imag_: function (t) {
				var e = sn(t, 'input', 'imag');
				return qt.runKernelFunc(
					function (t) {
						return t.imag(e);
					},
					{ $input: e }
				);
			},
		});
	function En(t, e, n) {
		return _n(t, e, on(t, n), n);
	}
	function _n(t, e, n, r) {
		if ((null == r && (r = j(t)), 'complex64' === r))
			throw new Error(
				'Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).'
			);
		if (
			!z(t) &&
			!Array.isArray(t) &&
			'number' != typeof t &&
			'boolean' != typeof t &&
			'string' != typeof t
		)
			throw new Error(
				'values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray'
			);
		if (null != e) {
			et(e);
			var o = L(e),
				i = L(n);
			P(o === i, function () {
				return (
					'Based on the provided shape, [' +
					e +
					'], the tensor should have ' +
					o +
					' values but has ' +
					i
				);
			});
			for (var a = 0; a < n.length; ++a) {
				var s = n[a],
					u = a !== n.length - 1 || s !== L(e.slice(a));
				P(n[a] === e[a] || !u, function () {
					return (
						'Error creating a new Tensor. Inferred shape (' +
						n +
						') does not match the provided shape (' +
						e +
						'). '
					);
				});
			}
		}
		return (
			z(t) || Array.isArray(t) || (t = [t]),
			(e = e || n),
			(t = 'string' !== r ? $(t, r, _().getBool('DEBUG')) : b(t, [], !0)),
			qt.makeTensor(t, e, r)
		);
	}
	function In(t, e) {
		if (((z(t) && 'string' !== e) || Array.isArray(t)) && 'complex64' !== e)
			throw new Error(
				'Error creating a new Scalar: value must be a primitive (number|boolean|string)'
			);
		if ('string' === e && z(t) && !(t instanceof Uint8Array))
			throw new Error(
				'When making a scalar from encoded string, the value must be `Uint8Array`.'
			);
		return _n(t, [], [], e);
	}
	function Rn(t, e) {
		m(t);
		var n = on(t, e);
		if (1 !== n.length)
			throw new Error('tensor1d() requires values to be a flat/TypedArray');
		return _n(t, null, n, e);
	}
	function kn(t, e, n) {
		if ((m(t), null != e && 2 !== e.length))
			throw new Error('tensor2d() requires shape to have two numbers');
		var r = on(t, n);
		if (2 !== r.length && 1 !== r.length)
			throw new Error(
				'tensor2d() requires values to be number[][] or flat/TypedArray'
			);
		if (1 === r.length && null == e)
			throw new Error(
				'tensor2d() requires shape to be provided when `values` are a flat/TypedArray'
			);
		return _n(t, e, r, n);
	}
	function Sn(t, e, n) {
		if ((m(t), null != e && 3 !== e.length))
			throw new Error('tensor3d() requires shape to have three numbers');
		var r = on(t, n);
		if (3 !== r.length && 1 !== r.length)
			throw new Error(
				'tensor3d() requires values to be number[][][] or flat/TypedArray'
			);
		if (1 === r.length && null == e)
			throw new Error(
				'tensor3d() requires shape to be provided when `values` are a flat array'
			);
		return _n(t, e, r, n);
	}
	function Dn(t, e, n) {
		if ((m(t), null != e && 4 !== e.length))
			throw new Error('tensor4d() requires shape to have four numbers');
		var r = on(t, n);
		if (4 !== r.length && 1 !== r.length)
			throw new Error(
				'tensor4d() requires values to be number[][][][] or flat/TypedArray'
			);
		if (1 === r.length && null == e)
			throw new Error(
				'tensor4d() requires shape to be provided when `values` are a flat array'
			);
		return _n(t, e, r, n);
	}
	function An(t, e, n) {
		if ((m(t), null != e && 5 !== e.length))
			throw new Error('tensor5d() requires shape to have five numbers');
		var r = on(t, n);
		if (5 !== r.length && 1 !== r.length)
			throw new Error(
				'tensor5d() requires values to be number[][][][][] or flat/TypedArray'
			);
		if (1 === r.length && null == e)
			throw new Error(
				'tensor5d() requires shape to be provided when `values` are a flat array'
			);
		return _n(t, e, r, n);
	}
	function Tn(t, e, n) {
		if ((m(t), null != e && 6 !== e.length))
			throw new Error('tensor6d() requires shape to have six numbers');
		var r = on(t, n);
		if (6 !== r.length && 1 !== r.length)
			throw new Error(
				'tensor6d() requires values to be number[][][][][][] or flat/TypedArray'
			);
		if (1 === r.length && null == e)
			throw new Error(
				'tensor6d() requires shape to be provided when `values` are a flat array'
			);
		return _n(t, (e = e || r), r, n);
	}
	function Nn(t, e, n, r) {
		return void 0 === e && (e = !0), qt.makeVariable(t, e, n, r);
	}
	function Fn(t, e) {
		if ((void 0 === e && (e = 'float32'), 'complex64' === e)) {
			var n = Fn(t, 'float32'),
				r = Mn(t, 'float32');
			return bn(n, r);
		}
		var o = Q(L(t), e);
		return qt.makeTensor(o, t, e);
	}
	function Mn(t, e) {
		if ((void 0 === e && (e = 'float32'), 'complex64' === e)) {
			var n = Mn(t, 'float32'),
				r = Mn(t, 'float32');
			return bn(n, r);
		}
		var o = Z(L(t), e);
		return qt.makeTensor(o, t, e);
	}
	function On(e, n, r) {
		return qt.runKernelFunc(function (t) {
			return t.fill(e, n, r);
		}, {});
	}
	function Pn(e, n, r) {
		if (r <= 0) throw new Error('The number of values should be positive.');
		return qt.runKernelFunc(function (t) {
			return t.linspace(e, n, r);
		}, {});
	}
	function Bn(t, e, n, r) {
		if ((void 0 === n && (n = 1), void 0 === r && (r = 'float32'), 0 === n))
			throw new Error('Cannot have a step of zero');
		if (t === e || (t < e && n < 0) || (e < t && 1 < n)) return Mn([0], r);
		var o = Z(Math.abs(Math.ceil((e - t) / n)), r);
		e < t && 1 === n && (n = -1), (o[0] = t);
		for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + n;
		return Rn(o, r);
	}
	var Ln = xn({
			onesLike_: function (t) {
				var e = sn(t, 'x', 'onesLike');
				if ('complex64' !== e.dtype)
					return qt.runKernelFunc(
						function (t) {
							return t.onesLike(e);
						},
						{ $x: e },
						function (t, e) {
							return {
								$x: function () {
									return Wn(t);
								},
							};
						}
					);
				var n = Ln(wn(e)),
					r = Wn(Cn(e));
				return bn(n, r);
			},
		}),
		Wn = xn({
			zerosLike_: function (t) {
				var e = sn(t, 'x', 'zerosLike');
				return qt.runKernelFunc(
					function (t) {
						return t.zerosLike(e);
					},
					{ $x: e },
					function (t, e) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		zn = xn({
			concat_: function (t, n) {
				void 0 === n && (n = 0),
					P(1 <= t.length, function () {
						return 'Pass at least one tensor to concat';
					});
				var e = un(t, 'tensors', 'concat');
				'complex64' === e[0].dtype &&
					e.forEach(function (t) {
						if ('complex64' !== t.dtype)
							throw new Error(
								'Cannot concatenate complex64 tensors with a tensor\n          with dtype ' +
									t.dtype +
									'. '
							);
					}),
					(n = A(n, e[0].shape)[0]);
				var r = yn(
					e.map(function (t) {
						return t.shape;
					}),
					n
				);
				if (0 === L(r)) return En([], r);
				if (
					1 ===
					(e = e.filter(function (t) {
						return 0 < t.size;
					})).length
				)
					return e[0];
				var o = e.map(function (t) {
					return t.shape;
				});
				gn(o, n);
				var i = e,
					a = { axis: n };
				return qt.runKernelFunc(
					function (t) {
						return t.concat(e, n);
					},
					i,
					function (t) {
						var e = o.map(function (t) {
							return t[n];
						});
						return qn(t, e, n).map(function (t) {
							return function () {
								return t;
							};
						});
					},
					'Concat',
					a
				);
			},
		}),
		Un = xn({
			concat1d_: function (t) {
				return zn(t, 0);
			},
		}),
		Vn = xn({
			concat2d_: function (t, e) {
				return zn(t, e);
			},
		}),
		Gn = xn({
			concat3d_: function (t, e) {
				return zn(t, e);
			},
		}),
		Hn = xn({
			concat4d_: function (t, e) {
				return zn(t, e);
			},
		}),
		qn = xn({
			split_: function (t, e, n) {
				void 0 === n && (n = 0);
				var r,
					o = sn(t, 'x', 'split');
				return (
					(n = A(n, o.shape)[0]),
					(r =
						'number' == typeof e
							? (P(o.shape[n] % e == 0, function () {
									return 'Number of splits must evenly divide the axis.';
							  }),
							  new Array(e).fill(o.shape[n] / e))
							: (P(
									o.shape[n] ===
										e.reduce(function (t, e) {
											return t + e;
										}),
									function () {
										return 'The sum of sizes must match the size of the axis dimension.';
									}
							  ),
							  e)),
					qt.runKernelFunc(
						function (t) {
							return t.split(o, r, n);
						},
						{ $x: o },
						function (t) {
							return {
								$x: function () {
									return zn(t, n);
								},
							};
						}
					)
				);
			},
		});
	function jn(t, e) {
		return t((e = { exports: {} }), e.exports), e.exports;
	}
	var Kn = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var r,
						e = this,
						n =
							((r = 4022871197),
							function (t) {
								t = t.toString();
								for (var e = 0; e < t.length; e++) {
									var n = 0.02519603282416938 * (r += t.charCodeAt(e));
									(n -= r = n >>> 0),
										(r = (n *= r) >>> 0),
										(r += 4294967296 * (n -= r));
								}
								return 2.3283064365386963e-10 * (r >>> 0);
							});
					(e.next = function () {
						var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
						return (e.s0 = e.s1), (e.s1 = e.s2), (e.s2 = t - (e.c = 0 | t));
					}),
						(e.c = 1),
						(e.s0 = n(' ')),
						(e.s1 = n(' ')),
						(e.s2 = n(' ')),
						(e.s0 -= n(t)),
						e.s0 < 0 && (e.s0 += 1),
						(e.s1 -= n(t)),
						e.s1 < 0 && (e.s1 += 1),
						(e.s2 -= n(t)),
						e.s2 < 0 && (e.s2 += 1),
						(n = null);
				}
				function a(t, e) {
					return (e.c = t.c), (e.s0 = t.s0), (e.s1 = t.s1), (e.s2 = t.s2), e;
				}
				function n(t, e) {
					var n = new i(t),
						r = e && e.state,
						o = n.next;
					return (
						(o.int32 = function () {
							return (4294967296 * n.next()) | 0;
						}),
						(o.double = function () {
							return o() + 11102230246251565e-32 * ((2097152 * o()) | 0);
						}),
						(o.quick = o),
						r &&
							('object' == typeof r && a(r, n),
							(o.state = function () {
								return a(n, {});
							})),
						o
					);
				}
				e && e.exports ? (e.exports = n) : (this.alea = n);
			})(0, t);
		}),
		Xn = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var e = this,
						n = '';
					(e.x = 0),
						(e.y = 0),
						(e.z = 0),
						(e.w = 0),
						(e.next = function () {
							var t = e.x ^ (e.x << 11);
							return (
								(e.x = e.y),
								(e.y = e.z),
								(e.z = e.w),
								(e.w ^= (e.w >>> 19) ^ t ^ (t >>> 8))
							);
						}),
						t === (0 | t) ? (e.x = t) : (n += t);
					for (var r = 0; r < n.length + 64; r++)
						(e.x ^= 0 | n.charCodeAt(r)), e.next();
				}
				function a(t, e) {
					return (e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e;
				}
				function n(t, e) {
					function n() {
						return (r.next() >>> 0) / 4294967296;
					}
					var r = new i(t),
						o = e && e.state;
					return (
						(n.double = function () {
							do {
								var t =
									((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
									(1 << 21);
							} while (0 === t);
							return t;
						}),
						(n.int32 = r.next),
						(n.quick = n),
						o &&
							('object' == typeof o && a(o, r),
							(n.state = function () {
								return a(r, {});
							})),
						n
					);
				}
				e && e.exports ? (e.exports = n) : (this.xor128 = n);
			})(0, t);
		}),
		Yn = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var e = this,
						n = '';
					(e.next = function () {
						var t = e.x ^ (e.x >>> 2);
						return (
							(e.x = e.y),
							(e.y = e.z),
							(e.z = e.w),
							(e.w = e.v),
							((e.d = (e.d + 362437) | 0) +
								(e.v = e.v ^ (e.v << 4) ^ t ^ (t << 1))) |
								0
						);
					}),
						(e.x = 0),
						(e.y = 0),
						(e.z = 0),
						(e.w = 0),
						t === ((e.v = 0) | t) ? (e.x = t) : (n += t);
					for (var r = 0; r < n.length + 64; r++)
						(e.x ^= 0 | n.charCodeAt(r)),
							r == n.length && (e.d = (e.x << 10) ^ (e.x >>> 4)),
							e.next();
				}
				function a(t, e) {
					return (
						(e.x = t.x),
						(e.y = t.y),
						(e.z = t.z),
						(e.w = t.w),
						(e.v = t.v),
						(e.d = t.d),
						e
					);
				}
				function n(t, e) {
					function n() {
						return (r.next() >>> 0) / 4294967296;
					}
					var r = new i(t),
						o = e && e.state;
					return (
						(n.double = function () {
							do {
								var t =
									((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
									(1 << 21);
							} while (0 === t);
							return t;
						}),
						(n.int32 = r.next),
						(n.quick = n),
						o &&
							('object' == typeof o && a(o, r),
							(n.state = function () {
								return a(r, {});
							})),
						n
					);
				}
				e && e.exports ? (e.exports = n) : (this.xorwow = n);
			})(0, t);
		}),
		$n = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var o = this;
					(o.next = function () {
						var t,
							e,
							n = o.x,
							r = o.i;
						return (
							(t = n[r]),
							(e = (t ^= t >>> 7) ^ (t << 24)),
							(e ^= (t = n[(r + 1) & 7]) ^ (t >>> 10)),
							(e ^= (t = n[(r + 3) & 7]) ^ (t >>> 3)),
							(e ^= (t = n[(r + 4) & 7]) ^ (t << 7)),
							(t = n[(r + 7) & 7]),
							(e ^= (t ^= t << 13) ^ (t << 9)),
							(n[r] = e),
							(o.i = (r + 1) & 7),
							e
						);
					}),
						(function (t, e) {
							var n,
								r = [];
							if (e === (0 | e)) r[0] = e;
							else
								for (e = '' + e, n = 0; n < e.length; ++n)
									r[7 & n] =
										(r[7 & n] << 15) ^
										((e.charCodeAt(n) + r[(n + 1) & 7]) << 13);
							for (; r.length < 8; ) r.push(0);
							for (n = 0; n < 8 && 0 === r[n]; ++n);
							for (
								8 == n ? (r[7] = -1) : r[n], t.x = r, t.i = 0, n = 256;
								0 < n;
								--n
							)
								t.next();
						})(o, t);
				}
				function a(t, e) {
					return (e.x = t.x.slice()), (e.i = t.i), e;
				}
				function n(t, e) {
					null == t && (t = +new Date());
					function n() {
						return (r.next() >>> 0) / 4294967296;
					}
					var r = new i(t),
						o = e && e.state;
					return (
						(n.double = function () {
							do {
								var t =
									((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
									(1 << 21);
							} while (0 === t);
							return t;
						}),
						(n.int32 = r.next),
						(n.quick = n),
						o &&
							(o.x && a(o, r),
							(n.state = function () {
								return a(r, {});
							})),
						n
					);
				}
				e && e.exports ? (e.exports = n) : (this.xorshift7 = n);
			})(0, t);
		}),
		Jn = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var i = this;
					(i.next = function () {
						var t,
							e,
							n = i.w,
							r = i.X,
							o = i.i;
						return (
							(i.w = n = (n + 1640531527) | 0),
							(e = r[(o + 34) & 127]),
							(t = r[(o = (o + 1) & 127)]),
							(e ^= e << 13),
							(t ^= t << 17),
							(e ^= e >>> 15),
							(t ^= t >>> 12),
							(e = r[o] = e ^ t),
							(i.i = o),
							(e + (n ^ (n >>> 16))) | 0
						);
					}),
						(function (t, e) {
							var n,
								r,
								o,
								i,
								a,
								s = [],
								u = 128;
							for (
								e === (0 | e)
									? ((r = e), (e = null))
									: ((e += '\0'), (r = 0), (u = Math.max(u, e.length))),
									o = 0,
									i = -32;
								i < u;
								++i
							)
								e && (r ^= e.charCodeAt((i + 32) % e.length)),
									0 === i && (a = r),
									(r ^= r << 10),
									(r ^= r >>> 15),
									(r ^= r << 4),
									(r ^= r >>> 13),
									0 <= i &&
										((a = (a + 1640531527) | 0),
										(o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0));
							for (
								128 <= o && (s[127 & ((e && e.length) || 0)] = -1),
									o = 127,
									i = 512;
								0 < i;
								--i
							)
								(r = s[(o + 34) & 127]),
									(n = s[(o = (o + 1) & 127)]),
									(r ^= r << 13),
									(n ^= n << 17),
									(r ^= r >>> 15),
									(n ^= n >>> 12),
									(s[o] = r ^ n);
							(t.w = a), (t.X = s), (t.i = o);
						})(i, t);
				}
				function a(t, e) {
					return (e.i = t.i), (e.w = t.w), (e.X = t.X.slice()), e;
				}
				function n(t, e) {
					null == t && (t = +new Date());
					function n() {
						return (r.next() >>> 0) / 4294967296;
					}
					var r = new i(t),
						o = e && e.state;
					return (
						(n.double = function () {
							do {
								var t =
									((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
									(1 << 21);
							} while (0 === t);
							return t;
						}),
						(n.int32 = r.next),
						(n.quick = n),
						o &&
							(o.X && a(o, r),
							(n.state = function () {
								return a(r, {});
							})),
						n
					);
				}
				e && e.exports ? (e.exports = n) : (this.xor4096 = n);
			})(0, t);
		}),
		Qn = jn(function (t) {
			!(function (t, e) {
				function i(t) {
					var o = this,
						e = '';
					(o.next = function () {
						var t = o.b,
							e = o.c,
							n = o.d,
							r = o.a;
						return (
							(t = (t << 25) ^ (t >>> 7) ^ e),
							(e = (e - n) | 0),
							(n = (n << 24) ^ (n >>> 8) ^ r),
							(r = (r - t) | 0),
							(o.b = t = (t << 20) ^ (t >>> 12) ^ e),
							(o.c = e = (e - n) | 0),
							(o.d = (n << 16) ^ (e >>> 16) ^ r),
							(o.a = (r - t) | 0)
						);
					}),
						(o.a = 0),
						(o.b = 0),
						(o.c = -1640531527),
						(o.d = 1367130551),
						t === Math.floor(t)
							? ((o.a = (t / 4294967296) | 0), (o.b = 0 | t))
							: (e += t);
					for (var n = 0; n < e.length + 20; n++)
						(o.b ^= 0 | e.charCodeAt(n)), o.next();
				}
				function a(t, e) {
					return (e.a = t.a), (e.b = t.b), (e.c = t.c), (e.d = t.d), e;
				}
				function n(t, e) {
					function n() {
						return (r.next() >>> 0) / 4294967296;
					}
					var r = new i(t),
						o = e && e.state;
					return (
						(n.double = function () {
							do {
								var t =
									((r.next() >>> 11) + (r.next() >>> 0) / 4294967296) /
									(1 << 21);
							} while (0 === t);
							return t;
						}),
						(n.int32 = r.next),
						(n.quick = n),
						o &&
							('object' == typeof o && a(o, r),
							(n.state = function () {
								return a(r, {});
							})),
						n
					);
				}
				e && e.exports ? (e.exports = n) : (this.tychei = n);
			})(0, t);
		}),
		Zn = jn(function (e) {
			!(function (s, u) {
				var c,
					l = this,
					h = 256,
					p = 6,
					f = 'random',
					d = u.pow(h, p),
					v = u.pow(2, 52),
					m = 2 * v,
					g = h - 1;
				function t(t, e, n) {
					function r() {
						for (var t = a.g(p), e = d, n = 0; t < v; )
							(t = (t + n) * h), (e *= h), (n = a.g(1));
						for (; m <= t; ) (t /= 2), (e /= 2), (n >>>= 1);
						return (t + n) / e;
					}
					var o = [],
						i = b(
							(function t(e, n) {
								var r,
									o = [],
									i = typeof e;
								if (n && 'object' == i)
									for (r in e)
										try {
											o.push(t(e[r], n - 1));
										} catch (t) {}
								return o.length ? o : 'string' == i ? e : e + '\0';
							})(
								(e = 1 == e ? { entropy: !0 } : e || {}).entropy
									? [t, w(s)]
									: null == t
									? (function () {
											try {
												var t;
												return (
													c && (t = c.randomBytes)
														? (t = t(h))
														: ((t = new Uint8Array(h)),
														  (l.crypto || l.msCrypto).getRandomValues(t)),
													w(t)
												);
											} catch (t) {
												var e = l.navigator,
													n = e && e.plugins;
												return [+new Date(), l, n, l.screen, w(s)];
											}
									  })()
									: t,
								3
							),
							o
						),
						a = new y(o);
					return (
						(r.int32 = function () {
							return 0 | a.g(4);
						}),
						(r.quick = function () {
							return a.g(4) / 4294967296;
						}),
						(r.double = r),
						b(w(a.S), s),
						(
							e.pass ||
							n ||
							function (t, e, n, r) {
								return (
									r &&
										(r.S && x(r, a),
										(t.state = function () {
											return x(a, {});
										})),
									n ? ((u[f] = t), e) : t
								);
							}
						)(r, i, 'global' in e ? e.global : this == u, e.state)
					);
				}
				function y(t) {
					var e,
						n = t.length,
						a = this,
						r = 0,
						o = (a.i = a.j = 0),
						i = (a.S = []);
					for (n || (t = [n++]); r < h; ) i[r] = r++;
					for (r = 0; r < h; r++)
						(i[r] = i[(o = g & (o + t[r % n] + (e = i[r])))]), (i[o] = e);
					(a.g = function (t) {
						for (var e, n = 0, r = a.i, o = a.j, i = a.S; t--; )
							(e = i[(r = g & (r + 1))]),
								(n =
									n * h + i[g & ((i[r] = i[(o = g & (o + e))]) + (i[o] = e))]);
						return (a.i = r), (a.j = o), n;
					})(h);
				}
				function x(t, e) {
					return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
				}
				function b(t, e) {
					for (var n, r = t + '', o = 0; o < r.length; )
						e[g & o] = g & ((n ^= 19 * e[g & o]) + r.charCodeAt(o++));
					return w(e);
				}
				function w(t) {
					return String.fromCharCode.apply(0, t);
				}
				if (((u['seed' + f] = t), b(u.random(), s), e.exports)) {
					e.exports = t;
					try {
						c = require('crypto');
					} catch (t) {}
				}
			})([], Math);
		});
	(Zn.alea = Kn),
		(Zn.xor128 = Xn),
		(Zn.xorwow = Yn),
		(Zn.xorshift7 = $n),
		(Zn.xor4096 = Jn),
		(Zn.tychei = Qn);
	var tr = Zn.alea,
		er =
			((ar.prototype.nextValue = function () {
				if (!isNaN(this.nextVal)) {
					var t = this.nextVal;
					return (this.nextVal = NaN), t;
				}
				for (var e, n, r = !1; !r; ) {
					for (
						var o = void 0, i = void 0, a = void 0;
						1 <=
							(a =
								(o = 2 * this.random() - 1) * o +
								(i = 2 * this.random() - 1) * i) || 0 === a;

					);
					var s = Math.sqrt((-2 * Math.log(a)) / a);
					(e = this.mean + this.stdDev * o * s),
						(n = this.mean + this.stdDev * i * s),
						(this.truncated && !this.isValidTruncated(e)) || (r = !0);
				}
				return (
					(this.truncated && !this.isValidTruncated(n)) ||
						(this.nextVal = this.convertValue(n)),
					this.convertValue(e)
				);
			}),
			(ar.prototype.convertValue = function (t) {
				return null == this.dtype || 'float32' === this.dtype
					? t
					: Math.round(t);
			}),
			(ar.prototype.isValidTruncated = function (t) {
				return t <= this.upper && t >= this.lower;
			}),
			ar),
		nr =
			((ir.prototype.nextValue = function () {
				for (var t, e, n, r, o, i; ; ) {
					for (; (r = this.randn.nextValue()), (i = 1 + this.c * r) <= 0; );
					if (
						((i *= i * i),
						(e = 1 - 0.331 * (t = r * r) * t),
						(n = 0.5 * t + this.d * (1 - i + Math.log(i))),
						(o = this.randu()) < e || Math.log(o) < n)
					)
						break;
				}
				return (
					(i = (1 / this.beta) * this.d * i),
					this.alpha < 1 && (i *= Math.pow(this.randu(), 1 / this.alpha)),
					this.convertValue(i)
				);
			}),
			(ir.prototype.convertValue = function (t) {
				return 'float32' === this.dtype ? t : Math.round(t);
			}),
			ir),
		rr =
			((or.prototype.convertValue = function (t) {
				return this.canReturnFloat() ? t : Math.round(t);
			}),
			(or.prototype.nextValue = function () {
				return this.convertValue(this.min + this.range * this.random());
			}),
			or);
	function or(t, e, n, r) {
		var o = this;
		if (
			(void 0 === t && (t = 0),
			void 0 === e && (e = 1),
			(this.canReturnFloat = function () {
				return null == o.dtype || 'float32' === o.dtype;
			}),
			(this.min = t),
			(this.range = e - t),
			(this.dtype = n),
			null == r && (r = Math.random()),
			'number' == typeof r && (r = r.toString()),
			!this.canReturnFloat() && this.range <= 1)
		)
			throw new Error(
				'The difference between ' +
					t +
					' - ' +
					e +
					' <= 1 and dtype is not float'
			);
		this.random = tr(r);
	}
	function ir(t, e, n, r) {
		(this.alpha = t), (this.beta = 1 / e), (this.dtype = n);
		var o = r || Math.random();
		(this.randu = tr(o.toString())),
			(this.randn = new er(0, 1, n, !1, this.randu())),
			(this.d = t < 1 ? t + 2 / 3 : t - 1 / 3),
			(this.c = 1 / Math.sqrt(9 * this.d));
	}
	function ar(t, e, n, r, o) {
		(this.mean = t),
			(this.stdDev = e),
			(this.dtype = n),
			(this.nextVal = NaN),
			(this.truncated = r),
			this.truncated &&
				((this.upper = this.mean + 2 * this.stdDev),
				(this.lower = this.mean - 2 * this.stdDev));
		var i = o || Math.random();
		this.random = tr(i.toString());
	}
	function sr(t, e, n) {
		return (
			void 0 === e && (e = 'float32'),
			(e = e || 'float32'),
			et(t),
			new ft(t, e, n)
		);
	}
	function ur(t, e) {
		void 0 === e && (e = !1), console.log(t.toString(e));
	}
	function cr(h, p) {
		return y(this, void 0, void 0, function () {
			var e, n, r, o, i, a, s, u, c, l;
			return R(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							(e = sn(h, 'x', 'setdiff1d')),
							(n = sn(p, 'y', 'setdiff1d')),
							P(e.dtype === n.dtype, function () {
								return (
									'x and y should have the same dtype, but got x (' +
									e.dtype +
									') and y (' +
									n.dtype +
									').'
								);
							}),
							P(1 === e.rank, function () {
								return 'x should be 1D tensor, but got x (' + e.shape + ').';
							}),
							P(1 === n.rank, function () {
								return 'y should be 1D tensor, but got y (' + n.shape + ').';
							}),
							[4, e.data()]
						);
					case 1:
						return (r = t.sent()), [4, n.data()];
					case 2:
						for (o = t.sent(), i = new Set(o), c = a = 0; c < r.length; c++)
							i.has(r[c]) || a++;
						for (
							s = new ft([a], e.dtype), u = new ft([a], 'int32'), l = c = 0;
							c < r.length;
							c++
						)
							i.has(r[c]) || ((s.values[l] = r[c]), (u.values[l] = c), l++);
						return [2, [s.toTensor(), u.toTensor()]];
				}
			});
		});
	}
	var lr = xn({
			batchToSpaceND_: function (t, e, n) {
				var r = sn(t, 'x', 'batchToSpaceND'),
					o = e.reduce(function (t, e) {
						return t * e;
					});
				return (
					P(r.rank >= 1 + e.length, function () {
						return (
							'input rank is ' +
							r.rank +
							' but should be > than blockShape.length ' +
							e.length
						);
					}),
					P(n.length === e.length, function () {
						return (
							'crops.length is ' +
							n.length +
							' but should be equal to blockShape.length  ' +
							e.length
						);
					}),
					P(r.shape[0] % o == 0, function () {
						return (
							'input tensor batch is ' +
							r.shape[0] +
							' but is not divisible by the product of the elements of blockShape ' +
							e.join(' * ') +
							' === ' +
							o
						);
					}),
					qt.runKernelFunc(
						function (t) {
							return t.batchToSpaceND(r, e, n);
						},
						{ $x: r },
						function (t) {
							return {
								$x: function () {
									return t.spaceToBatchND(e, n);
								},
							};
						}
					)
				);
			},
		}),
		hr = xn({
			broadcastTo_: function (t, e) {
				var n = sn(t, 'broadcastTo', 'x'),
					r = n.shape;
				if (
					e.some(function (t) {
						return !(0 < t) || t % 1 != 0;
					})
				)
					throw new Error(
						'broadcastTo(): Invalid broadcast shape [' + e + '].'
					);
				if (e.length < n.rank)
					throw new Error(
						'broadcastTo(): shape.length=' +
							e.length +
							' < input.rank=' +
							n.rank +
							'.'
					);
				if (e.length > n.rank) {
					for (var o = n.shape.slice(); o.length < e.length; ) o.unshift(1);
					n = n.reshape(o);
				}
				for (var i = Array.from(e), a = e.length - 1; 0 <= a; a--)
					if (n.shape[a] === e[a]) i[a] = 1;
					else if (1 !== n.shape[a])
						throw new Error(
							'broadcastTo(): [' + r + '] cannot be broadcast to [' + e + '].'
						);
				var s = i
					.map(function (t, e) {
						return 1 < t ? e : -1;
					})
					.filter(function (t) {
						return 0 <= t;
					});
				return 0 === s.length
					? n.clone()
					: qt.runKernelFunc(
							function (t) {
								return t.tile(n, i);
							},
							{ input: n },
							function (t) {
								return {
									input: function () {
										return t.sum(s, !0);
									},
								};
							}
					  );
			},
		}),
		pr = xn({
			cast_: function (t, e) {
				var n = sn(t, 'x', 'cast');
				if (!O(e)) throw new Error('Failed to cast to unknown dtype ' + e);
				if (
					('string' === e && 'string' !== n.dtype) ||
					('string' !== e && 'string' === n.dtype)
				)
					throw new Error('Only strings can be casted to strings');
				var r = { dtype: e };
				return qt.runKernelFunc(
					function (t) {
						return t.cast(n, e);
					},
					{ x: n },
					function (t) {
						return {
							x: function () {
								return t.clone();
							},
						};
					},
					'Cast',
					r
				);
			},
		}),
		fr = xn({
			clone_: function (t) {
				var e = sn(t, 'x', 'clone', null);
				return qt.runKernelFunc(
					function () {
						return qt.makeTensorFromDataId(e.dataId, e.shape, e.dtype);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return t.toFloat();
							},
						};
					}
				);
			},
		}),
		dr = xn({
			cumsum_: function (t, e, n, r) {
				void 0 === e && (e = 0),
					void 0 === n && (n = !1),
					void 0 === r && (r = !1);
				var o = sn(t, 'x', 'cumsum'),
					i = dn([(e |= 0)], o.rank),
					a = o;
				null != i && (a = o.transpose(i));
				var s = mn(1, o.rank)[0],
					u = qt.runKernelFunc(
						function (t) {
							return t.cumsum(a, s, n, r);
						},
						{ permutedX: a },
						function (t) {
							return {
								permutedX: function () {
									return t.cumsum(e, n, !r);
								},
							};
						}
					);
				return null != i && (u = u.transpose(i)), u;
			},
		}),
		vr = xn({
			depthToSpace_: function (t, e, n) {
				void 0 === n && (n = 'NHWC');
				var r = sn(t, 'x', 'depthToSpace'),
					o = 'NHWC' === n ? r.shape[1] : r.shape[2],
					i = 'NHWC' === n ? r.shape[2] : r.shape[3],
					a = 'NHWC' === n ? r.shape[3] : r.shape[1];
				return (
					P(0 <= o * e, function () {
						return (
							'Negative dimension size caused by overflow when multiplying\n      ' +
							o +
							' and ' +
							e +
							'  for depthToSpace with input shape\n      ' +
							r.shape
						);
					}),
					P(0 <= i * e, function () {
						return (
							'Negative dimension size caused by overflow when multiplying\n      ' +
							i +
							' and ' +
							e +
							' for depthToSpace with input shape\n          ' +
							r.shape
						);
					}),
					P(a % (e * e) == 0, function () {
						return (
							'Dimension size must be evenly divisible by ' +
							e * e +
							' but is ' +
							a +
							' for depthToSpace with input shape ' +
							r.shape
						);
					}),
					qt.runKernelFunc(
						function (t) {
							return t.depthToSpace(r, e, n);
						},
						{ $x: r }
					)
				);
			},
		}),
		mr = xn({
			expandDims_: function (t, e) {
				void 0 === e && (e = 0);
				var n = sn(t, 'x', 'expandDims', null);
				P(e <= n.rank, function () {
					return 'Axis must be <= rank of the tensor';
				});
				var r = n.shape.slice();
				return (
					e < 0 &&
						(P(-(n.rank + 1) <= e, function () {
							return (
								'Axis must be in the interval [' +
								-(n.rank + 1) +
								', ' +
								n.rank +
								']'
							);
						}),
						(e = n.rank + e + 1)),
					r.splice(e, 0, 1),
					Dr(n, r)
				);
			},
		}),
		gr = xn({
			eye_: function (t, e, n, r) {
				void 0 === r && (r = 'float32'), null == e && (e = t);
				for (var o = sr([t, e], r), i = t <= e ? t : e, a = 0; a < i; ++a)
					o.set(1, a, a);
				var s = o.toTensor().as2D(t, e);
				if (null == n) return s;
				if (1 === n.length) return Fr(mr(s, 0), [n[0], 1, 1]);
				if (2 === n.length) return Fr(mr(mr(s, 0), 0), [n[0], n[1], 1, 1]);
				if (3 === n.length)
					return Fr(mr(mr(mr(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
				throw new Error(
					'eye() currently supports only 1D and 2D batchShapes, but received ' +
						n.length +
						'D.'
				);
			},
		}),
		yr = xn({
			multinomial_: function (t, e, n, r) {
				void 0 === r && (r = !1);
				var o = sn(t, 'logits', 'multinomial'),
					i = o.size,
					a = o.rank;
				if (i < 2)
					throw new Error(
						'Error in multinomial: you need at least 2 outcomes, but got ' +
							i +
							'.'
					);
				if (2 < a)
					throw new Error('Rank of probabilities must be 1 or 2, but is ' + a);
				n = n || Math.random();
				var s = 1 === a ? o.as2D(1, -1) : o,
					u = qt.runKernelFunc(
						function (t) {
							return t.multinomial(s, r, e, n);
						},
						{ logits2D: s }
					);
				return 1 === a ? u.as1D() : u;
			},
		}),
		xr = xn({
			oneHot_: function (t, e, n, r) {
				if ((void 0 === n && (n = 1), void 0 === r && (r = 0), e < 2))
					throw new Error('Error in oneHot: depth must be >=2, but it is ' + e);
				var o = sn(t, 'indices', 'oneHot', 'int32'),
					i = o.shape.concat([e]);
				return (
					(o = o.flatten()),
					qt
						.runKernelFunc(
							function (t) {
								return t.oneHot(o, e, n, r);
							},
							{ $indices: o },
							function (t) {
								return {
									$indices: function () {
										return Mn(o.shape, 'float32');
									},
								};
							}
						)
						.reshape(i)
				);
			},
		}),
		br = xn({
			pad_: function (t, n, e) {
				void 0 === e && (e = 0);
				var r = sn(t, 'x', 'pad');
				if (0 === r.rank)
					throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
				var o = { paddings: n, constantValue: e };
				return qt.runKernelFunc(
					function (t) {
						return t.pad(r, n, e);
					},
					{ x: r },
					function (t) {
						var e = n.map(function (t) {
							return t[0];
						});
						return {
							x: function () {
								return t.slice(e, r.shape);
							},
						};
					},
					'PadV2',
					o
				);
			},
		}),
		wr = xn({
			pad1d_: function (t, e, n) {
				return (
					void 0 === n && (n = 0),
					P(2 === e.length, function () {
						return 'Invalid number of paddings. Must be length of 2.';
					}),
					br(t, [e], n)
				);
			},
		}),
		Cr = xn({
			pad2d_: function (t, e, n) {
				return (
					void 0 === n && (n = 0),
					P(
						2 === e.length && 2 === e[0].length && 2 === e[1].length,
						function () {
							return 'Invalid number of paddings. Must be length of 2 each.';
						}
					),
					br(t, e, n)
				);
			},
		}),
		Er = xn({
			pad3d_: function (t, e, n) {
				return (
					void 0 === n && (n = 0),
					P(
						3 === e.length &&
							2 === e[0].length &&
							2 === e[1].length &&
							2 === e[2].length,
						function () {
							return 'Invalid number of paddings. Must be length of 2 each.';
						}
					),
					br(t, e, n)
				);
			},
		}),
		_r = xn({
			pad4d_: function (t, e, n) {
				return (
					void 0 === n && (n = 0),
					P(
						4 === e.length &&
							2 === e[0].length &&
							2 === e[1].length &&
							2 === e[2].length &&
							2 === e[3].length,
						function () {
							return 'Invalid number of paddings. Must be length of 2 each.';
						}
					),
					br(t, e, n)
				);
			},
		}),
		Ir = xn({
			rand_: function (t, e, n) {
				var r = L(t),
					o = null;
				if (null == n || 'float32' === n) o = new Float32Array(r);
				else if ('int32' === n) o = new Int32Array(r);
				else {
					if ('bool' !== n) throw new Error('Unknown data type ' + n);
					o = new Uint8Array(r);
				}
				for (var i = 0; i < r; i++) o[i] = e();
				return qt.makeTensor(o, t, n);
			},
		}),
		Rr = xn({
			randomNormal_: function (t, e, n, r, o) {
				if (
					(void 0 === e && (e = 0),
					void 0 === n && (n = 1),
					null != r && 'bool' === r)
				)
					throw new Error('Unsupported data type ' + r);
				for (
					var i = new er(e, n, r, !1, o), a = sr(t, r), s = 0;
					s < a.values.length;
					s++
				)
					a.values[s] = i.nextValue();
				return a.toTensor();
			},
		}),
		kr = xn({
			randomGamma_: function (t, e, n, r, o) {
				if (
					(void 0 === n && (n = 1),
					void 0 === r && (r = 'float32'),
					null == n && (n = 1),
					null == r && (r = 'float32'),
					'float32' !== r && 'int32' !== r)
				)
					throw new Error('Unsupported data type ' + r);
				for (
					var i = new nr(e, n, r, o), a = sr(t, r), s = 0;
					s < a.values.length;
					s++
				)
					a.values[s] = i.nextValue();
				return a.toTensor();
			},
		}),
		Sr = xn({
			randomUniform_: function (t, e, n, r, o) {
				void 0 === e && (e = 0),
					void 0 === n && (n = 1),
					void 0 === r && (r = 'float32');
				for (
					var i = sr(t, r), a = new rr(e, n, null, o), s = 0;
					s < i.values.length;
					s++
				)
					i.values[s] = a.nextValue();
				return i.toTensor();
			},
		}),
		Dr = xn({
			reshape_: function (t, e) {
				var n = sn(t, 'x', 'reshape', null);
				(e = S(e, n.size)),
					P(n.size === L(e), function () {
						return 'new shape and old shape must have the same number of elements.';
					});
				var r = { shape: e };
				return qt.runKernelFunc(
					function (t) {
						return t.reshape(n, e);
					},
					{ x: n },
					function (t) {
						return {
							x: function () {
								return t.reshape(n.shape);
							},
						};
					},
					'Reshape',
					r
				);
			},
		}),
		Ar = xn({
			spaceToBatchND_: function (t, r, o) {
				var e = sn(t, 'x', 'spaceToBatchND');
				return (
					P(e.rank >= 1 + r.length, function () {
						return (
							'input rank ' +
							e.rank +
							' should be > than [blockShape] ' +
							r.length
						);
					}),
					P(o.length === r.length, function () {
						return (
							'paddings.shape[0] ' +
							o.length +
							' must be equal to [blockShape] ' +
							r.length
						);
					}),
					P(
						e.shape.reduce(function (t, e, n) {
							return 0 < n && n <= r.length
								? t && (e + o[n - 1][0] + o[n - 1][1]) % r[n - 1] == 0
								: t;
						}, !0),
						function () {
							return (
								'input spatial dimensions ' +
								e.shape.slice(1) +
								' with paddings ' +
								o.toString() +
								' must be divisible by blockShapes ' +
								r.toString()
							);
						}
					),
					qt.runKernelFunc(
						function (t) {
							return t.spaceToBatchND(e, r, o);
						},
						{ $x: e },
						function (t) {
							return {
								$x: function () {
									return t.batchToSpaceND(r, o);
								},
							};
						}
					)
				);
			},
		}),
		Tr = xn({
			squeeze_: function (t, e) {
				var n = sn(t, 'x', 'squeeze');
				return Dr(n, T(n.shape, e).newShape);
			},
		}),
		Nr = xn({
			stack_: function (t, e) {
				void 0 === e && (e = 0);
				var n = un(t, 'tensors', 'stack');
				if (
					(P(1 <= n.length, function () {
						return 'Pass at least one tensor to tf.stack';
					}),
					1 === n.length)
				)
					return n[0].expandDims(e);
				var r = n[0].rank,
					o = n[0].shape,
					i = n[0].dtype;
				P(e <= r, function () {
					return 'Axis must be <= rank of the tensor';
				}),
					n.forEach(function (t) {
						x(
							o,
							t.shape,
							'All tensors passed to stack must have matching shapes'
						);
					}),
					n.forEach(function (t) {
						P(i === t.dtype, function () {
							return 'All tensors passed to stack must have matching dtypes';
						});
					});
				var a = n.map(function (t) {
					return t.expandDims(e);
				});
				return zn(a, e);
			},
		}),
		Fr = xn({
			tile_: function (t, s) {
				var r = sn(t, 'x', 'tile', null);
				P(r.rank === s.length, function () {
					return (
						'Error in transpose: rank of input ' +
						r.rank +
						' must match length of reps ' +
						s +
						'.'
					);
				});
				var e = [r],
					n = { reps: s };
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.tile(r, s);
						return e([r]), n;
					},
					{ x: r },
					function (i, t) {
						var a = t[0];
						return {
							x: function () {
								var t = Wn(a);
								if (1 === a.rank)
									for (var e = 0; e < s[0]; ++e)
										t = t.add(i.slice([e * a.shape[0]], [a.shape[0]]));
								else if (2 === a.rank)
									for (e = 0; e < s[0]; ++e)
										for (var n = 0; n < s[1]; ++n)
											t = t.add(
												i.slice(
													[e * a.shape[0], n * a.shape[1]],
													[a.shape[0], a.shape[1]]
												)
											);
								else if (3 === a.rank)
									for (e = 0; e < s[0]; ++e)
										for (n = 0; n < s[1]; ++n)
											for (var r = 0; r < s[2]; ++r)
												t = t.add(
													i.slice(
														[e * a.shape[0], n * a.shape[1], r * a.shape[2]],
														[a.shape[0], a.shape[1], a.shape[2]]
													)
												);
								else {
									if (4 !== a.rank)
										throw new Error(
											'Gradient for tile operation is not implemented for rank-' +
												a.rank +
												' tensors yet.'
										);
									for (e = 0; e < s[0]; ++e)
										for (n = 0; n < s[1]; ++n)
											for (r = 0; r < s[2]; ++r)
												for (var o = 0; o < s[3]; ++o)
													t = t.add(
														i.slice(
															[
																e * a.shape[0],
																n * a.shape[1],
																r * a.shape[2],
																o * a.shape[3],
															],
															[a.shape[0], a.shape[1], a.shape[2], a.shape[3]]
														)
													);
								}
								return t;
							},
						};
					},
					'Tile',
					n,
					e
				);
			},
		}),
		Mr = xn({
			truncatedNormal_: function (t, e, n, r, o) {
				if (
					(void 0 === e && (e = 0),
					void 0 === n && (n = 1),
					null != r && 'bool' === r)
				)
					throw new Error('Unsupported data type ' + r);
				for (
					var i = new er(e, n, r, !0, o), a = sr(t, r), s = 0;
					s < a.values.length;
					s++
				)
					a.values[s] = i.nextValue();
				return a.toTensor();
			},
		}),
		Or = xn({
			unstack_: function (t, e) {
				void 0 === e && (e = 0), (e = e || 0);
				var n = sn(t, 'x', 'unstack');
				P(e >= -n.shape.length && e < n.shape.length, function () {
					return (
						'Axis = ' +
						e +
						' is not in [-' +
						n.shape.length +
						', ' +
						n.shape.length +
						')'
					);
				}),
					e < 0 && (e += n.shape.length);
				var r = { axis: e };
				return qt.runKernelFunc(
					function (t) {
						return t.unstack(n, e);
					},
					{ x: n },
					function (t) {
						return {
							x: function () {
								return Nr(t, e);
							},
						};
					},
					'Unpack',
					r
				);
			},
		});
	function Pr(t, e, n, r) {
		void 0 === r && (r = !0);
		var o = [];
		if (r)
			(o = o.concat(e.slice(0))).push(t[0] / n), (o = o.concat(t.slice(1)));
		else {
			o = o.concat(t[0]);
			for (var i = e.length, a = 0; a < i; ++a)
				o = o.concat([t[a + 1] / e[a], e[a]]);
			o = o.concat(t.slice(i + 1));
		}
		return o;
	}
	function Br(t, e, n) {
		void 0 === n && (n = !0);
		var r = [];
		if (n) {
			r.push(e);
			for (var o = e + 1; o < t; ++o)
				o <= 2 * e ? (r.push(o), r.push(o - (e + 1))) : r.push(o);
		} else {
			var i = [],
				a = [];
			for (o = 1; o < t; ++o)
				2 * e + 1 <= o || o % 2 == 1 ? a.push(o) : i.push(o);
			r.push.apply(r, i), r.push(0), r.push.apply(r, a);
		}
		return r;
	}
	function Lr(t, e, n, r) {
		void 0 === r && (r = !0);
		var o = [];
		r ? o.push(t[0] / n) : o.push(t[0] * n);
		for (var i = 1; i < t.length; ++i)
			i <= e.length
				? r
					? o.push(e[i - 1] * t[i])
					: o.push(t[i] / e[i - 1])
				: o.push(t[i]);
		return o;
	}
	function Wr(t, e) {
		for (var n = [0], r = 0; r < e; ++r) n.push(t[r][0]);
		return n;
	}
	function zr(t, e, n) {
		for (var r = t.slice(0, 1), o = 0; o < n; ++o)
			r.push(t[o + 1] - e[o][0] - e[o][1]);
		return r;
	}
	function Ur(t, e) {
		if (t.rank < 1)
			throw new Error(
				'tf.gatherND() expects the input to be rank 1 or higher, but the rank was ' +
					t.rank +
					'.'
			);
		if (e.rank < 1)
			throw new Error(
				'tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ' +
					e.rank +
					'.'
			);
		if ('int32' !== e.dtype)
			throw new Error(
				'tf.gatherND() expects the indices to be int32 type, but the dtype was ' +
					e.dtype +
					'.'
			);
		if (e.shape[e.rank - 1] > t.rank)
			throw new Error(
				'index innermost dimension length must be <= tensor rank; saw: ' +
					e.shape[e.rank - 1] +
					' vs. ' +
					t.rank
			);
		if (0 === t.size)
			throw new Error(
				'Requested more than 0 entries, but input is empty. Input shape: ' +
					t.shape +
					'.'
			);
		for (
			var n = e.shape, r = n[n.length - 1], o = 1, i = 0;
			i < n.length - 1;
			++i
		)
			o *= n[i];
		var a = t.shape,
			s = n.slice();
		s.pop();
		var u = 1;
		for (i = r; i < t.rank; ++i) (u *= a[i]), s.push(a[i]);
		var c = Y(t.shape)
			.map(function (t) {
				return t / u;
			})
			.concat([1])
			.slice(0, r);
		return [s, o, u, c];
	}
	var Vr = Object.freeze({ prepareAndValidate: Ur });
	function Gr(t) {
		return t <= 30 ? t : X(t, Math.floor(Math.sqrt(t)));
	}
	function Hr(t, e, n) {
		var r = 1 < e.rank ? e.shape[e.rank - 1] : 1,
			o = 1 < e.rank ? e.rank - 1 : 1,
			i =
				'Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ' +
				n.shape +
				', indices.shape: ' +
				e.shape +
				', shape: ' +
				t +
				', sliceDim: ' +
				r +
				', and batchDim: ' +
				o +
				'.';
		if (n.rank < o) throw new Error(i + ' update.rank < ' + o + '. ');
		if (t.length < r + (n.rank - o))
			throw new Error(i + ' Output shape length < ' + (r + (n.rank - o)));
		if (n.rank !== o + t.length - r)
			throw new Error(i + ' update.rank != ' + (o + t.length - r));
		for (var a = 0; a < o; ++a)
			if (n.shape[a] !== e.shape[a])
				throw new Error(
					i +
						' updates.shape[' +
						a +
						'] (' +
						n.shape[a] +
						') != indices.shape[' +
						a +
						'] (' +
						e.shape[a] +
						').'
				);
		for (a = 0; a < n.rank - o; ++a)
			if (n.shape[a + o] !== t[a + r])
				throw new Error(
					i +
						' updates.shape[' +
						(a + o) +
						'] (' +
						n.shape[a + o] +
						') != shape[' +
						(a + o) +
						'] (' +
						t[a + o] +
						')'
				);
	}
	function qr(t, e, n) {
		if (e.rank < 1)
			throw new Error(
				'tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ' +
					e.rank +
					'.'
			);
		if (t.rank < 1)
			throw new Error(
				'tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ' +
					t.rank +
					'.'
			);
		if ('int32' !== e.dtype)
			throw new Error(
				"The dtype of 'indices' should be int32, but got dtype: " + e.dtype
			);
		if (n.length < 1)
			throw new Error(
				'Output rank must be greater or equal to 1, but got shape: ' + n
			);
		if (0 === n.length) {
			if (0 === e.size)
				throw new Error(
					'Indices specified for empty output. indices shape: ' + e.shape
				);
			if (0 === t.size)
				throw new Error(
					'Updates specified for empty output. updates shape: ' + t.shape
				);
		}
		Hr(n, e, t);
	}
	function jr(t, e, n) {
		for (
			var r = e.shape.length,
				o = 1 < r ? e.shape[r - 1] : 1,
				i = n.length,
				a = 1,
				s = o;
			s < i;
			++s
		)
			a *= n[s];
		var u = o < 1 ? 1 : o;
		return {
			sliceRank: o,
			numUpdates: L(e.shape) / u,
			sliceSize: a,
			strides: Y(n.slice(0, o)).concat([1]),
			outputSize: L(n),
		};
	}
	var Kr = Object.freeze({
		validateUpdateShape: Hr,
		validateInput: qr,
		calculateShapes: jr,
	});
	function Xr(e, n, r) {
		P(e.rank === n.length, function () {
			return (
				'Error in slice' +
				e.rank +
				'D: Length of begin ' +
				n +
				' must match the rank of the array (' +
				e.rank +
				').'
			);
		}),
			P(e.rank === r.length, function () {
				return (
					'Error in slice' +
					e.rank +
					'D: Length of size ' +
					r +
					' must match the rank of the array (' +
					e.rank +
					').'
				);
			});
		for (
			var t = function (t) {
					P(n[t] + r[t] <= e.shape[t], function () {
						return (
							'Error in slice' +
							e.rank +
							'D: begin[' +
							t +
							'] + size[' +
							t +
							'] (' +
							(n[t] + r[t]) +
							') would overflow input.shape[' +
							t +
							'] (' +
							e.shape[t] +
							')'
						);
					});
				},
				o = 0;
			o < e.rank;
			++o
		)
			t(o);
	}
	function Yr(t) {
		for (var e = [], n = 0; 0 < t; ) 1 & t && e.push(n), (t /= 2), n++;
		return e;
	}
	function $r(t, e, n) {
		for (var r = [], o = 0; o < t.length; o++)
			r[o] = Math.ceil((e[o] - t[o]) / n[o]);
		return r;
	}
	function Jr(t, e, n, r, o) {
		var i = e[o],
			a = n[o] || 1;
		(t & (1 << o) || null == i) &&
			(i = 0 < a ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
		var s = r[o];
		return i < 0 && (i += s), d(0, i, s - 1);
	}
	function Qr(t, e, n, r, o) {
		var i = e[o],
			a = n[o] || 1;
		(t & (1 << o) || null == i) &&
			(i = 0 < a ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
		var s = r[o];
		return i < 0 && (i += s), 0 < a ? d(0, i, s) : d(-1, i, s - 1);
	}
	function Zr(t, e, n) {
		for (var r = n.length, o = 0; o < n.length; o++)
			if (1 < n[o]) {
				r = o;
				break;
			}
		for (o = r + 1; o < n.length; o++) if (0 < e[o] || n[o] !== t[o]) return !1;
		return !0;
	}
	function to(t, e) {
		for (
			var n = 0 < t.length ? t[t.length - 1] : 1, r = 0;
			r < t.length - 1;
			r++
		)
			n += t[r] * e[r];
		return n;
	}
	var eo = Object.freeze({
		assertParamsValid: Xr,
		maskToAxes: Yr,
		computeOutShape: $r,
		startForAxis: Jr,
		stopForAxis: Qr,
		isSliceContinous: Zr,
		computeFlatOffset: to,
	});
	function no(t, e) {
		P(K(t), function () {
			return 'The f passed in variableGrads(f) must be a function';
		}),
			P(
				null == e ||
					(Array.isArray(e) &&
						e.every(function (t) {
							return t instanceof Tt;
						})),
				function () {
					return 'The varList passed in variableGrads(f, varList) must be an array of variables';
				}
			);
		var n = null != e;
		if (!n)
			for (var r in ((e = []), qt.registeredVariables))
				e.push(qt.registeredVariables[r]);
		var o = n
				? e.filter(function (t) {
						return !t.trainable;
				  })
				: null,
			i = e.length;
		P(
			0 <
				(e = e.filter(function (t) {
					return t.trainable;
				})).length,
			function () {
				return (
					'variableGrads() expects at least one of the input variables to be trainable, but none of the ' +
					i +
					' variables is trainable.'
				);
			}
		);
		var a = qt.gradients(t, e, null, !0),
			s = a.value,
			u = a.grads;
		P(
			u.some(function (t) {
				return null != t;
			}),
			function () {
				return 'Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().';
			}
		),
			P(0 === s.rank, function () {
				return (
					'The f passed in variableGrads(f) must return a scalar, but it returned a rank-' +
					s.rank +
					' tensor'
				);
			});
		var c = {};
		return (
			e.forEach(function (t, e) {
				null != u[e] && (c[t.name] = u[e]);
			}),
			null != o &&
				o.forEach(function (t) {
					return (c[t.name] = null);
				}),
			{ value: s, grads: c }
		);
	}
	function ro(t) {
		return qt.customGrad(t);
	}
	function oo(t) {
		if (
			0 <
			t.filter(function (t) {
				return null == t;
			}).length
		)
			throw new Error(
				'Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.'
			);
	}
	var io = xn({
			softmax_: function (t, o) {
				void 0 === o && (o = -1);
				var e = sn(t, 'logits', 'softmax');
				if ((-1 === o && (o = e.rank - 1), o !== e.rank - 1))
					throw Error(
						'Softmax along a non-last dimension is not yet supported. Logits was rank ' +
							e.rank +
							' and dim was ' +
							o
					);
				return ro(function (t, e) {
					var n = t.logSumExp([o], !0),
						r = t.toFloat().sub(n).exp();
					return (
						e([r]),
						{
							value: r,
							gradFunc: function (t, e) {
								var n = e[0],
									r = t.mul(n);
								return r.sub(r.sum([o], !0).mul(n));
							},
						}
					);
				})(e);
			},
		}),
		ao = xn({
			logSoftmax_: function (t, i) {
				void 0 === i && (i = -1);
				var e = sn(t, 'logits', 'logSoftmax');
				if ((-1 === i && (i = e.rank - 1), i !== e.rank - 1))
					throw Error(
						'Log Softmax along a non-last dimension is not yet supported. Logits was rank ' +
							e.rank +
							' and axis was ' +
							i
					);
				return ro(function (t, e) {
					var n = t.max(i, !0),
						r = t.sub(n),
						o = r.toFloat().sub(r.exp().sum(i, !0).log());
					return (
						e([o]),
						{
							value: o,
							gradFunc: function (t, e) {
								var n = e[0].exp();
								return t.sub(t.sum(i, !0).mul(n));
							},
						}
					);
				})(e);
			},
		}),
		so =
			((lo.prototype.get = function (t) {
				return (
					this.data.has(t) || this.dataMover.moveData(this.backend, t),
					this.data.get(t)
				);
			}),
			(lo.prototype.set = function (t, e) {
				this.dataIdsCount++, this.data.set(t, e);
			}),
			(lo.prototype.has = function (t) {
				return this.data.has(t);
			}),
			(lo.prototype.delete = function (t) {
				return this.dataIdsCount--, this.data.delete(t);
			}),
			(lo.prototype.numDataIds = function () {
				return this.dataIdsCount;
			}),
			lo),
		uo =
			((co.prototype.time = function (t) {
				return ho('time');
			}),
			(co.prototype.read = function (t) {
				return ho('read');
			}),
			(co.prototype.readSync = function (t) {
				return ho('readSync');
			}),
			(co.prototype.numDataIds = function () {
				return ho('numDataIds');
			}),
			(co.prototype.disposeData = function (t) {
				return ho('disposeData');
			}),
			(co.prototype.write = function (t, e, n) {
				return ho('write');
			}),
			(co.prototype.move = function (t, e, n, r) {
				return ho('move');
			}),
			(co.prototype.memory = function () {
				return ho('memory');
			}),
			(co.prototype.floatPrecision = function () {
				return ho('floatPrecision');
			}),
			(co.prototype.epsilon = function () {
				return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
			}),
			(co.prototype.batchMatMul = function (t, e, n, r) {
				return ho('batchMatMul');
			}),
			(co.prototype.fusedBatchMatMul = function (t) {
				return (
					t.a,
					t.b,
					t.transposeA,
					t.transposeB,
					t.bias,
					t.activation,
					t.preluActivationWeights,
					ho('fusedBatchMatMul')
				);
			}),
			(co.prototype.slice = function (t, e, n) {
				return ho('slice');
			}),
			(co.prototype.stridedSlice = function (t, e, n, r) {
				return ho('stridedSlice');
			}),
			(co.prototype.unstack = function (t, e) {
				return ho('unstack');
			}),
			(co.prototype.reverse = function (t, e) {
				return ho('reverse');
			}),
			(co.prototype.concat = function (t, e) {
				return ho('concat');
			}),
			(co.prototype.neg = function (t) {
				return ho('neg');
			}),
			(co.prototype.add = function (t, e) {
				return ho('add');
			}),
			(co.prototype.addN = function (t) {
				return ho('addN');
			}),
			(co.prototype.subtract = function (t, e) {
				return ho('subtract');
			}),
			(co.prototype.multiply = function (t, e) {
				return ho('multiply');
			}),
			(co.prototype.realDivide = function (t, e) {
				return ho('realDivide');
			}),
			(co.prototype.floorDiv = function (t, e) {
				return ho('floorDiv');
			}),
			(co.prototype.sum = function (t, e) {
				return ho('sum');
			}),
			(co.prototype.prod = function (t, e) {
				return ho('prod');
			}),
			(co.prototype.unsortedSegmentSum = function (t, e, n) {
				return ho('unsortedSegmentSum');
			}),
			(co.prototype.argMin = function (t, e) {
				return ho('argMin');
			}),
			(co.prototype.argMax = function (t, e) {
				return ho('argMax');
			}),
			(co.prototype.equal = function (t, e) {
				return ho('equal');
			}),
			(co.prototype.notEqual = function (t, e) {
				return ho('notEqual');
			}),
			(co.prototype.less = function (t, e) {
				return ho('less');
			}),
			(co.prototype.lessEqual = function (t, e) {
				return ho('lessEqual');
			}),
			(co.prototype.greater = function (t, e) {
				return ho('greater');
			}),
			(co.prototype.greaterEqual = function (t, e) {
				return ho('greaterEqual');
			}),
			(co.prototype.logicalNot = function (t) {
				return ho('logicalNot');
			}),
			(co.prototype.logicalAnd = function (t, e) {
				return ho('logicalAnd');
			}),
			(co.prototype.logicalOr = function (t, e) {
				return ho('logicalOr');
			}),
			(co.prototype.where = function (t) {
				return ho('where');
			}),
			(co.prototype.select = function (t, e, n) {
				return ho('select');
			}),
			(co.prototype.topk = function (t, e, n) {
				return ho('topk');
			}),
			(co.prototype.min = function (t, e) {
				return ho('min');
			}),
			(co.prototype.minimum = function (t, e) {
				return ho('minimum');
			}),
			(co.prototype.mod = function (t, e) {
				return ho('mod');
			}),
			(co.prototype.max = function (t, e) {
				return ho('max');
			}),
			(co.prototype.maximum = function (t, e) {
				return ho('maximum');
			}),
			(co.prototype.all = function (t, e) {
				return ho('all');
			}),
			(co.prototype.any = function (t, e) {
				return ho('any');
			}),
			(co.prototype.squaredDifference = function (t, e) {
				return ho('squaredDifference');
			}),
			(co.prototype.ceil = function (t) {
				return ho('ceil');
			}),
			(co.prototype.floor = function (t) {
				return ho('floor');
			}),
			(co.prototype.round = function (t) {
				return ho('round');
			}),
			(co.prototype.sign = function (t) {
				return ho('sign');
			}),
			(co.prototype.isNaN = function (t) {
				return ho('isNaN');
			}),
			(co.prototype.isInf = function (t) {
				return ho('isInf');
			}),
			(co.prototype.isFinite = function (t) {
				return ho('isFinite');
			}),
			(co.prototype.pow = function (t, e) {
				return ho('pow');
			}),
			(co.prototype.exp = function (t) {
				return ho('exp');
			}),
			(co.prototype.expm1 = function (t) {
				return ho('expm1');
			}),
			(co.prototype.log = function (t) {
				return ho('log');
			}),
			(co.prototype.log1p = function (t) {
				return ho('log1p');
			}),
			(co.prototype.sqrt = function (t) {
				return ho('sqrt');
			}),
			(co.prototype.rsqrt = function (t) {
				return ho('rsqrt');
			}),
			(co.prototype.square = function (t) {
				return ho('square');
			}),
			(co.prototype.reciprocal = function (t) {
				return ho('reciprocal');
			}),
			(co.prototype.relu = function (t) {
				return ho('relu');
			}),
			(co.prototype.relu6 = function (t) {
				return ho('relu6');
			}),
			(co.prototype.prelu = function (t, e) {
				return ho('prelu');
			}),
			(co.prototype.elu = function (t) {
				return ho('elu');
			}),
			(co.prototype.eluDer = function (t, e) {
				return ho('eluDer');
			}),
			(co.prototype.selu = function (t) {
				return ho('selu');
			}),
			(co.prototype.int = function (t) {
				return ho('int');
			}),
			(co.prototype.clip = function (t, e, n) {
				return ho('clip');
			}),
			(co.prototype.abs = function (t) {
				return ho('abs');
			}),
			(co.prototype.complexAbs = function (t) {
				return ho('complexAbs');
			}),
			(co.prototype.sigmoid = function (t) {
				return ho('sigmoid');
			}),
			(co.prototype.softplus = function (t) {
				return ho('softplus');
			}),
			(co.prototype.sin = function (t) {
				return ho('sin');
			}),
			(co.prototype.cos = function (t) {
				return ho('cos');
			}),
			(co.prototype.tan = function (t) {
				return ho('tan');
			}),
			(co.prototype.asin = function (t) {
				return ho('asin');
			}),
			(co.prototype.acos = function (t) {
				return ho('acos');
			}),
			(co.prototype.atan = function (t) {
				return ho('atan');
			}),
			(co.prototype.atan2 = function (t, e) {
				return ho('atan2');
			}),
			(co.prototype.sinh = function (t) {
				return ho('sinh');
			}),
			(co.prototype.cosh = function (t) {
				return ho('cosh');
			}),
			(co.prototype.tanh = function (t) {
				return ho('tanh');
			}),
			(co.prototype.asinh = function (t) {
				return ho('asinh');
			}),
			(co.prototype.acosh = function (t) {
				return ho('acosh');
			}),
			(co.prototype.atanh = function (t) {
				return ho('atanh');
			}),
			(co.prototype.erf = function (t) {
				return ho('erf');
			}),
			(co.prototype.step = function (t, e) {
				return ho('step');
			}),
			(co.prototype.fusedConv2d = function (t) {
				return (
					t.input,
					t.filter,
					t.convInfo,
					t.bias,
					t.activation,
					t.preluActivationWeights,
					ho('fusedConv2d')
				);
			}),
			(co.prototype.conv2d = function (t, e, n) {
				return ho('conv2d');
			}),
			(co.prototype.conv2dDerInput = function (t, e, n) {
				return ho('conv2dDerInput');
			}),
			(co.prototype.conv2dDerFilter = function (t, e, n) {
				return ho('conv2dDerFilter');
			}),
			(co.prototype.fusedDepthwiseConv2D = function (t) {
				return (
					t.input,
					t.filter,
					t.convInfo,
					t.bias,
					t.activation,
					t.preluActivationWeights,
					ho('fusedDepthwiseConv2D')
				);
			}),
			(co.prototype.depthwiseConv2D = function (t, e, n) {
				return ho('depthwiseConv2D');
			}),
			(co.prototype.depthwiseConv2DDerInput = function (t, e, n) {
				return ho('depthwiseConv2DDerInput');
			}),
			(co.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
				return ho('depthwiseConv2DDerFilter');
			}),
			(co.prototype.conv3d = function (t, e, n) {
				return ho('conv3d');
			}),
			(co.prototype.conv3dDerInput = function (t, e, n) {
				return ho('conv3dDerInput');
			}),
			(co.prototype.conv3dDerFilter = function (t, e, n) {
				return ho('conv3dDerFilter');
			}),
			(co.prototype.maxPool = function (t, e) {
				return ho('maxPool');
			}),
			(co.prototype.maxPoolBackprop = function (t, e, n, r) {
				return ho('maxPoolBackprop');
			}),
			(co.prototype.avgPool = function (t, e) {
				return ho('avgPool');
			}),
			(co.prototype.avgPoolBackprop = function (t, e, n) {
				return ho('avgPoolBackprop');
			}),
			(co.prototype.avgPool3d = function (t, e) {
				return ho('avgPool3d');
			}),
			(co.prototype.avgPool3dBackprop = function (t, e, n) {
				return ho('avgPool3dBackprop');
			}),
			(co.prototype.maxPool3d = function (t, e) {
				return ho('maxPool3d');
			}),
			(co.prototype.maxPool3dBackprop = function (t, e, n, r) {
				return ho('maxPool3dBackprop');
			}),
			(co.prototype.reshape = function (t, e) {
				return ho('reshape');
			}),
			(co.prototype.cast = function (t, e) {
				return ho('cast');
			}),
			(co.prototype.tile = function (t, e) {
				return ho('tile');
			}),
			(co.prototype.pad = function (t, e, n) {
				return ho('pad');
			}),
			(co.prototype.transpose = function (t, e) {
				return ho('transpose');
			}),
			(co.prototype.gather = function (t, e, n) {
				return ho('gather');
			}),
			(co.prototype.gatherND = function (t, e) {
				return ho('gatherND');
			}),
			(co.prototype.scatterND = function (t, e, n) {
				return ho('scatterND');
			}),
			(co.prototype.batchToSpaceND = function (t, e, n) {
				return ho('batchToSpaceND');
			}),
			(co.prototype.spaceToBatchND = function (t, e, n) {
				return ho('spaceToBatchND');
			}),
			(co.prototype.resizeBilinear = function (t, e, n, r) {
				return ho('resizeBilinear');
			}),
			(co.prototype.resizeBilinearBackprop = function (t, e, n) {
				return ho('resizeBilinearBackprop');
			}),
			(co.prototype.resizeNearestNeighbor = function (t, e, n, r) {
				return ho('resizeNearestNeighbor');
			}),
			(co.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
				return ho('resizeNearestNeighborBackprop');
			}),
			(co.prototype.batchNormalization = function (t, e, n, r, o, i) {
				return ho('batchNormalization');
			}),
			(co.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
				return ho('localResponseNormalization4D');
			}),
			(co.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
				return ho('LRNGrad');
			}),
			(co.prototype.multinomial = function (t, e, n, r) {
				return ho('multinomial');
			}),
			(co.prototype.oneHot = function (t, e, n, r) {
				return ho('oneHot');
			}),
			(co.prototype.cumsum = function (t, e, n, r) {
				return ho('cumsum');
			}),
			(co.prototype.nonMaxSuppression = function (t, e, n, r, o) {
				return ho('nonMaxSuppression');
			}),
			(co.prototype.fft = function (t) {
				return ho('fft');
			}),
			(co.prototype.ifft = function (t) {
				return ho('ifft');
			}),
			(co.prototype.complex = function (t, e) {
				return ho('complex');
			}),
			(co.prototype.real = function (t) {
				return ho('real');
			}),
			(co.prototype.imag = function (t) {
				return ho('imag');
			}),
			(co.prototype.cropAndResize = function (t, e, n, r, o, i) {
				return ho('cropAndResize');
			}),
			(co.prototype.depthToSpace = function (t, e, n) {
				return ho('depthToSpace');
			}),
			(co.prototype.split = function (t, e, n) {
				return ho('split');
			}),
			(co.prototype.sparseToDense = function (t, e, n, r) {
				return ho('sparseToDense');
			}),
			(co.prototype.diag = function (t) {
				return ho('diag');
			}),
			(co.prototype.fill = function (t, e, n) {
				return ho('fill');
			}),
			(co.prototype.onesLike = function (t) {
				return ho('onesLike');
			}),
			(co.prototype.zerosLike = function (t) {
				return ho('zerosLike');
			}),
			(co.prototype.linspace = function (t, e, n) {
				return ho('linspace');
			}),
			(co.prototype.dispose = function () {
				return ho('dispose');
			}),
			co);
	function co() {}
	function lo(t, e) {
		(this.backend = t),
			(this.dataMover = e),
			(this.data = new WeakMap()),
			(this.dataIdsCount = 0);
	}
	function ho(t) {
		throw new Error(
			"'" +
				t +
				"' not yet implemented or not found in the registry. Did you forget to import the kernel?"
		);
	}
	function po(t, e) {
		for (var n = t.length, r = [], o = 0; o < n; o++) {
			var i = n - 1 - o,
				a = t[i] || 1;
			1 < (e[e.length - 1 - o] || 1) && 1 === a && r.unshift(i);
		}
		return r;
	}
	function fo(t, e) {
		for (var n = [], r = 0; r < e.length; r++) {
			var o = t[t.length - r - 1],
				i = e.length - r - 1,
				a = e[i];
			(null == o || (1 === o && 1 < a)) && n.unshift(i);
		}
		return n;
	}
	function vo(t, e) {
		for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
			var i = t[t.length - o - 1];
			null == i && (i = 1);
			var a = e[e.length - o - 1];
			if ((null == a && (a = 1), 1 === i)) n.unshift(a);
			else if (1 === a) n.unshift(i);
			else {
				if (i !== a)
					throw Error(
						'Operands could not be broadcast together with shapes ' +
							t +
							' and ' +
							e +
							'.'
					);
				n.unshift(i);
			}
		}
		return n;
	}
	function mo(t, e, n, r, o, i, a) {
		void 0 === a && (a = 'channelsLast');
		var s,
			u = wo(e),
			c = u[0],
			l = u[1];
		if ('channelsLast' === a) s = [c, l, t[3], t[3]];
		else {
			if ('channelsFirst' !== a) throw new Error('Unknown dataFormat ' + a);
			s = [c, l, t[1], t[1]];
		}
		return yo(t, s, n, r, o, i, !1, a);
	}
	function go(t, e, n, r, o, i, a) {
		void 0 === a && (a = 'NDHWC');
		var s,
			u,
			c = Co(e),
			l = c[0],
			h = c[1],
			p = c[2];
		if ('NDHWC' === a) (u = 'channelsLast'), (s = [l, h, p, t[4], t[4]]);
		else {
			if ('NCDHW' !== a) throw new Error('Unknown dataFormat ' + a);
			(u = 'channelsFirst'), (s = [l, h, p, t[1], t[1]]);
		}
		return xo(t, s, n, r, o, !1, u, i);
	}
	function yo(t, e, n, r, o, m, i, a) {
		void 0 === i && (i = !1), void 0 === a && (a = 'channelsLast');
		var s = [-1, -1, -1, -1],
			u = s[0],
			c = s[1],
			l = s[2],
			h = s[3];
		if ('channelsLast' === a) (u = t[0]), (c = t[1]), (l = t[2]), (h = t[3]);
		else {
			if ('channelsFirst' !== a) throw new Error('Unknown dataFormat ' + a);
			(u = t[0]), (h = t[1]), (c = t[2]), (l = t[3]);
		}
		var p,
			f = e[0],
			d = e[1],
			v = e[3],
			g = wo(n),
			y = g[0],
			x = g[1],
			b = wo(r),
			w = b[0],
			C = b[1],
			E = Eo(f, w),
			_ = Eo(d, C),
			I = (function (t, e, n, r, o, i, a) {
				var s, u, c;
				if ('number' == typeof t) {
					s = {
						top: t,
						bottom: t,
						left: t,
						right: t,
						type: 0 === t ? 'VALID' : 'NUMBER',
					};
					var l = (function (t, e, n, r, o) {
						null == r && (r = bo(t, e, n));
						var i = t[1],
							a = _o((t[0] - e + 2 * r) / n + 1, o);
						P(B(a), function () {
							return (
								'The output # of rows (' +
								a +
								') must be an integer. Change the stride and/or zero pad parameters'
							);
						});
						var s = _o((i - e + 2 * r) / n + 1, o);
						return (
							P(B(s), function () {
								return (
									'The output # of columns (' +
									s +
									') must be an integer. Change the stride and/or zero pad parameters'
								);
							}),
							[a, s]
						);
					})([e, n], i, r, t, m);
					(u = l[0]), (c = l[1]);
				} else if ('same' === t) {
					(u = Math.ceil(e / r)), (c = Math.ceil(n / o));
					var h = Math.max(0, (u - 1) * r + i - e),
						p = Math.max(0, (c - 1) * o + a - n),
						f = Math.floor(h / 2),
						d = h - f,
						v = Math.floor(p / 2);
					s = { top: f, bottom: d, left: v, right: p - v, type: 'SAME' };
				} else {
					if ('valid' !== t) throw Error('Unknown padding parameter: ' + t);
					(s = { top: 0, bottom: 0, left: 0, right: 0, type: 'VALID' }),
						(u = Math.ceil((e - i + 1) / r)),
						(c = Math.ceil((n - a + 1) / o));
				}
				return { padInfo: s, outHeight: u, outWidth: c };
			})(o, c, l, y, x, E, _),
			R = I.padInfo,
			k = I.outHeight,
			S = I.outWidth,
			D = i ? v * h : v;
		return (
			'channelsFirst' === a
				? (p = [u, D, k, S])
				: 'channelsLast' === a && (p = [u, k, S, D]),
			{
				batchSize: u,
				dataFormat: a,
				inHeight: c,
				inWidth: l,
				inChannels: h,
				outHeight: k,
				outWidth: S,
				outChannels: D,
				padInfo: R,
				strideHeight: y,
				strideWidth: x,
				filterHeight: f,
				filterWidth: d,
				effectiveFilterHeight: E,
				effectiveFilterWidth: _,
				dilationHeight: w,
				dilationWidth: C,
				inShape: t,
				outShape: p,
				filterShape: e,
			}
		);
	}
	function xo(t, e, n, r, o, i, a, E) {
		void 0 === i && (i = !1), void 0 === a && (a = 'channelsLast');
		var s = [-1, -1, -1, -1, -1],
			u = s[0],
			c = s[1],
			l = s[2],
			h = s[3],
			p = s[4];
		if ('channelsLast' === a)
			(u = t[0]), (c = t[1]), (l = t[2]), (h = t[3]), (p = t[4]);
		else {
			if ('channelsFirst' !== a) throw new Error('Unknown dataFormat ' + a);
			(u = t[0]), (p = t[1]), (c = t[2]), (l = t[3]), (h = t[4]);
		}
		var f,
			d = e[0],
			v = e[1],
			m = e[2],
			g = e[4],
			y = Co(n),
			x = y[0],
			b = y[1],
			w = y[2],
			C = Co(r),
			_ = C[0],
			I = C[1],
			R = C[2],
			k = Eo(d, _),
			S = Eo(v, I),
			D = Eo(m, R),
			A = (function (t, e, n, r, o, i, a, s, u, c) {
				var l, h, p, f;
				if ('number' == typeof t) {
					l = {
						top: t,
						bottom: t,
						left: t,
						right: t,
						front: t,
						back: t,
						type: 0 === t ? 'VALID' : 'NUMBER',
					};
					var d = (function (t, e, n, r, o, i) {
						null == o && (o = bo(t, e, r));
						var a = t[1],
							s = t[2],
							u = _o((t[0] - e + 2 * o) / r + 1, i);
						P(B(u), function () {
							return (
								'The output # of depths (' +
								u +
								') must be an integer. Change the stride and/or zero pad parameters'
							);
						});
						var c = _o((a - e + 2 * o) / r + 1, i);
						P(B(c), function () {
							return (
								'The output # of rows (' +
								c +
								') must be an integer. Change the stride and/or zero pad parameters'
							);
						});
						var l = _o((s - e + 2 * o) / r + 1, i);
						return (
							P(B(l), function () {
								return (
									'The output # of columns (' +
									l +
									') must be an integer. Change the stride and/or zero pad parameters'
								);
							}),
							[u, c, l, 1]
						);
					})([e, n, r, 1], s, 0, o, t, E);
					(h = d[0]), (p = d[1]), (f = d[2]);
				} else if ('same' === t) {
					var v = ((h = Math.ceil(e / o)) - 1) * o + s - e,
						m = ((p = Math.ceil(n / i)) - 1) * i + u - n,
						g = ((f = Math.ceil(r / a)) - 1) * a + c - r,
						y = Math.floor(v / 2),
						x = v - y,
						b = Math.floor(m / 2),
						w = m - b,
						C = Math.floor(g / 2);
					l = {
						top: b,
						bottom: w,
						left: C,
						right: g - C,
						front: y,
						back: x,
						type: 'SAME',
					};
				} else {
					if ('valid' !== t) throw Error('Unknown padding parameter: ' + t);
					(l = {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						front: 0,
						back: 0,
						type: 'VALID',
					}),
						(h = Math.ceil((e - s + 1) / o)),
						(p = Math.ceil((n - u + 1) / i)),
						(f = Math.ceil((r - c + 1) / a));
				}
				return { padInfo: l, outDepth: h, outHeight: p, outWidth: f };
			})(o, c, l, h, x, b, w, k, S, D),
			T = A.padInfo,
			N = A.outDepth,
			F = A.outHeight,
			M = A.outWidth,
			O = i ? g * p : g;
		return (
			'channelsFirst' === a
				? (f = [u, O, N, F, M])
				: 'channelsLast' === a && (f = [u, N, F, M, O]),
			{
				batchSize: u,
				dataFormat: a,
				inDepth: c,
				inHeight: l,
				inWidth: h,
				inChannels: p,
				outDepth: N,
				outHeight: F,
				outWidth: M,
				outChannels: O,
				padInfo: T,
				strideDepth: x,
				strideHeight: b,
				strideWidth: w,
				filterDepth: d,
				filterHeight: v,
				filterWidth: m,
				effectiveFilterDepth: k,
				effectiveFilterHeight: S,
				effectiveFilterWidth: D,
				dilationDepth: _,
				dilationHeight: I,
				dilationWidth: R,
				inShape: t,
				outShape: f,
				filterShape: e,
			}
		);
	}
	function bo(t, e, n, r) {
		void 0 === r && (r = 1);
		var o = Eo(e, r);
		return Math.floor((t[0] * (n - 1) - n + o) / 2);
	}
	function wo(t) {
		return 'number' == typeof t
			? [t, t, t]
			: 2 === t.length
			? [t[0], t[1], 1]
			: t;
	}
	function Co(t) {
		return 'number' == typeof t ? [t, t, t] : t;
	}
	function Eo(t, e) {
		return e <= 1 ? t : t + (t - 1) * (e - 1);
	}
	function _o(t, e) {
		if (!e) return t;
		switch (e) {
			case 'round':
				return Math.round(t);
			case 'ceil':
				return Math.ceil(t);
			case 'floor':
				return Math.floor(t);
			default:
				throw new Error('Unknown roundingMode ' + e);
		}
	}
	function Io(t) {
		var e = wo(t),
			n = e[0],
			r = e[1],
			o = e[2];
		return 1 === n && 1 === r && 1 === o;
	}
	function Ro(t, e) {
		return Io(t) || Io(e);
	}
	function ko(t) {
		if ('NHWC' === t) return 'channelsLast';
		if ('NCHW' === t) return 'channelsFirst';
		throw new Error('Unknown dataFormat ' + t);
	}
	function So(t, e, n) {
		if ('complex64' === e) {
			if ('complex64' === t.dtype) return t.clone();
			var r = Mn(t.shape),
				o = t.toFloat(),
				i = n.complex(o, r);
			return r.dispose(), o.dispose(), i;
		}
		if (!W(t.dtype, e)) return qt.makeTensorFromDataId(t.dataId, t.shape, e);
		if ('complex64' === t.dtype) {
			var a = n.real(t);
			return (i = a.cast(e)), a.dispose(), i;
		}
		if ('int32' === e) return n.int(t);
		if ('bool' !== e)
			throw new Error('Error in Cast: failed to cast ' + t.dtype + ' to ' + e);
		var s = In(0, t.dtype);
		return (i = n.notEqual(t, s)), s.dispose(), i;
	}
	function Do(t, e) {
		return qt.makeTensorFromDataId(t.dataId, e, t.dtype);
	}
	function Ao(t, e, n) {
		var r = (e - t) / (n - 1),
			o = Z(n, 'float32');
		o[0] = t;
		for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + r;
		return Rn(o, 'float32');
	}
	var To = Object.freeze({
		castTensor: So,
		reshapeTensor: Do,
		linspaceImpl: Ao,
		upcastType: Mt,
		axesAreInnerMostDims: cn,
		combineLocations: ln,
		computeOutAndReduceShapes: hn,
		expandShapeToKeepDim: pn,
		assertAxesAreInnerMostDims: fn,
		getAxesPermutation: dn,
		getUndoAxesPermutation: vn,
		getInnerMostAxes: mn,
		getBroadcastDims: po,
		getReductionAxes: fo,
		assertAndGetBroadcastShape: vo,
		assertParamsConsistent: gn,
		computeOutShape: yn,
		computePool2DInfo: mo,
		computePool3DInfo: go,
		computeConv2DInfo: yo,
		computeConv3DInfo: xo,
		computeDefaultPad: bo,
		tupleValuesAreOne: Io,
		eitherStridesOrDilationsAreOne: Ro,
		convertConv2DDataFormat: ko,
		PARALLELIZE_THRESHOLD: 30,
		computeOptimalWindowSize: Gr,
	});
	function No(t, e) {
		if (t.length !== e.length)
			throw new Error(
				'Cannot merge real and imag arrays of different lengths. real:' +
					t.length +
					', imag: ' +
					e.length +
					'.'
			);
		for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2)
			(n[r] = t[r / 2]), (n[r + 1] = e[r / 2]);
		return n;
	}
	function Fo(t, e) {
		return { real: t[2 * e], imag: t[2 * e + 1] };
	}
	function Mo(t, e) {
		return e < t ? 1 : t < e ? -1 : 0;
	}
	function Oo(t, e, n, r, o) {
		return Bo(t, e, n, r, o, 0).selectedIndices;
	}
	function Po(t, e, n, r, o, i) {
		var a = Bo(t, e, n, r, o, i);
		return (
			a.numValidOutputs.dispose(),
			{ selectedIndices: a.selectedIndices, selectedScores: a.selectedScores }
		);
	}
	function Bo(t, e, n, r, o, i, a, s) {
		void 0 === s && (s = !1);
		for (
			var u = Array.from(e)
					.map(function (t, e) {
						return { score: t, boxIndex: e, suppressBeginIndex: 0 };
					})
					.filter(function (t) {
						return t.score > o;
					})
					.sort(Wo),
				c = 0 < i ? -0.5 / i : 0,
				l = [],
				h = [];
			l.length < n && 0 < u.length;

		) {
			var p = u.pop(),
				f = p.score,
				d = p.boxIndex,
				v = p.suppressBeginIndex;
			if (f < o) break;
			for (var m = !1, g = l.length - 1; v <= g; --g) {
				var y = Lo(t, d, l[g]);
				if (r <= y) {
					m = !0;
					break;
				}
				if (
					((p.score =
						p.score *
						((E = r),
						(_ = c),
						(I = y),
						void 0,
						(R = Math.exp(_ * I * I)),
						I <= E ? R : 0)),
					p.score <= o)
				)
					break;
			}
			(p.suppressBeginIndex = l.length),
				m ||
					(p.score === f
						? (l.push(d), h.push(p.score))
						: p.score > o &&
						  (void 0,
						  (w = (function (t, e, n) {
								for (var r = 0, o = t.length, i = 0, a = !1; r < o; ) {
									var s = n(e, t[(i = r + ((o - r) >>> 1))]);
									0 < s ? (r = i + 1) : ((o = i), (a = !s));
								}
								return a ? r : -r - 1;
						  })((x = u), (b = p), Wo || Mo)),
						  (C = w < 0 ? -(w + 1) : w),
						  x.splice(C, 0, b)));
		}
		var x,
			b,
			w,
			C,
			E,
			_,
			I,
			R,
			k = l.length;
		return (
			s && (l.fill(0, k), h.fill(0, k)),
			{
				selectedIndices: Rn(l, 'int32'),
				selectedScores: Rn(h, 'float32'),
				numValidOutputs: In(k, 'int32'),
			}
		);
	}
	function Lo(t, e, n) {
		var r = t.subarray(4 * e, 4 * e + 4),
			o = t.subarray(4 * n, 4 * n + 4),
			i = Math.min(r[0], r[2]),
			a = Math.min(r[1], r[3]),
			s = Math.max(r[0], r[2]),
			u = Math.max(r[1], r[3]),
			c = Math.min(o[0], o[2]),
			l = Math.min(o[1], o[3]),
			h = Math.max(o[0], o[2]),
			p = Math.max(o[1], o[3]),
			f = (s - i) * (u - a),
			d = (h - c) * (p - l);
		if (f <= 0 || d <= 0) return 0;
		var v = Math.max(i, c),
			m = Math.max(a, l),
			g = Math.min(s, h),
			y = Math.min(u, p),
			x = Math.max(g - v, 0) * Math.max(y - m, 0);
		return x / (f + d - x);
	}
	function Wo(t, e) {
		return (
			t.score - e.score || (t.score === e.score && e.boxIndex - t.boxIndex)
		);
	}
	function zo(n, t, r) {
		var o = new Array(n.rank).fill(0),
			i = n.shape.slice();
		return t.map(function (t) {
			i[r] = t;
			var e = n.slice(o, i);
			return (o[r] += t), e;
		});
	}
	function Uo(t, e) {
		for (var n = new Array(t.rank), r = 0; r < n.length; r++)
			n[r] = t.shape[r] * e[r];
		var o = sr(n, t.dtype);
		for (r = 0; r < o.values.length; ++r) {
			for (
				var i = o.indexToLoc(r), a = new Array(t.rank), s = 0;
				s < a.length;
				s++
			)
				a[s] = i[s] % t.shape[s];
			var u = t.locToIndex(a);
			o.values[r] = t.values[u];
		}
		return o.toTensor();
	}
	function Vo(t, e, n, r) {
		for (
			var o = e[e.length - 1],
				i = [t.length / o, o],
				a = i[0],
				s = i[1],
				u = N(n, a * r),
				c = N('int32', a * r),
				l = 0;
			l < a;
			l++
		) {
			for (
				var h = l * s, p = t.subarray(h, h + s), f = [], d = 0;
				d < p.length;
				d++
			)
				f.push({ value: p[d], index: d });
			f.sort(function (t, e) {
				return e.value - t.value;
			});
			var v = l * r,
				m = u.subarray(v, v + r),
				g = c.subarray(v, v + r);
			for (d = 0; d < r; d++) (m[d] = f[d].value), (g[d] = f[d].index);
		}
		var y = e.slice();
		return (y[y.length - 1] = r), [En(u, y, n), En(c, y, 'int32')];
	}
	function Go(t, e) {
		for (var n = [], r = 0; r < e.length; r++) e[r] && n.push(r);
		var o = sr(t, 'int32'),
			i = sr([n.length, t.length], 'int32');
		for (r = 0; r < n.length; r++) {
			var a = o.indexToLoc(n[r]),
				s = r * t.length;
			i.values.set(a, s);
		}
		return i.toTensor();
	}
	function Ho(t, e) {
		(this.outputShape = []),
			(this.outputShape = t),
			(this.variableNames = e.map(function (t, e) {
				return 'T' + e;
			}));
		var n = [];
		this.variableNames.forEach(function (t) {
			n.push('float v' + t + ' = get' + t + 'AtOutCoords();');
		});
		var r = this.variableNames
			.map(function (t) {
				return 'v' + t;
			})
			.join(' + ');
		this.userCode =
			'\n      void main() {\n        ' +
			n.join('\n        ') +
			'\n\n        float result = ' +
			r +
			';\n        setOutput(result);\n      }\n    ';
	}
	function qo(t, e) {
		(this.outputShape = []),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t),
			(this.variableNames = e.map(function (t, e) {
				return 'T' + e;
			}));
		var n = [];
		this.variableNames.forEach(function (t) {
			n.push('vec4 v' + t + ' = get' + t + 'AtOutCoords();');
		});
		var r = this.variableNames
			.map(function (t) {
				return 'v' + t;
			})
			.join(' + ');
		this.userCode =
			'\n      void main() {\n        ' +
			n.join('\n        ') +
			'\n\n        vec4 result = ' +
			r +
			';\n        setOutput(result);\n      }\n    ';
	}
	function jo(t, e, n) {
		this.variableNames = ['A'];
		var r = t.windowSize,
			o = t.batchSize,
			i = t.inSize,
			a = Math.ceil(i / r);
		n || this.variableNames.push('bestIndicesA'), (this.outputShape = [o, a]);
		var s = 'max' === e ? '>' : '<',
			u = n ? 'inOffset + i;' : 'round(getBestIndicesA(batch, inOffset + i));';
		this.userCode =
			'\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ' +
			r +
			';\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < ' +
			r +
			'; i++) {\n          int inIdx = ' +
			u +
			';\n          float candidate = getA(batch, inIdx);\n          if (candidate ' +
			s +
			' bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ';
	}
	function Ko(e, t) {
		return ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, t).map(function (t) {
			return e + '.' + t;
		});
	}
	function Xo(t, e) {
		return 1 === e ? [t] : Ko(t, e);
	}
	function Yo() {
		var t, e, n, r, o, i, a, s, u, c;
		return (
			(c =
				2 === _().getNumber('WEBGL_VERSION')
					? ((t = '#version 300 es'),
					  (n = 'out'),
					  (r = e = 'in'),
					  (o = 'texture'),
					  (i = 'outputColor'),
					  (a = 'out vec4 outputColor;'),
					  (s =
							'\n      bool isnan_custom(float val) {\n        return (val > 0.0 || val < 0.0) ? false : val != 0.0;\n      }\n\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan_custom(val.x),\n          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));\n      }\n\n      #define isnan(value) isnan_custom(value)\n    '),
					  (u = ''),
					  '\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ')
					: ((e = 'attribute'),
					  (r = n = 'varying'),
					  (o = 'texture2D'),
					  (i = 'gl_FragColor'),
					  (a = t = ''),
					  (s =
							'\n      #define isnan(value) isnan_custom(value)\n      bool isnan_custom(float val) {\n        return (val > 0. || val < 1. || val == 0.) ? false : true;\n      }\n      bvec4 isnan_custom(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    '),
					  (u =
							'\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    '),
					  '\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ')),
			{
				version: t,
				attribute: e,
				varyingVs: n,
				varyingFs: r,
				texture2D: o,
				output: i,
				defineOutput: a,
				defineSpecialNaN: s,
				defineSpecialInf: u,
				defineRound: c,
			}
		);
	}
	function $o(n, t, r) {
		void 0 === r && (r = 'index');
		var o = Y(t);
		return o
			.map(function (t, e) {
				return (
					'int ' +
					n[e] +
					' = ' +
					r +
					' / ' +
					t +
					'; ' +
					(e === o.length - 1
						? 'int ' + n[e + 1] + ' = ' + r + ' - ' + n[e] + ' * ' + t
						: 'index -= ' + n[e] + ' * ' + t) +
					';'
				);
			})
			.join('');
	}
	function Jo(t) {
		var e = Y(t).map(function (t) {
			return t.toString();
		});
		return (
			'\n  int getFlatIndex(ivec3 coords) {\n    return coords.x * ' +
			e[0] +
			' + coords.y * ' +
			e[1] +
			' + coords.z;\n  }\n'
		);
	}
	var Qo =
		'\n  const float FLOAT_MAX = 1.70141184e38;\n  const float FLOAT_MIN = 1.17549435e-38;\n\n  lowp vec4 encode_float(highp float v) {\n    if (isnan(v)) {\n      return vec4(255, 255, 255, 255);\n    }\n\n    highp float av = abs(v);\n\n    if(av < FLOAT_MIN) {\n      return vec4(0.0, 0.0, 0.0, 0.0);\n    } else if(v > FLOAT_MAX) {\n      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n    } else if(v < -FLOAT_MAX) {\n      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n    }\n\n    highp vec4 c = vec4(0,0,0,0);\n\n    highp float e = floor(log2(av));\n    highp float m = exp2(fract(log2(av))) - 1.0;\n\n    c[2] = floor(128.0 * m);\n    m -= c[2] / 128.0;\n    c[1] = floor(32768.0 * m);\n    m -= c[1] / 32768.0;\n    c[0] = floor(8388608.0 * m);\n\n    highp float ebias = e + 127.0;\n    c[3] = floor(ebias / 2.0);\n    ebias -= c[3] * 2.0;\n    c[2] += floor(ebias) * 128.0;\n\n    c[3] += 128.0 * step(0.0, -v);\n\n    return c / 255.0;\n  }\n';
	function Zo(t, e, n, r) {
		var o = [];
		t.forEach(function (t) {
			var e = L(t.shapeInfo.logicalShape);
			t.shapeInfo.isUniform
				? o.push('uniform float ' + t.name + (1 < e ? '[' + e + ']' : '') + ';')
				: (o.push('uniform sampler2D ' + t.name + ';'),
				  o.push('uniform int offset' + t.name + ';'));
		});
		var i,
			a,
			s,
			u = o.join('\n'),
			c = t
				.map(function (t) {
					return (function (t, e, n) {
						void 0 === n && (n = !1);
						var r = '';
						r += n
							? (function f(t) {
									var e, n, r;
									switch (t.shapeInfo.logicalShape.length) {
										case 0:
											return (
												(e = t.name),
												(n = 'get' + e.charAt(0).toUpperCase() + e.slice(1)),
												(r = Yo()),
												'\n    vec4 ' +
													n +
													'() {\n      return ' +
													r.texture2D +
													'(' +
													e +
													', halfCR);\n    }\n  '
											);
										case 1:
											return (function (t) {
												var e = t.name,
													n = 'get' + e.charAt(0).toUpperCase() + e.slice(1),
													r = t.shapeInfo.texShape,
													o = [Math.ceil(r[0] / 2), Math.ceil(r[1] / 2)],
													i = Yo();
												return (
													'\n    vec4 ' +
													n +
													'(int index) {\n      vec2 uv = packedUVfrom1D(\n        ' +
													o[0] +
													', ' +
													o[1] +
													', index);\n      return ' +
													i.texture2D +
													'(' +
													e +
													', uv);\n    }\n  '
												);
											})(t);
										case 2:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = t.shapeInfo.texShape,
													i = o[0],
													a = o[1],
													s = Yo();
												if (null != o && D(e, o))
													return (
														'\n      vec4 ' +
														r +
														'(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(' +
														a +
														'.0, ' +
														i +
														'.0);\n\n        return ' +
														s.texture2D +
														'(' +
														n +
														', uv);\n      }\n    '
													);
												var u = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)],
													c = Math.ceil(e[1] / 2);
												return (
													'\n    vec4 ' +
													r +
													'(int row, int col) {\n      vec2 uv = packedUVfrom2D(' +
													c +
													', ' +
													u[0] +
													', ' +
													u[1] +
													', row, col);\n      return ' +
													s.texture2D +
													'(' +
													n +
													', uv);\n    }\n  '
												);
											})(t);
										case 3:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = t.shapeInfo.texShape,
													i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
												if (1 === e[0]) {
													var a = e.slice(1),
														s = ri(t, a);
													return (
														'\n        ' +
														f(s) +
														'\n        vec4 ' +
														r +
														'(int b, int row, int col) {\n          return ' +
														r +
														'(' +
														oi(['b', 'row', 'col'], [1, 2]) +
														');\n        }\n      '
													);
												}
												var u = i[0],
													c = i[1],
													l = Math.ceil(e[2] / 2),
													h = l * Math.ceil(e[1] / 2),
													p = Yo();
												return (
													'\n    vec4 ' +
													r +
													'(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        ' +
													u +
													', ' +
													c +
													', ' +
													h +
													', ' +
													l +
													', b, row, col);\n      return ' +
													p.texture2D +
													'(' +
													n +
													', uv);\n    }\n  '
												);
											})(t);
										default:
											return (function (t) {
												for (
													var e = t.shapeInfo.logicalShape,
														n = e.length,
														r = t.name,
														o = 'get' + r.charAt(0).toUpperCase() + r.slice(1),
														i = t.shapeInfo.texShape,
														a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)],
														s = a[0],
														u = a[1],
														c = Math.ceil(e[n - 1] / 2),
														l = c * Math.ceil(e[n - 2] / 2),
														h = 'int b, int row, int col',
														p =
															'b * ' +
															l +
															' + (row / 2) * ' +
															c +
															' + (col / 2)',
														f = 2;
													f < n - 1;
													f++
												)
													(h = 'int b' + f + ', ' + h),
														(l *= e[n - f - 1]),
														(p = 'b' + f + ' * ' + l + ' + ' + p);
												var d = Yo();
												return (
													'\n    vec4 ' +
													o +
													'(' +
													h +
													') {\n      int index = ' +
													p +
													';\n      int texR = index / ' +
													u +
													';\n      int texC = index - texR * ' +
													u +
													';\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(' +
													u +
													', ' +
													s +
													');\n      return ' +
													d.texture2D +
													'(' +
													r +
													', uv);\n    }\n  '
												);
											})(t);
									}
							  })(t)
							: (function y(t) {
									var e = t.shapeInfo.logicalShape;
									switch (e.length) {
										case 0:
											return (function (t) {
												var e = t.name,
													n = 'get' + e.charAt(0).toUpperCase() + e.slice(1);
												if (t.shapeInfo.isUniform)
													return 'float ' + n + '() {return ' + e + ';}';
												var r = t.shapeInfo.texShape,
													o = r[0],
													i = r[1];
												if (1 === o && 1 === i)
													return (
														'\n      float ' +
														n +
														'() {\n        return sampleTexture(' +
														e +
														', halfCR);\n      }\n    '
													);
												var a = t.shapeInfo.texShape,
													s = a[0],
													u = a[1],
													c = ti(e);
												return (
													'\n    float ' +
													n +
													'() {\n      vec2 uv = uvFromFlat(' +
													s +
													', ' +
													u +
													', ' +
													c +
													');\n      return sampleTexture(' +
													e +
													', uv);\n    }\n  '
												);
											})(t);
										case 1:
											return (function (t) {
												var e = t.name,
													n = 'get' + e.charAt(0).toUpperCase() + e.slice(1);
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														n +
														'(int index) {\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var r = t.shapeInfo.texShape,
													o = r[0],
													i = r[1];
												if (1 === i && 1 === o)
													return (
														'\n      float ' +
														n +
														'(int index) {\n        return sampleTexture(' +
														e +
														', halfCR);\n      }\n    '
													);
												var a = ti(e);
												return 1 === i
													? '\n      float ' +
															n +
															'(int index) {\n        vec2 uv = vec2(0.5, (float(index + ' +
															a +
															') + 0.5) / ' +
															o +
															'.0);\n        return sampleTexture(' +
															e +
															', uv);\n      }\n    '
													: 1 === o
													? '\n      float ' +
													  n +
													  '(int index) {\n        vec2 uv = vec2((float(index + ' +
													  a +
													  ') + 0.5) / ' +
													  i +
													  '.0, 0.5);\n        return sampleTexture(' +
													  e +
													  ', uv);\n      }\n    '
													: '\n    float ' +
													  n +
													  '(int index) {\n      vec2 uv = uvFromFlat(' +
													  o +
													  ', ' +
													  i +
													  ', index + ' +
													  a +
													  ');\n      return sampleTexture(' +
													  e +
													  ', uv);\n    }\n  ';
											})(t);
										case 2:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = t.shapeInfo.texShape;
												if (null != o && D(e, o)) {
													var i = o[0],
														a = o[1];
													return (
														'\n    float ' +
														r +
														'(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(' +
														a +
														'.0, ' +
														i +
														'.0);\n      return sampleTexture(' +
														n +
														', uv);\n    }\n  '
													);
												}
												var s = T(e),
													u = s.newShape,
													c = s.keptDims,
													l = u;
												if (l.length < e.length) {
													var h = ri(t, l);
													return (
														'\n      ' +
														y(h) +
														'\n      float ' +
														r +
														'(int row, int col) {\n        return ' +
														r +
														'(' +
														oi(['row', 'col'], c) +
														');\n      }\n    '
													);
												}
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														r +
														'(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(' +
														e[1] +
														', 1)));\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var p = o[0],
													f = o[1],
													d = ti(n);
												return 1 === f
													? '\n    float ' +
															r +
															'(int row, int col) {\n      float index = dot(vec3(row, col, ' +
															d +
															'), vec3(' +
															e[1] +
															', 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / ' +
															p +
															'.0);\n      return sampleTexture(' +
															n +
															', uv);\n    }\n  '
													: 1 === p
													? '\n    float ' +
													  r +
													  '(int row, int col) {\n      float index = dot(vec3(row, col, ' +
													  d +
													  '), vec3(' +
													  e[1] +
													  ', 1, 1));\n      vec2 uv = vec2((index + 0.5) / ' +
													  f +
													  '.0, 0.5);\n      return sampleTexture(' +
													  n +
													  ', uv);\n    }\n  '
													: '\n  float ' +
													  r +
													  '(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * ' +
													  e[1] +
													  ' + col + ' +
													  d +
													  ';\n    vec2 uv = uvFromFlat(' +
													  p +
													  ', ' +
													  f +
													  ', index);\n    return sampleTexture(' +
													  n +
													  ', uv);\n  }\n';
											})(t);
										case 3:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = e[1] * e[2],
													i = e[2],
													a = T(e),
													s = a.newShape,
													u = a.keptDims,
													c = s;
												if (c.length < e.length) {
													var l = ri(t, c);
													return (
														'\n        ' +
														y(l) +
														'\n        float ' +
														r +
														'(int row, int col, int depth) {\n          return ' +
														r +
														'(' +
														oi(['row', 'col', 'depth'], u) +
														');\n        }\n      '
													);
												}
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(' +
														o +
														', ' +
														i +
														', 1)));\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var h = t.shapeInfo.texShape,
													p = h[0],
													f = h[1],
													d = t.shapeInfo.flatOffset;
												if (f === o && null == d)
													return (
														'\n        float ' +
														r +
														'(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(' +
														i +
														', 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(' +
														f +
														'.0, ' +
														p +
														'.0);\n          return sampleTexture(' +
														n +
														', uv);\n        }\n      '
													);
												if (f === i && null == d)
													return (
														'\n    float ' +
														r +
														'(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(' +
														e[1] +
														', 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(' +
														f +
														'.0, ' +
														p +
														'.0);\n      return sampleTexture(' +
														n +
														', uv);\n    }\n  '
													);
												var v = ti(n);
												return (
													'\n      float ' +
													r +
													'(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * ' +
													o +
													' + col * ' +
													i +
													' + depth + ' +
													v +
													';\n        vec2 uv = uvFromFlat(' +
													p +
													', ' +
													f +
													', index);\n        return sampleTexture(' +
													n +
													', uv);\n      }\n  '
												);
											})(t);
										case 4:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = e[3],
													i = e[2] * o,
													a = e[1] * i,
													s = T(e),
													u = s.newShape,
													c = s.keptDims;
												if (u.length < e.length) {
													var l = ri(t, u);
													return (
														'\n      ' +
														y(l) +
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2) {\n        return ' +
														r +
														'(' +
														oi(['row', 'col', 'depth', 'depth2'], c) +
														');\n      }\n    '
													);
												}
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(' +
														a +
														', ' +
														i +
														', ' +
														o +
														', 1)));\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var h = t.shapeInfo.flatOffset,
													p = t.shapeInfo.texShape,
													f = p[0],
													d = p[1];
												if (d === a && null == h)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(' +
														i +
														', ' +
														o +
														', 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(' +
														d +
														'.0, ' +
														f +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												if (d === o && null == h)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(' +
														e[1] * e[2] +
														', ' +
														e[2] +
														', 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(' +
														d +
														'.0, ' +
														f +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												var v = ti(n);
												return (
													'\n    float ' +
													r +
													'(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ' +
													a +
													' + col * ' +
													i +
													' +\n          depth * ' +
													o +
													' + depth2;\n      vec2 uv = uvFromFlat(' +
													f +
													', ' +
													d +
													', index + ' +
													v +
													');\n      return sampleTexture(' +
													n +
													', uv);\n    }\n  '
												);
											})(t);
										case 5:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = e[4],
													i = e[3] * o,
													a = e[2] * i,
													s = e[1] * a,
													u = T(e),
													c = u.newShape,
													l = u.keptDims;
												if (c.length < e.length) {
													var h = ri(t, c);
													return (
														'\n      ' +
														y(h) +
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2, int depth3) {\n        return ' +
														r +
														'(' +
														oi(['row', 'col', 'depth', 'depth2', 'depth3'], l) +
														');\n      }\n    '
													);
												}
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(' +
														s +
														', ' +
														a +
														', ' +
														i +
														', ' +
														o +
														')) +\n          depth3;\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var p = t.shapeInfo.flatOffset,
													f = t.shapeInfo.texShape,
													d = f[0],
													v = f[1];
												if (v === s && null == p)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(' +
														a +
														', ' +
														i +
														', ' +
														o +
														', 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(' +
														v +
														'.0, ' +
														d +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												if (v === o && null == p)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(' +
														e[1] * e[2] * e[3] +
														',\n               ' +
														e[2] * e[3] +
														', ' +
														e[3] +
														', 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(' +
														v +
														'.0, ' +
														d +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												var m = ti(n);
												return (
													'\n    float ' +
													r +
													'(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ' +
													s +
													' + col * ' +
													a +
													' + depth * ' +
													i +
													' +\n          depth2 * ' +
													o +
													' + depth3 + ' +
													m +
													';\n      vec2 uv = uvFromFlat(' +
													d +
													', ' +
													v +
													', index);\n      return sampleTexture(' +
													n +
													', uv);\n    }\n  '
												);
											})(t);
										case 6:
											return (function (t) {
												var e = t.shapeInfo.logicalShape,
													n = t.name,
													r = 'get' + n.charAt(0).toUpperCase() + n.slice(1),
													o = T(e),
													i = o.newShape,
													a = o.keptDims;
												if (i.length < e.length) {
													var s = ri(t, i);
													return (
														'\n      ' +
														y(s) +
														'\n      float ' +
														r +
														'(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return ' +
														r +
														'(' +
														oi(
															[
																'row',
																'col',
																'depth',
																'depth2',
																'depth3',
																'depth4',
															],
															a
														) +
														');\n      }\n    '
													);
												}
												var u = e[5],
													c = e[4] * u,
													l = e[3] * c,
													h = e[2] * l,
													p = e[1] * h;
												if (t.shapeInfo.isUniform)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(' +
														p +
														', ' +
														h +
														', ' +
														l +
														', ' +
														c +
														')) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(' +
														u +
														', 1)));\n        ' +
														ei(t) +
														'\n      }\n    '
													);
												var f = t.shapeInfo.flatOffset,
													d = t.shapeInfo.texShape,
													v = d[0],
													m = d[1];
												if (m === p && null == f)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(' +
														h +
														', ' +
														l +
														', ' +
														c +
														', ' +
														u +
														')) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(' +
														m +
														'.0, ' +
														v +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												if (m === u && null == f)
													return (
														'\n      float ' +
														r +
														'(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(' +
														e[1] * e[2] * e[3] * e[4] +
														',\n               ' +
														e[2] * e[3] * e[4] +
														',\n               ' +
														e[3] * e[4] +
														',\n               ' +
														e[4] +
														')) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(' +
														m +
														'.0, ' +
														v +
														'.0);\n        return sampleTexture(' +
														n +
														', uv);\n      }\n    '
													);
												var g = ti(n);
												return (
													'\n    float ' +
													r +
													'(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * ' +
													p +
													' + col * ' +
													h +
													' + depth * ' +
													l +
													' +\n          depth2 * ' +
													c +
													' + depth3 * ' +
													u +
													' + depth4 + ' +
													g +
													';\n      vec2 uv = uvFromFlat(' +
													v +
													', ' +
													m +
													', index);\n      return sampleTexture(' +
													n +
													', uv);\n    }\n  '
												);
											})(t);
										default:
											throw new Error(
												e.length + '-D input sampling is not yet supported'
											);
									}
							  })(t);
						var o = t.shapeInfo.logicalShape,
							i = e.logicalShape;
						return (
							o.length <= i.length &&
								(r += n
									? (function (t, e) {
											var n,
												r = t.name,
												o = r.charAt(0).toUpperCase() + r.slice(1),
												i = 'get' + o + 'AtOutCoords',
												a = t.shapeInfo.logicalShape.length,
												s = e.logicalShape.length,
												u = po(t.shapeInfo.logicalShape, e.logicalShape),
												c = ni(s),
												l = s - a,
												h = ['x', 'y', 'z', 'w', 'u', 'v'];
											n =
												0 === a
													? ''
													: s < 2 && 1 <= u.length
													? 'coords = 0;'
													: u
															.map(function (t) {
																return 'coords.' + h[t + l] + ' = 0;';
															})
															.join('\n');
											var p;
											p =
												s < 2 && 0 < a
													? 'coords'
													: t.shapeInfo.logicalShape
															.map(function (t, e) {
																return 'coords.' + h[e + l];
															})
															.join(', ');
											var f = 'return outputValue;',
												d = 1 === L(t.shapeInfo.logicalShape),
												v = 1 === L(e.logicalShape);
											if (1 !== a || d || v) {
												if (d && !v)
													f =
														1 === s
															? '\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      '
															: '\n        return vec4(outputValue.x);\n      ';
												else if (u.length) {
													var m = a - 2,
														g = a - 1;
													-1 < u.indexOf(m) && -1 < u.indexOf(g)
														? (f = 'return vec4(outputValue.x);')
														: -1 < u.indexOf(m)
														? (f =
																'return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);')
														: -1 < u.indexOf(g) &&
														  (f =
																'return vec4(outputValue.xx, outputValue.zz);');
												}
											} else
												f =
													'\n      return vec4(outputValue.xy, outputValue.xy);\n    ';
											return (
												'\n    vec4 ' +
												i +
												'() {\n      ' +
												c +
												' coords = getOutputCoords();\n      ' +
												n +
												'\n      vec4 outputValue = get' +
												o +
												'(' +
												p +
												');\n      ' +
												f +
												'\n    }\n  '
											);
									  })(t, e)
									: (function (t, e) {
											var n = t.name,
												r = n.charAt(0).toUpperCase() + n.slice(1),
												o = 'get' + r + 'AtOutCoords',
												i = e.texShape,
												a = t.shapeInfo.texShape,
												s = t.shapeInfo.logicalShape.length,
												u = e.logicalShape.length;
											if (
												!t.shapeInfo.isUniform &&
												s === u &&
												null == t.shapeInfo.flatOffset &&
												D(a, i)
											)
												return (
													'\n      float ' +
													o +
													'() {\n        return sampleTexture(' +
													n +
													', resultUV);\n      }\n    '
												);
											var c = ni(u),
												l = po(t.shapeInfo.logicalShape, e.logicalShape),
												h = u - s,
												p = ['x', 'y', 'z', 'w', 'u', 'v'];
											return (
												'\n    float ' +
												o +
												'() {\n      ' +
												c +
												' coords = getOutputCoords();\n      ' +
												(0 === s
													? ''
													: u < 2 && 1 <= l.length
													? 'coords = 0;'
													: l
															.map(function (t) {
																return 'coords.' + p[t + h] + ' = 0;';
															})
															.join('\n')) +
												'\n      return get' +
												r +
												'(' +
												(u < 2 && 0 < s
													? 'coords'
													: t.shapeInfo.logicalShape
															.map(function (t, e) {
																return 'coords.' + p[e + h];
															})
															.join(', ')) +
												');\n    }\n  '
											);
									  })(t, e)),
							r
						);
					})(t, e, r);
				})
				.join('\n'),
			l = e.texShape,
			h = Yo(),
			p =
				'\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return ' +
				h.texture2D +
				'(textureSampler, uv).r;\n    }\n  ',
			f =
				(s = h).version +
				'\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    ' +
				s.varyingFs +
				' vec2 resultUV;\n    ' +
				s.defineOutput +
				'\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    uniform float NAN;\n    ' +
				s.defineSpecialNaN +
				'\n    ' +
				s.defineSpecialInf +
				'\n    ' +
				s.defineRound +
				'\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    int idiv(int a, int b, float sign) {\n      int res = a / b;\n      int mod = imod(a, b);\n      if (sign < 0. && mod != 0) {\n        res -= 1;\n      }\n      return res;\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    \nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n    \nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n    \nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n\n  ';
		return (
			(a = e.isPacked
				? ((i = (function (t, e) {
						switch (t.length) {
							case 0:
								return '\n    int getOutputCoords() {\n      return 0;\n    }\n  ';
							case 1:
								return (
									(n = e),
									1 === (r = [Math.ceil(n[0] / 2), Math.ceil(n[1] / 2)])[0]
										? '\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * ' +
										  r[1] +
										  '.0);\n      }\n    '
										: 1 === r[1]
										? '\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * ' +
										  r[0] +
										  '.0);\n      }\n    '
										: '\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
										  r[0] +
										  ', ' +
										  r[1] +
										  '));\n      return 2 * (resTexRC.x * ' +
										  r[1] +
										  ' + resTexRC.y);\n    }\n  '
								);
							case 2:
								return (function (t, e) {
									var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)];
									if (D(t, e))
										return (
											'\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(' +
											n[0] +
											', ' +
											n[1] +
											'));\n      }\n    '
										);
									var r = Math.ceil(t[1] / 2);
									return (
										'\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
										n[0] +
										', ' +
										n[1] +
										'));\n\n      int index = resTexRC.x * ' +
										n[1] +
										' + resTexRC.y;\n      int r = 2 * (index / ' +
										r +
										');\n      int c = imod(index, ' +
										r +
										') * 2;\n\n      return ivec2(r, c);\n    }\n  '
									);
								})(t, e);
							case 3:
								return (
									(o = t),
									(i = e),
									(a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)]),
									(u = (s = Math.ceil(o[2] / 2)) * Math.ceil(o[1] / 2)),
									'\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
										a[0] +
										', ' +
										a[1] +
										'));\n      int index = resTexRC.x * ' +
										a[1] +
										' + resTexRC.y;\n\n      int b = index / ' +
										u +
										';\n      index -= b * ' +
										u +
										';\n\n      int r = 2 * (index / ' +
										s +
										');\n      int c = imod(index, ' +
										s +
										') * 2;\n\n      return ivec3(b, r, c);\n    }\n  '
								);
							default:
								return (function (t, e) {
									for (
										var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)],
											r = Math.ceil(t[t.length - 1] / 2),
											o = r * Math.ceil(t[t.length - 2] / 2),
											i = o,
											a = '',
											s = 'b, r, c',
											u = 2;
										u < t.length - 1;
										u++
									)
										(a =
											'\n      int b' +
											u +
											' = index / ' +
											(i *= t[t.length - u - 1]) +
											';\n      index -= b' +
											u +
											' * ' +
											i +
											';\n    ' +
											a),
											(s = 'b' + u + ', ' + s);
									return (
										'\n    ivec' +
										t.length +
										' getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
										n[0] +
										', ' +
										n[1] +
										'));\n      int index = resTexRC.x * ' +
										n[1] +
										' + resTexRC.y;\n\n      ' +
										a +
										'\n\n      int b = index / ' +
										o +
										';\n      index -= b * ' +
										o +
										';\n\n      int r = 2 * (index / ' +
										r +
										');\n      int c = imod(index, ' +
										r +
										') * 2;\n\n      return ivec' +
										t.length +
										'(' +
										s +
										');\n    }\n  '
									);
								})(t, e);
						}
						var n, r, o, i, a, s, u;
				  })(e.logicalShape, l)),
				  '\n    void setOutput(vec4 val) {\n      ' +
						h.output +
						' = val;\n    }\n  ')
				: ((i = (function (t, e) {
						switch (t.length) {
							case 0:
								return '\n    int getOutputCoords() {\n      return 0;\n    }\n  ';
							case 1:
								return 1 === (l = e)[0]
									? '\n      int getOutputCoords() {\n        return int(resultUV.x * ' +
											l[1] +
											'.0);\n      }\n    '
									: 1 === l[1]
									? '\n      int getOutputCoords() {\n        return int(resultUV.y * ' +
									  l[0] +
									  '.0);\n      }\n    '
									: '\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
									  l[0] +
									  ', ' +
									  l[1] +
									  '));\n      return resTexRC.x * ' +
									  l[1] +
									  ' + resTexRC.y;\n    }\n  ';
							case 2:
								return D((u = t), (c = e))
									? '\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(' +
											c[0] +
											', ' +
											c[1] +
											'));\n      }\n    '
									: 1 === u[1]
									? '\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(' +
									  c[0] +
									  ', ' +
									  c[1] +
									  '));\n        int index = resTexRC.x * ' +
									  c[1] +
									  ' + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    '
									: 1 === u[0]
									? '\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(' +
									  c[0] +
									  ', ' +
									  c[1] +
									  '));\n        int index = resTexRC.x * ' +
									  c[1] +
									  ' + resTexRC.y;\n        return ivec2(0, index);\n      }\n    '
									: '\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
									  c[0] +
									  ', ' +
									  c[1] +
									  '));\n      int index = resTexRC.x * ' +
									  c[1] +
									  ' + resTexRC.y;\n      int r = index / ' +
									  u[1] +
									  ';\n      int c = index - r * ' +
									  u[1] +
									  ';\n      return ivec2(r, c);\n    }\n  ';
							case 3:
								return (
									(h = e),
									(p = $o(['r', 'c', 'd'], t)),
									'\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(' +
										h[0] +
										', ' +
										h[1] +
										'));\n      int index = resTexRC.x * ' +
										h[1] +
										' + resTexRC.y;\n      ' +
										p +
										'\n      return ivec3(r, c, d);\n    }\n  '
								);
							case 4:
								return (
									(a = e),
									(s = $o(['r', 'c', 'd', 'd2'], t)),
									'\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(' +
										a[0] +
										', ' +
										a[1] +
										'));\n      int index = resTexRC.x * ' +
										a[1] +
										' + resTexRC.y;\n      ' +
										s +
										'\n      return ivec4(r, c, d, d2);\n    }\n  '
								);
							case 5:
								return (
									(o = e),
									(i = $o(['r', 'c', 'd', 'd2', 'd3'], t)),
									'\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(' +
										o[0] +
										',\n                             ' +
										o[1] +
										'));\n\n      int index = resTexRC.x * ' +
										o[1] +
										' + resTexRC.y;\n\n      ' +
										i +
										'\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  '
								);
							case 6:
								return (
									(n = e),
									(r = $o(['r', 'c', 'd', 'd2', 'd3', 'd4'], t)),
									'\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(' +
										n[0] +
										', ' +
										n[1] +
										'));\n      int index = resTexRC.x * ' +
										n[1] +
										' + resTexRC.y;\n\n      ' +
										r +
										'\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  '
								);
							default:
								throw new Error(
									t.length + '-D output sampling is not yet supported'
								);
						}
						var n, r, o, i, a, s, u, c, l, h, p;
				  })(e.logicalShape, l)),
				  '\n    void setOutput(float val) {\n      ' +
						h.output +
						' = vec4(val, 0, 0, 0);\n    }\n  ')),
			r &&
				(f +=
					'\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n'),
			[f, p, a, u, i, c, n].join('\n')
		);
	}
	function ti(t) {
		return 'offset' + t;
	}
	function ei(t) {
		var e = t.name,
			n = L(t.shapeInfo.logicalShape);
		return n < 2
			? 'return ' + e + ';'
			: '\n    for (int i = 0; i < ' +
					n +
					'; i++) {\n      if (i == index) {\n        return ' +
					e +
					'[i];\n      }\n    }\n  ';
	}
	function ni(t) {
		if (t <= 1) return 'int';
		if (2 === t) return 'ivec2';
		if (3 === t) return 'ivec3';
		if (4 === t) return 'ivec4';
		if (5 === t) return 'ivec5';
		if (6 === t) return 'ivec6';
		throw Error('GPU for rank ' + t + ' is not yet supported');
	}
	function ri(t, e) {
		var n = JSON.parse(JSON.stringify(t));
		return (n.shapeInfo.logicalShape = e), n;
	}
	function oi(e, t) {
		return t
			.map(function (t) {
				return e[t];
			})
			.join(', ');
	}
	function ii(t, e, n, r) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			P(2 < t.length, function () {
				return (
					'Packed arg' +
					(n.charAt(0).toUpperCase() + n.slice(1)) +
					' supports only inputs with rank above 2.'
				);
			});
		var o = t[t.length - 1],
			i = Math.ceil(o / e);
		(this.outputShape = t.slice(0, -1)),
			1 < i && this.outputShape.push(i),
			r || this.variableNames.push('bestIndicesA');
		var a,
			s,
			u = this.outputShape,
			c = u.length,
			l = ni(c),
			h = Xo('coords', c);
		if (1 === i) {
			var p = ni((s = c + 1));
			a =
				'\n        ' +
				p +
				' sourceLocR = ' +
				p +
				'(' +
				h.join() +
				', 0);\n        ++' +
				h[c - 1] +
				';\n        ' +
				p +
				' sourceLocG = ' +
				p +
				'(' +
				h.join() +
				', 0);\n        ++' +
				h[c - 2] +
				';\n        ' +
				p +
				' sourceLocA = ' +
				p +
				'(' +
				h.join() +
				', 0);\n        --' +
				h[c - 1] +
				';\n        ' +
				p +
				' sourceLocB = ' +
				p +
				'(' +
				h.join() +
				', 0);\n        --' +
				h[c - 2] +
				';';
		} else a = '\n        ' + l + ' sourceLocR = coords;\n        ++' + h[(s = c) - 1] + ';\n        ' + l + ' sourceLocG = coords;\n        ++' + h[c - 2] + ';\n        ' + l + ' sourceLocA = coords;\n        --' + h[c - 1] + ';\n        ' + l + ' sourceLocB = coords;\n        --' + h[c - 2] + ';';
		var f = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, s),
			d = '.' + f[s - 1],
			v = f.map(function (t) {
				return 'int ' + t;
			}),
			m = Xo('sourceLocR', s - 1).concat('inIdx.r'),
			g = Xo('sourceLocG', s - 1).concat('inIdx.g'),
			y = Xo('sourceLocB', s - 1).concat('inIdx.b'),
			x = Xo('sourceLocA', s - 1).concat('inIdx.a'),
			b = 'max' === n ? 'greaterThan' : 'lessThan',
			w = r
				? ''
				: '\n          inIdx = round(vec4(getBestIndicesAChannel(' +
				  m.join() +
				  '),\n                             getBestIndicesAChannel(' +
				  g.join() +
				  '),\n                             getBestIndicesAChannel(' +
				  y.join() +
				  '),\n                             getBestIndicesAChannel(' +
				  x.join() +
				  ')));',
			C =
				'vec4(\n            getAChannel(' +
				m.join() +
				'),\n            hasNextCol ? getAChannel(' +
				g.join() +
				') : 0.,\n            hasNextRow ? getAChannel(' +
				y.join() +
				') : 0.,\n            hasNextRow && hasNextCol ? getAChannel(' +
				x.join() +
				') : 0.)',
			E = r
				? ''
				: '\n      float getBestIndicesAChannel(' +
				  v.join() +
				  ') {\n        return getChannel(getBestIndicesA(' +
				  f.join() +
				  '),\n                                          vec2(' +
				  f.slice(-2).join() +
				  '));\n      }';
		this.userCode =
			'\n      float getAChannel(' +
			v.join() +
			') {\n        return getChannel(getA(' +
			f.join() +
			'),\n                               vec2(' +
			f.slice(-2).join() +
			'));\n      }\n      ' +
			E +
			'\n      void main() {\n        ' +
			l +
			' coords = getOutputCoords();\n        bool hasNextCol = ' +
			h[c - 1] +
			' < ' +
			(u[c - 1] - 1) +
			';\n        bool hasNextRow = ' +
			h[c - 2] +
			' < ' +
			(u[c - 2] - 1) +
			';\n        ' +
			a +
			'\n        ivec4 srcIdx = ivec4(sourceLocR' +
			d +
			', sourceLocG' +
			d +
			',\n          sourceLocB' +
			d +
			', sourceLocA' +
			d +
			') * ' +
			e +
			';\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = ' +
			C +
			';\n\n        for (int i = 0; i < ' +
			e +
			'; i++) {\n          inIdx = srcIdx;\n          ' +
			w +
			'\n          vec4 candidate = ' +
			C +
			';\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(' +
			b +
			'(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    ';
	}
	function ai(t) {
		(this.variableNames = ['dy']), (this.outputShape = t.inShape);
		var e = t.filterHeight,
			n = t.filterWidth,
			r = t.strideHeight,
			o = t.strideWidth,
			i = t.dilationHeight,
			a = t.dilationWidth,
			s = t.effectiveFilterHeight,
			u = t.effectiveFilterWidth,
			c = s - 1 - t.padInfo.top,
			l = u - 1 - t.padInfo.left,
			h = 1 / (e * n);
		this.userCode =
			'\n      const ivec2 pads = ivec2(' +
			c +
			', ' +
			l +
			');\n      const float avgMultiplier = float(' +
			h +
			');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ' +
			s +
			';\n            wR += ' +
			i +
			') {\n          float dyR = float(dyRCorner + wR) / ' +
			r +
			'.0;\n\n          if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ' +
			u +
			';\n            wC+= ' +
			a +
			') {\n            float dyC = float(dyCCorner + wC) / ' +
			o +
			'.0;\n\n            if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function si(t) {
		(this.variableNames = ['dy']), (this.outputShape = t.inShape);
		var e = t.filterDepth,
			n = t.filterHeight,
			r = t.filterWidth,
			o = t.strideDepth,
			i = t.strideHeight,
			a = t.strideWidth,
			s = t.dilationDepth,
			u = t.dilationHeight,
			c = t.dilationWidth,
			l = t.effectiveFilterDepth,
			h = t.effectiveFilterHeight,
			p = t.effectiveFilterWidth,
			f = l - 1 - t.padInfo.front,
			d = h - 1 - t.padInfo.top,
			v = p - 1 - t.padInfo.left,
			m = 1 / (e * n * r);
		this.userCode =
			'\n      const ivec3 pads = ivec3(' +
			f +
			', ' +
			d +
			', ' +
			v +
			');\n      const float avgMultiplier = float(' +
			m +
			');\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ' +
			l +
			';\n            wD += ' +
			s +
			') {\n          float dyD = float(dyDCorner + wD) / ' +
			o +
			'.0;\n\n          if (dyD < 0.0 || dyD >= ' +
			t.outDepth +
			'.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ' +
			h +
			';\n              wR += ' +
			u +
			') {\n            float dyR = float(dyRCorner + wR) / ' +
			i +
			'.0;\n\n            if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ' +
			p +
			';\n                wC += ' +
			c +
			') {\n              float dyC = float(dyCCorner + wC) / ' +
			a +
			'.0;\n\n              if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n\n              dotProd += dyValue * avgMultiplier;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function ui(t, e, n, r, o, i) {
		(this.outputShape = []),
			(this.variableNames = ['x', 'mean', 'variance']),
			vo(t, e),
			vo(t, n);
		var a = '0.0';
		null != r &&
			(vo(t, r),
			this.variableNames.push('offset'),
			(a = 'getOffsetAtOutCoords()'));
		var s = '1.0';
		null != o &&
			(vo(t, o),
			this.variableNames.push('scale'),
			(s = 'getScaleAtOutCoords()')),
			(this.outputShape = t),
			(this.userCode =
				'\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = ' +
				a +
				';\n        float scale = ' +
				s +
				';\n        float inv = scale * inversesqrt(variance + float(' +
				i +
				'));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    ');
	}
	function ci(t, e, n, r, o, i) {
		(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.variableNames = ['x', 'mean', 'variance']),
			vo(t, e),
			vo(t, n);
		var a = 'vec4(0.0)';
		null != r &&
			(vo(t, r),
			this.variableNames.push('offset'),
			(a = 'getOffsetAtOutCoords()'));
		var s = 'vec4(1.0)';
		null != o &&
			(vo(t, o),
			this.variableNames.push('scale'),
			(s = 'getScaleAtOutCoords()')),
			(this.outputShape = t),
			(this.userCode =
				'\n      void main() {\n        vec4 offset = ' +
				a +
				';\n        vec4 scale = ' +
				s +
				';\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(' +
				i +
				'));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    ');
	}
	function li(t, e, n) {
		(this.variableNames = ['AReal', 'AImag', 'BReal', 'BImag']),
			(this.outputShape = vo(e, n)),
			(this.userCode =
				'\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        ' +
				t +
				'\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    ');
	}
	function hi(t, e, n) {
		(this.variableNames = ['A', 'B']),
			(this.outputShape = vo(e, n)),
			(this.userCode =
				'\n      float binaryOperation(float a, float b) {\n        ' +
				t +
				'\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ');
	}
	function pi(t, e, n, r) {
		void 0 === r && (r = !1),
			(this.variableNames = ['A', 'B']),
			(this.supportsBroadcasting = !0),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = vo(e, n));
		var o = this.outputShape.length,
			i = '';
		if (r)
			if (0 === o || 1 === L(this.outputShape))
				i =
					'\n          result.y = 0.;\n          result.z = 0.;\n          result.w = 0.;\n        ';
			else if (
				((i =
					'\n          ' + ni(o) + ' coords = getOutputCoords();\n        '),
				1 === o)
			)
				i +=
					'\n            result.y = (coords + 1) >= ' +
					this.outputShape[0] +
					' ? 0. : result.y;\n            result.z = 0.;\n            result.w = 0.;\n          ';
			else {
				var a = Xo('coords', o);
				i +=
					'\n            bool nextRowOutOfBounds =\n              (' +
					a[o - 2] +
					' + 1) >= ' +
					this.outputShape[o - 2] +
					';\n            bool nextColOutOfBounds =\n              (' +
					a[o - 1] +
					' + 1) >= ' +
					this.outputShape[o - 1] +
					';\n            result.y = nextColOutOfBounds ? 0. : result.y;\n            result.z = nextRowOutOfBounds ? 0. : result.z;\n            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;\n          ';
			}
		this.userCode =
			'\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        ' +
			t +
			'\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n\n        vec4 result = binaryOperation(a, b);\n        ' +
			i +
			'\n\n        setOutput(result);\n      }\n    ';
	}
	function fi(t) {
		(this.variableNames = ['real', 'imag']),
			(this.outputShape = t),
			(this.userCode =
				'\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    ');
	}
	function di(t) {
		(this.outputShape = []),
			(this.outputShape = yn(t, 1)),
			(this.variableNames = t.map(function (t, e) {
				return 'T' + e;
			}));
		var e = new Array(t.length - 1);
		e[0] = t[0][1];
		for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n][1];
		var r = ['if (yC < ' + e[0] + ') setOutput(getT0(yR, yC));'];
		for (n = 1; n < e.length; n++) {
			var o = e[n - 1];
			r.push(
				'else if (yC < ' +
					e[n] +
					') setOutput(getT' +
					n +
					'(yR, yC-' +
					o +
					'));'
			);
		}
		var i = e.length,
			a = e[e.length - 1];
		r.push('else setOutput(getT' + i + '(yR, yC-' + a + '));'),
			(this.userCode =
				'\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        ' +
				r.join('\n        ') +
				'\n      }\n    ');
	}
	function vi(t, e) {
		(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = []),
			(this.outputShape = yn(t, e));
		var n = this.outputShape,
			r = n.length,
			o = ni(r),
			i = Xo('coords', r),
			a = ['x', 'y', 'z', 'w', 'u', 'v'].slice(0, r);
		this.variableNames = t.map(function (t, e) {
			return 'T' + e;
		});
		var s = new Array(t.length - 1);
		s[0] = t[0][e];
		for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + t[u][e];
		var c = a[e],
			l = a.slice(-2),
			h = a.join(),
			p =
				'if (' +
				c +
				' < ' +
				s[0] +
				') {\n        return getChannel(\n            getT0(' +
				h +
				'), vec2(' +
				l.join() +
				'));\n        }';
		for (u = 1; u < s.length; u++) {
			var f = s[u - 1];
			p +=
				'\n        if (' +
				c +
				' < ' +
				s[u] +
				'  && ' +
				c +
				' >= ' +
				s[u - 1] +
				') {\n          return getChannel(\n            getT' +
				u +
				'(' +
				Ii(a, c, f) +
				'),\n            vec2(' +
				Ii(l, c, f) +
				'));\n        }';
		}
		var d = s.length,
			v = s[s.length - 1];
		(p +=
			'\n        return getChannel(\n          getT' +
			d +
			'(' +
			Ii(a, c, v) +
			'),\n          vec2(' +
			Ii(l, c, v) +
			'));'),
			(this.userCode =
				'\n      float getValue(' +
				a.map(function (t) {
					return 'int ' + t;
				}) +
				') {\n        ' +
				p +
				'\n      }\n\n      void main() {\n        ' +
				o +
				' coords = getOutputCoords();\n        vec4 result = vec4(getValue(' +
				i +
				'), 0., 0., 0.);\n\n        ' +
				i[r - 1] +
				' = ' +
				i[r - 1] +
				' + 1;\n        if (' +
				i[r - 1] +
				' < ' +
				n[r - 1] +
				') {\n          result.g = getValue(' +
				i +
				');\n        }\n\n        ' +
				i[r - 2] +
				' = ' +
				i[r - 2] +
				' + 1;\n        if (' +
				i[r - 2] +
				' < ' +
				n[r - 2] +
				') {\n          result.a = getValue(' +
				i +
				');\n        }\n\n        ' +
				i[r - 1] +
				' = ' +
				i[r - 1] +
				' - 1;\n        if (' +
				i[r - 2] +
				' < ' +
				n[r - 2] +
				' &&\n            ' +
				i[r - 1] +
				' < ' +
				n[r - 1] +
				') {\n          result.b = getValue(' +
				i +
				');\n        }\n        setOutput(result);\n      }\n    ');
	}
	var mi = 'return a + b;',
		gi = 'return a - b;',
		yi = 'return a * b;',
		xi = 'return (a < 0.) ? b * a : a;',
		bi =
			'\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n',
		wi =
			((_i.prototype.getCustomSetupFunc = function (n, r) {
				var o = this;
				return function (t, e) {
					null == o.minLoc &&
						((o.minLoc = t.getUniformLocationNoThrow(e, 'minVal')),
						(o.maxLoc = t.getUniformLocationNoThrow(e, 'maxVal'))),
						t.gl.uniform1f(o.minLoc, n),
						t.gl.uniform1f(o.maxLoc, r);
				};
			}),
			_i),
		Ci =
			((Ei.prototype.getCustomSetupFunc = function (n, r) {
				var o = this;
				return function (t, e) {
					null == o.minLoc &&
						((o.minLoc = t.getUniformLocationNoThrow(e, 'minVal')),
						(o.maxLoc = t.getUniformLocationNoThrow(e, 'maxVal'))),
						t.gl.uniform1f(o.minLoc, n),
						t.gl.uniform1f(o.maxLoc, r);
				};
			}),
			Ei);
	function Ei(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t),
			(this.userCode =
				'\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));\n      }\n    ');
	}
	function _i(t) {
		(this.variableNames = ['A']),
			(this.outputShape = t),
			(this.userCode =
				'\n      uniform float minVal;\n      uniform float maxVal;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, minVal, maxVal));\n      }\n    ');
	}
	function Ii(t, e, n) {
		var r = t.indexOf(e);
		return t
			.map(function (t, e) {
				return e === r ? t + ' - ' + n : t;
			})
			.join();
	}
	function Ri(t) {
		(this.variableNames = ['x', 'dy']), (this.outputShape = t.filterShape);
		var e = t.strideHeight,
			n = t.strideWidth,
			r = t.padInfo.top,
			o = t.padInfo.left,
			i = 'channelsLast' === t.dataFormat;
		this.userCode =
			'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ' +
			t.batchSize +
			'; b++) {\n          for (int yR = 0; yR < ' +
			t.outHeight +
			'; yR++) {\n            int xR = wR + yR * ' +
			e +
			' - ' +
			r +
			';\n\n            if (xR < 0 || xR >= ' +
			t.inHeight +
			') {\n              continue;\n            }\n\n            for (int yC = 0; yC < ' +
			t.outWidth +
			'; yC++) {\n              int xC = wC + yC * ' +
			n +
			' - ' +
			o +
			';\n\n              if (xC < 0 || xC >= ' +
			t.inWidth +
			') {\n                continue;\n              }\n\n              if (' +
			i +
			') {\n                float dyValue = getDy(b, yR, yC, d2);\n                float xValue = getX(b, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              } else {\n                float dyValue = getDy(b, d2, yR, yC);\n                float xValue = getX(b, d1, xR, xC);\n                dotProd += (xValue * dyValue);\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function ki(t) {
		(this.variableNames = ['dy', 'W']), (this.outputShape = t.inShape);
		var e = t.filterHeight,
			n = t.filterWidth,
			r = t.strideHeight,
			o = t.strideWidth,
			i = 'channelsLast' === t.dataFormat,
			a = e - 1 - t.padInfo.top,
			s = n - 1 - t.padInfo.left,
			u = i ? 1 : 2,
			c = i ? 2 : 3,
			l = i ? 3 : 1;
		this.userCode =
			'\n      const ivec2 pads = ivec2(' +
			a +
			', ' +
			s +
			');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[' +
			l +
			'];\n\n        ivec2 dyCorner = ivec2(coords[' +
			u +
			'], coords[' +
			c +
			']) - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ' +
			e +
			'; wR++) {\n          float dyR = float(dyRCorner + wR) / ' +
			r +
			'.0;\n\n          if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ' +
			e +
			' - 1 - wR;\n\n          for (int wC = 0; wC < ' +
			n +
			'; wC++) {\n            float dyC = float(dyCCorner + wC) / ' +
			o +
			'.0;\n\n            if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ' +
			n +
			' - 1 - wC;\n\n            for (int d2 = 0; d2 < ' +
			t.outChannels +
			'; d2++) {\n\n              if (' +
			i +
			') {\n                float xValue = getDy(batch, idyR, idyC, d2);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              } else {\n                float xValue = getDy(batch, d2, idyR, idyC);\n                float wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Si(t) {
		(this.variableNames = ['x', 'dy']), (this.outputShape = t.filterShape);
		var e = t.strideDepth,
			n = t.strideHeight,
			r = t.strideWidth,
			o = t.padInfo.front,
			i = t.padInfo.top,
			a = t.padInfo.left;
		this.userCode =
			'\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < ' +
			t.batchSize +
			'; b++) {\n          for (int yF = 0; yF < ' +
			t.outDepth +
			'; yF++) {\n            int xF = wF + yF * ' +
			e +
			' - ' +
			o +
			';\n\n            if (xF < 0 || xF >= ' +
			t.inDepth +
			') {\n              continue;\n            }\n\n            for (int yR = 0; yR < ' +
			t.outHeight +
			'; yR++) {\n              int xR = wR + yR * ' +
			n +
			' - ' +
			i +
			';\n\n              if (xR < 0 || xR >= ' +
			t.inHeight +
			') {\n                continue;\n              }\n\n              for (int yC = 0; yC < ' +
			t.outWidth +
			'; yC++) {\n                int xC = wC + yC * ' +
			r +
			' - ' +
			a +
			';\n\n                if (xC < 0 || xC >= ' +
			t.inWidth +
			') {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Di(t) {
		(this.variableNames = ['dy', 'W']), (this.outputShape = t.inShape);
		var e = t.filterDepth,
			n = t.filterHeight,
			r = t.filterWidth,
			o = t.strideDepth,
			i = t.strideHeight,
			a = t.strideWidth,
			s = e - 1 - t.padInfo.front,
			u = n - 1 - t.padInfo.top,
			c = r - 1 - t.padInfo.left;
		this.userCode =
			'\n      const ivec3 pads = ivec3(' +
			s +
			', ' +
			u +
			', ' +
			c +
			');\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ' +
			e +
			'; wF++) {\n          float dyF = float(dyFCorner + wF) / ' +
			o +
			'.0;\n\n          if (dyF < 0.0 || dyF >= ' +
			t.outDepth +
			'.0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = ' +
			e +
			' - 1 - wF;\n\n          for (int wR = 0; wR < ' +
			n +
			'; wR++) {\n            float dyR = float(dyRCorner + wR) / ' +
			i +
			'.0;\n\n            if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = ' +
			n +
			' - 1 - wR;\n\n            for (int wC = 0; wC < ' +
			r +
			'; wC++) {\n              float dyC = float(dyCCorner + wC) / ' +
			a +
			'.0;\n\n              if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = ' +
			r +
			' - 1 - wC;\n\n              for (int d2 = 0; d2 < ' +
			t.outChannels +
			'; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Ai(t) {
		(this.variableNames = ['x', 'dy']), (this.outputShape = t.filterShape);
		var e = t.strideHeight,
			n = t.strideWidth,
			r = t.padInfo.top,
			o = t.padInfo.left,
			i = t.outChannels / t.inChannels;
		this.userCode =
			'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * ' +
			i +
			' + dm;\n\n        float dotProd = 0.0;\n\n        // TO DO: Vec4 over the batch size\n        for (int b = 0; b < ' +
			t.batchSize +
			'; b++) {\n          for (int yR = 0; yR < ' +
			t.outHeight +
			'; yR++) {\n            int xR = wR + yR * ' +
			e +
			' - ' +
			r +
			';\n\n            if (xR < 0 || xR >= ' +
			t.inHeight +
			') {\n              continue;\n            }\n\n            for (int yC = 0; yC < ' +
			t.outWidth +
			'; yC++) {\n              int xC = wC + yC * ' +
			n +
			' - ' +
			o +
			';\n\n              if (xC < 0 || xC >= ' +
			t.inWidth +
			') {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Ti(t) {
		(this.variableNames = ['dy', 'W']), (this.outputShape = t.inShape);
		var e = t.filterHeight,
			n = t.filterWidth,
			r = t.strideHeight,
			o = t.strideWidth,
			i = e - 1 - t.padInfo.top,
			a = n - 1 - t.padInfo.left,
			s = t.outChannels / t.inChannels;
		this.userCode =
			'\n      const ivec2 pads = ivec2(' +
			i +
			', ' +
			a +
			');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < ' +
			e +
			'; wR++) {\n          float dyR = float(dyRCorner + wR) / ' +
			r +
			'.0;\n\n          if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = ' +
			e +
			' - 1 - wR;\n\n          for (int wC = 0; wC < ' +
			n +
			'; wC++) {\n            float dyC = float(dyCCorner + wC) / ' +
			o +
			'.0;\n\n            if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = ' +
			n +
			' - 1 - wC;\n\n            // TO DO: Vec4 over the channelMul\n            for (int dm = 0; dm < ' +
			s +
			'; dm++) {\n              int d2 = d1 * ' +
			s +
			' + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Ni(t, e, n, r) {
		void 0 === e && (e = !1),
			void 0 === n && (n = null),
			void 0 === r && (r = !1),
			(this.variableNames = ['x', 'W']),
			(this.outputShape = t.outShape);
		var o = t.padInfo.top,
			i = t.padInfo.left,
			a = t.strideHeight,
			s = t.strideWidth,
			u = t.dilationHeight,
			c = t.dilationWidth,
			l = t.filterHeight,
			h = t.filterWidth,
			p = 4 * Math.floor(t.inChannels / 4),
			f = t.inChannels % 4,
			d = 'channelsLast' === t.dataFormat,
			v = d ? 1 : 2,
			m = d ? 2 : 3,
			g = d ? 3 : 1,
			y = '',
			x = '';
		n &&
			((y = r
				? 'float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ' +
				  n +
				  '\n        }'
				: '\n          float activation(float x) {\n            ' +
				  n +
				  '\n          }\n        '),
			(x = 'result = activation(result);'));
		var b = e ? 'result += getBiasAtOutCoords();' : '';
		e && this.variableNames.push('bias'),
			r && this.variableNames.push('preluActivationWeights'),
			(this.userCode =
				'\n      ' +
				y +
				'\n\n      const ivec2 strides = ivec2(' +
				a +
				', ' +
				s +
				');\n      const ivec2 pads = ivec2(' +
				o +
				', ' +
				i +
				');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[' +
				g +
				'];\n\n        ivec2 xRCCorner =\n            ivec2(coords[' +
				v +
				'], coords[' +
				m +
				']) * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ' +
				l +
				'; wR++) {\n          int xR = xRCorner + wR * ' +
				u +
				';\n\n          if (xR < 0 || xR >= ' +
				t.inHeight +
				') {\n            continue;\n          }\n\n          for (int wC = 0; wC < ' +
				h +
				'; wC++) {\n            int xC = xCCorner + wC * ' +
				c +
				';\n\n            if (xC < 0 || xC >= ' +
				t.inWidth +
				') {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < ' +
				p +
				'; d1 += 4) {\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              if (' +
				d +
				') {\n                vec4 xValues = vec4(\n                  getX(batch, xR, xC, d1),\n                  getX(batch, xR, xC, d1 + 1),\n                  getX(batch, xR, xC, d1 + 2),\n                  getX(batch, xR, xC, d1 + 3)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec4 xValues = vec4(\n                  getX(batch, d1, xR, xC),\n                  getX(batch, d1 + 1, xR, xC),\n                  getX(batch, d1 + 2, xR, xC),\n                  getX(batch, d1 + 3, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n\n            if (' +
				(1 == f) +
				') {\n\n              if (' +
				d +
				') {\n                dotProd +=\n                    getX(batch, xR, xC, ' +
				p +
				') *\n                    getW(wR, wC, ' +
				p +
				', d2);\n              } else {\n                dotProd +=\n                    getX(batch, ' +
				p +
				', xR, xC) *\n                    getW(wR, wC, ' +
				p +
				', d2);\n              }\n\n            } else if (' +
				(2 == f) +
				') {\n              vec2 wValues = vec2(\n                getW(wR, wC, ' +
				p +
				', d2),\n                getW(wR, wC, ' +
				p +
				' + 1, d2)\n              );\n\n              if (' +
				d +
				') {\n                vec2 xValues = vec2(\n                  getX(batch, xR, xC, ' +
				p +
				'),\n                  getX(batch, xR, xC, ' +
				p +
				' + 1)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec2 xValues = vec2(\n                  getX(batch, ' +
				p +
				', xR, xC),\n                  getX(batch, ' +
				p +
				' + 1, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            } else if (' +
				(3 == f) +
				') {\n              vec3 wValues = vec3(\n                getW(wR, wC, ' +
				p +
				', d2),\n                getW(wR, wC, ' +
				p +
				' + 1, d2),\n                getW(wR, wC, ' +
				p +
				' + 2, d2)\n              );\n\n              if (' +
				d +
				') {\n                vec3 xValues = vec3(\n                  getX(batch, xR, xC, ' +
				p +
				'),\n                  getX(batch, xR, xC, ' +
				p +
				' + 1),\n                  getX(batch, xR, xC, ' +
				p +
				' + 2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else {\n                vec3 xValues = vec3(\n                  getX(batch, ' +
				p +
				', xR, xC),\n                  getX(batch, ' +
				p +
				' + 1, xR, xC),\n                  getX(batch, ' +
				p +
				' + 2, xR, xC)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n\n            }\n          }\n        }\n\n        float result = dotProd;\n        ' +
				b +
				'\n        ' +
				x +
				'\n        setOutput(result);\n      }\n    ');
	}
	function Fi(t) {
		(this.variableNames = ['x', 'W']), (this.outputShape = t.outShape);
		var e = t.padInfo.front,
			n = t.padInfo.top,
			r = t.padInfo.left,
			o = t.strideDepth,
			i = t.strideHeight,
			a = t.strideWidth,
			s = t.dilationDepth,
			u = t.dilationHeight,
			c = t.dilationWidth,
			l = t.filterDepth,
			h = t.filterHeight,
			p = t.filterWidth,
			f = 4 * Math.floor(t.inChannels / 4),
			d = t.inChannels % 4;
		this.userCode =
			'\n      const ivec3 strides = ivec3(' +
			o +
			', ' +
			i +
			', ' +
			a +
			');\n      const ivec3 pads = ivec3(' +
			e +
			', ' +
			n +
			', ' +
			r +
			');\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < ' +
			l +
			'; wF++) {\n          int xF = xFCorner + wF * ' +
			s +
			';\n\n          if (xF < 0 || xF >= ' +
			t.inDepth +
			') {\n            continue;\n          }\n\n          for (int wR = 0; wR < ' +
			h +
			'; wR++) {\n            int xR = xRCorner + wR * ' +
			u +
			';\n\n            if (xR < 0 || xR >= ' +
			t.inHeight +
			') {\n              continue;\n            }\n\n            for (int wC = 0; wC < ' +
			p +
			'; wC++) {\n              int xC = xCCorner + wC * ' +
			c +
			';\n\n              if (xC < 0 || xC >= ' +
			t.inWidth +
			') {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < ' +
			f +
			'; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (' +
			(1 == d) +
			') {\n                dotProd +=\n                  getX(batch, xF, xR, xC, ' +
			f +
			') *\n                  getW(wF, wR, wC, ' +
			f +
			', d2);\n              } else if (' +
			(2 == d) +
			') {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, ' +
			f +
			'),\n                  getX(batch, xF, xR, xC, ' +
			f +
			' + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, ' +
			f +
			', d2),\n                  getW(wF, wR, wC, ' +
			f +
			' + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (' +
			(3 == d) +
			') {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, ' +
			f +
			'),\n                  getX(batch, xF, xR, xC, ' +
			f +
			' + 1),\n                  getX(batch, xF, xR, xC, ' +
			f +
			' + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, ' +
			f +
			', d2),\n                  getW(wF, wR, wC, ' +
			f +
			' + 1, d2),\n                  getW(wF, wR, wC, ' +
			f +
			' + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Mi(t, e, n, r) {
		void 0 === e && (e = !1),
			void 0 === n && (n = null),
			void 0 === r && (r = !1),
			(this.variableNames = ['x', 'W']),
			(this.outputShape = t.outShape);
		var o = t.inHeight,
			i = t.inWidth,
			a = t.padInfo.top,
			s = t.padInfo.left,
			u = t.strideHeight,
			c = t.strideWidth,
			l = t.dilationHeight,
			h = t.dilationWidth,
			p = t.filterHeight,
			f = t.filterWidth,
			d = t.outChannels / t.inChannels,
			v = '',
			m = '';
		n &&
			((v = r
				? 'float activation(float a) {\n          float b = getPreluActivationWeightsAtOutCoords();\n          ' +
				  n +
				  '\n        }'
				: '\n          float activation(float x) {\n            ' +
				  n +
				  '\n          }\n        '),
			(m = 'result = activation(result);'));
		var g = e ? 'result += getBiasAtOutCoords();' : '';
		e && this.variableNames.push('bias'),
			r && this.variableNames.push('preluActivationWeights'),
			(this.userCode =
				'\n      ' +
				v +
				'\n\n      const ivec2 strides = ivec2(' +
				u +
				', ' +
				c +
				');\n      const ivec2 pads = ivec2(' +
				a +
				', ' +
				s +
				');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / ' +
				d +
				';\n        int q = d2 - d1 * ' +
				d +
				';\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < ' +
				p +
				'; wR++) {\n          int xR = xRCorner + wR * ' +
				l +
				';\n\n          if (xR < 0 || xR >= ' +
				o +
				') {\n            continue;\n          }\n\n          for (int wC = 0; wC < ' +
				f +
				'; wC++) {\n            int xC = xCCorner + wC * ' +
				h +
				';\n\n            if (xC < 0 || xC >= ' +
				i +
				') {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n\n        float result = dotProd;\n        ' +
				g +
				'\n        ' +
				m +
				'\n        setOutput(result);\n      }\n    ');
	}
	function Oi(t, e, n, r) {
		void 0 === e && (e = !1),
			void 0 === n && (n = null),
			void 0 === r && (r = !1),
			(this.variableNames = ['x', 'W']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t.outShape);
		for (
			var o = t.inHeight,
				i = t.inWidth,
				a = t.padInfo.top,
				s = t.padInfo.left,
				u = t.strideHeight,
				c = t.strideWidth,
				l = t.dilationHeight,
				h = t.dilationWidth,
				p = t.filterHeight,
				f = t.filterWidth,
				d = f,
				v = 'int xR; int xC; int xCOffset;',
				m = 0;
			m < p;
			m++
		)
			for (var g = 0; g < f; g++)
				v +=
					'\n          vec4 xTexelR' +
					m +
					'C' +
					2 * g +
					' = vec4(0.);\n          vec4 wR' +
					m +
					'C' +
					g +
					' = vec4(0.);\n          vec4 xR' +
					m +
					'C' +
					g +
					' = vec4(0.);';
		for (m = 0; m < p; m++)
			for (var y = 0; y < d; y++) {
				if (
					((v +=
						'\n          xR = xRCorner + ' +
						m * l +
						';\n          xC = xCCorner + ' +
						(g = 2 * y) * h +
						';\n        '),
					1 === c)
				) {
					if (
						g < f &&
						((v +=
							s % 2 == 1
								? '\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < ' +
								  o +
								  ' && xCOffset >= 0 && xCOffset < ' +
								  i +
								  ') {\n                  xTexelR' +
								  m +
								  'C' +
								  g +
								  ' = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR' +
								  m +
								  'C' +
								  g +
								  ' = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < ' +
								  o +
								  ' && xCOffset >= 0 && xCOffset < ' +
								  i +
								  ') {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n                  xR' +
								  m +
								  'C' +
								  g +
								  ' = vec4(previous.zw, xTexelR' +
								  m +
								  'C' +
								  g +
								  '.xy);\n                } else {\n                  xR' +
								  m +
								  'C' +
								  g +
								  ' = vec4(0, 0, xTexelR' +
								  m +
								  'C' +
								  g +
								  '.xy);\n                }\n              '
								: '\n                if(xR >= 0 && xR < ' +
								  o +
								  ' && xC >= 0 && xC < ' +
								  i +
								  ') {\n                  xTexelR' +
								  m +
								  'C' +
								  g +
								  ' = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR' +
								  m +
								  'C' +
								  g +
								  ' = vec4(0.);\n                }\n\n                xR' +
								  m +
								  'C' +
								  g +
								  ' = xTexelR' +
								  m +
								  'C' +
								  g +
								  ';\n              '),
						g + 1 < f)
					) {
						var x = s % 2 == 0 ? E(h) : h;
						(h % 2 == 0 && s % 2 == 1) || (h % 2 != 0 && s % 2 != 1)
							? ((v +=
									'\n                  xCOffset = xC + ' +
									(s % 2) +
									' + ' +
									x +
									';\n\n                  if(xR >= 0 && xR < ' +
									o +
									' &&\n                    xCOffset >= 0 && xCOffset < ' +
									i +
									') {\n                    xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = getX(batch, xR, xCOffset, d1);\n                  }\n                '),
							  1 < h &&
									(v +=
										'\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < ' +
										o +
										' &&\n                      xCOffset >= 0 && xCOffset < ' +
										i +
										') {\n                      xTexelR' +
										m +
										'C' +
										g +
										' = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR' +
										m +
										'C' +
										g +
										' = vec4(0.);\n                    }\n                  '),
							  (v +=
									'\n                  xR' +
									m +
									'C' +
									(g + 1) +
									' = vec4(\n                    xTexelR' +
									m +
									'C' +
									g +
									'.zw, xTexelR' +
									m +
									'C' +
									(g + 2) +
									'.xy);\n                '))
							: (v +=
									'\n                  xCOffset = xC + ' +
									x +
									';\n\n                  if(xR >= 0 && xR < ' +
									o +
									' &&\n                    xCOffset >= 0 && xCOffset < ' +
									i +
									') {\n                    xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR' +
									m +
									'C' +
									(g + 1) +
									' = xTexelR' +
									m +
									'C' +
									(g + 2) +
									';\n                ');
					}
				} else
					g < f &&
						((v +=
							'\n              if(xR >= 0 && xR < ' + o + ') {\n            '),
						s % 2 == 1
							? ((v +=
									'\n                xCOffset = xC + 1 - ' +
									c +
									';\n                if(xCOffset >= 0 && xCOffset < ' +
									i +
									') {\n                  xTexelR' +
									m +
									'C' +
									g +
									' = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR' +
									m +
									'C' +
									g +
									' = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < ' +
									i +
									') {\n                  xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = vec4(0.);\n                }\n\n                xR' +
									m +
									'C' +
									g +
									' = vec4(\n                  xTexelR' +
									m +
									'C' +
									g +
									'.zw, xTexelR' +
									m +
									'C' +
									(g + 2) +
									'.zw);\n              '),
							  g + 1 < f &&
									(v +=
										'\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + ' +
										c +
										';\n                  if(xCOffset >= 0 && xCOffset < ' +
										i +
										') {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR' +
										m +
										'C' +
										(g + 1) +
										' = vec4(xTexelR' +
										m +
										'C' +
										(g + 2) +
										'.xy, final.xy);\n                '))
							: ((v +=
									'\n                if(xC >= 0 && xC < ' +
									i +
									') {\n                  xTexelR' +
									m +
									'C' +
									g +
									' = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR' +
									m +
									'C' +
									g +
									' = vec4(0.);\n                }\n\n                xCOffset = xC + ' +
									c +
									';\n                if(xCOffset >= 0 && xCOffset < ' +
									i +
									') {\n                  xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR' +
									m +
									'C' +
									(g + 2) +
									' = vec4(0.);\n                }\n\n                xR' +
									m +
									'C' +
									g +
									' = vec4(\n                  xTexelR' +
									m +
									'C' +
									g +
									'.xy, xTexelR' +
									m +
									'C' +
									(g + 2) +
									'.xy);\n              '),
							  g + 1 < f &&
									(v +=
										'\n                  xR' +
										m +
										'C' +
										(g + 1) +
										' = vec4(\n                    xTexelR' +
										m +
										'C' +
										g +
										'.zw, xTexelR' +
										m +
										'C' +
										(g + 2) +
										'.zw);\n                ')),
						(v += '}'));
				g < f &&
					((v +=
						'\n            vec4 wTexelR' +
						m +
						'C' +
						g +
						' = getW(' +
						m +
						', ' +
						g +
						', d1, q);\n            wR' +
						m +
						'C' +
						g +
						' = vec4(wTexelR' +
						m +
						'C' +
						g +
						'.xz, wTexelR' +
						m +
						'C' +
						g +
						'.xz);\n          '),
					g + 1 < f &&
						(v +=
							'\n              vec4 wTexelR' +
							m +
							'C' +
							(g + 1) +
							' = getW(' +
							m +
							', ' +
							(g + 1) +
							', d1, q);\n              wR' +
							m +
							'C' +
							(g + 1) +
							' =\n                vec4(wTexelR' +
							m +
							'C' +
							(g + 1) +
							'.xz, wTexelR' +
							m +
							'C' +
							(g + 1) +
							'.xz);'));
			}
		for (m = 0; m < p; m++)
			for (g = 0; g < f; g++)
				v += 'dotProd += xR' + m + 'C' + g + ' * wR' + m + 'C' + g + ';';
		var b = '',
			w = '';
		n &&
			((b = r
				? 'vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ' +
				  n +
				  '\n        }'
				: 'vec4 activation(vec4 x) {\n          ' + n + '\n        }'),
			(w = 'result = activation(result);'));
		var C = e ? 'result += getBiasAtOutCoords();' : '';
		e && this.variableNames.push('bias'),
			r && this.variableNames.push('preluActivationWeights'),
			(this.userCode =
				'\n      ' +
				b +
				'\n\n      const ivec2 strides = ivec2(' +
				u +
				', ' +
				c +
				');\n      const ivec2 pads = ivec2(' +
				a +
				', ' +
				s +
				');\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 dotProd = vec4(0.);\n\n        ' +
				v +
				'\n\n        vec4 result = dotProd;\n        ' +
				C +
				'\n        ' +
				w +
				'\n        setOutput(result);\n      }\n    ');
	}
	function Pi(t, e, n, r, o) {
		(this.variableNames = ['Image', 'Boxes', 'BoxInd']),
			(this.outputShape = []);
		var i = t[0],
			a = t[1],
			s = t[2],
			u = t[3],
			c = e[0],
			l = n[0],
			h = n[1];
		this.outputShape = [c, l, h, u];
		var p = 'bilinear' === r ? 1 : 0,
			f = [a - 1 + '.0', s - 1 + '.0'],
			d = f[0],
			v = f[1],
			m =
				1 < l
					? [
							'' + (a - 1) / (l - 1),
							'(y2-y1) * height_ratio',
							'y1*' + d + ' + float(y)*(height_scale)',
					  ]
					: ['0.0', '0.0', '0.5 * (y1+y2) * ' + d],
			g = m[0],
			y = m[1],
			x = m[2],
			b =
				1 < h
					? [
							'' + (s - 1) / (h - 1),
							'(x2-x1) * width_ratio',
							'x1*' + v + ' + float(x)*(width_scale)',
					  ]
					: ['0.0', '0.0', '0.5 * (x1+x2) * ' + v],
			w = b[0],
			C = b[1],
			E = b[2];
		this.userCode =
			'\n      const float height_ratio = float(' +
			g +
			');\n      const float width_ratio = float(' +
			w +
			');\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= ' +
			i +
			') {\n          return;\n        }\n\n        float height_scale = ' +
			y +
			';\n        float width_scale = ' +
			C +
			';\n\n        float in_y = ' +
			x +
			';\n        if( in_y < 0.0 || in_y > ' +
			d +
			' ) {\n          setOutput(float(' +
			o +
			'));\n          return;\n        }\n        float in_x = ' +
			E +
			';\n        if( in_x < 0.0 || in_x > ' +
			v +
			' ) {\n          setOutput(float(' +
			o +
			'));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(' +
			p +
			' == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    ';
	}
	function Bi(t, e, n) {
		this.variableNames = ['x'];
		var r = (this.outputShape = t).length,
			o = t[t.length - 1],
			i = n ? '<' : '>';
		this.userCode =
			'\n      int getIndex(int i) {\n        ' +
			(n ? 'return ' + o + ' -i - 1;' : 'return i;') +
			'\n      }\n\n      void main() {\n        ' +
			ni(r) +
			' coords = getOutputCoords();\n        int end = ' +
			Li(r, 'coords') +
			';\n        float val = 0.0;\n        for (int i = ' +
			o +
			' - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx ' +
			i +
			' end) {\n            continue;\n          }\n          if (idx == end && ' +
			e +
			') {\n            continue;\n          }\n          ' +
			Li(r, 'coords') +
			' = idx;\n          val += getX(' +
			(function (t, e) {
				if (1 === r) return e;
				if (2 === r) return e + '.x, ' + e + '.y';
				if (3 === r) return 'coords.x, coords.y, coords.z';
				if (4 === r) return 'coords.x, coords.y, coords.z, coords.w';
				throw Error('Cumulative sum for rank ' + r + ' is not yet supported');
			})(0, 'coords') +
			');\n        }\n        setOutput(val);\n      }\n    ';
	}
	function Li(t, e) {
		if (1 === t) return '' + e;
		if (2 === t) return e + '.y';
		if (3 === t) return e + '.z';
		if (4 === t) return e + '.w';
		throw Error('Cumulative sum for rank ' + t + ' is not yet supported');
	}
	function Wi(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !1),
			(this.packedOutput = !0),
			(this.outPackingScheme = Xt.DENSE);
		var e = ie(t),
			n = Yo();
		(this.outputShape = t),
			(this.userCode =
				'\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ' +
				$o(['r', 'c', 'd'], t) +
				'\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(' +
				e[0] +
				', ' +
				e[1] +
				'));\n        int index = 4 * (resTexRC.x * ' +
				e[1] +
				' + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getA(rc.x, rc.y, rc.z);\n        }\n\n        ' +
				n.output +
				' = result;\n      }\n    ');
	}
	function zi(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outPackingScheme = Xt.DENSE);
		var e = ie(t),
			n = Yo();
		(this.outputShape = t),
			(this.userCode =
				'\n      ivec3 outCoordsFromFlatIndex(int index) {\n        ' +
				$o(['r', 'c', 'd'], t) +
				'\n        return ivec3(r, c, d);\n      }\n\n      void main() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n          vec2(' +
				e[0] +
				', ' +
				e[1] +
				'));\n        int index = 4 * (resTexRC.x * ' +
				e[1] +
				' + resTexRC.y);\n\n        vec4 result = vec4(0.);\n\n        for (int i=0; i<4; i++) {\n          int flatIndex = index + i;\n          ivec3 rc = outCoordsFromFlatIndex(flatIndex);\n          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));\n        }\n\n        ' +
				n.output +
				' = result;\n      }\n    ');
	}
	function Ui(t) {
		(this.variableNames = ['X']),
			(this.outputShape = [t, t]),
			(this.userCode =
				'\n      void main() {\n          ivec2 coords = getOutputCoords();\n          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;\n          setOutput(val);\n      }\n    ');
	}
	function Vi(t) {
		(this.variableNames = ['A']), (this.outTexUsage = Yt.DOWNLOAD);
		var e = Yo();
		(this.outputShape = t),
			(this.userCode =
				'\n      ' +
				Qo +
				'\n\n      void main() {\n        float x = getAAtOutCoords();\n        ' +
				e.output +
				' = encode_float(x);\n      }\n    ');
	}
	function Gi(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !1),
			(this.outTexUsage = Yt.DOWNLOAD);
		var e = Yo();
		(this.outputShape = t),
			(this.userCode =
				'\n      ' +
				Qo +
				'\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));\n        ' +
				e.output +
				' = encode_float(x);\n      }\n    ');
	}
	function Hi(t, e, n) {
		void 0 === n && (n = !1), (this.variableNames = ['A']);
		var r = Yo(),
			o = e[0],
			i = e[1];
		this.outputShape = t;
		var a = 'result';
		n && (a = 'floor(result * 255. + 0.5)'),
			(this.userCode =
				'\n      ' +
				Jo(t) +
				'\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        int flatIndex = getFlatIndex(coords);\n        int offset = imod(flatIndex, 4);\n\n        flatIndex = idiv(flatIndex, 4, 1.);\n        \n        int r = flatIndex / ' +
				i +
				';\n        int c = imod(flatIndex, ' +
				i +
				');\n        vec2 uv = (vec2(c, r) + halfCR) / vec2(' +
				i +
				'.0, ' +
				o +
				'.0);\n        vec4 values = ' +
				r.texture2D +
				'(A, uv);\n\n        float result;\n\n        if(offset == 0) {\n          result = values[0];\n        } else if(offset == 1) {\n          result = values[1];\n        } else if(offset == 2) {\n          result = values[2];\n        } else {\n          result = values[3];\n        }\n\n        ' +
				r.output +
				' = vec4(' +
				a +
				', 0., 0., 0.);\n      }\n    ');
	}
	function qi(t, e, n) {
		void 0 === n && (n = !1),
			(this.variableNames = ['A']),
			(this.packedInputs = !1),
			(this.packedOutput = !0);
		var r = Yo(),
			o = e[0],
			i = e[1];
		this.outputShape = t;
		var a = '',
			s = 'result';
		n && (s = 'floor(result * 255. + 0.5)');
		for (var u = 0; u <= 1; u++)
			for (var c = 0; c <= 1; c++) {
				var l = 2 * u + c;
				a +=
					'\n          localCoords = coords;\n          if(localCoords[2] + ' +
					c +
					' < ' +
					t[2] +
					') {\n            localCoords[2] += ' +
					c +
					';\n            if(localCoords[1] + ' +
					u +
					' < ' +
					t[1] +
					') {\n              localCoords[1] += ' +
					u +
					';\n\n              flatIndex = getFlatIndex(localCoords);\n              offset = imod(flatIndex, 4);\n\n              flatIndex = idiv(flatIndex, 4, 1.);\n\n              r = flatIndex / ' +
					i +
					';\n              c = imod(flatIndex, ' +
					i +
					');\n              uv = (vec2(c, r) + halfCR) / vec2(' +
					i +
					'.0, ' +
					o +
					'.0);\n              values = ' +
					r.texture2D +
					'(A, uv);\n\n              if(offset == 0) {\n                result[' +
					l +
					'] = values[0];\n              } else if(offset == 1) {\n                result[' +
					l +
					'] = values[1];\n              } else if(offset == 2) {\n                result[' +
					l +
					'] = values[2];\n              } else {\n                result[' +
					l +
					'] = values[3];\n              }\n            }\n          }\n        ';
			}
		this.userCode =
			'\n      ' +
			Jo(t) +
			'\n\n      void main() {\n        ivec3 coords = getOutputCoords();\n\n        vec4 result = vec4(0.);\n        int flatIndex, r, c, offset;\n        ivec3 localCoords;\n        vec2 uv;\n        vec4 values;\n\n        ' +
			a +
			'\n\n        ' +
			r.output +
			' = ' +
			s +
			';\n      }\n    ';
	}
	function ji(t, e, n) {
		this.variableNames = ['real', 'imag'];
		var r = e[1];
		this.outputShape = e;
		var o = n ? '2.0 * ' + Math.PI : '-2.0 * ' + Math.PI,
			i = n ? r + '.0' : '1.0';
		this.userCode =
			'\n      const float exponentMultiplier = ' +
			o +
			';\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        ' +
			t +
			'\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(' +
			r +
			');\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < ' +
			r +
			'; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / ' +
			i +
			';\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    ';
	}
	function Ki(t, e, n) {
		this.variableNames = ['A', 'indices'];
		var r = t.slice();
		(r[n] = e), (this.outputShape = r), (this.rank = r.length);
		var o = ni(this.rank),
			i = (function (t, e) {
				var n = t.length;
				if (4 < n)
					throw Error('Gather for rank ' + n + ' is not yet supported');
				if (1 === n) return 'int(getIndices(resRC))';
				for (
					var r = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'], o = [], i = 0;
					i < t.length;
					i++
				)
					i === e ? o.push('int(getIndices(' + r[i] + '))') : o.push('' + r[i]);
				return o.join();
			})(t, n);
		this.userCode =
			'\n      void main() {\n        ' +
			o +
			' resRC = getOutputCoords();\n        setOutput(getA(' +
			i +
			'));\n      }\n    ';
	}
	var Xi =
			((Ji.prototype.getHeightCoordString = function () {
				return 'NHWC' === this.dataFormat ? 'coords[1]' : 'coords[2]';
			}),
			(Ji.prototype.getWidthCoordString = function () {
				return 'NHWC' === this.dataFormat ? 'coords[2]' : 'coords[3]';
			}),
			(Ji.prototype.getDepthCoordString = function () {
				return 'NHWC' === this.dataFormat ? 'coords[3]' : 'coords[1]';
			}),
			(Ji.prototype.getOutputDepthSize = function () {
				return 'NHWC' === this.dataFormat
					? this.outputShape[3]
					: this.outputShape[1];
			}),
			(Ji.prototype.getInputSamplingString = function () {
				return 'NHWC' === this.dataFormat
					? 'getX(b, in_h, in_w, in_d)'
					: 'getX(b, in_d, in_h, in_w)';
			}),
			Ji),
		Yi =
			(($i.prototype.getCustomSetupFunc = function (n) {
				var r = this;
				return function (t, e) {
					null == r.valueLoc &&
						(r.valueLoc = t.getUniformLocationNoThrow(e, 'value')),
						t.gl.uniform1f(r.valueLoc, n);
				};
			}),
			$i);
	function $i(t, e) {
		(this.outputShape = []),
			(this.variableNames = ['x']),
			(this.outputShape = t),
			(this.userCode =
				'\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    ');
	}
	function Ji(t, e, n) {
		(this.variableNames = ['x']),
			(this.outputShape = []),
			(this.outputShape = t),
			(this.blockSize = e),
			(this.dataFormat = n),
			(this.userCode =
				'\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = ' +
				this.getHeightCoordString() +
				';\n      int w = ' +
				this.getWidthCoordString() +
				';\n      int d = ' +
				this.getDepthCoordString() +
				';\n\n      int in_h = h / ' +
				e +
				';\n      int offset_h = imod(h, ' +
				e +
				');\n      int in_w = w / ' +
				e +
				';\n      int offset_w = imod(w, ' +
				e +
				');\n      int offset_d = (offset_h * ' +
				e +
				' + offset_w) *\n        ' +
				this.getOutputDepthSize() +
				';\n      int in_d = d + offset_d;\n\n      float result = ' +
				this.getInputSamplingString() +
				';\n      setOutput(result);\n    }\n  ');
	}
	function Qi(t, e, n) {
		(this.sliceDim = t),
			(this.strides = e),
			(this.variableNames = ['x', 'indices']),
			(this.outputShape = n);
		var r = ni(e.length),
			o = ni(n.length),
			i = 1 < this.sliceDim ? 'strides[j]' : 'strides';
		this.userCode =
			'\n        ' +
			r +
			' strides = ' +
			r +
			'(' +
			this.strides +
			');\n         void main() {\n          ' +
			o +
			' coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < ' +
			this.sliceDim +
			'; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * ' +
			i +
			';\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      ';
	}
	function Zi(t, e) {
		var n = Yo();
		return pe(
			t,
			e,
			n.version +
				'\n    precision highp float;\n    ' +
				n.attribute +
				' vec3 clipSpacePos;\n    ' +
				n.attribute +
				' vec2 uv;\n    ' +
				n.varyingVs +
				' vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }'
		);
	}
	function ta(t, e) {
		return be(
			t,
			e,
			new Float32Array([
				-1,
				1,
				0,
				0,
				1,
				-1,
				-1,
				0,
				0,
				0,
				1,
				1,
				0,
				1,
				1,
				1,
				-1,
				0,
				1,
				0,
			])
		);
	}
	function ea(t, e) {
		return we(t, e, new Uint16Array([0, 1, 2, 2, 1, 3]));
	}
	function na(t, e, n, r, o, i, a) {
		Ee(n, r);
		var s = Ce(t, e),
			u = t.TEXTURE_2D;
		return (
			ue(t, e, function () {
				return t.bindTexture(u, s);
			}),
			ue(t, e, function () {
				return t.texParameteri(u, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
			}),
			ue(t, e, function () {
				return t.texParameteri(u, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
			}),
			ue(t, e, function () {
				return t.texParameteri(u, t.TEXTURE_MIN_FILTER, t.NEAREST);
			}),
			ue(t, e, function () {
				return t.texParameteri(u, t.TEXTURE_MAG_FILTER, t.NEAREST);
			}),
			ue(t, e, function () {
				return t.texImage2D(u, 0, o, n, r, 0, i, a, null);
			}),
			ue(t, e, function () {
				return t.bindTexture(t.TEXTURE_2D, null);
			}),
			s
		);
	}
	function ra(t, e, n, r, o) {
		var i = oe(n, r);
		return na(
			t,
			e,
			i[0],
			i[1],
			o.internalFormatFloat,
			o.textureFormatFloat,
			t.FLOAT
		);
	}
	function oa(t, e, n, r, o) {
		var i = oe(n, r);
		return na(
			t,
			e,
			i[0],
			i[1],
			o.internalFormatHalfFloat,
			o.textureFormatFloat,
			o.textureTypeHalfFloat
		);
	}
	function ia(t, e, n, r, o) {
		var i = oe(n, r);
		return na(t, e, i[0], i[1], t.RGBA, t.RGBA, t.UNSIGNED_BYTE);
	}
	function aa(t, e, n, r, o) {
		var i = ae(n, r);
		return na(t, e, i[0], i[1], o.internalFormatPackedFloat, t.RGBA, t.FLOAT);
	}
	function sa(t, e, n, r, o) {
		var i = ae(n, r);
		return na(
			t,
			e,
			i[0],
			i[1],
			o.internalFormatPackedHalfFloat,
			t.RGBA,
			o.textureTypeHalfFloat
		);
	}
	function ua(t, e, n, r) {
		return (
			ue(t, e, function () {
				return t.bindBuffer(t.ARRAY_BUFFER, r);
			}),
			Ie(t, e, n, 'clipSpacePos', r, 3, 20, 0) &&
				Ie(t, e, n, 'uv', r, 2, 20, 12)
		);
	}
	function ca(t, e, n, r, o, i, a) {
		var s, u, c;
		ue(t, e, function () {
			return t.bindTexture(t.TEXTURE_2D, n);
		}),
			(c =
				i instanceof Uint8Array
					? ((s = new Uint8Array(r * o * 4)), (u = t.UNSIGNED_BYTE), t.RGBA)
					: ((s = new Float32Array(r * o * 4)),
					  (u = t.FLOAT),
					  a.internalFormatPackedFloat)),
			s.set(i),
			ue(t, e, function () {
				return t.texImage2D(t.TEXTURE_2D, 0, c, r, o, 0, t.RGBA, u, s);
			}),
			ue(t, e, function () {
				return t.bindTexture(t.TEXTURE_2D, null);
			});
	}
	function la(t, e, n, r) {
		ue(t, e, function () {
			return t.bindTexture(t.TEXTURE_2D, n);
		}),
			r.data instanceof Uint8Array
				? ue(t, e, function () {
						return t.texImage2D(
							t.TEXTURE_2D,
							0,
							t.RGBA,
							r.width,
							r.height,
							0,
							t.RGBA,
							t.UNSIGNED_BYTE,
							r.data
						);
				  })
				: ue(t, e, function () {
						return t.texImage2D(
							t.TEXTURE_2D,
							0,
							t.RGBA,
							t.RGBA,
							t.UNSIGNED_BYTE,
							r
						);
				  }),
			ue(t, e, function () {
				return t.bindTexture(t.TEXTURE_2D, null);
			});
	}
	function ha(t, e, n, r, o) {
		var i = t.createBuffer();
		ue(t, e, function () {
			return t.bindBuffer(t.PIXEL_PACK_BUFFER, i);
		});
		var a = 16 * n * r;
		return (
			ue(t, e, function () {
				return t.bufferData(t.PIXEL_PACK_BUFFER, a, t.STREAM_READ);
			}),
			ue(t, e, function () {
				return t.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, 0);
			}),
			ue(t, e, function () {
				return t.bindBuffer(t.PIXEL_PACK_BUFFER, null);
			}),
			i
		);
	}
	function pa(t, e, n) {
		var r = t,
			o = new Float32Array(n);
		return (
			r.bindBuffer(r.PIXEL_PACK_BUFFER, e),
			r.getBufferSubData(r.PIXEL_PACK_BUFFER, 0, o),
			r.bindBuffer(r.PIXEL_PACK_BUFFER, null),
			o
		);
	}
	function fa(t, e, n, r, o) {
		var i = oe(n, r),
			a = i[0],
			s = i[1],
			u = new Uint8Array(n * r * 4);
		return (
			ue(t, e, function () {
				return t.readPixels(
					0,
					0,
					a,
					s,
					o.downloadTextureFormat,
					t.UNSIGNED_BYTE,
					u
				);
			}),
			new Float32Array(u.buffer)
		);
	}
	function da(t, e, n, r, o, i, a, s) {
		var u,
			c = t,
			l = new Float32Array((u = ae(i, a))[0] * u[1] * 4);
		return (
			c.bindBuffer(c.PIXEL_PACK_BUFFER, e),
			c.getBufferSubData(c.PIXEL_PACK_BUFFER, 0, l),
			c.bindBuffer(c.PIXEL_PACK_BUFFER, null),
			l
		);
	}
	function va(t, e, n, r) {
		var o = new Float32Array(n * r * 4);
		return (
			ue(t, e, function () {
				return t.readPixels(0, 0, r, n, t.RGBA, t.FLOAT, o);
			}),
			o
		);
	}
	var ma = Object.freeze({
			createVertexShader: Zi,
			createVertexBuffer: ta,
			createIndexBuffer: ea,
			createFloat32MatrixTexture: ra,
			createFloat16MatrixTexture: oa,
			createUnsignedBytesMatrixTexture: ia,
			createPackedMatrixTexture: aa,
			createFloat16PackedMatrixTexture: sa,
			bindVertexProgramAttributeStreams: ua,
			uploadDenseMatrixToTexture: ca,
			uploadPixelDataToTexture: la,
			createBufferFromOutputTexture: ha,
			downloadFloat32MatrixFromBuffer: pa,
			downloadByteEncodedFloatMatrixFromOutputTexture: fa,
			downloadPackedMatrixFromBuffer: da,
			downloadMatrixFromPackedOutputTexture: va,
		}),
		ga =
			(Object.defineProperty(ya.prototype, 'debug', {
				get: function () {
					return _().getBool('DEBUG');
				},
				enumerable: !0,
				configurable: !0,
			}),
			(ya.prototype.dispose = function () {
				var t = this;
				if (!this.disposed) {
					null != this.program &&
						console.warn(
							'Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.'
						),
						null != this.outputTexture &&
							console.warn(
								'Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.'
							);
					var e = this.gl;
					ue(e, this.debug, function () {
						return e.finish();
					}),
						ue(e, this.debug, function () {
							return e.bindFramebuffer(e.FRAMEBUFFER, null);
						}),
						ue(e, this.debug, function () {
							return e.deleteFramebuffer(t.framebuffer);
						}),
						ue(e, this.debug, function () {
							return e.bindBuffer(e.ARRAY_BUFFER, null);
						}),
						ue(e, this.debug, function () {
							return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null);
						}),
						ue(e, this.debug, function () {
							return e.deleteBuffer(t.indexBuffer);
						}),
						(this.disposed = !0);
				}
			}),
			(ya.prototype.createFloat32MatrixTexture = function (t, e) {
				return (
					this.throwIfDisposed(),
					ra(this.gl, this.debug, t, e, this.textureConfig)
				);
			}),
			(ya.prototype.createFloat16MatrixTexture = function (t, e) {
				return (
					this.throwIfDisposed(),
					oa(this.gl, this.debug, t, e, this.textureConfig)
				);
			}),
			(ya.prototype.createUnsignedBytesMatrixTexture = function (t, e) {
				return (
					this.throwIfDisposed(),
					ia(this.gl, this.debug, t, e, this.textureConfig)
				);
			}),
			(ya.prototype.uploadPixelDataToTexture = function (t, e) {
				this.throwIfDisposed(), la(this.gl, this.debug, t, e);
			}),
			(ya.prototype.uploadDenseMatrixToTexture = function (t, e, n, r) {
				this.throwIfDisposed(),
					ca(this.gl, this.debug, t, e, n, r, this.textureConfig);
			}),
			(ya.prototype.createFloat16PackedMatrixTexture = function (t, e) {
				return (
					this.throwIfDisposed(),
					sa(this.gl, this.debug, t, e, this.textureConfig)
				);
			}),
			(ya.prototype.createPackedMatrixTexture = function (t, e) {
				return (
					this.throwIfDisposed(),
					aa(this.gl, this.debug, t, e, this.textureConfig)
				);
			}),
			(ya.prototype.deleteMatrixTexture = function (t) {
				var e = this;
				this.throwIfDisposed(),
					this.outputTexture === t &&
						(Te(this.gl, this.debug, this.framebuffer),
						(this.outputTexture = null)),
					ue(this.gl, this.debug, function () {
						return e.gl.deleteTexture(t);
					});
			}),
			(ya.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (
				t,
				e,
				n
			) {
				var r = this;
				return this.downloadMatrixDriver(t, function () {
					return fa(r.gl, r.debug, e, n, r.textureConfig);
				});
			}),
			(ya.prototype.downloadPackedMatrixFromBuffer = function (
				t,
				e,
				n,
				r,
				o,
				i
			) {
				return da(this.gl, t, 0, 0, 0, o, i, this.textureConfig);
			}),
			(ya.prototype.downloadFloat32MatrixFromBuffer = function (t, e) {
				return pa(this.gl, t, e);
			}),
			(ya.prototype.createBufferFromTexture = function (t, e, n) {
				this.bindTextureToFrameBuffer(t);
				var r = ha(this.gl, this.debug, e, n, this.textureConfig);
				return this.unbindTextureToFrameBuffer(), r;
			}),
			(ya.prototype.createAndWaitForFence = function () {
				var t = this.createFence(this.gl);
				return this.pollFence(t);
			}),
			(ya.prototype.createFence = function (t) {
				var e,
					n,
					r = this;
				if (_().getBool('WEBGL_FENCE_API_ENABLED')) {
					var o = t,
						i = o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE, 0);
					t.flush(),
						(n = function () {
							var t = o.clientWaitSync(i, 0, 0);
							return t === o.ALREADY_SIGNALED || t === o.CONDITION_SATISFIED;
						}),
						(e = i);
				} else
					n =
						0 < _().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
							? ((e = this.beginQuery()),
							  this.endQuery(),
							  function () {
									return r.isQueryAvailable(
										e,
										_().getNumber(
											'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'
										)
									);
							  })
							: function () {
									return !0;
							  };
				return { query: e, isFencePassed: n };
			}),
			(ya.prototype.downloadMatrixFromPackedTexture = function (t, e, n) {
				var r = this;
				return this.downloadMatrixDriver(t, function () {
					return va(r.gl, r.debug, e, n);
				});
			}),
			(ya.prototype.createProgram = function (t) {
				this.throwIfDisposed();
				var e = this.gl,
					n = fe(e, this.debug, t),
					r = Zi(e, this.debug),
					o = ge(e, this.debug);
				return (
					ue(e, this.debug, function () {
						return e.attachShader(o, r);
					}),
					ue(e, this.debug, function () {
						return e.attachShader(o, n);
					}),
					ye(e, this.debug, o),
					this.debug && xe(e, this.debug, o),
					this.vertexAttrsAreBound ||
						(this.setProgram(o),
						(this.vertexAttrsAreBound = ua(
							e,
							this.debug,
							this.program,
							this.vertexBuffer
						))),
					o
				);
			}),
			(ya.prototype.deleteProgram = function (t) {
				var e = this;
				this.throwIfDisposed(),
					t === this.program && (this.program = null),
					null != t &&
						ue(this.gl, this.debug, function () {
							return e.gl.deleteProgram(t);
						});
			}),
			(ya.prototype.setProgram = function (t) {
				var e = this;
				this.throwIfDisposed(),
					(this.program = t),
					null != this.program &&
						this.debug &&
						xe(this.gl, this.debug, this.program),
					ue(this.gl, this.debug, function () {
						return e.gl.useProgram(t);
					});
			}),
			(ya.prototype.getUniformLocation = function (t, e, n) {
				return (
					void 0 === n && (n = !0),
					this.throwIfDisposed(),
					n ? ke(this.gl, this.debug, t, e) : Se(this.gl, t, e)
				);
			}),
			(ya.prototype.getAttributeLocation = function (t, e) {
				var n = this;
				return (
					this.throwIfDisposed(),
					ue(this.gl, this.debug, function () {
						return n.gl.getAttribLocation(t, e);
					})
				);
			}),
			(ya.prototype.getUniformLocationNoThrow = function (t, e) {
				return this.throwIfDisposed(), this.gl.getUniformLocation(t, e);
			}),
			(ya.prototype.setInputMatrixTexture = function (t, e, n) {
				this.throwIfDisposed(),
					this.throwIfNoProgram(),
					De(this.gl, this.debug, this.program, t, e, n);
			}),
			(ya.prototype.setOutputMatrixTexture = function (t, e, n) {
				this.setOutputMatrixTextureDriver(t, n, e);
			}),
			(ya.prototype.setOutputPackedMatrixTexture = function (t, e, n) {
				this.throwIfDisposed();
				var r = ae(e, n),
					o = r[0],
					i = r[1];
				this.setOutputMatrixTextureDriver(t, o, i);
			}),
			(ya.prototype.setOutputMatrixWriteRegion = function (t, e, n, r) {
				this.setOutputMatrixWriteRegionDriver(n, t, r, e);
			}),
			(ya.prototype.setOutputPackedMatrixWriteRegion = function (t, e, n, r) {
				throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
			}),
			(ya.prototype.debugValidate = function () {
				null != this.program && xe(this.gl, this.debug, this.program),
					Ne(this.gl);
			}),
			(ya.prototype.executeProgram = function () {
				this.throwIfDisposed(), this.throwIfNoProgram();
				var t = this.gl;
				this.debug && this.debugValidate(),
					ue(t, this.debug, function () {
						return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0);
					});
			}),
			(ya.prototype.blockUntilAllProgramsCompleted = function () {
				var t = this;
				this.throwIfDisposed(),
					ue(this.gl, this.debug, function () {
						return t.gl.finish();
					});
			}),
			(ya.prototype.getQueryTimerExtension = function () {
				return (
					null == this.disjointQueryTimerExtension &&
						(this.disjointQueryTimerExtension = he(
							this.gl,
							this.debug,
							2 ===
								_().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
								? 'EXT_disjoint_timer_query_webgl2'
								: 'EXT_disjoint_timer_query'
						)),
					this.disjointQueryTimerExtension
				);
			}),
			(ya.prototype.getQueryTimerExtensionWebGL2 = function () {
				return this.getQueryTimerExtension();
			}),
			(ya.prototype.getQueryTimerExtensionWebGL1 = function () {
				return this.getQueryTimerExtension();
			}),
			(ya.prototype.beginQuery = function () {
				if (
					2 === _().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
				) {
					var t = this.gl,
						e = this.getQueryTimerExtensionWebGL2(),
						n = t.createQuery();
					return t.beginQuery(e.TIME_ELAPSED_EXT, n), n;
				}
				var r = this.getQueryTimerExtensionWebGL1(),
					o = r.createQueryEXT();
				return r.beginQueryEXT(r.TIME_ELAPSED_EXT, o), o;
			}),
			(ya.prototype.endQuery = function () {
				if (
					2 !== _().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
				) {
					var t = this.getQueryTimerExtensionWebGL1();
					t.endQueryEXT(t.TIME_ELAPSED_EXT);
				} else {
					var e = this.gl,
						n = this.getQueryTimerExtensionWebGL2();
					e.endQuery(n.TIME_ELAPSED_EXT);
				}
			}),
			(ya.prototype.waitForQueryAndGetTime = function (n) {
				return y(this, void 0, void 0, function () {
					var e = this;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [
									4,
									k(function () {
										return (
											e.disposed ||
											e.isQueryAvailable(
												n,
												_().getNumber(
													'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'
												)
											)
										);
									}),
								];
							case 1:
								return (
									t.sent(),
									[
										2,
										this.getQueryTime(
											n,
											_().getNumber(
												'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'
											)
										),
									]
								);
						}
					});
				});
			}),
			(ya.prototype.getQueryTime = function (t, e) {
				if (0 === e) return null;
				if (2 === e) {
					var n = this.gl;
					return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6;
				}
				var r = this.getQueryTimerExtensionWebGL1();
				return r.getQueryObjectEXT(t, r.QUERY_RESULT_EXT) / 1e6;
			}),
			(ya.prototype.isQueryAvailable = function (t, e) {
				if (0 === e) return !0;
				if (2 !== e)
					return (
						(o = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(
							t,
							r.QUERY_RESULT_AVAILABLE_EXT
						)),
						null == this.disjoint &&
							(this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
						o && !this.disjoint
					);
				var n = this.gl,
					r = this.getQueryTimerExtensionWebGL2(),
					o = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
				return (
					null == this.disjoint &&
						(this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)),
					o && !this.disjoint
				);
			}),
			(ya.prototype.pollFence = function (e) {
				var n = this;
				return new Promise(function (t) {
					n.addItemToPoll(
						function () {
							return e.isFencePassed();
						},
						function () {
							return t();
						}
					);
				});
			}),
			(ya.prototype.pollItems = function () {
				for (
					var t = (function (t) {
							for (var e = 0; e < t.length && t[e](); ++e);
							return e - 1;
						})(
							this.itemsToPoll.map(function (t) {
								return t.isDoneFn;
							})
						),
						e = 0;
					e <= t;
					++e
				)
					(0, this.itemsToPoll[e].resolveFn)();
				this.itemsToPoll = this.itemsToPoll.slice(t + 1);
			}),
			(ya.prototype.addItemToPoll = function (t, e) {
				var n = this;
				this.itemsToPoll.push({ isDoneFn: t, resolveFn: e }),
					1 < this.itemsToPoll.length ||
						k(function () {
							return n.pollItems(), 0 === n.itemsToPoll.length;
						});
			}),
			(ya.prototype.bindTextureToFrameBuffer = function (t) {
				this.throwIfDisposed(),
					Ae(this.gl, this.debug, t, this.framebuffer),
					this.debug && Ne(this.gl);
			}),
			(ya.prototype.unbindTextureToFrameBuffer = function () {
				null != this.outputTexture
					? (Ae(this.gl, this.debug, this.outputTexture, this.framebuffer),
					  this.debug && Ne(this.gl))
					: Te(this.gl, this.debug, this.framebuffer);
			}),
			(ya.prototype.downloadMatrixDriver = function (t, e) {
				this.bindTextureToFrameBuffer(t);
				var n = e();
				return this.unbindTextureToFrameBuffer(), n;
			}),
			(ya.prototype.setOutputMatrixTextureDriver = function (t, e, n) {
				this.throwIfDisposed();
				var r = this.gl;
				Ae(r, this.debug, t, this.framebuffer),
					this.debug && Ne(r),
					(this.outputTexture = t),
					ue(r, this.debug, function () {
						return r.viewport(0, 0, e, n);
					}),
					ue(r, this.debug, function () {
						return r.scissor(0, 0, e, n);
					});
			}),
			(ya.prototype.setOutputMatrixWriteRegionDriver = function (t, e, n, r) {
				var o = this;
				this.throwIfDisposed(),
					ue(this.gl, this.debug, function () {
						return o.gl.scissor(t, e, n, r);
					});
			}),
			(ya.prototype.throwIfDisposed = function () {
				if (this.disposed)
					throw new Error('Attempted to use disposed GPGPUContext.');
			}),
			(ya.prototype.throwIfNoProgram = function () {
				if (null == this.program)
					throw new Error('No GPU program is currently set.');
			}),
			ya);
	function ya(t) {
		(this.outputTexture = null),
			(this.program = null),
			(this.disposed = !1),
			(this.vertexAttrsAreBound = !1),
			(this.itemsToPoll = []);
		var e = _().getNumber('WEBGL_VERSION');
		null != t ? ne(e, (this.gl = t)) : (this.gl = re(e));
		var n = 'WEBGL_color_buffer_float';
		if (1 === _().getNumber('WEBGL_VERSION')) {
			if (
				((this.textureFloatExtension = he(
					this.gl,
					this.debug,
					'OES_texture_float'
				)),
				qe(this.gl, 'OES_texture_half_float'))
			)
				this.textureHalfFloatExtension = he(
					this.gl,
					this.debug,
					'OES_texture_half_float'
				);
			else if (_().get('WEBGL_FORCE_F16_TEXTURES'))
				throw new Error(
					'GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.'
				);
			if (
				((this.colorBufferFloatExtension = this.gl.getExtension(n)),
				qe(this.gl, 'EXT_color_buffer_half_float'))
			)
				this.colorBufferHalfFloatExtension = he(
					this.gl,
					this.debug,
					'EXT_color_buffer_half_float'
				);
			else if (_().get('WEBGL_FORCE_F16_TEXTURES'))
				throw new Error(
					'GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.'
				);
		} else if (((n = 'EXT_color_buffer_float'), qe(this.gl, n)))
			this.colorBufferFloatExtension = this.gl.getExtension(n);
		else {
			if (!qe(this.gl, 'EXT_color_buffer_half_float'))
				throw new Error('GL context does not support color renderable floats');
			this.colorBufferHalfFloatExtension = this.gl.getExtension(
				'EXT_color_buffer_half_float'
			);
		}
		(this.vertexBuffer = ta(this.gl, this.debug)),
			(this.indexBuffer = ea(this.gl, this.debug)),
			(this.framebuffer = _e(this.gl, this.debug)),
			(this.textureConfig = se(this.gl, this.textureHalfFloatExtension));
	}
	function xa(t, s) {
		if (t.length !== s.length)
			throw Error(
				'Binary was compiled with ' +
					t.length +
					' inputs, but was executed with ' +
					s.length +
					' inputs'
			);
		t.forEach(function (t, e) {
			var n = t.logicalShape,
				r = s[e],
				o = r.shape;
			if (!D(n, o))
				throw Error(
					'Binary was compiled with different shapes than the current args. Shapes ' +
						n +
						' and ' +
						o +
						' must match'
				);
			if (!t.isUniform || !r.isUniform) {
				var i = t.texShape,
					a = r.isUniform ? null : r.texData.texShape;
				if (!D(i, a))
					throw Error(
						'Binary was compiled with different texture shapes than the current args. Shape ' +
							i +
							' and ' +
							a +
							' must match'
					);
			}
		});
	}
	function ba(t, e, n) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t);
		for (
			var r = n.filterWidth,
				o = n.inChannels,
				i = n.strideWidth,
				a = n.strideHeight,
				s = n.padInfo,
				u = n.outWidth,
				c = n.dilationWidth,
				l = n.dilationHeight,
				h = n.dataFormat,
				p = s.left,
				f = s.top,
				d = o * r,
				v = Yo(),
				m = 'channelsLast' === h,
				g = m ? 0 : 1,
				y = m ? 1 : 2,
				x = '',
				b = 0;
			b <= 1;
			b++
		)
			for (var w = 0; w <= 1; w++)
				x +=
					'\n          blockIndex = rc.y + ' +
					w +
					';\n          pos = rc.x + ' +
					b +
					';\n\n          if(blockIndex < ' +
					t[1] +
					' && pos < ' +
					t[0] +
					') {\n            offsetY = int(blockIndex / (' +
					u +
					')) * ' +
					a +
					' - ' +
					f +
					';\n            d0 = offsetY + ' +
					l +
					' * (pos / ' +
					d +
					');\n\n            if(d0 < ' +
					e[g] +
					' && d0 >= 0) {\n\n              offsetX = int(mod(float(blockIndex), ' +
					u +
					'.) * ' +
					i +
					'. - ' +
					p +
					'.);\n              d1 = offsetX + ' +
					c +
					' * (int(mod(float(pos), ' +
					d +
					'.) / ' +
					o +
					'.));\n\n              if(d1 < ' +
					e[y] +
					' && d1 >= 0) {\n\n                ch = int(mod(float(pos), ' +
					o +
					'.));\n\n                if (' +
					m +
					') {\n                  innerDims = vec2(d1, ch);\n                  result[' +
					(2 * b + w) +
					'] = getChannel(\n                    getA(d0, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                } else {\n                  innerDims = vec2(d0, d1);\n                  result[' +
					(2 * b + w) +
					'] = getChannel(\n                    getA(ch, int(innerDims.x),\n                    int(innerDims.y)), innerDims);\n                }\n              }\n            }\n          }\n        ';
		this.userCode =
			'\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;\n        vec2 innerDims;\n\n        ' +
			x +
			'\n\n        ' +
			v.output +
			' = result;\n      }\n    ';
	}
	function wa(t, e, n, r, o) {
		(this.variableNames = ['x']), (this.outputShape = []);
		var i,
			a = e,
			s = t[3] - 1;
		this.outputShape = t;
		var u = 'float(' + n + ') + float(' + r + ') * sum';
		(i =
			0.5 === o
				? 'inversesqrt(' + u + ')'
				: 1 === o
				? '1.0/(' + u + ')'
				: 'exp(log(' + u + ') * float(-' + o + '));'),
			(this.userCode =
				'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -' +
				a +
				'; j <= ' +
				a +
				'; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  ' +
				s +
				') {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * ' +
				i +
				';\n        setOutput(val);\n      }\n    ');
	}
	function Ca(t, e, n, r, o) {
		(this.variableNames = ['inputImage', 'outputImage', 'dy']),
			(this.outputShape = []),
			(this.outputShape = t),
			(this.depth = t[3]),
			(this.depthRadius = e),
			(this.bias = n),
			(this.alpha = r),
			(this.beta = o),
			(this.userCode =
				'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < ' +
				this.depth +
				'; ++d) {\n          int depthBegin = int(max(0.0, float(d - ' +
				e +
				')));\n          int depthEnd = int(min(float(' +
				this.depth +
				'),\n              float(d + ' +
				e +
				' + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = ' +
				this.depth +
				';\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(' +
				r +
				') * norm + float(' +
				n +
				');\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(' +
				r +
				')\n                * float(' +
				o +
				')\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * ' +
				o +
				');\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    ');
	}
	function Ea(t, e, n, r, o) {
		(this.variableNames = ['x']),
			(this.outputShape = []),
			(this.packedInputs = !0),
			(this.packedOutput = !0);
		var i,
			a = e,
			s = t[3] - 1;
		this.outputShape = t;
		var u = 'float(' + n + ') + float(' + r + ') * sum';
		(i =
			0.5 === o
				? 'inversesqrt(' + u + ')'
				: 1 === o
				? '1.0/(' + u + ')'
				: 'exp(log(' + u + ') * float(-' + o + '));'),
			(this.userCode =
				'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords.x;\n        int r = coords.y;\n        int c = coords.z;\n        int d = coords.w;\n\n        bool hasNextCol = d < ' +
				this.outputShape[3] +
				';\n        bool hasNextRow = c < ' +
				this.outputShape[2] +
				';\n\n        vec4 sum = vec4(0.);\n        vec4 xFragAtOutputCoords = getX(b, r, c, d);\n\n        vec4 xAtOutputCoords = vec4(\n          getChannel(xFragAtOutputCoords, vec2(c, d)),\n          hasNextCol ?\n            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,\n          hasNextRow ?\n            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0\n        );\n\n        int firstChannel = d - ' +
				a +
				';\n        vec2 cache = vec2(0.);\n        if(firstChannel >= 0){\n          vec4 firstChannelFrag = getX(b, r, c, firstChannel);\n          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));\n            if(hasNextRow){\n              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));\n            }\n        }\n\n        ivec2 depth = ivec2(d, d + 1);\n        for (int j = - ' +
				a +
				'; j <= ' +
				a +
				'; j++) {\n          ivec2 idx = depth + j;\n          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));\n          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(' +
				s +
				'));\n\n          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;\n          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;\n\n          if(depthInRange || depthPlusOneInRange){\n            vec4 z = vec4(0.);\n            vec4 xFragAtCurrentDepth;\n            z.xz = cache.xy;\n            if(depthPlusOneInRange && hasNextCol){\n              xFragAtCurrentDepth = idx.y != d ?\n                getX(b, r, c, idx.y) : xFragAtOutputCoords;\n              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));\n              if(hasNextRow){\n                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));\n              }\n            }\n            cache.xy = z.yw;\n            sum += z * z;\n          }\n        }\n        vec4 result = xAtOutputCoords * ' +
				i +
				';\n        setOutput(result);\n      }\n    ');
	}
	function _a(t) {
		(this.variableNames = ['dy', 'maxPos']), (this.outputShape = t.inShape);
		var e = t.strideHeight,
			n = t.strideWidth,
			r = t.dilationHeight,
			o = t.effectiveFilterHeight,
			i = t.effectiveFilterWidth,
			a = o - 1 - t.padInfo.top,
			s = i - 1 - t.padInfo.left,
			u = o * i - 1;
		this.userCode =
			'\n      const ivec2 pads = ivec2(' +
			a +
			', ' +
			s +
			');\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < ' +
			o +
			';\n          wR += ' +
			r +
			') {\n          float dyR = float(dyRCorner + wR) / ' +
			e +
			'.0;\n\n          if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < ' +
			i +
			'; wC++) {\n            float dyC = float(dyCCorner + wC) / ' +
			n +
			'.0;\n\n            if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = ' +
			u +
			' - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * ' +
			i +
			' + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Ia(t) {
		(this.variableNames = ['dy', 'maxPos']), (this.outputShape = t.inShape);
		var e = t.strideDepth,
			n = t.strideHeight,
			r = t.strideWidth,
			o = t.dilationDepth,
			i = t.dilationHeight,
			a = t.dilationWidth,
			s = t.effectiveFilterDepth,
			u = t.effectiveFilterHeight,
			c = t.effectiveFilterWidth,
			l = s - 1 - t.padInfo.front,
			h = u - 1 - t.padInfo.top,
			p = c - 1 - t.padInfo.left,
			f = s * u * c - 1;
		this.userCode =
			'\n      const ivec3 pads = ivec3(' +
			l +
			', ' +
			h +
			', ' +
			p +
			');\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyDCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get\n        // dx(xD, xR, xC, ch).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int wD = 0; wD < ' +
			s +
			';\n           wD += ' +
			o +
			') {\n          float dyD = float(dyDCorner + wD) / ' +
			e +
			'.0;\n\n          if (dyD < 0.0 || dyD >= ' +
			t.outDepth +
			'.0 || fract(dyD) > 0.0) {\n            continue;\n          }\n          int idyD = int(dyD);\n\n          for (int wR = 0; wR < ' +
			u +
			';\n              wR += ' +
			i +
			') {\n            float dyR = float(dyRCorner + wR) / ' +
			n +
			'.0;\n\n            if (dyR < 0.0 || dyR >= ' +
			t.outHeight +
			'.0 ||\n                fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            for (int wC = 0; wC < ' +
			c +
			';\n                wC += ' +
			a +
			') {\n              float dyC = float(dyCCorner + wC) / ' +
			r +
			'.0;\n\n              if (dyC < 0.0 || dyC >= ' +
			t.outWidth +
			'.0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              float dyValue = getDy(batch, idyD, idyR, idyC, ch);\n              int maxPosValue = ' +
			f +
			' -\n                  int(getMaxPos(batch, idyD, idyR, idyC, ch));\n\n              // Get the current value, check it against the value from the\n              // position matrix.\n              int curPosValue =\n                  wD * ' +
			u +
			' * ' +
			c +
			' +\n                  wR * ' +
			c +
			' + wC;\n              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n              dotProd += dyValue * mask;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ';
	}
	function Ra(t, e, n, r, o, i, a) {
		void 0 === n && (n = !1),
			void 0 === r && (r = !1),
			void 0 === o && (o = !1),
			void 0 === i && (i = null),
			void 0 === a && (a = !1),
			(this.variableNames = ['matrixA', 'matrixB']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = e);
		var s = n ? t[1] : t[2],
			u = Math.ceil(s / 2),
			c = n ? 'i * 2, rc.y' : 'rc.y, i * 2',
			l = r ? 'rc.z, i * 2' : 'i * 2, rc.z',
			h = n ? ['a.xxyy', 'a.zzww'] : ['a.xxzz', 'a.yyww'],
			p = r ? ['b.xzxz', 'b.ywyw'] : ['b.xyxy', 'b.zwzw'],
			f = '',
			d = '';
		i &&
			((f = a
				? 'vec4 activation(vec4 a) {\n          vec4 b = getPreluActivationWeightsAtOutCoords();\n          ' +
				  i +
				  '\n        }'
				: 'vec4 activation(vec4 x) {\n          ' + i + '\n        }'),
			(d = 'result = activation(result);'));
		var v = o ? 'result += getBiasAtOutCoords();' : '';
		o && this.variableNames.push('bias'),
			a && this.variableNames.push('preluActivationWeights'),
			(this.userCode =
				'\n      ' +
				f +
				'\n\n      const float sharedDimension = ' +
				u +
				'.0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < ' +
				u +
				'; i++) {\n          vec4 a = getMatrixA(rc.x, ' +
				c +
				');\n          vec4 b = getMatrixB(rc.x, ' +
				l +
				');\n\n          // These swizzled products need to be separately added.\n          // See: https://github.com/tensorflow/tfjs/issues/1735\n          result += (' +
				h[0] +
				' * ' +
				p[0] +
				');\n          result += (' +
				h[1] +
				' * ' +
				p[1] +
				');\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        ' +
				v +
				'\n\n        ' +
				d +
				'\n\n        setOutput(result);\n      }\n    ');
	}
	function ka(t, e, n, r) {
		(this.variableNames = ['indices']),
			(this.outputShape = [t, e]),
			(this.userCode =
				'\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(' +
				r +
				'), float(' +
				n +
				'),\n                      float(index == coords.y)));\n      }\n    ');
	}
	function Sa(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !1),
			(this.packedOutput = !0);
		var e,
			n,
			r,
			o,
			i = (this.outputShape = t).length;
		if (0 === i)
			this.userCode =
				'\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ';
		else {
			var a = Xo('rc', i),
				s = ni(i),
				u = (function (t, e, n) {
					if (1 === t) return 'rc > ' + e[0];
					for (var r = '', o = t - 2; o < t; o++)
						(r += n[o] + ' >= ' + e[o]), o < t - 1 && (r += '||');
					return r;
				})(i, t, a),
				c = (function (t, e, n) {
					if (1 === t) return '';
					var r = a.slice(-2);
					return (
						'\n    int r = ' +
						r[0] +
						';\n    int c = ' +
						r[1] +
						';\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= ' +
						e +
						';\n    bool rEdge = rp1 >= ' +
						n +
						';\n  '
					);
				})(i, t[t.length - 1], t[t.length - 2]),
				l =
					((n = a),
					(r = (e = t).length),
					(o = (function (t, e) {
						for (var n = [], r = 0; r <= 1; r++)
							for (var o = 0; o <= 1; o++) {
								for (
									var i =
											(0 === r ? 'r' : 'rp1') + ', ' + (0 === o ? 'c' : 'cp1'),
										a = 2;
									a < t;
									a++
								)
									i = e[e.length - 1 - a] + ',' + i;
								n.push(i);
							}
						return n;
					})(r, n)),
					1 === r
						? 'getA(rc),\n            rc + 1 >= ' +
						  e[0] +
						  ' ? 0. : getA(rc + 1),\n            0, 0'
						: 'getA(' +
						  o[0] +
						  '),\n          cEdge ? 0. : getA(' +
						  o[1] +
						  '),\n          rEdge ? 0. : getA(' +
						  o[2] +
						  '),\n          rEdge || cEdge ? 0. : getA(' +
						  o[3] +
						  ')');
			this.userCode =
				'\n        void main() {\n          ' +
				s +
				' rc = getOutputCoords();\n\n          if(' +
				u +
				') {\n            setOutput(vec4(0));\n          } else {\n            ' +
				c +
				'\n\n            setOutput(vec4(' +
				l +
				'));\n          }\n        }\n      ';
		}
	}
	var Da =
		((Aa.prototype.getCustomSetupFunc = function (n) {
			var r = this;
			return function (t, e) {
				null == r.seedLoc && (r.seedLoc = t.getUniformLocation(e, 'seed')),
					t.gl.uniform1f(r.seedLoc, n);
			};
		}),
		Aa);
	function Aa(t, e, n) {
		(this.variableNames = ['probs']),
			(this.outputShape = [t, n]),
			(this.userCode =
				'\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < ' +
				(e - 1) +
				'; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(' +
				(e - 1) +
				'));\n      }\n    ');
	}
	function Ta(n, t, e) {
		(this.variableNames = ['x']),
			(this.outputShape = t.map(function (t, e) {
				return t[0] + n[e] + t[1];
			}));
		var r = n.length,
			o = ni(r),
			i = t
				.map(function (t) {
					return t[0];
				})
				.join(','),
			a = t
				.map(function (t, e) {
					return t[0] + n[e];
				})
				.join(','),
			s = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, r);
		this.userCode =
			1 !== r
				? '\n      ' +
				  o +
				  ' start = ' +
				  o +
				  '(' +
				  i +
				  ');\n      ' +
				  o +
				  ' end = ' +
				  o +
				  '(' +
				  a +
				  ');\n\n      void main() {\n        ' +
				  o +
				  ' outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(' +
				  e +
				  '));\n        } else {\n          ' +
				  o +
				  ' coords = outC - start;\n          setOutput(getX(' +
				  s +
				  '));\n        }\n      }\n    '
				: '\n        int start = ' +
				  i +
				  ';\n        int end = ' +
				  a +
				  ';\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(' +
				  e +
				  '));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ';
	}
	function Na(n, t, e) {
		(this.variableNames = ['x']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t.map(function (t, e) {
				return t[0] + n[e] + t[1];
			}));
		for (
			var r = n.length,
				o = ni(r),
				i = t
					.map(function (t) {
						return t[0];
					})
					.join(','),
				a = t
					.map(function (t, e) {
						return t[0] + n[e];
					})
					.join(','),
				s = Xo('rc', r),
				u = Xo('source', r),
				c = s[r - 1] + ' < ' + this.outputShape[r - 1],
				l = 1 === r ? 'source' : 'vec2(' + u.slice(-2).join() + ')',
				h = [
					o + ' rc = outputLoc;',
					s[r - 1] + ' += 1;\n       if(' + c + ') {\n      ',
					1 === r
						? ''
						: '}\n       rc = outputLoc;\n       ' +
						  s[r - 2] +
						  ' += 1;\n       if(' +
						  s[r - 2] +
						  ' < ' +
						  this.outputShape[r - 2] +
						  ') {',
					1 === r ? '' : '  ' + s[r - 1] + ' += 1;\n         if(' + c + ') {',
				],
				p =
					1 === r
						? 'rc < start || rc >= end'
						: 'any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))',
				f = '',
				d = 0,
				v = 1 === r ? 2 : 4;
			d < v;
			d++
		)
			f +=
				'\n        ' +
				h[d] +
				'\n        if (' +
				p +
				') {\n          result[' +
				d +
				'] = float(' +
				e +
				');\n        } else {\n          ' +
				o +
				' source = rc - start;\n          result[' +
				d +
				'] = getChannel(getX(' +
				u.join() +
				'), ' +
				l +
				');\n        }\n      ';
		(f += 1 === r ? '} ' : '}}'),
			(this.userCode =
				'\n      const ' +
				o +
				' start = ' +
				o +
				'(' +
				i +
				');\n      const ' +
				o +
				' end = ' +
				o +
				'(' +
				a +
				');\n\n      void main() {\n        ' +
				o +
				' outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        ' +
				f +
				'\n        setOutput(result);\n      }\n    ');
	}
	function Fa(t, e, n) {
		if (((this.variableNames = ['x']), 'avg' === e && n))
			throw new Error('Cannot compute positions for average pool.');
		var r = t.filterWidth,
			o = t.strideHeight,
			i = t.strideWidth,
			a = t.dilationHeight,
			s = t.dilationWidth,
			u = t.effectiveFilterHeight,
			c = t.effectiveFilterWidth,
			l = t.padInfo.top,
			h = t.padInfo.left;
		this.outputShape = t.outShape;
		var p = 'avg' === e,
			f = '0.0';
		if ((p || (f = '-1.0 / 1e-20'), n))
			this.userCode =
				'\n        const ivec2 strides = ivec2(' +
				o +
				', ' +
				i +
				');\n        const ivec2 pads = ivec2(' +
				l +
				', ' +
				h +
				');\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < ' +
				u +
				';\n              wR += ' +
				a +
				') {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ' +
				t.inHeight +
				') {\n              continue;\n            }\n\n            for (int wC = 0; wC < ' +
				c +
				';\n                wC += ' +
				s +
				') {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= ' +
				t.inWidth +
				') {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * ' +
				c +
				' + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ';
		else {
			var d =
				e +
				'(' +
				e +
				'(' +
				e +
				'(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
			'avg' === e && (d = 'avgValue / count');
			var v = 4 * Math.floor(r / 4),
				m = r % 4,
				g =
					'\n      if (' +
					p +
					') {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ';
			this.userCode =
				'\n      const ivec2 strides = ivec2(' +
				o +
				', ' +
				i +
				');\n      const ivec2 pads = ivec2(' +
				l +
				', ' +
				h +
				');\n      const float initializationValue = ' +
				f +
				';\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= ' +
				t.inWidth +
				') {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(' +
				f +
				');\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < ' +
				u +
				';\n            wR += ' +
				a +
				') {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= ' +
				t.inHeight +
				') {\n            continue;\n          }\n\n          for (int wC = 0; wC < ' +
				v +
				'; wC += 4) {\n            int xC = xCCorner + wC * ' +
				s +
				';\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ' +
				s +
				', d),\n              getValue(batch, xR, xC + 2 * ' +
				s +
				', d),\n              getValue(batch, xR, xC + 3 * ' +
				s +
				', d)\n            );\n\n            ' +
				g +
				'\n          }\n\n          int xC = xCCorner + ' +
				v +
				';\n          if (' +
				(1 == m) +
				') {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            ' +
				g +
				'\n          } else if (' +
				(2 == m) +
				') {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ' +
				s +
				', d),\n              initializationValue,\n              initializationValue\n            );\n\n            ' +
				g +
				'\n          } else if (' +
				(3 == m) +
				') {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + ' +
				s +
				', d),\n              getValue(batch, xR, xC + 2 * ' +
				s +
				', d),\n              initializationValue\n            );\n\n            ' +
				g +
				'\n          }\n        }\n        setOutput(' +
				d +
				');\n      }\n    ';
		}
	}
	function Ma(t, e, n) {
		if (((this.variableNames = ['x']), 'avg' === e && n))
			throw new Error('Cannot compute positions for average pool.');
		var r = t.filterWidth,
			o = t.strideDepth,
			i = t.strideHeight,
			a = t.strideWidth,
			s = t.dilationDepth,
			u = t.dilationHeight,
			c = t.dilationWidth,
			l = t.effectiveFilterDepth,
			h = t.effectiveFilterHeight,
			p = t.effectiveFilterWidth,
			f = t.padInfo.front,
			d = t.padInfo.top,
			v = t.padInfo.left;
		this.outputShape = t.outShape;
		var m = 'avg' === e,
			g = '0.0';
		if ((m || (g = '-1.0 / 1e-20'), n))
			this.userCode =
				'\n        const ivec3 strides =\n            ivec3(' +
				o +
				', ' +
				i +
				', ' +
				a +
				');\n        const ivec3 pads = ivec3(' +
				f +
				', ' +
				d +
				', ' +
				v +
				');\n\n        void main() {\n          ivec5 coords = getOutputCoords();\n          int batch = coords.x;\n          int ch = coords.u;\n\n          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n          int xDCorner = xCorner.x;\n          int xRCorner = xCorner.y;\n          int xCCorner = xCorner.z;\n\n          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n\n          for (int wD = 0; wD < ' +
				l +
				';\n              wD += ' +
				s +
				') {\n            int xD = xDCorner + wD;\n\n            if (xD < 0 || xD >= ' +
				t.inDepth +
				') {\n              continue;\n            }\n\n            for (int wR = 0; wR < ' +
				h +
				';\n                wR += ' +
				u +
				') {\n              int xR = xRCorner + wR;\n\n              if (xR < 0 || xR >= ' +
				t.inHeight +
				') {\n                continue;\n              }\n\n              for (int wC = 0; wC < ' +
				p +
				';\n                  wC += ' +
				c +
				') {\n                int xC = xCCorner + wC;\n\n                if (xC < 0 || xC >= ' +
				t.inWidth +
				') {\n                  continue;\n                }\n\n                float value = getX(batch, xD, xR, xC, ch);\n\n                // If a min / max value has already been found, use it. If not,\n                // use the current value.\n                float currMinMaxValue = mix(\n                    value, minMaxValue, minMaxValueFound);\n                if (value >= currMinMaxValue) {\n                  minMaxValue = value;\n                  minMaxValueFound = 1.0;\n                  minMaxPosition =\n                      wD * ' +
				h +
				' * ' +
				p +
				' +\n                      wR * ' +
				p +
				' + wC;;\n                }\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ';
		else {
			var y =
				e +
				'(' +
				e +
				'(' +
				e +
				'(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
			'avg' === e && (y = 'avgValue / count');
			var x = 4 * Math.floor(r / 4),
				b = r % 4,
				w =
					'\n      if (' +
					m +
					') {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ';
			this.userCode =
				'\n      const ivec3 strides =\n        ivec3(' +
				o +
				', ' +
				i +
				', ' +
				a +
				');\n      const ivec3 pads = ivec3(' +
				f +
				', ' +
				d +
				', ' +
				v +
				');\n      const float initializationValue = ' +
				g +
				';\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xD, int xR, int xC, int ch) {\n        if (xC < 0 || xC >= ' +
				t.inWidth +
				') {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xD, xR, xC, ch);\n      }\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int ch = coords.u;\n\n        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xDCorner = xCorner.x;\n        int xRCorner = xCorner.y;\n        int xCCorner = xCorner.z;\n\n        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(' +
				g +
				');\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wD = 0; wD < ' +
				l +
				';\n            wD += ' +
				s +
				') {\n          int xD = xDCorner + wD;\n\n          if (xD < 0 || xD >= ' +
				t.inDepth +
				') {\n            continue;\n          }\n\n          for (int wR = 0; wR < ' +
				h +
				';\n            wR += ' +
				u +
				') {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= ' +
				t.inHeight +
				') {\n              continue;\n            }\n\n            for (int wC = 0; wC < ' +
				x +
				'; wC += 4) {\n              int xC = xCCorner + wC * ' +
				c +
				';\n\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ' +
				c +
				', ch),\n                getValue(batch, xD, xR, xC + 2 * ' +
				c +
				', ch),\n                getValue(batch, xD, xR, xC + 3 * ' +
				c +
				', ch)\n              );\n\n              ' +
				w +
				'\n            }\n\n            int xC = xCCorner + ' +
				x +
				';\n            if (' +
				(1 == b) +
				') {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                initializationValue,\n                initializationValue,\n                initializationValue\n              );\n\n              ' +
				w +
				'\n            } else if (' +
				(2 == b) +
				') {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ' +
				c +
				', ch),\n                initializationValue,\n                initializationValue\n              );\n\n              ' +
				w +
				'\n            } else if (' +
				(3 == b) +
				') {\n              vec4 values = vec4(\n                getValue(batch, xD, xR, xC, ch),\n                getValue(batch, xD, xR, xC + ' +
				c +
				', ch),\n                getValue(batch, xD, xR, xC + 2 * ' +
				c +
				', ch),\n                initializationValue\n              );\n\n              ' +
				w +
				'\n            }\n          }\n          setOutput(' +
				y +
				');\n        }\n      }\n    ';
		}
	}
	function Oa(t, e) {
		this.variableNames = ['x'];
		var n = t.windowSize,
			r = t.batchSize,
			o = t.inSize,
			i = Math.ceil(o / n);
		this.outputShape = [r, i];
		var a = '0.0',
			s = '';
		'prod' === e
			? (a = '1.0')
			: 'min' === e
			? ((a = '1.0 / 1e-20'), (s = 'min'))
			: 'max' === e && ((a = '-1.0 / 1e-20'), (s = 'max'));
		var u =
			e +
			'(' +
			e +
			'(' +
			e +
			'(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
		'sum' === e
			? (u = 'sumValue')
			: 'prod' === e
			? (u = 'prodValue')
			: 'all' === e
			? (u = 'allValue')
			: 'any' === e && (u = 'anyValue');
		var c = 4 * Math.floor(n / 4),
			l = n % 4,
			h =
				'\n      if (' +
				('sum' === e) +
				') {\n        sumValue += dot(values, ones);\n      } else if (' +
				('prod' === e) +
				') {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = ' +
				s +
				'(values, minMaxValue);\n      }\n    ',
			p = 'vec4';
		'all' === e
			? ((a = '1.0'),
			  (h =
					'\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      '),
			  (p = 'bvec4'))
			: 'any' === e &&
			  ((a = '0.0'),
			  (h =
					'\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      '),
			  (p = 'bvec4'));
		var f = '';
		0 < o % n &&
			(f =
				'\n        if (inIdx < 0 || inIdx >= ' +
				o +
				') {\n          return initializationValue;\n        }\n      '),
			(this.userCode =
				'\n      const float initializationValue = ' +
				a +
				';\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        ' +
				f +
				'\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * ' +
				n +
				';\n\n        vec4 minMaxValue = vec4(' +
				a +
				');\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < ' +
				c +
				'; i += 4) {\n          int inIdx = inOffset + i;\n          ' +
				p +
				' values = ' +
				p +
				'(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          ' +
				h +
				'\n        }\n\n        int inIdx = inOffset + ' +
				c +
				';\n        if (' +
				(1 == l) +
				') {\n          ' +
				p +
				' values = ' +
				p +
				'(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          ' +
				h +
				'\n        } else if (' +
				(2 == l) +
				') {\n          ' +
				p +
				' values = ' +
				p +
				'(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          ' +
				h +
				'\n        } else if (' +
				(3 == l) +
				') {\n          ' +
				p +
				' values = ' +
				p +
				'(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          ' +
				h +
				'\n        }\n        setOutput(' +
				u +
				');\n      }\n    ');
	}
	function Pa(t, e) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t);
		for (var n = '', r = 0; r < 4; r++) {
			var o = 'thisRC = rc;';
			r % 2 == 1 && (o += 'thisRC.z += 1;'),
				1 < r && (o += 'thisRC.y += 1;'),
				(n +=
					'\n        ' +
					o +
					'\n        ' +
					(0 < r ? 'if(thisRC.y < rows && thisRC.z < cols){' : '') +
					'\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[' +
					r +
					'] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        ' +
					(0 < r ? '}' : '') +
					'\n      ');
		}
		this.userCode =
			'\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      ' +
			$o(['r', 'c', 'd'], e) +
			'\n      return ivec3(r, c, d);\n    }\n  \n      ' +
			Jo(t) +
			'\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = ' +
			t[1] +
			';\n        int cols = ' +
			t[2] +
			';\n\n        ' +
			n +
			'\n\n        setOutput(result);\n      }\n    ';
	}
	function Ba(t, e, n) {
		(this.variableNames = ['dy']),
			(this.outputShape = []),
			(this.outputShape = e.shape);
		var r = e.shape,
			o = r[1],
			i = r[2],
			a = t.shape,
			s = a[1],
			u = a[2],
			c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i],
			l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
			h = c[0] / l[0],
			p = c[1] / l[1],
			f = 1 / h,
			d = 1 / p,
			v = 2 * Math.ceil(f) + 2,
			m = 2 * Math.ceil(d) + 2;
		this.userCode =
			'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(' +
			h +
			');\n        const float widthScale = float(' +
			p +
			');\n\n        const float invHeightScale = float(' +
			f +
			');\n        const float invWidthScale = float(' +
			d +
			');\n\n        const int winHeight = int(' +
			v +
			');\n        const int winWidth = int(' +
			m +
			');\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ' +
			s +
			') {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ' +
			u +
			') {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), ' +
			(o - 1) +
			'.0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), ' +
			(i - 1) +
			'.0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ';
	}
	function La(t, e, n, r) {
		(this.variableNames = ['A']), (this.outputShape = []);
		var o = t[0],
			i = t[1],
			a = t[2],
			s = t[3];
		this.outputShape = [o, e, n, s];
		var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
			c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
		this.userCode =
			'\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ' +
			u[0] / c[0] +
			',\n          ' +
			u[1] / c[1] +
			');\n      const vec2 inputShapeRC = vec2(' +
			i +
			'.0, ' +
			a +
			'.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ';
	}
	function Wa(t, e, n, r) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = []);
		var o = t[0],
			i = t[1],
			a = t[2],
			s = t[3];
		this.outputShape = [o, e, n, s];
		var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
			c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
		this.userCode =
			'\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          ' +
			u[0] / c[0] +
			',\n          ' +
			u[1] / c[1] +
			',\n          ' +
			u[1] / c[1] +
			');\n      const vec3 inputShapeRC = vec3(' +
			i +
			'.0, ' +
			a +
			'.0,\n                                     ' +
			a +
			'.0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < ' +
			(s - 1) +
			';\n        bool hasNextRow = coords.z < ' +
			(n - 1) +
			';\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    ';
	}
	function za(t, e, n) {
		(this.variableNames = ['dy']),
			(this.outputShape = []),
			(this.outputShape = e.shape);
		var r = e.shape,
			o = r[1],
			i = r[2],
			a = t.shape,
			s = a[1],
			u = a[2],
			c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i],
			l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
			h = c[0] / l[0],
			p = c[1] / l[1],
			f = 1 / h,
			d = 1 / p,
			v = 2 * Math.ceil(f) + 2,
			m = 2 * Math.ceil(d) + 2;
		this.userCode =
			'\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(' +
			h +
			');\n        const float widthScale = float(' +
			p +
			');\n\n        const float invHeightScale = float(' +
			f +
			');\n        const float invWidthScale = float(' +
			d +
			');\n\n        const int winHeight = int(' +
			v +
			');\n        const int winWidth = int(' +
			m +
			');\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= ' +
			s +
			') {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= ' +
			u +
			') {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(' +
			c[0] +
			') *\n                (float(dyR) / float(' +
			l[0] +
			'));\n\n            float sourceFracCol =\n                float(' +
			c[1] +
			') *\n                  (float(dyC) / float(' +
			l[1] +
			'));\n\n            int sourceNearestRow = int(min(\n                float(int(' +
			o +
			') - 1),\n                ' +
			n +
			' ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(' +
			i +
			') - 1),\n                ' +
			n +
			' ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ';
	}
	function Ua(t, e, n, r) {
		(this.variableNames = ['A']), (this.outputShape = []);
		var o = t[0],
			i = t[1],
			a = t[2],
			s = t[3];
		this.outputShape = [o, e, n, s];
		var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
			c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n],
			l = r ? '0.5' : '0.0';
		this.userCode =
			'\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          ' +
			u[0] / c[0] +
			',\n          ' +
			u[1] / c[1] +
			');\n      const vec2 inputShapeRC = vec2(' +
			i +
			'.0, ' +
			a +
			'.0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ' +
			l +
			')));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ';
	}
	function Va(r, o) {
		this.variableNames = ['x'];
		var t = r.length;
		if (4 < t)
			throw new Error(
				'WebGL backend: Reverse of rank-' + t + ' tensor is not yet supported'
			);
		if (((this.outputShape = r), 1 !== t)) {
			var e = r
					.map(function (t, e) {
						return (
							(n = e),
							-1 !== o.indexOf(n) && 1 !== r[n]
								? r[n] + ' - coords[' + n + '] - 1'
								: 'coords[' + n + ']'
						);
						var n;
					})
					.join(','),
				n = ni(t);
			this.userCode =
				'\n      void main() {\n        ' +
				n +
				' coords = getOutputCoords();\n        setOutput(getX(' +
				e +
				'));\n      }\n    ';
		} else this.userCode = '\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(' + r[0] + ' - coord - 1));\n        }\n      ';
	}
	function Ga(i, a) {
		(this.variableNames = ['x']),
			(this.packedInputs = !0),
			(this.packedOutput = !0);
		var t = i.length;
		if (4 < t)
			throw new Error(
				'WebGL backend: Reverse of rank-' + t + ' tensor is not yet supported'
			);
		this.outputShape = i;
		var e,
			n,
			r,
			o = Xo('rc', t),
			s = o[t - 1] + ' + 1 < ' + this.outputShape[t - 1],
			u = o[t - 2] + ' + 1 < ' + this.outputShape[t - 2],
			c = ni(t);
		function l(o) {
			var t = i.map(function (t, e) {
				return (
					(n = e),
					(r = o),
					-1 !== a.indexOf(n) && 1 !== i[n]
						? i[n] + ' - ' + r[n] + ' - 1'
						: '' + r[n]
				);
				var n, r;
			});
			return (
				'getChannel(getX(' +
				t.join(',') +
				'), vec2(' +
				t.slice(-2).join(',') +
				'))'
			);
		}
		this.userCode =
			1 === t
				? '\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(' +
				  i[0] +
				  ' - rc - 1),\n            ' +
				  i[0] +
				  ' - rc - 1);\n          if(' +
				  s +
				  '){\n              result.g = getChannel(getX(' +
				  i[0] +
				  ' - (rc  + 1) - 1),\n                ' +
				  i[0] +
				  ' - (rc  + 1) - 1);\n          }\n          setOutput(result);\n        }\n      '
				: '\n        void main() {\n          ' +
				  c +
				  ' rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = ' +
				  l(o.slice()) +
				  ';\n          if(' +
				  s +
				  '){\n            result.g = ' +
				  (((r = o.slice())[t - 1] = '(' + r[t - 1] + ' + 1)'), l(r)) +
				  ';\n          }\n          if(' +
				  u +
				  ') {\n            result.b = ' +
				  (((n = o.slice())[t - 2] = '(' + n[t - 2] + ' + 1)'), l(n)) +
				  ';\n            if(' +
				  s +
				  ') {\n              result.a = ' +
				  (((e = o.slice())[t - 1] = '(' + e[t - 1] + ' + 1)'),
				  (e[t - 2] = '(' + e[t - 2] + ' + 1)'),
				  l(e)) +
				  ';\n            }\n          }\n          setOutput(result);\n        }\n    ';
	}
	function Ha(t, e, n, r, o, i, a) {
		(this.variableNames = ['updates', 'indices', 'defaultValue']),
			(this.outputShape = i);
		var s = ni(o.length),
			u = ni(i.length),
			c = '';
		1 === n ? (c = 'i') : 2 === n && (c = 'i, j');
		var l = 'getIndices(' + c + ')',
			h = '';
		1 === r ? (h = 'i') : 2 === r && (h = 'i, coords[1]');
		var p = 'getUpdates(' + h + ')',
			f = 1 < e ? 'strides[j]' : 'strides';
		this.userCode =
			'\n        ' +
			s +
			' strides = ' +
			s +
			'(' +
			o +
			');\n\n        void main() {\n          ' +
			u +
			' coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < ' +
			t +
			'; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < ' +
			e +
			'; j++) {\n              int index = round(' +
			l +
			');\n              flattenedIndex += index * ' +
			f +
			';\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += ' +
			p +
			';\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      ';
	}
	function qa(t, e) {
		this.variableNames = ['x', 'segmentIds'];
		var n = t.windowSize,
			r = t.batchSize,
			o = t.inSize,
			i = t.numSegments,
			a = i * Math.ceil(o / n);
		this.outputShape = [r, a];
		var s = 4 * Math.floor(n / 4),
			u = n % 4,
			c = '\n        sumValue += dot(values, segFilter);\n    ',
			l = '';
		0 < o % n &&
			(l =
				'\n        if (inIdx < 0 || inIdx >= ' +
				o +
				') {\n          return initializationValue;\n        }\n      ');
		var h = '';
		0 < o % n &&
			(h =
				'\n        if (inIdx < 0 || inIdx >= ' +
				o +
				') {\n          return -1.0;\n        }\n      '),
			(this.userCode =
				'\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        ' +
				l +
				'\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        ' +
				h +
				'\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          ' +
				i +
				')) * float(' +
				n +
				'));\n        int currentSeg = int(mod(float(outIdx), float(' +
				i +
				')));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < ' +
				s +
				'; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          ' +
				c +
				'\n        }\n\n        int inIdx = inOffset + ' +
				s +
				';\n        if (' +
				(1 == u) +
				') {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          ' +
				c +
				'\n        } else if (' +
				(2 == u) +
				') {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          ' +
				c +
				'\n        } else if (' +
				(3 == u) +
				') {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          ' +
				c +
				'\n        }\n        setOutput(sumValue);\n      }\n    ');
	}
	function ja(t, e, n) {
		var r, o;
		if (((this.variableNames = ['c', 'a', 'b']), (this.outputShape = e), 4 < n))
			throw Error('Where for rank ' + n + ' is not yet supported');
		if (1 === n) r = o = 'resRC';
		else {
			for (
				var i = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'],
					a = [],
					s = [],
					u = 0;
				u < e.length;
				u++
			)
				s.push('' + i[u]), u < t && a.push('' + i[u]);
			(r = a.join()), (o = s.join());
		}
		var c = ni(n);
		this.userCode =
			'\n      void main() {\n        ' +
			c +
			' resRC = getOutputCoords();\n        float cVal = getC(' +
			r +
			');\n        if (cVal >= 1.0) {\n          setOutput(getA(' +
			o +
			'));\n        } else {\n          setOutput(getB(' +
			o +
			'));\n        }\n      }\n    ';
	}
	var Ka =
			((Ya.prototype.getCustomSetupFunc = function (n) {
				var r = this;
				if (n.length !== this.rank)
					throw Error(
						'The rank (' +
							this.rank +
							') of the program must match the length of start (' +
							n.length +
							')'
					);
				return function (t, e) {
					(null == r.startLoc &&
						((r.startLoc = t.getUniformLocationNoThrow(e, 'start')),
						null == r.startLoc)) ||
						t.gl.uniform1iv(r.startLoc, n);
				};
			}),
			Ya),
		Xa = ['x', 'y', 'z', 'w', 'u', 'v'];
	function Ya(t) {
		(this.variableNames = ['source']),
			(this.outputShape = t),
			(this.rank = t.length);
		var e,
			n = ni(this.rank),
			r = 'uniform int start[' + this.rank + '];',
			o = (function (t) {
				if (1 === t) return 'sourceLoc';
				if (t <= 6)
					return Xa.slice(0, t)
						.map(function (t) {
							return 'sourceLoc.' + t;
						})
						.join(',');
				throw Error('Slicing for rank ' + t + ' is not yet supported');
			})(this.rank);
		(e =
			'\n        ' +
			n +
			' sourceLoc;\n        ' +
			n +
			' coords = getOutputCoords();\n        ' +
			t
				.map(function (t, e) {
					return (
						'sourceLoc.' + Xa[e] + ' = start[' + e + '] + coords.' + Xa[e] + ';'
					);
				})
				.join('\n') +
			'\n      '),
			(this.userCode =
				'\n      ' +
				r +
				'\n      void main() {\n        ' +
				e +
				'\n        setOutput(getSource(' +
				o +
				'));\n      }\n    ');
	}
	function $a(t, e, n) {
		this.variableNames = ['x'];
		var r = (this.outputShape = n).length,
			o = ni(n.length),
			i = ni(n.length),
			a = '';
		if (1 === r) a = 'coords * strides + begin';
		else {
			var s = 0;
			a = n
				.map(function (t, e) {
					return (
						s++,
						1 === n.length
							? 'coords * strides[' + e + '] + begin[' + e + ']'
							: 'coords[' +
							  (s - 1) +
							  '] * strides[' +
							  e +
							  '] + begin[' +
							  e +
							  ']'
					);
				})
				.join(',');
		}
		this.userCode =
			'\n      ' +
			o +
			' begin = ' +
			o +
			'(' +
			t +
			');\n      ' +
			o +
			' strides = ' +
			o +
			'(' +
			e +
			');\n\n      void main() {\n        ' +
			i +
			' coords = getOutputCoords();\n        setOutput(getX(' +
			a +
			'));\n      }\n    ';
	}
	var Ja =
			((ts.prototype.getCustomSetupFunc = function (n) {
				var r = this;
				if (n.length !== this.rank)
					throw Error(
						'The rank (' +
							this.rank +
							') of the program must match the length of start (' +
							n.length +
							')'
					);
				return function (t, e) {
					(null == r.startLoc &&
						((r.startLoc = t.getUniformLocationNoThrow(e, 'start')),
						null == r.startLoc)) ||
						t.gl.uniform1iv(r.startLoc, n);
				};
			}),
			ts),
		Qa =
			((Za.prototype.acquireTexture = function (t, e, n) {
				var r,
					o = es(e, n),
					i = ns(t, o, n);
				if (
					(i in this.freeTextures || (this.freeTextures[i] = []),
					i in this.usedTextures || (this.usedTextures[i] = []),
					0 < this.freeTextures[i].length)
				) {
					this.numFreeTextures--, this.numUsedTextures++, this.log();
					var a = this.freeTextures[i].shift();
					return this.usedTextures[i].push(a), a;
				}
				return (
					this.numUsedTextures++,
					this.log(),
					o === $t.PACKED_2X2_FLOAT32
						? (r = this.gpgpu.createPackedMatrixTexture(t[0], t[1]))
						: o === $t.PACKED_2X2_FLOAT16
						? (r = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]))
						: o === $t.UNPACKED_FLOAT32
						? (r = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]))
						: o === $t.UNPACKED_FLOAT16
						? (r = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]))
						: o === $t.PACKED_4X1_UNSIGNED_BYTE &&
						  (r = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])),
					this.usedTextures[i].push(r),
					r
				);
			}),
			(Za.prototype.releaseTexture = function (t, e, n, r) {
				if (null != this.freeTextures) {
					var o = ns(e, es(n, r), r);
					o in this.freeTextures || (this.freeTextures[o] = []),
						this.freeTextures[o].push(t),
						this.numFreeTextures++,
						this.numUsedTextures--;
					var i = this.usedTextures[o],
						a = i.indexOf(t);
					if (a < 0)
						throw new Error(
							'Cannot release a texture that was never provided by this texture manager'
						);
					i.splice(a, 1), this.log();
				}
			}),
			(Za.prototype.log = function () {
				if (this.logEnabled) {
					var t = this.numFreeTextures + this.numUsedTextures;
					console.log(
						'Free/Used',
						this.numFreeTextures + ' / ' + this.numUsedTextures,
						'(' + t + ')'
					);
				}
			}),
			(Za.prototype.getNumUsedTextures = function () {
				return this.numUsedTextures;
			}),
			(Za.prototype.getNumFreeTextures = function () {
				return this.numFreeTextures;
			}),
			(Za.prototype.dispose = function () {
				var e = this;
				if (null != this.freeTextures) {
					for (var t in this.freeTextures)
						this.freeTextures[t].forEach(function (t) {
							e.gpgpu.deleteMatrixTexture(t);
						});
					for (var t in this.usedTextures)
						this.usedTextures[t].forEach(function (t) {
							e.gpgpu.deleteMatrixTexture(t);
						});
					(this.freeTextures = null),
						(this.usedTextures = null),
						(this.numUsedTextures = 0),
						(this.numFreeTextures = 0);
				}
			}),
			Za);
	function Za(t) {
		(this.gpgpu = t),
			(this.numUsedTextures = 0),
			(this.numFreeTextures = 0),
			(this.freeTextures = {}),
			(this.logEnabled = !1),
			(this.usedTextures = {});
	}
	function ts(t) {
		(this.variableNames = ['source']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t),
			(this.rank = t.length);
		var e = ni(this.rank),
			n = Xo('coords', this.rank),
			r = Xo('sourceLoc', this.rank),
			o = 1 === this.rank ? 'sourceLoc' : 'vec2(' + r.slice(-2).join() + ')',
			i = 'getChannel(getSource(' + r.join() + '), ' + o + ')',
			a =
				'\n      result.x = ' +
				i +
				';\n      if (++' +
				n[this.rank - 1] +
				' < ' +
				t[this.rank - 1] +
				') {\n        ++' +
				r[this.rank - 1] +
				';\n        result.y = ' +
				i +
				';\n        --' +
				r[this.rank - 1] +
				';\n      }\n    ',
			s =
				1 === this.rank
					? ''
					: '\n      --' +
					  n[this.rank - 1] +
					  ';\n      if (++' +
					  n[this.rank - 2] +
					  ' < ' +
					  t[this.rank - 2] +
					  ') {\n        ++' +
					  r[this.rank - 2] +
					  ';\n        result.z = ' +
					  i +
					  ';\n        if (++' +
					  n[this.rank - 1] +
					  ' < ' +
					  t[this.rank - 1] +
					  ') {\n          ++' +
					  r[this.rank - 1] +
					  ';\n          result.w = ' +
					  i +
					  ';\n        }\n      }\n    ',
			u =
				this.rank <= 4
					? 'sourceLoc = coords +\n            ' +
					  e +
					  '(' +
					  t
							.map(function (t, e) {
								return 'start[' + e + ']';
							})
							.join() +
					  ');'
					: t
							.map(function (t, e) {
								return r[e] + ' = ' + n[e] + ' + start[' + e + '];';
							})
							.join('\n');
		this.userCode =
			'\n      uniform int start[' +
			this.rank +
			'];\n      void main() {\n        ' +
			e +
			' coords = getOutputCoords();\n        ' +
			e +
			' sourceLoc;\n        ' +
			u +
			'\n        vec4 result = vec4(0.);\n        ' +
			a +
			'\n        ' +
			s +
			'\n        setOutput(result);\n      }\n    ';
	}
	function es(t, e) {
		if (t === Yt.UPLOAD) return $t.PACKED_2X2_FLOAT32;
		if (t === Yt.RENDER || null == t)
			return (
				(n = e),
				_().getBool('WEBGL_RENDER_FLOAT32_ENABLED')
					? n
						? $t.PACKED_2X2_FLOAT32
						: $t.UNPACKED_FLOAT32
					: n
					? $t.PACKED_2X2_FLOAT16
					: $t.UNPACKED_FLOAT16
			);
		var n;
		if (t === Yt.DOWNLOAD || t === Yt.PIXELS)
			return $t.PACKED_4X1_UNSIGNED_BYTE;
		throw new Error('Unknown logical texture type ' + t);
	}
	function ns(t, e, n) {
		return t[0] + '_' + t[1] + '_' + e + '_' + n;
	}
	function rs(t, e) {
		this.variableNames = ['A'];
		for (var n = new Array(t.length), r = 0; r < n.length; r++)
			n[r] = t[r] * e[r];
		(this.outputShape = n), (this.rank = n.length);
		var o = ni(this.rank),
			i = (function (t) {
				var e = t.length;
				if (5 < e) throw Error('Tile for rank ' + e + ' is not yet supported');
				if (1 === e) return 'imod(resRC, ' + t[0] + ')';
				for (
					var n = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w', 'resRC.u'],
						r = [],
						o = 0;
					o < t.length;
					o++
				)
					r.push('imod(' + n[o] + ', ' + t[o] + ')');
				return r.join();
			})(t);
		this.userCode =
			'\n      void main() {\n        ' +
			o +
			' resRC = getOutputCoords();\n        setOutput(getA(' +
			i +
			'));\n      }\n    ';
	}
	function os(t, e) {
		this.variableNames = ['A'];
		for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
		(this.outputShape = n), (this.rank = n.length);
		var o = ni(this.rank),
			i = (function (t) {
				var e = t.length;
				if (6 < e)
					throw Error('Transpose for rank ' + e + ' is not yet supported');
				for (
					var n = [
							'resRC.x',
							'resRC.y',
							'resRC.z',
							'resRC.w',
							'resRC.u',
							'resRC.v',
						],
						r = new Array(e),
						o = 0;
					o < t.length;
					o++
				)
					r[t[o]] = n[o];
				return r.join();
			})(e);
		this.userCode =
			'\n    void main() {\n      ' +
			o +
			' resRC = getOutputCoords();\n      setOutput(getA(' +
			i +
			'));\n    }\n    ';
	}
	function is(t, e) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0);
		for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
		if (((this.outputShape = n), (this.rank = n.length), 6 < this.rank))
			throw Error(
				'Packed transpose for rank ' + this.rank + ' is not yet supported.'
			);
		var o = ni(this.rank),
			i = Ko('rc', this.rank),
			a = new Array(this.rank);
		for (r = 0; r < e.length; r++) a[e[r]] = i[r];
		var s = 'vec2(' + a.slice(-2).join() + ')',
			u = '++' + i[this.rank - 1] + ' < ' + n[this.rank - 1],
			c = 'getChannel(getA(' + a.join() + '), ' + s + ')';
		this.userCode =
			'\n    void main() {\n      ' +
			o +
			' rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = ' +
			c +
			';\n      if(' +
			u +
			') {\n        result[1] = ' +
			c +
			';\n      }\n      --' +
			i[this.rank - 1] +
			';\n      if(++' +
			i[this.rank - 2] +
			' < ' +
			n[this.rank - 2] +
			') {\n        result[2] = ' +
			c +
			';\n        if(' +
			u +
			') {\n          result[3] = ' +
			c +
			';\n        }\n      }\n      setOutput(result);\n    }\n    ';
	}
	function as(t, e) {
		(this.variableNames = ['A']),
			(this.outputShape = t),
			(this.userCode =
				'\n      float unaryOperation(float x) {\n        ' +
				e +
				'\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ');
	}
	function ss(t, e) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !0),
			(this.outputShape = t),
			(this.userCode =
				'\n      vec4 unaryOperation(vec4 x) {\n        ' +
				e +
				'\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ');
	}
	function us(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !0),
			(this.packedOutput = !1);
		var e = (this.outputShape = t).length,
			n = Xo('rc', e),
			r = ni(e),
			o = (function (t, e) {
				if (1 === t) return 'rc';
				for (var n = '', r = 0; r < t; r++)
					(n += e[r]), r < t - 1 && (n += ',');
				return n;
			})(e, n),
			i = n.slice(-2),
			a = e <= 1 ? 'rc' : 'vec2(' + i.join(',') + ')';
		this.userCode =
			'\n      void main() {\n        ' +
			r +
			' rc = getOutputCoords();\n        vec4 packedInput = getA(' +
			o +
			');\n\n        setOutput(getChannel(packedInput, ' +
			a +
			'));\n      }\n    ';
	}
	var cs = 1.7580993408473768,
		ls = 1.0507009873554805,
		hs = 'if (isnan(x)) return x;',
		ps = 'return abs(x);',
		fs = hs + '\n  return (x < 0.0) ? 0.0 : x;\n',
		ds = hs + '\n  return (x < 0.0) ? 0.0 : min(6.0, x);\n',
		vs = 'return (x >= 0.0) ? x : (exp(x) - 1.0);',
		ms = 'return -x;',
		gs = 'return ceil(x);',
		ys = 'return floor(x);',
		xs = 'return exp(x);',
		bs = 'return exp(x) - 1.0;',
		ws = 'return x;',
		Cs =
			'\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n',
		Es =
			'\n  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n',
		_s =
			'\n  vec4 result;\n\n  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);\n  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);\n  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);\n  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);\n\n  return result;\n',
		Is = {};
	function Rs(t, e) {
		if ((void 0 === e && (e = !1), 'linear' === t)) return 'return x;';
		if ('relu' === t) return e ? Cs : fs;
		if ('elu' === t) return e ? _s : vs;
		if ('relu6' === t) return e ? Es : ds;
		if ('prelu' === t) return e ? bi : xi;
		throw new Error(
			'Activation ' + t + ' has not been implemented for the WebGL backend.'
		);
	}
	var ks,
		Ss =
			(t(Ds, (ks = uo)),
			(Ds.prototype.numDataIds = function () {
				return (
					this.texData.numDataIds() +
					(this.cpuBackend ? this.cpuBackend.numDataIds() : 0) -
					this.pendingDeletes
				);
			}),
			(Ds.prototype.write = function (t, e, n) {
				if (
					(_().getBool('DEBUG') && this.checkNumericalProblems(t),
					'complex64' === n && null != t)
				)
					throw new Error(
						'Cannot write to a complex64 dtype. Please use tf.complex(real, imag).'
					);
				var r = {};
				return (
					this.texData.set(r, {
						shape: e,
						dtype: n,
						values: t,
						usage: Yt.UPLOAD,
					}),
					r
				);
			}),
			(Ds.prototype.move = function (t, e, n, r) {
				if (
					(_().getBool('DEBUG') && this.checkNumericalProblems(e),
					'complex64' === r)
				)
					throw new Error(
						'Cannot write to a complex64 dtype. Please use tf.complex(real, imag).'
					);
				this.texData.set(t, {
					shape: n,
					dtype: r,
					values: e,
					usage: Yt.UPLOAD,
				});
			}),
			(Ds.prototype.readSync = function (t) {
				var e = this.texData.get(t),
					n = e.values,
					r = e.dtype,
					o = e.complexTensors,
					i = e.slice,
					a = e.shape,
					s = e.isPacked;
				if (null != i) {
					var u;
					u = s ? new ss(a, ws) : new as(a, ws);
					var c = this.runWebGLProgram(
							u,
							[{ dataId: t, shape: a, dtype: r }],
							r
						),
						l = this.readSync(c.dataId);
					return this.disposeData(c.dataId), l;
				}
				if (null != n) return this.convertAndCacheOnCPU(t);
				if ('string' === r) return n;
				var h,
					p,
					f = null != this.activeTimers;
				return (
					f && (h = tt()),
					(p =
						'complex64' === r
							? No(o.real.dataSync(), o.imag.dataSync())
							: this.getValuesFromTexture(t)),
					f && (this.downloadWaitMs += tt() - h),
					this.convertAndCacheOnCPU(t, p)
				);
			}),
			(Ds.prototype.read = function (E) {
				return y(this, void 0, void 0, function () {
					var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, b, w, C;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if (this.pendingRead.has(E))
									return (
										(e = this.pendingRead.get(E)),
										[
											2,
											new Promise(function (t) {
												return e.push(t);
											}),
										]
									);
								if (
									((n = this.texData.get(E)),
									(r = n.values),
									(o = n.shape),
									(i = n.slice),
									(a = n.dtype),
									(s = n.complexTensors),
									(u = n.isPacked),
									null != i)
								)
									return (
										(c = u ? new ss(o, ws) : new as(o, ws)),
										(l = this.runWebGLProgram(
											c,
											[{ dataId: E, shape: o, dtype: a }],
											a
										)),
										(h = this.read(l.dataId)),
										this.disposeData(l.dataId),
										[2, h]
									);
								if (null != r) return [2, this.convertAndCacheOnCPU(E)];
								if (
									!_().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED') &&
									2 === _().getNumber('WEBGL_VERSION')
								)
									throw new Error(
										'tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.'
									);
								return (
									(p = null),
									'complex64' !== a &&
										_().get('WEBGL_BUFFER_SUPPORTED') &&
										((f = this.decode(E)),
										(d = this.texData.get(f.dataId)),
										(p = (C = this.gpgpu).createBufferFromTexture.apply(
											C,
											[d.texture].concat(ie(o))
										))),
									this.pendingRead.set(E, []),
									'complex64' === a
										? [3, 2]
										: [4, this.gpgpu.createAndWaitForFence()]
								);
							case 1:
								t.sent(), (t.label = 2);
							case 2:
								return 'complex64' !== a
									? [3, 4]
									: [4, Promise.all([s.real.data(), s.imag.data()])];
							case 3:
								return (
									(m = t.sent()), (g = m[0]), (y = m[1]), (v = No(g, y)), [3, 5]
								);
							case 4:
								(v =
									null == p
										? this.getValuesFromTexture(E)
										: ((x = L(o)),
										  this.gpgpu.downloadFloat32MatrixFromBuffer(p, x))),
									(t.label = 5);
							case 5:
								return (
									null != f && this.disposeData(f.dataId),
									(b = this.convertAndCacheOnCPU(E, v)),
									(w = this.pendingRead.get(E)),
									this.pendingRead.delete(E),
									w.forEach(function (t) {
										return t(b);
									}),
									this.pendingDisposal.has(E) &&
										(this.pendingDisposal.delete(E),
										this.disposeData(E),
										this.pendingDeletes--),
									[2, b]
								);
						}
					});
				});
			}),
			(Ds.prototype.checkNumericalProblems = function (t) {
				if (null != t)
					for (var e = 0; e < t.length; e++) {
						var n = t[e];
						if (!ce(n)) {
							if (_().getBool('WEBGL_RENDER_FLOAT32_CAPABLE'))
								throw Error(
									'The value ' +
										n +
										" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"
								);
							throw Error(
								'The value ' + n + ' cannot be represented on this device.'
							);
						}
					}
			}),
			(Ds.prototype.getValuesFromTexture = function (t) {
				var e,
					n = this.texData.get(t),
					r = n.shape,
					o = n.dtype,
					i = n.isPacked,
					a = L(r);
				if (_().getBool('WEBGL_DOWNLOAD_FLOAT_ENABLED')) {
					var s = this.decode(t),
						u = this.texData.get(s.dataId),
						c = (e = this.gpgpu).downloadMatrixFromPackedTexture
							.apply(e, [u.texture].concat(ie(r)))
							.subarray(0, a);
					return this.disposeData(s.dataId), c;
				}
				var l = _().getBool('WEBGL_PACK') && !0 === i,
					h = l ? Le(r) : r,
					p = l ? new Gi(h) : new Vi(h),
					f = this.runWebGLProgram(
						p,
						[{ shape: h, dtype: o, dataId: t }],
						'float32'
					),
					d = this.texData.get(f.dataId),
					v = this.gpgpu
						.downloadByteEncodedFloatMatrixFromOutputTexture(
							d.texture,
							d.texShape[0],
							d.texShape[1]
						)
						.subarray(0, a);
				return this.disposeData(f.dataId), v;
			}),
			(Ds.prototype.time = function (u) {
				return y(this, void 0, void 0, function () {
					var e, n, r, o, i, a, s;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(e = this.activeTimers),
									(r = !(n = [])),
									null == this.programTimersStack
										? ((this.programTimersStack = n), (r = !0))
										: this.activeTimers.push(n),
									(this.activeTimers = n),
									u(),
									(o = b(
										this.activeTimers.map(function (t) {
											return t.query;
										})
									).filter(function (t) {
										return null != t;
									})),
									(i = b(
										this.activeTimers.map(function (t) {
											return t.name;
										})
									).filter(function (t) {
										return null != t;
									})),
									(this.activeTimers = e),
									r && (this.programTimersStack = null),
									[4, Promise.all(o)]
								);
							case 1:
								return (
									(a = t.sent()),
									(s = {
										uploadWaitMs: this.uploadWaitMs,
										downloadWaitMs: this.downloadWaitMs,
										kernelMs: v(a),
										getExtraProfileInfo: function () {
											return a
												.map(function (t, e) {
													return { name: i[e], ms: t };
												})
												.map(function (t) {
													return t.name + ': ' + t.ms;
												})
												.join(', ');
										},
										wallMs: null,
									}),
									(this.uploadWaitMs = 0),
									(this.downloadWaitMs = 0),
									[2, s]
								);
						}
					});
				});
			}),
			(Ds.prototype.memory = function () {
				return { unreliable: !1, numBytesInGPU: this.numBytesInGPU };
			}),
			(Ds.prototype.startTimer = function () {
				return 0 < _().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
					? this.gpgpu.beginQuery()
					: { startMs: tt(), endMs: null };
			}),
			(Ds.prototype.endTimer = function (t) {
				return (
					0 < _().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
						? this.gpgpu.endQuery()
						: (t.endMs = tt()),
					t
				);
			}),
			(Ds.prototype.getQueryTime = function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						return 0 <
							_().getNumber('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION')
							? [2, this.gpgpu.waitForQueryAndGetTime(n)]
							: [2, (e = n).endMs - e.startMs];
					});
				});
			}),
			(Ds.prototype.disposeData = function (t) {
				if (!this.pendingDisposal.has(t)) {
					if (this.pendingRead.has(t))
						return this.pendingDisposal.add(t), void this.pendingDeletes++;
					if (this.texData.has(t)) {
						this.releaseGPUData(t);
						var e = this.texData.get(t).complexTensors;
						null != e && (e.real.dispose(), e.imag.dispose()),
							this.texData.delete(t);
					}
				}
			}),
			(Ds.prototype.releaseGPUData = function (t) {
				var e = this.texData.get(t),
					n = e.texture,
					r = e.dtype,
					o = e.texShape,
					i = e.usage,
					a = e.isPacked,
					s = e.slice,
					u = (s && s.origDataId) || t,
					c = this.dataRefCount.get(u);
				1 < c
					? this.dataRefCount.set(u, c - 1)
					: (this.dataRefCount.delete(u),
					  null != n &&
							((this.numBytesInGPU -= this.computeBytes(o, r)),
							this.textureManager.releaseTexture(n, o, i, a)));
				var l = this.texData.get(t);
				(l.texture = null),
					(l.texShape = null),
					(l.isPacked = !1),
					(l.slice = null);
			}),
			(Ds.prototype.getTexture = function (t) {
				return this.uploadToGPU(t), this.texData.get(t).texture;
			}),
			(Ds.prototype.getDataInfo = function (t) {
				return this.texData.get(t);
			}),
			(Ds.prototype.getCPUBackend = function () {
				return _().getBool('WEBGL_CPU_FORWARD')
					? (null == this.cpuBackend &&
							(this.cpuBackend = qt.findBackend('cpu')),
					  this.cpuBackend)
					: null;
			}),
			(Ds.prototype.shouldExecuteOnCPU = function (t, e) {
				var n = this;
				return (
					void 0 === e && (e = 128),
					null != this.getCPUBackend() &&
						t.every(function (t) {
							return null == n.texData.get(t.dataId).texture && t.size < e;
						})
				);
			}),
			(Ds.prototype.getGPGPUContext = function () {
				return this.gpgpu;
			}),
			(Ds.prototype.complex = function (t, e) {
				var n = this.makeOutput(t.shape, 'complex64');
				return (
					(this.texData.get(n.dataId).complexTensors = {
						real: qt.keep(t.clone()),
						imag: qt.keep(e.clone()),
					}),
					n
				);
			}),
			(Ds.prototype.real = function (t) {
				return this.texData.get(t.dataId).complexTensors.real.clone();
			}),
			(Ds.prototype.imag = function (t) {
				return this.texData.get(t.dataId).complexTensors.imag.clone();
			}),
			(Ds.prototype.slice = function (t, e, n) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.slice(t, e, n);
				if (0 === L(n)) return En([], n, t.dtype);
				var r = this.texData.get(t.dataId).isPacked,
					o = Zr(t.shape, e, n);
				if (!r && o)
					return this.uploadToGPU(t.dataId), this.shallowSlice(t, e, n);
				var i = _().getBool('WEBGL_PACK_ARRAY_OPERATIONS')
						? new Ja(n)
						: new Ka(n),
					a = i.getCustomSetupFunc(e);
				return this.compileAndRun(i, [t], null, a);
			}),
			(Ds.prototype.shallowSlice = function (t, e, n) {
				var r = this.texData.get(t.dataId),
					o = this.makeOutput(n, t.dtype),
					i = this.texData.get(o.dataId);
				Object.assign(i, r), (i.shape = n), (i.dtype = t.dtype);
				var a = to(e, t.strides);
				r.slice && (a += r.slice.flatOffset),
					(i.slice = {
						flatOffset: a,
						origDataId: (r.slice && r.slice.origDataId) || t.dataId,
					});
				var s = this.dataRefCount.get(i.slice.origDataId) || 1;
				return this.dataRefCount.set(i.slice.origDataId, s + 1), o;
			}),
			(Ds.prototype.stridedSlice = function (t, e, n, r) {
				if (this.shouldExecuteOnCPU([t]))
					return this.cpuBackend.stridedSlice(t, e, n, r);
				var o = $r(e, n, r);
				if (
					o.some(function (t) {
						return 0 === t;
					})
				)
					return En([], o);
				var i = new $a(e, r, o);
				return this.compileAndRun(i, [t]);
			}),
			(Ds.prototype.reverse = function (t, e) {
				var n = _().getBool('WEBGL_PACK_ARRAY_OPERATIONS')
					? new Ga(t.shape, e)
					: new Va(t.shape, e);
				return this.compileAndRun(n, [t]);
			}),
			(Ds.prototype.concat = function (t, e) {
				if ('complex64' === t[0].dtype) {
					var n = t.map(function (t) {
							return wn(t);
						}),
						r = t.map(function (t) {
							return Cn(t);
						});
					return bn(this.concat(n, e), this.concat(r, e));
				}
				if (this.shouldExecuteOnCPU(t)) return this.cpuBackend.concat(t, e);
				if (1 === t.length) return t[0];
				if (t.length > _().getNumber('WEBGL_MAX_TEXTURES_IN_SHADER')) {
					var o = Math.floor(t.length / 2),
						i = this.concat(t.slice(0, o), e),
						a = this.concat(t.slice(o), e);
					return this.concat([i, a], e);
				}
				if (_().getBool('WEBGL_PACK_ARRAY_OPERATIONS') && 1 < t[0].rank) {
					var s = new vi(
						t.map(function (t) {
							return t.shape;
						}),
						e
					);
					return this.compileAndRun(s, t);
				}
				var u = yn(
						t.map(function (t) {
							return t.shape;
						}),
						e
					),
					c = t.map(function (t) {
						return t.as2D(-1, L(t.shape.slice(e)));
					}),
					l = new di(
						c.map(function (t) {
							return t.shape;
						})
					);
				return this.compileAndRun(l, c).reshape(u);
			}),
			(Ds.prototype.neg = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.neg(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, ms, t.dtype);
				var e = new as(t.shape, ms);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.batchMatMul = function (t, e, n, r) {
				var o = n ? t.shape[2] : t.shape[1],
					i = r ? e.shape[1] : e.shape[2],
					a = n ? t.shape[1] : t.shape[2],
					s = t.shape[0];
				if ((1 === o || 1 === i) && 1e3 < a) {
					n && (t = t.transpose([0, 2, 1])), r && (e = e.transpose([0, 2, 1]));
					var u = 1 === i ? t : t.as3D(s, a, 1),
						c = 1 === i ? 2 : 1,
						l = 1 === i ? e.as3D(s, 1, a) : e;
					return this.multiply(u, l).sum(c, !0);
				}
				var h = Mt(t.dtype, e.dtype),
					p = new Ra(t.shape, [s, o, i], n, r);
				return this.compileAndRun(p, [t, e], h);
			}),
			(Ds.prototype.fusedBatchMatMul = function (t) {
				var e = t.a,
					n = t.b,
					r = t.transposeA,
					o = t.transposeB,
					i = t.bias,
					a = t.activation,
					s = t.preluActivationWeights,
					u = r ? e.shape[2] : e.shape[1],
					c = o ? n.shape[1] : n.shape[2],
					l = e.shape[0],
					h = Mt(e.dtype, n.dtype),
					p = null != i,
					f = null != s,
					d = a ? Rs(a, !0) : null,
					v = new Ra(e.shape, [l, u, c], r, o, p, d, f),
					m = [e, n];
				return i && m.push(i), s && m.push(s), this.compileAndRun(v, m, h);
			}),
			(Ds.prototype.multiply = function (t, e) {
				if ('complex64' === t.dtype) {
					var n = this.texData.get(t.dataId),
						r = this.texData.get(e.dataId),
						o = new li(
							'return areal * breal - aimag * bimag;',
							t.shape,
							e.shape
						),
						i = new li(
							'return areal * bimag + aimag * breal;',
							t.shape,
							e.shape
						),
						a = [
							this.makeComplexComponentTensorInfo(t, n.complexTensors.real),
							this.makeComplexComponentTensorInfo(t, n.complexTensors.imag),
							this.makeComplexComponentTensorInfo(e, r.complexTensors.real),
							this.makeComplexComponentTensorInfo(e, r.complexTensors.imag),
						],
						s = this.compileAndRun(o, a),
						u = this.compileAndRun(i, a),
						c = this.complex(s, u);
					return s.dispose(), u.dispose(), c;
				}
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.multiply(t, e);
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(t, e, yi, t.dtype);
				var l = new hi(yi, t.shape, e.shape);
				return this.compileAndRun(l, [t, e], t.dtype);
			}),
			(Ds.prototype.batchNormalization = function (t, e, n, r, o, i) {
				var a = [t, e, n],
					s = null;
				null != i && ((s = i.shape), a.push(i));
				var u = null;
				if (
					(null != o && ((u = o.shape), a.push(o)),
					_().getBool('WEBGL_PACK_NORMALIZATION'))
				) {
					var c = new ci(t.shape, e.shape, n.shape, s, u, r);
					return this.compileAndRun(c, a);
				}
				var l = new ui(t.shape, e.shape, n.shape, s, u, r);
				return this.compileAndRun(l, a);
			}),
			(Ds.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
				var i = _().getBool('WEBGL_PACK_NORMALIZATION')
					? new Ea(t.shape, e, n, r, o)
					: new wa(t.shape, e, n, r, o);
				return this.compileAndRun(i, [t]);
			}),
			(Ds.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
				var s = new Ca(e.shape, r, o, i, a);
				return this.compileAndRun(s, [e, n, t]);
			}),
			(Ds.prototype.tile = function (t, e) {
				if ('string' === t.dtype) {
					var n = this.readSync(t.dataId).map(function (t) {
						return rt(t);
					});
					return Uo(sr(t.shape, t.dtype, n), e);
				}
				var r = new rs(t.shape, e);
				return this.compileAndRun(r, [t]);
			}),
			(Ds.prototype.pad = function (t, e, n) {
				var r = _().getBool('WEBGL_PACK_ARRAY_OPERATIONS')
					? new Na(t.shape, e, n)
					: new Ta(t.shape, e, n);
				return this.compileAndRun(r, [t]);
			}),
			(Ds.prototype.transpose = function (t, e) {
				if (this.shouldExecuteOnCPU([t]))
					return this.cpuBackend.transpose(t, e);
				var n = _().getBool('WEBGL_PACK_ARRAY_OPERATIONS')
					? new is(t.shape, e)
					: new os(t.shape, e);
				return this.compileAndRun(n, [t]);
			}),
			(Ds.prototype.gather = function (t, e, n) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.gather(t, e, n);
				var r = new Ki(t.shape, e.size, n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.batchToSpaceND = function (t, e, n) {
				P(t.rank <= 4, function () {
					return 'batchToSpaceND for rank > 4 with a WebGL backend not implemented yet';
				});
				var r = e.reduce(function (t, e) {
						return t * e;
					}),
					o = Pr(t.shape, e, r),
					i = Br(o.length, e.length),
					a = Lr(t.shape, e, r),
					s = Wr(n, e.length),
					u = zr(a, n, e.length);
				return t.reshape(o).transpose(i).reshape(a).slice(s, u);
			}),
			(Ds.prototype.spaceToBatchND = function (t, e, n) {
				P(t.rank <= 4, function () {
					return 'spaceToBatchND for rank > 4 with a WebGL backend not implemented yet';
				});
				var r = e.reduce(function (t, e) {
						return t * e;
					}),
					o = [[0, 0]];
				o.push.apply(o, n);
				for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
				var a = t.pad(o),
					s = Pr(a.shape, e, r, !1),
					u = Br(s.length, e.length, !1),
					c = Lr(a.shape, e, r, !1);
				return a.reshape(s).transpose(u).reshape(c);
			}),
			(Ds.prototype.reduce = function (t, e, n) {
				var r = t.shape[0],
					o = t.shape[1],
					i = Gr(o),
					a = new Oa({ windowSize: i, inSize: o, batchSize: r }, e),
					s = this.compileAndRun(a, [t], n);
				return 1 === s.shape[1] ? s : this.reduce(s, e, n);
			}),
			(Ds.prototype.argReduce = function (t, e, n) {
				void 0 === n && (n = null);
				var r = t.shape[0],
					o = t.shape[1];
				null != n && ((r = n.shape[0]), (o = n.shape[1]));
				var i = Gr(o),
					a = new jo({ windowSize: i, inSize: o, batchSize: r }, e, null == n),
					s = [t];
				null != n && s.push(n);
				var u = this.compileAndRun(a, s, 'int32');
				return 1 === u.shape[1] ? u : this.argReduce(t, e, u);
			}),
			(Ds.prototype.argReducePacked = function (t, e, n) {
				void 0 === n && (n = null);
				var r = null != n ? n.shape : t.shape,
					o = Gr(r[r.length - 1]),
					i = new ii(r, o, e, null == n),
					a = null == n ? [t] : [t, n],
					s = this.compileAndRun(i, a, 'int32');
				return s.rank === t.rank ? this.argReducePacked(t, e, s) : s;
			}),
			(Ds.prototype.sum = function (t, e) {
				fn('sum', e, t.rank);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o),
					a = Ot(t.dtype);
				return this.reduce(i, 'sum', a).reshape(r);
			}),
			(Ds.prototype.prod = function (t, e) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.prod(t, e);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o),
					a = Ot(t.dtype);
				return this.reduce(i, 'prod', a).reshape(r);
			}),
			(Ds.prototype.unsortedSegmentSum = function (t, e, n) {
				var r = 0,
					o = dn([r], t.rank),
					i = t;
				null != o && ((i = t.transpose(o)), (r = mn(1, t.rank)[0]));
				var a = (function (t, e, n) {
						for (var r = [], o = t.length, i = 0; i < o; i++)
							i !== e ? r.push(t[i]) : r.push(n);
						return r;
					})(i.shape, r, n),
					s = L([i.shape[r]]),
					u = i.as2D(-1, s),
					c = Ot(t.dtype),
					l = this.segOpCompute(u, 'unsortedSegmentSum', e, c, n).reshape(a);
				return null != o && (l = l.transpose(vn(o))), l;
			}),
			(Ds.prototype.segOpCompute = function (t, e, n, r, o) {
				var i = t.shape[0],
					a = t.shape[1],
					s = (function (t, e) {
						var n,
							r = !1;
						for (
							t <= 30
								? ((n = t), (r = !0))
								: (n = X(t, Math.floor(Math.sqrt(t))));
							!r;

						)
							e < n || n === t ? (r = !0) : (n = X(t, n + 1));
						return n;
					})(a, o),
					u = new qa(
						{ windowSize: s, inSize: a, batchSize: i, numSegments: o },
						e
					),
					c = this.compileAndRun(u, [t, n], r);
				return c.shape[1] === o
					? c
					: ((n = Bn(0, o).tile([a / s])), this.segOpCompute(c, e, n, r, o));
			}),
			(Ds.prototype.argMinMaxReduce = function (t, e, n) {
				var r = [e];
				if (
					(fn('arg' + n.charAt(0).toUpperCase() + n.slice(1), r, t.rank),
					!_().getBool('WEBGL_PACK_REDUCE') || t.rank <= 2)
				) {
					var o = hn(t.shape, r),
						i = o[0],
						a = L(o[1]),
						s = t.as2D(-1, a);
					return this.argReduce(s, n).reshape(i);
				}
				return this.argReducePacked(t, n);
			}),
			(Ds.prototype.argMin = function (t, e) {
				return this.argMinMaxReduce(t, e, 'min');
			}),
			(Ds.prototype.argMax = function (t, e) {
				return this.argMinMaxReduce(t, e, 'max');
			}),
			(Ds.prototype.cumsum = function (t, e, n, r) {
				if (e !== t.rank - 1)
					throw new Error(
						'WebGL cumsum shader expects an inner-most axis=' +
							(t.rank - 1) +
							' but got axis=' +
							e
					);
				var o = new Bi(t.shape, n, r);
				return this.compileAndRun(o, [t]);
			}),
			(Ds.prototype.equal = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(equal(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a == b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.notEqual = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(notEqual(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a != b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.less = function (t, e) {
				if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.less(t, e);
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(lessThan(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a < b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.lessEqual = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(lessThanEqual(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a <= b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.greater = function (t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.greater(t, e);
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(greaterThan(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a > b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.greaterEqual = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(greaterThanEqual(a, b));\n',
						'bool'
					);
				var n = new hi('return float(a >= b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.logicalNot = function (t) {
				var e = new as(t.shape, 'return float(!(x >= 1.0));');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.logicalAnd = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n',
						'bool'
					);
				var n = new hi('return float(a >= 1.0 && b >= 1.0);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.logicalOr = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n',
						'bool'
					);
				var n = new hi('return float(a >= 1.0 || b >= 1.0);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e], 'bool');
			}),
			(Ds.prototype.select = function (t, e, n) {
				var r = new ja(t.rank, e.shape, e.rank);
				return this.compileAndRun(r, [t, e, n], Mt(e.dtype, n.dtype));
			}),
			(Ds.prototype.where = function (t) {
				rn(
					'tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead'
				);
				var e = t.dataSync();
				return Go(t.shape, e);
			}),
			(Ds.prototype.topk = function (t, e, n) {
				return Vo(t.dataSync(), t.shape, t.dtype, e);
			}),
			(Ds.prototype.min = function (t, e) {
				fn('min', e, t.rank);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o);
				return this.reduce(i, 'min', i.dtype).reshape(r);
			}),
			(Ds.prototype.minimum = function (t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.minimum(t, e);
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(
							'\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n',
							t.shape,
							e.shape
					  )
					: new hi(
							'\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n',
							t.shape,
							e.shape
					  );
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.mod = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(
							'\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n',
							t.shape,
							e.shape
					  )
					: new hi(
							'if (b == 0.0) return NAN;\n  return mod(a, b);',
							t.shape,
							e.shape
					  );
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.max = function (t, e) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.max(t, e);
				fn('max', e, t.rank);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o);
				return this.reduce(i, 'max', i.dtype).reshape(r);
			}),
			(Ds.prototype.maximum = function (t, e) {
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.maximum(t, e);
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(
							'\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n',
							t.shape,
							e.shape
					  )
					: new hi(
							'\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n',
							t.shape,
							e.shape
					  );
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.all = function (t, e) {
				fn('all', e, t.rank);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o);
				return this.reduce(i, 'all', i.dtype).reshape(r);
			}),
			(Ds.prototype.any = function (t, e) {
				fn('any', e, t.rank);
				var n = hn(t.shape, e),
					r = n[0],
					o = L(n[1]),
					i = t.as2D(-1, o);
				return this.reduce(i, 'any', i.dtype).reshape(r);
			}),
			(Ds.prototype.squaredDifference = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi('return (a - b) * (a - b);', t.shape, e.shape)
					: new hi('return (a - b) * (a - b);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.realDivide = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  // vec4 one = vec4(equal(a, b));\n  // return one + (vec4(1.0) - one) * a / b;\n  vec4 result = a / b;\n  if(a.x == b.x) {\n    result.x = 1.;\n  }\n  if(a.y == b.y) {\n    result.y = 1.;\n  }\n  if(a.z == b.z) {\n    result.z = 1.;\n  }\n  if(a.w == b.w) {\n    result.w = 1.;\n  }\n\n  return result;\n',
						'float32',
						!0
					);
				var n = new hi(
					'\nif (a == b) {\n  return 1.0;\n};\nreturn a / b;',
					t.shape,
					e.shape
				);
				return this.compileAndRun(n, [t, e], 'float32');
			}),
			(Ds.prototype.floorDiv = function (t, e) {
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(
						t,
						e,
						'\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  bvec4 cond = notEqual(ib, ivec4(0));\n  ivec4 result = ivec4(0);\n  vec4 s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    result[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    result[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    result[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    result[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4(result);\n',
						'int32'
					);
				var n = new hi(
					'\n  float s = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  if (ib != 0) {\n    // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n    return float(idiv(ia, ib, s));\n  } else {\n    return NAN;\n  }\n',
					t.shape,
					e.shape
				);
				return this.compileAndRun(n, [t, e], 'int32');
			}),
			(Ds.prototype.add = function (t, e) {
				if ('complex64' === t.dtype && 'complex64' === e.dtype)
					return this.complexSeparableBinaryOp(t, e, mi);
				if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.add(t, e);
				var n = Mt(t.dtype, e.dtype);
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(t, e, mi, n);
				var r = new hi(mi, t.shape, e.shape);
				return this.compileAndRun(r, [t, e], n);
			}),
			(Ds.prototype.packedUnaryOp = function (t, e, n) {
				var r = new ss(t.shape, e);
				return this.compileAndRun(r, [t], n);
			}),
			(Ds.prototype.packedBinaryOp = function (t, e, n, r, o) {
				void 0 === o && (o = !1);
				var i = new pi(n, t.shape, e.shape, o);
				return this.compileAndRun(i, [t, e], r);
			}),
			(Ds.prototype.complexSeparableBinaryOp = function (a, s, u) {
				var c = this,
					t = this.texData.get(a.dataId),
					e = this.texData.get(s.dataId),
					n = [
						[t.complexTensors.real, e.complexTensors.real],
						[t.complexTensors.imag, e.complexTensors.imag],
					].map(function (t) {
						var e = t[0],
							n = t[1],
							r = c.makeComplexComponentTensorInfo(a, e),
							o = c.makeComplexComponentTensorInfo(s, n),
							i = new hi(u, a.shape, s.shape);
						return c.compileAndRun(i, [r, o], Mt(e.dtype, n.dtype));
					}),
					r = n[0],
					o = n[1],
					i = this.complex(r, o);
				return r.dispose(), o.dispose(), i;
			}),
			(Ds.prototype.makeComplexComponentTensorInfo = function (t, e) {
				return { dataId: e.dataId, dtype: e.dtype, shape: t.shape };
			}),
			(Ds.prototype.addN = function (t) {
				if (1 === t.length) return t[0];
				if (t.length > _().get('WEBGL_MAX_TEXTURES_IN_SHADER')) {
					var e = Math.floor(t.length / 2),
						n = this.addN(t.slice(0, e)),
						r = this.addN(t.slice(e));
					return this.addN([n, r]);
				}
				var o = t
						.map(function (t) {
							return t.dtype;
						})
						.reduce(function (t, e) {
							return Mt(t, e);
						}),
					i = t.map(function (t) {
						return t.shape;
					}),
					a = _().getBool('WEBGL_PACK')
						? new qo(t[0].shape, i)
						: new Ho(t[0].shape, i);
				return this.compileAndRun(a, t, o);
			}),
			(Ds.prototype.subtract = function (t, e) {
				if ('complex64' === t.dtype && 'complex64' === e.dtype)
					return this.complexSeparableBinaryOp(t, e, gi);
				if (this.shouldExecuteOnCPU([t, e]))
					return this.cpuBackend.subtract(t, e);
				var n = Mt(t.dtype, e.dtype);
				if (_().getBool('WEBGL_PACK_BINARY_OPERATIONS'))
					return this.packedBinaryOp(t, e, gi, t.dtype);
				var r = new hi(gi, t.shape, e.shape);
				return this.compileAndRun(r, [t, e], n);
			}),
			(Ds.prototype.pow = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
						? new pi(
								'\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  bvec4 isExpZero = equal(b, vec4(0.0));\n  result.r = isExpZero.r ? 1.0 : result.r;\n  result.g = isExpZero.g ? 1.0 : result.g;\n  result.b = isExpZero.b ? 1.0 : result.b;\n  result.a = isExpZero.a ? 1.0 : result.a;\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n',
								t.shape,
								e.shape
						  )
						: new hi(
								'\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nif (b == 0.0) {\n  return 1.0;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n',
								t.shape,
								e.shape
						  ),
					r = Mt(t.dtype, e.dtype);
				return this.compileAndRun(n, [t, e], r);
			}),
			(Ds.prototype.ceil = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.ceil(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, gs, t.dtype);
				var e = new as(t.shape, gs);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.floor = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.floor(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, ys, t.dtype);
				var e = new as(t.shape, ys);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.sign = function (t) {
				var e = new as(
					t.shape,
					'\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.isNaN = function (t) {
				var e = new as(t.shape, 'return float(isnan(x));');
				return this.compileAndRun(e, [t], 'bool');
			}),
			(Ds.prototype.isInf = function (t) {
				var e = new as(t.shape, 'return float(isinf(x));');
				return this.compileAndRun(e, [t], 'bool');
			}),
			(Ds.prototype.isFinite = function (t) {
				var e = new as(t.shape, 'return float(!isnan(x) && !isinf(x));');
				return this.compileAndRun(e, [t], 'bool');
			}),
			(Ds.prototype.round = function (t) {
				var e = new as(
					t.shape,
					"\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n"
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.exp = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.exp(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, xs, t.dtype);
				var e = new as(t.shape, xs);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.expm1 = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.expm1(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, bs, t.dtype);
				var e = new as(t.shape, bs);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.log = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.log(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(
						t,
						'\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n',
						t.dtype
					);
				var e = new as(t.shape, 'if (x < 0.0) return NAN;\n  return log(x);');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.log1p = function (t) {
				var e = new as(t.shape, 'return log(1.0 + x);');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.sqrt = function (t) {
				var e = new as(t.shape, 'return sqrt(x);');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.rsqrt = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.rsqrt(t);
				var e = new as(t.shape, 'return inversesqrt(x);');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.reciprocal = function (t) {
				var e = new as(t.shape, 'return 1.0 / x;');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.relu = function (t) {
				var e;
				return (
					(e = _().getBool('WEBGL_PACK')
						? new ss(t.shape, Cs)
						: new as(t.shape, fs)),
					this.compileAndRun(e, [t])
				);
			}),
			(Ds.prototype.relu6 = function (t) {
				var e;
				return (
					(e = _().getBool('WEBGL_PACK')
						? new ss(t.shape, Es)
						: new as(t.shape, ds)),
					this.compileAndRun(e, [t])
				);
			}),
			(Ds.prototype.prelu = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(bi, t.shape, e.shape)
					: new hi(xi, t.shape, e.shape);
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.elu = function (t) {
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, _s, t.dtype);
				var e = new as(t.shape, vs);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.eluDer = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(
							'\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n',
							t.shape,
							e.shape
					  )
					: new hi('return (b >= 1.0) ? a : a * (b + 1.0);', t.shape, e.shape);
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.selu = function (t) {
				var e = new as(
					t.shape,
					'\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = 1.7580993408473768;\n  float scale = 1.0507009873554805;\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.int = function (t) {
				var e = new as(t.shape, 'return float(int(x));');
				return this.compileAndRun(e, [t], 'int32');
			}),
			(Ds.prototype.clip = function (t, e, n) {
				var r,
					o = (r = _().getBool('WEBGL_PACK_CLIP')
						? new Ci(t.shape)
						: new wi(t.shape)).getCustomSetupFunc(e, n);
				return this.compileAndRun(r, [t], null, o);
			}),
			(Ds.prototype.abs = function (t) {
				if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.abs(t);
				if (_().getBool('WEBGL_PACK_UNARY_OPERATIONS'))
					return this.packedUnaryOp(t, ps, t.dtype);
				var e = new as(t.shape, ps);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.complexAbs = function (t) {
				var e = this.texData.get(t.dataId),
					n = new fi(t.shape),
					r = [
						this.makeComplexComponentTensorInfo(t, e.complexTensors.real),
						this.makeComplexComponentTensorInfo(t, e.complexTensors.imag),
					];
				return this.compileAndRun(n, r);
			}),
			(Ds.prototype.sigmoid = function (t) {
				var e = new as(t.shape, 'return 1.0 / (1.0 + exp(-1.0 * x));');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.softplus = function (t) {
				var e = new as(
					t.shape,
					'\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.sin = function (t) {
				var e = new as(t.shape, 'if (isnan(x)) return x;\n  return sin(x);\n');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.cos = function (t) {
				var e = new as(t.shape, 'if (isnan(x)) return x;\n  return cos(x);\n');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.tan = function (t) {
				var e = new as(t.shape, 'return tan(x);');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.asin = function (t) {
				var e = new as(
					t.shape,
					'if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return asin(x);\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.acos = function (t) {
				var e = new as(
					t.shape,
					'if (isnan(x)) return x;\n  if (abs(x) > 1.) {\n    return NAN;\n  }\n  return acos(x);\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.atan = function (t) {
				var e = new as(t.shape, 'if (isnan(x)) return x;\n  return atan(x);\n');
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.atan2 = function (t, e) {
				var n = _().getBool('WEBGL_PACK_BINARY_OPERATIONS')
					? new pi(
							'\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n',
							t.shape,
							e.shape
					  )
					: new hi(
							'\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n',
							t.shape,
							e.shape
					  );
				return this.compileAndRun(n, [t, e]);
			}),
			(Ds.prototype.sinh = function (t) {
				var e = new as(
					t.shape,
					'\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.cosh = function (t) {
				var e = new as(
					t.shape,
					'\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.tanh = function (t) {
				var e = new as(
					t.shape,
					'\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.asinh = function (t) {
				var e = new as(
					t.shape,
					'if (isnan(x)) return x;return log(x + sqrt(x * x + 1.0));'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.acosh = function (t) {
				var e = new as(
					t.shape,
					'if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.atanh = function (t) {
				var e = new as(
					t.shape,
					'if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.erf = function (t) {
				var e = new as(
					t.shape,
					'\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float sign = sign(x);\n  x = abs(x);\n  float t = 1.0 / (1.0 + p * x);\n  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));\n'
				);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.step = function (t, e) {
				var n,
					r = new as(
						t.shape,
						(void 0 === (n = e) && (n = 0),
						hs + '\n    return x > 0.0 ? 1.0 : float(' + n + ');\n  ')
					);
				return this.compileAndRun(r, [t]);
			}),
			(Ds.prototype.conv2dByMatMul = function (t, e, n, r, o, i) {
				var a = t.shape,
					s = this.texData.get(t.dataId),
					u = n.inChannels,
					c = a[0] * a[1] * a[2],
					l = n.outChannels,
					h = 'channelsLast' === n.dataFormat,
					p = (1 == c || 1 === l) && 1e3 < u,
					f = a[2] % 2 != 0 && !!s.isPacked;
				if (
					p ||
					!_().getBool('WEBGL_LAZILY_UNPACK') ||
					!_().getBool('WEBGL_PACK_BINARY_OPERATIONS') ||
					!f
				) {
					var d = h ? a[0] * a[1] * a[2] : a[0] * a[2] * a[3],
						v = this.reshape(t, [1, d, n.inChannels]),
						m = this.reshape(e, [1, n.inChannels, n.outChannels]);
					return this.reshape(
						this.fusedBatchMatMul({
							a: v,
							b: m,
							transposeA: !1,
							transposeB: !1,
							bias: r,
							activation: o,
							preluActivationWeights: i,
						}),
						n.outShape
					);
				}
				var g = h ? a[0] * a[1] * (a[2] + 1) : a[0] * a[2] * (a[3] + 1),
					y = { dataId: t.dataId, shape: [1, g, n.inChannels], dtype: t.dtype },
					x = s.shape;
				(s.shape = s.shape.slice()),
					s.shape[s.shape.length - 2]++,
					P(Ue(s.shape, y.shape), function () {
						return (
							'packed reshape ' + s.shape + ' to ' + y.shape + " isn't free"
						);
					});
				var b = this.reshape(e, [1, n.inChannels, n.outChannels]),
					w = this.fusedBatchMatMul({
						a: y,
						b: b,
						transposeA: !1,
						transposeB: !1,
						bias: r,
						activation: o,
						preluActivationWeights: i,
					}),
					C = this.texData.get(w.dataId);
				return (
					P(C.isPacked, function () {
						return 'batchMatMul result is expected to be packed';
					}),
					(s.shape = x),
					(C.shape = n.outShape),
					qt.makeTensorFromDataId(w.dataId, n.outShape, w.dtype)
				);
			}),
			(Ds.prototype.conv2dWithIm2Row = function (t, e, n, r, o, i) {
				var a = n.filterWidth,
					s = n.filterHeight,
					u = n.inChannels,
					c = n.outWidth,
					l = n.outHeight,
					h = 'channelsLast' === n.dataFormat,
					p = a * s * u,
					f = l * c,
					d = [p, f],
					v = t.squeeze([0]),
					m = e.reshape([1, p, -1]),
					g = new ba(d, v.shape, n),
					y = this.compileAndRun(g, [v]).reshape([1, d[0], d[1]]),
					x = null != r,
					b = null != i,
					w = o ? Rs(o, !0) : null,
					C = new Ra(y.shape, [1, f, n.outChannels], !0, !1, x, w, b),
					E = [y, m];
				r && E.push(r), b && E.push(i);
				var _ = this.compileAndRun(C, E);
				return h
					? _.reshape([1, l, c, n.outChannels])
					: _.reshape([1, n.outChannels, l, c]);
			}),
			(Ds.prototype.fusedConv2d = function (t) {
				var e = t.input,
					n = t.filter,
					r = t.convInfo,
					o = t.bias,
					i = t.activation,
					a = t.preluActivationWeights;
				if (
					1 === r.filterHeight &&
					1 === r.filterWidth &&
					1 === r.dilationHeight &&
					1 === r.dilationWidth &&
					1 === r.strideHeight &&
					1 === r.strideWidth &&
					('SAME' === r.padInfo.type || 'VALID' === r.padInfo.type)
				)
					return this.conv2dByMatMul(e, n, r, o, i, a);
				if (_().getBool('WEBGL_CONV_IM2COL') && 1 === e.shape[0])
					return this.conv2dWithIm2Row(e, n, r, o, i, a);
				var s = null != o,
					u = null != a,
					c = i ? Rs(i, !1) : null,
					l = new Ni(r, s, c, u),
					h = [e, n];
				return o && h.push(o), a && h.push(a), this.compileAndRun(l, h);
			}),
			(Ds.prototype.conv2d = function (t, e, n) {
				if (
					1 === n.filterHeight &&
					1 === n.filterWidth &&
					1 === n.dilationHeight &&
					1 === n.dilationWidth &&
					1 === n.strideHeight &&
					1 === n.strideWidth &&
					('SAME' === n.padInfo.type || 'VALID' === n.padInfo.type)
				)
					return this.conv2dByMatMul(t, e, n);
				if (_().getBool('WEBGL_CONV_IM2COL') && 1 === t.shape[0])
					return this.conv2dWithIm2Row(t, e, n);
				var r = new Ni(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.conv2dDerInput = function (t, e, n) {
				var r = new ki(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.conv2dDerFilter = function (t, e, n) {
				var r = new Ri(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.fusedDepthwiseConv2D = function (t) {
				var e,
					n = t.input,
					r = t.filter,
					o = t.convInfo,
					i = t.bias,
					a = t.activation,
					s = t.preluActivationWeights,
					u =
						_().getBool('WEBGL_PACK_DEPTHWISECONV') &&
						o.strideWidth <= 2 &&
						o.outChannels / o.inChannels == 1,
					c = a ? Rs(a, u) : null,
					l = [n, r],
					h = null != i,
					p = null != s;
				return (
					h && l.push(i),
					p && l.push(s),
					(e = u ? new Oi(o, h, c, p) : new Mi(o, h, c, p)),
					this.compileAndRun(e, l)
				);
			}),
			(Ds.prototype.depthwiseConv2D = function (t, e, n) {
				var r;
				return (
					(r =
						_().getBool('WEBGL_PACK_DEPTHWISECONV') &&
						n.strideWidth <= 2 &&
						n.outChannels / n.inChannels == 1
							? new Oi(n)
							: new Mi(n)),
					this.compileAndRun(r, [t, e])
				);
			}),
			(Ds.prototype.depthwiseConv2DDerInput = function (t, e, n) {
				var r = new Ti(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
				var r = new Ai(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.conv3d = function (t, e, n) {
				var r = new Fi(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.conv3dDerInput = function (t, e, n) {
				var r = new Di(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.conv3dDerFilter = function (t, e, n) {
				var r = new Si(n);
				return this.compileAndRun(r, [t, e]);
			}),
			(Ds.prototype.maxPool = function (t, e) {
				var n = new Fa(e, 'max', !1);
				return this.compileAndRun(n, [t]);
			}),
			(Ds.prototype.avgPool = function (t, e) {
				var n = new Fa(e, 'avg', !1);
				return this.compileAndRun(n, [t], 'float32');
			}),
			(Ds.prototype.maxPoolBackprop = function (t, e, n, r) {
				var o = new Fa(r, 'max', !0),
					i = this.compileAndRun(o, [e]),
					a = new _a(r),
					s = this.compileAndRun(a, [t, i], e.dtype);
				return i.dispose(), s;
			}),
			(Ds.prototype.avgPoolBackprop = function (t, e, n) {
				var r = new ai(n);
				return this.compileAndRun(r, [t], e.dtype);
			}),
			(Ds.prototype.cast = function (t, e) {
				return So(t, e, this);
			}),
			(Ds.prototype.unstack = function (t, e) {
				for (
					var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0;
					i < t.rank;
					i++
				)
					i !== e && (r[o++] = t.shape[i]);
				var a = new Array(t.rank).fill(0),
					s = t.shape.slice();
				s[e] = 1;
				var u = new Array(n);
				for (i = 0; i < u.length; i++)
					u[(a[e] = i)] = this.slice(t, a, s).reshape(r);
				return u;
			}),
			(Ds.prototype.avgPool3d = function (t, e) {
				var n = new Ma(e, 'avg', !1);
				return this.compileAndRun(n, [t], 'float32');
			}),
			(Ds.prototype.avgPool3dBackprop = function (t, e, n) {
				var r = new si(n);
				return this.compileAndRun(r, [t], e.dtype);
			}),
			(Ds.prototype.maxPool3d = function (t, e) {
				var n = new Ma(e, 'max', !1);
				return this.compileAndRun(n, [t], 'float32');
			}),
			(Ds.prototype.maxPool3dBackprop = function (t, e, n, r) {
				var o = new Ma(r, 'max', !0),
					i = this.compileAndRun(o, [e]),
					a = new Ia(r),
					s = this.compileAndRun(a, [t, i], e.dtype);
				return i.dispose(), s;
			}),
			(Ds.prototype.reshape = function (t, e) {
				var n = this.texData.get(t.dataId);
				if (
					!n.isPacked ||
					Ue(t.shape, e) ||
					(null !== n.texture && Ue(n.shape, e))
				)
					return Do(t, e);
				var r = this.packedReshape(t, e);
				return qt.makeTensorFromDataId(r.dataId, r.shape, r.dtype);
			}),
			(Ds.prototype.resizeBilinear = function (t, e, n, r) {
				var o = _().getBool('WEBGL_PACK_IMAGE_OPERATIONS')
					? new Wa(t.shape, e, n, r)
					: new La(t.shape, e, n, r);
				return this.compileAndRun(o, [t], 'float32');
			}),
			(Ds.prototype.resizeBilinearBackprop = function (t, e, n) {
				var r = new Ba(t, e, n);
				return this.compileAndRun(r, [t]);
			}),
			(Ds.prototype.resizeNearestNeighbor = function (t, e, n, r) {
				var o = new Ua(t.shape, e, n, r);
				return this.compileAndRun(o, [t]);
			}),
			(Ds.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
				var r = new za(t, e, n);
				return this.compileAndRun(r, [t]);
			}),
			(Ds.prototype.multinomial = function (t, e, n, r) {
				var o = e ? t : io(t),
					i = o.shape[0],
					a = o.shape[1],
					s = new Da(i, a, n),
					u = s.getCustomSetupFunc(r);
				return this.compileAndRun(s, [o], 'int32', u);
			}),
			(Ds.prototype.oneHot = function (t, e, n, r) {
				var o = new ka(t.size, e, n, r);
				return this.compileAndRun(o, [t]);
			}),
			(Ds.prototype.diag = function (t) {
				var e = new Ui(t.size);
				return this.compileAndRun(e, [t]);
			}),
			(Ds.prototype.nonMaxSuppression = function (t, e, n, r, o) {
				return (
					rn(
						'tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead'
					),
					Oo(t.dataSync(), e.dataSync(), n, r, o)
				);
			}),
			(Ds.prototype.cropAndResize = function (t, e, n, r, o, i) {
				var a = new Pi(t.shape, e.shape, r, o, i);
				return this.compileAndRun(a, [t, e, n], 'float32');
			}),
			(Ds.prototype.depthToSpace = function (t, e, n) {
				P(1 < e, function () {
					return 'blockSize should be > 1 for depthToSpace, but was: ' + e;
				});
				var r = t.shape[0],
					o = 'NHWC' === n ? t.shape[1] : t.shape[2],
					i = 'NHWC' === n ? t.shape[2] : t.shape[3],
					a = 'NHWC' === n ? t.shape[3] : t.shape[1],
					s = o * e,
					u = i * e,
					c = a / (e * e),
					l = new Xi('NHWC' === n ? [r, s, u, c] : [r, c, s, u], e, n);
				return this.compileAndRun(l, [t]);
			}),
			(Ds.prototype.split = function (t, e, n) {
				return zo(t, e, n);
			}),
			(Ds.prototype.scatterND = function (t, e, n) {
				var r = jr(0, t, n),
					o = r.sliceRank,
					i = r.numUpdates,
					a = r.sliceSize,
					s = r.strides,
					u = r.outputSize,
					c = [u / a, a],
					l = t.reshape([i, o]),
					h = e.reshape([i, a]);
				if (0 === u) return Do(En([]), n);
				var p = In(0),
					f = new Ha(i, o, l.rank, h.rank, s, c);
				return this.compileAndRun(f, [h, l, p]).reshape(n);
			}),
			(Ds.prototype.sparseToDense = function (t, e, n, r) {
				var o = jr(0, t, n),
					i = o.sliceRank,
					a = o.numUpdates,
					s = o.strides,
					u = o.outputSize,
					c = new Ha(a, i, t.rank, e.rank, s, [u, 1], !1);
				return this.compileAndRun(c, [e, t, r]).reshape(n);
			}),
			(Ds.prototype.fft = function (t) {
				return this.fftImpl(t, !1);
			}),
			(Ds.prototype.ifft = function (t) {
				return this.fftImpl(t, !0);
			}),
			(Ds.prototype.fftImpl = function (t, e) {
				var n = this.texData.get(t.dataId),
					r = new ji('return real * expR - imag * expI;', t.shape, e),
					o = new ji('return real * expI + imag * expR;', t.shape, e),
					i = [
						this.makeComplexComponentTensorInfo(t, n.complexTensors.real),
						this.makeComplexComponentTensorInfo(t, n.complexTensors.imag),
					],
					a = this.compileAndRun(r, i),
					s = this.compileAndRun(o, i),
					u = this.complex(a, s).as2D(t.shape[0], t.shape[1]);
				return a.dispose(), s.dispose(), u;
			}),
			(Ds.prototype.gatherND = function (t, e) {
				var n = e.shape,
					r = n[n.length - 1],
					o = Ur(t, e),
					i = o[0],
					a = o[1],
					s = o[2],
					u = o[3],
					c = e.reshape([a, r]),
					l = t.reshape([t.size / s, s]),
					h = new Qi(r, u, [a, s]);
				return this.compileAndRun(h, [l, c]).reshape(i);
			}),
			(Ds.prototype.fill = function (t, e, n) {
				if ('string' === (n = n || j(e))) {
					var r = F(n, L(t));
					return r.fill(e), qt.makeTensor(r, t, n, this);
				}
				var o = new Yi(t, e),
					i = o.getCustomSetupFunc(e);
				return this.compileAndRun(o, [], n, i);
			}),
			(Ds.prototype.onesLike = function (t) {
				if ('string' === t.dtype)
					throw new Error('onesLike is not supported under string dtype');
				return this.fill(t.shape, 1, t.dtype);
			}),
			(Ds.prototype.zerosLike = function (t) {
				return this.fill(t.shape, 'string' === t.dtype ? '' : 0, t.dtype);
			}),
			(Ds.prototype.linspace = function (t, e, n) {
				return Ao(t, e, n);
			}),
			(Ds.prototype.makeTensorInfo = function (t, e) {
				var n = this.write(null, t, e);
				return (
					(this.texData.get(n).usage = null), { dataId: n, shape: t, dtype: e }
				);
			}),
			(Ds.prototype.makeOutput = function (t, e) {
				var n = this.makeTensorInfo(t, e).dataId;
				return qt.makeTensorFromDataId(n, t, e, this);
			}),
			(Ds.prototype.unpackTensor = function (t) {
				var e = new us(t.shape);
				return this.runWebGLProgram(e, [t], t.dtype);
			}),
			(Ds.prototype.packTensor = function (t) {
				var e = new Sa(t.shape);
				return this.runWebGLProgram(e, [t], t.dtype, null, !0);
			}),
			(Ds.prototype.packedReshape = function (t, e) {
				var n = [Pe(t.shape)].concat(Be(t.shape)),
					r = { dtype: t.dtype, shape: n, dataId: t.dataId },
					o = [Pe(e)].concat(Be(e)),
					i = new Pa(o, n),
					a = this.runWebGLProgram(i, [r], t.dtype, null, !0);
				return { dataId: a.dataId, shape: e, dtype: a.dtype };
			}),
			(Ds.prototype.decode = function (t) {
				var e,
					n = this.texData.get(t),
					r = n.isPacked,
					o = n.shape,
					i = n.dtype,
					a = Le(o);
				return (
					(e = r ? new zi(a) : new Wi(a)),
					{
						dtype: i,
						shape: o,
						dataId: this.runWebGLProgram(
							e,
							[{ shape: a, dtype: i, dataId: t }],
							i,
							null,
							!0
						).dataId,
					}
				);
			}),
			(Ds.prototype.runWebGLProgram = function (o, t, e, n, r) {
				var i = this;
				void 0 === r && (r = !1);
				var a = this.makeTensorInfo(o.outputShape, e),
					s = this.texData.get(a.dataId);
				if (
					(o.packedOutput && (s.isPacked = !0), o.outPackingScheme === Xt.DENSE)
				) {
					var u = ie(o.outputShape);
					s.texShape = u.map(function (t) {
						return 2 * t;
					});
				}
				if (
					(null != o.outTexUsage && (s.usage = o.outTexUsage), 0 === L(a.shape))
				)
					return (s.values = N(a.dtype, 0)), a;
				var c = [],
					l = t.map(function (t) {
						if ('complex64' === t.dtype)
							throw new Error(
								'GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.'
							);
						var e = i.texData.get(t.dataId);
						if (null == e.texture) {
							if (
								!o.packedInputs &&
								L(t.shape) <= _().getNumber('WEBGL_SIZE_UPLOAD_UNIFORM')
							)
								return {
									shape: t.shape,
									texData: null,
									isUniform: !0,
									uniformValues: e.values,
								};
							o.packedInputs && ((e.isPacked = !0), (e.shape = t.shape));
						} else if (!!e.isPacked != !!o.packedInputs)
							(t = e.isPacked ? i.unpackTensor(t) : i.packTensor(t)),
								c.push(t),
								(e = i.texData.get(t.dataId));
						else if (e.isPacked && !Ue(e.shape, t.shape)) {
							var n = t,
								r = t.shape;
							(t.shape = e.shape),
								(t = i.packedReshape(t, r)),
								c.push(t),
								(e = i.texData.get(t.dataId)),
								(n.shape = r);
						}
						return (
							i.uploadToGPU(t.dataId),
							{ shape: t.shape, texData: e, isUniform: !1 }
						);
					});
				this.uploadToGPU(a.dataId);
				var h,
					p = { shape: a.shape, texData: s, isUniform: !1 },
					f = (function (t, e, n) {
						var r = '';
						l.concat(n).forEach(function (t) {
							var e =
									null != t.texData &&
									null != t.texData.slice &&
									0 < t.texData.slice.flatOffset,
								n = t.isUniform ? 'uniform' : t.texData.texShape;
							r += t.shape + '_' + n + '_' + e;
						});
						var o = t.userCode;
						return t.constructor.name + '_' + r + '_' + o;
					})(o, 0, p),
					d = this.getAndSaveBinary(f, function () {
						return (function (t, r, e, n) {
							var o = r.userCode,
								i = e.map(function (t, e) {
									var n = {
										logicalShape: t.shape,
										texShape: t.isUniform ? null : t.texData.texShape,
										isUniform: t.isUniform,
										isPacked: !t.isUniform && t.texData.isPacked,
										flatOffset: null,
									};
									return (
										null != t.texData &&
											null != t.texData.slice &&
											0 < t.texData.slice.flatOffset &&
											(n.flatOffset = t.texData.slice.flatOffset),
										{ name: r.variableNames[e], shapeInfo: n }
									);
								}),
								a = i.map(function (t) {
									return t.shapeInfo;
								}),
								s = {
									logicalShape: n.shape,
									texShape: n.texData.texShape,
									isUniform: !1,
									isPacked: n.texData.isPacked,
									flatOffset: null,
								},
								u = Zo(i, s, o, r.packedInputs),
								c = t.createProgram(u),
								l = null,
								h = t.getUniformLocation(c, 'NAN', !1);
							1 === _().getNumber('WEBGL_VERSION') &&
								(l = t.getUniformLocation(c, 'INFINITY', !1));
							for (var p = {}, f = 0; f < r.variableNames.length; f++) {
								var d = r.variableNames[f];
								(p[d] = t.getUniformLocation(c, d, !1)),
									(p['offset' + d] = t.getUniformLocation(c, 'offset' + d, !1));
							}
							return {
								program: r,
								source: u,
								webGLProgram: c,
								uniformLocations: p,
								inShapeInfos: a,
								outShapeInfo: s,
								infLoc: l,
								nanLoc: h,
							};
						})(i.gpgpu, o, l, p);
					}),
					v = null != this.activeTimers;
				if (
					(v && (h = this.startTimer()),
					(function (a, s, t, e, n) {
						xa(s.inShapeInfos, t), xa([s.outShapeInfo], [e]);
						var r = e.texData.texture,
							o = e.texData.texShape;
						e.texData.isPacked
							? a.setOutputPackedMatrixTexture(r, o[0], o[1])
							: a.setOutputMatrixTexture(r, o[0], o[1]),
							a.setProgram(s.webGLProgram),
							1 === _().getNumber('WEBGL_VERSION') &&
								null !== s.infLoc &&
								a.gl.uniform1f(s.infLoc, 1 / 0),
							null !== s.nanLoc && a.gl.uniform1f(s.nanLoc, NaN),
							t.forEach(function (t, e) {
								var n = s.program.variableNames[e],
									r = s.uniformLocations[n],
									o = s.uniformLocations['offset' + n];
								if (null != r)
									if (t.isUniform)
										if (L(t.shape) < 2) a.gl.uniform1f(r, t.uniformValues[0]);
										else {
											var i = t.uniformValues;
											i instanceof Float32Array || (i = new Float32Array(i)),
												a.gl.uniform1fv(r, i);
										}
									else
										null != t.texData.slice &&
											null != o &&
											a.gl.uniform1i(o, t.texData.slice.flatOffset),
											a.setInputMatrixTexture(t.texData.texture, r, e);
							}),
							null != n && n(a, s.webGLProgram),
							a.executeProgram();
					})(this.gpgpu, d, l, p, n),
					c.forEach(function (t) {
						return i.disposeData(t.dataId);
					}),
					v &&
						((h = this.endTimer(h)),
						this.activeTimers.push({
							name: o.constructor.name,
							query: this.getQueryTime(h),
						})),
					_().getBool('WEBGL_LAZILY_UNPACK') || !s.isPacked || !1 !== r)
				)
					return a;
				var m = this.unpackTensor(a);
				return this.disposeData(a.dataId), m;
			}),
			(Ds.prototype.compileAndRun = function (t, e, n, r, o) {
				void 0 === o && (o = !1), (n = n || e[0].dtype);
				var i = this.runWebGLProgram(t, e, n, r, o);
				return qt.makeTensorFromDataId(i.dataId, i.shape, i.dtype);
			}),
			(Ds.prototype.getAndSaveBinary = function (t, e) {
				return (
					t in this.binaryCache || (this.binaryCache[t] = e()),
					this.binaryCache[t]
				);
			}),
			(Ds.prototype.getTextureManager = function () {
				return this.textureManager;
			}),
			(Ds.prototype.dispose = function () {
				var e = this;
				this.disposed ||
					(_().getBool('IS_TEST') ||
						Object.keys(this.binaryCache).forEach(function (t) {
							e.gpgpu.deleteProgram(e.binaryCache[t].webGLProgram),
								delete e.binaryCache[t];
						}),
					this.textureManager.dispose(),
					null != this.canvas &&
					'undefined' != typeof HTMLCanvasElement &&
					this.canvas instanceof HTMLCanvasElement
						? this.canvas.remove()
						: (this.canvas = null),
					this.gpgpuCreatedLocally &&
						((this.gpgpu.program = null), this.gpgpu.dispose()),
					(this.disposed = !0));
			}),
			(Ds.prototype.floatPrecision = function () {
				var n = this;
				return (
					null == this.floatPrecisionValue &&
						(this.floatPrecisionValue = tn(function () {
							if (!_().get('WEBGL_RENDER_FLOAT32_ENABLED')) {
								var t = _().getBool('DEBUG');
								_().set('DEBUG', !1);
								var e = n.abs(In(1e-8)).dataSync()[0];
								if ((_().set('DEBUG', t), 0 < e)) return 32;
							}
							return 16;
						})),
					this.floatPrecisionValue
				);
			}),
			(Ds.prototype.epsilon = function () {
				return 32 === this.floatPrecision() ? 1e-7 : 1e-4;
			}),
			(Ds.prototype.uploadToGPU = function (t) {
				var e,
					n = this.texData.get(t),
					r = n.shape,
					o = n.dtype,
					i = n.values,
					a = n.texture,
					s = n.usage,
					u = n.isPacked;
				if (null == a) {
					var c,
						l = null != this.activeTimers;
					l && (c = tt());
					var h = n.texShape;
					if ((null == h && ((h = We(r, u)), (n.texShape = h)), null != i)) {
						var p = Le(r),
							f = void 0,
							d = h[1],
							v = h[0],
							m = i instanceof Uint8Array;
						f = u
							? ((d = (e = ae(h[0], h[1]))[0]),
							  (v = e[1]),
							  new qi(p, [v, d], m))
							: new Hi(p, [v, d], m);
						var g = this.makeTensorInfo([v, d], o);
						(this.texData.get(g.dataId).usage = m ? Yt.PIXELS : Yt.UPLOAD),
							this.gpgpu.uploadDenseMatrixToTexture(
								this.getTexture(g.dataId),
								d,
								v,
								i
							);
						var y = this.runWebGLProgram(f, [g], o, null, !0),
							x = this.texData.get(y.dataId);
						(n.texture = x.texture),
							(n.texShape = x.texShape),
							(n.isPacked = x.isPacked),
							(n.usage = x.usage),
							this.disposeData(g.dataId),
							this.texData.delete(y.dataId),
							(n.values = null),
							l && (this.uploadWaitMs += tt() - c);
					} else {
						var b = this.acquireTexture(h, s, o, u);
						n.texture = b;
					}
				}
			}),
			(Ds.prototype.convertAndCacheOnCPU = function (t, e) {
				var n = this.texData.get(t),
					r = n.dtype;
				return (
					this.releaseGPUData(t),
					null != e &&
						(n.values = (function (t, e) {
							if ('float32' === e || 'complex64' === e) return t;
							if ('int32' !== e && 'bool' !== e)
								throw new Error('Unknown dtype ' + e);
							for (
								var n =
										'int32' === e
											? new Int32Array(t.length)
											: new Uint8Array(t.length),
									r = 0;
								r < n.length;
								++r
							)
								n[r] = Math.round(t[r]);
							return n;
						})(e, r)),
					n.values
				);
			}),
			(Ds.prototype.acquireTexture = function (t, e, n, r) {
				if (
					((this.numBytesInGPU += this.computeBytes(t, n)),
					!this.warnedAboutMemory &&
						this.numBytesInGPU > 1024 * this.numMBBeforeWarning * 1024)
				) {
					var o = (this.numBytesInGPU / 1024 / 1024).toFixed(2);
					(this.warnedAboutMemory = !0),
						console.warn(
							'High memory usage in GPU: ' +
								o +
								' MB, most likely due to a memory leak'
						);
				}
				return this.textureManager.acquireTexture(t, e, r);
			}),
			(Ds.prototype.computeBytes = function (t, e) {
				return t[0] * t[1] * U(e);
			}),
			Ds);
	function Ds(t) {
		var e,
			n = ks.call(this) || this;
		if (
			((n.pendingRead = new WeakMap()),
			(n.pendingDisposal = new WeakSet()),
			(n.dataRefCount = new WeakMap()),
			(n.numBytesInGPU = 0),
			(n.uploadWaitMs = 0),
			(n.downloadWaitMs = 0),
			(n.warnedAboutMemory = !1),
			(n.pendingDeletes = 0),
			(n.disposed = !1),
			!_().getBool('HAS_WEBGL'))
		)
			throw new Error('WebGL is not supported on this device');
		if (null == t) {
			var r = re(_().getNumber('WEBGL_VERSION'));
			(n.binaryCache =
				((e = _().getNumber('WEBGL_VERSION')) in Is || (Is[e] = {}), Is[e])),
				(n.gpgpu = new ga(r)),
				(n.canvas = r.canvas),
				(n.gpgpuCreatedLocally = !0);
		} else (n.gpgpu = t), (n.binaryCache = {}), (n.gpgpuCreatedLocally = !1), (n.canvas = t.gl.canvas);
		return (
			(n.textureManager = new Qa(n.gpgpu)),
			(n.numMBBeforeWarning =
				null == _().global.screen
					? 1024
					: (_().global.screen.height *
							_().global.screen.width *
							window.devicePixelRatio *
							600) /
					  1024 /
					  1024),
			(n.texData = new so(n, qt)),
			n
		);
	}
	jt() &&
		qt.registerBackend(
			'webgl',
			function () {
				return new Ss();
			},
			2
		),
		h({
			kernelName: 'Square',
			gradFunc: function (t, e) {
				var n = e[0];
				return {
					x: function () {
						return t.mul(n.toFloat().mul(2));
					},
				};
			},
		});
	var As = xn({
			square_: function (t) {
				var n = sn(t, 'x', 'square'),
					e = [n];
				return qt.runKernelFunc(
					function (t, e) {
						return e([n]), t.square(n);
					},
					{ x: n },
					null,
					'Square',
					{},
					e,
					[]
				);
			},
		}),
		Ts = xn({
			abs_: function (t) {
				var r = sn(t, 'x', 'abs');
				return 'complex64' === r.dtype
					? qt.runKernelFunc(
							function (t) {
								return t.complexAbs(r);
							},
							{ $x: r }
					  )
					: qt.runKernelFunc(
							function (t, e) {
								var n = t.abs(r);
								return e([r]), n;
							},
							{ x: r },
							function (t, e) {
								var n = e[0];
								return {
									x: function () {
										return t.mul(n.toFloat().step(-1));
									},
								};
							},
							'Abs'
					  );
			},
		}),
		Ns = xn({
			acos_: function (t) {
				var r = sn(t, 'x', 'acos');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.acos(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t
									.divStrict(In(1).sub(n.toFloat().square()).sqrt())
									.neg();
							},
						};
					}
				);
			},
		}),
		Fs = xn({
			acosh_: function (t) {
				var r = sn(t, 'x', 'acosh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.acosh(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.divStrict(n.toFloat().square().sub(1).sqrt());
							},
						};
					}
				);
			},
		}),
		Ms = xn({
			asin_: function (t) {
				var r = sn(t, 'x', 'asin');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.asin(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.divStrict(In(1).sub(n.toFloat().square()).sqrt());
							},
						};
					}
				);
			},
		}),
		Os = xn({
			asinh_: function (t) {
				var r = sn(t, 'x', 'asinh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.asinh(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.divStrict(In(1).add(n.toFloat().square()).sqrt());
							},
						};
					}
				);
			},
		}),
		Ps = xn({
			atan_: function (t) {
				var r = sn(t, 'x', 'atan');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.atan(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(n.toFloat().square().add(1));
							},
						};
					}
				);
			},
		}),
		Bs = xn({
			atanh_: function (t) {
				var r = sn(t, 'x', 'atanh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.atanh(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(In(1).sub(n.toFloat().square()));
							},
						};
					}
				);
			},
		}),
		Ls = xn({
			ceil_: function (t) {
				var e = sn(t, 'x', 'ceil');
				return qt.runKernelFunc(
					function (t) {
						return t.ceil(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		Ws = xn({
			clipByValue_: function (t, r, o) {
				var i = sn(t, 'x', 'clipByValue');
				P(r <= o, function () {
					return (
						'Error in clip: min (' +
						r +
						') must be less than or equal to max (' +
						o +
						').'
					);
				});
				var e = [i],
					n = { min: r, max: o };
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.clip(i, r, o);
						return e([i]), n;
					},
					{ x: i },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return t.where(
									n.greaterEqual(r).logicalAnd(n.lessEqual(o)),
									Wn(t)
								);
							},
						};
					},
					'ClipByValue',
					n,
					e
				);
			},
		}),
		zs = xn({
			cos_: function (t) {
				var r = sn(t, 'x', 'cos'),
					e = [r];
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.cos(r);
						return e([r]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return n.toFloat().sin().neg().mul(t);
							},
						};
					},
					'Cos',
					{},
					e
				);
			},
		}),
		Us = xn({
			cosh_: function (t) {
				var r = sn(t, 'x', 'cosh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.cosh(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return n.toFloat().sinh().mulStrict(t);
							},
						};
					}
				);
			},
		}),
		Vs = xn({
			erf_: function (t) {
				var r = sn(t, 'x', 'erf');
				return (
					P('int32' === r.dtype || 'float32' === r.dtype, function () {
						return 'Input dtype must be `int32` or `float32`.';
					}),
					'int32' === r.dtype && (r = r.toFloat()),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.erf(r);
							return e([r]), n;
						},
						{ $x: r },
						function (t, e) {
							var n = e[0];
							return {
								$x: function () {
									return t.mul(
										n
											.square()
											.neg()
											.exp()
											.mul(2 / Math.sqrt(Math.PI))
									);
								},
							};
						}
					)
				);
			},
		}),
		Gs = xn({
			exp_: function (t) {
				var r = sn(t, 'x', 'exp');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.exp(r);
						return e([n]), n;
					},
					{ x: r },
					function (t, e) {
						return {
							x: function () {
								return t.mulStrict(e[0]);
							},
						};
					},
					'Exp',
					{},
					[],
					[!0]
				);
			},
		}),
		Hs = xn({
			expm1_: function (t) {
				var r = sn(t, 'x', 'expm1');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.expm1(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.mul(n.exp());
							},
						};
					}
				);
			},
		}),
		qs = xn({
			floor_: function (t) {
				var e = sn(t, 'x', 'floor');
				return qt.runKernelFunc(
					function (t) {
						return t.floor(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		js = xn({
			log_: function (t) {
				var r = sn(t, 'x', 'log'),
					e = [r];
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.log(r);
						return e([r]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return t.div(n.toFloat());
							},
						};
					},
					'Log',
					{},
					e
				);
			},
		}),
		Ks = xn({
			log1p_: function (t) {
				var r = sn(t, 'x', 'log1p');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.log1p(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(n.add(1));
							},
						};
					}
				);
			},
		}),
		Xs = xn({
			logSigmoid_: function (t) {
				var r = sn(t, 'x', 'logSigmoid');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.softplus(r.neg()).neg();
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.mul(n.neg().sigmoid());
							},
						};
					}
				);
			},
		}),
		Ys = xn({
			neg_: function (t) {
				var e = sn(t, 'x', 'neg');
				return qt.runKernelFunc(
					function (t) {
						return t.neg(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return t.neg();
							},
						};
					}
				);
			},
		}),
		$s = xn({
			reciprocal_: function (t) {
				var r = sn(t, 'x', 'reciprocal');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.reciprocal(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(n.square().neg());
							},
						};
					}
				);
			},
		}),
		Js = xn({
			round_: function (t) {
				var e = sn(t, 'x', 'round');
				return qt.runKernelFunc(
					function (t) {
						return t.round(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		Qs = xn({
			rsqrt_: function (t) {
				var r = sn(t, 'x', 'rsqrt'),
					e = [r];
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.rsqrt(r);
						return e([r]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return t.div(n.pow(1.5).mul(2)).neg();
							},
						};
					},
					'Rsqrt',
					{},
					e
				);
			},
		}),
		Zs = xn({
			sigmoid_: function (t) {
				var r = sn(t, 'x', 'sigmoid');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.sigmoid(r);
						return e([n]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return t.mul(n.mul(In(1).sub(n)));
							},
						};
					},
					'Sigmoid'
				);
			},
		}),
		tu = xn({
			sign_: function (t) {
				var e = sn(t, 'x', 'sign');
				return qt.runKernelFunc(
					function (t) {
						return t.sign(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		eu = xn({
			isNaN_: function (t) {
				var e = sn(t, 'x', 'isNaN');
				return qt.runKernelFunc(
					function (t) {
						return t.isNaN(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		nu = xn({
			isInf_: function (t) {
				var e = sn(t, 'x', 'isInf');
				return qt.runKernelFunc(
					function (t) {
						return t.isInf(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		ru = xn({
			isFinite_: function (t) {
				var e = sn(t, 'x', 'isFinite');
				return qt.runKernelFunc(
					function (t) {
						return t.isFinite(e);
					},
					{ $x: e },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		ou = xn({
			sin_: function (t) {
				var r = sn(t, 'x', 'sin'),
					e = [r];
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.sin(r);
						return e([r]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return n.toFloat().cos().mul(t);
							},
						};
					},
					'Sin',
					{},
					e
				);
			},
		}),
		iu = xn({
			sinh_: function (t) {
				var r = sn(t, 'x', 'sinh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.sinh(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return n.toFloat().cosh().mulStrict(t);
							},
						};
					}
				);
			},
		}),
		au = xn({
			softplus_: function (t) {
				var r = sn(t, 'x', 'softplus');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.softplus(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.mul(n.sigmoid());
							},
						};
					}
				);
			},
		}),
		su = xn({
			sqrt_: function (t) {
				var r = sn(t, 'x', 'sqrt');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.sqrt(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(n.toFloat().sqrt().mul(2));
							},
						};
					}
				);
			},
		}),
		uu = xn({
			step_: function (t, e) {
				void 0 === e && (e = 0);
				var n = sn(t, 'x', 'step');
				return qt.runKernelFunc(
					function (t) {
						return t.step(n, e);
					},
					{ $x: n },
					function (t) {
						return {
							$x: function () {
								return Wn(t);
							},
						};
					}
				);
			},
		}),
		cu = xn({
			tan_: function (t) {
				var r = sn(t, 'x', 'tan');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.tan(r);
						return e([r]), n;
					},
					{ $x: r },
					function (t, e) {
						var n = e[0];
						return {
							$x: function () {
								return t.div(n.cos().square());
							},
						};
					}
				);
			},
		}),
		lu = xn({
			tanh_: function (t) {
				var r = sn(t, 'x', 'tanh');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.tanh(r);
						return e([n]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return In(1).sub(n.square()).mulStrict(t);
							},
						};
					},
					'Tanh',
					{},
					null,
					[!0]
				);
			},
		});
	function hu(t, e, n, r, o, i) {
		var a,
			s,
			u = sn(t, 'x', 'batchNorm'),
			c = sn(e, 'mean', 'batchNorm'),
			l = sn(n, 'variance', 'batchNorm');
		return (
			null != o && (a = sn(o, 'scale', 'batchNorm')),
			null != r && (s = sn(r, 'offset', 'batchNorm')),
			P(2 === u.rank, function () {
				return (
					'Error in batchNorm3D: x must be rank 3 but got rank ' + u.rank + '.'
				);
			}),
			P(2 === c.rank || 1 === c.rank, function () {
				return (
					'Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ' +
					c.rank +
					'.'
				);
			}),
			P(2 === l.rank || 1 === l.rank, function () {
				return (
					'Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ' +
					l.rank +
					'.'
				);
			}),
			null != a &&
				P(2 === a.rank || 1 === a.rank, function () {
					return (
						'Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ' +
						a.rank +
						'.'
					);
				}),
			null != s &&
				P(2 === s.rank || 1 === s.rank, function () {
					return (
						'Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ' +
						s.rank +
						'.'
					);
				}),
			du(u, c, l, s, a, i)
		);
	}
	function pu(t, e, n, r, o, i) {
		var a,
			s,
			u = sn(t, 'x', 'batchNorm'),
			c = sn(e, 'mean', 'batchNorm'),
			l = sn(n, 'variance', 'batchNorm');
		return (
			null != o && (a = sn(o, 'scale', 'batchNorm')),
			null != r && (s = sn(r, 'offset', 'batchNorm')),
			P(3 === u.rank, function () {
				return (
					'Error in batchNorm3D: x must be rank 3 but got rank ' + u.rank + '.'
				);
			}),
			P(3 === c.rank || 1 === c.rank, function () {
				return (
					'Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ' +
					c.rank +
					'.'
				);
			}),
			P(3 === l.rank || 1 === l.rank, function () {
				return (
					'Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ' +
					l.rank +
					'.'
				);
			}),
			null != a &&
				P(3 === a.rank || 1 === a.rank, function () {
					return (
						'Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ' +
						a.rank +
						'.'
					);
				}),
			null != s &&
				P(3 === s.rank || 1 === s.rank, function () {
					return (
						'Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ' +
						s.rank +
						'.'
					);
				}),
			du(u, c, l, s, a, i)
		);
	}
	function fu(t, e, n, r, o, i) {
		var a,
			s,
			u = sn(t, 'x', 'batchNorm'),
			c = sn(e, 'mean', 'batchNorm'),
			l = sn(n, 'variance', 'batchNorm');
		return (
			null != o && (a = sn(o, 'scale', 'batchNorm')),
			null != r && (s = sn(r, 'offset', 'batchNorm')),
			P(4 === u.rank, function () {
				return (
					'Error in batchNorm4D: x must be rank 4 but got rank ' + u.rank + '.'
				);
			}),
			P(4 === c.rank || 1 === c.rank, function () {
				return (
					'Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ' +
					c.rank +
					'.'
				);
			}),
			P(4 === l.rank || 1 === l.rank, function () {
				return (
					'Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ' +
					l.rank +
					'.'
				);
			}),
			null != a &&
				P(4 === a.rank || 1 === a.rank, function () {
					return (
						'Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ' +
						a.rank +
						'.'
					);
				}),
			null != s &&
				P(4 === s.rank || 1 === s.rank, function () {
					return (
						'Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ' +
						s.rank +
						'.'
					);
				}),
			du(u, c, l, s, a, i)
		);
	}
	function du(t, e, n, r, o, v) {
		null == v && (v = 0.001);
		var i,
			a,
			m,
			s = sn(t, 'x', 'batchNorm'),
			u = sn(e, 'mean', 'batchNorm'),
			c = sn(n, 'variance', 'batchNorm');
		null != o && (i = sn(o, 'scale', 'batchNorm')),
			null != r && (a = sn(r, 'offset', 'batchNorm')),
			P(u.rank === c.rank, function () {
				return 'Batch normalization gradient requires mean and variance to have equal ranks.';
			}),
			P(null == a || u.rank === a.rank, function () {
				return 'Batch normalization gradient requires mean and offset to have equal ranks.';
			}),
			P(null == i || u.rank === i.rank, function () {
				return 'Batch normalization gradient requires mean and scale to have equal ranks.';
			}),
			(m =
				0 === s.rank || 1 === s.rank
					? s.as4D(1, 1, 1, s.size)
					: 2 === s.rank
					? s.as4D(1, 1, s.shape[0], s.shape[1])
					: 3 === s.rank
					? s.as4D(1, s.shape[0], s.shape[1], s.shape[2])
					: s);
		var l = [s, u, c, i];
		return qt
			.runKernelFunc(
				function (t, e) {
					var n = t.batchNormalization(m, vu(u), vu(c), v, vu(i), vu(a));
					return e([s, u, c, i]), n;
				},
				{ x: s, mean: u, variance: c, scale: i, offset: a },
				function (n, t) {
					var e = t,
						r = e[0],
						o = e[1],
						i = e[2],
						a = e[3],
						s = null == a ? In(1) : a,
						u = fo(o.shape, m.shape),
						c = [];
					if (1 === o.rank) {
						for (var l = 0; l < m.shape.length - 1; ++l) c.push(m.shape[l]);
						c.push(1);
					}
					var h = r.sub(o),
						p = n.mul(s),
						f = Qs(i.add(In(v))),
						d = f.mul(f).mul(f).mul(In(-0.5));
					return {
						x: function () {
							return 1 === o.rank
								? n
										.mul(Fr(f.as4D(1, 1, 1, o.shape[0]), c))
										.mul(s)
										.reshape(r.shape)
								: n.mul(f).mul(s).reshape(r.shape);
						},
						mean: function () {
							var t = f.mul(In(-1)).mul(p);
							return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape);
						},
						variance: function () {
							var t = d.mul(h).mul(p);
							return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape);
						},
						scale: function () {
							var t = h.mul(f),
								e = n.mul(t);
							return 1 === o.rank && (e = e.sum(u)), e.reshape(o.shape);
						},
						offset: function () {
							var t = n;
							return 1 === o.rank && (t = t.sum(u)), t.reshape(o.shape);
						},
					};
				},
				'BatchNormalization',
				{ varianceEpsilon: v },
				l
			)
			.reshape(s.shape);
	}
	function vu(t) {
		return null == t
			? null
			: 0 === t.rank
			? t.as1D()
			: 1 === t.rank
			? t
			: 2 === t.rank
			? t.as4D(1, 1, t.shape[0], t.shape[1])
			: 3 === t.rank
			? t.as4D(1, t.shape[0], t.shape[1], t.shape[2])
			: t;
	}
	function mu() {
		Ze(
			'tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon'
		);
	}
	function gu(o) {
		return y(this, void 0, void 0, function () {
			var e, n, r;
			return R(this, function (t) {
				switch (t.label) {
					case 0:
						return [4, (e = sn(o, 'condition', 'whereAsync', 'bool')).data()];
					case 1:
						return (
							(n = t.sent()),
							(r = Go(e.shape, n)),
							o !== e && e.dispose(),
							[2, r]
						);
				}
			});
		});
	}
	var yu = xn({
			batchNormalization2d_: function (t, e, n, r, o, i) {
				return void 0 === r && (r = 0.001), mu(), hu(t, e, n, i, o, r);
			},
		}),
		xu = xn({
			batchNormalization3d_: function (t, e, n, r, o, i) {
				return void 0 === r && (r = 0.001), mu(), pu(t, e, n, i, o, r);
			},
		}),
		bu = xn({
			batchNormalization4d_: function (t, e, n, r, o, i) {
				return void 0 === r && (r = 0.001), mu(), fu(t, e, n, i, o, r);
			},
		}),
		wu = xn({
			batchNormalization_: function (t, e, n, r, o, i) {
				return void 0 === r && (r = 0.001), mu(), du(t, e, n, i, o, r);
			},
		}),
		Cu = xn({ batchNorm_: du }),
		Eu = xn({ batchNorm2d_: hu }),
		_u = xn({ batchNorm3d_: pu }),
		Iu = xn({ batchNorm4d_: fu }),
		Ru = xn({
			logicalAnd_: function (t, e) {
				var n = sn(t, 'a', 'logicalAnd', 'bool'),
					r = sn(e, 'b', 'logicalAnd', 'bool');
				return (
					vo(n.shape, r.shape),
					qt.runKernelFunc(
						function (t) {
							return t.logicalAnd(n, r);
						},
						{ a: n, b: r },
						null,
						'LogicalAnd'
					)
				);
			},
		}),
		ku = xn({
			logicalNot_: function (t) {
				var e = sn(t, 'x', 'logicalNot', 'bool');
				return qt.runKernelFunc(
					function (t) {
						return t.logicalNot(e);
					},
					{ $x: e }
				);
			},
		}),
		Su = xn({
			logicalOr_: function (t, e) {
				var n = sn(t, 'a', 'logicalOr', 'bool'),
					r = sn(e, 'b', 'logicalOr', 'bool');
				return (
					vo(n.shape, r.shape),
					qt.runKernelFunc(
						function (t) {
							return t.logicalOr(n, r);
						},
						{ $a: n, $b: r }
					)
				);
			},
		}),
		Du = xn({
			logicalXor_: function (t, e) {
				var n = sn(t, 'a', 'logicalXor', 'bool'),
					r = sn(e, 'b', 'logicalXor', 'bool');
				return vo(n.shape, r.shape), Su(t, e).logicalAnd(Ru(t, e).logicalNot());
			},
		}),
		Au = xn({
			where_: function (t, e, n) {
				var r = sn(e, 'a', 'where'),
					o = sn(n, 'b', 'where'),
					i = sn(t, 'condition', 'where', 'bool');
				return (
					x(r.shape, o.shape, 'Error in where: '),
					1 === i.rank
						? P(i.shape[0] === r.shape[0], function () {
								return 'The first dimension of `a` must match the size of `condition`.';
						  })
						: x(i.shape, o.shape, 'Error in where: '),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.select(i, r, o);
							return e([i]), n;
						},
						{ $condition: i, $a: r, $b: o },
						function (t, e) {
							var n = e[0];
							return {
								$condition: function () {
									return Wn(n).toFloat();
								},
								$a: function () {
									return t.mul(n.cast(t.dtype));
								},
								$b: function () {
									return t.mul(n.logicalNot().cast(t.dtype));
								},
							};
						}
					)
				);
			},
		}),
		Tu = xn({
			add_: function (t, e) {
				var n,
					r = sn(t, 'a', 'add'),
					o = sn(e, 'b', 'add');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var i = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t) {
						return t.add(r, o);
					},
					{ a: r, b: o },
					function (n) {
						return {
							a: function () {
								var t = n,
									e = fo(r.shape, i);
								return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape);
							},
							b: function () {
								var t = n,
									e = fo(o.shape, i);
								return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape);
							},
						};
					},
					'Add'
				);
			},
		}),
		Nu = xn({
			addN_: function (t) {
				P(Array.isArray(t), function () {
					return 'The argument passed to tf.addN() must be a list of tensors';
				}),
					P(1 <= t.length, function () {
						return (
							'Must pass at least one tensor to tf.addN(), but got ' + t.length
						);
					});
				var e = t.map(function (t, e) {
						return sn(t, 'tensors' + e, 'addN');
					}),
					n = e[0];
				e.forEach(function (t) {
					if (t.dtype !== n.dtype)
						throw new Error(
							'All tensors passed to tf.addN() must have the same dtype'
						);
				}),
					e.forEach(function (t) {
						if (!D(t.shape, n.shape))
							throw new Error(
								'All tensors passed to tf.addN() must have the same shape'
							);
					});
				var r = e;
				return qt.runKernelFunc(
					function (t) {
						return t.addN(e);
					},
					r,
					function (n) {
						var r = {};
						return (
							e.forEach(function (t, e) {
								r[e] = function () {
									return n.clone();
								};
							}),
							r
						);
					},
					'AddN'
				);
			},
		}),
		Fu = xn({
			addStrict_: function (t, e) {
				var n = sn(t, 'a', 'addStrict'),
					r = sn(e, 'b', 'addStrict');
				return x(n.shape, r.shape, 'Error in addStrict: '), n.add(r);
			},
		}),
		Mu = xn({
			atan2_: function (t, e) {
				var n,
					r = sn(t, 'a', 'atan2'),
					o = sn(e, 'b', 'atan2');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var a = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.atan2(r, o);
						return e([r, o]), n;
					},
					{ $a: r, $b: o },
					function (r, t) {
						var o = t[0],
							i = t[1];
						return {
							$a: function () {
								var t = Tu(o.square(), i.square()),
									e = r.mul(i.div(t)),
									n = fo(o.shape, a);
								return 0 < n.length && (e = e.sum(n)), e.reshape(o.shape);
							},
							$b: function () {
								var t = Tu(o.square(), i.square()),
									e = Ys(r.mul(o.div(t))),
									n = fo(i.shape, a);
								return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape);
							},
						};
					}
				);
			},
		}),
		Ou = xn({
			div_: function (t, e) {
				var n,
					r = sn(t, 'a', 'div'),
					o = sn(e, 'b', 'div');
				if (
					((n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					'int32' === r.dtype && 'int32' === o.dtype)
				)
					return Lu(r, o);
				var a = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.realDivide(r, o);
						return e([r, o]), n;
					},
					{ a: r, b: o },
					function (r, t) {
						var o = t[0],
							i = t[1];
						return {
							a: function () {
								var t = r.div(i.toFloat()),
									e = fo(o.shape, a);
								return 0 < e.length ? t.sum(e).reshape(o.shape) : t;
							},
							b: function () {
								var t = r.mul(o.toFloat()),
									e = fo(i.shape, a);
								0 < e.length && (t = t.sum(e).reshape(i.shape));
								var n = i.square();
								return t.div(n.toFloat()).neg();
							},
						};
					},
					'Div'
				);
			},
		}),
		Pu = xn({
			divNoNan_: function (t, e) {
				var n,
					r = sn(t, 'a', 'div'),
					o = sn(e, 'b', 'div');
				(r = (n = Pt(r, o))[0]), (o = n[1]);
				var i = Ou(r, o),
					a = Wn(i),
					s = o.equal(a);
				return Au(s, a, i);
			},
		}),
		Bu = xn({
			divStrict_: function (t, e) {
				var n = sn(t, 'a', 'div'),
					r = sn(e, 'b', 'div');
				return x(n.shape, r.shape, 'Error in divideStrict: '), n.div(r);
			},
		}),
		Lu = xn({
			floorDiv_: function (t, e) {
				var n,
					r = sn(t, 'a', 'floorDiv'),
					o = sn(e, 'b', 'floorDiv');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var a = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.floorDiv(r, o);
						return e([r, o]), n;
					},
					{ a: r, b: o },
					function (r, t) {
						var o = t[0],
							i = t[1];
						return {
							a: function () {
								var t = r.div(i.toFloat()),
									e = fo(o.shape, a);
								return 0 < e.length ? t.sum(e).reshape(o.shape) : t;
							},
							b: function () {
								var t = r.mul(o.toFloat()),
									e = fo(i.shape, a);
								0 < e.length && (t = t.sum(e).reshape(i.shape));
								var n = i.square();
								return t.div(n.toFloat()).neg();
							},
						};
					},
					'FloorDiv'
				);
			},
		}),
		Wu = xn({
			maximum_: function (t, e) {
				var n,
					r = sn(t, 'a', 'maximum'),
					o = sn(e, 'b', 'maximum');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					'bool' === r.dtype && ((r = r.toInt()), (o = o.toInt())),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.maximum(r, o);
							return e([r, o]), n;
						},
						{ a: r, b: o },
						function (t, e) {
							var n = e[0],
								r = e[1];
							return {
								a: function () {
									return t.mul(n.greaterEqual(r).toFloat());
								},
								b: function () {
									return t.mul(n.less(r).toFloat());
								},
							};
						},
						'Maximum'
					)
				);
			},
		}),
		zu = xn({
			maximumStrict_: function (t, e) {
				var n = sn(t, 'a', 'maximumStrict'),
					r = sn(e, 'b', 'maximumStrict');
				return x(n.shape, r.shape, 'Error in maximumStrict: '), n.maximum(r);
			},
		}),
		Uu = xn({
			minimum_: function (t, e) {
				var n,
					r = sn(t, 'a', 'minimum'),
					o = sn(e, 'b', 'minimum');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					'bool' === r.dtype && ((r = r.toInt()), (o = o.toInt())),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.minimum(r, o);
							return e([r, o]), n;
						},
						{ a: r, b: o },
						function (t, e) {
							var n = e[0],
								r = e[1];
							return {
								a: function () {
									return t.mul(n.lessEqual(r).toFloat());
								},
								b: function () {
									return t.mul(n.greater(r).toFloat());
								},
							};
						},
						'Minimum'
					)
				);
			},
		}),
		Vu = xn({
			minimumStrict_: function (t, e) {
				var n = sn(t, 'a', 'minimumStrict'),
					r = sn(e, 'b', 'minimumStrict');
				return x(n.shape, r.shape, 'Error in minimumStrict: '), n.minimum(r);
			},
		}),
		Gu = xn({
			mod_: function (t, e) {
				var n,
					r = sn(t, 'a', 'mod'),
					o = sn(e, 'b', 'mod');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var i = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.mod(r, o);
						return e([r, o]), n;
					},
					{ $a: r, $b: o },
					function (n, t) {
						var r = t[0],
							o = t[1];
						return {
							$a: function () {
								var t = fo(r.shape, i);
								return 0 < t.length ? n.sum(t).reshape(r.shape) : n;
							},
							$b: function () {
								var t = n.mul(r.div(o).floor().neg()),
									e = fo(o.shape, i);
								return 0 < e.length ? t.sum(e).reshape(o.shape) : t;
							},
						};
					}
				);
			},
		}),
		Hu = xn({
			modStrict_: function (t, e) {
				var n = sn(t, 'a', 'modStrict'),
					r = sn(e, 'b', 'modStrict');
				return x(n.shape, r.shape, 'Error in modStrict: '), n.mod(r);
			},
		}),
		qu = xn({
			mul_: function (t, e) {
				var n,
					r = sn(t, 'a', 'mul'),
					o = sn(e, 'b', 'mul');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var i = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.multiply(r, o);
						return e([r, o]), n;
					},
					{ a: r, b: o },
					function (n, t) {
						var r = t[0],
							o = t[1];
						return {
							a: function () {
								var t = n.mul(o.toFloat()),
									e = fo(r.shape, i);
								return 0 < e.length ? t.sum(e).reshape(r.shape) : t;
							},
							b: function () {
								var t = n.mul(r.toFloat()),
									e = fo(o.shape, i);
								return 0 < e.length ? t.sum(e).reshape(o.shape) : t;
							},
						};
					},
					'Mul'
				);
			},
		}),
		ju = xn({
			mulStrict_: function (t, e) {
				var n = sn(t, 'a', 'mul'),
					r = sn(e, 'b', 'mul');
				return x(n.shape, r.shape, 'Error in multiplyStrict: '), n.mul(r);
			},
		}),
		Ku = xn({
			pow_: function (t, e) {
				var r = sn(t, 'base', 'pow'),
					o = sn(e, 'exp', 'pow'),
					u = vo(r.shape, o.shape);
				return (
					(t = r.cast(Mt(r.dtype, o.dtype))),
					(e = o.cast(Mt(r.dtype, o.dtype))),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.pow(r, o);
							return e([r, o, n]), n;
						},
						{ $base: r, $exp: o },
						function (o, t) {
							var i = t[0],
								a = t[1],
								s = t[2];
							return {
								$base: function () {
									var t = a.toFloat(),
										e = o.mul(t.mul(i.pow(t.sub(In(1))))),
										n = fo(i.shape, u);
									return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape);
								},
								$exp: function () {
									var t = i.greater(0),
										e = i.log().where(t, Wn(i)),
										n = o.mul(s.mul(e)),
										r = fo(a.shape, u);
									return 0 < r.length && (n = n.sum(r)), n.reshape(a.shape);
								},
							};
						}
					)
				);
			},
		}),
		Xu = xn({
			powStrict_: function (t, e) {
				return x(t.shape, e.shape, 'Error in powStrict: '), t.pow(e);
			},
		}),
		Yu = xn({
			squaredDifference_: function (t, e) {
				var n,
					r = sn(t, 'a', 'squaredDifference'),
					o = sn(e, 'b', 'squaredDifference');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.squaredDifference(r, o);
							return e([r, o]), n;
						},
						{ $a: r, $b: o },
						function (t, e) {
							var n = e[0],
								r = e[1],
								o = In(2);
							return {
								$a: function () {
									return t.mul(n.sub(r).mul(o));
								},
								$b: function () {
									return t.mul(r.sub(n).mul(o));
								},
							};
						}
					)
				);
			},
		}),
		$u = xn({
			squaredDifferenceStrict_: function (t, e) {
				var n = sn(t, 'a', 'squaredDifferenceStrict'),
					r = sn(e, 'b', 'squaredDifferenceStrict');
				return (
					x(n.shape, r.shape, 'Error in squaredDifferenceStrict: '),
					n.squaredDifference(r)
				);
			},
		}),
		Ju = xn({
			sub_: function (t, e) {
				var n,
					r = sn(t, 'a', 'sub'),
					o = sn(e, 'b', 'sub');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var i = vo(r.shape, o.shape);
				return qt.runKernelFunc(
					function (t) {
						return t.subtract(r, o);
					},
					{ a: r, b: o },
					function (n) {
						return {
							a: function () {
								var t = n,
									e = fo(r.shape, i);
								return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape);
							},
							b: function () {
								var t = n,
									e = fo(o.shape, i);
								return 0 < e.length && (t = t.sum(e)), t.neg().reshape(o.shape);
							},
						};
					},
					'Sub'
				);
			},
		}),
		Qu = xn({
			subStrict_: function (t, e) {
				var n = sn(t, 'a', 'subStrict'),
					r = sn(e, 'b', 'subStrict');
				return x(n.shape, r.shape, 'Error in subStrict: '), n.sub(r);
			},
		}),
		Zu = xn({
			equal_: function (t, e) {
				var n,
					r = sn(t, 'a', 'equal'),
					o = sn(e, 'b', 'equal');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t) {
							return t.equal(r, o);
						},
						{ $a: r, $b: o }
					)
				);
			},
		}),
		tc = xn({
			equalStrict_: function (t, e) {
				var n = sn(t, 'a', 'equalStrict'),
					r = sn(e, 'b', 'equalStrict');
				return x(n.shape, r.shape, 'Error in equalStrict: '), n.equal(r);
			},
		}),
		ec = xn({
			greater_: function (t, e) {
				var n,
					r = sn(t, 'a', 'greater'),
					o = sn(e, 'b', 'greater');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t) {
							return t.greater(r, o);
						},
						{ a: r, b: o },
						null,
						'Greater'
					)
				);
			},
		}),
		nc = xn({
			greaterEqual_: function (t, e) {
				var n,
					r = sn(t, 'a', 'greaterEqual'),
					o = sn(e, 'b', 'greaterEqual');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.greaterEqual(r, o);
							return e([r, o]), n;
						},
						{ a: r, b: o },
						function (t, e) {
							var n = e[0],
								r = e[1];
							return {
								a: function () {
									return Wn(n);
								},
								b: function () {
									return Wn(r);
								},
							};
						},
						'GreaterEqual'
					)
				);
			},
		}),
		rc = xn({
			greaterEqualStrict_: function (t, e) {
				var n = sn(t, 'a', 'greaterEqualStrict'),
					r = sn(e, 'b', 'greaterEqualStrict');
				return (
					x(n.shape, r.shape, 'Error in greaterEqualStrict: '),
					n.greaterEqual(r)
				);
			},
		}),
		oc = xn({
			greaterStrict_: function (t, e) {
				var n = sn(t, 'a', 'greaterStrict'),
					r = sn(e, 'b', 'greaterStrict');
				return x(n.shape, r.shape, 'Error in greaterStrict: '), n.greater(r);
			},
		}),
		ic = xn({
			less_: function (t, e) {
				var n,
					r = sn(t, 'a', 'less'),
					o = sn(e, 'b', 'less');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t) {
							return t.less(r, o);
						},
						{ a: r, b: o },
						null,
						'Less'
					)
				);
			},
		}),
		ac = xn({
			lessEqual_: function (t, e) {
				var n,
					r = sn(t, 'a', 'lessEqual'),
					o = sn(e, 'b', 'lessEqual');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.lessEqual(r, o);
							return e([r, o]), n;
						},
						{ a: r, b: o },
						null,
						'LessEqual'
					)
				);
			},
		}),
		sc = xn({
			lessEqualStrict_: function (t, e) {
				var n = sn(t, 'a', 'lessEqualStrict'),
					r = sn(e, 'b', 'lessEqualStrict');
				return (
					x(n.shape, r.shape, 'Error in lessEqualStrict: '), n.lessEqual(r)
				);
			},
		}),
		uc = xn({
			lessStrict_: function (t, e) {
				var n = sn(t, 'a', 'lessStrict'),
					r = sn(e, 'b', 'lessStrict');
				return x(n.shape, r.shape, 'Error in lessStrict: '), n.less(r);
			},
		}),
		cc = xn({
			notEqual_: function (t, e) {
				var n,
					r = sn(t, 'a', 'notEqual'),
					o = sn(e, 'b', 'notEqual');
				return (
					(n = Pt(r, o)),
					(r = n[0]),
					(o = n[1]),
					vo(r.shape, o.shape),
					qt.runKernelFunc(
						function (t) {
							return t.notEqual(r, o);
						},
						{ $a: r, $b: o }
					)
				);
			},
		}),
		lc = xn({
			notEqualStrict_: function (t, e) {
				var n = sn(t, 'a', 'notEqualStrict'),
					r = sn(e, 'b', 'notEqualStrict');
				return x(n.shape, r.shape, 'Error in notEqualStrict: '), n.notEqual(r);
			},
		});
	function hc(t, e) {
		for (var n = [], r = t; r < e; ++r) n.push(r);
		return n;
	}
	function pc(t) {
		for (var e = [], n = 0; n < t.length; ++n)
			for (var r = 0; r < t[n].length; ++r) e.push(t[n][r]);
		return e;
	}
	function fc(d, v, m) {
		return y(this, void 0, void 0, function () {
			var e, n, r, o, i, a, s, u, c, l, h, p, f;
			return R(this, function (t) {
				switch (t.label) {
					case 0:
						for (
							e = sn(d, 'tensor', 'boolMask'),
								n = sn(v, 'mask', 'boolMask', 'bool'),
								r = null == m ? 0 : m,
								o = n.rank,
								i = e.shape,
								P(0 < o, function () {
									return 'mask cannot be scalar';
								}),
								x(
									i.slice(r, r + o),
									n.shape,
									"mask's shape must match the first K dimensions of tensor's shape,"
								),
								a = 1,
								s = r;
							s < r + o;
							s++
						)
							a *= i[s];
						return (
							(u = i.slice(0, r).concat([a], i.slice(r + o))),
							(c = e.reshape(u)),
							(l = n.reshape([-1])),
							[4, gu(l)]
						);
					case 1:
						return (
							(h = t.sent()),
							(p = h.squeeze([1])),
							(f = dc(c, p, r)),
							d !== e && e.dispose(),
							v !== n && n.dispose(),
							p.dispose(),
							c.dispose(),
							l.dispose(),
							h.dispose(),
							[2, f]
						);
				}
			});
		});
	}
	var dc = xn({
			gather_: function (t, e, g) {
				void 0 === g && (g = 0);
				var y = sn(t, 'x', 'gather'),
					r = sn(e, 'indices', 'gather', 'int32');
				g = A(g, y.shape)[0];
				var n = (function (t, e, n) {
					for (var r = t.shape[n], o = [], i = 1, a = 1, s = 0; s < n; s++)
						o.push(t.shape[s]), (i *= t.shape[s]);
					for (s = 0; s < e.rank; s++) o.push(e.shape[s]);
					for (s = n + 1; s < t.rank; s++)
						o.push(t.shape[s]), (a *= t.shape[s]);
					return { batchSize: i, sliceSize: a, dimSize: r, outputShape: o };
				})(y, r, g);
				return qt
					.runKernelFunc(
						function (t, e) {
							var n = t.gather(y, r.flatten(), g);
							return e([r]), n;
						},
						{ x: y, indices: r },
						function (v, t) {
							var m = t[0];
							return {
								x: function () {
									var t = y.shape,
										e = m.size,
										n = t.slice(0, g),
										r = n.length,
										o = t.slice(g, t.length).slice(1),
										i = o.length,
										a = hc(0, r),
										s = hc(r + 1, r + 1 + i),
										u = pc([n, [e], o]),
										c = v.reshape(u),
										l = m.reshape([e]),
										h = pc([[r], a, s]),
										p = c.transpose(h),
										f = vc(p, l, y.shape[g]),
										d = vn(h);
									return f.transpose(d);
								},
								indices: function () {
									return m;
								},
							};
						},
						'Gather',
						{ axis: g }
					)
					.reshape(n.outputShape);
			},
		}),
		vc = xn({
			unsortedSegmentSum_: function (t, e, r) {
				var o = sn(t, 'x', 'unsortedSegmentSum'),
					i = sn(e, 'segmentIds', 'unsortedSegmentSum', 'int32');
				return (
					P(B(r), function () {
						return 'numSegments must be of dtype int';
					}),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.unsortedSegmentSum(o, i, r);
							return e([i]), n;
						},
						{ $x: o },
						function (t, e) {
							var n = e[0];
							return {
								$x: function () {
									return (function (t, e) {
										for (
											var n = Wu(e, Wn(e)),
												r = dc(t, n),
												o = nc(e, In(0, 'int32')),
												i = r.rank - o.rank,
												a = 0;
											a < i;
											++a
										)
											o = mr(o, a + 1);
										o = Ru(o, Fn(r.shape, 'bool'));
										var s = Wn(r);
										return Au(o, r, s);
									})(t, n);
								},
							};
						}
					)
				);
			},
		});
	function mc(t, e, r, o, i, a, s) {
		void 0 === a && (a = 'NHWC'),
			P(t.length === e.rank, function () {
				return (
					'Length of inShape (' +
					t.length +
					') and rank of dy (' +
					e.rank +
					') must match'
				);
			});
		var n = t,
			u = e,
			c = !1;
		3 === e.rank &&
			((c = !0),
			(u = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])),
			(n = [1, t[0], t[1], t[2]])),
			P(4 === n.length, function () {
				return (
					'Error in conv2dDerInput: inShape must be length 4, but got length ' +
					n.length +
					'.'
				);
			}),
			P(4 === u.rank, function () {
				return (
					'Error in conv2dDerInput: dy must be rank 4, but got rank ' + u.rank
				);
			}),
			P(4 === r.rank, function () {
				return (
					'Error in conv2dDerInput: filter must be rank 4, but got rank ' +
					r.rank
				);
			});
		var l = 'NHWC' === a ? n[3] : n[1],
			h = 'NHWC' === a ? u.shape[3] : u.shape[1];
		P(l === r.shape[2], function () {
			return (
				'Error in conv2dDerInput: depth of input (' +
				l +
				') must match input depth for filter ' +
				r.shape[2] +
				'.'
			);
		}),
			P(h === r.shape[3], function () {
				return (
					'Error in conv2dDerInput: depth of output (' +
					h +
					') must match output depth for filter ' +
					r.shape[3] +
					'.'
				);
			}),
			null != s &&
				P(B(i), function () {
					return (
						'Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode ' +
						s +
						' but got pad ' +
						i +
						'.'
					);
				});
		var p = ko(a),
			f = yo(n, r.shape, o, 1, i, s, !1, p),
			d = qt.runKernelFunc(
				function (t, e) {
					var n = t.conv2dDerInput(u, r, f);
					return e([r, u]), n;
				},
				{ dy4D: u, filter: r },
				function (t, e) {
					var n = e[0],
						r = e[1];
					return {
						dy4D: function () {
							return bc(t, n, o, i, a, 1, s);
						},
						filter: function () {
							return Cc(t, r, n.shape, o, i, a, s);
						},
					};
				}
			);
		return c ? d.as3D(d.shape[1], d.shape[2], d.shape[3]) : d;
	}
	function gc(t) {
		var e,
			n =
				'number' == typeof (e = t)
					? [e, e, e]
					: 2 === e.length
					? [e[0], e[1], 1]
					: e,
			r = n[0],
			o = n[1],
			i = n[2];
		return 1 === r && 1 === o && 1 === i;
	}
	function yc(t, e, n, r, o) {
		P(t.length === e.rank, function () {
			return (
				'Length of inShape (' +
				t.length +
				') and rank of dy (' +
				e.rank +
				') must match'
			);
		});
		var i = t,
			a = e,
			s = !1;
		4 === e.rank &&
			((s = !0),
			(a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3])),
			(i = [1, t[0], t[1], t[2], t[3]]));
		var u = i[4],
			c = a.shape[4];
		P(5 === i.length, function () {
			return (
				'Error in conv3dDerInput: inShape must be length 5, but got length ' +
				i.length +
				'.'
			);
		}),
			P(5 === a.rank, function () {
				return (
					'Error in conv3dDerInput: dy must be rank 5, but got rank ' + a.rank
				);
			}),
			P(5 === n.rank, function () {
				return (
					'Error in conv3dDerInput: filter must be rank 5, but got rank ' +
					n.rank
				);
			}),
			P(u === n.shape[3], function () {
				return (
					'Error in conv3dDerInput: depth of input (' +
					u +
					') must match input depth for filter ' +
					n.shape[3] +
					'.'
				);
			}),
			P(c === n.shape[4], function () {
				return (
					'Error in conv3dDerInput: depth of output (' +
					c +
					') must match output depth for filter ' +
					n.shape[4] +
					'.'
				);
			});
		var l = xo(i, n.shape, r, 1, o),
			h = qt.runKernelFunc(
				function (t) {
					return t.conv3dDerInput(a, n, l);
				},
				{ dy5D: a }
			);
		return s ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
	}
	var xc = xn({
			conv1d_: function (t, e, n, r, o, i, a) {
				void 0 === o && (o = 'NWC'), void 0 === i && (i = 1);
				var s = sn(t, 'x', 'conv1d'),
					u = sn(e, 'filter', 'conv1d'),
					c = s,
					l = !1;
				2 === s.rank && ((l = !0), (c = s.as3D(1, s.shape[0], s.shape[1]))),
					P(3 === c.rank, function () {
						return (
							'Error in conv1d: input must be rank 3, but got rank ' +
							c.rank +
							'.'
						);
					}),
					P(3 === u.rank, function () {
						return (
							'Error in conv1d: filter must be rank 3, but got rank ' +
							u.rank +
							'.'
						);
					}),
					null != a &&
						P(B(r), function () {
							return (
								'Error in conv1d: pad must be an integer when using, dimRoundingMode ' +
								a +
								' but got pad ' +
								r +
								'.'
							);
						}),
					P(c.shape[2] === u.shape[1], function () {
						return (
							'Error in conv1d: depth of input (' +
							c.shape[2] +
							') must match input depth for filter ' +
							u.shape[1] +
							'.'
						);
					}),
					P(Ro(n, i), function () {
						return (
							'Error in conv1D: Either stride or dilation must be 1. Got stride ' +
							n +
							" and dilation '" +
							i +
							"'"
						);
					}),
					P('NWC' === o, function () {
						return (
							'Error in conv1d: got dataFormat of ' +
							o +
							' but only NWC is currently supported.'
						);
					});
				var h = u.as4D(1, u.shape[0], u.shape[1], u.shape[2]),
					p = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]),
					f = bc(p, h, [1, n], r, 'NHWC', [1, i], a);
				return l
					? f.as2D(f.shape[2], f.shape[3])
					: f.as3D(f.shape[0], f.shape[2], f.shape[3]);
			},
		}),
		bc = xn({
			conv2d_: function (t, e, i, a, s, u, n) {
				void 0 === s && (s = 'NHWC'), void 0 === u && (u = [1, 1]);
				var r = sn(t, 'x', 'conv2d'),
					o = sn(e, 'filter', 'conv2d'),
					c = r,
					l = !1;
				3 === r.rank &&
					((l = !0), (c = r.as4D(1, r.shape[0], r.shape[1], r.shape[2]))),
					P(4 === c.rank, function () {
						return (
							'Error in conv2d: input must be rank 4, but got rank ' +
							c.rank +
							'.'
						);
					}),
					P(4 === o.rank, function () {
						return (
							'Error in conv2d: filter must be rank 4, but got rank ' +
							o.rank +
							'.'
						);
					}),
					null != n &&
						P(B(a), function () {
							return (
								'Error in conv2d: pad must be an integer when using, dimRoundingMode ' +
								n +
								' but got pad ' +
								a +
								'.'
							);
						});
				var h = 'NHWC' === s ? c.shape[3] : c.shape[1];
				P(h === o.shape[2], function () {
					return (
						'Error in conv2d: depth of input (' +
						h +
						') must match input depth for filter ' +
						o.shape[2] +
						'.'
					);
				}),
					P(Ro(i, u), function () {
						return (
							'Error in conv2D: Either strides or dilations must be 1. Got strides ' +
							i +
							" and dilations '" +
							u +
							"'"
						);
					});
				var p = ko(s),
					f = yo(c.shape, o.shape, i, u, a, n, !1, p),
					d = [o, c],
					v = qt.runKernelFunc(
						function (t, e) {
							var n = t.conv2d(c, o, f);
							return e([o, c]), n;
						},
						{ x: c, filter: o },
						function (t, e) {
							var n = e,
								r = n[0],
								o = n[1];
							return (
								P(Io(u), function () {
									return (
										"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" +
										u +
										"'"
									);
								}),
								{
									x: function () {
										return Ec(o.shape, t, r, i, a, s);
									},
									filter: function () {
										return Cc(o, t, r.shape, i, a, s);
									},
								}
							);
						},
						'Conv2D',
						f,
						d
					);
				return l ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
			},
		}),
		wc = xn({
			conv3d_: function (t, e, o, i, n, a) {
				void 0 === n && (n = 'NDHWC'), void 0 === a && (a = [1, 1, 1]);
				var r,
					s = sn(t, 'x', 'conv3d'),
					u = sn(e, 'filter', 'conv3d'),
					c = s,
					l = !1;
				4 === s.rank &&
					((l = !0),
					(c = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]))),
					P(5 === c.rank, function () {
						return (
							'Error in conv3d: input must be rank 5, but got rank ' +
							c.rank +
							'.'
						);
					}),
					P(5 === u.rank, function () {
						return (
							'Error in conv3d: filter must be rank 5, but got rank ' +
							u.rank +
							'.'
						);
					}),
					P(c.shape[4] === u.shape[3], function () {
						return (
							'Error in conv3d: depth of input (' +
							c.shape[4] +
							') must match input depth for filter ' +
							u.shape[3] +
							'.'
						);
					}),
					P(((r = a), gc(o) || gc(r)), function () {
						return (
							'Error in conv3D: Either strides or dilations must be 1. Got strides ' +
							o +
							" and dilations '" +
							a +
							"'"
						);
					}),
					P('NDHWC' === n, function () {
						return (
							'Error in conv3d: got dataFormat of ' +
							n +
							' but only NDHWC is currently supported.'
						);
					});
				var h = xo(c.shape, u.shape, o, a, i),
					p = qt.runKernelFunc(
						function (t, e) {
							var n = t.conv3d(c, u, h);
							return e([c, u]), n;
						},
						{ x: c, $filter: u },
						function (t, e) {
							P(gc(a), function () {
								return (
									"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" +
									a +
									"'"
								);
							});
							var n = e[0],
								r = e[1];
							return {
								x: function () {
									return yc(n.shape, t, r, o, i);
								},
								$filter: function () {
									return (function (t, e, n, r, o) {
										var i = t;
										4 === t.rank &&
											(i = t.as5D(
												1,
												t.shape[0],
												t.shape[1],
												t.shape[2],
												t.shape[3]
											));
										var a = e;
										4 === a.rank &&
											(a = e.as5D(
												1,
												e.shape[0],
												e.shape[1],
												e.shape[2],
												e.shape[3]
											)),
											P(5 === i.rank, function () {
												return (
													'Error in conv3dDerFilter: input must be rank 5, but got shape ' +
													i.shape +
													'.'
												);
											}),
											P(5 === a.rank, function () {
												return (
													'Error in conv3dDerFilter: dy must be rank 5, but got shape ' +
													a.shape +
													'.'
												);
											}),
											P(5 === n.length, function () {
												return (
													'Error in conv3dDerFilter: filterShape must be length 5, but got ' +
													n +
													'.'
												);
											}),
											P(i.shape[4] === n[3], function () {
												return (
													'Error in conv3dDerFilter: depth of input ' +
													i.shape[4] +
													') must match input depth in filter (' +
													n[3] +
													'.'
												);
											}),
											P(a.shape[4] === n[4], function () {
												return (
													'Error in conv3dDerFilter: depth of dy (' +
													a.shape[4] +
													') must match output depth for filter (' +
													n[4] +
													').'
												);
											});
										var s = xo(i.shape, n, r, 1, o);
										return qt.runKernelFunc(
											function (t) {
												return t.conv3dDerFilter(i, a, s);
											},
											{ x5D: i, dy5D: a }
										);
									})(n, t, r.shape, o, i);
								},
							};
						}
					);
				return l ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p;
			},
		}),
		Cc = xn({
			conv2dDerFilter_: function (t, e, n, r, o, i, a) {
				void 0 === i && (i = 'NHWC');
				var s = t;
				3 === t.rank && (s = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
				var u = e;
				3 === u.rank && (u = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])),
					P(4 === s.rank, function () {
						return (
							'Error in conv2dDerFilter: input must be rank 4, but got shape ' +
							s.shape +
							'.'
						);
					}),
					P(4 === u.rank, function () {
						return (
							'Error in conv2dDerFilter: dy must be rank 4, but got shape ' +
							u.shape +
							'.'
						);
					}),
					P(4 === n.length, function () {
						return (
							'Error in conv2dDerFilter: filterShape must be length 4, but got ' +
							n +
							'.'
						);
					});
				var c = 'NHWC' === i ? s.shape[3] : s.shape[1],
					l = 'NHWC' === i ? u.shape[3] : u.shape[1];
				P(c === n[2], function () {
					return (
						'Error in conv2dDerFilter: depth of input ' +
						c +
						') must match input depth in filter (' +
						n[2] +
						'.'
					);
				}),
					P(l === n[3], function () {
						return (
							'Error in conv2dDerFilter: depth of dy (' +
							l +
							') must match output depth for filter (' +
							n[3] +
							').'
						);
					}),
					null != a &&
						P(B(o), function () {
							return (
								'Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode ' +
								a +
								' but got pad ' +
								o +
								'.'
							);
						});
				var h = ko(i),
					p = yo(s.shape, n, r, 1, o, a, !1, h);
				return qt.runKernelFunc(
					function (t) {
						return t.conv2dDerFilter(s, u, p);
					},
					{ x4D: s, dy4D: u }
				);
			},
		}),
		Ec = xn({ conv2dDerInput_: mc }),
		_c = xn({
			depthwiseConv2d_: function (t, e, n, r, o, i, a) {
				void 0 === i && (i = [1, 1]);
				var s = sn(t, 'x', 'depthwiseConv2d'),
					u = sn(e, 'filter', 'depthwiseConv2d'),
					c = s,
					l = !1;
				3 === s.rank &&
					((l = !0), (c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2]))),
					P(4 === c.rank, function () {
						return (
							'Error in depthwiseConv2d: input must be rank 4, but got rank ' +
							c.rank +
							'.'
						);
					}),
					P(4 === u.rank, function () {
						return (
							'Error in depthwiseConv2d: filter must be rank 4, but got rank ' +
							u.rank +
							'.'
						);
					}),
					P(c.shape[3] === u.shape[2], function () {
						return (
							'Error in depthwiseConv2d: number of input channels (' +
							c.shape[3] +
							') must match the inChannels dimension in filter ' +
							u.shape[2] +
							'.'
						);
					}),
					null == i && (i = [1, 1]),
					P(Ro(n, i), function () {
						return (
							'Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ' +
							n +
							" and dilations '" +
							i +
							"'"
						);
					}),
					null != a &&
						P(B(r), function () {
							return (
								'Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode ' +
								a +
								' but got pad ' +
								r +
								'.'
							);
						});
				var h = yo(c.shape, u.shape, n, i, r, a, !0),
					p = [c, u],
					f = qt.runKernelFunc(
						function (t, e) {
							var n = t.depthwiseConv2D(c, u, h);
							return e([c, u]), n;
						},
						{ x: c, filter: u },
						function (t, e) {
							P(Io(i), function () {
								return (
									"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" +
									i +
									"'"
								);
							});
							var n = e[0],
								r = e[1];
							return {
								x: function () {
									return Ic(n.shape, t, r, h);
								},
								filter: function () {
									return Rc(n, t, r.shape, h);
								},
							};
						},
						'DepthwiseConv2dNative',
						h,
						p
					);
				return l ? f.as3D(f.shape[1], f.shape[2], f.shape[3]) : f;
			},
		}),
		Ic = xn({
			depthwiseConv2dDerInput_: function (t, e, n, r) {
				var o = e,
					i = !1;
				3 === e.rank &&
					((i = !0), (o = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])));
				var a = qt.runKernelFunc(
					function (t) {
						return t.depthwiseConv2DDerInput(o, n, r);
					},
					{ dy4D: o }
				);
				return i ? a.as3D(a.shape[1], a.shape[2], a.shape[3]) : a;
			},
		}),
		Rc = xn({
			depthwiseConv2dDerFilter_: function (t, e, n, r) {
				var o = t;
				3 === t.rank && (o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
				var i = e;
				return (
					3 === i.rank && (i = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])),
					qt.runKernelFunc(
						function (t) {
							return t.depthwiseConv2DDerFilter(o, i, r);
						},
						{ x4D: o, dy4D: i }
					)
				);
			},
		}),
		kc = xn({
			separableConv2d_: function (t, e, n, r, o, i, a) {
				void 0 === i && (i = [1, 1]), void 0 === a && (a = 'NHWC');
				var s = sn(t, 'x', 'separableConv2d'),
					u = sn(e, 'depthwiseFilter', 'separableConv2d'),
					c = sn(n, 'pointwiseFilter', 'separableConv2d'),
					l = s,
					h = !1;
				if (
					(3 === s.rank &&
						((h = !0), (l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2]))),
					'NCHW' === a)
				)
					throw new Error(
						'separableConv2d currently does not support dataFormat NCHW; only NHWC is supported'
					);
				P(4 === l.rank, function () {
					return (
						'Error in separableConv2d: input must be rank 4, but got rank ' +
						l.rank +
						'.'
					);
				}),
					P(4 === u.rank, function () {
						return (
							'Error in separableConv2d: depthwise filter must be rank 4, but got rank ' +
							u.rank +
							'.'
						);
					}),
					P(4 === c.rank, function () {
						return (
							'Error in separableConv2d: pointwise filter must be rank 4, but got rank ' +
							u.rank +
							'.'
						);
					}),
					P(1 === c.shape[0], function () {
						return (
							'Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ' +
							c.shape[0] +
							'.'
						);
					}),
					P(1 === c.shape[1], function () {
						return (
							'Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ' +
							c.shape[1] +
							'.'
						);
					});
				var p = u.shape[2],
					f = u.shape[3];
				P(c.shape[2] === p * f, function () {
					return (
						'Error in separableConv2d: the third dimension of pointwise filter must be ' +
						p * f +
						', but got ' +
						c.shape[2] +
						'.'
					);
				});
				var d = _c(l, u, r, o, a, i),
					v = bc(d, c, 1, 'valid', a);
				return h ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v;
			},
		}),
		Sc = xn({
			conv2dTranspose_: function (t, e, n, r, o, i) {
				return mc(
					n,
					sn(t, 'x', 'conv2dTranspose'),
					sn(e, 'filter', 'conv2dTranspose'),
					r,
					o,
					'NHWC',
					i
				);
			},
		}),
		Dc = xn({
			conv3dTranspose_: function (t, e, n, r, o) {
				return yc(
					n,
					sn(t, 'x', 'conv3dTranspose'),
					sn(e, 'filter', 'conv3dTranspose'),
					r,
					o
				);
			},
		}),
		Ac = xn({
			matMul_: function (t, e, i, a) {
				var n;
				void 0 === i && (i = !1), void 0 === a && (a = !1);
				var r = sn(t, 'a', 'matMul'),
					o = sn(e, 'b', 'matMul');
				(n = Pt(r, o)), (r = n[0]), (o = n[1]);
				var s = i ? r.shape[r.rank - 2] : r.shape[r.rank - 1],
					u = a ? o.shape[o.rank - 1] : o.shape[o.rank - 2],
					c = i ? r.shape[r.rank - 1] : r.shape[r.rank - 2],
					l = a ? o.shape[o.rank - 2] : o.shape[o.rank - 1],
					h = r.shape.slice(0, -2),
					p = o.shape.slice(0, -2),
					f = L(h),
					d = L(p);
				P(2 <= r.rank && 2 <= o.rank && r.rank === o.rank, function () {
					return (
						'Error in matMul: inputs must have the same rank of at least 2, got ranks ' +
						r.rank +
						' and ' +
						o.rank +
						'.'
					);
				}),
					P(D(h, p), function () {
						return (
							'Error in matMul: outer dimensions (' +
							h +
							') and (' +
							p +
							') of Tensors with shapes ' +
							r.shape +
							' and ' +
							o.shape +
							' must match.'
						);
					}),
					P(s === u, function () {
						return (
							'Error in matMul: inner shapes (' +
							s +
							') and (' +
							u +
							') of Tensors with shapes ' +
							r.shape +
							' and ' +
							o.shape +
							' and transposeA=' +
							i +
							' and transposeB=' +
							a +
							' must match.'
						);
					});
				var v = r.shape.slice(0, -2).concat([c, l]),
					m = i ? r.as3D(f, s, c) : r.as3D(f, c, s),
					g = a ? o.as3D(d, l, u) : o.as3D(d, u, l),
					y = { transposeA: i, transposeB: a };
				return qt
					.runKernelFunc(
						function (t, e) {
							var n = t.batchMatMul(m, g, i, a);
							return e([m, g]), n;
						},
						{ a: m, b: g },
						function (t, e) {
							var n = e,
								r = n[0],
								o = n[1];
							return i || a
								? !i && a
									? {
											a: function () {
												return t.matMul(o, !1, !1);
											},
											b: function () {
												return t.matMul(r, !0, !1);
											},
									  }
									: i && !a
									? {
											a: function () {
												return o.matMul(t, !1, !0);
											},
											b: function () {
												return r.matMul(t, !1, !1);
											},
									  }
									: {
											a: function () {
												return o.matMul(t, !0, !0);
											},
											b: function () {
												return t.matMul(r, !0, !0);
											},
									  }
								: {
										a: function () {
											return t.matMul(o, !1, !0);
										},
										b: function () {
											return r.matMul(t, !0, !1);
										},
								  };
						},
						'BatchMatMul',
						y
					)
					.reshape(v);
			},
		}),
		Tc = xn({
			dot_: function (t, e) {
				var n = sn(t, 't1', 'dot'),
					r = sn(e, 't2', 'dot');
				P(
					!((1 !== n.rank && 2 !== n.rank) || (1 !== r.rank && 2 !== r.rank)),
					function () {
						return (
							'Error in dot: inputs must all be rank 1 or 2, but got ranks ' +
							n.rank +
							' and ' +
							r.rank +
							'.'
						);
					}
				);
				var o = 1 === n.rank ? n.size : n.shape[1],
					i = 1 === r.rank ? r.size : r.shape[0];
				return (
					P(o === i, function () {
						return (
							'Error in dot: inner dimensions of inputs must match, but got ' +
							o +
							' and ' +
							i +
							'.'
						);
					}),
					1 === n.rank && 1 === r.rank
						? n.as2D(1, -1).matMul(r.as2D(-1, 1)).asScalar()
						: 1 === n.rank && 2 === r.rank
						? n.as2D(1, -1).matMul(r.as2D(r.shape[0], r.shape[1])).as1D()
						: 2 === n.rank && 1 === r.rank
						? n.matMul(r.as2D(-1, 1)).as1D()
						: n.matMul(r.as2D(r.shape[0], r.shape[1]))
				);
			},
		}),
		Nc = xn({
			outerProduct_: function (t, e) {
				var n = sn(t, 'v1', 'outerProduct'),
					r = sn(e, 'v2', 'outerProduct');
				return (
					P(1 === n.rank && 1 === r.rank, function () {
						return (
							'Error in outerProduct: inputs must be rank 1, but got ranks ' +
							n.rank +
							' and ' +
							r.rank +
							'.'
						);
					}),
					n.as2D(-1, 1).matMul(r.as2D(1, -1))
				);
			},
		}),
		Fc = xn({
			reverse_: function (t, e) {
				var n = sn(t, 'x', 'reverse');
				if (0 === n.rank) return n.clone();
				var r = A(e, n.shape);
				return qt
					.runKernelFunc(
						function (t) {
							return t.reverse(n, r);
						},
						{ $x: n },
						function (t) {
							return {
								$x: function () {
									return t.reverse(r);
								},
							};
						}
					)
					.reshapeAs(n);
			},
		}),
		Mc = xn({
			reverse1d_: function (t) {
				var e = sn(t, 'x', 'reverse');
				return (
					P(1 === e.rank, function () {
						return (
							'Error in reverse1D: x must be rank 1 but got rank ' +
							e.rank +
							'.'
						);
					}),
					Fc(e, 0)
				);
			},
		}),
		Oc = xn({
			reverse2d_: function (t, e) {
				var n = sn(t, 'x', 'reverse');
				return (
					P(2 === n.rank, function () {
						return (
							'Error in reverse2D: x must be rank 2 but got rank ' +
							n.rank +
							'.'
						);
					}),
					Fc(n, e)
				);
			},
		}),
		Pc = xn({
			reverse3d_: function (t, e) {
				var n = sn(t, 'x', 'reverse');
				return (
					P(3 === n.rank, function () {
						return (
							'Error in reverse3D: x must be rank 3 but got rank ' +
							n.rank +
							'.'
						);
					}),
					Fc(n, e)
				);
			},
		}),
		Bc = xn({
			reverse4d_: function (t, e) {
				var n = sn(t, 'x', 'reverse');
				return (
					P(4 === n.rank, function () {
						return (
							'Error in reverse4D: x must be rank 4 but got rank ' +
							n.rank +
							'.'
						);
					}),
					Fc(n, e)
				);
			},
		});
	function Lc(t, r, o, i, a, e) {
		var n = sn(t, 'x', 'maxPool'),
			s = n,
			u = !1;
		3 === n.rank &&
			((u = !0), (s = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]))),
			null == i && (i = [1, 1]),
			P(4 === s.rank, function () {
				return (
					'Error in maxPool: input must be rank 4 but got rank ' + s.rank + '.'
				);
			}),
			P(Ro(o, i), function () {
				return (
					'Error in maxPool: Either strides or dilations must be 1. Got strides ' +
					o +
					" and dilations '" +
					i +
					"'"
				);
			}),
			null != e &&
				P(B(a), function () {
					return (
						'Error in maxPool: pad must be an integer when using, dimRoundingMode ' +
						e +
						' but got pad ' +
						a +
						'.'
					);
				});
		var c = mo(s.shape, r, o, i, a, e);
		if (1 === c.filterWidth && 1 === c.filterHeight && D(c.inShape, c.outShape))
			return n.clone();
		var l = [s],
			h = qt.runKernelFunc(
				function (t, e) {
					var n = t.maxPool(s, c);
					return e([s, n]), n;
				},
				{ x: s },
				function (h, t) {
					var e = t[0],
						n = t[1];
					return {
						x: function () {
							return (function (t, e, n, r, o, i, a) {
								var s = sn(h, 'dy', 'maxPoolBackprop'),
									u = sn(e, 'input', 'maxPoolBackprop'),
									c = sn(n, 'output', 'maxPoolBackprop');
								P(u.rank === s.rank, function () {
									return (
										'Rank of input (' +
										u.rank +
										') does not match rank of dy (' +
										s.rank +
										')'
									);
								}),
									null == i && (i = [1, 1]),
									P(Ro(o, i), function () {
										return (
											'Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides ' +
											o +
											" and dilations '" +
											i +
											"'"
										);
									}),
									P(4 === s.rank, function () {
										return (
											'Error in maxPoolBackprop: dy must be rank 4 but got rank ' +
											s.rank +
											'.'
										);
									}),
									P(4 === u.rank, function () {
										return (
											'Error in maxPoolBackprop: input must be rank 4 but got rank ' +
											u.rank +
											'.'
										);
									});
								var l = mo(u.shape, r, o, i, a, void 0);
								return qt.runKernelFunc(
									function (t) {
										return t.maxPoolBackprop(s, u, c, l);
									},
									{ $dy: s, $input: u }
								);
							})(0, e, n, r, o, i, a);
						},
					};
				},
				'MaxPool',
				c,
				l
			);
		return u ? h.as3D(h.shape[1], h.shape[2], h.shape[3]) : h;
	}
	function Wc(t, e, n, r, o, i) {
		var a = sn(t, 'x', 'avgPool', 'float32');
		null == r && (r = [1, 1]),
			P(Ro(n, r), function () {
				return (
					'Error in avgPool: Either strides or dilations must be 1. Got strides ' +
					n +
					" and dilations '" +
					r +
					"'"
				);
			});
		var s = a,
			u = !1;
		3 === a.rank &&
			((u = !0), (s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2]))),
			P(4 === s.rank, function () {
				return (
					'Error in avgPool: x must be rank 4 but got rank ' + s.rank + '.'
				);
			}),
			null != i &&
				P(B(o), function () {
					return (
						'Error in avgPool: pad must be an integer when using, dimRoundingMode ' +
						i +
						' but got pad ' +
						o +
						'.'
					);
				});
		var c = mo(s.shape, e, n, r, o, i);
		if (1 === c.filterWidth && 1 === c.filterHeight && D(c.inShape, c.outShape))
			return a.clone();
		var l = qt.runKernelFunc(
			function (t) {
				return t.avgPool(s, c);
			},
			{ x: s },
			function (f) {
				return {
					x: function () {
						return (function (t, e, n, r, o, i) {
							var a = sn(f, 'dy', 'avgPoolBackprop'),
								s = sn(e, 'input', 'avgPoolBackprop');
							P(s.rank === a.rank, function () {
								return (
									'Rank of input (' +
									s.rank +
									') does not match rank of dy (' +
									a.rank +
									')'
								);
							}),
								null == o && (o = [1, 1]),
								P(Ro(r, o), function () {
									return (
										'Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides ' +
										r +
										" and dilations '" +
										o +
										"'"
									);
								});
							var u = s,
								c = a,
								l = !1;
							3 === s.rank &&
								((l = !0),
								(u = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])),
								(c = a.as4D(1, a.shape[0], a.shape[1], a.shape[2]))),
								P(4 === c.rank, function () {
									return (
										'Error in avgPoolBackprop: dy must be rank 4 but got rank ' +
										c.rank +
										'.'
									);
								}),
								P(4 === u.rank, function () {
									return (
										'Error in avgPoolBackprop: input must be rank 4 but got rank ' +
										u.rank +
										'.'
									);
								});
							var h = mo(u.shape, n, r, o, i),
								p = qt.runKernelFunc(
									function (t) {
										return t.avgPoolBackprop(c, u, h);
									},
									{ dy4D: c, input4D: u }
								);
							return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p;
						})(0, s, e, n, r, o);
					},
				};
			},
			'AvgPool',
			c
		);
		return (
			(l = l.cast(a.dtype)), u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
		);
	}
	var zc = xn({
			maxPool_: function (t, e, n, r, o) {
				return Lc(t, e, n, 1, r, o);
			},
		}),
		Uc = xn({
			avgPool_: function (t, e, n, r, o) {
				return Wc(t, e, n, 1, r, o);
			},
		}),
		Vc = xn({
			pool_: function (t, e, n, r, o, i) {
				null == o && (o = [1, 1]),
					null == i && (i = 1),
					0 === r && (r = 'valid');
				var a = sn(t, 'x', 'maxPool'),
					s = a,
					u = !1;
				3 === a.rank &&
					((u = !0), (s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2]))),
					P(Ro(i, o), function () {
						return (
							'Error in pool: Either strides or dilations must be 1. Got strides ' +
							i +
							" and dilations '" +
							o +
							"'"
						);
					});
				var c,
					l,
					h,
					p,
					f,
					d,
					v = mo(s.shape, e, i, o, r),
					m = [v.dilationHeight, v.dilationWidth];
				c =
					'same' === r
						? ((l = [v.filterHeight, v.filterWidth]),
						  (h = m),
						  (p = l
								.map(function (t, e) {
									return t + (t - 1) * (h[e] - 1);
								})
								.map(function (t) {
									return t - 1;
								})),
						  (f = p.map(function (t) {
								return Math.floor(t / 2);
						  })),
						  (d = p.map(function (t, e) {
								return t - f[e];
						  })),
						  p.map(function (t, e) {
								return [f[e], d[e]];
						  }))
						: [
								[0, 0],
								[0, 0],
						  ];
				var g,
					y,
					x,
					b,
					w,
					C,
					E,
					_,
					I = 1 === m[0] && 1 === m[1],
					R =
						((g = [v.inHeight, v.inWidth]),
						(y = m),
						(b = (x = c).map(function (t) {
							return t[0];
						})),
						(w = x.map(function (t) {
							return t[1];
						})),
						(C = g.concat(b, w)),
						(E = y.map(function (t, e) {
							return (t - (C[e] % t)) % t;
						})),
						(_ = w.map(function (t, e) {
							return t + E[e];
						})),
						[
							y.map(function (t, e) {
								return [b[e], _[e]];
							}),
							y.map(function (t, e) {
								return [0, E[e]];
							}),
						]),
					k = R[1],
					S = I ? r : 'valid',
					D = I ? s : Ar(s, m, R[0]),
					A = ('avg' === n
						? function () {
								return Wc(D, e, i, 1, S);
						  }
						: function () {
								return Lc(D, e, i, 1, S);
						  })(),
					T = I ? A : lr(A, m, k);
				return u ? T.as3D(T.shape[1], T.shape[2], T.shape[3]) : T;
			},
		}),
		Gc = xn({
			maxPool3d_: function (t, r, o, i, a, e, s) {
				void 0 === e && (e = 'NDHWC');
				var n = sn(t, 'x', 'maxPool3d'),
					u = n,
					c = !1;
				4 === n.rank &&
					((c = !0),
					(u = n.as5D(1, n.shape[0], n.shape[1], n.shape[2], n.shape[3]))),
					null == s && (s = [1, 1, 1]),
					P(5 === u.rank, function () {
						return (
							'Error in maxPool3d: x must be rank 5 but got rank ' +
							u.rank +
							'.'
						);
					}),
					P('NDHWC' === e, function () {
						return (
							'Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ' +
							e
						);
					}),
					P(Ro(o, s), function () {
						return (
							'Error in maxPool3d: Either strides or dilations must be 1. Got strides ' +
							o +
							" and dilations '" +
							s +
							"'"
						);
					}),
					null != a &&
						P(B(i), function () {
							return (
								'Error in maxPool3d: pad must be an integer when using, dimRoundingMode ' +
								a +
								' but got pad ' +
								i +
								'.'
							);
						});
				var l = go(u.shape, r, o, s, i, a, e),
					h = qt.runKernelFunc(
						function (t, e) {
							var n = t.maxPool3d(u, l);
							return e([u, n]), n;
						},
						{ x: u },
						function (g, t) {
							var e = t[0],
								n = t[1];
							return {
								x: function () {
									return (function (t, e, n, r, o, i, a, s) {
										var u = sn(g, 'dy', 'maxPool3dBackprop'),
											c = sn(e, 'input', 'maxPool3dBackprop'),
											l = sn(n, 'output', 'maxPool3dBackprop'),
											h = u,
											p = c,
											f = l,
											d = !1;
										4 === c.rank &&
											((d = !0),
											(h = u.as5D(
												1,
												u.shape[0],
												u.shape[1],
												u.shape[2],
												u.shape[3]
											)),
											(p = c.as5D(
												1,
												c.shape[0],
												c.shape[1],
												c.shape[2],
												c.shape[3]
											)),
											(f = l.as5D(
												1,
												l.shape[0],
												l.shape[1],
												l.shape[2],
												l.shape[3]
											))),
											P(5 === h.rank, function () {
												return (
													'Error in maxPool3dBackprop: dy must be rank 5 but got rank ' +
													h.rank +
													'.'
												);
											}),
											P(5 === p.rank, function () {
												return (
													'Error in maxPool3dBackprop: input must be rank 5 but got rank ' +
													p.rank +
													'.'
												);
											}),
											P(5 === f.rank, function () {
												return (
													'Error in maxPool3dBackprop: output must be rank 5 but got rank ' +
													f.rank +
													'.'
												);
											}),
											null == i && (i = [1, 1, 1]),
											P(Ro(o, i), function () {
												return (
													'Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides ' +
													o +
													" and dilations '" +
													i +
													"'"
												);
											}),
											null != s &&
												P(B(a), function () {
													return (
														'Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ' +
														s +
														' but got pad ' +
														a +
														'.'
													);
												});
										var v = go(p.shape, r, o, i, a, s),
											m = qt.runKernelFunc(
												function (t) {
													return t.maxPool3dBackprop(h, p, f, v);
												},
												{ dy5D: h, input5D: p }
											);
										return d
											? m.as4D(m.shape[1], m.shape[2], m.shape[3], m.shape[4])
											: m;
									})(0, e, n, r, o, s, i, a);
								},
							};
						}
					);
				return c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h;
			},
		}),
		Hc = xn({
			avgPool3d_: function (t, e, n, r, o, i, a) {
				void 0 === i && (i = 'NDHWC');
				var s = sn(t, 'x', 'avgPool3d', 'float32'),
					u = s,
					c = !1;
				4 === s.rank &&
					((c = !0),
					(u = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3]))),
					null == a && (a = [1, 1, 1]),
					P(5 === u.rank, function () {
						return (
							'Error in avgPool3d: x must be rank 5 but got rank ' +
							u.rank +
							'.'
						);
					}),
					P('NDHWC' === i, function () {
						return (
							'Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ' +
							i
						);
					}),
					P(Ro(n, a), function () {
						return (
							'Error in avgPool3d: Either strides or dilations must be 1. Got strides ' +
							n +
							" and dilations '" +
							a +
							"'"
						);
					}),
					null != o &&
						P(B(r), function () {
							return (
								'Error in avgPool3d: pad must be an integer when using, dimRoundingMode ' +
								o +
								' but got pad ' +
								r +
								'.'
							);
						});
				var l = go(u.shape, e, n, a, r, o, i),
					h = qt.runKernelFunc(
						function (t) {
							return t.avgPool3d(u, l);
						},
						{ x: u },
						function (d) {
							return {
								x: function () {
									return (function (t, e, n, r, o, i, a) {
										var s = sn(d, 'dy', 'avgPool3dBackprop'),
											u = sn(e, 'input', 'avgPool3dBackprop'),
											c = s,
											l = u,
											h = !1;
										4 === u.rank &&
											((h = !0),
											(c = s.as5D(
												1,
												s.shape[0],
												s.shape[1],
												s.shape[2],
												s.shape[3]
											)),
											(l = u.as5D(
												1,
												u.shape[0],
												u.shape[1],
												u.shape[2],
												u.shape[3]
											))),
											P(5 === c.rank, function () {
												return (
													'Error in avgPool3dBackprop: dy must be rank 5 but got rank ' +
													c.rank +
													'.'
												);
											}),
											P(5 === l.rank, function () {
												return (
													'Error in avgPool3dBackprop: input must be rank 5 but got rank ' +
													l.rank +
													'.'
												);
											}),
											null == o && (o = [1, 1, 1]),
											P(Ro(r, o), function () {
												return (
													'Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides ' +
													r +
													" and dilations '" +
													o +
													"'"
												);
											}),
											null != a &&
												P(B(i), function () {
													return (
														'Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode ' +
														a +
														' but got pad ' +
														i +
														'.'
													);
												});
										var p = go(l.shape, n, r, o, i, a),
											f = qt.runKernelFunc(
												function (t) {
													return t.avgPool3dBackprop(c, l, p);
												},
												{ dy5D: c, input5D: l }
											);
										return h
											? f.as4D(f.shape[1], f.shape[2], f.shape[3], f.shape[4])
											: f;
									})(0, u, e, n, a, r, o);
								},
							};
						}
					);
				return (
					(h = h.cast(u.dtype)),
					c ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
				);
			},
		}),
		qc = xn({
			slice_: function (t, e, n) {
				var r,
					o,
					i = sn(t, 'x', 'slice');
				if (0 === i.rank) throw new Error('Slicing scalar is not possible');
				(r =
					'number' == typeof e
						? [e].concat(new Array(i.rank - 1).fill(0))
						: e.length < i.rank
						? e.concat(new Array(i.rank - e.length).fill(0))
						: e.slice()).forEach(function (t) {
					P(-1 !== t, function () {
						return 'slice() does not support negative begin indexing.';
					});
				}),
					(o = (o =
						null == n
							? new Array(i.rank).fill(-1)
							: 'number' == typeof n
							? [n].concat(new Array(i.rank - 1).fill(-1))
							: n.length < i.rank
							? n.concat(new Array(i.rank - n.length).fill(-1))
							: n).map(function (t, e) {
						return 0 <= t
							? t
							: (P(-1 === t, function () {
									return (
										'Negative size values should be exactly -1 but got ' +
										t +
										' for the slice() size at index ' +
										e +
										'.'
									);
							  }),
							  i.shape[e] - r[e]);
					})),
					Xr(i, r, o);
				var a = i.shape,
					s = { begin: r, size: o };
				return qt.runKernelFunc(
					function (t) {
						return t.slice(i, r, o);
					},
					{ x: i },
					function (t) {
						for (var e = [], n = 0; n < t.rank; n++)
							e.push([r[n], a[n] - r[n] - o[n]]);
						return {
							x: function () {
								return t.pad(e);
							},
						};
					},
					'Slice',
					s
				);
			},
		}),
		jc = xn({
			slice1d_: function (t, e, n) {
				var r = sn(t, 'x', 'slice1d');
				return (
					P(1 === r.rank, function () {
						return (
							'slice1d expects a rank-1 tensor, but got a rank-' +
							r.rank +
							' tensor'
						);
					}),
					qc(r, [e], [n])
				);
			},
		}),
		Kc = xn({
			slice2d_: function (t, e, n) {
				var r = sn(t, 'x', 'slice2d');
				return (
					P(2 === r.rank, function () {
						return (
							'slice2d expects a rank-2 tensor, but got a rank-' +
							r.rank +
							' tensor'
						);
					}),
					qc(r, e, n)
				);
			},
		}),
		Xc = xn({
			slice3d_: function (t, e, n) {
				var r = sn(t, 'x', 'slice3d');
				return (
					P(3 === r.rank, function () {
						return (
							'slice3d expects a rank-3 tensor, but got a rank-' +
							r.rank +
							' tensor'
						);
					}),
					qc(r, e, n)
				);
			},
		}),
		Yc = xn({
			slice4d_: function (t, e, n) {
				var r = sn(t, 'x', 'slice4d');
				return (
					P(4 === r.rank, function () {
						return (
							'slice4d expects a rank-4 tensor, but got a rank-' +
							r.rank +
							' tensor'
						);
					}),
					qc(r, e, n)
				);
			},
		});
	function $c(e, n, r, t, o) {
		return (
			n.rank < r.rank && (n = n.reshape(pn(n.shape, t))),
			e.rank < r.rank && (e = e.reshape(pn(e.shape, t))),
			{
				x: function () {
					var t = e.mul(r.equal(n).cast(e.dtype));
					return null == o ? t : t.transpose(o);
				},
			}
		);
	}
	var Jc = xn({
			all_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'all', 'bool'),
					o = A(e, r.shape),
					i = o,
					a = dn(i, r.rank);
				null != a && ((r = r.transpose(a)), (i = mn(i.length, r.rank)));
				var s = qt.runKernelFunc(
					function (t) {
						return t.all(r, i);
					},
					{ $x: r }
				);
				if (n) {
					var u = pn(s.shape, o);
					return s.reshape(u);
				}
				return s;
			},
		}),
		Qc = xn({
			any_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'any', 'bool'),
					o = A(e, r.shape),
					i = o,
					a = dn(i, r.rank);
				null != a && ((r = r.transpose(a)), (i = mn(i.length, r.rank)));
				var s = qt.runKernelFunc(
					function (t) {
						return t.any(r, i);
					},
					{ $x: r }
				);
				if (n) {
					var u = pn(s.shape, o);
					return s.reshape(u);
				}
				return s;
			},
		}),
		Zc = xn({
			argMax_: function (t, e) {
				void 0 === e && (e = 0);
				var r = sn(t, 'x', 'argMax');
				null == e && (e = 0);
				var o = A(e, r.shape),
					n = dn(o, r.rank);
				null != n && ((r = r.transpose(n)), (o = mn(o.length, r.rank)));
				var i = { axis: o[0] },
					a = [r];
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.argMax(r, o[0]);
						return e([r]), n;
					},
					{ x: r },
					function (t, e) {
						var n = e[0];
						return {
							x: function () {
								return Wn(n);
							},
						};
					},
					'ArgMax',
					i,
					a
				);
			},
		}),
		tl = xn({
			argMin_: function (t, e) {
				void 0 === e && (e = 0);
				var r = sn(t, 'x', 'argMin');
				null == e && (e = 0);
				var o = A(e, r.shape),
					n = dn(o, r.rank);
				return (
					null != n && ((r = r.transpose(n)), (o = mn(o.length, r.rank))),
					qt.runKernelFunc(
						function (t, e) {
							var n = t.argMin(r, o[0]);
							return e([r]), n;
						},
						{ $x: r },
						function (t, e) {
							var n = e[0];
							return {
								$x: function () {
									return Wn(n);
								},
							};
						}
					)
				);
			},
		}),
		el = xn({
			logSumExp_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'logSumExp'),
					o = A(e, r.shape),
					i = r.max(o, !0),
					a = r.sub(i).exp().sum(o).log(),
					s = i.reshape(a.shape).add(a);
				if (n) {
					var u = pn(s.shape, o);
					return s.reshape(u);
				}
				return s;
			},
		}),
		nl = xn({
			max_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'max'),
					o = r,
					i = A(e, r.shape),
					a = i,
					s = dn(a, r.rank);
				null != s && ((r = r.transpose(s)), (a = mn(a.length, r.rank)));
				var u = [r],
					c = qt.runKernelFunc(
						function (t, e) {
							var n = t.max(r, a);
							return e([o, n]), n;
						},
						{ x: r },
						function (t, e) {
							return $c(t, e[1], e[0], i, s);
						},
						'Max',
						{ axes: a },
						u,
						[!0]
					);
				if (n) {
					var l = pn(c.shape, i);
					c = c.reshape(l);
				}
				return c;
			},
		}),
		rl = xn({
			mean_: function (t, e, r) {
				void 0 === e && (e = null), void 0 === r && (r = !1);
				var n = sn(t, 'x', 'mean'),
					o = A(e, n.shape),
					i = L(hn(n.shape, o)[1]);
				return ro(function (n) {
					var t = In(i);
					return {
						value: (t.dtype === n.dtype ? n : n.cast(t.dtype)).div(t).sum(e, r),
						gradFunc: function (t) {
							var e = n.shape.slice();
							return (
								o.forEach(function (t) {
									e[t] = 1;
								}),
								t.reshape(e).mul(Fn(n.shape, 'float32')).div(i)
							);
						},
					};
				})(n);
			},
		}),
		ol = xn({
			min_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'min'),
					o = r,
					i = A(e, r.shape),
					a = i,
					s = dn(a, r.rank);
				null != s && ((r = r.transpose(s)), (a = mn(a.length, r.rank)));
				var u = [r],
					c = qt.runKernelFunc(
						function (t, e) {
							var n = t.min(r, a);
							return e([o, n]), n;
						},
						{ x: r },
						function (t, e) {
							return $c(t, e[1], e[0], i, s);
						},
						'Min',
						{ axes: a },
						u,
						[!0]
					);
				if (n) {
					var l = pn(c.shape, i);
					c = c.reshape(l);
				}
				return c;
			},
		}),
		il = xn({
			moments_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = A(e, (t = sn(t, 'x', 'moments')).shape),
					o = t.mean(r, n),
					i = o.shape;
				n || (i = pn(o.shape, r));
				var a = t.toFloat().sub(o.reshape(i)).square();
				return { mean: o, variance: a.mean(r, n) };
			},
		}),
		al = xn({
			sum_: function (t, e, u) {
				void 0 === e && (e = null), void 0 === u && (u = !1);
				var n = sn(t, 'x', 'sum');
				'bool' === n.dtype && (n = n.toInt());
				var c = A(e, n.shape);
				return ro(function (n) {
					var t = dn(c, n.rank),
						e = c,
						r = n;
					null != t && ((r = n.transpose(t)), (e = mn(e.length, n.rank)));
					function o(t) {
						var e = n.shape.slice();
						return (
							c.forEach(function (t) {
								e[t] = 1;
							}),
							t.reshape(e).mul(Fn(n.shape, 'float32'))
						);
					}
					var i = { axes: e },
						a = qt.runKernelFunc(
							function (t) {
								return t.sum(r, e);
							},
							{ x: r },
							function (t) {
								return {
									x: function () {
										return o(t);
									},
								};
							},
							'Sum',
							i
						);
					if (u) {
						var s = pn(a.shape, c);
						a = a.reshape(s);
					}
					return { value: a, gradFunc: o };
				})(n);
			},
		}),
		sl = xn({
			prod_: function (t, e, n) {
				void 0 === e && (e = null), void 0 === n && (n = !1);
				var r = sn(t, 'x', 'prod');
				'bool' === r.dtype && (r = r.toInt());
				var o = A(e, r.shape),
					i = dn(o, r.rank),
					a = o,
					s = r;
				null != i && ((s = r.transpose(i)), (a = mn(a.length, r.rank)));
				var u = qt.runKernelFunc(
					function (t) {
						return t.prod(s, a);
					},
					{ permutedX: s }
				);
				if (n) {
					var c = pn(u.shape, o);
					u = u.reshape(c);
				}
				return u;
			},
		}),
		ul = xn({
			elu_: function (t) {
				var r = sn(t, 'x', 'elu');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.elu(r);
						return e([n]), n;
					},
					{ $x: r },
					function (e, t) {
						var n = t[0];
						return {
							$x: function () {
								return qt.runKernelFunc(
									function (t) {
										return t.eluDer(e, n);
									},
									{ dy: e, y: n }
								);
							},
						};
					}
				);
			},
		}),
		cl = xn({
			leakyRelu_: function (t, e) {
				void 0 === e && (e = 0.2);
				var n = sn(t, 'x', 'leakyRelu');
				return Wu(In(e).mul(n), n);
			},
		}),
		ll = xn({
			prelu_: function (t, e) {
				var r = sn(t, 'x', 'prelu'),
					o = sn(e, 'alpha', 'prelu');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.prelu(r, o);
						return e([r, o]), n;
					},
					{ x: r, alpha: o },
					function (n, t) {
						var r = t[0],
							o = t[1],
							i = r.greater(0);
						return {
							x: function () {
								return Au(i, n, n.mul(o));
							},
							alpha: function () {
								var t = Au(i, Wn(n), n.mul(r)),
									e = fo(o.shape, n.shape);
								return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape);
							},
						};
					},
					'Prelu'
				);
			},
		}),
		hl = xn({
			relu_: function (t) {
				var r = sn(t, 'x', 'relu');
				return 'bool' === r.dtype
					? r.toInt()
					: qt.runKernelFunc(
							function (t, e) {
								var n = t.relu(r);
								return e([r]), n;
							},
							{ x: r },
							function (t, e) {
								var n = e[0];
								return {
									x: function () {
										return t.mulStrict(n.step().toFloat());
									},
								};
							},
							'Relu'
					  );
			},
		}),
		pl = xn({
			relu6_: function (t) {
				var r = sn(t, 'x', 'relu6');
				return 'bool' === r.dtype
					? r.toInt()
					: qt.runKernelFunc(
							function (t, e) {
								var n = t.relu6(r);
								return e([r]), n;
							},
							{ x: r },
							function (t, e) {
								var n = e[0],
									r = n.lessEqual(6).mul(n.step());
								return {
									x: function () {
										return t.mulStrict(r.toFloat());
									},
								};
							},
							'Relu6'
					  );
			},
		}),
		fl = xn({
			selu_: function (t) {
				var r = sn(t, 'x', 'selu');
				return qt.runKernelFunc(
					function (t, e) {
						var n = t.selu(r);
						return e([r]), n;
					},
					{ $x: r },
					function (i, t) {
						var a = t[0];
						return {
							$x: function () {
								var t = a.greater(In(0)),
									e = In(cs),
									n = In(ls),
									r = i.mul(n),
									o = i.mul(e).mul(a.toFloat().exp());
								return Au(t, r, o);
							},
						};
					}
				);
			},
		}),
		dl = xn({
			transpose_: function (t, n) {
				var e = sn(t, 'x', 'transpose');
				if (
					(null == n &&
						(n = e.shape
							.map(function (t, e) {
								return e;
							})
							.reverse()),
					P(e.rank === n.length, function () {
						return (
							'Error in transpose: rank of input ' +
							e.rank +
							' must match length of perm ' +
							n +
							'.'
						);
					}),
					n.forEach(function (t) {
						P(0 <= t && t < e.rank, function () {
							return (
								"All entries in 'perm' must be between 0 and " +
								(e.rank - 1) +
								' but got ' +
								n
							);
						});
					}),
					e.rank <= 1)
				)
					return e.clone();
				var r = { perm: n };
				return qt.runKernelFunc(
					function (t) {
						return t.transpose(e, n);
					},
					{ x: e },
					function (t) {
						var e = vn(n);
						return {
							x: function () {
								return t.transpose(e);
							},
						};
					},
					'Transpose',
					r
				);
			},
		}),
		vl = xn({
			localResponseNormalization_: function (t, o, i, a, s) {
				void 0 === o && (o = 5),
					void 0 === i && (i = 1),
					void 0 === a && (a = 1),
					void 0 === s && (s = 0.5);
				var e = sn(t, 'x', 'localResponseNormalization');
				P(4 === e.rank || 3 === e.rank, function () {
					return (
						'Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ' +
						e.rank +
						'.'
					);
				}),
					P(B(o), function () {
						return (
							'Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ' +
							o +
							'.'
						);
					});
				var r = e,
					n = !1;
				3 === e.rank &&
					((n = !0), (r = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])));
				var u = qt.runKernelFunc(
					function (t, e) {
						var n = t.localResponseNormalization4D(r, o, i, a, s);
						return e([r, n]), n;
					},
					{ x4D: r },
					function (e, t) {
						var n = t[0],
							r = t[1];
						return {
							x4D: function () {
								return qt.runKernelFunc(function (t) {
									return t.LRNGrad(e, n, r, o, i, a, s);
								}, {});
							},
						};
					}
				);
				return n ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
			},
		}),
		ml = xn({
			norm_: function (t, e, n, r) {
				void 0 === e && (e = 'euclidean'),
					void 0 === n && (n = null),
					void 0 === r && (r = !1);
				var o = (function t(e, n, r) {
						if ((void 0 === r && (r = null), 0 === e.rank)) return e.abs();
						if (1 !== e.rank && null === r) return t(e.reshape([-1]), n, r);
						if (
							1 === e.rank ||
							'number' == typeof r ||
							(Array.isArray(r) && 1 === r.length)
						) {
							if (1 === n) return e.abs().sum(r);
							if (n === 1 / 0) return e.abs().max(r);
							if (n === -1 / 0) return e.abs().min(r);
							if ('euclidean' === n || 2 === n)
								return e.abs().pow(In(2, 'int32')).sum(r).sqrt();
							throw new Error('Error in norm: invalid ord value: ' + n);
						}
						if (Array.isArray(r) && 2 === r.length) {
							if (1 === n)
								return e
									.abs()
									.sum(r[0])
									.max(r[1] - 1);
							if (n === 1 / 0) return e.abs().sum(r[1]).max(r[0]);
							if (n === -1 / 0) return e.abs().sum(r[1]).min(r[0]);
							if ('fro' === n || 'euclidean' === n)
								return e.square().sum(r).sqrt();
							throw new Error('Error in norm: invalid ord value: ' + n);
						}
						throw new Error('Error in norm: invalid axis: ' + r);
					})((t = sn(t, 'x', 'norm')), e, n),
					i = o.shape;
				if (r) {
					var a = A(n, t.shape);
					i = pn(o.shape, a);
				}
				return o.reshape(i);
			},
		}),
		gl = xn({
			basicLSTMCell_: function (t, e, n, r, o, i) {
				var a = sn(t, 'forgetBias', 'basicLSTMCell'),
					s = sn(e, 'lstmKernel', 'basicLSTMCell'),
					u = sn(n, 'lstmBias', 'basicLSTMCell'),
					c = sn(r, 'data', 'basicLSTMCell'),
					l = sn(o, 'c', 'basicLSTMCell'),
					h = sn(i, 'h', 'basicLSTMCell'),
					p = c.concat(h, 1).matMul(s).add(u),
					f = p.shape[0],
					d = p.shape[1] / 4,
					v = [f, d],
					m = p.slice([0, 0], v),
					g = p.slice([0, d], v),
					y = p.slice([0, 2 * d], v),
					x = p.slice([0, 3 * d], v),
					b = m
						.sigmoid()
						.mulStrict(g.tanh())
						.addStrict(l.mulStrict(a.add(y).sigmoid())),
					w = b.tanh().mulStrict(x.sigmoid());
				return [b, w];
			},
		}),
		yl = xn({
			multiRNNCell_: function (t, e, n, r) {
				for (
					var o = sn(e, 'data', 'multiRNNCell'),
						i = un(n, 'c', 'multiRNNCell'),
						a = un(r, 'h', 'multiRNNCell'),
						s = o,
						u = [],
						c = 0;
					c < t.length;
					c++
				) {
					var l = t[c](s, i[c], a[c]);
					u.push(l[0]), u.push(l[1]), (s = l[1]);
				}
				var h = [],
					p = [];
				for (c = 0; c < u.length; c += 2) h.push(u[c]), p.push(u[c + 1]);
				return [h, p];
			},
		}),
		xl = xn({
			movingAverage_: function (t, e, n, r, o) {
				void 0 === o && (o = !0);
				var i = sn(t, 'v', 'movingAverage'),
					a = sn(e, 'x', 'movingAverage'),
					s = sn(n, 'decay', 'movingAverage');
				Bt(i, a),
					P(D(i.shape, a.shape), function () {
						return 'Shape mismatch in v and x';
					});
				var u = In(1),
					c = u.sub(s),
					l = a.sub(i).mul(c);
				if (o) {
					P(null != r, function () {
						return 'When using zeroDebias: true, step is required.';
					});
					var h = sn(r, 'step', 'movingAverage');
					l = l.div(u.sub(Ku(s, h)));
				}
				return i.add(l);
			},
		}),
		bl = xn({
			stridedSlice_: function (t, e, n, r, o, i, a, s, u) {
				if (
					(void 0 === o && (o = 0),
					void 0 === i && (i = 0),
					void 0 === a && (a = 0),
					void 0 === s && (s = 0),
					void 0 === u && (u = 0),
					null == r && (r = new Array(e.length)),
					0 !== a)
				)
					throw new Error('ellipsis mask is not yet supported');
				var c = sn(t, 'x', 'stridedSlice'),
					l = Yr(s),
					h = c.shape.slice();
				l.forEach(function (t) {
					(e[t] = 0), (n[t] = 1), h.splice(t, 0, 1);
				}),
					(c = c.reshape(h));
				for (var p = 0; p < c.rank; p++)
					(e[p] = Jr(o, e, r, c.shape, p)),
						(n[p] = Qr(i, n, r, c.shape, p)),
						(r[p] = r[p] || 1);
				var f = Yr(u);
				f.forEach(function (t) {
					(n[t] = e[t] + 1), (r[t] = 1);
				});
				var d = $r(e, n, r),
					v = d.filter(function (t, e) {
						return -1 === f.indexOf(e);
					});
				return r.every(function (t) {
					return 1 === t;
				})
					? qc(c, e, d).reshape(v)
					: qt
							.runKernelFunc(
								function (t) {
									return t.stridedSlice(c, e, n, r);
								},
								{ $x: c }
							)
							.reshape(v);
			},
		}),
		wl = xn({
			topk_: function (t, e, n) {
				void 0 === e && (e = 1), void 0 === n && (n = !0);
				var r = sn(t, 'x', 'topk');
				if (0 === r.rank)
					throw new Error('topk() expects the input to be of rank 1 or higher');
				var o = r.shape[r.shape.length - 1];
				if (o < e)
					throw new Error(
						"'k' passed to topk() must be <= the last dimension (" +
							o +
							') but got ' +
							e
					);
				var i = qt.runKernelFunc(
					function (t) {
						return t.topk(r, e, n);
					},
					{ $x: r }
				);
				return { values: i[0], indices: i[1] };
			},
		}),
		Cl = xn({
			scatterND_: function (t, e, n) {
				var r = sn(t, 'indices', 'scatterND', 'int32'),
					o = sn(e, 'updates', 'scatterND');
				return (
					qr(o, r, n),
					qt.runKernelFunc(
						function (t) {
							return t.scatterND(r, o, n);
						},
						{ indices: r, updates: o },
						null,
						'ScatterNd',
						{ shape: n }
					)
				);
			},
		}),
		El = xn({
			fft_: function (t) {
				P('complex64' === t.dtype, function () {
					return (
						'The dtype for tf.spectral.fft() must be complex64 but got ' +
						t.dtype +
						'.'
					);
				});
				var e = t.shape[t.shape.length - 1],
					n = t.size / e,
					r = t.as2D(n, e);
				return qt
					.runKernelFunc(
						function (t) {
							return t.fft(r);
						},
						{ input: t }
					)
					.reshape(t.shape);
			},
		}),
		_l = xn({
			ifft_: function (t) {
				P('complex64' === t.dtype, function () {
					return (
						'The dtype for tf.spectral.ifft() must be complex64 but got ' +
						t.dtype +
						'.'
					);
				});
				var e = t.shape[t.shape.length - 1],
					n = t.size / e,
					r = t.as2D(n, e);
				return qt
					.runKernelFunc(
						function (t) {
							return t.ifft(r);
						},
						{ input: t }
					)
					.reshape(t.shape);
			},
		}),
		Il = xn({
			rfft_: function (t, e) {
				P('float32' === t.dtype, function () {
					return 'The dtype for rfft() must be real value but got ' + t.dtype;
				});
				var n,
					r = t.shape[t.shape.length - 1],
					o = t.size / r;
				if (null != e && e < r) {
					var i = t.shape.map(function (t) {
							return 0;
						}),
						a = t.shape.map(function (t) {
							return t;
						});
					(a[t.shape.length - 1] = e), (n = t.slice(i, a)), (r = e);
				} else if (null != e && r < e) {
					var s = t.shape.map(function (t) {
						return t;
					});
					(s[t.shape.length - 1] = e - r),
						(n = t.concat(Mn(s), t.shape.length - 1)),
						(r = e);
				} else n = t;
				var u = n.zerosLike(),
					c = bn(n, u).as2D(o, r),
					l = El(c),
					h = Math.floor(r / 2) + 1,
					p = wn(l),
					f = Cn(l),
					d = p.split([h, r - h], p.shape.length - 1),
					v = f.split([h, r - h], f.shape.length - 1),
					m = n.shape.slice();
				return (m[n.shape.length - 1] = h), bn(d[0], v[0]).reshape(m);
			},
		}),
		Rl = xn({
			irfft_: function (t) {
				var e = t.shape[t.shape.length - 1],
					n = t.size / e;
				if (e <= 2) {
					var r = t.as2D(n, e),
						o = _l(r);
					return wn(o);
				}
				var i = [n, 2 * (e - 1)],
					a = wn(t).as2D(n, e),
					s = Cn(t).as2D(n, e),
					u = a.slice([0, 1], [n, e - 2]).reverse(1),
					c = s
						.slice([0, 1], [n, e - 2])
						.reverse(1)
						.mul(In(-1)),
					l = a.concat(u, 1),
					h = s.concat(c, 1);
				return (r = bn(l, h).as2D(i[0], i[1])), (o = _l(r)), wn(o);
			},
		}),
		kl = Object.freeze({ fft: El, ifft: _l, rfft: Il, irfft: Rl }),
		Sl = xn({
			sparseToDense_: function (t, e, n, r) {
				void 0 === r && (r = 0);
				var o = sn(t, 'sparseIndices', 'sparseToDense', 'int32'),
					i = sn(e, 'sparseValues', 'sparseToDense'),
					a = sn(r, 'defaultValue', 'sparseToDense', i.dtype);
				return (
					(function (t, e, n, r) {
						if ('int32' !== t.dtype)
							throw new Error(
								'tf.sparseToDense() expects the indices to be int32 type, but the dtype was ' +
									t.dtype +
									'.'
							);
						if (2 < t.rank)
							throw new Error(
								'sparseIndices should be a scalar, vector, or matrix, but got shape ' +
									t.shape +
									'.'
							);
						var o = 0 < t.rank ? t.shape[0] : 1,
							i = 1 < t.rank ? t.shape[1] : 1;
						if (n.length !== i)
							throw new Error(
								'outputShape has incorrect number of elements:, ' +
									n.length +
									', should be: ' +
									i +
									'.'
							);
						var a = e.size;
						if (0 !== e.rank && (1 !== e.rank || a !== o))
							throw new Error(
								'sparseValues has incorrect shape ' +
									e.shape +
									', should be [] or [' +
									o +
									']'
							);
						if (e.dtype !== r.dtype)
							throw new Error(
								'sparseValues.dtype must match defaultValues.dtype'
							);
					})(o, i, n, a),
					qt.runKernelFunc(
						function (t) {
							return t.sparseToDense(o, i, n, a);
						},
						{ $sparseIndices: o, $sparseValues: i, $defaultValue: a }
					)
				);
			},
		}),
		Dl = xn({
			gatherND_: function (t, e) {
				var n = sn(e, 'indices', 'gatherND', 'int32'),
					r = sn(t, 'x', 'gatherND');
				return qt.runKernelFunc(
					function (t) {
						return t.gatherND(r, n);
					},
					{ x: r, indices: n },
					null,
					'GatherNd'
				);
			},
		}),
		Al = xn({
			diag_: function (t) {
				var e = sn(t, 'x', 'diag').flatten(),
					n = t.shape.concat(t.shape);
				return qt
					.runKernelFunc(
						function (t) {
							return t.diag(e);
						},
						{ $x: e }
					)
					.reshape(n);
			},
		}),
		Tl = xn({
			dropout_: function (t, e, n, r) {
				var o = sn(t, 'x', 'dropout');
				if (
					(P('float32' === o.dtype, function () {
						return (
							"x has to be a floating point tensor since it's going to be scaled, but got a " +
							o.dtype +
							' tensor instead.'
						);
					}),
					P(0 <= e && e < 1, function () {
						return (
							'rate must be a float in the range [0, 1), but got ' + e + '.'
						);
					}),
					0 === e)
				)
					return t instanceof yt ? o.clone() : o;
				var i = (function (t, e) {
						if (null == e) return t.shape.slice();
						if (D(t.shape, e)) return e;
						if (t.shape.length !== e.length) return e;
						for (var n = [], r = 0; r < t.shape.length; r++)
							null == e[r] && null != t.shape[r]
								? n.push(t.shape[r])
								: n.push(e[r]);
						return n;
					})(o, n),
					a = 1 - e,
					s = Sr(i, 0, 1, 'float32', r).add(a).floor().div(a);
				return o.mul(s);
			},
		});
	function Nl(t, e, n) {
		for (var r = 1 - (t % 2), o = new Float32Array(t), i = 0; i < t; ++i) {
			var a = (2 * Math.PI * i) / (t + r - 1);
			o[i] = e - n * Math.cos(a);
		}
		return Rn(o, 'float32');
	}
	function Fl(v, m, g) {
		return (
			void 0 === g && (g = 1),
			y(this, void 0, void 0, function () {
				var e, n, r, o, i, a, s, u, c, l, h, p, f, d;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return (
								(e = sn(v, 'predictions', 'inTopK')),
								(n = sn(m, 'targets', 'inTopK')),
								P(1 < e.rank, function () {
									return (
										'inTopK() expects the predictions to be of rank 2 or higher, but got ' +
										e.rank
									);
								}),
								P(e.rank - 1 === n.rank, function () {
									return (
										'predictions rank should be 1 larger than targets rank, but got predictions rank ' +
										e.rank +
										' and targets rank ' +
										n.rank
									);
								}),
								x(
									e.shape.slice(0, e.shape.length - 1),
									n.shape,
									"predictions's shape should be align with the targets' shape, except the last dimension."
								),
								(r = e.shape[e.shape.length - 1]),
								P(0 < g && g <= r, function () {
									return (
										"'k' passed to inTopK() must be > 0 && <= the predictions last dimension (" +
										r +
										'), but got ' +
										g
									);
								}),
								[4, e.data()]
							);
						case 1:
							return (o = t.sent()), [4, n.data()];
						case 2:
							for (
								i = t.sent(),
									a = [o.length / r, r],
									u = a[1],
									c = N('bool', (s = a[0])),
									l = 0;
								l < s;
								l++
							) {
								for (
									h = l * u, p = o.subarray(h, h + u), f = [], d = 0;
									d < p.length;
									d++
								)
									f.push({ value: p[d], index: d });
								for (
									f.sort(function (t, e) {
										return e.value - t.value;
									}),
										c[l] = 0,
										d = 0;
									d < g;
									d++
								)
									if (f[d].index === i[l]) {
										c[l] = 1;
										break;
									}
							}
							return (
								v !== e && e.dispose(),
								m !== n && n.dispose(),
								[2, En(c, n.shape, 'bool')]
							);
					}
				});
			})
		);
	}
	var Ml,
		Ol,
		Pl = xn({
			hannWindow_: function (t) {
				return Nl(t, 0.5, 0.5);
			},
		}),
		Bl = xn({
			hammingWindow_: function (t) {
				return Nl(t, 0.54, 0.46);
			},
		}),
		Ll = xn({
			frame_: function (t, e, n, r, o) {
				void 0 === r && (r = !1), void 0 === o && (o = 0);
				for (var i = 0, a = []; i + e <= t.size; )
					a.push(qc(t, i, e)), (i += n);
				if (r)
					for (; i < t.size; ) {
						var s = i + e - t.size,
							u = zn([qc(t, i, e - s), On([s], o)]);
						a.push(u), (i += n);
					}
				return 0 === a.length ? kn([], [0, e]) : zn(a).as2D(a.length, e);
			},
		}),
		Wl = xn({
			stft_: function (t, e, n, r, o) {
				var i;
				void 0 === o && (o = Pl),
					null == r &&
						((i = e),
						(r = Math.floor(
							Math.pow(2, Math.ceil(Math.log(i) / Math.log(2)))
						)));
				for (
					var a = Ll(t, e, n), s = qu(a, o(e)), u = [], c = 0;
					c < a.shape[0];
					c++
				)
					u.push(Il(s.slice([c, 0], [1, e]), r));
				return zn(u);
			},
		}),
		zl = Object.freeze({
			hannWindow: Pl,
			hammingWindow: Bl,
			frame: Ll,
			stft: Wl,
		});
	((Ol = Ml = Ml || {})[(Ol.NONE = 0)] = 'NONE'),
		(Ol[(Ol.MEAN = 1)] = 'MEAN'),
		(Ol[(Ol.SUM = 2)] = 'SUM'),
		(Ol[(Ol.SUM_BY_NONZERO_WEIGHTS = 3)] = 'SUM_BY_NONZERO_WEIGHTS');
	var Ul = xn({
			absoluteDifference_: function (t, e, n, r) {
				void 0 === r && (r = Ml.SUM_BY_NONZERO_WEIGHTS);
				var o = sn(t, 'labels', 'absoluteDifference'),
					i = sn(e, 'predictions', 'absoluteDifference'),
					a = null;
				null != n && (a = sn(n, 'weights', 'absoluteDifference')),
					x(o.shape, i.shape, 'Error in absoluteDifference: ');
				var s = o.sub(i).abs();
				return Vl(s, a, r);
			},
		}),
		Vl = xn({
			computeWeightedLoss_: function (t, e, n) {
				void 0 === n && (n = Ml.SUM_BY_NONZERO_WEIGHTS);
				var r = sn(t, 'losses', 'computeWeightedLoss'),
					o = null;
				null != e && (o = sn(e, 'weights', 'computeWeightedLoss'));
				var i = null == o ? r : r.mul(o);
				if (n === Ml.NONE) return i;
				if (n === Ml.SUM) return i.sum();
				if (n === Ml.MEAN) {
					if (null == o) return i.mean();
					var a = r.size / o.size,
						s = i.sum().div(o.sum());
					return 1 < a ? s.div(In(a)) : s;
				}
				if (n !== Ml.SUM_BY_NONZERO_WEIGHTS)
					throw Error('Unknown reduction: ' + n);
				if (null == o) return i.sum().div(In(r.size));
				var u = o.mul(Fn(r.shape)).notEqual(In(0)).sum().toFloat();
				return i.sum().div(u);
			},
		}),
		Gl = xn({
			cosineDistance_: function (t, e, n, r, o) {
				void 0 === o && (o = Ml.SUM_BY_NONZERO_WEIGHTS);
				var i = sn(t, 'labels', 'cosineDistance'),
					a = sn(e, 'predictions', 'cosineDistance'),
					s = null;
				null != r && (s = sn(r, 'weights', 'cosineDistance')),
					x(i.shape, a.shape, 'Error in cosineDistance: ');
				var u = In(1).sub(i.mul(a).sum(n, !0));
				return Vl(u, s, o);
			},
		}),
		Hl = xn({
			hingeLoss_: function (t, e, n, r) {
				void 0 === r && (r = Ml.SUM_BY_NONZERO_WEIGHTS);
				var o = sn(t, 'labels', 'hingeLoss'),
					i = sn(e, 'predictions', 'hingeLoss'),
					a = null;
				null != n && (a = sn(n, 'weights', 'hingeLoss')),
					x(o.shape, i.shape, 'Error in hingeLoss: ');
				var s = In(1);
				o = In(2).mul(o).sub(s);
				var u = s.sub(o.mul(i)).relu();
				return Vl(u, a, r);
			},
		}),
		ql = xn({
			huberLoss_: function (t, e, n, r, o) {
				void 0 === r && (r = 1),
					void 0 === o && (o = Ml.SUM_BY_NONZERO_WEIGHTS);
				var i = sn(t, 'labels', 'huberLoss'),
					a = sn(e, 'predictions', 'huberLoss'),
					s = null;
				null != n && (s = sn(n, 'weights', 'huberLoss')),
					x(i.shape, a.shape, 'Error in huberLoss: ');
				var u = In(r),
					c = a.sub(i).abs(),
					l = Uu(c, u),
					h = c.sub(l),
					p = In(0.5).mul(l.square()).add(u.mul(h));
				return Vl(p, s, o);
			},
		}),
		jl = xn({
			logLoss_: function (t, e, n, r, o) {
				void 0 === r && (r = 1e-7),
					void 0 === o && (o = Ml.SUM_BY_NONZERO_WEIGHTS);
				var i = sn(t, 'labels', 'logLoss'),
					a = sn(e, 'predictions', 'logLoss'),
					s = null;
				null != n && (s = sn(n, 'weights', 'logLoss')),
					x(i.shape, a.shape, 'Error in logLoss: ');
				var u = In(1),
					c = In(r),
					l = i
						.mul(a.add(c).log())
						.neg()
						.sub(u.sub(i).mul(u.sub(a).add(c).log()));
				return Vl(l, s, o);
			},
		}),
		Kl = xn({
			meanSquaredError_: function (t, e, n, r) {
				void 0 === r && (r = Ml.SUM_BY_NONZERO_WEIGHTS);
				var o = sn(t, 'labels', 'meanSquaredError'),
					i = sn(e, 'predictions', 'meanSquaredError'),
					a = null;
				null != n && (a = sn(n, 'weights', 'meanSquaredError')),
					x(o.shape, i.shape, 'Error in meanSquaredError: ');
				var s = o.squaredDifference(i);
				return Vl(s, a, r);
			},
		}),
		Xl = xn({
			sigmoidCrossEntropy_: function (t, e, n, r, o) {
				void 0 === r && (r = 0),
					void 0 === o && (o = Ml.SUM_BY_NONZERO_WEIGHTS);
				var s = sn(t, 'multiClassLabels', 'sigmoidCrossEntropy'),
					i = sn(e, 'logits', 'sigmoidCrossEntropy'),
					a = null;
				if (
					(null != n && (a = sn(n, 'weights', 'sigmoidCrossEntropy')),
					x(s.shape, i.shape, 'Error in sigmoidCrossEntropy: '),
					0 < r)
				) {
					var u = In(r),
						c = In(1),
						l = In(0.5);
					s = s.mul(c.sub(u)).add(l.mul(u));
				}
				var h = (function (t, e) {
					var n = sn(s, 'labels', 'sigmoidCrossEntropyWithLogits'),
						r = sn(e, 'logits', 'sigmoidCrossEntropyWithLogits');
					x(n.shape, r.shape, 'Error in sigmoidCrossEntropyWithLogits: ');
					var o = r.relu(),
						i = r.mul(n),
						a = r.abs().neg().exp().log1p();
					return o.sub(i).add(a);
				})(0, i);
				return Vl(h, a, o);
			},
		}),
		Yl = xn({
			softmaxCrossEntropy_: function (t, e, n, r, o) {
				void 0 === r && (r = 0),
					void 0 === o && (o = Ml.SUM_BY_NONZERO_WEIGHTS);
				var i = sn(t, 'onehotLabels', 'softmaxCrossEntropy'),
					a = sn(e, 'logits', 'softmaxCrossEntropy'),
					s = null;
				if (
					(null != n && (s = sn(n, 'weights', 'softmaxCrossEntropy')),
					x(i.shape, a.shape, 'Error in softmaxCrossEntropy: '),
					0 < r)
				) {
					var u = In(r),
						c = In(1),
						l = In(i.shape[1]);
					i = i.mul(c.sub(u)).add(u.div(l));
				}
				var h = (function (t, e, i) {
					if (
						(void 0 === i && (i = -1),
						-1 === i && (i = e.rank - 1),
						i !== e.rank - 1)
					)
						throw Error(
							'Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ' +
								e.rank +
								' and dim was ' +
								i
						);
					return ro(function (t, e, n) {
						var r = e.logSumExp([i], !0),
							o = e.toFloat().sub(r);
						return (
							n([t, o]),
							{
								value: o.mul(t).neg().sum([i]),
								gradFunc: function (t, e) {
									var n = e[0],
										r = e[1],
										o = pn(t.shape, [i]);
									return [
										t.reshape(o).mul(n.toFloat().sub(r.exp())),
										t.reshape(o).mul(r.exp().sub(n.toFloat())),
									];
								},
							}
						);
					})(t, e);
				})(i, a);
				return Vl(h, s, o);
			},
		}),
		$l = Object.freeze({
			get Reduction() {
				return Ml;
			},
			absoluteDifference: Ul,
			computeWeightedLoss: Vl,
			cosineDistance: Gl,
			hingeLoss: Hl,
			huberLoss: ql,
			logLoss: jl,
			meanSquaredError: Kl,
			sigmoidCrossEntropy: Xl,
			softmaxCrossEntropy: Yl,
		});
	function Jl(r, o) {
		return (
			void 0 === o && (o = !1),
			qt.tidy(function () {
				if (2 !== r.shape.length)
					throw new Error(
						'qr2d() requires a 2D Tensor, but got a ' +
							r.shape.length +
							'D Tensor.'
					);
				for (
					var f = r.shape[0],
						d = r.shape[1],
						v = gr(f),
						m = r.clone(),
						g = kn([[1]], [1, 1]),
						y = g.clone(),
						t = d <= f ? d : f,
						e = function (p) {
							var t,
								e = m,
								n = y,
								r = v;
							(y = (t = qt.tidy(function () {
								var t = m.slice([p, p], [f - p, 1]),
									e = t.norm(),
									n = m.slice([p, p], [1, 1]),
									r = kn([[-1]]).where(n.greater(0), kn([[1]])),
									o = n.sub(r.mul(e)),
									i = t.div(o);
								y =
									1 === i.shape[0]
										? g.clone()
										: g.concat(
												i.slice([1, 0], [i.shape[0] - 1, i.shape[1]]),
												0
										  );
								var a = r.matMul(o).div(e).neg(),
									s = m.slice([p, 0], [f - p, d]),
									u = a.mul(y);
								if (0 === p) m = s.sub(u.matMul(y.transpose().matMul(s)));
								else {
									var c = s.sub(u.matMul(y.transpose().matMul(s)));
									m = m.slice([0, 0], [p, d]).concat(c, 0);
								}
								var l = v.slice([0, p], [f, v.shape[1] - p]);
								if (0 === p) v = l.sub(l.matMul(y).matMul(u.transpose()));
								else {
									var h = l.sub(l.matMul(y).matMul(u.transpose()));
									v = v.slice([0, 0], [f, p]).concat(h, 1);
								}
								return [y, m, v];
							}))[0]),
								(m = t[1]),
								(v = t[2]),
								en([e, n, r]);
						},
						n = 0;
					n < t;
					++n
				)
					e(n);
				return (
					!o &&
						d < f &&
						((v = v.slice([0, 0], [f, d])), (m = m.slice([0, 0], [d, d]))),
					[v, m]
				);
			})
		);
	}
	var Ql = xn({
			bandPart_: function (t, e, n) {
				if (e % 1 != 0)
					throw new Error(
						'bandPart(): numLower must be an integer, got ' + e + '.'
					);
				if (n % 1 != 0)
					throw new Error(
						'bandPart(): numUpper must be an integer, got ' + n + '.'
					);
				var r = sn(t, 'a', 'bandPart');
				if (r.rank < 2)
					throw new Error(
						'bandPart(): Rank must be at least 2, got ' + r.rank + '.'
					);
				var o = r.shape,
					i = r.shape.slice(-2),
					a = i[0],
					s = i[1];
				if (!(e <= a))
					throw new Error(
						'bandPart(): numLower (' +
							e +
							') must not be greater than the number of rows (' +
							a +
							').'
					);
				if (!(n <= s))
					throw new Error(
						'bandPart(): numUpper (' +
							n +
							') must not be greater than the number of columns (' +
							s +
							').'
					);
				e < 0 && (e = a), n < 0 && (n = s);
				var u = Bn(0, a, 1, 'int32').reshape([-1, 1]),
					c = Bn(0, s, 1, 'int32'),
					l = Ju(u, c),
					h = Ru(l.lessEqual(In(+e, 'int32')), l.greaterEqual(In(-n, 'int32'))),
					p = Mn([a, s], r.dtype);
				return Nr(
					Or(r.reshape([-1, a, s])).map(function (t) {
						return Au(h, t, p);
					})
				).reshape(o);
			},
		}),
		Zl = xn({
			gramSchmidt_: function (e) {
				var t;
				if (Array.isArray(e)) {
					(t = !1),
						P(null != e && 0 < e.length, function () {
							return 'Gram-Schmidt process: input must not be null, undefined, or empty';
						});
					for (
						var n = e[0].shape[0],
							r = function (t) {
								P(e[t].shape[0] === n, function () {
									return (
										'Gram-Schmidt: Non-unique lengths found in the input vectors: (' +
										e[t].shape[0] +
										' vs. ' +
										n +
										')'
									);
								});
							},
							o = 1;
						o < e.length;
						++o
					)
						r(o);
				} else
					(t = !0),
						(e = qn(e, e.shape[0], 0).map(function (t) {
							return Tr(t, [0]);
						}));
				P(e.length <= e[0].shape[0], function () {
					return (
						'Gram-Schmidt: Number of vectors (' +
						e.length +
						') exceeds number of dimensions (' +
						e[0].shape[0] +
						').'
					);
				});
				function i(r) {
					a.push(
						qt.tidy(function () {
							var t = s[r];
							if (0 < r)
								for (var e = 0; e < r; ++e) {
									var n = al(a[e].mulStrict(t)).mul(a[e]);
									t = t.sub(n);
								}
							return t.div(ml(t, 'euclidean'));
						})
					);
				}
				var a = [],
					s = e;
				for (o = 0; o < e.length; ++o) i(o);
				return t ? Nr(a, 0) : a;
			},
		}),
		th = xn({
			qr_: function (t, o) {
				if ((void 0 === o && (o = !1), t.rank < 2))
					throw new Error(
						'qr() requires input tensor to have a rank >= 2, but got rank ' +
							t.rank
					);
				if (2 === t.rank) return Jl(t, o);
				var e = t.shape.slice(0, t.shape.length - 2).reduce(function (t, e) {
						return t * e;
					}),
					n = Or(
						t.reshape([
							e,
							t.shape[t.shape.length - 2],
							t.shape[t.shape.length - 1],
						]),
						0
					),
					i = [],
					a = [];
				return (
					n.forEach(function (t) {
						var e = Jl(t, o),
							n = e[0],
							r = e[1];
						i.push(n), a.push(r);
					}),
					[Nr(i, 0).reshape(t.shape), Nr(a, 0).reshape(t.shape)]
				);
			},
		}),
		eh = Object.freeze({ bandPart: Ql, gramSchmidt: Zl, qr: th });
	function nh(t, e, n, r, o, i) {
		null == r && (r = 0.5),
			null == o && (o = Number.NEGATIVE_INFINITY),
			null == i && (i = 0);
		var a = t.shape[0];
		return (
			(n = Math.min(n, a)),
			P(0 <= r && r <= 1, function () {
				return "iouThreshold must be in [0, 1], but was '" + r + "'";
			}),
			P(2 === t.rank, function () {
				return "boxes must be a 2D tensor, but was of rank '" + t.rank + "'";
			}),
			P(4 === t.shape[1], function () {
				return 'boxes must have 4 columns, but 2nd dimension was ' + t.shape[1];
			}),
			P(1 === e.rank, function () {
				return 'scores must be a 1D tensor';
			}),
			P(e.shape[0] === a, function () {
				return (
					'scores has incompatible shape with boxes. Expected ' +
					a +
					', but was ' +
					e.shape[0]
				);
			}),
			P(0 <= i && i <= 1, function () {
				return "softNmsSigma must be in [0, 1], but was '" + i + "'";
			}),
			{ maxOutputSize: n, iouThreshold: r, scoreThreshold: o, softNmsSigma: i }
		);
	}
	function rh(t, e) {
		return !(0 < t) || 'linear' === e;
	}
	function oh(t, e, n) {
		if (null == n || 'linear' === n) return t;
		if ('relu' === n) return t.mul(e.step());
		throw new Error(
			'Gradient for activation ' + n + ' has not been implemented yet.'
		);
	}
	function ih(t, e) {
		var n = e,
			r = fo(t.shape, e.shape);
		return 0 < r.length && (n = n.sum(r)), n.reshape(t.shape);
	}
	function ah(t, e, n) {
		if ('linear' === e) return t;
		if ('relu' === e) return hl(t);
		if ('elu' === e) return ul(t);
		if ('relu6' === e) return pl(t);
		if ('prelu' === e) return ll(t, n);
		throw new Error('Unknown fused activation ' + e + '.');
	}
	var sh = xn({
			resizeBilinear_: function (t, e, r) {
				void 0 === r && (r = !1);
				var n = sn(t, 'images', 'resizeBilinear');
				P(3 === n.rank || 4 === n.rank, function () {
					return (
						'Error in resizeBilinear: x must be rank 3 or 4, but got rank ' +
						n.rank +
						'.'
					);
				}),
					P(2 === e.length, function () {
						return (
							'Error in resizeBilinear: new shape must 2D, but got shape ' +
							e +
							'.'
						);
					});
				var o = n,
					i = !1;
				3 === n.rank &&
					((i = !0), (o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2])));
				var a = e[0],
					s = e[1],
					u = qt.runKernelFunc(
						function (t, e) {
							return e([o]), t.resizeBilinear(o, a, s, r);
						},
						{ x: o },
						function (e, n) {
							return {
								x: function () {
									return qt.runKernelFunc(function (t) {
										return t.resizeBilinearBackprop(e, n[0], r);
									}, {});
								},
							};
						},
						'ResizeBilinear',
						{ alignCorners: r, newHeight: a, newWidth: s }
					);
				return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
			},
		}),
		uh = xn({
			resizeNearestNeighbor_: function (t, e, r) {
				void 0 === r && (r = !1);
				var n = sn(t, 'images', 'resizeNearestNeighbor');
				P(3 === n.rank || 4 === n.rank, function () {
					return (
						'Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ' +
						n.rank +
						'.'
					);
				}),
					P(2 === e.length, function () {
						return (
							'Error in resizeNearestNeighbor: new shape must 2D, but got shape ' +
							e +
							'.'
						);
					}),
					P('float32' === n.dtype || 'int32' === n.dtype, function () {
						return '`images` must have `int32` or `float32` as dtype';
					});
				var o = n,
					i = !1;
				3 === n.rank &&
					((i = !0), (o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2])));
				var a = e[0],
					s = e[1],
					u = qt.runKernelFunc(
						function (t, e) {
							return e([o]), t.resizeNearestNeighbor(o, a, s, r);
						},
						{ batchImages: o },
						function (e, n) {
							return {
								batchImages: function () {
									return qt.runKernelFunc(function (t) {
										return t.resizeNearestNeighborBackprop(e, n[0], r);
									}, {});
								},
							};
						}
					);
				return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u;
			},
		}),
		ch = xn({
			nonMaxSuppression_: function (t, e, n, r, o) {
				void 0 === r && (r = 0.5),
					void 0 === o && (o = Number.NEGATIVE_INFINITY);
				var i = sn(t, 'boxes', 'nonMaxSuppression'),
					a = sn(e, 'scores', 'nonMaxSuppression'),
					s = nh(i, a, n, r, o);
				(n = s.maxOutputSize), (r = s.iouThreshold), (o = s.scoreThreshold);
				var u = { maxOutputSize: n, iouThreshold: r, scoreThreshold: o };
				return qt.runKernelFunc(
					function (t) {
						return t.nonMaxSuppression(i, a, n, r, o);
					},
					{ boxes: i, scores: a },
					null,
					'NonMaxSuppressionV3',
					u
				);
			},
		}),
		lh = xn({
			nonMaxSuppressionWithScore_: function (t, e, n, r, o, i) {
				void 0 === r && (r = 0.5),
					void 0 === o && (o = Number.NEGATIVE_INFINITY),
					void 0 === i && (i = 0);
				var a = sn(t, 'boxes', 'nonMaxSuppression'),
					s = sn(e, 'scores', 'nonMaxSuppression'),
					u = nh(a, s, n, r, o, i),
					c = {
						maxOutputSize: (n = u.maxOutputSize),
						iouThreshold: (r = u.iouThreshold),
						scoreThreshold: (o = u.scoreThreshold),
						softNmsSigma: (i = u.softNmsSigma),
					},
					l = qt.runKernel('NonMaxSuppressionV5', { boxes: a, scores: s }, c);
				return { selectedIndices: l[0], selectedScores: l[1] };
			},
		}),
		hh = xn({
			cropAndResize_: function (t, e, n, r, o, i) {
				var a = sn(t, 'image', 'cropAndResize'),
					s = sn(e, 'boxes', 'cropAndResize', 'float32'),
					u = sn(n, 'boxInd', 'cropAndResize', 'int32');
				(o = o || 'bilinear'), (i = i || 0);
				var c = s.shape[0];
				return (
					P(4 === a.rank, function () {
						return (
							'Error in cropAndResize: image must be rank 4,but got rank ' +
							a.rank +
							'.'
						);
					}),
					P(2 === s.rank && 4 === s.shape[1], function () {
						return (
							'Error in cropAndResize: boxes must be have size [' +
							c +
							',4] but had shape ' +
							s.shape +
							'.'
						);
					}),
					P(1 === u.rank && u.shape[0] === c, function () {
						return (
							'Error in cropAndResize: boxInd must be have size [' +
							c +
							'] but had shape ' +
							s.shape +
							'.'
						);
					}),
					P(2 === r.length, function () {
						return (
							'Error in cropAndResize: cropSize must be of length 2, but got length ' +
							r.length +
							'.'
						);
					}),
					P(1 <= r[0] && 1 <= r[1], function () {
						return 'cropSize must be atleast [1,1], but was ' + r;
					}),
					P('bilinear' === o || 'nearest' === o, function () {
						return 'method must be bilinear or nearest, but was ' + o;
					}),
					qt.runKernelFunc(
						function (t, e) {
							return t.cropAndResize(a, s, u, r, o, i);
						},
						{ images: a, boxes: s, boxInd: u },
						null,
						'CropAndResize',
						{ method: o, extrapolationValue: i, cropSize: r }
					)
				);
			},
		}),
		ph = Object.freeze({
			resizeBilinear: sh,
			resizeNearestNeighbor: uh,
			nonMaxSuppression: ch,
			nonMaxSuppressionAsync: function (u, c, l, h, p) {
				return (
					void 0 === h && (h = 0.5),
					void 0 === p && (p = Number.NEGATIVE_INFINITY),
					y(this, void 0, void 0, function () {
						var e, n, r, o, i, a, s;
						return R(this, function (t) {
							switch (t.label) {
								case 0:
									return (
										(e = sn(u, 'boxes', 'nonMaxSuppressionAsync')),
										(n = sn(c, 'scores', 'nonMaxSuppressionAsync')),
										(r = nh(e, n, l, h, p)),
										(l = r.maxOutputSize),
										(h = r.iouThreshold),
										(p = r.scoreThreshold),
										[4, Promise.all([e.data(), n.data()])]
									);
								case 1:
									return (
										(o = t.sent()),
										(i = o[0]),
										(a = o[1]),
										(s = Oo(i, a, l, h, p)),
										e !== u && e.dispose(),
										n !== c && n.dispose(),
										[2, s]
									);
							}
						});
					})
				);
			},
			nonMaxSuppressionWithScore: lh,
			nonMaxSuppressionWithScoreAsync: function (u, c, l, h, p, f) {
				return (
					void 0 === h && (h = 0.5),
					void 0 === p && (p = Number.NEGATIVE_INFINITY),
					void 0 === f && (f = 0),
					y(this, void 0, void 0, function () {
						var e, n, r, o, i, a, s;
						return R(this, function (t) {
							switch (t.label) {
								case 0:
									return (
										(e = sn(u, 'boxes', 'nonMaxSuppressionAsync')),
										(n = sn(c, 'scores', 'nonMaxSuppressionAsync')),
										(r = nh(e, n, l, h, p, f)),
										(l = r.maxOutputSize),
										(h = r.iouThreshold),
										(p = r.scoreThreshold),
										(f = r.softNmsSigma),
										[4, Promise.all([e.data(), n.data()])]
									);
								case 1:
									return (
										(o = t.sent()),
										(i = o[0]),
										(a = o[1]),
										(s = Po(i, a, l, h, p, f)),
										e !== u && e.dispose(),
										n !== c && n.dispose(),
										[2, s]
									);
							}
						});
					})
				);
			},
			cropAndResize: hh,
		}),
		fh = xn({
			fusedMatMul_: function (t) {
				var e,
					n = t.a,
					r = t.b,
					o = t.transposeA,
					s = void 0 !== o && o,
					i = t.transposeB,
					u = void 0 !== i && i,
					c = t.bias,
					a = t.activation,
					l = void 0 === a ? 'linear' : a,
					h = t.preluActivationWeights;
				if (!1 === rh(qt.state.gradientDepth, l)) {
					var p = Ac(n, r, s, u);
					return null != c && (p = Tu(p, c)), ah(p, l, h);
				}
				var f = sn(n, 'a', 'fused matMul'),
					d = sn(r, 'b', 'fused matMul');
				(e = Pt(f, d)), (f = e[0]), (d = e[1]);
				var v = s ? f.shape[f.rank - 2] : f.shape[f.rank - 1],
					m = u ? d.shape[d.rank - 1] : d.shape[d.rank - 2],
					g = s ? f.shape[f.rank - 1] : f.shape[f.rank - 2],
					y = u ? d.shape[d.rank - 2] : d.shape[d.rank - 1],
					x = f.shape.slice(0, -2),
					b = d.shape.slice(0, -2),
					w = L(x),
					C = L(b);
				P(2 <= f.rank && 2 <= d.rank && f.rank === d.rank, function () {
					return (
						'Error in fused matMul: inputs must have the same rank of at least 2, got ranks ' +
						f.rank +
						' and ' +
						d.rank +
						'.'
					);
				}),
					P(D(x, b), function () {
						return (
							'Error in fused matMul: outer dimensions (' +
							x +
							') and (' +
							b +
							') of Tensors with shapes ' +
							f.shape +
							' and ' +
							d.shape +
							' must match.'
						);
					}),
					P(v === m, function () {
						return (
							'Error in fused matMul: inner shapes (' +
							v +
							') and (' +
							m +
							') of Tensors with shapes ' +
							f.shape +
							' and ' +
							d.shape +
							' and transposeA=' +
							s +
							' and transposeB=' +
							u +
							' must match.'
						);
					});
				var E,
					_,
					I = f.shape.slice(0, -2).concat([g, y]),
					R = s ? f.as3D(w, v, g) : f.as3D(w, g, v),
					k = u ? d.as3D(C, y, m) : d.as3D(C, m, y);
				null != c &&
					vo(I, (E = Pt((E = sn(c, 'bias', 'fused matMul')), f)[0]).shape),
					null != h && (_ = sn(h, 'prelu weights', 'fused matMul'));
				var S = { $a: R, $b: k };
				return (
					null != c && (S.$bias = E),
					null != h && (S.$preluActivationWeights = _),
					qt
						.runKernelFunc(
							function (t, e) {
								var n = t.fusedBatchMatMul({
									a: R,
									b: k,
									transposeA: s,
									transposeB: u,
									bias: E,
									activation: l,
									preluActivationWeights: _,
								});
								return e([R, k, n]), n;
							},
							S,
							function (t, e) {
								var n = e[0],
									r = e[1],
									o = e[2],
									i = oh(t, o, l),
									a = {};
								return (
									null != c &&
										(a = {
											$bias: function () {
												return ih(E, i);
											},
										}),
									s || u
										? !s && u
											? Object.assign(
													{
														$a: function () {
															return i.matMul(r, !1, !1);
														},
														$b: function () {
															return i.matMul(n, !0, !1);
														},
													},
													a
											  )
											: s && !u
											? Object.assign(
													{
														$a: function () {
															return r.matMul(i, !1, !0);
														},
														$b: function () {
															return n.matMul(i, !1, !1);
														},
													},
													a
											  )
											: Object.assign(
													{
														$a: function () {
															return r.matMul(i, !0, !0);
														},
														$b: function () {
															return i.matMul(n, !0, !0);
														},
													},
													a
											  )
										: Object.assign(
												{
													$a: function () {
														return i.matMul(r, !1, !0);
													},
													$b: function () {
														return n.matMul(i, !0, !1);
													},
												},
												a
										  )
								);
							}
						)
						.reshape(I)
				);
			},
		}),
		dh = xn({
			fusedConv2d_: function (t) {
				var e = t.x,
					n = t.filter,
					u = t.strides,
					c = t.pad,
					r = t.dataFormat,
					o = void 0 === r ? 'NHWC' : r,
					i = t.dilations,
					l = void 0 === i ? [1, 1] : i,
					a = t.dimRoundingMode,
					h = t.bias,
					s = t.activation,
					p = void 0 === s ? 'linear' : s,
					f = t.preluActivationWeights;
				if (((p = p || 'linear'), !1 === rh(qt.state.gradientDepth, p))) {
					var d = bc(e, n, u, c, o, l, a);
					return null != h && (d = Tu(d, h)), ah(d, p, f);
				}
				var v = sn(e, 'x', 'conv2d'),
					m = sn(n, 'filter', 'conv2d'),
					g = v,
					y = !1;
				3 === v.rank &&
					((y = !0), (g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2]))),
					P(4 === g.rank, function () {
						return (
							'Error in fused conv2d: input must be rank 4, but got rank ' +
							g.rank +
							'.'
						);
					}),
					P(4 === m.rank, function () {
						return (
							'Error in fused conv2d: filter must be rank 4, but got rank ' +
							m.rank +
							'.'
						);
					}),
					null != a &&
						P(B(c), function () {
							return (
								'Error in fused conv2d: pad must be an integer when using, dimRoundingMode ' +
								a +
								' but got pad ' +
								c +
								'.'
							);
						}),
					P(g.shape[3] === m.shape[2], function () {
						return (
							'Error in conv2d: depth of input (' +
							g.shape[3] +
							') must match input depth for filter ' +
							m.shape[2] +
							'.'
						);
					}),
					P(Ro(u, l), function () {
						return (
							'Error in conv2D: Either strides or dilations must be 1. Got strides ' +
							u +
							" and dilations '" +
							l +
							"'"
						);
					}),
					P('NHWC' === o, function () {
						return (
							'Error in conv2d: got dataFormat of ' +
							o +
							' but only NHWC is currently supported.'
						);
					});
				var x,
					b,
					w = yo(g.shape, m.shape, u, l, c, a);
				null != h &&
					((x = Pt((x = sn(h, 'bias', 'fused conv2d')), v)[0]),
					vo(w.outShape, x.shape)),
					null != f && (b = sn(f, 'prelu weights', 'fused conv2d'));
				var C = { x: g, filter: m };
				null != h && (C.bias = x), null != f && (C.preluActivationWeights = b);
				var E = [m, g],
					_ = qt.runKernelFunc(
						function (t, e) {
							var n = t.fusedConv2d({
								input: g,
								filter: m,
								convInfo: w,
								bias: x,
								activation: p,
								preluActivationWeights: b,
							});
							return e([m, g, n]), n;
						},
						C,
						function (t, e) {
							var n = e,
								r = n[0],
								o = n[1],
								i = n[2],
								a = oh(t, i, p);
							P(Io(l), function () {
								return (
									"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" +
									l +
									"'"
								);
							});
							var s = {};
							return (
								null != h &&
									(s = {
										bias: function () {
											return ih(x, a);
										},
									}),
								Object.assign(
									{
										x: function () {
											return Ec(o.shape, a, r, u, c);
										},
										filter: function () {
											return Cc(o, a, r.shape, u, c);
										},
									},
									s
								)
							);
						},
						'FusedConv2D',
						{ convInfo: w, activation: p },
						E,
						[!0]
					);
				return y ? _.as3D(_.shape[1], _.shape[2], _.shape[3]) : _;
			},
		}),
		vh = xn({
			fusedDepthwiseConv2d_: function (t) {
				var e = t.x,
					n = t.filter,
					r = t.strides,
					o = t.pad,
					i = t.dataFormat,
					a = void 0 === i ? 'NHWC' : i,
					s = t.dilations,
					u = void 0 === s ? [1, 1] : s,
					c = t.dimRoundingMode,
					l = t.bias,
					h = t.activation,
					p = void 0 === h ? 'linear' : h,
					f = t.preluActivationWeights;
				if (!1 === rh(qt.state.gradientDepth, p)) {
					var d = _c(e, n, r, o, a, u, c);
					return null != l && (d = Tu(d, l)), ah(d, p, f);
				}
				var v = sn(e, 'x', 'depthwiseConv2d'),
					m = sn(n, 'filter', 'depthwiseConv2d'),
					g = v,
					y = !1;
				3 === v.rank &&
					((y = !0), (g = v.as4D(1, v.shape[0], v.shape[1], v.shape[2]))),
					P(4 === g.rank, function () {
						return (
							'Error in fused depthwiseConv2d: input must be rank 4, but got rank ' +
							g.rank +
							'.'
						);
					}),
					P(4 === m.rank, function () {
						return (
							'Error in fused depthwiseConv2d: filter must be rank 4, but got rank ' +
							m.rank +
							'.'
						);
					}),
					P(g.shape[3] === m.shape[2], function () {
						return (
							'Error in fused depthwiseConv2d: number of input channels (' +
							g.shape[3] +
							') must match the inChannels dimension in filter ' +
							m.shape[2] +
							'.'
						);
					}),
					null == u && (u = [1, 1]),
					P(Ro(r, u), function () {
						return (
							'Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ' +
							r +
							" and dilations '" +
							u +
							"'"
						);
					}),
					null != c &&
						P(B(o), function () {
							return (
								'Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode ' +
								c +
								' but got pad ' +
								o +
								'.'
							);
						});
				var x,
					b,
					w = yo(g.shape, m.shape, r, u, o, c, !0);
				null != l &&
					((x = Pt((x = sn(l, 'bias', 'fused conv2d')), v)[0]),
					vo(w.outShape, x.shape)),
					null != f && (b = sn(f, 'prelu weights', 'fused depthwiseConv2d'));
				var C = { x: g, filter: m };
				null != l && (C.bias = x), null != f && (C.preluActivationWeights = b);
				var E = [m, g],
					_ = qt.runKernelFunc(
						function (t, e) {
							var n = t.fusedDepthwiseConv2D({
								input: g,
								filter: m,
								convInfo: w,
								bias: x,
								activation: p,
								preluActivationWeights: b,
							});
							return e([m, g, n]), n;
						},
						C,
						function (t, e) {
							P(Io(u), function () {
								return (
									"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" +
									u +
									"'"
								);
							});
							var n = e[0],
								r = e[1],
								o = e[2],
								i = oh(t, o, p),
								a = {};
							return (
								null != l &&
									(a = {
										bias: function () {
											return ih(x, i);
										},
									}),
								Object.assign(
									{
										x: function () {
											return Ic(r.shape, i, n, w);
										},
										filter: function () {
											return Rc(r, i, n.shape, w);
										},
									},
									a
								)
							);
						},
						'FusedDepthwiseConv2D',
						{ convInfo: w, activation: p },
						E,
						[!0]
					);
				return y ? _.as3D(_.shape[1], _.shape[2], _.shape[3]) : _;
			},
		}),
		mh = Object.freeze({ matMul: fh, conv2d: dh, depthwiseConv2d: vh }),
		gh = Object.freeze({
			image: ph,
			linalg: eh,
			losses: $l,
			spectral: kl,
			fused: mh,
			signal: zl,
			square: As,
			conv1d: xc,
			conv2d: bc,
			conv3d: wc,
			depthwiseConv2d: _c,
			separableConv2d: kc,
			conv2dTranspose: Sc,
			conv3dTranspose: Dc,
			op: xn,
			batchNormalization2d: yu,
			batchNormalization3d: xu,
			batchNormalization4d: bu,
			batchNormalization: wu,
			batchNorm: Cu,
			batchNorm2d: Eu,
			batchNorm3d: _u,
			batchNorm4d: Iu,
			booleanMaskAsync: fc,
			complex: bn,
			real: wn,
			imag: Cn,
			concat: zn,
			concat1d: Un,
			concat2d: Vn,
			concat3d: Gn,
			concat4d: Hn,
			split: qn,
			matMul: Ac,
			dot: Tc,
			outerProduct: Nc,
			reverse: Fc,
			reverse1d: Mc,
			reverse2d: Oc,
			reverse3d: Pc,
			reverse4d: Bc,
			maxPool: zc,
			avgPool: Uc,
			pool: Vc,
			maxPool3d: Gc,
			avgPool3d: Hc,
			slice: qc,
			slice1d: jc,
			slice2d: Kc,
			slice3d: Xc,
			slice4d: Yc,
			abs: Ts,
			acos: Ns,
			acosh: Fs,
			asin: Ms,
			asinh: Os,
			atan: Ps,
			atanh: Bs,
			ceil: Ls,
			clipByValue: Ws,
			cos: zs,
			cosh: Us,
			erf: Vs,
			exp: Gs,
			expm1: Hs,
			floor: qs,
			log: js,
			log1p: Ks,
			logSigmoid: Xs,
			neg: Ys,
			reciprocal: $s,
			round: Js,
			rsqrt: Qs,
			sigmoid: Zs,
			sign: tu,
			isNaN: eu,
			isInf: nu,
			isFinite: ru,
			sin: ou,
			sinh: iu,
			softplus: au,
			sqrt: su,
			step: uu,
			tan: cu,
			tanh: lu,
			all: Jc,
			any: Qc,
			argMax: Zc,
			argMin: tl,
			logSumExp: el,
			max: nl,
			mean: rl,
			min: ol,
			moments: il,
			sum: al,
			prod: sl,
			equal: Zu,
			equalStrict: tc,
			greater: ec,
			greaterEqual: nc,
			greaterEqualStrict: rc,
			greaterStrict: oc,
			less: ic,
			lessEqual: ac,
			lessEqualStrict: sc,
			lessStrict: uc,
			notEqual: cc,
			notEqualStrict: lc,
			add: Tu,
			addN: Nu,
			addStrict: Fu,
			atan2: Mu,
			div: Ou,
			divNoNan: Pu,
			divStrict: Bu,
			floorDiv: Lu,
			maximum: Wu,
			maximumStrict: zu,
			minimum: Uu,
			minimumStrict: Vu,
			mod: Gu,
			modStrict: Hu,
			mul: qu,
			mulStrict: ju,
			pow: Ku,
			powStrict: Xu,
			squaredDifference: Yu,
			squaredDifferenceStrict: $u,
			sub: Ju,
			subStrict: Qu,
			elu: ul,
			leakyRelu: cl,
			prelu: ll,
			relu: hl,
			relu6: pl,
			selu: fl,
			logicalAnd: Ru,
			logicalNot: ku,
			logicalOr: Su,
			logicalXor: Du,
			where: Au,
			whereAsync: gu,
			buffer: sr,
			print: ur,
			batchToSpaceND: lr,
			broadcastTo: hr,
			cast: pr,
			clone: fr,
			cumsum: dr,
			depthToSpace: vr,
			expandDims: mr,
			eye: gr,
			multinomial: yr,
			oneHot: xr,
			pad: br,
			pad1d: wr,
			pad2d: Cr,
			pad3d: Er,
			pad4d: _r,
			rand: Ir,
			randomNormal: Rr,
			randomGamma: kr,
			randomUniform: Sr,
			reshape: Dr,
			spaceToBatchND: Ar,
			squeeze: Tr,
			stack: Nr,
			tile: Fr,
			truncatedNormal: Mr,
			unstack: Or,
			setdiff1dAsync: cr,
			fill: On,
			linspace: Pn,
			ones: Fn,
			range: Bn,
			scalar: In,
			tensor: En,
			tensor1d: Rn,
			tensor2d: kn,
			tensor3d: Sn,
			tensor4d: Dn,
			tensor5d: An,
			tensor6d: Tn,
			variable: Nn,
			zeros: Mn,
			onesLike: Ln,
			zerosLike: Wn,
			transpose: dl,
			softmax: io,
			logSoftmax: ao,
			localResponseNormalization: vl,
			norm: ml,
			gather: dc,
			unsortedSegmentSum: vc,
			basicLSTMCell: gl,
			multiRNNCell: yl,
			movingAverage: xl,
			stridedSlice: bl,
			topk: wl,
			scatterND: Cl,
			fft: El,
			ifft: _l,
			rfft: Il,
			irfft: Rl,
			sparseToDense: Sl,
			gatherND: Dl,
			diag: Al,
			dropout: Tl,
			hannWindow: Pl,
			hammingWindow: Bl,
			frame: Ll,
			stft: Wl,
			inTopKAsync: Fl,
		});
	function yh(t, e) {
		Array.isArray(t) || (t = [t]),
			t.forEach(function (t) {
				null != t &&
					P('complex64' !== t.dtype, function () {
						return e + ' does not support complex64 tensors.';
					});
			});
	}
	function xh(t, e, n, r) {
		if ('linear' === n) return t.linear(e);
		if ('relu' === n) return t.relu(e);
		if ('elu' === n) return t.elu(e);
		if ('relu6' === n) return t.relu6(e);
		if ('prelu' === n) return t.prelu(e, r);
		throw new Error(
			'Activation ' + n + ' has not been implemented for the CPU backend.'
		);
	}
	var bh,
		wh =
			(t(Ch, (bh = uo)),
			(Ch.prototype.write = function (t, e, n) {
				this.firstUse &&
					((this.firstUse = !1),
					_().get('IS_NODE') &&
						rn(
							"\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================"
						));
				var r = {};
				return this.data.set(r, { values: t, dtype: n }), r;
			}),
			(Ch.prototype.move = function (t, e, n, r) {
				this.data.set(t, { values: e, dtype: r });
			}),
			(Ch.prototype.numDataIds = function () {
				return this.data.numDataIds();
			}),
			(Ch.prototype.read = function (e) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return [2, this.readSync(e)];
					});
				});
			}),
			(Ch.prototype.readSync = function (t) {
				var e = this.data.get(t),
					n = e.dtype,
					r = e.complexTensors;
				return 'complex64' === n
					? No(this.readSync(r.real.dataId), this.readSync(r.imag.dataId))
					: this.data.get(t).values;
			}),
			(Ch.prototype.bufferSync = function (t) {
				var e = this.readSync(t.dataId),
					n = e;
				if ('string' === t.dtype)
					try {
						n = e.map(function (t) {
							return rt(t);
						});
					} catch (t) {
						throw new Error('Failed to decode encoded string bytes into utf-8');
					}
				return sr(t.shape, t.dtype, n);
			}),
			(Ch.prototype.makeOutput = function (t, e, n) {
				var r = this.write(t, e, n);
				return qt.makeTensorFromDataId(r, e, n, this);
			}),
			(Ch.prototype.disposeData = function (t) {
				if (this.data.has(t)) {
					var e = this.data.get(t).complexTensors;
					null != e && (e.real.dispose(), e.imag.dispose()),
						this.data.delete(t);
				}
			}),
			(Ch.prototype.time = function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						return (e = tt()), n(), [2, { kernelMs: tt() - e }];
					});
				});
			}),
			(Ch.prototype.memory = function () {
				return {
					unreliable: !0,
					reasons: [
						'The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.',
					],
				};
			}),
			(Ch.prototype.complex = function (t, e) {
				var n = this.makeOutput(null, t.shape, 'complex64');
				return (
					(this.data.get(n.dataId).complexTensors = {
						real: qt.keep(t.clone()),
						imag: qt.keep(e.clone()),
					}),
					n
				);
			}),
			(Ch.prototype.real = function (t) {
				return this.data.get(t.dataId).complexTensors.real.clone();
			}),
			(Ch.prototype.imag = function (t) {
				return this.data.get(t.dataId).complexTensors.imag.clone();
			}),
			(Ch.prototype.slice = function (t, n, e) {
				if ((yh(t, 'slice'), Zr(t.shape, n, e))) {
					var r = to(n, t.strides),
						o = L(e);
					return En(this.readSync(t.dataId).subarray(r, r + o), e, t.dtype);
				}
				for (
					var i = sr(e, t.dtype), a = this.bufferSync(t), s = 0;
					s < i.size;
					++s
				) {
					var u = i.indexToLoc(s).map(function (t, e) {
						return t + n[e];
					});
					i.values[s] = a.get.apply(a, u);
				}
				return i.toTensor();
			}),
			(Ch.prototype.stridedSlice = function (t, e, n, r) {
				yh(t, 'stridedSlice');
				var o = $r(e, n, r);
				if (
					o.some(function (t) {
						return 0 === t;
					})
				)
					return En([], o);
				for (
					var i = sr(o, t.dtype), a = this.bufferSync(t), s = 0;
					s < i.size;
					s++
				) {
					for (
						var u = i.indexToLoc(s), c = new Array(u.length), l = 0;
						l < c.length;
						l++
					)
						c[l] = u[l] * r[l] + e[l];
					i.set.apply(i, [a.get.apply(a, c)].concat(u));
				}
				return i.toTensor();
			}),
			(Ch.prototype.diag = function (t) {
				for (
					var e = this.readSync(t.dataId),
						n = sr([t.size, t.size], t.dtype),
						r = n.values,
						o = 0;
					o < e.length;
					o++
				)
					r[o * t.size + o] = e[o];
				return n.toTensor();
			}),
			(Ch.prototype.unstack = function (t, e) {
				for (
					var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0;
					i < t.rank;
					i++
				)
					i !== e && (r[o++] = t.shape[i]);
				var a = new Array(t.rank).fill(0),
					s = t.shape.slice();
				s[e] = 1;
				var u = new Array(n);
				for (i = 0; i < u.length; i++)
					u[(a[e] = i)] = this.slice(t, a, s).reshape(r);
				return u;
			}),
			(Ch.prototype.reverse = function (r, o) {
				yh(r, 'reverse');
				for (
					var i = sr(r.shape, r.dtype),
						a = this.bufferSync(r),
						t = function (t) {
							var e = i.indexToLoc(t),
								n = e.slice();
							o.forEach(function (t) {
								return (n[t] = r.shape[t] - 1 - n[t]);
							}),
								i.set.apply(i, [a.get.apply(a, n)].concat(e));
						},
						e = 0;
					e < i.size;
					e++
				)
					t(e);
				return i.toTensor();
			}),
			(Ch.prototype.concat = function (t, n) {
				var a = this;
				if ('complex64' === t[0].dtype) {
					var e = t.map(function (t) {
							return wn(t);
						}),
						r = t.map(function (t) {
							return Cn(t);
						});
					return bn(this.concat(e, n), this.concat(r, n));
				}
				var o = t.map(function (t) {
						var e = L(t.shape.slice(n));
						return t.as2D(-1, e);
					}),
					s = yn(
						o.map(function (t) {
							return t.shape;
						}),
						1
					),
					u = sr(s, t[0].dtype).values;
				if (1 === o[0].shape[0]) {
					var i = 0;
					o.forEach(function (t) {
						u.set(a.readSync(t.dataId), i), (i += t.size);
					});
				} else {
					var c = 0;
					o.forEach(function (t) {
						for (
							var e = a.readSync(t.dataId), n = 0, r = 0;
							r < t.shape[0];
							++r
						)
							for (var o = r * s[1] + c, i = 0; i < t.shape[1]; ++i)
								u[o + i] = e[n++];
						c += t.shape[1];
					});
				}
				var l = yn(
					t.map(function (t) {
						return t.shape;
					}),
					n
				);
				return En(u, l, t[0].dtype);
			}),
			(Ch.prototype.neg = function (t) {
				return yh(t, 'neg'), this.multiply(In(-1), t);
			}),
			(Ch.prototype.add = function (t, e) {
				return 'complex64' === t.dtype || 'complex64' === e.dtype
					? this.broadcastedBinaryComplexOp(
							t.cast('complex64'),
							e.cast('complex64'),
							function (t, e, n, r) {
								return { real: t + n, imag: e + r };
							}
					  )
					: this.broadcastedBinaryOp(
							t,
							e,
							Mt(t.dtype, e.dtype),
							function (t, e) {
								return t + e;
							}
					  );
			}),
			(Ch.prototype.addN = function (t) {
				var e = this;
				yh(t, 'addN');
				for (
					var n = t.map(function (t) {
							return e.readSync(t.dataId);
						}),
						r = sr(t[0].shape, t[0].dtype),
						o = r.values,
						i = 0;
					i < t.length;
					i++
				)
					for (var a = n[i], s = 0; s < o.length; s++) o[s] += a[s];
				return r.toTensor();
			}),
			(Ch.prototype.subtract = function (t, e) {
				return 'complex64' === t.dtype || 'complex64' === e.dtype
					? this.broadcastedBinaryComplexOp(
							t.cast('complex64'),
							e.cast('complex64'),
							function (t, e, n, r) {
								return { real: t - n, imag: e - r };
							}
					  )
					: this.broadcastedBinaryOp(
							t,
							e,
							Mt(t.dtype, e.dtype),
							function (t, e) {
								return t - e;
							}
					  );
			}),
			(Ch.prototype.pow = function (t, e) {
				return (
					yh([t, e], 'pow'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						return Math.pow(t, e);
					})
				);
			}),
			(Ch.prototype.batchMatMul = function (t, e, n, r) {
				yh([t, e], 'matMul');
				for (
					var o = n ? t.shape[1] : t.shape[2],
						i = n ? t.shape[2] : t.shape[1],
						a = r ? e.shape[1] : e.shape[2],
						s = t.shape[0],
						u = this.readSync(t.dataId),
						c = this.readSync(e.dataId),
						l = n
							? [t.strides[0], 1, t.strides[1]]
							: [t.strides[0], t.strides[1], 1],
						h = l[0],
						p = l[1],
						f = l[2],
						d = r
							? [1, e.strides[1], e.strides[0]]
							: [e.strides[1], 1, e.strides[0]],
						v = d[0],
						m = d[1],
						g = d[2],
						y = i * a,
						x = sr([s, i, a], t.dtype),
						b = x.values,
						w = this.blockSize,
						C = 0;
					C < s;
					C++
				)
					for (var E = 0; E < i; E += w)
						for (var _ = 0; _ < a; _ += w)
							for (var I = 0; I < o; I += w)
								for (
									var R = Math.min(E + w, i),
										k = Math.min(_ + w, a),
										S = Math.min(I + w, o),
										D = E;
									D < R;
									D++
								)
									for (var A = _; A < k; A++) {
										for (var T = 0, N = I; N < S; N++)
											T += u[C * h + D * p + N * f] * c[N * v + A * m + C * g];
										b[C * y + (D * a + A)] += T;
									}
				return x.toTensor();
			}),
			(Ch.prototype.fusedBatchMatMul = function (t) {
				var e = t.a,
					n = t.b,
					r = t.transposeA,
					o = t.transposeB,
					i = t.bias,
					a = t.activation,
					s = t.preluActivationWeights,
					u = this.batchMatMul(e, n, r, o);
				return i && (u = this.add(u, i)), a && (u = xh(this, u, a, s)), u;
			}),
			(Ch.prototype.multiply = function (t, e) {
				return 'complex64' === t.dtype || 'complex64' === e.dtype
					? this.broadcastedBinaryComplexOp(
							t.cast('complex64'),
							e.cast('complex64'),
							function (t, e, n, r) {
								return { real: t * n - e * r, imag: t * r + e * n };
							}
					  )
					: this.broadcastedBinaryOp(
							t,
							e,
							Mt(t.dtype, e.dtype),
							function (t, e) {
								return t * e;
							}
					  );
			}),
			(Ch.prototype.realDivide = function (t, e) {
				return (
					yh([t, e], 'realDivide'),
					this.broadcastedBinaryOp(t, e, 'float32', function (t, e) {
						return t / e;
					})
				);
			}),
			(Ch.prototype.floorDiv = function (t, e) {
				return (
					yh([t, e], 'floorDiv'),
					this.broadcastedBinaryOp(t, e, 'int32', function (t, e) {
						return Math.floor(t / e);
					})
				);
			}),
			(Ch.prototype.sum = function (t, e) {
				yh(t, 'sum'), fn('sum', e, t.rank);
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, Mt(t.dtype, 'int32')),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = 0, p = 0; p < a; ++p) h += u[l + p];
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.prod = function (t, e) {
				yh(t, 'sum');
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, Mt(t.dtype, 'int32')),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = 1, p = 0; p < a; ++p) h *= u[l + p];
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.unsortedSegmentSum = function (t, e, n) {
				yh(t, 'unsortedSegmentSum');
				for (var r = [], o = t.rank - e.rank, i = 0; i < o; ++i)
					e = e.expandDims(i + 1);
				for (i = 0; i < n; ++i) {
					var a = In(i, 'int32'),
						s = Zu(a, e).asType('float32').mul(t).sum(0);
					r.push(s);
				}
				return Nr(r);
			}),
			(Ch.prototype.argMin = function (t, e) {
				yh(t, 'argMin');
				var n = [e];
				fn('argMin', n, t.rank);
				for (
					var r = hn(t.shape, n),
						o = r[0],
						i = r[1],
						a = Mn(o, 'int32'),
						s = L(i),
						u = this.readSync(a.dataId),
						c = this.readSync(t.dataId),
						l = 0;
					l < u.length;
					++l
				) {
					for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
						var v = c[h + d];
						v < p && ((p = v), (f = d));
					}
					u[l] = f;
				}
				return a;
			}),
			(Ch.prototype.argMax = function (t, e) {
				yh(t, 'argMax');
				var n = [e];
				fn('argMax', n, t.rank);
				for (
					var r = hn(t.shape, n),
						o = r[0],
						i = r[1],
						a = Mn(o, 'int32'),
						s = L(i),
						u = this.readSync(a.dataId),
						c = this.readSync(t.dataId),
						l = 0;
					l < u.length;
					++l
				) {
					for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
						var v = c[h + d];
						p < v && ((p = v), (f = d));
					}
					u[l] = f;
				}
				return a;
			}),
			(Ch.prototype.cumsum = function (t, e, n, r) {
				if ((yh(t, 'cumsum'), e !== t.rank - 1))
					throw new Error(
						'backend.cumsum in CPU expects an inner-most axis=' +
							(t.rank - 1) +
							' but got axis=' +
							e
					);
				for (
					var o = Mt(t.dtype, 'int32'),
						i = Mn(t.shape, o),
						a = this.readSync(i.dataId),
						s = this.readSync(t.dataId),
						u = t.shape[t.rank - 1],
						c = r
							? function (t, e) {
									return t + u - e - 1;
							  }
							: function (t, e) {
									return t + e;
							  },
						l = 0;
					l < s.length;
					l += u
				)
					for (var h = 0; h < u; h++) {
						var p = c(l, h);
						if (0 === h) a[p] = n ? 0 : s[p];
						else {
							var f = c(l, h - 1);
							a[p] = n ? s[f] + a[f] : s[p] + a[f];
						}
					}
				return i;
			}),
			(Ch.prototype.equal = function (t, e) {
				return (
					yh([t, e], 'equal'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t === e ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.notEqual = function (t, e) {
				return (
					yh([t, e], 'notEqual'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t !== e ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.less = function (t, e) {
				return (
					yh([t, e], 'less'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t < e ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.lessEqual = function (t, e) {
				return (
					yh([t, e], 'lessEqual'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t <= e ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.greater = function (t, e) {
				return (
					yh([t, e], 'greater'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return e < t ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.greaterEqual = function (t, e) {
				return (
					yh([t, e], 'greaterEqual'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return e <= t ? 1 : 0;
					})
				);
			}),
			(Ch.prototype.logicalNot = function (t) {
				yh(t, 'logicalNot');
				for (
					var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0;
					r < e.length;
					++r
				)
					n[r] = e[r] ? 0 : 1;
				return this.makeOutput(n, t.shape, 'bool');
			}),
			(Ch.prototype.logicalAnd = function (t, e) {
				return (
					yh([t, e], 'logicalAnd'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t && e;
					})
				);
			}),
			(Ch.prototype.logicalOr = function (t, e) {
				return (
					yh([t, e], 'logicalOr'),
					this.broadcastedBinaryOp(t, e, 'bool', function (t, e) {
						return t || e;
					})
				);
			}),
			(Ch.prototype.select = function (t, e, n) {
				yh([t, e, n], 'select');
				for (
					var r = this.readSync(t.dataId),
						o = this.readSync(e.dataId),
						i = this.readSync(n.dataId),
						a = Mn(e.shape, Mt(e.dtype, n.dtype)),
						s = this.readSync(a.dataId),
						u = 0,
						c =
							0 === t.rank || 1 < t.rank || 1 === e.rank
								? 1
								: L(e.shape.slice(1)),
						l = 0;
					l < r.length;
					l++
				)
					for (var h = 0; h < c; h++)
						1 === r[l] ? (s[u++] = o[l]) : (s[u++] = i[l]);
				return a;
			}),
			(Ch.prototype.where = function (t) {
				yh([t], 'where');
				var e = this.readSync(t.dataId);
				return Go(t.shape, e);
			}),
			(Ch.prototype.topk = function (t, e, n) {
				return yh(t, 'topk'), Vo(this.readSync(t.dataId), t.shape, t.dtype, e);
			}),
			(Ch.prototype.min = function (t, e) {
				yh(t, 'min'), fn('min', e, t.rank);
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, t.dtype),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						f < h && (h = f);
					}
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.minimum = function (t, e) {
				return (
					yh([t, e], 'minimum'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						return Math.min(t, e);
					})
				);
			}),
			(Ch.prototype.mod = function (t, e) {
				return (
					yh([t, e], 'mod'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						var n = t % e;
						return (t < 0 && e < 0) || (0 <= t && 0 <= e) ? n : (n + e) % e;
					})
				);
			}),
			(Ch.prototype.max = function (t, e) {
				yh(t, 'max'), fn('max', e, t.rank);
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, t.dtype),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h < f && (h = f);
					}
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.maximum = function (t, e) {
				return (
					yh([t, e], 'maximum'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						return Math.max(t, e);
					})
				);
			}),
			(Ch.prototype.all = function (t, e) {
				yh(t, 'all'), fn('all', e, t.rank);
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, t.dtype),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h = h && f;
					}
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.any = function (t, e) {
				yh(t, 'any'), fn('any', e, t.rank);
				for (
					var n = hn(t.shape, e),
						r = n[0],
						o = n[1],
						i = Mn(r, t.dtype),
						a = L(o),
						s = this.readSync(i.dataId),
						u = this.readSync(t.dataId),
						c = 0;
					c < s.length;
					++c
				) {
					for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
						var f = u[l + p];
						h = h || f;
					}
					s[c] = h;
				}
				return i;
			}),
			(Ch.prototype.squaredDifference = function (t, e) {
				return (
					yh([t, e], 'squaredDifference'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						var n = t - e;
						return n * n;
					})
				);
			}),
			(Ch.prototype.ceil = function (t) {
				yh(t, 'ceil');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					n[r] = Math.ceil(e[r]);
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.floor = function (t) {
				yh(t, 'floor');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					n[r] = Math.floor(e[r]);
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.sign = function (t) {
				yh(t, 'x');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					e[r] < 0 ? (n[r] = -1) : 0 < e[r] ? (n[r] = 1) : (n[r] = 0);
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.isNaN = function (t) {
				yh(t, 'x');
				for (
					var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0;
					r < e.length;
					++r
				)
					Number.isNaN(e[r]) && (n[r] = 1);
				return this.makeOutput(n, t.shape, 'bool');
			}),
			(Ch.prototype.isInf = function (t) {
				yh(t, 'x');
				for (
					var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0;
					r < e.length;
					++r
				)
					Math.abs(e[r]) === 1 / 0 && (n[r] = 1);
				return this.makeOutput(n, t.shape, 'bool');
			}),
			(Ch.prototype.isFinite = function (t) {
				yh(t, 'x');
				for (
					var e = this.readSync(t.dataId), n = new Uint8Array(e.length), r = 0;
					r < e.length;
					++r
				)
					Number.isFinite(e[r]) && (n[r] = 1);
				return this.makeOutput(n, t.shape, 'bool');
			}),
			(Ch.prototype.round = function (t) {
				yh(t, 'round');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				) {
					var o = Math.floor(e[r]);
					e[r] - o < 0.5
						? (n[r] = Math.floor(e[r]))
						: 0.5 < e[r] - o
						? (n[r] = Math.ceil(e[r]))
						: (n[r] = o % 2 == 0 ? o : o + 1);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.exp = function (t) {
				yh(t, 'exp');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					n[r] = Math.exp(e[r]);
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.expm1 = function (t) {
				yh(t, 'expm1');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					n[r] = Math.expm1(e[r]);
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.log = function (t) {
				yh(t, 'log');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				) {
					var o = e[r];
					n[r] = Math.log(o);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.log1p = function (t) {
				yh(t, 'log1p');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				) {
					var o = e[r];
					n[r] = Math.log1p(o);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.sqrt = function (t) {
				yh(t, 'sqrt');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				) {
					var o = e[r];
					n[r] = Math.sqrt(o);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.rsqrt = function (t) {
				yh(t, 'rsqrt');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				) {
					var o = e[r];
					n[r] = 1 / Math.sqrt(o);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.reciprocal = function (t) {
				yh(t, 'reciprocal');
				for (
					var e = this.readSync(t.dataId),
						n = new Float32Array(e.length),
						r = 0;
					r < e.length;
					++r
				)
					n[r] = 1 / e[r];
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.linear = function (t) {
				return t;
			}),
			(Ch.prototype.relu = function (t) {
				yh(t, 'relu');
				for (
					var e = Mn(t.shape, t.dtype),
						n = this.readSync(e.dataId),
						r = this.readSync(t.dataId),
						o = 0;
					o < r.length;
					++o
				)
					n[o] = Math.max(0, r[o]);
				return e;
			}),
			(Ch.prototype.relu6 = function (t) {
				yh(t, 'relu');
				for (
					var e = Mn(t.shape, t.dtype),
						n = this.readSync(e.dataId),
						r = this.readSync(t.dataId),
						o = 0;
					o < r.length;
					++o
				)
					n[o] = Math.min(Math.max(0, r[o]), 6);
				return e;
			}),
			(Ch.prototype.prelu = function (t, e) {
				return (
					yh([t, e], 'prelu'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						return t < 0 ? e * t : t;
					})
				);
			}),
			(Ch.prototype.elu = function (t) {
				yh(t, 'elu');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				) {
					var o = n[r];
					e[r] = 0 <= o ? o : Math.exp(o) - 1;
				}
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.eluDer = function (t, e) {
				yh([t, e], 'eluDer');
				for (
					var n = new Float32Array(e.size),
						r = this.readSync(e.dataId),
						o = this.readSync(t.dataId),
						i = 0;
					i < r.length;
					++i
				) {
					var a = r[i];
					n[i] = 1 <= a ? o[i] : o[i] * (a + 1);
				}
				return this.makeOutput(n, e.shape, 'float32');
			}),
			(Ch.prototype.selu = function (t) {
				yh(t, 'selu');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				) {
					var o = n[r];
					e[r] =
						0 <= o
							? 1.0507009873554805 * o
							: 1.7580993408473768 * (Math.exp(o) - 1);
				}
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.clip = function (t, e, n) {
				yh(t, 'clip');
				for (
					var r = new Float32Array(t.size), o = this.readSync(t.dataId), i = 0;
					i < o.length;
					++i
				) {
					var a = o[i];
					r[i] = n < a ? n : a < e ? e : a;
				}
				return this.makeOutput(r, t.shape, 'float32');
			}),
			(Ch.prototype.abs = function (t) {
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.abs(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.complexAbs = function (t) {
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < t.size;
					++r
				) {
					var o = n[2 * r],
						i = n[2 * r + 1];
					e[r] = Math.hypot(o, i);
				}
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.int = function (t) {
				yh(t, 'int');
				for (
					var e = new Int32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = n[r];
				return this.makeOutput(e, t.shape, 'int32');
			}),
			(Ch.prototype.sigmoid = function (t) {
				yh(t, 'sigmoid');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = 1 / (1 + Math.exp(-n[r]));
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.softplus = function (t) {
				yh(t, 'softplus');
				for (
					var e = Math.log(1.1920928955078125e-7) + 2,
						n = new Float32Array(t.size),
						r = this.readSync(t.dataId),
						o = 0;
					o < r.length;
					++o
				) {
					var i,
						a = r[o] > -e,
						s = r[o] < e,
						u = Math.exp(r[o]);
					(i = s ? u : a ? r[o] : Math.log(1 + u)), (n[o] = i);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.sin = function (t) {
				yh(t, 'sin');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.sin(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.cos = function (t) {
				yh(t, 'cos');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.cos(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.tan = function (t) {
				yh(t, 'tan');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.tan(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.asin = function (t) {
				yh(t, 'asin');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.asin(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.acos = function (t) {
				yh(t, 'acos');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.acos(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.atan = function (t) {
				yh(t, 'atan');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.atan(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.atan2 = function (t, e) {
				return (
					yh([t, e], 'atan2'),
					this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
						return Math.atan2(t, e);
					})
				);
			}),
			(Ch.prototype.sinh = function (t) {
				yh(t, 'sinh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.sinh(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.cosh = function (t) {
				yh(t, 'cosh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.cosh(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.tanh = function (t) {
				yh(t, 'tanh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = w(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.asinh = function (t) {
				yh(t, 'asinh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.asinh(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.acosh = function (t) {
				yh(t, 'acosh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.acosh(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.atanh = function (t) {
				yh(t, 'atanh');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				)
					e[r] = Math.atanh(n[r]);
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.erf = function (t) {
				yh(t, 'erf');
				for (
					var e = new Float32Array(t.size), n = this.readSync(t.dataId), r = 0;
					r < n.length;
					++r
				) {
					var o = Math.sign(n[r]),
						i = Math.abs(n[r]),
						a = 1 / (1 + 0.3275911 * i);
					e[r] =
						o *
						(1 -
							((((1.061405429 * a - 1.453152027) * a + 1.421413741) * a -
								0.284496736) *
								a +
								0.254829592) *
								a *
								Math.exp(-i * i));
				}
				return this.makeOutput(e, t.shape, 'float32');
			}),
			(Ch.prototype.step = function (t, e) {
				void 0 === e && (e = 0), yh(t, 'step');
				for (
					var n = new Float32Array(t.size), r = this.readSync(t.dataId), o = 0;
					o < r.length;
					++o
				) {
					var i = r[o];
					isNaN(i) ? (n[o] = NaN) : (n[o] = 0 < i ? 1 : e);
				}
				return this.makeOutput(n, t.shape, 'float32');
			}),
			(Ch.prototype.fusedConv2d = function (t) {
				var e = t.input,
					n = t.filter,
					r = t.convInfo,
					o = t.bias,
					i = t.activation,
					a = t.preluActivationWeights,
					s = this.conv2d(e, n, r);
				return o && (s = this.add(s, o)), i && (s = xh(this, s, i, a)), s;
			}),
			(Ch.prototype.conv2d = function (t, e, n) {
				yh([t, e], 'conv2d');
				for (
					var r = n.filterHeight,
						o = n.filterWidth,
						i = n.dilationHeight,
						a = n.dilationWidth,
						s = n.padInfo.left,
						u = n.padInfo.top,
						c = 'channelsLast' === n.dataFormat,
						l = sr(n.outShape, t.dtype),
						h = t.strides[0],
						p = c ? t.strides[1] : t.strides[2],
						f = c ? t.strides[2] : 1,
						d = c ? 1 : t.strides[1],
						v = l.strides[0],
						m = c ? l.strides[1] : l.strides[2],
						g = c ? l.strides[2] : 1,
						y = c ? 1 : l.strides[1],
						x = this.readSync(t.dataId),
						b = this.readSync(e.dataId),
						w = l.values,
						C = 0;
					C < n.batchSize;
					++C
				)
					for (var E = C * h, _ = C * v, I = 0; I < n.outHeight; ++I)
						for (
							var R = _ + I * m, k = I * n.strideHeight - u, S = 0;
							S < r;
							S++
						) {
							var D = k + S * i;
							if (!(D < 0 || D >= n.inHeight))
								for (
									var A = S * e.strides[0], T = E + D * p, N = 0;
									N < n.outWidth;
									++N
								)
									for (
										var F = R + N * g, M = N * n.strideWidth - s, O = 0;
										O < o;
										O++
									) {
										var P = M + O * a;
										if (!(P < 0 || P >= n.inWidth))
											for (
												var B = T + P * f, L = A + O * e.strides[1], W = 0;
												W < n.inChannels;
												++W
											) {
												for (
													var z = x[B + W * d], U = 0;
													U < n.outChannels;
													++U
												)
													w[F + U * y] += z * b[L + U];
												L += n.outChannels;
											}
									}
						}
				return l.toTensor();
			}),
			(Ch.prototype.conv3d = function (t, e, n) {
				for (
					var r = n.filterDepth,
						o = n.filterHeight,
						i = n.filterWidth,
						a = n.dilationDepth,
						s = n.dilationHeight,
						u = n.dilationWidth,
						c = n.padInfo.front,
						l = n.padInfo.left,
						h = n.padInfo.top,
						p = sr(n.outShape, t.dtype),
						f = this.readSync(t.dataId),
						d = this.readSync(e.dataId),
						v = p.values,
						m = 0;
					m < n.batchSize;
					++m
				)
					for (
						var g = m * t.strides[0], y = m * p.strides[0], x = 0;
						x < n.outDepth;
						++x
					)
						for (
							var b = y + x * p.strides[1], w = x * n.strideDepth - c, C = 0;
							C < r;
							C++
						) {
							var E = w + C * a;
							if (!(E < 0 || E >= n.inDepth))
								for (
									var _ = C * e.strides[0], I = g + E * t.strides[1], R = 0;
									R < n.outHeight;
									++R
								)
									for (
										var k = b + R * p.strides[2],
											S = R * n.strideHeight - h,
											D = 0;
										D < o;
										D++
									) {
										var A = S + D * s;
										if (!(A < 0 || A >= n.inHeight))
											for (
												var T = _ + D * e.strides[1],
													N = I + A * t.strides[2],
													F = 0;
												F < n.outWidth;
												++F
											)
												for (
													var M = k + F * n.outChannels,
														O = F * n.strideWidth - l,
														P = 0;
													P < i;
													P++
												) {
													var B = O + P * u;
													if (!(B < 0 || B >= n.inWidth))
														for (
															var L = T + P * e.strides[2],
																W = N + B * n.inChannels,
																z = L,
																U = 0;
															U < n.inChannels;
															++U
														) {
															for (
																var V = f[W + U], G = 0;
																G < n.outChannels;
																++G
															)
																v[M + G] += V * d[z + G];
															z += n.outChannels;
														}
												}
									}
						}
				return p.toTensor();
			}),
			(Ch.prototype.conv2dDerInput = function (t, e, n) {
				yh([t, e], 'conv2dDerInput');
				for (
					var r = sr(n.inShape, 'float32'),
						o = r.values,
						i = this.readSync(t.dataId),
						a = this.readSync(e.dataId),
						s = e.strides,
						u = s[0],
						c = s[1],
						l = s[2],
						h = n.batchSize,
						p = n.filterHeight,
						f = n.filterWidth,
						d = n.inChannels,
						v = n.inHeight,
						m = n.inWidth,
						g = n.outChannels,
						y = n.outHeight,
						x = n.outWidth,
						b = n.strideHeight,
						w = n.strideWidth,
						C = n.dataFormat,
						E = p - 1 - n.padInfo.top,
						_ = f - 1 - n.padInfo.left,
						I = 'channelsLast' === C,
						R = r.strides[0],
						k = I ? r.strides[1] : r.strides[2],
						S = I ? r.strides[2] : 1,
						D = I ? 1 : r.strides[1],
						A = t.strides[0],
						T = I ? t.strides[1] : t.strides[2],
						N = I ? t.strides[2] : 1,
						F = I ? 1 : t.strides[1],
						M = 0;
					M < h;
					++M
				)
					for (var O = 0; O < d; ++O)
						for (var P = 0; P < v; ++P)
							for (
								var B = P - E,
									L = Math.max(0, Math.ceil(B / b)),
									W = Math.min(y, (p + B) / b),
									z = 0;
								z < m;
								++z
							) {
								for (
									var U = z - _,
										V = Math.max(0, Math.ceil(U / w)),
										G = Math.min(x, (f + U) / w),
										H = 0,
										q = L;
									q < W;
									++q
								)
									for (var j = q * b - B, K = V; K < G; ++K)
										for (
											var X = A * M + T * q + N * K,
												Y = u * (p - 1 - j) + c * (f - 1 - (K * w - U)) + l * O,
												$ = 0;
											$ < g;
											++$
										)
											H += i[X + F * $] * a[Y + $];
								o[R * M + k * P + S * z + D * O] = H;
							}
				return r.toTensor();
			}),
			(Ch.prototype.conv3dDerInput = function (t, e, n) {
				for (
					var r = sr(n.inShape, 'float32'),
						o = r.values,
						i = r.strides,
						a = i[0],
						s = i[1],
						u = i[2],
						c = i[3],
						l = this.readSync(t.dataId),
						h = t.strides,
						p = h[0],
						f = h[1],
						d = h[2],
						v = h[3],
						m = this.readSync(e.dataId),
						g = e.strides,
						y = g[0],
						x = g[1],
						b = g[2],
						w = g[3],
						C = n.batchSize,
						E = n.filterDepth,
						_ = n.filterHeight,
						I = n.filterWidth,
						R = n.inChannels,
						k = n.inDepth,
						S = n.inHeight,
						D = n.inWidth,
						A = n.outChannels,
						T = n.outDepth,
						N = n.outHeight,
						F = n.outWidth,
						M = n.strideDepth,
						O = n.strideHeight,
						P = n.strideWidth,
						B = E - 1 - n.padInfo.front,
						L = _ - 1 - n.padInfo.top,
						W = I - 1 - n.padInfo.left,
						z = 0;
					z < C;
					++z
				)
					for (var U = 0; U < R; ++U)
						for (var V = 0; V < k; ++V)
							for (
								var G = V - B,
									H = Math.max(0, Math.ceil(G / M)),
									q = Math.min(T, (E + G) / M),
									j = 0;
								j < S;
								++j
							)
								for (
									var K = j - L,
										X = Math.max(0, Math.ceil(K / O)),
										Y = Math.min(N, (_ + K) / O),
										$ = 0;
									$ < D;
									++$
								) {
									for (
										var J = $ - W,
											Q = Math.max(0, Math.ceil(J / P)),
											Z = Math.min(F, (I + J) / P),
											tt = 0,
											et = H;
										et < q;
										++et
									)
										for (var nt = et * M - G, rt = X; rt < Y; ++rt)
											for (var ot = rt * O - K, it = Q; it < Z; ++it)
												for (
													var at = p * z + f * et + d * rt + v * it,
														st =
															y * (E - 1 - nt) +
															x * (_ - 1 - ot) +
															b * (I - 1 - (it * P - J)) +
															w * U,
														ut = 0;
													ut < A;
													++ut
												)
													tt += l[at + ut] * m[st + ut];
									o[a * z + s * V + u * j + c * $ + U] = tt;
								}
				return r.toTensor();
			}),
			(Ch.prototype.conv2dDerFilter = function (t, e, n) {
				yh([t, e], 'conv2dDerFilter');
				for (
					var r = n.strideHeight,
						o = n.strideWidth,
						i = n.filterHeight,
						a = n.filterWidth,
						s = 'channelsLast' === n.dataFormat,
						u = sr(n.filterShape, 'float32'),
						c = n.padInfo.left,
						l = n.padInfo.top,
						h = this.bufferSync(t),
						p = this.bufferSync(e),
						f = 0;
					f < i;
					++f
				)
					for (
						var d = Math.max(0, Math.ceil((l - f) / r)),
							v = Math.min(n.outHeight, (n.inHeight + l - f) / r),
							m = 0;
						m < a;
						++m
					)
						for (
							var g = Math.max(0, Math.ceil((c - m) / o)),
								y = Math.min(n.outWidth, (n.inWidth + c - m) / o),
								x = 0;
							x < n.inChannels;
							++x
						)
							for (var b = 0; b < n.outChannels; ++b) {
								for (var w = 0, C = 0; C < n.batchSize; ++C)
									for (var E = d; E < v; ++E)
										for (var _ = f + E * r - l, I = g; I < y; ++I) {
											var R = m + I * o - c;
											w += s
												? h.get(C, _, R, x) * p.get(C, E, I, b)
												: h.get(C, x, _, R) * p.get(C, b, E, I);
										}
								u.set(w, f, m, x, b);
							}
				return u.toTensor();
			}),
			(Ch.prototype.conv3dDerFilter = function (t, e, n) {
				for (
					var r = n.strideDepth,
						o = n.strideHeight,
						i = n.strideWidth,
						a = n.filterDepth,
						s = n.filterHeight,
						u = n.filterWidth,
						c = sr(n.filterShape, 'float32'),
						l = c.values,
						h = c.strides,
						p = h[0],
						f = h[1],
						d = h[2],
						v = h[3],
						m = this.readSync(e.dataId),
						g = e.strides,
						y = g[0],
						x = g[1],
						b = g[2],
						w = g[3],
						C = this.readSync(t.dataId),
						E = t.strides,
						_ = E[0],
						I = E[1],
						R = E[2],
						k = E[3],
						S = n.padInfo.front,
						D = n.padInfo.left,
						A = n.padInfo.top,
						T = 0;
					T < a;
					++T
				)
					for (
						var N = Math.max(0, Math.ceil((S - T) / r)),
							F = Math.min(n.outDepth, (n.inDepth + S - T) / r),
							M = T * p,
							O = 0;
						O < s;
						++O
					)
						for (
							var P = Math.max(0, Math.ceil((A - O) / o)),
								B = Math.min(n.outHeight, (n.inHeight + A - O) / o),
								L = O * f + M,
								W = 0;
							W < u;
							++W
						)
							for (
								var z = Math.max(0, Math.ceil((D - W) / i)),
									U = Math.min(n.outWidth, (n.inWidth + D - W) / i),
									V = W * d + L,
									G = 0;
								G < n.inChannels;
								++G
							)
								for (var H = G * v + V, q = 0; q < n.outChannels; ++q) {
									for (var j = 0, K = 0; K < n.batchSize; ++K)
										for (var X = K * _, Y = K * y, $ = N; $ < F; ++$)
											for (
												var J = (T + $ * r - S) * I + X, Q = $ * x + Y, Z = P;
												Z < B;
												++Z
											)
												for (
													var tt = (O + Z * o - A) * R + J,
														et = Z * b + Q,
														nt = z;
													nt < U;
													++nt
												) {
													var rt = nt * w + et;
													j += C[(W + nt * i - D) * k + tt + G] * m[rt + q];
												}
									l[H + q] = j;
								}
				return c.toTensor();
			}),
			(Ch.prototype.fusedDepthwiseConv2D = function (t) {
				var e = t.input,
					n = t.filter,
					r = t.convInfo,
					o = t.bias,
					i = t.activation,
					a = t.preluActivationWeights,
					s = this.depthwiseConv2D(e, n, r);
				return o && (s = this.add(s, o)), i && (s = xh(this, s, i, a)), s;
			}),
			(Ch.prototype.depthwiseConv2D = function (t, e, n) {
				yh([t, e], 'depthwiseConv2D');
				for (
					var r = n.filterHeight,
						o = n.filterWidth,
						i = n.dilationHeight,
						a = n.dilationWidth,
						s = n.padInfo.left,
						u = n.padInfo.top,
						c = n.outChannels / n.inChannels,
						l = sr(n.outShape, t.dtype),
						h = this.readSync(t.dataId),
						p = this.readSync(e.dataId),
						f = l.values,
						d = 0;
					d < n.batchSize;
					++d
				)
					for (
						var v = d * t.strides[0], m = d * l.strides[0], g = 0;
						g < n.outHeight;
						++g
					)
						for (
							var y = m + g * l.strides[1], x = g * n.strideHeight - s, b = 0;
							b < r;
							++b
						) {
							var w = x + b * i;
							if (!(w < 0 || w >= n.inHeight))
								for (
									var C = b * e.strides[0], E = v + w * t.strides[1], _ = 0;
									_ < n.outWidth;
									++_
								)
									for (
										var I = y + _ * l.strides[2],
											R = _ * n.strideWidth - u,
											k = 0;
										k < o;
										++k
									) {
										var S = R + k * a;
										if (!(S < 0 || S >= n.inWidth))
											for (
												var D = C + k * e.strides[1],
													A = E + S * n.inChannels,
													T = I,
													N = D,
													F = 0;
												F < n.inChannels;
												++F
											) {
												for (var M = h[A + F], O = 0; O < c; ++O)
													f[T + O] += M * p[N + O];
												(T += c), (N += c);
											}
									}
						}
				return l.toTensor();
			}),
			(Ch.prototype.depthwiseConv2DDerInput = function (t, e, n) {
				yh([t, e], 'depthwiseConv2DDerInput');
				for (
					var r = sr(n.inShape, 'float32'),
						o = r.values,
						i = r.strides,
						a = i[0],
						s = i[1],
						u = i[2],
						c = this.readSync(t.dataId),
						l = t.strides,
						h = l[0],
						p = l[1],
						f = l[2],
						d = this.readSync(e.dataId),
						v = e.strides,
						m = v[0],
						g = v[1],
						y = v[2],
						x = n.batchSize,
						b = n.filterHeight,
						w = n.filterWidth,
						C = n.inChannels,
						E = n.inHeight,
						_ = n.inWidth,
						I = n.outChannels,
						R = n.outHeight,
						k = n.outWidth,
						S = n.strideHeight,
						D = n.strideWidth,
						A = b - 1 - n.padInfo.top,
						T = w - 1 - n.padInfo.left,
						N = I / C,
						F = 0;
					F < x;
					++F
				)
					for (var M = 0; M < C; ++M)
						for (var O = 0; O < E; ++O)
							for (
								var P = O - A,
									B = Math.max(0, Math.ceil(P / S)),
									L = Math.min(R, (b + P) / S),
									W = 0;
								W < _;
								++W
							) {
								for (
									var z = W - T,
										U = Math.max(0, Math.ceil(z / D)),
										V = Math.min(k, (w + z) / D),
										G = 0,
										H = B;
									H < L;
									++H
								)
									for (var q = H * S - P, j = U; j < V; ++j)
										for (
											var K = h * F + p * H + f * j,
												X = m * (b - 1 - q) + g * (w - 1 - (j * D - z)) + y * M,
												Y = 0;
											Y < N;
											++Y
										)
											G += c[K + (M * N + Y)] * d[X + Y];
								o[a * F + s * O + u * W + M] = G;
							}
				return r.toTensor();
			}),
			(Ch.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
				yh([t, e], 'depthwiseConv2DDerFilter');
				for (
					var r = n.strideHeight,
						o = n.strideWidth,
						i = n.filterHeight,
						a = n.filterWidth,
						s = sr(n.filterShape, 'float32'),
						u = n.padInfo.left,
						c = n.padInfo.top,
						l = n.outChannels / n.inChannels,
						h = this.bufferSync(t),
						p = this.bufferSync(e),
						f = 0;
					f < i;
					++f
				)
					for (
						var d = Math.max(0, Math.ceil((c - f) / r)),
							v = Math.min(n.outHeight, (n.inHeight + c - f) / r),
							m = 0;
						m < a;
						++m
					)
						for (
							var g = Math.max(0, Math.ceil((u - m) / o)),
								y = Math.min(n.outWidth, (n.inWidth + u - m) / o),
								x = 0;
							x < n.outChannels;
							++x
						) {
							for (
								var b = Math.trunc(x / l), w = x % l, C = 0, E = 0;
								E < n.batchSize;
								++E
							)
								for (var _ = d; _ < v; ++_)
									for (var I = f + _ * r - c, R = g; R < y; ++R) {
										var k = m + R * o - u;
										C += h.get(E, I, k, b) * p.get(E, _, R, x);
									}
							s.set(C, f, m, b, w);
						}
				return s.toTensor();
			}),
			(Ch.prototype.tile = function (t, e) {
				return yh(t, 'tile'), Uo(this.bufferSync(t), e);
			}),
			(Ch.prototype.pad = function (n, t, e) {
				yh(n, 'pad');
				var r = t.map(function (t, e) {
						return t[0] + n.shape[e] + t[1];
					}),
					o = t.map(function (t) {
						return t[0];
					}),
					i = this.bufferSync(n),
					a = sr(r, n.dtype);
				0 !== e && a.values.fill(e);
				for (var s = 0; s < n.size; s++) {
					var u = i.indexToLoc(s),
						c = u.map(function (t, e) {
							return t + o[e];
						});
					a.set.apply(a, [i.get.apply(i, u)].concat(c));
				}
				return a.toTensor();
			}),
			(Ch.prototype.transpose = function (t, e) {
				yh(t, 'transpose');
				for (var n = new Array(t.rank), r = 0; r < n.length; r++)
					n[r] = t.shape[e[r]];
				var o = this.readSync(t.dataId),
					i = sr(n, t.dtype),
					a = this.bufferSync(t);
				for (r = 0; r < t.size; ++r) {
					for (
						var s = a.indexToLoc(r), u = new Array(s.length), c = 0;
						c < u.length;
						c++
					)
						u[c] = s[e[c]];
					var l = i.locToIndex(u);
					i.values[l] = o[r];
				}
				return i.toTensor();
			}),
			(Ch.prototype.gather = function (t, e, n) {
				yh([t, e], 'gather');
				var r = t.shape.slice(),
					o = this.readSync(e.dataId);
				r[n] = o.length;
				for (
					var i = sr(r, t.dtype), a = this.bufferSync(t), s = 0;
					s < i.size;
					++s
				) {
					var u = i.indexToLoc(s),
						c = u.slice();
					c[n] = o[u[n]];
					var l = a.locToIndex(c);
					i.values[s] = a.values[l];
				}
				return i.toTensor();
			}),
			(Ch.prototype.batchToSpaceND = function (t, e, n) {
				yh([t], 'batchToSpaceND');
				var r = e.reduce(function (t, e) {
						return t * e;
					}),
					o = Pr(t.shape, e, r),
					i = Br(o.length, e.length),
					a = Lr(t.shape, e, r),
					s = Wr(n, e.length),
					u = zr(a, n, e.length);
				return t.reshape(o).transpose(i).reshape(a).slice(s, u);
			}),
			(Ch.prototype.spaceToBatchND = function (t, e, n) {
				yh([t], 'spaceToBatchND');
				var r = e.reduce(function (t, e) {
						return t * e;
					}),
					o = [[0, 0]];
				o.push.apply(o, n);
				for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
				var a = t.pad(o),
					s = Pr(a.shape, e, r, !1),
					u = Br(s.length, e.length, !1),
					c = Lr(a.shape, e, r, !1);
				return a.reshape(s).transpose(u).reshape(c);
			}),
			(Ch.prototype.pool = function (t, e, n) {
				yh(t, 'pool');
				for (
					var r = e.strideHeight,
						o = e.strideWidth,
						i = e.dilationHeight,
						a = e.dilationWidth,
						s = e.effectiveFilterHeight,
						u = e.effectiveFilterWidth,
						c = e.padInfo.top,
						l = e.padInfo.left,
						h =
							'max' === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
						p = this.readSync(t.dataId),
						f = sr(e.outShape, t.dtype),
						d = f.values,
						v = e.outShape[1] * e.outShape[2] * e.outShape[3],
						m = e.outShape[2] * e.outShape[3],
						g = e.outShape[3],
						y = 0;
					y < e.batchSize;
					++y
				)
					for (
						var x = y * v, b = y * t.strides[0], w = 0;
						w < e.inChannels;
						++w
					)
						for (var C = 0; C < e.outHeight; ++C)
							for (
								var E = C * r - c,
									_ = Math.max(0, E),
									I = Math.min(e.inHeight, s + E),
									R = x + C * m,
									k = 0;
								k < e.outWidth;
								++k
							) {
								for (
									var S = k * o - l,
										D = Math.max(0, S),
										A = Math.min(e.inWidth, u + S),
										T = h,
										N = 0,
										F = 0,
										M = _;
									M < I;
									M += i
								) {
									for (var O = b + M * t.strides[1], P = D; P < A; P += a) {
										var B = p[O + P * t.strides[2] + w];
										'max' === n && T < B
											? (T = B)
											: 'avg' === n && ((N += B), F++);
									}
									if (isNaN(T)) break;
								}
								d[R + k * g + w] = 'avg' === n ? N / F : T;
							}
				return f.toTensor();
			}),
			(Ch.prototype.maxPool = function (t, e) {
				return this.pool(t, e, 'max');
			}),
			(Ch.prototype.maxPoolPositions = function (t, e) {
				for (
					var n = sr(e.outShape, 'int32'),
						r = e.strideHeight,
						o = e.strideWidth,
						i = e.dilationHeight,
						a = e.dilationWidth,
						s = e.effectiveFilterHeight,
						u = e.effectiveFilterWidth,
						c = e.padInfo.top,
						l = e.padInfo.left,
						h = this.bufferSync(t),
						p = 0;
					p < e.batchSize;
					++p
				)
					for (var f = 0; f < e.inChannels; ++f)
						for (var d = 0; d < e.outHeight; ++d) {
							for (var v = d * r - c, m = v; m < 0; ) m += i;
							for (
								var g = Math.min(e.inHeight, s + v), y = 0;
								y < e.outWidth;
								++y
							) {
								for (var x = y * o - l, b = x; b < 0; ) b += a;
								for (
									var w = Math.min(e.inWidth, u + x),
										C = Number.NEGATIVE_INFINITY,
										E = -1,
										_ = m;
									_ < g;
									_ += i
								)
									for (var I = _ - v, R = b; R < w; R += a) {
										var k = R - x,
											S = h.get(p, _, R, f);
										C < S && ((C = S), (E = I * u + k));
									}
								n.set(E, p, d, y, f);
							}
						}
				return n.toTensor();
			}),
			(Ch.prototype.maxPoolBackprop = function (t, e, n, r) {
				yh([e, n], 'maxPoolBackprop');
				for (
					var o = this.maxPoolPositions(e, r),
						i = r.strideHeight,
						a = r.strideWidth,
						s = r.dilationHeight,
						u = r.dilationWidth,
						c = r.effectiveFilterHeight,
						l = r.effectiveFilterWidth,
						h = l - 1 - r.padInfo.left,
						p = c - 1 - r.padInfo.top,
						f = sr(e.shape, 'float32'),
						d = this.bufferSync(o),
						v = this.bufferSync(t),
						m = 0;
					m < r.batchSize;
					++m
				)
					for (var g = 0; g < r.inChannels; ++g)
						for (var y = 0; y < r.inHeight; ++y)
							for (var x = 0; x < r.inWidth; ++x) {
								for (var b = y - p, w = x - h, C = 0, E = 0; E < c; E += s) {
									var _ = (b + E) / i;
									if (!(_ < 0 || _ >= r.outHeight || Math.floor(_) !== _))
										for (var I = 0; I < l; I += u) {
											var R = (w + I) / a;
											if (!(R < 0 || R >= r.outWidth || Math.floor(R) !== R)) {
												var k =
													c * l - 1 - d.get(m, _, R, g) === E * l + I ? 1 : 0;
												0 != k && (C += v.get(m, _, R, g) * k);
											}
										}
								}
								f.set(C, m, y, x, g);
							}
				return f.toTensor();
			}),
			(Ch.prototype.avgPoolBackprop = function (t, e, n) {
				yh([t, e], 'avgPoolBackprop');
				for (
					var r = n.strideHeight,
						o = n.strideWidth,
						i = n.filterHeight,
						a = n.filterWidth,
						s = n.dilationHeight,
						u = n.dilationWidth,
						c = n.effectiveFilterHeight,
						l = n.effectiveFilterWidth,
						h = l - 1 - n.padInfo.left,
						p = c - 1 - n.padInfo.top,
						f = sr(e.shape, 'float32'),
						d = 1 / (i * a),
						v = this.bufferSync(t),
						m = 0;
					m < n.batchSize;
					++m
				)
					for (var g = 0; g < n.inChannels; ++g)
						for (var y = 0; y < n.inHeight; ++y)
							for (var x = 0; x < n.inWidth; ++x) {
								for (var b = y - p, w = x - h, C = 0, E = 0; E < c; E += s) {
									var _ = (b + E) / r;
									if (!(_ < 0 || _ >= n.outHeight || Math.floor(_) !== _))
										for (var I = 0; I < l; I += u) {
											var R = (w + I) / o;
											R < 0 ||
												R >= n.outWidth ||
												Math.floor(R) !== R ||
												(C += v.get(m, _, R, g));
										}
								}
								f.set(C * d, m, y, x, g);
							}
				return f.toTensor();
			}),
			(Ch.prototype.pool3d = function (t, e, n) {
				yh(t, 'pool3d');
				for (
					var r = e.strideDepth,
						o = e.strideHeight,
						i = e.strideWidth,
						a = e.dilationDepth,
						s = e.dilationHeight,
						u = e.dilationWidth,
						c = e.effectiveFilterDepth,
						l = e.effectiveFilterHeight,
						h = e.effectiveFilterWidth,
						p = e.padInfo.front,
						f = e.padInfo.top,
						d = e.padInfo.left,
						v =
							'max' === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
						m = this.readSync(t.dataId),
						g = sr(e.outShape, t.dtype),
						y = g.values,
						x = e.outShape[1] * e.outShape[2] * e.outShape[3] * e.outShape[4],
						b = e.outShape[2] * e.outShape[3] * e.outShape[4],
						w = e.outShape[3] * e.outShape[4],
						C = e.outShape[4],
						E = 0;
					E < e.batchSize;
					++E
				)
					for (
						var _ = E * x, I = E * t.strides[0], R = 0;
						R < e.inChannels;
						++R
					)
						for (var k = 0; k < e.outDepth; ++k) {
							for (var S = k * r - p, D = S; D < 0; ) D += a;
							for (
								var A = Math.min(e.inDepth, c + S), T = _ + k * b, N = 0;
								N < e.outHeight;
								++N
							) {
								for (var F = N * o - f, M = F; M < 0; ) M += s;
								for (
									var O = Math.min(e.inHeight, l + F), P = T + N * w, B = 0;
									B < e.outWidth;
									++B
								) {
									for (var L = B * i - d, W = L; W < 0; ) W += u;
									for (
										var z = Math.min(e.inWidth, h + L),
											U = P + B * C,
											V = v,
											G = 0,
											H = 0,
											q = D;
										q < A;
										q += a
									) {
										for (var j = I + q * t.strides[1], K = M; K < O; K += s) {
											for (var X = j + K * t.strides[2], Y = W; Y < z; Y += u) {
												var $ = m[X + Y * t.strides[3] + R];
												if (
													('max' === n && V < $
														? (V = $)
														: 'avg' === n && ((G += $), H++),
													isNaN(V))
												)
													break;
											}
											if (isNaN(V)) break;
										}
										if (isNaN(V)) break;
									}
									y[U + R] = 'avg' === n ? G / H : V;
								}
							}
						}
				return g.toTensor();
			}),
			(Ch.prototype.avgPool3d = function (t, e) {
				return yh(t, 'avgPool3d'), this.pool3d(t, e, 'avg').toFloat();
			}),
			(Ch.prototype.avgPool3dBackprop = function (t, e, n) {
				yh([t, e], 'avgPool3dBackprop');
				for (
					var r = n.strideDepth,
						o = n.strideHeight,
						i = n.strideWidth,
						a = n.filterDepth,
						s = n.filterHeight,
						u = n.filterWidth,
						c = n.dilationDepth,
						l = n.dilationHeight,
						h = n.dilationWidth,
						p = n.effectiveFilterDepth,
						f = n.effectiveFilterHeight,
						d = n.effectiveFilterWidth,
						v = p - 1 - n.padInfo.front,
						m = d - 1 - n.padInfo.left,
						g = f - 1 - n.padInfo.top,
						y = sr(e.shape, 'float32'),
						x = 1 / (a * s * u),
						b = this.bufferSync(t),
						w = 0;
					w < n.batchSize;
					++w
				)
					for (var C = 0; C < n.inChannels; ++C)
						for (var E = 0; E < n.inDepth; ++E)
							for (var _ = 0; _ < n.inHeight; ++_)
								for (var I = 0; I < n.inWidth; ++I) {
									for (
										var R = E - v, k = _ - g, S = I - m, D = 0, A = 0;
										A < p;
										A += c
									) {
										var T = (R + A) / r;
										if (!(T < 0 || T >= n.outDepth || Math.floor(T) !== T))
											for (var N = 0; N < f; N += l) {
												var F = (k + N) / o;
												if (!(F < 0 || F >= n.outHeight || Math.floor(F) !== F))
													for (var M = 0; M < d; M += h) {
														var O = (S + M) / i;
														O < 0 ||
															O >= n.outWidth ||
															Math.floor(O) !== O ||
															(D += b.get(w, T, F, O, C));
													}
											}
									}
									y.set(D * x, w, E, _, I, C);
								}
				return y.toTensor();
			}),
			(Ch.prototype.maxPool3d = function (t, e) {
				return yh(t, 'maxPool3d'), this.pool3d(t, e, 'max').toFloat();
			}),
			(Ch.prototype.maxPool3dPositions = function (t, e) {
				for (
					var n = sr(e.outShape, 'int32'),
						r = e.strideDepth,
						o = e.strideHeight,
						i = e.strideWidth,
						a = e.dilationDepth,
						s = e.dilationHeight,
						u = e.dilationWidth,
						c = e.effectiveFilterDepth,
						l = e.effectiveFilterHeight,
						h = e.effectiveFilterWidth,
						p = e.padInfo.front,
						f = e.padInfo.top,
						d = e.padInfo.left,
						v = this.bufferSync(t),
						m = 0;
					m < e.batchSize;
					++m
				)
					for (var g = 0; g < e.inChannels; ++g)
						for (var y = 0; y < e.outDepth; ++y) {
							for (var x = y * r - p, b = x; b < 0; ) b += a;
							for (
								var w = Math.min(e.inDepth, c + x), C = 0;
								C < e.outHeight;
								++C
							) {
								for (var E = C * o - f, _ = E; _ < 0; ) _ += s;
								for (
									var I = Math.min(e.inHeight, l + E), R = 0;
									R < e.outWidth;
									++R
								) {
									for (var k = R * i - d, S = k; S < 0; ) S += u;
									for (
										var D = Math.min(e.inWidth, h + k),
											A = Number.NEGATIVE_INFINITY,
											T = -1,
											N = b;
										N < w;
										N += a
									)
										for (var F = N - x, M = _; M < I; M += s)
											for (var O = M - E, P = S; P < D; P += u) {
												var B = P - k,
													L = v.get(m, N, M, P, g);
												A <= L && ((A = L), (T = F * l * h + O * l + B));
											}
									n.set(T, m, y, C, R, g);
								}
							}
						}
				return n.toTensor();
			}),
			(Ch.prototype.maxPool3dBackprop = function (t, e, n, r) {
				yh([e, n], 'maxPool3dBackprop');
				for (
					var o = this.maxPool3dPositions(e, r),
						i = r.strideDepth,
						a = r.strideHeight,
						s = r.strideWidth,
						u = r.dilationDepth,
						c = r.dilationHeight,
						l = r.dilationWidth,
						h = r.effectiveFilterDepth,
						p = r.effectiveFilterHeight,
						f = r.effectiveFilterWidth,
						d = h - 1 - r.padInfo.front,
						v = f - 1 - r.padInfo.left,
						m = p - 1 - r.padInfo.top,
						g = sr(e.shape, 'float32'),
						y = this.bufferSync(o),
						x = this.bufferSync(t),
						b = 0;
					b < r.batchSize;
					++b
				)
					for (var w = 0; w < r.inChannels; ++w)
						for (var C = 0; C < r.inDepth; ++C)
							for (var E = 0; E < r.inHeight; ++E)
								for (var _ = 0; _ < r.inWidth; ++_) {
									for (
										var I = C - d, R = E - m, k = _ - v, S = 0, D = 0;
										D < h;
										D += u
									) {
										var A = (I + D) / i;
										if (!(A < 0 || A >= r.outDepth || Math.floor(A) !== A))
											for (var T = 0; T < p; T += c) {
												var N = (R + T) / a;
												if (!(N < 0 || N >= r.outHeight || Math.floor(N) !== N))
													for (var F = 0; F < f; F += l) {
														var M = (k + F) / s;
														if (
															!(M < 0 || M >= r.outWidth || Math.floor(M) !== M)
														) {
															var O =
																h * p * f - 1 - y.get(b, A, N, M, w) ===
																D * p * f + T * f + F
																	? 1
																	: 0;
															0 != O && (S += x.get(b, A, N, M, w) * O);
														}
													}
											}
									}
									g.set(S, b, C, E, _, w);
								}
				return g.toTensor();
			}),
			(Ch.prototype.cast = function (t, e) {
				return So(t, e, this);
			}),
			(Ch.prototype.reshape = function (t, e) {
				return Do(t, e);
			}),
			(Ch.prototype.avgPool = function (t, e) {
				return yh(t, 'avgPool'), this.pool(t, e, 'avg').toFloat();
			}),
			(Ch.prototype.resizeBilinear = function (t, e, n, r) {
				yh(t, 'resizeBilinear');
				for (
					var o = t.shape,
						i = o[0],
						a = o[1],
						s = o[2],
						u = o[3],
						c = this.readSync(t.dataId),
						l = new Float32Array(L([i, e, n, u])),
						h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s],
						p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n],
						f = 0,
						d = h[0] / p[0],
						v = h[1] / p[1],
						m = 0;
					m < i;
					m++
				)
					for (var g = 0; g < e; g++)
						for (
							var y = d * g,
								x = Math.floor(y),
								b = y - x,
								w = Math.min(a - 1, Math.ceil(y)),
								C = m * t.strides[0] + x * t.strides[1],
								E = m * t.strides[0] + w * t.strides[1],
								_ = 0;
							_ < n;
							_++
						)
							for (
								var I = v * _,
									R = Math.floor(I),
									k = I - R,
									S = Math.min(s - 1, Math.ceil(I)),
									D = C + R * t.strides[2],
									A = E + R * t.strides[2],
									T = C + S * t.strides[2],
									N = E + S * t.strides[2],
									F = 0;
								F < u;
								F++
							) {
								var M = c[D + F],
									O = c[A + F],
									P = M + (c[T + F] - M) * k,
									B = P + (O + (c[N + F] - O) * k - P) * b;
								l[f++] = B;
							}
				return En(l, [i, e, n, u]);
			}),
			(Ch.prototype.resizeBilinearBackprop = function (t, e, n) {
				yh([t, e], 'resizeBilinearBackprop');
				for (
					var r = e.shape,
						o = r[0],
						i = r[1],
						a = r[2],
						s = r[3],
						u = t.shape,
						c = u[1],
						l = u[2],
						h = new Float32Array(o * i * a * s),
						p = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a],
						f = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l],
						d = p[0] / f[0],
						v = p[1] / f[1],
						m = this.readSync(t.dataId),
						g = 0,
						y = 0;
					y < o;
					y++
				)
					for (var x = y * e.strides[0], b = 0; b < c; b++)
						for (
							var w = b * d,
								C = Math.floor(w),
								E = Math.min(Math.ceil(w), i - 1),
								_ = x + C * e.strides[1],
								I = x + E * e.strides[1],
								R = w - C,
								k = 1 - R,
								S = 0;
							S < l;
							S++
						)
							for (
								var D = S * v,
									A = Math.floor(D),
									T = Math.min(Math.ceil(D), a - 1),
									N = D - A,
									F = 1 - N,
									M = _ + A * e.strides[2],
									O = _ + T * e.strides[2],
									P = I + A * e.strides[2],
									B = I + T * e.strides[2],
									L = k * F,
									W = k * N,
									z = R * F,
									U = R * N,
									V = 0;
								V < s;
								V++
							) {
								var G = m[g++];
								(h[M + V] += G * L),
									(h[O + V] += G * W),
									(h[P + V] += G * z),
									(h[B + V] += G * U);
							}
				return Dn(h, [o, a, i, s], e.dtype);
			}),
			(Ch.prototype.resizeNearestNeighbor = function (t, e, n, r) {
				yh(t, 'resizeNearestNeighbor');
				for (
					var o = t.shape,
						i = o[0],
						a = o[1],
						s = o[2],
						u = o[3],
						c = this.readSync(t.dataId),
						l = new Float32Array(i * e * n * u),
						h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s],
						p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n],
						f = h[0] / p[0],
						d = h[1] / p[1],
						v = 0,
						m = 0;
					m < i;
					m++
				)
					for (var g = m * t.strides[0], y = 0; y < e; y++)
						for (
							var x = f * y,
								b =
									g +
									Math.min(a - 1, r ? Math.round(x) : Math.floor(x)) *
										t.strides[1],
								w = 0;
							w < n;
							w++
						)
							for (
								var C = d * w,
									E =
										b +
										Math.min(s - 1, r ? Math.round(C) : Math.floor(C)) *
											t.strides[2],
									_ = 0;
								_ < u;
								_++
							) {
								var I = c[E + _];
								l[v++] = I;
							}
				return En(l, [i, e, n, u], t.dtype);
			}),
			(Ch.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
				yh([t, e], 'resizeNearestNeighborBackprop');
				for (
					var r = e.shape,
						o = r[0],
						i = r[1],
						a = r[2],
						s = r[3],
						u = t.shape,
						c = u[1],
						l = u[2],
						h = new Float32Array(o * i * a * s),
						p = this.readSync(t.dataId),
						f = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a],
						d = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l],
						v = f[0] / d[0],
						m = f[1] / d[1],
						g = 1 / v,
						y = 1 / m,
						x = 2 * Math.ceil(g) + 2,
						b = 2 * Math.ceil(y) + 2,
						w = 0;
					w < o;
					w++
				)
					for (var C = w * e.strides[0], E = 0; E < i; E++)
						for (
							var _ = C + E * e.strides[1],
								I = Math.floor(E * g),
								R = Math.floor(I - x / 2),
								k = 0;
							k < a;
							k++
						)
							for (
								var S = _ + k * e.strides[2],
									D = Math.floor(k * y),
									A = Math.floor(D - b / 2),
									T = 0;
								T < s;
								T++
							) {
								for (var N = 0, F = 0; F < x; F++) {
									var M = F + R;
									if (!(M < 0 || c <= M)) {
										var O = C + M * t.strides[1],
											P = M * v;
										if (
											E === Math.min(i - 1, n ? Math.round(P) : Math.floor(P))
										)
											for (var B = 0; B < b; B++) {
												var L = B + A;
												if (!(L < 0 || l <= L)) {
													var W = O + L * t.strides[2],
														z = L * m;
													k ===
														Math.min(
															a - 1,
															n ? Math.round(z) : Math.floor(z)
														) && (N += p[W + T]);
												}
											}
									}
								}
								h[S + T] = N;
							}
				return Dn(h, e.shape, e.dtype);
			}),
			(Ch.prototype.batchNormalization = function (t, e, n, r, o, i) {
				yh([t, e, n, o, i], 'batchNorm');
				for (
					var a = this.readSync(t.dataId),
						s = this.readSync(e.dataId),
						u = this.readSync(n.dataId),
						c = o ? this.readSync(o.dataId) : new Float32Array([1]),
						l = i ? this.readSync(i.dataId) : new Float32Array([0]),
						h = new Float32Array(a.length),
						p = l.length,
						f = c.length,
						d = u.length,
						v = s.length,
						m = 0,
						g = 0,
						y = 0,
						x = 0,
						b = 0;
					b < a.length;
					++b
				)
					(h[b] = l[m++] + ((a[b] - s[g++]) * c[y++]) / Math.sqrt(u[x++] + r)),
						p <= m && (m = 0),
						v <= g && (g = 0),
						f <= y && (y = 0),
						d <= x && (x = 0);
				return Dn(h, t.shape);
			}),
			(Ch.prototype.localResponseNormalization4D = function (t, a, e, n, r) {
				yh(t, 'localResponseNormalization4D');
				var s = t.shape[3],
					u = s - 1,
					c = this.readSync(t.dataId),
					o = t.size,
					i = new Float32Array(o);
				function l(t) {
					for (
						var e = t % s,
							n = t - e + Math.max(0, e - a),
							r = t - e + Math.min(e + a, u),
							o = 0;
						n <= r;
						n++
					) {
						var i = c[n];
						o += i * i;
					}
					return o;
				}
				for (var h = 0; h < o; h++) {
					var p = l(h),
						f = c[h] * Math.pow(e + n * p, -r);
					i[h] = f;
				}
				return Dn(i, t.shape);
			}),
			(Ch.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
				yh(t, 'LRNGrad');
				for (
					var s = t.shape[3],
						u = this.readSync(t.dataId),
						c = this.readSync(e.dataId),
						l = this.readSync(n.dataId),
						h = new Float32Array(t.size),
						p = t.size,
						f = 0;
					f < p;
					f++
				) {
					for (
						var d = f % s,
							v = f - d + Math.max(0, d - r),
							m = f - d + Math.min(s, d + r + 1),
							g = 0,
							y = v;
						y < m;
						y++
					)
						g += Math.pow(c[y], 2);
					for (g = i * g + o, y = v; y < m; y++) {
						var x = (-2 * i * a * c[y] * l[f]) / g;
						f === y && (x += Math.pow(g, -a)), (x *= u[f]), (h[y] += x);
					}
				}
				return Dn(h, t.shape);
			}),
			(Ch.prototype.multinomial = function (t, e, n, r) {
				yh(t, 'multinomial');
				for (
					var o = e ? t : io(t),
						i = o.shape[0],
						a = o.shape[1],
						s = Mn([i, n], 'int32'),
						u = this.readSync(s.dataId),
						c = this.readSync(o.dataId),
						l = 0;
					l < i;
					++l
				) {
					var h = l * a,
						p = new Float32Array(a - 1);
					p[0] = c[h];
					for (var f = 1; f < p.length; ++f) p[f] = p[f - 1] + c[h + f];
					for (var d = tr(r.toString()), v = l * n, m = 0; m < n; ++m) {
						var g = d();
						u[v + m] = p.length;
						for (var y = 0; y < p.length; y++)
							if (g < p[y]) {
								u[v + m] = y;
								break;
							}
					}
				}
				return s;
			}),
			(Ch.prototype.oneHot = function (t, e, n, r) {
				yh(t, 'oneHot');
				var o = new Float32Array(t.size * e);
				o.fill(r);
				for (var i = this.readSync(t.dataId), a = 0; a < t.size; ++a)
					0 <= i[a] && i[a] < e && (o[a * e + i[a]] = n);
				return kn(o, [t.size, e], 'int32');
			}),
			(Ch.prototype.nonMaxSuppression = function (t, e, n, r, o) {
				return (
					yh(t, 'nonMaxSuppression'),
					Oo(this.readSync(t.dataId), this.readSync(e.dataId), n, r, o)
				);
			}),
			(Ch.prototype.fft = function (t) {
				return this.fftBatch(t, !1);
			}),
			(Ch.prototype.ifft = function (t) {
				return this.fftBatch(t, !0);
			}),
			(Ch.prototype.fftBatch = function (t, e) {
				for (
					var n = t.shape[0],
						r = t.shape[1],
						o = sr(t.shape, 'float32'),
						i = sr(t.shape, 'float32'),
						a = wn(t).as2D(n, r),
						s = Cn(t).as2D(n, r),
						u = 0;
					u < n;
					u++
				)
					for (
						var c = a.slice([u, 0], [1, r]),
							l = s.slice([u, 0], [1, r]),
							h = bn(c, l),
							p = this.readSync(this.fftImpl(h, e).dataId),
							f = 0;
						f < r;
						f++
					) {
						var d = Fo(p, f);
						(o.values[u * r + f] = d.real), (i.values[u * r + f] = d.imag);
					}
				return bn(o.toTensor(), i.toTensor()).as2D(n, r);
			}),
			(Ch.prototype.fftImpl = function (t, e) {
				var n = t.as1D(),
					r = n.size;
				if (this.isExponentOf2(r)) {
					var o = this.fftRadix2(n, r, e).as2D(t.shape[0], t.shape[1]);
					return e && (o = bn(wn(o).div(In(r)), Cn(o).div(In(r)))), o;
				}
				var i = this.readSync(t.dataId),
					a = (function (t) {
						for (
							var e = new Float32Array(t.length / 2),
								n = new Float32Array(t.length / 2),
								r = 0;
							r < t.length;
							r += 2
						)
							(e[r / 2] = t[r]), (n[r / 2] = t[r + 1]);
						return { real: e, imag: n };
					})(this.fourierTransformByMatmul(i, r, e));
				return bn(a.real, a.imag).as2D(t.shape[0], t.shape[1]);
			}),
			(Ch.prototype.isExponentOf2 = function (t) {
				return 0 == (t & (t - 1));
			}),
			(Ch.prototype.fftRadix2 = function (t, e, n) {
				if (1 === e) return t;
				var r = this.readSync(t.dataId),
					o = e / 2,
					i = (function (t) {
						for (
							var e = Math.ceil(t.length / 4),
								n = new Float32Array(e),
								r = new Float32Array(e),
								o = 0;
							o < t.length;
							o += 4
						)
							(n[Math.floor(o / 4)] = t[o]), (r[Math.floor(o / 4)] = t[o + 1]);
						return { real: n, imag: r };
					})(r),
					a = bn(i.real, i.imag).as1D(),
					s = (function (t) {
						for (
							var e = Math.floor(t.length / 4),
								n = new Float32Array(e),
								r = new Float32Array(e),
								o = 2;
							o < t.length;
							o += 4
						)
							(n[Math.floor(o / 4)] = t[o]), (r[Math.floor(o / 4)] = t[o + 1]);
						return { real: n, imag: r };
					})(r),
					u = bn(s.real, s.imag).as1D();
				(a = this.fftRadix2(a, o, n)), (u = this.fftRadix2(u, o, n));
				var c = (function (t, e) {
						for (
							var n = new Float32Array(t / 2),
								r = new Float32Array(t / 2),
								o = 0;
							o < Math.ceil(t / 2);
							o++
						) {
							var i = (e ? 2 : -2) * Math.PI * (o / t);
							(n[o] = Math.cos(i)), (r[o] = Math.sin(i));
						}
						return { real: n, imag: r };
					})(e, n),
					l = bn(c.real, c.imag).mul(u),
					h = a.add(l),
					p = a.sub(l),
					f = wn(h).concat(wn(p)),
					d = Cn(h).concat(Cn(p));
				return bn(f, d).as1D();
			}),
			(Ch.prototype.fourierTransformByMatmul = function (t, e, n) {
				for (var r = new Float32Array(2 * e), o = 0; o < e; o++) {
					for (var i = 0, a = 0, s = 0; s < e; s++) {
						var u =
								((d = o * s),
								(v = e),
								(m = (n ? 2 : -2) * Math.PI * (d / v)),
								{ real: Math.cos(m), imag: Math.sin(m) }),
							c = Fo(t, s);
						(i += c.real * u.real - c.imag * u.imag),
							(a += c.real * u.imag + c.imag * u.real);
					}
					n && ((i /= e), (a /= e)),
						(h = i),
						(p = a),
						((l = r)[2 * (f = o)] = h),
						(l[2 * f + 1] = p);
				}
				var l, h, p, f, d, v, m;
				return r;
			}),
			(Ch.prototype.depthToSpace = function (t, e, n) {
				P('NHWC' === n, function () {
					return (
						'Only NHWC dataFormat supported on CPU for depthToSpace. Got ' + n
					);
				}),
					P(1 < e, function () {
						return 'blockSize should be > 1 for depthToSpace, but was: ' + e;
					});
				for (
					var r = t.shape[0],
						o = t.shape[1],
						i = t.shape[2],
						a = t.shape[3],
						s = o * e,
						u = i * e,
						c = a / (e * e),
						l = this.readSync(t.dataId),
						h = new Float32Array(r * s * u * c),
						p = 0,
						f = 0;
					f < r;
					++f
				)
					for (var d = 0; d < s; ++d)
						for (var v = Math.floor(d / e), m = d % e, g = 0; g < u; ++g)
							for (
								var y = Math.floor(g / e), x = (m * e + (g % e)) * c, b = 0;
								b < c;
								++b
							) {
								var w = b + x + a * (y + i * (v + o * f));
								h[p++] = l[w];
							}
				return Dn(h, [r, s, u, c]);
			}),
			(Ch.prototype.broadcastedBinaryOp = function (a, s, t, u) {
				var e = vo(a.shape, s.shape),
					c = sr(e, t),
					l = this.readSync(a.dataId),
					h = this.readSync(s.dataId),
					p = po(a.shape, e),
					f = po(s.shape, e),
					d = c.values;
				if (p.length + f.length === 0)
					for (var n = 0; n < d.length; ++n)
						d[n] = u(l[n % l.length], h[n % h.length]);
				else {
					var v = this.bufferSync(a),
						m = this.bufferSync(s),
						r = function (t) {
							var e = c.indexToLoc(t),
								n = e.slice(-a.rank);
							p.forEach(function (t) {
								return (n[t] = 0);
							});
							var r = v.locToIndex(n),
								o = e.slice(-s.rank);
							f.forEach(function (t) {
								return (o[t] = 0);
							});
							var i = m.locToIndex(o);
							d[t] = u(l[r], h[i]);
						};
					for (n = 0; n < d.length; ++n) r(n);
				}
				return c.toTensor();
			}),
			(Ch.prototype.broadcastedBinaryComplexOp = function (s, u, c) {
				var t = vo(s.shape, u.shape),
					l = sr(t, 'float32'),
					e = sr(t, 'float32'),
					h = this.readSync(s.dataId),
					p = this.readSync(u.dataId),
					f = po(s.shape, t),
					d = po(u.shape, t),
					v = l.values,
					m = e.values;
				if (f.length + d.length === 0)
					for (var n = 0; n < v.length; n++) {
						var r = n % h.length,
							o = n % p.length,
							i = c(h[2 * r], h[2 * r + 1], p[2 * o], p[2 * o + 1]);
						(v[n] = i.real), (m[n] = i.imag);
					}
				else {
					var g = this.bufferSync(this.data.get(s.dataId).complexTensors.real),
						y = this.bufferSync(this.data.get(u.dataId).complexTensors.real),
						a = function (t) {
							var e = l.indexToLoc(t),
								n = e.slice(-s.rank);
							f.forEach(function (t) {
								return (n[t] = 0);
							});
							var r = g.locToIndex(n),
								o = e.slice(-u.rank);
							d.forEach(function (t) {
								return (o[t] = 0);
							});
							var i = y.locToIndex(o),
								a = c(h[2 * r], h[2 * r + 1], p[2 * i], p[2 * i + 1]);
							(v[t] = a.real), (m[t] = a.imag);
						};
					for (n = 0; n < v.length; n++) a(n);
				}
				return this.complex(l.toTensor(), e.toTensor());
			}),
			(Ch.prototype.split = function (t, e, n) {
				return zo(t, e, n);
			}),
			(Ch.prototype.dispose = function () {}),
			(Ch.prototype.floatPrecision = function () {
				return 32;
			}),
			(Ch.prototype.epsilon = function () {
				return 1e-7;
			}),
			(Ch.prototype.cropAndResize = function (t, e, n, r, o, i) {
				for (
					var a = t.shape,
						s = a[0],
						u = a[1],
						c = a[2],
						l = a[3],
						h = e.shape[0],
						p = r[0],
						f = r[1],
						d = sr([h, p, f, l], 'float32'),
						v = this.readSync(e.dataId),
						m = this.readSync(n.dataId),
						g = this.readSync(t.dataId),
						y = t.strides,
						x = d.strides,
						b = 0;
					b < h;
					b++
				) {
					var w = 4 * b,
						C = v[w],
						E = v[1 + w],
						_ = v[2 + w],
						I = v[3 + w],
						R = m[b];
					if (!(s <= R))
						for (
							var k = 1 < p ? ((_ - C) * (u - 1)) / (p - 1) : 0,
								S = 1 < f ? ((I - E) * (c - 1)) / (f - 1) : 0,
								D = 0;
							D < p;
							D++
						) {
							var A = 1 < p ? C * (u - 1) + D * k : 0.5 * (C + _) * (u - 1);
							if (A < 0 || u - 1 < A)
								for (var T = 0; T < f; T++)
									for (var N = 0; N < l; N++) {
										var F = N + T * x[2] + D * x[1] + b * x[0];
										d.values[F] = i;
									}
							else if ('bilinear' === o) {
								var M = Math.floor(A),
									O = Math.ceil(A),
									P = A - M;
								for (T = 0; T < f; T++)
									if (
										(q =
											1 < f ? E * (c - 1) + T * S : 0.5 * (E + I) * (c - 1)) <
											0 ||
										c - 1 < q
									)
										for (N = 0; N < l; N++)
											(F = N + T * x[2] + D * x[1] + b * x[0]),
												(d.values[F] = i);
									else {
										var B = Math.floor(q),
											L = Math.ceil(q),
											W = q - B;
										for (N = 0; N < l; N++) {
											var z = g[(F = N + B * y[2] + M * y[1] + R * y[0])],
												U = g[(F = N + L * y[2] + M * y[1] + R * y[0])],
												V = g[(F = N + B * y[2] + O * y[1] + R * y[0])],
												G = z + (U - z) * W,
												H =
													V +
													(g[(F = N + L * y[2] + O * y[1] + R * y[0])] - V) * W;
											(F = N + T * x[2] + D * x[1] + b * x[0]),
												(d.values[F] = G + (H - G) * P);
										}
									}
							} else
								for (T = 0; T < f; ++T) {
									var q;
									if (
										(q =
											1 < f ? E * (c - 1) + T * S : 0.5 * (E + I) * (c - 1)) <
											0 ||
										c - 1 < q
									)
										for (N = 0; N < l; N++)
											(F = N + T * x[2] + D * x[1] + b * x[0]),
												(d.values[F] = i);
									else {
										var j = Math.round(q),
											K = Math.round(A);
										for (N = 0; N < l; N++) {
											var X = N + j * y[2] + K * y[1] + R * y[0],
												Y = N + T * x[2] + D * x[1] + b * x[0];
											d.values[Y] = g[X];
										}
									}
								}
						}
				}
				return d.toTensor();
			}),
			(Ch.prototype.sparseToDense = function (t, e, n, r) {
				var o = jr(0, t, n),
					i = o.sliceRank,
					a = o.numUpdates,
					s = o.sliceSize,
					u = o.strides,
					c = o.outputSize;
				return this.scatter(t, e, n, c, s, a, i, u, r, !1);
			}),
			(Ch.prototype.gatherND = function (t, e) {
				var n = e.shape,
					r = n[n.length - 1],
					o = Ur(t, e),
					i = o[0],
					a = o[1],
					s = o[2],
					u = o[3];
				if (0 === a) return En([], i, t.dtype);
				for (
					var c = new ft([a, s], t.dtype),
						l = this.readSync(e.dataId),
						h = this.readSync(t.dataId),
						p = 0;
					p < a;
					p++
				) {
					for (var f = [], d = 0, v = 0; v < r; v++) {
						var m = l[p * r + v];
						(d += m * u[v]), f.push(m);
					}
					if (d < 0 || d >= t.size / s)
						throw new Error(
							'Invalid indices: ' + f + ' does not index into ' + t.shape
						);
					for (var g = 0; g < s; g++) c.values[p * s + g] = h[d * s + g];
				}
				return c.toTensor().reshape(i);
			}),
			(Ch.prototype.scatterND = function (t, e, n) {
				var r = jr(0, t, n),
					o = r.sliceRank,
					i = r.numUpdates,
					a = r.sliceSize,
					s = r.strides,
					u = r.outputSize,
					c = In(0);
				return this.scatter(t, e, n, u, a, i, o, s, c, !0);
			}),
			(Ch.prototype.fill = function (t, e, n) {
				var r = F((n = n || j(e)), L(t));
				return r.fill(e), qt.makeTensor(r, t, n, this);
			}),
			(Ch.prototype.onesLike = function (t) {
				if ('string' === t.dtype)
					throw new Error('onesLike is not supported for string tensors');
				return this.fill(t.shape, 1, t.dtype);
			}),
			(Ch.prototype.zerosLike = function (t) {
				var e = F(t.dtype, L(t.shape));
				return this.makeOutput(e, t.shape, t.dtype);
			}),
			(Ch.prototype.linspace = function (t, e, n) {
				return Ao(t, e, n);
			}),
			(Ch.prototype.scatter = function (t, e, n, r, o, i, a, s, u, c) {
				var l = [r / o, o],
					h = this.readSync(t.dataId),
					p = this.readSync(e.dataId);
				if (0 === r) return En([], n, e.dtype);
				var f = new ft(l, e.dtype);
				f.values.fill(this.readSync(u.dataId)[0]);
				for (var d = 0; d < i; d++) {
					for (var v = [], m = 0, g = 0; g < a; g++) {
						var y = h[d * a + g];
						v.push(y), (m += y * s[g]);
					}
					if (m < 0 || r / o <= m)
						throw new Error(
							'Invalid indices: ' + v + ' does not index into ' + n
						);
					for (var x = 0; x < o; x++)
						c
							? (f.values[m * o + x] += p[d * o + x])
							: (f.values[m * o + x] = 0 === e.rank ? p[0] : p[d * o + x]);
				}
				return f.toTensor().reshape(n);
			}),
			Ch);
	function Ch() {
		var t = bh.call(this) || this;
		return (t.blockSize = 48), (t.firstUse = !0), (t.data = new so(t, qt)), t;
	}
	qt.registerBackend(
		'cpu',
		function () {
			return new wh();
		},
		1
	),
		s({
			kernelName: 'Square',
			backendName: 'cpu',
			kernelFunc: function (t) {
				var e = t.inputs,
					n = t.backend,
					r = e.x,
					o = n;
				yh(r, 'square');
				for (
					var i = o.data.get(r.dataId).values,
						a = new Float32Array(i.length),
						s = 0;
					s < i.length;
					++s
				) {
					var u = i[s];
					a[s] = u * u;
				}
				return {
					dataId: o.write(a, r.shape, r.dtype),
					shape: r.shape,
					dtype: r.dtype,
				};
			},
		}),
		s({
			kernelName: 'NonMaxSuppressionV5',
			backendName: 'cpu',
			kernelFunc: function (t) {
				var e = t.inputs,
					n = t.backend,
					r = t.attrs,
					o = e,
					i = o.boxes,
					a = o.scores,
					s = r,
					u = s.maxOutputSize,
					c = s.iouThreshold,
					l = s.scoreThreshold,
					h = s.softNmsSigma,
					p = n;
				yh(i, 'NonMaxSuppressionWithScore');
				var f = Po(
					p.data.get(i.dataId).values,
					p.data.get(a.dataId).values,
					u,
					c,
					l,
					h
				);
				return [f.selectedIndices, f.selectedScores];
			},
		}),
		s({
			kernelName: 'Square',
			backendName: 'webgl',
			kernelFunc: function (t) {
				var e = t.inputs,
					n = t.backend,
					r = e.x,
					o = n,
					i = new as(r.shape, 'return x * x;');
				return o.runWebGLProgram(i, [r], r.dtype);
			},
		});
	function Eh(t) {
		this.variableNames = ['A'];
		var e = Yo(),
			n = t[0],
			r = t[1];
		(this.outputShape = t),
			(this.userCode =
				'\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(' +
				r +
				'.0, ' +
				n +
				'.0);\n\n        vec4 values = ' +
				e.texture2D +
				'(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ');
	}
	function _h(t) {
		(this.variableNames = ['A']),
			(this.packedInputs = !1),
			(this.packedOutput = !0);
		var e = Yo(),
			n = t[0],
			r = t[1];
		(this.outputShape = t),
			(this.userCode =
				'\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n\n        vec4 result = vec4(0.);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            texC = coords[1] + row;\n            depth = coords[2] + col;\n\n            vec2 uv = (vec2(texC, texR) + halfCR) /\n                       vec2(' +
				r +
				'.0, ' +
				n +
				'.0);\n            vec4 values = ' +
				e.texture2D +
				'(A, uv);\n            float value;\n            if (depth == 0) {\n              value = values.r;\n            } else if (depth == 1) {\n              value = values.g;\n            } else if (depth == 2) {\n              value = values.b;\n            } else if (depth == 3) {\n              value = values.a;\n            }\n\n            result[row * 2 + col] = floor(value * 255.0 + 0.5);\n          }\n        }\n\n        ' +
				e.output +
				' = result;\n      }\n    ');
	}
	var Ih;
	s({
		kernelName: 'FromPixels',
		backendName: 'webgl',
		kernelFunc: function (t) {
			var e = t.inputs,
				n = t.backend,
				r = t.attrs,
				o = e.pixels,
				i = r.numChannels,
				a =
					'undefined' != typeof HTMLVideoElement &&
					o instanceof HTMLVideoElement,
				s =
					'undefined' != typeof HTMLImageElement &&
					o instanceof HTMLImageElement,
				u = a ? [o.videoWidth, o.videoHeight] : [o.width, o.height],
				c = u[0],
				l = u[1],
				h = [l, c],
				p = [l, c, i];
			(s || a) &&
				(null == Ih && (Ih = document.createElement('canvas').getContext('2d')),
				(Ih.canvas.width = c),
				(Ih.canvas.height = l),
				Ih.drawImage(o, 0, 0, c, l),
				(o = Ih.canvas));
			var f = n.makeTensorInfo(h, 'int32');
			(n.texData.get(f.dataId).usage = Yt.PIXELS),
				n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId), o);
			var d = _().getBool('WEBGL_PACK') ? new _h(p) : new Eh(p),
				v = n.runWebGLProgram(d, [f], 'int32');
			return n.disposeData(f.dataId), v;
		},
	}),
		s({
			kernelName: 'NonMaxSuppressionV5',
			backendName: 'webgl',
			kernelFunc: function (t) {
				var e = t.inputs,
					n = t.backend,
					r = t.attrs;
				rn(
					'tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead'
				);
				var o = e,
					i = o.boxes,
					a = o.scores,
					s = r,
					u = s.maxOutputSize,
					c = s.iouThreshold,
					l = s.scoreThreshold,
					h = s.softNmsSigma,
					p = n,
					f = Po(p.readSync(i.dataId), p.readSync(a.dataId), u, c, l, h);
				return [f.selectedIndices, f.selectedScores];
			},
		});
	var Rh =
		((kh.prototype.fetch = function (t, e) {
			return fetch(t, e);
		}),
		(kh.prototype.now = function () {
			return performance.now();
		}),
		(kh.prototype.encode = function (t, e) {
			if ('utf-8' !== e && 'utf8' !== e)
				throw new Error("Browser's encoder only supports utf-8, but got " + e);
			return (
				null == this.textEncoder && (this.textEncoder = new TextEncoder()),
				this.textEncoder.encode(t)
			);
		}),
		(kh.prototype.decode = function (t, e) {
			return new TextDecoder(e).decode(t);
		}),
		kh);
	function kh() {}
	_().get('IS_BROWSER') && _().setPlatform('browser', new Rh());
	var Sh,
		Dh =
			((Ah.prototype.fetch = function (t, e) {
				return null != _().global.fetch
					? _().global.fetch(t, e)
					: (null == Sh && (Sh = require('node-fetch')), Sh(t, e));
			}),
			(Ah.prototype.now = function () {
				var t = process.hrtime();
				return 1e3 * t[0] + t[1] / 1e6;
			}),
			(Ah.prototype.encode = function (t, e) {
				if ('utf-8' !== e && 'utf8' !== e)
					throw new Error(
						'Node built-in encoder only supports utf-8, but got ' + e
					);
				return this.textEncoder.encode(t);
			}),
			(Ah.prototype.decode = function (t, e) {
				return 0 === t.length ? '' : new this.util.TextDecoder(e).decode(t);
			}),
			Ah);
	function Ah() {
		(this.util = require('util')),
			(this.textEncoder = new this.util.TextEncoder());
	}
	_().get('IS_NODE') && _().setPlatform('node', new Dh());
	var Th = { float32: 4, int32: 4, uint16: 2, uint8: 1, bool: 1 },
		Nh = 4;
	function Fh(v, t) {
		for (
			var m = {},
				g = 0,
				e = function (t) {
					var e = t.name,
						n = t.dtype,
						r = t.shape,
						o = L(r),
						i = void 0;
					if (('quantization' in t)) {
						var a = t.quantization;
						if ('uint8' !== a.dtype && 'uint16' !== a.dtype)
							throw new Error(
								'Weight ' +
									t.name +
									' has unknown quantization dtype ' +
									a.dtype +
									". Supported quantization dtypes are: 'uint8' and 'uint16'."
							);
						var s = Th[a.dtype],
							u = v.slice(g, g + o * s),
							c = 'uint8' === a.dtype ? new Uint8Array(u) : new Uint16Array(u);
						if ('float32' === n)
							i = Float32Array.from(c, function (t) {
								return t * a.scale + a.min;
							});
						else {
							if ('int32' !== n)
								throw new Error(
									"Unsupported dtype in weight '" + e + "': " + n
								);
							i = Int32Array.from(c, function (t) {
								return Math.round(t * a.scale + a.min);
							});
						}
						g += o * s;
					} else if ('string' === n) {
						var l = L(t.shape);
						i = [];
						for (var h = 0; h < l; h++) {
							var p = new Uint32Array(v.slice(g, g + Nh))[0];
							g += Nh;
							var f = new Uint8Array(v.slice(g, g + p));
							i.push(f), (g += p);
						}
					} else {
						var d = Th[n];
						if (((u = v.slice(g, g + o * d)), 'float32' === n))
							i = new Float32Array(u);
						else if ('int32' === n) i = new Int32Array(u);
						else {
							if ('bool' !== n)
								throw new Error(
									"Unsupported dtype in weight '" + e + "': " + n
								);
							i = new Uint8Array(u);
						}
						g += o * d;
					}
					m[e] = En(i, r, n);
				},
				n = 0,
				r = t;
			n < r.length;
			n++
		)
			e(r[n]);
		return m;
	}
	var Mh =
		'undefined' != typeof Buffer &&
		('undefined' == typeof Blob ||
			'undefined' == typeof atob ||
			'undefined' == typeof btoa);
	function Oh(t) {
		return Mh ? Buffer.byteLength(t) : new Blob([t]).size;
	}
	function Ph(t) {
		var e = 0;
		t.forEach(function (t) {
			e += t.byteLength;
		});
		var n = new Uint8Array(e),
			r = 0;
		return (
			t.forEach(function (t) {
				n.set(new Uint8Array(t), r), (r += t.byteLength);
			}),
			n.buffer
		);
	}
	function Bh(t) {
		for (t = t.trim(); t.endsWith('/'); ) t = t.slice(0, t.length - 1);
		var e = t.split('/');
		return e[e.length - 1];
	}
	function Lh(t) {
		if (t.modelTopology instanceof ArrayBuffer)
			throw new Error('Expected JSON model topology, received ArrayBuffer.');
		return {
			dateSaved: new Date(),
			modelTopologyType: 'JSON',
			modelTopologyBytes:
				null == t.modelTopology ? 0 : Oh(JSON.stringify(t.modelTopology)),
			weightSpecsBytes:
				null == t.weightSpecs ? 0 : Oh(JSON.stringify(t.weightSpecs)),
			weightDataBytes: null == t.weightData ? 0 : t.weightData.byteLength,
		};
	}
	var Wh =
			((Gh.getInstance = function () {
				return null == Gh.instance && (Gh.instance = new Gh()), Gh.instance;
			}),
			(Gh.registerSaveRouter = function (t) {
				Gh.getInstance().saveRouters.push(t);
			}),
			(Gh.registerLoadRouter = function (t) {
				Gh.getInstance().loadRouters.push(t);
			}),
			(Gh.getSaveHandlers = function (t) {
				return Gh.getHandlers(t, 'save');
			}),
			(Gh.getLoadHandlers = function (t, e) {
				return Gh.getHandlers(t, 'load', e);
			}),
			(Gh.getHandlers = function (n, t, r) {
				var o = [];
				return (
					('load' === t
						? Gh.getInstance().loadRouters
						: Gh.getInstance().saveRouters
					).forEach(function (t) {
						var e = t(n, r);
						null !== e && o.push(e);
					}),
					o
				);
			}),
			Gh),
		zh = '://',
		Uh =
			((Vh.getInstance = function () {
				return null == Vh.instance && (Vh.instance = new Vh()), Vh.instance;
			}),
			(Vh.registerManager = function (t, e) {
				P(null != t, function () {
					return 'scheme must not be undefined or null.';
				}),
					t.endsWith(zh) && (t = t.slice(0, t.indexOf(zh))),
					P(0 < t.length, function () {
						return 'scheme must not be an empty string.';
					});
				var n = Vh.getInstance();
				P(null == n.managers[t], function () {
					return (
						"A model store manager is already registered for scheme '" +
						t +
						"'."
					);
				}),
					(n.managers[t] = e);
			}),
			(Vh.getManager = function (t) {
				var e = this.getInstance().managers[t];
				if (null == e)
					throw new Error("Cannot find model manager for scheme '" + t + "'");
				return e;
			}),
			(Vh.getSchemes = function () {
				return Object.keys(this.getInstance().managers);
			}),
			Vh);
	function Vh() {
		this.managers = {};
	}
	function Gh() {
		(this.saveRouters = []), (this.loadRouters = []);
	}
	function Hh(t) {
		if (-1 === t.indexOf(zh))
			throw new Error(
				'The url string provided does not contain a scheme. Supported schemes are: ' +
					Uh.getSchemes().join(',')
			);
		return { scheme: t.split(zh)[0], path: t.split(zh)[1] };
	}
	function qh(l, h, p) {
		return (
			void 0 === p && (p = !1),
			y(this, void 0, void 0, function () {
				var e, n, r, o, i, a, s, u, c;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return (
								P(l !== h, function () {
									return "Old path and new path are the same: '" + l + "'";
								}),
								P(0 < (e = Wh.getLoadHandlers(l)).length, function () {
									return (
										'Copying failed because no load handler is found for source URL ' +
										l +
										'.'
									);
								}),
								P(e.length < 2, function () {
									return (
										'Copying failed because more than one (' +
										e.length +
										') load handlers for source URL ' +
										l +
										'.'
									);
								}),
								(n = e[0]),
								P(0 < (r = Wh.getSaveHandlers(h)).length, function () {
									return (
										'Copying failed because no save handler is found for destination URL ' +
										h +
										'.'
									);
								}),
								P(r.length < 2, function () {
									return (
										'Copying failed because more than one (' +
										e.length +
										') save handlers for destination URL ' +
										h +
										'.'
									);
								}),
								(o = r[0]),
								(i = Hh(l).scheme),
								(a = Hh(l).path),
								(s = i === Hh(l).scheme),
								[4, n.load()]
							);
						case 1:
							return (
								(u = t.sent()),
								p && s ? [4, Uh.getManager(i).removeModel(a)] : [3, 3]
							);
						case 2:
							t.sent(), (t.label = 3);
						case 3:
							return [4, o.save(u)];
						case 4:
							return (
								(c = t.sent()),
								!p || s ? [3, 6] : [4, Uh.getManager(i).removeModel(a)]
							);
						case 5:
							t.sent(), (t.label = 6);
						case 6:
							return [2, c.modelArtifactsInfo];
					}
				});
			})
		);
	}
	var jh = 'models_store',
		Kh = 'model_info_store';
	function Xh() {
		if (!_().getBool('IS_BROWSER'))
			throw new Error(
				'Failed to obtain IndexedDB factory because the current environmentis not a web browser.'
			);
		var t = window,
			e =
				t.indexedDB ||
				t.mozIndexedDB ||
				t.webkitIndexedDB ||
				t.msIndexedDB ||
				t.shimIndexedDB;
		if (null == e)
			throw new Error(
				'The current browser does not appear to support IndexedDB.'
			);
		return e;
	}
	function Yh(t) {
		var e = t.result;
		e.createObjectStore(jh, { keyPath: 'modelPath' }),
			e.createObjectStore(Kh, { keyPath: 'modelPath' });
	}
	function $h(t) {
		return _().getBool('IS_BROWSER') &&
			!Array.isArray(t) &&
			t.startsWith(Jh.URL_SCHEME)
			? ((e = t.slice(Jh.URL_SCHEME.length)), new Jh(e))
			: null;
		var e;
	}
	var Jh =
		((Qh.prototype.save = function (e) {
			return y(this, void 0, void 0, function () {
				return R(this, function (t) {
					if (e.modelTopology instanceof ArrayBuffer)
						throw new Error(
							'BrowserLocalStorage.save() does not support saving model topology in binary formats yet.'
						);
					return [2, this.databaseAction(this.modelPath, e)];
				});
			});
		}),
		(Qh.prototype.load = function () {
			return y(this, void 0, void 0, function () {
				return R(this, function (t) {
					return [2, this.databaseAction(this.modelPath)];
				});
			});
		}),
		(Qh.prototype.databaseAction = function (t, h) {
			var p = this;
			return new Promise(function (u, c) {
				var l = p.indexedDB.open('tensorflowjs', 1);
				(l.onupgradeneeded = function () {
					return Yh(l);
				}),
					(l.onsuccess = function () {
						var r = l.result;
						if (null == h) {
							var t = r.transaction(jh, 'readonly'),
								e = t.objectStore(jh).get(p.modelPath);
							(e.onsuccess = function () {
								if (null == e.result)
									return (
										r.close(),
										c(
											new Error(
												"Cannot find model with path '" +
													p.modelPath +
													"' in IndexedDB."
											)
										)
									);
								u(e.result.modelArtifacts);
							}),
								(e.onerror = function (t) {
									return r.close(), c(e.error);
								}),
								(t.oncomplete = function () {
									return r.close();
								});
						} else {
							var o,
								i = Lh(h),
								a = r.transaction(Kh, 'readwrite'),
								s = a.objectStore(Kh),
								n = s.put({ modelPath: p.modelPath, modelArtifactsInfo: i });
							(n.onsuccess = function () {
								var n = (o = r.transaction(jh, 'readwrite'))
									.objectStore(jh)
									.put({
										modelPath: p.modelPath,
										modelArtifacts: h,
										modelArtifactsInfo: i,
									});
								(n.onsuccess = function () {
									return u({ modelArtifactsInfo: i });
								}),
									(n.onerror = function (t) {
										var e = (s = a.objectStore(Kh)).delete(p.modelPath);
										(e.onsuccess = function () {
											return r.close(), c(n.error);
										}),
											(e.onerror = function (t) {
												return r.close(), c(n.error);
											});
									});
							}),
								(n.onerror = function (t) {
									return r.close(), c(n.error);
								}),
								(a.oncomplete = function () {
									null == o
										? r.close()
										: (o.oncomplete = function () {
												return r.close();
										  });
								});
						}
					}),
					(l.onerror = function (t) {
						return c(l.error);
					});
			});
		}),
		(Qh.URL_SCHEME = 'indexeddb://'),
		Qh);
	function Qh(t) {
		if (((this.indexedDB = Xh()), null == t || !t))
			throw new Error(
				'For IndexedDB, modelPath must not be null, undefined or empty.'
			);
		this.modelPath = t;
	}
	Wh.registerSaveRouter($h), Wh.registerLoadRouter($h);
	var Zh =
		((tp.prototype.listModels = function () {
			return y(this, void 0, void 0, function () {
				var e = this;
				return R(this, function (t) {
					return [
						2,
						new Promise(function (i, n) {
							var r = e.indexedDB.open('tensorflowjs', 1);
							(r.onupgradeneeded = function () {
								return Yh(r);
							}),
								(r.onsuccess = function () {
									var e = r.result,
										t = e.transaction(Kh, 'readonly'),
										o = t.objectStore(Kh).getAll();
									(o.onsuccess = function () {
										for (var t = {}, e = 0, n = o.result; e < n.length; e++) {
											var r = n[e];
											t[r.modelPath] = r.modelArtifactsInfo;
										}
										i(t);
									}),
										(o.onerror = function (t) {
											return e.close(), n(o.error);
										}),
										(t.oncomplete = function () {
											return e.close();
										});
								}),
								(r.onerror = function (t) {
									return n(r.error);
								});
						}),
					];
				});
			});
		}),
		(tp.prototype.removeModel = function (u) {
			return y(this, void 0, void 0, function () {
				var n = this;
				return R(this, function (t) {
					var e;
					return (
						(u = (e = u).startsWith(Jh.URL_SCHEME)
							? e.slice(Jh.URL_SCHEME.length)
							: e),
						[
							2,
							new Promise(function (a, s) {
								var e = n.indexedDB.open('tensorflowjs', 1);
								(e.onupgradeneeded = function () {
									return Yh(e);
								}),
									(e.onsuccess = function () {
										var n,
											r = e.result,
											t = r.transaction(Kh, 'readwrite'),
											o = t.objectStore(Kh),
											i = o.get(u);
										(i.onsuccess = function () {
											if (null == i.result)
												return (
													r.close(),
													s(
														new Error(
															"Cannot find model with path '" +
																u +
																"' in IndexedDB."
														)
													)
												);
											function e() {
												var t = (n = r.transaction(jh, 'readwrite'))
													.objectStore(jh)
													.delete(u);
												(t.onsuccess = function () {
													return a(i.result.modelArtifactsInfo);
												}),
													(t.onerror = function (t) {
														return s(i.error);
													});
											}
											var t = o.delete(u);
											(t.onsuccess = e),
												(t.onerror = function (t) {
													return e(), r.close(), s(i.error);
												});
										}),
											(i.onerror = function (t) {
												return r.close(), s(i.error);
											}),
											(t.oncomplete = function () {
												null == n
													? r.close()
													: (n.oncomplete = function () {
															return r.close();
													  });
											});
									}),
									(e.onerror = function (t) {
										return s(e.error);
									});
							}),
						]
					);
				});
			});
		}),
		tp);
	function tp() {
		this.indexedDB = Xh();
	}
	if (_().getBool('IS_BROWSER'))
		try {
			Uh.registerManager(Jh.URL_SCHEME, new Zh());
		} catch (r) {}
	var ep = '/',
		np = 'tensorflowjs_models',
		rp = 'info',
		op = 'model_topology',
		ip = 'weight_specs',
		ap = 'weight_data',
		sp = 'model_metadata';
	function up(t) {
		return {
			info: [np, t, rp].join(ep),
			topology: [np, t, op].join(ep),
			weightSpecs: [np, t, ip].join(ep),
			weightData: [np, t, ap].join(ep),
			modelMetadata: [np, t, sp].join(ep),
		};
	}
	function cp(t) {
		var e = t.split(ep);
		if (e.length < 3) throw new Error('Invalid key format: ' + t);
		return e.slice(1, e.length - 1).join(ep);
	}
	function lp(t) {
		return _().getBool('IS_BROWSER') &&
			!Array.isArray(t) &&
			t.startsWith(hp.URL_SCHEME)
			? ((e = t.slice(hp.URL_SCHEME.length)), new hp(e))
			: null;
		var e;
	}
	var hp =
		((pp.prototype.save = function (o) {
			return y(this, void 0, void 0, function () {
				var e, n, r;
				return R(this, function (t) {
					if (o.modelTopology instanceof ArrayBuffer)
						throw new Error(
							'BrowserLocalStorage.save() does not support saving model topology in binary formats yet.'
						);
					(e = JSON.stringify(o.modelTopology)),
						(n = JSON.stringify(o.weightSpecs)),
						(r = Lh(o));
					try {
						return (
							this.LS.setItem(this.keys.info, JSON.stringify(r)),
							this.LS.setItem(this.keys.topology, e),
							this.LS.setItem(this.keys.weightSpecs, n),
							this.LS.setItem(
								this.keys.weightData,
								(function (t) {
									if (Mh) return Buffer.from(t).toString('base64');
									for (
										var e = new Uint8Array(t), n = '', r = 0, o = e.length;
										r < o;
										r++
									)
										n += String.fromCharCode(e[r]);
									return btoa(n);
								})(o.weightData)
							),
							this.LS.setItem(
								this.keys.modelMetadata,
								JSON.stringify({
									format: o.format,
									generatedBy: o.generatedBy,
									convertedBy: o.convertedBy,
									userDefinedMetadata: o.userDefinedMetadata,
								})
							),
							[2, { modelArtifactsInfo: r }]
						);
					} catch (t) {
						throw (
							(this.LS.removeItem(this.keys.info),
							this.LS.removeItem(this.keys.topology),
							this.LS.removeItem(this.keys.weightSpecs),
							this.LS.removeItem(this.keys.weightData),
							this.LS.removeItem(this.keys.modelMetadata),
							new Error(
								"Failed to save model '" +
									this.modelPath +
									"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" +
									r.modelTopologyBytes +
									', weightSpecsBytes=' +
									r.weightSpecsBytes +
									', weightDataBytes=' +
									r.weightDataBytes +
									'.'
							))
						);
					}
					return [2];
				});
			});
		}),
		(pp.prototype.load = function () {
			return y(this, void 0, void 0, function () {
				var e, n, r, o, i, a, s;
				return R(this, function (t) {
					if (null == (e = JSON.parse(this.LS.getItem(this.keys.info))))
						throw new Error(
							"In local storage, there is no model with name '" +
								this.modelPath +
								"'"
						);
					if ('JSON' !== e.modelTopologyType)
						throw new Error(
							'BrowserLocalStorage does not support loading non-JSON model topology yet.'
						);
					if (
						((n = {}),
						null == (r = JSON.parse(this.LS.getItem(this.keys.topology))))
					)
						throw new Error(
							"In local storage, the topology of model '" +
								this.modelPath +
								"' is missing."
						);
					if (
						((n.modelTopology = r),
						null == (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs))))
					)
						throw new Error(
							"In local storage, the weight specs of model '" +
								this.modelPath +
								"' are missing."
						);
					if (
						((n.weightSpecs = o),
						null != (i = this.LS.getItem(this.keys.modelMetadata)) &&
							((a = JSON.parse(i)),
							(n.format = a.format),
							(n.generatedBy = a.generatedBy),
							(n.convertedBy = a.convertedBy),
							(n.userDefinedMetadata = a.userDefinedMetadata)),
						null == (s = this.LS.getItem(this.keys.weightData)))
					)
						throw new Error(
							"In local storage, the binary weight values of model '" +
								this.modelPath +
								"' are missing."
						);
					return (
						(n.weightData = (function (t) {
							if (Mh) {
								var e = Buffer.from(t, 'base64');
								return e.buffer.slice(
									e.byteOffset,
									e.byteOffset + e.byteLength
								);
							}
							for (
								var n = atob(t), r = new Uint8Array(n.length), o = 0;
								o < n.length;
								++o
							)
								r.set([n.charCodeAt(o)], o);
							return r.buffer;
						})(s)),
						[2, n]
					);
				});
			});
		}),
		(pp.URL_SCHEME = 'localstorage://'),
		pp);
	function pp(t) {
		if (!_().getBool('IS_BROWSER') || void 0 === window.localStorage)
			throw new Error(
				'The current environment does not support local storage.'
			);
		if (((this.LS = window.localStorage), null == t || !t))
			throw new Error(
				'For local storage, modelPath must not be null, undefined or empty.'
			);
		(this.modelPath = t), (this.keys = up(this.modelPath));
	}
	Wh.registerSaveRouter(lp), Wh.registerLoadRouter(lp);
	var fp =
		((dp.prototype.listModels = function () {
			return y(this, void 0, void 0, function () {
				var e, n, r, o, i, a;
				return R(this, function (t) {
					for (e = {}, n = np + ep, r = ep + rp, o = 0; o < this.LS.length; ++o)
						(i = this.LS.key(o)).startsWith(n) &&
							i.endsWith(r) &&
							((a = cp(i)), (e[a] = JSON.parse(this.LS.getItem(i))));
					return [2, e];
				});
			});
		}),
		(dp.prototype.removeModel = function (o) {
			return y(this, void 0, void 0, function () {
				var n, r;
				return R(this, function (t) {
					var e;
					if (
						((o = (e = o).startsWith(hp.URL_SCHEME)
							? e.slice(hp.URL_SCHEME.length)
							: e),
						(n = up(o)),
						null == this.LS.getItem(n.info))
					)
						throw new Error("Cannot find model at path '" + o + "'");
					return (
						(r = JSON.parse(this.LS.getItem(n.info))),
						this.LS.removeItem(n.info),
						this.LS.removeItem(n.topology),
						this.LS.removeItem(n.weightSpecs),
						this.LS.removeItem(n.weightData),
						[2, r]
					);
				});
			});
		}),
		dp);
	function dp() {
		P(_().getBool('IS_BROWSER'), function () {
			return 'Current environment is not a web browser';
		}),
			P(void 0 !== window.localStorage, function () {
				return 'Current browser does not appear to support localStorage';
			}),
			(this.LS = window.localStorage);
	}
	if (_().getBool('IS_BROWSER'))
		try {
			Uh.registerManager(hp.URL_SCHEME, new fp());
		} catch (r) {}
	function vp(t) {
		return new Promise(function (t) {
			return setTimeout(t);
		}).then(t);
	}
	var mp =
			((xp.prototype.save = function (s) {
				return y(this, void 0, void 0, function () {
					var e, n, r, o, i, a;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if ('undefined' == typeof document)
									throw new Error(
										'Browser downloads are not supported in this environment since `document` is not present'
									);
								if (
									((e = window.URL.createObjectURL(
										new Blob([s.weightData], {
											type: 'application/octet-stream',
										})
									)),
									!(s.modelTopology instanceof ArrayBuffer))
								)
									return [3, 1];
								throw new Error(
									'BrowserDownloads.save() does not support saving model topology in binary formats yet.'
								);
							case 1:
								return (
									(n = [
										{
											paths: ['./' + this.weightDataFileName],
											weights: s.weightSpecs,
										},
									]),
									(r = {
										modelTopology: s.modelTopology,
										format: s.format,
										generatedBy: s.generatedBy,
										convertedBy: s.convertedBy,
										weightsManifest: n,
									}),
									(o = window.URL.createObjectURL(
										new Blob([JSON.stringify(r)], { type: 'application/json' })
									)),
									((i =
										null == this.jsonAnchor
											? document.createElement('a')
											: this.jsonAnchor).download = this.modelTopologyFileName),
									(i.href = o),
									[
										4,
										vp(function () {
											return i.dispatchEvent(new MouseEvent('click'));
										}),
									]
								);
							case 2:
								return (
									t.sent(),
									null == s.weightData
										? [3, 4]
										: (((a =
												null == this.weightDataAnchor
													? document.createElement('a')
													: this
															.weightDataAnchor).download = this.weightDataFileName),
										  (a.href = e),
										  [
												4,
												vp(function () {
													return a.dispatchEvent(new MouseEvent('click'));
												}),
										  ])
								);
							case 3:
								t.sent(), (t.label = 4);
							case 4:
								return [2, { modelArtifactsInfo: Lh(s) }];
						}
					});
				});
			}),
			(xp.URL_SCHEME = 'downloads://'),
			xp),
		gp =
			((yp.prototype.load = function () {
				return y(this, void 0, void 0, function () {
					var r,
						h,
						p = this;
					return R(this, function (t) {
						return (
							(r = this.files[0]),
							(h = this.files.slice(1)),
							[
								2,
								new Promise(function (c, l) {
									var t = new FileReader();
									(t.onload = function (t) {
										var o = JSON.parse(t.target.result),
											i = o.modelTopology;
										if (null != i) {
											0 === h.length && c({ modelTopology: i });
											var e = o.weightsManifest;
											if (null != e) {
												var n;
												try {
													n = p.checkManifestAndWeightFiles(e, h);
												} catch (t) {
													return void l(t);
												}
												var a = [],
													s = [],
													u = [];
												e.forEach(function (t) {
													t.paths.forEach(function (t) {
														s.push(t), u.push(null);
													}),
														a.push.apply(a, t.weights);
												}),
													e.forEach(function (t) {
														t.paths.forEach(function (r) {
															var t = new FileReader();
															(t.onload = function (t) {
																var e = t.target.result,
																	n = s.indexOf(r);
																(u[n] = e),
																	-1 === u.indexOf(null) &&
																		c({
																			modelTopology: i,
																			weightSpecs: a,
																			weightData: Ph(u),
																			format: o.format,
																			generatedBy: o.generatedBy,
																			convertedBy: o.convertedBy,
																			userDefinedMetadata:
																				o.userDefinedMetadata,
																		});
															}),
																(t.onerror = function (t) {
																	return l(
																		"Failed to weights data from file of path '" +
																			r +
																			"'."
																	);
																}),
																t.readAsArrayBuffer(n[r]);
														});
													});
											} else
												l(
													new Error(
														'weightManifest field is missing from file ' +
															r.name
													)
												);
										} else
											l(
												new Error(
													'modelTopology field is missing from file ' + r.name
												)
											);
									}),
										(t.onerror = function (t) {
											return l(
												"Failed to read model topology and weights manifest JSON from file '" +
													r.name +
													"'. BrowserFiles supports loading Keras-style tf.Model artifacts only."
											);
										}),
										t.readAsText(r);
								}),
							]
						);
					});
				});
			}),
			(yp.prototype.checkManifestAndWeightFiles = function (t, n) {
				for (
					var r = [],
						o = n.map(function (t) {
							return Bh(t.name);
						}),
						i = {},
						e = 0,
						a = t;
					e < a.length;
					e++
				)
					a[e].paths.forEach(function (t) {
						var e = Bh(t);
						if (-1 !== r.indexOf(e))
							throw new Error(
								"Duplicate file basename found in weights manifest: '" + e + "'"
							);
						if ((r.push(e), -1 === o.indexOf(e)))
							throw new Error(
								"Weight file with basename '" + e + "' is not provided."
							);
						i[t] = n[o.indexOf(e)];
					});
				if (r.length !== n.length)
					throw new Error(
						'Mismatch in the number of files in weights manifest (' +
							r.length +
							') and the number of weight files provided (' +
							n.length +
							').'
					);
				return i;
			}),
			yp);
	function yp(t) {
		if (null == t || t.length < 1)
			throw new Error(
				'When calling browserFiles, at least 1 file is required, but received ' +
					t
			);
		this.files = t;
	}
	function xp(t) {
		if (!_().getBool('IS_BROWSER'))
			throw new Error(
				'browserDownloads() cannot proceed because the current environment is not a browser.'
			);
		t.startsWith(xp.URL_SCHEME) && (t = t.slice(xp.URL_SCHEME.length)),
			(null != t && 0 !== t.length) || (t = 'model'),
			(this.modelTopologyFileName = t + '.json'),
			(this.weightDataFileName = t + '.weights.bin');
	}
	function bp(n, r, o, i) {
		var t, e, a;
		P(null != (a = n) && Array.isArray(a) && 0 < a.length, function () {
			return 'promises must be a none empty array';
		}),
			(t = o = null == o ? 0 : o),
			(e = i = null == i ? 1 : i),
			P(0 <= t && t <= 1, function () {
				return (
					'Progress fraction must be in range [0, 1], but got startFraction ' +
					t
				);
			}),
			P(0 <= e && e <= 1, function () {
				return (
					'Progress fraction must be in range [0, 1], but got endFraction ' + e
				);
			}),
			P(t <= e, function () {
				return (
					'startFraction must be no more than endFraction, but got startFraction ' +
					t +
					' and endFraction ' +
					e
				);
			});
		var s = 0;
		return Promise.all(
			n.map(function (t) {
				return (
					t.then(function (t) {
						var e = o + (++s / n.length) * (i - o);
						return r(e), t;
					}),
					t
				);
			})
		);
	}
	function wp(l, h) {
		return y(this, void 0, void 0, function () {
			var e, n, r, o, i, a, s, u, c;
			return R(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							null == h && (h = {}),
							(e = null == h.fetchFunc ? _().platform.fetch : h.fetchFunc),
							(n = l.map(function (t) {
								return e(t, h.requestInit, { isBinary: !0 });
							})),
							(r = 0),
							(o = 0.5),
							null != h.onProgress ? [3, 2] : [4, Promise.all(n)]
						);
					case 1:
						return (i = t.sent()), [3, 4];
					case 2:
						return [4, bp(n, h.onProgress, r, o)];
					case 3:
						(i = t.sent()), (t.label = 4);
					case 4:
						return (
							(a = i.map(function (t) {
								return t.arrayBuffer();
							})),
							(s = 0.5),
							(u = 1),
							null != h.onProgress ? [3, 6] : [4, Promise.all(a)]
						);
					case 5:
						return (c = t.sent()), [3, 8];
					case 6:
						return [4, bp(a, h.onProgress, s, u)];
					case 7:
						(c = t.sent()), (t.label = 8);
					case 8:
						return [2, c];
				}
			});
		});
	}
	function Cp(i) {
		var t = this;
		return function (f, o, d) {
			return (
				void 0 === o && (o = ''),
				y(t, void 0, void 0, function () {
					var a, c, s, u, e, n, r, l, h, p;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if (
									((a = f.map(function () {
										return !1;
									})),
									(c = {}),
									(s =
										null != d
											? d.map(function () {
													return !1;
											  })
											: []),
									(u = []),
									f.forEach(function (t, o) {
										var i = 0;
										t.weights.forEach(function (n) {
											function r() {
												(a[o] = !0),
													null == c[o] && (c[o] = []),
													c[o].push({
														manifestEntry: n,
														groupOffset: i,
														sizeBytes: e,
													});
											}
											var t =
													'quantization' in n ? n.quantization.dtype : n.dtype,
												e = Th[t] * L(n.shape);
											null != d
												? d.forEach(function (t, e) {
														t === n.name && (r(), (s[e] = !0));
												  })
												: r(),
												u.push(n.name),
												(i += e);
										});
									}),
									!s.every(function (t) {
										return t;
									}))
								)
									throw (
										((e = d.filter(function (t, e) {
											return !s[e];
										})),
										new Error(
											'Could not find weights in manifest with names: ' +
												e.join(', ') +
												'. \nManifest JSON has weights with names: ' +
												u.join(', ') +
												'.'
										))
									);
								return (
									(n = a.reduce(function (t, e, n) {
										return e && t.push(n), t;
									}, [])),
									(r = []),
									n.forEach(function (t) {
										f[t].paths.forEach(function (t) {
											var e = o + (o.endsWith('/') ? '' : '/') + t;
											r.push(e);
										});
									}),
									[4, i(r)]
								);
							case 1:
								return (
									(l = t.sent()),
									(h = {}),
									(p = 0),
									n.forEach(function (t) {
										for (var e = f[t].paths.length, n = 0, r = 0; r < e; r++)
											n += l[p + r].byteLength;
										for (
											var o = new ArrayBuffer(n),
												i = new Uint8Array(o),
												a = 0,
												s = 0;
											s < e;
											s++
										) {
											var u = new Uint8Array(l[p + s]);
											i.set(u, a), (a += u.byteLength);
										}
										c[t].forEach(function (t) {
											var e = Fh(
												o.slice(t.groupOffset, t.groupOffset + t.sizeBytes),
												[t.manifestEntry]
											);
											for (var n in e) h[n] = e[n];
										}),
											(p += e);
									}),
									[2, h]
								);
						}
					});
				})
			);
		};
	}
	Wh.registerSaveRouter(function (t) {
		return _().getBool('IS_BROWSER') &&
			!Array.isArray(t) &&
			t.startsWith(mp.URL_SCHEME)
			? (void 0 === (e = t.slice(mp.URL_SCHEME.length)) && (e = 'model'),
			  new mp(e))
			: null;
		var e;
	});
	var Ep =
		((_p.prototype.save = function (i) {
			return y(this, void 0, void 0, function () {
				var e, n, r, o;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							if (i.modelTopology instanceof ArrayBuffer)
								throw new Error(
									'BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.'
								);
							return (
								((e = Object.assign(
									{ method: this.DEFAULT_METHOD },
									this.requestInit
								)).body = new FormData()),
								(n = [
									{ paths: ['./model.weights.bin'], weights: i.weightSpecs },
								]),
								(r = {
									modelTopology: i.modelTopology,
									format: i.format,
									generatedBy: i.generatedBy,
									convertedBy: i.convertedBy,
									userDefinedMetadata: i.userDefinedMetadata,
									weightsManifest: n,
								}),
								e.body.append(
									'model.json',
									new Blob([JSON.stringify(r)], { type: 'application/json' }),
									'model.json'
								),
								null != i.weightData &&
									e.body.append(
										'model.weights.bin',
										new Blob([i.weightData], {
											type: 'application/octet-stream',
										}),
										'model.weights.bin'
									),
								[4, this.fetch(this.path, e)]
							);
						case 1:
							if ((o = t.sent()).ok)
								return [2, { modelArtifactsInfo: Lh(i), responses: [o] }];
							throw new Error(
								'BrowserHTTPRequest.save() failed due to HTTP response status ' +
									o.status +
									'.'
							);
					}
				});
			});
		}),
		(_p.prototype.load = function () {
			return y(this, void 0, void 0, function () {
				var e, n, r, o, i, a, s, u, c, l, h, p;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, this.fetch(this.path, this.requestInit)];
						case 1:
							if (!(e = t.sent()).ok)
								throw new Error(
									'Request to ' +
										this.path +
										' failed with status code ' +
										e.status +
										'. Please verify this URL points to the model JSON of the model to load.'
								);
							t.label = 2;
						case 2:
							return t.trys.push([2, 4, , 5]), [4, e.json()];
						case 3:
							return (n = t.sent()), [3, 5];
						case 4:
							throw (
								(t.sent(),
								(r =
									'Failed to parse model JSON of response from ' +
									this.path +
									'.'),
								this.path.endsWith('.pb')
									? (r +=
											" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.")
									: (r +=
											' Please make sure the server is serving valid JSON for this request.'),
								new Error(r))
							);
						case 5:
							if (
								((o = n.modelTopology),
								(i = n.weightsManifest),
								(a = n.generatedBy),
								(s = n.convertedBy),
								(u = n.format),
								(c = n.userDefinedMetadata),
								null == o && null == i)
							)
								throw new Error(
									'The JSON from HTTP path ' +
										this.path +
										' contains neither model topology or manifest for weights.'
								);
							return null == i ? [3, 7] : [4, this.loadWeights(i)];
						case 6:
							(p = t.sent()), (l = p[0]), (h = p[1]), (t.label = 7);
						case 7:
							return [
								2,
								{
									modelTopology: o,
									weightSpecs: l,
									weightData: h,
									userDefinedMetadata: c,
									generatedBy: a,
									convertedBy: s,
									format: u,
								},
							];
					}
				});
			});
		}),
		(_p.prototype.loadWeights = function (v) {
			return y(this, void 0, void 0, function () {
				var o, i, a, s, u, c, l, h, p, f, d;
				return R(this, function (t) {
					switch (t.label) {
						case 0:
							for (
								o = Array.isArray(this.path) ? this.path[1] : this.path,
									n = (e = o).lastIndexOf('/'),
									r = e.lastIndexOf('?'),
									i = [e.substring(0, n) + '/', n < r ? e.substring(r) : ''],
									a = i[0],
									s = i[1],
									u = this.weightPathPrefix || a,
									c = [],
									l = 0,
									h = v;
								l < h.length;
								l++
							)
								(p = h[l]), c.push.apply(c, p.weights);
							return (
								(f = []),
								v.forEach(function (t) {
									t.paths.forEach(function (t) {
										f.push(u + t + s);
									});
								}),
								[
									4,
									wp(f, {
										requestInit: this.requestInit,
										fetchFunc: this.fetch,
										onProgress: this.onProgress,
									}),
								]
							);
						case 1:
							return (d = t.sent()), [2, [c, Ph(d)]];
					}
					var e, n, r;
				});
			});
		}),
		(_p.URL_SCHEME_REGEX = /^https?:\/\//),
		_p);
	function _p(t, e) {
		if (
			((this.DEFAULT_METHOD = 'POST'),
			null == e && (e = {}),
			(this.weightPathPrefix = e.weightPathPrefix),
			(this.onProgress = e.onProgress),
			null != e.fetchFunc
				? (P('function' == typeof e.fetchFunc, function () {
						return 'Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)';
				  }),
				  (this.fetch = e.fetchFunc))
				: (this.fetch = _().platform.fetch),
			P(null != t && 0 < t.length, function () {
				return 'URL path for http must not be null, undefined or empty.';
			}),
			Array.isArray(t) &&
				P(2 === t.length, function () {
					return (
						'URL paths for http must have a length of 2, (actual length is ' +
						t.length +
						').'
					);
				}),
			(this.path = t),
			null != e.requestInit && null != e.requestInit.body)
		)
			throw new Error(
				'requestInit is expected to have no pre-existing body, but has one.'
			);
		this.requestInit = e.requestInit || {};
	}
	function Ip(t) {
		return null != t.match(Ep.URL_SCHEME_REGEX);
	}
	function Rp(t, e) {
		return 'undefined' == typeof fetch
			? null
			: (
					Array.isArray(t)
						? t.every(function (t) {
								return Ip(t);
						  })
						: Ip(t)
			  )
			? kp(t, { onProgress: e })
			: null;
	}
	function kp(t, e) {
		return new Ep(t, e);
	}
	Wh.registerSaveRouter(Rp), Wh.registerLoadRouter(Rp);
	var Sp =
			((Tp.prototype.load = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return [2, this.modelArtifacts];
					});
				});
			}),
			Tp),
		Dp =
			((Ap.prototype.save = function (e) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return [2, this.saveHandler(e)];
					});
				});
			}),
			Ap);
	function Ap(t) {
		this.saveHandler = t;
	}
	function Tp(t) {
		this.modelArtifacts = t;
	}
	var Np,
		Fp = Object.freeze({
			browserFiles: function (t) {
				return new gp(t);
			},
			browserHTTPRequest: function (t, e) {
				return kp(t, e);
			},
			concatenateArrayBuffers: Ph,
			decodeWeights: Fh,
			encodeWeights: function (u, l) {
				return y(this, void 0, void 0, function () {
					var o,
						i,
						a,
						e,
						n,
						s = this;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								for (
									o = [],
										i = [],
										a = Array.isArray(u)
											? u.map(function (t) {
													return t.name;
											  })
											: Object.keys(u),
										e = function (t) {
											var e = a[t],
												c = Array.isArray(u) ? u[t].tensor : u[e];
											if (
												'float32' !== c.dtype &&
												'int32' !== c.dtype &&
												'bool' !== c.dtype &&
												'string' !== c.dtype
											)
												throw new Error(
													"Unsupported dtype in weight '" + e + "': " + c.dtype
												);
											var n = { name: e, shape: c.shape, dtype: c.dtype };
											if ('string' === c.dtype) {
												var r = new Promise(function (u) {
													return y(s, void 0, void 0, function () {
														var e, n, r, o, i, a, s;
														return R(this, function (t) {
															switch (t.label) {
																case 0:
																	return [4, c.bytes()];
																case 1:
																	for (
																		e = t.sent(),
																			n =
																				e.reduce(function (t, e) {
																					return t + e.length;
																				}, 0) +
																				Nh * e.length,
																			r = new Uint8Array(n),
																			i = o = 0;
																		i < e.length;
																		i++
																	)
																		(a = e[i]),
																			(s = new Uint8Array(
																				new Uint32Array([a.length]).buffer
																			)),
																			r.set(s, o),
																			(o += Nh),
																			r.set(a, o),
																			(o += a.length);
																	return u(r), [2];
															}
														});
													});
												});
												i.push(r);
											} else i.push(c.data());
											null != l && (n.group = l), o.push(n);
										},
										n = 0;
									n < a.length;
									++n
								)
									e(n);
								return [4, Promise.all(i)];
							case 1:
								return [
									2,
									{
										data: (function (t) {
											if (null === t)
												throw new Error(
													'Invalid input value: ' + JSON.stringify(t)
												);
											var e = 0,
												n = [];
											t.forEach(function (t) {
												if (
													((e += t.byteLength),
													n.push(
														t.byteLength === t.buffer.byteLength
															? t
															: new t.constructor(t)
													),
													!(
														t instanceof Float32Array ||
														t instanceof Int32Array ||
														t instanceof Uint8Array
													))
												)
													throw new Error(
														'Unsupported TypedArray subtype: ' +
															t.constructor.name
													);
											});
											var r = new Uint8Array(e),
												o = 0;
											return (
												n.forEach(function (t) {
													r.set(new Uint8Array(t.buffer), o),
														(o += t.byteLength);
												}),
												r.buffer
											);
										})(t.sent()),
										specs: o,
									},
								];
						}
					});
				});
			},
			fromMemory: function (t, e, n, r) {
				return 1 === arguments.length
					? null != t.modelTopology || null != t.weightSpecs
						? new Sp(t)
						: (console.warn(
								'Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.'
						  ),
						  new Sp({ modelTopology: t }))
					: (console.warn(
							'Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release.'
					  ),
					  new Sp({
							modelTopology: t,
							weightSpecs: e,
							weightData: n,
							trainingConfig: r,
					  }));
			},
			getLoadHandlers: function (t, e) {
				return Wh.getLoadHandlers(t, e);
			},
			getModelArtifactsInfoForJSON: Lh,
			getSaveHandlers: function (t) {
				return Wh.getSaveHandlers(t);
			},
			http: kp,
			isHTTPScheme: Ip,
			loadWeights: function (e, n, r, o) {
				return (
					void 0 === n && (n = ''),
					y(this, void 0, void 0, function () {
						return R(this, function (t) {
							return [
								2,
								Cp(function (t) {
									return wp(t, { requestInit: o });
								})(e, n, r),
							];
						});
					})
				);
			},
			registerLoadRouter: function (t) {
				return Wh.registerLoadRouter(t);
			},
			registerSaveRouter: function (t) {
				return Wh.registerSaveRouter(t);
			},
			weightsLoaderFactory: Cp,
			withSaveHandler: function (t) {
				return new Dp(t);
			},
			copyModel: function (e, n) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return [2, qh(e, n, !1)];
					});
				});
			},
			listModels: function () {
				return y(this, void 0, void 0, function () {
					var e, n, r, o, i, a, s;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								(e = Uh.getSchemes()),
									(n = {}),
									(r = 0),
									(o = e),
									(t.label = 1);
							case 1:
								return r < o.length
									? ((i = o[r]), [4, Uh.getManager(i).listModels()])
									: [3, 4];
							case 2:
								for (s in (a = t.sent())) n[i + zh + s] = a[s];
								t.label = 3;
							case 3:
								return r++, [3, 1];
							case 4:
								return [2, n];
						}
					});
				});
			},
			moveModel: function (e, n) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return [2, qh(e, n, !0)];
					});
				});
			},
			removeModel: function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						return (
							(e = Hh(n)), [2, Uh.getManager(e.scheme).removeModel(e.path)]
						);
					});
				});
			},
		}),
		Mp = xn({
			confusionMatrix_: function (t, e, n) {
				var r = sn(t, 'labels', 'confusionMatrix'),
					o = sn(e, 'predictions', 'confusionMatrix');
				P(null == n || (0 < n && Number.isInteger(n)), function () {
					return (
						'If provided, numClasses must be a positive integer, but got ' + n
					);
				}),
					P(1 === r.rank, function () {
						return 'Expected the rank of labels to be 1, but got ' + r.rank;
					}),
					P(1 === o.rank, function () {
						return (
							'Expected the rank of predictions to be 1, but got ' + o.rank
						);
					}),
					P(r.shape[0] === o.shape[0], function () {
						return (
							'Mismatch in the number of examples: ' +
							r.shape[0] +
							' vs. ' +
							o.shape[0] +
							'. Labels and predictions should have the same number of elements.'
						);
					}),
					P(0 < n && Number.isInteger(n), function () {
						return (
							'numClasses is required to be a positive integer, but got ' + n
						);
					});
				var i = xr(r.asType('int32'), n),
					a = xr(o.asType('int32'), n);
				return i.transpose().matMul(a).asType('int32');
			},
		}),
		Op = Object.freeze({ confusionMatrix: Mp }),
		Pp = xn({
			fromPixels_: function (t, e) {
				if ((void 0 === e && (e = 3), 4 < e))
					throw new Error(
						'Cannot construct Tensor with more than 4 channels from pixels.'
					);
				if (null == t)
					throw new Error(
						'pixels passed to tf.browser.fromPixels() can not be null'
					);
				var n = !1,
					r = !1,
					o = !1,
					i = !1,
					a = !1;
				if (t.data instanceof Uint8Array) n = !0;
				else if ('undefined' != typeof ImageData && t instanceof ImageData)
					r = !0;
				else if (
					'undefined' != typeof HTMLVideoElement &&
					t instanceof HTMLVideoElement
				)
					o = !0;
				else if (
					'undefined' != typeof HTMLImageElement &&
					t instanceof HTMLImageElement
				)
					i = !0;
				else {
					if (null == t.getContext)
						throw new Error(
							'pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ' +
								t.constructor.name
						);
					a = !0;
				}
				if (o && o && t.readyState < 2)
					throw new Error(
						'The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.'
					);
				if (null != g('FromPixels', qt.backendName))
					return qt.runKernel('FromPixels', { pixels: t }, { numChannels: e });
				var s,
					u,
					c = o ? [t.videoWidth, t.videoHeight] : [t.width, t.height],
					l = c[0],
					h = c[1];
				if (
					(a
						? (s = t.getContext('2d').getImageData(0, 0, l, h).data)
						: r || n
						? (s = t.data)
						: (i || o) &&
						  (null == Np &&
								(Np = document.createElement('canvas').getContext('2d')),
						  (Np.canvas.width = l),
						  (Np.canvas.height = h),
						  Np.drawImage(t, 0, 0, l, h),
						  (s = Np.getImageData(0, 0, l, h).data)),
					4 === e)
				)
					u = new Int32Array(s);
				else {
					var p = l * h;
					u = new Int32Array(p * e);
					for (var f = 0; f < p; f++)
						for (var d = 0; d < e; ++d) u[f * e + d] = s[4 * f + d];
				}
				return Sn(u, [h, l, e], 'int32');
			},
		}),
		Bp = Object.freeze({
			toPixels: function (_, I) {
				return y(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o,
						i,
						a,
						s,
						u,
						c,
						l,
						h,
						p,
						f,
						d,
						v,
						m,
						g,
						y,
						x,
						b,
						w,
						C,
						E;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								if (
									((e = sn(_, 'img', 'toPixels')),
									_ instanceof yt || (e = e.toInt()),
									2 !== e.rank && 3 !== e.rank)
								)
									throw new Error(
										'toPixels only supports rank 2 or 3 tensors, got rank ' +
											e.rank +
											'.'
									);
								if (
									((n = e.shape.slice(0, 2)),
									(r = n[0]),
									(o = n[1]),
									4 < (i = 2 === e.rank ? 1 : e.shape[2]) || 2 === i)
								)
									throw new Error(
										'toPixels only supports depth of size 1, 3 or 4 but got ' +
											i
									);
								return [4, e.data()];
							case 1:
								return (
									(a = t.sent()),
									(s = e.min()),
									(u = e.max()),
									[4, Promise.all([s.data(), u.data()])]
								);
							case 2:
								if (
									((c = t.sent()),
									(l = c[0]),
									(h = c[1]),
									(p = l[0]),
									(f = h[0]),
									s.dispose(),
									u.dispose(),
									'float32' === e.dtype)
								) {
									if (p < 0 || 1 < f)
										throw new Error(
											'Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [' +
												p +
												' - ' +
												f +
												'].'
										);
								} else {
									if ('int32' !== e.dtype)
										throw new Error(
											'Unsupported type for toPixels: ' +
												e.dtype +
												'. Please use float32 or int32 tensors.'
										);
									if (p < 0 || 255 < f)
										throw new Error(
											'Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [' +
												p +
												' - ' +
												f +
												'].'
										);
								}
								for (
									d = 'float32' === e.dtype ? 255 : 1,
										v = new Uint8ClampedArray(o * r * 4),
										m = 0;
									m < r * o;
									++m
								)
									(b = x = y = g = void 0),
										1 === i
											? ((g = a[m] * d),
											  (y = a[m] * d),
											  (x = a[m] * d),
											  (b = 255))
											: 3 === i
											? ((g = a[3 * m] * d),
											  (y = a[3 * m + 1] * d),
											  (x = a[3 * m + 2] * d),
											  (b = 255))
											: 4 === i &&
											  ((g = a[4 * m] * d),
											  (y = a[4 * m + 1] * d),
											  (x = a[4 * m + 2] * d),
											  (b = a[4 * m + 3] * d)),
										(v[0 + (w = 4 * m)] = Math.round(g)),
										(v[1 + w] = Math.round(y)),
										(v[2 + w] = Math.round(x)),
										(v[3 + w] = Math.round(b));
								return (
									null != I &&
										((I.width = o),
										(I.height = r),
										(C = I.getContext('2d')),
										(E = new ImageData(v, o, r)),
										C.putImageData(E, 0, 0)),
									e !== _ && e.dispose(),
									[2, v]
								);
						}
					});
				});
			},
			fromPixels: Pp,
		}),
		Lp =
			((Up.prototype.getClassName = function () {
				return this.constructor.className;
			}),
			(Up.fromConfig = function (t, e) {
				return new t(e);
			}),
			Up),
		Wp =
			((zp.getMap = function () {
				return null == zp.instance && (zp.instance = new zp()), zp.instance;
			}),
			(zp.register = function (t) {
				zp.getMap().classNameMap[t.className] = [t, t.fromConfig];
			}),
			zp);
	function zp() {
		this.classNameMap = {};
	}
	function Up() {}
	function Vp(t) {
		P(null != t.className, function () {
			return 'Class being registered does not have the static className property defined.';
		}),
			P('string' == typeof t.className, function () {
				return (
					'className is required to be a string, but got type ' +
					typeof t.className
				);
			}),
			P(0 < t.className.length, function () {
				return 'Class being registered has an empty-string as its className, which is disallowed.';
			}),
			Wp.register(t);
	}
	var Gp = Object.freeze({
		Serializable: Lp,
		SerializationMap: Wp,
		registerClass: Vp,
	});
	function Hp() {
		return 32 === qt.backend.floatPrecision() ? 0.001 : 0.1;
	}
	function qp(t, e, n) {
		var r = !0;
		if (((z(t) || z(e)) && (r = !1), z(t) && z(e) && (r = !0), r)) {
			var o = t.constructor.name,
				i = e.constructor.name;
			if (o !== i)
				throw new Error(
					'Arrays are of different type. Actual: ' + o + '. Expected: ' + i
				);
		}
		if (Array.isArray(t) && Array.isArray(e)) {
			var a = on(t),
				s = on(e);
			if (!D(a, s))
				throw new Error(
					'Arrays have different shapes. Actual: [' +
						a +
						']. Expected: [' +
						s +
						']'
				);
		}
		var u = z(t) ? t : b(t),
			c = z(e) ? e : b(e);
		if (u.length !== c.length)
			throw new Error(
				'Arrays have different lengths actual: ' +
					u.length +
					' vs expected: ' +
					c.length +
					'.\nActual:   ' +
					u +
					'.\nExpected: ' +
					c +
					'.'
			);
		for (var l = 0; l < c.length; ++l) {
			var h = u[l],
				p = c[l];
			if (!n(h, p))
				throw new Error(
					'Arrays differ: actual[' +
						l +
						'] = ' +
						h +
						', expected[' +
						l +
						'] = ' +
						p +
						'.\nActual:   ' +
						u +
						'.\nExpected: ' +
						c +
						'.'
				);
		}
	}
	function jp(t, e, n) {
		return (
			(!isFinite(t) && !isFinite(e)) ||
			!(isNaN(t) || isNaN(e) || Math.abs(t - e) > n)
		);
	}
	var Kp,
		Xp = Object.freeze({
			TEST_EPSILON_FLOAT16: 0.1,
			expectArraysClose: function (t, e, n) {
				return (
					null == n && (n = Hp()),
					qp(t, e, function (t, e) {
						return jp(t, e, n);
					})
				);
			},
			testEpsilon: Hp,
			expectPromiseToFail: function (t, e) {
				t().then(
					function () {
						return e.fail();
					},
					function () {
						return e();
					}
				);
			},
			expectArraysEqual: function (t, e) {
				var n =
					'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e
						? [e]
						: e;
				return G(t) || G(t[0]) || G(e) || G(e[0])
					? qp(t, n, function (t, e) {
							return t == e;
					  })
					: qp(t, e, function (t, e) {
							return jp(t, e, 0);
					  });
			},
			expectNumbersClose: function (t, e, n) {
				if ((null == n && (n = Hp()), !jp(t, e, n)))
					throw new Error(
						'Numbers differ: actual === ' + t + ', expected === ' + e
					);
			},
			expectValuesInRange: function (t, e, n) {
				for (var r = 0; r < t.length; r++)
					if (t[r] < e || t[r] > n)
						throw new Error(
							'Value out of range:' + t[r] + ' low: ' + e + ', high: ' + n
						);
			},
			expectArrayBuffersEqual: function (t, e) {
				expect(new Float32Array(t)).toEqual(new Float32Array(e));
			},
		}),
		Yp = Object.freeze({
			gpgpu_util: ma,
			webgl_util: Je,
			forceHalfFloat: function () {
				_().set('WEBGL_FORCE_F16_TEXTURES', !0);
			},
			MathBackendWebGL: Ss,
			setWebGLContext: ne,
			GPGPUContext: ga,
		}),
		$p =
			(t(Jp, (Kp = Lp)),
			(Jp.prototype.minimize = function (t, e, n) {
				void 0 === e && (e = !1);
				var r = this.computeGradients(t, n),
					o = r.value,
					i = r.grads;
				if (null != n) {
					var a = n.map(function (t) {
						return { name: t.name, tensor: i[t.name] };
					});
					this.applyGradients(a);
				} else this.applyGradients(i);
				return en(i), e ? o : (o.dispose(), null);
			}),
			Object.defineProperty(Jp.prototype, 'iterations', {
				get: function () {
					return (
						null == this.iterations_ && (this.iterations_ = 0), this.iterations_
					);
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Jp.prototype.incrementIterations = function () {
				this.iterations_ = this.iterations + 1;
			}),
			(Jp.prototype.computeGradients = function (t, e) {
				return no(t, e);
			}),
			(Jp.prototype.dispose = function () {
				null != this.iterations_ && en(this.iterations_);
			}),
			(Jp.prototype.saveIterations = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						return (
							null == this.iterations_ && (this.iterations_ = 0),
							[2, { name: 'iter', tensor: In(this.iterations_, 'int32') }]
						);
					});
				});
			}),
			(Jp.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						throw new Error(
							'getWeights() is not implemented for this optimizer yet.'
						);
					});
				});
			}),
			(Jp.prototype.setWeights = function (t) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						throw new Error(
							'setWeights() is not implemented for this optimizer class ' +
								this.getClassName()
						);
					});
				});
			}),
			(Jp.prototype.extractIterations = function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this), [4, n[0].tensor.data()];
							case 1:
								return (e.iterations_ = t.sent()[0]), [2, n.slice(1)];
						}
					});
				});
			}),
			Jp);
	function Jp() {
		return (null !== Kp && Kp.apply(this, arguments)) || this;
	}
	Object.defineProperty($p, Symbol.hasInstance, {
		value: function (t) {
			return (
				null != t.minimize &&
				null != t.computeGradients &&
				null != t.applyGradients
			);
		},
	});
	var Qp,
		Zp =
			(t(tf, (Qp = $p)),
			(tf.prototype.applyGradients = function (n) {
				var u = this;
				(Array.isArray(n)
					? n.map(function (t) {
							return t.name;
					  })
					: Object.keys(n)
				).forEach(function (t, e) {
					var o = qt.registeredVariables[t];
					null == u.accumulatedGrads[e] &&
						(u.accumulatedGrads[e] = {
							originalName: t + '/accum_grad',
							variable: tn(function () {
								return Wn(o).variable(!1);
							}),
						}),
						null == u.accumulatedUpdates[e] &&
							(u.accumulatedUpdates[e] = {
								originalName: t + '/accum_var',
								variable: tn(function () {
									return Wn(o).variable(!1);
								}),
							});
					var i = Array.isArray(n) ? n[e].tensor : n[t];
					if (null != i) {
						var a = u.accumulatedGrads[e].variable,
							s = u.accumulatedUpdates[e].variable;
						tn(function () {
							var t = a.mul(u.rho).add(i.square().mul(1 - u.rho)),
								e = s.add(u.epsilon).sqrt().div(a.add(u.epsilon).sqrt()).mul(i),
								n = s.mul(u.rho).add(e.square().mul(1 - u.rho));
							a.assign(t), s.assign(n);
							var r = e.mul(-u.learningRate).add(o);
							o.assign(r);
						});
					}
				}),
					this.incrementIterations();
			}),
			(tf.prototype.dispose = function () {
				null != this.accumulatedUpdates &&
					(en(
						this.accumulatedGrads.map(function (t) {
							return t.variable;
						})
					),
					en(
						this.accumulatedUpdates.map(function (t) {
							return t.variable;
						})
					));
			}),
			(tf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(e = this.accumulatedGrads.concat(this.accumulatedUpdates)),
									[4, this.saveIterations()]
								);
							case 1:
								return [
									2,
									[t.sent()].concat(
										e.map(function (t) {
											return { name: t.originalName, tensor: t.variable };
										})
									),
								];
						}
					});
				});
			}),
			(tf.prototype.setWeights = function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(n)];
							case 1:
								return (
									(n = t.sent()),
									(e = n.length / 2),
									(this.accumulatedGrads = n.slice(0, e).map(function (t) {
										return {
											originalName: t.name,
											variable: t.tensor.variable(!1),
										};
									})),
									(this.accumulatedUpdates = n
										.slice(e, 2 * e)
										.map(function (t) {
											return {
												originalName: t.name,
												variable: t.tensor.variable(!1),
											};
										})),
									[2]
								);
						}
					});
				});
			}),
			(tf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					rho: this.rho,
					epsilon: this.epsilon,
				};
			}),
			(tf.fromConfig = function (t, e) {
				return new t(e.learningRate, e.rho, e.epsilon);
			}),
			(tf.className = 'Adadelta'),
			tf);
	function tf(t, e, n) {
		void 0 === n && (n = null);
		var r = Qp.call(this) || this;
		return (
			(r.learningRate = t),
			(r.rho = e),
			(r.epsilon = n),
			(r.accumulatedGrads = []),
			(r.accumulatedUpdates = []),
			null == n && (r.epsilon = qt.backend.epsilon()),
			r
		);
	}
	Vp(Zp);
	var ef,
		nf =
			(t(rf, (ef = $p)),
			(rf.prototype.applyGradients = function (i) {
				var a = this;
				(Array.isArray(i)
					? i.map(function (t) {
							return t.name;
					  })
					: Object.keys(i)
				).forEach(function (t, e) {
					var n = qt.registeredVariables[t];
					null == a.accumulatedGrads[e] &&
						(a.accumulatedGrads[e] = {
							originalName: t + '/accumulator',
							variable: tn(function () {
								return On(n.shape, a.initialAccumulatorValue).variable(!1);
							}),
						});
					var r = Array.isArray(i) ? i[e].tensor : i[t];
					if (null != r) {
						var o = a.accumulatedGrads[e].variable;
						tn(function () {
							var t = o.add(r.square());
							o.assign(t);
							var e = r
								.div(t.add(qt.backend.epsilon()).sqrt())
								.mul(-a.learningRate)
								.add(n);
							n.assign(e);
						});
					}
				}),
					this.incrementIterations();
			}),
			(rf.prototype.dispose = function () {
				null != this.accumulatedGrads &&
					en(
						this.accumulatedGrads.map(function (t) {
							return t.variable;
						})
					);
			}),
			(rf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.saveIterations()];
							case 1:
								return [
									2,
									[t.sent()].concat(
										this.accumulatedGrads.map(function (t) {
											return { name: t.originalName, tensor: t.variable };
										})
									),
								];
						}
					});
				});
			}),
			(rf.prototype.setWeights = function (e) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(e)];
							case 1:
								return (
									(e = t.sent()),
									(this.accumulatedGrads = e.map(function (t) {
										return {
											originalName: t.name,
											variable: t.tensor.variable(!1),
										};
									})),
									[2]
								);
						}
					});
				});
			}),
			(rf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					initialAccumulatorValue: this.initialAccumulatorValue,
				};
			}),
			(rf.fromConfig = function (t, e) {
				return new t(e.learningRate, e.initialAccumulatorValue);
			}),
			(rf.className = 'Adagrad'),
			rf);
	function rf(t, e) {
		void 0 === e && (e = 0.1);
		var n = ef.call(this) || this;
		return (
			(n.learningRate = t),
			(n.initialAccumulatorValue = e),
			(n.accumulatedGrads = []),
			n
		);
	}
	Vp(nf);
	var of,
		af =
			(t(sf, (of = $p)),
			(sf.prototype.applyGradients = function (f) {
				var d = this,
					t = Array.isArray(f)
						? f.map(function (t) {
								return t.name;
						  })
						: Object.keys(f);
				tn(function () {
					var h = Ju(1, d.accBeta1),
						p = Ju(1, d.accBeta2);
					t.forEach(function (t, e) {
						var n = qt.registeredVariables[t];
						null == d.accumulatedFirstMoment[e] &&
							(d.accumulatedFirstMoment[e] = {
								originalName: t + '/m',
								variable: tn(function () {
									return Wn(n).variable(!1);
								}),
							}),
							null == d.accumulatedSecondMoment[e] &&
								(d.accumulatedSecondMoment[e] = {
									originalName: t + '/v',
									variable: tn(function () {
										return Wn(n).variable(!1);
									}),
								});
						var r = Array.isArray(f) ? f[e].tensor : f[t];
						if (null != r) {
							var o = d.accumulatedFirstMoment[e].variable,
								i = d.accumulatedSecondMoment[e].variable,
								a = o.mul(d.beta1).add(r.mul(1 - d.beta1)),
								s = i.mul(d.beta2).add(r.square().mul(1 - d.beta2)),
								u = a.div(h),
								c = s.div(p);
							o.assign(a), i.assign(s);
							var l = u
								.div(c.sqrt().add(d.epsilon))
								.mul(-d.learningRate)
								.add(n);
							n.assign(l);
						}
					}),
						d.accBeta1.assign(d.accBeta1.mul(d.beta1)),
						d.accBeta2.assign(d.accBeta2.mul(d.beta2));
				}),
					this.incrementIterations();
			}),
			(sf.prototype.dispose = function () {
				this.accBeta1.dispose(),
					this.accBeta2.dispose(),
					null != this.accumulatedFirstMoment &&
						en(
							this.accumulatedFirstMoment.map(function (t) {
								return t.variable;
							})
						),
					null != this.accumulatedSecondMoment &&
						en(
							this.accumulatedSecondMoment.map(function (t) {
								return t.variable;
							})
						);
			}),
			(sf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(e = this.accumulatedFirstMoment.concat(
										this.accumulatedSecondMoment
									)),
									[4, this.saveIterations()]
								);
							case 1:
								return [
									2,
									[t.sent()].concat(
										e.map(function (t) {
											return { name: t.originalName, tensor: t.variable };
										})
									),
								];
						}
					});
				});
			}),
			(sf.prototype.setWeights = function (r) {
				return y(this, void 0, void 0, function () {
					var e,
						n = this;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(r)];
							case 1:
								return (
									(r = t.sent()),
									tn(function () {
										n.accBeta1.assign(Ku(n.beta1, n.iterations_ + 1)),
											n.accBeta2.assign(Ku(n.beta2, n.iterations_ + 1));
									}),
									(e = r.length / 2),
									(this.accumulatedFirstMoment = r
										.slice(0, e)
										.map(function (t) {
											return {
												originalName: t.name,
												variable: t.tensor.variable(!1),
											};
										})),
									(this.accumulatedSecondMoment = r
										.slice(e, 2 * e)
										.map(function (t) {
											return {
												originalName: t.name,
												variable: t.tensor.variable(!1),
											};
										})),
									[2]
								);
						}
					});
				});
			}),
			(sf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					beta1: this.beta1,
					beta2: this.beta2,
					epsilon: this.epsilon,
				};
			}),
			(sf.fromConfig = function (t, e) {
				return new t(e.learningRate, e.beta1, e.beta2, e.epsilon);
			}),
			(sf.className = 'Adam'),
			sf);
	function sf(t, e, n, r) {
		void 0 === r && (r = null);
		var o = of.call(this) || this;
		return (
			(o.learningRate = t),
			(o.beta1 = e),
			(o.beta2 = n),
			(o.epsilon = r),
			(o.accumulatedFirstMoment = []),
			(o.accumulatedSecondMoment = []),
			tn(function () {
				(o.accBeta1 = In(e).variable()), (o.accBeta2 = In(n).variable());
			}),
			null == r && (o.epsilon = qt.backend.epsilon()),
			o
		);
	}
	Vp(af);
	var uf,
		cf =
			(t(lf, (uf = $p)),
			(lf.prototype.applyGradients = function (f) {
				var d = this,
					t = Array.isArray(f)
						? f.map(function (t) {
								return t.name;
						  })
						: Object.keys(f);
				tn(function () {
					var h = Ju(1, d.accBeta1),
						p = Ou(-d.learningRate, d.iteration.mul(d.decay).add(1));
					t.forEach(function (t, e) {
						var n = qt.registeredVariables[t];
						null == d.accumulatedFirstMoment[e] &&
							(d.accumulatedFirstMoment[e] = {
								originalName: t + '/m',
								variable: Wn(n).variable(!1),
							}),
							null == d.accumulatedWeightedInfNorm[e] &&
								(d.accumulatedWeightedInfNorm[e] = {
									originalName: t + '/v',
									variable: Wn(n).variable(!1),
								});
						var r = Array.isArray(f) ? f[e].tensor : f[t];
						if (null != r) {
							var o = d.accumulatedFirstMoment[e].variable,
								i = d.accumulatedWeightedInfNorm[e].variable,
								a = o.mul(d.beta1).add(r.mul(1 - d.beta1)),
								s = i.mul(d.beta2),
								u = r.abs(),
								c = s.maximum(u);
							o.assign(a), i.assign(c);
							var l = p
								.div(h)
								.mul(a.div(c.add(d.epsilon)))
								.add(n);
							n.assign(l);
						}
					}),
						d.iteration.assign(d.iteration.add(1)),
						d.accBeta1.assign(d.accBeta1.mul(d.beta1));
				}),
					this.incrementIterations();
			}),
			(lf.prototype.dispose = function () {
				this.accBeta1.dispose(),
					this.iteration.dispose(),
					null != this.accumulatedFirstMoment &&
						en(
							this.accumulatedFirstMoment.map(function (t) {
								return t.variable;
							})
						),
					null != this.accumulatedWeightedInfNorm &&
						en(
							this.accumulatedWeightedInfNorm.map(function (t) {
								return t.variable;
							})
						);
			}),
			(lf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						throw new Error('getWeights() is not implemented for Adamax yet.');
					});
				});
			}),
			(lf.prototype.setWeights = function (t) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						throw new Error('setWeights() is not implemented for Adamax yet.');
					});
				});
			}),
			(lf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					beta1: this.beta1,
					beta2: this.beta2,
					epsilon: this.epsilon,
					decay: this.decay,
				};
			}),
			(lf.fromConfig = function (t, e) {
				return new t(e.learningRate, e.beta1, e.beta2, e.epsilon, e.decay);
			}),
			(lf.className = 'Adamax'),
			lf);
	function lf(t, e, n, r, o) {
		void 0 === r && (r = null), void 0 === o && (o = 0);
		var i = uf.call(this) || this;
		return (
			(i.learningRate = t),
			(i.beta1 = e),
			(i.beta2 = n),
			(i.epsilon = r),
			(i.decay = o),
			(i.accumulatedFirstMoment = []),
			(i.accumulatedWeightedInfNorm = []),
			tn(function () {
				(i.iteration = In(0).variable()), (i.accBeta1 = In(e).variable());
			}),
			null == r && (i.epsilon = qt.backend.epsilon()),
			i
		);
	}
	Vp(cf);
	var hf,
		pf =
			(t(ff, (hf = $p)),
			(ff.prototype.applyGradients = function (o) {
				var i = this;
				(Array.isArray(o)
					? o.map(function (t) {
							return t.name;
					  })
					: Object.keys(o)
				).forEach(function (t, e) {
					var n = Array.isArray(o) ? o[e].tensor : o[t];
					if (null != n) {
						var r = qt.registeredVariables[t];
						tn(function () {
							var t = i.c.mul(n).add(r);
							r.assign(t);
						});
					}
				}),
					this.incrementIterations();
			}),
			(ff.prototype.setLearningRate = function (t) {
				(this.learningRate = t),
					null != this.c && this.c.dispose(),
					(this.c = nn(In(-t)));
			}),
			(ff.prototype.dispose = function () {
				this.c.dispose();
			}),
			(ff.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.saveIterations()];
							case 1:
								return [2, [t.sent()]];
						}
					});
				});
			}),
			(ff.prototype.setWeights = function (e) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(e)];
							case 1:
								if (0 !== (e = t.sent()).length)
									throw new Error(
										'SGD optimizer does not have settable weights.'
									);
								return [2];
						}
					});
				});
			}),
			(ff.prototype.getConfig = function () {
				return { learningRate: this.learningRate };
			}),
			(ff.fromConfig = function (t, e) {
				return new t(e.learningRate);
			}),
			(ff.className = 'SGD'),
			ff);
	function ff(t) {
		var e = hf.call(this) || this;
		return (e.learningRate = t), e.setLearningRate(t), e;
	}
	Vp(pf);
	var df,
		vf =
			(t(mf, (df = pf)),
			(mf.prototype.applyGradients = function (i) {
				var a = this;
				(Array.isArray(i)
					? i.map(function (t) {
							return t.name;
					  })
					: Object.keys(i)
				).forEach(function (t, e) {
					var n = qt.registeredVariables[t];
					null == a.accumulations[e] &&
						(a.accumulations[e] = {
							originalName: t + '/momentum',
							variable: tn(function () {
								return Wn(n).variable(!1);
							}),
						});
					var r = a.accumulations[e].variable,
						o = Array.isArray(i) ? i[e].tensor : i[t];
					null != o &&
						tn(function () {
							var t,
								e = a.m.mul(r).add(o);
							(t = a.useNesterov
								? a.c.mul(o.add(e.mul(a.m))).add(n)
								: a.c.mul(e).add(n)),
								r.assign(e),
								n.assign(t);
						});
				}),
					this.incrementIterations();
			}),
			(mf.prototype.dispose = function () {
				this.m.dispose(),
					null != this.accumulations &&
						en(
							this.accumulations.map(function (t) {
								return t.variable;
							})
						);
			}),
			(mf.prototype.setMomentum = function (t) {
				this.momentum = t;
			}),
			(mf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.saveIterations()];
							case 1:
								return [
									2,
									[t.sent()].concat(
										this.accumulations.map(function (t) {
											return { name: t.originalName, tensor: t.variable };
										})
									),
								];
						}
					});
				});
			}),
			(mf.prototype.setWeights = function (e) {
				return y(this, void 0, void 0, function () {
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(e)];
							case 1:
								return (
									(e = t.sent()),
									(this.accumulations = e.map(function (t) {
										return {
											originalName: t.name,
											variable: t.tensor.variable(!1),
										};
									})),
									[2]
								);
						}
					});
				});
			}),
			(mf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					momentum: this.momentum,
					useNesterov: this.useNesterov,
				};
			}),
			(mf.fromConfig = function (t, e) {
				return new t(e.learningRate, e.momentum, e.useNesterov);
			}),
			(mf.className = 'Momentum'),
			mf);
	function mf(t, e, n) {
		void 0 === n && (n = !1);
		var r = df.call(this, t) || this;
		return (
			(r.learningRate = t),
			(r.momentum = e),
			(r.useNesterov = n),
			(r.accumulations = []),
			(r.m = In(r.momentum)),
			r
		);
	}
	Vp(vf);
	var gf,
		yf =
			(t(xf, (gf = $p)),
			(xf.prototype.applyGradients = function (e) {
				var h = this;
				(Array.isArray(e)
					? e.map(function (t) {
							return t.name;
					  })
					: Object.keys(e)
				).forEach(function (t, a) {
					var s = qt.registeredVariables[t];
					null == h.accumulatedMeanSquares[a] &&
						(h.accumulatedMeanSquares[a] = {
							originalName: t + '/rms',
							variable: tn(function () {
								return Wn(s).variable(!1);
							}),
						}),
						null == h.accumulatedMoments[a] &&
							(h.accumulatedMoments[a] = {
								originalName: t + '/momentum',
								variable: tn(function () {
									return Wn(s).variable(!1);
								}),
							}),
						null == h.accumulatedMeanGrads[a] &&
							h.centered &&
							(h.accumulatedMeanGrads[a] = {
								originalName: t + '/mg',
								variable: tn(function () {
									return Wn(s).variable(!1);
								}),
							});
					var u = Array.isArray(e) ? e[a].tensor : e[t];
					if (null != u) {
						var c = h.accumulatedMeanSquares[a].variable,
							l = h.accumulatedMoments[a].variable;
						tn(function () {
							var t = c.mul(h.decay).add(u.square().mul(1 - h.decay));
							if (h.centered) {
								var e = h.accumulatedMeanGrads[a].variable,
									n = e.mul(h.decay).add(u.mul(1 - h.decay)),
									r = l
										.mul(h.momentum)
										.add(
											u
												.mul(h.learningRate)
												.div(t.sub(n.square().add(h.epsilon)).sqrt())
										);
								c.assign(t), e.assign(n), l.assign(r);
								var o = s.sub(r);
								s.assign(o);
							} else {
								var i = c.mul(h.decay).add(u.square().mul(1 - h.decay));
								(r = l
									.mul(h.momentum)
									.add(u.mul(h.learningRate).div(i.add(h.epsilon).sqrt()))),
									c.assign(i),
									l.assign(r),
									(o = s.sub(r)),
									s.assign(o);
							}
						});
					}
				}),
					this.incrementIterations();
			}),
			(xf.prototype.dispose = function () {
				null != this.accumulatedMeanSquares &&
					en(
						this.accumulatedMeanSquares.map(function (t) {
							return t.variable;
						})
					),
					null != this.accumulatedMeanGrads &&
						this.centered &&
						en(
							this.accumulatedMeanGrads.map(function (t) {
								return t.variable;
							})
						),
					null != this.accumulatedMoments &&
						en(
							this.accumulatedMoments.map(function (t) {
								return t.variable;
							})
						);
			}),
			(xf.prototype.getWeights = function () {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(e = this.accumulatedMeanSquares.concat(
										this.accumulatedMoments
									)),
									this.centered && e.push.apply(e, this.accumulatedMeanGrads),
									[4, this.saveIterations()]
								);
							case 1:
								return [
									2,
									[t.sent()].concat(
										e.map(function (t) {
											return { name: t.originalName, tensor: t.variable };
										})
									),
								];
						}
					});
				});
			}),
			(xf.prototype.setWeights = function (n) {
				return y(this, void 0, void 0, function () {
					var e;
					return R(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.extractIterations(n)];
							case 1:
								return (
									(n = t.sent()),
									(e = this.centered ? n.length / 3 : n.length / 2),
									(this.accumulatedMeanSquares = n
										.slice(0, e)
										.map(function (t) {
											return {
												originalName: t.name,
												variable: t.tensor.variable(!1),
											};
										})),
									(this.accumulatedMoments = n
										.slice(e, 2 * e)
										.map(function (t) {
											return {
												originalName: t.name,
												variable: t.tensor.variable(!1),
											};
										})),
									this.centered &&
										(this.accumulatedMeanGrads = n
											.slice(2 * e, 3 * e)
											.map(function (t) {
												return {
													originalName: t.name,
													variable: t.tensor.variable(!1),
												};
											})),
									[2]
								);
						}
					});
				});
			}),
			(xf.prototype.getConfig = function () {
				return {
					learningRate: this.learningRate,
					decay: this.decay,
					momentum: this.momentum,
					epsilon: this.epsilon,
					centered: this.centered,
				};
			}),
			(xf.fromConfig = function (t, e) {
				return new t(
					e.learningRate,
					e.decay,
					e.momentum,
					e.epsilon,
					e.centered
				);
			}),
			(xf.className = 'RMSProp'),
			xf);
	function xf(t, e, n, r, o) {
		void 0 === e && (e = 0.9),
			void 0 === n && (n = 0),
			void 0 === r && (r = null),
			void 0 === o && (o = !1);
		var i = gf.call(this) || this;
		if (
			((i.learningRate = t),
			(i.decay = e),
			(i.momentum = n),
			(i.epsilon = r),
			(i.accumulatedMeanSquares = []),
			(i.accumulatedMoments = []),
			(i.accumulatedMeanGrads = []),
			(i.centered = o),
			null == r && (i.epsilon = qt.backend.epsilon()),
			null == t)
		)
			throw new Error('learningRate for RMSPropOptimizer must be defined.');
		return i;
	}
	Vp(yf);
	var bf =
			((Ef.sgd = function (t) {
				return new pf(t);
			}),
			(Ef.momentum = function (t, e, n) {
				return void 0 === n && (n = !1), new vf(t, e, n);
			}),
			(Ef.rmsprop = function (t, e, n, r, o) {
				return (
					void 0 === e && (e = 0.9),
					void 0 === n && (n = 0),
					void 0 === r && (r = null),
					void 0 === o && (o = !1),
					new yf(t, e, n, r, o)
				);
			}),
			(Ef.adam = function (t, e, n, r) {
				return (
					void 0 === t && (t = 0.001),
					void 0 === e && (e = 0.9),
					void 0 === n && (n = 0.999),
					void 0 === r && (r = null),
					new af(t, e, n, r)
				);
			}),
			(Ef.adadelta = function (t, e, n) {
				return (
					void 0 === t && (t = 0.001),
					void 0 === e && (e = 0.95),
					void 0 === n && (n = null),
					new Zp(t, e, n)
				);
			}),
			(Ef.adamax = function (t, e, n, r, o) {
				return (
					void 0 === t && (t = 0.002),
					void 0 === e && (e = 0.9),
					void 0 === n && (n = 0.999),
					void 0 === r && (r = null),
					void 0 === o && (o = 0),
					new cf(t, e, n, r, o)
				);
			}),
			(Ef.adagrad = function (t, e) {
				return void 0 === e && (e = 0.1), new nf(t, e);
			}),
			Ef),
		wf = {
			sgd: bf.sgd,
			momentum: bf.momentum,
			adadelta: bf.adadelta,
			adagrad: bf.adagrad,
			rmsprop: bf.rmsprop,
			adamax: bf.adamax,
			adam: bf.adam,
		},
		Cf =
			'undefined' != typeof requestAnimationFrame
				? requestAnimationFrame
				: 'undefined' != typeof setImmediate
				? setImmediate
				: function (t) {
						return t();
				  };
	function Ef() {}
	vt = gh;
	var _f = Object.freeze({
		__proto__: null,
		AdadeltaOptimizer: Zp,
		AdagradOptimizer: nf,
		AdamOptimizer: af,
		AdamaxOptimizer: cf,
		DataStorage: so,
		get ENV() {
			return i;
		},
		Environment: o,
		KernelBackend: uo,
		MomentumOptimizer: vf,
		Optimizer: $p,
		RMSPropOptimizer: yf,
		get Rank() {
			return bt;
		},
		get Reduction() {
			return Ml;
		},
		SGDOptimizer: pf,
		Tensor: yt,
		TensorBuffer: ft,
		Variable: Tt,
		abs: Ts,
		acos: Ns,
		acosh: Fs,
		add: Tu,
		addN: Nu,
		addStrict: Fu,
		all: Jc,
		any: Qc,
		argMax: Zc,
		argMin: tl,
		asin: Ms,
		asinh: Os,
		atan: Ps,
		atan2: Mu,
		atanh: Bs,
		avgPool: Uc,
		avgPool3d: Hc,
		backend: function () {
			return qt.backend;
		},
		backend_util: To,
		basicLSTMCell: gl,
		batchNorm: Cu,
		batchNorm2d: Eu,
		batchNorm3d: _u,
		batchNorm4d: Iu,
		batchNormalization: wu,
		batchNormalization2d: yu,
		batchNormalization3d: xu,
		batchNormalization4d: bu,
		batchToSpaceND: lr,
		booleanMaskAsync: fc,
		broadcastTo: hr,
		browser: Bp,
		buffer: sr,
		cast: pr,
		ceil: Ls,
		clipByValue: Ws,
		clone: fr,
		complex: bn,
		concat: zn,
		concat1d: Un,
		concat2d: Vn,
		concat3d: Gn,
		concat4d: Hn,
		conv1d: xc,
		conv2d: bc,
		conv2dTranspose: Sc,
		conv3d: wc,
		conv3dTranspose: Dc,
		cos: zs,
		cosh: Us,
		cumsum: dr,
		customGrad: ro,
		deprecationWarn: Ze,
		depthToSpace: vr,
		depthwiseConv2d: _c,
		diag: Al,
		disableDeprecationWarnings: function () {
			_().set('DEPRECATION_WARNINGS_ENABLED', !1),
				console.warn('TensorFlow.js deprecation warnings have been disabled.');
		},
		dispose: en,
		disposeVariables: function () {
			qt.disposeVariables();
		},
		div: Ou,
		divNoNan: Pu,
		divStrict: Bu,
		dot: Tc,
		dropout: Tl,
		elu: ul,
		enableDebugMode: function () {
			_().set('DEBUG', !0);
		},
		enableProdMode: function () {
			_().set('PROD', !0);
		},
		engine: function () {
			return qt;
		},
		env: _,
		equal: Zu,
		equalStrict: tc,
		erf: Vs,
		exp: Gs,
		expandDims: mr,
		expm1: Hs,
		eye: gr,
		fft: El,
		fill: On,
		findBackend: function (t) {
			return qt.findBackend(t);
		},
		findBackendFactory: function (t) {
			return qt.findBackendFactory(t);
		},
		floor: qs,
		floorDiv: Lu,
		frame: Ll,
		fused: mh,
		gather: dc,
		gatherND: Dl,
		gather_util: Vr,
		getBackend: function () {
			return qt.backendName;
		},
		getGradient: l,
		getKernel: g,
		getKernelsForBackend: a,
		grad: function (i) {
			return (
				P(K(i), function () {
					return 'The f passed in grad(f) must be a function';
				}),
				function (t, e) {
					var r = sn(t, 'x', 'tf.grad', null),
						o = null != e ? sn(e, 'dy', 'tf.grad') : null;
					return qt.tidy(function () {
						var t = qt.gradients(
								function () {
									return i(r);
								},
								[r],
								o
							),
							e = t.value,
							n = t.grads;
						return (
							null != o &&
								x(
									e.shape,
									o.shape,
									'The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)'
								),
							oo(n),
							n[0]
						);
					});
				}
			);
		},
		grads: function (i) {
			return (
				P(K(i), function () {
					return 'The f passed in grads(f) must be a function';
				}),
				function (t, e) {
					P(Array.isArray(t), function () {
						return 'The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s';
					});
					var r = un(t, 'args', 'tf.grads', null),
						o = null != e ? sn(e, 'dy', 'tf.grads') : null;
					return qt.tidy(function () {
						var t = qt.gradients(
								function () {
									return i.apply(void 0, r);
								},
								r,
								o
							),
							e = t.value,
							n = t.grads;
						return (
							null != o &&
								x(
									e.shape,
									o.shape,
									'The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])'
								),
							oo(n),
							n
						);
					});
				}
			);
		},
		greater: ec,
		greaterEqual: nc,
		greaterEqualStrict: rc,
		greaterStrict: oc,
		hammingWindow: Bl,
		hannWindow: Pl,
		ifft: _l,
		imag: Cn,
		image: ph,
		inTopKAsync: Fl,
		io: Fp,
		irfft: Rl,
		isFinite: ru,
		isInf: nu,
		isNaN: eu,
		keep: nn,
		leakyRelu: cl,
		less: ic,
		lessEqual: ac,
		lessEqualStrict: sc,
		lessStrict: uc,
		linalg: eh,
		linspace: Pn,
		localResponseNormalization: vl,
		log: js,
		log1p: Ks,
		logSigmoid: Xs,
		logSoftmax: ao,
		logSumExp: el,
		logicalAnd: Ru,
		logicalNot: ku,
		logicalOr: Su,
		logicalXor: Du,
		losses: $l,
		matMul: Ac,
		math: Op,
		max: nl,
		maxPool: zc,
		maxPool3d: Gc,
		maximum: Wu,
		maximumStrict: zu,
		mean: rl,
		memory: function () {
			return qt.memory();
		},
		min: ol,
		minimum: Uu,
		minimumStrict: Vu,
		mod: Gu,
		modStrict: Hu,
		moments: il,
		movingAverage: xl,
		mul: qu,
		mulStrict: ju,
		multiRNNCell: yl,
		multinomial: yr,
		neg: Ys,
		nextFrame: function () {
			return new Promise(function (t) {
				return Cf(function () {
					return t();
				});
			});
		},
		norm: ml,
		notEqual: cc,
		notEqualStrict: lc,
		oneHot: xr,
		ones: Fn,
		onesLike: Ln,
		op: xn,
		outerProduct: Nc,
		pad: br,
		pad1d: wr,
		pad2d: Cr,
		pad3d: Er,
		pad4d: _r,
		pool: Vc,
		pow: Ku,
		powStrict: Xu,
		prelu: ll,
		print: ur,
		prod: sl,
		profile: function (t) {
			return qt.profile(t);
		},
		rand: Ir,
		randomGamma: kr,
		randomNormal: Rr,
		randomUniform: Sr,
		range: Bn,
		ready: function () {
			return qt.ready();
		},
		real: wn,
		reciprocal: $s,
		registerBackend: function (t, e, n) {
			return void 0 === n && (n = 1), qt.registerBackend(t, e, n);
		},
		registerGradient: h,
		registerKernel: s,
		relu: hl,
		relu6: pl,
		removeBackend: function (t) {
			qt.removeBackend(t);
		},
		reshape: Dr,
		reverse: Fc,
		reverse1d: Mc,
		reverse2d: Oc,
		reverse3d: Pc,
		reverse4d: Bc,
		rfft: Il,
		round: Js,
		rsqrt: Qs,
		scalar: In,
		scatterND: Cl,
		scatter_util: Kr,
		selu: fl,
		separableConv2d: kc,
		serialization: Gp,
		setBackend: function (t) {
			return qt.setBackend(t);
		},
		setPlatform: function (t, e) {
			_().setPlatform(t, e);
		},
		setdiff1dAsync: cr,
		sigmoid: Zs,
		sign: tu,
		signal: zl,
		sin: ou,
		sinh: iu,
		slice: qc,
		slice1d: jc,
		slice2d: Kc,
		slice3d: Xc,
		slice4d: Yc,
		slice_util: eo,
		softmax: io,
		softplus: au,
		spaceToBatchND: Ar,
		sparseToDense: Sl,
		spectral: kl,
		split: qn,
		sqrt: su,
		square: As,
		squaredDifference: Yu,
		squaredDifferenceStrict: $u,
		squeeze: Tr,
		stack: Nr,
		step: uu,
		stft: Wl,
		stridedSlice: bl,
		sub: Ju,
		subStrict: Qu,
		sum: al,
		sumOutType: Ot,
		tan: cu,
		tanh: lu,
		tensor: En,
		tensor1d: Rn,
		tensor2d: kn,
		tensor3d: Sn,
		tensor4d: Dn,
		tensor5d: An,
		tensor6d: Tn,
		tensor_util: zt,
		test_util: Xp,
		tidy: tn,
		tile: Fr,
		time: function (t) {
			return qt.time(t);
		},
		topk: wl,
		train: wf,
		transpose: dl,
		truncatedNormal: Mr,
		unregisterGradient: function (t) {
			if (!n.has(t))
				throw new Error(
					"The gradient '" + t + "' for backend is not registered"
				);
			n.delete(t);
		},
		unregisterKernel: function (t, e) {
			var n = p(t, e);
			if (!u.has(n))
				throw new Error(
					"The kernel '" + t + "' for backend '" + e + "' is not registered"
				);
			u.delete(n);
		},
		unsortedSegmentSum: vc,
		unstack: Or,
		util: ot,
		valueAndGrad: function (i) {
			return (
				P(K(i), function () {
					return 'The f passed in valueAndGrad(f) must be a function';
				}),
				function (t, e) {
					P(t instanceof yt, function () {
						return 'The x passed in valueAndGrad(f)(x) must be a tensor';
					}),
						P(null == e || e instanceof yt, function () {
							return 'The dy passed in valueAndGrad(f)(x, dy) must be a tensor';
						});
					var n = qt.gradients(
							function () {
								return i(t);
							},
							[t],
							e
						),
						r = n.grads,
						o = n.value;
					return oo(r), { grad: r[0], value: o };
				}
			);
		},
		valueAndGrads: function (r) {
			return (
				P(K(r), function () {
					return 'The f passed in valueAndGrads(f) must be a function';
				}),
				function (t, e) {
					P(
						Array.isArray(t) &&
							t.every(function (t) {
								return t instanceof yt;
							}),
						function () {
							return 'The args passed in valueAndGrads(f)(args) must be array of tensors';
						}
					),
						P(null == e || e instanceof yt, function () {
							return 'The dy passed in valueAndGrads(f)(args, dy) must be a tensor';
						});
					var n = qt.gradients(
						function () {
							return r.apply(void 0, t);
						},
						t,
						e
					);
					return (
						null != e &&
							x(
								n.value.shape,
								e.shape,
								'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])'
							),
						oo(n.grads),
						n
					);
				}
			);
		},
		variable: Nn,
		variableGrads: no,
		version_core: '1.5.2',
		webgl: Yp,
		where: Au,
		whereAsync: gu,
		zeros: Mn,
		zerosLike: Wn,
	});
	function If(i, a, t) {
		if (
			(void 0 === t && (t = !1),
			i.beginPath(),
			a.slice(1).forEach(function (t, e) {
				var n = t.x,
					r = t.y,
					o = a[e];
				i.moveTo(o.x, o.y), i.lineTo(n, r);
			}),
			t)
		) {
			var e = a[a.length - 1],
				n = a[0];
			if (!e || !n) return;
			i.moveTo(e.x, e.y), i.lineTo(n.x, n.y);
		}
		i.stroke();
	}
	var Rf = function (t, e) {
		return (Rf =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (t, e) {
					t.__proto__ = e;
				}) ||
			function (t, e) {
				for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
			})(t, e);
	};
	function kf(t, e) {
		function n() {
			this.constructor = t;
		}
		Rf(t, e),
			(t.prototype =
				null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
	}
	var Sf = function () {
		return (Sf =
			Object.assign ||
			function (t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in (e = arguments[n]))
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t;
			}).apply(this, arguments);
	};
	function Df(i, a, s, u) {
		return new (s = s || Promise)(function (t, e) {
			function n(t) {
				try {
					o(u.next(t));
				} catch (t) {
					e(t);
				}
			}
			function r(t) {
				try {
					o(u.throw(t));
				} catch (t) {
					e(t);
				}
			}
			function o(e) {
				e.done
					? t(e.value)
					: new s(function (t) {
							t(e.value);
					  }).then(n, r);
			}
			o((u = u.apply(i, a || [])).next());
		});
	}
	function Af(n, r) {
		var o,
			i,
			a,
			t,
			s = {
				label: 0,
				sent: function () {
					if (1 & a[0]) throw a[1];
					return a[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(t = { next: e(0), throw: e(1), return: e(2) }),
			'function' == typeof Symbol &&
				(t[Symbol.iterator] = function () {
					return this;
				}),
			t
		);
		function e(e) {
			return function (t) {
				return (function (e) {
					if (o) throw new TypeError('Generator is already executing.');
					for (; s; )
						try {
							if (
								((o = 1),
								i &&
									(a =
										2 & e[0]
											? i.return
											: e[0]
											? i.throw || ((a = i.return) && a.call(i), 0)
											: i.next) &&
									!(a = a.call(i, e[1])).done)
							)
								return a;
							switch (((i = 0), a && (e = [2 & e[0], a.value]), e[0])) {
								case 0:
								case 1:
									a = e;
									break;
								case 4:
									return s.label++, { value: e[1], done: !1 };
								case 5:
									s.label++, (i = e[1]), (e = [0]);
									continue;
								case 7:
									(e = s.ops.pop()), s.trys.pop();
									continue;
								default:
									if (
										!(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
										(6 === e[0] || 2 === e[0])
									) {
										s = 0;
										continue;
									}
									if (3 === e[0] && (!a || (e[1] > a[0] && e[1] < a[3]))) {
										s.label = e[1];
										break;
									}
									if (6 === e[0] && s.label < a[1]) {
										(s.label = a[1]), (a = e);
										break;
									}
									if (a && s.label < a[2]) {
										(s.label = a[2]), s.ops.push(e);
										break;
									}
									a[2] && s.ops.pop(), s.trys.pop();
									continue;
							}
							e = r.call(n, s);
						} catch (t) {
							(e = [6, t]), (i = 0);
						} finally {
							o = a = 0;
						}
					if (5 & e[0]) throw e[1];
					return { value: e[0] ? e[1] : void 0, done: !0 };
				})([e, t]);
			};
		}
	}
	function Tf() {
		for (var t = 0, e = 0, n = arguments.length; e < n; e++)
			t += arguments[e].length;
		var r = Array(t),
			o = 0;
		for (e = 0; e < n; e++)
			for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
				r[o] = i[a];
		return r;
	}
	var Nf =
		(Object.defineProperty(Ff.prototype, 'width', {
			get: function () {
				return this._width;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Ff.prototype, 'height', {
			get: function () {
				return this._height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(Ff.prototype.reverse = function () {
			return new Ff(1 / this.width, 1 / this.height);
		}),
		Ff);
	function Ff(t, e) {
		if (!qf(t) || !qf(e))
			throw new Error(
				'Dimensions.constructor - expected width and height to be valid numbers, instead have ' +
					JSON.stringify({ width: t, height: e })
			);
		(this._width = t), (this._height = e);
	}
	function Mf(t, e) {
		return t instanceof yt && t.shape.length === e;
	}
	function Of(t) {
		return Mf(t, 2);
	}
	function Pf(t) {
		return Mf(t, 3);
	}
	function Bf(t) {
		return Mf(t, 4);
	}
	function Lf(t) {
		return t % 1 != 0;
	}
	function Wf(t) {
		return t % 2 == 0;
	}
	function zf(t, e) {
		void 0 === e && (e = 2);
		var n = Math.pow(10, e);
		return Math.floor(t * n) / n;
	}
	function Uf(t) {
		return t && t.width && t.height;
	}
	function Vf(t, e) {
		var n = t.width,
			r = t.height,
			o = e / Math.max(r, n);
		return new Nf(Math.round(n * o), Math.round(r * o));
	}
	function Gf(t) {
		return t
			.reduce(function (t, e) {
				return t.add(e);
			}, new Xf(0, 0))
			.div(new Xf(t.length, t.length));
	}
	function Hf(t, n, r) {
		return Array(t)
			.fill(0)
			.map(function (t, e) {
				return n + e * r;
			});
	}
	function qf(t) {
		return (!!t && t !== 1 / 0 && t !== -1 / 0 && !isNaN(t)) || 0 === t;
	}
	function jf(t) {
		return qf(t) && 0 <= t && t <= 1;
	}
	var Kf = Object.freeze({
			__proto__: null,
			isTensor: Mf,
			isTensor1D: function (t) {
				return Mf(t, 1);
			},
			isTensor2D: Of,
			isTensor3D: Pf,
			isTensor4D: Bf,
			isFloat: Lf,
			isEven: Wf,
			round: zf,
			isDimensions: Uf,
			computeReshapedDimensions: Vf,
			getCenterPoint: Gf,
			range: Hf,
			isValidNumber: qf,
			isValidProbablitiy: jf,
		}),
		Xf =
			(Object.defineProperty(Yf.prototype, 'x', {
				get: function () {
					return this._x;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Object.defineProperty(Yf.prototype, 'y', {
				get: function () {
					return this._y;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Yf.prototype.add = function (t) {
				return new Yf(this.x + t.x, this.y + t.y);
			}),
			(Yf.prototype.sub = function (t) {
				return new Yf(this.x - t.x, this.y - t.y);
			}),
			(Yf.prototype.mul = function (t) {
				return new Yf(this.x * t.x, this.y * t.y);
			}),
			(Yf.prototype.div = function (t) {
				return new Yf(this.x / t.x, this.y / t.y);
			}),
			(Yf.prototype.abs = function () {
				return new Yf(Math.abs(this.x), Math.abs(this.y));
			}),
			(Yf.prototype.magnitude = function () {
				return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
			}),
			(Yf.prototype.floor = function () {
				return new Yf(Math.floor(this.x), Math.floor(this.y));
			}),
			Yf);
	function Yf(t, e) {
		(this._x = t), (this._y = e);
	}
	var $f =
		((Jf.isRect = function (t) {
			return !!t && [t.x, t.y, t.width, t.height].every(qf);
		}),
		(Jf.assertIsValidBox = function (t, e, n) {
			if ((void 0 === n && (n = !1), !Jf.isRect(t)))
				throw new Error(
					e +
						' - invalid box: ' +
						JSON.stringify(t) +
						', expected object with properties x, y, width, height'
				);
			if (!n && (t.width < 0 || t.height < 0))
				throw new Error(
					e +
						' - width (' +
						t.width +
						') and height (' +
						t.height +
						') must be positive numbers'
				);
		}),
		Object.defineProperty(Jf.prototype, 'x', {
			get: function () {
				return this._x;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'y', {
			get: function () {
				return this._y;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'width', {
			get: function () {
				return this._width;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'height', {
			get: function () {
				return this._height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'left', {
			get: function () {
				return this.x;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'top', {
			get: function () {
				return this.y;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'right', {
			get: function () {
				return this.x + this.width;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'bottom', {
			get: function () {
				return this.y + this.height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'area', {
			get: function () {
				return this.width * this.height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'topLeft', {
			get: function () {
				return new Xf(this.left, this.top);
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'topRight', {
			get: function () {
				return new Xf(this.right, this.top);
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'bottomLeft', {
			get: function () {
				return new Xf(this.left, this.bottom);
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Jf.prototype, 'bottomRight', {
			get: function () {
				return new Xf(this.right, this.bottom);
			},
			enumerable: !0,
			configurable: !0,
		}),
		(Jf.prototype.round = function () {
			var t = [this.x, this.y, this.width, this.height].map(function (t) {
				return Math.round(t);
			});
			return new Jf({ x: t[0], y: t[1], width: t[2], height: t[3] });
		}),
		(Jf.prototype.floor = function () {
			var t = [this.x, this.y, this.width, this.height].map(function (t) {
				return Math.floor(t);
			});
			return new Jf({ x: t[0], y: t[1], width: t[2], height: t[3] });
		}),
		(Jf.prototype.toSquare = function () {
			var t = this.x,
				e = this.y,
				n = this.width,
				r = this.height,
				o = Math.abs(n - r);
			return (
				n < r && ((t -= o / 2), (n += o)),
				r < n && ((e -= o / 2), (r += o)),
				new Jf({ x: t, y: e, width: n, height: r })
			);
		}),
		(Jf.prototype.rescale = function (t) {
			var e = Uf(t) ? t.width : t,
				n = Uf(t) ? t.height : t;
			return new Jf({
				x: this.x * e,
				y: this.y * n,
				width: this.width * e,
				height: this.height * n,
			});
		}),
		(Jf.prototype.pad = function (t, e) {
			var n = [this.x - t / 2, this.y - e / 2, this.width + t, this.height + e];
			return new Jf({ x: n[0], y: n[1], width: n[2], height: n[3] });
		}),
		(Jf.prototype.clipAtImageBorders = function (t, e) {
			var n = this.x,
				r = this.y,
				o = this.right,
				i = this.bottom,
				a = Math.max(n, 0),
				s = Math.max(r, 0),
				u = o - a,
				c = i - s;
			return new Jf({
				x: a,
				y: s,
				width: Math.min(u, t - a),
				height: Math.min(c, e - s),
			}).floor();
		}),
		(Jf.prototype.shift = function (t, e) {
			var n = this.width,
				r = this.height;
			return new Jf({ x: this.x + t, y: this.y + e, width: n, height: r });
		}),
		(Jf.prototype.padAtBorders = function (t, e) {
			var n = this.width + 1,
				r = this.height + 1,
				o = n,
				i = r,
				a = this.left,
				s = this.top,
				u = this.right,
				c = this.bottom;
			return (
				e < u && ((o = -u + e + n), (u = e)),
				t < c && ((i = -c + t + r), (c = t)),
				a < 1 && ((i = 2 - a), (a = 1)),
				s < 1 && ((i = 2 - s), (s = 1)),
				{ dy: 1, edy: i, dx: 1, edx: o, y: s, ey: c, x: a, ex: u, w: n, h: r }
			);
		}),
		(Jf.prototype.calibrate = function (t) {
			return new Jf({
				left: this.left + t.left * this.width,
				top: this.top + t.top * this.height,
				right: this.right + t.right * this.width,
				bottom: this.bottom + t.bottom * this.height,
			})
				.toSquare()
				.round();
		}),
		Jf);
	function Jf(t, e) {
		void 0 === e && (e = !0);
		var n = t || {},
			r = [n.left, n.top, n.right, n.bottom].every(qf),
			o = [n.x, n.y, n.width, n.height].every(qf);
		if (!o && !r)
			throw new Error(
				'Box.constructor - expected box to be IBoundingBox | IRect, instead have ' +
					JSON.stringify(n)
			);
		var i = o
				? [n.x, n.y, n.width, n.height]
				: [n.left, n.top, n.right - n.left, n.bottom - n.top],
			a = i[0],
			s = i[1],
			u = i[2],
			c = i[3];
		Jf.assertIsValidBox(
			{ x: a, y: s, width: u, height: c },
			'Box.constructor',
			e
		),
			(this._x = a),
			(this._y = s),
			(this._width = u),
			(this._height = c);
	}
	var Qf,
		Zf = (kf(td, (Qf = $f)), td);
	function td(t, e, n, r, o) {
		return (
			void 0 === o && (o = !1),
			Qf.call(this, { left: t, top: e, right: n, bottom: r }, o) || this
		);
	}
	var ed =
		(Object.defineProperty(nd.prototype, 'score', {
			get: function () {
				return this._score;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'classScore', {
			get: function () {
				return this._classScore;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'className', {
			get: function () {
				return this._className;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'box', {
			get: function () {
				return this._box;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'imageDims', {
			get: function () {
				return this._imageDims;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'imageWidth', {
			get: function () {
				return this.imageDims.width;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'imageHeight', {
			get: function () {
				return this.imageDims.height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(nd.prototype, 'relativeBox', {
			get: function () {
				return new $f(this._box).rescale(this.imageDims.reverse());
			},
			enumerable: !0,
			configurable: !0,
		}),
		(nd.prototype.forSize = function (t, e) {
			return new nd(
				this.score,
				this.classScore,
				this.className,
				this.relativeBox,
				{ width: t, height: e }
			);
		}),
		nd);
	function nd(t, e, n, r, o) {
		(this._imageDims = new Nf(o.width, o.height)),
			(this._score = t),
			(this._classScore = e),
			(this._className = n),
			(this._box = new $f(r).rescale(this._imageDims));
	}
	var rd,
		od =
			(kf(id, (rd = ed)),
			(id.prototype.forSize = function (t, e) {
				var n = rd.prototype.forSize.call(this, t, e);
				return new id(n.score, n.relativeBox, n.imageDims);
			}),
			id);
	function id(t, e, n) {
		return rd.call(this, t, t, '', e, n) || this;
	}
	function ad(t, e, n) {
		void 0 === n && (n = !0);
		var r =
			Math.max(0, Math.min(t.right, e.right) - Math.max(t.left, e.left)) *
			Math.max(0, Math.min(t.bottom, e.bottom) - Math.max(t.top, e.top));
		return n ? r / (t.area + e.area - r) : r / Math.min(t.area, e.area);
	}
	function sd(t) {
		var e = t.map(function (t) {
				return t.x;
			}),
			n = t.map(function (t) {
				return t.y;
			}),
			r = e.reduce(function (t, e) {
				return e < t ? e : t;
			}, 1 / 0),
			o = n.reduce(function (t, e) {
				return e < t ? e : t;
			}, 1 / 0),
			i = e.reduce(function (t, e) {
				return t < e ? e : t;
			}, 0),
			a = n.reduce(function (t, e) {
				return t < e ? e : t;
			}, 0);
		return new Zf(r, o, i, a);
	}
	function ud(s, t, u, c) {
		void 0 === c && (c = !0);
		for (
			var l = t
					.map(function (t, e) {
						return { score: t, boxIndex: e };
					})
					.sort(function (t, e) {
						return t.score - e.score;
					})
					.map(function (t) {
						return t.boxIndex;
					}),
				h = [],
				e = function () {
					var t = l.pop();
					h.push(t);
					for (var e = l, n = [], r = 0; r < e.length; r++) {
						var o = e[r],
							i = s[t],
							a = s[o];
						n.push(ad(i, a, c));
					}
					l = l.filter(function (t, e) {
						return n[e] <= u;
					});
				};
			0 < l.length;

		)
			e();
		return h;
	}
	function cd(s, u) {
		return tn(function () {
			var t = u[0],
				e = u[1],
				n = u[2],
				r = On(Tf(s.shape.slice(0, 3), [1]), t),
				o = On(Tf(s.shape.slice(0, 3), [1]), e),
				i = On(Tf(s.shape.slice(0, 3), [1]), n),
				a = zn([r, o, i], 3);
			return Ju(s, a);
		});
	}
	function ld(l, h) {
		return (
			void 0 === h && (h = !1),
			tn(function () {
				var t = l.shape.slice(1),
					e = t[0],
					n = t[1];
				if (e === n) return l;
				function r(t) {
					var e = l.shape.slice();
					return (e[a] = t), On(e, 0);
				}
				var o = Math.abs(e - n),
					i = Math.round(o * (h ? 0.5 : 1)),
					a = n < e ? 2 : 1,
					s = r(i),
					u = o - s.shape[a],
					c = [h && u ? r(u) : null, l, s]
						.filter(function (t) {
							return !!t;
						})
						.map(function (t) {
							return t.toFloat();
						});
				return zn(c, a);
			})
		);
	}
	function hd(t) {
		return 1 / (1 + Math.exp(-t));
	}
	var pd,
		fd = (kf(dd, (pd = $f)), dd);
	function dd(t, e, n, r, o) {
		return (
			void 0 === o && (o = !1),
			pd.call(this, { x: t, y: e, width: n, height: r }, o) || this
		);
	}
	var vd =
		(Object.defineProperty(md.prototype, 'shift', {
			get: function () {
				return new Xf(this._shift.x, this._shift.y);
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(md.prototype, 'imageWidth', {
			get: function () {
				return this._imgDims.width;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(md.prototype, 'imageHeight', {
			get: function () {
				return this._imgDims.height;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(md.prototype, 'positions', {
			get: function () {
				return this._positions;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(md.prototype, 'relativePositions', {
			get: function () {
				var e = this;
				return this._positions.map(function (t) {
					return t.sub(e._shift).div(new Xf(e.imageWidth, e.imageHeight));
				});
			},
			enumerable: !0,
			configurable: !0,
		}),
		(md.prototype.forSize = function (t, e) {
			return new this.constructor(this.relativePositions, {
				width: t,
				height: e,
			});
		}),
		(md.prototype.shiftBy = function (t, e) {
			return new this.constructor(
				this.relativePositions,
				this._imgDims,
				new Xf(t, e)
			);
		}),
		(md.prototype.shiftByPoint = function (t) {
			return this.shiftBy(t.x, t.y);
		}),
		(md.prototype.align = function (t, e) {
			if ((void 0 === e && (e = {}), t)) {
				var n = t instanceof od ? t.box.floor() : new $f(t);
				return this.shiftBy(n.x, n.y).align(null, e);
			}
			var r = Object.assign(
					{},
					{ useDlibAlignment: !1, minBoxPadding: 0.2 },
					e
				),
				o = r.useDlibAlignment,
				i = r.minBoxPadding;
			return o ? this.alignDlib() : this.alignMinBbox(i);
		}),
		(md.prototype.alignDlib = function () {
			function t(t) {
				return o.sub(t).magnitude();
			}
			var e = this.getRefPointsForAlignment(),
				n = e[0],
				r = e[1],
				o = e[2],
				i = (t(n) + t(r)) / 2,
				a = Math.floor(i / 0.45),
				s = Gf(e),
				u = Math.floor(Math.max(0, s.x - 0.5 * a)),
				c = Math.floor(Math.max(0, s.y - 0.43 * a));
			return new fd(
				u,
				c,
				Math.min(a, this.imageWidth + u),
				Math.min(a, this.imageHeight + c)
			);
		}),
		(md.prototype.alignMinBbox = function (t) {
			var e = sd(this.positions);
			return e.pad(e.width * t, e.height * t);
		}),
		(md.prototype.getRefPointsForAlignment = function () {
			throw new Error('getRefPointsForAlignment not implemented by base class');
		}),
		md);
	function md(t, e, n) {
		void 0 === n && (n = new Xf(0, 0));
		var r = e.width,
			o = e.height;
		(this._imgDims = new Nf(r, o)),
			(this._shift = n),
			(this._positions = t.map(function (t) {
				return t.mul(new Xf(r, o)).add(n);
			}));
	}
	var gd,
		yd =
			(kf(xd, (gd = vd)),
			(xd.prototype.getRefPointsForAlignment = function () {
				var t = this.positions;
				return [t[0], t[1], Gf([t[3], t[4]])];
			}),
			xd);
	function xd() {
		return (null !== gd && gd.apply(this, arguments)) || this;
	}
	var bd,
		wd =
			(kf(Cd, (bd = vd)),
			(Cd.prototype.getJawOutline = function () {
				return this.positions.slice(0, 17);
			}),
			(Cd.prototype.getLeftEyeBrow = function () {
				return this.positions.slice(17, 22);
			}),
			(Cd.prototype.getRightEyeBrow = function () {
				return this.positions.slice(22, 27);
			}),
			(Cd.prototype.getNose = function () {
				return this.positions.slice(27, 36);
			}),
			(Cd.prototype.getLeftEye = function () {
				return this.positions.slice(36, 42);
			}),
			(Cd.prototype.getRightEye = function () {
				return this.positions.slice(42, 48);
			}),
			(Cd.prototype.getMouth = function () {
				return this.positions.slice(48, 68);
			}),
			(Cd.prototype.getRefPointsForAlignment = function () {
				return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(Gf);
			}),
			Cd);
	function Cd() {
		return (null !== bd && bd.apply(this, arguments)) || this;
	}
	var Ed =
		(Object.defineProperty(_d.prototype, 'label', {
			get: function () {
				return this._label;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(_d.prototype, 'distance', {
			get: function () {
				return this._distance;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(_d.prototype.toString = function (t) {
			return (
				void 0 === t && (t = !0),
				this.label + (t ? ' (' + zf(this.distance) + ')' : '')
			);
		}),
		_d);
	function _d(t, e) {
		(this._label = t), (this._distance = e);
	}
	var Id,
		Rd =
			(kf(kd, (Id = $f)),
			(kd.assertIsValidLabeledBox = function (t, e) {
				if (($f.assertIsValidBox(t, e), !qf(t.label)))
					throw new Error(
						e + ' - expected property label (' + t.label + ') to be a number'
					);
			}),
			Object.defineProperty(kd.prototype, 'label', {
				get: function () {
					return this._label;
				},
				enumerable: !0,
				configurable: !0,
			}),
			kd);
	function kd(t, e) {
		var n = Id.call(this, t) || this;
		return (n._label = e), n;
	}
	var Sd =
		(Object.defineProperty(Dd.prototype, 'label', {
			get: function () {
				return this._label;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Dd.prototype, 'descriptors', {
			get: function () {
				return this._descriptors;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(Dd.prototype.toJSON = function () {
			return {
				label: this.label,
				descriptors: this.descriptors.map(function (t) {
					return Array.from(t);
				}),
			};
		}),
		(Dd.fromJSON = function (t) {
			var e = t.descriptors.map(function (t) {
				return new Float32Array(t);
			});
			return new Dd(t.label, e);
		}),
		Dd);
	function Dd(t, e) {
		if ('string' != typeof t)
			throw new Error(
				'LabeledFaceDescriptors - constructor expected label to be a string'
			);
		if (
			!Array.isArray(e) ||
			e.some(function (t) {
				return !(t instanceof Float32Array);
			})
		)
			throw new Error(
				'LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array'
			);
		(this._label = t), (this._descriptors = e);
	}
	var Ad,
		Td,
		Nd =
			(kf(Fd, (Ad = Rd)),
			(Fd.assertIsValidPredictedBox = function (t, e) {
				if (
					(Rd.assertIsValidLabeledBox(t, e), !jf(t.score) || !jf(t.classScore))
				)
					throw new Error(
						e +
							' - expected properties score (' +
							t.score +
							') and (' +
							t.classScore +
							') to be a number between [0, 1]'
					);
			}),
			Object.defineProperty(Fd.prototype, 'score', {
				get: function () {
					return this._score;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Object.defineProperty(Fd.prototype, 'classScore', {
				get: function () {
					return this._classScore;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Fd);
	function Fd(t, e, n, r) {
		var o = Ad.call(this, t, e) || this;
		return (o._score = n), (o._classScore = r), o;
	}
	function Md(t) {
		return t.detection instanceof od;
	}
	function Od(t, e) {
		var n = { detection: e };
		return Object.assign({}, t, n);
	}
	function Pd() {
		var t =
			window.fetch ||
			function () {
				throw new Error(
					'fetch - missing fetch implementation for browser environment'
				);
			};
		return {
			Canvas: HTMLCanvasElement,
			CanvasRenderingContext2D: CanvasRenderingContext2D,
			Image: HTMLImageElement,
			ImageData: ImageData,
			Video: HTMLVideoElement,
			createCanvasElement: function () {
				return document.createElement('canvas');
			},
			createImageElement: function () {
				return document.createElement('img');
			},
			fetch: t,
			readFile: function () {
				throw new Error(
					'readFile - filesystem not available for browser environment'
				);
			},
		};
	}
	function Bd(e) {
		var n = '';
		if (!e)
			try {
				e = require('fs');
			} catch (t) {
				n = t.toString();
			}
		return {
			readFile: e
				? function (t) {
						return new Promise(function (n, r) {
							e.readFile(t, function (t, e) {
								return t ? r(t) : n(e);
							});
						});
				  }
				: function () {
						throw new Error(
							'readFile - failed to require fs in nodejs environment with error: ' +
								n
						);
				  },
		};
	}
	function Ld() {
		var t = global.Canvas || global.HTMLCanvasElement,
			e = global.Image || global.HTMLImageElement,
			n =
				global.fetch ||
				function () {
					throw new Error(
						'fetch - missing fetch implementation for nodejs environment'
					);
				},
			r = Bd();
		return Sf(
			{
				Canvas: t || function () {},
				CanvasRenderingContext2D:
					global.CanvasRenderingContext2D || function () {},
				Image: e || function () {},
				ImageData: global.ImageData || function () {},
				Video: global.HTMLVideoElement || function () {},
				createCanvasElement: function () {
					if (t) return new t();
					throw new Error(
						'createCanvasElement - missing Canvas implementation for nodejs environment'
					);
				},
				createImageElement: function () {
					if (e) return new e();
					throw new Error(
						'createImageElement - missing Image implementation for nodejs environment'
					);
				},
				fetch: n,
			},
			r
		);
	}
	function Wd() {
		return (
			'object' == typeof window &&
			'undefined' != typeof document &&
			'undefined' != typeof HTMLImageElement &&
			'undefined' != typeof HTMLCanvasElement &&
			'undefined' != typeof HTMLVideoElement &&
			'undefined' != typeof ImageData &&
			'undefined' != typeof CanvasRenderingContext2D
		);
	}
	function zd() {
		return (
			'object' == typeof global &&
			'function' == typeof require &&
			'undefined' != typeof module &&
			'undefined' != typeof process &&
			!!process.version
		);
	}
	function Ud(t) {
		Td = t;
	}
	function Vd() {
		Wd() && Ud(Pd()), zd() && Ud(Ld());
	}
	var Gd,
		Hd,
		qd = {
			getEnv: function () {
				if (!Td)
					throw new Error(
						'getEnv - environment is not defined, check isNodejs() and isBrowser()'
					);
				return Td;
			},
			setEnv: Ud,
			initialize: Vd,
			createBrowserEnv: Pd,
			createFileSystem: Bd,
			createNodejsEnv: Ld,
			monkeyPatch: function (t) {
				if ((Td || Vd(), !Td))
					throw new Error(
						'monkeyPatch - environment is not defined, check isNodejs() and isBrowser()'
					);
				var e = t.Canvas,
					n = void 0 === e ? Td.Canvas : e,
					r = t.Image,
					o = void 0 === r ? Td.Image : r;
				(Td.Canvas = n),
					(Td.Image = o),
					(Td.createCanvasElement =
						t.createCanvasElement ||
						function () {
							return new n();
						}),
					(Td.createImageElement =
						t.createImageElement ||
						function () {
							return new o();
						}),
					(Td.ImageData = t.ImageData || Td.ImageData),
					(Td.Video = t.Video || Td.Video),
					(Td.fetch = t.fetch || Td.fetch),
					(Td.readFile = t.readFile || Td.readFile);
			},
			isBrowser: Wd,
			isNodejs: zd,
		};
	function jd(t) {
		return qd.isNodejs() || 'string' != typeof t
			? t
			: document.getElementById(t);
	}
	function Kd(t) {
		var e = qd.getEnv(),
			n = e.Canvas;
		if (t instanceof e.CanvasRenderingContext2D) return t;
		var r = jd(t);
		if (!(r instanceof n))
			throw new Error(
				'resolveContext2d - expected canvas to be of instance of Canvas'
			);
		var o = r.getContext('2d');
		if (!o) throw new Error('resolveContext2d - canvas 2d context is null');
		return o;
	}
	Vd(),
		((Hd = Gd = Gd || {}).TOP_LEFT = 'TOP_LEFT'),
		(Hd.TOP_RIGHT = 'TOP_RIGHT'),
		(Hd.BOTTOM_LEFT = 'BOTTOM_LEFT'),
		(Hd.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
	var Xd = function (t) {
			void 0 === t && (t = {});
			var e = t.anchorPosition,
				n = t.backgroundColor,
				r = t.fontColor,
				o = t.fontSize,
				i = t.fontStyle,
				a = t.padding;
			(this.anchorPosition = e || Gd.TOP_LEFT),
				(this.backgroundColor = n || 'rgba(0, 0, 0, 0.5)'),
				(this.fontColor = r || 'rgba(255, 255, 255, 1)'),
				(this.fontSize = o || 14),
				(this.fontStyle = i || 'Georgia'),
				(this.padding = a || 4);
		},
		Yd =
			(($d.prototype.measureWidth = function (e) {
				var t = this.options.padding;
				return (
					this.text
						.map(function (t) {
							return e.measureText(t).width;
						})
						.reduce(function (t, e) {
							return t < e ? e : t;
						}, 0) +
					2 * t
				);
			}),
			($d.prototype.measureHeight = function () {
				var t = this.options,
					e = t.fontSize,
					n = t.padding;
				return this.text.length * e + 2 * n;
			}),
			($d.prototype.getUpperLeft = function (t, e) {
				var n = this.options.anchorPosition,
					r = n === Gd.BOTTOM_RIGHT || n === Gd.TOP_RIGHT,
					o = n === Gd.BOTTOM_LEFT || n === Gd.BOTTOM_RIGHT,
					i = this.measureWidth(t),
					a = this.measureHeight(),
					s = r ? this.anchor.x - i : this.anchor.x,
					u = o ? this.anchor.y - a : this.anchor.y;
				if (e) {
					var c = e.width,
						l = e.height;
					return {
						x: Math.max(Math.min(s, c - i), 0),
						y: Math.max(Math.min(u, l - a), 0),
					};
				}
				return { x: s, y: u };
			}),
			($d.prototype.draw = function (t) {
				var e = jd(t),
					o = Kd(e),
					n = this.options,
					r = n.backgroundColor,
					i = n.fontColor,
					a = n.fontSize,
					s = n.fontStyle,
					u = n.padding;
				o.font = a + 'px ' + s;
				var c = this.measureWidth(o),
					l = this.measureHeight();
				o.fillStyle = r;
				var h = this.getUpperLeft(o, e);
				o.fillRect(h.x, h.y, c, l),
					(o.fillStyle = i),
					this.text.forEach(function (t, e) {
						var n = u + h.x,
							r = u + h.y + (e + 1) * a;
						o.fillText(t, n, r);
					});
			}),
			$d);
	function $d(t, e, n) {
		void 0 === n && (n = {}),
			(this.text = 'string' == typeof t ? [t] : t instanceof $d ? t.text : t),
			(this.anchor = e),
			(this.options = new Xd(n));
	}
	var Jd = function (t) {
			void 0 === t && (t = {});
			var e = t.boxColor,
				n = t.lineWidth,
				r = t.label,
				o = t.drawLabelOptions;
			(this.boxColor = e || 'rgba(0, 0, 255, 1)'),
				(this.lineWidth = n || 2),
				(this.label = r);
			var i = {
				anchorPosition: Gd.BOTTOM_LEFT,
				backgroundColor: this.boxColor,
			};
			this.drawLabelOptions = new Xd(Object.assign({}, i, o));
		},
		Qd =
			((Zd.prototype.draw = function (t) {
				var e = Kd(t),
					n = this.options,
					r = n.boxColor,
					o = n.lineWidth,
					i = this.box,
					a = i.x,
					s = i.y,
					u = i.width,
					c = i.height;
				(e.strokeStyle = r), (e.lineWidth = o), e.strokeRect(a, s, u, c);
				var l = this.options.label;
				l &&
					new Yd(
						[l],
						{ x: a - o / 2, y: s },
						this.options.drawLabelOptions
					).draw(t);
			}),
			Zd);
	function Zd(t, e) {
		void 0 === e && (e = {}),
			(this.box = new $f(t)),
			(this.options = new Jd(e));
	}
	function tv(t) {
		var e = qd.getEnv(),
			n = e.Image,
			r = e.Video;
		return (
			(t instanceof n && t.complete) || (t instanceof r && 3 <= t.readyState)
		);
	}
	function ev(t) {
		return new Promise(function (e, n) {
			if (t instanceof qd.getEnv().Canvas || tv(t)) return e();
			function r(t) {
				t.currentTarget &&
					(t.currentTarget.removeEventListener('load', r),
					t.currentTarget.removeEventListener('error', o),
					e(t));
			}
			function o(t) {
				t.currentTarget &&
					(t.currentTarget.removeEventListener('load', r),
					t.currentTarget.removeEventListener('error', o),
					n(t));
			}
			t.addEventListener('load', r), t.addEventListener('error', o);
		});
	}
	function nv(t) {
		return new Promise(function (e, n) {
			if (!(t instanceof Blob))
				return n('bufferToImage - expected buf to be of type: Blob');
			var r = new FileReader();
			(r.onload = function () {
				if ('string' != typeof r.result)
					return n(
						'bufferToImage - expected reader.result to be a string, in onload'
					);
				var t = qd.getEnv().createImageElement();
				(t.onload = function () {
					return e(t);
				}),
					(t.onerror = n),
					(t.src = r.result);
			}),
				(r.onerror = n),
				r.readAsDataURL(t);
		});
	}
	function rv(t) {
		var e = qd.getEnv(),
			n = e.Image,
			r = e.Video;
		return t instanceof n
			? new Nf(t.naturalWidth, t.naturalHeight)
			: t instanceof r
			? new Nf(t.videoWidth, t.videoHeight)
			: new Nf(t.width, t.height);
	}
	function ov(t) {
		var e = t.width,
			n = t.height,
			r = (0, qd.getEnv().createCanvasElement)();
		return (r.width = e), (r.height = n), r;
	}
	function iv(t, e) {
		var n = qd.getEnv().ImageData;
		if (!(t instanceof n || tv(t)))
			throw new Error(
				'createCanvasFromMedia - media has not finished loading yet'
			);
		var r = e || rv(t),
			o = r.width,
			i = r.height,
			a = ov({ width: o, height: i });
		return (
			t instanceof n
				? Kd(a).putImageData(t, 0, 0)
				: Kd(a).drawImage(t, 0, 0, o, i),
			a
		);
	}
	function av(s, u) {
		return Df(this, void 0, void 0, function () {
			var e, n, r, o, i, a;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							(e = u || qd.getEnv().createCanvasElement()),
							(n = s.shape.slice(Bf(s) ? 1 : 0)),
							(r = n[0]),
							(o = n[1]),
							(i = n[2]),
							(a = tn(function () {
								return s.as3D(r, o, i).toInt();
							})),
							[4, Bp.toPixels(a, e)]
						);
					case 1:
						return t.sent(), a.dispose(), [2, e];
				}
			});
		});
	}
	function sv(t) {
		var e = qd.getEnv(),
			n = e.Image,
			r = e.Canvas,
			o = e.Video;
		return t instanceof n || t instanceof r || t instanceof o;
	}
	function uv(t, e, n) {
		void 0 === n && (n = !1);
		var r = qd.getEnv(),
			o = r.Image,
			i = r.Canvas;
		if (!(t instanceof o || t instanceof i))
			throw new Error(
				'imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement'
			);
		var a = rv(t),
			s = e / Math.max(a.height, a.width),
			u = s * a.width,
			c = s * a.height,
			l = ov({ width: e, height: e }),
			h = t instanceof i ? t : iv(t),
			p = Math.abs(u - c) / 2,
			f = n && u < c ? p : 0,
			d = n && c < u ? p : 0;
		return Kd(l).drawImage(h, f, d, u, c), l;
	}
	var cv =
		(Object.defineProperty(lv.prototype, 'imageTensors', {
			get: function () {
				return this._imageTensors;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'canvases', {
			get: function () {
				return this._canvases;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'isBatchInput', {
			get: function () {
				return 1 < this.batchSize || this._treatAsBatchInput;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'batchSize', {
			get: function () {
				return this._batchSize;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'inputDimensions', {
			get: function () {
				return this._inputDimensions;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'inputSize', {
			get: function () {
				return this._inputSize;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(lv.prototype, 'reshapedInputDimensions', {
			get: function () {
				var n = this;
				return Hf(this.batchSize, 0, 1).map(function (t, e) {
					return n.getReshapedInputDimensions(e);
				});
			},
			enumerable: !0,
			configurable: !0,
		}),
		(lv.prototype.getInput = function (t) {
			return this.canvases[t] || this.imageTensors[t];
		}),
		(lv.prototype.getInputDimensions = function (t) {
			return this._inputDimensions[t];
		}),
		(lv.prototype.getInputHeight = function (t) {
			return this._inputDimensions[t][0];
		}),
		(lv.prototype.getInputWidth = function (t) {
			return this._inputDimensions[t][1];
		}),
		(lv.prototype.getReshapedInputDimensions = function (t) {
			if ('number' != typeof this.inputSize)
				throw new Error(
					'getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet'
				);
			return Vf(
				{ width: this.getInputWidth(t), height: this.getInputHeight(t) },
				this.inputSize
			);
		}),
		(lv.prototype.toBatchTensor = function (r, o) {
			var i = this;
			return (
				void 0 === o && (o = !0),
				(this._inputSize = r),
				tn(function () {
					var t = Hf(i.batchSize, 0, 1).map(function (t) {
						var e = i.getInput(t);
						if (e instanceof yt) {
							var n = Bf(e) ? e : e.expandDims();
							return (
								((n = ld(n, o)).shape[1] === r && n.shape[2] === r) ||
									(n = ph.resizeBilinear(n, [r, r])),
								n.as3D(r, r, 3)
							);
						}
						if (e instanceof qd.getEnv().Canvas)
							return Bp.fromPixels(uv(e, r, o));
						throw new Error(
							'toBatchTensor - at batchIdx ' +
								t +
								', expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have ' +
								e
						);
					});
					return Nr(
						t.map(function (t) {
							return t.toFloat();
						})
					).as4D(i.batchSize, r, r, 3);
				})
			);
		}),
		lv);
	function lv(t, e) {
		var o = this;
		if (
			(void 0 === e && (e = !1),
			(this._imageTensors = []),
			(this._canvases = []),
			(this._treatAsBatchInput = !1),
			(this._inputDimensions = []),
			!Array.isArray(t))
		)
			throw new Error(
				'NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have ' +
					t
			);
		(this._treatAsBatchInput = e),
			(this._batchSize = t.length),
			t.forEach(function (t, e) {
				if (Pf(t))
					return (
						(o._imageTensors[e] = t), void (o._inputDimensions[e] = t.shape)
					);
				if (Bf(t)) {
					var n = t.shape[0];
					if (1 !== n)
						throw new Error(
							'NetInput - tf.Tensor4D with batchSize ' +
								n +
								' passed, but not supported in input array'
						);
					return (
						(o._imageTensors[e] = t),
						void (o._inputDimensions[e] = t.shape.slice(1))
					);
				}
				var r = t instanceof qd.getEnv().Canvas ? t : iv(t);
				(o._canvases[e] = r), (o._inputDimensions[e] = [r.height, r.width, 3]);
			});
	}
	function hv(n) {
		return Df(this, void 0, void 0, function () {
			var r, o, e;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						if (n instanceof cv) return [2, n];
						if (!(r = Array.isArray(n) ? n : [n]).length)
							throw new Error('toNetInput - empty array passed as input');
						return (
							(o = function (t) {
								return Array.isArray(n) ? ' at input index ' + t + ':' : '';
							}),
							(e = r.map(jd)).forEach(function (t, e) {
								if (!sv(t) && !Pf(t) && !Bf(t)) {
									if ('string' == typeof r[e])
										throw new Error(
											'toNetInput -' +
												o(e) +
												' string passed, but could not resolve HTMLElement for element id ' +
												r[e]
										);
									throw new Error(
										'toNetInput -' +
											o(e) +
											' expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id'
									);
								}
								if (Bf(t)) {
									var n = t.shape[0];
									if (1 !== n)
										throw new Error(
											'toNetInput -' +
												o(e) +
												' tf.Tensor4D with batchSize ' +
												n +
												' passed, but not supported in input array'
										);
								}
							}),
							[
								4,
								Promise.all(
									e.map(function (t) {
										return sv(t) && ev(t);
									})
								),
							]
						);
					case 1:
						return t.sent(), [2, new cv(e, Array.isArray(n))];
				}
			});
		});
	}
	function pv(s, u) {
		return Df(this, void 0, void 0, function () {
			var e, n, r, o, i, a;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							(e = qd.getEnv().Canvas),
							(n = s) instanceof e ? [3, 5] : [4, hv(s)]
						);
					case 1:
						if (1 < (r = t.sent()).batchSize)
							throw new Error('extractFaces - batchSize > 1 not supported');
						return (o = r.getInput(0)) instanceof e
							? ((i = o), [3, 4])
							: [3, 2];
					case 2:
						return [4, av(o)];
					case 3:
						(i = t.sent()), (t.label = 4);
					case 4:
						(n = i), (t.label = 5);
					case 5:
						return (
							(a = Kd(n)),
							[
								2,
								u
									.map(function (t) {
										return t instanceof od
											? t.forSize(n.width, n.height).box.floor()
											: t;
									})
									.map(function (t) {
										return t.clipAtImageBorders(n.width, n.height);
									})
									.map(function (t) {
										var e = t.x,
											n = t.y,
											r = t.width,
											o = t.height,
											i = ov({ width: r, height: o });
										return (
											Kd(i).putImageData(a.getImageData(e, n, r, o), 0, 0), i
										);
									}),
							]
						);
				}
			});
		});
	}
	function fv(u, e) {
		return Df(this, void 0, void 0, function () {
			return Af(this, function (t) {
				if (!Pf(u) && !Bf(u))
					throw new Error(
						'extractFaceTensors - expected image tensor to be 3D or 4D'
					);
				if (Bf(u) && 1 < u.shape[0])
					throw new Error('extractFaceTensors - batchSize > 1 not supported');
				return [
					2,
					tn(function () {
						var t = u.shape.slice(Bf(u) ? 1 : 0),
							i = t[0],
							a = t[1],
							s = t[2];
						return e
							.map(function (t) {
								return t instanceof od ? t.forSize(a, i).box : t;
							})
							.map(function (t) {
								return t.clipAtImageBorders(a, i);
							})
							.map(function (t) {
								var e = t.x,
									n = t.y,
									r = t.width,
									o = t.height;
								return Xc(u.as3D(i, a, s), [n, e, 0], [o, r, s]);
							});
					}),
				];
			});
		});
	}
	function dv(n, r) {
		return Df(this, void 0, void 0, function () {
			var e;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return [4, (0, qd.getEnv().fetch)(n, r)];
					case 1:
						if (!((e = t.sent()).status < 400))
							throw new Error(
								'failed to fetch: (' +
									e.status +
									') ' +
									e.statusText +
									', from url: ' +
									e.url
							);
						return [2, e];
				}
			});
		});
	}
	function vv(e) {
		return Df(this, void 0, void 0, function () {
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return [4, dv(e)];
					case 1:
						return [2, t.sent().json()];
				}
			});
		});
	}
	function mv(t, e) {
		var n = e + '-weights_manifest.json';
		if (!t) return { modelBaseUri: '', manifestUri: n };
		if ('/' === t) return { modelBaseUri: '/', manifestUri: '/' + n };
		var r = t.startsWith('http://')
				? 'http://'
				: t.startsWith('https://')
				? 'https://'
				: '',
			o = (t = t.replace(r, '')).split('/').filter(function (t) {
				return t;
			}),
			i = t.endsWith('.json') ? o[o.length - 1] : n,
			a = r + (t.endsWith('.json') ? o.slice(0, o.length - 1) : o).join('/');
		return {
			modelBaseUri: (a = t.startsWith('/') ? '/' + a : a),
			manifestUri: '/' === a ? '/' + i : a + '/' + i,
		};
	}
	function gv(i, a) {
		return Df(this, void 0, void 0, function () {
			var e, n, r, o;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							(e = mv(i, a)),
							(n = e.manifestUri),
							(r = e.modelBaseUri),
							[4, vv(n)]
						);
					case 1:
						return (o = t.sent()), [2, Fp.loadWeights(o, r)];
				}
			});
		});
	}
	var yv =
		(Object.defineProperty(xv.prototype, 'params', {
			get: function () {
				return this._params;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(xv.prototype, 'paramMappings', {
			get: function () {
				return this._paramMappings;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(xv.prototype, 'isLoaded', {
			get: function () {
				return !!this.params;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(xv.prototype.getParamFromPath = function (t) {
			var e = this.traversePropertyPath(t);
			return e.obj[e.objProp];
		}),
		(xv.prototype.reassignParamFromPath = function (t, e) {
			var n = this.traversePropertyPath(t),
				r = n.obj,
				o = n.objProp;
			r[o].dispose(), (r[o] = e);
		}),
		(xv.prototype.getParamList = function () {
			var n = this;
			return this._paramMappings.map(function (t) {
				var e = t.paramPath;
				return { path: e, tensor: n.getParamFromPath(e) };
			});
		}),
		(xv.prototype.getTrainableParams = function () {
			return this.getParamList().filter(function (t) {
				return t.tensor instanceof Tt;
			});
		}),
		(xv.prototype.getFrozenParams = function () {
			return this.getParamList().filter(function (t) {
				return !(t.tensor instanceof Tt);
			});
		}),
		(xv.prototype.variable = function () {
			var r = this;
			this.getFrozenParams().forEach(function (t) {
				var e = t.path,
					n = t.tensor;
				r.reassignParamFromPath(e, n.variable());
			});
		}),
		(xv.prototype.freeze = function () {
			var o = this;
			this.getTrainableParams().forEach(function (t) {
				var e = t.path,
					n = t.tensor,
					r = En(n.dataSync());
				n.dispose(), o.reassignParamFromPath(e, r);
			});
		}),
		(xv.prototype.dispose = function (e) {
			void 0 === e && (e = !0),
				this.getParamList().forEach(function (t) {
					if (e && t.tensor.isDisposed)
						throw new Error(
							'param tensor has already been disposed for path ' + t.path
						);
					t.tensor.dispose();
				}),
				(this._params = void 0);
		}),
		(xv.prototype.serializeParams = function () {
			return new Float32Array(
				this.getParamList()
					.map(function (t) {
						var e = t.tensor;
						return Array.from(e.dataSync());
					})
					.reduce(function (t, e) {
						return t.concat(e);
					})
			);
		}),
		(xv.prototype.load = function (e) {
			return Df(this, void 0, void 0, function () {
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							return e instanceof Float32Array
								? (this.extractWeights(e), [2])
								: [4, this.loadFromUri(e)];
						case 1:
							return t.sent(), [2];
					}
				});
			});
		}),
		(xv.prototype.loadFromUri = function (n) {
			return Df(this, void 0, void 0, function () {
				var e;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							if (n && 'string' != typeof n)
								throw new Error(
									this._name + '.loadFromUri - expected model uri'
								);
							return [4, gv(n, this.getDefaultModelName())];
						case 1:
							return (e = t.sent()), this.loadFromWeightMap(e), [2];
					}
				});
			});
		}),
		(xv.prototype.loadFromDisk = function (h) {
			return Df(this, void 0, void 0, function () {
				var e, n, r, o, i, a, s, u, c, l;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							if (h && 'string' != typeof h)
								throw new Error(
									this._name + '.loadFromDisk - expected model file path'
								);
							return (
								(e = qd.getEnv().readFile),
								(n = mv(h, this.getDefaultModelName())),
								(r = n.manifestUri),
								(o = n.modelBaseUri),
								(i = function (t) {
									return Promise.all(
										t.map(function (t) {
											return e(t).then(function (t) {
												return t.buffer;
											});
										})
									);
								}),
								(a = Fp.weightsLoaderFactory(i)),
								(c = (u = JSON).parse),
								[4, e(r)]
							);
						case 1:
							return (s = c.apply(u, [t.sent().toString()])), [4, a(s, o)];
						case 2:
							return (l = t.sent()), this.loadFromWeightMap(l), [2];
					}
				});
			});
		}),
		(xv.prototype.loadFromWeightMap = function (t) {
			var e = this.extractParamsFromWeigthMap(t),
				n = e.paramMappings,
				r = e.params;
			(this._paramMappings = n), (this._params = r);
		}),
		(xv.prototype.extractWeights = function (t) {
			var e = this.extractParams(t),
				n = e.paramMappings,
				r = e.params;
			(this._paramMappings = n), (this._params = r);
		}),
		(xv.prototype.traversePropertyPath = function (n) {
			if (!this.params)
				throw new Error('traversePropertyPath - model has no loaded params');
			var t = n.split('/').reduce(
					function (t, e) {
						if (!t.nextObj.hasOwnProperty(e))
							throw new Error(
								'traversePropertyPath - object does not have property ' +
									e +
									', for path ' +
									n
							);
						return { obj: t.nextObj, objProp: e, nextObj: t.nextObj[e] };
					},
					{ nextObj: this.params }
				),
				e = t.obj,
				r = t.objProp;
			if (!(e && r && e[r] instanceof yt))
				throw new Error(
					'traversePropertyPath - parameter is not a tensor, for path ' + n
				);
			return { obj: e, objProp: r };
		}),
		xv);
	function xv(t) {
		(this._name = t), (this._params = void 0), (this._paramMappings = []);
	}
	function bv(e, n, r) {
		return tn(function () {
			var t = kc(e, n.depthwise_filter, n.pointwise_filter, r, 'same');
			return (t = Tu(t, n.bias));
		});
	}
	function wv(r, o, i) {
		return (
			void 0 === i && (i = !1),
			tn(function () {
				var t = hl(
						i
							? Tu(bc(r, o.conv0.filters, [2, 2], 'same'), o.conv0.bias)
							: bv(r, o.conv0, [2, 2])
					),
					e = bv(t, o.conv1, [1, 1]),
					n = bv(hl(Tu(t, e)), o.conv2, [1, 1]);
				return hl(Tu(t, Tu(e, n)));
			})
		);
	}
	function Cv(o, i, a, s) {
		return (
			void 0 === a && (a = !1),
			void 0 === s && (s = !0),
			tn(function () {
				var t = hl(
						a
							? Tu(
									bc(o, i.conv0.filters, s ? [2, 2] : [1, 1], 'same'),
									i.conv0.bias
							  )
							: bv(o, i.conv0, s ? [2, 2] : [1, 1])
					),
					e = bv(t, i.conv1, [1, 1]),
					n = bv(hl(Tu(t, e)), i.conv2, [1, 1]),
					r = bv(hl(Tu(t, Tu(e, n))), i.conv3, [1, 1]);
				return hl(Tu(t, Tu(e, Tu(n, r))));
			})
		);
	}
	function Ev(e, n, r, o) {
		return (
			void 0 === r && (r = 'same'),
			void 0 === o && (o = !1),
			tn(function () {
				var t = Tu(bc(e, n.filters, [1, 1], r), n.bias);
				return o ? hl(t) : t;
			})
		);
	}
	function _v(t, n) {
		Object.keys(t).forEach(function (e) {
			n.some(function (t) {
				return t.originalPath === e;
			}) || t[e].dispose();
		});
	}
	function Iv(a, s) {
		return function (t, e, n, r) {
			var o = Dn(a(t * e * n * n), [n, n, t, e]),
				i = Rn(a(e));
			return (
				s.push({ paramPath: r + '/filters' }, { paramPath: r + '/bias' }),
				{ filters: o, bias: i }
			);
		};
	}
	function Rv(i, a) {
		return function (t, e, n) {
			var r = kn(i(t * e), [t, e]),
				o = Rn(i(e));
			return (
				a.push({ paramPath: n + '/weights' }, { paramPath: n + '/bias' }),
				{ weights: r, bias: o }
			);
		};
	}
	var kv = function (t, e, n) {
		(this.depthwise_filter = t), (this.pointwise_filter = e), (this.bias = n);
	};
	function Sv(a, s) {
		return function (t, e, n) {
			var r = Dn(a(9 * t), [3, 3, t, 1]),
				o = Dn(a(t * e), [1, 1, t, e]),
				i = Rn(a(e));
			return (
				s.push(
					{ paramPath: n + '/depthwise_filter' },
					{ paramPath: n + '/pointwise_filter' },
					{ paramPath: n + '/bias' }
				),
				new kv(r, o, i)
			);
		};
	}
	function Dv(o) {
		return function (t) {
			var e = o(t + '/depthwise_filter', 4),
				n = o(t + '/pointwise_filter', 4),
				r = o(t + '/bias', 1);
			return new kv(e, n, r);
		};
	}
	function Av(o, i) {
		return function (t, e, n) {
			var r = o[t];
			if (!Mf(r, e))
				throw new Error(
					'expected weightMap[' +
						t +
						'] to be a Tensor' +
						e +
						'D, instead have ' +
						r
				);
			return i.push({ originalPath: t, paramPath: n || t }), r;
		};
	}
	function Tv(t) {
		var n = t;
		return {
			extractWeights: function (t) {
				var e = n.slice(0, t);
				return (n = n.slice(t)), e;
			},
			getRemainingWeights: function () {
				return n;
			},
		};
	}
	function Nv(t, e) {
		var o = Iv(t, e),
			i = Sv(t, e);
		function a(t, e, n, r) {
			return (
				void 0 === r && (r = !1),
				{
					conv0: r ? o(t, e, 3, n + '/conv0') : i(t, e, n + '/conv0'),
					conv1: i(e, e, n + '/conv1'),
					conv2: i(e, e, n + '/conv2'),
				}
			);
		}
		return {
			extractDenseBlock3Params: a,
			extractDenseBlock4Params: function (t, e, n, r) {
				void 0 === r && (r = !1);
				var o = a(t, e, n, r);
				return {
					conv0: o.conv0,
					conv1: o.conv1,
					conv2: o.conv2,
					conv3: i(e, e, n + '/conv3'),
				};
			},
		};
	}
	function Fv(e) {
		return function (t) {
			return { filters: e(t + '/filters', 4), bias: e(t + '/bias', 1) };
		};
	}
	function Mv(t, e) {
		var n = Av(t, e),
			r = Fv(n),
			o = Dv(n);
		return {
			extractDenseBlock3Params: function (t, e) {
				return (
					void 0 === e && (e = !1),
					{
						conv0: e ? r(t + '/conv0') : o(t + '/conv0'),
						conv1: o(t + '/conv1'),
						conv2: o(t + '/conv2'),
					}
				);
			},
			extractDenseBlock4Params: function (t, e) {
				return (
					void 0 === e && (e = !1),
					{
						conv0: e ? r(t + '/conv0') : o(t + '/conv0'),
						conv1: o(t + '/conv1'),
						conv2: o(t + '/conv2'),
						conv3: o(t + '/conv3'),
					}
				);
			},
		};
	}
	var Ov,
		Pv =
			(kf(Bv, (Ov = yv)),
			(Bv.prototype.forwardInput = function (e) {
				var n = this.params;
				if (!n)
					throw new Error('FaceFeatureExtractor - load model before inference');
				return tn(function () {
					var t = Cv(
						cd(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(
							In(255)
						),
						n.dense0,
						!0
					);
					return (
						(t = Cv((t = Cv((t = Cv(t, n.dense1)), n.dense2)), n.dense3)),
						(t = Uc(t, [7, 7], [2, 2], 'valid'))
					);
				});
			}),
			(Bv.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(Bv.prototype.getDefaultModelName = function () {
				return 'face_feature_extractor_model';
			}),
			(Bv.prototype.extractParamsFromWeigthMap = function (t) {
				return (function (t) {
					var e = [],
						n = Mv(t, e).extractDenseBlock4Params,
						r = {
							dense0: n('dense0', !0),
							dense1: n('dense1'),
							dense2: n('dense2'),
							dense3: n('dense3'),
						};
					return _v(t, e), { params: r, paramMappings: e };
				})(t);
			}),
			(Bv.prototype.extractParams = function (t) {
				return (function (t) {
					var e = [],
						n = Tv(t),
						r = n.extractWeights,
						o = n.getRemainingWeights,
						i = Nv(r, e).extractDenseBlock4Params,
						a = i(3, 32, 'dense0', !0),
						s = i(32, 64, 'dense1'),
						u = i(64, 128, 'dense2'),
						c = i(128, 256, 'dense3');
					if (0 !== o().length)
						throw new Error('weights remaing after extract: ' + o().length);
					return {
						paramMappings: e,
						params: { dense0: a, dense1: s, dense2: u, dense3: c },
					};
				})(t);
			}),
			Bv);
	function Bv() {
		return Ov.call(this, 'FaceFeatureExtractor') || this;
	}
	function Lv(t, e) {
		return tn(function () {
			return Tu(Ac(t, e.weights), e.bias);
		});
	}
	function Wv(e) {
		var n = {},
			r = {};
		return (
			Object.keys(e).forEach(function (t) {
				(t.startsWith('fc') ? r : n)[t] = e[t];
			}),
			{ featureExtractorMap: n, classifierMap: r }
		);
	}
	var zv,
		Uv =
			(kf(Vv, (zv = yv)),
			Object.defineProperty(Vv.prototype, 'faceFeatureExtractor', {
				get: function () {
					return this._faceFeatureExtractor;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Vv.prototype.runNet = function (e) {
				var n = this,
					r = this.params;
				if (!r) throw new Error(this._name + ' - load model before inference');
				return tn(function () {
					var t = e instanceof cv ? n.faceFeatureExtractor.forwardInput(e) : e;
					return Lv(t.as2D(t.shape[0], -1), r.fc);
				});
			}),
			(Vv.prototype.dispose = function (t) {
				void 0 === t && (t = !0),
					this.faceFeatureExtractor.dispose(t),
					zv.prototype.dispose.call(this, t);
			}),
			(Vv.prototype.loadClassifierParams = function (t) {
				var e = this.extractClassifierParams(t),
					n = e.params,
					r = e.paramMappings;
				(this._params = n), (this._paramMappings = r);
			}),
			(Vv.prototype.extractClassifierParams = function (t) {
				return (function (t, e, n) {
					var r = [],
						o = Tv(t),
						i = o.extractWeights,
						a = o.getRemainingWeights,
						s = Rv(i, r)(e, n, 'fc');
					if (0 !== a().length)
						throw new Error('weights remaing after extract: ' + a().length);
					return { paramMappings: r, params: { fc: s } };
				})(t, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
			}),
			(Vv.prototype.extractParamsFromWeigthMap = function (t) {
				var e = Wv(t),
					n = e.featureExtractorMap,
					r = e.classifierMap;
				return (
					this.faceFeatureExtractor.loadFromWeightMap(n),
					(function (t) {
						var e,
							n = [],
							r = Av(t, n),
							o = {
								fc:
									((e = 'fc'),
									{ weights: r(e + '/weights', 2), bias: r(e + '/bias', 1) }),
							};
						return _v(t, n), { params: o, paramMappings: n };
					})(r)
				);
			}),
			(Vv.prototype.extractParams = function (t) {
				var e = this.getClassifierChannelsIn(),
					n = this.getClassifierChannelsOut(),
					r = n * e + n,
					o = t.slice(0, t.length - r),
					i = t.slice(t.length - r);
				return (
					this.faceFeatureExtractor.extractWeights(o),
					this.extractClassifierParams(i)
				);
			}),
			Vv);
	function Vv(t, e) {
		var n = zv.call(this, t) || this;
		return (n._faceFeatureExtractor = e), n;
	}
	var Gv = [
			'neutral',
			'happy',
			'sad',
			'angry',
			'fearful',
			'disgusted',
			'surprised',
		],
		Hv =
			((qv.prototype.asSortedArray = function () {
				var e = this;
				return Gv.map(function (t) {
					return { expression: t, probability: e[t] };
				}).sort(function (t, e) {
					return e.probability - t.probability;
				});
			}),
			qv);
	function qv(n) {
		var r = this;
		if (7 !== n.length)
			throw new Error(
				'FaceExpressions.constructor - expected probabilities.length to be 7, have: ' +
					n.length
			);
		Gv.forEach(function (t, e) {
			r[t] = n[e];
		});
	}
	var jv,
		Kv =
			(kf(Xv, (jv = Uv)),
			(Xv.prototype.forwardInput = function (t) {
				var e = this;
				return tn(function () {
					return io(e.runNet(t));
				});
			}),
			(Xv.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(Xv.prototype.predictExpressions = function (a) {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o,
						i = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, hv(a)];
							case 1:
								return (e = t.sent()), [4, this.forwardInput(e)];
							case 2:
								return (
									(n = t.sent()),
									[
										4,
										Promise.all(
											Or(n).map(function (n) {
												return Df(i, void 0, void 0, function () {
													var e;
													return Af(this, function (t) {
														switch (t.label) {
															case 0:
																return [4, n.data()];
															case 1:
																return (e = t.sent()), n.dispose(), [2, e];
														}
													});
												});
											})
										),
									]
								);
							case 3:
								return (
									(r = t.sent()),
									n.dispose(),
									(o = r.map(function (t) {
										return new Hv(t);
									})),
									[2, e.isBatchInput ? o : o[0]]
								);
						}
					});
				});
			}),
			(Xv.prototype.getDefaultModelName = function () {
				return 'face_expression_model';
			}),
			(Xv.prototype.getClassifierChannelsIn = function () {
				return 256;
			}),
			(Xv.prototype.getClassifierChannelsOut = function () {
				return 7;
			}),
			Xv);
	function Xv(t) {
		return (
			void 0 === t && (t = new Pv()),
			jv.call(this, 'FaceExpressionNet', t) || this
		);
	}
	function Yv(t) {
		return t.expressions instanceof Hv;
	}
	function $v(t, e) {
		var n = { expressions: e };
		return Object.assign({}, t, n);
	}
	function Jv(t) {
		return (
			Md(t) &&
			t.landmarks instanceof vd &&
			t.unshiftedLandmarks instanceof vd &&
			t.alignedRect instanceof od
		);
	}
	function Qv(t, e) {
		var n = t.detection.box,
			r = e.shiftBy(n.x, n.y),
			o = r.align(),
			i = t.detection.imageDims,
			a = {
				landmarks: r,
				unshiftedLandmarks: e,
				alignedRect: new od(t.detection.score, o.rescale(i.reverse()), i),
			};
		return Object.assign({}, t, a);
	}
	var Zv = function (t) {
			void 0 === t && (t = {});
			var e = t.drawLines,
				n = void 0 === e || e,
				r = t.drawPoints,
				o = void 0 === r || r,
				i = t.lineWidth,
				a = t.lineColor,
				s = t.pointSize,
				u = t.pointColor;
			(this.drawLines = n),
				(this.drawPoints = o),
				(this.lineWidth = i || 1),
				(this.pointSize = s || 2),
				(this.lineColor = a || 'rgba(0, 255, 255, 1)'),
				(this.pointColor = u || 'rgba(255, 0, 255, 1)');
		},
		tm =
			((em.prototype.draw = function (t) {
				var e = Kd(t),
					n = this.options,
					r = n.drawLines,
					o = n.drawPoints,
					i = n.lineWidth,
					a = n.lineColor,
					s = n.pointSize,
					u = n.pointColor;
				r &&
					this.faceLandmarks instanceof wd &&
					((e.strokeStyle = a),
					(e.lineWidth = i),
					If(e, this.faceLandmarks.getJawOutline()),
					If(e, this.faceLandmarks.getLeftEyeBrow()),
					If(e, this.faceLandmarks.getRightEyeBrow()),
					If(e, this.faceLandmarks.getNose()),
					If(e, this.faceLandmarks.getLeftEye(), !0),
					If(e, this.faceLandmarks.getRightEye(), !0),
					If(e, this.faceLandmarks.getMouth(), !0)),
					o &&
						((e.strokeStyle = u),
						(e.fillStyle = u),
						this.faceLandmarks.positions.forEach(function (t) {
							e.beginPath(), e.arc(t.x, t.y, s, 0, 2 * Math.PI), e.fill();
						}));
			}),
			em);
	function em(t, e) {
		void 0 === e && (e = {}),
			(this.faceLandmarks = t),
			(this.options = new Zv(e));
	}
	var nm = Object.freeze({
		__proto__: null,
		drawContour: If,
		drawDetections: function (o, t) {
			(Array.isArray(t) ? t : [t]).forEach(function (t) {
				var e = t instanceof od ? t.score : Md(t) ? t.detection.score : void 0,
					n = t instanceof od ? t.box : Md(t) ? t.detection.box : new $f(t),
					r = e ? '' + zf(e) : void 0;
				new Qd(n, { label: r }).draw(o);
			});
		},
		drawFaceExpressions: function (o, t, i, a) {
			void 0 === i && (i = 0.1),
				(Array.isArray(t) ? t : [t]).forEach(function (t) {
					var e = t instanceof Hv ? t : Yv(t) ? t.expressions : void 0;
					if (!e)
						throw new Error(
							'drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof'
						);
					var n = e.asSortedArray().filter(function (t) {
							return t.probability > i;
						}),
						r = Md(t) ? t.detection.box.bottomLeft : a || new Xf(0, 0);
					new Yd(
						n.map(function (t) {
							return t.expression + ' (' + zf(t.probability) + ')';
						}),
						r
					).draw(o);
				});
		},
		DrawBoxOptions: Jd,
		DrawBox: Qd,
		DrawFaceLandmarksOptions: Zv,
		DrawFaceLandmarks: tm,
		drawFaceLandmarks: function (n, t) {
			(Array.isArray(t) ? t : [t]).forEach(function (t) {
				var e = t instanceof vd ? t : Jv(t) ? t.landmarks : void 0;
				if (!e)
					throw new Error(
						'drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof'
					);
				new tm(e).draw(n);
			});
		},
		get AnchorPosition() {
			return Gd;
		},
		DrawTextFieldOptions: Xd,
		DrawTextField: Yd,
	});
	function rm(t, e) {
		var n = [],
			r = Tv(t),
			o = r.extractWeights,
			i = r.getRemainingWeights,
			a = (function (t, e) {
				var r = Iv(t, e),
					o = Sv(t, e);
				return {
					extractConvParams: r,
					extractSeparableConvParams: o,
					extractReductionBlockParams: function (t, e, n) {
						return {
							separable_conv0: o(t, e, n + '/separable_conv0'),
							separable_conv1: o(e, e, n + '/separable_conv1'),
							expansion_conv: r(t, e, 1, n + '/expansion_conv'),
						};
					},
					extractMainBlockParams: function (t, e) {
						return {
							separable_conv0: o(t, t, e + '/separable_conv0'),
							separable_conv1: o(t, t, e + '/separable_conv1'),
							separable_conv2: o(t, t, e + '/separable_conv2'),
						};
					},
				};
			})(o, n),
			s = a.extractConvParams,
			u = a.extractSeparableConvParams,
			c = a.extractReductionBlockParams,
			l = a.extractMainBlockParams,
			h = {
				conv_in: s(3, 32, 3, 'entry_flow/conv_in'),
				reduction_block_0: c(32, 64, 'entry_flow/reduction_block_0'),
				reduction_block_1: c(64, 128, 'entry_flow/reduction_block_1'),
			},
			p = {};
		Hf(e, 0, 1).forEach(function (t) {
			p['main_block_' + t] = l(128, 'middle_flow/main_block_' + t);
		});
		var f = {
			reduction_block: c(128, 256, 'exit_flow/reduction_block'),
			separable_conv: u(256, 512, 'exit_flow/separable_conv'),
		};
		if (0 !== i().length)
			throw new Error('weights remaing after extract: ' + i().length);
		return {
			paramMappings: n,
			params: { entry_flow: h, middle_flow: p, exit_flow: f },
		};
	}
	function om(t, e) {
		var n = [],
			r = (function (t, e) {
				var n = Av(t, e),
					r = Fv(n),
					o = Dv(n);
				return {
					extractConvParams: r,
					extractSeparableConvParams: o,
					extractReductionBlockParams: function (t) {
						return {
							separable_conv0: o(t + '/separable_conv0'),
							separable_conv1: o(t + '/separable_conv1'),
							expansion_conv: r(t + '/expansion_conv'),
						};
					},
					extractMainBlockParams: function (t) {
						return {
							separable_conv0: o(t + '/separable_conv0'),
							separable_conv1: o(t + '/separable_conv1'),
							separable_conv2: o(t + '/separable_conv2'),
						};
					},
				};
			})(t, n),
			o = r.extractConvParams,
			i = r.extractSeparableConvParams,
			a = r.extractReductionBlockParams,
			s = r.extractMainBlockParams,
			u = {
				conv_in: o('entry_flow/conv_in'),
				reduction_block_0: a('entry_flow/reduction_block_0'),
				reduction_block_1: a('entry_flow/reduction_block_1'),
			},
			c = {};
		Hf(e, 0, 1).forEach(function (t) {
			c['main_block_' + t] = s('middle_flow/main_block_' + t);
		});
		var l = {
			reduction_block: a('exit_flow/reduction_block'),
			separable_conv: i('exit_flow/separable_conv'),
		};
		return (
			_v(t, n),
			{
				params: { entry_flow: u, middle_flow: c, exit_flow: l },
				paramMappings: n,
			}
		);
	}
	function im(t, e, n) {
		return Tu(bc(t, e.filters, n, 'same'), e.bias);
	}
	function am(t, e, n) {
		void 0 === n && (n = !0);
		var r = n ? hl(t) : t;
		return (
			(r = bv(r, e.separable_conv0, [1, 1])),
			(r = bv(hl(r), e.separable_conv1, [1, 1])),
			(r = zc(r, [3, 3], [2, 2], 'same')),
			(r = Tu(r, im(t, e.expansion_conv, [2, 2])))
		);
	}
	var sm,
		um,
		cm =
			(kf(lm, (sm = yv)),
			(lm.prototype.forwardInput = function (n) {
				var r = this,
					o = this.params;
				if (!o) throw new Error('TinyXception - load model before inference');
				return tn(function () {
					var t = cd(n.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(
							In(256)
						),
						e = hl(im(t, o.entry_flow.conv_in, [2, 2]));
					return (
						(e = am(
							(e = am(e, o.entry_flow.reduction_block_0, !1)),
							o.entry_flow.reduction_block_1
						)),
						Hf(r._numMainBlocks, 0, 1).forEach(function (t) {
							e = (function (t, e) {
								var n = bv(hl(t), e.separable_conv0, [1, 1]);
								return (
									(n = bv(hl(n), e.separable_conv1, [1, 1])),
									(n = bv(hl(n), e.separable_conv2, [1, 1])),
									(n = Tu(n, t))
								);
							})(e, o.middle_flow['main_block_' + t]);
						}),
						(e = am(e, o.exit_flow.reduction_block)),
						(e = hl(bv(e, o.exit_flow.separable_conv, [1, 1])))
					);
				});
			}),
			(lm.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(lm.prototype.getDefaultModelName = function () {
				return 'tiny_xception_model';
			}),
			(lm.prototype.extractParamsFromWeigthMap = function (t) {
				return om(t, this._numMainBlocks);
			}),
			(lm.prototype.extractParams = function (t) {
				return rm(t, this._numMainBlocks);
			}),
			lm);
	function lm(t) {
		var e = sm.call(this, 'TinyXception') || this;
		return (e._numMainBlocks = t), e;
	}
	((um = c.Gender || (c.Gender = {})).FEMALE = 'female'), (um.MALE = 'male');
	var hm,
		pm =
			(kf(fm, (hm = yv)),
			Object.defineProperty(fm.prototype, 'faceFeatureExtractor', {
				get: function () {
					return this._faceFeatureExtractor;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(fm.prototype.runNet = function (n) {
				var r = this,
					o = this.params;
				if (!o) throw new Error(this._name + ' - load model before inference');
				return tn(function () {
					var t = n instanceof cv ? r.faceFeatureExtractor.forwardInput(n) : n,
						e = Uc(t, [7, 7], [2, 2], 'valid').as2D(t.shape[0], -1);
					return { age: Lv(e, o.fc.age).as1D(), gender: Lv(e, o.fc.gender) };
				});
			}),
			(fm.prototype.forwardInput = function (r) {
				var o = this;
				return tn(function () {
					var t = o.runNet(r),
						e = t.age,
						n = t.gender;
					return { age: e, gender: io(n) };
				});
			}),
			(fm.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(fm.prototype.predictAgeAndGender = function (s) {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o,
						i,
						a,
						u = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, hv(s)];
							case 1:
								return (e = t.sent()), [4, this.forwardInput(e)];
							case 2:
								return (
									(n = t.sent()),
									(r = Or(n.age)),
									(o = Or(n.gender)),
									(i = r.map(function (t, e) {
										return { ageTensor: t, genderTensor: o[e] };
									})),
									[
										4,
										Promise.all(
											i.map(function (t) {
												var a = t.ageTensor,
													s = t.genderTensor;
												return Df(u, void 0, void 0, function () {
													var e, n, r, o, i;
													return Af(this, function (t) {
														switch (t.label) {
															case 0:
																return [4, a.data()];
															case 1:
																return (e = t.sent()[0]), [4, s.data()];
															case 2:
																return (
																	(n = t.sent()[0]),
																	(o = (r = 0.5 < n)
																		? c.Gender.MALE
																		: c.Gender.FEMALE),
																	(i = r ? n : 1 - n),
																	a.dispose(),
																	s.dispose(),
																	[
																		2,
																		{ age: e, gender: o, genderProbability: i },
																	]
																);
														}
													});
												});
											})
										),
									]
								);
							case 3:
								return (
									(a = t.sent()),
									n.age.dispose(),
									n.gender.dispose(),
									[2, e.isBatchInput ? a : a[0]]
								);
						}
					});
				});
			}),
			(fm.prototype.getDefaultModelName = function () {
				return 'age_gender_model';
			}),
			(fm.prototype.dispose = function (t) {
				void 0 === t && (t = !0),
					this.faceFeatureExtractor.dispose(t),
					hm.prototype.dispose.call(this, t);
			}),
			(fm.prototype.loadClassifierParams = function (t) {
				var e = this.extractClassifierParams(t),
					n = e.params,
					r = e.paramMappings;
				(this._params = n), (this._paramMappings = r);
			}),
			(fm.prototype.extractClassifierParams = function (t) {
				return (function (t) {
					var e = [],
						n = Tv(t),
						r = n.extractWeights,
						o = n.getRemainingWeights,
						i = Rv(r, e),
						a = i(512, 1, 'fc/age'),
						s = i(512, 2, 'fc/gender');
					if (0 !== o().length)
						throw new Error('weights remaing after extract: ' + o().length);
					return { paramMappings: e, params: { fc: { age: a, gender: s } } };
				})(t);
			}),
			(fm.prototype.extractParamsFromWeigthMap = function (t) {
				var e = Wv(t),
					n = e.featureExtractorMap,
					r = e.classifierMap;
				return (
					this.faceFeatureExtractor.loadFromWeightMap(n),
					(function (t) {
						var e = [],
							n = Av(t, e);
						function r(t) {
							return { weights: n(t + '/weights', 2), bias: n(t + '/bias', 1) };
						}
						var o = { fc: { age: r('fc/age'), gender: r('fc/gender') } };
						return _v(t, e), { params: o, paramMappings: e };
					})(r)
				);
			}),
			(fm.prototype.extractParams = function (t) {
				var e = t.slice(0, t.length - 1539),
					n = t.slice(t.length - 1539);
				return (
					this.faceFeatureExtractor.extractWeights(e),
					this.extractClassifierParams(n)
				);
			}),
			fm);
	function fm(t) {
		void 0 === t && (t = new cm(2));
		var e = hm.call(this, 'AgeGenderNet') || this;
		return (e._faceFeatureExtractor = t), e;
	}
	var dm,
		vm =
			(kf(mm, (dm = Uv)),
			(mm.prototype.postProcess = function (t, o, e) {
				var i = e.map(function (t) {
						var e = t.width,
							n = t.height,
							r = o / Math.max(n, e);
						return { width: e * r, height: n * r };
					}),
					a = i.length;
				return tn(function () {
					function n(t, e) {
						return Nr([On([68], t), On([68], e)], 1)
							.as2D(1, 136)
							.as1D();
					}
					function r(t, e) {
						var n = i[t],
							r = n.width,
							o = n.height;
						return e(r, o) ? Math.abs(r - o) / 2 : 0;
					}
					return t
						.mul(On([a, 136], o))
						.sub(
							Nr(
								Array.from(Array(a), function (t, e) {
									return n(
										(function (t) {
											return r(t, function (t, e) {
												return t < e;
											});
										})(e),
										(function (t) {
											return r(t, function (t, e) {
												return e < t;
											});
										})(e)
									);
								})
							)
						)
						.div(
							Nr(
								Array.from(Array(a), function (t, e) {
									return n(i[e].width, i[e].height);
								})
							)
						);
				});
			}),
			(mm.prototype.forwardInput = function (e) {
				var n = this;
				return tn(function () {
					var t = n.runNet(e);
					return n.postProcess(
						t,
						e.inputSize,
						e.inputDimensions.map(function (t) {
							return { height: t[0], width: t[1] };
						})
					);
				});
			}),
			(mm.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(mm.prototype.detectLandmarks = function (o) {
				return Df(this, void 0, void 0, function () {
					var u,
						e,
						n,
						r = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, hv(o)];
							case 1:
								return (
									(u = t.sent()),
									(e = tn(function () {
										return Or(r.forwardInput(u));
									})),
									[
										4,
										Promise.all(
											e.map(function (a, s) {
												return Df(r, void 0, void 0, function () {
													var e, n, r, o, i;
													return Af(this, function (t) {
														switch (t.label) {
															case 0:
																return (r = (n = Array).from), [4, a.data()];
															case 1:
																return (
																	(e = r.apply(n, [t.sent()])),
																	(o = e.filter(function (t, e) {
																		return Wf(e);
																	})),
																	(i = e.filter(function (t, e) {
																		return !Wf(e);
																	})),
																	[
																		2,
																		new wd(
																			Array(68)
																				.fill(0)
																				.map(function (t, e) {
																					return new Xf(o[e], i[e]);
																				}),
																			{
																				height: u.getInputHeight(s),
																				width: u.getInputWidth(s),
																			}
																		),
																	]
																);
														}
													});
												});
											})
										),
									]
								);
							case 2:
								return (
									(n = t.sent()),
									e.forEach(function (t) {
										return t.dispose();
									}),
									[2, u.isBatchInput ? n : n[0]]
								);
						}
					});
				});
			}),
			(mm.prototype.getClassifierChannelsOut = function () {
				return 136;
			}),
			mm);
	function mm() {
		return (null !== dm && dm.apply(this, arguments)) || this;
	}
	var gm,
		ym =
			(kf(xm, (gm = vm)),
			(xm.prototype.getDefaultModelName = function () {
				return 'face_landmark_68_model';
			}),
			(xm.prototype.getClassifierChannelsIn = function () {
				return 256;
			}),
			xm);
	function xm(t) {
		return (
			void 0 === t && (t = new Pv()),
			gm.call(this, 'FaceLandmark68Net', t) || this
		);
	}
	var bm,
		wm =
			(kf(Cm, (bm = yv)),
			(Cm.prototype.forwardInput = function (e) {
				var n = this.params;
				if (!n)
					throw new Error(
						'TinyFaceFeatureExtractor - load model before inference'
					);
				return tn(function () {
					var t = wv(
						cd(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(
							In(255)
						),
						n.dense0,
						!0
					);
					return (
						(t = wv((t = wv(t, n.dense1)), n.dense2)),
						(t = Uc(t, [14, 14], [2, 2], 'valid'))
					);
				});
			}),
			(Cm.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(Cm.prototype.getDefaultModelName = function () {
				return 'face_feature_extractor_tiny_model';
			}),
			(Cm.prototype.extractParamsFromWeigthMap = function (t) {
				return (function (t) {
					var e = [],
						n = Mv(t, e).extractDenseBlock3Params,
						r = {
							dense0: n('dense0', !0),
							dense1: n('dense1'),
							dense2: n('dense2'),
						};
					return _v(t, e), { params: r, paramMappings: e };
				})(t);
			}),
			(Cm.prototype.extractParams = function (t) {
				return (function (t) {
					var e = [],
						n = Tv(t),
						r = n.extractWeights,
						o = n.getRemainingWeights,
						i = Nv(r, e).extractDenseBlock3Params,
						a = i(3, 32, 'dense0', !0),
						s = i(32, 64, 'dense1'),
						u = i(64, 128, 'dense2');
					if (0 !== o().length)
						throw new Error('weights remaing after extract: ' + o().length);
					return {
						paramMappings: e,
						params: { dense0: a, dense1: s, dense2: u },
					};
				})(t);
			}),
			Cm);
	function Cm() {
		return bm.call(this, 'TinyFaceFeatureExtractor') || this;
	}
	var Em,
		_m =
			(kf(Im, (Em = vm)),
			(Im.prototype.getDefaultModelName = function () {
				return 'face_landmark_68_tiny_model';
			}),
			(Im.prototype.getClassifierChannelsIn = function () {
				return 128;
			}),
			Im);
	function Im(t) {
		return (
			void 0 === t && (t = new wm()),
			Em.call(this, 'FaceLandmark68TinyNet', t) || this
		);
	}
	var Rm,
		km = (kf(Sm, (Rm = ym)), Sm);
	function Sm() {
		return (null !== Rm && Rm.apply(this, arguments)) || this;
	}
	function Dm(t, e, n, r, o) {
		void 0 === o && (o = 'same');
		var i = e.conv,
			a = i.filters,
			s = i.bias,
			u = bc(t, a, n, o);
		return (
			(u = (function (t, e) {
				return Tu(qu(t, e.weights), e.biases);
			})((u = Tu(u, s)), e.scale)),
			r ? hl(u) : u
		);
	}
	function Am(t, e) {
		return Dm(t, e, [1, 1], !1);
	}
	function Tm(t, e) {
		return Dm(t, e, [2, 2], !0, 'valid');
	}
	function Nm(a, s) {
		function o(t, e, n, r) {
			var o = (function (t, e, n) {
					var r = a(t),
						o = r.length / (e * n * n);
					if (Lf(o))
						throw new Error(
							'depth has to be an integer: ' +
								o +
								', weights.length: ' +
								r.length +
								', numFilters: ' +
								e +
								', filterSize: ' +
								n
						);
					return tn(function () {
						return dl(Dn(r, [e, o, n, n]), [2, 3, 1, 0]);
					});
				})(t, e, n),
				i = Rn(a(e));
			return (
				s.push({ paramPath: r + '/filters' }, { paramPath: r + '/bias' }),
				{ filters: o, bias: i }
			);
		}
		function i(t, e, n, r) {
			return {
				conv: o(t, e, n, r + '/conv'),
				scale: (function (t, e) {
					var n = Rn(a(t)),
						r = Rn(a(t));
					return (
						s.push({ paramPath: e + '/weights' }, { paramPath: e + '/biases' }),
						{ weights: n, biases: r }
					);
				})(e, r + '/scale'),
			};
		}
		return {
			extractConvLayerParams: i,
			extractResidualLayerParams: function (t, e, n, r, o) {
				return (
					void 0 === o && (o = !1),
					{
						conv1: i((o ? 0.5 : 1) * t, e, n, r + '/conv1'),
						conv2: i(t, e, n, r + '/conv2'),
					}
				);
			},
		};
	}
	function Fm(t, e) {
		var n = Av(t, e);
		function r(t) {
			return {
				conv: {
					filters: n(t + '/conv/filters', 4),
					bias: n(t + '/conv/bias', 1),
				},
				scale: (function (t) {
					return {
						weights: n(t + '/scale/weights', 1),
						biases: n(t + '/scale/biases', 1),
					};
				})(t),
			};
		}
		return {
			extractConvLayerParams: r,
			extractResidualLayerParams: function (t) {
				return { conv1: r(t + '/conv1'), conv2: r(t + '/conv2') };
			},
		};
	}
	function Mm(t, e) {
		var n = (function (t, e) {
			return Dm(t, e, [1, 1], !0);
		})(t, e.conv1);
		return (n = Am(n, e.conv2)), (n = Tu(n, t)), (n = hl(n));
	}
	function Om(t, e) {
		var n = Tm(t, e.conv1);
		n = Am(n, e.conv2);
		var r = Uc(t, 2, 2, 'valid'),
			o = Mn(r.shape),
			i = r.shape[3] !== n.shape[3];
		if (r.shape[1] !== n.shape[1] || r.shape[2] !== n.shape[2]) {
			var a = Tf(n.shape);
			a[1] = 1;
			var s = Mn(a),
				u = Tf((n = zn([n, s], 1)).shape);
			u[2] = 1;
			var c = Mn(u);
			n = zn([n, c], 2);
		}
		return (r = i ? zn([r, o], 3) : r), (n = Tu(r, n)), (n = hl(n));
	}
	var Pm,
		Bm =
			(kf(Lm, (Pm = yv)),
			(Lm.prototype.forwardInput = function (n) {
				var r = this.params;
				if (!r)
					throw new Error('FaceRecognitionNet - load model before inference');
				return tn(function () {
					var t = Tm(
							cd(n.toBatchTensor(150, !0).toFloat(), [
								122.782,
								117.001,
								104.298,
							]).div(In(256)),
							r.conv32_down
						),
						e = (t = Om(
							(t = Mm(
								(t = Mm(
									(t = Om(
										(t = Mm(
											(t = Mm(
												(t = Om(
													(t = Mm(
														(t = Mm(
															(t = Mm(
																(t = Om(
																	(t = Mm(
																		(t = Mm(
																			(t = Mm(
																				(t = zc(t, 3, 2, 'valid')),
																				r.conv32_1
																			)),
																			r.conv32_2
																		)),
																		r.conv32_3
																	)),
																	r.conv64_down
																)),
																r.conv64_1
															)),
															r.conv64_2
														)),
														r.conv64_3
													)),
													r.conv128_down
												)),
												r.conv128_1
											)),
											r.conv128_2
										)),
										r.conv256_down
									)),
									r.conv256_1
								)),
								r.conv256_2
							)),
							r.conv256_down_out
						)).mean([1, 2]);
					return Ac(e, r.fc);
				});
			}),
			(Lm.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(Lm.prototype.computeFaceDescriptor = function (i) {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, hv(i)];
							case 1:
								return (
									(e = t.sent()),
									(n = tn(function () {
										return Or(o.forwardInput(e));
									})),
									[
										4,
										Promise.all(
											n.map(function (t) {
												return t.data();
											})
										),
									]
								);
							case 2:
								return (
									(r = t.sent()),
									n.forEach(function (t) {
										return t.dispose();
									}),
									[2, e.isBatchInput ? r : r[0]]
								);
						}
					});
				});
			}),
			(Lm.prototype.getDefaultModelName = function () {
				return 'face_recognition_model';
			}),
			(Lm.prototype.extractParamsFromWeigthMap = function (t) {
				return (function (t) {
					var e = [],
						n = Fm(t, e),
						r = n.extractConvLayerParams,
						o = n.extractResidualLayerParams,
						i = r('conv32_down'),
						a = o('conv32_1'),
						s = o('conv32_2'),
						u = o('conv32_3'),
						c = o('conv64_down'),
						l = o('conv64_1'),
						h = o('conv64_2'),
						p = o('conv64_3'),
						f = o('conv128_down'),
						d = o('conv128_1'),
						v = o('conv128_2'),
						m = o('conv256_down'),
						g = o('conv256_1'),
						y = o('conv256_2'),
						x = o('conv256_down_out'),
						b = t.fc;
					if ((e.push({ originalPath: 'fc', paramPath: 'fc' }), !Of(b)))
						throw new Error(
							'expected weightMap[fc] to be a Tensor2D, instead have ' + b
						);
					var w = {
						conv32_down: i,
						conv32_1: a,
						conv32_2: s,
						conv32_3: u,
						conv64_down: c,
						conv64_1: l,
						conv64_2: h,
						conv64_3: p,
						conv128_down: f,
						conv128_1: d,
						conv128_2: v,
						conv256_down: m,
						conv256_1: g,
						conv256_2: y,
						conv256_down_out: x,
						fc: b,
					};
					return _v(t, e), { params: w, paramMappings: e };
				})(t);
			}),
			(Lm.prototype.extractParams = function (t) {
				return (function (t) {
					var e = Tv(t),
						n = e.extractWeights,
						r = e.getRemainingWeights,
						o = [],
						i = Nm(n, o),
						a = i.extractConvLayerParams,
						s = i.extractResidualLayerParams,
						u = a(4704, 32, 7, 'conv32_down'),
						c = s(9216, 32, 3, 'conv32_1'),
						l = s(9216, 32, 3, 'conv32_2'),
						h = s(9216, 32, 3, 'conv32_3'),
						p = s(36864, 64, 3, 'conv64_down', !0),
						f = s(36864, 64, 3, 'conv64_1'),
						d = s(36864, 64, 3, 'conv64_2'),
						v = s(36864, 64, 3, 'conv64_3'),
						m = s(147456, 128, 3, 'conv128_down', !0),
						g = s(147456, 128, 3, 'conv128_1'),
						y = s(147456, 128, 3, 'conv128_2'),
						x = s(589824, 256, 3, 'conv256_down', !0),
						b = s(589824, 256, 3, 'conv256_1'),
						w = s(589824, 256, 3, 'conv256_2'),
						C = s(589824, 256, 3, 'conv256_down_out'),
						E = tn(function () {
							return dl(kn(n(32768), [128, 256]), [1, 0]);
						});
					if ((o.push({ paramPath: 'fc' }), 0 !== r().length))
						throw new Error('weights remaing after extract: ' + r().length);
					return {
						params: {
							conv32_down: u,
							conv32_1: c,
							conv32_2: l,
							conv32_3: h,
							conv64_down: p,
							conv64_1: f,
							conv64_2: d,
							conv64_3: v,
							conv128_down: m,
							conv128_1: g,
							conv128_2: y,
							conv256_down: x,
							conv256_1: b,
							conv256_2: w,
							conv256_down_out: C,
							fc: E,
						},
						paramMappings: o,
					};
				})(t);
			}),
			Lm);
	function Lm() {
		return Pm.call(this, 'FaceRecognitionNet') || this;
	}
	function Wm(t, e) {
		var n = { descriptor: e };
		return Object.assign({}, t, n);
	}
	function zm(t, e) {
		var n = { age: e };
		return Object.assign({}, t, n);
	}
	function Um(t, e, n) {
		var r = { gender: e, genderProbability: n };
		return Object.assign({}, t, r);
	}
	var Vm =
		(Object.defineProperty(Gm.prototype, 'minFaceSize', {
			get: function () {
				return this._minFaceSize;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Gm.prototype, 'scaleFactor', {
			get: function () {
				return this._scaleFactor;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Gm.prototype, 'maxNumScales', {
			get: function () {
				return this._maxNumScales;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Gm.prototype, 'scoreThresholds', {
			get: function () {
				return this._scoreThresholds;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Gm.prototype, 'scaleSteps', {
			get: function () {
				return this._scaleSteps;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Gm);
	function Gm(t) {
		var e = void 0 === t ? {} : t,
			n = e.minFaceSize,
			r = e.scaleFactor,
			o = e.maxNumScales,
			i = e.scoreThresholds,
			a = e.scaleSteps;
		if (
			((this._name = 'MtcnnOptions'),
			(this._minFaceSize = n || 20),
			(this._scaleFactor = r || 0.709),
			(this._maxNumScales = o || 10),
			(this._scoreThresholds = i || [0.6, 0.7, 0.7]),
			(this._scaleSteps = a),
			'number' != typeof this._minFaceSize || this._minFaceSize < 0)
		)
			throw new Error(
				this._name + ' - expected minFaceSize to be a number > 0'
			);
		if (
			'number' != typeof this._scaleFactor ||
			this._scaleFactor <= 0 ||
			1 <= this._scaleFactor
		)
			throw new Error(
				this._name + ' - expected scaleFactor to be a number between 0 and 1'
			);
		if ('number' != typeof this._maxNumScales || this._maxNumScales < 0)
			throw new Error(
				this._name + ' - expected maxNumScales to be a number > 0'
			);
		if (
			!Array.isArray(this._scoreThresholds) ||
			3 !== this._scoreThresholds.length ||
			this._scoreThresholds.some(function (t) {
				return 'number' != typeof t;
			})
		)
			throw new Error(
				this._name +
					' - expected scoreThresholds to be an array of numbers of length 3'
			);
		if (
			this._scaleSteps &&
			(!Array.isArray(this._scaleSteps) ||
				this._scaleSteps.some(function (t) {
					return 'number' != typeof t;
				}))
		)
			throw new Error(
				this._name + ' - expected scaleSteps to be an array of numbers'
			);
	}
	function Hm(s, u) {
		function i(t, e, n, r, o) {
			var i = Dn(s(t * e * n * n), [n, n, t, e]),
				a = Rn(s(e));
			return (
				u.push(
					{ paramPath: r + '/filters' },
					{ paramPath: r + '/' + (o ? 'batch_norm_offset' : 'bias') }
				),
				{ filters: i, bias: a }
			);
		}
		function r(t, e, n, r) {
			var o = i(t, e, n, r, !0);
			return { filters: o.filters, batch_norm_offset: o.bias };
		}
		function t(t, e, n) {
			return {
				depthwise_conv: (function (t, e) {
					var n = Dn(s(9 * t), [3, 3, t, 1]),
						r = Rn(s(t)),
						o = Rn(s(t)),
						i = Rn(s(t)),
						a = Rn(s(t));
					return (
						u.push(
							{ paramPath: e + '/filters' },
							{ paramPath: e + '/batch_norm_scale' },
							{ paramPath: e + '/batch_norm_offset' },
							{ paramPath: e + '/batch_norm_mean' },
							{ paramPath: e + '/batch_norm_variance' }
						),
						{
							filters: n,
							batch_norm_scale: r,
							batch_norm_offset: o,
							batch_norm_mean: i,
							batch_norm_variance: a,
						}
					);
				})(t, n + '/depthwise_conv'),
				pointwise_conv: r(t, e, 1, n + '/pointwise_conv'),
			};
		}
		return {
			extractMobilenetV1Params: function () {
				return {
					conv_0: r(3, 32, 3, 'mobilenetv1/conv_0'),
					conv_1: t(32, 64, 'mobilenetv1/conv_1'),
					conv_2: t(64, 128, 'mobilenetv1/conv_2'),
					conv_3: t(128, 128, 'mobilenetv1/conv_3'),
					conv_4: t(128, 256, 'mobilenetv1/conv_4'),
					conv_5: t(256, 256, 'mobilenetv1/conv_5'),
					conv_6: t(256, 512, 'mobilenetv1/conv_6'),
					conv_7: t(512, 512, 'mobilenetv1/conv_7'),
					conv_8: t(512, 512, 'mobilenetv1/conv_8'),
					conv_9: t(512, 512, 'mobilenetv1/conv_9'),
					conv_10: t(512, 512, 'mobilenetv1/conv_10'),
					conv_11: t(512, 512, 'mobilenetv1/conv_11'),
					conv_12: t(512, 1024, 'mobilenetv1/conv_12'),
					conv_13: t(1024, 1024, 'mobilenetv1/conv_13'),
				};
			},
			extractPredictionLayerParams: function () {
				return {
					conv_0: r(1024, 256, 1, 'prediction_layer/conv_0'),
					conv_1: r(256, 512, 3, 'prediction_layer/conv_1'),
					conv_2: r(512, 128, 1, 'prediction_layer/conv_2'),
					conv_3: r(128, 256, 3, 'prediction_layer/conv_3'),
					conv_4: r(256, 128, 1, 'prediction_layer/conv_4'),
					conv_5: r(128, 256, 3, 'prediction_layer/conv_5'),
					conv_6: r(256, 64, 1, 'prediction_layer/conv_6'),
					conv_7: r(64, 128, 3, 'prediction_layer/conv_7'),
					box_predictor_0: {
						box_encoding_predictor: i(
							512,
							12,
							1,
							'prediction_layer/box_predictor_0/box_encoding_predictor'
						),
						class_predictor: i(
							512,
							9,
							1,
							'prediction_layer/box_predictor_0/class_predictor'
						),
					},
					box_predictor_1: {
						box_encoding_predictor: i(
							1024,
							24,
							1,
							'prediction_layer/box_predictor_1/box_encoding_predictor'
						),
						class_predictor: i(
							1024,
							18,
							1,
							'prediction_layer/box_predictor_1/class_predictor'
						),
					},
					box_predictor_2: {
						box_encoding_predictor: i(
							512,
							24,
							1,
							'prediction_layer/box_predictor_2/box_encoding_predictor'
						),
						class_predictor: i(
							512,
							18,
							1,
							'prediction_layer/box_predictor_2/class_predictor'
						),
					},
					box_predictor_3: {
						box_encoding_predictor: i(
							256,
							24,
							1,
							'prediction_layer/box_predictor_3/box_encoding_predictor'
						),
						class_predictor: i(
							256,
							18,
							1,
							'prediction_layer/box_predictor_3/class_predictor'
						),
					},
					box_predictor_4: {
						box_encoding_predictor: i(
							256,
							24,
							1,
							'prediction_layer/box_predictor_4/box_encoding_predictor'
						),
						class_predictor: i(
							256,
							18,
							1,
							'prediction_layer/box_predictor_4/class_predictor'
						),
					},
					box_predictor_5: {
						box_encoding_predictor: i(
							128,
							24,
							1,
							'prediction_layer/box_predictor_5/box_encoding_predictor'
						),
						class_predictor: i(
							128,
							18,
							1,
							'prediction_layer/box_predictor_5/class_predictor'
						),
					},
				};
			},
		};
	}
	function qm(t) {
		var e = [],
			n = (function (t, e) {
				var i = Av(t, e);
				function a(t, e, n) {
					return {
						filters: i(
							t + '/Conv2d_' + e + '_pointwise/weights',
							4,
							n + '/filters'
						),
						batch_norm_offset: i(
							t + '/Conv2d_' + e + '_pointwise/convolution_bn_offset',
							1,
							n + '/batch_norm_offset'
						),
					};
				}
				function n(t) {
					var e = 'mobilenetv1/conv_' + t,
						n = 'MobilenetV1/Conv2d_' + t + '_depthwise',
						r = e + '/depthwise_conv',
						o = e + '/pointwise_conv';
					return {
						depthwise_conv: {
							filters: i(n + '/depthwise_weights', 4, r + '/filters'),
							batch_norm_scale: i(
								n + '/BatchNorm/gamma',
								1,
								r + '/batch_norm_scale'
							),
							batch_norm_offset: i(
								n + '/BatchNorm/beta',
								1,
								r + '/batch_norm_offset'
							),
							batch_norm_mean: i(
								n + '/BatchNorm/moving_mean',
								1,
								r + '/batch_norm_mean'
							),
							batch_norm_variance: i(
								n + '/BatchNorm/moving_variance',
								1,
								r + '/batch_norm_variance'
							),
						},
						pointwise_conv: a('MobilenetV1', t, o),
					};
				}
				function r(t, e) {
					return {
						filters: i(t + '/weights', 4, e + '/filters'),
						bias: i(t + '/biases', 1, e + '/bias'),
					};
				}
				function o(t) {
					return {
						box_encoding_predictor: r(
							'Prediction/BoxPredictor_' + t + '/BoxEncodingPredictor',
							'prediction_layer/box_predictor_' + t + '/box_encoding_predictor'
						),
						class_predictor: r(
							'Prediction/BoxPredictor_' + t + '/ClassPredictor',
							'prediction_layer/box_predictor_' + t + '/class_predictor'
						),
					};
				}
				return {
					extractMobilenetV1Params: function () {
						return {
							conv_0: a('MobilenetV1', 0, 'mobilenetv1/conv_0'),
							conv_1: n(1),
							conv_2: n(2),
							conv_3: n(3),
							conv_4: n(4),
							conv_5: n(5),
							conv_6: n(6),
							conv_7: n(7),
							conv_8: n(8),
							conv_9: n(9),
							conv_10: n(10),
							conv_11: n(11),
							conv_12: n(12),
							conv_13: n(13),
						};
					},
					extractPredictionLayerParams: function () {
						return {
							conv_0: a('Prediction', 0, 'prediction_layer/conv_0'),
							conv_1: a('Prediction', 1, 'prediction_layer/conv_1'),
							conv_2: a('Prediction', 2, 'prediction_layer/conv_2'),
							conv_3: a('Prediction', 3, 'prediction_layer/conv_3'),
							conv_4: a('Prediction', 4, 'prediction_layer/conv_4'),
							conv_5: a('Prediction', 5, 'prediction_layer/conv_5'),
							conv_6: a('Prediction', 6, 'prediction_layer/conv_6'),
							conv_7: a('Prediction', 7, 'prediction_layer/conv_7'),
							box_predictor_0: o(0),
							box_predictor_1: o(1),
							box_predictor_2: o(2),
							box_predictor_3: o(3),
							box_predictor_4: o(4),
							box_predictor_5: o(5),
						};
					},
				};
			})(t, e),
			r = n.extractMobilenetV1Params,
			o = n.extractPredictionLayerParams,
			i = t['Output/extra_dim'];
		if (
			(e.push({
				originalPath: 'Output/extra_dim',
				paramPath: 'output_layer/extra_dim',
			}),
			!Pf(i))
		)
			throw new Error(
				"expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " +
					i
			);
		var a = {
			mobilenetv1: r(),
			prediction_layer: o(),
			output_layer: { extra_dim: i },
		};
		return _v(t, e), { params: a, paramMappings: e };
	}
	function jm(e, n, r) {
		return tn(function () {
			var t = bc(e, n.filters, r, 'same');
			return (t = Tu(t, n.batch_norm_offset)), Ws(t, 0, 6);
		});
	}
	var Km = 0.0010000000474974513;
	function Xm(t, e) {
		return tn(function () {
			var o = null,
				i = jm(t, e.conv_0, [2, 2]);
			if (
				([
					e.conv_1,
					e.conv_2,
					e.conv_3,
					e.conv_4,
					e.conv_5,
					e.conv_6,
					e.conv_7,
					e.conv_8,
					e.conv_9,
					e.conv_10,
					e.conv_11,
					e.conv_12,
					e.conv_13,
				].forEach(function (t, e) {
					var n = e + 1,
						r = (function (e) {
							return [2, 4, 6, 12].some(function (t) {
								return t === e;
							})
								? [2, 2]
								: [1, 1];
						})(n);
					(i = jm(
						(i = (function (e, n, r) {
							return tn(function () {
								var t = _c(e, n.filters, r, 'same');
								return (
									(t = Cu(
										t,
										n.batch_norm_mean,
										n.batch_norm_variance,
										n.batch_norm_offset,
										n.batch_norm_scale,
										Km
									)),
									Ws(t, 0, 6)
								);
							});
						})(i, t.depthwise_conv, r)),
						t.pointwise_conv,
						[1, 1]
					)),
						11 === n && (o = i);
				}),
				null === o)
			)
				throw new Error('mobileNetV1 - output of conv layer 11 is null');
			return { out: i, conv11: o };
		});
	}
	function Ym(t, e, n) {
		var r = t.arraySync(),
			o = Math.min(r[e][0], r[e][2]),
			i = Math.min(r[e][1], r[e][3]),
			a = Math.max(r[e][0], r[e][2]),
			s = Math.max(r[e][1], r[e][3]),
			u = Math.min(r[n][0], r[n][2]),
			c = Math.min(r[n][1], r[n][3]),
			l = Math.max(r[n][0], r[n][2]),
			h = Math.max(r[n][1], r[n][3]),
			p = (a - o) * (s - i),
			f = (l - u) * (h - c);
		if (p <= 0 || f <= 0) return 0;
		var d = Math.max(o, u),
			v = Math.max(i, c),
			m = Math.min(a, l),
			g = Math.min(s, h),
			y = Math.max(m - d, 0) * Math.max(g - v, 0);
		return y / (p + f - y);
	}
	function $m(t, e) {
		var n = (function (t) {
				var e = Or(dl(t, [1, 0])),
					n = [Ju(e[2], e[0]), Ju(e[3], e[1])];
				return {
					sizes: n,
					centers: [Tu(e[0], Ou(n[0], In(2))), Tu(e[1], Ou(n[1], In(2)))],
				};
			})(t),
			r = n.sizes,
			o = n.centers,
			i = Or(dl(e, [1, 0])),
			a = Ou(qu(Gs(Ou(i[2], In(5))), r[0]), In(2)),
			s = Tu(qu(Ou(i[0], In(10)), r[0]), o[0]),
			u = Ou(qu(Gs(Ou(i[3], In(5))), r[1]), In(2)),
			c = Tu(qu(Ou(i[1], In(10)), r[1]), o[1]);
		return dl(Nr([Ju(s, a), Ju(c, u), Tu(s, a), Tu(c, u)]), [1, 0]);
	}
	function Jm(e, n) {
		return tn(function () {
			var t = e.shape[0];
			return {
				boxPredictionEncoding: Dr(Ev(e, n.box_encoding_predictor), [
					t,
					-1,
					1,
					4,
				]),
				classPrediction: Dr(Ev(e, n.class_predictor), [t, -1, 3]),
			};
		});
	}
	var Qm =
		(Object.defineProperty(Zm.prototype, 'minConfidence', {
			get: function () {
				return this._minConfidence;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(Zm.prototype, 'maxResults', {
			get: function () {
				return this._maxResults;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Zm);
	function Zm(t) {
		var e = void 0 === t ? {} : t,
			n = e.minConfidence,
			r = e.maxResults;
		if (
			((this._name = 'SsdMobilenetv1Options'),
			(this._minConfidence = n || 0.5),
			(this._maxResults = r || 100),
			'number' != typeof this._minConfidence ||
				this._minConfidence <= 0 ||
				1 <= this._minConfidence)
		)
			throw new Error(
				this._name + ' - expected minConfidence to be a number between 0 and 1'
			);
		if ('number' != typeof this._maxResults)
			throw new Error(this._name + ' - expected maxResults to be a number');
	}
	var tg,
		eg =
			(kf(ng, (tg = yv)),
			(ng.prototype.forwardInput = function (r) {
				var o = this.params;
				if (!o) throw new Error('SsdMobilenetv1 - load model before inference');
				return tn(function () {
					var t = r.toBatchTensor(512, !1).toFloat(),
						e = Xm(Ju(qu(t, In(0.007843137718737125)), In(1)), o.mobilenetv1),
						n = (function (l, h, p) {
							return tn(function () {
								var t = jm(jm(l, p.conv_0, [1, 1]), p.conv_1, [2, 2]),
									e = jm(jm(t, p.conv_2, [1, 1]), p.conv_3, [2, 2]),
									n = jm(jm(e, p.conv_4, [1, 1]), p.conv_5, [2, 2]),
									r = jm(jm(n, p.conv_6, [1, 1]), p.conv_7, [2, 2]),
									o = Jm(h, p.box_predictor_0),
									i = Jm(l, p.box_predictor_1),
									a = Jm(t, p.box_predictor_2),
									s = Jm(e, p.box_predictor_3),
									u = Jm(n, p.box_predictor_4),
									c = Jm(r, p.box_predictor_5);
								return {
									boxPredictions: zn(
										[
											o.boxPredictionEncoding,
											i.boxPredictionEncoding,
											a.boxPredictionEncoding,
											s.boxPredictionEncoding,
											u.boxPredictionEncoding,
											c.boxPredictionEncoding,
										],
										1
									),
									classPredictions: zn(
										[
											o.classPrediction,
											i.classPrediction,
											a.classPrediction,
											s.classPrediction,
											u.classPrediction,
											c.classPrediction,
										],
										1
									),
								};
							});
						})(e.out, e.conv11, o.prediction_layer);
					return (function (o, i, a) {
						return tn(function () {
							var t = o.shape[0],
								e = $m(Dr(Fr(a.extra_dim, [t, 1, 1]), [-1, 4]), Dr(o, [-1, 4]));
							e = Dr(e, [t, e.shape[0] / t, 4]);
							var n = Zs(qc(i, [0, 0, 1], [-1, -1, -1])),
								r = qc(n, [0, 0, 0], [-1, -1, 1]);
							return (
								(r = Dr(r, [t, r.shape[1]])), { boxes: Or(e), scores: Or(r) }
							);
						});
					})(n.boxPredictions, n.classPredictions, o.output_layer);
				});
			}),
			(ng.prototype.forward = function (n) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [2, e.apply(this, [t.sent()])];
						}
					});
				});
			}),
			(ng.prototype.locateFaces = function (w, C) {
				return (
					void 0 === C && (C = {}),
					Df(this, void 0, void 0, function () {
						var e, n, r, s, o, i, a, u, c, l, h, p, f, d, v, m, g, y, x, b;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return (
										(e = new Qm(C)),
										(n = e.maxResults),
										(r = e.minConfidence),
										[4, hv(w)]
									);
								case 1:
									for (
										s = t.sent(),
											o = this.forwardInput(s),
											i = o.boxes,
											a = o.scores,
											u = i[0],
											c = a[0],
											l = 1;
										l < i.length;
										l++
									)
										i[l].dispose(), a[l].dispose();
									return (f = (p = Array).from), [4, c.data()];
								case 2:
									return (
										(h = f.apply(p, [t.sent()])),
										(d = (function (o, t, e, i, a) {
											var n = o.shape[0],
												s = Math.min(e, n),
												r = t
													.map(function (t, e) {
														return { score: t, boxIndex: e };
													})
													.filter(function (t) {
														return t.score > a;
													})
													.sort(function (t, e) {
														return e.score - t.score;
													}),
												u = [];
											return (
												r.forEach(function (t) {
													if (!(u.length >= s)) {
														for (
															var e = t.score, n = u.length - 1;
															0 <= n;
															--n
														) {
															var r = Ym(o, t.boxIndex, u[n]);
															if (
																0 !== r &&
																((t.score *= r <= i ? 1 : 0), t.score <= a)
															)
																break;
														}
														e === t.score && u.push(t.boxIndex);
													}
												}),
												u
											);
										})(u, h, n, 0.5, r)),
										(v = s.getReshapedInputDimensions(0)),
										(m = s.inputSize),
										(g = m / v.width),
										(y = m / v.height),
										(x = u.arraySync()),
										(b = d.map(function (t) {
											var e = [Math.max(0, x[t][0]), Math.min(1, x[t][2])].map(
													function (t) {
														return t * y;
													}
												),
												n = e[0],
												r = e[1],
												o = [Math.max(0, x[t][1]), Math.min(1, x[t][3])].map(
													function (t) {
														return t * g;
													}
												),
												i = o[0],
												a = o[1];
											return new od(h[t], new fd(i, n, a - i, r - n), {
												height: s.getInputHeight(0),
												width: s.getInputWidth(0),
											});
										})),
										u.dispose(),
										c.dispose(),
										[2, b]
									);
							}
						});
					})
				);
			}),
			(ng.prototype.getDefaultModelName = function () {
				return 'ssd_mobilenetv1_model';
			}),
			(ng.prototype.extractParamsFromWeigthMap = function (t) {
				return qm(t);
			}),
			(ng.prototype.extractParams = function (t) {
				return (function (t) {
					var e = [],
						n = Tv(t),
						r = n.extractWeights,
						o = n.getRemainingWeights,
						i = Hm(r, e),
						a = i.extractMobilenetV1Params,
						s = i.extractPredictionLayerParams,
						u = a(),
						c = s(),
						l = { extra_dim: Sn(r(20472), [1, 5118, 4]) };
					if (
						(e.push({ paramPath: 'output_layer/extra_dim' }), 0 !== o().length)
					)
						throw new Error('weights remaing after extract: ' + o().length);
					return {
						params: { mobilenetv1: u, prediction_layer: c, output_layer: l },
						paramMappings: e,
					};
				})(t);
			}),
			ng);
	function ng() {
		return tg.call(this, 'SsdMobilenetv1') || this;
	}
	function rg(t) {
		var e = new eg();
		return e.extractWeights(t), e;
	}
	var og,
		ig = (kf(ag, (og = eg)), ag);
	function ag() {
		return (null !== og && og.apply(this, arguments)) || this;
	}
	var sg,
		ug = [
			new Xf(0.738768, 0.874946),
			new Xf(2.42204, 2.65704),
			new Xf(4.30971, 7.04493),
			new Xf(10.246, 4.59428),
			new Xf(12.6868, 11.8741),
		],
		cg = [
			new Xf(1.603231, 2.094468),
			new Xf(6.041143, 7.080126),
			new Xf(2.882459, 3.518061),
			new Xf(4.266906, 5.178857),
			new Xf(9.041765, 10.66308),
		],
		lg = [117.001, 114.697, 97.404],
		hg = function (t) {
			return 'number' == typeof t;
		};
	function pg(t) {
		if (!t) throw new Error('invalid config: ' + t);
		if ('boolean' != typeof t.withSeparableConvs)
			throw new Error(
				'config.withSeparableConvs has to be a boolean, have: ' +
					t.withSeparableConvs
			);
		if (!hg(t.iouThreshold) || t.iouThreshold < 0 || 1 < t.iouThreshold)
			throw new Error(
				'config.iouThreshold has to be a number between [0, 1], have: ' +
					t.iouThreshold
			);
		if (
			!Array.isArray(t.classes) ||
			!t.classes.length ||
			!t.classes.every(function (t) {
				return 'string' == typeof t;
			})
		)
			throw new Error(
				'config.classes has to be an array class names: string[], have: ' +
					JSON.stringify(t.classes)
			);
		if (
			!Array.isArray(t.anchors) ||
			!t.anchors.length ||
			!t.anchors
				.map(function (t) {
					return t || {};
				})
				.every(function (t) {
					return hg(t.x) && hg(t.y);
				})
		)
			throw new Error(
				'config.anchors has to be an array of { x: number, y: number }, have: ' +
					JSON.stringify(t.anchors)
			);
		if (
			t.meanRgb &&
			(!Array.isArray(t.meanRgb) ||
				3 !== t.meanRgb.length ||
				!t.meanRgb.every(hg))
		)
			throw new Error(
				'config.meanRgb has to be an array of shape [number, number, number], have: ' +
					JSON.stringify(t.meanRgb)
			);
	}
	function fg(e) {
		return tn(function () {
			var t = qu(e, In(0.10000000149011612));
			return Tu(hl(Ju(e, t)), t);
		});
	}
	function dg(e, n) {
		return tn(function () {
			var t = br(e, [
				[0, 0],
				[1, 1],
				[1, 1],
				[0, 0],
			]);
			return (
				(t = bc(t, n.conv.filters, [1, 1], 'valid')),
				(t = Ju(t, n.bn.sub)),
				(t = qu(t, n.bn.truediv)),
				fg((t = Tu(t, n.conv.bias)))
			);
		});
	}
	function vg(e, n) {
		return tn(function () {
			var t = br(e, [
				[0, 0],
				[1, 1],
				[1, 1],
				[0, 0],
			]);
			return (
				(t = kc(t, n.depthwise_filter, n.pointwise_filter, [1, 1], 'valid')),
				fg((t = Tu(t, n.bias)))
			);
		});
	}
	function mg(o, i) {
		var r = Iv(o, i);
		var t = Sv(o, i);
		return {
			extractConvParams: r,
			extractConvWithBatchNormParams: function (t, e, n) {
				return {
					conv: r(t, e, 3, n + '/conv'),
					bn: (function (t, e) {
						var n = Rn(o(t)),
							r = Rn(o(t));
						return (
							i.push({ paramPath: e + '/sub' }, { paramPath: e + '/truediv' }),
							{ sub: n, truediv: r }
						);
					})(e, n + '/bn'),
				};
			},
			extractSeparableConvParams: t,
		};
	}
	function gg(t, e) {
		var n = Av(t, e);
		function r(t) {
			return { filters: n(t + '/filters', 4), bias: n(t + '/bias', 1) };
		}
		return {
			extractConvParams: r,
			extractConvWithBatchNormParams: function (t) {
				return {
					conv: r(t + '/conv'),
					bn: (function (t) {
						return { sub: n(t + '/sub', 1), truediv: n(t + '/truediv', 1) };
					})(t + '/bn'),
				};
			},
			extractSeparableConvParams: Dv(n),
		};
	}
	((sg = c.TinyYolov2SizeType || (c.TinyYolov2SizeType = {}))[(sg.XS = 224)] =
		'XS'),
		(sg[(sg.SM = 320)] = 'SM'),
		(sg[(sg.MD = 416)] = 'MD'),
		(sg[(sg.LG = 608)] = 'LG');
	var yg =
		(Object.defineProperty(xg.prototype, 'inputSize', {
			get: function () {
				return this._inputSize;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(xg.prototype, 'scoreThreshold', {
			get: function () {
				return this._scoreThreshold;
			},
			enumerable: !0,
			configurable: !0,
		}),
		xg);
	function xg(t) {
		var e = void 0 === t ? {} : t,
			n = e.inputSize,
			r = e.scoreThreshold;
		if (
			((this._name = 'TinyYolov2Options'),
			(this._inputSize = n || 416),
			(this._scoreThreshold = r || 0.5),
			'number' != typeof this._inputSize || this._inputSize % 32 != 0)
		)
			throw new Error(
				this._name + ' - expected inputSize to be a number divisible by 32'
			);
		if (
			'number' != typeof this._scoreThreshold ||
			this._scoreThreshold <= 0 ||
			1 <= this._scoreThreshold
		)
			throw new Error(
				this._name + ' - expected scoreThreshold to be a number between 0 and 1'
			);
	}
	var bg,
		wg =
			(kf(Cg, (bg = yv)),
			Object.defineProperty(Cg.prototype, 'config', {
				get: function () {
					return this._config;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Object.defineProperty(Cg.prototype, 'withClassScores', {
				get: function () {
					return this.config.withClassScores || 1 < this.config.classes.length;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Object.defineProperty(Cg.prototype, 'boxEncodingSize', {
				get: function () {
					return 5 + (this.withClassScores ? this.config.classes.length : 0);
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Cg.prototype.runTinyYolov2 = function (t, e) {
				var n = dg(t, e.conv0);
				return (
					(n = dg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv1)),
					(n = dg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv2)),
					(n = dg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv3)),
					(n = dg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv4)),
					(n = dg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv5)),
					Ev(
						(n = dg(
							(n = dg((n = zc(n, [2, 2], [1, 1], 'same')), e.conv6)),
							e.conv7
						)),
						e.conv8,
						'valid',
						!1
					)
				);
			}),
			(Cg.prototype.runMobilenet = function (t, e) {
				var n = this.config.isFirstLayerConv2d
					? fg(Ev(t, e.conv0, 'valid', !1))
					: vg(t, e.conv0);
				return (
					(n = vg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv1)),
					(n = vg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv2)),
					(n = vg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv3)),
					(n = vg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv4)),
					(n = vg((n = zc(n, [2, 2], [2, 2], 'same')), e.conv5)),
					(n = zc(n, [2, 2], [1, 1], 'same')),
					(n = e.conv6 ? vg(n, e.conv6) : n),
					Ev((n = e.conv7 ? vg(n, e.conv7) : n), e.conv8, 'valid', !1)
				);
			}),
			(Cg.prototype.forwardInput = function (e, n) {
				var r = this,
					o = this.params;
				if (!o) throw new Error('TinyYolov2 - load model before inference');
				return tn(function () {
					var t = e.toBatchTensor(n, !1).toFloat();
					return (
						(t = (t = r.config.meanRgb ? cd(t, r.config.meanRgb) : t).div(
							In(256)
						)),
						r.config.withSeparableConvs
							? r.runMobilenet(t, o)
							: r.runTinyYolov2(t, o)
					);
				});
			}),
			(Cg.prototype.forward = function (n, r) {
				return Df(this, void 0, void 0, function () {
					var e;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (e = this.forwardInput), [4, hv(n)];
							case 1:
								return [4, e.apply(this, [t.sent(), r])];
							case 2:
								return [2, t.sent()];
						}
					});
				});
			}),
			(Cg.prototype.detect = function (d, v) {
				return (
					void 0 === v && (v = {}),
					Df(this, void 0, void 0, function () {
						var e,
							n,
							r,
							o,
							i,
							a,
							s,
							u,
							c,
							l,
							h,
							p,
							f = this;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return (
										(e = new yg(v)),
										(n = e.inputSize),
										(r = e.scoreThreshold),
										[4, hv(d)]
									);
								case 1:
									return (o = t.sent()), [4, this.forwardInput(o, n)];
								case 2:
									return (
										(i = t.sent()),
										(a = tn(function () {
											return Or(i)[0].expandDims();
										})),
										(s = {
											width: o.getInputWidth(0),
											height: o.getInputHeight(0),
										}),
										[
											4,
											this.extractBoxes(a, o.getReshapedInputDimensions(0), r),
										]
									);
								case 3:
									return (
										(u = t.sent()),
										i.dispose(),
										a.dispose(),
										(c = u.map(function (t) {
											return t.box;
										})),
										(l = u.map(function (t) {
											return t.score;
										})),
										(h = u.map(function (t) {
											return t.classScore;
										})),
										(p = u.map(function (t) {
											return f.config.classes[t.label];
										})),
										[
											2,
											ud(
												c.map(function (t) {
													return t.rescale(n);
												}),
												l,
												this.config.iouThreshold,
												!0
											).map(function (t) {
												return new ed(l[t], h[t], p[t], c[t], s);
											}),
										]
									);
							}
						});
					})
				);
			}),
			(Cg.prototype.getDefaultModelName = function () {
				return '';
			}),
			(Cg.prototype.extractParamsFromWeigthMap = function (t) {
				return (function (t, e) {
					var n,
						r = [],
						o = gg(t, r),
						i = o.extractConvParams,
						a = o.extractConvWithBatchNormParams,
						s = o.extractSeparableConvParams;
					if (e.withSeparableConvs) {
						var u = (e.filterSizes && e.filterSizes.length) || 9;
						n = {
							conv0: e.isFirstLayerConv2d ? i('conv0') : s('conv0'),
							conv1: s('conv1'),
							conv2: s('conv2'),
							conv3: s('conv3'),
							conv4: s('conv4'),
							conv5: s('conv5'),
							conv6: 7 < u ? s('conv6') : void 0,
							conv7: 8 < u ? s('conv7') : void 0,
							conv8: i('conv8'),
						};
					} else
						n = {
							conv0: a('conv0'),
							conv1: a('conv1'),
							conv2: a('conv2'),
							conv3: a('conv3'),
							conv4: a('conv4'),
							conv5: a('conv5'),
							conv6: a('conv6'),
							conv7: a('conv7'),
							conv8: i('conv8'),
						};
					return _v(t, r), { params: n, paramMappings: r };
				})(t, this.config);
			}),
			(Cg.prototype.extractParams = function (t) {
				var e = this.config.filterSizes || Cg.DEFAULT_FILTER_SIZES,
					n = e ? e.length : void 0;
				if (7 !== n && 8 !== n && 9 !== n)
					throw new Error(
						'TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found ' +
							n +
							' filterSizes in config'
					);
				return (function (t, e, n, r) {
					var o,
						i = Tv(t),
						a = i.extractWeights,
						s = i.getRemainingWeights,
						u = [],
						c = mg(a, u),
						l = c.extractConvParams,
						h = c.extractConvWithBatchNormParams,
						p = c.extractSeparableConvParams;
					if (e.withSeparableConvs) {
						var f = r[0],
							d = r[1],
							v = r[2],
							m = r[3],
							g = r[4],
							y = r[5],
							x = r[6],
							b = r[7],
							w = r[8];
						o = {
							conv0: e.isFirstLayerConv2d
								? l(f, d, 3, 'conv0')
								: p(f, d, 'conv0'),
							conv1: p(d, v, 'conv1'),
							conv2: p(v, m, 'conv2'),
							conv3: p(m, g, 'conv3'),
							conv4: p(g, y, 'conv4'),
							conv5: p(y, x, 'conv5'),
							conv6: b ? p(x, b, 'conv6') : void 0,
							conv7: w ? p(b, w, 'conv7') : void 0,
							conv8: l(w || b || x, 5 * n, 1, 'conv8'),
						};
					} else
						(f = r[0]),
							(d = r[1]),
							(v = r[2]),
							(m = r[3]),
							(g = r[4]),
							(y = r[5]),
							(x = r[6]),
							(b = r[7]),
							(w = r[8]),
							(o = {
								conv0: h(f, d, 'conv0'),
								conv1: h(d, v, 'conv1'),
								conv2: h(v, m, 'conv2'),
								conv3: h(m, g, 'conv3'),
								conv4: h(g, y, 'conv4'),
								conv5: h(y, x, 'conv5'),
								conv6: h(x, b, 'conv6'),
								conv7: h(b, w, 'conv7'),
								conv8: l(w, 5 * n, 1, 'conv8'),
							});
					if (0 !== s().length)
						throw new Error('weights remaing after extract: ' + s().length);
					return { params: o, paramMappings: u };
				})(t, this.config, this.boxEncodingSize, e);
			}),
			(Cg.prototype.extractBoxes = function (T, N, F) {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o,
						i,
						a,
						s,
						u,
						c,
						l,
						h,
						p,
						f,
						d,
						v,
						m,
						g,
						y,
						x,
						b,
						w,
						C,
						E,
						_,
						I,
						R,
						k,
						S,
						D,
						A = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(e = N.width),
									(n = N.height),
									(r = Math.max(e, n)),
									(o = r / e),
									(i = r / n),
									(a = T.shape[1]),
									(s = this.config.anchors.length),
									(u = tn(function () {
										var t = T.reshape([a, a, s, A.boxEncodingSize]);
										return [
											t.slice([0, 0, 0, 0], [a, a, s, 4]),
											t.slice([0, 0, 0, 4], [a, a, s, 1]),
											A.withClassScores
												? io(
														t.slice(
															[0, 0, 0, 5],
															[a, a, s, A.config.classes.length]
														),
														3
												  )
												: In(0),
										];
									})),
									(c = u[0]),
									(l = u[1]),
									(h = u[2]),
									(p = []),
									[4, l.array()]
								);
							case 1:
								return (f = t.sent()), [4, c.array()];
							case 2:
								(d = t.sent()), (v = 0), (t.label = 3);
							case 3:
								if (!(v < a)) return [3, 12];
								(m = 0), (t.label = 4);
							case 4:
								if (!(m < a)) return [3, 11];
								(g = 0), (t.label = 5);
							case 5:
								return g < s
									? ((y = hd(f[v][m][g][0])),
									  !F || F < y
											? ((x = ((m + hd(d[v][m][g][0])) / a) * o),
											  (b = ((v + hd(d[v][m][g][1])) / a) * i),
											  (w =
													((Math.exp(d[v][m][g][2]) *
														this.config.anchors[g].x) /
														a) *
													o),
											  (C =
													((Math.exp(d[v][m][g][3]) *
														this.config.anchors[g].y) /
														a) *
													i),
											  (E = x - w / 2),
											  (_ = b - C / 2),
											  (I = { row: v, col: m, anchor: g }),
											  this.withClassScores
													? [4, this.extractPredictedClass(h, I)]
													: [3, 7])
											: [3, 9])
									: [3, 10];
							case 6:
								return (D = t.sent()), [3, 8];
							case 7:
								(D = { classScore: 1, label: 0 }), (t.label = 8);
							case 8:
								(k = (R = D).classScore),
									(S = R.label),
									p.push(
										Sf(
											{
												box: new Zf(E, _, E + w, _ + C),
												score: y,
												classScore: y * k,
												label: S,
											},
											I
										)
									),
									(t.label = 9);
							case 9:
								return g++, [3, 5];
							case 10:
								return m++, [3, 4];
							case 11:
								return v++, [3, 3];
							case 12:
								return c.dispose(), l.dispose(), h.dispose(), [2, p];
						}
					});
				});
			}),
			(Cg.prototype.extractPredictedClass = function (e, a) {
				return Df(this, void 0, void 0, function () {
					var n, r, o, i;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (n = a.row), (r = a.col), (o = a.anchor), [4, e.array()];
							case 1:
								return (
									(i = t.sent()),
									[
										2,
										Array(this.config.classes.length)
											.fill(0)
											.map(function (t, e) {
												return i[n][r][o][e];
											})
											.map(function (t, e) {
												return { classScore: t, label: e };
											})
											.reduce(function (t, e) {
												return t.classScore > e.classScore ? t : e;
											}),
									]
								);
						}
					});
				});
			}),
			(Cg.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024]),
			Cg);
	function Cg(t) {
		var e = bg.call(this, 'TinyYolov2') || this;
		return pg(t), (e._config = t), e;
	}
	var Eg,
		_g =
			(kf(Ig, (Eg = wg)),
			Object.defineProperty(Ig.prototype, 'withSeparableConvs', {
				get: function () {
					return this.config.withSeparableConvs;
				},
				enumerable: !0,
				configurable: !0,
			}),
			Object.defineProperty(Ig.prototype, 'anchors', {
				get: function () {
					return this.config.anchors;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(Ig.prototype.locateFaces = function (e, n) {
				return Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.detect(e, n)];
							case 1:
								return [
									2,
									t.sent().map(function (t) {
										return new od(t.score, t.relativeBox, {
											width: t.imageWidth,
											height: t.imageHeight,
										});
									}),
								];
						}
					});
				});
			}),
			(Ig.prototype.getDefaultModelName = function () {
				return this.withSeparableConvs
					? 'tiny_yolov2_separable_conv_model'
					: 'tiny_yolov2_model';
			}),
			(Ig.prototype.extractParamsFromWeigthMap = function (t) {
				return Eg.prototype.extractParamsFromWeigthMap.call(this, t);
			}),
			Ig);
	function Ig(t) {
		void 0 === t && (t = !0);
		var e = Object.assign(
			{},
			{ withSeparableConvs: t, iouThreshold: 0.4, classes: ['face'] },
			t ? { anchors: cg, meanRgb: lg } : { anchors: ug, withClassScores: !0 }
		);
		return Eg.call(this, e) || this;
	}
	var Rg,
		kg = (kf(Sg, (Rg = yg)), Sg);
	function Sg() {
		var t = (null !== Rg && Rg.apply(this, arguments)) || this;
		return (t._name = 'TinyFaceDetectorOptions'), t;
	}
	var Dg =
		((Ag.prototype.then = function (n) {
			return Df(this, void 0, void 0, function () {
				var e;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							return (e = n), [4, this.run()];
						case 1:
							return [2, e.apply(void 0, [t.sent()])];
					}
				});
			});
		}),
		(Ag.prototype.run = function () {
			return Df(this, void 0, void 0, function () {
				return Af(this, function (t) {
					throw new Error('ComposableTask - run is not implemented');
				});
			});
		}),
		Ag);
	function Ag() {}
	function Tg(a, s, u, c, l) {
		return (
			void 0 === l &&
				(l = function (t) {
					return t.alignedRect;
				}),
			Df(this, void 0, void 0, function () {
				var e, n, r, o, i;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							return (
								(e = a.map(function (t) {
									return Jv(t) ? l(t) : t.detection;
								})),
								(r = c) ? [3, 5] : s instanceof yt ? [4, fv(s, e)] : [3, 2]
							);
						case 1:
							return (o = t.sent()), [3, 4];
						case 2:
							return [4, pv(s, e)];
						case 3:
							(o = t.sent()), (t.label = 4);
						case 4:
							(r = o), (t.label = 5);
						case 5:
							return [4, u((n = r))];
						case 6:
							return (
								(i = t.sent()),
								n.forEach(function (t) {
									return t instanceof yt && t.dispose();
								}),
								[2, i]
							);
					}
				});
			})
		);
	}
	function Ng(e, r, o, i, a) {
		return Df(this, void 0, void 0, function () {
			var n = this;
			return Af(this, function (t) {
				return [
					2,
					Tg(
						[e],
						r,
						function (e) {
							return Df(n, void 0, void 0, function () {
								return Af(this, function (t) {
									return [2, o(e[0])];
								});
							});
						},
						i,
						a
					),
				];
			});
		});
	}
	var Fg = 2,
		Mg = 12;
	function Og(t) {
		var e = Tv(t),
			n = e.extractWeights,
			r = e.getRemainingWeights,
			o = [],
			i = (function (r, o) {
				var u = Iv(r, o),
					c = Rv(r, o);
				function l(t, e) {
					var n = Rn(r(t));
					return o.push({ paramPath: e }), n;
				}
				function h(t, e, n) {
					return (
						void 0 === n && (n = !1),
						{
							conv1: u(t[0], t[1], 3, e + '/conv1'),
							prelu1_alpha: l(t[1], e + '/prelu1_alpha'),
							conv2: u(t[1], t[2], 3, e + '/conv2'),
							prelu2_alpha: l(t[2], e + '/prelu2_alpha'),
							conv3: u(t[2], t[3], n ? 2 : 3, e + '/conv3'),
							prelu3_alpha: l(t[3], e + '/prelu3_alpha'),
						}
					);
				}
				return {
					extractPNetParams: function () {
						var t = h([3, 10, 16, 32], 'pnet'),
							e = u(32, 2, 1, 'pnet/conv4_1'),
							n = u(32, 4, 1, 'pnet/conv4_2');
						return Sf(Sf({}, t), { conv4_1: e, conv4_2: n });
					},
					extractRNetParams: function () {
						var t = h([3, 28, 48, 64], 'rnet', !0),
							e = c(576, 128, 'rnet/fc1'),
							n = l(128, 'rnet/prelu4_alpha'),
							r = c(128, 2, 'rnet/fc2_1'),
							o = c(128, 4, 'rnet/fc2_2');
						return Sf(Sf({}, t), {
							fc1: e,
							prelu4_alpha: n,
							fc2_1: r,
							fc2_2: o,
						});
					},
					extractONetParams: function () {
						var t = h([3, 32, 64, 64], 'onet'),
							e = u(64, 128, 2, 'onet/conv4'),
							n = l(128, 'onet/prelu4_alpha'),
							r = c(1152, 256, 'onet/fc1'),
							o = l(256, 'onet/prelu5_alpha'),
							i = c(256, 2, 'onet/fc2_1'),
							a = c(256, 4, 'onet/fc2_2'),
							s = c(256, 10, 'onet/fc2_3');
						return Sf(Sf({}, t), {
							conv4: e,
							prelu4_alpha: n,
							fc1: r,
							prelu5_alpha: o,
							fc2_1: i,
							fc2_2: a,
							fc2_3: s,
						});
					},
				};
			})(n, o),
			a = i.extractPNetParams,
			s = i.extractRNetParams,
			u = i.extractONetParams,
			c = a(),
			l = s(),
			h = u();
		if (0 !== r().length)
			throw new Error('weights remaing after extract: ' + r().length);
		return { params: { pnet: c, rnet: l, onet: h }, paramMappings: o };
	}
	function Pg(t) {
		var e = [],
			n = (function (t, e) {
				var n = Av(t, e);
				function u(t) {
					return {
						filters: n(t + '/weights', 4, t + '/filters'),
						bias: n(t + '/bias', 1),
					};
				}
				function c(t) {
					return { weights: n(t + '/weights', 2), bias: n(t + '/bias', 1) };
				}
				function l(t) {
					return n(t, 1);
				}
				function h(t) {
					return {
						conv1: u(t + '/conv1'),
						prelu1_alpha: l(t + '/prelu1_alpha'),
						conv2: u(t + '/conv2'),
						prelu2_alpha: l(t + '/prelu2_alpha'),
						conv3: u(t + '/conv3'),
						prelu3_alpha: l(t + '/prelu3_alpha'),
					};
				}
				return {
					extractPNetParams: function () {
						var t = h('pnet'),
							e = u('pnet/conv4_1'),
							n = u('pnet/conv4_2');
						return Sf(Sf({}, t), { conv4_1: e, conv4_2: n });
					},
					extractRNetParams: function () {
						var t = h('rnet'),
							e = c('rnet/fc1'),
							n = l('rnet/prelu4_alpha'),
							r = c('rnet/fc2_1'),
							o = c('rnet/fc2_2');
						return Sf(Sf({}, t), {
							fc1: e,
							prelu4_alpha: n,
							fc2_1: r,
							fc2_2: o,
						});
					},
					extractONetParams: function () {
						var t = h('onet'),
							e = u('onet/conv4'),
							n = l('onet/prelu4_alpha'),
							r = c('onet/fc1'),
							o = l('onet/prelu5_alpha'),
							i = c('onet/fc2_1'),
							a = c('onet/fc2_2'),
							s = c('onet/fc2_3');
						return Sf(Sf({}, t), {
							conv4: e,
							prelu4_alpha: n,
							fc1: r,
							prelu5_alpha: o,
							fc2_1: i,
							fc2_2: a,
							fc2_3: s,
						});
					},
				};
			})(t, e),
			r = n.extractPNetParams,
			o = n.extractRNetParams,
			i = n.extractONetParams,
			a = r(),
			s = o(),
			u = i();
		return (
			_v(t, e), { params: { pnet: a, rnet: s, onet: u }, paramMappings: e }
		);
	}
	function Bg(t, e) {
		var n = e[0],
			r = e[1];
		return { height: Math.floor(n * t), width: Math.floor(r * t) };
	}
	var Lg,
		Wg = (kf(zg, (Lg = $f)), zg);
	function zg(t, e, n, r) {
		return Lg.call(this, { left: t, top: e, right: n, bottom: r }, !0) || this;
	}
	function Ug(t) {
		return tn(function () {
			return qu(Ju(t, In(127.5)), In(0.0078125));
		});
	}
	function Vg(t, e) {
		return tn(function () {
			return Tu(hl(t), qu(e, Ys(hl(Ys(t)))));
		});
	}
	function Gg(e, n, r) {
		return (
			void 0 === r && (r = !1),
			tn(function () {
				var t = Ev(e, n.conv1, 'valid');
				return (
					(t = Vg(t, n.prelu1_alpha)),
					(t = Vg(
						(t = Ev(
							(t = zc(t, r ? [2, 2] : [3, 3], [2, 2], 'same')),
							n.conv2,
							'valid'
						)),
						n.prelu2_alpha
					)),
					(t = Vg(
						(t = Ev(
							(t = r ? t : zc(t, [3, 3], [2, 2], 'valid')),
							n.conv3,
							'valid'
						)),
						n.prelu3_alpha
					))
				);
			})
		);
	}
	function Hg(s, t, u, c, l) {
		l.stage1 = [];
		var e = t
				.map(function (a) {
					return tn(function () {
						var t = { scale: a },
							e = (function (o, i) {
								return tn(function () {
									var t = Bg(i, o.shape.slice(1)),
										e = t.height,
										n = t.width,
										r = Ug(ph.resizeBilinear(o, [e, n]));
									return dl(r, [0, 2, 1, 3]);
								});
							})(s, a),
							n = Date.now(),
							r = (function (r, o) {
								return tn(function () {
									var t = Gg(r, o, !0),
										e = Ev(t, o.conv4_1, 'valid'),
										n = mr(nl(e, 3), 3);
									return {
										prob: io(Ju(e, n), 3),
										regions: Ev(t, o.conv4_2, 'valid'),
									};
								});
							})(e, c),
							o = r.prob,
							i = r.regions;
						return (
							(t.pnet = Date.now() - n),
							{
								scoresTensor: Or(Or(o, 3)[1])[0],
								regionsTensor: Or(i)[0],
								scale: a,
								statsForScale: t,
							}
						);
					});
				})
				.map(function (t) {
					var e = t.scoresTensor,
						n = t.regionsTensor,
						r = t.scale,
						o = t.statsForScale,
						i = (function (t, o, i, e) {
							for (var n = [], a = t.arraySync(), r = 0; r < t.shape[0]; r++)
								for (var s = 0; s < t.shape[1]; s++)
									a[r][s] >= e && n.push(new Xf(s, r));
							return n.map(function (t) {
								var e = new Zf(
										Math.round((t.y * Fg + 1) / i),
										Math.round((t.x * Fg + 1) / i),
										Math.round((t.y * Fg + Mg) / i),
										Math.round((t.x * Fg + Mg) / i)
									),
									n = a[t.y][t.x],
									r = o.arraySync();
								return {
									cell: e,
									score: n,
									region: new Wg(
										r[t.y][t.x][0],
										r[t.y][t.x][1],
										r[t.y][t.x][2],
										r[t.y][t.x][3]
									),
								};
							});
						})(e, n, r, u);
					if ((e.dispose(), n.dispose(), !i.length))
						return l.stage1.push(o), [];
					var a = Date.now(),
						s = ud(
							i.map(function (t) {
								return t.cell;
							}),
							i.map(function (t) {
								return t.score;
							}),
							0.5
						);
					return (
						(o.nms = Date.now() - a),
						(o.numBoxes = s.length),
						l.stage1.push(o),
						s.map(function (t) {
							return i[t];
						})
					);
				})
				.reduce(function (t, e) {
					return t.concat(e);
				}, []),
			n = [],
			r = [];
		if (0 < e.length) {
			var o = Date.now(),
				i = ud(
					e.map(function (t) {
						return t.cell;
					}),
					e.map(function (t) {
						return t.score;
					}),
					0.7
				);
			(l.stage1_nms = Date.now() - o),
				(r = i.map(function (t) {
					return e[t].score;
				})),
				(n = i
					.map(function (t) {
						return e[t];
					})
					.map(function (t) {
						var e = t.cell,
							n = t.region;
						return new Zf(
							e.left + n.left * e.width,
							e.top + n.top * e.height,
							e.right + n.right * e.width,
							e.bottom + n.bottom * e.height
						)
							.toSquare()
							.round();
					}));
		}
		return { boxes: n, scores: r };
	}
	function qg(h, r, t) {
		var a = t.width,
			s = t.height;
		return Df(this, void 0, void 0, function () {
			var l,
				e,
				i,
				n = this;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							(l = Kd(h)),
							[
								4,
								Promise.all(
									r.map(function (c) {
										return Df(n, void 0, void 0, function () {
											var e, n, r, o, i, a, s, u;
											return Af(this, function (t) {
												return (
													(e = c.padAtBorders(h.height, h.width)),
													(n = e.y),
													(r = e.ey),
													(o = e.x),
													(i = e.ex),
													(a = o - 1),
													(s = n - 1),
													(u = l.getImageData(a, s, i - a, r - s)),
													[2, qd.isNodejs() ? iv(u) : createImageBitmap(u)]
												);
											});
										});
									})
								),
							]
						);
					case 1:
						return (
							(e = t.sent()),
							(i = []),
							e.forEach(function (t) {
								var e = Kd(ov({ width: a, height: s }));
								e.drawImage(t, 0, 0, a, s);
								for (
									var n = e.getImageData(0, 0, a, s).data, r = [], o = 0;
									o < n.length;
									o += 4
								)
									r.push(n[o + 2]), r.push(n[o + 1]), r.push(n[o]);
								i.push(r);
							}),
							[
								2,
								i.map(function (t) {
									return tn(function () {
										return Ug(dl(Dn(t, [1, a, s, 3]), [0, 2, 1, 3]).toFloat());
									});
								}),
							]
						);
				}
			});
		});
	}
	function jg(v, m, g, y, x) {
		return Df(this, void 0, void 0, function () {
			var e, n, r, o, i, a, s, u, c, l, h, p, f, d;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (e = Date.now()), [4, qg(v, m, { width: 24, height: 24 })];
					case 1:
						return (
							(n = t.sent()),
							(x.stage2_extractImagePatches = Date.now() - e),
							(e = Date.now()),
							(r = n.map(function (t) {
								var e = (function (a, s) {
									return tn(function () {
										var t = Gg(a, s),
											e = Vg(
												Lv(Dr(t, [t.shape[0], s.fc1.weights.shape[0]]), s.fc1),
												s.prelu4_alpha
											),
											n = Lv(e, s.fc2_1),
											r = mr(nl(n, 1), 1),
											o = io(Ju(n, r), 1),
											i = Lv(e, s.fc2_2);
										return { scores: Or(o, 1)[1], regions: i };
									});
								})(t, y);
								return t.dispose(), e;
							})),
							(x.stage2_rnet = Date.now() - e),
							(o =
								1 < r.length
									? zn(
											r.map(function (t) {
												return t.scores;
											})
									  )
									: r[0].scores),
							(s = (a = Array).from),
							[4, o.data()]
						);
					case 2:
						return (
							(i = s.apply(a, [t.sent()])),
							o.dispose(),
							(u = i
								.map(function (t, e) {
									return { score: t, idx: e };
								})
								.filter(function (t) {
									return t.score > g;
								})
								.map(function (t) {
									return t.idx;
								})),
							(c = u.map(function (t) {
								return m[t];
							})),
							(l = u.map(function (t) {
								return i[t];
							})),
							(h = []),
							(p = []),
							0 < c.length &&
								((e = Date.now()),
								(f = ud(c, l, 0.7)),
								(x.stage2_nms = Date.now() - e),
								(d = f.map(function (t) {
									var e = r[u[t]].regions.arraySync();
									return new Wg(e[0][0], e[0][1], e[0][2], e[0][3]);
								})),
								(p = f.map(function (t) {
									return l[t];
								})),
								(h = f.map(function (t, e) {
									return c[t].calibrate(d[e]);
								}))),
							r.forEach(function (t) {
								t.regions.dispose(), t.scores.dispose();
							}),
							[2, { boxes: h, scores: p }]
						);
				}
			});
		});
	}
	function Kg(m, g, y, x, b) {
		return Df(this, void 0, void 0, function () {
			var e, n, i, r, o, a, s, u, c, l, h, p, f, d, v;
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (e = Date.now()), [4, qg(m, g, { width: 48, height: 48 })];
					case 1:
						return (
							(n = t.sent()),
							(b.stage3_extractImagePatches = Date.now() - e),
							(e = Date.now()),
							(i = n.map(function (t) {
								var e = (function (s, u) {
									return tn(function () {
										var t = Gg(s, u);
										t = Vg(
											(t = Ev(
												(t = zc(t, [2, 2], [2, 2], 'same')),
												u.conv4,
												'valid'
											)),
											u.prelu4_alpha
										);
										var e = Vg(
												Lv(Dr(t, [t.shape[0], u.fc1.weights.shape[0]]), u.fc1),
												u.prelu5_alpha
											),
											n = Lv(e, u.fc2_1),
											r = mr(nl(n, 1), 1),
											o = io(Ju(n, r), 1),
											i = Lv(e, u.fc2_2),
											a = Lv(e, u.fc2_3);
										return { scores: Or(o, 1)[1], regions: i, points: a };
									});
								})(t, x);
								return t.dispose(), e;
							})),
							(b.stage3_onet = Date.now() - e),
							(r =
								1 < i.length
									? zn(
											i.map(function (t) {
												return t.scores;
											})
									  )
									: i[0].scores),
							(s = (a = Array).from),
							[4, r.data()]
						);
					case 2:
						return (
							(o = s.apply(a, [t.sent()])),
							r.dispose(),
							(u = o
								.map(function (t, e) {
									return { score: t, idx: e };
								})
								.filter(function (t) {
									return t.score > y;
								})
								.map(function (t) {
									return t.idx;
								})),
							(c = u.map(function (t) {
								var e = i[t].regions.arraySync();
								return new Wg(e[0][0], e[0][1], e[0][2], e[0][3]);
							})),
							(l = u.map(function (t, e) {
								return g[t].calibrate(c[e]);
							})),
							(h = u.map(function (t) {
								return o[t];
							})),
							(p = []),
							(f = []),
							(d = []),
							0 < l.length &&
								((e = Date.now()),
								(v = ud(l, h, 0.7, !1)),
								(b.stage3_nms = Date.now() - e),
								(p = v.map(function (t) {
									return l[t];
								})),
								(f = v.map(function (t) {
									return h[t];
								})),
								(d = v.map(function (r, o) {
									return Array(5)
										.fill(0)
										.map(function (t, e) {
											var n = i[r].points.arraySync();
											return new Xf(
												n[0][e] * (p[o].width + 1) + p[o].left,
												n[0][e + 5] * (p[o].height + 1) + p[o].top
											);
										});
								}))),
							i.forEach(function (t) {
								t.regions.dispose(), t.scores.dispose(), t.points.dispose();
							}),
							[2, { boxes: p, scores: f, points: d }]
						);
				}
			});
		});
	}
	var Xg,
		Yg =
			(kf($g, (Xg = yv)),
			($g.prototype.load = function (e) {
				return Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						return (
							console.warn('mtcnn is deprecated and will be removed soon'),
							[2, Xg.prototype.load.call(this, e)]
						);
					});
				});
			}),
			($g.prototype.loadFromDisk = function (e) {
				return Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						return (
							console.warn('mtcnn is deprecated and will be removed soon'),
							[2, Xg.prototype.loadFromDisk.call(this, e)]
						);
					});
				});
			}),
			($g.prototype.forwardInput = function (C, E) {
				return (
					void 0 === E && (E = {}),
					Df(this, void 0, void 0, function () {
						var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, b, w;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									if (!(e = this.params))
										throw new Error('Mtcnn - load model before inference');
									if (!(n = C.canvases[0]))
										throw new Error(
											'Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.'
										);
									return (
										(r = {}),
										(o = Date.now()),
										(i = tn(function () {
											return (function (t) {
												return tn(function () {
													return Nr(Or(t, 3).reverse(), 3);
												});
											})(mr(Bp.fromPixels(n)).toFloat());
										})),
										(a = function (t) {
											return i.dispose(), (r.total = Date.now() - o), t;
										}),
										(s = i.shape.slice(1)),
										(u = s[0]),
										(c = s[1]),
										(l = new Vm(E)),
										(h = l.minFaceSize),
										(p = l.scaleFactor),
										(f = l.maxNumScales),
										(d = l.scoreThresholds),
										(v = l.scaleSteps),
										(m = (
											v ||
											(function (t, e, n) {
												for (
													var r = n[0],
														o = n[1],
														i = Mg / t,
														a = [],
														s = Math.min(r, o) * i,
														u = 0;
													12 <= s;

												)
													a.push(i * Math.pow(e, u)), (s *= e), (u += 1);
												return a;
											})(h, p, [u, c])
										)
											.filter(function (t) {
												var e = Bg(t, [u, c]);
												return Math.min(e.width, e.height) > Mg;
											})
											.slice(0, f)),
										(r.scales = m),
										(r.pyramid = m.map(function (t) {
											return Bg(t, [u, c]);
										})),
										(g = Date.now()),
										[4, Hg(i, m, d[0], e.pnet, r)]
									);
								case 1:
									return (
										(y = t.sent()),
										(r.total_stage1 = Date.now() - g),
										y.boxes.length
											? ((r.stage2_numInputBoxes = y.boxes.length),
											  (g = Date.now()),
											  [4, jg(n, y.boxes, d[1], e.rnet, r)])
											: [2, a({ results: [], stats: r })]
									);
								case 2:
									return (
										(x = t.sent()),
										(r.total_stage2 = Date.now() - g),
										x.boxes.length
											? ((r.stage3_numInputBoxes = x.boxes.length),
											  (g = Date.now()),
											  [4, Kg(n, x.boxes, d[2], e.onet, r)])
											: [2, a({ results: [], stats: r })]
									);
								case 3:
									return (
										(b = t.sent()),
										(r.total_stage3 = Date.now() - g),
										(w = b.boxes.map(function (e, t) {
											return Qv(
												Od(
													{},
													new od(
														b.scores[t],
														new fd(
															e.left / c,
															e.top / u,
															e.width / c,
															e.height / u
														),
														{ height: u, width: c }
													)
												),
												new yd(
													b.points[t].map(function (t) {
														return t
															.sub(new Xf(e.left, e.top))
															.div(new Xf(e.width, e.height));
													}),
													{ width: e.width, height: e.height }
												)
											);
										})),
										[2, a({ results: w, stats: r })]
									);
							}
						});
					})
				);
			}),
			($g.prototype.forward = function (n, r) {
				return (
					void 0 === r && (r = {}),
					Df(this, void 0, void 0, function () {
						var e;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return (e = this.forwardInput), [4, hv(n)];
								case 1:
									return [4, e.apply(this, [t.sent(), r])];
								case 2:
									return [2, t.sent().results];
							}
						});
					})
				);
			}),
			($g.prototype.forwardWithStats = function (n, r) {
				return (
					void 0 === r && (r = {}),
					Df(this, void 0, void 0, function () {
						var e;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return (e = this.forwardInput), [4, hv(n)];
								case 1:
									return [2, e.apply(this, [t.sent(), r])];
							}
						});
					})
				);
			}),
			($g.prototype.getDefaultModelName = function () {
				return 'mtcnn_model';
			}),
			($g.prototype.extractParamsFromWeigthMap = function (t) {
				return Pg(t);
			}),
			($g.prototype.extractParams = function (t) {
				return Og(t);
			}),
			$g);
	function $g() {
		return Xg.call(this, 'Mtcnn') || this;
	}
	var Jg,
		Qg = [
			new Xf(1.603231, 2.094468),
			new Xf(6.041143, 7.080126),
			new Xf(2.882459, 3.518061),
			new Xf(4.266906, 5.178857),
			new Xf(9.041765, 10.66308),
		],
		Zg = [117.001, 114.697, 97.404],
		ty =
			(kf(ey, (Jg = wg)),
			Object.defineProperty(ey.prototype, 'anchors', {
				get: function () {
					return this.config.anchors;
				},
				enumerable: !0,
				configurable: !0,
			}),
			(ey.prototype.locateFaces = function (e, n) {
				return Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.detect(e, n)];
							case 1:
								return [
									2,
									t.sent().map(function (t) {
										return new od(t.score, t.relativeBox, {
											width: t.imageWidth,
											height: t.imageHeight,
										});
									}),
								];
						}
					});
				});
			}),
			(ey.prototype.getDefaultModelName = function () {
				return 'tiny_face_detector_model';
			}),
			(ey.prototype.extractParamsFromWeigthMap = function (t) {
				return Jg.prototype.extractParamsFromWeigthMap.call(this, t);
			}),
			ey);
	function ey() {
		var t = {
			withSeparableConvs: !0,
			iouThreshold: 0.4,
			classes: ['face'],
			anchors: Qg,
			meanRgb: Zg,
			isFirstLayerConv2d: !0,
			filterSizes: [3, 16, 32, 64, 128, 256, 512],
		};
		return Jg.call(this, t) || this;
	}
	function ny(t, e) {
		return ay.ssdMobilenetv1.locateFaces(t, e);
	}
	function ry(t) {
		return ay.faceLandmark68Net.detectLandmarks(t);
	}
	function oy(t) {
		return ay.ssdMobilenetv1.load(t);
	}
	var iy,
		ay = {
			ssdMobilenetv1: new eg(),
			tinyFaceDetector: new ty(),
			tinyYolov2: new _g(),
			mtcnn: new Yg(),
			faceLandmark68Net: new ym(),
			faceLandmark68TinyNet: new _m(),
			faceRecognitionNet: new Bm(),
			faceExpressionNet: new Kv(),
			ageGenderNet: new pm(),
		},
		sy = oy,
		uy = ny,
		cy = ry,
		ly = (kf(hy, (iy = Dg)), hy);
	function hy(t, e, n) {
		var r = iy.call(this) || this;
		return (r.parentTask = t), (r.input = e), (r.extractedFaces = n), r;
	}
	var py,
		fy =
			(kf(dy, (py = ly)),
			(dy.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return [
									4,
									Tg(
										(e = t.sent()),
										this.input,
										function (e) {
											return Df(r, void 0, void 0, function () {
												return Af(this, function (t) {
													switch (t.label) {
														case 0:
															return [
																4,
																Promise.all(
																	e.map(function (t) {
																		return ay.faceExpressionNet.predictExpressions(
																			t
																		);
																	})
																),
															];
														case 1:
															return [2, t.sent()];
													}
												});
											});
										},
										this.extractedFaces
									),
								];
							case 2:
								return (
									(n = t.sent()),
									[
										2,
										e.map(function (t, e) {
											return $v(t, n[e]);
										}),
									]
								);
						}
					});
				});
			}),
			(dy.prototype.withAgeAndGender = function () {
				return new Sy(this, this.input);
			}),
			dy);
	function dy() {
		return (null !== py && py.apply(this, arguments)) || this;
	}
	var vy,
		my =
			(kf(gy, (vy = ly)),
			(gy.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent())
									? [
											4,
											Ng(
												e,
												this.input,
												function (t) {
													return ay.faceExpressionNet.predictExpressions(t);
												},
												this.extractedFaces
											),
									  ]
									: [2];
							case 2:
								return (n = t.sent()), [2, $v(e, n)];
						}
					});
				});
			}),
			(gy.prototype.withAgeAndGender = function () {
				return new Ty(this, this.input);
			}),
			gy);
	function gy() {
		return (null !== vy && vy.apply(this, arguments)) || this;
	}
	var yy,
		xy =
			(kf(by, (yy = fy)),
			(by.prototype.withAgeAndGender = function () {
				return new My(this, this.input);
			}),
			(by.prototype.withFaceDescriptors = function () {
				return new Gy(this, this.input);
			}),
			by);
	function by() {
		return (null !== yy && yy.apply(this, arguments)) || this;
	}
	var wy,
		Cy =
			(kf(Ey, (wy = my)),
			(Ey.prototype.withAgeAndGender = function () {
				return new By(this, this.input);
			}),
			(Ey.prototype.withFaceDescriptor = function () {
				return new jy(this, this.input);
			}),
			Ey);
	function Ey() {
		return (null !== wy && wy.apply(this, arguments)) || this;
	}
	var _y,
		Iy = (kf(Ry, (_y = Dg)), Ry);
	function Ry(t, e, n) {
		var r = _y.call(this) || this;
		return (r.parentTask = t), (r.input = e), (r.extractedFaces = n), r;
	}
	var ky,
		Sy =
			(kf(Dy, (ky = Iy)),
			(Dy.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e,
						o,
						n = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return [
									4,
									Tg(
										(e = t.sent()),
										this.input,
										function (e) {
											return Df(n, void 0, void 0, function () {
												return Af(this, function (t) {
													switch (t.label) {
														case 0:
															return [
																4,
																Promise.all(
																	e.map(function (t) {
																		return ay.ageGenderNet.predictAgeAndGender(
																			t
																		);
																	})
																),
															];
														case 1:
															return [2, t.sent()];
													}
												});
											});
										},
										this.extractedFaces
									),
								];
							case 2:
								return (
									(o = t.sent()),
									[
										2,
										e.map(function (t, e) {
											var n = o[e],
												r = n.age;
											return zm(Um(t, n.gender, n.genderProbability), r);
										}),
									]
								);
						}
					});
				});
			}),
			(Dy.prototype.withFaceExpressions = function () {
				return new fy(this, this.input);
			}),
			Dy);
	function Dy() {
		return (null !== ky && ky.apply(this, arguments)) || this;
	}
	var Ay,
		Ty =
			(kf(Ny, (Ay = Iy)),
			(Ny.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n, r, o, i;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent())
									? [
											4,
											Ng(
												e,
												this.input,
												function (t) {
													return ay.ageGenderNet.predictAgeAndGender(t);
												},
												this.extractedFaces
											),
									  ]
									: [2];
							case 2:
								return (
									(n = t.sent()),
									(r = n.age),
									(o = n.gender),
									(i = n.genderProbability),
									[2, zm(Um(e, o, i), r)]
								);
						}
					});
				});
			}),
			(Ny.prototype.withFaceExpressions = function () {
				return new my(this, this.input);
			}),
			Ny);
	function Ny() {
		return (null !== Ay && Ay.apply(this, arguments)) || this;
	}
	var Fy,
		My =
			(kf(Oy, (Fy = Sy)),
			(Oy.prototype.withFaceExpressions = function () {
				return new xy(this, this.input);
			}),
			(Oy.prototype.withFaceDescriptors = function () {
				return new Gy(this, this.input);
			}),
			Oy);
	function Oy() {
		return (null !== Fy && Fy.apply(this, arguments)) || this;
	}
	var Py,
		By =
			(kf(Ly, (Py = Ty)),
			(Ly.prototype.withFaceExpressions = function () {
				return new Cy(this, this.input);
			}),
			(Ly.prototype.withFaceDescriptor = function () {
				return new jy(this, this.input);
			}),
			Ly);
	function Ly() {
		return (null !== Py && Py.apply(this, arguments)) || this;
	}
	var Wy,
		zy = (kf(Uy, (Wy = Dg)), Uy);
	function Uy(t, e) {
		var n = Wy.call(this) || this;
		return (n.parentTask = t), (n.input = e), n;
	}
	var Vy,
		Gy =
			(kf(Hy, (Vy = zy)),
			(Hy.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var n;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return [
									4,
									Tg(
										(n = t.sent()),
										this.input,
										function (t) {
											return Promise.all(
												t.map(function (t) {
													return ay.faceRecognitionNet.computeFaceDescriptor(t);
												})
											);
										},
										null,
										function (t) {
											return t.landmarks.align(null, { useDlibAlignment: !0 });
										}
									),
								];
							case 2:
								return [
									2,
									t.sent().map(function (t, e) {
										return Wm(n[e], t);
									}),
								];
						}
					});
				});
			}),
			(Hy.prototype.withFaceExpressions = function () {
				return new xy(this, this.input);
			}),
			(Hy.prototype.withAgeAndGender = function () {
				return new My(this, this.input);
			}),
			Hy);
	function Hy() {
		return (null !== Vy && Vy.apply(this, arguments)) || this;
	}
	var qy,
		jy =
			(kf(Ky, (qy = zy)),
			(Ky.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent())
									? [
											4,
											Ng(
												e,
												this.input,
												function (t) {
													return ay.faceRecognitionNet.computeFaceDescriptor(t);
												},
												null,
												function (t) {
													return t.landmarks.align(null, {
														useDlibAlignment: !0,
													});
												}
											),
									  ]
									: [2];
							case 2:
								return (n = t.sent()), [2, Wm(e, n)];
						}
					});
				});
			}),
			(Ky.prototype.withFaceExpressions = function () {
				return new Cy(this, this.input);
			}),
			(Ky.prototype.withAgeAndGender = function () {
				return new By(this, this.input);
			}),
			Ky);
	function Ky() {
		return (null !== qy && qy.apply(this, arguments)) || this;
	}
	var Xy,
		Yy =
			(kf($y, (Xy = Dg)),
			Object.defineProperty($y.prototype, 'landmarkNet', {
				get: function () {
					return this.useTinyLandmarkNet
						? ay.faceLandmark68TinyNet
						: ay.faceLandmark68Net;
				},
				enumerable: !0,
				configurable: !0,
			}),
			$y);
	function $y(t, e, n) {
		var r = Xy.call(this) || this;
		return (r.parentTask = t), (r.input = e), (r.useTinyLandmarkNet = n), r;
	}
	var Jy,
		Qy =
			(kf(Zy, (Jy = Yy)),
			(Zy.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e,
						n,
						r,
						o,
						i,
						a = this;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (
									(e = t.sent()),
									(n = e.map(function (t) {
										return t.detection;
									})),
									this.input instanceof yt ? [4, fv(this.input, n)] : [3, 3]
								);
							case 2:
								return (o = t.sent()), [3, 5];
							case 3:
								return [4, pv(this.input, n)];
							case 4:
								(o = t.sent()), (t.label = 5);
							case 5:
								return (
									(r = o),
									[
										4,
										Promise.all(
											r.map(function (t) {
												return a.landmarkNet.detectLandmarks(t);
											})
										),
									]
								);
							case 6:
								return (
									(i = t.sent()),
									r.forEach(function (t) {
										return t instanceof yt && t.dispose();
									}),
									[
										2,
										e.map(function (t, e) {
											return Qv(t, i[e]);
										}),
									]
								);
						}
					});
				});
			}),
			(Zy.prototype.withFaceExpressions = function () {
				return new xy(this, this.input);
			}),
			(Zy.prototype.withAgeAndGender = function () {
				return new My(this, this.input);
			}),
			(Zy.prototype.withFaceDescriptors = function () {
				return new Gy(this, this.input);
			}),
			Zy);
	function Zy() {
		return (null !== Jy && Jy.apply(this, arguments)) || this;
	}
	var tx,
		ex =
			(kf(nx, (tx = Yy)),
			(nx.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n, r, o, i;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, this.parentTask];
							case 1:
								return (e = t.sent())
									? ((n = e.detection),
									  this.input instanceof yt
											? [4, fv(this.input, [n])]
											: [3, 3])
									: [2];
							case 2:
								return (o = t.sent()), [3, 5];
							case 3:
								return [4, pv(this.input, [n])];
							case 4:
								(o = t.sent()), (t.label = 5);
							case 5:
								return (r = o), [4, this.landmarkNet.detectLandmarks(r[0])];
							case 6:
								return (
									(i = t.sent()),
									r.forEach(function (t) {
										return t instanceof yt && t.dispose();
									}),
									[2, Qv(e, i)]
								);
						}
					});
				});
			}),
			(nx.prototype.withFaceExpressions = function () {
				return new Cy(this, this.input);
			}),
			(nx.prototype.withAgeAndGender = function () {
				return new By(this, this.input);
			}),
			(nx.prototype.withFaceDescriptor = function () {
				return new jy(this, this.input);
			}),
			nx);
	function nx() {
		return (null !== tx && tx.apply(this, arguments)) || this;
	}
	var rx,
		ox = (kf(ix, (rx = Dg)), ix);
	function ix(t, e) {
		void 0 === e && (e = new Qm());
		var n = rx.call(this) || this;
		return (n.input = t), (n.options = e), n;
	}
	var ax,
		sx =
			(kf(ux, (ax = ox)),
			(ux.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n, r, o;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									(n = (e = this).input),
									(r = e.options) instanceof Vm
										? [4, ay.mtcnn.forward(n, r)]
										: [3, 2]
								);
							case 1:
								return [
									2,
									t.sent().map(function (t) {
										return t.detection;
									}),
								];
							case 2:
								if (
									!(o =
										r instanceof kg
											? function (t) {
													return ay.tinyFaceDetector.locateFaces(t, r);
											  }
											: r instanceof Qm
											? function (t) {
													return ay.ssdMobilenetv1.locateFaces(t, r);
											  }
											: r instanceof yg
											? function (t) {
													return ay.tinyYolov2.locateFaces(t, r);
											  }
											: null)
								)
									throw new Error(
										'detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options'
									);
								return [2, o(n)];
						}
					});
				});
			}),
			(ux.prototype.runAndExtendWithFaceDetections = function () {
				var t = this;
				return new Promise(function (n) {
					return Df(t, void 0, void 0, function () {
						var e;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return [4, this.run()];
								case 1:
									return (
										(e = t.sent()),
										[
											2,
											n(
												e.map(function (t) {
													return Od({}, t);
												})
											),
										]
									);
							}
						});
					});
				});
			}),
			(ux.prototype.withFaceLandmarks = function (t) {
				return (
					void 0 === t && (t = !1),
					new Qy(this.runAndExtendWithFaceDetections(), this.input, t)
				);
			}),
			(ux.prototype.withFaceExpressions = function () {
				return new fy(this.runAndExtendWithFaceDetections(), this.input);
			}),
			(ux.prototype.withAgeAndGender = function () {
				return new Sy(this.runAndExtendWithFaceDetections(), this.input);
			}),
			ux);
	function ux() {
		return (null !== ax && ax.apply(this, arguments)) || this;
	}
	var cx,
		lx =
			(kf(hx, (cx = ox)),
			(hx.prototype.run = function () {
				return Df(this, void 0, void 0, function () {
					var e, n;
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return [4, new sx(this.input, this.options)];
							case 1:
								return (
									(e = t.sent()),
									(n = e[0]),
									e.forEach(function (t) {
										t.score > n.score && (n = t);
									}),
									[2, n]
								);
						}
					});
				});
			}),
			(hx.prototype.runAndExtendWithFaceDetection = function () {
				var t = this;
				return new Promise(function (n) {
					return Df(t, void 0, void 0, function () {
						var e;
						return Af(this, function (t) {
							switch (t.label) {
								case 0:
									return [4, this.run()];
								case 1:
									return (e = t.sent()), [2, n(e ? Od({}, e) : void 0)];
							}
						});
					});
				});
			}),
			(hx.prototype.withFaceLandmarks = function (t) {
				return (
					void 0 === t && (t = !1),
					new ex(this.runAndExtendWithFaceDetection(), this.input, t)
				);
			}),
			(hx.prototype.withFaceExpressions = function () {
				return new my(this.runAndExtendWithFaceDetection(), this.input);
			}),
			(hx.prototype.withAgeAndGender = function () {
				return new Ty(this.runAndExtendWithFaceDetection(), this.input);
			}),
			hx);
	function hx() {
		return (null !== cx && cx.apply(this, arguments)) || this;
	}
	function px(t, e) {
		return void 0 === e && (e = new Qm()), new sx(t, e);
	}
	function fx(e, n) {
		return Df(this, void 0, void 0, function () {
			return Af(this, function (t) {
				switch (t.label) {
					case 0:
						return (
							console.warn(
								'allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead'
							),
							[
								4,
								px(e, new Qm(n ? { minConfidence: n } : {}))
									.withFaceLandmarks()
									.withFaceDescriptors(),
							]
						);
					case 1:
						return [2, t.sent()];
				}
			});
		});
	}
	var dx = fx;
	function vx(t, e) {
		if (t.length !== e.length)
			throw new Error('euclideanDistance: arr1.length !== arr2.length');
		var n = Array.from(t),
			r = Array.from(e);
		return Math.sqrt(
			n
				.map(function (t, e) {
					return t - r[e];
				})
				.reduce(function (t, e) {
					return t + Math.pow(e, 2);
				}, 0)
		);
	}
	var mx =
		(Object.defineProperty(gx.prototype, 'labeledDescriptors', {
			get: function () {
				return this._labeledDescriptors;
			},
			enumerable: !0,
			configurable: !0,
		}),
		Object.defineProperty(gx.prototype, 'distanceThreshold', {
			get: function () {
				return this._distanceThreshold;
			},
			enumerable: !0,
			configurable: !0,
		}),
		(gx.prototype.computeMeanDistance = function (e, t) {
			return (
				t
					.map(function (t) {
						return vx(t, e);
					})
					.reduce(function (t, e) {
						return t + e;
					}, 0) / (t.length || 1)
			);
		}),
		(gx.prototype.matchDescriptor = function (r) {
			var o = this;
			return this.labeledDescriptors
				.map(function (t) {
					var e = t.descriptors,
						n = t.label;
					return new Ed(n, o.computeMeanDistance(r, e));
				})
				.reduce(function (t, e) {
					return t.distance < e.distance ? t : e;
				});
		}),
		(gx.prototype.findBestMatch = function (t) {
			var e = this.matchDescriptor(t);
			return e.distance < this.distanceThreshold
				? e
				: new Ed('unknown', e.distance);
		}),
		(gx.prototype.toJSON = function () {
			return {
				distanceThreshold: this.distanceThreshold,
				labeledDescriptors: this.labeledDescriptors.map(function (t) {
					return t.toJSON();
				}),
			};
		}),
		(gx.fromJSON = function (t) {
			return new gx(
				t.labeledDescriptors.map(function (t) {
					return Sd.fromJSON(t);
				}),
				t.distanceThreshold
			);
		}),
		gx);
	function gx(t, e) {
		void 0 === e && (e = 0.6), (this._distanceThreshold = e);
		var n = Array.isArray(t) ? t : [t];
		if (!n.length)
			throw new Error(
				'FaceRecognizer.constructor - expected atleast one input'
			);
		function r() {
			return 'person ' + o++;
		}
		var o = 1;
		this._labeledDescriptors = n.map(function (t) {
			if (t instanceof Sd) return t;
			if (t instanceof Float32Array) return new Sd(r(), [t]);
			if (t.descriptor && t.descriptor instanceof Float32Array)
				return new Sd(r(), [t.descriptor]);
			throw new Error(
				'FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>'
			);
		});
	}
	(c.AgeGenderNet = pm),
		(c.BoundingBox = Zf),
		(c.Box = $f),
		(c.ComposableTask = Dg),
		(c.ComputeAllFaceDescriptorsTask = Gy),
		(c.ComputeFaceDescriptorsTaskBase = zy),
		(c.ComputeSingleFaceDescriptorTask = jy),
		(c.DetectAllFaceLandmarksTask = Qy),
		(c.DetectAllFacesTask = sx),
		(c.DetectFaceLandmarksTaskBase = Yy),
		(c.DetectFacesTaskBase = ox),
		(c.DetectSingleFaceLandmarksTask = ex),
		(c.DetectSingleFaceTask = lx),
		(c.Dimensions = Nf),
		(c.FACE_EXPRESSION_LABELS = Gv),
		(c.FaceDetection = od),
		(c.FaceDetectionNet = ig),
		(c.FaceExpressionNet = Kv),
		(c.FaceExpressions = Hv),
		(c.FaceLandmark68Net = ym),
		(c.FaceLandmark68TinyNet = _m),
		(c.FaceLandmarkNet = km),
		(c.FaceLandmarks = vd),
		(c.FaceLandmarks5 = yd),
		(c.FaceLandmarks68 = wd),
		(c.FaceMatch = Ed),
		(c.FaceMatcher = mx),
		(c.FaceRecognitionNet = Bm),
		(c.LabeledBox = Rd),
		(c.LabeledFaceDescriptors = Sd),
		(c.Mtcnn = Yg),
		(c.MtcnnOptions = Vm),
		(c.NetInput = cv),
		(c.NeuralNetwork = yv),
		(c.ObjectDetection = ed),
		(c.Point = Xf),
		(c.PredictedBox = Nd),
		(c.Rect = fd),
		(c.SsdMobilenetv1 = eg),
		(c.SsdMobilenetv1Options = Qm),
		(c.TinyFaceDetector = ty),
		(c.TinyFaceDetectorOptions = kg),
		(c.TinyYolov2 = _g),
		(c.TinyYolov2Options = yg),
		(c.allFaces = dx),
		(c.allFacesMtcnn = function (e, n) {
			return (
				void 0 === n && (n = {}),
				Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									console.warn(
										'allFacesMtcnn is deprecated and will be removed soon, use the high level api instead'
									),
									[
										4,
										px(e, new Vm(n)).withFaceLandmarks().withFaceDescriptors(),
									]
								);
							case 1:
								return [2, t.sent()];
						}
					});
				})
			);
		}),
		(c.allFacesSsdMobilenetv1 = fx),
		(c.allFacesTinyYolov2 = function (e, n) {
			return (
				void 0 === n && (n = {}),
				Df(this, void 0, void 0, function () {
					return Af(this, function (t) {
						switch (t.label) {
							case 0:
								return (
									console.warn(
										'allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead'
									),
									[
										4,
										px(e, new yg(n)).withFaceLandmarks().withFaceDescriptors(),
									]
								);
							case 1:
								return [2, t.sent()];
						}
					});
				})
			);
		}),
		(c.awaitMediaLoaded = ev),
		(c.bufferToImage = nv),
		(c.computeFaceDescriptor = function (t) {
			return ay.faceRecognitionNet.computeFaceDescriptor(t);
		}),
		(c.createCanvas = ov),
		(c.createCanvasFromMedia = iv),
		(c.createFaceDetectionNet = function (t) {
			return rg(t);
		}),
		(c.createFaceRecognitionNet = function (t) {
			var e = new Bm();
			return e.extractWeights(t), e;
		}),
		(c.createMtcnn = function (t) {
			var e = new Yg();
			return e.extractWeights(t), e;
		}),
		(c.createSsdMobilenetv1 = rg),
		(c.createTinyFaceDetector = function (t) {
			var e = new ty();
			return e.extractWeights(t), e;
		}),
		(c.createTinyYolov2 = function (t, e) {
			void 0 === e && (e = !0);
			var n = new _g(e);
			return n.extractWeights(t), n;
		}),
		(c.detectAllFaces = px),
		(c.detectFaceLandmarks = ry),
		(c.detectFaceLandmarksTiny = function (t) {
			return ay.faceLandmark68TinyNet.detectLandmarks(t);
		}),
		(c.detectLandmarks = cy),
		(c.detectSingleFace = function (t, e) {
			return void 0 === e && (e = new Qm()), new lx(t, e);
		}),
		(c.draw = nm),
		(c.env = qd),
		(c.euclideanDistance = vx),
		(c.extendWithAge = zm),
		(c.extendWithFaceDescriptor = Wm),
		(c.extendWithFaceDetection = Od),
		(c.extendWithFaceExpressions = $v),
		(c.extendWithFaceLandmarks = Qv),
		(c.extendWithGender = Um),
		(c.extractFaceTensors = fv),
		(c.extractFaces = pv),
		(c.fetchImage = function (r) {
			return Df(this, void 0, void 0, function () {
				var e, n;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							return [4, dv(r)];
						case 1:
							return [4, (e = t.sent()).blob()];
						case 2:
							if (!(n = t.sent()).type.startsWith('image/'))
								throw new Error(
									'fetchImage - expected blob type to be of type image/*, instead have: ' +
										n.type +
										', for url: ' +
										e.url
								);
							return [2, nv(n)];
					}
				});
			});
		}),
		(c.fetchJson = vv),
		(c.fetchNetWeights = function (n) {
			return Df(this, void 0, void 0, function () {
				var e;
				return Af(this, function (t) {
					switch (t.label) {
						case 0:
							return (e = Float32Array.bind), [4, dv(n)];
						case 1:
							return [4, t.sent().arrayBuffer()];
						case 2:
							return [2, new (e.apply(Float32Array, [void 0, t.sent()]))()];
					}
				});
			});
		}),
		(c.fetchOrThrow = dv),
		(c.getContext2dOrThrow = Kd),
		(c.getMediaDimensions = rv),
		(c.imageTensorToCanvas = av),
		(c.imageToSquare = uv),
		(c.inverseSigmoid = function (t) {
			return Math.log(t / (1 - t));
		}),
		(c.iou = ad),
		(c.isMediaElement = sv),
		(c.isMediaLoaded = tv),
		(c.isWithAge = function (t) {
			return 'number' == typeof t.age;
		}),
		(c.isWithFaceDetection = Md),
		(c.isWithFaceExpressions = Yv),
		(c.isWithFaceLandmarks = Jv),
		(c.isWithGender = function (t) {
			return (
				(t.gender === c.Gender.MALE || t.gender === c.Gender.FEMALE) &&
				jf(t.genderProbability)
			);
		}),
		(c.loadAgeGenderModel = function (t) {
			return ay.ageGenderNet.load(t);
		}),
		(c.loadFaceDetectionModel = sy),
		(c.loadFaceExpressionModel = function (t) {
			return ay.faceExpressionNet.load(t);
		}),
		(c.loadFaceLandmarkModel = function (t) {
			return ay.faceLandmark68Net.load(t);
		}),
		(c.loadFaceLandmarkTinyModel = function (t) {
			return ay.faceLandmark68TinyNet.load(t);
		}),
		(c.loadFaceRecognitionModel = function (t) {
			return ay.faceRecognitionNet.load(t);
		}),
		(c.loadMtcnnModel = function (t) {
			return ay.mtcnn.load(t);
		}),
		(c.loadSsdMobilenetv1Model = oy),
		(c.loadTinyFaceDetectorModel = function (t) {
			return ay.tinyFaceDetector.load(t);
		}),
		(c.loadTinyYolov2Model = function (t) {
			return ay.tinyYolov2.load(t);
		}),
		(c.loadWeightMap = gv),
		(c.locateFaces = uy),
		(c.matchDimensions = function (t, e, n) {
			void 0 === n && (n = !1);
			var r = n ? rv(e) : e,
				o = r.width,
				i = r.height;
			return { width: (t.width = o), height: (t.height = i) };
		}),
		(c.minBbox = sd),
		(c.mtcnn = function (t, e) {
			return ay.mtcnn.forward(t, e);
		}),
		(c.nets = ay),
		(c.nonMaxSuppression = ud),
		(c.normalize = cd),
		(c.padToSquare = ld),
		(c.predictAgeAndGender = function (t) {
			return ay.ageGenderNet.predictAgeAndGender(t);
		}),
		(c.recognizeFaceExpressions = function (t) {
			return ay.faceExpressionNet.predictExpressions(t);
		}),
		(c.resizeResults = function e(t, n) {
			var r = new Nf(n.width, n.height),
				o = r.width,
				i = r.height;
			if (o <= 0 || i <= 0)
				throw new Error(
					'resizeResults - invalid dimensions: ' +
						JSON.stringify({ width: o, height: i })
				);
			if (Array.isArray(t))
				return t.map(function (t) {
					return e(t, { width: o, height: i });
				});
			if (Jv(t)) {
				var a = t.detection.forSize(o, i),
					s = t.unshiftedLandmarks.forSize(a.box.width, a.box.height);
				return Qv(Od(t, a), s);
			}
			return Md(t)
				? Od(t, t.detection.forSize(o, i))
				: t instanceof vd || t instanceof od
				? t.forSize(o, i)
				: t;
		}),
		(c.resolveInput = jd),
		(c.shuffleArray = function (t) {
			for (var e = t.slice(), n = e.length - 1; 0 < n; n--) {
				var r = Math.floor(Math.random() * (n + 1)),
					o = e[n];
				(e[n] = e[r]), (e[r] = o);
			}
			return e;
		}),
		(c.sigmoid = hd),
		(c.ssdMobilenetv1 = ny),
		(c.tf = _f),
		(c.tinyFaceDetector = function (t, e) {
			return ay.tinyFaceDetector.locateFaces(t, e);
		}),
		(c.tinyYolov2 = function (t, e) {
			return ay.tinyYolov2.locateFaces(t, e);
		}),
		(c.toNetInput = hv),
		(c.utils = Kf),
		(c.validateConfig = pg),
		Object.defineProperty(c, '__esModule', { value: !0 });
});
