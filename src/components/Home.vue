<template>
  <div>
  <section  class="section how-it-works" id="how-it-works">
    <div class="container">
      <div class="row text-center">
        <div class="how-it-works-heading">
          <h2 class="section-title">How It Work's</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 board">
          <!-- <h2>Welcome to IGHALO!<sup>™</sup></h2>-->
          <div class="board-inner">
            <ul class="nav nav-tabs" id="myTab">
              <div class="liner"></div>
              <li class="active">
                <a href="#home" aria-controls="home" role="tab" data-toggle="tab" title="User Experience">
                      <span class="round-tabs one">
                              <i class="icon icon-profile-male"></i>
                      </span>
                </a></li>

              <li><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" title="Sketch">
                     <span class="round-tabs two">
                         <i class="icon icon-pencil"></i>
                     </span>
              </a>
              </li>
              <li><a href="#prototyping" aria-controls="prototyping" role="tab" data-toggle="tab" title="Prototyping">
                     <span class="round-tabs three">
                          <i class="icon icon-layers"></i>
                     </span> </a>
              </li>

              <li><a href="#uidesign" aria-controls="uidesign" role="tab" data-toggle="tab" title="UI Design">
                         <span class="round-tabs four">
                              <i class="icon icon-aperture"></i>
                         </span>
              </a></li>

              <li><a href="#doner" aria-controls="doner" role="tab" data-toggle="tab" title="Development">
                         <span class="round-tabs five">
                              <i class="icon icon-tools-2"></i>
                         </span> </a>
              </li>

            </ul></div>

          <div class="tab-content">
            <div class="tab-pane fade in active" id="home">

              <h3 class="head text-center">User Experience</h3>
              <p class="narrow text-center">
                Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
              </p>

              <p class="text-center">
                <a href="" class="btn btn-success btn-outline-rounded green"> Get Quote <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
              </p>
            </div>
            <div class="tab-pane fade" id="profile">
              <h3 class="head text-center">Sketch</h3>
              <p class="narrow text-center">
                Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
              </p>

              <p class="text-center">
                <a href="" class="btn btn-success btn-outline-rounded green"> Get Quote <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
              </p>

            </div>
            <div class="tab-pane fade" id="prototyping">
              <h3 class="head text-center">Prototyping</h3>
              <p class="narrow text-center">
                Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
              </p>

              <p class="text-center">
                <a href="" class="btn btn-success btn-outline-rounded green"> Get Quote <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
              </p>
            </div>
            <div class="tab-pane fade" id="uidesign">
              <h3 class="head text-center">UI Design</h3>
              <p class="narrow text-center">
                Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
              </p>

              <p class="text-center">
                <a href="" class="btn btn-success btn-outline-rounded green"> Get Quote <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
              </p>
            </div>
            <div class="tab-pane fade" id="doner">
              <div class="text-center">
                <i class="img-intro icon-checkmark-circle"></i>
              </div>
              <h3 class="head text-center">Development</h3>
              <p class="narrow text-center">
                Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
              </p>
              <p class="text-center">
                <a href="" class="btn btn-success btn-outline-rounded green"> Get Quote <span style="margin-left:10px;" class="glyphicon glyphicon-send"></span></a>
              </p>
            </div>
            <div class="clearfix"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../view/index/assets/homepage.css">
</style>
