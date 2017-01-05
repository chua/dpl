/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AtestadoService } from './atestado.service';

describe('AtestadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtestadoService]
    });
  });

  it('should ...', inject([AtestadoService], (service: AtestadoService) => {
    expect(service).toBeTruthy();
  }));
});
