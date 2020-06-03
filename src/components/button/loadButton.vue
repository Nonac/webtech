<template>
    <div class="download-button" ref="button" style="z-index: 9999;width: 80px"
         data-toggle="tooltip" data-placement="right" title="Load Progress">
        <svg class="arrow" width="40" height="40" viewBox="0 0 40 40">
            <image id="load_1" data-name="load 1" y="1" width="40" height="38" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAADXklEQVRYhc2YTUgbQRTHn21CYyyxAS+2BikWjLSXdptLsFqwilDwAwNeUktND7ksWC978OAlgezBVJiDHhpNTUpLTRGEgkYKUos9GEmFQiMthPiBFA+aHLZiilsmZsWPTTY7azf+YWB2ZufNb9++fbMzwPP8meJyuapnZ2d/8gq0vr6eHhoa6hazL6eI3hwIBKaUwAna3d09UAp5CUSk0+mMuHV0dNQDACVyy/T0dBSPLy8vL3E4HG9Zlq0Xm6cQiQIKSqfTv0mM7u/vp4Q6hmxvbw+73e7qcwc8L5nN5tKurq4fJJCqAEIWsrW19Zvccf8FcG9vb0esnaKoa3Jt/RdAu93eiRC6jR2HEKIRQi82Njb+ktjSSPQfuN3uG7W1tW/kGq6srAwCwEetVqtxOp3Dy8vLg1VVVbI9KJp7Jicn57OpzM7zvEVhOgxjm5FIZCd7LSsP5vUgQkjHcZzGarVu6fX6UtlPDwDxePyTzWYjGZqRxuv1dlsslpcCwMrKygeDwSD0X2UY5isAXCedgKIoYrgMYH9//7tTBh2KLJ6zjl4xXp4SicQEx3GRmpoal81ma7xQgG1tbfeEeigUOroBIdTX09PjxUsWyQSxWOyP2WzWkwJK5sGysrI7pHBwmG50p9uCweAUfvBCxkvlQejt7X2OEPpOCohDhmGYE211dXUPKYrqYFkW931RBIhF0/QwKWA+6fX6+wCQF1C1nwVSFeTB4/GSSqWmBgYGEnLn29zcjAPATbl5URIQBzRN0x3CNY4bhFCnXEAAmEgkErC4uNjX3Nx8BTcYjcZGhFDOAdgZcGzNPLMWj4+PMyMjI0/W1tY4XFe4JhNJMgadTmfAZDIR5zGlKvgjaWpqGrywgH6/nzGZTER/M0rEsuyDggCL4b1wOPwLJ3FJwGJ5LxqNPstU8n3FxVL22CX3yUIxlUwm+aWlpUcCgigg3jaOjY35isE5Nzf3+fhKJQqIt43b29t+Vcmy3ltdXX16olEsBnFRevxGomzsS59u4dOolpaWW2p5DnJ5D3J4sBje8/l8r8T2xWcAPR5Pvdpw+DRW8gAzFArN4/8+q9X6Xs1XC4erxutcfSUZ1xVRUru+ywaDIWY0Gh9XVFRo1cZcWFjYmpmZudvQ0JAUvQEA/gHGXnYIWNstKwAAAABJRU5ErkJggg=="/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "loadButton"
    }
</script>

<style scoped src='@/view/index/assets/cvMaker.css'>
</style>
