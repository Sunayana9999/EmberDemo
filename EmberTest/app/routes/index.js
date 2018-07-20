import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
			
			teamMembers:[
				{
					"name":"Riff Raff",
					"desig":"Founder",
					"pic":"assets/img/team/riffraff.jpg",
					"info":"As you’re likely aware, every bit of your website or blog needs content development at one point or another.",
				},
				{
					"name":"2 Chainz",
					"desig":"Chief Technology Officer",
					"pic":"assets/img/team/2chainz.jpeg",
					"info":"As you’re likely aware, every bit of your website or blog needs content development at one point or another.",		
				},
				{
					"name":"Nene Leakes",
					"desig":"Director of Markerting",
					"pic":"assets/img/team/nene.jpeg",
					"info":"As you’re likely aware, every bit of your website or blog needs content development at one point or another.",
					
				},
				{
					"name":"Miley Cirus",
					"desig":"Creative Director",
					"pic":"assets/img/team/miley.jpg",
					"info":"As you’re likely aware, every bit of your website or blog needs content development at one point or another.",					
				}
			],
			clients:[{
					"client_name":"Nike", 
					"client_logo":"assets/img/logos/logo-nike.svg"
				},
				{
					"client_name":"Microsoft", 
					"client_logo":"assets/img/logos/logo-ms.svg"
				},
				{
					"client_name":"github", "client_logo":"assets/img/logos/logo-github.svg"
			}],			
		});
	}
});
