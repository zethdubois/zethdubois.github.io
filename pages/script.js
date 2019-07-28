(function () {
	"use strict";

	var slider,lBtn,rBtn,numSlides,slides,beads;
	var cur = 0;

	function init () {
		slider = $id("slider");
		lBtn = $id("prev-btn");
		rBtn = $id("next-btn");
		slides = slider.getElementsByTagName('ul')[0];
		beads = slider.getElementsByTagName('ul')[1];
		numSlides = slides.getElementsByTagName('li').length;

		for (var i = 0; i < numSlides; i++) {
			var temp = document.createElement('li');
			var tempBtn = document.createElement('button');
			beads.appendChild(temp);
			beads.appendChild(document.createTextNode("\n"));
			temp.appendChild(tempBtn);
			//temp.className = "bead";
			(function (j) {
				tempBtn.addEventListener("click",function(){
					cur = j;
					update();
					console.log("poo"+j);
				},false);
			})(i);
			
		}
		rBtn.addEventListener("click",next,false);
		lBtn.addEventListener("click",prev,false);
		update();
	}

	function $id(val) {
		return document.getElementById(val);
	}

	function next() {
		cur = cur + 1;
		update();
	}

	function prev() {
		cur = cur - 1;
		update();
	}

	function update() {
		if (cur >= numSlides) {
			cur = 0;
		}
		if (cur < 0) {
			cur = numSlides-1;
		}
		for (var i = 0; i < numSlides; i++) {
			if (cur == i) {
				slides.getElementsByTagName('li')[i].className = "active-slide";
			}
			else if (cur == (i+1)) {
				slides.getElementsByTagName('li')[i].className = "prev-slide";
			}
			else if (cur == (i-1)) {
				slides.getElementsByTagName('li')[i].className = "next-slide";
			}
			else {
				slides.getElementsByTagName('li')[i].className = "";
			}

			/*switch (cur) {
				case i:
					break;
				case (i - 1):
					break;
				case (i + 1):
			}*/

			if (cur == i) {
				beads.getElementsByTagName('li')[i].className = "active";
			}
			else {
				beads.getElementsByTagName('li')[i].className = "";
			}
		}
		if (cur == (numSlides - 1)) {
			slides.getElementsByTagName('li')[0].className = "next-slide";
		}

		if (cur == 0) {
			slides.getElementsByTagName('li')[(numSlides - 1)].className = "prev-slide";
		}
		console.log(cur);
	}

	document.addEventListener("DOMContentLoaded", init, false);
})();