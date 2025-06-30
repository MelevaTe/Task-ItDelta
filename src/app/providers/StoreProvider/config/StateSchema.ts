import type { AxiosInstance } from "axios";
import type { rtkApi } from "@/shared/api/rtkApi.ts";

export interface StateSchema {
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
