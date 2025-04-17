<!-- Begin comment for older broswers

		var imgArray = new Array(
			'CoupleBike2.jpg',
			'RetiredCouple.jpg',
			'Paraglide.jpg',
			'CoupleBike3.jpg'
		);


		var titleArray = new Array(
			'Couple Biking',
			'Retired Couple',
			'Paragliding',
			'Sunset'
		);
			
		var imgPath = "Images/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
// End comment for older browsers -->