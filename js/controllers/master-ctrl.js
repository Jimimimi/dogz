/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {

    $scope.ownerData = [
        {name: 'Kostas',
        sex: 'male',
        age:'33'},
        {name: 'Maria',
        sex: 'female',
        age:'45'}
    ];

    $scope.dogsData = [
        {name: 'Mitsos',
        sex: 'male',
        age:'3'},
        {name: 'Azor',
        sex: 'female',
        age:'5'}
    ];
    
    $scope.dogsVax = [
        {vaxine: 'Lyssa',
        date: '15-10-2004',
        notes:'Bad reaction'},
        {vaxine: 'Lyssa2',
        date: '15-10-2006',
        notes:'No problem'}
        
    ];

    $scope.dogsHealth = [
        {illnes: 'Fever',
        date: '02-04-2008',
        notes:'Duration 2 days'},
        {illnes: 'Stomach ache ',
        date: '02-09-2009',
        notes:'Duration 2 days'}
    ]


}