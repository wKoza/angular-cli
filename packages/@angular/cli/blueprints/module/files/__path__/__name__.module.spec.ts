/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import <%= classifiedModuleName %>Module from './<%= dasherizedModuleName %>.module';

describe('<%= classifiedModuleName %>Module', () => {

  let <%= camelizedModuleName %>Module: <%= classifiedModuleName %>Module;

  it('should create an instance', () => {
    <%= camelizedModuleName %>Module = new <%= classifiedModuleName %>Module();
    expect(<%= camelizedModuleName %>Module).toBeTruthy();
  })
});
