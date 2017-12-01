var Button = function () {
   function Button($hero) {
     _classCallCheck(this, Button);

     this.$hero = $hero;
     this.buttonIsAnimated = false;

     this.heroMobileHeight();
     this.autoScrollOffset = this.$hero.height();

     this.createButton();
     this.attachEvents();
   }

   _createClass(Button, [{
     key: 'createButton',
     value: function createButton() {
       this.$button = $('<span class="js-btn-scroll"></span>');
       this.$button.appendTo(this.$hero);
     }
   }, {
     key: 'animateButton',
     value: function animateButton() {
       this.$button.toggleClass(animationClass, this.buttonIsAnimated);
     }
   }, {
     key: 'scrollOn',
     value: function scrollOn() {
       var scrollPosition = $window.scrollTop();

       if (scrollPosition > scrollOffset && !this.buttonIsAnimated) {
         this.buttonIsAnimated = true;
         this.animateButton();
       } else if (scrollPosition < scrollOffset && this.buttonIsAnimated) {
         this.buttonIsAnimated = false;
         this.animateButton();
       }
     }
   }, {
     key: 'autoScroll',
     value: function autoScroll() {
       $scrollBody.animate({
         scrollTop: this.autoScrollOffset
       }, autoScrollDuration);
     }
   }, {
     key: 'attachEvents',
     value: function attachEvents() {
       var _this = this;

       $window.on('scroll', _.throttle(this.scrollOn.bind(this), wait));
       $window.on('resize', function () {
         _this.heroMobileHeight();
         _this.autoScrollOffset = _this.$hero.height();
       });
       this.$button.on('click', this.autoScroll.bind(this));
     }
   }, {
     key: 'heroMobileHeight',
     value: function heroMobileHeight() {
       if (api.external.defineMobileBrowser.isNativeAndroid()) {
         this.$hero.height($window.height() - 165);
       } else if (api.external.defineMobileBrowser.isIPad() || api.external.defineMobileBrowser.isIPhone() || api.external.defineMobileBrowser.isChrome()) {
         this.$hero.height($window.height() - 115);
       }
     }
   }]);

   return Button;
 }();
