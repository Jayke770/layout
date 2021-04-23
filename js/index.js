$(document).ready(function () {
	setTimeout( () => {
		$(".data").removeClass("animate__animated animate__slideInUp")
		$(".title").removeClass("animate__animated animate__slideInLeft")
	}, 2000)
	$(".menu").click( () =>{
		$(".nav_bar").show()
		$(".nav_bar").addClass("animate__animated animate__slideInRight")

		setTimeout( () => {
			$(".nav_bar").removeClass("animate__animated animate__slideInRight")
		}, 1000)
	})
	$(".cls_nav").click( () => {
		$(".nav_bar").addClass("animate__animated animate__slideOutRight")
		setTimeout( () => {
			$(".nav_bar").hide()
			$(".nav_bar").removeClass("animate__animated animate__slideOutRight")
		}, 1000)
	})
})