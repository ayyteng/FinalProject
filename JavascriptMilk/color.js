//BY PROFESSOR JOSHUA CLAYTON//
//thought it was the perfect moment to use this//


      const background = document.querySelector('body');

      randomColor = () => {
        let randomNumber = Math.floor(Math.random() * 360);
        background.style.backgroundColor = "hsl(" + randomNumber + ", 100%, 50%)";
      }

      window.addEventListener('load', randomColor);

      let hueBrowserRatio;
      let lightnessBrowserRatio;

      function colorScale() {
        let browserWidth = window.innerWidth;
        let browserHeight = window.innerHeight;


        hueBrowserRatio = browserWidth / 360;
        lightnessBrowserRatio = browserHeight / 100;

      }

      function getPosition(event) {
        let xPos = event.clientX;
        let yPos = event.clientY;
        updateColor(xPos, yPos);
      }

      function updateColor(xPos, yPos) {
        // map hue to mouse position relative to browser width
        let hue = Math.ceil(xPos / hueBrowserRatio);
        // map lightness to mouse position relative to browser height
        let lightness = 100 - Math.ceil(yPos / lightnessBrowserRatio);
        // apply hue, saturation, and lightness of background color
        document.getElementById("row2").style.backgroundColor = "hsl(" + hue + ", 100%, " + lightness + "%)";
      }

      // update scale when the page loads
      window.addEventListener('load', colorScale);

      // update scale when the window is resized
      window.addEventListener('resize', colorScale);

      // detect cursor movements
      window.addEventListener('mousemove', getPosition);
