<template >
<div class="templateBriefView">
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <a href="/#/form"><img class="templateImg class-img-top" :src='thumbnailUrl' alt='Template Img' />
      </a>
      <div class="card-body">

        <p class="card-text">
          {{description}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name: "templateBriefView",
  props: ['id', 'thumbnailUrl', 'description'],

}

</script>
