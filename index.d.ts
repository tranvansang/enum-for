export declare function getAllEnumKeys<T>(enumType: T): Array<keyof T>;
export declare function getAllEnumValues<T>(enumType: T): Array<T[keyof T]>;
export declare function getAllEnumEntries<T>(enumType: T): Array<[keyof T, T[keyof T]]>;
