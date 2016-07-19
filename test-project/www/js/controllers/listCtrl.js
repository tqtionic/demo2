
app.controller('ListCtrl', function ($http,$scope) {
    $scope.notes = [
        {
            title: 'First note',
            desc: 'this is my first note'
        },
        {
            title: 'Second note',
            desc: 'this is my second note'
        },
        {
            title: 'Third note',
            desc: 'this is my third note'
        },
        {
            title: 'Four note',
            desc: 'this is my four note'
        }
    ]
});
