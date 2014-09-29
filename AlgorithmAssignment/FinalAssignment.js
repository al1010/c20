 <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script>
        var $letters = [sentencePrint];
    //found this bit on site point alphabetical sorting
          sort = (function() {
              var x = a.toLowerCase(), y = b.toLowerCase();
              return x < y ? -1 : x > y ? 1 : 0;
          });
              
        $('li').removeClass('.sort');

        var m = [sentencePrint]
 
        $mth = $('.letter:eq(' + m + ')')
          .addClass('.sort')
          .fadeIn();

        $sort = $('.letter:eq(' + ')')
          .addClass('.sort')
          .fadeIn();
 
        $mth.before($sort);
        $('.letter:eq(' + sort + ')').before($mth);
 
        if (m > 0) {
          setTimeout(shuffle, 200, m - 1);
        } else {
          $('li').removeClass('sort');
        };
 
      $('button').on('click', function() {
        sort($(".letter").length - 1);
      });

      var sentencePrint = function(){for (i = 0, len = sentence.length, text = "the quick brown fox jumps over the lazy dog"; i < len; i++) { 
              text += sentence[i] + "<br>";
          }
        };
 
      //function sort() {
        //this.letters = "the quick brown fox jumps over the lazy dog"
        //var sentence = this;
 
        //$.each(this.letters, function() {
          //$.each(theDeck.ranks, function(index, rank) {
            //var card = new Card(suit, rank);
            //$('.letter').append(letter.toHTML());
          //});
        //});
 
      //var sentence = new sentence();

    </script>