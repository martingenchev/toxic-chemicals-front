import { TestBed, async, inject } from '@angular/core/testing';

import { WarehouseGuard } from './warehouse.guard';

describe('WarehouseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WarehouseGuard]
    });
  });

  it('should ...', inject([WarehouseGuard], (guard: WarehouseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
