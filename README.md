<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# iterPeriodicSinc

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a periodic [sinc][@stdlib/math/base/special/sinc] waveform.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The periodic [sinc][@stdlib/math/base/special/sinc] function, also known as the Dirichlet function, is defined as

<!-- <equation class="equation" label="eq:periodic_sinc" align="center" raw="D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} & x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" alt="Periodic sinc function."> -->

```math
D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} & x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(x; A) = \begin{cases}\frac{A\sin(Nx/2)} {N\sin(x/2)} &amp; x \neq 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} &amp; x = 2\pi k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" data-equation="eq:periodic_sinc">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc.svg" alt="Periodic sinc function.">
    <br>
</div> -->

<!-- </equation> -->

where `N` is the function order and `A` is the peak amplitude. For odd `N`, the waveform has a period of `2π`, and, for even `N`, the waveform has a period of `4π`.

To express the periodic [sinc][@stdlib/math/base/special/sinc] function as a function of a discrete iteration number `t` and the waveform period `τ`, for odd `N`, let

<!-- <equation class="equation" label="eq:periodic_sinc_substitution_odd" align="center" raw="x = \frac{2\pi (t-\varphi)}{\tau}" alt="Periodic sinc function substitution for odd N."> -->

```math
x = \frac{2\pi (t-\varphi)}{\tau}
```

<!-- <div class="equation" align="center" data-raw-text="x = \frac{2\pi (t-\varphi)}{\tau}" data-equation="eq:periodic_sinc_substitution_odd">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_substitution_odd.svg" alt="Periodic sinc function substitution for odd N.">
    <br>
</div> -->

<!-- </equation> -->

and, for even `N`, let

<!-- <equation class="equation" label="eq:periodic_sinc_substitution_even" align="center" raw="x = \frac{4\pi (t-\varphi)}{\tau}" alt="Periodic sinc function substitution for even N."> -->

```math
x = \frac{4\pi (t-\varphi)}{\tau}
```

<!-- <div class="equation" align="center" data-raw-text="x = \frac{4\pi (t-\varphi)}{\tau}" data-equation="eq:periodic_sinc_substitution_even">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_substitution_even.svg" alt="Periodic sinc function substitution for even N.">
    <br>
</div> -->

<!-- </equation> -->

where `τ` is the period (i.e., the number of iterations until a waveform repeats) and `φ` is the phase (iteration) offset. For odd `N`, we can thus substitute and express the periodic [sinc][@stdlib/math/base/special/sinc] function as

<!-- <equation class="equation" label="eq:periodic_sinc_in_terms_of_period" align="center" raw="D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} & t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" alt="Periodic sinc function as a function of the waveform period."> -->

```math
D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} & t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} & t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(t; A, \tau, \varphi) = \begin{cases}\frac{A\sin(N\pi(t-\varphi)/\tau)} {N\sin(\pi (t-\varphi)/\tau)} &amp; t-\varphi \neq \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots  \\ A (-1)^{k(N-1)} &amp; t-\varphi = \tau k\ \textrm{for}\ k = 0, \pm 1, \pm 2, \ldots \end{cases}" data-equation="eq:periodic_sinc_in_terms_of_period">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_in_terms_of_period.svg" alt="Periodic sinc function as a function of the waveform period.">
    <br>
</div> -->

<!-- </equation> -->

For even `N`, we can express the periodic [sinc][@stdlib/math/base/special/sinc] function similarly.

Note that the periodic [sinc][@stdlib/math/base/special/sinc] can be equivalently expressed as a function of the [sinc][@stdlib/math/base/special/sinc] function

<!-- <equation class="equation" label="eq:periodic_sinc_in_terms_of_sinc_function" align="center" raw="D_N(\pi x; N, A) = A \cdot \frac{\operatorname{sinc}(Nx/2)} {\operatorname{sinc}(x/2)}" alt="Periodic sinc function in terms of the sinc function."> -->

```math
D_N(\pi x; N, A) = A \cdot \frac{\mathop{\mathrm{sinc}}(Nx/2)} {\mathop{\mathrm{sinc}}(x/2)}
```

<!-- <div class="equation" align="center" data-raw-text="D_N(\pi x; N, A) = A \cdot \frac{\operatorname{sinc}(Nx/2)} {\operatorname{sinc}(x/2)}" data-equation="eq:periodic_sinc_in_terms_of_sinc_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d985bb501380970d8c79ffba20ce15965a7acfa9/lib/node_modules/@stdlib/simulate/iter/periodic-sinc/docs/img/equation_periodic_sinc_in_terms_of_sinc_function.svg" alt="Periodic sinc function in terms of the sinc function.">
    <br>
</div> -->

<!-- </equation> -->

<!-- TODO: add a figure showing a periodic sinc waveform -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/simulate-iter-periodic-sinc
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var iterPeriodicSinc = require( '@stdlib/simulate-iter-periodic-sinc' );
```

#### iterPeriodicSinc( n\[, options] )

Returns an iterator which generates a periodic [sinc][@stdlib/math/base/special/sinc] waveform of order `n`.

```javascript
var it = iterPeriodicSinc( 7 );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **period**: period (i.e., the number of iterations before a waveform repeats). Default: `100`.
-   **amplitude**: peak amplitude. Default: `1.0`.
-   **offset**: phase offset (in units of iterations; zero-based). A negative offset translates a waveform to the left. A positive offset translates a waveform to the right. Default: `0`.
-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an iterator which generates a waveform that repeats every `100` iterations. To specify an alternative period, set the `period` option.

```javascript
var opts = {
    'period': 1000
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To adjust at what point the iterator begins in the waveform cycle, set the phase `offset` option. For example, to translate the waveform to the left,

```javascript
var opts = {
    'period': 100,
    'offset': -1
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

To translate the waveform to the right,

```javascript
var opts = {
    'period': 100,
    'offset': 1
};

var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

// ...
```

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterPeriodicSinc( 7, opts );
// returns <Object>

var v = it.next().value;
// returns <number>

v = it.next().value;
// returns <number>

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterPeriodicSinc = require( '@stdlib/simulate-iter-periodic-sinc' );

// Create an iterator:
var opts = {
    'period': 100,
    'amplitude': 10.0,
    'offset': -50,
    'iter': 100
};
var it = iterPeriodicSinc( 7, opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/simulate-iter/sine-wave`][@stdlib/simulate/iter/sine-wave]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sine wave.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/simulate-iter-periodic-sinc.svg
[npm-url]: https://npmjs.org/package/@stdlib/simulate-iter-periodic-sinc

[test-image]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/simulate-iter-periodic-sinc/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/simulate-iter-periodic-sinc?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/simulate-iter-periodic-sinc.svg
[dependencies-url]: https://david-dm.org/stdlib-js/simulate-iter-periodic-sinc/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/tree/deno
[deno-readme]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/tree/umd
[umd-readme]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/tree/esm
[esm-readme]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/simulate-iter-periodic-sinc/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/simulate-iter-periodic-sinc/main/LICENSE

[@stdlib/math/base/special/sinc]: https://github.com/stdlib-js/math-base-special-sinc

<!-- <related-links> -->

[@stdlib/simulate/iter/sine-wave]: https://github.com/stdlib-js/simulate-iter-sine-wave

<!-- </related-links> -->

</section>

<!-- /.links -->
