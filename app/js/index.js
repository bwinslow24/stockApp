$(function() {


	$("#stock-submit").click(function(){

		var stock = $("#stock").val();
		console.log(stock);

		$("#stock-info").html('STOCK: <span class="stock-quote" data-symbol="' + stock + '"></span>');
		$('.stock-quote').stockQuote();

	})

});