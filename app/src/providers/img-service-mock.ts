import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import images from './mock-img';

/*
  Generated class for the ImgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImgProvider {

  findAll() {
  	return Promise.resolve(images);
  }

  findbyId(id) {
  	return Promise.resolve(images[id - 1]);
  }

}