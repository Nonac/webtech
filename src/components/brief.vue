<template>
    <div class="brief">
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
        name: 'Brief',
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
        }
    }
</script>
<style lang="less">
    .brief {
        width: 100%;
        // height: 575px;
        background-color: #f6f7f7;

        .avatar {
            height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &>.img {
                margin-bottom: 10px;
            }

            .name {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .job {
                font-size: 14px;
                color: #555;
                margin-bottom: 5px;
            }

            .location {
                display: flex;
                align-itmes: center;

                .location-name {
                    font-size: 12px;
                    font-weight: bold;
                    margin-left: 10px;
                }
            }
        }

        .info {
            width: 100%;
            overflow: hidden;
            border-top: 1px solid #dad8d7;
            border-bottom: 1px solid #dad8d7;
            &>ul {
                height: 100%;
                li:not(:last-child) {
                    border-right: 1px solid #dad8d7;
                }

                li {
                    float: left;
                    width: 33.1%;
                    box-sizing: border-box;
                    height: 100%;
                    overflow: hidden;
                    text-align: center;
                    padding: 10px 0;
                    span {
                        display: inline-block;
                        margin: 0 auto;
                    }
                    .value {
                        margin-bottom: 5px;
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .key {
                        font-size: 12px;
                        font-weight: bold;
                        color: #555;
                    }
                }
            }
        }
    }

</style>
