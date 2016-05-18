Orders = new Mongo.Collection("orders");

Orders.attachSchema(new SimpleSchema({
	mobileNo: {
        type: String,
        label: "Mobile No",
        optional: false,
        max: 10,
        min: 10
    },
    quantity: {
        type: String,
        label: "quantity",
        optional: false,
	    autoform: {
	      firstOption:"Select quantity...",
	      options: {
	        1: "1",
	        2: "2",
	        3: "3",
	        4: "4",
	        5: "5",
	        6: "6",
	        7: "7",
	        8: "8",
	        9: "9",
	        10: "10"
	      }
	    }
    },
    locality: {
        type: String,
        label: "Locality",
        optional: false,
        autoform: {
	      firstOption:"Select Locality...",
	      options: {
	        Kukatpally: "Kukatpally",
	        KPHBColony: "KPHB Colony"
	      }
	    }
    },
    address: {
        type: String,
        label: "Address",
        optional: false
    },
    deliveryDay: {
        type: String,
        label: "Delivery day",
        optional: false,
        autoform: {
	      firstOption:"Select Delivery day...",
	      options: {
	        Everyday: "Everyday",
	        AlternateDays: "Alternate Days",
	        Monday: "Monday",
	        Tuesday: "Tuesday",
	        Wednesday: "Wednesday",
	        Thursday: "Thursday",
	        Friday: "Friday",
	        Saturday: "Saturday",
	        Sunday: "Sunday"
	      }
	    }
    },
    deliveryTime: {
        type: String,
        label: "Delivery time",
        optional: false,
        autoform: {
	      firstOption:"Select Delivery time...",
	      options: {
	        AM07000800: "07:00-08:00 AM",
	        AM08000900: "08:00-09:00 AM",
	       	AM09001000: "09:00-10:00 AM",
	        AM10001100: "10:00-11:00 AM"
	      }
	    }
    },
    userId: {
        type: String,
        autoValue: function(){return Meteor.userId()},
        autoform: {
	      omit :true
	    }
    },
    createdAt: {
        type: Date,
        autoValue: function (){return new Date()},
        autoform: {
	      omit :true
	    }
    }
}));

SimpleSchema.debug = true;