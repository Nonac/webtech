<template>
    <div>
        <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
             data-toggle="tooltip" data-placement="right" title="Add Element">
            <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
                <image id="addEle_1" data-name="addEle 1" width="40" height="40" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACnElEQVRYhdVYv4taQRB+SrTMSyscHBqtz39A7FMfHOQvuMIihaSRAyHKQUALEUwRe8FrTHEgXnFqK8FUFooShFhGmzQBXxjZZ9Zxd9/sWx55+WAK98fM58zuzOyzHMcxkkqlculIwOaM9EctQyQSiTuZBtUcFcYEM5nMGz9zZPh1PYSv3W5/loXXBawxCbWSwGw2+7Ver38zIofxRqPxbjQa/fAihgF7YK+rB3SCbrCh+gPCwVqtdrPdbve8DVA2mUx+6hLDAB2gix8GW2BTxCVyYMmhWq1eFgqFlW3bEcox2e12zmKx2K1Wq2/8eDKZvEqn07aOnmazmSyVSt9PJjBjcDnFE/1+f95qte69zhCsgbUUncy2OsTY/aIQycKhEtjjdUSYbTVB1c3sdrvPpomX6RCCv4zKSzIYDJZYgWgzEh5KkiIniLwnJdjpdJ58eI5MUORJFn5vgvV6/S1loylBEHwm+Tzpylmpi0ajr/jfw+Hw1m+V8gLWnc1m359t4dnizoSlB+oF0PYgCE5BuKqceBB3H8vl8iEo78lsYA6Rcrl8EY/HX8ZisdfFYvGLOwGZ3bZtnW6HL0mk6sHZ2vMVZzweb+bz+eNms/mAQ+PnchiFWHRZeEg9hGtrkFDZeqFh1yGs0VlLOgbGHXXQCD1BaYihn0NDXiHxfYsFtv4qgsQIuQceOLlcLuFOhCnNSLsMSkNqmmaYjSNw13TioQNjDqlU6lrHE36AbWAOZ/8Iv9g0umdtDzLdRzDb6m5mOp1+5H/n8/lPQXkP68a2D6CUniAa1l6v95VSWoWbRQ+n0LT8oX80hf7ZGbaH+//36cMJ2ccjaWhC/fmNIv/8AyZVVN4UlS5dMW5YoS3yM0eFMcGz7oM4R4JlWX8AD1ZWRqCgOYsAAAAASUVORK5CYII="/>
            </svg>
        </div>
    </div>
</template>


<script>
    export default {
        name: "addElementButton"
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
