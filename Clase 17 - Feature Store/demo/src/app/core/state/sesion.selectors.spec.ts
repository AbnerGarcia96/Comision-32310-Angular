import * as fromSesion from './sesion.reducer';
import { selectSesionState } from './sesion.selectors';

describe('Sesion Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSesionState({
      [fromSesion.sesionFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
