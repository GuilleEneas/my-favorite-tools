import { createAction, props } from '@ngrx/store';

export const rateTool = createAction('[RateTool] RateTool', props<{ index: number; rating: number }>());
