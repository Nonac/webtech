<template>
    <div class="cv">
        <div class="avatar">
            <!-- <EditImage :src="require('@/view/index/assets/logo_name.png')" width="100" height="100" :isCircle="true" class="img"/> -->
            <div class="name" contenteditable="true" v-html="userdata.name" @input="contentChange('name', $event)"/>
            <div class="job" contenteditable="true" v-html="userdata.position" @input="contentChange('position', $event)"/>
            <div class="location">
                <div class="location-name" contenteditable="true" v-html="userdata.location" @input="contentChange('location', $event)"/>
            </div>
        </div>
        <div class="info">
            <ul>
                <li>
                    <span class="value" contenteditable="true" v-html="userdata.gender" @input="contentChange('gender', $event)"/>
                    <br>
                    <span class="key" contenteditable="true">Gender</span>
                </li>
                <li>
                    <span class="value" contenteditable="true" v-html="userdata.age" @input="contentChange('age', $event)"/>
                    <br>
                    <span class="key" contenteditable="true">Age</span>
                </li>
                <li>
                    <span class="value" contenteditable="true" v-html="userdata.degree" @input="contentChange('degree', $event)"/>
                    <br>
                    <span class="key" contenteditable="true">Degree</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    // import EditImage from '@/components/edit-image'
    export default {
        name: 'cv',
        props: {
            // data: {
            //     type: Object,
            //     default: () => {}
            // }
        },
        data: () => {
          // default value for undefined key
          const fieldDefaultValue = '';
          return{
            userdata: new Proxy({}, {
              // if calls get on an undefined key, returns a default value
              get: (target, key) =>
                Object.prototype.hasOwnProperty.call(target, key) ? target[key] : fieldDefaultValue
            }),
            // the id of the chosen template on the server
            templateId: 1, // by default.

            style: '', // css template for the cv
          }

        },
        components: {
            // EditImage
        },
        methods: {
            contentChange (key, e) {
                this.userdata[key] = e.target.innerText
                console.log('brief-change', this.userdata)
            }
        },
        created(){
          // fetch template from the server
          const url = this.serverRootUrl + '/api/template';
          const params = `?id=${this.templateId}`;
          this.$http.get(url + params)
          .then((res) => {
              if(res.status === 200){
                this.style = res.body.css;
              }else{
                alert('Sorry');
              }
          })
          .catch(err => console.log(err));
        }
    }
</script>
