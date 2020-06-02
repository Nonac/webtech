<template>
    <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
         data-toggle="tooltip" data-placement="right" title="Decrease Font Size">
        <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
            <image id="A" x="1" y="13" width="25" height="26" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAACE0lEQVRIia2WzUuVURDGf9yUzIVdLWoXElaSiAZRLYIIoaAMoQ/pY1Hr1oL/Qqv+CYNIIyMsQiSQFkqLWlQQqC0iIko0ApEofGJkLgyv9+O89/rAwJzzzjlz5pk5Z14kpco9SYtBhlPXpjrY75tHzEhqTllfIA3ngc6M5XHgRMrqFCfNwFVgB7AGrPj8buDSdjnpAc65/hWYCd8GgfbtcHIZ2On6EnAf+B0OMFBzhxpJ2yXpc0j2XZ9/FeamG62u22Gz75Laff5OmF+X1F9vdRWcqhImgVXXnwM/XG8BrlVjq5oT4/uU63+Bx+HbT+BhGF8E9tbjxMpzn+tvXSKmgH8+PgqczeukDbgRxs8CVSW8AeZct7t00+/SVlRI1lBI7Iqk3gp2o8FuTdKRPIm/FfTXwPsKdk89P4ZW4HpqJF2SVv10G5Iu1CjzsRDNR0mtWZumMn6N26Lry8CfGg/hQtAP+2M6WS2SNknzagzjkpqq5eSkP+GN4AzQHddn6RoOZfgJmEh0VvRi6fC7ZZR9KEfXAS/XEkZytGaTqbD2naSWcnRdCb3BmtPLnJTZhd1wvR84nY2kIGkunGQ2ZxQlJpbDHhPZSKzzHQunepQzCsMXYDqMrQAOEd6uodD91jMtNg8eBNs93p436Too6VsI80nqr04Zsaa2EPayFBQtEkuQlZ4l2+SF94968AsYD3t1A33/AaRUbQqrtus/AAAAAElFTkSuQmCC"/>
            <image id="triangle_2" data-name="triangle 2" x="26" y="10" width="11" height="7" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAANklEQVQYlWP8////fwYiARMDAwMjkWoZQYrBDEIKQQRMMT4NcHFkxXgVYlOM1zmETEYABgYGAOyZBBIO1QadAAAAAElFTkSuQmCC"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "smallFontButton"
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
