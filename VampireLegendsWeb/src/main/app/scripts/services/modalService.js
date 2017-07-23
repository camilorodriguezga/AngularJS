/**
 * 
 */

'use strict';

angular.module('vampireLegends').service('modalpopup', ['$modal', function($modal){
	 this.modalInstanceLoading = null;
     this.isLoading = false;
	
	this.mostarCargando = function(){
        if (!this.isLoading) {
            this.isLoading = true;
            this.modalInstanceLoading = $modal.open({
                templateUrl: 'views/utils/loadingModal.html',
                controller: function($scope, $modalInstance) {
                },
                backdrop: 'static',
                windowClass: 'loadingModal',
                keyboard: false
            });
        }
	};
	
	this.ocultarCargando = function(){
         if (this.isLoading && this.modalInstanceLoading !== null) {
    		 this.modalInstanceLoading.dismiss('cancel');
             this.isLoading = false;
         }
	};
	
}]);