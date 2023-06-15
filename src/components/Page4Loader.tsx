const data: ProductServerResp[] = [];
for (var i = 1; i < 15001; i++) {
    data.push({
        id: i,
        sn: 'SP07T2450',
        name: `High Performance VGA Card${i}`,
        price: +((Math.random() * 100).toFixed(0) + '00'),
        tag: ['vga', 'sp series'],
        model: 'SP2021',
        length: +(Math.random() * 100).toFixed(0),
        width: +(Math.random() * 50).toFixed(0),
        height: +(Math.random() * 25).toFixed(0),
    });
}

export const getProducts = async (
    keyword?: string,
    minPrice?: number,
    maxPrice?: number,
): Promise<ProductServerResp[]> => {
    let resp = data;
    if (keyword) resp = resp.filter((d) => d.name.includes(keyword));
    if (minPrice) resp = resp.filter((d) => d.price >= minPrice);
    if (maxPrice) resp = resp.filter((d) => d.price <= maxPrice);
    await new Promise((r) => setTimeout(r, 1000));
    return Promise.resolve(resp);
};
