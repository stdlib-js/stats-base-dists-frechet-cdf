<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Fréchet][frechet-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Fréchet][frechet-distribution] random variable is

<!-- <equation class="equation" label="eq:frechet_cdf" align="center" raw="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" alt="Cumulative distribution function for a Fréchet distribution."> -->

```math
F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}
```

<!-- <div class="equation" align="center" data-raw-text="F\left( x; \mu, \beta \right ) = e^{{-({\frac{x-m}{s}})^{{-\alpha }}}}" data-equation="eq:frechet_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/cdf/docs/img/equation_frechet_cdf.svg" alt="Cumulative distribution function for a Fréchet distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the shape, `s > 0` the scale, and `m` the location parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-frechet-cdf' );
```

#### cdf( x, alpha, s, m )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m` at a value `x`.

```javascript
var y = cdf( 10.0, 2.0, 3.0, 5.0 );
// returns ~0.698

y = cdf( -3.0, 1.0, 2.0, -4.0 );
// returns ~0.135

y = cdf( 0.0, 2.0, 1.0, -1.0 );
// returns ~0.368
```

If provided `x <= m`, the function returns `0`.

```javascript
var y = cdf( -2.0, 2.0, 1.0, -1.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0, 0.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0, 0.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN, 0.0);
// returns NaN

y = cdf( 0.0, 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -0.1, 1.0, 1.0 );
// returns NaN

y = cdf( 2.0, 0.0, 1.0, 1.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 1.0, -1.0, 1.0 );
// returns NaN

y = cdf( 2.0, 1.0, 0.0, 1.0 );
// returns NaN
```

#### cdf.factory( alpha, s, m )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Fréchet][frechet-distribution] distribution with shape `alpha`, scale `s`, and location `m`.

```javascript
var mycdf = cdf.factory( 3.0, 3.0, 5.0 );

var y = mycdf( 10.0 );
// returns ~0.806

y = mycdf( 7.0 );
// returns ~0.034
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-frechet-cdf' );

var alpha;
var m;
var s;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    alpha = randu() * 10.0;
    x = randu() * 10.0;
    s = randu() * 10.0;
    m = randu() * 10.0;
    y = cdf( x, alpha, s, m );
    console.log( 'x: %d, α: %d, s: %d, m: %d, F(x;α,s,m): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-cdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-frechet-cdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-cdf/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

</section>

<!-- /.links -->
