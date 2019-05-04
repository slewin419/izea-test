import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['page', 'size'],
    size: 10,
    page: 1
});
