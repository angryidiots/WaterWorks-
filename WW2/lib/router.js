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
});