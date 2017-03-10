'use strict';
import _ from 'lodash';
import template from './main.hbs';
console.log('template', template({name: 'webpack'}));

console.log(_.isEqual(1, 2));

var obj = {
    field: 111,
    someFn() {
        console.log('someFn');
    }
};

obj.someFn();