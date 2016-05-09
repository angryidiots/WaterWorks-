Template.orderNow.events({

	"submit .form-orderNow": function(event){
		var mobileNo = event.target.mobileNo.value;
		var quantity = event.target.quantity.value;
		var locality = event.target.locality.value;
		var address = event.target.address.value;
		var deliveryDay = event.target.deliveryDay.value;
		var deliveryTime = event.target.deliveryTime.value;

		console.log("Submitted");

		Orders.insert({
			mobileNo:mobileNo,
			quantity:quantity,
			locality:locality,
			address:address,
			deliveryDay:deliveryDay,
			deliveryTime:deliveryTime,
			userId:Meteor.userId(),
			userName:"",
			createdAt: new Date()
		});

		event.target.mobileNo.value = "";
		event.target.quantity.value = "";
		event.target.locality.value = "";
		event.target.address.value = "";
		event.target.deliveryDay.value = "";
		event.target.deliveryTime.value = "";

		FlashMessage.sendSuccess("Order Submitted Successfully");
		Router.go('/home');

		return false;
	}
});