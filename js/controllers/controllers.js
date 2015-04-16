app.controller('RoboticsController', function($scope, FrameworkAJAX){
    FrameworkAJAX.sendRequest( {url: 'data/robotics.json', method: 'GET'}, function(data){
        $scope.Model = data;   
    });
});

app.controller('GraphicsController', function($scope, FrameworkAJAX){
    FrameworkAJAX.sendRequest( {url: 'data/graphics.json', method: 'GET'}, function(data){
        $scope.Model = data;   
    });
});

app.controller('UMichController', function($scope, FrameworkAJAX){
    FrameworkAJAX.sendRequest( {url: 'data/umich.json', method: 'GET'}, function(data){
        $scope.Model = data;   
    });
});

app.controller('WeddingController', function($scope, FrameworkAJAX){
    
    $scope.showSection = function(section){
        $scope.activeSection = section;
    };
    
    $scope.party = [
        {
            title:      'bryan cable',
            subtitle:   'best man, college friend',
            url:        'bryan.jpg'
        },
        {
            title:      'amy wensley',
            subtitle:   'maid of honor, bride\'s sister',
            url:        'amy.jpg'
        },
        {
            title:      'mark bishop',
            subtitle:   'college friend',
            url:        'mark.jpg'
        },
        {
            title:      'sarah tibble',
            subtitle:   'groom\'s sister',
            url:        'sarah.jpg'
        },
        {
            title:      'jim dinardo',
            subtitle:   'college friend',
            url:        'jim.jpg'
        },
        {
            title:      'laura goben',
            subtitle:   'college friend',
            url:        'laura.jpg'
        },
        {
            title:      'justin gibson',
            subtitle:   'college friend',
            url:        'justin.jpg'
        },
        {
            title:      'analissa forsgren',
            subtitle:   'college friend',
            url:        'analissa.jpg'
        }                    
    ];
    
    $scope.photos = [
        'barn.jpg',
        'farmersMarket.jpg',
        'wedding.jpg'
    ];
    $scope.brightonCoordinate = { latitude: 42.527712, longitude: -83.7789227 };
    $scope.howellCoordinate = { latitude: 42.6074352, longitude: -83.9305836 };
    
    $scope.mapBrighton = { center: $scope.brightonCoordinate, zoom: 13 };

    $scope.mapHowell = { center: $scope.howellCoordinate, zoom: 13 };    
});
    