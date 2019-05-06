import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['page', 'size'],
    size: 10,
    page: 1,
    next: computed('model.nextPage', function(){
        return this.page + 1;
    }),
    previous: computed('model.previousPage', function(){
       return this.page - 1;
    })
});
