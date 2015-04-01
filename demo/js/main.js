$(function() {


  $('.polyshift').each(function() {

    var duration = 3000; //ms
    var points = $(this).find($('polygon')[0]).attr('points').trim().split(' ').length;


    var arr1 = [],
        arr2 = [],
        arr3 = [];

    $(this).find('svg:last-child').hide();

    $(this).find('svg').each(function() {
      $(this).find('polygon').each(function(k, v) {
        arr1.push(v);
      });
    });

    arr2 = arr1.slice(0, points);
    arr3 = arr1.slice(points, points * 2);

    var anim;

    $(this).find('polygon').each(function(k, v) {
      var oldPts = $(arr2[k]).attr('points'),
          newPts = $(arr3[k]).attr('points'),
          animPts = '<animate attributeType="XML" attributeName="points" from="'+ oldPts +'" to="'+ newPts +'" dur="'+duration+'ms" repeatCount="infinite" />',
          oldFill = $(arr2[k]).attr('fill'),
          newFill = $(arr3[k]).attr('fill'),
          animFill = '<animate attributeType="XML" attributeName="fill" from="'+ oldFill +'" to="'+ newFill +'" dur="'+duration+'ms" repeatCount="infinite" />',
          oldStroke = $(arr2[k]).attr('stroke'),
          newStroke = $(arr3[k]).attr('stroke'),
          animStroke = '<animate attributeType="XML" attributeName="stroke" from="'+ oldStroke +'" to="'+ newStroke +'" dur="'+duration+'ms" repeatCount="infinite" />',
          oldStrokeWidth = $(arr2[k]).attr('stroke-width'),
          newStrokeWidth = $(arr3[k]).attr('stroke-width'),
          animStrokeWidth = '<animate attributeType="XML" attributeName="stroke-width" from="'+ oldStrokeWidth +'" to="'+ newStrokeWidth +'" dur="'+duration+'ms" repeatCount="infinite" />';

      var animations = function() {
        var animArr = [];

        if(oldPts) {
          animArr.push(animPts);
        }

        if(oldFill) {
          animArr.push(animFill);
        }

        if(oldStroke || newStroke) {
          if(oldStroke == undefined) {
            oldStroke = 'none';
            animStroke = '<animate attributeType="XML" attributeName="stroke" from="'+ oldStroke +'" to="'+ newStroke +'" dur="'+duration+'ms" repeatCount="infinite" />';
          }
          if(newStroke == undefined) {
            newStroke = 'none';
            animStroke = '<animate attributeType="XML" attributeName="stroke" from="'+ oldStroke +'" to="'+ newStroke +'" dur="'+duration+'ms" repeatCount="infinite" />';
          }
          animArr.push(animStroke);
        }

        if(oldStrokeWidth || newStrokeWidth) {
          // if(oldStrokeWidth == undefined) {
          //   oldStrokeWidth = '0';
          //   animStrokeWidth = '<animate attributeType="XML" attributeName="stroke" from="'+ oldStrokeWidth +'" to="'+ newStrokeWidth +'" dur="'+duration+'ms" repeatCount="infinite" />';
          // }
          // if(newStrokeWidth == undefined) {
          //   newStrokeWidth = '0';
          //   animStrokeWidth = '<animate attributeType="XML" attributeName="stroke" from="'+ oldStrokeWidth +'" to="'+ newStrokeWidth +'" dur="'+duration+'ms" repeatCount="infinite" />';
          // }
          animArr.push(animStrokeWidth);
        }

        return animArr.join('');

      }

      $(this).html(animations);

    });

  });


});
