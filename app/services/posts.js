import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
    host: 'https://jsonplaceholder.typicode.com',
    contentType: 'application/json; charset=utf-8'
});
