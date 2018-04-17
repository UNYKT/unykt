import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import vragen from './mock-vraag';

@Injectable()
export class MockVraagProvider {

  findAll() {
  	return Promise.resolve(vragen);
  }

  findbyId(id) {
  	return Promise.resolve(vragen[id - 1]);
  }

}