/*
Напишите и типизируйте функцию,
рассчитывающую стоимость с учетом скидки и рассрочки
на заданное количество месяцев:
*/


interface IArgs {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({price, discount, isInstallment, months}: IArgs): number => {
    const priceAfterDiscount = discount !== 0 ? price - price * (discount / 100) : price
    if (isInstallment) {
        return priceAfterDiscount / months
    }
    return priceAfterDiscount
};

const price = totalPrice({price: 100000, discount: 25, isInstallment: true, months: 12})
console.log(price) // 6250
