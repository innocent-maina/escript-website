<template>
  <footer id="footer-3" class="pt-100 footer ft-3-ntr">
    <div class="container">
      <!-- FOOTER CONTENT -->
      <div class="row">
        <!-- FOOTER LOGO -->
        <div class="col-xl-3 col-lg-2">
          <div class="footer-info">
            <img
              class="footer-logo"
              src="/assets/images/logo.png"
              alt="footer-logo"
            />
          </div>
        </div>

        <!-- FOOTER LINKS -->
        <div class="col-sm-4 col-md-5 col-lg-5 col-xl-3">
          <div class="footer-links fl-3">
            <!-- Title -->
            <h6 class="s-17 w-700">Legal</h6>
            <!-- Links -->
            <ul class="foo-links clearfix">
              <li>
                <p><NuxtLink to="/terms">Terms of Use</NuxtLink></p>
              </li>
              <li>
                <p><NuxtLink to="/privacy">Privacy Policy</NuxtLink></p>
              </li>
              <li>
                <p><NuxtLink to="/privacy">Cookies</NuxtLink></p>
              </li>
            </ul>
          </div>
        </div>
        <!-- END FOOTER LINKS -->
        <!-- FOOTER NEWSLETTER FORM -->
        <div class="col-sm-10 col-md-7 col-lg-5 col-xl-5">
          <div class="footer-form">
            <!-- Title -->
            <h6 class="s-17 w-700">
              Stay up to date with our news, ideas and updates
            </h6>

            <!-- Newsletter Form Input -->
            <form class="newsletter-form">
              <div class="input-group r-06">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email address"
                  required
                  id="s-email"
                />
                <span class="input-group-btn ico-15">
                  <button type="submit" class="btn color--theme">
                    <span class="flaticon-right-arrow-1"></span>
                  </button>
                </span>
              </div>
              <!-- Newsletter Form Notification -->
              <label for="s-email" class="form-notification"></label>
            </form>

            <ul class="footer-socials ico-25 text-center clearfix">
              <li>
                <a href="#"><span class="flaticon-linkedin-logo"></span></a>
              </li>
              <li>
                <a href="#"><span class="flaticon-twitter"></span></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- END FOOTER NEWSLETTER FORM -->
      </div>
      <!-- END FOOTER CONTENT -->
      <hr />
      <!-- FOOTER DIVIDER LINE -->
      <!-- BOTTOM FOOTER -->
      <div class="bottom-footer">
        <div class="text-center">
          <!-- FOOTER COPYRIGHT -->
          <div class="footer-copyright">
            <p class="p-sm text-center">
              &copy; 2024 Escript. <span>All Rights Reserved</span>
            </p>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- END BOTTOM FOOTER -->
    </div>
    <!-- End container -->
    <NavigationGoToTop />
  </footer>
</template>
<script setup lang="ts"></script>
