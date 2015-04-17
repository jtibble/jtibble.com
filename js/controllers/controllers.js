app.controller('RoboticsController',
               ['$scope', 'FrameworkAJAX', function($scope, FrameworkAJAX) {
    var request = {url: 'data/robotics.json', method: 'GET'};
    FrameworkAJAX.sendRequest(request, function(data) {
        $scope.Model = data;
    });
}]);

app.controller('GraphicsController',
               ['$scope', 'FrameworkAJAX', function($scope, FrameworkAJAX) {
    var request = {url: 'data/graphics.json', method: 'GET'};
    FrameworkAJAX.sendRequest(request, function(data) {
        $scope.Model = data;
    });
}]);

app.controller('UMichController',
               ['$scope', 'FrameworkAJAX', function($scope, FrameworkAJAX) {
    var request = {url: 'data/umich.json', method: 'GET'};
    FrameworkAJAX.sendRequest(request, function(data) {
        $scope.Model = data;
    });
}]);

app.controller('WeddingController',
               ['$scope', 'FrameworkAJAX', function($scope, FrameworkAJAX) {
    
    $scope.showSection = function(section) {
        $scope.activeSection = section;
    };
    
    var request = {url: 'data/party.json', method: 'GET'};
    
    FrameworkAJAX.sendRequest(request, function(data) {
        $scope.party = data;
    });
    
    $scope.photos = [
        'barn.jpg',
        'farmersMarket.jpg',
        'wedding.jpg'
    ];
    
    $scope.brightonCoordinate = {
        latitude: 42.527712,
        longitude: -83.7789227
    };
    
    $scope.howellCoordinate = {
        latitude: 42.6074352,
        longitude: -83.9305836
    };
    
    $scope.mapBrighton = {
        center: $scope.brightonCoordinate,
        zoom: 13
    };

    $scope.mapHowell = {
        center: $scope.howellCoordinate,
        zoom: 13
    };
}]);
