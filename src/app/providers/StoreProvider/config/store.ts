import type { ReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { $api } from "@/shared/api/api.ts";
import { rtkApi } from "@/shared/api/rtkApi.ts";
import type { StateSchema, ThunkExtraArg } from "./StateSchema";

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: rootReducers,
		devTools: true,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}).concat(rtkApi.middleware),
	});

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
