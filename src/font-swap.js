/*
 * 
 * 
 *
 * Copyright (c) 2016 Jakub Lechocki
 * Licensed under the MIT license.
 */

!(function($) {
  'use strict';

  var FontSwap = function (el, options) {
    this.el = $(el);
    this.options = $.extend({}, $.fn.fontSwap.defaults, options);
    
    // assign options values to variables
    this.startDelay = this.options.startDelay;
    this.fonts = this.options.fonts;
    this.loop = this.options.loop;
    this.repeatTimes = this.options.repeatTimes;
    this.defaultDuration = this.options.defaultDuration;

    // variable to keep finished iterations if not endless
    this.finishedIterations = 0;

    this.init(); 
  };

  FontSwap.prototype = {
    constructor: FontSwap, 

    init: function() {
      var self = this;

      self.timeout = setTimeout(function() {
        self.swapFonts();
      }, self.startDelay); 
    },
    
    swapFonts: function() {
      if(this.stop) {
        return; 
      }
      
      var self = this,
          i = 0, 
          fontCount = this.fonts.length;

      self.setFont(i, fontCount);
      
    },

    doneIteration: function() {
      var self = this;
      if(++self.finishedIterations <= self.repeatTimes) {
        setTimeout(self.swapFonts.bind(self), self.defaultDuration);
      }
    },

    setFont: function(index, count) {
      var self = this,
          fonts = this.fonts[index],
          css = {};
      
      for(var objectValue in fonts) {
        if(objectValue !== 'duration') {
          css[objectValue] = fonts[objectValue];
        }
      }

      self.el.css(css);

      if(++index < count) {
        setTimeout(
          self.setFont.bind(self, index, count),
          fonts.duration ? fonts.duration : self.defaultDuration
        );  
      } else {
        self.doneIteration();
      }
    },
  };


	$.fn.fontSwap = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('fontSwap'),
				options = typeof option === 'object' && option; 
			if (data) { data.reset(); }
			$this.data('fontSwap', (data = new FontSwap(this, options)));
			if (typeof option === 'string') {
        data[option]();
      }
		});
	};

 
  // define defaults for plugin 
  $.fn.fontSwap.defaults = {
    fonts: [
      {
        fontFamily: '"Courier New", Courier, monospace'	
      },
      {
        fontFamily: '"Lucida Console", Monaco, monospace'
      },
      {
        fontFamily: 'Impact, Charcoal, sans-serif',
      },
      {
        fontFamily: 'Tahoma, Geneva, sans-serif',
      },
    ],
    loop: false, // do not loop animation by default 
    repeatTimes: 2, // specify how many times you want to repeat animation
    startDelay: 0, // delay in ms for starting animation,
    defaultDuration: 350, // default duration to be used if font one is not specified
  };
}(window.jQuery));
