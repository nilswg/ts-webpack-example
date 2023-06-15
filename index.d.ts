declare module '*.jpg' {
    const value: string;
    export default value;
}

declare interface ProductServerResp {
    id: number;
    sn: string;
    name: string;
    price: number;
    tag: string[];
    model: string;
    width: number;
    length: number;
    height: number;
    //... 其他超過10個有關商品的規格資料 (省略) ...
}