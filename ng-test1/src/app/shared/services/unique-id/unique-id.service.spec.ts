import { UniqueIdService } from './unique-id';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    generateUniqueIdWithPrefix should generate id when called with prefix`, () => {
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
    should return number of generatedIds when called`, () => {
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
    should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value ${emptyValue}`)
        .toThrow();
    })
  });
});
