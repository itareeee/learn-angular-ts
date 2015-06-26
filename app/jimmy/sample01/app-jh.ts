class JHController {
    public first: string;
    last: string;
    displaySection: boolean;

    constructor($scope) {
        this.first = 'Jimmy';
        this.last = 'Hui';
        this.displaySection = true;
    }

    public toggleDisplay() {
        this.displaySection = !this.displaySection;
    }


    public setName(first, last) {
        this.first = first;
        this.last = last;
    }

}

angular.module('jh', [])
    .controller('JHController', JHController);