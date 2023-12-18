export function toDollarFormat(num: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
}