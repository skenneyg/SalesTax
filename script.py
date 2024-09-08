price = float(input("Please enter the price of the item. "))
salesTax = float(input("Please enter the sales tax as a whole number. "))

taxDecimal = salesTax / 100

price += (price * taxDecimal)

print(price)