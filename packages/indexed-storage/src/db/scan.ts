import { is_supported } from "./supported";
// import { DbDescriptor } from "./descriptor";

export const scan = async (): Promise<ScanResult> => {
    return {
	is_supported: is_supported(),
	available_databases: await indexedDB.databases()
	
    }
}


export type ScanResult = {
    readonly is_supported: boolean;
    readonly available_databases: Array<IDBDatabaseInfo>;
}
