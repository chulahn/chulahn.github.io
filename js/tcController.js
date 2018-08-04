
angular.module('app', ['mwl.calendar'])

	.controller('dataController', ['$scope', function($scope) {

		$scope.calendarView = 'month';
		$scope.calendarDay =  new Date();
		$scope.tester = 'Is the Controller connecting';
		$scope.events = [
		   {
		    title: 'My event title', // The title of the event
		    type: 'info', 
		    startsAt: new Date(2018,8,15,6),
		    endsAt: new Date(2018,8,15,7), 
		    editable: false,
		    deletable: false,
		    incrementsBadgeTotal: true,
		    price: 5
		   },
		   {
		    title: 'My event title2', // The title of the event
		    type: 'info', 
		    startsAt: new Date(2018,8,15,8),
		    endsAt: new Date(2018,8,15,9), 
		    editable: false,
		    deletable: false,
		    incrementsBadgeTotal: true,
		    price: 10.50
		   }
		];
		$scope.cellModifier = function(cell) {
			// console.log(cell.events);

			if (cell.events.length > 0) {
				console.log(cell)
				console.log(cell.events);

				var sum = 0;

				for (var i=0; i<cell.events.length; i++) {
					sum += cell.events[i].price;
				}
				cell.label = "$" + sum + " | " + cell.label
			}
		}
	}]);
