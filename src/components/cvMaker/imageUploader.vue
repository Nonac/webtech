<template>
<div>
  <div class="container">
    <!--UPLOAD-->
    <form enctype="multipart/form-data" novalidate>
    <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
      <div class="dropbox" ref="dropbox" :style="{'background-image': (exampleImageUrl ? `url(${exampleImageUrl})`: '')}">
        <input type="file" :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event)" accept="image/*" class="input-file">
        <p v-if="isInitial">
          Click to upload your avatar
        </p>
        <p v-if="isSaving">
          Uploading...
        </p>
        <p v-if="isSuccess">
          Click to change the image.
        </p>

        <p v-if="isFailed">
          Failed to upload. Maybe try again?
        </p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import {bus} from '@/view/index/main';


const upload = async (vue, form) => {
  let res = await vue.$http.post('/api/cvMaker/avatar', form);
  if(res.status === 201){
    return res.body;
  }else{
    alert('Upload failed.');
  }
};

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;


export default {
  name: 'app',
  props: ['exampleImageUrl'],
  data() {
    return {
      uploadedFile: null,
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'avatar'
    }
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFile = null;
      this.uploadError = null;
    },


    async save(form) {
      console.log('saving')
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      try {
        let res = await upload(this, form);
        console.log(res);
        this.uploadedFile = res.url;
        this.currentStatus = STATUS_SUCCESS;
        bus.$emit('cvAvatarUploaded', `${res.url}&t=${new Date().getTime()}`);
      } catch (err) {
        this.uploadError = err.response;
        this.currentStatus = STATUS_FAILED;
        console.log(err);
      }
    },


    filesChange(event) {
      // handle file changes
      const fileList = event.target.files;
      const fieldName = event.target.name;


      if (fileList.length != 1) {
        alert('Please select only one file.');
        return this.reset();
      }

      const form = new FormData();
      form.append(fieldName, fileList[0], fileList[0].name);

      // save it
      this.save(form);
    }
  },


  mounted() {
    this.reset();
  },


}
</script>

<style scoped lang="scss">
.dropbox {
    outline: 2px dashed grey;
    /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px;
    height: 311.548px;
    position: relative;
    cursor: pointer;
}

.input-file {
    opacity: 0;
    /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
}

.dropbox:hover {
    background: lightblue;
    /* when mouse over to the drop zone, change color */
}

.dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
}
</style>
