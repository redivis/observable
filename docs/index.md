---
toc: false
---

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--sans-serif);
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 2rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  background: linear-gradient(30deg, var(--theme-foreground-focus), currentColor);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>

<div class="hero">
  <h1>Hello!</h1>
  <h2>This site uses <a href="https://observablehq.com/framework/">Observable Framework</a> to build a static page populated with <a href="https://redivis.com">Redivis</a> data.</h2>
</div>

## Build your own site!

Explore this dashboard, and build your own static site

<div class="grid grid-cols-3">
  <div class="card">
    Explore the visualizations and data sources on the <a href="./redivis">GHCN Weather data dashboard</a>.
  </div>
  <div class="card">
    View the source code on our <a href="https://github.com/redivis/observable">Github</a> and build your own site following the <a href="https://observablehq.com/framework/getting-started">Observable guide</a>.
  </div>
  <div class="card">
    Familiarize yourself with the Redivis client library documentation (<a href="https://apidocs.redivis.com/client-libraries/redivis-js"><code>js</code></a>, <a href="https://apidocs.redivis.com/client-libraries/redivis-python"><code>Python</code></a>, and <a href="https://apidocs.redivis.com/client-libraries/redivis-r"><code>R</code></a>) to connect with data hosted on Redivis.
  </div>
</div>
