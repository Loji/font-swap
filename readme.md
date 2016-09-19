# jQuery Font Animation

> Plugin to animate rapid fonts changes. Inspired by https://www.youtube.com/watch?v=p5_WkM7S5U0

## Getting Started
 
Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/loji/jquery-jquery-font-swap/master/dist/jquery.jquery-font-swap.min.js
[max]: https://raw.githubusercontent.com/loji/jquery-jquery-font-swap/master/dist/jquery.jquery-font-swap.js

In your web page:

```html
<div class="text"></div>
<script src="jquery.js"></script>
<script src="dist/jquery.font-swap.min.js"></script>
<script>
  jQuery(function ($) {
    $('.swap-fonts').fontSwap({
      fonts: [
        {
          fontFamily: "Impact"
        }, {
          fontFamily: "Comic Sans MS",
          fontWeight: '700',
        }
      ]
      }); 
    });
</script>
```


## License

MIT © Jakub Lechocki
