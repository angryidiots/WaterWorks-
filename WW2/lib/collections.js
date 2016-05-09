Orders = new Mongo.Collection("Orders");

Orders.attachSchema(new SimpleSchema({
	mobileNo: {
        type: Number,
        optional: false
    },
    quantity: {
        type: Number,
        optional: false
    },
    locality: {
        type: String,
        optional: false
    },
    address: {
        type: String,
        optional: false
    },
    deliveryDay: {
        type: String,
        optional: false
    },
    deliveryTime: {
        type: String,
        optional: false
    },
    userId: {
        type: String,
        autoValue: function(){return Meteor.userId()}
    },
    userName: {
        type: String,
        autoValue: function (){return Meteor.users.findOne({_id: this.userId}).username}
    },
    createdAt: {
        type: Date,
        autoValue: function (){return new Date()}
    }
}));