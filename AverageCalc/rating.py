def calculate_average(num1 = 0, num2 = 0, num3 = 0):
    return (num1 + num2 + num3) / 3
def main():
    try:
        num1 = float(input("Enter the first number: ") or 0)
        num2 = float(input("Enter the second number: ") or 0)
        num3 = float(input("Enter the third number: ") or 0)
        average = calculate_average(num1, num2, num3)
        print(f"The average of the three numbers is: {average}")
    except ValueError:
        print("Please enter valid numbers.")

main()