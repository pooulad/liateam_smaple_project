export function moneyFormat(i: string) {
  return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
