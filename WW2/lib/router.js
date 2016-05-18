Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
	this.route('home', {
		path:'/',
		template:'home'
	});
	this.route('orderNow', {
		path:'/orderNow',
		template:'orderNow'
	});
	this.route('features', {
		path:'/features',
		template:'features'
	});
	this.route('aboutus', {
		path:'/aboutus',
		template:'aboutus'
	});
	this.route('yourorders', {
		path:'/yourorders',
		template:'yourorders'
	});
	
});