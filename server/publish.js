Meteor.publish ('publicLists', function(){
	return Lists.find({userId: {$exists:false}});


});
 Meteor.publish ('privateLists', function (){
if (this.userId){
	return Lists.find ({userId: this.userID});
} else {

	this.ready();
}
 });


Meteor.publish('attendees-list', function(listId) {
  check(listId, String);

  return attendees-list.find({listId: listId});
}, {
  url: "https://api.meetup.com/2/events?&sign=true&photo-host=public&group_urlname=http://www.meetup.com/Meteor-Berlin/&page=20"
});

JsonRoutes.setResponseHeaders({
  "Cache-Control": "no-store",
  "Pragma": "no-cache",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
});