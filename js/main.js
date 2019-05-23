// Back button
$("#back, #left").on("click", function(){
    history.go(-1);
});

// Share screen
$("#share-bt, #close-share").on("click", function(){
    $("#content, #content2").toggleClass("hidden");
    $("#share").toggleClass("hidden");
});

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
