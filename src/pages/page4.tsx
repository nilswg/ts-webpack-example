import * as React from 'react';
import { FC, useEffect, useState } from 'react';

/*
 * 以Ajax從Api Server讀取Product資料陣列，全部資料預估有超過15000筆
 * export const getProducts = async (
 *   keyword?: string,
 *   minPrice?: number,
 *   maxPrice?: number
 * ): Promise<ProductServerResp[]> => { //...省略 };
 */
import { getProducts } from '@/components/Page4Loader';
import { useDebounceFn } from '@/hooks/useDebounce';

export const Page4: FC = () => {
    // 0:data not ready, 1:loading, 2:error
    const [products, setProducts] = useState<number | ProductServerResp[]>(0);
    const [sortKey, setSortKey] = useState('price');
    const [keyword, setKeyword] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [args, setArgs] = useState([keyword, minPrice, maxPrice]);

    // 病症1 因使用 debounce 函式避免多次執行 setProducts
    const [updateProducts, clearTimer] = useDebounceFn(
        () => {
            setProducts(1);
            const [keyword, minPrice, maxPrice] = args;
            getProducts(
                keyword || undefined,
                minPrice === '' || isNaN(+minPrice) ? undefined : +minPrice,
                maxPrice === '' || isNaN(+maxPrice) ? undefined : +maxPrice,
            )
                .then((resp) => {
                    setProducts(resp);
                })
                .catch(() => setProducts(2));
        },
        args,
        200,
    );
    useEffect(() => {
        updateProducts();
        return () => clearTimer();
    }, args);

    // 病症2 應 useMemo 記憶排序後的 products 結果
    const sortedProducts = React.useMemo(
        () => (typeof products == 'number' ? [] : sortProduct(products, sortKey)),
        [products, sortKey],
    );

    const keywordHandler = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value),
        [],
    );
    const minPriceHandler = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setMinPrice(e.target.value),
        [],
    );
    const maxPriceHandler = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(e.target.value),
        [],
    );
    const sortKeyHandler = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => setSortKey(e.target.value),
        [],
    );
    const buttonClickHandler = React.useCallback(
        () => setArgs([keyword, minPrice, maxPrice]),
        [keyword, minPrice, maxPrice],
    );

    return (
        <div>
            <div>
                <span>關鍵字:</span>
                <input type="text" value={keyword} onChange={keywordHandler} />
                <span>價格範圍:</span>
                <input type="number" value={minPrice} onChange={minPriceHandler} />
                <input type="number" value={maxPrice} onChange={maxPriceHandler} />
                <span>排序欄位:</span>
                <select value={sortKey} onChange={sortKeyHandler}>
                    <option value="price">price</option>
                    <option value="id">id</option>
                    <option value="width">width</option>
                    <option value="length">length</option>
                    <option value="height">height</option>
                </select>
                <button onClick={buttonClickHandler}>套用</button>
            </div>
            <div>
                {typeof products == 'number' ? (
                    <div>{getDataStatus(products)}</div>
                ) : (
                    <ProductTable data={sortedProducts} />
                )}
            </div>
        </div>
    );
};

// 病症3 應使用 React.memo 記憶化元件，避免作為子元件被頻繁渲染
export const ProductTable: FC<{ data: ProductServerResp[] }> = React.memo(({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>S/N</th>
                    <th>名稱</th>
                    <th>Model Name</th>
                    <th>價格</th>
                    <th>L</th>
                    <th>W</th>
                    <th>H</th>
                    <th>TAG</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d) => (
                    // 病症 4 對於 map 創建的元素，因添加 key 來提升性能。
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.sn}</td>
                        <td>{d.name}</td>
                        <td>{d.model}</td>
                        <td>{d.price}</td>
                        <td>{d.length}</td>
                        <td>{d.width}</td>
                        <td>{d.height}</td>
                        <td>{d.tag.join(',')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});

const sortProduct = (input: ProductServerResp[], sortKey: string): ProductServerResp[] => {
    return input.sort((a, b) => b[sortKey] - a[sortKey]);
};

const getDataStatus = (code: number) => {
    switch (code) {
        case 0:
            return '尚未讀取資料';
        case 1:
            return '資料讀取中...';
        case 2:
            return '資料讀取失敗';
    }
};
