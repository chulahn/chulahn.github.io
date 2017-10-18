(function(angular) {
    
        angular.module('app',[])
    
            .controller("dataController", function ($scope) {

                $scope.transactions = [
                    //Initialize with Some Dummy Data.
                    {
                        name:"Supreme Example",
                        price: 120,
                        date: new Date("10/17/17 19:27"),
                        tags: [
                            "hype",
                            "flip"
                        ],
                    },
                    {
                        name:"Kith Example",
                        price: 100,
                        date: new Date("10/17/17 19:28:01"),
                        tags: [
                            "hype",
                            "flip"
                        ],
                    }
                ]

                //Get previous transactions if available.
                var transactionLog = JSON.parse(localStorage.getItem("transactionLog"));
                
                if (transactionLog && transactionLog.habits.length > 0) {
                    console.log("Using previous transactionLog")
                    console.log(transactionLog)
                    $scope.transactions = transactionLog;
                }

                $scope.displayDate = function(date) {
                    var date = new Date(date);

                    return date.toLocaleDateString() + " " + date.toLocaleTimeString();   
                };

                $scope.addItem = function() {

                    var itemToAdd = {};
                    itemToAdd.name = $scope.name;
                    itemToAdd.price = $scope.price;
                    itemToAdd.date = new Date();
                    itemToAdd.tags = [];
                    $scope.transactions.push(itemToAdd);
                    console.log($scope.transactions);

                    localStorage.setItem("transactionLog", JSON.stringify($scope.transactions));
                    
                }

                $scope.deleteItem = function(item) {
                    // console.log("Delete item");
                    var indexToRemove = $scope.transactions.indexOf(item);
                    $scope.transactions.splice(indexToRemove,1);

                    // console.log($scope.transactions);
                }

                $scope.pomodoros = [
                    {name: "Pray", count: 1},
                    {name: "Work", count: 2}
                ];
    
    
                $scope.resellLog = [
                    {
                        name: "Red Nas Tee",
                        retail: 33,
                        sold: 360
                    },
                    {
                        name: "100 Bill Pendant",
                        retail: 330,
                        sold: 0
                    }
                ]
    
                $scope.resetResellLog = function() {
                    $scope.resellLog = [
                        {
                            name: "Red Nas Tee",
                            retail: 33,
                            sold: 360
                        },
                        {
                            name: "100 Bill Pendant",
                            retail: 330,
                            sold: 0
                        }
                    ]
    
                    localStorage.setItem("resellLog", JSON.stringify($scope.resellLog));                
                }
    
                $scope.getPaid = function() {
                    var total = 0;
                    for (var i=0; i<$scope.resellLog.length; i++) {
                        var product = $scope.resellLog[i];
                        total += parseInt(product.retail);
                    }
                    return total;
                }
    
                $scope.getSold = function () {
                    var total = 0;
                    for (var i=0; i<$scope.resellLog.length; i++) {
                        var product = $scope.resellLog[i];
                        total += parseInt(product.sold) ;
                    }
                    return total;
                }
    
                // $scope.addItem = function() {
                //     var itemName = $("#itemName").val();
                //     var itemRetail = $("#itemRetail").val();
                //     var itemSold = $("#itemSold").val();
                    
                //     console.log(1)
                //     $scope.resellLog.push( {
                //         name: itemName,
                //         retail: itemRetail,
                //         sold: itemSold
                //     });
    
                //     localStorage.setItem("resellLog", JSON.stringify($scope.resellLog));
                //     console.log("Set localStorage");
                //     console.log(JSON.parse(localStorage.getItem("resellLog")));
                // }
    
                $scope.removeItem = function(item) {
                    var index = $scope.resellLog.indexOf(item);
                    $scope.resellLog.splice(index, 1);
    
                    localStorage.setItem("resellLog", JSON.stringify($scope.resellLog));                
                }
    
                var resellLog = JSON.parse(localStorage.getItem("resellLog"));
                
                if (resellLog && resellLog.length > 0) {
                    //console.log("Using previous resellLog")
                    $scope.resellLog = resellLog;
                }
    
                $scope.calculateResell = function() {
                    var purchasePrice = $scope.purchase;
                    //eBay 10% + Paypal 4% 
                    purchasePrice = purchasePrice / (1-.1-.04);
                    //console.log(purchasePrice)
                    var shippingPrice = $scope.shipping;
    
                    if (shippingPrice) {
                        purchasePrice = purchasePrice + shippingPrice;
                    }
    
                    return purchasePrice;
    
                }
    
    
                $scope.habitLog = { 
                    habits: [{
                        date: new Date(1432811030 * 1000),
                        message: 'Some text 01'
                    },
                    {
                        date: new Date(1432731600 * 1000),
                        message: 'Some text 02'
                    },
                    {
                        date: new Date(1432819703 * 1000),
                        message: 'Some text 03'
                    }
                ]};
    
                var habitLog = JSON.parse(localStorage.getItem("habitLog"));
    
                if (habitLog && habitLog.habits.length > 0) {
                    console.log("Using previous habitLog")
                    console.log(habitLog)
                    $scope.habitLog = habitLog;
                }
    
                
    
                $scope.convertTo = function () {
                    $scope.convertedHabitLog = {};
                    angular.copy($scope.habitLog, $scope.convertedHabitLog);
                    var groups = {};
    
                    var habits = $scope.convertedHabitLog.habits;
                    for (var i=0; i <habits.length;i++) {
                        console.log( habits[i])                  
                      
                        var tempDate = new Date(habits[i].date);
    
                        groups[tempDate.toLocaleDateString()] = groups[tempDate.toLocaleDateString()] || [];
                        habits[i].time = tempDate.toLocaleTimeString();
                        habits[i].date = new Date(habits[i].date);
                        console.log(habits[i].date.toLocaleDateString())
                        
                        groups[tempDate.toLocaleDateString()].push(habits[i]);
                    }
                    $scope.convertedHabitLog = groups;
                    console.log($scope.convertedHabitLog)
                };
    
                $scope.convertTo();
    
    
                $scope.addHabit = function() {
                    console.log("added")
                    $scope.habitLog.habits.push( {
                        date: new Date(),
                        message: ""
                    });
                    $scope.convertTo();
    
                    localStorage.setItem("habitLog", JSON.stringify($scope.habitLog));
                    console.log("Set localStorage habitLog");
                    console.log(JSON.parse(localStorage.getItem("habitLog")));
                }
    
    
                //Shows a textarea with the Stringified JSON Object.
                //This string can be saved in a file or emailed so there is a backup of data.
                $scope.exportHabits = function() {
    
                    console.log("Export Habits");
    
                    var habits = JSON.parse(localStorage.getItem("habitLog"));
                    console.log(habits);
    
                    console.log(JSON.stringify(habits));
                    $("#exportTextArea").show();
                    $("#exportTextArea").val(JSON.stringify(habits));
    
                    
                }
    
                //Sets scope.habitLog to the string provided.
                $scope.setHabits = function() {
    
                    console.log("Set Habits");
    
                    var habitLog = JSON.parse($("#exportTextArea").val());
                    $scope.habitLog = habitLog;
                    $scope.convertTo();
                    localStorage.setItem("habitLog", JSON.stringify($scope.habitLog));
    
                } 
    
                
    
    
            });
    })(window.angular);
    