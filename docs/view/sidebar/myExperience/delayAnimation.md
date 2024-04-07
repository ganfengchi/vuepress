# 自定义css变量延时控制动画

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>delay animation</title>
    <style>
      .ball {
        --delay: 0s;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: red;
        margin: 50px 0;
        animation: move 1s var(--delay) linear forwards paused;
      }

      @keyframes move {
        50% {
          transform:translate(100px) scale(1.5);
        }
        100% {
          transform: translate(200px) scale(1);
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="ball"></div>
      <input type="range" min="0" max="1" step="0.01" />
    </div>

    <script>
      const ball = document.querySelector(".ball");
      const inp = document.querySelector("input");
      const call=  () =>{
        ball.style.setProperty("--delay", `-${inp.value}s`);
      };
      inp.oninput = call
      call()
    </script>
  </body>
</html>

```