<template>
  <section id="banner-13" class="pt-100 banner-section">
    <div class="container">
      <!-- BANNER-13 WRAPPER -->
      <div class="banner-13-wrapper bg--03 bg--scroll r-16 block-shadow">
        <div class="banner-overlay">
          <div class="row d-flex align-items-center">
            <!-- BANNER-5 TEXT -->
            <div class="col-md-7">
              <div class="banner-13-txt color--white">
                <!-- Title -->
                <h2 class="s-46 w-700">Join the WaitList</h2>
                <!-- Text -->
                <p class="p-lg">
                  We'll be launching soon!
                  <br />
                  And we'd love for you to be there when we do.
                </p>
                <form
                  action="https://formspree.io/f/xpwzglgl"
                  method="POST"
                  name="quickform"
                  class="quick-form form-shadow form-half mt-35"
                >
                  <!-- Form Inputs -->
                  <div class="input-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control email r-06"
                      placeholder="Your email address"
                      autocomplete="off"
                      required
                    />
                    <span class="input-group-btn form-btn mx-2">
                      <button
                        type="submit"
                        class="btn r-06 btn--theme hover--theme submit"
                      >
                        Ready
                      </button>
                    </span>
                  </div>
                  <!-- Form Message -->
                  <div class="quick-form-msg">
                    <span class="loading"></span>
                  </div>
                </form>
              </div>
            </div>
            <!-- END BANNER-13 TEXT -->
            <!-- BANNER-13 IMAGE -->
            <div class="col-md-5">
              <div class="banner-13-img text-center">
                <img
                  class="img-fluid"
                  src="/assets/images/a4-2.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- End banner overlay -->
      </div>
      <!-- END BANNER-13 WRAPPER -->
    </div>
    <!-- End container -->
  </section>
</template>
