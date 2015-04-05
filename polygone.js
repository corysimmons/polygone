// Polygone v0.0.1 - https://github.com/corysimmons/polygone

$(function() {

  var polygone = function() {

    $('.polygone').each(function() {

      var duration = 3000,
          points = $(this).find($('polygon')[0]).attr('points').trim().split(' ').length;
          arr1 = [],
          arr2 = [],
          arr3 = [];

      $(this).find('svg:last-child').hide();

      $(this).find('svg').each(function() {
        $(this).find('polygon').each(function(k, v) {
          arr1.push(v);
        });
      });

      arr2 = arr1.slice(0, (arr1.length / 2));
      arr3 = arr1.slice((arr1.length / 2), arr1.length);

      $(this).find('svg:first-child polygon').each(function(k) {

        var polygon = $(this),
            attrArr = [];

        var animateAttribute = function(attribute) {

          // If no stroke then stroke-width=0
          if(attribute == 'stroke') {
            if(!$(arr2[k]).attr('stroke')) {
              $(arr2[k]).attr('stroke-width', 0);
            }
          }
          if(attribute == 'stroke') {
            if(!$(arr3[k]).attr('stroke')) {
              $(arr3[k]).attr('stroke-width', 0);
            }
          }

          // If stroke but no stroke-width then stroke-width=1
          if(attribute == 'stroke') {
            if($(arr2[k]).attr('stroke') && !$(arr3[k]).attr('stroke-width')) {
              $(arr2[k]).attr('stroke-width', 1);
            }
          }
          if(attribute == 'stroke') {
            if($(arr3[k]).attr('stroke') && !$(arr3[k]).attr('stroke-width')) {
              $(arr3[k]).attr('stroke-width', 1);
            }
          }

          // If fill=none then fill=transparent
          if(attribute == 'fill') {
            if($(arr2[k]).attr('fill') == 'none') {
              $(arr2[k]).attr('fill', 'transparent');
            }
          }
          if(attribute == 'fill') {
            if($(arr3[k]).attr('fill') == 'none') {
              $(arr3[k]).attr('fill', 'transparent');
            }
          }

          var oldAttr = $(arr2[k]).attr(attribute),
              newAttr = $(arr3[k]).attr(attribute),
              animateTag = '<animate attributeType="XML" attributeName="'+ attribute +'" from="'+ oldAttr +'" to="'+ newAttr +'" dur="'+ duration +'ms" fill="freeze" />';
          attrArr.push(animateTag);
        };

        animateAttribute('points');
        animateAttribute('fill');
        animateAttribute('stroke');
        animateAttribute('stroke-width');
        animateAttribute('stroke-miterlimit');

        $(this).html(attrArr.join(''));

      });

    });

  };

  polygone();

});
