import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import type { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { createReduxStore } from "@/app/providers/StoreProvider/config/store";

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState, asyncReducers } = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>
	);

	return <Provider store={store}>{children}</Provider>;
};
