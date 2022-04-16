import { useContext } from "react";
import { MobXProviderContext } from "mobx-react";
import { MainStore } from "../stores/MainStore";

export function useStores(): MainStore {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  return <MainStore>useContext(MobXProviderContext);
}