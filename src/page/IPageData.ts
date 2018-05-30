export interface IPageData {
    name: string;
    marginSettings: IPageMarginData;
}

export interface IPageMarginData {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}