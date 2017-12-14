var add,
  charset,
  emoji,
  left,
  width;

charSet = new Array('banana', 'bento', 'birthday_cake', 'bread', 'burrito', 'cake', 'candy', 'cheese', 'cherries', 'chocolate', 'cookie', 'corn', 'curry', 'dango', 'doughnut', 'egg', 'eggplant', 'fish_cake', 'flan', 'fried_shrimp', 'fries', 'grapes', 'green_apple', 'hamburger', 'honey_pot', 'hot_dog', 'ice_cream', 'icecream', 'lemon', 'lollipop', 'meat_on_bone', 'melon', 'oden', 'orange', 'peach', 'pear', 'pepper', 'pineapple', 'pizza', 'popcorn', 'poultry_leg', 'ramen', 'red_apple', 'rice_ball', 'rice_cracker', 'rice', 'shaved_ice', 'spaghetti', 'stew', 'strawberry', 'sushi', 'sweet_potato', 'taco', 'tomato', 'watermelon');

width = $(window).width() - 64;

$('.button').click(function() {
  left = Math.floor(Math.random() * width);
  emoji = charSet[Math.floor(Math.random() * charSet.length)];
  add = '<img class="emoji" style="left: ' + left + 'px;" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/168840/' + emoji + '.svg"/>';
  $(add).appendTo('.container').animate({
    top: $(window).height()
  }, 1600, function() {
    $(this).remove();
  });
});
