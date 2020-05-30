<template>
<div class="cv-back">
  <download-button @buttonClicked="buttonPass" v-bind:inputTime=this.downloadExpectedTime></download-button>

  <a @click="generatePdf"> Download </a>
  <!-- cv contents -->
  <div class="cv" ref="cv">
    <link rel="stylesheet" :href="templatePath">
    <div class="cv-contents A4paper">

      <img src="/img/templates/example_avatar.png" alt="Photo of Borisa" id="avatar" />

      <div id="contact-info" class="vcard">

        <!-- Microformats! -->

        <h1 contenteditable class="titleName">Borisa Jahnsumia</h1>

        <p>
          Cell: <span contenteditable class="tel">555-666-7777</span><br />
          Email: <a contenteditable class="email" href="mailto:greatoldone@lovecraft.com">greatoldone@lovecraft.com</a>
        </p>
      </div>

      <div id="objective">
        <p contenteditable>
          I am an outgoing and energetic (ask anybody) young professional, seeking a
          career that fits my professional skills, personality, and murderous tendencies.
          My squid-like head is a masterful problem solver and inspires fear in who gaze upon it.
          I can bring world domination to your organization.
        </p>
      </div>

      <div class="clear"></div>

      <dl>
        <dd class="clear"></dd>

        <dt>Education</dt>
        <dd contenteditable>
          <h2>Withering Madness University - Planet Vhoorl</h2>
          <p><strong>Major:</strong> Public Relations<br />
            <strong>Minor:</strong> Scale Tending</p>
        </dd>

        <dd class="clear"></dd>

        <dt>Skills</dt>
        <dd contenteditable>
          <h2>Office skills</h2>
          <p>Office and records management, database administration, event organization, customer support, travel coordination</p>

          <h2>Computer skills</h2>
          <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
        </dd>

        <dd class="clear"></dd>

        <dt>Experience</dt>
        <dd contenteditable>
          <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
          <ul>
            <li>Inspired and won highest peasant death competition among servants</li>
            <li>Helped coordinate managers to grow cult following</li>
            <li>Provided untimely deaths to all who opposed</li>
          </ul>

          <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
          <ul>
            <li>Worked on grass-roots promotional campaigns</li>
            <li>Reduced theft and property damage percentages</li>
            <li>Janitorial work, Laundry</li>
          </ul>
        </dd>

        <dd class="clear"></dd>

        <dt>Hobbies</dt>
        <dd contenteditable>World Domination, Deep Sea Diving, Murder Most Foul</dd>

        <dd class="clear"></dd>

        <dt>References</dt>
        <dd contenteditable>Available on request</dd>

        <dd class="clear"></dd>
      </dl>

      <div class="clear"></div>

    </div>
  </div>
</div>
</template>


<script>
import downloadButton from "@/components/downloadButton";

export default {
  name: 'cv',
  props: ['templateId'],
  data: () => {
    return {
      // This parameter should call the thread status of the system about the download feedback
      downloadExpectedTime: 5000,
    }

  },
  components: {
    downloadButton
  },
  methods: {
    generatePdf() {
      let reqBody = {
        htmlHeaders: document.head.innerHTML,
        cvContents: this.$refs.cv.innerHTML,
        templateId: this.templateId
      }
      this.$http.post(this.serverRootUrl + '/api/toPdf', reqBody, {
          responseType: 'arraybuffer'
        })
        .then(res => {
          var blob = new Blob([res.data]);
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = "cv.pdf";
          link.click();
        })
        .catch(err => console.log(err));
    },
    buttonPass(msg) {
      if(msg==='true'){
          this.generatePdf()
      }
    }
  },
  computed: {
    templatePath() {
      const url = this.serverRootUrl + '/api/template/template.css';
      const query = `?id=${this.templateId}`;
      return url + query;
    }
  },
  created() {
    // console.log(`cvMaker for template ${this.templateId}`);
  }
}
</script>

<style scoped src='../view/index/assets/cvMaker.css'>
</style>
