<template>
    <div>
        <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
             data-toggle="tooltip" data-placement="right" title="remove Element">
            <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
                <image id="矩形_1" data-name="矩形 1" width="40" height="40" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC50lEQVRYhdVYMYsaQRQeN7fehsXbtEJANFrHf2CfMgQC+QUpLFJIGgkYohwEtBDBFBFSSkxjCkGMELWVYCoLFyUIsYwLkiKXuOHJeIzj7OzM7kk2HzwOZ+a99917M2/eLLJt25cUi8WY7QA858u+gnwiGo2+cLLAmxOFb4KpVOqBlzlheA09pK/RaLx1Su8esMZPqrkEptPpz+VyeYWJ7Mar1eqz4XD43Y0YDdAB3b0dsAm2wQfvH2AOlsvlx+v1ekv6AGPj8fiHLDEaYANskcPgC3yyuIR2LAmUSqVYNptdGIYREtkmlmXZpmlai8XiKzkej8fvJ5NJQ8ZOrVaL5/P5bwcTNGMIuUgkut3urF6vX7rtIVgDa0VsYt/8FNPhZ6XIKR08AR23LYJ98wnyTmar1frst/BiG0yQh5F7SHq93pw2wFJmSAgLdx0rCKzoORJsNpufbjpybpHE6XcnWKlUnogo3oTQe5Ksk3s5uuoURblD/h4MBk8lLyehssKynU6nnx8tItnSnQkuDzLRgv0XltGhSxB9qxxEkO4+5vP5Bw/RC8so0D5oDqFCoXA3HA5fqKp6L5fLfdxPQGU3DEO221Gw/JZRsixrS944o9FoNZvNOqvV6hVyqkkeDsdtnN6I7AHiFXDHCNF3qwB+IYTOEUKqpB7X15mEHVtgjQyETrvvjvrUCDxBxxRDP0cNuaXkAm8DkI0MCYava9xSVfWdaZqRzWYTjcVikf2Eruvnmqa9lPADpeUKIfQHIbSVIajr+qWmaQdlpt/vv+90Og+5XYZIQ+pXsA/HrulgD+4KI4FEIvFIJhJeQPugORxFgH6xeemeRQXbvgb2ze9mJpPJa/J3JpN5c6ro0bZp3zuIXD2CDauK/56JRLDdbn/x1LDaDg8ngZYf7mLl5C1/4B9NgX92Bu3h/v99+rAD9vHIMTWB/vwmIv/8A6ao8KLJurpkxXfDCq8vL3Oi8E3wqPsQnBMCQugvkxo7qYDd5Z4AAAAASUVORK5CYII="/>
            </svg>
        </div>
    </div>
</template>


<script>
    export default {
        name: "removeElementButton"
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
