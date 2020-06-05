<template>
<div cv-page>

  <avatar />

 <section class="contact-info vcard">
   <h1 contenteditable class="titleName">Borisu Jonsonkun</h1>

   <div>
     <div class="clonable">
       <span class="contact-details">
       <span contenteditable>Cell:</span>
       <span contenteditable class="tel">555-666-7777</span></span><br>
     </div>
     <div class="clonable">
       <span class="contact-details">
       <span contenteditable>Email:</span>
       <a contenteditable class="email" >microsoft@gmail.com</a></span>
     </div>
   </div>
 </section>



  <section class="objective">
    <div class="clonable">
      <p contenteditable>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Eu augue ut lectus arcu bibendum at varius. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi.
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
          <h2>Going Home University - London</h2>
          <p><strong>Major:</strong> Public Relations<br />
            <strong>Minor:</strong> Software Engineering</p>
        </dd>

        <dd class="clear"></dd>
      </div>

      <div class="clonable">


        <dt contenteditable>Skills</dt>
        <dd contenteditable>
          <h2>Office skills</h2>
          <p>Customer support, tea brewing</p>

          <h2>Computer skills</h2>
          <p>Turn on/off computers. Mouse/keyboard usage.</p>
        </dd>
        <dd class="clear"></dd>

      </div>



      <div class="clonable">
        <dt contenteditable>Experience</dt>
        <dd contenteditable>
          <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1826-2133</span></h2>
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
        <dd contenteditable>World of Warcraft, League of Legends, Blade and Soul</dd>

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
