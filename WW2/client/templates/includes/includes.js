Template.navbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('home');
    }
});

AutoForm.hooks(form-orderNow, {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Success!');
    Router.go("/yourorders");
  }
});