const Card = function() {
    (function() {
      var elems = document.querySelectorAll("div[data-index]"), len = elems.length, div;
  
      for (let i = 0; i < len; i++) {
        div = elems[i];
        div.onclick = clickAction;
      }
  
      function clickAction(e) {
        let index = e.target.dataset.index, target = document.querySelector("div[data-index=\"" + index + "\"].over-menu");
        resetSelectedElements();
        target.classList.add("selected");
      }
  
      function resetSelectedElements() {
        let targetElements = document.getElementsByClassName("over-menu"), len = targetElements.length, targetElement;
  
        for (let i = 0; i < len; i++) {
          targetElement = targetElements[i];
          targetElement.classList.remove("selected");
        }
      }
    }());
  };

   export default Card
