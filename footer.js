$(document).ready(function(){
    $(".e_grocery_footer").html(`

    <style>
    #newsletter {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      background-image: url(images/banner/b14.png);
      background-repeat: no-repeat;
      background-position: 20% 30%;
      background-color: #041e42;
    }

    #newsletter h4 {
      font-size: 22px;
      font-weight: 700;
      color: #fff;
    }

    #newsletter p {
      font-size: 14px;
      font-weight: 600;
      color: #767788;
    }

    #newsletter p span {
      color: #ffbd27;
    }

    #newsletter .form {
      display: flex;
      width: 40%;
    }

    #newsletter input {
      height: 3.125rem;
      padding: 0 1.25em;
      font-size: 14px;
      width: 100%;
      border: 1px solid transparent;
      border-radius: 4px;
      outline: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

    }

    #newsletter button {
      background-color: #088178;
      color: #fff;
      white-space: nowrap;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    footer .col {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    footer .logo {
      margin-bottom: 30px;
    }

    footer h4 {
      font-size: 14px;
      padding-bottom: 20px;
    }

    footer p {
      font-size: 13px;
      margin: 0 0 8px 0;
    }

    footer a {
      font-size: 13px;
      text-decoration: none;
      color: #222;
      margin-bottom: 10px;
    }

    footer .follow {
      margin-top: 20px;
    }

    footer .follow i {
      color: #465b52;
      padding-right: 4px;
      cursor: pointer;
    }

    footer .install .row img {
      border: 1px solid #088178;
      border-radius: 6px;
      width: 180px;
      height: 80px;
    }

    footer .install img {
      margin: 10px 0 15px 0;
    }

    footer .follow i:hover,
    footer a:hover {
      color: #088178;
    }

    footer .copyright {
      width: 100%;
      text-align: center;
    }
  </style>
    
  <section id="newsletter" class="section-p1 p-4">
  <div class="newstext">
    <h4>Sign Up for Newsletter</h4>
    <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
  </div>
  <div class="form">
    <input type="text" placeholder="Your Email address">
    <button class="normal">Sign Up</button>
  </div>
</section>



<footer class="section-p1 pt-5 ps-5">
  <div class="col">
    <h4>Contact</h4>
    <p><strong>Address: </strong> Hoshiarpur Road, Street 32, Punjab</p>
    <p><strong>Phone: </strong> +91 97965 43732/(+91) 12873</p>
    <p><strong>Hours: </strong> 10:00 - 18:00, Mon - Sat </p>
    <div class="follow">
      <h4>Follow us</h4>
      <div class="icon">
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-pinterest"></i>
        <i class="bi bi-youtube"></i>

      </div>
    </div>

  </div>

  <div class="col">
    <h4>About</h4>
    <a href="#">About Us</a>
    <a href="#">Delivery Information</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Terms & Conditions</a>
    <a href="#">Contact Us</a>
  </div>

  <div class="col">
    <h4>My Account</h4>
    <a href="#">Sign In</a>
    <a href="#">View Cart</a>
    <a href="#">My Wishlist</a>
    <a href="#">Track My Order</a>
    <a href="#">Help</a>
  </div>

  <div class="col install">
    <h4>Install App</h4>
    <p>From App Store or Google Play</p>
   
    <p>Secured Payment Gateways</p>
    <img src="Images copy/pay/pay.png" alt="">
  </div>

  <div class="copyright">
    <p>© 2021, HTML CSS E-Grocery Template</p>
  </div>
</footer>
    `)
})