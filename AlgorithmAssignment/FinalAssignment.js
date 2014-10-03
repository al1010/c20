//place number at end of the table until all have cycled through
    function swap(m) {
        for (var m = 0, count = $('.number').length - 1; m < 0; m++) {
        $('.number');
       };
       $('li').removeClass('sorting');
 
        $mth = $('.number:eq(' + m + ')')
          .addClass('sorting')
          .fadeIn();
        $swap = $('.number:eq(' + m + ')')
          .addClass('sorting')
          .fadeIn();
 
        if (m > 0) {
          setTimeout(shuffle, 200, m - 1);
        } else {
          $('li').removeClass('sorting');
        };
      }
 
      $('button').on('click', function() {
        swap($(".number").length - 1);
      });
 
      function Table() {
        this.first = [1, 2, 3];
        this.second= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var theTable = this;
 
        $.each(this.first, function(index, first) {
          $.each(theTable.second, function(index, second) {
            var number = new Number(first, second);
            $('#table').append(number.toHTML());
          });
        });
      }
 
      function Number(first, second) {
        this.first = first;
        this.second = second;
        this.toHTML = function() {
          return '<li class="number">' + this.first + this.second + '</li>';
        }
      }