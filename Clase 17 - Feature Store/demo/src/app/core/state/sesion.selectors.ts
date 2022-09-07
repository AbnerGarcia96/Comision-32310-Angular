import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSesion from './sesion.reducer';

export const selectSesionState = createFeatureSelector<fromSesion.SesionState>(
  fromSesion.sesionFeatureKey
);

export const selectSesionActivaState = createSelector(
  selectSesionState,
  (state: fromSesion.SesionState) => state.sesionActiva
);

export const selectUsuarioActivoState = createSelector(
  selectSesionState,
  (state: fromSesion.SesionState) => state.usuarioActivo
);

export const selectUsuarioAdminState = createSelector(
  selectSesionState,
  (state: fromSesion.SesionState) => state.usuarioActivo?.admin
);
