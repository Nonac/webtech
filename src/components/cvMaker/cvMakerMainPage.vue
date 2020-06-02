<template>
<div cv-page>

  <avatar />

 <section class="contact-info vcard">
   <h1 contenteditable class="titleName">Borisa Jahnsumia</h1>

   <div>
     <div class="clonable">
       <span contenteditable>Cell:</span>
       <span contenteditable class="tel">555-666-7777</span><br>
     </div>
     <div class="clonable">
       <span contenteditable>Email:</span>
       <a contenteditable class="email" >greatoldone@lovecraft.com</a>
     </div>
   </div>
 </section>



  <section class="objective">
    <div class="clonable">
      <p contenteditable>
        I am an outgoing and energetic (ask anybody) young professional, seeking a
        career that fits my professional skills, personality, and murderous tendencies.
        My squid-like head is a masterful problem solver and inspires fear in who gaze upon it.
        I can bring world domination to your organization.
      </p>
    </div>
  </section>

  <div class="clear"></div>

  <section class="miscellaneous">
    <dl>
      <dd class="clear"></dd>
      <div class="clonable">
        <dt contenteditable>Education</dt>
        <dd contenteditable>
          <h2>Withering Madness University - Planet Vhoorl</h2>
          <p><strong>Major:</strong> Public Relations<br />
            <strong>Minor:</strong> Scale Tending</p>
        </dd>

        <dd class="clear"></dd>
      </div>

      <div class="clonable">


        <dt contenteditable>Skills</dt>
        <dd contenteditable>
          <h2>Office skills</h2>
          <p>Office and records management, database administration, event organization, customer support, travel coordination</p>

          <h2>Computer skills</h2>
          <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
        </dd>
        <dd class="clear"></dd>

      </div>



      <div class="clonable">
        <dt contenteditable>Experience</dt>
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
      </div>


      <div class="clonable">


        <dt contenteditable>Hobbies</dt>
        <dd contenteditable>World Domination, Deep Sea Diving, Murder Most Foul</dd>

        <dd class="clear"></dd>
      </div>

    </dl>

  </section>
  <div class="clear"></div>

</div>
</template>

<script>
import avatar from "./avatar.vue";

export default {
  components:{
    avatar,
  }

}
</script>
