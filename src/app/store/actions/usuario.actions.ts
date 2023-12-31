import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] Cargar Usuario',
    props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
    '[Usuario] Cargar Usuario Success',
    props<{ usuario: Usuario }>()
);

export const cargarUsuarioFailure = createAction(
    '[Usuario] Cargar Usuario Failure',
    props<{ payload: any }>()
);
