	document.addEventListener("scroll", (event) => {
		let lastKnownScrollPosition = window.scrollY;
		if (lastKnownScrollPosition > 5 ) {
			document.getElementById("navbar").style.backgroundColor = "#FFF"
			document.getElementById("navbar").style.boxShadow = "0px 10px 20px 0px rgba(0,0,0,0.2)"
			document.getElementById("navbar-brand-custom").style.setProperty("color", "#000", "important")
			let navbarItem = document.querySelectorAll(".navbar-item-custom")

			navbarItem.forEach(function(item){
				item.style.color = "#000"
			})
		} else {
			document.getElementById("navbar").style.backgroundColor = "transparent"
			document.getElementById("navbar-brand-custom").style.setProperty("color", "#FFF", "important")
			document.getElementById("navbar").style.boxShadow = "none"
			let navbarItem = document.querySelectorAll(".navbar-item-custom")

			navbarItem.forEach(function(item){
				item.style.color = "#FFF"
			})
		}
	})