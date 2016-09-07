//headerde search inputunun responsiv olmasi ucun
function headerSearch(){
		var logo = $(".logo").width();
		var browse = $(".browse").width();
		var myCourses = $(".myCourses").width()*1.68;
		var shopping = $(".shopping").width();
		var bell = $(".bell").width();
		var smile = $(".smile").width();

		var windows = $(window).width();
		var total1 = windows - (logo + browse + myCourses + shopping + bell + smile);
		$(".search").width(total1);
		
		$(window).resize(function() {
			var windows = $(window).width();
			var total = windows - (logo + browse + myCourses + shopping + bell + smile);
			$(".search").width(total);
		});
}
headerSearch();